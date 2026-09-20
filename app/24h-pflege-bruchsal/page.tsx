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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bruchsal bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bruchsal 2026" },
  { id: 'polnische-betreuungskraefte-in-bruchsal', title: "Polnische Betreuungskräfte in Bruchsal" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Karlsruhe Nord" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bruchsal ausmacht" },
  { id: 'einzugsgebiet-bruchsal', title: "Einzugsgebiet Bruchsal" },
  { id: 'werkzeuge', title: "Was es in Bruchsal kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bruchsal" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bruchsal: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Bruchsal: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bruchsal' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bruchsal — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bruchsal. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bruchsal',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bruchsal#service',
    name: 'Primundus — 24h-Pflege Bruchsal',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bruchsal. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bruchsal',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bruchsal' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bruchsal', item: 'https://primundus.de/24h-pflege-bruchsal' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bruchsal?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bruchsal starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bruchsal rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bruchsal?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Bruchsal ist bekannt: Die durchschnittliche Wohnung misst 100,0 Quadratmeter, 16,7 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 47,4 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Bruchsal?',
        acceptedAnswer: { '@type': 'Answer', text: '4.599 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,8 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Bruchsal — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Bruchsal im Schnitt 2,1 Wohnungen, in Baden-Württemberg 2,1. 50,4 Prozent der Gebäude stehen frei, 29,3 Prozent sind Reihenhäuser. 48,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bruchsal ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Bruchsal eine geriatrische Klinik?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein. Die Fürst-Stirum-Klinik hat rund 400 Betten, aber keine geriatrische Fachabteilung — auch wenn einzelne Klinikverzeichnisse eine listen; das ist falsch. Die nächsten geriatrischen Angebote liegen außerhalb: die ViDia Kliniken in Karlsruhe und die Sankt Rochus Kliniken in Bad Schönborn. Nach einem Krankenhausaufenthalt führt der Weg zur Anschlussbehandlung also aus der Stadt heraus. Beratung gibt es dagegen vor Ort: Der Pflegestützpunkt des Landkreises Karlsruhe hat eine Anlaufstelle in Bruchsal, kostenlos und trägerunabhängig.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bruchsal bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bruchsal und Landkreis Karlsruhe Nord: Philippsburg, Kraichtal, Bretten und alle Gemeinden im nördlichen Landkreis Karlsruhe' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bruchsal?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bruchsal starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bruchsal rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bruchsal?', a: 'Das hängt am Grundriss, und die Ausgangslage in Bruchsal ist bekannt: Die durchschnittliche Wohnung misst 100,0 Quadratmeter, 16,7 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 47,4 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
  { q: 'Wie viele ältere Menschen leben in Bruchsal?', a: '4.599 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,8 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bruchsal — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bruchsal im Schnitt 2,1 Wohnungen, in Baden-Württemberg 2,1. 50,4 Prozent der Gebäude stehen frei, 29,3 Prozent sind Reihenhäuser. 48,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bruchsal ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Gibt es in Bruchsal eine geriatrische Klinik?', a: 'Nein. Die Fürst-Stirum-Klinik hat rund 400 Betten, aber keine geriatrische Fachabteilung — auch wenn einzelne Klinikverzeichnisse eine listen; das ist falsch. Die nächsten geriatrischen Angebote liegen außerhalb: die ViDia Kliniken in Karlsruhe und die Sankt Rochus Kliniken in Bad Schönborn. Nach einem Krankenhausaufenthalt führt der Weg zur Anschlussbehandlung also aus der Stadt heraus. Beratung gibt es dagegen vor Ort: Der Pflegestützpunkt des Landkreises Karlsruhe hat eine Anlaufstelle in Bruchsal, kostenlos und trägerunabhängig.' },
  { q: 'Welches Einzugsgebiet wird in Bruchsal bedient?', a: 'Bruchsal und Landkreis Karlsruhe Nord: Philippsburg, Kraichtal, Bretten und alle Gemeinden im nördlichen Landkreis Karlsruhe' },
  { q: 'Ist in einer Wohnung in Bruchsal Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bruchsal hat im Schnitt 100,0 m², 16,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,0 % der Wohnungen in Bruchsal liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Bruchsal' },
          ]}
          augenbraue="24-Stunden-Pflege in Bruchsal"
          titel="24-Stunden-Pflege und Betreuung in Bruchsal"
          einleitung={<>Zwischen Kraichgau-Hügeln und Spargelfeldern wohnt man in Bruchsal, Heidelsheim oder Untergrombach gern im eigenen Haus — und möchte dort auch alt werden. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bruchsal auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bruchsal bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bruchsal bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bruchsal 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bruchsal"
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
            <RechnerKasten src="ort-bruchsal" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bruchsal" titel="Polnische Betreuungskräfte in Bruchsal">
            <Text>Wer in Bruchsal nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Bruchsal und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Karlsruhe Nord">
            <Text>Unsere Betreuungskräfte ziehen in Bruchsal und im Landkreis Karlsruhe Nord ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bruchsal ausmacht">
            <Text>Eines vorweg, weil es Wege spart:{' '} <strong className="text-pm-ink font-semibold">In Bruchsal gibt es keine geriatrische Fachabteilung.</strong> Die Fürst-Stirum-Klinik hat rund 400 Betten, aber keine Altersmedizin — auch wenn manche Klinikverzeichnisse eine listen. Die nächsten geriatrischen Angebote liegen außerhalb: die ViDia Kliniken in Karlsruhe und die Sankt Rochus Kliniken in Bad Schönborn. Nach einem Krankenhausaufenthalt führt der Weg zur Anschlussbehandlung also aus der Stadt heraus. Umso wichtiger ist, was danach zu Hause passiert.</Text>
            <Text>Die Pflegestatistik gibt es in Baden-Württemberg nur für den Landkreis. Im Landkreis Karlsruhe sind 27.562 Menschen pflegebedürftig — eine Pflegequote von 6,1 Prozent gegenüber 5,6 Prozent im Land, und ein Zuwachs von 20 Prozent gegenüber 2021. 58,4 Prozent werden allein von Angehörigen versorgt (Land: 55,9), ambulante Dienste kommen mit 15,4 Prozent seltener zum Einsatz als landesweit (16,4).</Text>
            <Text>Ein Zahlenfallstrick sei dabei ausgeräumt. Der Anteil der Pflegebedürftigen, die im Heim leben, liegt mit 14,5 Prozent leicht unter dem Landeswert von 14,9 — daraus liest sich leicht ein knappes Angebot heraus.{' '} <strong className="text-pm-ink font-semibold">Gemessen an der Einwohnerzahl ist die Heimversorgung im Kreis aber dichter als im Land</strong>, weil hier insgesamt mehr Menschen pflegebedürftig sind. Anteil und Dichte zeigen in entgegengesetzte Richtungen — wer nur den Anteil liest, unterschätzt das Angebot.</Text>
            <Text>Räumlich ist Bruchsal für die meisten unkompliziert: Rund 28.400 der 47.382 Einwohner leben in der Kernstadt, und die liegt flach in der Oberrheinebene auf 114 Metern. Der Michaelsberg bei Untergrombach ragt zwar 155 Meter darüber auf, ist aber Kapelle, Weinberg und Streuobstwiese — kein Wohngebiet. In der Stadt leben 9.968 Menschen über 65, das sind 21,0 Prozent. Der Pflegestützpunkt des Landkreises hat eine Anlaufstelle in Bruchsal; die Beratung dort ist kostenlos und trägerunabhängig (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bruchsal" titel="Einzugsgebiet Bruchsal">
            <Text>Bruchsal und Landkreis Karlsruhe Nord: Philippsburg, Kraichtal, Bretten und alle Gemeinden im nördlichen Landkreis Karlsruhe</Text>
            <NearbyCities current="bruchsal" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bruchsal'} land={'Baden-Württemberg'} altbau={48.4} miete={7.48} />


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

            ort={'Bruchsal'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260829-sabine', 'k-20260318-thomas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bruchsal">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
