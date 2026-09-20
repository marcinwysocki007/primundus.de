import type { Metadata } from 'next'
import { Sicher } from '@/components/Sicher'
import dynamic from 'next/dynamic'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24h-pflege-vs-pflegeheim-kosten', '25. April 2026')

const GrafikKostenvergleich = dynamic(
  () => import('@/components/charts/GrafikKostenvergleich').then(m => ({ default: m.GrafikKostenvergleich })),
  { loading: () => <div className="my-10 h-[420px] bg-pm-paper rounded-2xl border border-pm-line animate-pulse" />, ssr: false }
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
  description: 'Pflegeheim: im Schnitt 3.364 € Eigenanteil im Monat. Zu Hause bei Pflegegrad 3 ab ca. 923 € nach Zuschüssen und Steuer. Der Vergleich mit allen Zahlen 2026.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten' },
  openGraph: {
    title: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2026 | Primundus',
    description: 'Was kostet mehr — Pflegeheim oder 24h-Pflege? Vollständiger Vergleich mit aktuellen Zahlen 2026.',
    url: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten',
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
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege vs. Pflegeheim', item: 'https://primundus.de/24h-pflege-vs-pflegeheim-kosten' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet ein Pflegeheim 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Der durchschnittliche Eigenanteil beträgt 2026 bundesweit 3.364 €/Monat im ersten Jahr. Er setzt sich zusammen aus pflegebedingtem Eigenanteil (Ø 1.132 €), Unterkunft & Verpflegung (Ø 900 €) und Investitionsumlage (Ø 500–600 €). Tendenz steigend.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet 24h-Pflege im Vergleich zum Pflegeheim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bei Primundus ab 2.150 €/Monat. Nach Pflegegeld (599 € bei Pflegegrad 3), Entlastungsbudget und Steuerermäßigung bleiben ab ca. 923 €/Monat — oft deutlich günstiger als ein Pflegeheim.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege zuhause besser als ein Pflegeheim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Für die meisten Pflegesituationen ja — günstigerer Eigenanteil, eigenes Zuhause, individuelle 1:1-Betreuung, kein Umzugsstress. Ein Pflegeheim ist besser bei intensivmedizinischem Dauerbedarf oder fehlendem Wohnraum.' },
      },
      {
        '@type': 'Question',
        name: 'Wann kann das Pflegeheim günstiger werden?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab dem dritten Jahr im Pflegeheim steigen die Kassenzuschläge auf 50 % des pflegebedingten Eigenanteils. Bei sehr hohem Pflegegrad (PG 4–5) kann das langfristig die Rechnung zugunsten des Heims ändern.' },
      },
      {
        '@type': 'Question',
        name: 'Was zahlt die Pflegekasse im Pflegeheim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Einen einheitlichen monatlichen Betrag je Pflegegrad für die Pflegekosten (Sachleistungen vollstationär: PG 2 = 770 €, PG 3 = 1.262 €, PG 4 = 1.775 €, PG 5 = 2.005 €). Unterkunft, Verpflegung und Investitionsumlage trägt immer der Bewohner selbst.' },
      },
    ],
  },
]

