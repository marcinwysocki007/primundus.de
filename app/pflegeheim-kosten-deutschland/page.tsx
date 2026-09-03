import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegeheim-kosten-deutschland', '25. April 2026')

const SECTIONS = [
  { id: 'kosten', title: 'Was kostet ein Pflegeheim 2026?' },
  { id: 'eigenanteil', title: 'Eigenanteil & regionale Unterschiede' },
  { id: 'kassenzuschuss', title: 'Kassenzuschuss' },
  { id: 'vergleich', title: 'Pflegeheim vs. 24h-Pflege zuhause' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegeheim Kosten Deutschland 2026 — Eigenanteil & Vergleich',
  description: 'Pflegeheim Kosten 2026: Eigenanteil Ø 3.364 €/Monat (bundesweit). Regionale Unterschiede, Kassenzuschüsse und warum 24h-Pflege zuhause oft günstiger ist.',
  alternates: { canonical: 'https://primundus.de/pflegeheim-kosten-deutschland' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegeheim Kosten Deutschland 2026 | Primundus',
    description: 'Pflegeheimkosten 2026: Durchschnitt, regionale Unterschiede und Vergleich mit 24h-Pflege zuhause.',
    url: 'https://primundus.de/pflegeheim-kosten-deutschland',
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
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegeheim-kosten-deutschland',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
      { '@type': 'ListItem', position: 3, name: 'Pflegeheim Kosten', item: 'https://primundus.de/pflegeheim-kosten-deutschland' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet ein Pflegeheim in Deutschland 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit ca. 3.364 €/Monat (Pflege + Unterkunft + Verpflegung + Investitionskosten). Die Pflegekasse zahlt dazu je nach Pflegegrad 770–2.005 €/Monat — deckt aber nie die vollen Kosten.' } },
      { '@type': 'Question', name: 'Ist das Pflegeheim oder 24h-Pflege zuhause günstiger?', acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege zuhause kann günstiger sein: Bei PG 3 ist der Eigenanteil mit Primundus (optimiert) ca. 1.500–2.000 €/Monat — also bis zu 1.300 € weniger als im Pflegeheim (Ø 3.364 €/Monat). Dazu kommt der nicht messbare Wert: die vertraute Umgebung.' } },
    ],
  },
]

export default function PflegeheimKosten() {
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
            <a href="/vergleiche" className="hover:text-pm-taupe transition-colors">Vergleiche</a>
            <span>›</span>
            <span className="text-pm-ink">Pflegeheim Kosten</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Pflegeheim Kosten Deutschland 2026 — Eigenanteil & Vergleich
          </h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit ca. 3.364 Euro pro Monat — und steigt seit Jahren. Gleichzeitig wissen viele Familien nicht dass 24h-Pflege zuhause bei vergleichbarem Pflegebedarf oft deutlich günstiger ist — und das Leben im eigenen Zuhause erhält.
          </p>

          <div className="bg-pm-coral-tint border border-[rgba(231,111,99,0.15)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-pm-coral-ink mb-2">Der Eigenanteil im Pflegeheim steigt jedes Jahr</p>
            <p className="text-[14px] text-pm-coral-ink leading-relaxed">
              Der einrichtungseinheitliche Eigenanteil (EEE) hat sich seit 2022 für viele Bewohner erhöht. 2026 liegt der bundesweite Durchschnitt bei ca. 3.364 €/Monat — ohne Garantie auf Stabilität. Die Pflegekasse deckt einen festen Zuschuss — der Rest wird teurer.
            </p>
          </div>

          <h2 id="kosten" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was kostet ein Pflegeheim in Deutschland 2026?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die Gesamtkosten im Pflegeheim setzen sich aus vier Komponenten zusammen.
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Kostenblock', 'Typischer Betrag', 'Wer zahlt'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
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
                    ['Eigenanteil Ø bundesweit', 'ca. 3.364 €/Monat', 'Bewohner'],
                  ].map(([block, betrag, wer], i) => (
                    <tr key={block} className={i === 6 ? 'bg-pm-coral-tint' : i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className={`px-4 py-3 text-[14px] border-b border-pm-line ${i === 6 ? 'font-bold text-pm-coral-ink' : 'font-semibold text-pm-ink'}`}>{block}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-pm-line ${i === 6 ? 'text-pm-coral-ink' : 'text-pm-body'}`}>{betrag}</td>
                      <td className="px-4 py-3 text-[13px] text-pm-mute border-b border-pm-line">{wer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Ø-Eigenanteil 2026 gemäß GKV-Spitzenverband · Regionale Unterschiede erheblich</p>
            </div>
          </div>

          <h2 id="eigenanteil" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Eigenanteil nach Bundesland — regionale Unterschiede
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die Kosten variieren erheblich — je nach Bundesland und Region. Städte sind in der Regel teurer als ländliche Gebiete.
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Region / Bundesland', 'Eigenanteil Ø/Monat (2026)'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
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
                    ['Bundesweit Ø', 'ca. 3.364 €'],
                  ].map(([region, eigenanteil], i) => (
                    <tr key={region} className={i === 5 ? 'bg-pm-shell' : i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className={`px-4 py-3 text-[14px] border-b border-pm-line ${i === 5 ? 'font-bold text-pm-taupe' : 'text-pm-body'}`}>{region}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-pm-line ${i === 5 ? 'text-pm-taupe' : 'text-pm-ink'}`}>{eigenanteil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Richtwerte 2026 · Quellen: vdek, GKV-Spitzenverband · Stand April 2026</p>
            </div>
          </div>

          <h2 id="kassenzuschuss" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Kassenzuschuss im Pflegeheim
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die Pflegekasse zahlt einen festen Zuschuss für vollstationäre Pflege — gestaffelt nach Pflegegrad. Wichtig: Dieser Zuschuss deckt nie alle Kosten.
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Pflegegrad', 'Kassenzuschuss/Monat (2026)', 'Verbleibt als Eigenanteil'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
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
                    <tr key={pg} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-pm-green border-b border-pm-line">{zuschuss}</td>
                      <td className="px-4 py-3 text-[13px] text-pm-mute border-b border-pm-line">{rest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Stand 2026 · Unterkunft, Verpflegung und Investitionskosten immer zusätzlich</p>
            </div>
          </div>

          <h2 id="vergleich" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Pflegeheim vs. 24h-Pflege zuhause — direkter Vergleich
          </h2>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    <th className="px-5 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">Pflegeheim</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-pm-taupe text-left border-b border-pm-line">24h-Pflege Primundus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Eigenanteil Ø (PG 3)', 'ca. 3.364 €/Monat', 'ca. 1.500–2.000 €/Monat*'],
                    ['Umgebung', 'Fremde Einrichtung', 'Eigenes Zuhause'],
                    ['Individualität', 'Heimplan', '1:1-Betreuung'],
                    ['Vertraute Bezugsperson', 'Wechselndes Personal', 'Feste Kraft (8–12 Wo)'],
                    ['Demenzprogress', 'Oft schneller', 'Vertraute Umgebung hilft'],
                    ['Flexibilität', 'Heimvertrag (Fristen)', 'Täglich kündbar'],
                    ['Angehörige', 'Besuchszeiten', 'Immer willkommen'],
                  ].map(([kriterium, heim, pflege24], i) => (
                    <tr key={kriterium} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{kriterium}</td>
                      <td className="px-5 py-3 text-[14px] text-pm-body border-b border-pm-line">{heim}</td>
                      <td className="px-5 py-3 text-[14px] font-semibold text-pm-green border-b border-pm-line">{pflege24}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">* PG 3, optimiert mit allen Kassenzuschüssen und Steuerabzug · Stand 2026</p>
            </div>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Vollständiger Vergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten" className="text-pm-taupe underline hover:text-pm-taupe-deep">24h-Pflege vs. Pflegeheim — Kostenvergleich</a>
            {' · '}
            <a href="/eigenanteil-24h-pflege-senken" className="text-pm-taupe underline hover:text-pm-taupe-deep">Eigenanteil senken — alle Möglichkeiten</a>
          </p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kostet ein Pflegeheim in Deutschland 2026?', a: 'Eigenanteil bundesweit Ø ca. 3.364 €/Monat (Pflege + Unterkunft + Verpflegung + Investitionskosten). Je nach Region und Einrichtung 1.700–4.000+ €/Monat. Pflegekasse zahlt 770–2.005 €/Monat je nach Pflegegrad dazu.' },
              { q: 'Was deckt die Pflegekasse im Pflegeheim?', a: 'Die Pflegekasse zahlt einen festen Zuschuss für den Pflegeanteil: PG 2 = 770 €, PG 3 = 1.262 €, PG 4 = 1.775 €, PG 5 = 2.005 €/Monat. Unterkunft, Verpflegung und Investitionskosten trägt der Bewohner selbst.' },
              { q: 'Ist Pflegeheim günstiger als 24h-Pflege zuhause?', a: 'Oft nicht — bei PG 3 ist der Eigenanteil mit 24h-Pflege zuhause (optimiert mit Zuschüssen) ca. 1.500–2.000 €/Monat — also bis zu 1.300 € weniger als im Pflegeheim (Ø 3.364 €/Monat).' },
              { q: 'Was passiert wenn das Geld für das Pflegeheim nicht reicht?', a: 'Wenn Rente und Eigenkapital nicht reichen, werden zunächst Vermögen und unter bestimmten Umständen Kinder zur Zuzahlung herangezogen. Sozialhilfe (§61 SGB XII) springt als letztes Mittel ein.' },
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
          <Weiterlesen aktuell="pflegeheim-kosten-deutschland" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
