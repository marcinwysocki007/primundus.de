import { REGION_NAMEN, STAEDTE } from '@/lib/staedte'

// Verlinkungsebenen 1+2 der Städte-Silostruktur (SEO 14.08.2026):
// CitiesOfRegion auf den 13 Bundesland-Seiten, AllRegionsIndex im
// /regionen-Hub. Datenquelle ist immer lib/staedte.ts — neue Stadt dort
// eintragen genügt.

export function CitiesOfRegion({ region }: { region: string }) {
  const cities = STAEDTE.filter((s) => s.region === region)
  if (cities.length === 0) return null

  return (
    <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
      <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#8B7355] mb-2">
        Unsere Einsatzorte in {REGION_NAMEN[region]}
      </p>
      <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
        Wo Ihre Familie zuhause ist, sind wir es auch. Wählen Sie den Ort, der Ihnen am nächsten
        liegt — dort finden Sie Preise, Ablauf und Ansprechpartner für Ihre Region:
      </p>
      <div className="flex flex-wrap gap-2">
        {cities.map((s) => (
          <a
            key={s.slug}
            href={`/24h-pflege-${s.slug}`}
            className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors"
          >
            {s.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export function AllRegionsIndex() {
  const regions = Object.keys(REGION_NAMEN)
  return (
    <div className="space-y-6">
      {regions.map((r) => {
        const cities = STAEDTE.filter((s) => s.region === r)
        return (
          <div key={r} className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
            <div className="flex items-baseline justify-between gap-3 mb-3 flex-wrap">
              <h3 className="text-[18px] font-bold text-[#1C1C1C]">{REGION_NAMEN[r]}</h3>
              <a
                href={`/24h-pflege-${r}`}
                className="text-[13px] font-semibold text-[#8B7355] hover:text-[#6B5738] underline underline-offset-2"
              >
                Zur Übersicht {REGION_NAMEN[r]}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {cities.map((s) => (
                <a
                  key={s.slug}
                  href={`/24h-pflege-${s.slug}`}
                  className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-3.5 py-1.5 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
