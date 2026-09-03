import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('tagespflege-vs-24h-betreuung', '25. April 2026')

const SECTIONS = [
  { id: 'unterschied', title: 'Der grundlegende Unterschied' },
  { id: 'kosten', title: 'Kostenvergleich 2026' },
  { id: 'wann-was', title: 'Wann was sinnvoll ist' },
  { id: 'kombination', title: 'Tagespflege + 24h kombinieren?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Tagespflege vs. 24h-Betreuung — Vergleich 2026 | Primundus',
  description: 'Tagespflege oder 24h-Betreuung zuhause? Kostenvergleich, Kassenzuschüsse und wann welche Form sinnvoll ist — vollständiger Vergleich für 2026.',
  alternates: { canonical: 'https://primundus.de/tagespflege-vs-24h-betreuung' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Tagespflege vs. 24h-Betreuung 2026 | Primundus',
    description: 'Vollständiger Vergleich: Kosten, Leistungen und wann welche Pflegeform besser passt.',
    url: 'https://primundus.de/tagespflege-vs-24h-betreuung',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tagespflege vs. 24h-Betreuung — Vergleich 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/tagespflege-vs-24h-betreuung',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
      { '@type': 'ListItem', position: 3, name: 'Tagespflege vs. 24h', item: 'https://primundus.de/tagespflege-vs-24h-betreuung' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Tagespflege und 24h-Betreuung?', acceptedAnswer: { '@type': 'Answer', text: 'Tagespflege: Pflegebedürftige verbringen den Tag in einer Tageseinrichtung und kehren abends nach Hause zurück — Angehörige sind entlastet. 24h-Betreuung: Betreuungskraft lebt dauerhaft im Haushalt, ist rund um die Uhr anwesend — für Fälle wo abendliche und nächtliche Betreuung nötig ist.' } },
      { '@type': 'Question', name: 'Was zahlt die Pflegekasse für Tagespflege?', acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekasse zahlt für Tagespflege ein eigenes Budget: PG 2 = 721 €/Monat, PG 3 = 1.357 €/Monat, PG 4 = 1.685 €/Monat, PG 5 = 2.085 €/Monat. Dieses Budget ist vom Pflegegeld und den Sachleistungen unabhängig — es kommt obendrauf.' } },
    ],
  },
]

export default function TagespflegeVs24h() {
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
            <span className="text-pm-ink">Tagespflege vs. 24h</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Tagespflege vs. 24h-Betreuung — Vergleich 2026
          </h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Tagespflege und 24h-Betreuung sind zwei sehr unterschiedliche Modelle. Tagespflege entlastet Angehörige tagsüber und bietet soziale Kontakte für den Pflegebedürftigen — abends kommen alle nach Hause. Eine 24h-Betreuungskraft ist rund um die Uhr da und sinnvoll wenn Tag und Nacht Betreuung nötig ist.
          </p>

          <h2 id="unterschied" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-6 mb-4 leading-snug">
            Der grundlegende Unterschied
          </h2>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    <th className="px-5 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">Tagespflege</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-pm-taupe text-left border-b border-pm-line">24h-Betreuung (Primundus)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Verfügbarkeit', 'Nur tagsüber (ca. 6–10 Std.)', 'Rund um die Uhr'],
                    ['Nachtbetreuung', 'Nein', 'Ja'],
                    ['Ort', 'Externe Einrichtung', 'Eigenes Zuhause'],
                    ['Soziale Kontakte', 'Viele (Gruppenangebote)', '1:1-Beziehung zur Kraft'],
                    ['Angehörigen-Entlastung', 'Tagsüber', 'Rund um die Uhr'],
                    ['Kosten/Monat', '400–2.000+ €', '2.200–3.500 €'],
                    ['Kassenzuschuss', 'Eigenes Tages-/Nachtpflegebudget', 'Pflegegeld + Entlastungsbudget'],
                    ['Demenzbetreuung', 'Begrenzt (fremde Umgebung)', 'Besser (vertrautes Zuhause)'],
                  ].map(([kriterium, tages, pflege24], i) => (
                    <tr key={kriterium} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{kriterium}</td>
                      <td className="px-5 py-3 text-[14px] text-pm-body border-b border-pm-line">{tages}</td>
                      <td className="px-5 py-3 text-[14px] font-semibold text-pm-green border-b border-pm-line">{pflege24}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="kosten" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Kostenvergleich 2026 — mit Kassenzuschüssen
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">Tagespflege — Kosten und Kassenzuschüsse</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-3">
                Tagespflege hat ein eigenes Kassenzuschuss-Budget unabhängig von Pflegegeld und Sachleistungen: PG 2 = 721 €/Monat, PG 3 = 1.357 €/Monat, PG 4 = 1.685 €/Monat, PG 5 = 2.085 €/Monat. Die tatsächlichen Kosten einer Tagespflegeeinrichtung: ca. 800–2.000 €/Monat je nach Region und Einrichtung. Eigenanteil kann gering oder null sein.
              </p>
              <p className="text-[13px] text-pm-mute">Zusätzlich: Pflegegeld (anteilig), Entlastungsbetrag (131 €), Fahrtkosten-Zuschuss möglich.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">24h-Pflege zuhause — Kosten und Kassenzuschüsse</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-3">
                Gesamtkosten 2.200–3.500 €/Monat. Mit Pflegegeld (statt Sachleistungen), Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1.500–1.900 €/Monat. 24h-Betreuung, Haushalt und Gesellschaft rund um die Uhr inklusive.
              </p>
            </div>
          </div>

          <h2 id="wann-was" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann ist was sinnvoll?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                label: 'Tagespflege sinnvoll wenn…',
                items: [
                  'Angehörige tagsüber arbeiten und entlastet werden wollen',
                  'Soziale Kontakte und Gruppenaktivitäten wichtig sind',
                  'Abends und nachts keine Betreuung nötig ist',
                  'Kein nächtliches Weglaufen oder Unruhe',
                  'Kosten durch das Tagespflege-Budget vollständig gedeckt',
                ],
                color: 'bg-pm-mint border-[rgba(61,122,92,0.2)]',
                textColor: 'text-pm-green-deep',
              },
              {
                label: '24h-Betreuung sinnvoll wenn…',
                items: [
                  'Betreuung auch abends und nachts nötig ist',
                  'Demenz mit Orientierungslosigkeit oder Weglaufen',
                  'Angehörige können die Abende/Nächte nicht übernehmen',
                  'Haushaltsführung vollständig übernommen werden soll',
                  'Pflegebedarf über den ganzen Tag verteilt ist',
                ],
                color: 'bg-pm-shell border-[rgba(139,115,85,0.2)]',
                textColor: 'text-pm-taupe-ink',
              },
            ].map((block) => (
              <div key={block.label} className={`rounded-2xl p-5 border ${block.color}`}>
                <p className={`text-[13px] font-bold uppercase tracking-[0.08em] mb-3 ${block.textColor}`}>{block.label}</p>
                <ul className="space-y-1.5">
                  {block.items.map((item) => (
                    <li key={item} className={`text-[14px] leading-relaxed ${block.textColor} flex gap-2`}>
                      <span className="flex-shrink-0 mt-0.5">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="kombination" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Tagespflege + 24h-Kraft kombinieren?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Ja — das ist möglich und kann sinnvoll sein. Tagespflege-Budget und Pflegegeld (oder Sachleistungen) laufen parallel. Beispiel: Pflegebedürftiger geht 3 Tage/Woche in die Tagespflege (soziale Kontakte, Gruppenangebote) — an den anderen Tagen und abends ist die 24h-Kraft da.
          </p>
          <p className="text-[15px] text-pm-body mb-10">
            → Alle Kombinationsmöglichkeiten:{' '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Finanzierung der 24h-Pflege</a>
            {' · '}
            <a href="/24h-pflege-vs-ambulante-pflege" className="text-pm-taupe underline hover:text-pm-taupe-deep">24h-Pflege vs. ambulante Pflege</a>
          </p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist der Unterschied zwischen Tagespflege und 24h-Betreuung?', a: 'Tagespflege: Pflegebedürftige verbringen den Tag in einer Einrichtung, abends nach Hause. 24h-Betreuung: Kraft lebt dauerhaft im Haushalt, rund um die Uhr anwesend — für Fälle wo Tag und Nacht Betreuung nötig ist.' },
              { q: 'Was zahlt die Pflegekasse für Tagespflege?', a: 'Eigenes Tagespflege-Budget: PG 2 = 721 €, PG 3 = 1.357 €, PG 4 = 1.685 €, PG 5 = 2.085 €/Monat. Unabhängig von Pflegegeld und Sachleistungen.' },
              { q: 'Wann reicht Tagespflege nicht aus?', a: 'Wenn Betreuung auch abends oder nachts nötig ist, bei Demenz mit nächtlicher Unruhe oder Weglaufen, wenn Angehörige keine Abende/Nächte übernehmen können.' },
              { q: 'Kann man Tagespflege und 24h-Kraft kombinieren?', a: 'Ja — Tagespflege-Budget und Pflegegeld laufen parallel. Sinnvoll wenn soziale Gruppenangebote gewünscht sind und abends/nachts trotzdem eine Kraft da sein soll.' },
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
          <Weiterlesen aktuell="tagespflege-vs-24h-betreuung" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
