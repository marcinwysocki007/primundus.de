'use client'

import { useEffect } from 'react'

// Fehlerseite innerhalb des Layouts (20.09.2026): Kopfzeile, Fußzeile und der <head> mit Titel und Canonical bleiben stehen,
// die Seite bietet den Weg zurück. Ohne diese Datei zeigt Next.js eine leere Standardseite ohne Canonical.
export default function Fehler({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Seite konnte nicht gerendert werden:', error)
  }, [error])

  return (
    <div className="bg-pm-paper">
      <div className="max-w-[720px] mx-auto px-5 py-16 md:py-24 text-center">
        <p className="text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe">Kurze Störung</p>
        <h1 className="mt-3 text-[30px] md:text-[38px] font-extrabold leading-[1.1] tracking-[-0.025em] text-pm-ink">
          Diese Seite konnte gerade nicht vollständig geladen werden
        </h1>
        <p className="mt-4 text-[17px] leading-[1.6] text-pm-body">
          Ein Klick lädt sie neu. Wenn das nicht hilft, erreichen Sie uns unter{' '}
          <a href="tel:+4989200000830" className="font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4">089 200 000 830</a>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full bg-pm-coral hover:bg-pm-coral-deep text-white text-[16px] font-bold transition-colors"
          >
            Seite neu laden
          </button>
          <a href="/" className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full bg-white shadow-lift text-pm-ink text-[16px] font-bold">
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  )
}
