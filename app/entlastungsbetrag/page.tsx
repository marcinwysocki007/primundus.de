import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('entlastungsbetrag', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist der Entlastungsbetrag?' },
  { id: 'wofuer', title: 'Wofür kann man ihn nutzen?' },
  { id: 'anspruch', title: 'Wer hat Anspruch?' },
  { id: 'beantragen', title: 'Beantragen & abrechnen' },
  { id: 'kombination', title: 'Mit anderen Leistungen kombinieren' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Entlastungsbetrag 2026 — 131 € pro Monat richtig nutzen',
  description: 'Entlastungsbetrag 2026: 131 €/Monat für alle Pflegegrade 1–5. Wofür er nutzbar ist, wie man ihn beantragt und wie er mit Pflegegeld und 24h-Pflege.',
  alternates: { canonical: 'https://primundus.de/entlastungsbetrag' },
  openGraph: {
    title: 'Entlastungsbetrag 2026 — 131 €/Monat | Primundus',
    description: '131 €/Monat für alle Pflegegrade 1–5. Wofür nutzbar, wie beantragen, wie kombinieren.',
    url: 'https://primundus.de/entlastungsbetrag',
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
    headline: 'Entlastungsbetrag 2026 — 131 Euro pro Monat richtig nutzen',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/entlastungsbetrag',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Entlastungsbetrag', item: 'https://primundus.de/entlastungsbetrag' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie hoch ist der Entlastungsbetrag 2026?', acceptedAnswer: { '@type': 'Answer', text: '131 Euro pro Monat — identisch zu 2025. Der Entlastungsbetrag gilt für alle Pflegegrade 1 bis 5 und ist zusätzlich zum Pflegegeld. Er ist zweckgebunden und kann nur für anerkannte Betreuungs- und Entlastungsangebote verwendet werden.' } },
      { '@type': 'Question', name: 'Wofür kann ich den Entlastungsbetrag nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Für anerkannte Betreuungs- und Entlastungsangebote: Tages-/Nachtpflege, ambulante Pflegedienste (bei PG 1 auch für körperbezogene Pflege), hauswirtschaftliche Versorgung durch anerkannte Anbieter, Betreuungsgruppen, Nachbarschaftshilfe. Nicht für private Pflegepersonen ohne Anerkennung.' } },
      { '@type': 'Question', name: 'Verfällt der Entlastungsbetrag am Jahresende?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht genutzter Entlastungsbetrag kann bis zum 30. Juni des Folgejahres angespart und genutzt werden (max. 1.572 €). Das ist anders als beim Entlastungsbudget (Verhinderungspflege/Kurzzeitpflege), das am 31. Dezember verfällt.' } },
    ],
  },
]

