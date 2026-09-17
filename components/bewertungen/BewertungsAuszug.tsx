// Bewertungs-Auszug als Hemmnisnehmer auf allen Seiten (Martin 17.09.2026: „warum zeigen wir
// die Bewertungen nicht überall"). Steht vor dem Kontaktbereich (KontaktBand, 291 Seiten), im
// älteren Kontaktkasten (ArticleCTA, 55 Seiten) und auf der Startseite.
//
// Drei echte Bewertungen, je eine zu den häufigsten Bedenken vor einer 24-Stunden-Betreuung:
//   fremde Person im Haus · was, wenn es nicht passt (4 Sterne, Wechsel) · erreicht man jemanden
// Schnitt und Anzahl wie auf /erfahrungen (Google live, Backend stündlich). Kein Sterne-Markup
// hier: das steht nur auf /erfahrungen, wo alle Bewertungen sichtbar sind.
import { alleBewertungen, anzahlText, ladeDirekteBewertungen, schnitt, schnittText, type Bewertung } from '@/lib/bewertungen'
import { ladeGoogleDaten } from '@/lib/google-bewertungen'
import { Sterne } from './Sterne'

const AUSZUG = ['k-20260814-andrea', 'k-20260624-ralf', 'k-20260208-andrea']
const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

export async function ladeBewertungsStand() {
  const [backend, google] = await Promise.all([ladeDirekteBewertungen(60 * 60), ladeGoogleDaten()])
  const alle = alleBewertungen(google.bewertungen, backend)
  const auszug = AUSZUG.map((id) => alle.find((b) => b.id === id)).filter((b): b is Bewertung => Boolean(b))
  return { schnitt: schnittText(schnitt(alle)), wert: schnitt(alle), anzahl: alle.length, auszug }
}

function monat(b: Bewertung): string {
  const [j, m] = b.sortierDatum.split('-').map(Number)
  return j && m ? `${MONATE[m - 1]} ${j}` : ''
}

function Karte({ b, klein = false }: { b: Bewertung; klein?: boolean }) {
  return (
    <figure className={`h-full bg-white rounded-[20px] ${klein ? 'border border-pm-line p-5' : 'shadow-lift p-6'} flex flex-col`}>
      <div className="flex items-center justify-between gap-3">
        <Sterne wert={b.sterne} groesse={16} label={`${b.sterne} von 5 Sternen`} />
        <span className="text-[13.5px] text-pm-mute whitespace-nowrap">{monat(b)}</span>
      </div>
      <blockquote className={`mt-3 ${klein ? 'text-[15.5px]' : 'text-[16.5px]'} leading-[1.6] text-pm-body flex-1`}>„{b.text}“</blockquote>
      <figcaption className="mt-4 text-[14.5px]">
        <span className="font-semibold text-pm-ink">{b.name}</span>
        {b.ort && <span className="text-pm-mute">, {b.ort}</span>}
      </figcaption>
    </figure>
  )
}

function Kopfzeile({ d, klein = false }: { d: Awaited<ReturnType<typeof ladeBewertungsStand>>; klein?: boolean }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
      <Sterne wert={d.wert} groesse={klein ? 18 : 22} />
      <span className={`${klein ? 'text-[16px]' : 'text-[18px]'} text-pm-body`}>
        <strong className="text-pm-ink">{d.schnitt}</strong> von 5 aus {anzahlText(d.anzahl, 'Bewertung', 'Bewertungen')}
      </span>
    </span>
  )
}

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-ink whitespace-nowrap'

/** band: eigene Fläche vor dem Kontaktbereich · inline: nur Kopfzeile + Karten (Startseite) · kasten: im Kontaktkasten */
export async function BewertungsAuszug({ variante = 'band' }: { variante?: 'band' | 'inline' | 'kasten' }) {
  const d = await ladeBewertungsStand()
  if (!d.auszug.length) return null

  if (variante === 'kasten') {
    // Schnitt und Anzahl stehen im Kasten schon unter Marta (BewertungsZeile), hier nur eine Stimme
    const [erste] = d.auszug
    return (
      <div className="mt-6">
        <Karte b={erste} klein />
      </div>
    )
  }

  const karten = (
    <ul className="grid gap-4 md:grid-cols-3">
      {d.auszug.map((b) => (
        <li key={b.id}>
          <Karte b={b} />
        </li>
      ))}
    </ul>
  )

  if (variante === 'inline') {
    return (
      <div>
        <p className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Kopfzeile d={d} />
          <a href="/erfahrungen" className={`text-[16px] ${LINK}`}>Alle {d.anzahl} Bewertungen lesen →</a>
        </p>
        <div className="mt-6">{karten}</div>
      </div>
    )
  }

  return (
    <aside aria-labelledby="bewertungsauszug-titel" className="bg-pm-shell border-t border-pm-line">
      <div className="max-w-[1200px] mx-auto px-5 py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe">Erfahrungen von Familien</p>
            <p id="bewertungsauszug-titel" className="mt-3">
              <Kopfzeile d={d} />
            </p>
          </div>
          <a href="/erfahrungen" className={`text-[16px] ${LINK}`}>Alle {d.anzahl} Bewertungen lesen →</a>
        </div>
        <div className="mt-8">{karten}</div>
      </div>
    </aside>
  )
}

/** Eine Zeile unter Martas Kontakt (Martin 17.09.2026): Sterne, Schnitt, Anzahl, Link auf /erfahrungen */
export async function BewertungsZeile() {
  const d = await ladeBewertungsStand()
  if (!d.anzahl) return null
  return (
    <a href="/erfahrungen" aria-label={`${d.schnitt} von 5 Sternen aus ${d.anzahl} Bewertungen lesen`} className="group flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14.5px] leading-[1.4] text-pm-body">
      <Sterne wert={d.wert} groesse={16} />
      <span className="whitespace-nowrap">
        <strong className="text-pm-ink">{d.schnitt}</strong> ·{' '}
        <span className="underline decoration-pm-taupe/40 underline-offset-4 group-hover:decoration-pm-ink">
          {anzahlText(d.anzahl, 'Bewertung', 'Bewertungen')} →
        </span>
      </span>
    </a>
  )
}
