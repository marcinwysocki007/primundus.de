import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'erkennen', title: 'Zeichen erkennen' }, { id: 'hilfe', title: 'Wie helfen' }, { id: 'behandlung', title: 'Behandlungsmöglichkeiten' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Depression im Alter — Erkennen, Helfen, Pflegen | Primundus',
  description: 'Depression im Alter richtig erkennen und damit umgehen: Zeichen, wie die Betreuungskraft helfen kann und wann professionelle Hilfe nötig ist.',
  alternates: { canonical: 'https://primundus.de/depression-im-alter-pflege/' },
  openGraph: {
    title: 'Depression im Alter',
    description: 'Depression im Alter richtig erkennen und damit umgehen: Zeichen, wie die Betreuungskraft helfen kann und wann professionelle Hilfe nötig ist.',
    url: 'https://primundus.de/depression-im-alter-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Depression im Alter — Erkennen, Helfen, richtig Pflegen',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/depression-im-alter-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Depression im Alter', item: 'https://primundus.de/depression-im-alter-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie erkenne ich Depression im Alter?', acceptedAnswer: { '@type': 'Answer', text: 'Anhaltende Traurigkeit, Interessenverlust, Rückzug, Schlafprobleme, Appetitlosigkeit, häufige körperliche Beschwerden ohne klare Ursache.' } },
      { '@type': 'Question', name: 'Kann eine Betreuungskraft bei Depression helfen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Strukturierung des Alltags, soziale Aktivierung, Begleitung bei Aktivitäten, konsequente Medikamentenerinnerung. Keine Therapie, aber wichtige Alltagsunterstützung.' } }
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
            <span className="text-[#1C1C1C]">Depression im Alter</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Krankheiten · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Depression im Alter — Erkennen, Helfen, richtig Pflegen</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Depression im Alter wird oft übersehen — als 'Altersgriesgram' abgetan oder mit Demenz verwechselt. Dabei ist sie behandelbar. Eine gute Betreuungskraft kann entscheidend helfen.</p>
          <h2 id="erkennen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Zeichen erkennen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="hilfe" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wie helfen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="behandlung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Behandlungsmöglichkeiten</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie erkenne ich Depression im Alter?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Anhaltende Traurigkeit, Interessenverlust, Rückzug, Schlafprobleme, Appetitlosigkeit, häufige körperliche Beschwerden ohne klare Ursache.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Kann eine Betreuungskraft bei Depression helfen?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ja — Strukturierung des Alltags, soziale Aktivierung, Begleitung bei Aktivitäten, konsequente Medikamentenerinnerung. Keine Therapie, aber wichtige Alltagsunterstützung.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
