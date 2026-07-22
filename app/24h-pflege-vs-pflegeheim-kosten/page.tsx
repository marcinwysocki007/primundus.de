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
  { id: 'kosten', title: 'Die Kosten im direkten Vergleich' },
  { id: 'pflegeheim', title: 'Was das Pflegeheim kostet' },
  { id: '24h', title: 'Was 24h-Pflege kostet' },
  { id: 'qualitaet', title: 'Mehr als nur Kosten' },
  { id: 'wann-heim', title: 'Wann ist das Pflegeheim besser?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2026 | Primundus',
  description: 'Pflegeheim: Ø 2.871 €/Monat Eigenanteil. 24h-Pflege: ab ca. 1.500 €/Monat nach Kassenzuschüssen. Vollständiger Kostenvergleich mit allen Zahlen für 2026.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten/' },
  openGraph: {
    title: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2026 | Primundus',
    description: 'Was kostet mehr — Pflegeheim oder 24h-Pflege? Vollständiger Vergleich mit aktuellen Zahlen 2026.',
    url: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten/',
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
    headline: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche/' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege vs. Pflegeheim', item: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet ein Pflegeheim 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit 2.871 Euro pro Monat im ersten Jahr. Er steigt mit der Aufenthaltsdauer (Zuschläge der Pflegekasse nach 12, 24 und 36 Monaten). Darin sind Pflegekosten, Unterkunft, Verpflegung und Investitionsumlage enthalten.' } },
      { '@type': 'Question', name: 'Was kostet 24h-Pflege im Vergleich zum Pflegeheim?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Primundus kostet 24h-Pflege 2.200–3.500 €/Monat brutto. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3), Entlastungsbetrag (131 €/Monat) und Entlastungsbudget (ca. 295 €/Monat) sinkt der Eigenanteil auf ca. 1.700–2.000 €/Monat — oft deutlich weniger als ein Pflegeheim.' } },
      { '@type': 'Question', name: 'Wann ist ein Pflegeheim günstiger als 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Ab dem zweiten oder dritten Jahr können die Pflegekasse-Zuschläge im Pflegeheim den Eigenanteil deutlich senken — nach 24 Monaten übernimmt die Kasse 30 % mehr. Bei Pflegegrad 5 mit sehr hohem Pflege- und Behandlungsbedarf kann das Pflegeheim unter bestimmten Umständen günstiger werden.' } },
      { '@type': 'Question', name: 'Ist 24h-Pflege zuhause besser als Pflegeheim?', acceptedAnswer: { '@type': 'Answer', text: 'Für die meisten Pflegesituationen ja — die vertraute Umgebung verlangsamt Demenzverläufe, individuelle 1:1-Betreuung ist möglich und der Eigenanteil ist oft geringer. Ein Pflegeheim ist besser wenn intensivmedizinische Behandlung rund um die Uhr nötig ist oder kein geeigneter Wohnraum vorhanden ist.' } },
    ],
  },
]

