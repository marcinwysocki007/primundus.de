import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-bedeutet', title: 'Was bedeutet Pflegekraft aus Polen?' },
  { id: 'kosten', title: 'Kosten & was inbegriffen ist' },
  { id: 'legal', title: 'Legal beschäftigen — so geht es' },
  { id: 'qualitaet', title: 'Qualität & Auswahl der Kraft' },
  { id: 'alternativen', title: 'Polen vs. andere Länder' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Polen — legal, sicher & bezahlbar 2026 | Primundus',
  description: 'Pflegekraft aus Polen: 2.200–3.500 €/Monat, legal über Entsendemodell mit A1-Bescheinigung. Was kostet es, wie funktioniert es rechtlich und worauf achten?',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-polen/' },
  openGraph: {
    title: 'Pflegekraft aus Polen — legal & sicher 2026 | Primundus',
    description: 'Pflegekraft aus Polen: 2.200–3.500 €/Monat, legal über Entsendemodell. Kosten, Rechtliches & Qualität erklärt.',
    url: 'https://primundus.de/pflegekraft-aus-polen/',
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
    headline: 'Pflegekraft aus Polen — legal beschäftigen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-polen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Polen', item: 'https://primundus.de/pflegekraft-aus-polen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet eine Pflegekraft aus Polen?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Pflegekraft aus Polen kostet über eine seriöse Agentur wie Primundus 2.200–3.500 Euro pro Monat, je nach Pflegebedarf und Qualifikation. Hinzu kommen Kost und Logis im Haushalt (ca. 200–300 €/Monat). Mit Pflegegeld und Kassenzuschüssen sinkt der Eigenanteil deutlich.' } },
      { '@type': 'Question', name: 'Ist eine Pflegekraft aus Polen legal?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn sie über eine seriöse Agentur im Entsendemodell beschäftigt wird. Die Pflegekraft ist in Polen sozialversichert und kommt mit A1-Bescheinigung legal nach Deutschland. Scheinselbstständigkeit ist dagegen strafbar und sollte unbedingt vermieden werden.' } },
      { '@type': 'Question', name: 'Wie funktioniert das Entsendemodell?', acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekraft ist bei einem polnischen Pflegeunternehmen angestellt und wird für typischerweise 6–8 Wochen nach Deutschland entsandt. Die Familie schließt einen Vertrag mit der deutschen Agentur. Die Pflegekraft ist in Polen sozialversichert und mit A1-Bescheinigung rechtlich abgesichert.' } },
      { '@type': 'Question', name: 'Was leistet eine Pflegekraft aus Polen?', acceptedAnswer: { '@type': 'Answer', text: 'Grundpflege (Körperhygiene, Ankleiden, Mobilisierung), Haushaltsführung (Kochen, Putzen, Einkaufen), Begleitung zu Arztterminen und soziale Betreuung. Medizinische Behandlungspflege nur mit Qualifikationsnachweis.' } },
      { '@type': 'Question', name: 'Wie schnell kann eine Pflegekraft aus Polen starten?', acceptedAnswer: { '@type': 'Answer', text: 'Mit Primundus ist eine Pflegekraft aus Polen typischerweise innerhalb von 4–7 Tagen nach dem ersten Beratungsgespräch vor Ort.' } },
    ],
  },
]

