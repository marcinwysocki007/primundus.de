import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist die Kombinationsleistung?' },
  { id: 'berechnung', title: 'Berechnung & Rechenbeispiel' },
  { id: 'wann-sinnvoll', title: 'Wann ist Kombination sinnvoll?' },
  { id: 'beantragen', title: 'Wie man sie beantragt' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kombinationsleistung Pflege — Pflegegeld + Sachleistung kombinieren | Primundus',
  description: 'Kombinationsleistung Pflege: Pflegesachleistungen und Pflegegeld gleichzeitig nutzen. Berechnung,',
  alternates: { canonical: 'https://primundus.de/kombinationsleistung-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Kombinationsleistung Pflege | Primundus',
    description: 'Pflegegeld und Sachleistungen kombinieren — wie es geht und was dabei rauskommt.',
    url: 'https://primundus.de/kombinationsleistung-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kombinationsleistung Pflege — Pflegegeld und Sachleistungen kombinieren',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/kombinationsleistung-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Kombinationsleistung', item: 'https://primundus.de/kombinationsleistung-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist die Kombinationsleistung in der Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Die Kombinationsleistung (§38 SGB XI) erlaubt es, Pflegesachleistungen und Pflegegeld gleichzeitig zu beziehen. Wenn nur ein Teil der Sachleistungen durch einen ambulanten Pflegedienst genutzt wird, erhält man für den ungenutzten Anteil anteiliges Pflegegeld.' } },
      { '@type': 'Question', name: 'Wie berechnet sich die Kombinationsleistung?', acceptedAnswer: { '@type': 'Answer', text: 'Wenn 50 % der Sachleistungen durch einen Pflegedienst genutzt werden, erhält man 50 % des Pflegegeldes. Beispiel PG 3: 50 % Sachleistungen genutzt (748,50 €) → 50 % Pflegegeld = 299,50 €. Gesamtentlastung: 1.048 €/Monat.' } },
    ],
  },
]

