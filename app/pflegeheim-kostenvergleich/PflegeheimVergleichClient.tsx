'use client'

import { useMemo, useState } from 'react'

const PFLEGEGRADE = [
  { pg: 2, pflegegeld: 347, sachleistung: 796, heimanteil: 805 },
  { pg: 3, pflegegeld: 599, sachleistung: 1497, heimanteil: 1319 },
  { pg: 4, pflegegeld: 800, sachleistung: 1859, heimanteil: 1855 },
  { pg: 5, pflegegeld: 990, sachleistung: 2299, heimanteil: 2096 },
]

const BUNDESLAENDER = [
  { name: 'Bundesdurchschnitt', faktor: 1.0, heimEA: 2871 },
  { name: 'Bayern', faktor: 1.18, heimEA: 3389 },
  { name: 'Baden-Württemberg', faktor: 1.14, heimEA: 3273 },
  { name: 'Hamburg', faktor: 1.10, heimEA: 3158 },
  { name: 'Berlin', faktor: 1.05, heimEA: 3015 },
  { name: 'Nordrhein-Westfalen', faktor: 1.06, heimEA: 3043 },
  { name: 'Hessen', faktor: 1.08, heimEA: 3101 },
  { name: 'Niedersachsen', faktor: 0.95, heimEA: 2727 },
  { name: 'Sachsen-Anhalt', faktor: 0.78, heimEA: 2240 },
  { name: 'Sachsen', faktor: 0.78, heimEA: 2240 },
  { name: 'Thüringen', faktor: 0.78, heimEA: 2240 },
  { name: 'Mecklenburg-Vorpommern', faktor: 0.80, heimEA: 2297 },
]

const PFLEGE_24H_BRUTTO = { min: 2200, max: 3500 }
const STEUER_MAX_MO = 333

