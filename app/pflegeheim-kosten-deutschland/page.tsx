import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Sicher } from '@/components/Sicher'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Tabelle, Text, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { HeimVsZuhause, KostenAufteilung } from '@/components/grafik/Grafik'
import { HeimRechner } from '@/components/werkzeuge/HeimRechner'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'
import { ENTLASTUNGSBETRAG, PFLEGEGELD } from '@/lib/fakten'
import {
  HEIM_EEE_BUND_JAHR1, HEIM_EEE_BUND_OHNE_ZUSCHLAG, HEIM_EIGENANTEIL, HEIM_EIGENANTEIL_BUND, HEIM_INVEST_BUND, HEIM_LEISTUNG, HEIM_UNTERKUNFT_BUND,
  heimEigenanteilBundJahr,
} from '@/lib/heimkosten'

// Neu gebaut am 20.09.2026 (Martin: „bestmöglichen Content liefern, um auf die Top-3-Positionen zu kommen"). Vorher: Spannen ohne Quelle
// („Sachsen 1.800–2.400 €", „2.500–5.000+ €"), Kassenbeträge von 2023 (770/1.262/1.775/2.005 statt 805/1.319/1.855/2.096), „Feste Kraft
// (8–12 Wo)", „Demenzprogress oft schneller" ohne Beleg; 0 Impressionen in 90 Tagen trotz Index. Keyword-Planer (Deutschland, Monat):
// „pflegeheim kosten" 6.600, „pflegeheim kosten rechner" 2.900, „eigenanteil pflegeheim" 2.400, „pflegeheim kosten pflegegrad 3" 1.900,
// „was kostet ein pflegeheim" 880, „pflegeheimkosten" 590, „… pflegegrad 2" 480, „… pflegegrad 4" 320, „… bayern" 320, „… wer zahlt" 260,
// „… nrw" 170, „leistungszuschlag pflegeheim" 140; Wettbewerb laut Planer niedrig. Belege: vdek (Stand 1. Juli 2026, lib/heimkosten.ts),
// § 43 Abs. 2 und 3, § 43c SGB XI, §§ 61 ff., 90, 94 SGB XII, Preise aus unserem Kostenrechner. Der alte Rechner auf
// /pflegeheim-kostenvergleich (erfundene Länderfaktoren, halbes Pflegegeld, Entlastungsbetrag eingerechnet) ist damit überflüssig.

