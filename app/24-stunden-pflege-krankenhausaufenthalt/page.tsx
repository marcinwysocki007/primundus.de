import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Gegenueber, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24-stunden-pflege-krankenhausaufenthalt', '17. September 2026')

// Wettbewerbs-Lücke (Analyse 14.08.): KEIN Anbieter beantwortet öffentlich,
// was bei Krankenhausaufenthalt, Ausfall der Kraft oder Wechsel gilt.
// Fakten von Martin bestätigt (14.08., Memory primundus-vertragsfakten):
// Krankenhaus = weiter zahlen wenn Kraft bleibt, sonst bis Abreise (höchstens 3 Tage);
// 17.09.2026 an den Mustervertrag angeglichen (Martin: „korrigiere die Nebenbefunde"): § 3 Nr. 6 Abwesenheit
// bis 7 Tage läuft weiter, ab Tag 8 ruht der Vertrag kostenlos; § 4 Nr. 6 Krankheitstage ohne Honorar; § 4 Nr. 7
// Wechseltag für beide Kräfte (Martin: normal, An- und Abreisetag sind Arbeitstage); § 4 Nr. 8 neun Feiertage
// mit doppeltem Tagessatz (Tagessatz = Monatspreis/30, Grundpreis 2.150 € aus dem Rechner).

// Inhaltsverzeichnis (neu mit der Vorlage: Zwischenüberschriften hatten keine Anker)
const SECTIONS = [
  { id: 'fall-1-ihre-mutter', title: "Fall 1: Ihre Mutter muss ins Krankenhaus — zahlen Sie weiter?" },
  { id: 'fall-2-die-betreuungskraft', title: "Fall 2: Die Betreuungskraft wird krank oder fällt aus" },
  { id: 'fall-3-die-chemie', title: "Fall 3: Die Chemie stimmt nicht — was kostet ein Wechsel?" },
  { id: 'fall-4-weihnachten-ostern', title: "Fall 4: Weihnachten, Ostern & Co. — was kosten Feiertage?" },
  { id: 'die-antworten-auf-einen', title: "Die Antworten auf einen Blick" },
]

export const metadata: Metadata = {
  title: 'Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24h-Pflege?',
  description:
    'Mutter im Krankenhaus — zahle ich die 24h-Pflege weiter? Was gilt, wenn die Betreuungskraft krank wird? Die klaren Antworten, die sonst keiner gibt.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege-krankenhausaufenthalt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24h-Pflege? | Primundus',
    description: 'Die klaren Antworten auf die Fragen, die sonst kein Anbieter öffentlich beantwortet.',
    url: 'https://primundus.de/24-stunden-pflege-krankenhausaufenthalt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24-Stunden-Pflege?',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-08-14',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24-stunden-pflege-krankenhausaufenthalt',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Muss ich die 24-Stunden-Pflege weiterzahlen, wenn meine Mutter ins Krankenhaus kommt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei Primundus entscheiden Sie: Bleibt die Betreuungskraft im Haus (führt den Haushalt weiter und ist bei der Rückkehr sofort da), läuft die Zahlung weiter; dauert der Aufenthalt länger als 7 Tage, ruht der Vertrag ab dem 8. Tag kostenlos, bis die Betreuung weitergeht. Soll sie abreisen, zahlen Sie nur noch bis zur Abreise, höchstens 3 Tage. Zusätzlich zahlt die Pflegekasse das Pflegegeld bei Krankenhausaufenthalten bis zu vier Wochen weiter.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was passiert, wenn die Betreuungskraft krank wird oder ausfällt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primundus stellt eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Die Tage, an denen die Betreuungskraft krank ist, berechnen wir nicht; für den Ersatz fallen nur die An- und Abreisekosten an.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kostet ein Wechsel der Betreuungskraft etwas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ob regulär alle 6–8 Wochen oder weil die Chemie nicht stimmt: Sie zahlen An- und Abreise mit 125 Euro je Strecke, und weil An- und Abreisetag Arbeitstage sind, berechnen wir am Wechseltag den Tagessatz für beide Betreuungskräfte. Eine Gebühr für den Wechsel gibt es nicht.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie hoch sind die Feiertagszuschläge bei der 24-Stunden-Pflege?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei Primundus gilt an neun Feiertagen der doppelte Tagessatz: Karfreitag, Ostersonntag, Ostermontag, 1. Mai, Heiligabend, 1. und 2. Weihnachtstag, Silvester und Neujahr. Beim Grundpreis von 2.150 Euro im Monat beträgt der Tagessatz rund 72 Euro, ein Feiertag kostet also rund 72 Euro Aufschlag, alle neun zusammen rund 645 Euro im Jahr.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Krankenhaus, Ausfall, Wechsel', item: 'https://primundus.de/24-stunden-pflege-krankenhausaufenthalt' },
    ],
  },
]

