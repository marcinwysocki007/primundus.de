import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'was-ist', title: 'Was ist Kurzzeitpflege?' }, { id: 'leistungen', title: 'Leistungen 2026' }, { id: 'beantragen', title: 'Wie beantragen' }, { id: 'alternative', title: 'Wann 24h-Pflege besser ist' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Kurzzeitpflege 2026 — Anspruch, Kosten & Beantragung | Primundus',
  description: 'Kurzzeitpflege: Was es ist, wie viel die Kasse zahlt (2026: bis 3.539 €/Jahr), wie man es beantragt und wann 24h-Pflege die bessere Alternative ist.',
  alternates: { canonical: 'https://primundus.de/kurzzeitpflege/' },
  openGraph: {
    title: 'Kurzzeitpflege 2026 | Primundus',
    description: 'Kurzzeitpflege: Was es ist, wie viel die Kasse zahlt (2026: bis 3.539 €/Jahr), wie man es beantragt und wann 24h-Pflege die bessere Alternative ist.',
    url: 'https://primundus.de/kurzzeitpflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kurzzeitpflege 2026 — Anspruch, Kosten und wann 24h-Pflege besser ist',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/kurzzeitpflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Kosten', item: 'https://primundus.de/kosten/' },
      { '@type': 'ListItem', position: 3, name: 'Kurzzeitpflege', item: 'https://primundus.de/kurzzeitpflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie viel zahlt die Kasse für Kurzzeitpflege 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Seit Juli 2025 ist Kurzzeitpflege Teil des Entlastungsbudgets: 3.539 €/Jahr für PG 2–5, kombinierbar mit Verhinderungspflege.' } },
      { '@type': 'Question', name: 'Wie lange kann Kurzzeitpflege in Anspruch genommen werden?', acceptedAnswer: { '@type': 'Answer', text: 'Bis zur Ausschöpfung des Entlastungsbudgets (3.539 €/Jahr). Tagessätze in Einrichtungen: typisch 80–130 €/Tag.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Kurzzeitpflege und Verhinderungspflege?', acceptedAnswer: { '@type': 'Answer', text: 'Seit Juli 2025 sind beide im gemeinsamen Entlastungsbudget zusammengefasst. Kurzzeitpflege: stationär. Verhinderungspflege: ambulant oder durch nahestehende Person.' } }
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
            <a href="/kosten/" className="hover:text-[#8B7355] transition-colors">Kosten</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Kurzzeitpflege</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Finanzierung · 5 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Kurzzeitpflege 2026 — Anspruch, Kosten und wann 24h-Pflege besser ist</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Kurzzeitpflege überbrückt Phasen wenn die häusliche Pflege vorübergehend nicht sichergestellt werden kann — nach Krankenhausaufenthalt, bei Urlaub des pflegenden Angehörigen, in Krisensituationen. Seit Juli 2025 ist sie ins Entlastungsbudget integriert.</p>
          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Was ist Kurzzeitpflege?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Kurzzeitpflege ist vorübergehende vollstationäre Pflege in einer anerkannten Einrichtung — typisch nach Krankenhaus-Aufenthalten, bei Ausfall der Pflegeperson oder in Übergangssituationen. Seit Juli 2025 ist sie Teil des neuen Entlastungsbudgets.</p>
          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Leistungen der Pflegekasse 2026</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Das Entlastungsbudget beträgt 2026 insgesamt 3.539 €/Jahr — es umfasst Verhinderungspflege und Kurzzeitpflege gemeinsam und flexibel. Pflegegrad 2–5, keine starre Aufteilung mehr.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Entlastungsbudget 2026 — Überblick</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>3.539 €/Jahr für PG 2–5</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Umfasst Verhinderungspflege + Kurzzeitpflege</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Flexibel einsetzbar — keine starre Aufteilung</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Nicht verbrauchte Mittel verfallen zum Jahresende</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Antrag bei der Pflegekasse</div>
          </div>          <h2 id="alternative" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wann ist 24h-Pflege besser als Kurzzeitpflege?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Kurzzeitpflege eignet sich für kurze Übergangsphasen. Wenn der Bedarf dauerhaft ist — oder wenn das Pflegeheim als Lösung nicht in Frage kommt — ist die 24h-Pflege zuhause die bessere und oft günstigere Alternative.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Bei Primundus ist ein Start in 4–7 Tagen möglich. Täglich kündbar — auch wenn der Bedarf sich als kürzer herausstellt als gedacht.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie viel zahlt die Kasse für Kurzzeitpflege 2026?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Seit Juli 2025 ist Kurzzeitpflege Teil des Entlastungsbudgets: 3.539 €/Jahr für PG 2–5, kombinierbar mit Verhinderungspflege.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie lange kann Kurzzeitpflege in Anspruch genommen werden?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Bis zur Ausschöpfung des Entlastungsbudgets (3.539 €/Jahr). Tagessätze in Einrichtungen: typisch 80–130 €/Tag.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist der Unterschied zwischen Kurzzeitpflege und Verhinderungspflege?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Seit Juli 2025 sind beide im gemeinsamen Entlastungsbudget zusammengefasst. Kurzzeitpflege: stationär. Verhinderungspflege: ambulant oder durch nahestehende Person.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