export default function VsKosten() {
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
            { label: "24h-Pflege vs. Pflegeheim" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="24h-Pflege vs. Pflegeheim — Kostenvergleich 2026"
          einleitung="Der Pflegeheim-Eigenanteil liegt 2026 bundesweit bei durchschnittlich 3.364 Euro pro Monat — und stieg 2024 um weitere 211 Euro. Bei der 24h-Pflege zuhause bleiben bei Pflegegrad 3 nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro. Wer nur die Bruttokosten vergleicht, trifft die falsche Entscheidung."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Pflegeheim-Eigenanteil 2026: Ø 3.364 €/Monat (1. Jahr) — steigt jährlich',
                '24h-Pflege zuhause: ab 2.150 €/Monat bei Primundus',
                'Nach Zuschüssen und Steuer (PG 3): Eigenanteil ab ca. 923 €/Monat',
                '24h-Pflege ist oft günstiger UND bietet mehr individuelle Betreuung',
                'Pflegeheim kann nach 2+ Jahren durch Kassenzuschläge günstiger werden',
                'Vertraute Umgebung gibt Orientierung und Halt — gesundheitlicher Mehrwert',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="kosten" titel="Die Kosten im direkten Vergleich">
            <Text>
              Der entscheidende Vergleich ist nicht Brutto gegen Brutto — sondern der tatsächliche Eigenanteil nach allen Kassenzuschüssen. Und dabei schneidet die 24h-Pflege zuhause in den meisten Fällen besser ab.
            </Text>
            <Sicher name="Grafik Kostenvergleich">
              <GrafikKostenvergleich />
            </Sicher>
          </Abschnitt>

          <Abschnitt id="pflegeheim" titel="Was das Pflegeheim wirklich kostet">
            <Text>
              Der Pflegeheimpreis besteht aus vier Komponenten. Die Pflegekasse übernimmt einen einheitlichen Betrag je Pflegegrad — alles darüber ist Eigenanteil.
            </Text>
            <Tabelle
              titel="Pflegeheimkosten 2026 — was setzt sich zusammen"
              zeilen={[
                ['Pflegebedingter Eigenanteil (EEE)', 'Ø 1.132 €/Monat', 'Identisch in allen Heimen eines Bundeslandes'],
                ['Unterkunft & Verpflegung', 'Ø 900 €/Monat', 'Je nach Zimmerausstattung und Region'],
                ['Investitionsumlage', 'Ø 500–600 €/Monat', 'Für Gebäude, Ausstattung — zahlt Bewohner'],
                ['Ausbildungsumlage', 'ca. 60–100 €/Monat', 'Seit 2020 bundeseinheitlich'],
                ['Gesamteigenanteil (Ø 1. Jahr)', '3.364 €/Monat', 'Bundesweiter Durchschnitt 2026'],
              ]}
              fuss="Quelle: vdek Pflegeversicherungsbericht 2024 · Bundesweiter Durchschnitt"
            />
            <Kasten titel="Wichtig: Der Eigenanteil steigt jährlich" ton="koralle">
              <Text>Im Pflegeheim steigt der Eigenanteil typischerweise 3–5 % pro Jahr — weil Personalkosten steigen aber die Kassenzuschüsse eingefroren sind (bis Jan. 2028). 2024 stieg der Eigenanteil um durchschnittlich 211 €/Monat.</Text>
            </Kasten>
            <MehrDazu
              label="Mehr zum Thema:"
              links={[{ href: "/pflegeheim-kosten-deutschland", text: "Pflegeheim Kosten Deutschland 2026 — vollständige Übersicht" }]}
            />
          </Abschnitt>

          <Abschnitt id="24h" titel="Was 24h-Pflege wirklich kostet">
            <Text>
              Bei Primundus kostet 24h-Pflege ab 2.150 Euro pro Monat — je nach Pflegebedarf. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro.
            </Text>
            <Tabelle
              titel="Eigenanteil 24h-Pflege nach Kassenzuschüssen — Pflegegrad 3"
              zeilen={[
                ['Betreuungskosten Primundus', '2.700 €/Monat'],
                ['Kost & Logis Betreuungskraft', '250 €/Monat'],
                ['– Pflegegeld PG 3', '– 599 €/Monat'],
                ['– Entlastungsbudget (anteilig)', '– ca. 295 €/Monat'],
                ['Eigenanteil', 'ca. 2.055 €/Monat'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="qualitaet" titel="Mehr als nur Kosten — was wirklich zählt">
            <Text>
              Der Kostenvergleich ist wichtig — aber die Entscheidung für oder gegen ein Pflegeheim hängt von mehr ab als nur dem Preis.
            </Text>
            <Tabelle
              titel=""
              kopf={["Kriterium", "24h-Pflege zuhause", "Pflegeheim"]}
              zeilen={[
                ['Eigenanteil/Monat (PG 3)', 'ca. 1.700–2.000 €', 'Ø 3.364 € (steigend)'],
                ['Umgebung', 'Eigenes Zuhause', 'Neue, fremde Umgebung'],
                ['Betreuungsintensität', '1:1, bei Bedarf auch nachts', 'Geteilt, nach Dienstplan'],
                ['Tagesrhythmus', 'Vollständig eigener Rhythmus', 'Heimstruktur und -zeiten'],
                ['Angehörige', 'Täglich einbindbar', 'Besuchszeiten'],
                ['Demenz-Verlauf', 'Mehr Halt durch Vertrautheit', 'Häufig Verschlechterung durch Umzug'],
                ['Flexibilität', 'Täglich kündbar', 'Meist Kündigungsfristen'],
                ['Ersatz bei Ausfall', 'Primundus stellt sofort Ersatz', 'Immer Personal vorhanden'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="wann-heim"
            titel="Wann ist das Pflegeheim die bessere Wahl?"
            einleitung="In bestimmten Situationen ist das Pflegeheim tatsächlich die bessere oder einzige Option:"
            punkte={[
              { title: 'Intensivmedizinische Behandlungspflege', desc: 'Wenn rund um die Uhr medizinische Fachkräfte notwendig sind — z.B. Beatmung, kontinuierliche Medikamentenpumpen, komplexe Wundversorgung. Das übersteigt das was eine 24h-Betreuungskraft leisten kann.' },
              { title: 'Kein geeigneter Wohnraum', desc: 'Wenn die Wohnung so klein ist dass kein Zimmer für die Betreuungskraft vorhanden ist, oder wenn Umbaumaßnahmen nicht möglich sind.' },
              { title: 'Expliziter Wunsch des Betroffenen', desc: 'Wenn der pflegebedürftige Mensch selbst — solange noch entscheidungsfähig — ins Pflegeheim möchte, um Gemeinschaft zu erleben.' },
              { title: 'Langzeit finanziell', desc: 'Ab dem 3. Jahr im Pflegeheim steigen die Kassenzuschläge auf 50 % mehr — das kann den Eigenanteil erheblich senken. Bei sehr hohem Pflegegrad kann das die Rechnung zugunsten des Heims kippen.' },
            ]}
          >
            <MehrDazu
              label="Was zuhause möglich ist:"
              links={[{ href: "/was-ist-24-stunden-pflege", text: "Was ist 24-Stunden-Pflege? — alle Fakten" }, { href: "/kosten", text: "Kosten der 24h-Pflege im Detail" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Kostenvergleich">
            <Fragen
              fragen={[
                { q: 'Was kostet ein Pflegeheim 2026?', a: 'Der durchschnittliche Eigenanteil beträgt 2026 bundesweit 3.364 €/Monat im ersten Jahr. Er setzt sich zusammen aus pflegebedingtem Eigenanteil (Ø 1.132 €), Unterkunft & Verpflegung (Ø 900 €) und Investitionsumlage (Ø 500–600 €). Tendenz steigend.' },
                { q: 'Was kostet 24h-Pflege im Vergleich zum Pflegeheim?', a: 'Bei Primundus ab 2.150 €/Monat. Nach Pflegegeld (599 € bei Pflegegrad 3), Entlastungsbudget und Steuerermäßigung bleiben ab ca. 923 €/Monat — oft deutlich günstiger als ein Pflegeheim.' },
                { q: 'Ist 24h-Pflege zuhause besser als ein Pflegeheim?', a: 'Für die meisten Pflegesituationen ja — günstigerer Eigenanteil, eigenes Zuhause, individuelle 1:1-Betreuung, kein Umzugsstress. Ein Pflegeheim ist besser bei intensivmedizinischem Dauerbedarf oder fehlendem Wohnraum.' },
                { q: 'Wann kann das Pflegeheim günstiger werden?', a: 'Ab dem dritten Jahr im Pflegeheim steigen die Kassenzuschläge auf 50 % des pflegebedingten Eigenanteils. Bei sehr hohem Pflegegrad (PG 4–5) kann das langfristig die Rechnung zugunsten des Heims ändern.' },
                { q: 'Was zahlt die Pflegekasse im Pflegeheim?', a: 'Einen einheitlichen monatlichen Betrag je Pflegegrad für die Pflegekosten (Sachleistungen vollstationär: PG 2 = 770 €, PG 3 = 1.262 €, PG 4 = 1.775 €, PG 5 = 2.005 €). Unterkunft, Verpflegung und Investitionsumlage trägt immer der Bewohner selbst.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24h-pflege-vs-pflegeheim-kosten" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
