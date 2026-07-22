import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'nachteile', title: 'Die wichtigsten Nachteile' }, { id: 'loesungen', title: 'Was die Lösung ist' }, { id: 'wann-nicht', title: 'Wann 24h-Pflege nicht passt' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Nachteile der 24h-Pflege — was man wissen sollte | Primundus',
  description: 'Ehrliche Übersicht der Nachteile der 24h-Pflege: Privatsphäre, Sprachbarrieren, Kraftwechsel, Kosten. Was die Lösung ist und wann 24h-Pflege nicht passt.',
  alternates: { canonical: 'https://primundus.de/nachteile-24h-pflege/' },
  openGraph: {
    title: 'Nachteile der 24h-Pflege | Primundus',
    description: 'Ehrliche Übersicht der Nachteile der 24h-Pflege: Privatsphäre, Sprachbarrieren, Kraftwechsel, Kosten. Was die Lösung ist und wann 24h-Pflege nicht passt.',
    url: 'https://primundus.de/nachteile-24h-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nachteile der 24h-Pflege — eine ehrliche Einschätzung',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/nachteile-24h-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Nachteile der 24h-Pflege', item: 'https://primundus.de/nachteile-24h-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sind die Nachteile der 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Eingeschränkte Privatsphäre, mögliche Sprachbarrieren, regelmäßige Kraftwechsel, kein Ersatz für medizinische Behandlungspflege, Platzbedarf für eigenes Zimmer der Kraft.' } },
      { '@type': 'Question', name: 'Wie oft wechselt die Betreuungskraft?', acceptedAnswer: { '@type': 'Answer', text: 'Alle 6–8 Wochen — Kräfte aus EU-Ländern haben Anspruch auf Heimfahrt. Primundus organisiert nahtlose Übergaben.' } },
      { '@type': 'Question', name: 'Was wenn die Kraft nicht gut Deutsch spricht?', acceptedAnswer: { '@type': 'Answer', text: 'Primundus prüft Deutschkenntnisse aktiv im Gespräch. Auf Wunsch Telefonat mit der Kraft vor Beginn möglich.' } }
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
            <span className="text-[#1C1C1C]">Nachteile der 24h-Pflege</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 5 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Nachteile der 24h-Pflege — eine ehrliche Einschätzung</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">24h-Pflege ist für viele die beste Lösung — aber nicht für alle. Hier sind die echten Nachteile, offen aufgelistet. Und was man dagegen tun kann.</p>
          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Privatsphäre eingeschränkt</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Eine fremde Person lebt im Haushalt — das erfordert Anpassung. Nicht jeder Pflegebedürftige und nicht jede Familie ist darauf vorbereitet.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Sprachbarriere möglich</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Osteuropäische Kräfte sprechen oft gut aber nicht perfekt Deutsch. Bei Verständigungsproblemen: Primundus wählt aktiv Kräfte mit guten Deutschkenntnissen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Regelmäßige Kraftwechsel</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Alle 6–8 Wochen kommt eine neue Kraft. Das erfordert Eingewöhnungszeit — besonders bei Demenz kann das herausfordernd sein.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Kein Ersatz für medizinische Pflege</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Behandlungspflege (Injektionen, Wundversorgung) muss ein ambulanter Pflegedienst übernehmen. Die 24h-Kraft ergänzt, ersetzt aber keinen Pflegedienst.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Wohnraumanpassung nötig</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Die Kraft braucht ein eigenes Zimmer. Nicht jeder Haushalt hat dafür Platz.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Kosten trotz Zuschüssen nicht null</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Auch mit allen Kassenzuschüssen bleibt ein Eigenanteil von typisch 1.000–2.000 €/Monat — für manche Familien zu viel.</p>
            </div>
          </div>          <h2 id="wann-nicht" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wann 24h-Pflege nicht die richtige Wahl ist</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">24h-Pflege passt nicht bei sehr hohem medizinischem Versorgungsbedarf, der dauerhaft qualifiziertes Pflegepersonal erfordert. Auch wenn kein Zimmer für die Kraft vorhanden ist, oder wenn der Pflegebedürftige ausdrücklich eine stationäre Einrichtung bevorzugt.</p>
          <div className="bg-[#F2EDE6] border-[rgba(139,115,85,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#6B5A44] mb-3">Wann Alternativen sinnvoller sind</p>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Intensivpflege oder Beatmung — spezialisierter Dienst nötig</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Kein freies Zimmer im Haushalt verfügbar</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegebedürftiger wünscht ausdrücklich Pflegeheim</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Sehr kurzer Bedarf unter 4 Wochen — Kurzzeitpflege prüfen</div>
          </div>
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was sind die Nachteile der 24h-Pflege?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Eingeschränkte Privatsphäre, mögliche Sprachbarrieren, regelmäßige Kraftwechsel, kein Ersatz für medizinische Behandlungspflege, Platzbedarf für eigenes Zimmer der Kraft.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie oft wechselt die Betreuungskraft?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Alle 6–8 Wochen — Kräfte aus EU-Ländern haben Anspruch auf Heimfahrt. Primundus organisiert nahtlose Übergaben.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was wenn die Kraft nicht gut Deutsch spricht?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Primundus prüft Deutschkenntnisse aktiv im Gespräch. Auf Wunsch Telefonat mit der Kraft vor Beginn möglich.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
