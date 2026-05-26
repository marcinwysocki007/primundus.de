import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'haftung-kraft', title: 'Haftung der Kraft' }, { id: 'haftung-agentur', title: 'Haftung der Agentur' }, { id: 'versicherung', title: 'Versicherungsschutz' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Haftung im Pflegehaushalt — wer haftet wofür? | Primundus',
  description: 'Haftungsfragen in der 24h-Pflege: Was passiert wenn die Kraft einen Schaden verursacht? Wer haftet bei Unfällen? Alles Wichtige kompakt.',
  alternates: { canonical: 'https://primundus.de/haftung-pflegehaushalt/' },
  openGraph: {
    title: 'Haftung Pflegehaushalt',
    description: 'Haftungsfragen in der 24h-Pflege: Was passiert wenn die Kraft einen Schaden verursacht? Wer haftet bei Unfällen? Alles Wichtige kompakt.',
    url: 'https://primundus.de/haftung-pflegehaushalt/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Haftung im Pflegehaushalt — wer haftet wofür?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/haftung-pflegehaushalt/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/rechtliches/' },
      { '@type': 'ListItem', position: 3, name: 'Haftung im Pflegehaushalt', item: 'https://primundus.de/haftung-pflegehaushalt/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wer haftet wenn die Betreuungskraft einen Schaden verursacht?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Entsendemodell: die Agentur ist Arbeitgeber und trägt die Haftung. Die Familie ist nicht Arbeitgeber und daher nicht direkt haftbar.' } },
      { '@type': 'Question', name: 'Ist die Betreuungskraft unfallversichert?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — bei korrektem Entsendemodell ist die Kraft in ihrem Heimatland kranken- und unfallversichert. Primundus stellt das sicher.' } }
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
            <span className="text-[#1C1C1C]">Haftung im Pflegehaushalt</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Rechtliches · 4 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Haftung im Pflegehaushalt — wer haftet wofür?</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Wenn eine Betreuungskraft einen Schaden verursacht, etwas kaputt geht oder ein Unfall passiert — wer haftet? Dieser Ratgeber klärt die wichtigsten Fragen.</p>
          <h2 id="haftung-kraft" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Haftung der Kraft</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="haftung-agentur" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Haftung der Agentur</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="versicherung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Versicherungsschutz</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wer haftet wenn die Betreuungskraft einen Schaden verursacht?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Bei Entsendemodell: die Agentur ist Arbeitgeber und trägt die Haftung. Die Familie ist nicht Arbeitgeber und daher nicht direkt haftbar.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Ist die Betreuungskraft unfallversichert?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ja — bei korrektem Entsendemodell ist die Kraft in ihrem Heimatland kranken- und unfallversichert. Primundus stellt das sicher.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
