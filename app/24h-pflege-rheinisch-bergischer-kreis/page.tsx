import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, MehrDazu, Punkte,
  RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const SECTIONS = [
  { id: 'pflege-im-bergischen-hanglagen', title: "Pflege im Bergischen: Hanglagen, weite Wege, volle Heime" },
  { id: 'unser-einsatzgebiet-im-rheinisch', title: "Unser Einsatzgebiet im Rheinisch-Bergischen Kreis" },
  { id: 'was-kostet-das-und', title: "Was kostet das — und was zahlt die Pflegekasse dazu?" },
  { id: 'polnische-betreuungskraefte-im-rheinisch', title: "Polnische Betreuungskräfte im Rheinisch-Bergischen Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Rheinisch-Bergischer Kreis ausmacht" },
  { id: 'einzugsgebiet-rheinisch-bergischer-kreis', title: "Einzugsgebiet Rheinisch-Bergischer Kreis" },
  { id: 'haeufige-fragen-aus-dem', title: "Häufige Fragen aus dem Kreis" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Rheinisch-Bergischer Kreis',
  description:
    '24h-Pflege im Rheinisch-Bergischen Kreis: Betreuungskraft zuhause in Wermelskirchen, Overath, Rösrath & dem ganzen Kreis. Täglich kündbar, Anreise in 3 Tagen möglich.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege im Rheinisch-Bergischen Kreis | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft im Rheinisch-Bergischen Kreis. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis#service',
    name: 'Primundus — 24h-Pflege Rheinisch-Bergischer Kreis',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte im Rheinisch-Bergischen Kreis. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Rheinisch-Bergischer Kreis' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Rheinisch-Bergischer Kreis', item: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft im Rheinisch-Bergischen Kreis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen — in der Regel weniger als ein Heimplatz im Rheinland.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte im Rheinisch-Bergischen Kreis deckt Primundus ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Den ganzen Kreis: Bergisch Gladbach, Wermelskirchen, Overath, Rösrath, Leichlingen, Burscheid, Odenthal und Kürten — von der Kölner Stadtgrenze bis ins Bergische Land.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann die Betreuung im Bergischen starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf, etwa nach einem Klinikaufenthalt, oft auch schneller.',
        },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft im Rheinisch-Bergischen Kreis?', a: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen — in der Regel weniger als ein Heimplatz im Rheinland.' },
  { q: 'Welche Orte im Rheinisch-Bergischen Kreis deckt Primundus ab?', a: 'Den ganzen Kreis: Bergisch Gladbach, Wermelskirchen, Overath, Rösrath, Leichlingen, Burscheid, Odenthal und Kürten — von der Kölner Stadtgrenze bis ins Bergische Land.' },
  { q: 'Wie schnell kann die Betreuung im Bergischen starten?', a: 'In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf, etwa nach einem Klinikaufenthalt, oft auch schneller.' },
]

