import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'unterschied', title: 'Der grundlegende Unterschied' },
  { id: 'kosten', title: 'Kostenvergleich 2026' },
  { id: 'wann-was', title: 'Wann was sinnvoll ist' },
  { id: 'kombination', title: 'Kombination möglich' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegedienst oder 24h-Kraft — was ist besser? | Primundus',
  description: 'Ambulanter Pflegedienst oder 24h-Betreuungskraft? Vollständiger Vergleich: Kosten, Leistungen, wann was sinnvoll ist und wann eine Kombination am besten trägt.',
  alternates: { canonical: 'https://primundus.de/pflegedienst-oder-24h-kraft/' },
  openGraph: {
    title: 'Pflegedienst oder 24h-Kraft? | Primundus',
    description: 'Ambulanter Pflegedienst vs. 24h-Betreuungskraft — ehrlicher Vergleich 2026.',
    url: 'https://primundus.de/pflegedienst-oder-24h-kraft/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegedienst oder 24h-Kraft — was ist besser?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegedienst-oder-24h-kraft/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegedienst oder 24h-Kraft', item: 'https://primundus.de/pflegedienst-oder-24h-kraft/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen ambulantem Pflegedienst und 24h-Kraft?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Pflegedienst kommt zu definierten Zeiten (typisch 1–3 Mal täglich) und geht danach wieder. Eine 24h-Betreuungskraft lebt dauerhaft im Haushalt und ist rund um die Uhr — einschließlich Nächten — erreichbar. Der Pflegedienst ist auf Grundpflege und Behandlungspflege spezialisiert; die 24h-Kraft übernimmt zusätzlich Haushalt, Gesellschaft und Begleitung.' },
      },
    ],
  },
]

