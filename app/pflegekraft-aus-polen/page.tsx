import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-bedeutet', title: 'Was bedeutet Pflegekraft aus Polen?' },
  { id: 'kosten', title: 'Kosten & was inbegriffen ist' },
  { id: 'legal', title: 'Legal beschäftigen — so geht es' },
  { id: 'qualitaet', title: 'Qualität & Auswahl der Kraft' },
  { id: 'alternativen', title: 'Polen vs. andere Länder' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Polnische Pflegekräfte — legal, sicher & bezahlbar 2026',
  description: 'Polnische Pflegekräfte für die 24h-Pflege: 2.200–3.500 €/Monat, legal über das Entsendemodell mit A1-Bescheinigung. Kosten, Recht und Auswahl — einfach erklärt.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-polen' },
  openGraph: {
    title: 'Polnische Pflegekräfte — legal & sicher 2026 | Primundus',
    description: 'Pflegekraft aus Polen: 2.200–3.500 €/Monat, legal über Entsendemodell. Kosten, Rechtliches & Qualität erklärt.',
    url: 'https://primundus.de/pflegekraft-aus-polen',
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
    headline: 'Polnische Pflegekräfte — legal beschäftigen 2026',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-08-19',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-polen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Polen', item: 'https://primundus.de/pflegekraft-aus-polen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet eine Pflegekraft aus Polen?', acceptedAnswer: { '@type': 'Answer', text: 'Über Primundus 2.200–3.500 €/Monat je nach Pflegebedarf, plus Kost & Logis (ca. 200–300 €/Monat). Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil deutlich.' } },
      { '@type': 'Question', name: 'Ist eine Pflegekraft aus Polen legal?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — über das Entsendemodell mit A1-Bescheinigung vollständig legal. Die Kraft ist in Polen sozialversichert, in Deutschland rechtlich abgesichert. Scheinselbstständigkeit ist dagegen strafbar.' } },
      { '@type': 'Question', name: 'Wie funktioniert das Entsendemodell?', acceptedAnswer: { '@type': 'Answer', text: 'Die Kraft ist fest bei uns angestellt — bei der PRIMUNDUS Sp. z o.o. in Polen — und wird für 6–8 Wochen entsandt. Sie schließen den Vertrag mit Primundus in Deutschland: kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.' } },
      { '@type': 'Question', name: 'Was leistet eine Pflegekraft aus Polen?', acceptedAnswer: { '@type': 'Answer', text: 'Grundpflege, Haushaltsführung, Begleitung zu Arztterminen und soziale Betreuung. Keine Krankenschwester, aber deutlich mehr als eine Haushaltshilfe. Behandlungspflege nur mit Qualifikationsnachweis.' } },
      { '@type': 'Question', name: 'Wie schnell kann eine Pflegekraft aus Polen starten?', acceptedAnswer: { '@type': 'Answer', text: 'Mit Primundus typischerweise 4–7 Tage nach dem ersten Gespräch — täglich kündbar, taggenaue Abrechnung.' } },
    ],
  },
]

