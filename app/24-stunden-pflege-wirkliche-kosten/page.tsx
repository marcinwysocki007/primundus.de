import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text, Werte,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24-stunden-pflege-wirkliche-kosten', '14. August 2026')

// Aus der Wettbewerbsanalyse 14.08.: Kein Anbieter zeigt eine ehrliche
// Gesamtrechnung — stattdessen Tagespreis-Anker, "ab"-Lockpreise und
// unbezifferte Nebenkosten. Dieser Artikel erklärt die Mechanismen OHNE
// Firmennamen (rechtlich sauber) und stellt unsere transparente Rechnung
// dagegen. Transparenz ist Primundus' stärkste Positionierung.

// Inhaltsverzeichnis (neu mit der Vorlage: Zwischenüberschriften hatten keine Anker)
const SECTIONS = [
  { id: 'drei-preis-verpackungen-die', title: "Drei Preis-Verpackungen, die Sie kennen sollten" },
  { id: 'so-sieht-die-vollstaendige', title: "So sieht die vollständige Rechnung aus (Beispiel Pflegegrad 3)" },
  { id: 'diese-7-fragen-stellen', title: "Diese 7 Fragen stellen Sie jedem Anbieter" },
  { id: 'haeufige-fragen', title: "Häufige Fragen" },
]

export const metadata: Metadata = {
  title: 'Was kostet 24-Stunden-Pflege wirklich? Die ehrliche Gesamtrechnung | Primundus',
  description:
    'Tagespreise, „ab"-Angebote, versteckte Nebenkosten: Woran Sie Lockangebote in der 24-Stunden-Pflege erkennen — und die ehrliche Gesamtrechnung mit allen Posten.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege-wirkliche-kosten' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Was kostet 24-Stunden-Pflege wirklich? | Primundus',
    description: 'Die ehrliche Gesamtrechnung — und die 7 Fragen, die Sie jedem Anbieter stellen sollten.',
    url: 'https://primundus.de/24-stunden-pflege-wirkliche-kosten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Was kostet 24-Stunden-Pflege wirklich? Die ehrliche Gesamtrechnung',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-08-14',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24-stunden-pflege-wirkliche-kosten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Warum wirken manche 24h-Pflege-Angebote so günstig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Drei verbreitete Mechanismen: Tagespreise statt Monatssummen (105 Euro am Tag klingt klein, sind aber über 3.100 Euro im Monat), „ab"-Preise, die nur für die einfachste Konstellation gelten, und unbezifferte Nebenkosten wie Fahrtkosten oder Feiertagszuschläge, die erst im Vertrag auftauchen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Nebenkosten kommen bei der 24-Stunden-Pflege üblicherweise dazu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typisch sind: An- und Abreisekosten der Betreuungskraft (bei Primundus 125 Euro je Strecke, auch bei einem Wechsel der Kraft) und Zuschläge an Feiertagen (bei Primundus der doppelte Tagessatz). Kost und Logis stellen Sie selbst: ein eigenes Zimmer und Verpflegung. Seriöse Anbieter nennen diese Posten mit konkreten Zahlen, bevor Sie unterschreiben.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3 effektiv im Monat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei Primundus ab 2.200 Euro im Monat. Nach 599 Euro Pflegegeld, rund 295 Euro anteiligem Entlastungsbudget und etwa 333 Euro Steuerermäßigung bleiben ab ca. 970 Euro effektiv selbst zu tragen. Dazu kommen An- und Abreise mit 125 Euro je Strecke (Stand September 2026).',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Die ehrliche Gesamtrechnung', item: 'https://primundus.de/24-stunden-pflege-wirkliche-kosten' },
    ],
  },
]

const FRAGEN = [
  'Wie hoch ist der Gesamtpreis pro Monat — nicht pro Tag, nicht „ab"?',
  'Was müssen Sie für Kost und Logis der Betreuungskraft stellen?',
  'Was kosten An- und Abreise, auch bei jedem Kraftwechsel?',
  'Wie hoch sind Feiertags- und Weihnachtszuschläge — konkret in Euro?',
  'Wie schnell kann ich kündigen, und kostet ein Wechsel der Kraft etwas?',
  'Was zahle ich, wenn meine Mutter ins Krankenhaus muss?',
  'Ist Ihre Auszeichnung oder Bewertung belegt — mit Link oder Dokument?',
]

