'use client'

import { useState } from 'react'
import { PROFILE, type Bewertung, type Quelle } from '@/lib/bewertungen'
import { QUELLEN_NAME, QuellenLogo, Sterne } from './Sterne'

const FILTER: (Quelle | 'alle')[] = ['alle', 'primundus', 'google', 'trustpilot']

export function BewertungsListe({ bewertungen }: { bewertungen: Bewertung[] }) {
  const [filter, setFilter] = useState<Quelle | 'alle'>('alle')
  const sichtbar = filter === 'alle' ? bewertungen : bewertungen.filter((b) => b.quelle === filter)

  return (
    <div>
      <div role="group" aria-label="Bewertungen nach Quelle filtern" className="flex flex-wrap gap-2">
        {FILTER.map((f) => {
          const anzahl = f === 'alle' ? bewertungen.length : bewertungen.filter((b) => b.quelle === f).length
          if (!anzahl) return null
          const aktiv = filter === f
          return (
            <button
              key={f}
              type="button"
              aria-pressed={aktiv}
              onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-coral ${
                aktiv ? 'bg-pm-ink border-pm-ink text-white' : 'bg-white border-pm-line text-pm-ink hover:border-pm-taupe'
              }`}
            >
              {f !== 'alle' && <QuellenLogo quelle={f} groesse={16} />}
              {f === 'alle' ? 'Alle' : QUELLEN_NAME[f]}
              <span className={`[font-variant-numeric:tabular-nums] ${aktiv ? 'text-white/70' : 'text-pm-mute'}`}>{anzahl}</span>
            </button>
          )
        })}
      </div>

      <ul className="mt-8 columns-1 md:columns-2 gap-5" aria-live="polite">
        {sichtbar.map((b) => (
          <li key={b.id} className="break-inside-avoid mb-5">
            <BewertungsKarte b={b} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function BewertungsKarte({ b }: { b: Bewertung }) {
  const profil = b.profil ? PROFILE[b.profil] : undefined
  const quelle = profil && profil.quelle === 'google' ? `Google · ${profil.kurz}` : QUELLEN_NAME[b.quelle]
  return (
    <article className="bg-white rounded-[20px] shadow-lift p-6 md:p-7 [overflow-wrap:break-word]">
      <div className="flex items-center justify-between gap-4">
        <Sterne wert={b.sterne} groesse={18} label={`${b.sterne} von 5 Sternen`} />
        {b.zeit && <span className="text-[14px] text-pm-mute whitespace-nowrap">{b.zeit}</span>}
      </div>

      {b.titel && <h3 className="mt-4 text-[18px] font-bold leading-[1.35] tracking-[-0.015em] text-pm-ink">{b.titel}</h3>}
      {b.text && (
        <p className={`${b.titel ? 'mt-2' : 'mt-4'} text-[16.5px] leading-[1.65] text-pm-body whitespace-pre-line`}>{b.text}</p>
      )}

      <div className="mt-5 pt-4 border-t border-pm-line-soft flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="text-[15px] leading-[1.4]">
          <span className="font-semibold text-pm-ink">{b.name}</span>
          {b.ort && <span className="text-pm-mute">, {b.ort}</span>}
          {b.kundeBestaetigt && (
            <span className="ml-2 inline-block align-middle text-[12.5px] font-semibold px-2.5 py-0.5 rounded-full bg-pm-mint text-pm-green-deep">Kunde bestätigt</span>
          )}
        </p>
        {profil ? (
          <a
            href={profil.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] text-pm-taupe-ink hover:text-pm-ink underline decoration-pm-taupe/30 underline-offset-4"
          >
            <QuellenLogo quelle={b.quelle} groesse={15} />
            {quelle}
            <span className="sr-only"> (Quelle öffnet in neuem Fenster)</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[14px] text-pm-taupe-ink">
            <QuellenLogo quelle={b.quelle} groesse={15} />
            {quelle}
          </span>
        )}
      </div>

      {b.antwort && (
        <div className="mt-4 rounded-[14px] bg-pm-paper px-4 py-3">
          <p className="text-[13px] font-bold uppercase tracking-[.08em] text-pm-taupe">Antwort von Primundus</p>
          <p className="mt-1 text-[15.5px] leading-[1.6] text-pm-body whitespace-pre-line">{b.antwort}</p>
        </div>
      )}
    </article>
  )
}
