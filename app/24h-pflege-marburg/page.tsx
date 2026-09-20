import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Marburg bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Marburg 2026" },
  { id: 'polnische-betreuungskraefte-in-marburg', title: "Polnische Betreuungskräfte in Marburg" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Marburg-Biedenkopf" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Marburg ausmacht" },
  { id: 'einzugsgebiet-marburg', title: "Einzugsgebiet Marburg" },
  { id: 'werkzeuge', title: "Was es in Marburg kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Marburg über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Marburg" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Marburg: Preis und Kräfte sofort sehen',
  description: 'In Marburg zieht die Betreuungskraft bei Ihnen ein und führt den Haushalt. Im Einsatz in Biedenkopf und Umgebung. Keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-marburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Marburg — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Marburg. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-marburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-marburg#service',
    name: 'Primundus — 24h-Pflege Marburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Marburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-marburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Marburg' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Marburg', item: 'https://primundus.de/24h-pflege-marburg' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Marburg?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Marburg starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Marburg rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Marburg?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Marburg ist bekannt: Die durchschnittliche Wohnung misst 84,8 Quadratmeter, 37,3 Prozent liegen unter 60 Quadratmetern (Hessen: 20,4 Prozent), und 29,4 Prozent der Haushalte wohnen im Eigentum (Hessen: 46,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Marburg — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Marburg im Schnitt 3,1 Wohnungen, in Hessen 2,2. 71,5 Prozent der Gebäude stehen frei, 13,2 Prozent sind Reihenhäuser. 53,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Marburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Marburg?',
        acceptedAnswer: { '@type': 'Answer', text: '6.145 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 8,4 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 17,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Gelten die Marburger Pflegezahlen für die Stadt oder für den Landkreis?',
        acceptedAnswer: { '@type': 'Answer', text: 'Für den Landkreis — in Hessen wird die Pflegestatistik nicht auf Gemeindeebene veröffentlicht. Das ist wichtig, weil Stadt und Kreis hier weit auseinanderliegen: Die Stadt Marburg ist mit einem Durchschnittsalter von 40,5 Jahren und 17,1 Prozent Einwohnern über 65 sehr jung, der Landkreis Marburg-Biedenkopf hat dagegen mit 88 Pflegebedürftigen je 1.000 Einwohner eine der höchsten Pflegequoten Hessens (Land: 67). Im Kreis werden 14.777 von 21.538 Pflegebedürftigen ausschließlich von Angehörigen versorgt — 68,6 Prozent gegenüber 58,6 Prozent im Land. Wer für die Stadt mit Kreiszahlen rechnet, überschätzt das Alter der Stadtbevölkerung deutlich.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Marburg bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Marburg und Landkreis Marburg-Biedenkopf: Biedenkopf, Stadtallendorf, Kirchhain und alle Gemeinden im Landkreis Marburg-Biedenkopf' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Marburg?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Marburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Marburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Marburg?', a: 'Das hängt am Grundriss, und die Ausgangslage in Marburg ist bekannt: Die durchschnittliche Wohnung misst 84,8 Quadratmeter, 37,3 Prozent liegen unter 60 Quadratmetern (Hessen: 20,4 Prozent), und 29,4 Prozent der Haushalte wohnen im Eigentum (Hessen: 46,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Marburg — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Marburg im Schnitt 3,1 Wohnungen, in Hessen 2,2. 71,5 Prozent der Gebäude stehen frei, 13,2 Prozent sind Reihenhäuser. 53,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Marburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Marburg?', a: '6.145 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 8,4 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 17,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Gelten die Marburger Pflegezahlen für die Stadt oder für den Landkreis?', a: 'Für den Landkreis — in Hessen wird die Pflegestatistik nicht auf Gemeindeebene veröffentlicht. Das ist wichtig, weil Stadt und Kreis hier weit auseinanderliegen: Die Stadt Marburg ist mit einem Durchschnittsalter von 40,5 Jahren und 17,1 Prozent Einwohnern über 65 sehr jung, der Landkreis Marburg-Biedenkopf hat dagegen mit 88 Pflegebedürftigen je 1.000 Einwohner eine der höchsten Pflegequoten Hessens (Land: 67). Im Kreis werden 14.777 von 21.538 Pflegebedürftigen ausschließlich von Angehörigen versorgt — 68,6 Prozent gegenüber 58,6 Prozent im Land. Wer für die Stadt mit Kreiszahlen rechnet, überschätzt das Alter der Stadtbevölkerung deutlich.' },
  { q: 'Welches Einzugsgebiet wird in Marburg bedient?', a: 'Marburg und Landkreis Marburg-Biedenkopf: Biedenkopf, Stadtallendorf, Kirchhain und alle Gemeinden im Landkreis Marburg-Biedenkopf' },
  { q: 'Ist in einer Wohnung in Marburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Marburg hat im Schnitt 84,8 m², 37,3 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 68,7 % der Wohnungen in Marburg liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.307 € Unterschied im Monat, 27.684 € im Jahr.' },
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
            { label: 'Marburg' },
          ]}
          augenbraue="24-Stunden-Pflege in Marburg"
          titel="24-Stunden-Pflege und Betreuung in Marburg"
          einleitung={<>Marburgs Schönheit hat Stufen: Wer in der Oberstadt oder am Hang wohnt, kennt jede davon — und irgendwann werden sie zum Hindernis. Ins Heim muss deshalb niemand: Eine Betreuungskraft von Primundus zieht mit ein, begleitet jeden Weg und ist bei Bedarf auch nachts da, auch in Wehrda, Cappel und Marbach. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Marburg auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Marburg bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Marburg bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Marburg 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Marburg"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-marburg" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-marburg" titel="Polnische Betreuungskräfte in Marburg">
            <Text>Wer in Marburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Marburg und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.230 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Marburg-Biedenkopf">
            <Text>Unsere Betreuungskräfte ziehen in Marburg und im Landkreis Marburg-Biedenkopf ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Marburg ausmacht">
            <Text>Bei Marburg führt fast jede Statistik in die Irre, wenn man nicht genau hinsieht. Die Stadt selbst ist mit einem Durchschnittsalter von 40,5 Jahren sehr jung — rund 21.000 Studierende an der Philipps-Universität sorgen dafür, nur 17,1 Prozent der Einwohner sind über 65. Der umgebende Landkreis Marburg-Biedenkopf dagegen hat mit{' '} <strong className="text-pm-ink font-semibold">88 Pflegebedürftigen je 1.000 Einwohner eine der höchsten Pflegequoten Hessens</strong> (Land: 67). Wer für die Stadt mit Kreiszahlen rechnet, überschätzt das Alter der Stadtbevölkerung erheblich. Pflegedaten gibt es in Hessen nur auf Kreisebene — deshalb steht hier, was für den Kreis gilt, und zwar ausdrücklich als Kreiswert.</Text>
            <Text>Und dieser Kreiswert ist bemerkenswert.{' '} <strong className="text-pm-ink font-semibold">68,6 Prozent aller Pflegebedürftigen im Landkreis werden ausschließlich von Angehörigen versorgt</strong> — 14.777 von 21.538 Menschen, ganz ohne Pflegedienst. In Hessen sind es 58,6 Prozent. Das ist die höchste Angehörigenlast, die uns in dieser Region begegnet ist. Umgekehrt leben nur 9,7 Prozent in vollstationärer Dauerpflege, im Land 13,0. Dabei fehlt es nicht an Plätzen: Gemessen an der Zahl der über 65-Jährigen stehen 48 je 1.000 bereit, in Hessen 47. Die Kapazität ist also völlig normal — sie wird nur seltener genutzt. Familien tragen hier mehr als anderswo.</Text>
            <Text>Wie Marburg gebaut ist, macht das nicht leichter. Die Lahn teilt die Stadt, und die Oberstadt liegt am Steilhang unter dem Schloss.{' '} <strong className="text-pm-ink font-semibold">Der Oberstadtaufzug überwindet 28 Höhenmeter</strong> zwischen Pilgrimstein und Oberstadt — er existiert, weil der Weg zu Fuß für viele nicht geht. In der Altstadt leben 4.262 Menschen, am Richtsberg, einer Großwohnsiedlung auf einer Anhöhe, 8.551. Das sind reale Wohnlagen, keine Postkartenmotive. Der Stadtteil Lahnberge mit Uniklinik und Campus hat übrigens zehn Einwohner — er taucht in Statistiken auf, sagt über Pflege aber nichts.</Text>
            <Text>Eine Marburger Besonderheit gehört dazu: Die Deutsche Blindenstudienanstalt ist seit 1916 hier ansässig, mit dem bundesweit einzigen Gymnasium für blinde und sehbehinderte Schülerinnen und Schüler, einer Blindenbibliothek und Wohngruppen über das ganze Stadtgebiet. Marburg ist baulich und infrastrukturell ungewöhnlich stark auf Menschen mit Sehbehinderung eingestellt. In einer Stadt mit 28 Höhenmetern zwischen Ober- und Unterstadt ist das keine Randnotiz.</Text>
            <Text>Geriatrisch ist Marburg versorgt: Das DGD Diakonie-Krankenhaus Wehrda führt eine eigene geriatrische Hauptabteilung mit 748 stationären Fällen und bietet mobile ambulante geriatrische Rehabilitation an — die Reha kommt also zu Ihnen. Am Universitätsklinikum selbst gibt es keine eigenständige Geriatrie. Bevor Sie entscheiden, lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch nach Hause.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-marburg" titel="Einzugsgebiet Marburg">
            <Text>Marburg und Landkreis Marburg-Biedenkopf: Biedenkopf, Stadtallendorf, Kirchhain und alle Gemeinden im Landkreis Marburg-Biedenkopf</Text>
            <NearbyCities current="marburg" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Marburg'} land={'Hessen'} altbau={53.8} miete={8.74} />


          <Abschnitt id="so-arbeiten-wir" titel="So arbeiten wir">
            <Punkte
              punkte={[
                { title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
                { title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
                { title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
                { title: 'Persönlicher Ansprechpartner', desc: '7 Tage die Woche für Sie da' },
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

          <OrtStimmen

            ort={'Marburg'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250817-angelika'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Marburg">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