export default function KrankenhausPage() {
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
            { label: "Ratgeber", href: "/ratgeber" },
            { label: "Krankenhaus, Ausfall & Wechsel" },
          ]}
          augenbraue="Ratgeber Krankenhaus"
          titel="Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24-Stunden-Pflege wirklich?"
          einleitung="Es sind die Fragen, die Familien nachts wachhalten — und auf die man bei den meisten Anbietern keine öffentliche Antwort findet: Was passiert, wenn Mutter plötzlich ins Krankenhaus muss? Was, wenn die Betreuungskraft selbst krank wird? Und was kostet es, wenn die Chemie einfach nicht stimmt? Hier sind unsere Antworten — schriftlich, konkret und mit Zahlen. Genau so, wie Sie es von jedem Anbieter verlangen sollten."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="fall-1-ihre-mutter" titel="Fall 1: Ihre Mutter muss ins Krankenhaus — zahlen Sie weiter?">
            <Text>
              Bei Primundus entscheiden Sie selbst — es gibt zwei ehrliche Wege, beide mit klaren Kosten:
            </Text>
            <Gegenueber
              seiten={[
                { titel: 'Die Betreuungskraft bleibt im Haus', ton: 'taupe', text: 'Die Zahlung läuft weiter — dafür bleibt das Zuhause versorgt: Wäsche, Post, Blumen, Haustier. Ihre Mutter kommt in ein geführtes Zuhause zurück, nicht in eine verwaiste Wohnung, und die vertraute Kraft ist vom ersten Tag an wieder da. Bei kurzen Aufenthalten meist die bessere Wahl. Dauert der Aufenthalt länger als 7 Tage, ruht der Vertrag ab dem 8. Tag kostenlos, bis die Betreuung weitergeht.' },
                { titel: 'Die Betreuungskraft reist ab', ton: 'taupe', text: 'Sie zahlen nur noch bis zur Abreise, höchstens 3 Tage. Zur Rückkehr organisieren wir rechtzeitig eine neue Kraft; dafür fallen die üblichen Anreisekosten von 125 Euro an.' },
              ]}
            />
            <Kasten>
              <Text><strong>Gut zu wissen:</strong> Das Pflegegeld der Pflegekasse wird bei einem
              Krankenhausaufenthalt bis zu vier Wochen weitergezahlt — die wichtigste Förderung
              läuft also zunächst ungekürzt weiter.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="fall-2-die-betreuungskraft" titel="Fall 2: Die Betreuungskraft wird krank oder fällt aus">
            <Kasten>
              <Text>Dann ist es unsere Aufgabe, nicht Ihre: Primundus stellt eine Ersatzkraft. Durch unser Netzwerk aus
              tausenden geprüften Kräften ist sie in der Regel innerhalb von 3 Tagen im Haus, so steht es auch im
              Vertrag. Die Tage, an denen die Betreuungskraft krank ist, berechnen wir <strong>nicht</strong>; für den
              Ersatz fallen nur die An- und Abreisekosten an. Sie müssen nichts organisieren, niemanden suchen, nichts
              verhandeln — ein Anruf genügt.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="fall-3-die-chemie" titel="Fall 3: Die Chemie stimmt nicht — was kostet ein Wechsel?">
            <Kasten>
              <Text>Ob regulär alle 6–8 Wochen oder weil es menschlich einfach nicht passt: Sie zahlen An- und Abreise
              mit 125 Euro je Strecke. An- und Abreisetag sind Arbeitstage, am Wechseltag berechnen wir deshalb den
              Tagessatz für beide Betreuungskräfte. Eine <strong>Gebühr für den Wechsel</strong> gibt es nicht. Das nimmt
              den Druck aus der Entscheidung: Sie müssen mit niemandem „auskommen", der nicht zu Ihrer Familie passt.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="fall-4-weihnachten-ostern" titel="Fall 4: Weihnachten, Ostern &amp; Co. — was kosten Feiertage?">
            <Kasten>
              <Text>An neun Feiertagen gilt der <strong>doppelte Tagessatz</strong>: Karfreitag, Ostersonntag,
              Ostermontag, 1. Mai, Heiligabend, 1. und 2. Weihnachtstag, Silvester und Neujahr. Und weil wir Preise
              ehrlich nennen, hier die Rechnung: Beim Grundpreis von 2.150 Euro im Monat beträgt der Tagessatz rund
              72 Euro (Monatspreis geteilt durch 30). Ein Feiertag kostet also rund <strong>72 Euro Aufschlag</strong>,
              alle neun zusammen rund 645 Euro im Jahr. Das steht so im Vertrag, bevor Sie unterschreiben, nicht erst
              auf der Rechnung.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="die-antworten-auf-einen" titel="Die Antworten auf einen Blick">
            <Punkte
              punkte={[
                { title: "Muss ich die 24-Stunden-Pflege weiterzahlen, wenn meine Mutter ins Krankenhaus kommt?", desc: "Bei Primundus entscheiden Sie: Bleibt die Betreuungskraft im Haus (führt den Haushalt weiter und ist bei der Rückkehr sofort da), läuft die Zahlung weiter; dauert der Aufenthalt länger als 7 Tage, ruht der Vertrag ab dem 8. Tag kostenlos, bis die Betreuung weitergeht. Soll sie abreisen, zahlen Sie nur noch bis zur Abreise, höchstens 3 Tage. Zusätzlich zahlt die Pflegekasse das Pflegegeld bei Krankenhausaufenthalten bis zu vier Wochen weiter." },
                { title: "Was passiert, wenn die Betreuungskraft krank wird oder ausfällt?", desc: "Primundus stellt eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Die Tage, an denen die Betreuungskraft krank ist, berechnen wir nicht; für den Ersatz fallen nur die An- und Abreisekosten an." },
                { title: "Kostet ein Wechsel der Betreuungskraft etwas?", desc: "Ob regulär alle 6–8 Wochen oder weil die Chemie nicht stimmt: Sie zahlen An- und Abreise mit 125 Euro je Strecke, und weil An- und Abreisetag Arbeitstage sind, berechnen wir am Wechseltag den Tagessatz für beide Betreuungskräfte. Eine Gebühr für den Wechsel gibt es nicht." },
                { title: "Wie hoch sind die Feiertagszuschläge?", desc: <>An neun Feiertagen gilt der doppelte Tagessatz, beim Grundpreis von 2.150 Euro rund
                72 Euro Aufschlag je Feiertag. Mehr zu ehrlichen Gesamtkosten:{' '}
                <a href="/24-stunden-pflege-wirkliche-kosten" className="text-pm-taupe underline underline-offset-2">Die ehrliche Gesamtrechnung</a>.</> },
              ]}
            />
            <MehrDazu
              label="Weiterlesen:"
              links={[
                { href: '/24-stunden-pflege-wirkliche-kosten', text: 'Die ehrliche Gesamtrechnung' },
                { href: '/24-stunden-pflege-kostenuebernahme', text: 'Wer übernimmt die Kosten?' },
                { href: '/pflegekraft-wechseln', text: 'Pflegekraft wechseln' },
                { href: '/erste-hilfe-bei-pflegenotfall', text: 'Erste Hilfe im Pflegenotfall' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24-stunden-pflege-krankenhausaufenthalt" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
