import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'was-bieten', title: 'Was bieten sie?' }, { id: 'finden', title: 'Wie finden?' }, { id: 'abgrenzung', title: 'Abgrenzung zu anderen Stellen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegestützpunkte in Deutschland — kostenlose Beratung | Primundus',
  description: 'Pflegestützpunkte: Was sie bieten, wie man den nächsten findet und wann sie die beste Anlaufstelle sind.',
  alternates: { canonical: 'https://primundus.de/pflegestuetzpunkte-deutschland/' },
  openGraph: {
    title: 'Pflegestützpunkte Deutschland',
    description: 'Pflegestützpunkte: Was sie bieten, wie man den nächsten findet und wann sie die beste Anlaufstelle sind.',
    url: 'https://primundus.de/pflegestuetzpunkte-deutschland/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegestützpunkte in Deutschland — kostenlose Beratung vor Ort',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/pflegestuetzpunkte-deutschland/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegestützpunkte Deutschland', item: 'https://primundus.de/pflegestuetzpunkte-deutschland/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was macht ein Pflegestützpunkt?', acceptedAnswer: { '@type': 'Answer', text: 'Kostenlose, unabhängige Beratung zu allen Pflegefragen: Pflegegradantrag, Organisation der Pflege, Finanzierung, Beschwerden. Kein Verkauf, keine Bindung.' } },
      { '@type': 'Question', name: 'Wie finde ich den nächsten Pflegestützpunkt?', acceptedAnswer: { '@type': 'Answer', text: 'Über pflegestuetzpunkte.de — Eingabe der Postleitzahl, alle Stützpunkte in der Nähe werden angezeigt.' } }
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
            <span className="text-[#1C1C1C]">Pflegestützpunkte Deutschland</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 3 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflegestützpunkte in Deutschland — kostenlose Beratung vor Ort</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Über 500 Pflegestützpunkte in Deutschland bieten kostenlose, unabhängige Beratung — für Pflegebedürftige und Angehörige. Kein Antrag, kein Termin nötig.</p>
          <h2 id="was-bieten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was bieten sie?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="finden" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wie finden?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="abgrenzung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Abgrenzung zu anderen Stellen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was macht ein Pflegestützpunkt?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Kostenlose, unabhängige Beratung zu allen Pflegefragen: Pflegegradantrag, Organisation der Pflege, Finanzierung, Beschwerden. Kein Verkauf, keine Bindung.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie finde ich den nächsten Pflegestützpunkt?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Über pflegestuetzpunkte.de — Eingabe der Postleitzahl, alle Stützpunkte in der Nähe werden angezeigt.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