export default function Kombinationsleistung() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/finanzierung" className="hover:text-pm-taupe transition-colors">Finanzierung</a>
            <span>›</span>
            <span className="text-pm-ink">Kombinationsleistung</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Kombinationsleistung Pflege — Pflegegeld & Sachleistungen kombinieren
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Wer nicht alle Sachleistungen durch einen ambulanten Pflegedienst nutzt, bekommt anteiliges Pflegegeld für den Rest — das ist die Kombinationsleistung nach § 38 SGB XI. Damit lassen sich ambulanter Pflegedienst und private Betreuung durch Angehörige oder eine 24h-Kraft optimal kombinieren.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Die Grundformel</p>
            <div className="bg-pm-paper rounded-xl p-4 text-center mb-3">
              <p className="text-[16px] font-bold text-pm-ink">Nicht genutzte Sachleistungen × Pflegegeld = Anteiliges Pflegegeld</p>
            </div>
            <p className="text-[14px] text-pm-body">
              Wenn 60 % der Sachleistungen durch den Pflegedienst genutzt werden → verbleiben 40 % ungenutzt → 40 % des Pflegegeldes werden ausgezahlt.
            </p>
          </div>

          <h2 id="was-ist" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was ist die Kombinationsleistung?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Normalerweise schließen sich Pflegegeld und Pflegesachleistungen gegenseitig aus: Entweder man wählt Pflegegeld (für private Pflege durch Angehörige) oder Sachleistungen (für ambulante Pflegedienste). Die Kombinationsleistung erlaubt beides — anteilig.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-10">
            Voraussetzung: Der ambulante Pflegedienst rechnet direkt mit der Pflegekasse ab und gibt an welcher Anteil der Sachleistungen genutzt wurde. Den Rest bekommt die pflegebedürftige Person als Pflegegeld.
          </p>

          <h2 id="berechnung" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Berechnung & Rechenbeispiele
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                beispiel: 'Rechenbeispiel 1 — Pflegegrad 3, 50 % Sachleistungen',
                rows: [
                  ['Sachleistungen PG 3', '1.497 €/Monat'],
                  ['Genutzter Anteil (50 %)', '748,50 €'],
                  ['Ungenutzter Anteil', '50 %'],
                  ['Pflegegeld PG 3 (voll)', '599 €/Monat'],
                  ['Anteiliges Pflegegeld (50 %)', '299,50 €'],
                  ['Gesamtentlastung', '748,50 € + 299,50 € = 1.048 €/Monat'],
                ],
              },
              {
                beispiel: 'Rechenbeispiel 2 — Pflegegrad 4, 30 % Sachleistungen',
                rows: [
                  ['Sachleistungen PG 4', '1.859 €/Monat'],
                  ['Genutzter Anteil (30 %)', '557,70 €'],
                  ['Ungenutzter Anteil', '70 %'],
                  ['Pflegegeld PG 4 (voll)', '800 €/Monat'],
                  ['Anteiliges Pflegegeld (70 %)', '560 €'],
                  ['Gesamtentlastung', '557,70 € + 560 € = 1.117,70 €/Monat'],
                ],
              },
            ].map((item) => (
              <div key={item.beispiel} className="bg-white rounded-2xl border border-pm-line overflow-hidden shadow-sm">
                <div className="px-5 py-3 bg-pm-paper border-b border-pm-line">
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">{item.beispiel}</p>
                </div>
                <div className="p-5 space-y-2">
                  {item.rows.map(([label, wert], i) => (
                    <div key={label} className={`flex justify-between items-center py-1 ${i === item.rows.length - 1 ? 'font-bold border-t border-pm-line mt-2 pt-3 text-pm-green' : ''}`}>
                      <span className="text-[14px] text-pm-body">{label}</span>
                      <span className={`text-[14px] ${i === item.rows.length - 1 ? 'text-pm-green font-bold' : 'text-pm-ink'}`}>{wert}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 id="wann-sinnvoll" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann ist die Kombinationsleistung besonders sinnvoll?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { situation: 'Ambulanter Pflegedienst + Angehörigenpflege', desc: 'Pflegedienst übernimmt z.B. Medikamentengabe und Grundpflege morgens — Angehörige pflegen den Rest. Die Sachleistungen für den Dienst + anteiliges Pflegegeld für die Angehörigen optimiert die Gesamtentlastung.' },
              { situation: 'Ambulanter Pflegedienst + 24h-Betreuungskraft', desc: 'Spezialisierter Pflegedienst für Behandlungspflege (Verbände, Injektionen) — 24h-Kraft für Grundpflege und Betreuung. Sachleistungen für den Dienst + Pflegegeld für die 24h-Kraft.' },
              { situation: 'Sachleistungsrahmen wird nicht voll ausgeschöpft', desc: 'Wenn der Pflegedienst günstiger als der Sachleistungsrahmen ist — Kombination holt das Maximum an Kassenzuschüssen heraus.' },
            ].map((item) => (
              <div key={item.situation} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.situation}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="beantragen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wie man die Kombinationsleistung beantragt
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die Kombinationsleistung wird nicht separat beantragt — sie ergibt sich automatisch wenn ein ambulanter Pflegedienst die Sachleistungen nur teilweise ausschöpft.
          </p>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Pflegekasse über Modell informieren', desc: 'Mitteilen dass Sachleistungen und Pflegegeld kombiniert werden sollen. Pflegekasse nimmt das zur Kenntnis.' },
              { n: '2', title: 'Pflegedienst rechnet mit Pflegekasse ab', desc: 'Der ambulante Pflegedienst reicht Rechnungen direkt bei der Pflegekasse ein und gibt den genutzten Sachleistungsanteil an.' },
              { n: '3', title: 'Anteiliges Pflegegeld wird automatisch ausgezahlt', desc: 'Die Pflegekasse berechnet den verbleibenden Anteil und zahlt das anteilige Pflegegeld aus.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-pm-line list-none">
                <span className="w-8 h-8 rounded-full bg-pm-taupe text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-pm-ink mb-1">{step.title}</p>
                  <p className="text-[14px] text-pm-body leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-pm-body mb-10">
            → Alle Kassenzuschüsse:{' '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Finanzierung der 24h-Pflege</a>
            {' · '}
            <a href="/pflegesachleistungen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegesachleistungen erklärt</a>
            {' · '}
            <a href="/pflegegeld" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegeld 2026</a>
          </p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist die Kombinationsleistung in der Pflege?', a: '§38 SGB XI: Wenn nicht alle Sachleistungen durch einen Pflegedienst genutzt werden, bekommt man für den ungenutzten Anteil anteiliges Pflegegeld. Pflegedienst + private Pflege lassen sich so kombinieren.' },
              { q: 'Wie berechnet sich die Kombinationsleistung?', a: 'Genutzter Sachleistungsanteil (%) → verbleibender Anteil in % × Pflegegeld = anteiliges Pflegegeld. Beispiel: 50 % Sachleistungen genutzt → 50 % Pflegegeld. Bei PG 3: 299,50 €/Monat.' },
              { q: 'Muss man die Kombinationsleistung separat beantragen?', a: 'Nein — sie ergibt sich automatisch wenn ein Pflegedienst nur Teile der Sachleistungen nutzt und der Pflegekasse den Anteil mitteilt.' },
              { q: 'Kann man Kombinationsleistung mit Entlastungsbetrag kombinieren?', a: 'Ja — Entlastungsbetrag (131 €/Monat) läuft immer zusätzlich, unabhängig von Pflegegeld und Sachleistungen.' },
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
