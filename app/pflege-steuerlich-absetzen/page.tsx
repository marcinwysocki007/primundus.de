import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'grundlagen', title: 'Was absetzbar ist' },
  { id: 'haushaltsnahe', title: 'Haushaltsnahe Dienstleistungen' },
  { id: 'außergewöhnlich', title: 'Außergewöhnliche Belastungen' },
  { id: 'berechnung', title: 'Rechenbeispiel 2026' },
  { id: 'so-gehts', title: 'So wird es eingetragen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege steuerlich absetzen 2026 — was geht & wie viel? | Primundus',
  description: 'Pflege steuerlich absetzen 2026: 20 % der Kosten als haushaltsnahe Dienstleistung, max. 4.000 € Ersparnis/Jahr. Außergewöhnliche Belastungen zusätzlich möglich.',
  alternates: { canonical: 'https://primundus.de/pflege-steuerlich-absetzen/' },
  openGraph: {
    title: 'Pflege steuerlich absetzen 2026 | Primundus',
    description: '20 % der Pflegekosten absetzbar — max. 4.000 € Steuerersparnis/Jahr. Wie es geht und was zusätzlich möglich ist.',
    url: 'https://primundus.de/pflege-steuerlich-absetzen/',
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
    headline: 'Pflege steuerlich absetzen 2026 — was geht und wie viel?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflege-steuerlich-absetzen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Pflege steuerlich absetzen', item: 'https://primundus.de/pflege-steuerlich-absetzen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie viel Pflege kann man von der Steuer absetzen?', acceptedAnswer: { '@type': 'Answer', text: '20 % der Aufwendungen für haushaltsnahe Pflegedienstleistungen können direkt von der Steuerschuld abgezogen werden — maximal 4.000 Euro Steuerersparnis pro Jahr. Das Maximum wird bei Pflegekosten von 20.000 €/Jahr erreicht.' } },
      { '@type': 'Question', name: 'Kann man 24h-Pflege von der Steuer absetzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — 24h-Pflegekosten bei einer Agentur wie Primundus sind als haushaltsnahe Dienstleistungen absetzbar. 20 % der jährlichen Kosten, maximal 4.000 € Steuerersparnis. Die Kosten werden in der Anlage V der Steuererklärung eingetragen.' } },
      { '@type': 'Question', name: 'Können Angehörige die Pflegekosten absetzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn Angehörige die Pflegekosten für eine pflegebedürftige Person tragen und diese nicht selbst die finanzielle Belastung übernehmen kann, können die Kosten als außergewöhnliche Belastungen geltend gemacht werden — allerdings nur über die zumutbare Belastung hinaus.' } },
    ],
  },
]

