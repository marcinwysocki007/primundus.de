import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'geldleistungen', title: 'Geldleistungen' }, { id: 'sachleistungen', title: 'Sachleistungen' }, { id: 'entlastung', title: 'Entlastungsleistungen' }, { id: 'weitere', title: 'Weitere Leistungen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegeversicherung Leistungen 2026 — vollständige Übersicht | Primundus',
  description: 'Alle Leistungen der Pflegeversicherung 2026 im Überblick: Pflegegeld, Sachleistungen, Entlastungsbudget, Hilfsmittel. Mit aktuellen Beträgen.',
  alternates: { canonical: 'https://primundus.de/pflegeversicherung-leistungen-uebersicht/' },
  openGraph: {
    title: 'Pflegeversicherung Leistungen 2026 | Primundus',
    description: 'Alle Leistungen der Pflegeversicherung 2026 im Überblick: Pflegegeld, Sachleistungen, Entlastungsbudget, Hilfsmittel. Mit aktuellen Beträgen.',
    url: 'https://primundus.de/pflegeversicherung-leistungen-uebersicht/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegeversicherung Leistungen 2026 — vollständige Übersicht aller Zuschüsse',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/pflegeversicherung-leistungen-uebersicht/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Kosten', item: 'https://primundus.de/kosten/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegeversicherung Leistungen 2026', item: 'https://primundus.de/pflegeversicherung-leistungen-uebersicht/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was zahlt die Pflegeversicherung 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegeld (347–990 €/Mo), Sachleistungen (796–2.299 €/Mo), Entlastungsbetrag (131 €/Mo), Entlastungsbudget (3.539 €/Jahr), Pflegehilfsmittel (42 €/Mo), Wohnraumanpassung (bis 4.000 €).' } },
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Pflegegeld und Sachleistungen?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegeld: Geld direkt an die pflegebedürftige Person wenn Angehörige pflegen. Sachleistungen: Kasse zahlt direkt an einen zugelassenen Pflegedienst.' } },
      { '@type': 'Question', name: 'Können Pflegegeld und Sachleistungen kombiniert werden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Kombinationsleistung. Wird z.B. 50% der Sachleistungen genutzt, gibt es 50% des Pflegegeldes zusätzlich.' } }
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
            <span className="text-[#1C1C1C]">Pflegeversicherung Leistungen 2026</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Finanzierung · 7 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflegeversicherung Leistungen 2026 — vollständige Übersicht aller Zuschüsse</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Die Pflegeversicherung zahlt mehr als viele wissen. Pflegegeld, Sachleistungen, Entlastungsbetrag, Entlastungsbudget, Pflegehilfsmittel, Wohnraumanpassung — hier alle Leistungen 2026 mit aktuellen Beträgen.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Pflegegeld 2026 — für häusliche Pflege durch Angehörige</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 1: — (kein Pflegegeld)</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 2: 347 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 3: 599 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 4: 800 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 5: 990 €/Monat</div>
          </div>          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Sachleistungen 2026 — für ambulante Pflegedienste</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 2: 796 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 3: 1.497 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 4: 1.859 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 5: 2.299 €/Monat</div>
          </div>          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Entlastungsleistungen 2026</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Entlastungsbetrag: 131 €/Monat (alle PG 1–5)</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Entlastungsbudget: 3.539 €/Jahr (PG 2–5) — umfasst Verhinderungs- + Kurzzeitpflege</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegehilfsmittel: 42 €/Monat pauschal</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Wohnraumanpassung: bis 4.000 €/Maßnahme, max. 16.000 € bei mehreren Personen</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Hausnotruf: 25,90 €/Monat (Grundpauschale)</div>
          </div>          <h2 id="weitere" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Weitere Leistungen der Pflegeversicherung</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Darüber hinaus zahlt die Pflegeversicherung: Beratungsbesuche (bis 37 €/Besuch), Unterstützung beim Pflegekurs für Angehörige (kostenlos), Rentenversicherungsbeiträge für pflegende Angehörige, und bei vollstationärer Pflege einen Zuschuss zum Heimkostenbeitrag.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was zahlt die Pflegeversicherung 2026?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Pflegegeld (347–990 €/Mo), Sachleistungen (796–2.299 €/Mo), Entlastungsbetrag (131 €/Mo), Entlastungsbudget (3.539 €/Jahr), Pflegehilfsmittel (42 €/Mo), Wohnraumanpassung (bis 4.000 €).</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist der Unterschied zwischen Pflegegeld und Sachleistungen?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Pflegegeld: Geld direkt an die pflegebedürftige Person wenn Angehörige pflegen. Sachleistungen: Kasse zahlt direkt an einen zugelassenen Pflegedienst.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Können Pflegegeld und Sachleistungen kombiniert werden?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ja — Kombinationsleistung. Wird z.B. 50% der Sachleistungen genutzt, gibt es 50% des Pflegegeldes zusätzlich.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
