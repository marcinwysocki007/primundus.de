import { REGION_NAMEN, STAEDTE } from '@/lib/staedte'

// "In Ihrer Nähe"-Block für Städteseiten (SEO 14.08.2026): löst das
// Orphan-Problem — vorher verlinkte keine einzige Seite auf die 187
// Städteseiten. Deterministisch: 6 Städte derselben Region, alphabetisch
// rund um die aktuelle Stadt rotiert (stabil über Builds, kein Zufall).
export function NearbyCities({ current }: { current: string }) {
  const me = STAEDTE.find((s) => s.slug === current)
  if (!me) return null

  const region = STAEDTE.filter((s) => s.region === me.region && s.slug !== current)
  const idx = STAEDTE.filter((s) => s.region === me.region).findIndex((s) => s.slug === current)
  const nachbarn = region.length <= 6
    ? region
    : Array.from({ length: 6 }, (_, i) => region[(idx + i) % region.length])

  return (
    <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
      <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-2">
        Auch in Ihrer Nähe
      </p>
      <p className="text-[15px] leading-relaxed text-pm-body mb-4">
        Unsere Betreuungskräfte sind in ganz {REGION_NAMEN[me.region]} im Einsatz — auch dort, wo Ihre
        Eltern wirklich wohnen. Vielleicht ist einer dieser Orte näher dran:
      </p>
      <div className="flex flex-wrap gap-2">
        {nachbarn.map((s) => (
          <a
            key={s.slug}
            href={`/24h-pflege-${s.slug}`}
            className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors"
          >
            24h-Pflege {s.name}
          </a>
        ))}
        <a
          href={`/24h-pflege-${me.region}`}
          className="text-[13px] font-semibold text-white bg-pm-taupe hover:bg-[#6B5738] rounded-full px-4 py-2 transition-colors"
        >
          Alle Orte in {REGION_NAMEN[me.region]}
        </a>
      </div>
    </div>
  )
}
