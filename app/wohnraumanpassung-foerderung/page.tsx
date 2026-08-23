import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'kasse', title: 'Pflegekasse zahlt' }, { id: 'weitere', title: 'Weitere Förderungen' }, { id: 'antrag', title: 'Antrag stellen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Wohnraumanpassung Förderung 2026 — alle Zuschüsse',
  description: 'Wohnraumanpassung Förderung: Was die Pflegekasse zahlt (bis 4.000 €), welche weiteren Förderungen es gibt und wie der Antrag läuft.',
  alternates: { canonical: 'https://primundus.de/wohnraumanpassung-foerderung' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Wohnraumanpassung Förderung',
    description: 'Wohnraumanpassung Förderung: Was die Pflegekasse zahlt (bis 4.000 €), welche weiteren Förderungen es gibt und wie der Antrag läuft.',
    url: 'https://primundus.de/wohnraumanpassung-foerderung',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wohnraumanpassung Förderung 2026 — alle Zuschüsse im Überblick',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/wohnraumanpassung-foerderung',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Kosten', item: 'https://primundus.de/kosten' },
      { '@type': 'ListItem', position: 3, name: 'Wohnraumanpassung Förderung', item: 'https://primundus.de/wohnraumanpassung-foerderung' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was zahlt die Pflegekasse für Wohnraumanpassung?', acceptedAnswer: { '@type': 'Answer', text: 'Bis 4.000 €/Maßnahme für wohnumfeldverbessernde Maßnahmen (§40 SGB XI). Bei mehreren Pflegebedürftigen im gleichen Haushalt bis 16.000 €.' } },
      { '@type': 'Question', name: 'Welche Maßnahmen werden gefördert?', acceptedAnswer: { '@type': 'Answer', text: 'Türverbreiterung, Rampen, Haltegriffe, bodengleiche Dusche, Treppenlifte, Badewannenumbau — alles was die häusliche Pflege ermöglicht oder erleichtert.' } }
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
            <a href="/kosten" className="hover:text-pm-taupe transition-colors">Kosten</a>
            <span>›</span>
            <span className="text-pm-ink">Wohnraumanpassung Förderung</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Finanzierung · 5 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Wohnraumanpassung Förderung 2026 — alle Zuschüsse im Überblick</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Schwellen entfernen, Haltegriffe montieren, bodengleiche Dusche einbauen — die Pflegekasse zahlt bis zu 4.000 € pro Maßnahme. Bei mehreren Personen bis 16.000 €.</p>
          <h2 id="kasse" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Pflegekasse zahlt</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="weitere" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Weitere Förderungen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="antrag" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Antrag stellen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was zahlt die Pflegekasse für Wohnraumanpassung?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Bis 4.000 €/Maßnahme für wohnumfeldverbessernde Maßnahmen (§40 SGB XI). Bei mehreren Pflegebedürftigen im gleichen Haushalt bis 16.000 €.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Welche Maßnahmen werden gefördert?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Türverbreiterung, Rampen, Haltegriffe, bodengleiche Dusche, Treppenlifte, Badewannenumbau — alles was die häusliche Pflege ermöglicht oder erleichtert.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
