import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'uebersicht', title: 'Alle Stellschrauben' },
  { id: 'pflegegrad', title: '1. Pflegegrad korrekt beantragen' },
  { id: 'kassenzuschuesse', title: '2. Kassenzuschüsse voll nutzen' },
  { id: 'steuer', title: '3. Steuerlich absetzen' },
  { id: 'foerderungen', title: '4. Wohnraumanpassung & Hilfsmittel' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Eigenanteil 24h-Pflege senken — alle Möglichkeiten 2026 | Primundus',
  description: 'Eigenanteil der 24h-Pflege senken: Pflegegrad erhöhen, Entlastungsbudget nutzen, Steuerabzug, Hilfsmittel. Mit allen Maßnahmen auf unter 1.500 €/Monat.',
  alternates: { canonical: 'https://primundus.de/eigenanteil-24h-pflege-senken/' },
  openGraph: {
    title: 'Eigenanteil 24h-Pflege senken | Primundus',
    description: 'Alle Möglichkeiten um den Eigenanteil der 24h-Pflege 2026 zu senken.',
    url: 'https://primundus.de/eigenanteil-24h-pflege-senken/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eigenanteil 24h-Pflege senken — alle Möglichkeiten 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/eigenanteil-24h-pflege-senken/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Eigenanteil senken', item: 'https://primundus.de/eigenanteil-24h-pflege-senken/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kann ich den Eigenanteil der 24h-Pflege senken?', acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Stellschrauben: 1. Pflegegrad korrekt beantragen — jede Stufe bedeutet hunderte Euro mehr. 2. Entlastungsbudget (3.539 €/Jahr) voll ausschöpfen. 3. Steuerlich absetzen (max. 4.000 €/Jahr). 4. Pflegehilfsmittel (42 €/Monat) beantragen. 5. Wohnraumanpassungsförderung nutzen.' } },
      { '@type': 'Question', name: 'Wie viel kann man beim Eigenanteil sparen?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 3 können durch Pflegegeld (599 €/Monat), Entlastungsbetrag (131 €/Monat), Entlastungsbudget (ca. 295 €/Monat anteilig) und Steuerabzug (ca. 333 €/Monat) zusammen über 1.350 € monatlich eingespart werden — aus Bruttokosten von 2.700 € werden ca. 1.350 € Eigenanteil.' } },
    ],
  },
]

