'use client'

import { useState } from 'react'

const PFLEGEGRADE = [
  { pg: 1, pflegegeld: 0, sachleistung: 0, entlastung: 131, budget: 0, hilfsmittel: 42 },
  { pg: 2, pflegegeld: 347, sachleistung: 796, entlastung: 131, budget: 3539, hilfsmittel: 42 },
  { pg: 3, pflegegeld: 599, sachleistung: 1497, entlastung: 131, budget: 3539, hilfsmittel: 42 },
  { pg: 4, pflegegeld: 800, sachleistung: 1859, entlastung: 131, budget: 3539, hilfsmittel: 42 },
  { pg: 5, pflegegeld: 990, sachleistung: 2299, entlastung: 131, budget: 3539, hilfsmittel: 42 },
]

const STEUER = 200
const KOSTEN_MIN = 2200
const KOSTEN_MAX = 3500

export function ZuschussRechnerClient() {
  const [selected, setSelected] = useState<number | null>(null)
  const pg = PFLEGEGRADE.find(p => p.pg === selected)
  const budgetMo = pg ? Math.round(pg.budget / 12) : 0
  const gesamt = pg ? pg.pflegegeld + pg.entlastung + budgetMo + STEUER : 0
  const eigenMin = pg ? Math.max(0, KOSTEN_MIN - gesamt) : 0
  const eigenMax = pg ? Math.max(0, KOSTEN_MAX - gesamt) : 0

  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[720px] mx-auto px-5 py-14">

        <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
          <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
          <span>›</span>
          <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
          <span>›</span>
          <span className="text-[#5A5A5A]">Zuschuss & Förderung</span>
        </nav>

        <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">TOOLS & RECHNER</p>
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-4">
          Zuschuss & Förderung 2026
        </h1>
        <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[580px]">
          Welche Leistungen stehen Ihnen zu? Pflegegrad wählen — alle Zuschüsse sofort sehen.
        </p>

        {/* Pflegegrad Auswahl */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 shadow-sm mb-6">
          <p className="text-[14px] font-bold text-[#3D3D3D] mb-4">Welchen Pflegegrad hat die pflegebedürftige Person?</p>
          <div className="flex flex-wrap gap-3">
            {PFLEGEGRADE.map(p => (
              <button
                key={p.pg}
                onClick={() => setSelected(p.pg)}
                className={`px-5 py-2.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${
                  selected === p.pg
                    ? 'border-[#8B7355] bg-[#8B7355] text-white'
                    : 'border-[#E5E3DF] bg-white text-[#3D3D3D] hover:border-[#8B7355]'
                }`}
              >
                PG {p.pg}
              </button>
            ))}
          </div>
          {!selected && (
            <p className="mt-3 text-[13px] text-[#8B8B8B]">
              Pflegegrad noch nicht bekannt?{' '}
              <a href="/pflegegrad-rechner/" className="text-[#8B7355] underline hover:text-[#7D6848]">Jetzt einschätzen →</a>
            </p>
          )}
        </div>

        {pg && (
          <>
            {/* Leistungsübersicht */}
            <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="bg-[#F8F7F5] border-b border-[#E5E3DF] px-5 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">
                  Alle Leistungen — Pflegegrad {pg.pg} · Stand 2026
                </p>
              </div>
              <div className="divide-y divide-[#F0EDE8]">
                {[
                  {
                    label: 'Pflegegeld',
                    value: pg.pflegegeld > 0 ? `${pg.pflegegeld} €/Monat` : '—',
                    active: pg.pflegegeld > 0,
                    desc: pg.pflegegeld > 0
                      ? 'Direkt an die Familie — auch bei 24h-Betreuungskraft kombinierbar'
                      : 'Erst ab Pflegegrad 2 verfügbar',
                  },
                  {
                    label: 'Entlastungsbetrag',
                    value: `${pg.entlastung} €/Monat`,
                    active: true,
                    desc: 'Für alle Pflegegrade — für Betreuungs- und Entlastungsleistungen',
                  },
                  {
                    label: 'Entlastungsbudget',
                    value: pg.budget > 0 ? `${pg.budget} €/Jahr (≈ ${budgetMo} €/Mo)` : '—',
                    active: pg.budget > 0,
                    desc: pg.budget > 0
                      ? 'Verhinderungs- und Kurzzeitpflege — flexibel aufteilbar (ab Juli 2025)'
                      : 'Erst ab Pflegegrad 2 verfügbar',
                  },
                  {
                    label: 'Steuerabzug (ca.)',
                    value: `${STEUER} €/Monat`,
                    active: true,
                    desc: '20 % der Pflegekosten absetzbar, max. 4.000 €/Jahr Ersparnis',
                  },
                  {
                    label: 'Pflegehilfsmittel',
                    value: `${pg.hilfsmittel} €/Monat`,
                    active: true,
                    desc: 'Handschuhe, Desinfektionsmittel, Bettschutz etc.',
                  },
                  {
                    label: 'Wohnraumanpassung',
                    value: 'bis 4.180 €/Maßnahme',
                    active: true,
                    desc: 'Badumbau, Treppenlift-Zuschuss, barrierefreier Umbau',
                  },
                ].map(row => (
                  <div key={row.label} className="px-5 py-3.5 flex items-start gap-4">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold ${
                      row.active ? 'bg-[#E8F5EE] text-[#3D7A5C]' : 'bg-[#F0EDE8] text-[#C0BAB2]'
                    }`}>
                      {row.active ? '✓' : '–'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[14px] font-semibold text-[#3D3D3D]">{row.label}</span>
                        <span className={`text-[14px] font-bold whitespace-nowrap ${row.active ? 'text-[#3D7A5C]' : 'text-[#C0BAB2]'}`}>
                          {row.value}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#8B8B8B] mt-0.5">{row.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Eigenanteil */}
              <div className="bg-[#F2EDE6] border-t border-[#E5E3DF] px-5 py-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <span className="text-[14px] font-bold text-[#3D3D3D]">Ihr Eigenanteil bei 24h-Pflege (Primundus)</span>
                  <span className="text-[16px] font-bold text-[#8B7355] whitespace-nowrap">
                    ca. {eigenMin.toLocaleString('de')}–{eigenMax.toLocaleString('de')} €/Mo
                  </span>
                </div>
                <p className="text-[12px] text-[#6B5A44]">
                  Primundus-Kosten {KOSTEN_MIN.toLocaleString('de')}–{KOSTEN_MAX.toLocaleString('de')} €/Mo minus {gesamt} € Zuschüsse
                </p>
              </div>
            </div>

            {/* Pflegeheim-Vergleich */}
            <div className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4 mb-6 shadow-sm">
              <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#8B8B8B] mb-2">Zum Vergleich — Pflegeheim</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[14px] text-[#5A5A5A]">Eigenanteil Ø Deutschland (alle PG)</span>
                <span className="text-[14px] font-bold text-[#E76F63]">≈ 2.871 €/Monat</span>
              </div>
              <p className="text-[12px] text-[#8B8B8B] mt-1">
                24h-Pflege zuhause ist bei PG {pg.pg} oft günstiger — und das vertraute Zuhause bleibt.
              </p>
            </div>

            {/* Hinweis */}
            <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-xl px-5 py-4 mb-8">
              <p className="text-[13px] text-[#8B3E2F] leading-relaxed">
                <strong>Wichtig:</strong> Pflegegeld wird auch bei 24h-Betreuungskraft ausgezahlt, solange Angehörige als Hauptpflegepersonen anerkannt sind. Das Entlastungsbudget kann für Vertretungskräfte im Urlaub der Betreuungskraft genutzt werden.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://kostenrechner.primundus.de?pflegegrad=${pg.pg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[15px] py-3.5 px-6 rounded-xl transition-colors"
              >
                Persönliches Angebot anfordern →
              </a>
              <a
                href="tel:+4989200000830"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#8B7355] text-[#8B7355] font-semibold text-[15px] py-3.5 px-6 rounded-xl hover:bg-[#F2EDE6] transition-colors"
              >
                089 200 000 830
              </a>
            </div>
          </>
        )}

        {!selected && (
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 shadow-sm">
            <p className="text-[15px] font-bold text-[#3D3D3D] mb-2">Pflegegrad noch nicht bekannt?</p>
            <p className="text-[14px] text-[#5A5A5A] mb-5">
              Unser Pflegegrad-Rechner gibt in 3 Minuten eine erste Einschätzung.
            </p>
            <a
              href="/pflegegrad-rechner/"
              className="inline-flex items-center gap-2 bg-[#8B7355] hover:bg-[#7D6848] text-white font-bold text-[14px] py-3 px-5 rounded-xl transition-colors"
            >
              Pflegegrad einschätzen →
            </a>
          </div>
        )}

      </div>
    </div>
  )
}