export default function Entlastungsbetrag() {
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
            { label: "Finanzierung", href: "/finanzierung" },
            { label: "Entlastungsbetrag" },
          ]}
          augenbraue="Ratgeber Finanzierung"
          titel="Entlastungsbetrag 2026 — 131 € pro Monat richtig nutzen"
          einleitung="Der Entlastungsbetrag beträgt 131 Euro pro Monat — für alle Pflegegrade 1 bis 5, zusätzlich zum Pflegegeld. Er ist zweckgebunden, wird von vielen Familien nicht vollständig genutzt, und kann bis zu 1.572 Euro angespart werden. Wer die Regeln kennt, holt das Maximum heraus."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blick={[
                'Betrag: 131 €/Monat — für alle Pflegegrade 1 bis 5',
                'Zusätzlich zum Pflegegeld — keine gegenseitige Anrechnung',
                'Zweckgebunden: nur für anerkannte Betreuungs- und Entlastungsangebote',
                'Ansparung möglich: bis zu 1.572 €, nutzbar bis 30. Juni des Folgejahres',
                '2026 identisch zu 2025 — nächste Anpassung frühestens 2028',
                'Viele Anbieter unbekannt — Pflegekasse nach anerkannten Diensten fragen',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist der Entlastungsbetrag?">
            <Text>
              Der Entlastungsbetrag (§ 45b SGB XI) ist eine monatliche Leistung der Pflegekasse, die pflegende Angehörige und Pflegebedürftige bei der Organisation von Betreuung und Unterstützung finanziell entlastet. Er beträgt 131 Euro pro Monat und gilt für alle Pflegegrade 1 bis 5.
            </Text>
            <Text>
              Im Gegensatz zum Pflegegeld wird der Entlastungsbetrag nicht bar ausgezahlt — er wird als Erstattung gezahlt. Die Familie bezahlt zunächst selbst, reicht dann die Rechnung bei der Pflegekasse ein und bekommt bis zu 131 Euro erstattet.
            </Text>
            <Text>
              <strong>Wichtiger Unterschied zum Entlastungsbudget:</strong> Der Entlastungsbetrag (131 €/Monat) ist eine eigenständige Leistung und läuft vollständig parallel zum Entlastungsbudget (3.539 €/Jahr) — sie schließen sich nicht aus und werden nicht gegeneinander aufgerechnet.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="wofuer"
            titel="Wofür kann man den Entlastungsbetrag nutzen?"
            einleitung="Der Entlastungsbetrag ist zweckgebunden — nur für anerkannte Angebote. Was genau anerkannt ist, variiert je nach Bundesland leicht. Die Pflegekasse gibt auf Anfrage eine Liste anerkannter Anbieter."
            punkte={[
              { title: '✓ Tages- und Nachtpflege', desc: 'Tagesaufenthalte in einer Tagespflegeeinrichtung — der Eigenanteil kann aus dem Entlastungsbetrag bezahlt werden.' },
              { title: '✓ Ambulante Pflegedienste', desc: 'Bei Pflegegrad 1 auch für körperbezogene Pflege nutzbar. Bei PG 2–5 für ergänzende Leistungen die über die Sachleistungen hinausgehen.' },
              { title: '✓ Hauswirtschaftliche Versorgung', desc: 'Durch anerkannte Anbieter — Putzen, Kochen, Einkaufen. Nicht durch private Personen ohne Anerkennung.' },
              { title: '✓ Betreuungsgruppen', desc: 'Für Menschen mit Demenz oder geistiger Behinderung — Gruppenangebote die Struktur und Gesellschaft bieten.' },
              { title: '✓ Angebote zur Unterstützung im Alltag', desc: 'Vorlesedienste, Begleitdienste, ehrenamtliche Helfer über anerkannte Organisationen.' },
              { title: '✗ Private Pflegepersonen ohne Anerkennung', desc: 'Angehörige oder Bekannte die nicht über einen anerkannten Anbieter tätig sind, können nicht abgerechnet werden.' },
            ]}
          />

          <Abschnitt id="anspruch" titel="Wer hat Anspruch?">
            <Text>
              Der Entlastungsbetrag steht allen pflegebedürftigen Personen mit Pflegegrad 1 bis 5 zu — unabhängig davon ob sie zu Hause oder in einer Pflegeeinrichtung leben. Er ist damit die einzige Kassenleistung, die auch bei Pflegegrad 1 ohne Pflegegeld-Anspruch gilt.
            </Text>
            <Tabelle
              titel="Entlastungsbetrag nach Pflegegrad"
              zeilen={[
                ['Pflegegrad 1', '131 €/Monat', 'Kein Pflegegeld — Entlastungsbetrag ist einzige Kassenleistung'],
                ['Pflegegrad 2', '131 €/Monat', 'Zusätzlich zu 347 € Pflegegeld'],
                ['Pflegegrad 3', '131 €/Monat', 'Zusätzlich zu 599 € Pflegegeld'],
                ['Pflegegrad 4', '131 €/Monat', 'Zusätzlich zu 800 € Pflegegeld'],
                ['Pflegegrad 5', '131 €/Monat', 'Zusätzlich zu 990 € Pflegegeld'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="beantragen" titel="Beantragen & abrechnen">
            <Text>
              Der Entlastungsbetrag ist automatisch Teil des Pflegegradantrags — er muss nicht separat beantragt werden. Die Abrechnung läuft über Rechnungserstattung.
            </Text>
            <Schritte
              schritte={[
                { title: 'Anerkannten Anbieter finden', desc: 'Pflegekasse nach einer Liste anerkannter Angebote zur Unterstützung im Alltag fragen. Nicht alle Anbieter sind automatisch anerkannt.' },
                { title: 'Leistung in Anspruch nehmen', desc: 'Den Dienst nutzen — Rechnung stellen lassen. Wichtig: Die Rechnung muss auf den Pflegebedürftigen lauten.' },
                { title: 'Rechnung einreichen', desc: 'Rechnungsoriginal mit Überweisungsbeleg bei der Pflegekasse einreichen — per Post oder digitaler Pflegekassen-App.' },
                { title: 'Erstattung erhalten', desc: 'Die Pflegekasse erstattet bis zu 131 €/Monat — innerhalb weniger Wochen auf das angegebene Konto.' },
              ]}
            />
            <Kasten titel="Ansparung: bis zu 1.572 € nutzbar" ton="gruen">
              <Text>Nicht genutzter Entlastungsbetrag verfällt nicht sofort — er kann bis zum 30. Juni des Folgejahres angespart werden. Maximal 12 Monatsbeiträge × 131 € = 1.572 €. Das ermöglicht eine größere Ausgabe zu finanzieren, z.B. mehrere Wochen Tagespflege am Stück.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="kombination" titel="Mit anderen Leistungen kombinieren">
            <Text>
              Der Entlastungsbetrag läuft vollständig parallel zu allen anderen Pflegekassenleistungen — kein Abzug, keine Anrechnung.
            </Text>
            <Punkte
              punkte={[
                { title: 'Entlastungsbetrag + Pflegegeld', desc: '131 €/Monat zusätzlich zum Pflegegeld — bei PG 3 macht das 730 €/Monat Gesamtentlastung durch die Kasse.' },
                { title: 'Entlastungsbetrag + Entlastungsbudget', desc: 'Beide laufen parallel — Entlastungsbudget (3.539 €/Jahr) für Verhinderungs-/Kurzzeitpflege, Entlastungsbetrag (131 €/Monat) für Alltagsentlastung.' },
                { title: 'Entlastungsbetrag + 24h-Pflege', desc: 'Wenn die 24h-Betreuungskraft über einen anerkannten Anbieter kommt, können Teile der Kosten über den Entlastungsbetrag abgerechnet werden. Primundus berät individuell.' },
              ]}
            />
            <MehrDazu
              label="Alle Zuschüsse zusammen:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Zuschüsse 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Entlastungsbetrag">
            <Fragen
              fragen={[
                { q: 'Wie hoch ist der Entlastungsbetrag 2026?', a: '131 Euro pro Monat — identisch zu 2025. Gilt für alle Pflegegrade 1 bis 5, zusätzlich zum Pflegegeld.' },
                { q: 'Wofür kann ich den Entlastungsbetrag nutzen?', a: 'Für anerkannte Betreuungs- und Entlastungsangebote: Tages-/Nachtpflege, ambulante Pflegedienste, hauswirtschaftliche Hilfe durch anerkannte Anbieter, Betreuungsgruppen. Nicht für private Pflegepersonen ohne Anerkennung.' },
                { q: 'Verfällt der Entlastungsbetrag am Jahresende?', a: 'Nein — nicht genutzter Entlastungsbetrag kann bis zum 30. Juni des Folgejahres angespart werden, maximal 1.572 €. Das ist anders als beim Entlastungsbudget (Verhinderungs-/Kurzzeitpflege), das am 31. Dezember verfällt.' },
                { q: 'Wie unterscheidet sich Entlastungsbetrag vom Entlastungsbudget?', a: 'Der Entlastungsbetrag (131 €/Monat, alle PG) ist für Alltagsentlastung. Das Entlastungsbudget (3.539 €/Jahr, PG 2–5) ist für Verhinderungs- und Kurzzeitpflege. Beide laufen parallel, keine gegenseitige Anrechnung.' },
                { q: 'Bekommt man den Entlastungsbetrag automatisch?', a: 'Er steht automatisch zu wenn ein Pflegegrad vorliegt — aber er wird nicht automatisch ausgezahlt. Man muss Rechnungen anerkannter Anbieter einreichen und bekommt bis zu 131 €/Monat erstattet.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="entlastungsbetrag" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
