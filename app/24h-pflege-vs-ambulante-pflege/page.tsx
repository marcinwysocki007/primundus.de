import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'unterschied', title: 'Der grundlegende Unterschied' },
  { id: 'kosten', title: 'Kostenvergleich 2026' },
  { id: 'wann-was', title: 'Wann was sinnvoll ist' },
  { id: 'kombination', title: 'Kombination möglich?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24h-Pflege vs. ambulante Pflege — Vergleich 2026 | Primundus',
  description: '24h-Pflege vs. ambulanter Pflegedienst: Was kostet was, wann ist welche Form sinnvoll und wann wird aus ambulant eine 24h-Betreuung notwendig? Vollständiger Vergleich.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-vs-ambulante-pflege/' },
  openGraph: {
    title: '24h-Pflege vs. ambulante Pflege 2026 | Primundus',
    description: 'Vollständiger Vergleich: Kosten, Leistungen und wann welche Pflegeform sinnvoll ist.',
    url: 'https://primundus.de/24h-pflege-vs-ambulante-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege vs. ambulante Pflege — Vergleich 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/24h-pflege-vs-ambulante-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche/' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege vs. ambulante Pflege', item: 'https://primundus.de/24h-pflege-vs-ambulante-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen 24h-Pflege und ambulantem Pflegedienst?', acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Pflegedienst kommt für definierte Einsätze (typischerweise 1–3 Mal täglich) und ist außerhalb dieser Zeiten nicht vor Ort. Eine 24h-Betreuungskraft lebt dauerhaft im Haushalt und ist rund um die Uhr erreichbar — für Notfälle, Gesellschaft und alle Pflegeaufgaben.' } },
      { '@type': 'Question', name: 'Wann ist ein ambulanter Pflegedienst ausreichend?', acceptedAnswer: { '@type': 'Answer', text: 'Bei leichtem bis moderatem Pflegebedarf (PG 2–3) und wenn Angehörige den Rest der Zeit übernehmen können. Wenn keine Sturzgefahr in der Nacht besteht, keine Demenz mit Weglaufen vorliegt und die Person tagsüber weitgehend selbstständig ist.' } },
      { '@type': 'Question', name: 'Was kostet ein ambulanter Pflegedienst im Monat?', acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Pflegedienst kostet typischerweise 800–2.500 €/Monat je nach Leistungsumfang und Einsatzhäufigkeit. Bei PG 2–5 können Sachleistungen (796–2.299 €/Monat) für den Pflegedienst eingesetzt werden — der Eigenanteil kann gering sein oder entfallen.' } },
    ],
  },
]

