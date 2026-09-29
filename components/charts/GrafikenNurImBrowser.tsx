'use client'

// Die Diagramme laden nur im Browser, mit Platzhalter in fester Höhe (kein Layout-Sprung). Seit Next 15 ist
// `ssr: false` nur noch in Client-Komponenten erlaubt; bis Next 13.5 stand derselbe Aufruf direkt in den Seiten.
import dynamic from 'next/dynamic'

export const GrafikPflegestatistik = dynamic(
  () => import('@/components/charts/GrafikPflegestatistik').then(m => ({ default: m.GrafikPflegestatistik })),
  {
    loading: () => <div className="my-10 h-[480px] bg-pm-paper rounded-2xl border border-pm-line animate-pulse" />,
    ssr: false,
  }
)

export const GrafikKostenvergleich = dynamic(
  () => import('@/components/charts/GrafikKostenvergleich').then(m => ({ default: m.GrafikKostenvergleich })),
  {
    loading: () => <div className="my-10 h-[420px] bg-pm-paper rounded-2xl border border-pm-line animate-pulse" />,
    ssr: false,
  }
)
