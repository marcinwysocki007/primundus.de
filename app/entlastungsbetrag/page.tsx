import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist der Entlastungsbetrag?' },
  { id: 'wofuer', title: 'Wofür kann man ihn nutzen?' },
  { id: 'anspruch', title: 'Wer hat Anspruch?' },
  { id: 'beantragen', title: 'Beantragen & abrechnen' },
  { id: 'kombination', title: 'Mit anderen Leistungen kombinieren' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Entlastungsbetrag 2026 — 131 € pro Monat richtig nutzen | Primundus',
  description: 'Entlastungsbetrag 2026: 131 €/Monat für alle Pflegegrade 1–5. Wofür er nutzbar ist, wie man ihn beantragt und wie er mit Pflegegeld und 24h-Pflege kombiniert wird.',
  alternates: { canonical: 'https://primundus.de/entlastungsbetrag/' },
  openGraph: {
    title: 'Entlastungsbetrag 2026 — 131 €/Monat | Primundus',
    description: '131 €/Monat für alle Pflegegrade 1–5. Wofür nutzbar, wie beantragen, wie kombinieren.',
    url: 'https://primundus.de/entlastungsbetrag/',
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
    headline: 'Entlastungsbetrag 2026 — 131 Euro pro Monat richtig nutzen',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/entlastungsbetrag/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Entlastungsbetrag', item: 'https://primundus.de/entlastungsbetrag/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie hoch ist der Entlastungsbetrag 2026?', acceptedAnswer: { '@type': 'Answer', text: '131 Euro pro Monat — identisch zu 2025. Der Entlastungsbetrag gilt für alle Pflegegrade 1 bis 5 und ist zusätzlich zum Pflegegeld. Er ist zweckgebunden und kann nur für anerkannte Betreuungs- und Entlastungsangebote verwendet werden.' } },
      { '@type': 'Question', name: 'Wofür kann ich den Entlastungsbetrag nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Für anerkannte Betreuungs- und Entlastungsangebote: Tages-/Nachtpflege, ambulante Pflegedienste (bei PG 1 auch für körperbezogene Pflege), hauswirtschaftliche Versorgung durch anerkannte Anbieter, Betreuungsgruppen, Nachbarschaftshilfe. Nicht für private Pflegepersonen ohne Anerkennung.' } },
      { '@type': 'Question', name: 'Verfällt der Entlastungsbetrag am Jahresende?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht genutzter Entlastungsbetrag kann bis zum 30. Juni des Folgejahres angespart und genutzt werden (max. 1.572 €). Das ist anders als beim Entlastungsbudget (Verhinderungspflege/Kurzzeitpflege), das am 31. Dezember verfällt.' } },
    ],
  },
]