export function PflegeheimVergleichClient() {
  const [pgWahl, setPgWahl] = useState<number | null>(null)
  const [bundesland, setBundesland] = useState<string>('Bundesdurchschnitt')

  const pg = PFLEGEGRADE.find(p => p.pg === pgWahl)
  const bl = BUNDESLAENDER.find(b => b.name === bundesland)!

  const ergebnis = useMemo(() => {
    if (!pg) return null

    const heimGesamtkosten = bl.heimEA + pg.heimanteil + 500
    const heimEigenanteil = heimGesamtkosten - pg.sachleistung

    const bruttoMin = Math.round(PFLEGE_24H_BRUTTO.min * (0.9 + bl.faktor * 0.1))
    const bruttoMax = Math.round(PFLEGE_24H_BRUTTO.max * (0.9 + bl.faktor * 0.1))
    const pgHalb = Math.round(pg.pflegegeld * 0.5)
    const zuschuesse = pgHalb + 131 + STEUER_MAX_MO
    const eaMin = Math.max(0, bruttoMin - zuschuesse)
    const eaMax = Math.max(0, bruttoMax - zuschuesse)
    const eaSchnitt = Math.round((eaMin + eaMax) / 2)

    const ersparnis = heimEigenanteil - eaSchnitt
    const ersparnisProzent = Math.round((ersparnis / heimEigenanteil) * 100)

    return {
      heimEigenanteil,
      heimGesamtkosten,
      bruttoMin, bruttoMax,
      eaMin, eaMax, eaSchnitt,
      ersparnis,
      ersparnisProzent,
      pgHalb,
    }
  }, [pg, bl])

  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[720px] mx-auto px-5 py-14">

        <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
          <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
          <span>›</span>
          <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
          <span>›</span>
          <span className="text-[#5A5A5A]">Pflegeheim-Vergleich</span>
        </nav>

        <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">TOOLS & RECHNER</p>
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-4">
          Pflegeheim vs. 24h-Pflege — Kostenvergleich 2026
        </h1>
        <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[580px]">
          Pflegegrad und Bundesland wählen — und sehen, wie viel Sie mit 24h-Pflege im Vergleich zum Heim sparen.
        </p>

        {/* Pflegegrad */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 shadow-sm mb-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-[#F2EDE6] text-[#8B7355] font-bold text-[14px] flex items-center justify-center flex-shrink-0">1</span>
            <p className="text-[15px] font-bold text-[#3D3D3D]">Pflegegrad auswählen</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {PFLEGEGRADE.map(p => (
              <button
                key={p.pg}
                onClick={() => setPgWahl(p.pg)}
                className={`px-5 py-2.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${
                  pgWahl === p.pg
                    ? 'border-[#8B7355] bg-[#8B7355] text-white'
                    : 'border-[#E5E3DF] bg-white text-[#3D3D3D] hover:border-[#8B7355]'
                }`}
              >
                PG {p.pg}
              </button>
            ))}
          </div>
          <p className="mt-3 text-[12px] text-[#8B8B8B]">
            Hinweis: Bei PG 1 ist weder ein Pflegeheim noch eine 24h-Pflege üblich — der Vergleich beginnt ab PG 2.
          </p>
        </div>

        {/* Bundesland */}
        {pgWahl && (
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 shadow-sm mb-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#F2EDE6] text-[#8B7355] font-bold text-[14px] flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-[15px] font-bold text-[#3D3D3D]">Bundesland wählen</p>
            </div>
            <select
              value={bundesland}
              onChange={(e) => setBundesland(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] bg-white focus:border-[#8B7355] focus:outline-none transition-colors"
            >
              {BUNDESLAENDER.map(b => (
                <option key={b.name} value={b.name}>{b.name}</option>
              ))}
            </select>
            <p className="mt-3 text-[12px] text-[#8B8B8B]">
              Pflegeheim-Eigenanteile variieren stark — in Bayern und BW deutlich höher als im Osten.
            </p>
          </div>
        )}

        {/* Ergebnis */}
        {ergebnis && pg && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {/* Pflegeheim */}
              <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#FDF0EE] border-b border-[#E5E3DF] px-5 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B3E2F]">Pflegeheim</p>
                </div>
                <div className="p-5">
                  <p className="text-[28px] font-bold text-[#E76F63] mb-1">
                    {ergebnis.heimEigenanteil.toLocaleString('de')} €
                  </p>
                  <p className="text-[12px] text-[#8B8B8B] mb-4">Eigenanteil pro Monat</p>
                  <div className="text-[12px] text-[#5A5A5A] space-y-1">
                    <p>• Pflegekosten: {pg.heimanteil} €</p>
                    <p>• Unterkunft/Verpflegung: {bl.heimEA} €</p>
                    <p>• Investitionskosten: ca. 500 €</p>
                    <p className="text-[#8B8B8B] pt-1">- Sachleistung: {pg.sachleistung} €</p>
                  </div>
                </div>
              </div>

              {/* 24h-Pflege */}
              <div className="bg-white border-2 border-[#8B7355] rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#F2EDE6] border-b border-[#E5E3DF] px-5 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#6B5A44]">24h-Pflege zuhause</p>
                </div>
                <div className="p-5">
                  <p className="text-[28px] font-bold text-[#3D7A5C] mb-1">
                    {ergebnis.eaMin.toLocaleString('de')}–{ergebnis.eaMax.toLocaleString('de')} €
                  </p>
                  <p className="text-[12px] text-[#8B8B8B] mb-4">Eigenanteil pro Monat</p>
                  <div className="text-[12px] text-[#5A5A5A] space-y-1">
                    <p>• Brutto-Kosten: {ergebnis.bruttoMin.toLocaleString('de')}–{ergebnis.bruttoMax.toLocaleString('de')} €</p>
                    <p>- Pflegegeld (50 %): {ergebnis.pgHalb} €</p>
                    <p>- Entlastungsbetrag: 131 €</p>
                    <p>- Steuerersparnis: bis {STEUER_MAX_MO} €</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ersparnis */}
            <div className="bg-white border-2 border-[#3D7A5C] rounded-2xl overflow-hidden shadow-md mb-6">
              <div className="bg-[#E8F5EE] px-6 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#3D7A5C] mb-1">Ihre Ersparnis</p>
                <p className="text-[16px] font-bold text-[#2F5A44]">Mit 24h-Pflege sparen Sie</p>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
                  <div>
                    <p className="text-[36px] font-bold text-[#3D7A5C] leading-none">
                      {ergebnis.ersparnis > 0 ? '−' : '+'}{Math.abs(ergebnis.ersparnis).toLocaleString('de')} €
                    </p>
                    <p className="text-[12px] text-[#8B8B8B] mt-1">pro Monat im Schnitt</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[24px] font-bold text-[#3D7A5C] leading-none">
                      {ergebnis.ersparnisProzent > 0 ? '−' : '+'}{Math.abs(ergebnis.ersparnisProzent)} %
                    </p>
                    <p className="text-[12px] text-[#8B8B8B] mt-1">gegenüber Pflegeheim</p>
                  </div>
                </div>
                <div className="bg-[#F8F7F5] rounded-xl px-4 py-3 mb-5">
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                    <strong className="text-[#3D3D3D]">Hochgerechnet:</strong>{' '}
                    {(ergebnis.ersparnis * 12).toLocaleString('de')} € pro Jahr — bei gleichzeitig vertrautem Umfeld,
                    persönlicher 1:1-Betreuung und höherer Lebensqualität.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/beratungsgespraech/"
                    className="inline-flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-3 px-5 rounded-xl transition-colors"
                  >
                    Kostenfreie Beratung →
                  </a>
                  <a
                    href="https://kostenrechner.primundus.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-[#8B7355] text-[#8B7355] font-semibold text-[14px] py-3 px-5 rounded-xl hover:bg-[#F2EDE6] transition-colors"
                  >
                    Detaillierter Kostenrechner →
                  </a>
                </div>
              </div>
            </div>

            <p className="text-[12px] text-[#8B8B8B] leading-relaxed">
              <strong>Datenquelle:</strong> Pflegeheim-Eigenanteile aus VDEK-Pflegelotse (Stand 2026).
              24h-Pflege-Werte sind Marktpreise für seriöse EU-Vermittlungen.
            </p>
          </>
        )}

      </div>
    </div>
  )
}
