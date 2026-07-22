import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'pflegegeld', title: 'Pflegegeld bei 24h-Pflege' }, { id: 'kombinationen', title: 'Alle Kombinationsmöglichkeiten' }, { id: 'rechnung', title: 'Rechenbeispiel PG 3' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegegeld und 24h-Pflege kombinieren — so geht es | Primundus',
  description: 'Pflegegeld mit 24h-Pflege kombinieren: Was geht, was nicht, wie viel die Kasse zahlt und wie der Eigenanteil maximal gesenkt wird. Alle Optionen 2026.',
  alternates: { canonical: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren/' },
  openGraph: {
    title: 'Pflegegeld und 24h-Pflege kombinieren | Primundus',
    description: 'Pflegegeld mit 24h-Pflege kombinieren: Was geht, was nicht, wie viel die Kasse zahlt und wie der Eigenanteil maximal gesenkt wird. Alle Optionen 2026.',
    url: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegeld und 24h-Pflege kombinieren — alle Optionen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Kosten', item: 'https://primundus.de/kosten/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegeld und 24h-Pflege kombinieren', item: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Pflegegeld und 24h-Pflege gleichzeitig beziehen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — über die Kombinationsleistung. Sachleistungen für die Agenturkraft + anteiliges Pflegegeld für pflegenden Angehörigen. Verhältnis frei wählbar.' } },
      { '@type': 'Question', name: 'Wie hoch ist das Pflegegeld 2026?', acceptedAnswer: { '@type': 'Answer', text: 'PG 2: 347 €/Mo, PG 3: 599 €/Mo, PG 4: 800 €/Mo, PG 5: 990 €/Mo.' } },
      { '@type': 'Question', name: 'Was ist der Entlastungsbetrag?', acceptedAnswer: { '@type': 'Answer', text: '131 €/Monat für alle Pflegegrade 1–5. Zweckgebunden für anerkannte Entlastungsleistungen — auch für 24h-Pflege nutzbar.' } }
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
            <a href="/kosten/" className="hover:text-[#8B7355] transition-colors">Kosten</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegegeld und 24h-Pflege kombinieren</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Finanzierung · 6 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflegegeld und 24h-Pflege kombinieren — alle Optionen 2026</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Pflegegeld und 24h-Pflege schließen sich nicht aus — im Gegenteil. Mit der richtigen Kombination aller Kassenleistungen kann der Eigenanteil erheblich gesenkt werden. Dieser Ratgeber zeigt alle Optionen.</p>
          <h2 id="pflegegeld" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Pflegegeld bei 24h-Pflege — was geht?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Bei professioneller 24h-Pflege über eine Agentur wird das Pflegegeld nicht direkt gezahlt — stattdessen gibt es Sachleistungen. Aber: Das Pflegegeld kann trotzdem fließen wenn ein Angehöriger offiziell als Pflegeperson eingetragen ist und die Pflege (anteilig) selbst übernimmt.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die häufigste Lösung ist die Kombination aus Sachleistungen (für die Agenturkraft) und Pflegegeld (für einen pflegenden Angehörigen). Das nennt sich Kombinationsleistung.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Alle Kassenleistungen die kombinierbar sind</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegegeld: 347–990 €/Mo (PG 2–5) — bei Angehörigenpflege</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Entlastungsbetrag: 131 €/Mo — für alle PG 1–5</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Entlastungsbudget: 3.539 €/Jahr — für Verhinderungs- und Kurzzeitpflege</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Sachleistungen: 796–2.299 €/Mo — für ambulante Pflegedienste</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Steuerabzug: bis 4.000 €/Jahr Steuerersparnis</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Bayern: Landespflegegeld 1.000 €/Jahr zusätzlich</div>
          </div>          <h2 id="rechnung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Rechenbeispiel — Pflegegrad 3</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">24h-Kraft (Primundus): 2.800 €/Monat. Entlastungsbetrag: −131 €. Entlastungsbudget anteilig: −295 €. Steuerabzug: −200 €. Eigenanteil: ca. 2.174 €/Monat — ohne Pflegegeld.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Mit Kombinationsleistung (Angehöriger übernimmt Grundpflege anteilig): Sachleistungen bis 50% = 748 € für Agentur, Pflegegeld 50% = 300 € für Angehörigen. Eigenanteil Agentur sinkt auf ca. 1.426 €/Monat.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Kann man Pflegegeld und 24h-Pflege gleichzeitig beziehen?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ja — über die Kombinationsleistung. Sachleistungen für die Agenturkraft + anteiliges Pflegegeld für pflegenden Angehörigen. Verhältnis frei wählbar.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie hoch ist das Pflegegeld 2026?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">PG 2: 347 €/Mo, PG 3: 599 €/Mo, PG 4: 800 €/Mo, PG 5: 990 €/Mo.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist der Entlastungsbetrag?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">131 €/Monat für alle Pflegegrade 1–5. Zweckgebunden für anerkannte Entlastungsleistungen — auch für 24h-Pflege nutzbar.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