export default function Page() {
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
            { label: 'Regionen', href: '/regionen' },
            { label: 'Rheinisch-Bergischer Kreis' },
          ]}
          augenbraue="24-Stunden-Pflege in Rheinisch-Bergischer Kreis"
          titel="24h-Pflege im Rheinisch-Bergischen Kreis — Betreuung im eigenen Zuhause"
          einleitung={<>Vom Haus am Hang in Wermelskirchen bis zum Garten in Rösrath: Im Bergischen wohnt man mit Aussicht — und bleibt gern, auch wenn die Kinder längst in Köln arbeiten. Wenn Mutter oder Vater mehr Hilfe brauchen, als Wochenendbesuche leisten können, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, meist Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Rheinisch-Bergischer Kreis auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflege-im-bergischen-hanglagen" titel="Pflege im Bergischen: Hanglagen, weite Wege, volle Heime">
            <Text>Zwischen Kölner Stadtrand und Bergischem Land ist das Eigenheim die Regel — oft mit Treppen, Garten und ohne Bus vor der Tür. Genau das macht ambulante Versorgung schwer planbar und den Heimplatz zur ungeliebten Notlösung. Die 24h-Betreuung löst beides: Eine Kraft wohnt mit im Haus, die Wege entfallen, und das Zuhause bleibt der Lebensmittelpunkt.</Text>
            <Punkte
              punkte={[
                { title: 'Haus & Hanglage bleiben', desc: 'Kein Umzug, keine Haushaltsauflösung' },
                { title: 'Vertrautes Bergisches', desc: 'Nachbarn, Kirche, Verein — alles bleibt nah' },
                { title: 'Köln-Pendler entlastet', desc: 'Die Familie muss nicht täglich rausfahren' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="unser-einsatzgebiet-im-rheinisch" titel="Unser Einsatzgebiet im Rheinisch-Bergischen Kreis">
            <Text>Wir sind im gesamten Kreis im Einsatz:{' '} <a href="/24h-pflege-bergisch-gladbach" className="text-pm-taupe underline underline-offset-2">Bergisch Gladbach</a>{' '} mit Bensberg und Refrath, <strong>Wermelskirchen</strong>, <strong>Overath</strong>,{' '} <strong>Rösrath</strong>, <strong>Leichlingen</strong>, <strong>Burscheid</strong>,{' '} <strong>Odenthal</strong> und <strong>Kürten</strong>. Auch{' '} <a href="/24h-pflege-koeln" className="text-pm-taupe underline underline-offset-2">Köln</a> und{' '} <a href="/24h-pflege-leverkusen" className="text-pm-taupe underline underline-offset-2">Leverkusen</a>{' '} haben eigene Seiten.</Text>
          </Abschnitt>

          <Abschnitt id="was-kostet-das-und" titel="Was kostet das — und was zahlt die Pflegekasse dazu?">
            <Text>Eine 24h-Betreuung kostet über Primundus <strong>ab 2.150 Euro im Monat</strong> — abhängig von Pflegesituation, nächtlichem Hilfebedarf und Deutschkenntnissen der Betreuungskraft. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3{' '}<strong>ab ca. 923 Euro</strong> selbst zu tragen — meist weniger als ein Heimplatz im Rheinland, und ohne dass jemand sein Bergisches aufgeben muss.</Text>
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/pflegegrad-rechner', text: 'Unsicher beim Pflegegrad? Hier mit denselben sechs Modulen rechnen wie bei der Begutachtung' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-im-rheinisch" titel="Polnische Betreuungskräfte im Rheinisch-Bergischen Kreis">
            <Text>Wer im Rheinisch-Bergischen Kreis nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind im gesamten Kreisgebiet im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Der Kostenvergleich fällt im Rheinisch-Bergischen Kreis deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil. Ein Heimplatz kostet in Nordrhein-Westfalen im ersten Jahr im Schnitt rund 3.580 Euro im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Rheinisch-Bergischer Kreis ausmacht">
            <Text>Gut jeder zweite Haushalt in Rheinisch-Bergischer Kreis wohnt im Eigentum — in Nordrhein-Westfalen sind es 40,6 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. Die durchschnittliche Wohnung misst 103,7 Quadratmeter und damit rund 11 Quadratmeter mehr als im Schnitt von Nordrhein-Westfalen (92,7).</Text>
            <Text>Beim Platz steht Rheinisch-Bergischer Kreis besser da als das Land: Nur 15,3 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Nordrhein-Westfalen sind es 22,4 Prozent. Das Zimmer für eine Betreuungskraft ist hier meist schon vorhanden. Altbau vor 1950 macht in Rheinisch-Bergischer Kreis 13,3 Prozent des Bestands aus, in Nordrhein-Westfalen 19,7 Prozent.</Text>
            <Text>Reihenhäuser sind in Rheinisch-Bergischer Kreis mit 17,1 Prozent seltener als in Nordrhein-Westfalen (27,2 Prozent). Rheinisch-Bergischer Kreis ist älter als das Land: 12,5 Prozent der Einwohner sind 75 Jahre oder älter — das sind 35.199 Menschen, in Nordrhein-Westfalen sind es 10,7 Prozent. Gut jeder vierte Haushalt in Rheinisch-Bergischer Kreis besteht nur aus Menschen ab 65 — in Nordrhein-Westfalen 24,2 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist.</Text>
            <Text>In Zahlen: 35.199 Menschen in Rheinisch-Bergischer Kreis sind 75 Jahre oder älter, und es gibt 140.815 Wohnungen in 75.548 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-rheinisch-bergischer-kreis" titel="Einzugsgebiet Rheinisch-Bergischer Kreis">
            <NearbyCities current="rheinisch-bergischer-kreis" />
          </Abschnitt>

          <Abschnitt id="haeufige-fragen-aus-dem" titel="Häufige Fragen aus dem Kreis">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
