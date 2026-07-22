import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'was-ist', title: 'Was ist Intensivpflege?' }, { id: 'moeglich', title: 'Was ist zuhause möglich?' }, { id: 'grenzen', title: 'Wo sind die Grenzen?' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Intensivpflege zuhause — wann möglich, wann nicht | Primundus',
  description: 'Intensivpflege zuhause: Was ist möglich, welche Fachkräfte werden gebraucht und wann ist stationäre Versorgung nötig?',
  alternates: { canonical: 'https://primundus.de/intensivpflege-zuhause/' },
  openGraph: {
    title: 'Intensivpflege zuhause',
    description: 'Intensivpflege zuhause: Was ist möglich, welche Fachkräfte werden gebraucht und wann ist stationäre Versorgung nötig?',
    url: 'https://primundus.de/intensivpflege-zuhause/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Intensivpflege zuhause — was möglich ist und was nicht',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/intensivpflege-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Intensivpflege zuhause', item: 'https://primundus.de/intensivpflege-zuhause/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was versteht man unter Intensivpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Häusliche Krankenpflege für Patienten mit besonders hohem medizinischen Bedarf: Beatmung, Tracheostoma, komplexe Wundversorgung. Durch spezialisierte Pflegedienste.' } },
      { '@type': 'Question', name: 'Kann eine 24h-Betreuungskraft Intensivpflege übernehmen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — Intensivpflege erfordert Fachpflegepersonal. Eine 24h-Kraft ergänzt aber: Haushalt, Grundpflege, Gesellschaft — in Kombination mit einem Intensivpflegedienst.' } }
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
            <span className="text-[#1C1C1C]">Intensivpflege zuhause</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Krankheiten · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Intensivpflege zuhause — was möglich ist und was nicht</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Auch bei sehr hohem Pflegebedarf wünschen viele Menschen das eigene Zuhause. Intensivpflege zuhause ist möglich — aber sie erfordert spezialisiertes Personal und eine gute Organisation.</p>
          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was ist Intensivpflege?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="moeglich" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was ist zuhause möglich?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="grenzen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wo sind die Grenzen?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was versteht man unter Intensivpflege zuhause?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Häusliche Krankenpflege für Patienten mit besonders hohem medizinischen Bedarf: Beatmung, Tracheostoma, komplexe Wundversorgung. Durch spezialisierte Pflegedienste.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Kann eine 24h-Betreuungskraft Intensivpflege übernehmen?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Nein — Intensivpflege erfordert Fachpflegepersonal. Eine 24h-Kraft ergänzt aber: Haushalt, Grundpflege, Gesellschaft — in Kombination mit einem Intensivpflegedienst.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
