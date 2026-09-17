// lib/bewertungen.ts — Bewertungen für /erfahrungen und den Kundenstimmen-Block der Startseite.
//
// Jede Bewertung steht im Wortlaut; Google-Rezensionen mit Profil-Link. Durchschnitt und
// Verteilung werden aus den Einträgen gerechnet, nie von Hand gesetzt. Kein Review-/AggregateRating-JSON-LD
// (scripts/check-jsonld.mjs lehnt es ab, Google-Richtlinie zu Eigenbewertungen).
//
// Übernommen am 17.09.2026 aus Google Maps (Profile München und Hamburg) und Trustpilot.
// Nachnamen auf den Anfangsbuchstaben gekürzt. Neue Rezensionen: Eintrag ergänzen,
// STAND anpassen, Startseiten-Block prüft sich über googleSchnitt() selbst.
//
// Rückmeldungen, die Primundus auf anderem Weg direkt erhalten hat (120, Oktober 2024 bis
// September 2026): lib/bewertungen-direkt.ts.
//
// Direkt abgegebene Bewertungen kommen aus dem Kostenrechner-Backend (CAapp, project 3,
// /api/bewertungen). Solange es nicht live ist, bleibt BEWERTUNGEN_ONLINE false:
// Die Seite zeigt dann nur die Einträge unten, das Formular verweist auf Google.

import { DIREKT_ERHALTEN } from './bewertungen-direkt'

export const STAND = { iso: '2026-09-17', sichtbar: '17. September 2026' }

export const BEWERTUNG_API = 'https://kostenrechner.primundus.de/api/bewertungen'
export const BEWERTUNGEN_ONLINE = false
/** Cloudflare Turnstile, öffentlicher Site-Key. Leer = ohne Turnstile (Backend prüft dann nicht). */
export const TURNSTILE_SITE_KEY = ''

export type Quelle = 'google' | 'trustpilot' | 'primundus'

export interface Profil {
  id: 'muenchen' | 'hamburg' | 'trustpilot'
  quelle: Exclude<Quelle, 'primundus'>
  name: string
  kurz: string
  adresse?: string
  url: string
  bewertenUrl: string
}

export const PROFILE: Record<Profil['id'], Profil> = {
  muenchen: {
    id: 'muenchen',
    quelle: 'google',
    name: 'Primundus 24-Stunden-Pflege',
    kurz: 'München',
    adresse: 'Landsberger Str. 155, 80687 München',
    url: 'https://maps.google.com/?cid=7905952861784360141',
    bewertenUrl: 'https://g.page/r/Cc3Eo4E9lrdtEBI/review',
  },
  hamburg: {
    id: 'hamburg',
    quelle: 'google',
    name: 'Primundus 24-Stunden-Pflege Hamburg',
    kurz: 'Hamburg',
    adresse: 'Baumwall 7, 20459 Hamburg',
    url: 'https://maps.google.com/?cid=11365818232903297897',
    bewertenUrl: 'https://maps.google.com/?cid=11365818232903297897',
  },
  trustpilot: {
    id: 'trustpilot',
    quelle: 'trustpilot',
    name: 'Primundus 24-Stunden-Pflege',
    kurz: 'Trustpilot',
    url: 'https://de.trustpilot.com/review/primundus.de',
    bewertenUrl: 'https://de.trustpilot.com/evaluate/primundus.de',
  },
}

export interface Bewertung {
  id: string
  quelle: Quelle
  profil?: Profil['id']
  sterne: 1 | 2 | 3 | 4 | 5
  titel?: string
  text?: string
  name: string
  ort?: string
  /** Wie in der Quelle angezeigt, z. B. „September 2026" oder „vor 4 Jahren" (Stand siehe STAND) */
  zeit?: string
  /** Für die Sortierung: ISO-Datum oder Näherung */
  sortierDatum: string
  kundeBestaetigt?: boolean
  antwort?: string
}

