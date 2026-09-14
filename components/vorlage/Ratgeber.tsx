// Vorlage „Ratgeber" im Stil der Partnerseite (/pflegekraefte-fuer-vermittler), 14.09.2026.
//
// Martin: Die Partnerseite wird die Vorlage für alle Seiten, aber Seitenart für
// Seitenart. Jede Seitenart zuerst als Musterseite zeigen und absegnen lassen,
// erst danach auf die übrigen Seiten dieser Art übertragen. Musterseite für die
// Ratgeber: /demenz-pflege-zuhause.
//
// Übernommen von der Partnerseite: Breite 1200 px wie Kopf und Fuß, Überschriften
// in Stärke 800 mit enger Laufweite, Fließtext 18 px, Linien statt Karten, ein
// dunkles Band, weiße Kästen mit weichem Schatten. Keine Symbol-Kacheln.
import Image from 'next/image'
import { Fragment, type ReactNode } from 'react'
import { RECHNER } from '@/components/ArticleCTA'
import { InhaltLeiste } from './InhaltLeiste'

const H2 = 'text-[clamp(27px,3.2vw,38px)] font-extrabold leading-[1.1] tracking-[-0.032em] [text-wrap:balance]'
const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe'
// Sprungmarken landen unter dem festen Kopf (64 px Handy, 121 px ab md)
const SPRUNG = 'scroll-mt-[88px] md:scroll-mt-[150px]'

function Haken() {
  return (
    <span aria-hidden="true" className="mt-[1px] w-[22px] h-[22px] rounded-[7px] bg-pm-coral-tint text-pm-coral flex items-center justify-center flex-none">
      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6.3l2.3 2.2 4.7-5" />
      </svg>
    </span>
  )
}

