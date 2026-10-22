'use client'

import { useEffect, useState } from 'react'
import { aktuelleSeite, istLadefehler } from '@/lib/seite-nachladen'

// Fehlerseite innerhalb des Layouts (20.09.2026): Kopfzeile, Fußzeile und der <head> mit Titel und Canonical bleiben stehen,
// die Seite bietet den Weg zurück. Ohne diese Datei zeigt Next.js eine leere Standardseite ohne Canonical.
// Seit 22.10.2026: Bei einem Ladefehler (alter Chunk nach Deploy) zeigt sie stattdessen den Inhalt der aktuellen Fassung.
export default function Fehler({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const ladefehler = istLadefehler(error)
  const [inhalt, setInhalt] = useState<string | null>(null)
  const [nachladenFehlgeschlagen, setNachladenFehlgeschlagen] = useState(false)

  useEffect(() => {
    console.error('Seite konnte nicht gerendert werden:', error)
    if (!ladefehler) return
    let abgebrochen = false
    aktuelleSeite()
      .then((seite) => {
        if (abgebrochen) return
        if (seite.main) setInhalt(seite.main)
        else setNachladenFehlgeschlagen(true)
      })
      .catch((e) => {
        console.error('Aktuelle Fassung nicht geladen:', e)
        if (!abgebrochen) setNachladenFehlgeschlagen(true)
      })
    return () => {
      abgebrochen = true
    }
  }, [error, ladefehler])

  if (inhalt) return <div dangerouslySetInnerHTML={{ __html: inhalt }} />
  // Während des Nachladens keine Fehlermeldung, damit weder Besucher noch Google sie sehen.
  if (ladefehler && !nachladenFehlgeschlagen) return <div className="min-h-[60vh]" aria-busy="true" />

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
