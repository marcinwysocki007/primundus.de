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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Sindelfingen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Sindelfingen 2026" },
  { id: 'polnische-betreuungskraefte-in-sindelfingen', title: "Polnische Betreuungskräfte in Sindelfingen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Böblingen" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Sindelfingen ausmacht" },
  { id: 'einzugsgebiet-sindelfingen', title: "Einzugsgebiet Sindelfingen" },
  { id: 'werkzeuge', title: "Was es in Sindelfingen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Sindelfingen über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Sindelfingen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Sindelfingen: zu Hause statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-sindelfingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Sindelfingen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Sindelfingen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-sindelfingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-sindelfingen#service',
    name: 'Primundus — 24h-Pflege Sindelfingen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Sindelfingen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-sindelfingen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Sindelfingen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Sindelfingen', item: 'https://primundus.de/24h-pflege-sindelfingen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Sindelfingen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Sindelfingen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Sindelfingen rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Sindelfingen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Sindelfingen ist bekannt: Die durchschnittliche Wohnung misst 89,3 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 48,1 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Sindelfingen — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Sindelfingen im Schnitt 3,2 Wohnungen, in Baden-Württemberg 2,1. 46,7 Prozent der Gebäude stehen frei, 31,1 Prozent sind Reihenhäuser. 41,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Sindelfingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Sindelfingen?',
        acceptedAnswer: { '@type': 'Answer', text: '6.794 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Spricht die Betreuungskraft die Sprache, die zu Hause gesprochen wird?',
        acceptedAnswer: { '@type': 'Answer', text: 'In Sindelfingen ist das eine der häufigsten Fragen, und das aus gutem Grund: Laut städtischem Sozialbericht haben 52 Prozent der Einwohner einen Migrationshintergrund, die Stadt zählt Menschen aus 118 Nationen — viele davon kamen für das Mercedes-Werk und sind heute hochbetagt. Unsere Betreuungskräfte kommen aus Polen. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto. Bei anderen Herkunftssprachen sagen wir Ihnen ehrlich, was wir leisten können und was nicht — lieber vorher als hinterher.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Sindelfingen bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sindelfingen und Landkreis Böblingen: Böblingen, Leonberg, Herrenberg, Holzgerlingen, Weil der Stadt und alle Gemeinden im Landkreis Böblingen' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Sindelfingen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Sindelfingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Sindelfingen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Sindelfingen?', a: 'Das hängt am Grundriss, und die Ausgangslage in Sindelfingen ist bekannt: Die durchschnittliche Wohnung misst 89,3 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 48,1 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Sindelfingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Sindelfingen im Schnitt 3,2 Wohnungen, in Baden-Württemberg 2,1. 46,7 Prozent der Gebäude stehen frei, 31,1 Prozent sind Reihenhäuser. 41,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Sindelfingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Sindelfingen?', a: '6.794 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Spricht die Betreuungskraft die Sprache, die zu Hause gesprochen wird?', a: 'In Sindelfingen ist das eine der häufigsten Fragen, und das aus gutem Grund: Laut städtischem Sozialbericht haben 52 Prozent der Einwohner einen Migrationshintergrund, die Stadt zählt Menschen aus 118 Nationen — viele davon kamen für das Mercedes-Werk und sind heute hochbetagt. Unsere Betreuungskräfte kommen aus Polen. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto. Bei anderen Herkunftssprachen sagen wir Ihnen ehrlich, was wir leisten können und was nicht — lieber vorher als hinterher.' },
  { q: 'Welches Einzugsgebiet wird in Sindelfingen bedient?', a: 'Sindelfingen und Landkreis Böblingen: Böblingen, Leonberg, Herrenberg, Holzgerlingen, Weil der Stadt und alle Gemeinden im Landkreis Böblingen' },
  { q: 'Ist in einer Wohnung in Sindelfingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Sindelfingen hat im Schnitt 89,3 m², 20,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 72,3 % der Gebäude in Sindelfingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.737 € Unterschied im Monat, 32.844 € im Jahr.' },
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
            { label: 'Sindelfingen' },
          ]}
          augenbraue="24-Stunden-Pflege in Sindelfingen"
          titel="24-Stunden-Pflege und Betreuung in Sindelfingen"
          einleitung={<>Ein Arbeitsleben im Werk, ein Haus in Maichingen oder Darmsheim, ein Garten für die Enkel: So sieht der Ruhestand vieler Sindelfinger aus — und so soll er bleiben. Eine Betreuungskraft von Primundus zieht mit ein, wenn Hilfe nötig wird, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Sindelfingen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Sindelfingen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Sindelfingen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Sindelfingen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Sindelfingen"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-sindelfingen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-sindelfingen" titel="Polnische Betreuungskräfte in Sindelfingen">
            <Text>Wer in Sindelfingen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Sindelfingen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Böblingen">
            <Text>Unsere Betreuungskräfte ziehen in Sindelfingen und im Landkreis Böblingen ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Sindelfingen ausmacht">
            <Text>Sindelfingen altert anders als sein Umland, und der Grund liegt im Werk. Rund 25.000 Menschen arbeiten im Mercedes-Benz-Werk, eine der zehn größten Fabriken der Welt. Die Generation, die dafür in den sechziger und siebziger Jahren hergekommen ist, ist heute hochbetagt. Man sieht es in den Zahlen:{' '} <strong className="text-pm-ink font-semibold">7,5 Prozent der Sindelfinger sind über 80 — mehr als im Landkreis Böblingen (7,1) und mehr als in Baden-Württemberg (6,9)</strong> —, während der Anteil der 65- bis 79-Jährigen unter beiden Werten liegt. Die Stadt hat also nicht mehr Ältere, sondern mehr sehr Alte. Von allen über 75-Jährigen im Landkreis leben 17 Prozent in Sindelfingen, der größte Einzelanteil aller 26 Kommunen.</Text>
            <Text>Dazu gehört ein zweiter Befund. Laut städtischem Sozialbericht haben 52 Prozent der Einwohner einen Migrationshintergrund, die Stadt zählt Menschen aus 118 Nationen. Sprache und Gewohnheiten sind bei einer Betreuungskraft, die im Haushalt lebt, deshalb kein Nebenthema — es ist die Frage, an der es steht und fällt. Das Sprachniveau jeder Kraft steht bei uns vorab im Profil, zusammen mit Erfahrung und Foto. Sie sehen, wen Sie bekommen, bevor Sie sich festlegen.</Text>
            <Text>Heimplätze sind in Sindelfingen rechnerisch ausreichend vorhanden: 535 Plätze in der stationären Dauerpflege, womit der Kreispflegeplan den Bedarf für 2035 als exakt gedeckt ausweist — anders als für den Landkreis insgesamt, wo eine Lücke prognostiziert wird. Bemerkenswert dabei:{' '} <strong className="text-pm-ink font-semibold">70,4 Prozent der Heimbewohner in Sindelfingen stammen aus der Stadt selbst</strong>, im Kreisschnitt sind es 59,4 Prozent. Wer hier ins Heim geht, bleibt meist am Ort. Im Landkreis Böblingen werden 53,9 Prozent aller Pflegebedürftigen allein von Angehörigen versorgt, etwas weniger als in Baden-Württemberg mit 55,9 Prozent; ambulante Dienste sind mit 19,1 Prozent dagegen stärker vertreten als im Land (16,4).</Text>
            <Text>Einen Punkt sagen wir offen, weil er Wege kostet: Eine eigenständige, bettenführende geriatrische Abteilung ist am Klinikum Sindelfingen nicht nachweisbar — der Klinikverbund führt hier eine Altersmedizin ohne eigene Betten und eine geriatrische Institutsambulanz. Die ambulante geriatrische Reha des Verbunds sitzt inzwischen in <strong className="text-pm-ink font-semibold"> Böblingen</strong>, nicht mehr in Sindelfingen; ältere Adressangaben führen in die Irre. Nach einem Krankenhausaufenthalt heißt das: Der Weg zur Anschlussbehandlung führt aus der Stadt heraus — und umso mehr zählt, dass zu Hause jemand da ist. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-sindelfingen" titel="Einzugsgebiet Sindelfingen">
            <Text>Sindelfingen und Landkreis Böblingen: Böblingen, Leonberg, Herrenberg, Holzgerlingen, Weil der Stadt und alle Gemeinden im Landkreis Böblingen</Text>
            <NearbyCities current="sindelfingen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Sindelfingen'} land={'Baden-Württemberg'} altbau={41.8} miete={8.91} />


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

            ort={'Sindelfingen'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20241224-ursula'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Sindelfingen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
