import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'kosten', title: 'Kostenvergleich 2026' }, { id: 'qualitaet', title: 'Betreuungsqualität' }, { id: 'alltag', title: 'Alltag & Lebensqualität' }, { id: 'wann-was', title: 'Wann was sinnvoll ist' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: '24h-Pflege vs. Pflegeheim — vollständiger Vergleich 2026 | Primundus',
  description: '24h-Pflege zuhause oder Pflegeheim? Kosten, Qualität, Alltag — vollständiger Vergleich 2026 mit echten Zahlen. Wann was die bessere Wahl ist.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-vs-pflegeheim/' },
  openGraph: {
    title: '24h-Pflege vs. Pflegeheim 2026 | Primundus',
    description: '24h-Pflege zuhause oder Pflegeheim? Kosten, Qualität, Alltag — vollständiger Vergleich 2026 mit echten Zahlen. Wann was die bessere Wahl ist.',
    url: 'https://primundus.de/24h-pflege-vs-pflegeheim/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege vs. Pflegeheim — der vollständige Vergleich 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/24h-pflege-vs-pflegeheim/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege vs. Pflegeheim', item: 'https://primundus.de/24h-pflege-vs-pflegeheim/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist günstiger — Pflegeheim oder 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Oft ist 24h-Pflege günstiger — besonders in teuren Regionen wie Bayern oder BW. Mit Kassenzuschüssen liegt der Eigenanteil bei PG 3 oft unter dem Pflegeheim-Eigenanteil.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied in der Betreuungsqualität?', acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege: eine Kraft für eine Person, 24 Stunden. Pflegeheim: eine Kraft für 3–5 Bewohner, begrenzte Individualzeit.' } },
      { '@type': 'Question', name: 'Wann ist das Pflegeheim die bessere Wahl?', acceptedAnswer: { '@type': 'Answer', text: 'Bei sehr hohem medizinischem Bedarf der dauerhafte Fachpflege erfordert, oder wenn kein Zimmer für die Kraft vorhanden ist.' } }
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
            <span className="text-[#1C1C1C]">24h-Pflege vs. Pflegeheim</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 8 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">24h-Pflege vs. Pflegeheim — der vollständige Vergleich 2026</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Pflegeheim oder 24h-Pflege zuhause — das ist die wichtigste Entscheidung wenn Pflege nötig wird. Dieser Vergleich zeigt alle relevanten Unterschiede: Kosten, Betreuungsqualität, Alltag und emotionale Aspekte.</p>
          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Kostenvergleich 2026</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 2.871 €/Monat bundesweit — in Bayern und Baden-Württemberg deutlich höher. 24h-Pflege über Primundus kostet 2.200–3.500 €/Monat, mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 typisch auf 1.500–2.000 €/Monat.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Kosten im Vergleich — Pflegegrad 3</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegeheim bundesweit: Ø 2.871 €/Monat Eigenanteil</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegeheim Bayern/BW: bis 4.000 €/Monat Eigenanteil</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>24h-Pflege brutto: 2.200–3.500 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>24h-Pflege nach Zuschüssen: ca. 1.500–2.000 €/Monat</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Ersparnis vs. Pflegeheim Bayern: bis 2.500 €/Monat möglich</div>
          </div>          <h2 id="qualitaet" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Betreuungsqualität</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Im Pflegeheim teilen sich typisch 3–5 Bewohner eine Pflegekraft. Individueller Zeitaufwand pro Person: 30–60 Minuten täglich. Bei der 24h-Pflege ist eine Kraft ausschließlich für eine Person da — 24 Stunden, 7 Tage.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Der entscheidende Unterschied: Kontinuität. Die 24h-Kraft kennt die Vorlieben, Gewohnheiten und Eigenheiten der betreuten Person — das ist bei Demenz nicht verhandelbar.</p>
          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Alltag & Lebensqualität</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Im Pflegeheim gelten Hausordnung, feste Essenszeiten, geteilte Räume. Zuhause bleibt alles: die eigene Küche, der Garten, die Katze, die Nachbarn, der gewohnte Tagesrhythmus.</p>
          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Eigenes Zuhause vs. Heimzimmer</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Vertraute Umgebung erhält nachweislich die kognitive Funktion länger.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Flexibler Tagesablauf vs. Heimstruktur</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Kein Frühstück um 7:30 wenn man Langschläfer ist — der Alltag bleibt selbstbestimmt.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Besuche jederzeit vs. Besuchszeiten</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Familie und Freunde können jederzeit kommen — keine Einschränkungen.</p>
            </div>
          </div>
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist günstiger — Pflegeheim oder 24h-Pflege?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Oft ist 24h-Pflege günstiger — besonders in teuren Regionen wie Bayern oder BW. Mit Kassenzuschüssen liegt der Eigenanteil bei PG 3 oft unter dem Pflegeheim-Eigenanteil.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist der Unterschied in der Betreuungsqualität?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">24h-Pflege: eine Kraft für eine Person, 24 Stunden. Pflegeheim: eine Kraft für 3–5 Bewohner, begrenzte Individualzeit.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wann ist das Pflegeheim die bessere Wahl?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Bei sehr hohem medizinischem Bedarf der dauerhafte Fachpflege erfordert, oder wenn kein Zimmer für die Kraft vorhanden ist.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