export default function VsAmbulantePflege() {
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
            <a href="/vergleiche/" className="hover:text-[#8B7355] transition-colors">Vergleiche</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">24h-Pflege vs. ambulante Pflege</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24h-Pflege vs. ambulante Pflege — Vergleich 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Ambulante Pflege oder 24h-Betreuung — das ist oft die erste Entscheidung wenn Pflege notwendig wird. Ambulante Dienste kommen mehrmals täglich für definierte Einsätze. Eine 24h-Kraft lebt im Haushalt und ist immer da. Wann was sinnvoll ist, hängt nicht nur von den Kosten ab — sondern vom tatsächlichen Pflegebedarf.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Ambulante Pflege: kommt für definierte Einsätze — außerhalb nicht vor Ort',
                '24h-Betreuung: Kraft lebt im Haushalt — rund um die Uhr erreichbar',
                'Kosten ambulant: 800–2.500 €/Monat, oft durch Sachleistungen gedeckt',
                'Kosten 24h: 2.200–3.500 €/Monat, Eigenanteil mit Zuschüssen ab ca. 1.500 €',
                'Wechsel von ambulant zu 24h meist wenn: Demenz, Sturzrisiko nachts, hoher Gesamtbedarf',
                'Kombination möglich: ambulant + 24h-Kraft parallel in bestimmten Konstellationen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="unterschied" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Der grundlegende Unterschied
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der entscheidende Unterschied ist nicht das Leistungsspektrum — sondern die Verfügbarkeit. Ein ambulanter Pflegedienst kommt zu vereinbarten Zeiten und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt und ist immer anwesend.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">Ambulante Pflege</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">24h-Pflege (Primundus)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Verfügbarkeit', 'Nur zu Einsatzzeiten', 'Rund um die Uhr'],
                    ['Nächtliche Sicherheit', 'Kein Personal nachts', 'Immer anwesend'],
                    ['Gesellschaft & Betreuung', 'Nur während Einsatz', 'Ganztagsbegleitung'],
                    ['Haushalt', 'Begrenzt je Einsatz', 'Vollständige Haushaltsführung'],
                    ['Demenzbetreuung', 'Schwierig ohne Kontinuität', 'Vertraute Person immer da'],
                    ['Kosten/Monat', '800–2.500 €', '2.200–3.500 €'],
                    ['Eigenanteil (PG 3)', 'Oft sehr gering durch Sachleistungen', 'ca. 1.500–2.000 € nach Zuschüssen'],
                    ['Flexibilität', 'Einsatzzeiten planbar', 'Täglich kündbar'],
                  ].map(([kriterium, ambulant, pflege24h], i) => (
                    <tr key={kriterium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{kriterium}</td>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{ambulant}</td>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{pflege24h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kostenvergleich 2026
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Kostenvergleich ist komplex — weil die Pflegekasse beide Modelle unterschiedlich bezuschusst.
          </p>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Ambulante Pflege — Kosten und Kassenzuschüsse</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-3">Die Pflegekasse zahlt bei ambulanter Pflege die Sachleistungen direkt an den Pflegedienst: PG 2 = 796 €/Monat, PG 3 = 1.497 €/Monat, PG 4 = 1.859 €/Monat, PG 5 = 2.299 €/Monat. Viele ambulante Pflegeeinsätze werden damit vollständig gedeckt — Eigenanteil kann gegen null gehen wenn der Gesamtbedarf im Sachleistungsrahmen liegt.</p>
              <p className="text-[13px] text-[#8B8B8B]">Bei hohem Pflegebedarf (viele Einsätze täglich) übersteigen die Kosten schnell den Sachleistungsrahmen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">24h-Pflege — Kosten und Kassenzuschüsse</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-3">Gesamtkosten 2.200–3.500 €/Monat. Mit Pflegegeld (statt Sachleistungen), Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1.500–1.900 €/Monat. Bei PG 4: ca. 1.700–2.100 €/Monat.</p>
              <p className="text-[13px] text-[#8B8B8B]">Inklusive: 24h-Verfügbarkeit, Haushalt, Betreuung, Gesellschaft — alles in einem Preis.</p>
            </div>
          </div>

          <h2 id="wann-was" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann ist was sinnvoll?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                label: 'Ambulante Pflege sinnvoll wenn…',
                items: [
                  'Pflegebedarf auf 2–3 definierte Einsätze täglich begrenzt ist',
                  'Angehörige den Rest der Zeit zuverlässig übernehmen können',
                  'Keine nächtliche Betreuung nötig',
                  'Keine Demenz mit Weglaufen oder Verwirrtheit nachts',
                  'Kosten vollständig durch Sachleistungen gedeckt werden können',
                ],
                color: 'bg-[#E8F5EE] border-[rgba(61,122,92,0.2)]',
                textColor: 'text-[#2A5C3F]',
              },
              {
                label: '24h-Pflege sinnvoll wenn…',
                items: [
                  'Pflegebedarf über den ganzen Tag verteilt ist und Angehörige nicht übernehmen können',
                  'Nächtliche Unruhe, Toilettengänge oder Orientierungslosigkeit nachts auftreten',
                  'Demenz mit Weglaufen oder Selbstgefährdung vorliegt',
                  'Gesamtkosten ambulant die Sachleistungen deutlich übersteigen',
                  'Gesellschaft und Begleitung rund um die Uhr gewünscht wird',
                ],
                color: 'bg-[#F2EDE6] border-[rgba(139,115,85,0.2)]',
                textColor: 'text-[#6B5A44]',
              },
            ].map((block) => (
              <div key={block.label} className={`rounded-2xl p-5 border ${block.color}`}>
                <p className={`text-[13px] font-bold uppercase tracking-[0.08em] mb-3 ${block.textColor}`}>{block.label}</p>
                <ul className="space-y-1.5">
                  {block.items.map((item) => (
                    <li key={item} className={`text-[14px] leading-relaxed ${block.textColor} flex gap-2`}>
                      <span className="flex-shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="kombination" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kombination aus ambulant und 24h möglich?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ja — die sogenannte Kombinationsleistung ermöglicht es, Sachleistungen (ambulanter Pflegedienst) und Pflegegeld (für private Betreuung) zu kombinieren. Das ist besonders dann sinnvoll wenn ein ambulanter Pflegedienst bestimmte Aufgaben übernimmt (z.B. medizinische Behandlungspflege) und eine Betreuungskraft oder Angehörige den Rest.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Kombinationsleistung erklärt:{' '}
            <a href="/kombinationsleistung-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kombinationsleistung Pflege — Sachleistung + Pflegegeld kombinieren</a>
            {' · '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was kostet 24h-Pflege?</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist der Unterschied zwischen ambulanter Pflege und 24h-Pflege?', a: 'Ambulanter Pflegedienst kommt zu vereinbarten Zeiten, geht dann wieder. 24h-Betreuungskraft lebt im Haushalt und ist immer da. Der entscheidende Unterschied: nächtliche Sicherheit, Demenzbetreuung, Gesellschaft rund um die Uhr.' },
              { q: 'Wann reicht ambulante Pflege nicht mehr aus?', a: 'Wenn Pflegebedarf über mehrere Tageszeiten verteilt ist und Angehörige nicht übernehmen können, bei nächtlichem Betreuungsbedarf, bei Demenz mit Weglaufen oder Selbstgefährdung, oder wenn ambulante Kosten die Sachleistungen deutlich übersteigen.' },
              { q: 'Was kostet ambulante Pflege im Vergleich zu 24h?', a: 'Ambulant: 800–2.500 €/Monat, bei PG 2–5 oft durch Sachleistungen vollständig gedeckt. 24h: 2.200–3.500 €/Monat brutto, Eigenanteil mit Zuschüssen bei PG 3 ca. 1.500–1.900 €.' },
              { q: 'Kann man ambulante Pflege und 24h kombinieren?', a: 'Ja — Kombinationsleistung: Sachleistungen für ambulanten Pflegedienst + anteiliges Pflegegeld für private Betreuung. Sinnvoll wenn z.B. medizinische Behandlungspflege durch Dienst und Betreuung durch 24h-Kraft.' },
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