// Google und Trustpilot. Reihenfolge: neueste zuerst.
export const BEWERTUNGEN: Bewertung[] = [
  {
    id: 'g-muc-stephanie',
    quelle: 'google',
    profil: 'muenchen',
    sterne: 4,
    text: 'Sofortiger Kontakt bei Fragen und Vermittlung.',
    name: 'Stephanie G.',
    zeit: 'September 2026',
    sortierDatum: '2026-09-13',
  },
  {
    id: 'tp-thomas',
    quelle: 'trustpilot',
    profil: 'trustpilot',
    sterne: 5,
    titel: 'Alles transparent',
    name: 'Thomas',
    zeit: '29. August 2026',
    sortierDatum: '2026-08-29',
  },
  {
    id: 'g-muc-elisa',
    quelle: 'google',
    profil: 'muenchen',
    sterne: 5,
    text:
      'Erstklassiger Service! Seit mehreren Jahren bekommen meine Großeltern Unterstützung im Haushalt durch eine externe Pflegekraft. Leider hatten wir in der Vergangenheit oftmals Probleme mit der Sprache und dem organisatorischen Ablauf.\n\nPrimundus hat einen top Service geliefert und alles verlief reibungslos. Wir können den Service mit besten Gewissen weiter empfehlen und werden auch in Zukunft den sicheren Weg mit Primundus gehen.',
    name: 'Elisa M.',
    zeit: 'vor 4 Jahren',
    sortierDatum: '2022-06-01',
  },
  {
    id: 'g-hh-wagner',
    quelle: 'google',
    profil: 'hamburg',
    sterne: 5,
    text:
      'Ich kann wirklich nur Gutes sagen, da bei Primundus sehr viel Wert darauf gelegt wird, dass die Kunden zufrieden sind und es den Liebsten gut geht. Die Schwiegereltern sind dort jederzeit gut aufgehoben und fühlen sich auch so. Deshalb klare Weiterempfehlung!\nDanke für die tolle Rundumbetreuung.',
    name: 'J. W.',
    zeit: 'vor 4 Jahren',
    sortierDatum: '2022-06-01',
  },
  {
    id: 'g-muc-rl',
    quelle: 'google',
    profil: 'muenchen',
    sterne: 5,
    text:
      'Wir sind sehr zufrieden-wir suchten eine flexible, tolerante und liebevolle Pflegekraft und haben hier zügig eine gefunden. Toll, dass die Abläufe hierbei alle reibungslos funktionieren!',
    name: 'R. L.',
    zeit: 'vor 4 Jahren',
    sortierDatum: '2022-06-01',
  },
  {
    id: 'g-hh-gina',
    quelle: 'google',
    profil: 'hamburg',
    sterne: 5,
    text: 'Einer der Besten Firmen in Hamburg.\nUnsere Oma ist sehr Glücklich.\nAlle sind Super Nett! Können wir nur weiterempfehlen 👍🏻👍🏻👍🏻👍🏻',
    name: 'Ginaaa X.',
    zeit: 'vor 4 Jahren',
    sortierDatum: '2022-06-01',
  },
  {
    id: 'g-muc-marvin',
    quelle: 'google',
    profil: 'muenchen',
    sterne: 5,
    text: 'Super service! Haben uns sehr freundlich und vor allem schnell geholfen. Definitiv empfehlenswert!',
    name: 'Marvin J.',
    zeit: 'vor 4 Jahren',
    sortierDatum: '2022-06-01',
  },
]

/** Martin 17.09.2026: Trustpilot erst zeigen, wenn dort mindestens 5 Bewertungen stehen.
 *  Bis dahin bleiben die Einträge oben gespeichert, erscheinen aber nirgends (Seite, Schnitt,
 *  Startseite). Sobald der fünfte Eintrag ergänzt ist, zeigt sich alles von selbst; nur
 *  public/llms.txt muss dann von Hand nachgezogen werden. */
export const TRUSTPILOT_MINDESTENS = 5
export const TRUSTPILOT_SICHTBAR = BEWERTUNGEN.filter((b) => b.quelle === 'trustpilot').length >= TRUSTPILOT_MINDESTENS

/** Alle Bewertungen mit Sternen (direkt erhalten, Google, ggf. Trustpilot), neueste zuerst */
export function alleBewertungen(zusaetzlich: Bewertung[] = []): Bewertung[] {
  return [...zusaetzlich, ...DIREKT_ERHALTEN, ...BEWERTUNGEN]
    .filter((b) => TRUSTPILOT_SICHTBAR || b.quelle !== 'trustpilot')
    .sort((a, b) => b.sortierDatum.localeCompare(a.sortierDatum))
}

export function nachQuelle(quelle: Quelle, liste: Bewertung[]): Bewertung[] {
  return liste.filter((b) => b.quelle === quelle)
}

