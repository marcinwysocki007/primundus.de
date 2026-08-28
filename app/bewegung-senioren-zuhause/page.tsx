import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'vorteile', title: 'Warum Bewegung wichtig ist' }, { id: 'uebungen', title: 'Einfache Übungen' }, { id: 'sturzpraevention', title: 'Sturzprävention' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Bewegung für Senioren zuhause — einfache Übungen & Tipps',
  description: 'Einfache Bewegungsübungen für Senioren zuhause: was geht auch bei eingeschränkter Mobilität, wie Stürze verhindert werden, was die Kraft unterstützen kann.',
  alternates: { canonical: 'https://primundus.de/bewegung-senioren-zuhause' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Bewegung Senioren zuhause',
    description: 'Einfache Bewegungsübungen für Senioren zuhause: was geht auch bei eingeschränkter Mobilität, wie Stürze verhindert werden, was die Kraft unterstützen kann.',
    url: 'https://primundus.de/bewegung-senioren-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bewegung für Senioren zuhause — was geht auch bei eingeschränkter Mobilität',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/bewegung-senioren-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Bewegung Senioren zuhause', item: 'https://primundus.de/bewegung-senioren-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welche Übungen sind für Senioren zuhause geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Stehübungen am Stuhl, Gehübungen im Flur, Armkreisen, Fußwippübungen, leichtes Dehnen — alles ohne Geräte und auch bei eingeschränkter Mobilität möglich.' } },
      { '@type': 'Question', name: 'Wie oft sollten Senioren sich bewegen?', acceptedAnswer: { '@type': 'Answer', text: 'Idealerweise täglich — auch kurze 10-Minuten-Einheiten mehrmals täglich helfen.' } }
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
            <a href="/alltag" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Bewegung Senioren zuhause</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Alltag · 5 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Bewegung für Senioren zuhause — was geht auch bei eingeschränkter Mobilität</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Regelmäßige Bewegung erhält die Selbstständigkeit, beugt Stürzen vor und hebt die Stimmung. Auch bei eingeschränkter Mobilität gibt es viele Möglichkeiten — die Betreuungskraft kann aktiv unterstützen.</p>
          <h2 id="vorteile" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Warum Bewegung wichtig ist</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="uebungen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Einfache Übungen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="sturzpraevention" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Sturzprävention</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Welche Übungen sind für Senioren zuhause geeignet?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Stehübungen am Stuhl, Gehübungen im Flur, Armkreisen, Fußwippübungen, leichtes Dehnen — alles ohne Geräte und auch bei eingeschränkter Mobilität möglich.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Wie oft sollten Senioren sich bewegen?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Idealerweise täglich — auch kurze 10-Minuten-Einheiten mehrmals täglich helfen.</p></div>
            </details>
          </div>
          <Weiterlesen aktuell="bewegung-senioren-zuhause" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
