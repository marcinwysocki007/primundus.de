import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'beduerfnisse', title: 'Besondere Bedürfnisse' }, { id: 'aufgaben', title: 'Aufgaben der Kraft' }, { id: 'palliativ', title: 'Übergang zur Palliativpflege' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Krebspatienten zuhause pflegen — Leitfaden für Familien | Primundus',
  description: 'Krebspatienten zuhause betreuen: Was die Betreuungskraft übernimmt, wie der Alltag gestaltet wird und wann Palliativpflege nötig wird.',
  alternates: { canonical: 'https://primundus.de/krebspatienten-zuhause-pflegen/' },
  openGraph: {
    title: 'Krebspatienten zuhause pflegen',
    description: 'Krebspatienten zuhause betreuen: Was die Betreuungskraft übernimmt, wie der Alltag gestaltet wird und wann Palliativpflege nötig wird.',
    url: 'https://primundus.de/krebspatienten-zuhause-pflegen/',
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
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/krebspatienten-zuhause-pflegen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Krebspatienten zuhause pflegen', item: 'https://primundus.de/krebspatienten-zuhause-pflegen/' },
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
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">
          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/krankheiten/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Krebspatienten zuhause pflegen</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Krankheiten · 6 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Krebspatienten zuhause pflegen — ein Leitfaden für Familien</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Die Diagnose Krebs verändert alles. Viele Patienten möchten die Zeit zuhause verbringen — mit vertrauter Umgebung, Familie, eigenem Rhythmus. Eine 24h-Kraft macht das möglich.</p>
          <h2 id="beduerfnisse" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Besondere Bedürfnisse</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="aufgaben" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Aufgaben der Kraft</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="palliativ" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Übergang zur Palliativpflege</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Kann man Krebspatienten zuhause pflegen?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ja — mit einer 24h-Betreuungskraft und in Kooperation mit ambulantem Pflegedienst und Ärzten. Besonders in der palliativen Phase ist das Zuhause oft der ausdrückliche Wunsch.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Welche Aufgaben übernimmt die Betreuungskraft bei Krebspatienten?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Grundpflege, Haushalt, Begleitung, Ernährungsunterstützung, emotionale Präsenz, Koordination von Arzt- und Therapieterminen.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