// Kundenstimmen ohne Sterne von der früheren Hamburger Website (primundus-hamburg.de,
// Abschnitt „Was unsere Kunden sagen", abgerufen 17.09.2026). Nicht im Durchschnitt.
// VOR DEM LIVEGANG von Martin bestätigen lassen, dass sie echt sind; sonst leeren.
export const KUNDENSTIMMEN_QUELLE = 'https://primundus-hamburg.de/'
export const KUNDENSTIMMEN: { text: string; name: string; ort: string }[] = [
  {
    text: 'Alex, machen Sie weiter so. Es ist ein gutes Gefühl, dass Sie bei meinen Eltern auch persönlich vorbeischauen. Die freuen sich immer. Das nächste Mal trinken wir zusammen ein Käffchen.',
    name: 'Uwe R.',
    ort: 'Seevetal',
  },
  {
    text: 'Anna ist ein Engel. Unsere Mutter lebt richtig auf und nimmt wieder aktiv am Leben Teil. Sehr positive Entwicklung für die wir dankbar sind.',
    name: 'Stefanie N.',
    ort: 'Pinneberg',
  },
  {
    text: 'Professionelle und schnelle Abwicklung. Danke an das Team auch bei der Unterstützung des richtigen Personals.',
    name: 'Wolfgang M.',
    ort: 'Hamburg',
  },
  { text: 'Sehr schnelle und professionelle Hilfe. Danke.', name: 'Werona O.', ort: 'Schwarzenbek' },
]

// ── Rechnen ────────────────────────────────────────────────────────────────

export function schnitt(liste: { sterne: number }[]): number {
  if (!liste.length) return 0
  return liste.reduce((s, b) => s + b.sterne, 0) / liste.length
}

/** Wie Google: auf eine Nachkommastelle, deutsches Komma („4,8") */
export function schnittText(wert: number): string {
  return (Math.round(wert * 10) / 10).toFixed(1).replace('.', ',')
}

export function verteilung(liste: { sterne: number }[]): { sterne: number; anzahl: number }[] {
  return [5, 4, 3, 2, 1].map((s) => ({ sterne: s, anzahl: liste.filter((b) => b.sterne === s).length }))
}

export function vonProfil(id: Profil['id'], liste: Bewertung[] = BEWERTUNGEN): Bewertung[] {
  return liste.filter((b) => b.profil === id)
}

export function googleBewertungen(liste: Bewertung[] = BEWERTUNGEN): Bewertung[] {
  return liste.filter((b) => b.quelle === 'google')
}

/** Für Startseite und Seitenkopf: Schnitt und Anzahl über beide Google-Profile */
export function googleSchnitt() {
  const g = googleBewertungen()
  return { wert: schnitt(g), text: schnittText(schnitt(g)), anzahl: g.length }
}

/** „1 Rezension", „6 Rezensionen" */
export function anzahlText(n: number, einzahl: string, mehrzahl: string): string {
  return `${n} ${n === 1 ? einzahl : mehrzahl}`
}

// Antwort des Backends (GET /api/bewertungen) → gleiche Form wie die festen Einträge
export interface ApiBewertung {
  id: string
  sterne: number
  text: string
  name: string
  ort: string | null
  datum: string
  kunde_bestaetigt: boolean
  antwort: string | null
  antwort_datum: string | null
}

const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

export function datumText(iso: string): string {
  const [j, m, t] = iso.split('-').map(Number)
  if (!j || !m || !t) return ''
  return `${t}. ${MONATE[m - 1]} ${j}`
}

export function ausApi(b: ApiBewertung): Bewertung | null {
  const sterne = Math.round(b.sterne)
  if (sterne < 1 || sterne > 5 || !b.text) return null
  return {
    id: `p-${b.id}`,
    quelle: 'primundus',
    sterne: sterne as Bewertung['sterne'],
    text: b.text,
    name: b.name,
    ort: b.ort ?? undefined,
    zeit: datumText(b.datum),
    sortierDatum: b.datum,
    kundeBestaetigt: b.kunde_bestaetigt,
    antwort: b.antwort ?? undefined,
  }
}

/** Direkt abgegebene Bewertungen laden (nur wenn BEWERTUNGEN_ONLINE). Fehler → leere Liste. */
export async function ladeDirekteBewertungen(): Promise<Bewertung[]> {
  if (!BEWERTUNGEN_ONLINE) return []
  try {
    const res = await fetch(BEWERTUNG_API, { next: { revalidate: 300 } })
    if (!res.ok) return []
    const data = (await res.json()) as { bewertungen?: ApiBewertung[] }
    return (data.bewertungen ?? []).map(ausApi).filter((b): b is Bewertung => b !== null)
  } catch {
    return []
  }
}
