import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'kosten', title: 'Was kostet ein Pflegeheim 2026?' },
  { id: 'eigenanteil', title: 'Eigenanteil & regionale Unterschiede' },
  { id: 'kassenzuschuss', title: 'Kassenzuschuss' },
  { id: 'vergleich', title: 'Pflegeheim vs. 24h-Pflege zuhause' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegeheim Kosten Deutschland 2026 — Eigenanteil & Vergleich | Primundus',
  description: 'Pflegeheim Kosten 2026: Eigenanteil Ø 2.871 €/Monat (bundesweit). Regionale Unterschiede, Kassenzuschüsse und warum 24h-Pflege zuhause oft günstiger ist.',
  alternates: { canonical: 'https://primundus.de/pflegeheim-kosten-deutschland/' },
  openGraph: {
    title: 'Pflegeheim Kosten Deutschland 2026 | Primundus',
    description: 'Pflegeheimkosten 2026: Durchschnitt, regionale Unterschiede und Vergleich mit 24h-Pflege zuhause.',
    url: 'https://primundus.de/pflegeheim-kosten-deutschland/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegeheim Kosten Deutschland 2026 — Eigenanteil und Vergleich',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegeheim-kosten-deutschland/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegeheim Kosten', item: 'https://primundus.de/pflegeheim-kosten-deutschland/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet ein Pflegeheim in Deutschland 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit ca. 2.871 €/Monat (Pflege + Unterkunft + Verpflegung + Investitionskosten). Die Pflegekasse zahlt dazu je nach Pflegegrad 770–2.005 €/Monat — deckt aber nie die vollen Kosten.' } },
      { '@type': 'Question', name: 'Ist das Pflegeheim oder 24h-Pflege zuhause günstiger?', acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege zuhause kann günstiger sein: Bei PG 3 ist der Eigenanteil mit Primundus (optimiert) ca. 1.500–2.000 €/Monat — also bis zu 1.300 € weniger als im Pflegeheim (Ø 2.871 €/Monat). Dazu kommt der nicht messbare Wert: die vertraute Umgebung.' } },
    ],
  },
]

