import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'risiken', title: 'Warum Einsamkeit gefährlich ist' }, { id: 'ursachen', title: 'Häufige Ursachen' }, { id: 'gegenmittel', title: 'Was hilft' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Einsamkeit bei Senioren — was wirklich hilft | Primundus',
  description: 'Einsamkeit im Alter ist ein Gesundheitsrisiko. Was Angehörige und Betreuungskräfte tun können und wie 24h-Pflege dagegen wirkt.',
  alternates: { canonical: 'https://primundus.de/einsamkeit-senioren-bekaempfen/' },
  openGraph: {
    title: 'Einsamkeit Senioren',
    description: 'Einsamkeit im Alter ist ein Gesundheitsrisiko. Was Angehörige und Betreuungskräfte tun können und wie 24h-Pflege dagegen wirkt.',
    url: 'https://primundus.de/einsamkeit-senioren-bekaempfen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Einsamkeit bei Senioren — was wirklich hilft',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/einsamkeit-senioren-bekaempfen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Einsamkeit bei Senioren', item: 'https://primundus.de/einsamkeit-senioren-bekaempfen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie gefährlich ist Einsamkeit für Senioren?', acceptedAnswer: { '@type': 'Answer', text: 'Sehr — Studien zeigen erhöhtes Risiko für Demenz, Herzerkrankungen und vorzeitigen Tod, vergleichbar mit dem Risiko durch starkes Rauchen.' } },
      { '@type': 'Question', name: 'Was hilft gegen Einsamkeit im Alter am meisten?', acceptedAnswer: { '@type': 'Answer', text: 'Täglicher sozialer Kontakt — die 24h-Betreuungskraft ist die wirksamste Lösung. Dazu: Begleitung zu Aktivitäten, Videotelefonie mit Familie, Vereine und Gruppen.' } }
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
            <span className="text-[#1C1C1C]">Einsamkeit bei Senioren</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Alltag · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Einsamkeit bei Senioren — was wirklich hilft</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Einsamkeit im Alter ist kein Schicksal — sie hat dieselbe gesundheitliche Wirkung wie Rauchen. Eine 24h-Betreuungskraft ist die direkteste Antwort: jeden Tag eine vertraute Person da.</p>
          <h2 id="risiken" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Warum Einsamkeit gefährlich ist</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="ursachen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Häufige Ursachen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="gegenmittel" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was hilft</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie gefährlich ist Einsamkeit für Senioren?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Sehr — Studien zeigen erhöhtes Risiko für Demenz, Herzerkrankungen und vorzeitigen Tod, vergleichbar mit dem Risiko durch starkes Rauchen.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was hilft gegen Einsamkeit im Alter am meisten?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Täglicher sozialer Kontakt — die 24h-Betreuungskraft ist die wirksamste Lösung. Dazu: Begleitung zu Aktivitäten, Videotelefonie mit Familie, Vereine und Gruppen.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