export function RatgeberKopf({
  pfad,
  augenbraue,
  titel,
  einleitung,
  aktualisiert,
  lesezeit,
  blick,
}: {
  pfad: { label: string; href?: string }[]
  augenbraue: string
  titel: ReactNode
  einleitung: ReactNode
  aktualisiert: string
  lesezeit: string
  blick: string[]
}) {
  return (
    <div className="bg-pm-shell">
      <div className="max-w-[1200px] mx-auto px-5 pt-6 pb-12 md:pt-8 md:pb-16">
        <nav aria-label="Brotkrumen" className="text-[14px] text-pm-mute flex items-center gap-2 flex-wrap">
          {pfad.map((p, i) => (
            <span key={p.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {p.href ? (
                <a href={p.href} className="hover:text-pm-ink transition-colors">{p.label}</a>
              ) : (
                <span className="text-pm-body">{p.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-8 md:mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:items-end">
          <div className="min-w-0">
            <p className={AUGENBRAUE}>{augenbraue}</p>
            <h1 className="mt-4 text-[clamp(34px,4.4vw,50px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-pm-ink [text-wrap:balance]">
              {titel}
            </h1>
            <p className="mt-6 text-[19px] md:text-[20px] leading-[1.6] text-pm-body max-w-[56ch] [text-wrap:pretty]">
              {einleitung}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Image
                src="/images/marta-kapcio.jpg"
                alt="Marta Kapcio"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover object-top flex-none"
              />
              <p className="text-[14px] leading-[1.45] text-pm-mute">
                <a href="/ueber-uns#team" className="font-semibold text-pm-ink hover:text-pm-taupe-ink transition-colors">Marta Kapcio</a>
                , Pflegeberaterin bei Primundus
                <br />
                Aktualisiert am {aktualisiert} · {lesezeit} Lesezeit
              </p>
            </div>
          </div>

          <aside aria-label="Auf einen Blick" className="bg-white rounded-[20px] shadow-lift p-6 md:p-7">
            <p className={AUGENBRAUE}>Auf einen Blick</p>
            <ul className="mt-4 grid gap-3.5">
              {blick.map((b) => (
                <li key={b} className="flex gap-3 text-[16px] leading-[1.5] font-medium text-pm-ink">
                  <Haken />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}

// Text links, rechts Inhaltsverzeichnis und Kostenknopf (beide mitlaufend, erst ab 1024 px).
export function RatgeberRumpf({ abschnitte, children }: { abschnitte: { id: string; title: string }[]; children: ReactNode }) {
  return (
    <div className="max-w-[1200px] mx-auto px-5 pt-12 pb-20 md:pt-16 md:pb-24 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
      <article className="min-w-0 max-w-[46rem]">{children}</article>
      <aside className="hidden lg:block" aria-label="Inhalt und Kosten">
        <div className="sticky top-[152px]">
          <InhaltLeiste abschnitte={abschnitte} />
          <div className="mt-8 bg-white rounded-[20px] shadow-lift p-5">
            <p className="text-[17px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">
              Ihr Preis und passende Betreuungskräfte in 2 Minuten
            </p>
            <a
              href={RECHNER}
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-4 flex items-center justify-center text-center min-h-[48px] px-5 rounded-full bg-pm-coral hover:bg-pm-coral-deep text-white font-semibold text-[15px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
            >
              Kosten &amp; Pflegekräfte ansehen
            </a>
            <p className="mt-3 text-[13.5px] leading-[1.45] text-pm-taupe-ink">Ab 2.200 € im Monat · täglich kündbar</p>
          </div>
        </div>
      </aside>
    </div>
  )
}

export function Abschnitt({ id, titel, children }: { id: string; titel: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className={`${SPRUNG} pt-16 md:pt-20 first:pt-0`}>
      <h2 className={`${H2} text-pm-ink`}>{titel}</h2>
      <div className="mt-6 flex flex-col gap-6">{children}</div>
    </section>
  )
}

// Das eine dunkle Band je Seite (wie das Prozessband der Partnerseite): für den
// Abschnitt, an dem sich die Entscheidung festmacht. Punkte ohne Nummern, weil
// sie keine Reihenfolge haben.
export function DunklerAbschnitt({
  id,
  titel,
  einleitung,
  punkte,
  children,
}: {
  id: string
  titel: ReactNode
  einleitung: ReactNode
  punkte: { title: string; desc: ReactNode }[]
  children?: ReactNode
}) {
  return (
    <section id={id} className={`${SPRUNG} pt-16 md:pt-20`}>
      <div className="-mx-5 md:mx-0 bg-pm-deep md:rounded-[28px] px-5 py-12 md:px-11 md:py-12">
        <h2 className={`${H2} text-pm-deep-ink`}>{titel}</h2>
        <p className="mt-5 text-[18px] leading-[1.7] text-pm-deep-body max-w-[60ch]">{einleitung}</p>
        <div className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {punkte.map((p) => (
            <div key={p.title} className="border-t border-pm-deep-line pt-5">
              <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.02em] text-pm-deep-ink">{p.title}</h3>
              <p className="mt-2 text-[16.5px] leading-[1.65] text-pm-deep-body">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {children && <div className="mt-8 flex flex-col gap-6">{children}</div>}
    </section>
  )
}

export function Text({ children }: { children: ReactNode }) {
  return <p className="text-[18px] leading-[1.7] text-pm-body max-w-[68ch] [text-wrap:pretty]">{children}</p>
}

// Linienliste statt Kartenstapel: Titel links, Text rechts (ab 768 px).
export function Punkte({ punkte }: { punkte: { title: string; desc: ReactNode }[] }) {
  return (
    <div className="border-t border-pm-line">
      {punkte.map((p) => (
        <div key={p.title} className="py-5 border-b border-pm-line md:grid md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
          <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.015em] text-pm-ink">{p.title}</h3>
          <p className="mt-1.5 md:mt-0 text-[17px] leading-[1.65] text-pm-body">{p.desc}</p>
        </div>
      ))}
    </div>
  )
}

export function Liste({ punkte }: { punkte: ReactNode[] }) {
  return (
    <ul className="border-t border-pm-line">
      {punkte.map((p, i) => (
        <li key={i} className="py-4 border-b border-pm-line text-[17px] leading-[1.65] text-pm-body">{p}</li>
      ))}
    </ul>
  )
}

export function Kasten({ titel, children }: { titel?: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-white rounded-[20px] shadow-lift p-6 md:p-8">
      {titel && <p className="text-[19px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">{titel}</p>}
      <div className={titel ? 'mt-5' : ''}>{children}</div>
    </div>
  )
}

export function HakenListe({ punkte, zweispaltig = false }: { punkte: string[]; zweispaltig?: boolean }) {
  return (
    <ul className={`grid gap-3.5 ${zweispaltig ? 'sm:grid-cols-2 sm:gap-x-8' : ''}`}>
      {punkte.map((p) => (
        <li key={p} className="flex gap-3 text-[16.5px] leading-[1.5] text-pm-body">
          <Haken />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  )
}

export function Gegenueber({ seiten }: { seiten: { titel: string; ton: 'gruen' | 'taupe'; text: ReactNode }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {seiten.map((s) => (
        <div key={s.titel} className="bg-white rounded-[20px] shadow-lift p-6">
          <p className={`text-[17px] font-bold leading-[1.3] tracking-[-0.015em] ${s.ton === 'gruen' ? 'text-pm-green' : 'text-pm-taupe-ink'}`}>
            {s.titel}
          </p>
          <p className="mt-3 text-[16.5px] leading-[1.6] text-pm-body">{s.text}</p>
        </div>
      ))}
    </div>
  )
}

export function Tabelle({
  titel,
  kopf,
  zeilen,
  betont,
  fuss,
}: {
  titel: string
  kopf: string[]
  zeilen: string[][]
  betont?: number
  fuss?: ReactNode
}) {
  return (
    <div className="bg-white rounded-[20px] shadow-lift overflow-hidden">
      <p className={`${AUGENBRAUE} px-5 md:px-6 pt-5 pb-4`}>{titel}</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left [font-variant-numeric:tabular-nums]">
          <thead>
            <tr>
              {kopf.map((h) => (
                <th key={h} scope="col" className="px-5 md:px-6 py-3 text-[13px] font-semibold text-pm-mute bg-pm-paper border-y border-pm-line whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {zeilen.map((z) => (
              <tr key={z[0]} className="border-b border-pm-line-soft last:border-0">
                {z.map((c, j) => (
                  <td
                    key={j}
                    className={`px-5 md:px-6 py-4 text-[16px] whitespace-nowrap ${
                      j === 0 ? 'text-pm-body' : j === betont ? 'font-bold text-pm-green' : 'font-semibold text-pm-ink'
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {fuss && <p className="px-5 md:px-6 py-4 border-t border-pm-line text-[14px] leading-[1.5] text-pm-mute">{fuss}</p>}
    </div>
  )
}

export function MehrDazu({ label, links }: { label: string; links: { href: string; text: string }[] }) {
  return (
    <p className="text-[16.5px] leading-[1.6] text-pm-body">
      <span aria-hidden="true" className="font-bold text-pm-coral mr-2">→</span>
      <span className="font-semibold text-pm-ink">{label}</span>{' '}
      {links.map((l, i) => (
        <Fragment key={l.href}>
          {i > 0 && <span className="text-pm-mute"> · </span>}
          <a href={l.href} className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">
            {l.text}
          </a>
        </Fragment>
      ))}
    </p>
  )
}

export function Fragen({ fragen }: { fragen: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-pm-line">
      {fragen.map((f) => (
        <details key={f.q} className="group border-b border-pm-line">
          <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pm-coral rounded-sm">
            <h3 className="text-[18px] md:text-[19px] font-bold leading-[1.4] tracking-[-0.015em] text-pm-ink">{f.q}</h3>
            <span aria-hidden="true" className="mt-0.5 w-8 h-8 rounded-full bg-white border border-pm-line flex items-center justify-center flex-none text-pm-ink transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
              <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 1.5v9M1.5 6h9" />
              </svg>
            </span>
          </summary>
          <p className="pb-6 pr-14 text-[17px] leading-[1.7] text-pm-body max-w-[64ch]">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
