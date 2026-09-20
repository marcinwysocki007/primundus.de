'use client'

// Kombinations-Rechner (20.09.2026): anteiliges Pflegegeld nach § 38 SGB XI. Wer die Pflegesachleistungen nur zum Teil nutzt,
// bekommt das Pflegegeld um genau diesen Prozentsatz gekürzt. Eingabe: Pflegegrad und Monatsrechnung des Pflegedienstes,
// Ausgabe: genutzter Anteil, restliches Pflegegeld, was die Kasse insgesamt trägt. Keine Speicherung, keine Anfrage.
import { useState } from 'react'
import { PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'
import { anteiligesPflegegeld, type Grad } from '@/lib/kombination'

const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe'
const FELD = 'min-h-[48px] w-full rounded-[12px] border border-pm-line bg-white px-3 text-[15px] font-semibold text-pm-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'
const euro = (n: number) => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
const euroGanz = (n: number) => n.toLocaleString('de-DE') + ' €'

export function KombinationsRechner() {
  const [grad, setGrad] = useState<Grad>(3)
  const [rechnung, setRechnung] = useState<string>('374')
  const betrag = Number(rechnung.replace(',', '.')) || 0
  const { anteil, pflegegeld, kasseSach } = anteiligesPflegegeld(grad, betrag)
  const prozent = Math.round(anteil * 1000) / 10
  const privat = Math.max(betrag - PFLEGESACHLEISTUNGEN[grad], 0)

  return (
    <div className="bg-white rounded-[20px] shadow-lift p-5 sm:p-6 md:p-8">
      <p className={AUGENBRAUE}>Kombinations-Rechner nach § 38 SGB XI</p>
      <p className="mt-2 text-[22px] font-bold leading-[1.25] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">
        Wie viel Pflegegeld bleibt, wenn ein Pflegedienst dazukommt?
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="block text-[14.5px] font-semibold text-pm-ink">Pflegegrad</span>
          <select value={grad} onChange={(e) => setGrad(Number(e.target.value) as Grad)} className={`mt-1.5 ${FELD}`} aria-label="Pflegegrad">
            {([2, 3, 4, 5] as Grad[]).map((g) => (
              <option key={g} value={g}>Pflegegrad {g}: Pflegegeld {euroGanz(PFLEGEGELD[g])}, Sachleistungen {euroGanz(PFLEGESACHLEISTUNGEN[g])}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="block text-[14.5px] font-semibold text-pm-ink">Rechnung des Pflegedienstes im Monat</span>
          <input
            inputMode="decimal"
            value={rechnung}
            onChange={(e) => setRechnung(e.target.value.replace(/[^\d,.]/g, ''))}
            className={`mt-1.5 ${FELD} [font-variant-numeric:tabular-nums]`}
            aria-label="Rechnung des Pflegedienstes im Monat in Euro"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[14px] border border-pm-line p-5">
          <p className={AUGENBRAUE}>Genutzte Sachleistung</p>
          <p className="mt-2 text-[28px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink [font-variant-numeric:tabular-nums]">{prozent.toLocaleString('de-DE')} %</p>
          <p className="mt-1.5 text-[14px] leading-[1.5] text-pm-body">{euro(kasseSach)} von {euroGanz(PFLEGESACHLEISTUNGEN[grad])} zahlt die Kasse an den Dienst.</p>
        </div>
        <div className="rounded-[14px] bg-pm-paper p-5">
          <p className={`${AUGENBRAUE} !text-pm-green`}>Pflegegeld, das bleibt</p>
          <p className="mt-2 text-[28px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink [font-variant-numeric:tabular-nums]">{euro(pflegegeld)}</p>
          <p className="mt-1.5 text-[14px] leading-[1.5] text-pm-body">{euroGanz(PFLEGEGELD[grad])} minus {prozent.toLocaleString('de-DE')} %, jeden Monat auf Ihr Konto.</p>
        </div>
        <div className="rounded-[14px] border border-pm-line p-5">
          <p className={AUGENBRAUE}>Kasse insgesamt</p>
          <p className="mt-2 text-[28px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink [font-variant-numeric:tabular-nums]">{euro(kasseSach + pflegegeld)}</p>
          <p className="mt-1.5 text-[14px] leading-[1.5] text-pm-body">
            {privat > 0 ? `${euro(privat)} der Rechnung liegen über dem Sachleistungsbetrag und bleiben privat.` : 'Sachleistung an den Dienst plus Pflegegeld an Sie.'}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[13.5px] leading-[1.55] text-pm-mute">
        § 38 SGB XI: Das Pflegegeld sinkt um den Prozentsatz, zu dem Sie die Sachleistungen nutzen; an die Aufteilung sind Sie sechs Monate
        gebunden. Die Kasse rechnet mit den Monatsrechnungen des Pflegedienstes, das Ergebnis kann daher von Monat zu Monat schwanken.
        Beträge seit 1. Januar 2025 (§§ 36, 37 SGB XI).
      </p>
    </div>
  )
}
