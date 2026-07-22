import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'was-zahlt', title: 'Was zahlt die Kasse?' }, { id: 'antrag', title: 'Antrag stellen' }, { id: 'hilfsmittel', title: 'Wichtige Hilfsmittel' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Rollstuhl & Hilfsmittel beantragen — so geht es | Primundus',
  description: 'Rollstuhl, Rollator, Pflegebett beantragen: Was zahlt die Kasse, wie läuft der Antrag, was braucht man? Schritt-für-Schritt.',
  alternates: { canonical: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen/' },
  openGraph: {
    title: 'Hilfsmittel Rollstuhl beantragen',
    description: 'Rollstuhl, Rollator, Pflegebett beantragen: Was zahlt die Kasse, wie läuft der Antrag, was braucht man? Schritt-für-Schritt.',
    url: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rollstuhl und Hilfsmittel beantragen — der vollständige Leitfaden',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Hilfsmittel Rollstuhl beantragen', item: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was zahlt die Pflegekasse für Hilfsmittel?', acceptedAnswer: { '@type': 'Answer', text: 'Vollversorgung mit Hilfsmitteln des Hilfsmittelverzeichnisses (§40 SGB XI): Rollstuhl, Rollator, Pflegebett, Badewannenlift u.v.m. — als Leihgabe oder Kauf.' } },
      { '@type': 'Question', name: 'Wie beantrage ich einen Rollstuhl bei der Pflegekasse?', acceptedAnswer: { '@type': 'Answer', text: 'Arzt stellt Verordnung aus. Antrag bei Pflegekasse einreichen. Kasse genehmigt Sanitätshaus. Rollstuhl wird geliefert — meist kostenlos.' } }
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
            <span className="text-[#1C1C1C]">Hilfsmittel Rollstuhl beantragen</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Rollstuhl und Hilfsmittel beantragen — der vollständige Leitfaden</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Die Pflegekasse zahlt viele Hilfsmittel — aber man muss sie kennen und beantragen. Rollstuhl, Rollator, Pflegebett, Badewannenlift — hier alles im Überblick.</p>
          <h2 id="was-zahlt" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was zahlt die Kasse?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="antrag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Antrag stellen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="hilfsmittel" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wichtige Hilfsmittel</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was zahlt die Pflegekasse für Hilfsmittel?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Vollversorgung mit Hilfsmitteln des Hilfsmittelverzeichnisses (§40 SGB XI): Rollstuhl, Rollator, Pflegebett, Badewannenlift u.v.m. — als Leihgabe oder Kauf.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie beantrage ich einen Rollstuhl bei der Pflegekasse?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Arzt stellt Verordnung aus. Antrag bei Pflegekasse einreichen. Kasse genehmigt Sanitätshaus. Rollstuhl wird geliefert — meist kostenlos.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
