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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Flensburg bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Flensburg 2026" },
  { id: 'polnische-betreuungskraefte-in-flensburg', title: "Polnische Betreuungskräfte in Flensburg" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Kreis Schleswig-Flensburg" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Flensburg ausmacht" },
  { id: 'einzugsgebiet-flensburg', title: "Einzugsgebiet Flensburg" },
  { id: 'werkzeuge', title: "Was es in Flensburg kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Flensburg über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Flensburg" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Flensburg: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Flensburg: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-flensburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Flensburg — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Flensburg. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-flensburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-flensburg#service',
    name: 'Primundus — 24h-Pflege Flensburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Flensburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-flensburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Flensburg' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Flensburg', item: 'https://primundus.de/24h-pflege-flensburg' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Flensburg?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Schleswig-Holstein (Eigenanteil rund 3.040 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Flensburg starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Flensburg rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Flensburg?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Flensburg ist bekannt: Die durchschnittliche Wohnung misst 78,7 Quadratmeter, 36,2 Prozent liegen unter 60 Quadratmetern (Schleswig-Holstein: 23,2 Prozent), und 24,9 Prozent der Haushalte wohnen im Eigentum (Schleswig-Holstein: 47,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Flensburg — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Flensburg im Schnitt 3,0 Wohnungen, in Schleswig-Holstein 1,8. 44,7 Prozent der Gebäude stehen frei, 40,0 Prozent sind Reihenhäuser. 60,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Flensburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Flensburg?',
        acceptedAnswer: { '@type': 'Answer', text: '9.855 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,4 Prozent — in Schleswig-Holstein 12,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,4 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Schleswig-Holstein: 26,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'In welchen Flensburger Stadtteilen wird Pflege am häufigsten gebraucht?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das Alter verteilt sich in Flensburg extrem ungleich. In Mürwik sind 10,9 Prozent der Einwohner über 80, in der Neustadt nur 1,6 Prozent — fast das Siebenfache Unterschied. Mürwik ist mit 15.324 Menschen zugleich der größte Stadtteil. Hohe Anteile Hochbetagter haben außerdem die Westliche Höhe (8,7 Prozent), Fruerlund (8,4) und Engelsby (7,6). Insgesamt wirkt Flensburg jung — 20,1 Prozent über 65 gegenüber 23,6 Prozent in Schleswig-Holstein —, was an den rund 9.000 Studierenden liegt, nicht an wenigen alten Menschen. Unsere Betreuungskräfte kommen in jeden Stadtteil; Anreise und Preis sind überall gleich.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Flensburg bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Flensburg und Kreis Schleswig-Flensburg: Schleswig, Kappeln, Eckernförde und alle Gemeinden im Kreis Schleswig-Flensburg' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Flensburg?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Schleswig-Holstein (Eigenanteil rund 3.040 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Flensburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Flensburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Flensburg?', a: 'Das hängt am Grundriss, und die Ausgangslage in Flensburg ist bekannt: Die durchschnittliche Wohnung misst 78,7 Quadratmeter, 36,2 Prozent liegen unter 60 Quadratmetern (Schleswig-Holstein: 23,2 Prozent), und 24,9 Prozent der Haushalte wohnen im Eigentum (Schleswig-Holstein: 47,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Flensburg — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Flensburg im Schnitt 3,0 Wohnungen, in Schleswig-Holstein 1,8. 44,7 Prozent der Gebäude stehen frei, 40,0 Prozent sind Reihenhäuser. 60,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Flensburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Flensburg?', a: '9.855 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,4 Prozent — in Schleswig-Holstein 12,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,4 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Schleswig-Holstein: 26,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'In welchen Flensburger Stadtteilen wird Pflege am häufigsten gebraucht?', a: 'Das Alter verteilt sich in Flensburg extrem ungleich. In Mürwik sind 10,9 Prozent der Einwohner über 80, in der Neustadt nur 1,6 Prozent — fast das Siebenfache Unterschied. Mürwik ist mit 15.324 Menschen zugleich der größte Stadtteil. Hohe Anteile Hochbetagter haben außerdem die Westliche Höhe (8,7 Prozent), Fruerlund (8,4) und Engelsby (7,6). Insgesamt wirkt Flensburg jung — 20,1 Prozent über 65 gegenüber 23,6 Prozent in Schleswig-Holstein —, was an den rund 9.000 Studierenden liegt, nicht an wenigen alten Menschen. Unsere Betreuungskräfte kommen in jeden Stadtteil; Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Flensburg bedient?', a: 'Flensburg und Kreis Schleswig-Flensburg: Schleswig, Kappeln, Eckernförde und alle Gemeinden im Kreis Schleswig-Flensburg' },
  { q: 'Ist in einer Wohnung in Flensburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Flensburg hat im Schnitt 78,7 m², 36,2 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 71,0 % der Wohnungen in Flensburg liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Schleswig-Holstein zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.040 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.117 € Unterschied im Monat, 25.404 € im Jahr.' },
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
            { label: 'Flensburg' },
          ]}
          augenbraue="24-Stunden-Pflege in Flensburg"
          titel="24-Stunden-Pflege und Betreuung in Flensburg"
          einleitung={<>An der Förde bleibt man gern: ob in Mürwik, Weiche oder drüben in Glücksburg und Harrislee. Wenn die Kräfte nachlassen, muss deshalb niemand ins Heim — eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Schleswig-Holstein: Eigenanteil rund 3.040 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Flensburg auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Flensburg bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Flensburg bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Flensburg 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Flensburg"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Schleswig-Holstein: Eigenanteil rund 3.040 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-flensburg" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-flensburg" titel="Polnische Betreuungskräfte in Flensburg">
            <Text>Wer in Flensburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Flensburg und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.040 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Kreis Schleswig-Flensburg">
            <Text>Unsere Betreuungskräfte ziehen in Flensburg und im Kreis Schleswig-Flensburg ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Flensburg ausmacht">
            <Text>Flensburg ist eine junge Stadt — und trotzdem gibt es hier Viertel, in denen jeder neunte Mensch über 80 ist. Insgesamt sind 20,1 Prozent der Flensburger über 65 und 6,6 Prozent über 80; in Schleswig-Holstein sind es 23,6 und 8,0 Prozent. Zwei Hochschulen mit rund 9.000 Studierenden drücken den Schnitt. Aber das Alter verteilt sich in dieser Stadt extrem ungleich:{' '} <strong className="text-pm-ink font-semibold">In Mürwik sind 10,9 Prozent der Einwohner über 80, in der Neustadt 1,6 Prozent</strong> — fast das Siebenfache. Und Mürwik ist mit 15.324 Einwohnern zugleich der größte Stadtteil. Wer in Flensburg Betreuung plant, plant faktisch für Mürwik, die Westliche Höhe, Fruerlund und Engelsby.</Text>
            <Text>Dazu kommt die Lage am Wasser, und die ist hier nicht nur schön. Die Innenstadt liegt am Hafen auf drei Metern über dem Meer, die bewohnten Höhen — Westliche Höhe, Friesischer Berg, Marienberg, Duburg — deutlich darüber. Die Fördehänge sind steil. Wer oben wohnt und unten einkauft, merkt das lange bevor ein Pflegegrad im Spiel ist. Mit einem Rollator wird aus dem Weg zum Bäcker eine Entscheidung.</Text>
            <Text>Bei der Pflege selbst liegt Flensburg dicht am Land: Von 5.298 Pflegebedürftigen werden 46,6 Prozent allein von Angehörigen versorgt (Schleswig-Holstein 46,3), 21,2 Prozent nutzen einen ambulanten Dienst. Interessant ist der Heimplatz — und hier widersprechen sich zwei Kennzahlen scheinbar. Der Anteil der Pflegebedürftigen im Heim liegt mit 18,6 Prozent unter dem Landeswert von 19,4. Gemessen an der Zahl der über 65-Jährigen stehen aber{' '} <strong className="text-pm-ink font-semibold">56 Plätze je 1.000 bereit, im Land 54</strong>. Flensburg hat also mehr Kapazität, aber weniger Menschen, die sie nutzen. Wer nur den Anteil liest, unterschätzt das Platzangebot.</Text>
            <Text>Medizinisch ist die Stadt gut versorgt: Das Malteser Fördeklinikum St. Katharina führt eine eigene Geriatrie mit rund 1.900 stationären Patienten im Jahr und eine geriatrische Tagesklinik mit knapp 600. Ein Hinweis zur Vorsicht: Die „Tagesklinik für Ältere" der DIAKO ist eine gerontopsychiatrische Einrichtung, keine somatische Altersmedizin — das wird oft verwechselt. Was nach der Entlassung kommt, entscheidet sich ohnehin zu Hause. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-flensburg" titel="Einzugsgebiet Flensburg">
            <Text>Flensburg und Kreis Schleswig-Flensburg: Schleswig, Kappeln, Eckernförde und alle Gemeinden im Kreis Schleswig-Flensburg</Text>
            <NearbyCities current="flensburg" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Flensburg'} land={'Schleswig-Holstein'} altbau={60.7} miete={6.96} />


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

          <OrtStimmen

            ort={'Flensburg'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250910-gudrun'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Flensburg">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