export default function EigenanteilSenken() {
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
            <a href="/finanzierung/" className="hover:text-[#8B7355] transition-colors">Finanzierung</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Eigenanteil senken</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Eigenanteil der 24h-Pflege senken — alle Möglichkeiten 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            24h-Pflege kostet 2.200–3.500 Euro brutto — aber wer alle verfügbaren Leistungen kennt und kombiniert, kann den tatsächlichen Eigenanteil auf unter 1.500 Euro pro Monat senken. Viele Familien verschenken hunderte Euro monatlich weil sie nicht alle Möglichkeiten nutzen.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Potenzielle Ersparnis pro Monat (Pflegegrad 3)</p>
            <ul className="space-y-2.5">
              {[
                'Pflegegeld: – 599 €/Monat',
                'Entlastungsbetrag: – 131 €/Monat',
                'Entlastungsbudget (anteilig): – ca. 295 €/Monat',
                'Steuerabzug: – ca. 333 €/Monat (max. 4.000 €/Jahr)',
                'Pflegehilfsmittel: – 42 €/Monat',
                'Gesamt mögliche Einsparung: über 1.400 €/Monat',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="uebersicht" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Alle Stellschrauben im Überblick
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Maßnahme', 'Potenzielle Ersparnis', 'Aufwand'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegrad korrekt beantragen', 'bis 252 €/Monat mehr (PG 2→3)', 'Mittel'],
                    ['Pflegegeld nutzen', '347–990 €/Monat', 'Gering'],
                    ['Entlastungsbetrag einreichen', '131 €/Monat', 'Gering'],
                    ['Entlastungsbudget ausschöpfen', '3.539 €/Jahr = ca. 295 €/Monat', 'Mittel'],
                    ['Steuerlich absetzen', 'max. 4.000 €/Jahr = 333 €/Monat', 'Gering'],
                    ['Pflegehilfsmittel beantragen', '42 €/Monat', 'Sehr gering'],
                    ['Wohnraumanpassung fördern lassen', 'bis 4.180 € je Maßnahme', 'Mittel'],
                  ].map(([massnahme, ersparnis, aufwand], i) => (
                    <tr key={massnahme} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{massnahme}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{ersparnis}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{aufwand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            1. Pflegegrad korrekt beantragen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Die größte Einzelmaßnahme: Jede Pflegegrad-Stufe bedeutet deutlich mehr Kassenzuschuss. Wer zu niedrig eingestuft ist, verschenkt monatlich hunderte Euro.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Stufe', 'Pflegegeld', 'Mehrwert pro Stufe'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 2', '347 €/Monat', '—'],
                    ['PG 3', '599 €/Monat', '+252 €/Monat'],
                    ['PG 4', '800 €/Monat', '+201 €/Monat'],
                    ['PG 5', '990 €/Monat', '+190 €/Monat'],
                  ].map(([grad, pg, mehr], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] text-[#8B7355] font-semibold border-b border-[#E5E3DF]">{mehr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Anleitung:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad beantragen</a>
            {' · '}
            <a href="/pflegegrad-erhoehen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad erhöhen</a>
          </p>

          <h2 id="kassenzuschuesse" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            2. Alle Kassenzuschüsse voll ausschöpfen
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Pflegegeld — monatlich', desc: '347–990 €/Monat je nach Pflegegrad. Wird automatisch ausgezahlt — aber nur wenn Beratungseinsätze wahrgenommen werden (PG 2–3: halbjährlich, PG 4–5: vierteljährlich).', link: '/pflegegeld/' },
              { title: 'Entlastungsbetrag — 131 €/Monat', desc: 'Wird nicht automatisch ausgezahlt — Rechnungen anerkannter Anbieter einreichen. Kann bis 30. Juni des Folgejahres angespart werden (max. 1.572 €).', link: '/entlastungsbetrag/' },
              { title: 'Entlastungsbudget — 3.539 €/Jahr', desc: 'Für Verhinderungs- und Kurzzeitpflege. Verfällt am 31. Dezember — rechtzeitig nutzen und einreichen. Vorpflegezeit entfällt seit Juli 2025.', link: '/verhinderungspflege/' },
              { title: 'Pflegehilfsmittel — 42 €/Monat', desc: 'Handschuhe, Desinfektionsmittel, Bettschutzeinlagen. Bei der Pflegekasse beantragen — werden direkt nach Hause geliefert. Kaum jemand nutzt das.', link: null },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">{item.desc}</p>
                {item.link && (
                  <a href={item.link} className="text-[13px] text-[#8B7355] underline hover:text-[#7D6E5D]">→ Mehr Details</a>
                )}
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse in einer Übersicht:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — alle Kassenzuschüsse 2026</a>
          </p>

          <h2 id="steuer" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            3. Steuerlich absetzen — bis 4.000 € pro Jahr
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            20 % der Pflegekosten können als haushaltsnahe Dienstleistungen von der Steuerschuld abgezogen werden — direkt, nicht nur vom zu versteuernden Einkommen. Maximum: 4.000 € Steuerersparnis pro Jahr.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei Primundus-Kosten von 2.700 €/Monat (32.400 €/Jahr) sind das 4.000 € Maximalersparnis — entspricht ca. 333 €/Monat. Voraussetzung: Zahlung per Überweisung, Rechnung aufbewahren, Anlage V der Steuererklärung.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Ausführlich erklärt:{' '}
            <a href="/pflege-steuerlich-absetzen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflege steuerlich absetzen 2026</a>
          </p>

          <h2 id="foerderungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            4. Wohnraumanpassung & Hilfsmittel fördern lassen
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Wohnraumanpassung — bis 4.180 € je Maßnahme', desc: 'Treppenlift, Badumbau, Türverbreiterung, Rampen — die Pflegekasse übernimmt bis zu 4.180 € je wohnumfeldverbessernder Maßnahme. Bei mehreren Pflegebedürftigen im Haushalt kumulierbar.' },
              { title: 'KfW-Förderung Barrierefrei', desc: 'Zusätzlich zur Kassenleistung gibt es KfW-Förderdarlehen und -Zuschüsse für barrierefreien Umbau. KfW Programm 455-B: bis zu 4.000 € Zuschuss pro Wohneinheit.' },
              { title: 'Hilfsmittel auf Kassenrezept', desc: 'Rollstuhl, Pflegebett, Toilettenstuhl, Duschhocker — können auf Rezept vom Hausarzt von der Krankenkasse bezahlt werden. Eigenanteil oft nur 10 € pro Hilfsmittel.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie kann ich den Eigenanteil der 24h-Pflege senken?', a: 'Die 5 wichtigsten Hebel: Pflegegrad korrekt beantragen, alle Kassenzuschüsse ausschöpfen (Pflegegeld, Entlastungsbetrag, Entlastungsbudget), steuerlich absetzen (max. 4.000 €/Jahr), Pflegehilfsmittel (42 €/Monat) beantragen, Wohnraumanpassung fördern lassen.' },
              { q: 'Wie viel kann man beim Eigenanteil sparen?', a: 'Bei PG 3 und optimaler Kombination: Pflegegeld (599 €) + Entlastungsbetrag (131 €) + Entlastungsbudget (ca. 295 €/Monat) + Steuerabzug (ca. 333 €) = über 1.350 €/Monat Einsparung gegenüber den Bruttokosten.' },
              { q: 'Muss man den Entlastungsbetrag extra beantragen?', a: 'Der Anspruch entsteht automatisch mit dem Pflegegrad — aber er wird nicht automatisch ausgezahlt. Rechnungen anerkannter Anbieter einreichen und bis zu 131 €/Monat erstatten lassen. Kann bis 30. Juni des Folgejahres angespart werden.' },
              { q: 'Wann lohnt sich ein Antrag auf Höherstufung?', a: 'Wenn sich der Pflegebedarf verschlechtert hat. Bei Höherstufung von PG 2 auf PG 3 steigt das Pflegegeld um 252 €/Monat. Keine Sperrfrist — jederzeit beantragbar.' },
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
