import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'aenderungen', title: 'Die wichtigsten Änderungen' }, { id: 'entlastungsbudget', title: 'Das neue Entlastungsbudget' }, { id: 'auswirkungen', title: 'Was das für Familien bedeutet' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegereform 2025 — was hat sich geändert? | Primundus',
  description: 'Pflegereform 2025: Das neue Entlastungsbudget, höhere Leistungsbeträge, Änderungen bei Verhinderungs- und Kurzzeitpflege. Alle Änderungen kompakt.',
  alternates: { canonical: 'https://primundus.de/pflegereform-2025/' },
  openGraph: {
    title: 'Pflegereform 2025 | Primundus',
    description: 'Pflegereform 2025: Das neue Entlastungsbudget, höhere Leistungsbeträge, Änderungen bei Verhinderungs- und Kurzzeitpflege. Alle Änderungen kompakt.',
    url: 'https://primundus.de/pflegereform-2025/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegereform 2025 — alle wichtigen Änderungen im Überblick',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/pflegereform-2025/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegereform 2025', item: 'https://primundus.de/pflegereform-2025/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was hat sich durch die Pflegereform 2025 geändert?', acceptedAnswer: { '@type': 'Answer', text: 'Verhinderungspflege und Kurzzeitpflege wurden zum Entlastungsbudget (3.539 €/Jahr) zusammengefasst. Leistungsbeträge für Pflegegeld und Sachleistungen stiegen.' } },
      { '@type': 'Question', name: 'Was ist das Entlastungsbudget 2026?', acceptedAnswer: { '@type': 'Answer', text: '3.539 €/Jahr für PG 2–5 — umfasst Verhinderungspflege und Kurzzeitpflege flexibel und ohne starre Aufteilung.' } },
      { '@type': 'Question', name: 'Wann trat die Pflegereform in Kraft?', acceptedAnswer: { '@type': 'Answer', text: 'Juli 2025. 2026 ist das erste volle Kalenderjahr ohne Übergangsregelungen.' } }
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
            <span className="text-[#1C1C1C]">Pflegereform 2025</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 5 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflegereform 2025 — alle wichtigen Änderungen im Überblick</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Juli 2025: Die größte Pflegereform seit Jahren tritt in Kraft. Das neue Entlastungsbudget fasst Verhinderungspflege und Kurzzeitpflege zusammen. Leistungsbeträge steigen. Was das für Familien bedeutet.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Die wichtigsten Änderungen ab Juli 2025</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Entlastungsbudget: Verhinderungspflege + Kurzzeitpflege zu einem Budget zusammengefasst</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Entlastungsbudget 2026: 3.539 €/Jahr für PG 2–5</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Entlastungsbetrag: weiterhin 131 €/Monat für alle PG 1–5</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegegeld: PG 2 = 347 €, PG 3 = 599 €, PG 4 = 800 €, PG 5 = 990 €</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Sachleistungen: PG 2 = 796 €, PG 3 = 1.497 €, PG 4 = 1.859 €, PG 5 = 2.299 €</div>
          </div>          <h2 id="entlastungsbudget" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Das neue Entlastungsbudget — was ist neu?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Bis Juni 2025 gab es getrennte Töpfe: Verhinderungspflege (bis 1.612 €/Jahr, ausbaubar auf 3.224 €) und Kurzzeitpflege (bis 1.774 €/Jahr). Das war kompliziert und führte oft zu nicht genutzten Mitteln.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Ab Juli 2025 gilt ein einheitliches Entlastungsbudget: 3.539 €/Jahr — flexibel einsetzbar für beide Leistungsarten, kein Umschichten mehr nötig. 2026 ist das erste volle Jahr ohne Übergangsregelungen.</p>
          <h2 id="auswirkungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was das für Familien bedeutet</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Für Familien mit 24h-Pflege: Der Entlastungsbetrag (131 €/Mo) läuft weiter. Das Entlastungsbudget kann für Auszeiten der Kraft (Verhinderungspflege) genutzt werden. Insgesamt mehr Flexibilität, weniger Bürokratie.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was hat sich durch die Pflegereform 2025 geändert?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Verhinderungspflege und Kurzzeitpflege wurden zum Entlastungsbudget (3.539 €/Jahr) zusammengefasst. Leistungsbeträge für Pflegegeld und Sachleistungen stiegen.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist das Entlastungsbudget 2026?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">3.539 €/Jahr für PG 2–5 — umfasst Verhinderungspflege und Kurzzeitpflege flexibel und ohne starre Aufteilung.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wann trat die Pflegereform in Kraft?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Juli 2025. 2026 ist das erste volle Kalenderjahr ohne Übergangsregelungen.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