export default function PflegekraftAusPolen() {
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
            <span className="text-[#1C1C1C]">Pflegekraft aus Polen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegekraft aus Polen — legal, sicher & bezahlbar
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Eine Pflegekraft aus Polen kostet 2.200–3.500 Euro pro Monat und ist über das Entsendemodell vollständig legal — mit A1-Bescheinigung, sozialversichert in Polen, rechtlich abgesichert in Deutschland. Polen ist das meistgenutzte Herkunftsland für 24h-Betreuungskräfte in Deutschland: gute Sprachkenntnisse, kulturelle Nähe, kurze Anreise.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Kosten: 2.200–3.500 €/Monat je nach Pflegebedarf + Kost & Logis',
                'Legal: Entsendemodell mit A1-Bescheinigung — vollständig rechtssicher',
                'Start: In 4–7 Tagen nach dem ersten Beratungsgespräch vor Ort',
                'Rotation: Wechsel der Kraft alle 6–8 Wochen — nahtlose Übergabe',
                'Qualifikation: Grundpflege, Haushalt, Betreuung — kein Arztdiplom aber mehr als Haushaltshilfe',
                'Bei Ausfall: Primundus stellt sofort Ersatzkraft — kein Versorgungsausfall',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="was-bedeutet" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was bedeutet „Pflegekraft aus Polen"?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            In Deutschland leben und arbeiten schätzungsweise 200.000–300.000 Betreuungskräfte aus Polen — sie stellen den größten Anteil aller 24h-Betreuungskräfte aus EU-Ländern. Der Begriff meint Frauen und Männer, die dauerhaft im Haushalt des Pflegebedürftigen leben und rund um die Uhr erreichbar sind.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Typischerweise arbeiten sie im Rotationsprinzip: 6–8 Wochen in Deutschland, dann Rückkehr nach Polen, gleichzeitiger Beginn einer Nachfolgekraft. So ist die Betreuung dauerhaft sichergestellt — ohne Lücken.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Grundpflege', desc: 'Körperhygiene, Ankleiden, Nahrungsaufnahme, Lagerung und Mobilisierung. Unterstützung bei allem was der Pflegebedürftige nicht mehr selbst schafft.' },
              { title: 'Haushaltsführung', desc: 'Kochen, Putzen, Einkaufen, Wäsche, Begleitung zu Arztterminen. Die Betreuungskraft führt den Haushalt eigenständig.' },
              { title: 'Betreuung und Gesellschaft', desc: 'Gespräche, Spaziergänge, Tagesstruktur — gerade bei Demenz entscheidend. Polnische Betreuungskräfte sind oft für ihre Geduld und Herzlichkeit bekannt.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Was genau inbegriffen ist:{' '}
            <a href="/leistungen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Leistungen der 24h-Pflege bei Primundus</a>
          </p>

          {/* SECTION 2 */}
          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kosten & was inbegriffen ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die monatlichen Kosten setzen sich aus der Agenturgebühr und Kost & Logis zusammen. Mit Kassenzuschüssen sinkt der tatsächliche Eigenanteil deutlich.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Kostenübersicht Pflegekraft aus Polen — Primundus 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Betreuungskosten (Agentur)', '2.200–3.500 €/Monat'],
                    ['Kost & Logis (im Haushalt)', 'ca. 200–300 €/Monat'],
                    ['Abzüglich Pflegegeld PG 3', '– 599 €/Monat'],
                    ['Abzüglich Entlastungsbetrag', '– 131 €/Monat'],
                    ['Eigenanteil (Richtwert PG 3)', 'ca. 1.700–2.100 €/Monat'],
                  ].map(([label, value], i) => (
                    <tr key={label} className={i === 4 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{label}</td>
                      <td className={`px-5 py-3 text-[14px] font-bold border-b border-[#E5E3DF] text-right ${i === 4 ? 'text-[#8B7355]' : i >= 2 ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte Primundus 2026 · Eigenanteil variiert je nach tatsächlichen Kosten und Pflegegrad</p>
            </div>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Kosten im Detail:{' '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was kostet 24h-Pflege? — vollständige Kostenübersicht</a>
            {' · '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Alle Zuschüsse 2026</a>
          </p>

          {/* SECTION 3 */}
          <h2 id="legal" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Legal beschäftigen — so funktioniert das Entsendemodell
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Das Entsendemodell ist das einzige wirklich rechtssichere Modell für Betreuungskräfte aus Polen. Es ist auch das meistgenutzte — weil es für alle Seiten unkompliziert ist.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                title: 'Entsendemodell (empfohlen)',
                desc: 'Die Betreuungskraft ist bei einem polnischen Pflegeunternehmen angestellt. Sie wird für 6–8 Wochen nach Deutschland entsandt, mit A1-Bescheinigung als Nachweis der Sozialversicherung in Polen. Die Familie schließt einen Vertrag mit Primundus als deutscher Agentur — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.',
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
              <div key={item.title} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-6">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-1">Was die A1-Bescheinigung ist</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Die A1-Bescheinigung ist ein EU-Dokument das belegt, dass die Betreuungskraft in ihrem Heimatland (Polen) sozialversichert ist und deshalb in Deutschland keine zusätzlichen Sozialabgaben anfallen. Sie wird vom polnischen Unternehmen ausgestellt und muss bei der Pflegekraft immer vorliegen.
            </p>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Alle Beschäftigungsmodelle im Vergleich:{' '}
            <a href="/pflegekraft-legal-beschaeftigen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft legal beschäftigen — die 3 Wege</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Was im Vertrag stehen muss:{' '}
            <a href="/pflegevertrag-aufsetzen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegevertrag aufsetzen — worauf achten?</a>
          </p>

          {/* SECTION 4 */}
          <h2 id="qualitaet" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Qualität & Auswahl der richtigen Kraft
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die größte Sorge bei der Entscheidung für eine Pflegekraft aus Polen: Wie gut ist sie wirklich? Bei Primundus werden Betreuungskräfte sorgfältig ausgewählt — mit konkreten Kriterien die für jede Pflegesituation passen.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Deutschkenntnisse', desc: 'Grundlegende Kommunikation auf Deutsch ist Voraussetzung. Je nach Pflegesituation kann auch Grundkenntnisse ausreichen — bei Demenzbetroffenen zählt oft mehr die emotionale Verbindung als perfektes Deutsch.' },
              { title: 'Pflegeerfahrung', desc: 'Primundus prüft die Erfahrung jeder Kraft — Anzahl der Einsätze, Pflegesituationen, Referenzen. Bei besonderen Diagnosen (z.B. Parkinson, schwere Demenz) wird gezielt nach Spezialerfahrung gesucht.' },
              { title: 'Führerschein', desc: 'Wenn nötig — z.B. für Arztbesuche oder Einkaufsfahrten in ländlichen Gebieten. Beim ersten Gespräch klären.' },
              { title: 'Persönlichkeit & Passung', desc: 'Telefonat vorab möglich. Schnuppertage in der ersten Woche helfen beiden Seiten sich kennenzulernen. Bei Nichtpassung: unkomplizierter Wechsel.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 5 */}
          <h2 id="alternativen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Polen vs. andere Herkunftsländer
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Neben Polen sind Bulgarien und Rumänien die häufigsten Herkunftsländer für 24h-Betreuungskräfte. Die Wahl hängt weniger vom Land als von der einzelnen Kraft und der Agentur ab.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Herkunftsländer im Überblick</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Land', 'Anreise', 'Deutschkenntnisse', 'Besonderheit'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Polen', 'kurz (Zug/Auto)', 'oft solide', 'Meistgenutzt, kulturelle Nähe'],
                    ['Bulgarien', 'länger (Flug)', 'variiert', 'Gute Verfügbarkeit'],
                    ['Rumänien', 'länger (Flug)', 'variiert', 'Oft Pflegefachkräfte verfügbar'],
                  ].map(([land, anreise, deutsch, info], i) => (
                    <tr key={land} className={i === 0 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${i === 0 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{land}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{anreise}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{deutsch}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Andere Herkunftsländer:{' '}
            <a href="/pflegekraft-aus-bulgarien/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft aus Bulgarien</a>
            {' · '}
            <a href="/pflegekraft-aus-rumaenien/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft aus Rumänien</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur Pflegekraft aus Polen
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kostet eine Pflegekraft aus Polen?', a: 'Über Primundus 2.200–3.500 €/Monat je nach Pflegebedarf, plus Kost & Logis (ca. 200–300 €/Monat). Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil deutlich.' },
              { q: 'Ist eine Pflegekraft aus Polen legal?', a: 'Ja — über das Entsendemodell mit A1-Bescheinigung vollständig legal. Die Kraft ist in Polen sozialversichert, in Deutschland rechtlich abgesichert. Scheinselbstständigkeit ist dagegen strafbar.' },
              { q: 'Wie funktioniert das Entsendemodell?', a: 'Die Kraft ist bei einem polnischen Unternehmen angestellt und wird für 6–8 Wochen entsandt. Familie schließt Vertrag mit der deutschen Agentur — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.' },
              { q: 'Was leistet eine Pflegekraft aus Polen?', a: 'Grundpflege, Haushaltsführung, Begleitung zu Arztterminen und soziale Betreuung. Keine Krankenschwester, aber deutlich mehr als eine Haushaltshilfe. Behandlungspflege nur mit Qualifikationsnachweis.' },
              { q: 'Wie schnell kann eine Pflegekraft aus Polen starten?', a: 'Mit Primundus typischerweise 4–7 Tage nach dem ersten Gespräch — täglich kündbar, taggenaue Abrechnung.' },
              { q: 'Was passiert wenn die Pflegekraft krank wird oder ausfällt?', a: 'Primundus stellt sofort eine Ersatzkraft — ohne Versorgungslücke für die Familie. Das ist einer der zentralen Vorteile einer Agenturvermittlung gegenüber einer Direktanstellung.' },
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