export default function VsKosten() {
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
            <a href="/vergleiche/" className="hover:text-[#8B7355] transition-colors">Vergleiche</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">24h-Pflege vs. Pflegeheim</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24h-Pflege vs. Pflegeheim — Kostenvergleich 2026
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Der Pflegeheim-Eigenanteil liegt 2026 bundesweit bei durchschnittlich 2.871 Euro pro Monat — und stieg 2024 um weitere 211 Euro. Bei der 24h-Pflege zuhause sinkt der Eigenanteil mit Kassenzuschüssen bei Pflegegrad 3 auf ca. 1.700–2.000 Euro. Wer nur die Bruttokosten vergleicht, trifft die falsche Entscheidung.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Pflegeheim-Eigenanteil 2026: Ø 2.871 €/Monat (1. Jahr) — steigt jährlich',
                '24h-Pflege zuhause: 2.200–3.500 €/Monat brutto bei Primundus',
                'Nach Kassenzuschüssen (PG 3): Eigenanteil ca. 1.700–2.000 €/Monat',
                '24h-Pflege ist oft günstiger UND bietet mehr individuelle Betreuung',
                'Pflegeheim kann nach 2+ Jahren durch Kassenzuschläge günstiger werden',
                'Vertraute Umgebung verlangsamt Demenzverläufe — gesundheitlicher Mehrwert',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 — Grafik */}
          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die Kosten im direkten Vergleich
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der entscheidende Vergleich ist nicht Brutto gegen Brutto — sondern der tatsächliche Eigenanteil nach allen Kassenzuschüssen. Und dabei schneidet die 24h-Pflege zuhause in den meisten Fällen besser ab.
          </p>
          <GrafikKostenvergleich />

          {/* SECTION 2 */}
          <h2 id="pflegeheim" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was das Pflegeheim wirklich kostet
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Pflegeheimpreis besteht aus vier Komponenten. Die Pflegekasse übernimmt einen einheitlichen Betrag je Pflegegrad — alles darüber ist Eigenanteil.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Pflegeheimkosten 2026 — was setzt sich zusammen</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegebedingter Eigenanteil (EEE)', 'Ø 1.132 €/Monat', 'Identisch in allen Heimen eines Bundeslandes'],
                    ['Unterkunft & Verpflegung', 'Ø 900 €/Monat', 'Je nach Zimmerausstattung und Region'],
                    ['Investitionsumlage', 'Ø 500–600 €/Monat', 'Für Gebäude, Ausstattung — zahlt Bewohner'],
                    ['Ausbildungsumlage', 'ca. 60–100 €/Monat', 'Seit 2020 bundeseinheitlich'],
                    ['Gesamteigenanteil (Ø 1. Jahr)', '2.871 €/Monat', 'Bundesweiter Durchschnitt 2026'],
                  ].map(([pos, wert, hinweis], i) => (
                    <tr key={pos} className={i === 4 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{pos}</td>
                      <td className={`px-5 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 4 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{wert}</td>
                      <td className="px-5 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Quelle: vdek Pflegeversicherungsbericht 2024 · Bundesweiter Durchschnitt</p>
            </div>
          </div>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.15)] rounded-2xl p-5 mb-6">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Wichtig: Der Eigenanteil steigt jährlich</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Im Pflegeheim steigt der Eigenanteil typischerweise 3–5 % pro Jahr — weil Personalkosten steigen aber die Kassenzuschüsse eingefroren sind (bis Jan. 2028). 2024 stieg der Eigenanteil um durchschnittlich 211 €/Monat.
            </p>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Mehr zum Thema:{' '}
            <a href="/pflegeheim-kosten-deutschland/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegeheim Kosten Deutschland 2026 — vollständige Übersicht</a>
          </p>

          {/* SECTION 3 */}
          <h2 id="24h" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was 24h-Pflege wirklich kostet
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei Primundus kostet 24h-Pflege 2.200–3.500 Euro pro Monat — je nach Pflegebedarf. Mit allen Kassenzuschüssen sinkt der tatsächliche Eigenanteil deutlich.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Eigenanteil 24h-Pflege nach Kassenzuschüssen — Pflegegrad 3</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Betreuungskosten Primundus', '2.700 €/Monat', 'neutral'],
                    ['Kost & Logis Betreuungskraft', '250 €/Monat', 'neutral'],
                    ['– Pflegegeld PG 3', '– 599 €/Monat', 'positive'],
                    ['– Entlastungsbetrag', '– 131 €/Monat', 'positive'],
                    ['– Entlastungsbudget (anteilig)', '– ca. 295 €/Monat', 'positive'],
                    ['Eigenanteil', 'ca. 1.925 €/Monat', 'result'],
                  ].map(([pos, wert, type], i) => (
                    <tr key={pos} className={type === 'result' ? 'bg-[#EBF5F0]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{pos}</td>
                      <td className={`px-5 py-3 text-[14px] font-bold text-right border-b border-[#E5E3DF] ${type === 'positive' ? 'text-[#3D7A5C]' : type === 'result' ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>{wert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 4 */}
          <h2 id="qualitaet" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Mehr als nur Kosten — was wirklich zählt
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Kostenvergleich ist wichtig — aber die Entscheidung für oder gegen ein Pflegeheim hängt von mehr ab als nur dem Preis.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">24h-Pflege zuhause</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Pflegeheim</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Eigenanteil/Monat (PG 3)', 'ca. 1.700–2.000 €', 'Ø 2.871 € (steigend)'],
                    ['Umgebung', 'Eigenes Zuhause', 'Neue, fremde Umgebung'],
                    ['Betreuungsintensität', '1:1 rund um die Uhr', 'Geteilt, nach Dienstplan'],
                    ['Tagesrhythmus', 'Vollständig eigener Rhythmus', 'Heimstruktur und -zeiten'],
                    ['Angehörige', 'Täglich einbindbar', 'Besuchszeiten'],
                    ['Demenz-Verlauf', 'Langsamer durch Vertrautheit', 'Häufig Verschlechterung durch Umzug'],
                    ['Flexibilität', 'Täglich kündbar', 'Meist Kündigungsfristen'],
                    ['Ersatz bei Ausfall', 'Primundus stellt sofort Ersatz', 'Immer Personal vorhanden'],
                  ].map(([kriterium, zuhause, heim], i) => (
                    <tr key={kriterium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{kriterium}</td>
                      <td className="px-5 py-3 text-[14px] text-[#3D7A5C] font-medium border-b border-[#E5E3DF]">{zuhause}</td>
                      <td className="px-5 py-3 text-[14px] text-[#8B8B8B] border-b border-[#E5E3DF]">{heim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 5 */}
          <h2 id="wann-heim" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann ist das Pflegeheim die bessere Wahl?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            In bestimmten Situationen ist das Pflegeheim tatsächlich die bessere oder einzige Option:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Intensivmedizinische Behandlungspflege', desc: 'Wenn rund um die Uhr medizinische Fachkräfte notwendig sind — z.B. Beatmung, kontinuierliche Medikamentenpumpen, komplexe Wundversorgung. Das übersteigt das was eine 24h-Betreuungskraft leisten kann.' },
              { title: 'Kein geeigneter Wohnraum', desc: 'Wenn die Wohnung so klein ist dass kein Zimmer für die Betreuungskraft vorhanden ist, oder wenn Umbaumaßnahmen nicht möglich sind.' },
              { title: 'Expliziter Wunsch des Betroffenen', desc: 'Wenn der pflegebedürftige Mensch selbst — solange noch entscheidungsfähig — ins Pflegeheim möchte, um Gemeinschaft zu erleben.' },
              { title: 'Langzeit finanziell', desc: 'Ab dem 3. Jahr im Pflegeheim steigen die Kassenzuschläge auf 50 % mehr — das kann den Eigenanteil erheblich senken. Bei sehr hohem Pflegegrad kann das die Rechnung zugunsten des Heims kippen.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Was zuhause möglich ist:{' '}
            <a href="/was-ist-24-stunden-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was ist 24-Stunden-Pflege? — alle Fakten</a>
            {' · '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kosten der 24h-Pflege im Detail</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zum Kostenvergleich
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kostet ein Pflegeheim 2026?', a: 'Der durchschnittliche Eigenanteil beträgt 2026 bundesweit 2.871 €/Monat im ersten Jahr. Er setzt sich zusammen aus pflegebedingtem Eigenanteil (Ø 1.132 €), Unterkunft & Verpflegung (Ø 900 €) und Investitionsumlage (Ø 500–600 €). Tendenz steigend.' },
              { q: 'Was kostet 24h-Pflege im Vergleich zum Pflegeheim?', a: 'Bei Primundus 2.200–3.500 €/Monat brutto. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.700–2.000 €/Monat — oft deutlich günstiger als ein Pflegeheim.' },
              { q: 'Ist 24h-Pflege zuhause besser als ein Pflegeheim?', a: 'Für die meisten Pflegesituationen ja — günstigerer Eigenanteil, eigenes Zuhause, individuelle 1:1-Betreuung, kein Umzugsstress. Ein Pflegeheim ist besser bei intensivmedizinischem Dauerbedarf oder fehlendem Wohnraum.' },
              { q: 'Wann kann das Pflegeheim günstiger werden?', a: 'Ab dem dritten Jahr im Pflegeheim steigen die Kassenzuschläge auf 50 % des pflegebedingten Eigenanteils. Bei sehr hohem Pflegegrad (PG 4–5) kann das langfristig die Rechnung zugunsten des Heims ändern.' },
              { q: 'Was zahlt die Pflegekasse im Pflegeheim?', a: 'Einen einheitlichen monatlichen Betrag je Pflegegrad für die Pflegekosten (Sachleistungen vollstationär: PG 2 = 770 €, PG 3 = 1.262 €, PG 4 = 1.775 €, PG 5 = 2.005 €). Unterkunft, Verpflegung und Investitionsumlage trägt immer der Bewohner selbst.' },
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
