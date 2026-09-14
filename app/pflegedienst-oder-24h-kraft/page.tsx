import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Werte,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegedienst-oder-24h-kraft', '25. April 2026')

const SECTIONS = [
  { id: 'unterschied', title: 'Der grundlegende Unterschied' },
  { id: 'kosten', title: 'Kostenvergleich 2026' },
  { id: 'wann-was', title: 'Wann was sinnvoll ist' },
  { id: 'kombination', title: 'Kombination möglich' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegedienst oder 24h-Kraft — was ist besser? | Primundus',
  description: 'Ambulanter Pflegedienst oder 24h-Betreuungskraft? Vollständiger Vergleich: Kosten, Leistungen, wann was sinnvoll ist und wann eine Kombination am besten trägt.',
  alternates: { canonical: 'https://primundus.de/pflegedienst-oder-24h-kraft' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegedienst oder 24h-Kraft? | Primundus',
    description: 'Ambulanter Pflegedienst vs. 24h-Betreuungskraft — ehrlicher Vergleich 2026.',
    url: 'https://primundus.de/pflegedienst-oder-24h-kraft',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegedienst oder 24h-Kraft — was ist besser?',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegedienst-oder-24h-kraft',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
      { '@type': 'ListItem', position: 3, name: 'Pflegedienst oder 24h-Kraft', item: 'https://primundus.de/pflegedienst-oder-24h-kraft' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen Pflegedienst und 24h-Kraft?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Pflegedienst kommt zu definierten Zeiten (typisch 1–3 Mal täglich) und geht danach wieder. Eine 24h-Betreuungskraft lebt dauerhaft im Haushalt und ist bei Bedarf auch nachts da. Der Pflegedienst ist auf Grundpflege und Behandlungspflege spezialisiert; die 24h-Kraft übernimmt zusätzlich Haushalt, Gesellschaft und Begleitung.' },
      },
    ],
  },
]