export default function PflegekraftAusPolen() {
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
            <a href="/organisation" className="hover:text-pm-taupe transition-colors">Organisation</a>
            <span>›</span>
            <span className="text-pm-ink">Pflegekraft aus Polen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Aug. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Polnische Pflegekräfte — legal, sicher & bezahlbar
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Eine polnische Pflegekraft kostet 2.200–3.500 Euro pro Monat und ist über das Entsendemodell vollständig legal — mit A1-Bescheinigung, sozialversichert in Polen, rechtlich abgesichert in Deutschland. Polen ist das meistgenutzte Herkunftsland für 24h-Betreuungskräfte in Deutschland: gute Sprachkenntnisse, kulturelle Nähe, kurze Anreise.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Kosten: 2.200–3.500 €/Monat je nach Pflegebedarf + Kost & Logis',
                'Legal: Entsendemodell mit A1-Bescheinigung — vollständig rechtssicher',
                'Start: In 4–7 Tagen nach dem ersten Beratungsgespräch vor Ort',
                'Rotation: Wechsel der Kraft alle 6–8 Wochen — nahtlose Übergabe',
                'Qualifikation: Grundpflege, Haushalt, Betreuung — kein Arztdiplom aber mehr als Haushaltshilfe',
                'Bei Ausfall: Primundus stellt sofort Ersatzkraft — kein Versorgungsausfall',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-pm-body">
                  <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="was-bedeutet" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was bedeutet „Pflegekraft aus Polen"?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            In Deutschland leben und arbeiten schätzungsweise 200.000–300.000 Betreuungskräfte aus Polen — sie stellen den größten Anteil aller 24h-Betreuungskräfte aus EU-Ländern. Der Begriff meint Frauen und Männer, die dauerhaft im Haushalt des Pflegebedürftigen leben und rund um die Uhr erreichbar sind.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Typischerweise arbeiten sie im Rotationsprinzip: 6–8 Wochen in Deutschland, dann Rückkehr nach Polen, gleichzeitiger Beginn einer Nachfolgekraft. So ist die Betreuung dauerhaft sichergestellt — ohne Lücken.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Grundpflege', desc: 'Körperhygiene, Ankleiden, Nahrungsaufnahme, Lagerung und Mobilisierung. Unterstützung bei allem was der Pflegebedürftige nicht mehr selbst schafft.' },
              { title: 'Haushaltsführung', desc: 'Kochen, Putzen, Einkaufen, Wäsche, Begleitung zu Arztterminen. Die Betreuungskraft führt den Haushalt eigenständig.' },
              { title: 'Betreuung und Gesellschaft', desc: 'Gespräche, Spaziergänge, Tagesstruktur — gerade bei Demenz entscheidend. Polnische Betreuungskräfte sind oft für ihre Geduld und Herzlichkeit bekannt.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Was genau inbegriffen ist:{' '}
            <a href="/leistungen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Leistungen der 24h-Pflege bei Primundus</a>
          </p>

          {/* SECTION 2 */}
          <h2 id="kosten" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Kosten & was inbegriffen ist
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die monatlichen Kosten setzen sich aus dem Betreuungspreis und Kost & Logis zusammen — eine Vermittlungsgebühr fällt bei uns nicht an. Mit den Zuschüssen der Pflegekasse sinkt der tatsächliche Eigenanteil deutlich.
          </p>

          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-pm-paper border-b border-pm-line">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">Kostenübersicht Pflegekraft aus Polen — Primundus 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Betreuungskosten', '2.200–3.500 €/Monat'],
                    ['Kost & Logis (im Haushalt)', 'ca. 200–300 €/Monat'],
                    ['Abzüglich Pflegegeld PG 3', '– 599 €/Monat'],
                    ['Abzüglich Entlastungsbetrag', '– 131 €/Monat'],
                    ['Eigenanteil (Richtwert PG 3)', 'ca. 1.700–2.100 €/Monat'],
                  ].map(([label, value], i) => (
                    <tr key={label} className={i === 4 ? 'bg-pm-shell' : i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-5 py-3 text-[14px] text-pm-body border-b border-pm-line">{label}</td>
                      <td className={`px-5 py-3 text-[14px] font-bold border-b border-pm-line text-right ${i === 4 ? 'text-pm-taupe' : i >= 2 ? 'text-pm-green' : 'text-pm-ink'}`}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Richtwerte Primundus 2026 · Eigenanteil variiert je nach tatsächlichen Kosten und Pflegegrad</p>
            </div>
          </div>

          <p className="text-[15px] text-pm-body mb-10">
            → Alle Kosten im Detail:{' '}
            <a href="/kosten" className="text-pm-taupe underline hover:text-pm-taupe-deep">Was kostet 24h-Pflege? — vollständige Kostenübersicht</a>
            {' · '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Alle Zuschüsse 2026</a>
          </p>

          <h2 id="pflegekasse" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was zahlt die Pflegekasse dazu?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die Pflegekasse zahlt die Betreuungskraft nicht direkt. Das <strong>Pflegegeld</strong> überweist
            sie Ihnen monatlich aufs Konto — darüber können Sie frei verfügen. Den{' '}
            <a href="/entlastungsbetrag" className="text-pm-taupe underline hover:text-pm-taupe-deep">Entlastungsbetrag</a>{' '}
            von 131 € bekommen Sie dagegen gegen Rechnung erstattet, wenn die Betreuung über einen
            anerkannten Anbieter läuft. Wir sagen Ihnen, was in Ihrem Bundesland anerkannt ist.
          </p>

          {(() => {
            const ZUSCHUESSE: [string, string, string][] = [
              ['Pflegegrad 1', 'kein Pflegegeld', '131 €'],
              ['Pflegegrad 2', '347 €', '131 €'],
              ['Pflegegrad 3', '599 €', '131 €'],
              ['Pflegegrad 4', '800 €', '131 €'],
              ['Pflegegrad 5', '990 €', '131 €'],
            ];
            return (
              <div className="mb-4">
                {/* Breite Bildschirme: Tabelle. Schmale: gestapelte Karten —
                    drei Spalten mit Geldbeträgen schneiden auf dem Handy ab. */}
                <div className="hidden md:block bg-white rounded-2xl border border-pm-line overflow-hidden shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-pm-paper">
                        <th className="px-5 py-3 text-left text-[12px] font-bold uppercase tracking-[0.06em] text-pm-mute border-b border-pm-line">Pflegegrad</th>
                        <th className="px-5 py-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-pm-mute border-b border-pm-line">Pflegegeld — frei verfügbar</th>
                        <th className="px-5 py-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-pm-mute border-b border-pm-line">Entlastungsbetrag — als Erstattung</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ZUSCHUESSE.map(([grad, geld, entlastung], i) => (
                        <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                          <td className="px-5 py-3 text-[14px] font-medium text-pm-body border-b border-pm-line">{grad}</td>
                          <td className="px-5 py-3 text-[14px] text-right font-semibold text-pm-green border-b border-pm-line">{geld}</td>
                          <td className="px-5 py-3 text-[14px] text-right font-semibold text-pm-green border-b border-pm-line">{entlastung}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden flex flex-col gap-2.5">
                  {ZUSCHUESSE.map(([grad, geld, entlastung]) => (
                    <div key={grad} className="bg-white rounded-xl border border-pm-line p-4 shadow-sm">
                      <p className="text-[15px] font-bold text-pm-ink mb-2">{grad}</p>
                      <div className="flex justify-between text-[14px] mb-1">
                        <span className="text-pm-body">Pflegegeld, frei verfügbar</span>
                        <span className="font-semibold text-pm-green">{geld}</span>
                      </div>
                      <div className="flex justify-between text-[14px]">
                        <span className="text-pm-body">Entlastungsbetrag, als Erstattung</span>
                        <span className="font-semibold text-pm-green">{entlastung}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-pm-mute mt-2 px-1">
                  Monatliche Beträge · Ab Pflegegrad 2 kommt das Entlastungsbudget mit bis zu
                  3.539 € im Jahr dazu (Verhinderungs- und Kurzzeitpflege zusammengefasst)
                </p>
              </div>
            );
          })()}

          <p className="text-[16px] leading-relaxed text-pm-body mb-10">
            Bei Pflegegrad 3 bleibt damit der oben genannte Eigenanteil von rund
            1.700–2.100 € im Monat. Bei Pflegegrad 4 oder 5 wird es entsprechend weniger,
            bei Pflegegrad 1 mehr. Wer zusätzlich das Entlastungsbudget nutzt, kommt oft
            noch darunter.{' '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Alle Zuschüsse im Überblick</a>
          </p>

          <h2 id="versicherung" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wie ist die Betreuungskraft versichert?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Unsere Betreuungskräfte sind bei uns fest angestellt und bleiben während des
            Einsatzes in Polen sozialversichert — Kranken-, Renten- und Unfallversicherung
            laufen dort weiter. Belegt wird das durch die A1-Bescheinigung, die jede Kraft
            mitbringt.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-10">
            Für Sie als Familie heißt das: Solange die Betreuung über uns läuft, werden Sie
            nicht zum Arbeitgeber. Sie melden niemanden bei einer Krankenkasse an und führen
            keine Sozialbeiträge ab. Diese Pflichten liegen bei uns.
          </p>

          {/* SECTION 3 */}
          <h2 id="legal" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Legal beschäftigen — so funktioniert das Entsendemodell
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Das Entsendemodell ist das einzige wirklich rechtssichere Modell für Betreuungskräfte aus Polen. Es ist auch das meistgenutzte — weil es für alle Seiten unkompliziert ist.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                title: 'Entsendemodell (empfohlen)',
                desc: 'Die Betreuungskraft ist fest bei uns angestellt — bei der PRIMUNDUS Sp. z o.o. in Polen. Sie wird für 6–8 Wochen nach Deutschland entsandt, mit A1-Bescheinigung als Nachweis der Sozialversicherung in Polen. Sie schließen den Vertrag mit Primundus in Deutschland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.',
                highlight: true,
              },
              {
                title: 'Direktanstellung',
                desc: 'Die Familie stellt die Kraft selbst als Arbeitgeberin an. Rechtlich eindeutig, aber mit hohem Aufwand: Lohnabrechnung, deutsche Sozialversicherung, Urlaubsvertretung bei Krankheit.',
                highlight: false,
              },
              {
                title: 'Scheinselbstständigkeit (verboten)',
                desc: 'Wer eine polnische Pflegekraft "freiberuflich" beauftragt, die faktisch weisungsgebunden im Haushalt lebt, begeht Scheinselbstständigkeit. Das ist strafbar: Nachzahlungen von Sozialabgaben plus Bußgelder.',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-pm-taupe border-2' : 'bg-white border-pm-line'}`}>
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-pm-mint border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-6">
            <p className="text-[14px] font-bold text-pm-green-deep mb-1">Was die A1-Bescheinigung ist</p>
            <p className="text-[14px] text-pm-green-deep leading-relaxed">
              Die A1-Bescheinigung ist ein EU-Dokument das belegt, dass die Betreuungskraft in ihrem Heimatland (Polen) sozialversichert ist und deshalb in Deutschland keine zusätzlichen Sozialabgaben anfallen. Wir beantragen sie für jede Kraft bei der polnischen Sozialversicherung ZUS; während des Einsatzes muss sie vorliegen.
            </p>
          </div>

          <p className="text-[15px] text-pm-body mb-3">
            → Alle Beschäftigungsmodelle im Vergleich:{' '}
            <a href="/pflegekraft-legal-beschaeftigen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegekraft legal beschäftigen — die 3 Wege</a>
          </p>
          <p className="text-[15px] text-pm-body mb-10">
            → Was im Vertrag stehen muss:{' '}
            <a href="/pflegevertrag-aufsetzen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegevertrag aufsetzen — worauf achten?</a>
          </p>

          {/* SECTION 4 */}
          <h2 id="qualitaet" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Qualität & Auswahl der richtigen Kraft
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die größte Sorge bei der Entscheidung für eine Pflegekraft aus Polen: Wie gut ist sie wirklich? Bei Primundus werden Betreuungskräfte sorgfältig ausgewählt — mit konkreten Kriterien die für jede Pflegesituation passen.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Deutschkenntnisse', desc: 'Grundlegende Kommunikation auf Deutsch ist Voraussetzung. Je nach Pflegesituation kann auch Grundkenntnisse ausreichen — bei Demenzbetroffenen zählt oft mehr die emotionale Verbindung als perfektes Deutsch.' },
              { title: 'Pflegeerfahrung', desc: 'Primundus prüft die Erfahrung jeder Kraft — Anzahl der Einsätze, Pflegesituationen, Referenzen. Bei besonderen Diagnosen (z.B. Parkinson, schwere Demenz) wird gezielt nach Spezialerfahrung gesucht.' },
              { title: 'Führerschein', desc: 'Wenn nötig — z.B. für Arztbesuche oder Einkaufsfahrten in ländlichen Gebieten. Beim ersten Gespräch klären.' },
              { title: 'Persönlichkeit & Passung', desc: 'Telefonat vorab möglich. Schnuppertage in der ersten Woche helfen beiden Seiten sich kennenzulernen. Bei Nichtpassung: unkomplizierter Wechsel.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 5 */}
          <h2 id="alternativen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Polen vs. andere Herkunftsländer
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Neben Polen sind Bulgarien und Rumänien die häufigsten Herkunftsländer für 24h-Betreuungskräfte. Die Wahl hängt weniger vom Land als von der einzelnen Kraft und der Agentur ab.
          </p>

          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-pm-paper border-b border-pm-line">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">Herkunftsländer im Überblick</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Land', 'Anreise', 'Deutschkenntnisse', 'Besonderheit'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Polen', 'kurz (Zug/Auto)', 'oft solide', 'Meistgenutzt, kulturelle Nähe'],
                    ['Bulgarien', 'länger (Flug)', 'variiert', 'Gute Verfügbarkeit'],
                    ['Rumänien', 'länger (Flug)', 'variiert', 'Oft Pflegefachkräfte verfügbar'],
                  ].map(([land, anreise, deutsch, info], i) => (
                    <tr key={land} className={i === 0 ? 'bg-pm-shell' : i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-pm-line ${i === 0 ? 'text-pm-taupe' : 'text-pm-ink'}`}>{land}</td>
                      <td className="px-4 py-3 text-[14px] text-pm-body border-b border-pm-line">{anreise}</td>
                      <td className="px-4 py-3 text-[14px] text-pm-body border-b border-pm-line">{deutsch}</td>
                      <td className="px-4 py-3 text-[13px] text-pm-mute border-b border-pm-line">{info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Andere Herkunftsländer:{' '}
            <a href="/pflegekraft-aus-bulgarien" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegekraft aus Bulgarien</a>
            {' · '}
            <a href="/pflegekraft-aus-rumaenien" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegekraft aus Rumänien</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">
            Häufige Fragen zur Pflegekraft aus Polen
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kostet eine Pflegekraft aus Polen?', a: 'Über Primundus 2.200–3.500 €/Monat je nach Pflegebedarf, plus Kost & Logis (ca. 200–300 €/Monat). Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil deutlich.' },
              { q: 'Ist eine Pflegekraft aus Polen legal?', a: 'Ja — über das Entsendemodell mit A1-Bescheinigung vollständig legal. Die Kraft ist in Polen sozialversichert, in Deutschland rechtlich abgesichert. Scheinselbstständigkeit ist dagegen strafbar.' },
              { q: 'Wie funktioniert das Entsendemodell?', a: 'Die Kraft ist fest bei uns angestellt — bei der PRIMUNDUS Sp. z o.o. in Polen — und wird für 6–8 Wochen entsandt. Sie schließen den Vertrag mit Primundus in Deutschland: kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.' },
              { q: 'Was leistet eine Pflegekraft aus Polen?', a: 'Grundpflege, Haushaltsführung, Begleitung zu Arztterminen und soziale Betreuung. Keine Krankenschwester, aber deutlich mehr als eine Haushaltshilfe. Behandlungspflege nur mit Qualifikationsnachweis.' },
              { q: 'Wie schnell kann eine Pflegekraft aus Polen starten?', a: 'Mit Primundus typischerweise 4–7 Tage nach dem ersten Gespräch — täglich kündbar, taggenaue Abrechnung.' },
              { q: 'Was passiert wenn die Pflegekraft krank wird oder ausfällt?', a: 'Primundus stellt sofort eine Ersatzkraft — ohne Versorgungslücke für die Familie. Das ist einer der zentralen Vorteile einer Agenturvermittlung gegenüber einer Direktanstellung.' },
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

          <Weiterlesen aktuell="pflegekraft-aus-polen" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
