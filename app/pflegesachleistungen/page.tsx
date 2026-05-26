import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-sind', title: 'Was sind Pflegesachleistungen?' },
  { id: 'betraege', title: 'Beträge 2026' },
  { id: 'wofuer', title: 'Wofür nutzbar?' },
  { id: 'kombination', title: 'Pflegegeld + Sachleistungen kombinieren' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegesachleistungen 2026 — Beträge, Anspruch & Nutzung | Primundus',
  description: 'Pflegesachleistungen 2026: 796 € (PG 2) bis 2.299 € (PG 5) pro Monat für ambulante Pflegedienste. Was absetzbar ist, wie man kombiniert und was nicht geht.',
  alternates: { canonical: 'https://primundus.de/pflegesachleistungen/' },
  openGraph: {
    title: 'Pflegesachleistungen 2026 | Primundus',
    description: 'Pflegesachleistungen: Beträge, Anspruch und wie man sie mit Pflegegeld kombiniert.',
    url: 'https://primundus.de/pflegesachleistungen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegesachleistungen 2026 — Beträge, Anspruch und Nutzung',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegesachleistungen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegesachleistungen', item: 'https://primundus.de/pflegesachleistungen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sind Pflegesachleistungen?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegesachleistungen sind Leistungen der Pflegekasse die direkt an zugelassene ambulante Pflegedienste gezahlt werden — nicht an die pflegebedürftige Person selbst. Die Kasse zahlt monatlich 796 € (PG 2), 1.497 € (PG 3), 1.859 € (PG 4) oder 2.299 € (PG 5) für häusliche Pflegeleistungen.' } },
      { '@type': 'Question', name: 'Kann man Pflegesachleistungen und Pflegegeld kombinieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — die sogenannte Kombinationsleistung: Wenn nur ein Teil der Sachleistungen genutzt wird, bekommt man anteiliges Pflegegeld für den Rest. Beispiel: 50 % Sachleistungen genutzt = 50 % Pflegegeld.' } },
    ],
  },
]

