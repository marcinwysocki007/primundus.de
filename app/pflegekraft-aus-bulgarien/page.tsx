import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'warum', title: 'Warum Pflegekraft aus Bulgarien?' },
  { id: 'entsendemodell', title: 'Das Entsendemodell — legal & sicher' },
  { id: 'qualifikation', title: 'Qualifikation & Deutschkenntnisse' },
  { id: 'kosten', title: 'Kosten & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Bulgarien — legal, Kosten & Entsendemodell',
  description: 'Pflegekraft aus Bulgarien: Wie das Entsendemodell funktioniert, was eine bulgarische Betreuungskraft kostet und worauf bei der Auswahl zu achten ist.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-bulgarien' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft aus Bulgarien | Primundus',
    description: 'Pflegekraft aus Bulgarien im Entsendemodell: legal, sicher und oft eine gute Wahl.',
    url: 'https://primundus.de/pflegekraft-aus-bulgarien',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft aus Bulgarien — legal, Kosten und Entsendemodell',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-bulgarien',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Bulgarien', item: 'https://primundus.de/pflegekraft-aus-bulgarien' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Ist eine Pflegekraft aus Bulgarien legal?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn sie im Entsendemodell über eine seriöse Agentur vermittelt wird. Die bulgarische Betreuungskraft ist bei einem Unternehmen in Bulgarien angestellt und wird mit A1-Bescheinigung legal nach Deutschland entsandt. Primundus arbeitet ausschließlich im rechtssicheren Entsendemodell.' } },
      { '@type': 'Question', name: 'Was kostet eine Pflegekraft aus Bulgarien?', acceptedAnswer: { '@type': 'Answer', text: 'Die Kosten entsprechen dem allgemeinen Primundus-Preisrahmen: 2.200–3.500 €/Monat je nach Pflegebedarf — unabhängig ob die Kraft aus Polen, Bulgarien oder einem anderen EU-Land kommt.' } },
    ],
  },
]

