// Die Sektion der Landingpage-Form (24.09.2026) — volle Breite, eigener Hintergrund, Augenbraue und
// mittige H2, wie die Startseite sie seit dem 17.09. nach dem Rechner baut (components/start/Startseite.tsx).
//
// Martin 24.09.: „Müsste die Ortsseite nicht so aufgebaut werden wie der Kostenrechner? Viel ruhiger, viel
// klarer." Der Unterschied zwischen Rechner und Ortsseite war das Layout, nicht der Inhalt: dort eine Sektion
// je Gedanke mit Luft, hier eine Textspalte mit Seitenleiste. Diese Hülle gibt den Orts-Bausteinen die
// Rechner-Form; Startseite und Ortsseiten haben damit dieselbe Sprache.
import type { ReactNode } from 'react'
import { zusammenhalten } from './Ratgeber'

export const SEKTION_AUGENBRAUE = 'text-[13px] md:text-[14px] font-bold uppercase tracking-[0.14em] text-pm-taupe'
export const SEKTION_H2 = 'mt-3 text-[30px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.03em] text-pm-ink [text-wrap:balance]'
export const SEKTION_H3 = 'text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-pm-ink [text-wrap:balance] md:text-[24px]'
/** Der Knopf der Startseite (KNOPF in Startseite.tsx), hier für die Sektions-Enden */
export const SEKTION_KNOPF =
  'inline-flex items-center justify-center gap-2 min-h-[58px] px-8 rounded-2xl bg-pm-coral hover:bg-pm-coral-deep text-white text-[18px] md:text-[19px] font-bold shadow-lift transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'

const TON = { papier: 'bg-pm-paper', weiss: 'bg-white', shell: 'bg-pm-shell' } as const
const BREITE = { wide: 'max-w-wide', mittel: 'max-w-[900px]', lese: 'max-w-[46rem]' } as const

export function Sektion({
  id,
  augenbraue,
  titel,
  einleitung,
  ton = 'papier',
  breite = 'mittel',
  ausrichtung = 'links',
  children,
}: {
  id: string
  augenbraue?: string
  titel: ReactNode
  /** Ein Satz unter der H2, mittig, max. 44rem */
  einleitung?: ReactNode
  ton?: keyof typeof TON
  breite?: keyof typeof BREITE
  /** Martin 24.09.: „zu viel zentriert — linksbündig wie in der alten Version sieht aufgeräumter aus“: links ist Standard */
  ausrichtung?: 'mitte' | 'links'
  children: ReactNode
}) {
  const mitte = ausrichtung === 'mitte'
  return (
    <section id={id} className={`${TON[ton]} scroll-mt-[88px] px-5 py-16 md:scroll-mt-[150px] lg:py-24`}>
      <div className={`${BREITE[breite]} mx-auto`}>
        {augenbraue ? <p className={`${SEKTION_AUGENBRAUE} ${mitte ? 'text-center' : ''}`}>{augenbraue}</p> : null}
        <h2 className={`${SEKTION_H2} ${mitte ? 'text-center' : ''} ${augenbraue ? '' : '!mt-0'}`}>{zusammenhalten(titel)}</h2>
        {einleitung ? (
          <p className={`mt-5 text-[18px] leading-[1.65] text-pm-body ${mitte ? 'mx-auto max-w-[44rem] text-center' : 'max-w-[44rem]'}`}>{einleitung}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
