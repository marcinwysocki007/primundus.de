// lib/google-bewertungen.ts — Google-Rezensionen automatisch über die Places API (New).
//
// Martin 17.09.2026: neue Google-Rezensionen sollen ohne Handarbeit auf /erfahrungen und
// auf der Startseite erscheinen. Aktiv, sobald auf Render GOOGLE_PLACES_API_KEY gesetzt ist
// (Google Cloud: „Places API (New)" aktivieren, Schlüssel nur für diese API freigeben).
// Ohne Schlüssel oder bei Fehlern gelten die festen Einträge aus lib/bewertungen.ts.
//
// Die Places API liefert je Ort Schnitt, Anzahl und höchstens 5 Rezensionen. Deshalb bleiben
// die festen Einträge als Grundstock; was die API liefert, ersetzt den gleichen festen Eintrag
// (gleicher Text) oder kommt neu dazu. Schnitt und Anzahl je Profil kommen von Google selbst.
// Namensnennung laut Google-Richtlinie: Name wie bei Google, mit Link aufs Google-Profil.
import { BEWERTUNGEN, datumText, gleicherText, schnitt, type Bewertung } from './bewertungen'

export const GOOGLE_ORTE = {
  muenchen: 'ChIJg7c32RF1nkcRzcSjgT2Wt20',
  hamburg: 'ChIJh13EMUWPsUcRaevb0XZ_u50',
} as const
export type GoogleOrt = keyof typeof GOOGLE_ORTE

/** Alle 6 Stunden neu abfragen (2 Abrufe je Lauf) */
const NEU_LADEN_SEKUNDEN = 6 * 60 * 60

export interface GoogleProfilStand {
  schnitt: number
  anzahl: number
  /** true = Zahlen kommen live von Google */
  live: boolean
}

export interface GoogleDaten {
  bewertungen: Bewertung[]
  profile: Record<GoogleOrt, GoogleProfilStand>
  live: boolean
}

interface PlacesRezension {
  name?: string
  rating?: number
  text?: { text?: string }
  originalText?: { text?: string }
  authorAttribution?: { displayName?: string; uri?: string }
  publishTime?: string
}

interface PlacesOrt {
  rating?: number
  userRatingCount?: number
  reviews?: PlacesRezension[]
}

function festeEintraege(ort: GoogleOrt): Bewertung[] {
  return BEWERTUNGEN.filter((b) => b.quelle === 'google' && b.profil === ort)
}

/** Datum in Berlin als YYYY-MM-DD */
function berlinDatum(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d)
}

export function ausPlaces(ort: GoogleOrt, r: PlacesRezension): Bewertung | null {
  const sterne = Math.round(r.rating ?? 0)
  const text = (r.originalText?.text ?? r.text?.text ?? '').trim()
  const name = r.authorAttribution?.displayName?.trim()
  const datum = r.publishTime ? berlinDatum(r.publishTime) : ''
  if (sterne < 1 || sterne > 5 || !name || !datum) return null
  return {
    id: `g-${ort}-${(r.name ?? `${name}-${datum}`).replace(/[^A-Za-z0-9]/g, '').slice(-24)}`,
    quelle: 'google',
    profil: ort,
    sterne: sterne as Bewertung['sterne'],
    text: text || undefined,
    name,
    autorUrl: r.authorAttribution?.uri,
    zeit: datumText(datum),
    sortierDatum: datum,
  }
}

/** Feste Einträge und API-Rezensionen zusammenführen (API gewinnt bei gleichem Text). */
export function zusammenfuehren(fest: Bewertung[], api: Bewertung[]): Bewertung[] {
  const rest = fest.filter((f) => !api.some((a) => gleicherText(a, f)))
  return [...api, ...rest].sort((a, b) => b.sortierDatum.localeCompare(a.sortierDatum))
}

async function ladeOrt(ort: GoogleOrt, schluessel: string): Promise<{ bewertungen: Bewertung[]; stand: GoogleProfilStand }> {
  const fest = festeEintraege(ort)
  const ersatz = { bewertungen: fest, stand: { schnitt: schnitt(fest), anzahl: fest.length, live: false } }
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_ORTE[ort]}?languageCode=de`, {
      headers: { 'X-Goog-Api-Key': schluessel, 'X-Goog-FieldMask': 'rating,userRatingCount,reviews' },
      next: { revalidate: NEU_LADEN_SEKUNDEN },
    })
    if (!res.ok) {
      console.error(`[google-bewertungen] ${ort}: HTTP ${res.status}`)
      return ersatz
    }
    const data = (await res.json()) as PlacesOrt
    const api = (data.reviews ?? []).map((r) => ausPlaces(ort, r)).filter((b): b is Bewertung => b !== null)
    const bewertungen = zusammenfuehren(fest, api)
    return {
      bewertungen,
      stand: {
        schnitt: typeof data.rating === 'number' ? data.rating : schnitt(bewertungen),
        anzahl: typeof data.userRatingCount === 'number' ? Math.max(data.userRatingCount, bewertungen.length) : bewertungen.length,
        live: true,
      },
    }
  } catch (e) {
    console.error(`[google-bewertungen] ${ort}:`, e)
    return ersatz
  }
}

export async function ladeGoogleDaten(): Promise<GoogleDaten> {
  const schluessel = process.env.GOOGLE_PLACES_API_KEY ?? ''
  const orte = Object.keys(GOOGLE_ORTE) as GoogleOrt[]
  if (!schluessel) {
    const profile = Object.fromEntries(
      orte.map((o) => {
        const f = festeEintraege(o)
        return [o, { schnitt: schnitt(f), anzahl: f.length, live: false }]
      }),
    ) as Record<GoogleOrt, GoogleProfilStand>
    return { bewertungen: orte.flatMap(festeEintraege), profile, live: false }
  }
  const ergebnisse = await Promise.all(orte.map((o) => ladeOrt(o, schluessel)))
  return {
    bewertungen: ergebnisse.flatMap((e) => e.bewertungen),
    profile: Object.fromEntries(orte.map((o, i) => [o, ergebnisse[i].stand])) as Record<GoogleOrt, GoogleProfilStand>,
    live: ergebnisse.some((e) => e.stand.live),
  }
}

/** Schnitt über beide Profile, gewichtet nach Anzahl (Startseite) */
export function googleGesamt(d: GoogleDaten): { wert: number; anzahl: number } {
  const werte = Object.values(d.profile)
  const anzahl = werte.reduce((s, p) => s + p.anzahl, 0)
  const wert = anzahl ? werte.reduce((s, p) => s + p.schnitt * p.anzahl, 0) / anzahl : 0
  return { wert, anzahl }
}
