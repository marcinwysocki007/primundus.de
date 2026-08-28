import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'risiken', title: 'Risiken' }, { id: 'scheinselbstaendigkeit', title: 'Scheinselbstständigkeit' }, { id: 'alternativen', title: 'Rechtssichere Alternativen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Werkvertrag Pflegekraft — Risiken & rechtssichere Alternativen | Primundus',
  description: 'Werkvertrag mit Pflegekraft: Warum das fast immer Scheinselbstständigkeit ist und welche Alternativen rechtssicher sind.',
  alternates: { canonical: 'https://primundus.de/werkvertrag-pflegekraft-muster' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Werkvertrag Pflegekraft',
    description: 'Werkvertrag mit Pflegekraft: Warum das fast immer Scheinselbstständigkeit ist und welche Alternativen rechtssicher sind.',
    url: 'https://primundus.de/werkvertrag-pflegekraft-muster',
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
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/werkvertrag-pflegekraft-muster',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Werkvertrag Pflegekraft', item: 'https://primundus.de/werkvertrag-pflegekraft-muster' },
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
      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">
          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/rechtliches" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Werkvertrag Pflegekraft</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Rechtliches · 5 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Werkvertrag mit Pflegekraft — warum das problematisch ist</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Viele Familien denken: Werkvertrag mit der Pflegekraft ist einfach und günstig. Das Gegenteil ist der Fall — Werkverträge in der Pflege führen fast immer zu Scheinselbstständigkeit.</p>
          <h2 id="risiken" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Risiken</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="scheinselbstaendigkeit" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Scheinselbstständigkeit</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="alternativen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Rechtssichere Alternativen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was ist der Unterschied zwischen Werkvertrag und Entsendemodell?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Werkvertrag: Kraft gilt als selbstständig, erbringt ein definiertes Werk. In der Pflege fast immer Scheinselbstständigkeit. Entsendemodell: Kraft wird von Agentur beschäftigt und entsendet — rechtssicher.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was passiert wenn Scheinselbstständigkeit festgestellt wird?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Nachzahlung aller Sozialabgaben (oft mehrere Jahre), Bußgelder, mögliche strafrechtliche Konsequenzen für die Familie.</p></div>
            </details>
          </div>
          <Weiterlesen aktuell="werkvertrag-pflegekraft-muster" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
