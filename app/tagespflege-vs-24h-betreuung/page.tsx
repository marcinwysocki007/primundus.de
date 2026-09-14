import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
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
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: "Startseite", href: "/" },
            { label: "Vergleiche", href: "/vergleiche" },
            { label: "Tagespflege vs. 24h" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="Tagespflege vs. 24h-Betreuung — Vergleich 2026"
          einleitung="Tagespflege und 24h-Betreuung sind zwei sehr unterschiedliche Modelle. Tagespflege entlastet Angehörige tagsüber und bietet soziale Kontakte für den Pflegebedürftigen — abends kommen alle nach Hause. Eine 24h-Betreuungskraft ist rund um die Uhr da und sinnvoll wenn Tag und Nacht Betreuung nötig ist."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="unterschied" titel="Der grundlegende Unterschied">
            <Tabelle
              titel=""
              kopf={["Kriterium", "Tagespflege", "24h-Betreuung (Primundus)"]}
              zeilen={[
                ['Verfügbarkeit', 'Nur tagsüber (ca. 6–10 Std.)', 'Rund um die Uhr'],
                ['Nachtbetreuung', 'Nein', 'Ja'],
                ['Ort', 'Externe Einrichtung', 'Eigenes Zuhause'],
                ['Soziale Kontakte', 'Viele (Gruppenangebote)', '1:1-Beziehung zur Kraft'],
                ['Angehörigen-Entlastung', 'Tagsüber', 'Rund um die Uhr'],
                ['Kosten/Monat', '400–2.000+ €', '2.200–3.500 €'],
                ['Kassenzuschuss', 'Eigenes Tages-/Nachtpflegebudget', 'Pflegegeld + Entlastungsbudget'],
                ['Demenzbetreuung', 'Begrenzt (fremde Umgebung)', 'Besser (vertrautes Zuhause)'],
              ]}
              betont={2}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kostenvergleich 2026 — mit Kassenzuschüssen">
            {/* VORLAGE: unverändert übernommen */}
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
          </Abschnitt>

          <Abschnitt id="wann-was" titel="Wann ist was sinnvoll?">
            {/* VORLAGE: unverändert übernommen */}
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
          </Abschnitt>

          <Abschnitt id="kombination" titel="Tagespflege + 24h-Kraft kombinieren?">
            <Text>
              Ja — das ist möglich und kann sinnvoll sein. Tagespflege-Budget und Pflegegeld (oder Sachleistungen) laufen parallel. Beispiel: Pflegebedürftiger geht 3 Tage/Woche in die Tagespflege (soziale Kontakte, Gruppenangebote) — an den anderen Tagen und abends ist die 24h-Kraft da.
            </Text>
            <MehrDazu
              label="Alle Kombinationsmöglichkeiten:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege" }, { href: "/24h-pflege-vs-ambulante-pflege", text: "24h-Pflege vs. ambulante Pflege" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist der Unterschied zwischen Tagespflege und 24h-Betreuung?', a: 'Tagespflege: Pflegebedürftige verbringen den Tag in einer Einrichtung, abends nach Hause. 24h-Betreuung: Kraft lebt dauerhaft im Haushalt, rund um die Uhr anwesend — für Fälle wo Tag und Nacht Betreuung nötig ist.' },
                { q: 'Was zahlt die Pflegekasse für Tagespflege?', a: 'Eigenes Tagespflege-Budget: PG 2 = 721 €, PG 3 = 1.357 €, PG 4 = 1.685 €, PG 5 = 2.085 €/Monat. Unabhängig von Pflegegeld und Sachleistungen.' },
                { q: 'Wann reicht Tagespflege nicht aus?', a: 'Wenn Betreuung auch abends oder nachts nötig ist, bei Demenz mit nächtlicher Unruhe oder Weglaufen, wenn Angehörige keine Abende/Nächte übernehmen können.' },
                { q: 'Kann man Tagespflege und 24h-Kraft kombinieren?', a: 'Ja — Tagespflege-Budget und Pflegegeld laufen parallel. Sinnvoll wenn soziale Gruppenangebote gewünscht sind und abends/nachts trotzdem eine Kraft da sein soll.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="tagespflege-vs-24h-betreuung" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
