import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'warum', title: 'Pflegekraft aus Rumänien — warum?' },
  { id: 'entsendemodell', title: 'Das Entsendemodell' },
  { id: 'qualifikation', title: 'Qualifikation & Sprache' },
  { id: 'kosten', title: 'Kosten & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Rumänien — legal, Kosten & Entsendemodell | Primundus',
  description: 'Pflegekraft aus Rumänien im Entsendemodell: Wie es funktioniert, was es kostet und worauf bei der Auswahl zu achten ist. Rechtssicher mit A1-Bescheinigung.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-rumaenien/' },
  openGraph: {
    title: 'Pflegekraft aus Rumänien | Primundus',
    description: 'Rumänische Pflegekraft im Entsendemodell: legal, geprüft, rechtssicher.',
    url: 'https://primundus.de/pflegekraft-aus-rumaenien/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft aus Rumänien — legal, Kosten und Entsendemodell',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-rumaenien/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Rumänien', item: 'https://primundus.de/pflegekraft-aus-rumaenien/' },
    ],
  },
]

export default function PflegekraftAusRumaenien() {
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
            <a href="/organisation/" className="hover:text-[#8B7355] transition-colors">Organisation</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegekraft aus Rumänien</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegekraft aus Rumänien — legal, Kosten & Entsendemodell
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Rumänien ist EU-Mitglied seit 2007 — rumänische Betreuungskräfte können im selben rechtlich abgesicherten Entsendemodell nach Deutschland kommen wie Kräfte aus Polen oder Bulgarien. Primundus vermittelt auf Wunsch auch rumänische Betreuungskräfte — vollständig rechtssicher, mit A1-Bescheinigung und denselben Qualitätsstandards.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Rumänien ist EU-Mitglied — Entsendemodell funktioniert identisch wie bei Polen',
                'Rechtssicher mit A1-Bescheinigung aus Rumänien',
                'Rumänien: zweithäufigste Herkunft nach Polen bei osteuropäischen Pflegekräften',
                'Kosten: 2.200–3.500 €/Monat — identisch zu anderen EU-Kräften',
                'Primundus prüft Erfahrung, Deutschkenntnisse und Referenzen',
                'Täglich kündbar — volle Flexibilität',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="warum" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegekraft aus Rumänien — warum eine gute Wahl?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Rumänien ist nach Polen das zweitgrößte Herkunftsland für osteuropäische Pflegekräfte in Deutschland. Rumänische Betreuungskräfte haben oft mehrjährige Erfahrung in der häuslichen 24h-Pflege in verschiedenen EU-Ländern und sind häufig auch deutschsprachig aufgewachsen oder haben gute Deutschkenntnisse durch frühere Einsätze.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Letztlich ist das Herkunftsland zweitrangig — entscheidend sind Qualifikation, Erfahrung, Deutschkenntnisse und die Persönlichkeit der einzelnen Person. Primundus wählt aus dem gesamten EU-Pool die passende Kraft aus.
          </p>

          <h2 id="entsendemodell" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Das Entsendemodell — so funktioniert es
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Das Entsendemodell funktioniert bei Rumänien identisch wie bei Polen oder Bulgarien. Die Betreuungskraft ist bei einem rumänischen Unternehmen angestellt, dort sozialversichert und wird mit A1-Bescheinigung nach Deutschland entsandt.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { titel: 'Für die Familie', desc: 'Kein eigenes Arbeitsverhältnis — Vertrag nur mit Primundus als Agentur. Keine deutschen Sozialabgaben. Rechtssicher.' },
              { titel: 'Für die Betreuungskraft', desc: 'Angestellt in Rumänien, sozialversichert. A1-Bescheinigung sichert legalen Status in Deutschland. Regelmäßiger Wechsel ermöglicht Heimkehr.' },
              { titel: 'A1-Bescheinigung', desc: 'Das zentrale Dokument beim Entsendemodell — belegt die Sozialversicherungspflicht im Heimatland und damit den legalen Entsendestatus. Bei Kontrolle vorzeigen.' },
            ].map((item) => (
              <div key={item.titel} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.titel}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Erklärung:{' '}
            <a href="/pflegekraft-legal-beschaeftigen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft legal beschäftigen</a>
            {' · '}
            <a href="/pflegekraft-aus-polen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft aus Polen</a>
            {' · '}
            <a href="/pflegekraft-aus-bulgarien/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft aus Bulgarien</a>
          </p>

          <h2 id="qualifikation" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Qualifikation & Deutschkenntnisse
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Primundus prüft alle Betreuungskräfte nach denselben Standards — unabhängig vom Herkunftsland:
          </p>
          <div className="space-y-3 mb-10">
            {[
              { kriterium: 'Deutschkenntnisse', standard: 'Grundkommunikation auf Deutsch Pflicht. Viele rumänische Kräfte haben durch frühere Einsätze gute Deutschkenntnisse. Primundus prüft aktiv.' },
              { kriterium: 'Pflegeerfahrung', standard: 'Mindestens 1–2 Jahre häusliche 24h-Betreuung. Anzahl und Art früherer Einsätze werden geprüft.' },
              { kriterium: 'Spezialerfahrung', standard: 'Bei Demenz, Parkinson oder Schlaganfall wird auf entsprechende Vorerfahrung geachtet.' },
              { kriterium: 'Referenzen', standard: 'Kontakt zu früheren Familien auf Anfrage möglich.' },
            ].map((item) => (
              <div key={item.kriterium} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.kriterium}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.standard}</p>
              </div>
            ))}
          </div>

          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kosten & Kassenzuschüsse
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Kosten entsprechen dem allgemeinen Primundus-Preisrahmen — das Herkunftsland hat keinen Einfluss auf den Preis.
          </p>
          <div className="space-y-3 mb-10">
            {[
              ['Kosten Primundus', '2.200–3.500 €/Monat', 'Je nach Pflegebedarf'],
              ['Pflegegeld PG 3', '– 599 €/Monat', 'Kassenzuschuss'],
              ['Entlastungsbetrag', '– 131 €/Monat', 'Kassenzuschuss'],
              ['Eigenanteil ca. PG 3', 'ca. 1.700–2.500 €/Monat', 'Nach Zuschüssen'],
            ].map(([pos, wert, hinweis]) => (
              <div key={pos} className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-[#E5E3DF]">
                <span className="text-[14px] text-[#2E2E2E]">{pos}</span>
                <span className="text-[14px] font-bold text-[#1C1C1C]">{wert}</span>
                <span className="text-[12px] text-[#8B8B8B] hidden md:block">{hinweis}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Kosten:{' '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was kostet 24h-Pflege?</a>
            {' · '}
            <a href="/eigenanteil-24h-pflege-senken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Eigenanteil senken</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Ist eine Pflegekraft aus Rumänien legal?', a: 'Ja — wenn sie im Entsendemodell über eine seriöse Agentur vermittelt wird. A1-Bescheinigung aus Rumänien belegt den legalen EU-Entsendestatus. Vollständig rechtssicher.' },
              { q: 'Was kostet eine Pflegekraft aus Rumänien?', a: 'Identisch zum allgemeinen Primundus-Preisrahmen: 2.200–3.500 €/Monat. Das Herkunftsland hat keinen Einfluss auf den Preis.' },
              { q: 'Wie unterscheiden sich polnische und rumänische Pflegekräfte?', a: 'Rechtlich und preislich identisch — beide EU-Länder, beide im Entsendemodell. Qualitätsstandards sind bei Primundus gleich. Manchmal passt die Persönlichkeit einer rumänischen Kraft besser.' },
              { q: 'Wie finde ich eine passende Betreuungskraft aus Rumänien?', a: 'Primundus wählt aus dem gesamten EU-Pool die passende Kraft aus — auf Wunsch aus Rumänien. Anfrage genügt: 089 200 000 830 oder info@primundus.de.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{item.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-[#2E2E2E] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