export default function PflegekraftAusBulgarien() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/organisation" className="hover:text-pm-taupe transition-colors">Organisation</a>
            <span>›</span>
            <span className="text-pm-ink">Pflegekraft aus Bulgarien</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Pflegekraft aus Bulgarien — legal, Kosten & Entsendemodell
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-8 font-medium">
            Bulgarien ist EU-Mitglied — das bedeutet: Betreuungskräfte aus Bulgarien können im selben rechtlich abgesicherten Entsendemodell nach Deutschland kommen wie Kräfte aus Polen oder Rumänien. Primundus arbeitet auf Wunsch auch bulgarische Betreuungskräfte — im selben Preisrahmen, derselben Rechtssicherheit, denselben Qualitätsstandards.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Bulgarien ist EU-Mitglied — Entsendemodell funktioniert identisch wie bei Polen',
                'Rechtssicher mit A1-Bescheinigung — vollständiger Schutz für die Familie',
                'Kosten: 2.200–3.500 €/Monat — identisch zu anderen EU-Kräften',
                'Qualifikationsstandards: Primundus prüft Erfahrung, Deutschkenntnisse, Referenzen',
                'Kraftwechsel alle 6–8 Wochen — nahtloser Übergang organisiert durch Primundus',
                'Täglich kündbar — volle Flexibilität',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-pm-body">
                  <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="warum" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Warum Pflegekraft aus Bulgarien?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Bulgarien hat eine lange Tradition in der Pflege und Betreuung älterer Menschen. Viele bulgarische Betreuungskräfte haben langjährige Erfahrung in der häuslichen 24h-Pflege — in Deutschland, Österreich und anderen EU-Ländern. Manchmal passt schlicht die Persönlichkeit einer bulgarischen Kraft besonders gut zu einer bestimmten Pflegesituation.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-10">
            Entscheidend ist letztlich nicht das Herkunftsland — sondern die Qualifikation, Erfahrung, Deutschkenntnisse und Persönlichkeit der einzelnen Person. Primundus wählt die passende Kraft aus dem gesamten EU-Pool aus.
          </p>

          <h2 id="entsendemodell" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Das Entsendemodell — legal & sicher
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Das Entsendemodell funktioniert bei Bulgarien identisch wie bei Polen oder Rumänien. Die Betreuungskraft ist bei einem bulgarischen Unternehmen angestellt, dort sozialversichert und wird mit A1-Bescheinigung für typischerweise 6–8 Wochen nach Deutschland entsandt.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Für die Familie', desc: 'Kein eigenes Arbeitsverhältnis mit der Kraft. Vertrag mit Primundus als Agentur. Keine deutschen Sozialabgaben. Bei Kontrolle: A1-Bescheinigung vorzeigen — fertig.' },
              { title: 'Für die Betreuungskraft', desc: 'Angestellt in Bulgarien mit bulgarischer Sozialversicherung. A1-Bescheinigung sichert legalen Status in Deutschland. Regelmäßiger Wechsel ermöglicht Rückkehr zur Familie in Bulgarien.' },
              { title: 'Qualitätskontrolle durch Primundus', desc: 'Alle Kräfte — unabhängig vom Herkunftsland — werden von Primundus auf Erfahrung, Deutschkenntnisse und Referenzen geprüft.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Entsendemodell erklärt:{' '}
            <a href="/pflegekraft-legal-beschaeftigen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegekraft legal beschäftigen — die 3 Wege</a>
            {' · '}
            <a href="/pflegekraft-aus-polen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegekraft aus Polen</a>
          </p>

          <h2 id="qualifikation" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Qualifikation & Deutschkenntnisse
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Primundus prüft alle Betreuungskräfte — unabhängig vom Herkunftsland — nach denselben Standards.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { kriterium: 'Pflegeerfahrung', standard: 'Mindestens 1–2 Jahre Erfahrung in der häuslichen 24h-Betreuung. Anzahl und Art früherer Einsätze.' },
              { kriterium: 'Deutschkenntnisse', standard: 'Grundkommunikation auf Deutsch Pflicht. Primundus prüft aktiv — kein Verlass auf Eigenangaben.' },
              { kriterium: 'Referenzen', standard: 'Kontakt zu früheren Familien möglich. Primundus stellt auf Anfrage Referenzen bereit.' },
              { kriterium: 'Spezialerfahrung', standard: 'Bei spezifischen Erkrankungen (Demenz, Parkinson, Schlaganfall) auf entsprechende Erfahrung achten — wird bei der Auswahl berücksichtigt.' },
            ].map((item) => (
              <div key={item.kriterium} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.kriterium}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.standard}</p>
              </div>
            ))}
          </div>

          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Kosten & Kassenzuschüsse
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die Kosten für eine bulgarische Betreuungskraft über Primundus entsprechen dem allgemeinen Preisrahmen — das Herkunftsland hat keinen Einfluss auf den Preis.
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Kosten Primundus', '2.200–3.500 €/Monat', 'Je nach Pflegebedarf'],
                    ['Pflegegeld PG 3', '– 599 €/Monat', 'Kassenzuschuss'],
                    ['Entlastungsbetrag', '– 131 €/Monat', 'Kassenzuschuss'],
                    ['Entlastungsbudget (anteilig)', '– ca. 295 €/Monat', 'Kassenzuschuss'],
                    ['Eigenanteil (ca.)', 'ca. 1.700–2.500 €/Monat', 'Je nach PG und Kosten'],
                  ].map(([pos, wert, hinweis], i) => (
                    <tr key={pos} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-5 py-3 text-[14px] text-pm-body border-b border-pm-line">{pos}</td>
                      <td className="px-5 py-3 text-[14px] font-bold text-pm-ink border-b border-pm-line">{wert}</td>
                      <td className="px-5 py-3 text-[13px] text-pm-mute border-b border-pm-line">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Alle Kosten & Zuschüsse:{' '}
            <a href="/kosten" className="text-pm-taupe underline hover:text-pm-taupe-deep">Was kostet 24h-Pflege?</a>
            {' · '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Alle Kassenzuschüsse 2026</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Ist eine Pflegekraft aus Bulgarien legal?', a: 'Ja — wenn sie im Entsendemodell über eine seriöse Agentur vermittelt wird. A1-Bescheinigung aus Bulgarien belegt den legalen EU-Entsendestatus. Primundus arbeitet ausschließlich im rechtssicheren Entsendemodell.' },
              { q: 'Was kostet eine Pflegekraft aus Bulgarien?', a: 'Identisch zum allgemeinen Primundus-Preisrahmen: 2.200–3.500 €/Monat — das Herkunftsland hat keinen Einfluss auf den Preis.' },
              { q: 'Wie unterscheiden sich polnische und bulgarische Betreuungskräfte?', a: 'Rechtlich und preislich identisch — beide EU-Länder, beide im Entsendemodell. Qualitätsstandards sind bei Primundus für alle Kräfte gleich. Manchmal passt die Persönlichkeit einer bulgarischen Kraft besser — das wird individuell berücksichtigt.' },
              { q: 'Wie finde ich eine passende Betreuungskraft aus Bulgarien?', a: 'Primundus wählt aus dem gesamten EU-Pool die passende Kraft aus — auf Wunsch aus Bulgarien. Anfrage genügt: 089 200 000 830 oder info@primundus.de.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-pm-line group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-pm-ink pr-4">{item.q}</h3>
                  <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-pm-body leading-relaxed">{item.a}</p>
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
