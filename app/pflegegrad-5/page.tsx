import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-5', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 5?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'alltag', title: 'Zuhause mit Pflegegrad 5' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 5 — Leistungen & 990 € Pflegegeld 2026',
  description: 'Pflegegrad 5, der höchste Pflegegrad: Leistungen und Beträge 2026, Voraussetzungen und welche Betreuung zu Hause bei schwerster Beeinträchtigung möglich ist.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-5' },
  openGraph: {
    title: 'Pflegegrad 5 — Leistungen & Beträge 2026 | Primundus',
    description: 'Pflegegrad 5: 990 € Pflegegeld + 2.299 € Sachleistungen. Höchster Pflegegrad — alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-5',
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
    headline: 'Pflegegrad 5 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-5',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 5', item: 'https://primundus.de/pflegegrad-5' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 5?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 5 gibt es 990 € Pflegegeld/Monat, 2.299 € Pflegesachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. PG 5 ist der höchste Pflegegrad — er setzt schwerste Beeinträchtigung plus besonderen Beaufsichtigungsbedarf voraus.' } },
      { '@type': 'Question', name: 'Was unterscheidet Pflegegrad 5 von Pflegegrad 4?', acceptedAnswer: { '@type': 'Answer', text: 'PG 5 erfordert 90–100 NBA-Punkte (PG 4: 70–89,9). Zusätzlich zu schwersten körperlichen Einschränkungen muss ein besonderer Bedarf an Beaufsichtigung und Begleitung vorliegen — z.B. durch Weglaufen, Selbstgefährdung oder extreme Verhaltensauffälligkeiten bei Demenz.' } },
    ],
  },
]

export default function Pflegegrad5() {
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
            { label: "Pflegegrade", href: "/pflegegrade" },
            { label: "Pflegegrad 5" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad 5 — Leistungen & Beträge 2026"
          einleitung="Pflegegrad 5 ist der höchste Pflegegrad — er bedeutet schwerste Beeinträchtigung plus besonderen Beaufsichtigungsbedarf. Betroffene erhalten 990 € Pflegegeld pro Monat und 2.299 € Sachleistungen. Mit einer 24h-Betreuungskraft ist zuhause bleiben auch bei PG 5 in vielen Fällen möglich."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blick={[
                'Pflegegeld: 990 €/Monat — höchster Satz',
                'Pflegesachleistungen: 2.299 €/Monat',
                'Entlastungsbetrag: 131 €/Monat zusätzlich',
                'Entlastungsbudget: 3.539 €/Jahr',
                'Voraussetzung: 90–100 Punkte NBA + besonderer Beaufsichtigungsbedarf',
                'Stand 2026: Identisch zu 2025',
              ]}
          blickTitel="Auf einen Blick — Pflegegrad 5"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was bedeutet Pflegegrad 5?">
            <Text>
              Pflegegrad 5 wird vergeben wenn bei der NBA-Begutachtung <strong>90 bis 100 Punkte</strong> erreicht werden und <strong>zusätzlich ein besonderer Beaufsichtigungs- und Begleitungsbedarf</strong> vorliegt. Dieser besondere Bedarf ist das entscheidende Kriterium — er grenzt PG 5 von PG 4 ab.
            </Text>
            <Punkte
              punkte={[
                { title: 'Schwerste Beeinträchtigung', desc: 'Vollständige Abhängigkeit bei Körperpflege, Mobilität, Ernährung. Kaum eigenständige Aktivitäten möglich.' },
                { title: 'Besonderer Beaufsichtigungsbedarf', desc: 'Weglaufen bei Demenz mit Selbstgefährdung, extreme Verhaltensauffälligkeiten, Selbst- oder Fremdgefährdung — eine Person muss dauerhaft anwesend sein.' },
                { title: 'Typische Erkrankungen bei PG 5', desc: 'Schwere Demenz im Endstadium, schwerster Schlaganfall mit Aphasie und Hemiplegie, ALS (Amyotrophe Lateralsklerose), schwerstes Schädel-Hirn-Trauma.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Leistungen & Beträge 2026">
            <Tabelle
              titel="Alle Leistungen bei Pflegegrad 5 — Stand 2026"
              zeilen={[
                ['Pflegegeld', '990 €/Monat', 'Höchster Satz — wenn Angehörige pflegen'],
                ['Pflegesachleistungen', '2.299 €/Monat', 'Für ambulante Pflegedienste'],
                ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote'],
                ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege'],
                ['Tages-/Nachtpflege', '2.085 €/Monat', 'Eigenes Budget, keine Anrechnung'],
                ['Pflegehilfsmittel', '42 €/Monat', 'Handschuhe, Desinfektionsmittel etc.'],
              ]}
              betont={1}
              fuss="Stand 2026 · Identisch zu 2025 · Quelle: GKV-Spitzenverband"
            />
            <MehrDazu
              label="Alle Zuschüsse optimal nutzen:"
              links={[{ href: "/finanzierung", text: "Finanzierung — alle Kassenzuschüsse 2026" }]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="alltag"
            titel="Zuhause mit Pflegegrad 5 — ist das möglich?"
            einleitung={"Bei PG 5 ist die Frage \"zuhause oder Pflegeheim\" am dringlichsten. Eine 24h-Betreuungskraft ermöglicht zuhause bleiben in vielen Fällen — aber nicht bei jedem Pflegebedarf."}
            punkte={[
              { title: 'Zuhause möglich wenn...', desc: 'Der besondere Beaufsichtigungsbedarf durch eine Betreuungskraft rund um die Uhr abgedeckt werden kann. Kein intensivmedizinischer Dauerbedarf besteht. Ausreichend Wohnraum für die Betreuungskraft vorhanden ist.' },
              { title: 'Pflegeheim notwendig wenn...', desc: 'Intensivpflege (Beatmung, kontinuierliche medizinische Überwachung) rund um die Uhr nötig ist. Aggressive Verhaltensweisen die Sicherheit der Betreuungskraft gefährden.' },
            ]}
          >
            <MehrDazu
              label="Vergleich:"
              links={[{ href: "/24h-pflege-vs-pflegeheim-kosten", text: "24h-Pflege vs. Pflegeheim" }, { href: "/pflegegrad-4", text: "Pflegegrad 4" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu Pflegegrad 5">
            <Fragen
              fragen={[
                { q: 'Was bekommt man bei Pflegegrad 5?', a: '990 € Pflegegeld/Monat (höchster Satz), 2.299 € Sachleistungen/Monat, 131 € Entlastungsbetrag/Monat, 3.539 € Entlastungsbudget/Jahr. Stand 2026, identisch zu 2025.' },
                { q: 'Was unterscheidet PG 5 von PG 4?', a: 'PG 5 erfordert 90–100 NBA-Punkte plus besonderen Beaufsichtigungs- und Begleitungsbedarf. Bei PG 4 reichen 70–89,9 Punkte. Pflegegeld PG 5: 990 € (+190 € gegenüber PG 4).' },
                { q: 'Kann man mit Pflegegrad 5 zuhause bleiben?', a: 'In vielen Fällen ja — mit einer 24h-Betreuungskraft die rund um die Uhr präsent ist. Nicht möglich bei intensivmedizinischem Dauerbedarf (Beatmung etc.) oder wenn aggressive Verhaltensweisen die Betreuungssicherheit gefährden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-5" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
