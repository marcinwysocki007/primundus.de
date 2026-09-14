import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gegenueber, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
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
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Tagespflege und 24h-Betreuung?', acceptedAnswer: { '@type': 'Answer', text: 'Tagespflege: Pflegebedürftige verbringen den Tag in einer Tageseinrichtung und kehren abends nach Hause zurück — Angehörige sind entlastet. 24h-Betreuung: Betreuungskraft lebt dauerhaft im Haushalt und ist bei Bedarf auch nachts vor Ort — für Fälle, wo abendliche und nächtliche Betreuung nötig ist.' } },
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
          einleitung="Tagespflege und 24h-Betreuung sind zwei sehr unterschiedliche Modelle. Tagespflege entlastet Angehörige tagsüber und bietet soziale Kontakte für den Pflegebedürftigen — abends kommen alle nach Hause. Eine 24h-Betreuungskraft wohnt mit im Haus und ist sinnvoll, wenn Tag und Nacht Betreuung nötig ist."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="unterschied" titel="Der grundlegende Unterschied">
            <Tabelle
              titel=""
              kopf={["Kriterium", "Tagespflege", "24h-Betreuung (Primundus)"]}
              zeilen={[
                ['Verfügbarkeit', 'Nur tagsüber (ca. 6–10 Std.)', 'Lebt im Haushalt, bei Bedarf auch nachts'],
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
            <Gegenueber
              seiten={[
                {
                  titel: 'Tagespflege — Kosten und Kassenzuschüsse',
                  ton: 'taupe',
                  text: 'Tagespflege hat ein eigenes Kassenzuschuss-Budget unabhängig von Pflegegeld und Sachleistungen: PG 2 = 721 €/Monat, PG 3 = 1.357 €/Monat, PG 4 = 1.685 €/Monat, PG 5 = 2.085 €/Monat. Die tatsächlichen Kosten einer Tagespflegeeinrichtung: ca. 800–2.000 €/Monat je nach Region und Einrichtung. Eigenanteil kann gering oder null sein.',
                  punkte: ['Zusätzlich: Pflegegeld (anteilig), Entlastungsbetrag (131 €), Fahrtkosten-Zuschuss möglich.'],
                },
                {
                  titel: '24h-Pflege zuhause — Kosten und Kassenzuschüsse',
                  ton: 'taupe',
                  text: 'Gesamtkosten 2.200–3.500 €/Monat. Mit Pflegegeld (statt Sachleistungen) und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1.650–2.050 €/Monat. 24h-Betreuung, Haushalt und Gesellschaft inklusive.',
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wann-was" titel="Wann ist was sinnvoll?">
            <Gegenueber
              seiten={[
                {
                  titel: 'Tagespflege sinnvoll wenn…',
                  ton: 'gruen',
                  punkte: [
                    'Angehörige tagsüber arbeiten und entlastet werden wollen',
                    'Soziale Kontakte und Gruppenaktivitäten wichtig sind',
                    'Abends und nachts keine Betreuung nötig ist',
                    'Kein nächtliches Weglaufen oder Unruhe',
                    'Kosten durch das Tagespflege-Budget vollständig gedeckt',
                  ],
                },
                {
                  titel: '24h-Betreuung sinnvoll wenn…',
                  ton: 'taupe',
                  punkte: [
                    'Betreuung auch abends und nachts nötig ist',
                    'Demenz mit Orientierungslosigkeit oder Weglaufen',
                    'Angehörige können die Abende/Nächte nicht übernehmen',
                    'Haushaltsführung vollständig übernommen werden soll',
                    'Pflegebedarf über den ganzen Tag verteilt ist',
                  ],
                },
              ]}
            />
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
                { q: 'Was ist der Unterschied zwischen Tagespflege und 24h-Betreuung?', a: 'Tagespflege: Pflegebedürftige verbringen den Tag in einer Einrichtung, abends nach Hause. 24h-Betreuung: Kraft lebt dauerhaft im Haushalt, bei Bedarf auch nachts vor Ort — für Fälle, wo Tag und Nacht Betreuung nötig ist.' },
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