export default function WirklicheKostenPage() {
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
            { label: "Kosten", href: "/kosten" },
            { label: "Die ehrliche Gesamtrechnung" },
          ]}
          augenbraue="Ratgeber Kosten"
          titel="Was kostet 24-Stunden-Pflege wirklich? Die ehrliche Gesamtrechnung"
          einleitung={"Wer Angebote für 24-Stunden-Pflege vergleicht, stößt auf erstaunlich unterschiedliche Zahlen: mal „105 Euro am Tag\", mal „ab 945 Euro Eigenanteil\", mal „ab 2.850 Euro\". Alle drei Angaben können sich am Ende auf denselben Monatsbetrag summieren — sie sind nur unterschiedlich verpackt. Hier lesen Sie, wie Sie Preisangaben richtig deuten, welche Nebenkosten oft fehlen und wie eine vollständige Rechnung aussieht."}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="drei-preis-verpackungen-die" titel="Drei Preis-Verpackungen, die Sie kennen sollten">
            <Punkte
              punkte={[
                { title: "1. Der Tagespreis-Anker", desc: <>„105 Euro am Tag" klingt überschaubar — ein Restaurantbesuch für zwei. Gerechnet auf den
                  Monat sind es aber über <strong>3.100 Euro</strong>. Rechnen Sie Tagespreise immer mal 30,
                  bevor Sie vergleichen.</> },
                { title: "2. Der „ab\"-Preis", desc: <>„Ab"-Preise gelten für die einfachste denkbare Situation: eine mobile Person, keine
                  Nachteinsätze, einfache Sprachkenntnisse der Kraft. Fragen Sie deshalb, was <strong>Ihre
                  Situation</strong> kostet — ein seriöser Anbieter nennt Ihnen diesen Preis, bevor Sie
                  unterschreiben. Und Vorsicht bei „ab"-Angaben, die bereits alle Zuschüsse
                  abgezogen haben: Das ist kein Preis, sondern ein Rechenergebnis für den günstigsten Fall — seriös nur mit Rechenweg.</> },
                { title: "3. Die unbezifferten Nebenkosten", desc: "An- und Abreise der Betreuungskraft, Feiertagszuschläge, Kosten bei einem Kraftwechsel: Diese Posten gehören zu jeder 24h-Betreuung — aber nicht jeder Anbieter beziffert sie vor Vertragsschluss. Was vorher nicht in Euro dasteht, steht später auf der Rechnung." },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="so-sieht-die-vollstaendige" titel="So sieht die vollständige Rechnung aus (Beispiel Pflegegrad 3)">
            {/* Rechnung: Betrag links, Posten rechts. Martin 17.09.: Entlastungsbudget und Steuervorteil
                gehören in den Eigenanteil, und alle Kosten, die dazukommen können, müssen auf der Seite stehen. */}
            <Kasten>
              <Werte
                zeilen={[
                  [<>ab 2.200 €</>, <>Betreuung im Monat bei Primundus</>],
                  [<>− 599 €</>, <>Pflegegeld (Pflegegrad 3)</>],
                  [<>− 295 €</>, <>Entlastungsbudget (3.539 € im Jahr, monatlich verteilt)</>],
                  [<>− 333 €</>, <>Steuerermäßigung § 35a EStG (bis 4.000 € im Jahr)</>],
                  [<>ab ca. 970 €</>, <strong>Effektiv selbst zu tragen im Monat</strong>],
                ]}
              />
              <Text>
                Stand September 2026. Entlastungsbudget und Steuerermäßigung hängen von Ihrer Situation ab. Der
                Unterschied zu „ab 945 €"-Werbung: Wir zeigen den Rechenweg und alle Kosten, die dazukommen können —
                jede Zeile können Sie bei Ihrer Pflegekasse und Ihrem Steuerberater nachprüfen. Ihre persönliche
                Rechnung erstellt der{' '}
                <a href="https://kostenrechner.primundus.de/" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Kostenrechner in 2 Minuten</a>.
              </Text>
            </Kasten>
            <Kasten titel="Diese Kosten können dazukommen">
              <Werte
                zeilen={[
                  [<>125 € je Strecke</>, <>An- und Abreise der Betreuungskraft, auch bei einem Wechsel der Kraft</>],
                  [<>doppelter Tagessatz</>, <>an gesetzlichen Feiertagen, bei 2.200 € im Monat ca. 73 € mehr je Feiertag</>],
                  [<>Preis läuft weiter</>, <>bei einem Krankenhausaufenthalt, wenn die Betreuungskraft im Haushalt bleibt; sonst bis zur Abreise, meist 2 bis 3 Tage</>],
                  [<>gestellt</>, <>Kost und Logis: ein eigenes Zimmer und Verpflegung</>],
                  [<>0 €</>, <>Vermittlungsgebühr, Anzahlung oder Vorauszahlung</>],
                ]}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="diese-7-fragen-stellen" titel="Diese 7 Fragen stellen Sie jedem Anbieter">
            <Text>
              Egal, bei wem Sie anfragen — auch bei uns: Ein seriöser Anbieter beantwortet alle sieben
              Fragen sofort und konkret. Ausweichende Antworten sind ein Warnsignal.
            </Text>
            <Schritte schritte={FRAGEN.map((f) => ({ title: f }))} />
            <Kasten titel="Unsere Antworten">
              <Werte
                zeilen={[
                  [<>1. Preis</>, <>ab 2.200 € im Monat, bei Pflegegrad 3 ab ca. 970 € Eigenanteil (Rechnung oben); den Preis für Ihre Situation zeigt der Kostenrechner sofort</>],
                  [<>2. Kost und Logis</>, <>ein eigenes Zimmer und Verpflegung stellen Sie</>],
                  [<>3. An- und Abreise</>, <>125 € je Strecke, auch bei jedem Wechsel der Kraft</>],
                  [<>4. Feiertage</>, <>doppelter Tagessatz, bei 2.200 € im Monat ca. 73 € mehr je Feiertag</>],
                  [<>5. Kündigung</>, <>täglich kündbar ohne Mindestlaufzeit; ein Wechsel der Kraft kostet nur die An- und Abreise</>],
                  [<>6. Krankenhaus</>, <>bleibt die Betreuungskraft im Haushalt, läuft der Preis weiter; sonst bis zur Abreise, meist 2 bis 3 Tage</>],
                  [<>7. Auszeichnung</>, <><a href="/testsieger-24-stunden-pflege" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">sechsmal in Folge Testsieger bei DIE WELT</a>, mit Original-Siegel und Veröffentlichung</>],
                ]}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="haeufige-fragen" titel="Häufige Fragen">
            <Punkte
              punkte={[
                { title: "Warum wirken manche 24h-Pflege-Angebote so günstig?", desc: "Drei verbreitete Mechanismen: Tagespreise statt Monatssummen (105 Euro am Tag klingt klein, sind aber über 3.100 Euro im Monat), „ab\"-Preise, die nur für die einfachste Konstellation gelten, und unbezifferte Nebenkosten wie Fahrtkosten oder Feiertagszuschläge, die erst im Vertrag auftauchen." },
                { title: "Welche Nebenkosten kommen üblicherweise dazu?", desc: "Typisch sind: An- und Abreisekosten der Betreuungskraft (bei Primundus 125 Euro je Strecke, auch bei einem Wechsel der Kraft) und Zuschläge an Feiertagen (bei Primundus der doppelte Tagessatz). Kost und Logis stellen Sie selbst: ein eigenes Zimmer und Verpflegung. Seriöse Anbieter nennen diese Posten mit konkreten Zahlen, bevor Sie unterschreiben." },
                { title: "Was kostet 24-Stunden-Pflege bei Pflegegrad 3 effektiv?", desc: <>Bei Primundus ab 2.200 Euro im Monat. Nach 599 Euro Pflegegeld, rund 295 Euro anteiligem Entlastungsbudget und etwa 333 Euro Steuerermäßigung bleiben ab ca. 970 Euro effektiv selbst zu tragen. Dazu kommen An- und Abreise mit 125 Euro je Strecke. Alle Details:{' '}
                <a href="/24-stunden-pflege-kostenuebernahme" className="text-pm-taupe underline underline-offset-2">Wer übernimmt die Kosten?</a></> },
              ]}
            />
            <MehrDazu
              label="Weiterlesen:"
              links={[
                { href: '/kosten', text: 'Kosten & Finanzierung' },
                { href: '/24-stunden-pflege-kostenuebernahme', text: 'Wer übernimmt die Kosten?' },
                { href: '/eigenanteil-24h-pflege-senken', text: 'Eigenanteil senken' },
                { href: '/testsieger-24-stunden-pflege', text: 'Unsere Auszeichnung: 6× Testsieger DIE WELT' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24-stunden-pflege-wirkliche-kosten" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
