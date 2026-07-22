import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'unterschied', title: 'Der grundlegende Unterschied' }, { id: 'wann-kurz', title: 'Wann Kurzzeitpflege' }, { id: 'wann-24h', title: 'Wann 24h-Pflege' }, { id: 'kosten', title: 'Kostenvergleich' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Kurzzeitpflege oder 24h-Pflege — was ist besser? | Primundus',
  description: 'Kurzzeitpflege vs. 24h-Pflege zuhause: Wann was sinnvoll ist, Kostenvergleich 2026 und welche Lösung für welche Situation passt.',
  alternates: { canonical: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege/' },
  openGraph: {
    title: 'Kurzzeitpflege oder 24h-Pflege? | Primundus',
    description: 'Kurzzeitpflege vs. 24h-Pflege zuhause: Wann was sinnvoll ist, Kostenvergleich 2026 und welche Lösung für welche Situation passt.',
    url: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kurzzeitpflege oder 24h-Pflege — was passt zu Ihrer Situation?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Kurzzeitpflege oder 24h-Pflege', item: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist günstiger — Kurzzeitpflege oder 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Für kurze Übergänge (unter 4 Wochen): Kurzzeitpflege mit Entlastungsbudget oft günstiger. Bei dauerhaftem Bedarf: 24h-Pflege mit allen Zuschüssen meist günstiger als stationäre Lösung.' } },
      { '@type': 'Question', name: 'Kann man Kurzzeitpflege als Übergang nutzen und dann 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — das ist ein häufiges Muster. Kurzzeitpflege überbrückt die Zeit bis die 24h-Kraft startet. Primundus kann in 4–7 Tagen starten.' } }
    ],
  },
]

export default function Page() {
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
            <a href="/ratgeber/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Kurzzeitpflege oder 24h-Pflege</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 5 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Kurzzeitpflege oder 24h-Pflege — was passt zu Ihrer Situation?</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Nach dem Krankenhausaufenthalt, beim Ausfall des pflegenden Angehörigen, in einer Übergangssituation — welche Lösung ist die richtige? Kurzzeitpflege oder direkt 24h-Pflege zuhause? Dieser Ratgeber hilft bei der Entscheidung.</p>
          <h2 id="unterschied" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Der grundlegende Unterschied</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Kurzzeitpflege ist stationär und zeitlich begrenzt — die Person zieht vorübergehend in eine Einrichtung. 24h-Pflege ist dauerhaft häuslich — eine Kraft zieht ein und bleibt so lange wie nötig.</p>
          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Kurzzeitpflege sinnvoll wenn...</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Überbrückung nach Krankenhausaufenthalt, Ausfall der Pflegeperson für wenige Wochen, Testphase vor dauerhafter Entscheidung.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">24h-Pflege sinnvoll wenn...</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Dauerhafter Pflegebedarf, eigenes Zuhause soll erhalten bleiben, Demenz (Kontinuität wichtig), Familien die keine stationäre Lösung wollen.</p>
            </div>
          </div>          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Kostenvergleich</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Kurzzeitpflege kostet typisch 80–130 €/Tag in einer Einrichtung. Mit Entlastungsbudget (3.539 €/Jahr) sind ca. 30–40 Tage gedeckt. 24h-Pflege: 2.200–3.500 €/Monat, mit Kassenzuschüssen ab ca. 1.500 €/Monat Eigenanteil.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Für Übergangsphasen bis 4 Wochen: Kurzzeitpflege oft günstiger. Für dauerhaften Bedarf: 24h-Pflege typisch günstiger als stationär — und das Zuhause bleibt.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist günstiger — Kurzzeitpflege oder 24h-Pflege?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Für kurze Übergänge (unter 4 Wochen): Kurzzeitpflege mit Entlastungsbudget oft günstiger. Bei dauerhaftem Bedarf: 24h-Pflege mit allen Zuschüssen meist günstiger als stationäre Lösung.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Kann man Kurzzeitpflege als Übergang nutzen und dann 24h-Pflege?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ja — das ist ein häufiges Muster. Kurzzeitpflege überbrückt die Zeit bis die 24h-Kraft startet. Primundus kann in 4–7 Tagen starten.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