export default function PflegeheimKosten() {
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
            <span className="text-[#1C1C1C]">Pflegeheim Kosten</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegeheim Kosten Deutschland 2026 — Eigenanteil & Vergleich
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit ca. 2.871 Euro pro Monat — und steigt seit Jahren. Gleichzeitig wissen viele Familien nicht dass 24h-Pflege zuhause bei vergleichbarem Pflegebedarf oft deutlich günstiger ist — und das Leben im eigenen Zuhause erhält.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.15)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Der Eigenanteil im Pflegeheim steigt jedes Jahr</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Der einrichtungseinheitliche Eigenanteil (EEE) hat sich seit 2022 für viele Bewohner erhöht. 2026 liegt der bundesweite Durchschnitt bei ca. 2.871 €/Monat — ohne Garantie auf Stabilität. Die Pflegekasse deckt einen festen Zuschuss — der Rest wird teurer.
            </p>
          </div>

          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was kostet ein Pflegeheim in Deutschland 2026?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Gesamtkosten im Pflegeheim setzen sich aus vier Komponenten zusammen.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Kostenblock', 'Typischer Betrag', 'Wer zahlt'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflege (Eigenanteil)', '800–1.800 €/Monat', 'Bewohner'],
                    ['Unterkunft', '400–800 €/Monat', 'Bewohner'],
                    ['Verpflegung', '200–400 €/Monat', 'Bewohner'],
                    ['Investitionskosten', '200–600 €/Monat', 'Bewohner'],
                    ['Kassenzuschuss Pflege', '770–2.005 €/Monat', 'Pflegekasse (je PG)'],
                    ['Gesamtkosten Heim', '2.500–5.000+ €/Monat', 'Bewohner + Kasse'],
                    ['Eigenanteil Ø bundesweit', 'ca. 2.871 €/Monat', 'Bewohner'],
                  ].map(([block, betrag, wer], i) => (
                    <tr key={block} className={i === 6 ? 'bg-[#FDF0EE]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] border-b border-[#E5E3DF] ${i === 6 ? 'font-bold text-[#8B3E2F]' : 'font-semibold text-[#1C1C1C]'}`}>{block}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 6 ? 'text-[#8B3E2F]' : 'text-[#2E2E2E]'}`}>{betrag}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{wer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Ø-Eigenanteil 2026 gemäß GKV-Spitzenverband · Regionale Unterschiede erheblich</p>
            </div>
          </div>

          <h2 id="eigenanteil" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Eigenanteil nach Bundesland — regionale Unterschiede
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Kosten variieren erheblich — je nach Bundesland und Region. Städte sind in der Regel teurer als ländliche Gebiete.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Region / Bundesland', 'Eigenanteil Ø/Monat (2026)'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Bayern (München)', 'ca. 3.200–4.000 €'],
                    ['Baden-Württemberg', 'ca. 2.800–3.500 €'],
                    ['NRW (Köln, Düsseldorf)', 'ca. 2.800–3.500 €'],
                    ['Sachsen, Thüringen', 'ca. 1.800–2.400 €'],
                    ['Mecklenburg-Vorpommern', 'ca. 1.700–2.200 €'],
                    ['Bundesweit Ø', 'ca. 2.871 €'],
                  ].map(([region, eigenanteil], i) => (
                    <tr key={region} className={i === 5 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] border-b border-[#E5E3DF] ${i === 5 ? 'font-bold text-[#8B7355]' : 'text-[#2E2E2E]'}`}>{region}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 5 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{eigenanteil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte 2026 · Quellen: vdek, GKV-Spitzenverband · Stand April 2026</p>
            </div>
          </div>

          <h2 id="kassenzuschuss" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kassenzuschuss im Pflegeheim
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Pflegekasse zahlt einen festen Zuschuss für vollstationäre Pflege — gestaffelt nach Pflegegrad. Wichtig: Dieser Zuschuss deckt nie alle Kosten.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Kassenzuschuss/Monat (2026)', 'Verbleibt als Eigenanteil'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 2', '770 €/Monat', 'Rest je nach Heim'],
                    ['PG 3', '1.262 €/Monat', 'Rest je nach Heim'],
                    ['PG 4', '1.775 €/Monat', 'Rest je nach Heim'],
                    ['PG 5', '2.005 €/Monat', 'Rest je nach Heim'],
                  ].map(([pg, zuschuss, rest], i) => (
                    <tr key={pg} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{zuschuss}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{rest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Stand 2026 · Unterkunft, Verpflegung und Investitionskosten immer zusätzlich</p>
            </div>
          </div>

          <h2 id="vergleich" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegeheim vs. 24h-Pflege zuhause — direkter Vergleich
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Pflegeheim</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">24h-Pflege Primundus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Eigenanteil Ø (PG 3)', 'ca. 2.871 €/Monat', 'ca. 1.500–2.000 €/Monat*'],
                    ['Umgebung', 'Fremde Einrichtung', 'Eigenes Zuhause'],
                    ['Individualität', 'Heimplan', '1:1-Betreuung'],
                    ['Vertraute Bezugsperson', 'Wechselndes Personal', 'Feste Kraft (8–12 Wo)'],
                    ['Demenzprogress', 'Oft schneller', 'Vertraute Umgebung hilft'],
                    ['Flexibilität', 'Heimvertrag (Fristen)', 'Täglich kündbar'],
                    ['Angehörige', 'Besuchszeiten', 'Immer willkommen'],
                  ].map(([kriterium, heim, pflege24], i) => (
                    <tr key={kriterium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{kriterium}</td>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{heim}</td>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#3D7A5C] border-b border-[#E5E3DF]">{pflege24}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">* PG 3, optimiert mit allen Kassenzuschüssen und Steuerabzug · Stand 2026</p>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständiger Vergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">24h-Pflege vs. Pflegeheim — Kostenvergleich</a>
            {' · '}
            <a href="/eigenanteil-24h-pflege-senken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Eigenanteil senken — alle Möglichkeiten</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kostet ein Pflegeheim in Deutschland 2026?', a: 'Eigenanteil bundesweit Ø ca. 2.871 €/Monat (Pflege + Unterkunft + Verpflegung + Investitionskosten). Je nach Region und Einrichtung 1.700–4.000+ €/Monat. Pflegekasse zahlt 770–2.005 €/Monat je nach Pflegegrad dazu.' },
              { q: 'Was deckt die Pflegekasse im Pflegeheim?', a: 'Die Pflegekasse zahlt einen festen Zuschuss für den Pflegeanteil: PG 2 = 770 €, PG 3 = 1.262 €, PG 4 = 1.775 €, PG 5 = 2.005 €/Monat. Unterkunft, Verpflegung und Investitionskosten trägt der Bewohner selbst.' },
              { q: 'Ist Pflegeheim günstiger als 24h-Pflege zuhause?', a: 'Oft nicht — bei PG 3 ist der Eigenanteil mit 24h-Pflege zuhause (optimiert mit Zuschüssen) ca. 1.500–2.000 €/Monat — also bis zu 1.300 € weniger als im Pflegeheim (Ø 2.871 €/Monat).' },
              { q: 'Was passiert wenn das Geld für das Pflegeheim nicht reicht?', a: 'Wenn Rente und Eigenkapital nicht reichen, werden zunächst Vermögen und unter bestimmten Umständen Kinder zur Zuzahlung herangezogen. Sozialhilfe (§61 SGB XII) springt als letztes Mittel ein.' },
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
