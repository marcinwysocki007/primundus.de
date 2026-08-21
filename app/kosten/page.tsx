import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const GrafikKostenvergleich = dynamic(
  () => import('@/components/charts/GrafikKostenvergleich').then(m => ({ default: m.GrafikKostenvergleich })),
  { loading: () => <div className="my-10 h-[420px] bg-[#F8F7F5] rounded-2xl border border-[#E5E3DF] animate-pulse" />, ssr: false }
)

const SECTIONS = [
  { id: 'kosten-uebersicht', title: 'Was kostet 24h-Pflege?' },
  { id: 'kassenzuschuesse', title: 'Kassenzuschüsse 2026' },
  { id: 'pflegegrad-kosten', title: 'Kosten nach Pflegegrad' },
  { id: 'polnische-pflegekraft', title: 'Polnische Pflegekraft' },
  { id: 'vergleich', title: 'Vergleich: 24h-Pflege vs. Pflegeheim' },
  { id: 'eigenanteil', title: 'Eigenanteil senken' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kosten 24h-Pflege 2026 — Preise, Zuschüsse & Vergleich',
  description: '24h-Pflege kostet 2.200–3.500 €/Monat. Mit Pflegegeld (bis 990 €) und Entlastungsbudget (3.539 €/Jahr) sinkt der Eigenanteil deutlich. Alle Zahlen 2026.',
  alternates: { canonical: 'https://primundus.de/kosten' },
  openGraph: {
    title: 'Kosten 24h-Pflege 2026 | Primundus',
    description: '24h-Pflege kostet 2.200–3.500 €/Monat. Mit Kassenzuschüssen sinkt der Eigenanteil deutlich. Alle Zahlen 2026.',
    url: 'https://primundus.de/kosten',
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
    headline: 'Was kostet 24h-Pflege? Kosten, Zuschüsse & Vergleich 2026',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-01-15',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/kosten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege' },
      { '@type': 'ListItem', position: 3, name: 'Kosten', item: 'https://primundus.de/kosten' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet 24-Stunden-Pflege im Monat?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Primundus kostet 24h-Pflege 2.200–3.500 € pro Monat je nach Pflegebedarf. Hinzu kommen Kost und Logis (ca. 200–300 €/Monat). Mit Pflegegeld und Entlastungsbetrag sinkt der Eigenanteil bei Pflegegrad 3 auf ca. 1.700–2.000 € pro Monat.' } },
      { '@type': 'Question', name: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 3 zahlt die Pflegekasse 599 € Pflegegeld und anteilig ca. 295 € aus dem Entlastungsbudget. Bei Kosten ab 2.200 €/Monat beginnt der Eigenanteil damit bei ca. 1.310 €/Monat — die Steuerermäßigung für haushaltsnahe Dienstleistungen senkt ihn weiter.' } },
      { '@type': 'Question', name: 'Was kostet eine polnische Pflegekraft im Monat?', acceptedAnswer: { '@type': 'Answer', text: 'Eine polnische Betreuungskraft kostet bei Primundus 2.200–3.500 € pro Monat — angestellt bei Primundus, legal über das Entsendemodell mit A1-Bescheinigung. Mit Pflegegeld und anteiligem Entlastungsbudget sinkt der Eigenanteil je nach Pflegegrad auf ca. 920–1.560 € im Monat.' } },
      { '@type': 'Question', name: 'Was kostet eine 24-Stunden-Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Eine 24-Stunden-Pflegekraft kostet bei Primundus 2.200–3.500 € pro Monat, abhängig von Deutschkenntnissen und Pflegebedarf. Darin enthalten sind Lohn und Sozialabgaben der Betreuungskraft sowie Ersatz bei Ausfall; hinzu kommen Kost und Logis (ca. 200–300 €/Monat).' } },
      { '@type': 'Question', name: 'Was zahlt die Pflegekasse bei 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegeld (347–990 €/Monat je nach Pflegegrad) + Entlastungsbetrag (131 €/Monat) + Entlastungsbudget (3.539 €/Jahr). Bei PG 3 macht das zusammen bis zu 730 € monatliche Entlastung plus 295 €/Monat aus dem Entlastungsbudget.' } },
      { '@type': 'Question', name: 'Ist 24h-Pflege günstiger als ein Pflegeheim?', acceptedAnswer: { '@type': 'Answer', text: 'Oft ja — der Pflegeheim-Eigenanteil liegt bundesweit bei Ø 3.364 €/Monat (2026). Bei PG 3 kann der 24h-Pflege-Eigenanteil mit Kassenzuschüssen auf unter 2.000 €/Monat sinken. Und der Pflegebedürftige bleibt in seiner vertrauten Umgebung.' } },
      { '@type': 'Question', name: 'Was ist das Entlastungsbudget 2026?', acceptedAnswer: { '@type': 'Answer', text: '3.539 €/Jahr, seit Juli 2025 als gemeinsames Budget für Verhinderungs- und Kurzzeitpflege. Gilt für PG 2–5, flexibel aufteilbar, Vorpflegezeit entfällt. 2026 ist das erste volle Jahr ohne Übergangsregelungen. Achtung: verfällt am 31. Dezember.' } },
      { '@type': 'Question', name: 'Kann man Pflegekosten von der Steuer absetzen?', acceptedAnswer: { '@type': 'Answer', text: '20 % der Aufwendungen für haushaltsnahe Dienstleistungen — max. 4.000 € Steuerersparnis/Jahr. Bei 2.500 €/Monat Betreuungskosten (30.000 €/Jahr) ergibt das die volle Maximalerstattung von 4.000 €.' } },
      { '@type': 'Question', name: 'Wie kann ich den Eigenanteil senken?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad korrekt und vollständig beantragen, Entlastungsbudget voll ausschöpfen, steuerlich absetzen, Pflegehilfsmittel (42 €/Monat) beantragen, Wohnraumanpassungsförderung (bis 4.180 € je Maßnahme) nutzen.' } }
    ],
  },
]

