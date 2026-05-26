import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'nach-entlassung', title: 'Die Zeit nach der Entlassung' },
  { id: 'haeufige-ops', title: 'Häufige OPs im Alter' },
  { id: 'betreuung', title: 'Was die Betreuungskraft übernimmt' },
  { id: 'leistungen', title: 'Kassenzuschüsse nach OP' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege nach OP zuhause — Betreuung & Unterstützung | Primundus',
  description: 'Pflege nach Operation zuhause: Was nach Hüft-OP, Knie-OP und Herzoperationen zu beachten ist, welche Unterstützung nötig ist und welche Kassenzuschüsse greifen.',
  alternates: { canonical: 'https://primundus.de/pflege-nach-op/' },
  openGraph: {
    title: 'Pflege nach OP zuhause | Primundus',
    description: 'Häusliche Betreuung nach einer Operation — was nötig ist und wer die Kosten trägt.',
    url: 'https://primundus.de/pflege-nach-op/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege nach OP zuhause — Betreuung und Unterstützung',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflege-nach-op/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Pflege nach OP', item: 'https://primundus.de/pflege-nach-op/' },
    ],
  },
]

export default function PflegeNachOp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/krankheiten/" className="hover:text-[#8B7355] transition-colors">Krankheiten</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflege nach OP</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflege nach OP zuhause — Betreuung & Unterstützung
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Nach einer Operation werden ältere Menschen heute schnell aus dem Krankenhaus entlassen — oft schneller als ihre Angehörigen gewappnet sind. Die ersten Wochen zuhause sind kritisch: Wundversorgung durch den Pflegedienst, Mobilisierung, Hilfsbedarf bei allen Alltagsaufgaben. Eine 24h-Betreuungskraft überbrückt diese Zeit — und lässt sich schon vor der OP planen.
          </p>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Wichtig: Betreuungskraft VOR der OP organisieren</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Bei geplanten Operationen (Hüft-TEP, Knie-TEP, Herzeingriff): Primundus-Anfrage idealerweise 2–3 Wochen vor dem OP-Termin stellen. So ist die Kraft pünktlich zur Krankenhausentlassung bereit — ohne Versorgungslücke.
            </p>
          </div>

          <h2 id="nach-entlassung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die Zeit nach der Entlassung — was zuhause nötig ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Krankenhäuser entlassen heute früh — oft wenn die Person noch erhebliche Unterstützung braucht. Der Sozialdienst des Krankenhauses hilft bei der Planung der Nachversorgung — diesen Ansprechpartner frühzeitig ansprechen.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { phase: 'Erste Woche zuhause', was: 'Vollständige Hilfe bei Körperpflege, Ankleiden, Mobilisierung. Wundversorgung durch ambulanten Pflegedienst (Behandlungspflege). Schmerzmittelgabe nach Zeitplan. Keine Eigenbelastung.' },
              { phase: 'Wochen 2–6', was: 'Zunehmend selbstständiger — aber Hilfe noch bei allen körperlichen Aktivitäten. Physiotherapie zu Hause oder begleitete Fahrten. Wunden heilen, Schwellung geht zurück.' },
              { phase: 'Ab Woche 6–8', was: 'Viele Patienten sind deutlich selbstständiger. Entscheidung: Braucht es weitere Unterstützung oder kann auf Alltagsunterstützung durch ambulante Dienste umgestellt werden?' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.phase}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.was}</p>
              </div>
            ))}
          </div>

          <h2 id="haeufige-ops" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Häufige OPs im Alter — was zu beachten ist
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                op: 'Hüft-TEP (Hüftgelenkersatz)',
                dauer: '6–12 Wochen Erholungsphase',
                besonderheiten: [
                  'Kein Beugen des Hüftgelenks über 90° in ersten Wochen',
                  'Speziell erhöhte Toilette und Sitzerhöhung nötig',
                  'Keine Schuhe alleine anziehen in ersten Wochen',
                  'Thrombose-Prophylaxe: tägliche Injektion durch Pflegedienst',
                ],
              },
              {
                op: 'Knie-TEP (Kniegelenkersatz)',
                dauer: '6–8 Wochen Erholungsphase',
                besonderheiten: [
                  'Treppensteigen eingeschränkt — Schlafplatz idealerweise im Erdgeschoss',
                  'Kühlpacks regelmäßig für Schwellung',
                  'Intensive Physiotherapie wichtig für gutes Langzeitergebnis',
                  'Schmerzmanagement in ersten Wochen oft aufwändig',
                ],
              },
              {
                op: 'Herzeingriff (Bypass, Klappenersatz)',
                dauer: '4–8 Wochen Erholungsphase',
                besonderheiten: [
                  'Brustbein heilt ca. 6 Wochen — keine Hebung von Lasten',
                  'Herzrhythmus und Blutdruck täglich messen und dokumentieren',
                  'Wundkontrolle an Narbe',
                  'Keine Fahrerlaubnis in ersten Wochen',
                ],
              },
            ].map((item) => (
              <div key={item.op} className="bg-white rounded-xl border border-[#E5E3DF] overflow-hidden">
                <div className="bg-[#F8F7F5] px-5 py-3 border-b border-[#E5E3DF] flex items-center justify-between">
                  <p className="text-[14px] font-bold text-[#1C1C1C]">{item.op}</p>
                  <span className="text-[12px] text-[#8B7355] font-semibold bg-[#F2EDE6] px-3 py-1 rounded-full">{item.dauer}</span>
                </div>
                <ul className="divide-y divide-[#F8F7F5]">
                  {item.besonderheiten.map(b => (
                    <li key={b} className="flex items-start gap-3 px-5 py-3 text-[14px] text-[#2E2E2E]">
                      <span className="text-[#3D7A5C] flex-shrink-0 mt-0.5">→</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="betreuung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was die Betreuungskraft nach OP übernimmt
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { was: '✓ Körperpflege & Ankleiden', detail: 'Vollständige Unterstützung in den ersten Wochen — langsam, sorgfältig, die Operationsstelle schonend.' },
              { was: '✓ Mobilisierung & Sicherheit', detail: 'Aufstehen, Gehen, Treppensteigen begleiten. Die 24h-Kraft kennt die Bewegungseinschränkungen und handelt entsprechend.' },
              { was: '✓ Physiotherapie-Übungen begleiten', detail: 'Übungen die der Physiotherapeut verordnet hat täglich begleiten und dokumentieren.' },
              { was: '✓ Medikamentenerinnerung', detail: 'Schmerzmedikamente, Blutverdünner, Herzmedikamente — zur richtigen Zeit erinnern und dokumentieren.' },
              { was: '✓ Arzt- und Physiotherapeut-Termine begleiten', detail: 'Fahren, begleiten, Informationen weiterleiten.' },
              { was: '✗ Wundversorgung', detail: 'Verbandswechsel und Nahtversorgung ist Behandlungspflege — übernimmt ambulanter Pflegedienst täglich oder nach Bedarf.' },
            ].map((item) => (
              <div key={item.was} className={`rounded-xl p-5 border ${item.was.startsWith('✗') ? 'bg-[#FDF0EE] border-[rgba(231,111,99,0.15)]' : 'bg-white border-[#E5E3DF]'}`}>
                <p className={`text-[14px] font-bold mb-1 ${item.was.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#1C1C1C]'}`}>{item.was}</p>
                <p className={`text-[14px] leading-relaxed ${item.was.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#2E2E2E]'}`}>{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kassenzuschüsse nach OP
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { leistung: 'Pflegegrad beantragen', detail: 'Nach einer OP mit Einschränkungen sofort Antrag stellen. Rückwirkend ab Antragsdatum. Typisch nach Hüft- oder Knie-OP: PG 1–3 je nach verbleibendem Hilfebedarf.' },
              { leistung: 'Kurzzeitpflege (§ 42 SGB XI)', detail: 'Bis 1.612 €/Jahr wenn nach Krankenhausaufenthalt vorübergehend vollstationäre Pflege nötig ist. Alternativ: zu Hause durch Betreuungskraft organisiert.' },
              { leistung: 'Behandlungspflege (SGB V)', detail: 'Wundversorgung, Injektionen durch Pflegedienst — von der Krankenversicherung übernommen. Hausarzt-Verordnung holen.' },
              { leistung: 'Hilfsmittelversorgung (SGB V)', detail: 'Rollator, Gehstock, Sitzerhöhung, Badehilfen — mit Rezept von der Krankenkasse. Nach OP schnell verordnen lassen.' },
            ].map((item) => (
              <div key={item.leistung} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.leistung}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wann brauche ich nach einer OP eine Betreuungskraft?', a: 'Immer wenn man alleine lebt oder Angehörige nicht dauerhaft die Betreuung übernehmen können. Nach Hüft-OP, Knie-OP oder Herzeingriff: 4–12 Wochen intensive Unterstützung nötig.' },
              { q: 'Wann sollte ich die Betreuungskraft für die Zeit nach der OP organisieren?', a: 'Bei geplanter OP: 2–3 Wochen vorher Primundus kontaktieren. So ist die Kraft pünktlich zur Entlassung bereit.' },
              { q: 'Was kostet eine Betreuungskraft nach der OP?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegekasse-Zuschüssen (nach Pflegegrad), Kurzzeitpflege-Budget und Steuerabzug deutlich reduzierbar.' },
              { q: 'Zahlt die Krankenkasse die Betreuung nach einer OP?', a: 'Behandlungspflege (Wundversorgung, Injektionen): Ja, über Krankenversicherung. Grundpflege und Betreuung: über Pflegekasse wenn Pflegegrad vorhanden. Die Betreuungskraft selbst: privat mit Kassenzuschüssen.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{item.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-[#2E2E2E] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