const AKTUALISIERT = aktualisiertAm('pflegeheim-kosten-deutschland', '20. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-pflegeheim-kosten'
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

const SECTIONS = [
  { id: 'rechner', title: 'Pflegeheim-Kosten-Rechner' },
  { id: 'zusammensetzung', title: 'Woraus die Kosten bestehen' },
  { id: 'bundesland', title: 'Eigenanteil je Bundesland' },
  { id: 'jahre', title: 'Weniger ab dem 2. Jahr' },
  { id: 'pflegegrad', title: 'Pflegegrad und Eigenanteil' },
  { id: 'wer-zahlt', title: 'Wenn die Rente nicht reicht' },
  { id: 'vergleich', title: 'Heim oder zu Hause?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

const LAENDER = Object.entries(HEIM_EIGENANTEIL).sort((a, b) => a[1] - b[1])
const gesamt = (pg: 2 | 3 | 4 | 5) => HEIM_LEISTUNG[pg] + HEIM_EIGENANTEIL_BUND

const FRAGEN = [
  { q: 'Was kostet ein Pflegeheim 2026 im Monat?', a: `Der Eigenanteil liegt im ersten Jahr bundesweit bei durchschnittlich ${euro(HEIM_EIGENANTEIL_BUND)} im Monat (vdek, Stand 1. Juli 2026): ${euro(HEIM_EEE_BUND_JAHR1)} pflegebedingter Anteil, ${euro(HEIM_UNTERKUNFT_BUND)} Unterkunft und Verpflegung, ${euro(HEIM_INVEST_BUND)} Investitionskosten. Am günstigsten ist Sachsen-Anhalt mit rund ${euro(HEIM_EIGENANTEIL['Sachsen-Anhalt'])}, am teuersten Bremen mit rund ${euro(HEIM_EIGENANTEIL['Bremen'])}. Dazu zahlt die Pflegekasse je nach Pflegegrad ${euro(HEIM_LEISTUNG[2])} bis ${euro(HEIM_LEISTUNG[5])} direkt an das Heim.` },
  { q: 'Was zahlt die Pflegekasse im Pflegeheim?', a: `Einen festen Betrag je Monat: ${euro(HEIM_LEISTUNG[2])} bei Pflegegrad 2, ${euro(HEIM_LEISTUNG[3])} bei Pflegegrad 3, ${euro(HEIM_LEISTUNG[4])} bei Pflegegrad 4 und ${euro(HEIM_LEISTUNG[5])} bei Pflegegrad 5 (§ 43 SGB XI). Bei Pflegegrad 1 sind es ${euro(ENTLASTUNGSBETRAG)}. Dazu kommt der Leistungszuschlag auf den pflegebedingten Eigenanteil: 15 Prozent im ersten Jahr, 30 im zweiten, 50 im dritten, 75 ab dem vierten.` },
  { q: 'Was kostet ein Pflegeheim bei Pflegegrad 3?', a: `Den gleichen Eigenanteil wie bei Pflegegrad 2, 4 oder 5: im Bundesdurchschnitt ${euro(HEIM_EIGENANTEIL_BUND)} im Monat im ersten Jahr. Der pflegebedingte Anteil ist einrichtungseinheitlich; die Pflegekasse zahlt bei Pflegegrad 3 ${euro(HEIM_LEISTUNG[3])} an das Heim, bei Pflegegrad 5 ${euro(HEIM_LEISTUNG[5])}, und das Heim berechnet allen Bewohnern denselben Rest. Die Gesamtkosten des Platzes liegen bei Pflegegrad 3 bei rund ${euro(gesamt(3))}.` },
  { q: 'Warum ist der Eigenanteil im Heim bei jedem Pflegegrad gleich?', a: 'Seit 2017 gilt der einrichtungseinheitliche Eigenanteil: Das Heim verteilt seine Pflegekosten nach Abzug der Kassenbeträge gleichmäßig auf alle Bewohner der Pflegegrade 2 bis 5. Wer einen höheren Pflegegrad bekommt, zahlt deshalb nicht mehr. Nur bei Pflegegrad 1 ist es anders: Dort zahlt die Kasse nur 131 €, der Rest bleibt beim Bewohner.' },
  { q: 'Sinkt der Eigenanteil im Pflegeheim mit der Zeit?', a: `Ja, durch den Leistungszuschlag der Pflegekasse auf den pflegebedingten Anteil: 15 Prozent im ersten Jahr, 30 im zweiten, 50 im dritten, 75 ab dem vierten. Im Bundesdurchschnitt sinkt der Eigenanteil so von ${euro(heimEigenanteilBundJahr(1))} auf ${euro(heimEigenanteilBundJahr(2))}, ${euro(heimEigenanteilBundJahr(3))} und ${euro(heimEigenanteilBundJahr(4))} im Monat. Unterkunft, Verpflegung und Investitionskosten bleiben unverändert und steigen mit den Preisen.` },
  { q: 'Was kostet ein Pflegeheim in Bayern oder NRW?', a: `In Bayern liegt der Eigenanteil im ersten Jahr bei rund ${euro(HEIM_EIGENANTEIL['Bayern'])} im Monat, in Nordrhein-Westfalen bei rund ${euro(HEIM_EIGENANTEIL['Nordrhein-Westfalen'])}, in Baden-Württemberg bei rund ${euro(HEIM_EIGENANTEIL['Baden-Württemberg'])}. Am günstigsten sind Sachsen-Anhalt, Sachsen und Thüringen mit rund ${euro(HEIM_EIGENANTEIL['Sachsen-Anhalt'])} bis ${euro(HEIM_EIGENANTEIL['Thüringen'])}. Innerhalb eines Landes unterscheiden sich die Heime noch einmal deutlich.` },
  { q: 'Wer zahlt, wenn die Rente für das Pflegeheim nicht reicht?', a: 'Zuerst Rente, Einkommen und Vermögen der pflegebedürftigen Person; 10.000 € Vermögen bleiben geschützt. Reicht das nicht, zahlt das Sozialamt Hilfe zur Pflege (SGB XII). Kinder werden erst herangezogen, wenn sie mehr als 100.000 € brutto im Jahr verdienen. In einigen Bundesländern gibt es zusätzlich Pflegewohngeld für die Investitionskosten.' },
  { q: 'Müssen Kinder für das Pflegeheim der Eltern zahlen?', a: 'Nur bei einem Bruttoeinkommen über 100.000 € im Jahr, und dann nur aus dem Einkommen, das über einem Selbstbehalt liegt. Das Sozialamt prüft das erst, wenn es selbst Hilfe zur Pflege zahlt. Schwiegerkinder und Enkel zahlen nicht.' },
  { q: 'Was ist im Eigenanteil enthalten und was nicht?', a: 'Enthalten sind Pflege und Betreuung (nach Abzug des Kassenbetrags), Unterkunft, Verpflegung, Investitionskosten und die Ausbildungsumlage. Nicht enthalten sind Friseur, Fußpflege, eigene Kleidung, Telefon, Zuzahlungen zu Medikamenten und Hilfsmitteln sowie Zusatzleistungen wie ein Einzelzimmer mit Aufpreis.' },
  { q: 'Ist 24-Stunden-Pflege zu Hause günstiger als das Pflegeheim?', a: `Beim Eigenanteil meist ja: Bei Pflegegrad 3 bleiben mit einer Betreuungskraft im Haus ab ca. 923 € im Monat selbst zu tragen, im Heim durchschnittlich ${euro(HEIM_EIGENANTEIL_BUND)}. Fair gerechnet kommen zu Hause Miete, Lebensmittel und das Zimmer für die Betreuungskraft dazu, die im Heimpreis enthalten sind. Für die meisten Familien bleibt der Unterschied trotzdem deutlich, und die Person bleibt zu Hause.` },
]

export const metadata: Metadata = {
  title: 'Pflegeheim Kosten 2026: Eigenanteil je Bundesland, Rechner',
  description: `Pflegeheim Kosten 2026: Eigenanteil Ø ${euro(HEIM_EIGENANTEIL_BUND)} im Monat, je Bundesland 2.890 bis 3.760 €. Rechner nach Bundesland, Pflegegrad und Heimjahr; was die Kasse zahlt.`,
  alternates: { canonical: 'https://primundus.de/pflegeheim-kosten-deutschland' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegeheim Kosten 2026: Eigenanteil je Bundesland mit Rechner',
    description: `Eigenanteil Ø ${euro(HEIM_EIGENANTEIL_BUND)} im Monat, je Bundesland von rund 2.890 bis 3.760 €; Rechner nach Bundesland, Pflegegrad und Heimjahr.`,
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
    headline: 'Pflegeheim Kosten 2026: Eigenanteil je Bundesland, was die Kasse zahlt, Rechner',
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
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>
const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

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
            { label: 'Startseite', href: '/' },
            { label: 'Vergleiche', href: '/vergleiche' },
            { label: 'Pflegeheim Kosten' },
          ]}
          augenbraue="Pflegeheim Kosten 2026"
          titel="Pflegeheim Kosten 2026: Eigenanteil je Bundesland, was die Kasse zahlt, und der Rechner"
          einleitung={<>Ein Pflegeheimplatz kostet 2026 im ersten Jahr durchschnittlich {euro(HEIM_EIGENANTEIL_BUND)} im Monat aus eigener Tasche, 256 € mehr als ein Jahr zuvor. Je nach Bundesland sind es rund {euro(HEIM_EIGENANTEIL['Sachsen-Anhalt'])} bis {euro(HEIM_EIGENANTEIL['Bremen'])}. Der Pflegegrad ändert daran nichts, die Aufenthaltsdauer schon. Rechnen Sie Ihr Bundesland durch und vergleichen Sie mit der Betreuung zu Hause.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="10 Min."
          blick={[
            `Eigenanteil im ersten Heimjahr: Ø ${euro(HEIM_EIGENANTEIL_BUND)} im Monat (vdek, 1. Juli 2026)`,
            `Bundesländer: von rund ${euro(HEIM_EIGENANTEIL['Sachsen-Anhalt'])} (Sachsen-Anhalt) bis ${euro(HEIM_EIGENANTEIL['Bremen'])} (Bremen)`,
            `Pflegekasse zahlt ${euro(HEIM_LEISTUNG[2])} bis ${euro(HEIM_LEISTUNG[5])} je Pflegegrad direkt an das Heim`,
            `Ab dem 2. Jahr sinkt der Eigenanteil: Ø ${euro(heimEigenanteilBundJahr(2))}, dann ${euro(heimEigenanteilBundJahr(3))}, ab dem 4. Jahr ${euro(heimEigenanteilBundJahr(4))}`,
            'Reicht die Rente nicht: Sozialamt; 10.000 € Vermögen bleiben, Kinder erst ab 100.000 € Einkommen',
            'Zu Hause mit Betreuungskraft: bei Pflegegrad 3 ab ca. 923 € selbst zu tragen',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="rechner" titel="Pflegeheim-Kosten-Rechner: Bundesland, Pflegegrad, Heimjahr">
            <Text>
              Der Rechner zeigt den Eigenanteil im Pflegeheim nach den Zahlen des Verbands der Ersatzkassen und daneben, was bei einer
              Betreuungskraft im eigenen Haus selbst zu tragen bleibt. Beides sind Monatsbeträge nach Abzug der Pflegekasse.
            </Text>
            <Sicher name="Pflegeheim-Rechner" fallback={<Kasten><Text>Der Rechner lädt gerade nicht. Die Zahlen je Bundesland stehen in der Tabelle unten.</Text></Kasten>}>
              <HeimRechner />
            </Sicher>
          </Abschnitt>

          <Abschnitt id="zusammensetzung" titel="Woraus die Pflegeheim-Kosten bestehen">
            <Text>
              Ein Heimplatz hat vier Bausteine. Die Pflegekasse beteiligt sich nur am ersten, und auch dort nur mit einem festen Betrag je
              Pflegegrad. Alles andere zahlt der Bewohner, im Bundesdurchschnitt im ersten Jahr so:
            </Text>
            <Tabelle
              titel="Eigenanteil im Bundesdurchschnitt, erstes Heimjahr (vdek, 1. Juli 2026)"
              kopf={['Baustein', 'Im Monat', 'Was dahintersteckt']}
              zeilen={[
                ['Pflegebedingter Anteil', euro(HEIM_EEE_BUND_JAHR1), `Pflege und Betreuung nach Abzug des Kassenbetrags und des Leistungszuschlags von 15 %; vor Zuschlag ${euro(HEIM_EEE_BUND_OHNE_ZUSCHLAG)}. Enthält die Ausbildungsumlage.`],
                ['Unterkunft und Verpflegung', euro(HEIM_UNTERKUNFT_BUND), 'Zimmer, Mahlzeiten, Reinigung, Wäsche. Zahlt der Bewohner vollständig.'],
                ['Investitionskosten', euro(HEIM_INVEST_BUND), 'Gebäude, Instandhaltung, Ausstattung. In einigen Ländern gibt es dafür Pflegewohngeld.'],
                ['Eigenanteil gesamt', euro(HEIM_EIGENANTEIL_BUND), 'Was der Bewohner im ersten Jahr selbst zahlt, ohne Taschengeld, Friseur, Zuzahlungen.'],
              ]}
              betont={1}
            />
            <Zwischentitel>Was die Pflegekasse an das Heim zahlt</Zwischentitel>
            <Tabelle
              titel="Leistungsbetrag der Pflegekasse im Heim, § 43 SGB XI"
              kopf={['Pflegegrad', 'Kasse zahlt im Monat', 'Gesamtkosten des Platzes (Ø)']}
              zeilen={[
                ['Pflegegrad 1', euro(ENTLASTUNGSBETRAG), 'Eigenanteil entsprechend höher'],
                ['Pflegegrad 2', euro(HEIM_LEISTUNG[2]), `rund ${euro(gesamt(2))}`],
                ['Pflegegrad 3', euro(HEIM_LEISTUNG[3]), `rund ${euro(gesamt(3))}`],
                ['Pflegegrad 4', euro(HEIM_LEISTUNG[4]), `rund ${euro(gesamt(4))}`],
                ['Pflegegrad 5', euro(HEIM_LEISTUNG[5]), `rund ${euro(gesamt(5))}`],
              ]}
              betont={1}
              fuss={`Gesamtkosten = Kassenbetrag + durchschnittlicher Eigenanteil ${euro(HEIM_EIGENANTEIL_BUND)}. Der Eigenanteil bleibt bei Pflegegrad 2 bis 5 gleich (einrichtungseinheitlicher Eigenanteil).`}
            />
          </Abschnitt>

          <Abschnitt id="bundesland" titel="Eigenanteil im Pflegeheim je Bundesland">
            <Text>
              Zwischen dem günstigsten und dem teuersten Bundesland liegen rund {euro(HEIM_EIGENANTEIL['Bremen'] - HEIM_EIGENANTEIL['Sachsen-Anhalt'])} im Monat.
              Die Unterschiede kommen aus den Löhnen der Pflegekräfte, den Investitionskosten und davon, wie viel Pflegewohngeld ein Land zahlt.
            </Text>
            <Tabelle
              titel="Eigenanteil im ersten Heimjahr, Stand 1. Juli 2026"
              kopf={['Bundesland', 'Eigenanteil im Monat']}
              zeilen={LAENDER.map(([name, wert]) => [name, `rund ${euro(wert)}`])}
              betont={1}
              fuss={`Quelle: vdek, Auswertung zum 1. Juli 2026; Werte auf 10 € gerundet. Bundesdurchschnitt ${euro(HEIM_EIGENANTEIL_BUND)}. Innerhalb eines Landes unterscheiden sich die Heime deutlich; den genauen Betrag nennt jedes Heim in seiner Entgeltübersicht.`}
            />
            <MehrDazu
              label="Regionen:"
              links={[
                { href: '/24h-pflege-bayern', text: '24-Stunden-Pflege in Bayern' },
                { href: '/24h-pflege-nordrhein-westfalen', text: 'in Nordrhein-Westfalen' },
                { href: '/24h-pflege-baden-wuerttemberg', text: 'in Baden-Württemberg' },
                { href: '/regionen', text: 'alle Regionen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="jahre" titel="Weniger ab dem zweiten Jahr: der Leistungszuschlag">
            <Text>
              Seit 2022 zahlt die Pflegekasse einen Zuschlag auf den pflegebedingten Eigenanteil, der mit der Aufenthaltsdauer steigt (§ 43c SGB XI).
              Er gilt für die Pflegegrade 2 bis 5 und wird automatisch mit dem Heim abgerechnet. Unterkunft, Verpflegung und Investitionskosten
              bleiben davon unberührt.
            </Text>
            <Tabelle
              titel="Eigenanteil im Bundesdurchschnitt nach Aufenthaltsdauer"
              kopf={['Aufenthalt', 'Zuschlag', 'Pflegebedingter Anteil', 'Eigenanteil gesamt']}
              zeilen={[
                ['1. Jahr', '15 %', euro(Math.round(HEIM_EEE_BUND_OHNE_ZUSCHLAG * 0.85)), euro(heimEigenanteilBundJahr(1))],
                ['2. Jahr', '30 %', euro(Math.round(HEIM_EEE_BUND_OHNE_ZUSCHLAG * 0.7)), euro(heimEigenanteilBundJahr(2))],
                ['3. Jahr', '50 %', euro(Math.round(HEIM_EEE_BUND_OHNE_ZUSCHLAG * 0.5)), euro(heimEigenanteilBundJahr(3))],
                ['ab 4. Jahr', '75 %', euro(Math.round(HEIM_EEE_BUND_OHNE_ZUSCHLAG * 0.25)), euro(heimEigenanteilBundJahr(4))],
              ]}
              betont={3}
              fuss={`Pflegebedingter Anteil vor Zuschlag ${euro(HEIM_EEE_BUND_OHNE_ZUSCHLAG)} (aus den vdek-Werten des ersten Jahres zurückgerechnet), plus Unterkunft und Verpflegung ${euro(HEIM_UNTERKUNFT_BUND)} und Investitionskosten ${euro(HEIM_INVEST_BUND)}. Preissteigerungen der Heime kommen dazu.`}
            />
            <Text>
              Gezählt werden die Monate, in denen die Person Leistungen der vollstationären Pflege bezieht, auch angebrochene Monate und über einen
              Heimwechsel hinweg. Seit dem 1. Juli 2026 meldet das Heim die Dauer an die Pflegekasse; Sie müssen den Zuschlag nicht beantragen.
            </Text>
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad und Eigenanteil: warum Pflegegrad 3 nicht mehr kostet als Pflegegrad 2">
            <Text>
              Viele Familien erwarten, dass ein höherer Pflegegrad den Heimplatz teurer macht. Das Gegenteil wäre logisch, und in der Praxis
              ist es weder noch: Der Eigenanteil ist bei Pflegegrad 2 bis 5 gleich. Das Heim zieht die Kassenbeträge aller Bewohner von seinen
              Pflegekosten ab und verteilt den Rest gleichmäßig. Ein höherer Pflegegrad erhöht den Kassenbetrag, entlastet aber alle, nicht nur
              die betroffene Person.
            </Text>
            <Punkte
              punkte={[
                { title: 'Pflegegrad 2 bis 5', desc: `Gleicher Eigenanteil, im Bundesdurchschnitt ${euro(HEIM_EIGENANTEIL_BUND)} im ersten Jahr. Die Kasse zahlt ${euro(HEIM_LEISTUNG[2])} bis ${euro(HEIM_LEISTUNG[5])} an das Heim.` },
                { title: 'Pflegegrad 1', desc: `Die Kasse zahlt nur ${euro(ENTLASTUNGSBETRAG)} im Monat, den Leistungszuschlag gibt es nicht. Der Eigenanteil liegt deshalb weit über dem Durchschnitt; ein Heimplatz ist bei Pflegegrad 1 fast immer die teuerste Lösung.` },
                { title: 'Höherstufung lohnt trotzdem', desc: 'Nicht wegen des Eigenanteils, sondern weil ein höherer Pflegegrad zu Hause mehr Pflegegeld, mehr Sachleistungen und mehr Entlastung bringt. Unser Pflegegrad-Rechner zeigt vorab, wie viele Punkte zusammenkommen.' },
              ]}
            />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegrad-rechner', text: 'Pflegegrad berechnen' },
                { href: '/pflegegrade', text: 'Alle Pflegegrade im Überblick' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wer-zahlt" titel="Wenn die Rente nicht reicht: wer zahlt das Pflegeheim?">
            <Text>
              Die Durchschnittsrente deckt den Eigenanteil selten. Die Reihenfolge ist gesetzlich festgelegt, und sie schützt mehr, als viele
              Familien glauben:
            </Text>
            <Punkte
              punkte={[
                { title: '1. Rente, Einkommen, Vermögen der Person', desc: 'Zuerst zahlt die pflegebedürftige Person aus Rente, Mieteinnahmen und Erspartem. 10.000 € Vermögen bleiben als Schonvermögen unangetastet, ebenso ein angemessenes Hausgrundstück, solange der Ehepartner darin wohnt.' },
                { title: '2. Ehepartner', desc: 'Eheleute stehen füreinander ein; das Sozialamt rechnet das Einkommen beider zusammen, lässt dem Partner zu Hause aber einen Selbstbehalt.' },
                { title: '3. Sozialamt: Hilfe zur Pflege', desc: 'Reicht das Geld nicht, übernimmt das Sozialamt den Rest nach dem SGB XII. Der Antrag gehört vor den Einzug oder spätestens beim ersten Fehlbetrag; rückwirkend zahlt das Amt nicht.' },
                { title: '4. Kinder erst ab 100.000 € Einkommen', desc: 'Seit 2020 zieht das Sozialamt Kinder nur heran, wenn ihr Bruttoeinkommen über 100.000 € im Jahr liegt (§ 94 SGB XII). Darunter fragt das Amt nicht einmal nach; Schwiegerkinder und Enkel zahlen nie.' },
                { title: 'Pflegewohngeld und Wohngeld', desc: 'Nordrhein-Westfalen und einige weitere Länder zahlen Pflegewohngeld für die Investitionskosten, wenn Einkommen und Vermögen nicht reichen. Das Heim oder der Pflegestützpunkt sagt, ob es das im Land gibt.' },
              ]}
            />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/sozialhilfe-bei-pflegebedarf', text: 'Sozialhilfe bei Pflegebedarf' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vergleich" titel="Pflegeheim oder zu Hause: der ehrliche Vergleich">
            <Text>
              Zu Hause mit einer Betreuungskraft, die mit im Haus wohnt, kostet die Betreuung bei uns ab 2.150 € im Monat. Nach Pflegegeld,
              anteiligem Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € selbst zu tragen, im Heim durchschnittlich
              {' '}{euro(HEIM_EIGENANTEIL_BUND)}. Fair gerechnet gehören zu Hause Miete, Lebensmittel und das Zimmer für die Betreuungskraft dazu; im Heim
              sind Unterkunft und Verpflegung im Preis. Der Abstand bleibt für die meisten Familien trotzdem deutlich.
            </Text>
            <HeimVsZuhause />
            <Gegenueber
              seiten={[
                { titel: 'Im Heim enthalten', ton: 'taupe', punkte: ['Pflege durch Fachkräfte im Schichtdienst, auch nachts', 'Zimmer, Mahlzeiten, Wäsche, Reinigung', 'Betreuungsangebote in der Gruppe', 'Behandlungspflege im Haus', 'Eigenanteil sinkt ab dem 2. Jahr'] },
                { titel: 'Zu Hause mit Betreuungskraft', ton: 'gruen', punkte: ['Eine feste Bezugsperson, die mit im Haus wohnt', 'Eigene Wohnung, eigener Tagesablauf', 'Pflegegeld bleibt, Entlastungsbudget nutzbar', 'Behandlungspflege durch den Pflegedienst dazu', 'Täglich kündbar, Anreise in 3 Tagen möglich'] },
              ]}
            />
            <KostenAufteilung />
            <RechnerKasten src="apex-pflegeheim-kosten" />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege oder Pflegeheim: Kosten im Detail' },
                { href: '/kosten', text: 'Kosten der 24-Stunden-Pflege 2026' },
                { href: '/kurzzeitpflege', text: 'Kurzzeitpflege als Übergang' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu den Pflegeheim-Kosten">
            <Fragen fragen={FRAGEN} />
            <Text>
              Quellen: Verband der Ersatzkassen (vdek), Eigenanteile in der stationären Pflege zum 1. Juli 2026; § 43 Abs. 2 und 3, § 43c SGB XI;
              §§ 61 ff., 90, 94 SGB XII; Preise aus unserem <a href={RECHNER} className={QUELLE}>Kostenrechner</a>, Stand September 2026; gelesen
              am 20. September 2026. Mehr zum Vergleich auf {l('/24h-pflege-vs-pflegeheim', '24h-Pflege oder Pflegeheim')}.
            </Text>
          </Abschnitt>

          <Weiterlesen aktuell="pflegeheim-kosten-deutschland" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