export default function Pflegesachleistungen() {
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
            <a href="/finanzierung/" className="hover:text-[#8B7355] transition-colors">Finanzierung</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegesachleistungen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegesachleistungen 2026 — Beträge, Anspruch & Nutzung
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegesachleistungen sind Kassengelder die direkt an ambulante Pflegedienste fließen — nicht an die Familie. Sie betragen 796 Euro (PG 2) bis 2.299 Euro (PG 5) pro Monat. Wer Sachleistungen nicht vollständig nutzt, bekommt anteiliges Pflegegeld — die Kombinationsleistung.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Pflegesachleistungen 2026 nach Pflegegrad</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegegrad 1', '—', 'Kein Anspruch auf Sachleistungen'],
                    ['Pflegegrad 2', '796 €/Monat', 'Für ambulante Pflegedienste'],
                    ['Pflegegrad 3', '1.497 €/Monat', 'Für ambulante Pflegedienste'],
                    ['Pflegegrad 4', '1.859 €/Monat', 'Für ambulante Pflegedienste'],
                    ['Pflegegrad 5', '2.299 €/Monat', 'Für ambulante Pflegedienste'],
                  ].map(([grad, betrag, hinweis], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="py-3 pr-4 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className={`py-3 pr-4 text-[14px] font-bold border-b border-[#E5E3DF] ${betrag === '—' ? 'text-[#C8C3BA]' : 'text-[#3D7A5C]'}`}>{betrag}</td>
                      <td className="py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#8B8B8B] mt-2">Stand 2026 · Identisch zu 2025</p>
          </div>

          <h2 id="was-sind" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was sind Pflegesachleistungen?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Pflegesachleistungen (§ 36 SGB XI) sind Kassengelder die nicht an den Pflegebedürftigen ausgezahlt werden — sondern direkt an einen zugelassenen ambulanten Pflegedienst. Die Kasse bezahlt den Dienst im Rahmen des monatlichen Budgets.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Im Unterschied zum Pflegegeld: Pflegegeld wird frei ausgezahlt (für private Betreuung durch Angehörige). Sachleistungen können nur für zugelassene Pflegedienste genutzt werden.
          </p>

          <h2 id="wofuer" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wofür können Pflegesachleistungen genutzt werden?
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { titel: '✓ Körperpflege durch Pflegedienst', desc: 'Waschen, Anziehen, Zahnpflege, Rasieren — durch Fachkräfte des ambulanten Pflegedienstes.' },
              { titel: '✓ Mobilisierung & Lagerung', desc: 'Transfer aus dem Bett, Gehübungen, Lagerungswechsel zur Dekubitusprophylaxe.' },
              { titel: '✓ Behandlungspflege (SGB V)', desc: 'Medikamentengabe, Verbandswechsel, Insulininjektionen — wird zusätzlich von der Krankenversicherung bezahlt.' },
              { titel: '✗ Nicht: Haushaltshilfe', desc: 'Putzen, Einkaufen, Kochen sind Sachleistungen nach SGB XI nicht zugeordnet — dafür gibt es den Entlastungsbetrag oder Kombinationsleistung.' },
              { titel: '✗ Nicht: Private Betreuung durch Angehörige', desc: 'Sachleistungen können nur für zugelassene Dienste genutzt werden, nicht für die Arbeit von Angehörigen.' },
            ].map((item) => (
              <div key={item.titel} className={`rounded-xl p-4 border ${item.titel.startsWith('✗') ? 'bg-[#FDF0EE] border-[rgba(231,111,99,0.15)]' : 'bg-white border-[#E5E3DF]'}`}>
                <p className={`text-[14px] font-bold mb-1 ${item.titel.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#1C1C1C]'}`}>{item.titel}</p>
                <p className={`text-[14px] leading-relaxed ${item.titel.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#2E2E2E]'}`}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="kombination" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegeld + Sachleistungen kombinieren — Kombinationsleistung
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Wer Sachleistungen nicht vollständig ausschöpft, bekommt für den ungenutzten Anteil anteiliges Pflegegeld — das ist die Kombinationsleistung nach § 38 SGB XI.
          </p>
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-6">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Rechenbeispiel — Kombinationsleistung PG 3</p>
            <div className="space-y-2 text-[14px] text-[#2A5C3F]">
              <div className="flex gap-3"><span className="font-bold w-[200px] flex-shrink-0">Sachleistungen PG 3:</span><span>1.497 €/Monat</span></div>
              <div className="flex gap-3"><span className="font-bold w-[200px] flex-shrink-0">Genutzter Anteil:</span><span>748 € (50 %)</span></div>
              <div className="flex gap-3"><span className="font-bold w-[200px] flex-shrink-0">Ungenutzter Anteil:</span><span>50 %</span></div>
              <div className="flex gap-3"><span className="font-bold w-[200px] flex-shrink-0">Pflegegeld PG 3:</span><span>599 €/Monat</span></div>
              <div className="flex gap-3 font-bold"><span className="w-[200px] flex-shrink-0">Anteiliges Pflegegeld:</span><span>299,50 € (50 % von 599 €)</span></div>
              <div className="flex gap-3 font-bold mt-2 pt-2 border-t border-[rgba(61,122,92,0.2)]"><span className="w-[200px] flex-shrink-0">Gesamtentlastung:</span><span>748 € + 299,50 € = 1.047,50 €/Monat</span></div>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Kombinationen:{' '}
            <a href="/kombinationsleistung-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kombinationsleistung erklärt</a>
            {' · '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Alle Zuschüsse 2026</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was sind Pflegesachleistungen?', a: 'Kassengelder die direkt an zugelassene ambulante Pflegedienste gezahlt werden. 796 € (PG 2), 1.497 € (PG 3), 1.859 € (PG 4), 2.299 € (PG 5) pro Monat.' },
              { q: 'Kann man Pflegesachleistungen und Pflegegeld kombinieren?', a: 'Ja — Kombinationsleistung: Genutzter Sachleistungsanteil + anteiliges Pflegegeld für den Rest. Beispiel: 50 % Sachleistungen = 50 % Pflegegeld.' },
              { q: 'Wer kann Pflegesachleistungen in Anspruch nehmen?', a: 'Pflegebedürftige mit PG 2–5 die zu Hause von einem zugelassenen ambulanten Pflegedienst versorgt werden. PG 1 hat keinen Sachleistungsanspruch.' },
              { q: 'Können Sachleistungen für eine 24h-Betreuungskraft genutzt werden?', a: 'Nur wenn die Betreuungskraft über einen zugelassenen Pflegedienst tätig ist. Bei der Primundus-Vermittlung im Entsendemodell werden stattdessen Pflegegeld und Entlastungsbudget genutzt.' },
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
