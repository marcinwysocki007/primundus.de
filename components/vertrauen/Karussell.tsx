'use client'

import { useRef, type ReactNode } from 'react'

// Waagerecht wischbare Kartenreihe (Bewertungen). Am Handy wischen, am Computer zusätzlich zwei Pfeile.
// Martin 17.09.2026: „die Testimonials müssen als fester Teil mit hier rein - so schön und horizontal scrollbar".
// dunkel = auf dem dunklen Band der Partnerseite; rand = wie weit die Reihe über den Seitenrand hinausläuft.
export function Karussell({
  kopf,
  label,
  children,
  dunkel = false,
  rand = '-mx-5 px-5 scroll-px-5',
}: {
  kopf: ReactNode
  label: string
  children: ReactNode
  dunkel?: boolean
  rand?: string
}) {
  const liste = useRef<HTMLUListElement>(null)

  const schieben = (richtung: 1 | -1) => {
    const el = liste.current
    if (!el) return
    const karte = el.querySelector('li')
    const schritt = karte ? karte.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: richtung * schritt, behavior: 'smooth' })
  }

  const pfeil = `w-12 h-12 rounded-full flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    dunkel
      ? 'border border-pm-deep-line bg-pm-deep-2 text-pm-deep-ink hover:border-pm-deep-body focus-visible:outline-pm-deep-ink'
      : 'bg-white shadow-lift text-pm-ink hover:text-pm-taupe-ink focus-visible:outline-pm-taupe'
  }`

  return (
    <>
      <div className="flex items-end justify-between gap-6">
        <div className="min-w-0">{kopf}</div>
        <div className="hidden md:flex gap-3 flex-none">
          <button type="button" aria-label="Vorherige Bewertungen" onClick={() => schieben(-1)} className={pfeil}>
            <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12.5 4.5L7 10l5.5 5.5" />
            </svg>
          </button>
          <button type="button" aria-label="Weitere Bewertungen" onClick={() => schieben(1)} className={pfeil}>
            <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7.5 4.5L13 10l-5.5 5.5" />
            </svg>
          </button>
        </div>
      </div>
      <ul
        ref={liste}
        aria-label={label}
        tabIndex={0}
        className={`mt-9 md:mt-12 ${rand} flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none`}
      >
        {children}
      </ul>
    </>
  )
}
