import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'einstieg', title: 'Wann ist der richtige Zeitpunkt?' }, { id: 'ablauf', title: 'Wie läuft die Organisation ab?' }, { id: 'kosten', title: 'Was kostet es die Familie?' }, { id: 'entlastung', title: 'Entlastung für pflegende Angehörige' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: '24h-Pflege für Angehörige organisieren — Leitfaden für Familien | Primundus',
  description: '24h-Pflege für Eltern oder Angehörige organisieren: was zu beachten ist, wie der Ablauf läuft, welche Kosten entstehen und wie Primundus unterstützt.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-fuer-angehoerige/' },
  openGraph: {
    title: '24h-Pflege für Angehörige | Primundus',
    description: '24h-Pflege für Eltern oder Angehörige organisieren: was zu beachten ist, wie der Ablauf läuft, welche Kosten entstehen und wie Primundus unterstützt.',
    url: 'https://primundus.de/24h-pflege-fuer-angehoerige/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege für Angehörige — wie Familien die Betreuung organisieren',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/24h-pflege-fuer-angehoerige/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege für Angehörige', item: 'https://primundus.de/24h-pflege-fuer-angehoerige/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie organisiere ich 24h-Pflege für meine Eltern?', acceptedAnswer: { '@type': 'Answer', text: 'Primundus anrufen (089 200 000 830) oder online anfragen. Im Beratungsgespräch wird die Situation besprochen, eine passende Kraft ausgewählt, und der Start organisiert — in 4–7 Tagen.' } },
      { '@type': 'Question', name: 'Was kostet 24h-Pflege für meine Mutter / meinen Vater?', acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat. Mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf ca. 1.500–2.000 €/Monat.' } },
      { '@type': 'Question', name: 'Kann ich täglich kündbar sein?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Primundus ist täglich kündbar. Keine Mindestlaufzeit, keine Kündigungsfristen.' } }
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
            <span className="text-[#1C1C1C]">24h-Pflege für Angehörige</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 7 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">24h-Pflege für Angehörige — wie Familien die Betreuung organisieren</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Die Eltern brauchen Pflege — aber das Pflegeheim kommt nicht in Frage. Und selbst rund um die Uhr da sein ist nicht möglich. 24h-Pflege ist die Lösung: eine Betreuungskraft zieht ein, übernimmt alles, und die Familie kann wieder aufatmen.</p>
          <h2 id="einstieg" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wann ist der richtige Zeitpunkt?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Viele Familien warten zu lange. Die Zeichen sind oft schleichend: der Herd bleibt an, Medikamente werden vergessen, die Wohnung vernachlässigt. Der richtige Zeitpunkt ist nicht wenn nichts mehr geht — sondern wenn man merkt, dass die aktuelle Situation nicht mehr sicher ist.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Typische Auslöser für den Entschluss</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Elternteil lebt allein und hatte einen Sturz</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Demenz-Symptome nehmen zu — Orientierung lässt nach</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegender Ehepartner ist selbst krank oder erschöpft</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Familie lebt weit weg und kann nicht täglich helfen</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Krankenhausaufenthalt — was danach?</div>
          </div>          <h2 id="ablauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wie läuft die Organisation ab?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Primundus übernimmt die gesamte Organisation: Beratungsgespräch, Auswahl der Kraft, Koordination des Starts, laufende Betreuung. Familien müssen nicht selbst suchen, prüfen oder verwalten.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Vom ersten Anruf bis zum Start der Betreuung vergehen typisch 4–7 Tage. In dringenden Situationen auch schneller.</p>
          <h2 id="entlastung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Entlastung für pflegende Angehörige</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wer Eltern oder Partner pflegt, gibt oft die eigene Gesundheit dafür her. Die 24h-Kraft übernimmt nicht nur die Pflege — sie gibt Angehörigen ihr Leben zurück. Beruf, eigene Kinder, Erholung, Schlaf.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dazu kommt: Pflegende Angehörige haben Anspruch auf Pflegegeld wenn sie die Pflege selbst übernehmen. Mit einer 24h-Kraft geht das Pflegegeld direkt an die Familie.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie organisiere ich 24h-Pflege für meine Eltern?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Primundus anrufen (089 200 000 830) oder online anfragen. Im Beratungsgespräch wird die Situation besprochen, eine passende Kraft ausgewählt, und der Start organisiert — in 4–7 Tagen.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was kostet 24h-Pflege für meine Mutter / meinen Vater?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">2.200–3.500 €/Monat. Mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf ca. 1.500–2.000 €/Monat.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Kann ich täglich kündbar sein?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ja — Primundus ist täglich kündbar. Keine Mindestlaufzeit, keine Kündigungsfristen.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
