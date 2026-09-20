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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Speyer bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Speyer 2026" },
  { id: 'polnische-betreuungskraefte-in-speyer', title: "Polnische Betreuungskräfte in Speyer" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Rhein-Pfalz-Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Speyer ausmacht" },
  { id: 'einzugsgebiet-speyer', title: "Einzugsgebiet Speyer" },
  { id: 'werkzeuge', title: "Was es in Speyer kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Speyer über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Speyer" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Speyer & Rhein-Pfalz-Kreis',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-speyer' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Speyer — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Speyer. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-speyer',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-speyer#service',
    name: 'Primundus — 24h-Pflege Speyer',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Speyer. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-speyer',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Speyer' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Speyer', item: 'https://primundus.de/24h-pflege-speyer' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Speyer starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Speyer rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Speyer ist bekannt: Die durchschnittliche Wohnung misst 92,9 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 41,3 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Speyer — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Speyer im Schnitt 2,5 Wohnungen, in Rheinland-Pfalz 1,7. 35,8 Prozent der Gebäude stehen frei, 42,5 Prozent sind Reihenhäuser. 49,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Speyer ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: '5.707 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,5 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie gut ist die ambulante Versorgung in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Dünner als im Landesdurchschnitt. Nur 16,3 Prozent der Speyerer Pflegebedürftigen werden von einem ambulanten Dienst betreut, in Rheinland-Pfalz sind es 18,3 Prozent — und in der ganzen Stadt gibt es nur 15 solcher Dienste. Umgekehrt ist das Heimangebot außergewöhnlich dicht: 96,8 vollstationäre Plätze je 1.000 Einwohner über 70 gegenüber 63,1 im Land, schon 2021 der Spitzenwert aller 36 Verwaltungsbezirke in Rheinland-Pfalz. Speyer ist also stark auf stationäre Versorgung ausgerichtet. Wer zu Hause bleiben möchte, findet weniger Unterstützung von außen als in vergleichbaren Städten — eine Betreuungskraft, die im Haushalt lebt, ist hier oft die einzige durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Wie gut ist die häusliche Pflege in Speyer aufgestellt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ehrlich gesagt: dünner als das Heimangebot. Speyer hat mit 97 vollstationären Plätzen je 1.000 Einwohner über 70 die höchste Heimplatzdichte in Rheinland-Pfalz (Land: 63) — 2021 war es der Spitzenwert aller 36 Verwaltungsbezirke. Ambulant sieht es anders aus: Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von einem Pflegedienst betreut, im Land 18,3 Prozent, und es gibt in der ganzen Stadt lediglich 15 Dienste. Wer zu Hause bleiben möchte, hat also weniger Auswahl und sollte früher planen. Eine Betreuungskraft, die im Haushalt lebt, ist von dieser Knappheit nicht betroffen — sie ist durchgehend da, nicht nach Tourenplan.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Speyer bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Speyer?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Speyer starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Speyer rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Speyer?', a: 'Das hängt am Grundriss, und die Ausgangslage in Speyer ist bekannt: Die durchschnittliche Wohnung misst 92,9 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 41,3 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Speyer — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Speyer im Schnitt 2,5 Wohnungen, in Rheinland-Pfalz 1,7. 35,8 Prozent der Gebäude stehen frei, 42,5 Prozent sind Reihenhäuser. 49,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Speyer ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Speyer?', a: '5.707 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,5 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie gut ist die ambulante Versorgung in Speyer?', a: 'Dünner als im Landesdurchschnitt. Nur 16,3 Prozent der Speyerer Pflegebedürftigen werden von einem ambulanten Dienst betreut, in Rheinland-Pfalz sind es 18,3 Prozent — und in der ganzen Stadt gibt es nur 15 solcher Dienste. Umgekehrt ist das Heimangebot außergewöhnlich dicht: 96,8 vollstationäre Plätze je 1.000 Einwohner über 70 gegenüber 63,1 im Land, schon 2021 der Spitzenwert aller 36 Verwaltungsbezirke in Rheinland-Pfalz. Speyer ist also stark auf stationäre Versorgung ausgerichtet. Wer zu Hause bleiben möchte, findet weniger Unterstützung von außen als in vergleichbaren Städten — eine Betreuungskraft, die im Haushalt lebt, ist hier oft die einzige durchgehende Lösung.' },
  { q: 'Wie gut ist die häusliche Pflege in Speyer aufgestellt?', a: 'Ehrlich gesagt: dünner als das Heimangebot. Speyer hat mit 97 vollstationären Plätzen je 1.000 Einwohner über 70 die höchste Heimplatzdichte in Rheinland-Pfalz (Land: 63) — 2021 war es der Spitzenwert aller 36 Verwaltungsbezirke. Ambulant sieht es anders aus: Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von einem Pflegedienst betreut, im Land 18,3 Prozent, und es gibt in der ganzen Stadt lediglich 15 Dienste. Wer zu Hause bleiben möchte, hat also weniger Auswahl und sollte früher planen. Eine Betreuungskraft, die im Haushalt lebt, ist von dieser Knappheit nicht betroffen — sie ist durchgehend da, nicht nach Tourenplan.' },
  { q: 'Welches Einzugsgebiet wird in Speyer bedient?', a: 'Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau' },
  { q: 'Ist in einer Wohnung in Speyer Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Speyer hat im Schnitt 92,9 m², 20,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 72,7 % der Wohnungen in Speyer liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.297 € Unterschied im Monat, 27.564 € im Jahr.' },
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
            { label: 'Speyer' },
          ]}
          augenbraue="24-Stunden-Pflege in Speyer"
          titel="24-Stunden-Pflege und Betreuung in Speyer"
          einleitung={<>Mit dem Dom vor Augen alt werden: In Speyer-West, im Vogelgesang oder in der Altstadt wohnen viele seit Jahrzehnten — und bleiben am liebsten genau dort. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Speyer auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Speyer bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Speyer bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Speyer 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Speyer"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-speyer" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-speyer" titel="Polnische Betreuungskräfte in Speyer">
            <Text>Wer in Speyer nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Speyer und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.220 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Rhein-Pfalz-Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Speyer und im Rhein-Pfalz-Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Speyer ausmacht">
            <Text>Speyer ist auf das Heim hin gebaut wie kaum eine zweite Stadt in Rheinland-Pfalz.{' '} <strong className="text-pm-ink font-semibold">Auf 1.000 Einwohner über 70 kommen hier 97 vollstationäre Heimplätze, im Land 63</strong> — schon 2021 war das der höchste Wert aller 36 rheinland-pfälzischen Verwaltungsbezirke. Und anders als in manchen Städten ist das kein Rechenartefakt: Auch der Anteil der Pflegebedürftigen, die tatsächlich im Heim leben, liegt mit 20,8 Prozent weit über dem Landeswert von 13,7. Beide Kennzahlen zeigen in dieselbe Richtung, fast deckungsgleich.</Text>
            <Text>Die Kehrseite betrifft genau die Familien, die zu Hause bleiben wollen: Das ambulante Netz ist dünner als anderswo. Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von einem Pflegedienst betreut, im Land 18,3 Prozent — und es gibt in der ganzen Stadt lediglich 15 solche Dienste. Wer hier eine Versorgung zu Hause organisiert, hat weniger Auswahl und muss früher planen.</Text>
            <Text>Der Druck wächst dabei, denn Speyer ist alt.{' '} <strong className="text-pm-ink font-semibold">Mit einem Medianalter von 47 Jahren ist es die älteste kreisfreie Stadt in Rheinland-Pfalz</strong> (Land: 45). 24,8 Prozent der Einwohner sind über 65, 7,8 Prozent über 80 — beides deutlich über dem Landesschnitt von 23,3 und 6,9 Prozent.</Text>
            <Text>Topografisch nimmt Speyer den Bewohnern nichts ab, aber es macht auch nichts schwerer: Die Stadt liegt in der Oberrheinebene, zwischen der Rheinniederung und der Hochterrasse liegen über das gesamte Stadtgebiet rund 20 Höhenmeter. Was im Volksmund „Buckel" heißt — Museumsbuckel, Brauereibuckel, Schützenbuckel —, sind kurze Rampen, keine Hanglagen. Der Rhein bildet nur die Ostgrenze und zerschneidet die Stadt nicht. Die reale Barriere ist eine andere, und die Stadt benennt sie selbst: Speyer-Süd ist durch die B 39 vom Zentrum abgehängt.</Text>
            <Text>Medizinisch ist die Stadt stark: Das Diakonissen-Stiftungs-Krankenhaus führt eine geriatrische Fachabteilung mit 1.297 stationären Fällen im Jahr — die größte, die uns bei diesen Recherchen begegnet ist — dazu ein Geriatrisches Zentrum mit 16 Tagesklinikplätzen. Ein Hinweis, weil derselbe Träger auch das Evangelische Krankenhaus in Bad Dürkheim betreibt: Die Geriatrie sitzt in Speyer, Paul-Egell-Straße. Eine eigenständige geriatrische Reha gibt es hier nicht, die Anschlussbehandlung findet auswärts statt. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-speyer" titel="Einzugsgebiet Speyer">
            <Text>Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau</Text>
            <NearbyCities current="speyer" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Speyer'} land={'Rheinland-Pfalz'} altbau={49.1} miete={7.2} />


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

            ort={'Speyer'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250418-roswitha'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Speyer">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
