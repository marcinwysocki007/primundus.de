import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'betraege', title: 'Aktuelle Beträge 2026' }, { id: 'einstufung', title: 'Wie wird eingestuft?' }, { id: 'beantragen', title: 'Pflegegrad beantragen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegegrade 2025/2026 — aktuelle Beträge & Übersicht | Primundus',
  description: 'Pflegegrade 2025 und 2026: Aktuelle Pflegegeldbeträge, Sachleistungen, was sich geändert hat und wie der Pflegegrad beantragt wird.',
  alternates: { canonical: 'https://primundus.de/pflegegrade-2025/' },
  openGraph: {
    title: 'Pflegegrade 2025/2026 | Primundus',
    description: 'Pflegegrade 2025 und 2026: Aktuelle Pflegegeldbeträge, Sachleistungen, was sich geändert hat und wie der Pflegegrad beantragt wird.',
    url: 'https://primundus.de/pflegegrade-2025/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrade 2025/2026 — aktuelle Beträge und Übersicht',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/pflegegrade-2025/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrade 2025/2026', item: 'https://primundus.de/pflegegrade-2025/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie hoch ist das Pflegegeld 2026?', acceptedAnswer: { '@type': 'Answer', text: 'PG 2: 347 €/Mo, PG 3: 599 €/Mo, PG 4: 800 €/Mo, PG 5: 990 €/Mo.' } },
      { '@type': 'Question', name: 'Was hat sich bei den Pflegegraden 2025 geändert?', acceptedAnswer: { '@type': 'Answer', text: 'Die Leistungsbeträge wurden erhöht. Das Entlastungsbudget fasst Verhinderungs- und Kurzzeitpflege zusammen (3.539 €/Jahr).' } },
      { '@type': 'Question', name: 'Wie beantrage ich einen Pflegegrad?', acceptedAnswer: { '@type': 'Answer', text: 'Antrag bei der Pflegekasse stellen — telefonisch oder schriftlich. Anschließend Begutachtung durch den Medizinischen Dienst (MD).' } }
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
            <span className="text-[#1C1C1C]">Pflegegrade 2025/2026</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Pflegegrade · 5 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflegegrade 2025/2026 — aktuelle Beträge und Übersicht</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Die Pflegegrade bestimmen welche Leistungen die Pflegekasse zahlt. 2026 gelten die nach der Pflegereform 2025 angehobenen Beträge. Hier die vollständige Übersicht.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Pflegegeld 2026 — aktuelle Beträge</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 1: kein Pflegegeld — Entlastungsbetrag 131 €/Mo</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 2: 347 €/Monat Pflegegeld</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 3: 599 €/Monat Pflegegeld</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 4: 800 €/Monat Pflegegeld</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 5: 990 €/Monat Pflegegeld</div>
          </div>          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Sachleistungen 2026 — für ambulante Dienste</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 2: 796 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 3: 1.497 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 4: 1.859 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>PG 5: 2.299 €/Monat</div>
          </div>          <h2 id="einstufung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wie werden Pflegegrade eingestuft?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Der Medizinische Dienst (MD) bewertet 6 Module des NBA (Neues Begutachtungsassessment): Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit Erkrankungen, Alltagsleben. Daraus ergibt sich ein Gesamtwert, der den Pflegegrad bestimmt.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wichtig: Den Gutachter nicht beschönigen. Den schlechtesten typischen Tag beschreiben — nicht den guten Tag.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie hoch ist das Pflegegeld 2026?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">PG 2: 347 €/Mo, PG 3: 599 €/Mo, PG 4: 800 €/Mo, PG 5: 990 €/Mo.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was hat sich bei den Pflegegraden 2025 geändert?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Die Leistungsbeträge wurden erhöht. Das Entlastungsbudget fasst Verhinderungs- und Kurzzeitpflege zusammen (3.539 €/Jahr).</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie beantrage ich einen Pflegegrad?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Antrag bei der Pflegekasse stellen — telefonisch oder schriftlich. Anschließend Begutachtung durch den Medizinischen Dienst (MD).</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