export default function PflegedienstOder24hKraft() {
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
            <span className="text-[#1C1C1C]">Pflegedienst oder 24h-Kraft</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegedienst oder 24h-Kraft — was ist die bessere Wahl?
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Ambulanter Pflegedienst oder 24h-Betreuungskraft zuhause — das ist oft die erste Frage wenn Pflege notwendig wird. Beide sind legitime Lösungen. Welche besser passt, hängt vom Pflegebedarf, den Lebensumständen und dem Budget ab. Und sehr oft ist die Antwort: beide zusammen.
          </p>

          <h2 id="unterschied" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Der grundlegende Unterschied
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der entscheidende Unterschied ist nicht was geleistet wird — sondern wann und wie kontinuierlich.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Ambulanter Pflegedienst</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">24h-Betreuungskraft</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Verfügbarkeit', '1–3 Einsätze täglich, danach weg', 'Rund um die Uhr vor Ort'],
                    ['Nachtbereitschaft', 'Kein Personal nachts', 'Immer anwesend'],
                    ['Haushalt & Kochen', 'Nicht im Leistungsspektrum', 'Vollständig übernommen'],
                    ['Gesellschaft', 'Nur während Einsatz', 'Ganztägige Begleitung'],
                    ['Demenzbetreuung', 'Schwierig ohne Kontinuität', 'Vertraute Bezugsperson'],
                    ['Behandlungspflege', 'Ja — Kernkompetenz', 'Nein — übernimmt Pflegedienst'],
                    ['Kosten/Monat', '800–2.500 €, oft durch KV gedeckt', '2.200–3.500 €, mit Pflegegeld'],
                    ['Kassenzuschuss', 'Sachleistungen PG 2–5', 'Pflegegeld + Entlastungsbudget'],
                    ['Kündigung', 'Vertragliche Fristen', 'Täglich kündbar (Primundus)'],
                  ].map(([k, d, p], i) => (
                    <tr key={k} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{k}</td>
                      <td className="px-5 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{d}</td>
                      <td className="px-5 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kostenvergleich 2026
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Ambulanter Pflegedienst</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">800–2.500 €/Monat je nach Einsatzhäufigkeit. Die Pflegekasse zahlt Sachleistungen direkt an den Dienst: PG 2 = 796 €/Mo, PG 3 = 1.497 €/Mo, PG 4 = 1.859 €/Mo, PG 5 = 2.299 €/Mo. Bei moderatem Pflegebedarf kann der Eigenanteil sehr gering oder null sein.</p>
              <p className="text-[13px] text-[#8B8B8B]">Bei hohem Pflegebedarf übersteigen die Kosten schnell den Sachleistungsrahmen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">24h-Betreuungskraft (Primundus)</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">2.200–3.500 €/Monat. Mit Pflegegeld (347–990 €/Mo), Entlastungsbetrag (131 €/Mo), Entlastungsbudget und Steuerabzug sinkt der Eigenanteil bei PG 3 auf ca. 1.500–2.000 €/Monat. Inklusive: Haushalt, Kochen, Gesellschaft, Nacht — alles in einem.</p>
              <p className="text-[13px] text-[#8B8B8B]">Kombination mit Pflegedienst für Behandlungspflege möglich — Kosten dann kumuliert aber Kassenzuschüsse laufen parallel.</p>
            </div>
          </div>

          <h2 id="wann-was" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann ist was sinnvoll?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                label: 'Ambulanter Pflegedienst reicht wenn…',
                items: ['Pflegebedarf auf 1–2 Einsätze täglich begrenzt', 'Angehörige den Rest verlässlich übernehmen', 'Keine Nachtbetreuung nötig', 'Kosten vollständig durch Sachleistungen gedeckt', 'Behandlungspflege (Injektionen, Wunden) im Vordergrund'],
                color: 'bg-[#E8F5EE] border-[rgba(61,122,92,0.2)]',
                text: 'text-[#2A5C3F]',
              },
              {
                label: '24h-Betreuungskraft sinnvoll wenn…',
                items: ['Pflegebedarf über den ganzen Tag verteilt', 'Nächtliche Unruhe, Stürze oder Orientierungslosigkeit', 'Demenz mit hohem Betreuungsbedarf', 'Angehörige nicht dauerhaft vor Ort', 'Haushalt vollständig übernommen werden soll'],
                color: 'bg-[#F2EDE6] border-[rgba(139,115,85,0.2)]',
                text: 'text-[#6B5A44]',
              },
            ].map((block) => (
              <div key={block.label} className={`rounded-2xl p-5 border ${block.color}`}>
                <p className={`text-[13px] font-bold uppercase tracking-[0.08em] mb-3 ${block.text}`}>{block.label}</p>
                <ul className="space-y-1.5">
                  {block.items.map((item) => (
                    <li key={item} className={`text-[14px] flex gap-2 ${block.text}`}>
                      <span className="flex-shrink-0 mt-0.5">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="kombination" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kombination — oft die beste Lösung
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die häufigste und meist beste Lösung ist die Kombination: Eine 24h-Betreuungskraft übernimmt Grundpflege, Haushalt, Gesellschaft und Nacht. Der ambulante Pflegedienst kommt täglich für Behandlungspflege (Injektionen, Verbandswechsel). Beide Kassenzuschüsse laufen parallel.
          </p>
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-10">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Rechenbeispiel Kombination — PG 3</p>
            <div className="space-y-1.5 text-[14px] text-[#2A5C3F]">
              <div className="flex justify-between"><span>24h-Kraft (Primundus)</span><span>2.200–3.500 €/Mo</span></div>
              <div className="flex justify-between"><span>Ambulanter Dienst (Behandlungspflege)</span><span>ca. 300–600 €/Mo</span></div>
              <div className="flex justify-between font-semibold border-t border-[rgba(61,122,92,0.2)] pt-1.5 mt-1"><span>Gesamtkosten brutto</span><span>ca. 2.500–4.100 €/Mo</span></div>
              <div className="flex justify-between text-[#3D7A5C]"><span>− Pflegegeld PG 3</span><span>− 599 €/Mo</span></div>
              <div className="flex justify-between text-[#3D7A5C]"><span>− Sachleistungen (für Pflegedienst)</span><span>− bis 1.497 €/Mo</span></div>
              <div className="flex justify-between text-[#3D7A5C]"><span>− Entlastungsbetrag + Budget</span><span>− ca. 420 €/Mo</span></div>
              <div className="flex justify-between font-bold border-t border-[rgba(61,122,92,0.2)] pt-1.5 mt-1"><span>Eigenanteil ca.</span><span>ca. 1.000–1.800 €/Mo</span></div>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Kombinationsmöglichkeiten:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege</a>
            {' · '}
            <a href="/kombinationsleistung-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kombinationsleistung erklärt</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist der Unterschied zwischen Pflegedienst und 24h-Kraft?', a: 'Pflegedienst: kommt zu festen Zeiten, geht dann wieder. Kernkompetenz Grund- und Behandlungspflege. 24h-Kraft: lebt im Haushalt, ist immer da — übernimmt zusätzlich Haushalt, Kochen, Gesellschaft, Nacht.' },
              { q: 'Ist ambulante Pflege günstiger als eine 24h-Kraft?', a: 'Bei moderatem Bedarf ja — Sachleistungen decken oft den Pflegedienst vollständig. Bei hohem Gesamtbedarf (Haushalt, Betreuung, Nacht) ist die 24h-Kraft oft günstiger als mehrere Dienste kombiniert.' },
              { q: 'Kann man Pflegedienst und 24h-Kraft kombinieren?', a: 'Ja — das ist die häufigste Lösung bei komplexem Bedarf. 24h-Kraft für Grundpflege/Haushalt/Nacht, Pflegedienst für Behandlungspflege. Beide Kassenzuschüsse (Pflegegeld + Sachleistungen) laufen parallel.' },
              { q: 'Wann reicht ein ambulanter Pflegedienst nicht mehr aus?', a: 'Wenn nächtliche Betreuung nötig ist, Demenz kontinuierliche Anwesenheit erfordert, Angehörige die verbleibende Zeit nicht abdecken können, oder wenn der Gesamtaufwand (Haushalt, Kochen, Begleitung) den Pflegedienst übersteigt.' },
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
