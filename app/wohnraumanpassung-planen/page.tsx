import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'erstberatung', title: 'Erstberatung' }, { id: 'massnahmen', title: 'Wichtige Maßnahmen' }, { id: 'foerderung', title: 'Förderung beantragen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Wohnraumanpassung planen — Schritt für Schritt | Primundus',
  description: 'Wie man eine Wohnraumanpassung plant: Was zu beachten ist, welche Fachleute helfen und wie man Zuschüsse bekommt.',
  alternates: { canonical: 'https://primundus.de/wohnraumanpassung-planen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Wohnraumanpassung planen',
    description: 'Wie man eine Wohnraumanpassung plant: Was zu beachten ist, welche Fachleute helfen und wie man Zuschüsse bekommt.',
    url: 'https://primundus.de/wohnraumanpassung-planen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wohnraumanpassung planen — der praktische Leitfaden',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/wohnraumanpassung-planen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Wohnraumanpassung planen', item: 'https://primundus.de/wohnraumanpassung-planen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wer berät bei der Wohnraumanpassung?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegestützpunkte, Wohnberatungsstellen (in vielen Kommunen kostenlos), Ergotherapeuten, Sanitätshäuser — alle können eine kostenlose Ersteinschätzung geben.' } },
      { '@type': 'Question', name: 'Was sind die wichtigsten Maßnahmen bei der Wohnraumanpassung?', acceptedAnswer: { '@type': 'Answer', text: 'Haltegriffe im Bad (günstig, sofort wirksam), bodengleiche Dusche, Türverbreiterung für Rollstuhl, Treppenlifte, Entrümpelung von Stolperfallen.' } }
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
          <nav className="h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Wohnraumanpassung planen</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Ratgeber · 5 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Wohnraumanpassung planen — der praktische Leitfaden</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Eine barrierefreie Wohnung ist die Grundlage für häusliche Pflege. Dieser Ratgeber zeigt wie man vorgeht — von der Erstberatung bis zur fertigen Maßnahme.</p>
          <h2 id="erstberatung" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">Erstberatung</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="massnahmen" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">Wichtige Maßnahmen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="foerderung" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">Förderung beantragen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Wer berät bei der Wohnraumanpassung?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Pflegestützpunkte, Wohnberatungsstellen (in vielen Kommunen kostenlos), Ergotherapeuten, Sanitätshäuser — alle können eine kostenlose Ersteinschätzung geben.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was sind die wichtigsten Maßnahmen bei der Wohnraumanpassung?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Haltegriffe im Bad (günstig, sofort wirksam), bodengleiche Dusche, Türverbreiterung für Rollstuhl, Treppenlifte, Entrümpelung von Stolperfallen.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
