'use client'

// Pflegeheim-Kosten-Rechner (20.09.2026): Eigenanteil im Pflegeheim je Bundesland (vdek, 1. Juli 2026, erstes Heimjahr) und
// Aufenthaltsjahr (Leistungszuschlag § 43c SGB XI, Bundesdurchschnitt), daneben der Eigenanteil bei einer Betreuungskraft zu Hause
// je Pflegegrad (Preis ab 2.150 €, minus Pflegegeld, anteiliges Entlastungsbudget 295 €, Steuerermäßigung bis 333 €; Pflegegrad 5
// ab 2.200 €). Keine Speicherung, keine Anfrage. Optik wie die Vorlage.
import { useState } from 'react'
import { KNOPF } from '@/components/ArticleCTA'
import { PFLEGEGELD } from '@/lib/fakten'
import { HEIM_EIGENANTEIL, HEIM_EIGENANTEIL_BUND, HEIM_ZUSCHLAG, heimEigenanteilBundJahr, HEIM_EEE_BUND_OHNE_ZUSCHLAG, HEIM_UNTERKUNFT_BUND, HEIM_INVEST_BUND } from '@/lib/heimkosten'

const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe'
const FELD = 'min-h-[48px] w-full rounded-[12px] border border-pm-line bg-white px-3 text-[15px] font-semibold text-pm-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-pflegeheim-kosten'
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

const LAENDER = Object.entries(HEIM_EIGENANTEIL).sort((a, b) => a[0].localeCompare(b[0], 'de'))
const BUND = 'Bundesdurchschnitt'
const JAHRE: { wert: 1 | 2 | 3 | 4; text: string }[] = [
  { wert: 1, text: '1. Jahr (Zuschlag 15 %)' },
  { wert: 2, text: '2. Jahr (30 %)' },
  { wert: 3, text: '3. Jahr (50 %)' },
  { wert: 4, text: 'ab dem 4. Jahr (75 %)' },
]

/** Eigenanteil zu Hause mit Betreuungskraft je Pflegegrad, wie auf /kosten */
function zuHause(pg: 2 | 3 | 4 | 5): number {
  const preis = pg === 5 ? 2200 : 2150
  return preis - PFLEGEGELD[pg] - 295 - 333
}

