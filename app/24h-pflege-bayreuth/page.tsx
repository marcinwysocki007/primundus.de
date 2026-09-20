import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import {
  MehrDazu, Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const SECTIONS = [
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bayreuth bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bayreuth 2026" },
  { id: 'polnische-betreuungskraefte-in-bayreuth', title: "Polnische Betreuungskräfte in Bayreuth" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Bayreuth" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bayreuth ausmacht" },
  { id: 'einzugsgebiet-bayreuth', title: "Einzugsgebiet Bayreuth" },
  { id: 'werkzeuge', title: "Was es in Bayreuth kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bayreuth" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bayreuth: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Bayreuth: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bayreuth' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bayreuth — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bayreuth. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bayreuth',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bayreuth#service',
    name: 'Primundus — 24h-Pflege Bayreuth',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bayreuth. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bayreuth',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bayreuth' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bayreuth', item: 'https://primundus.de/24h-pflege-bayreuth' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bayreuth?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Bayern besondere Pflegeförderungen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bayreuth starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bayreuth rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wir pflegen im Landkreis bisher selbst — ist eine Betreuungskraft trotzdem sinnvoll?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gerade dann. Im Landkreis Bayreuth wird fast die Hälfte der Menschen mit Pflegegrad 5 zu Hause versorgt statt im Heim — und zwei Drittel der ambulanten Dienste im Landkreis führen inzwischen eine Warteliste, neun von zehn haben offene Stellen. Diese Last tragen die Angehörigen. Eine Betreuungskraft ersetzt Sie nicht, sie übernimmt die Dauerbelastung: Nächte, Wochenenden, die Stunden dazwischen. Pflegegeld und Betreuung lassen sich dabei kombinieren.' },
      },
      {
        '@type': 'Question',
        name: 'Kommt eine Betreuungskraft auch in die Orte im Landkreis Bayreuth?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, und dort ist der Unterschied besonders groß. Der Landkreis Bayreuth zählt nur rund 81 Einwohner je Quadratkilometer und gehört damit zu den am dünnsten besiedelten Bayerns. Ambulante Dienste fahren entsprechend lange Touren, und die Termine richten sich nach der Route statt nach Ihrem Tagesablauf. Eine Betreuungskraft, die im Haus wohnt, braucht keine Anfahrt. Der Preis ist im Landkreis derselbe wie in der Stadt, Anfahrtskosten berechnen wir nicht.' },
      },
      {
        '@type': 'Question',
        name: 'Wo bekomme ich in Bayreuth unabhängige Beratung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seit Juli 2025 gibt es in Bayreuth einen eigenen Pflegestützpunkt, getragen von Stadt, Bezirk Oberfranken und den Pflegekassen. Die Beratung ist kostenlos, unabhängig von Anbietern und auf Wunsch bei Ihnen zu Hause — dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI). Für pflegende Angehörige besteht zusätzlich eine eigene Fachstelle. Wir empfehlen ausdrücklich, dieses Angebot zu nutzen, bevor Sie sich für einen Weg entscheiden.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bayreuth bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bayreuth und Landkreis Bayreuth: Pegnitz, Creußen, Hollfeld und alle Gemeinden im Landkreis Bayreuth und Kulmbach' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bayreuth?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bayreuth starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bayreuth rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wir pflegen im Landkreis bisher selbst — ist eine Betreuungskraft trotzdem sinnvoll?', a: 'Gerade dann. Im Landkreis Bayreuth wird fast die Hälfte der Menschen mit Pflegegrad 5 zu Hause versorgt statt im Heim — und zwei Drittel der ambulanten Dienste im Landkreis führen inzwischen eine Warteliste, neun von zehn haben offene Stellen. Diese Last tragen die Angehörigen. Eine Betreuungskraft ersetzt Sie nicht, sie übernimmt die Dauerbelastung: Nächte, Wochenenden, die Stunden dazwischen. Pflegegeld und Betreuung lassen sich dabei kombinieren.' },
  { q: 'Kommt eine Betreuungskraft auch in die Orte im Landkreis Bayreuth?', a: 'Ja, und dort ist der Unterschied besonders groß. Der Landkreis Bayreuth zählt nur rund 81 Einwohner je Quadratkilometer und gehört damit zu den am dünnsten besiedelten Bayerns. Ambulante Dienste fahren entsprechend lange Touren, und die Termine richten sich nach der Route statt nach Ihrem Tagesablauf. Eine Betreuungskraft, die im Haus wohnt, braucht keine Anfahrt. Der Preis ist im Landkreis derselbe wie in der Stadt, Anfahrtskosten berechnen wir nicht.' },
  { q: 'Wo bekomme ich in Bayreuth unabhängige Beratung?', a: 'Seit Juli 2025 gibt es in Bayreuth einen eigenen Pflegestützpunkt, getragen von Stadt, Bezirk Oberfranken und den Pflegekassen. Die Beratung ist kostenlos, unabhängig von Anbietern und auf Wunsch bei Ihnen zu Hause — dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI). Für pflegende Angehörige besteht zusätzlich eine eigene Fachstelle. Wir empfehlen ausdrücklich, dieses Angebot zu nutzen, bevor Sie sich für einen Weg entscheiden.' },
  { q: 'Welches Einzugsgebiet wird in Bayreuth bedient?', a: 'Bayreuth und Landkreis Bayreuth: Pegnitz, Creußen, Hollfeld und alle Gemeinden im Landkreis Bayreuth und Kulmbach' },
  { q: 'Ist in einer Wohnung in Bayreuth Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bayreuth hat im Schnitt 82,8 m², 37,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 69,3 % der Wohnungen in Bayreuth liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.277 € Unterschied im Monat, 27.324 € im Jahr.' },
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
            { label: 'Bayreuth' },
          ]}
          augenbraue="24-Stunden-Pflege in Bayreuth"
          titel="24-Stunden-Pflege und Betreuung in Bayreuth"
          einleitung={<>Ob in der Gartenstadt, in St. Georgen oder draußen in Bindlach: Wer in Bayreuth alt geworden ist, will die Festspielstadt und das eigene Zuhause nicht verlassen. Muss auch niemand — eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, in der Stadt und im ganzen Umland. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026)',
            'Bayern: Landespflegegeld +500 €/Jahr',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bayreuth auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bayreuth bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bayreuth bleibt, der gewohnte Tagesablauf auch.
            </Text>
            <MehrDazu
              label="Ausführlich auf den Themenseiten:"
              links={[
                { href: '/24-stunden-pflege', text: 'Was 24-Stunden-Pflege ist und für wen sie passt' },
                { href: '/leistungen', text: 'Was eine Betreuungskraft übernimmt' },
                { href: '/pflegedienst-oder-24h-kraft', text: 'Betreuungskraft oder ambulanter Pflegedienst?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bayreuth 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bayreuth"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
            />
            <Tabelle
              titel="Was die Pflegekasse zahlt"
              kopf={['Pflegegrad', 'Pflegegeld je Monat', 'Entlastungsbudget je Jahr']}
              zeilen={[
                ['PG 2', '347 €', '3.539 €'],
                ['PG 3', '599 €', '3.539 €'],
                ['PG 4', '800 €', '3.539 €'],
                ['PG 5', '990 €', '3.539 €'],
              ]}
              betont={1}
              fuss="Stand 2026 · bundesweit einheitlich"
            />
            <Kasten ton="gruen" titel="Bayern-Vorteil: Landespflegegeld +500 €/Jahr">
              <Text>Bayern zahlt zusätzlich 1.000 €/Jahr (ca. 83 €/Monat) für alle PG 2–5 in häuslicher Pflege. Antrag beim Landesamt für Pflege (LfP Bayern) — kumulierbar mit allen Pflegekasse-Zuschüssen.</Text>
            </Kasten>
            <RechnerKasten src="ort-bayreuth" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bayreuth" titel="Polnische Betreuungskräfte in Bayreuth">
            <Text>Wer in Bayreuth nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Bayreuth und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.200 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Bayreuth">
            <Text>Unsere Betreuungskräfte ziehen in Bayreuth und im Landkreis Bayreuth ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bayreuth ausmacht">
            <Text>In Bayreuth leben auffällig viele Menschen allein. Nach dem Zensus sind <strong className="text-pm-ink font-semibold"> 55 Prozent aller Haushalte in der Stadt Einpersonenhaushalte</strong> — im Landkreis sind es 35 Prozent. Das erklärt sich teilweise durch die Universität, aber eben nicht nur: Auch ein großer Teil der über 16.000 Bayreutherinnen und Bayreuther über 65 wohnt für sich. Wenn dann etwas passiert, ein Sturz, ein Krankenhausaufenthalt, eine Diagnose, ist niemand im Haus, der den Alltag auffängt.</Text>
            <Text>Beim Blick in die Pflegestatistik trennen sich Stadt und Landkreis dann deutlich. In der Stadt Bayreuth leben <strong className="text-pm-ink font-semibold">26,8 Prozent aller Pflegebedürftigen im Heim</strong> — in Bayern sind es 17,6 Prozent. Auf 1.000 Einwohner über 65 kommen hier 82 Heimplätze, im Land nur 44. Bayreuth ist damit eine der am stärksten heimgeprägten Städte Bayerns. Im Landkreis ist es genau umgekehrt: Dort werden fast die Hälfte der Menschen mit Pflegegrad 5 zu Hause versorgt statt stationär. Dahinter stehen Familien, die das über Jahre allein stemmen.</Text>
            <Text>Dass das so ist, hat auch mit den Entfernungen zu tun. Die Stadt Bayreuth kommt auf gut 1.000 Einwohner je Quadratkilometer, der Landkreis auf 81 — er ist einer der am dünnsten besiedelten Bayerns. Ein ambulanter Dienst, der Pegnitz, Bad Berneck und die Dörfer dazwischen bedienen soll, fährt lange Touren, und die Termine richten sich nach der Route. Dazu kommt: Die Wohnungen im Landkreis sind mit durchschnittlich 114 Quadratmetern deutlich größer als in der Stadt mit 78 — meist Einfamilienhäuser mit Treppe, Garten und allem, was gepflegt werden will.</Text>
            <Text>Genau an dieser Stelle setzt eine Betreuungskraft an, die mit einzieht. Sie ersetzt die Angehörigen nicht, sondern nimmt ihnen die Dauerbelastung ab: nachts, an Wochenenden und in den Stunden, in denen sonst niemand da wäre. Sie ist von keiner Tourenplanung abhängig, weil sie im Haus wohnt. Und sie führt den Haushalt mit — was gerade in einem großen Haus den Unterschied macht.</Text>
            <Text>Bevor Sie etwas entscheiden, lassen Sie sich unabhängig beraten. In Bayreuth gibt es seit Juli 2025 einen eigenen Pflegestützpunkt, getragen von Stadt, Bezirk und den Pflegekassen; die Beratung ist kostenlos, trägerunabhängig und auf Wunsch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI). Für pflegende Angehörige gibt es zusätzlich eine eigene Fachstelle. Und in Bayern kommt das Landespflegegeld hinzu: 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bayreuth" titel="Einzugsgebiet Bayreuth">
            <Text>Bayreuth und Landkreis Bayreuth: Pegnitz, Creußen, Hollfeld und alle Gemeinden im Landkreis Bayreuth und Kulmbach</Text>
            <NearbyCities current="bayreuth" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bayreuth'} land={'Bayern'} altbau={46.2} miete={7.11} />


          <Abschnitt id="so-arbeiten-wir" titel="So arbeiten wir">
            <Punkte
              punkte={[
                { title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
                { title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
                { title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
                { title: 'Persönlicher Ansprechpartner', desc: '7 Tage/Woche für Sie da' },
              ]}
            />
            <div className="bg-white rounded-[20px] shadow-lift p-6 md:p-8">
              <img
                src="/images/bestpreisgarantie-siegel.webp"
                alt="Primundus Bestpreisgarantie – 6× Preis-Leistungssieger"
                width={900}
                height={256}
                loading="lazy"
                className="h-[64px] md:h-[72px] w-auto mb-5"
              />
              <p className="text-[19px] md:text-[21px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">
                Bei uns zahlen Sie nie mehr als für ein vergleichbares Angebot.
              </p>
              <p className="mt-3 text-[17px] leading-[1.65] text-pm-body">
                Das können wir, weil unsere Betreuungskräfte bei uns angestellt sind und keine
                Vermittlungsgebühr anfällt.{' '}
                <a href="https://kostenrechner.primundus.de/bestpreisgarantie" className="font-semibold text-pm-taupe-ink underline underline-offset-4 hover:text-pm-ink">Was heißt vergleichbar?</a>
              </p>
            </div>
            <Schritte
              schritte={[
                { title: 'Ihren Preis sehen', desc: 'Wenige Fragen zur Pflegesituation und Ihre Kontaktdaten für die Angebotskopie — danach sehen Sie sofort Ihren Preis samt Zuschüssen.', tag: 'Dauert unter 2 Minuten', tagTon: 'gruen' },
                { title: 'Betreuungskräfte ansehen', desc: 'Direkt danach sehen Sie in Ihrem Kundenportal, wer zu Ihnen kommen könnte — in Ruhe und ohne Verpflichtung.', tag: 'Ihr Zugang kommt auch per E-Mail', tagTon: 'gruen' },
                { title: 'Auswählen und starten', desc: 'Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl unterschreiben Sie den Vertrag — danach reist Ihre Betreuungskraft an, wenn nötig schon in 3 Tagen.', tag: 'Kein Vertrag vor Ihrer Auswahl', tagTon: 'gruen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bayreuth">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
