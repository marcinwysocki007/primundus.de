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
          text: 'Drei verbreitete Mechanismen: Tagespreise statt Monatssummen (105 Euro am Tag klingt klein, sind aber über 3.100 Euro im Monat), „ab"-Preise, die nur für die einfachste Konstellation gelten, und unbezifferte Nebenkosten wie Kost und Logis, Fahrtkosten oder Feiertagszuschläge, die erst im Vertrag auftauchen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Nebenkosten kommen bei der 24-Stunden-Pflege üblicherweise dazu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typisch sind: Kost und Logis für die Betreuungskraft (bei Primundus mit 200 bis 300 Euro monatlich beziffert), An- und Abreisekosten bei Kraftwechseln sowie Zuschläge an Feiertagen. Seriöse Anbieter nennen diese Posten mit konkreten Zahlen, bevor Sie unterschreiben.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3 effektiv im Monat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Beispielrechnung: 2.800 Euro Betreuungskosten minus 599 Euro Pflegegeld, rund 295 Euro anteilige Verhinderungspflege und etwa 333 Euro monatliche Steuerersparnis — es bleiben rund 1.570 Euro effektiv selbst zu tragen (Stand August 2026).',
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
  'Was kommt für Kost und Logis der Betreuungskraft dazu — in Euro?',
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
                  Nachteinsätze, einfache Sprachkenntnisse der Kraft. Realistische Situationen liegen fast
                  immer darüber — fragen Sie deshalb nach der <strong>Spanne mit Obergrenze</strong>, nicht
                  nach dem Einstiegspreis. Und Vorsicht bei „ab"-Angaben, die bereits alle Zuschüsse
                  abgezogen haben: Das ist kein Preis, sondern ein Rechenergebnis für den günstigsten Fall.</> },
                { title: "3. Die unbezifferten Nebenkosten", desc: "Kost und Logis, An- und Abreise der Betreuungskraft, Feiertagszuschläge, Kosten bei einem Kraftwechsel: Diese Posten gehören zu jeder 24h-Betreuung — aber nicht jeder Anbieter beziffert sie vor Vertragsschluss. Was vorher nicht in Euro dasteht, steht später auf der Rechnung." },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="so-sieht-die-vollstaendige" titel="So sieht die vollständige Rechnung aus (Beispiel Pflegegrad 3)">
            {/* Rechnung: Betrag links, Posten rechts; die beiden Summenzeilen fett */}
            <Kasten>
              <Werte
                zeilen={[
                  [<>2.800 €</>, <>Betreuung (mittlere Anforderungen, gute Deutschkenntnisse)</>],
                  [<>+ 200–300 €</>, <>Kost &amp; Logis für die Betreuungskraft (bei Primundus beziffert)</>],
                  [<>≈ 3.050 €</>, <strong>Ehrliche Gesamtkosten</strong>],
                  [<>− 599 €</>, <>Pflegegeld (Pflegegrad 3)</>],
                  
                  [<>− 295 €</>, <>Verhinderungspflege (3.539 €/Jahr, monatlich verteilt)</>],
                  [<>− 333 €</>, <>Steuerermäßigung § 35a EStG (bis 4.000 €/Jahr)</>],
                  [<>≈ 1.570–1.820 €</>, <strong>Effektiv selbst zu tragen</strong>],
                ]}
              />
              <Text>
                Stand August 2026, Beispielwerte. Der Unterschied zu „ab 945 €"-Werbung: Wir zeigen den
                Rechenweg — jede Zeile können Sie bei Ihrer Pflegekasse und Ihrem Steuerberater nachprüfen.
                Ihre persönliche Rechnung erstellt der{' '}
                <a href="https://kostenrechner.primundus.de/" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Kostenrechner in 2 Minuten</a>.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="diese-7-fragen-stellen" titel="Diese 7 Fragen stellen Sie jedem Anbieter">
            <Text>
              Egal, bei wem Sie anfragen — auch bei uns: Ein seriöser Anbieter beantwortet alle sieben
              Fragen sofort und in Euro. Ausweichende Antworten sind ein Warnsignal.
            </Text>
            <Schritte schritte={FRAGEN.map((f) => ({ title: f }))} />
            <Kasten>
              <Text>
                <strong>Unsere Antworten:</strong> Gesamtpreis 2.200–3.500 € je nach Situation, Kost &amp;
                Logis 200–300 €, täglich kündbar ohne Mindestlaufzeit, Anreise schon in 3 Tagen möglich — und wir
                sind{' '}
                <a href="/testsieger-24-stunden-pflege" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">6× Testsieger bei DIE WELT</a>,
                sechsmal in Folge von 2021 bis 2026.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="haeufige-fragen" titel="Häufige Fragen">
            <Punkte
              punkte={[
                { title: "Warum wirken manche 24h-Pflege-Angebote so günstig?", desc: "Drei verbreitete Mechanismen: Tagespreise statt Monatssummen (105 Euro am Tag klingt klein, sind aber über 3.100 Euro im Monat), „ab\"-Preise, die nur für die einfachste Konstellation gelten, und unbezifferte Nebenkosten wie Kost und Logis, Fahrtkosten oder Feiertagszuschläge, die erst im Vertrag auftauchen." },
                { title: "Welche Nebenkosten kommen üblicherweise dazu?", desc: "Typisch sind: Kost und Logis für die Betreuungskraft (bei Primundus mit 200 bis 300 Euro monatlich beziffert), An- und Abreisekosten bei Kraftwechseln sowie Zuschläge an Feiertagen. Seriöse Anbieter nennen diese Posten mit konkreten Zahlen, bevor Sie unterschreiben." },
                { title: "Was kostet 24-Stunden-Pflege bei Pflegegrad 3 effektiv?", desc: <>Beispielrechnung: 2.800 Euro Betreuungskosten minus 599 Euro Pflegegeld, rund 295 Euro anteilige Verhinderungspflege und etwa 333 Euro monatliche Steuerersparnis — es bleiben rund 1.570 Euro effektiv selbst zu tragen. Alle Details:{' '}
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
