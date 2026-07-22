import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'zuhause', title: 'Im eigenen Zuhause bleiben' }, { id: 'eins-zu-eins', title: '1:1-Betreuung' }, { id: 'kosten', title: 'Kosten oft günstiger' }, { id: 'rechtssicher', title: 'Rechtssicher & flexibel' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Vorteile der 24h-Pflege zuhause — warum sie besser ist als das Pflegeheim | Primundus',
  description: 'Alle Vorteile der 24h-Pflege zuhause im Überblick: eigenes Zuhause, 1:1-Betreuung, günstiger als Pflegeheim, täglich kündbar. Mit ehrlichem Vergleich.',
  alternates: { canonical: 'https://primundus.de/vorteile-24h-pflege/' },
  openGraph: {
    title: 'Vorteile der 24h-Pflege | Primundus',
    description: 'Alle Vorteile der 24h-Pflege zuhause im Überblick: eigenes Zuhause, 1:1-Betreuung, günstiger als Pflegeheim, täglich kündbar. Mit ehrlichem Vergleich.',
    url: 'https://primundus.de/vorteile-24h-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vorteile der 24h-Pflege zuhause — was sie von anderen Lösungen unterscheidet',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/vorteile-24h-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Vorteile der 24h-Pflege', item: 'https://primundus.de/vorteile-24h-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sind die größten Vorteile der 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Eigenes Zuhause bleibt, 1:1-Betreuung rund um die Uhr, Haushalt vollständig übernommen, täglich kündbar, oft günstiger als Pflegeheim.' } },
      { '@type': 'Question', name: 'Ist 24h-Pflege wirklich günstiger als ein Pflegeheim?', acceptedAnswer: { '@type': 'Answer', text: 'Oft ja — mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf 1.500–2.000 €/Monat. Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 2.871 €/Monat.' } },
      { '@type': 'Question', name: 'Welche Vorteile hat 24h-Pflege bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Vertraute Umgebung bleibt erhalten, eine feste Bezugsperson ist immer da — das reduziert Desorientierung und Stress nachweislich.' } }
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
            <span className="text-[#1C1C1C]">Vorteile der 24h-Pflege</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 6 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Vorteile der 24h-Pflege zuhause — was sie von anderen Lösungen unterscheidet</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">24h-Pflege zuhause ist keine Notlösung — sie ist für viele Menschen die bessere Lösung. Warum? Weil das eigene Zuhause bleibt, weil eine vertraute Person immer da ist, und weil die Kosten oft günstiger sind als ein Pflegeheim. Hier alle Vorteile im Überblick.</p>
          <h2 id="zuhause" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Im eigenen Zuhause bleiben</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Das eigene Zuhause ist mehr als vier Wände — es ist Identität, Erinnerung, Sicherheit. Jeder gewohnte Handgriff, jedes vertraute Gesicht in der Nachbarschaft, der eigene Garten. Ein Pflegeheim kann das nicht ersetzen.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Bei der 24h-Pflege bleibt das alles erhalten. Die Betreuungskraft kommt in das Zuhause des Pflegebedürftigen — nicht umgekehrt. Das reduziert nachweislich Desorientierung, besonders bei Demenz.</p>
          <h2 id="eins-zu-eins" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">1:1-Betreuung rund um die Uhr</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Im Pflegeheim teilen sich viele Bewohner eine Pflegekraft. Zu Stoßzeiten fehlt die Zeit für den Einzelnen. Bei der 24h-Pflege ist eine Kraft ausschließlich für eine Person da — ganztags, nachts, bei Arztbesuchen, beim Kochen.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Das schafft Vertrauen, Kontinuität und echte Beziehung — besonders wichtig bei Demenz, Parkinson oder nach einem Schlaganfall.</p>
          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Täglich kündbar</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Keine Mindestlaufzeit, keine Fristen — maximale Flexibilität für die Familie.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">In 4–7 Tagen startklar</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Primundus organisiert den Start schnell — auch in dringenden Situationen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Haushalt vollständig übernommen</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Kochen, Putzen, Einkaufen, Wäsche — alles inklusive.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Nachtbereitschaft</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Immer erreichbar — auch bei nächtlicher Unruhe oder Stürzen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Günstiger als Pflegeheim</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Mit Kassenzuschüssen oft unter dem Pflegeheim-Eigenanteil.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Rechtssicher</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Entsendemodell mit A1-Bescheinigung — keine deutschen Sozialabgaben.</p>
            </div>
          </div>          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Kosten oft günstiger als das Pflegeheim</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 2.871 €/Monat — Tendenz steigend. 24h-Pflege über Primundus kostet 2.200–3.500 €/Monat, davon können mit Pflegegeld, Entlastungsbetrag und Steuerabzug mehrere hundert Euro monatlich abgezogen werden.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Bei Pflegegrad 3 sinkt der Eigenanteil mit allen Zuschüssen oft auf unter 1.500–2.000 €/Monat. Das ist deutlich weniger als viele Pflegeheime — bei deutlich besserer Betreuungsqualität.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was sind die größten Vorteile der 24h-Pflege?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Eigenes Zuhause bleibt, 1:1-Betreuung rund um die Uhr, Haushalt vollständig übernommen, täglich kündbar, oft günstiger als Pflegeheim.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Ist 24h-Pflege wirklich günstiger als ein Pflegeheim?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Oft ja — mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf 1.500–2.000 €/Monat. Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 2.871 €/Monat.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Welche Vorteile hat 24h-Pflege bei Demenz?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Vertraute Umgebung bleibt erhalten, eine feste Bezugsperson ist immer da — das reduziert Desorientierung und Stress nachweislich.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
