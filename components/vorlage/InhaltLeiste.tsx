'use client'

import { Sicher } from '@/components/Sicher'

import { useEffect, useState } from 'react'

// Inhaltsverzeichnis in der rechten Spalte der Ratgeber-Vorlage (nur ab 1024 px).
// Auf dem Handy bleibt die schwebende Pille aus ArticleTOC.
function InhaltLeisteInnen({ abschnitte }: { abschnitte: { id: string; title: string }[] }) {
  const [aktiv, setAktiv] = useState(abschnitte[0]?.id ?? '')

  useEffect(() => {
    const beobachter = new IntersectionObserver(
      (eintraege) => {
        eintraege.forEach((e) => {
          if (e.isIntersecting) setAktiv(e.target.id)
        })
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    abschnitte.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) beobachter.observe(el)
    })
    return () => beobachter.disconnect()
  }, [abschnitte])

  return (
    <nav aria-label="Inhalt">
      <p className="text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe">Inhalt</p>
      <ul className="mt-4 border-l border-pm-line">
        {abschnitte.map((a) => (
          <li key={a.id}>
            <a
              href={`#${a.id}`}
              aria-current={aktiv === a.id ? 'location' : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-[15px] leading-[1.4] transition-colors ${
                aktiv === a.id
                  ? 'border-pm-coral font-semibold text-pm-ink'
                  : 'border-transparent text-pm-mute hover:text-pm-ink'
              }`}
            >
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function InhaltLeiste({ abschnitte }: { abschnitte: { id: string; title: string }[] }) {
  return (
    <Sicher name="Inhaltsleiste">
      <InhaltLeisteInnen abschnitte={abschnitte} />
    </Sicher>
  )
}
