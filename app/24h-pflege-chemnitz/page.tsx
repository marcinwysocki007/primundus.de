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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Chemnitz bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Chemnitz 2026" },
  { id: 'polnische-betreuungskraefte-in-chemnitz', title: "Polnische Betreuungskräfte in Chemnitz" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Erzgebirgskreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Chemnitz ausmacht" },
  { id: 'einzugsgebiet-chemnitz', title: "Einzugsgebiet Chemnitz" },
  { id: 'werkzeuge', title: "Was es in Chemnitz kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Chemnitz" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Chemnitz: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-chemnitz' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Chemnitz — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Chemnitz. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-chemnitz',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-chemnitz#service',
    name: 'Primundus — 24h-Pflege Chemnitz',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Chemnitz. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-chemnitz',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Chemnitz' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Chemnitz', item: 'https://primundus.de/24h-pflege-chemnitz' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Chemnitz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Sachsen (Eigenanteil rund 2.990 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Chemnitz starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Chemnitz rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Chemnitz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Chemnitz ist bekannt: Die durchschnittliche Wohnung misst 71,3 Quadratmeter, 43,1 Prozent liegen unter 60 Quadratmetern (Sachsen: 34,1 Prozent), und 18,5 Prozent der Haushalte wohnen im Eigentum (Sachsen: 34,3 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Chemnitz — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Chemnitz im Schnitt 4,5 Wohnungen, in Sachsen 2,7. 50,8 Prozent der Gebäude stehen frei, 32,1 Prozent sind Reihenhäuser. 57,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Chemnitz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Chemnitz?',
        acceptedAnswer: { '@type': 'Answer', text: '36.485 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 15,2 Prozent — in Sachsen 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 31,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen: 29,1 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'In welchen Chemnitzer Stadtteilen wird Pflege am häufigsten gebraucht?',
        acceptedAnswer: { '@type': 'Answer', text: 'In den Plattenbausiedlungen der siebziger und achtziger Jahre. Sie wurden damals von jungen Familien bezogen, die geblieben und gemeinsam alt geworden sind. Im Yorckgebiet leben heute mehr Menschen über 65 als im erwerbsfähigen Alter; Markersdorf, Helbersdorf, Kapellenberg, Morgenleite und Hutholz liegen kaum darunter. Im Lutherviertel und im Zentrum ist der Anteil rund ein Fünftel davon. Chemnitz insgesamt ist mit 27,7 Prozent über 65 und 10,2 Prozent über 80 eine der ältesten Großstädte Deutschlands. Unsere Betreuungskräfte kommen in jeden Stadtteil, auch in die eingemeindeten Dörfer am Rand — Anreise und Preis sind überall gleich.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Chemnitz bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Chemnitz und Erzgebirgskreis: Stollberg, Annaberg-Buchholz, Aue-Bad Schlema und alle Gemeinden im Erzgebirgskreis und Landkreis Mittelsachsen' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Chemnitz?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Sachsen (Eigenanteil rund 2.990 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Chemnitz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Chemnitz rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Chemnitz?', a: 'Das hängt am Grundriss, und die Ausgangslage in Chemnitz ist bekannt: Die durchschnittliche Wohnung misst 71,3 Quadratmeter, 43,1 Prozent liegen unter 60 Quadratmetern (Sachsen: 34,1 Prozent), und 18,5 Prozent der Haushalte wohnen im Eigentum (Sachsen: 34,3 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Chemnitz — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Chemnitz im Schnitt 4,5 Wohnungen, in Sachsen 2,7. 50,8 Prozent der Gebäude stehen frei, 32,1 Prozent sind Reihenhäuser. 57,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Chemnitz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Chemnitz?', a: '36.485 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 15,2 Prozent — in Sachsen 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 31,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen: 29,1 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'In welchen Chemnitzer Stadtteilen wird Pflege am häufigsten gebraucht?', a: 'In den Plattenbausiedlungen der siebziger und achtziger Jahre. Sie wurden damals von jungen Familien bezogen, die geblieben und gemeinsam alt geworden sind. Im Yorckgebiet leben heute mehr Menschen über 65 als im erwerbsfähigen Alter; Markersdorf, Helbersdorf, Kapellenberg, Morgenleite und Hutholz liegen kaum darunter. Im Lutherviertel und im Zentrum ist der Anteil rund ein Fünftel davon. Chemnitz insgesamt ist mit 27,7 Prozent über 65 und 10,2 Prozent über 80 eine der ältesten Großstädte Deutschlands. Unsere Betreuungskräfte kommen in jeden Stadtteil, auch in die eingemeindeten Dörfer am Rand — Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Chemnitz bedient?', a: 'Chemnitz und Erzgebirgskreis: Stollberg, Annaberg-Buchholz, Aue-Bad Schlema und alle Gemeinden im Erzgebirgskreis und Landkreis Mittelsachsen' },
  { q: 'Ist in einer Wohnung in Chemnitz Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Chemnitz hat im Schnitt 71,3 m², 43,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 59,7 % der Wohnungen in Chemnitz liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.990 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.067 € Unterschied im Monat, 24.804 € im Jahr.' },
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
            { label: 'Chemnitz' },
          ]}
          augenbraue="24-Stunden-Pflege in Chemnitz"
          titel="24-Stunden-Pflege und Betreuung in Chemnitz"
          einleitung={<>Die Gründerzeitwohnung auf dem Kaßberg, das Haus in Gablenz oder am Stadtrand Richtung Erzgebirge: Chemnitzer bleiben, wo sie zuhause sind — Treppen und Etagen hin oder her. Eine Betreuungskraft von Primundus zieht mit ein, übernimmt Einkäufe, Haushalt und Begleitung und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Sachsen: Eigenanteil rund 2.990 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Chemnitz auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Chemnitz bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Chemnitz bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Chemnitz 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Chemnitz"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Sachsen: Eigenanteil rund 2.990 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-chemnitz" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-chemnitz" titel="Polnische Betreuungskräfte in Chemnitz">
            <Text>Wer in Chemnitz nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Chemnitz und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 2.990 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Erzgebirgskreis">
            <Text>Unsere Betreuungskräfte ziehen in Chemnitz und im Erzgebirgskreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Chemnitz ausmacht">
            <Text>Chemnitz gehört zu den ältesten Großstädten Deutschlands, und die Zahlen lassen daran keinen Zweifel: 27,7 Prozent der Einwohner sind über 65, 10,2 Prozent über 80. In Sachsen sind es 27,2 und 9,5 Prozent — und Sachsen liegt bundesweit schon weit vorn.{' '} <strong className="text-pm-ink font-semibold">23.939 Chemnitzerinnen und Chemnitzer sind pflegebedürftig</strong>, das entspricht 9,6 Prozent der Bevölkerung gegenüber 8,9 Prozent im Land. Zum Vergleich: In Trier sind 6,1 Prozent über 80, hier ist es fast das Doppelte.</Text>
            <Text>Das Bemerkenswerte an Chemnitz ist aber nicht der Durchschnitt, sondern wie ungleich das Alter verteilt ist — und zwar auf eine sehr spezifische Weise. Die Plattenbausiedlungen der siebziger und achtziger Jahre wurden damals von jungen Familien bezogen, die dort geblieben und gemeinsam alt geworden sind. Im{' '} <strong className="text-pm-ink font-semibold">Yorckgebiet leben heute mehr Menschen über 65 als im erwerbsfähigen Alter</strong>; Markersdorf, Helbersdorf, Kapellenberg, Morgenleite und Hutholz liegen kaum darunter. Im Lutherviertel und im Zentrum ist der Anteil ein Fünftel davon. Für die häusliche Pflege heißt das: sehr hohe Fallzahlen in wenigen, baulich einheitlichen Quartieren — und Stadtteile fast ohne Bedarf.</Text>
            <Text>Bei der Versorgung fällt auf, dass in Chemnitz häufiger allein durch Angehörige gepflegt wird als im Land: 51,1 gegen 48,5 Prozent. Ambulante Dienste kommen dagegen seltener zum Einsatz, 21,1 gegen 24,4 Prozent. Heimplätze sind reichlich vorhanden — 17,2 je 1.000 Einwohner gegenüber 15,7 in Sachsen. Der Anteil der Pflegebedürftigen, die tatsächlich im Heim leben, ist mit 13,8 Prozent dagegen völlig unauffällig. Das ist kein Widerspruch, sondern eine Frage des Nenners: Die Zahl der Pflegebedürftigen ist hier so groß, dass hinter einem durchschnittlichen Anteil eine sehr große absolute Zahl steckt.</Text>
            <Text>Topografisch ist Chemnitz unkompliziert — die Stadt liegt in einer breiten Beckenlage am Nordrand des Erzgebirges, das bebaute Gebiet ist weitgehend flach. Räumlich zieht sich die Stadt dafür weit: Zwischen dem dichtesten Stadtteil Kaßberg mit 9.262 Einwohnern je Quadratkilometer und dem dünnsten, Euba mit 159, liegt der Faktor 58. In den eingemeindeten Dörfern am Rand hat ein ambulanter Dienst lange Wege für kurze Einsätze; für jemanden, der im Haus wohnt, spielt die Entfernung keine Rolle.</Text>
            <Text>Geriatrisch ist die Stadt gut versorgt: zwei Krankenhäuser mit eigener geriatrischer Fachabteilung — das Geriatriezentrum am Klinikum Chemnitz und die Klinik für Geriatrie am DRK-Krankenhaus Rabenstein — dazu eine geriatrische Rehabilitationsklinik mit 80 Betten. Eine Lücke gibt es allerdings: Die geriatrische Tagesklinik ist derzeit außer Betrieb. Umso mehr zählt, wer nach der Entlassung zu Hause da ist. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-chemnitz" titel="Einzugsgebiet Chemnitz">
            <Text>Chemnitz und Erzgebirgskreis: Stollberg, Annaberg-Buchholz, Aue-Bad Schlema und alle Gemeinden im Erzgebirgskreis und Landkreis Mittelsachsen</Text>
            <NearbyCities current="chemnitz" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Chemnitz'} land={'Sachsen'} altbau={57.6} miete={5.26} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Chemnitz">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
