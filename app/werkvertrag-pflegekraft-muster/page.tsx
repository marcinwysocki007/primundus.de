import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'risiken', title: 'Risiken' }, { id: 'scheinselbstaendigkeit', title: 'Scheinselbstständigkeit' }, { id: 'alternativen', title: 'Rechtssichere Alternativen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Werkvertrag Pflegekraft — Risiken & rechtssichere Alternativen | Primundus',
  description: 'Werkvertrag mit Pflegekraft: Warum das fast immer Scheinselbstständigkeit ist und welche Alternativen rechtssicher sind.',
  alternates: { canonical: 'https://primundus.de/werkvertrag-pflegekraft-muster/' },
  openGraph: {
    title: 'Werkvertrag Pflegekraft',
    description: 'Werkvertrag mit Pflegekraft: Warum das fast immer Scheinselbstständigkeit ist und welche Alternativen rechtssicher sind.',
    url: 'https://primundus.de/werkvertrag-pflegekraft-muster/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Werkvertrag mit Pflegekraft — warum das problematisch ist',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/werkvertrag-pflegekraft-muster/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/rechtliches/' },
      { '@type': 'ListItem', position: 3, name: 'Werkvertrag Pflegekraft', item: 'https://primundus.de/werkvertrag-pflegekraft-muster/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Werkvertrag und Entsendemodell?', acceptedAnswer: { '@type': 'Answer', text: 'Werkvertrag: Kraft gilt als selbstständig, erbringt ein definiertes Werk. In der Pflege fast immer Scheinselbstständigkeit. Entsendemodell: Kraft wird von Agentur beschäftigt und entsendet — rechtssicher.' } },
      { '@type': 'Question', name: 'Was passiert wenn Scheinselbstständigkeit festgestellt wird?', acceptedAnswer: { '@type': 'Answer', text: 'Nachzahlung aller Sozialabgaben (oft mehrere Jahre), Bußgelder, mögliche strafrechtliche Konsequenzen für die Familie.' } }
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
            <a href="/rechtliches/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Werkvertrag Pflegekraft</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Rechtliches · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Werkvertrag mit Pflegekraft — warum das problematisch ist</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Viele Familien denken: Werkvertrag mit der Pflegekraft ist einfach und günstig. Das Gegenteil ist der Fall — Werkverträge in der Pflege führen fast immer zu Scheinselbstständigkeit.</p>
          <h2 id="risiken" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Risiken</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="scheinselbstaendigkeit" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Scheinselbstständigkeit</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="alternativen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Rechtssichere Alternativen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist der Unterschied zwischen Werkvertrag und Entsendemodell?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Werkvertrag: Kraft gilt als selbstständig, erbringt ein definiertes Werk. In der Pflege fast immer Scheinselbstständigkeit. Entsendemodell: Kraft wird von Agentur beschäftigt und entsendet — rechtssicher.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was passiert wenn Scheinselbstständigkeit festgestellt wird?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Nachzahlung aller Sozialabgaben (oft mehrere Jahre), Bußgelder, mögliche strafrechtliche Konsequenzen für die Familie.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