export default function Entlastungsbetrag() {
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
            <span className="text-[#1C1C1C]">Entlastungsbetrag</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Entlastungsbetrag 2026 — 131 € pro Monat richtig nutzen
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Der Entlastungsbetrag beträgt 131 Euro pro Monat — für alle Pflegegrade 1 bis 5, zusätzlich zum Pflegegeld. Er ist zweckgebunden, wird von vielen Familien nicht vollständig genutzt, und kann bis zu 1.572 Euro angespart werden. Wer die Regeln kennt, holt das Maximum heraus.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Betrag: 131 €/Monat — für alle Pflegegrade 1 bis 5',
                'Zusätzlich zum Pflegegeld — keine gegenseitige Anrechnung',
                'Zweckgebunden: nur für anerkannte Betreuungs- und Entlastungsangebote',
                'Ansparung möglich: bis zu 1.572 €, nutzbar bis 30. Juni des Folgejahres',
                '2026 identisch zu 2025 — nächste Anpassung frühestens 2028',
                'Viele Anbieter unbekannt — Pflegekasse nach anerkannten Diensten fragen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist der Entlastungsbetrag?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Der Entlastungsbetrag (§ 45b SGB XI) ist eine monatliche Leistung der Pflegekasse, die pflegende Angehörige und Pflegebedürftige bei der Organisation von Betreuung und Unterstützung finanziell entlastet. Er beträgt 131 Euro pro Monat und gilt für alle Pflegegrade 1 bis 5.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Im Gegensatz zum Pflegegeld wird der Entlastungsbetrag nicht bar ausgezahlt — er wird als Erstattung gezahlt. Die Familie bezahlt zunächst selbst, reicht dann die Rechnung bei der Pflegekasse ein und bekommt bis zu 131 Euro erstattet.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            <strong>Wichtiger Unterschied zum Entlastungsbudget:</strong> Der Entlastungsbetrag (131 €/Monat) ist eine eigenständige Leistung und läuft vollständig parallel zum Entlastungsbudget (3.539 €/Jahr) — sie schließen sich nicht aus und werden nicht gegeneinander aufgerechnet.
          </p>

          {/* SECTION 2 */}
          <h2 id="wofuer" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wofür kann man den Entlastungsbetrag nutzen?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Entlastungsbetrag ist zweckgebunden — nur für anerkannte Angebote. Was genau anerkannt ist, variiert je nach Bundesland leicht. Die Pflegekasse gibt auf Anfrage eine Liste anerkannter Anbieter.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: '✓ Tages- und Nachtpflege', desc: 'Tagesaufenthalte in einer Tagespflegeeinrichtung — der Eigenanteil kann aus dem Entlastungsbetrag bezahlt werden.' },
              { title: '✓ Ambulante Pflegedienste', desc: 'Bei Pflegegrad 1 auch für körperbezogene Pflege nutzbar. Bei PG 2–5 für ergänzende Leistungen die über die Sachleistungen hinausgehen.' },
              { title: '✓ Hauswirtschaftliche Versorgung', desc: 'Durch anerkannte Anbieter — Putzen, Kochen, Einkaufen. Nicht durch private Personen ohne Anerkennung.' },
              { title: '✓ Betreuungsgruppen', desc: 'Für Menschen mit Demenz oder geistiger Behinderung — Gruppenangebote die Struktur und Gesellschaft bieten.' },
              { title: '✓ Angebote zur Unterstützung im Alltag', desc: 'Vorlesedienste, Begleitdienste, ehrenamtliche Helfer über anerkannte Organisationen.' },
              { title: '✗ Private Pflegepersonen ohne Anerkennung', desc: 'Angehörige oder Bekannte die nicht über einen anerkannten Anbieter tätig sind, können nicht abgerechnet werden.' },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-4 border ${item.title.startsWith('✗') ? 'bg-[#FDF0EE] border-[rgba(231,111,99,0.15)]' : 'bg-white border-[#E5E3DF]'}`}>
                <p className={`text-[14px] font-bold mb-1 ${item.title.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#1C1C1C]'}`}>{item.title}</p>
                <p className={`text-[14px] leading-relaxed ${item.title.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#2E2E2E]'}`}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 3 */}
          <h2 id="anspruch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wer hat Anspruch?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Entlastungsbetrag steht allen pflegebedürftigen Personen mit Pflegegrad 1 bis 5 zu — unabhängig davon ob sie zu Hause oder in einer Pflegeeinrichtung leben. Er ist damit die einzige Kassenleistung, die auch bei Pflegegrad 1 ohne Pflegegeld-Anspruch gilt.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Entlastungsbetrag nach Pflegegrad</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegegrad 1', '131 €/Monat', 'Kein Pflegegeld — Entlastungsbetrag ist einzige Kassenleistung'],
                    ['Pflegegrad 2', '131 €/Monat', 'Zusätzlich zu 347 € Pflegegeld'],
                    ['Pflegegrad 3', '131 €/Monat', 'Zusätzlich zu 599 € Pflegegeld'],
                    ['Pflegegrad 4', '131 €/Monat', 'Zusätzlich zu 800 € Pflegegeld'],
                    ['Pflegegrad 5', '131 €/Monat', 'Zusätzlich zu 990 € Pflegegeld'],
                  ].map(([grad, betrag, hinweis], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className="px-5 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{betrag}</td>
                      <td className="px-5 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 4 */}
          <h2 id="beantragen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Beantragen & abrechnen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Entlastungsbetrag ist automatisch Teil des Pflegegradantrags — er muss nicht separat beantragt werden. Die Abrechnung läuft über Rechnungserstattung.
          </p>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Anerkannten Anbieter finden', desc: 'Pflegekasse nach einer Liste anerkannter Angebote zur Unterstützung im Alltag fragen. Nicht alle Anbieter sind automatisch anerkannt.' },
              { n: '2', title: 'Leistung in Anspruch nehmen', desc: 'Den Dienst nutzen — Rechnung stellen lassen. Wichtig: Die Rechnung muss auf den Pflegebedürftigen lauten.' },
              { n: '3', title: 'Rechnung einreichen', desc: 'Rechnungsoriginal mit Überweisungsbeleg bei der Pflegekasse einreichen — per Post oder digitaler Pflegekassen-App.' },
              { n: '4', title: 'Erstattung erhalten', desc: 'Die Pflegekasse erstattet bis zu 131 €/Monat — innerhalb weniger Wochen auf das angegebene Konto.' },
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

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Ansparung: bis zu 1.572 € nutzbar</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Nicht genutzter Entlastungsbetrag verfällt nicht sofort — er kann bis zum 30. Juni des Folgejahres angespart werden. Maximal 12 Monatsbeiträge × 131 € = 1.572 €. Das ermöglicht eine größere Ausgabe zu finanzieren, z.B. mehrere Wochen Tagespflege am Stück.
            </p>
          </div>

          {/* SECTION 5 */}
          <h2 id="kombination" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Mit anderen Leistungen kombinieren
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Entlastungsbetrag läuft vollständig parallel zu allen anderen Pflegekassenleistungen — kein Abzug, keine Anrechnung.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Entlastungsbetrag + Pflegegeld', desc: '131 €/Monat zusätzlich zum Pflegegeld — bei PG 3 macht das 730 €/Monat Gesamtentlastung durch die Kasse.' },
              { title: 'Entlastungsbetrag + Entlastungsbudget', desc: 'Beide laufen parallel — Entlastungsbudget (3.539 €/Jahr) für Verhinderungs-/Kurzzeitpflege, Entlastungsbetrag (131 €/Monat) für Alltagsentlastung.' },
              { title: 'Entlastungsbetrag + 24h-Pflege', desc: 'Wenn die 24h-Betreuungskraft über einen anerkannten Anbieter kommt, können Teile der Kosten über den Entlastungsbetrag abgerechnet werden. Primundus berät individuell.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse zusammen:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — alle Zuschüsse 2026</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zum Entlastungsbetrag
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie hoch ist der Entlastungsbetrag 2026?', a: '131 Euro pro Monat — identisch zu 2025. Gilt für alle Pflegegrade 1 bis 5, zusätzlich zum Pflegegeld.' },
              { q: 'Wofür kann ich den Entlastungsbetrag nutzen?', a: 'Für anerkannte Betreuungs- und Entlastungsangebote: Tages-/Nachtpflege, ambulante Pflegedienste, hauswirtschaftliche Hilfe durch anerkannte Anbieter, Betreuungsgruppen. Nicht für private Pflegepersonen ohne Anerkennung.' },
              { q: 'Verfällt der Entlastungsbetrag am Jahresende?', a: 'Nein — nicht genutzter Entlastungsbetrag kann bis zum 30. Juni des Folgejahres angespart werden, maximal 1.572 €. Das ist anders als beim Entlastungsbudget (Verhinderungs-/Kurzzeitpflege), das am 31. Dezember verfällt.' },
              { q: 'Wie unterscheidet sich Entlastungsbetrag vom Entlastungsbudget?', a: 'Der Entlastungsbetrag (131 €/Monat, alle PG) ist für Alltagsentlastung. Das Entlastungsbudget (3.539 €/Jahr, PG 2–5) ist für Verhinderungs- und Kurzzeitpflege. Beide laufen parallel, keine gegenseitige Anrechnung.' },
              { q: 'Bekommt man den Entlastungsbetrag automatisch?', a: 'Er steht automatisch zu wenn ein Pflegegrad vorliegt — aber er wird nicht automatisch ausgezahlt. Man muss Rechnungen anerkannter Anbieter einreichen und bekommt bis zu 131 €/Monat erstattet.' },
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
