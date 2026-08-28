import { grenznachbarn, REGION_NAMEN, STAEDTE } from '@/lib/staedte'

// "In Ihrer Nähe"-Block für Städteseiten (SEO 14.08.2026): löst das
// Orphan-Problem — vorher verlinkte keine einzige Seite auf die 187
// Städteseiten. Deterministisch: 6 Städte derselben Region, alphabetisch
// rund um die aktuelle Stadt rotiert (stabil über Builds, kein Zufall).
//
// 28.08.2026: Die Beschränkung auf das eigene Bundesland war der Grund,
// warum ausgerechnet die Seiten im Osten und im Saarland auf zwei bis vier
// eingehende Links kamen und Google sie in 90 Tagen kein einziges Mal
// ausgeliefert hat. Saarbrücken zeigte gar keinen Nachbarn — das eigene
// Land hat nur diese eine Stadtseite. Landesgrenzen sind für pflegende
// Angehörige ohnehin keine Kategorie; 35 km nach Leipzig sind näher als
// 200 km nach Magdeburg. Die Paare stehen von Hand geprüft in
// GRENZNACHBARN, siehe Begründung dort.
export function NearbyCities({ current }: { current: string }) {
  const me = STAEDTE.find((s) => s.slug === current)
  if (!me) return null

  const eigene = STAEDTE.filter((s) => s.region === me.region && s.slug !== current)
  const idx = STAEDTE.filter((s) => s.region === me.region).findIndex((s) => s.slug === current)
  // Aus dem eigenen Land höchstens 6 — bei vielen Städten rotiert die Auswahl
  // um die aktuelle Stadt, damit jede Seite andere Nachbarn zeigt.
  const ausRegion = eigene.length <= 6
    ? eigene
    : Array.from({ length: 6 }, (_, i) => eigene[(idx + i) % eigene.length])

  const ueberGrenze = grenznachbarn(current)
    .map((slug) => STAEDTE.find((s) => s.slug === slug))
    .filter((s): s is (typeof STAEDTE)[number] => Boolean(s) && s!.region !== me.region)

  if (ausRegion.length === 0 && ueberGrenze.length === 0) return null

  return (
    <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
      <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-2">
        Auch in Ihrer Nähe
      </p>
      <p className="text-[15px] leading-relaxed text-pm-body mb-4">
        Unsere Betreuungskräfte sind bundesweit im Einsatz — auch dort, wo Ihre Eltern wirklich
        wohnen. Vielleicht ist einer dieser Orte näher dran:
      </p>
      <div className="flex flex-wrap gap-2">
        {[...ausRegion, ...ueberGrenze].map((s) => (
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
