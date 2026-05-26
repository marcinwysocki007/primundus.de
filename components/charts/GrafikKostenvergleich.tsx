'use client'

export function GrafikKostenvergleich() {
  const pflegegrade = [
    { grad: 'Pflegegrad 2', pg: 347, eb: 131, gesamt: 478 },
    { grad: 'Pflegegrad 3', pg: 599, eb: 131, gesamt: 730 },
    { grad: 'Pflegegrad 4', pg: 800, eb: 131, gesamt: 931 },
    { grad: 'Pflegegrad 5', pg: 990, eb: 131, gesamt: 1121 },
  ]

  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-[#E5E3DF] shadow-sm bg-white">

      {/* Header */}
      <div className="bg-[#8B7355] px-6 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 mb-1">
            Kostenvergleich 2026
          </p>
          <p className="text-[16px] font-bold text-white leading-snug">
            24h-Pflege vs. Pflegeheim — was kostet wirklich mehr?
          </p>
        </div>
        <span className="flex-shrink-0 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-[11px] font-semibold text-white/90 whitespace-nowrap">
          primundus.de
        </span>
      </div>

      <div className="px-6 py-5">

        {/* Vergleich Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">

          {/* 24h-Pflege */}
          <div className="rounded-xl border-2 border-[#8B7355] p-5">
            <span className="inline-block bg-[#8B7355] text-white text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-3">
              Empfohlen
            </span>
            <p className="text-[15px] font-bold text-[#1C1C1C] mb-4">24h-Pflege zuhause</p>
            <div className="space-y-2.5">
              {[
                { label: 'Betreuungskosten/Monat', value: '2.500 €', type: 'neutral' },
                { label: 'Pflegegeld Pflegegrad 3', value: '– 599 €', type: 'positive' },
                { label: 'Entlastungsbetrag/Monat', value: '– 131 €', type: 'positive' },
                { label: 'Steuerabzug (ca.)', value: '– 50 €', type: 'positive' },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-2">
                  <span className="text-[13px] text-[#8B8B8B]">{row.label}</span>
                  <span className={`text-[13px] font-semibold flex-shrink-0 ${row.type === 'positive' ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-[#E5E3DF] pt-2.5 flex items-baseline justify-between">
                <span className="text-[13px] font-semibold text-[#8B8B8B]">Eigenanteil/Monat</span>
                <span className="text-[20px] font-bold text-[#8B7355]">ca. 1.720 €</span>
              </div>
            </div>
          </div>

          {/* Pflegeheim */}
          <div className="rounded-xl border border-[#E5E3DF] p-5">
            <span className="inline-block bg-[#F8F7F5] text-[#8B8B8B] border border-[#E5E3DF] text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-3">
              Vergleich
            </span>
            <p className="text-[15px] font-bold text-[#1C1C1C] mb-4">Pflegeheim (vollstationär)</p>
            <div className="space-y-2.5">
              {[
                { label: 'Gesamtkosten/Monat', value: 'ab 4.000 €', type: 'neutral' },
                { label: 'Pflegekasse übernimmt', value: '– ca. 1.500 €', type: 'positive' },
                { label: 'Unterkunft/Verpflegung', value: 'inklusive', type: 'neutral' },
                { label: 'Investitionsumlage', value: 'inklusive', type: 'neutral' },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-2">
                  <span className="text-[13px] text-[#8B8B8B]">{row.label}</span>
                  <span className={`text-[13px] font-semibold flex-shrink-0 ${row.type === 'positive' ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-[#E5E3DF] pt-2.5 flex items-baseline justify-between">
                <span className="text-[13px] font-semibold text-[#8B8B8B]">Eigenanteil/Monat Ø</span>
                <span className="text-[20px] font-bold text-[#1C1C1C]">ab 2.500 €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Entlastungsbudget Hinweis */}
        <div className="mt-4 bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-xl px-4 py-3">
          <p className="text-[13px] text-[#2A5C3F] leading-relaxed">
            <strong>Zusätzlich:</strong> Gemeinsames Entlastungsbudget 3.539 €/Jahr (seit Juli 2025) für Verhinderungs- und Kurzzeitpflege. Steuerabzug haushaltsnahe Dienstleistung: 20 % der Kosten, max. 4.000 €/Jahr Ersparnis.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-[#E5E3DF] flex justify-between items-center">
        <p className="text-[11px] text-[#8B8B8B]">Ø-Eigenanteil Pflegeheim: vdek 2024 · Pflegegeld: GKV-Spitzenverband 2025</p>
        <p className="text-[11px] font-semibold text-[#8B7355]">primundus.de/kosten</p>
      </div>
    </div>
  )
}
