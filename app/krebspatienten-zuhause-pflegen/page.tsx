import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'beduerfnisse', title: 'Besondere Bedürfnisse' }, { id: 'aufgaben', title: 'Aufgaben der Kraft' }, { id: 'palliativ', title: 'Übergang zur Palliativpflege' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Krebspatienten zuhause pflegen — Leitfaden für Familien',
  description: 'Krebspatienten zuhause betreuen: Was die Betreuungskraft übernimmt, wie der Alltag gestaltet wird und wann Palliativpflege nötig wird.',
  alternates: { canonical: 'https://primundus.de/krebspatienten-zuhause-pflegen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Krebspatienten zuhause pflegen',
    description: 'Krebspatienten zuhause betreuen: Was die Betreuungskraft übernimmt, wie der Alltag gestaltet wird und wann Palliativpflege nötig wird.',
    url: 'https://primundus.de/krebspatienten-zuhause-pflegen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Krebspatienten zuhause pflegen — ein Leitfaden für Familien',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/krebspatienten-zuhause-pflegen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Krebspatienten zuhause pflegen', item: 'https://primundus.de/krebspatienten-zuhause-pflegen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Krebspatienten zuhause pflegen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — mit einer 24h-Betreuungskraft und in Kooperation mit ambulantem Pflegedienst und Ärzten. Besonders in der palliativen Phase ist das Zuhause oft der ausdrückliche Wunsch.' } },
      { '@type': 'Question', name: 'Welche Aufgaben übernimmt die Betreuungskraft bei Krebspatienten?', acceptedAnswer: { '@type': 'Answer', text: 'Grundpflege, Haushalt, Begleitung, Ernährungsunterstützung, emotionale Präsenz, Koordination von Arzt- und Therapieterminen.' } }
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
            <a href="/krankheiten" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Krebspatienten zuhause pflegen</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Krankheiten · 6 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Krebspatienten zuhause pflegen — ein Leitfaden für Familien</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Die Diagnose Krebs verändert alles. Viele Patienten möchten die Zeit zuhause verbringen — mit vertrauter Umgebung, Familie, eigenem Rhythmus. Eine 24h-Kraft macht das möglich.</p>
          <h2 id="beduerfnisse" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Besondere Bedürfnisse</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="aufgaben" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Aufgaben der Kraft</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="palliativ" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Übergang zur Palliativpflege</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Kann man Krebspatienten zuhause pflegen?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Ja — mit einer 24h-Betreuungskraft und in Kooperation mit ambulantem Pflegedienst und Ärzten. Besonders in der palliativen Phase ist das Zuhause oft der ausdrückliche Wunsch.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Welche Aufgaben übernimmt die Betreuungskraft bei Krebspatienten?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Grundpflege, Haushalt, Begleitung, Ernährungsunterstützung, emotionale Präsenz, Koordination von Arzt- und Therapieterminen.</p></div>
            </details>
          </div>
          <Weiterlesen aktuell="krebspatienten-zuhause-pflegen" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