export default function PflegeSteuerlichAbsetzen() {
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
            <span className="text-[#1C1C1C]">Pflege steuerlich absetzen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflege steuerlich absetzen 2026 — was geht & wie viel?
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegekosten sind steuerlich absetzbar — und das lohnt sich erheblich. Wer 24h-Pflege nutzt, kann 20 % der jährlichen Kosten direkt von der Steuerschuld abziehen — maximal 4.000 Euro pro Jahr. Bei typischen Primundus-Kosten von 2.700 €/Monat sind das die volle Maximalersparnis von 4.000 Euro jährlich.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Haushaltsnahe Dienstleistungen: 20 % der Kosten, max. 4.000 € Steuerersparnis/Jahr',
                'Wird direkt von der Steuerschuld abgezogen — kein Abzug vom Einkommen',
                'Maximum bei Pflegekosten von 20.000 €/Jahr erreicht',
                'Zusätzlich: Außergewöhnliche Belastungen für nicht erstattete Pflegekosten möglich',
                'Voraussetzung: Überweisung (kein Barzahlung) + Rechnung aufbewahren',
                'Eintrag: Anlage V der Einkommensteuererklärung',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="grundlagen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was steuerlich absetzbar ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Es gibt zwei verschiedene Wege Pflegekosten steuerlich geltend zu machen — sie können in bestimmten Fällen auch kombiniert werden.
          </p>
          <div className="space-y-3 mb-10">
            {[
              {
                title: '§ 35a EStG — Haushaltsnahe Dienstleistungen (empfohlen)',
                desc: '20 % der Aufwendungen für Pflege- und Betreuungsleistungen im Haushalt direkt von der Steuerschuld abziehen. Maximum: 4.000 €/Jahr Steuerersparnis (bei 20.000 €/Jahr Kosten). Gilt für alle Pflegebedürftigen und deren Angehörige die im gleichen Haushalt leben.',
                highlight: true,
              },
              {
                title: '§ 33 EStG — Außergewöhnliche Belastungen',
                desc: 'Nicht erstattete Pflegekosten die über eine zumutbare Eigenbelastung hinausgehen. Die Schwelle hängt vom Einkommen, Familienstand und Kinderzahl ab. Sinnvoll wenn die Kosten sehr hoch sind und § 35a bereits ausgeschöpft ist.',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 2 */}
          <h2 id="haushaltsnahe" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Haushaltsnahe Dienstleistungen — der wichtigste Weg
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            § 35a EStG ist der Steuerklassiker für Pflegekosten. Er lohnt sich in den meisten Fällen mehr als außergewöhnliche Belastungen — weil der Abzug direkt von der Steuerschuld erfolgt, nicht nur vom zu versteuernden Einkommen.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Was unter § 35a fällt — haushaltsnahe Pflegeleistungen</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['24h-Betreuungskraft (Agentur)', '✓ Absetzbar', 'Anteil der Betreuungskosten der im Haushalt anfällt'],
                    ['Ambulanter Pflegedienst', '✓ Absetzbar', 'Lohnkosten des Dienstes im Haushalt'],
                    ['Haushaltshilfe / Putzdienst', '✓ Absetzbar', 'Bis zu 4.000 € eigenes Budget nach § 35a'],
                    ['Heimunterbringung (Pflegeheim)', '✓ Teilweise', 'Nur der auf haushaltsnahe Leistungen entfallende Anteil'],
                    ['Medikamente', '✗ Nicht absetzbar', 'Unter § 35a nicht anrechenbar'],
                    ['Hilfsmittel (Rollstuhl, Pflegebett)', '✗ Nicht absetzbar', 'Ggf. als außergewöhnliche Belastung'],
                  ].map(([leistung, status, hinweis], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{leistung}</td>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${status.startsWith('✓') ? 'text-[#3D7A5C]' : 'text-[#8B8B8B]'}`}>{status}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            <strong>Voraussetzungen für § 35a:</strong> Die Zahlung muss per Überweisung erfolgen (keine Barzahlung), und eine Rechnung muss vorliegen. Belege 10 Jahre aufbewahren.
          </p>

          {/* SECTION 3 */}
          <h2 id="außergewöhnlich" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Außergewöhnliche Belastungen — zusätzlich möglich
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Wenn die Pflegekosten die zumutbare Eigenbelastung übersteigen, können sie zusätzlich als außergewöhnliche Belastungen nach § 33 EStG geltend gemacht werden. Die zumutbare Eigenbelastung liegt je nach Einkommen zwischen 1 % und 7 % des Gesamtbetrags der Einkünfte.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Sinnvoll bei: sehr hohen nicht erstatteten Pflegekosten, Pflegehilfsmitteln, Heimunterbringungskosten die nicht unter § 35a fallen. Pflege-Pauschbetrag: 1.800 € (PG 4–5 oder Merkzeichen "H"), 600 € (PG 2–3) — ohne Einzelnachweise für Angehörige.
          </p>

          {/* SECTION 4 */}
          <h2 id="berechnung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Rechenbeispiel 2026 — wie viel spart man?
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Steuerersparnis bei 24h-Pflege — Primundus 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Betreuungskosten/Monat', '2.700 €', 'Primundus Richtwert PG 3'],
                    ['Jahreskosten', '32.400 €', '12 × 2.700 €'],
                    ['Absetzbar (20 %)', '6.480 €', '20 % von 32.400 €'],
                    ['Gesetzliches Maximum', '4.000 €', '§ 35a EStG Obergrenze'],
                    ['Tatsächliche Steuerersparnis', '4.000 €/Jahr', 'Maximum ausgeschöpft'],
                    ['Monatliche Ersparnis', '≈ 333 €/Monat', '4.000 € / 12 Monate'],
                  ].map(([pos, wert, hinweis], i) => (
                    <tr key={pos} className={i === 4 ? 'bg-[#E8F5EE]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{pos}</td>
                      <td className={`px-5 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 4 || i === 5 ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>{wert}</td>
                      <td className="px-5 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 5 */}
          <h2 id="so-gehts" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            So wird es in der Steuererklärung eingetragen
          </h2>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Belege sammeln', desc: 'Alle Rechnungen von Primundus/dem Pflegedienst plus Überweisungsbelege des Jahres. Keine Barzahlungen — nur Überweisungen sind absetzbar.' },
              { n: '2', title: 'Anlage V ausfüllen', desc: 'In der Einkommensteuererklärung: Anlage V "Haushaltsnahe Aufwendungen". Dort die Gesamtsumme der Pflegekosten eintragen — das Finanzamt berechnet automatisch 20 %, max. 4.000 €.' },
              { n: '3', title: 'Belege aufbewahren', desc: 'Rechnungen und Überweisungsbelege 10 Jahre aufbewahren — das Finanzamt kann sie anfordern. Digitale Kopien ausreichend.' },
              { n: '4', title: 'Steuerberater hinzuziehen', desc: 'Bei hohen Pflegekosten und möglicher Kombination mit außergewöhnlichen Belastungen lohnt sich ein Steuerberater — um das Maximum herauszuholen.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Finanzierungsmöglichkeiten:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — alle Zuschüsse 2026</a>
            {' · '}
            <a href="/eigenanteil-24h-pflege-senken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Eigenanteil senken — alle Möglichkeiten</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zum Steuerabzug
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie viel Pflege kann man von der Steuer absetzen?', a: '20 % der Aufwendungen für haushaltsnahe Pflegeleistungen (§ 35a EStG), maximal 4.000 Euro Steuerersparnis pro Jahr. Der Abzug erfolgt direkt von der Steuerschuld — das ist besonders wertvoll.' },
              { q: 'Kann man 24h-Pflege von der Steuer absetzen?', a: 'Ja — 24h-Pflegekosten bei Primundus sind als haushaltsnahe Dienstleistungen absetzbar. 20 % der Jahreskosten, max. 4.000 € Steuerersparnis. Eintrag in Anlage V der Steuererklärung.' },
              { q: 'Müssen Pflegekosten per Überweisung bezahlt werden?', a: 'Ja — Barzahlungen sind nicht absetzbar. Nur Überweisungen, Lastschriften oder Kartenzahlungen gelten. Überweisungsbelege und Rechnungen aufbewahren.' },
              { q: 'Können Angehörige Pflegekosten absetzen?', a: 'Wenn Angehörige die Pflegekosten für eine pflegebedürftige Person tragen und diese nicht selbst tragen kann, können die Kosten als außergewöhnliche Belastungen geltend gemacht werden — über die zumutbare Eigenbelastung hinaus.' },
              { q: 'Was ist der Pflege-Pauschbetrag?', a: '1.800 €/Jahr (PG 4–5 oder Merkzeichen "H") bzw. 600 €/Jahr (PG 2–3) für pflegende Angehörige — ohne Einzelnachweise. Wird in der Steuererklärung des pflegenden Angehörigen eingetragen.' },
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