export default function PflegedienstOder24hKraft() {
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
            { label: "Pflegedienst oder 24h-Kraft" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="Pflegedienst oder 24h-Kraft — was ist die bessere Wahl?"
          einleitung="Ambulanter Pflegedienst oder 24h-Betreuungskraft zuhause — das ist oft die erste Frage wenn Pflege notwendig wird. Beide sind legitime Lösungen. Welche besser passt, hängt vom Pflegebedarf, den Lebensumständen und dem Budget ab. Und sehr oft ist die Antwort: beide zusammen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="unterschied" titel="Der grundlegende Unterschied">
            <Text>
              Der entscheidende Unterschied ist nicht was geleistet wird — sondern wann und wie kontinuierlich.
            </Text>
            <Tabelle
              titel=""
              kopf={["Kriterium", "Ambulanter Pflegedienst", "24h-Betreuungskraft"]}
              zeilen={[
                ['Verfügbarkeit', '1–3 Einsätze täglich, danach weg', 'Lebt im Haushalt, bei Bedarf auch nachts'],
                ['Nachtbereitschaft', 'Kein Personal nachts', 'Bei Bedarf da'],
                ['Haushalt & Kochen', 'Nicht im Leistungsspektrum', 'Vollständig übernommen'],
                ['Gesellschaft', 'Nur während Einsatz', 'Ganztägige Begleitung'],
                ['Demenzbetreuung', 'Schwierig ohne Kontinuität', 'Vertraute Bezugsperson'],
                ['Behandlungspflege', 'Ja — Kernkompetenz', 'Nein — übernimmt Pflegedienst'],
                ['Kosten/Monat', '800–2.500 €, oft durch KV gedeckt', '2.200–3.500 €, mit Pflegegeld'],
                ['Kassenzuschuss', 'Sachleistungen PG 2–5', 'Pflegegeld + Entlastungsbudget'],
                ['Kündigung', 'Vertragliche Fristen', 'Täglich kündbar (Primundus)'],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kostenvergleich 2026">
            <Gegenueber
              seiten={[
                {
                  titel: 'Ambulanter Pflegedienst',
                  ton: 'taupe',
                  text: '800–2.500 €/Monat je nach Einsatzhäufigkeit. Die Pflegekasse zahlt Sachleistungen direkt an den Dienst: PG 2 = 796 €/Mo, PG 3 = 1.497 €/Mo, PG 4 = 1.859 €/Mo, PG 5 = 2.299 €/Mo. Bei moderatem Pflegebedarf kann der Eigenanteil sehr gering oder null sein.',
                  punkte: ['Bei hohem Pflegebedarf übersteigen die Kosten schnell den Sachleistungsrahmen.'],
                },
                {
                  titel: '24h-Betreuungskraft (Primundus)',
                  ton: 'taupe',
                  text: '2.200–3.500 €/Monat. Mit Pflegegeld (347–990 €/Mo), Entlastungsbetrag (131 €/Mo), Entlastungsbudget und Steuerabzug sinkt der Eigenanteil bei PG 3 auf ca. 1.500–2.000 €/Monat. Inklusive: Haushalt, Kochen, Gesellschaft, Nacht — alles in einem.',
                  punkte: ['Kombination mit Pflegedienst für Behandlungspflege möglich — Kosten dann kumuliert aber Kassenzuschüsse laufen parallel.'],
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wann-was" titel="Wann ist was sinnvoll?">
            <Gegenueber
              seiten={[
                {
                  titel: 'Ambulanter Pflegedienst reicht wenn…',
                  ton: 'gruen',
                  punkte: ['Pflegebedarf auf 1–2 Einsätze täglich begrenzt', 'Angehörige den Rest verlässlich übernehmen', 'Keine Nachtbetreuung nötig', 'Kosten vollständig durch Sachleistungen gedeckt', 'Behandlungspflege (Injektionen, Wunden) im Vordergrund'],
                },
                {
                  titel: '24h-Betreuungskraft sinnvoll wenn…',
                  ton: 'taupe',
                  punkte: ['Pflegebedarf über den ganzen Tag verteilt', 'Nächtliche Unruhe, Stürze oder Orientierungslosigkeit', 'Demenz mit hohem Betreuungsbedarf', 'Angehörige nicht dauerhaft vor Ort', 'Haushalt vollständig übernommen werden soll'],
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kombination" titel="Kombination — oft die beste Lösung">
            <Text>
              Die häufigste und meist beste Lösung ist die Kombination: Eine 24h-Betreuungskraft übernimmt Grundpflege, Haushalt, Gesellschaft und Nacht. Der ambulante Pflegedienst kommt täglich für Behandlungspflege (Injektionen, Verbandswechsel). Beide Kassenzuschüsse laufen parallel.
            </Text>
            <Kasten augenbraue="Rechenbeispiel Kombination — PG 3" ton="gruen">
              <Werte zeilen={[[<>24h-Kraft (Primundus)</>, <>2.200–3.500 €/Mo</>], [<>Ambulanter Dienst (Behandlungspflege)</>, <>ca. 300–600 €/Mo</>], [<>Gesamtkosten brutto</>, <>ca. 2.500–4.100 €/Mo</>], [<>− Pflegegeld PG 3</>, <>− 599 €/Mo</>], [<>− Sachleistungen (für Pflegedienst)</>, <>− bis 1.497 €/Mo</>], [<>− Entlastungsbetrag + Budget</>, <>− ca. 420 €/Mo</>], [<>Eigenanteil ca.</>, <>ca. 1.000–1.800 €/Mo</>]]} />
            </Kasten>
            <MehrDazu
              label="Alle Kombinationsmöglichkeiten:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege" }, { href: "/kombinationsleistung-pflege", text: "Kombinationsleistung erklärt" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist der Unterschied zwischen Pflegedienst und 24h-Kraft?', a: 'Pflegedienst: kommt zu festen Zeiten, geht dann wieder. Kernkompetenz Grund- und Behandlungspflege. 24h-Kraft: lebt im Haushalt, ist bei Bedarf auch nachts da — übernimmt zusätzlich Haushalt, Kochen, Gesellschaft.' },
                { q: 'Ist ambulante Pflege günstiger als eine 24h-Kraft?', a: 'Bei moderatem Bedarf ja — Sachleistungen decken oft den Pflegedienst vollständig. Bei hohem Gesamtbedarf (Haushalt, Betreuung, Nacht) ist die 24h-Kraft oft günstiger als mehrere Dienste kombiniert.' },
                { q: 'Kann man Pflegedienst und 24h-Kraft kombinieren?', a: 'Ja — das ist die häufigste Lösung bei komplexem Bedarf. 24h-Kraft für Grundpflege/Haushalt/Nacht, Pflegedienst für Behandlungspflege. Beide Kassenzuschüsse (Pflegegeld + Sachleistungen) laufen parallel.' },
                { q: 'Wann reicht ein ambulanter Pflegedienst nicht mehr aus?', a: 'Wenn nächtliche Betreuung nötig ist, Demenz kontinuierliche Anwesenheit erfordert, Angehörige die verbleibende Zeit nicht abdecken können, oder wenn der Gesamtaufwand (Haushalt, Kochen, Begleitung) den Pflegedienst übersteigt.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegedienst-oder-24h-kraft" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
