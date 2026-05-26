import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'risiken', title: 'Risiken' }, { id: 'organisation', title: 'Wie organisieren' }, { id: 'betreuungskraft', title: 'Was die Kraft darf' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Medikamente für Senioren verwalten — sicher und fehlerfrei | Primundus',
  description: 'Wie Medikamente bei Senioren sicher verwaltet werden: Wochendosierer, Medikamentenliste, was die Betreuungskraft darf und nicht darf.',
  alternates: { canonical: 'https://primundus.de/medikamente-senioren-verwalten/' },
  openGraph: {
    title: 'Medikamente Senioren verwalten',
    description: 'Wie Medikamente bei Senioren sicher verwaltet werden: Wochendosierer, Medikamentenliste, was die Betreuungskraft darf und nicht darf.',
    url: 'https://primundus.de/medikamente-senioren-verwalten/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Medikamente für Senioren sicher verwalten',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/medikamente-senioren-verwalten/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Medikamente Senioren verwalten', item: 'https://primundus.de/medikamente-senioren-verwalten/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was darf eine Betreuungskraft bei Medikamenten tun?', acceptedAnswer: { '@type': 'Answer', text: 'Medikamentenerinnerung geben, Wochendosierer befüllen, Einnahme beobachten. Injektionen und Infusionen darf nur Fachpersonal.' } },
      { '@type': 'Question', name: 'Wie wird die Medikamentengabe sicher organisiert?', acceptedAnswer: { '@type': 'Answer', text: 'Wochendosierer, klare Medikamentenliste mit Uhrzeiten, Fotos der Packungen, regelmäßige Kontrolle durch Hausarzt.' } }
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
            <a href="/alltag/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Medikamente Senioren verwalten</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Alltag · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Medikamente für Senioren sicher verwalten</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Falsche Dosierung, vergessene Einnahme, gefährliche Wechselwirkungen — Medikamentenfehler sind bei Senioren ein ernstes Risiko. Eine gute Betreuungskraft schafft Ordnung und Sicherheit.</p>
          <h2 id="risiken" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Risiken</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="organisation" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wie organisieren</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="betreuungskraft" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was die Kraft darf</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was darf eine Betreuungskraft bei Medikamenten tun?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Medikamentenerinnerung geben, Wochendosierer befüllen, Einnahme beobachten. Injektionen und Infusionen darf nur Fachpersonal.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie wird die Medikamentengabe sicher organisiert?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Wochendosierer, klare Medikamentenliste mit Uhrzeiten, Fotos der Packungen, regelmäßige Kontrolle durch Hausarzt.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
