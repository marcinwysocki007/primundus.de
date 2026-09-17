import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
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
      { '@type': 'Question', name: 'Ist das Pflegeheim oder 24h-Pflege zuhause günstiger?', acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege zuhause kann günstiger sein: Bei PG 3 bleiben mit Primundus nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 €/Monat — beim Grundpreis also rund 2.440 € weniger als im Pflegeheim (Ø 3.364 €/Monat). Dazu kommt der nicht messbare Wert: die vertraute Umgebung.' } },
    ],
  },
]

export default function PflegeheimKosten() {
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
            { label: "Pflegeheim Kosten" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="Pflegeheim Kosten Deutschland 2026 — Eigenanteil & Vergleich"
          einleitung="Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit ca. 3.364 Euro pro Monat — und steigt seit Jahren. Gleichzeitig wissen viele Familien nicht dass 24h-Pflege zuhause bei vergleichbarem Pflegebedarf oft deutlich günstiger ist — und das Leben im eigenen Zuhause erhält."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Der Eigenanteil im Pflegeheim steigt jedes Jahr" ton="koralle">
              <Text>Der einrichtungseinheitliche Eigenanteil (EEE) hat sich seit 2022 für viele Bewohner erhöht. 2026 liegt der bundesweite Durchschnitt bei ca. 3.364 €/Monat — ohne Garantie auf Stabilität. Die Pflegekasse deckt einen festen Zuschuss — der Rest wird teurer.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="kosten" titel="Was kostet ein Pflegeheim in Deutschland 2026?">
            <Text>
              Die Gesamtkosten im Pflegeheim setzen sich aus vier Komponenten zusammen.
            </Text>
            <Tabelle
              titel=""
              kopf={['Kostenblock', 'Typischer Betrag', 'Wer zahlt']}
              zeilen={[
                ['Pflege (Eigenanteil)', '800–1.800 €/Monat', 'Bewohner'],
                ['Unterkunft', '400–800 €/Monat', 'Bewohner'],
                ['Verpflegung', '200–400 €/Monat', 'Bewohner'],
                ['Investitionskosten', '200–600 €/Monat', 'Bewohner'],
                ['Kassenzuschuss Pflege', '770–2.005 €/Monat', 'Pflegekasse (je PG)'],
                ['Gesamtkosten Heim', '2.500–5.000+ €/Monat', 'Bewohner + Kasse'],
                ['Eigenanteil Ø bundesweit', 'ca. 3.364 €/Monat', 'Bewohner'],
              ]}
              fuss="Ø-Eigenanteil 2026 gemäß GKV-Spitzenverband · Regionale Unterschiede erheblich"
            />
          </Abschnitt>

          <Abschnitt id="eigenanteil" titel="Eigenanteil nach Bundesland — regionale Unterschiede">
            <Text>
              Die Kosten variieren erheblich — je nach Bundesland und Region. Städte sind in der Regel teurer als ländliche Gebiete.
            </Text>
            <Tabelle
              titel=""
              kopf={['Region / Bundesland', 'Eigenanteil Ø/Monat (2026)']}
              zeilen={[
                ['Bayern (München)', 'ca. 3.200–4.000 €'],
                ['Baden-Württemberg', 'ca. 2.800–3.500 €'],
                ['NRW (Köln, Düsseldorf)', 'ca. 2.800–3.500 €'],
                ['Sachsen, Thüringen', 'ca. 1.800–2.400 €'],
                ['Mecklenburg-Vorpommern', 'ca. 1.700–2.200 €'],
                ['Bundesweit Ø', 'ca. 3.364 €'],
              ]}
              fuss="Richtwerte 2026 · Quellen: vdek, GKV-Spitzenverband · Stand April 2026"
            />
          </Abschnitt>

          <Abschnitt id="kassenzuschuss" titel="Kassenzuschuss im Pflegeheim">
            <Text>
              Die Pflegekasse zahlt einen festen Zuschuss für vollstationäre Pflege — gestaffelt nach Pflegegrad. Wichtig: Dieser Zuschuss deckt nie alle Kosten.
            </Text>
            <Tabelle
              titel=""
              kopf={['Pflegegrad', 'Kassenzuschuss/Monat (2026)', 'Verbleibt als Eigenanteil']}
              zeilen={[
                ['PG 2', '770 €/Monat', 'Rest je nach Heim'],
                ['PG 3', '1.262 €/Monat', 'Rest je nach Heim'],
                ['PG 4', '1.775 €/Monat', 'Rest je nach Heim'],
                ['PG 5', '2.005 €/Monat', 'Rest je nach Heim'],
              ]}
              betont={1}
              fuss="Stand 2026 · Unterkunft, Verpflegung und Investitionskosten immer zusätzlich"
            />
          </Abschnitt>

          <Abschnitt id="vergleich" titel="Pflegeheim vs. 24h-Pflege zuhause — direkter Vergleich">
            <Tabelle
              titel=""
              kopf={["Kriterium", "Pflegeheim", "24h-Pflege Primundus"]}
              zeilen={[
                ['Eigenanteil Ø (PG 3)', 'ca. 3.364 €/Monat', 'ab ca. 923 €/Monat*'],
                ['Umgebung', 'Fremde Einrichtung', 'Eigenes Zuhause'],
                ['Individualität', 'Heimplan', '1:1-Betreuung'],
                ['Vertraute Bezugsperson', 'Wechselndes Personal', 'Feste Kraft (8–12 Wo)'],
                ['Demenzprogress', 'Oft schneller', 'Vertraute Umgebung hilft'],
                ['Flexibilität', 'Heimvertrag (Fristen)', 'Täglich kündbar'],
                ['Angehörige', 'Besuchszeiten', 'Immer willkommen'],
              ]}
              betont={2}
              fuss="* PG 3, eine Person, nach Pflegegeld, Entlastungsbudget und Steuerermäßigung, Werte aus unserem Kostenrechner · Stand September 2026"
            />
            <MehrDazu
              label="Vollständiger Vergleich:"
              links={[{ href: "/24h-pflege-vs-pflegeheim-kosten", text: "24h-Pflege vs. Pflegeheim — Kostenvergleich" }, { href: "/eigenanteil-24h-pflege-senken", text: "Eigenanteil senken — alle Möglichkeiten" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was kostet ein Pflegeheim in Deutschland 2026?', a: 'Eigenanteil bundesweit Ø ca. 3.364 €/Monat (Pflege + Unterkunft + Verpflegung + Investitionskosten). Je nach Region und Einrichtung 1.700–4.000+ €/Monat. Pflegekasse zahlt 770–2.005 €/Monat je nach Pflegegrad dazu.' },
                { q: 'Was deckt die Pflegekasse im Pflegeheim?', a: 'Die Pflegekasse zahlt einen festen Zuschuss für den Pflegeanteil: PG 2 = 770 €, PG 3 = 1.262 €, PG 4 = 1.775 €, PG 5 = 2.005 €/Monat. Unterkunft, Verpflegung und Investitionskosten trägt der Bewohner selbst.' },
                { q: 'Ist Pflegeheim günstiger als 24h-Pflege zuhause?', a: 'Oft nicht — bei PG 3 bleiben mit 24h-Pflege zuhause nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 €/Monat — beim Grundpreis also rund 2.440 € weniger als im Pflegeheim (Ø 3.364 €/Monat).' },
                { q: 'Was passiert wenn das Geld für das Pflegeheim nicht reicht?', a: 'Wenn Rente und Eigenkapital nicht reichen, werden zunächst Vermögen und unter bestimmten Umständen Kinder zur Zuzahlung herangezogen. Sozialhilfe (§61 SGB XII) springt als letztes Mittel ein.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegeheim-kosten-deutschland" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