export function HeimRechner() {
  const [land, setLand] = useState<string>(BUND)
  const [pg, setPg] = useState<2 | 3 | 4 | 5>(3)
  const [jahr, setJahr] = useState<1 | 2 | 3 | 4>(1)

  const heimJahr1 = land === BUND ? HEIM_EIGENANTEIL_BUND : HEIM_EIGENANTEIL[land]
  // Jahre 2 bis 4: der Zuschlag senkt nur den pflegebedingten Anteil; für die Länder liegt uns nur das erste Jahr vor, deshalb
  // rechnen wir die Ersparnis mit dem pflegebedingten Anteil des Bundesdurchschnitts (2.088 € vor Zuschlag) und weisen das aus.
  const ersparnisJahr = Math.round(HEIM_EEE_BUND_OHNE_ZUSCHLAG * (HEIM_ZUSCHLAG[jahr] - HEIM_ZUSCHLAG[1]))
  const heim = land === BUND ? heimEigenanteilBundJahr(jahr) : heimJahr1 - ersparnisJahr
  const daheim = zuHause(pg)
  const differenz = heim - daheim

  return (
    <div className="bg-white rounded-[20px] shadow-lift p-5 sm:p-6 md:p-8">
      <p className={AUGENBRAUE}>Pflegeheim-Kosten-Rechner 2026</p>
      <p className="mt-2 text-[22px] font-bold leading-[1.25] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">
        Was Sie im Pflegeheim selbst zahlen, und was zu Hause bleibt
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="block text-[14.5px] font-semibold text-pm-ink">Bundesland</span>
          <select value={land} onChange={(e) => setLand(e.target.value)} className={`mt-1.5 ${FELD}`} aria-label="Bundesland">
            <option value={BUND}>{BUND}</option>
            {LAENDER.map(([name]) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="block text-[14.5px] font-semibold text-pm-ink">Pflegegrad</span>
          <select value={pg} onChange={(e) => setPg(Number(e.target.value) as 2 | 3 | 4 | 5)} className={`mt-1.5 ${FELD}`} aria-label="Pflegegrad">
            {[2, 3, 4, 5].map((g) => (
              <option key={g} value={g}>Pflegegrad {g}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="block text-[14.5px] font-semibold text-pm-ink">Aufenthaltsjahr im Heim</span>
          <select value={jahr} onChange={(e) => setJahr(Number(e.target.value) as 1 | 2 | 3 | 4)} className={`mt-1.5 ${FELD}`} aria-label="Aufenthaltsjahr">
            {JAHRE.map((j) => (
              <option key={j.wert} value={j.wert}>{j.text}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[14px] border border-pm-line p-5">
          <p className={AUGENBRAUE}>Pflegeheim</p>
          <p className="mt-2 text-[32px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink [font-variant-numeric:tabular-nums]">{euro(heim)}</p>
          <p className="mt-1.5 text-[14.5px] leading-[1.5] text-pm-body">
            Eigenanteil im Monat, {land === BUND ? 'Bundesdurchschnitt' : land}, {JAHRE[jahr - 1].text.replace(/ \(.*\)/, '')}.
            {jahr > 1 && land !== BUND ? ' Ersparnis gegenüber dem ersten Jahr mit dem pflegebedingten Anteil des Bundesdurchschnitts gerechnet.' : ''}
          </p>
          <p className="mt-2 text-[13.5px] leading-[1.5] text-pm-mute">
            Der Pflegegrad ändert den Eigenanteil im Heim nicht: Die Pflegekasse zahlt je Pflegegrad mehr, das Heim berechnet aber allen Bewohnern
            denselben pflegebedingten Anteil.
          </p>
        </div>
        <div className="rounded-[14px] bg-pm-paper p-5">
          <p className={`${AUGENBRAUE} !text-pm-green`}>Zu Hause mit Betreuungskraft</p>
          <p className="mt-2 text-[32px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink [font-variant-numeric:tabular-nums]">ab ca. {euro(daheim)}</p>
          <p className="mt-1.5 text-[14.5px] leading-[1.5] text-pm-body">
            Selbst zu tragen im Monat bei Pflegegrad {pg}: Preis ab {euro(pg === 5 ? 2200 : 2150)} minus {euro(PFLEGEGELD[pg])} Pflegegeld, 295 € anteiliges Entlastungsbudget und bis 333 € Steuerermäßigung. Dazu An- und Abreise 125 € je Strecke; Kost und Logis stellen Sie.
          </p>
          <p className="mt-3 text-[16px] font-bold leading-[1.4] text-pm-ink [font-variant-numeric:tabular-nums]">
            {differenz > 0 ? `Unterschied: ${euro(differenz)} im Monat, ${euro(differenz * 12)} im Jahr.` : 'Zu Hause ist hier nicht günstiger.'}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[13.5px] leading-[1.55] text-pm-mute">
        Heim: vdek, Stand 1. Juli 2026, Eigenanteil im ersten Jahr je Bundesland (pflegebedingter Anteil {euro(HEIM_EEE_BUND_OHNE_ZUSCHLAG)} vor Zuschlag,
        Unterkunft und Verpflegung {euro(HEIM_UNTERKUNFT_BUND)}, Investitionskosten {euro(HEIM_INVEST_BUND)} im Bundesdurchschnitt); Leistungszuschlag nach § 43c SGB XI.
        Zu Hause: Preise aus unserem Kostenrechner, Stand September 2026; Entlastungsbudget, wenn die Kasse den Einsatz als Verhinderungspflege anerkennt.
      </p>
      <a href={RECHNER} referrerPolicy="no-referrer-when-downgrade" className={`${KNOPF} mt-5`}>
        Preis &amp; Pflegekräfte ansehen
      </a>
    </div>
  )
}