export default function Kosten() {
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
            <a href="/24-stunden-pflege" className="hover:text-[#8B7355] transition-colors">24-Stunden-Pflege</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Kosten</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Was kostet 24-Stunden-Pflege? Kosten & Zuschüsse 2026
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-6 font-medium">
            24h-Pflege kostet bei Primundus 2.200–3.500 Euro pro Monat. Pflegegeld, Entlastungsbetrag und das neue Entlastungsbudget (3.539 €/Jahr) senken den Eigenanteil deutlich — bei Pflegegrad 3 auf unter 2.000 € monatlich. Start der Betreuung: meist in 4–7 Tagen, bei dringendem Bedarf schneller. Im Vergleich zum Pflegeheim ist 24h-Pflege damit oft günstiger und bietet gleichzeitig mehr Individualität.
          </p>

          <a
            href="https://kostenrechner.primundus.de/?start=1&src=apex-kosten"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E76F63] hover:bg-[#D65E52] text-white font-bold text-[15px] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md mb-10 whitespace-nowrap"
          >
            Mein persönliches Angebot ansehen
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Monatliche Kosten: 2.200–3.500 €/Monat je nach Pflegebedarf',
                'Pflegekasse zahlt: Pflegegeld 347–990 €/Monat je nach Pflegegrad',
                'Entlastungsbetrag: 131 €/Monat zusätzlich für alle Pflegegrade',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege (neu 2026)',
                'Steuer: 20 % der Kosten absetzbar — max. 4.000 € Ersparnis/Jahr',
                'Pflegeheim-Vergleich: Eigenanteil Ø 3.364 €/Monat — oft teurer als 24h-Pflege',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="kosten-uebersicht" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was kostet 24h-Pflege bei Primundus?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Der genaue Preis hängt nicht vom Pflegegrad ab — sondern von der konkreten Situation im Haushalt. Die wichtigsten Faktoren:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Anzahl der zu betreuenden Personen im Haushalt',
              'Mobilität des Pflegebedürftigen (geht selbst, Rollator, Rollstuhl, bettlägerig)',
              'Ob Nachteinsätze notwendig sind',
              'Weitere Personen im Haushalt (z. B. Ehepartner)',
              'Wünsche an die Pflegekraft: Sprache, Führerschein, Erfahrung mit bestimmten Erkrankungen',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] text-[#2E2E2E]">
                <svg className="w-4 h-4 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Hinzu kommen Kost & Logis sowie die Anreise der Betreuungskraft. Der genaue Preis ergibt sich aus dem persönlichen Angebot im Kostenrechner — das dauert unter 2 Minuten.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Beispielrechnung — Pflegegrad 3, 1 Person, Grundbetreuung</p>
            </div>
            <div className="divide-y divide-[#F0EDE8]">
              {[
                { label: 'Primundus-Kosten (Agenturgebühr)', value: '2.500 €' },
                { label: 'Pflegegeld Pflegegrad 3', value: '− 599 €', green: true },
                { label: 'Entlastungsbudget (monatl. Anteil)', value: '− 295 €', green: true },
              ].map(({ label, value, green }) => (
                <div key={label} className="flex items-center justify-between px-5 py-3 bg-white">
                  <span className="text-[14px] text-[#2E2E2E]">{label}</span>
                  <span className={`text-[14px] font-semibold tabular-nums ${green ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>{value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-5 py-4 bg-[#F8F7F5]">
                <span className="text-[15px] font-bold text-[#1C1C1C]">Eigenanteil pro Monat</span>
                <span className="text-[18px] font-bold text-[#1C1C1C]">ca. 1.606 €</span>
              </div>
              <div className="flex items-center justify-between px-5 py-3 bg-[#F0FDF4]">
                <span className="text-[13px] text-[#2E7D32]">Steuerersparnis (20 % der Kosten)</span>
                <span className="text-[13px] font-semibold text-[#2E7D32] tabular-nums flex-shrink-0 ml-3">bis − 333 €/Monat</span>
              </div>
            </div>
            <div className="px-5 py-3 border-t border-[#E5E3DF]">
              <p className="text-[11px] text-[#8B8B8B]">Zzgl. Kost & Logis und Anreise der Betreuungskraft · Beispielrechnung 2026 · Ihr persönlicher Eigenanteil hängt von Ihrer Situation ab.</p>
            </div>
          </div>

          {/* Eigenanteil-Tabelle je Pflegegrad — zitierfähige Referenz mit Quellen */}
          <h3 className="text-[19px] md:text-[22px] font-bold text-[#1C1C1C] mt-2 mb-3 leading-snug">
            Eigenanteil je Pflegegrad — Kosten-Tabelle (Stand: August 2026)
          </h3>
          <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
            Dieselbe Beispielrechnung für alle Pflegegrade: Betreuungskosten von beispielhaft 2.500 €/Monat,
            abzüglich Pflegegeld und dem monatlichen Anteil des gemeinsamen Jahresbetrags für Verhinderungs- und
            Kurzzeitpflege (3.539 € ÷ 12 ≈ 295 €). Die Steuerermäßigung von 20 % (max. 4.000 €/Jahr) kommt
            individuell hinzu.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-4 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Betreuungskosten (Beispiel)', '− Pflegegeld', '− Budget-Anteil/Monat', '= Eigenanteil'].map((h) => (
                      <th key={h} className="px-3 py-3 text-[11px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegrad 2', '2.500 €', '− 347 €', '− 295 €', '1.858 €'],
                    ['Pflegegrad 3', '2.500 €', '− 599 €', '− 295 €', '1.606 €'],
                    ['Pflegegrad 4', '2.500 €', '− 800 €', '− 295 €', '1.405 €'],
                    ['Pflegegrad 5', '2.500 €', '− 990 €', '− 295 €', '1.215 €'],
                  ].map(([pg, kosten, pflegegeld, budget, eigen], i) => (
                    <tr key={pg} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-3 py-3 text-[13px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-3 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF] tabular-nums">{kosten}</td>
                      <td className="px-3 py-3 text-[13px] text-[#3D7A5C] border-b border-[#E5E3DF] tabular-nums">{pflegegeld}</td>
                      <td className="px-3 py-3 text-[13px] text-[#3D7A5C] border-b border-[#E5E3DF] tabular-nums">{budget}</td>
                      <td className="px-3 py-3 text-[13px] font-bold text-[#1C1C1C] border-b border-[#E5E3DF] tabular-nums">{eigen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3">
              <p className="text-[11px] text-[#8B8B8B]">
                Beispielrechnung · zzgl. Kost &amp; Logis (individuell) · Budget-Anteil setzt anerkannte Verhinderungspflege-Nutzung voraus · Ihr persönlicher Preis hängt vom Betreuungsbedarf ab.
              </p>
            </div>
          </div>
          <p className="text-[13px] text-[#8B8B8B] mb-10">
            Quellen:{' '}
            <a href="https://www.gesetze-im-internet.de/sgb_11/__37.html" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] underline">§ 37 SGB XI (Pflegegeld)</a>{' · '}
            <a href="https://www.gesetze-im-internet.de/sgb_11/__42a.html" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] underline">§ 42a SGB XI (gemeinsamer Jahresbetrag)</a>{' · '}
            <a href="https://www.gesetze-im-internet.de/sgb_11/__45b.html" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] underline">§ 45b SGB XI (Entlastungsbetrag)</a>{' · '}
            <a href="https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] underline">BMG-Leistungsübersicht</a>{' '}
            · Stand: August 2026
          </p>

          {/* SECTION 2 */}
          <h2 id="kassenzuschuesse" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kassenzuschüsse 2026 — was zahlt die Pflegekasse?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Pflegekasse zahlt nicht direkt die Betreuungskraft — aber mehrere Leistungen lassen sich gezielt kombinieren um den Eigenanteil zu senken.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Pflegegeld 2026 — alle Pflegegrade</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Pflegegeld/Monat'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF] last:text-right">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegrad 2', '347 €'],
                    ['Pflegegrad 3', '599 €'],
                    ['Pflegegrad 4', '800 €'],
                    ['Pflegegrad 5', '990 €'],
                  ].map(([grad, pg], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{grad}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF] text-right">{pg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Quelle: GKV-Spitzenverband · Stand 2026 · Keine Erhöhung für 2026, nächste Dynamisierung frühestens Jan. 2028</p>
            </div>
          </div>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-2">Neu ab Juli 2025 — Entlastungsbudget</p>
            <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">3.539 € pro Jahr — flexibel für Verhinderungs- und Kurzzeitpflege</p>
            <ul className="space-y-1.5">
              {[
                'Für PG 2–5 · ersetzt getrennte Verhinderungs- und Kurzzeitpflegebudgets',
                'Flexibel aufteilbar — max. 8 Wochen pro Leistungsart',
                'Vorpflegezeit entfällt — kein 6-Monats-Warten mehr',
                '2026: erstes volles Jahr ohne Übergangsregelungen',
                'Achtung: Nicht genutztes Budget verfällt am 31. Dezember',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-[#2A5C3F]">
                  <span className="text-[#3D7A5C] font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Alle Zuschüsse kombinieren:{' '}
            <a href="/finanzierung" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — vollständige Übersicht</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegegeld im Detail:{' '}
            <a href="/pflegegeld" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegeld 2026 — Beträge & Anspruch</a>
          </p>


          {/* SECTION 2b — Kosten nach Pflegegrad */}
          <h2 id="pflegegrad-kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was kostet 24-Stunden-Pflege nach Pflegegrad?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Der Preis der Betreuung selbst hängt nicht vom Pflegegrad ab — wohl aber Ihr Eigenanteil,
            denn mit dem Pflegegrad steigen die Kassenleistungen. Bei Kosten von 2.200–3.500 €/Monat
            ergibt sich nach Abzug von Pflegegeld und anteiligem Entlastungsbudget (ca. 295 €/Monat):
          </p>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px]">
                <thead><tr className="bg-[#F8F7F5]">
                  {['Pflegegrad', 'Pflegegeld/Monat', 'Entlastungsbudget anteilig', 'Eigenanteil ab ca.'].map((h) => (
                    <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[['PG 2', '347 €', 'ca. 295 €', 'ab ca. 1.560 €/Monat'], ['PG 3', '599 €', 'ca. 295 €', 'ab ca. 1.310 €/Monat'], ['PG 4', '800 €', 'ca. 295 €', 'ab ca. 1.110 €/Monat'], ['PG 5', '990 €', 'ca. 295 €', 'ab ca. 920 €/Monat']].map(([pg, geld, budget, rest], i) => (
                    <tr key={pg} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[13px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{geld}</td>
                      <td className="px-4 py-3 text-[13px] text-[#3D7A5C] border-b border-[#E5E3DF]">{budget}</td>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{rest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#F8F7F5] border-t border-[#E5E3DF] px-4 py-3">
              <p className="text-[12px] text-[#8B8B8B]">Rechenbeispiel mit dem Einstiegspreis von 2.200 €/Monat; bei höherem Betreuungsbedarf entsprechend mehr. Dazu kommen Kost und Logis. Die Steuerermäßigung für haushaltsnahe Dienstleistungen (bis zu 333 €/Monat) senkt den Betrag zusätzlich.</p>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Ihren persönlichen Preis samt Zuschüssen sehen Sie in 2 Minuten im{' '}
            <a href="https://kostenrechner.primundus.de/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kostenrechner</a>
          </p>

          {/* SECTION 2c — Polnische Pflegekraft */}
          <h2 id="polnische-pflegekraft" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was kostet eine polnische Pflegekraft?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Unsere Betreuungskräfte kommen überwiegend aus Polen — der Preis von 2.200–3.500 €/Monat
            ist derselbe. Darin enthalten: Lohn und Sozialabgaben der Betreuungskraft, die Organisation
            der Einsätze und Ersatz bei Ausfall. Die Kraft ist bei Primundus angestellt und wird legal
            über das Entsendemodell mit A1-Bescheinigung beschäftigt.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alles über Kosten, Rechtliches und Ablauf:{' '}
            <a href="/pflegekraft-aus-polen" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft aus Polen — der große Ratgeber</a>
          </p>

          {/* SECTION 3 — Grafik */}
          <h2 id="vergleich" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            24h-Pflege vs. Pflegeheim — was ist günstiger?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit <strong>3.364 Euro pro Monat (Quelle: vdek-Auswertung, Stand 1. Juli 2026)</strong> — und ist 2024 erneut um 211 Euro gestiegen. Bei der 24h-Pflege zuhause sinkt der Eigenanteil durch Kassenzuschüsse auf ein vergleichbares oder oft niedrigeres Niveau. Und der Pflegebedürftige bleibt in seiner vertrauten Umgebung.
          </p>

          <GrafikKostenvergleich />

          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständiger Vergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten" className="text-[#8B7355] underline hover:text-[#7D6E5D]">24h-Pflege vs. Pflegeheim — Kostenvergleich 2026</a>
          </p>

          {/* SECTION 4 */}
          <h2 id="eigenanteil" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Eigenanteil senken — alle Möglichkeiten
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Mit der richtigen Kombination aller verfügbaren Leistungen lässt sich der monatliche Eigenanteil deutlich senken. Das sind die wichtigsten Stellschrauben:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: '1. Pflegegrad korrekt beantragen', desc: 'Jede Pflegegrad-Stufe bedeutet hunderte Euro mehr Kassenzuschuss pro Monat. Wer zu niedrig eingestuft ist, verschenkt Geld. Im Zweifel: Widerspruch einlegen.', link: { text: 'Pflegegrad beantragen', href: '/pflegegrad-beantragen' } },
              { title: '2. Entlastungsbudget voll ausschöpfen', desc: '3.539 €/Jahr verfallen wenn sie nicht genutzt werden. Belege rechtzeitig einreichen, Pflegekasse nach anerkannten Anbietern fragen.', link: { text: 'Verhinderungspflege & Entlastungsbudget', href: '/verhinderungspflege' } },
              { title: '3. Steuerlich absetzen', desc: '20 % der Betreuungskosten als haushaltsnahe Dienstleistung — max. 4.000 € Steuerersparnis pro Jahr. In der Steuererklärung Anlage V eintragen.', link: { text: 'Pflege steuerlich absetzen', href: '/pflege-steuerlich-absetzen' } },
              { title: '4. Pflegehilfsmittel nutzen', desc: '42 €/Monat für Verbrauchsmittel (Handschuhe, Desinfektionsmittel) — direkt zur Pflegekasse beantragen, werden nach Hause geliefert.', link: null },
              { title: '5. Wohnraumanpassung fördern lassen', desc: 'Bis 4.180 € je Maßnahme für Umbaumaßnahmen — Treppenlift, Badumbau, Türverbreiterung. Mehrfach nutzbar bei mehreren Maßnahmen.', link: { text: 'Wohnraumanpassung Förderung', href: '/wohnraumanpassung-foerderung' } },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">{item.desc}</p>
                {item.link && (
                  <a href={item.link.href} className="text-[13px] text-[#8B7355] underline hover:text-[#7D6E5D]">→ {item.link.text}</a>
                )}
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Tipps kompakt:{' '}
            <a href="/eigenanteil-24h-pflege-senken" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Eigenanteil senken — alle Möglichkeiten 2026</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zu den Kosten der 24h-Pflege
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kostet 24-Stunden-Pflege im Monat?', a: 'Bei Primundus kostet 24h-Pflege 2.200–3.500 € pro Monat je nach Pflegebedarf. Hinzu kommen Kost und Logis (ca. 200–300 €/Monat). Mit Pflegegeld und Entlastungsbetrag sinkt der Eigenanteil bei Pflegegrad 3 auf ca. 1.700–2.000 € pro Monat.' },
              { q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3?', a: 'Bei Pflegegrad 3 zahlt die Pflegekasse 599 € Pflegegeld und anteilig ca. 295 € aus dem Entlastungsbudget. Bei Kosten ab 2.200 €/Monat beginnt der Eigenanteil damit bei ca. 1.310 €/Monat — die Steuerermäßigung für haushaltsnahe Dienstleistungen senkt ihn weiter.' },
              { q: 'Was kostet eine polnische Pflegekraft im Monat?', a: 'Eine polnische Betreuungskraft kostet bei Primundus 2.200–3.500 € pro Monat — angestellt bei Primundus, legal über das Entsendemodell mit A1-Bescheinigung. Mit Pflegegeld und anteiligem Entlastungsbudget sinkt der Eigenanteil je nach Pflegegrad auf ca. 920–1.560 € im Monat.' },
              { q: 'Was kostet eine 24-Stunden-Pflegekraft?', a: 'Eine 24-Stunden-Pflegekraft kostet bei Primundus 2.200–3.500 € pro Monat, abhängig von Deutschkenntnissen und Pflegebedarf. Darin enthalten sind Lohn und Sozialabgaben der Betreuungskraft sowie Ersatz bei Ausfall; hinzu kommen Kost und Logis (ca. 200–300 €/Monat).' },
              { q: 'Was zahlt die Pflegekasse bei 24h-Pflege?', a: 'Pflegegeld (347–990 €/Monat je nach Pflegegrad) + Entlastungsbetrag (131 €/Monat) + Entlastungsbudget (3.539 €/Jahr). Bei PG 3 macht das zusammen bis zu 730 € monatliche Entlastung plus 295 €/Monat aus dem Entlastungsbudget.' },
              { q: 'Ist 24h-Pflege günstiger als ein Pflegeheim?', a: 'Oft ja — der Pflegeheim-Eigenanteil liegt bundesweit bei Ø 3.364 €/Monat (2026). Bei PG 3 kann der 24h-Pflege-Eigenanteil mit Kassenzuschüssen auf unter 2.000 €/Monat sinken. Und der Pflegebedürftige bleibt in seiner vertrauten Umgebung.' },
              { q: 'Was ist das Entlastungsbudget 2026?', a: '3.539 €/Jahr, seit Juli 2025 als gemeinsames Budget für Verhinderungs- und Kurzzeitpflege. Gilt für PG 2–5, flexibel aufteilbar, Vorpflegezeit entfällt. 2026 ist das erste volle Jahr ohne Übergangsregelungen. Achtung: verfällt am 31. Dezember.' },
              { q: 'Kann man Pflegekosten von der Steuer absetzen?', a: '20 % der Aufwendungen für haushaltsnahe Dienstleistungen — max. 4.000 € Steuerersparnis/Jahr. Bei 2.500 €/Monat Betreuungskosten (30.000 €/Jahr) ergibt das die volle Maximalerstattung von 4.000 €.' },
              { q: 'Wie kann ich den Eigenanteil senken?', a: 'Pflegegrad korrekt und vollständig beantragen, Entlastungsbudget voll ausschöpfen, steuerlich absetzen, Pflegehilfsmittel (42 €/Monat) beantragen, Wohnraumanpassungsförderung (bis 4.180 € je Maßnahme) nutzen.' },
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

          {/* Hub: Alle Artikel zu Kosten & Finanzierung */}
          <div className="mt-12 mb-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-2">Alle Artikel zu Kosten &amp; Finanzierung</p>
            <h2 className="text-[22px] font-bold text-[#1C1C1C] mb-6">Weitere Themen im Überblick</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Zuschüsse &amp; Leistungen</p>
                <a href="/pflegegeld" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflegegeld 2026</a>
                <a href="/entlastungsbetrag" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Entlastungsbetrag</a>
                <a href="/verhinderungspflege" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Verhinderungspflege &amp; Entlastungsbudget</a>
                <a href="/pflegesachleistungen" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflegesachleistungen</a>
              </div>

              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Eigenanteil senken</p>
                <a href="/eigenanteil-24h-pflege-senken" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Eigenanteil senken — alle Möglichkeiten</a>
                <a href="/pflege-steuerlich-absetzen" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflege steuerlich absetzen</a>
                <a href="/kombinationsleistung-pflege" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Kombinationsleistung nutzen</a>
                <a href="/sozialhilfe-bei-pflegebedarf" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Sozialhilfe bei Pflegebedarf</a>
              </div>

              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Finanzierung</p>
                <a href="/finanzierung" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Finanzierung der 24h-Pflege</a>
                <a href="/pflegeversicherung-leistungen-uebersicht" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflegeversicherung: alle Leistungen</a>
                <a href="/foerderungen-nach-bundesland" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Förderungen nach Bundesland</a>
                <a href="/kurzzeitpflege" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Kurzzeitpflege nutzen</a>
              </div>

              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Vergleiche</p>
                <a href="/pflegeheim-kosten-deutschland" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflegeheim-Kosten Deutschland</a>
                <a href="/pflegeheim-kostenvergleich" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflegeheim-Kostenvergleich</a>
                <a href="/24h-pflege-vs-pflegeheim-kosten" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› 24h-Pflege vs. Pflegeheim: Kosten</a>
              </div>

            </div>
          </div>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
