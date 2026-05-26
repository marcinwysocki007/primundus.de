'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const data = [
  { jahr: '2007', wert: 2.2, highlight: false },
  { jahr: '2015', wert: 3.2, highlight: false },
  { jahr: '2019', wert: 4.1, highlight: false },
  { jahr: '2021', wert: 5.0, highlight: false },
  { jahr: '2024', wert: 6.0, highlight: true },
  { jahr: '2050*', wert: 7.1, highlight: false, prognose: true },
]

export function GrafikPflegestatistik() {
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-[#E5E3DF] shadow-sm bg-white">

      {/* Header */}
      <div className="bg-[#8B7355] px-6 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 mb-1">
            Pflegestatistik Deutschland
          </p>
          <p className="text-[16px] font-bold text-white leading-snug">
            6 Millionen Pflegebedürftige — 86 % werden zu Hause versorgt
          </p>
          <p className="text-[11px] text-white/55 mt-1">
            Quelle: Statistisches Bundesamt (Destatis), Pflegestatistik 2024
          </p>
        </div>
        <span className="flex-shrink-0 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-[11px] font-semibold text-white/90 whitespace-nowrap">
          primundus.de
        </span>
      </div>

      <div className="px-6 py-5">

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { value: '6,0 Mio.', label: 'Pflegebedürftige\nin Deutschland 2024', accent: true },
            { value: '86 %', label: 'werden zu Hause\nversorgt', accent: false },
            { value: '+15 %', label: 'Wachstum\nseit 2021', accent: false },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-[#F8F7F5] rounded-xl p-4 text-center">
              <p className={`text-[22px] font-bold leading-none mb-1.5 ${kpi.accent ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>
                {kpi.value}
              </p>
              <p className="text-[12px] text-[#8B8B8B] leading-snug whitespace-pre-line">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>

        {/* Donut + Legende */}
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B] mb-4">
          Versorgungsform 2024
        </p>
        <div className="flex items-center gap-6 mb-6">
          {/* Donut SVG */}
          <div className="flex-shrink-0 relative w-[110px] h-[110px]">
            <svg viewBox="0 0 110 110" className="w-full h-full -rotate-90">
              <circle cx="55" cy="55" r="40" fill="none" stroke="#E5E3DF" strokeWidth="18" />
              <circle
                cx="55" cy="55" r="40"
                fill="none"
                stroke="#8B7355"
                strokeWidth="18"
                strokeDasharray={`${86 * 2.513} ${100 * 2.513}`}
                strokeLinecap="butt"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[18px] font-bold text-[#1C1C1C] leading-none">86 %</span>
              <span className="text-[10px] text-[#8B8B8B]">zu Hause</span>
            </div>
          </div>

          {/* Legende */}
          <div className="flex-1 space-y-3">
            {[
              { color: '#8B7355', label: 'Häusliche Pflege — 5,1 Mio.', sub: 'Angehörige, Pflegedienste, 24h-Betreuung' },
              { color: '#E5E3DF', label: 'Pflegeheim — 0,9 Mio.', sub: 'Vollstationäre Dauerpflege' },
              { color: '#E76F63', label: '24h-Betreuungskraft — ca. 350.000', sub: 'Betreuungskraft im Haushalt (Schätzung)' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span
                  className="w-3 h-3 rounded-sm flex-shrink-0 mt-0.5"
                  style={{ background: item.color }}
                />
                <div>
                  <p className="text-[13px] font-semibold text-[#1C1C1C]">{item.label}</p>
                  <p className="text-[12px] text-[#8B8B8B]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Balkendiagramm */}
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B] mb-4">
          Entwicklung Pflegebedürftige (in Millionen)
        </p>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={32} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
              <XAxis
                dataKey="jahr"
                tick={{ fontSize: 12, fill: '#8B8B8B' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 8]}
                ticks={[0, 2, 4, 6, 8]}
                tick={{ fontSize: 11, fill: '#8B8B8B' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                formatter={(value: number) => [`${value} Mio.`, 'Pflegebedürftige']}
                contentStyle={{ borderRadius: 8, border: '1px solid #E5E3DF', fontSize: 13 }}
                cursor={{ fill: '#F8F7F5' }}
              />
              <Bar dataKey="wert" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.prognose ? '#F5C4BB' : entry.highlight ? '#E76F63' : '#8B7355'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[11px] text-[#8B8B8B] mt-1">* Prognose Statistisches Bundesamt</p>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-[#E5E3DF] flex justify-between items-center">
        <p className="text-[11px] text-[#8B8B8B]">Quelle: Destatis · Pflegestatistik 2024</p>
        <p className="text-[11px] font-semibold text-[#8B7355]">primundus.de/was-ist-24-stunden-pflege</p>
      </div>
    </div>
  )
}
