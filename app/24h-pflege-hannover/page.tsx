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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Hannover bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Hannover 2026" },
  { id: 'polnische-betreuungskraefte-in-hannover', title: "Polnische Betreuungskräfte in Hannover" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Hannover ausmacht" },
  { id: 'einzugsgebiet-hannover', title: "Einzugsgebiet Hannover" },
  { id: 'werkzeuge', title: "Was es in Hannover kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Hannover" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Hannover: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Hannover: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hannover' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Hannover — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Hannover. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-hannover',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-hannover#service',
    name: 'Primundus — 24h-Pflege Hannover',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Hannover. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-hannover',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Hannover' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Hannover', item: 'https://primundus.de/24h-pflege-hannover' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Hannover?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Niedersachsen (Eigenanteil rund 3.010 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Hannover starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Hannover rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Hannover?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Hannover ist bekannt: Die durchschnittliche Wohnung misst 78,1 Quadratmeter, 33,4 Prozent liegen unter 60 Quadratmetern (Niedersachsen: 17,1 Prozent), und 23,4 Prozent der Haushalte wohnen im Eigentum (Niedersachsen: 51,1 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Hannover?',
        acceptedAnswer: { '@type': 'Answer', text: '51.876 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,1 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Hannover — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Hannover im Schnitt 4,3 Wohnungen, in Niedersachsen 1,7. 28,9 Prozent der Gebäude stehen frei, 53,9 Prozent sind Reihenhäuser. 67,9 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Hannover ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Warum leben in Hannover immer weniger Pflegebedürftige im Heim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nicht, weil es weniger Bedarf gäbe. Der Anteil fiel von 26,4 Prozent im Jahr 2017 auf 16,6 Prozent 2023, während der Anteil der allein von Angehörigen versorgten Menschen von 43,3 auf 58,6 Prozent stieg. Die Stadt nennt in ihrer eigenen Auswertung die Gründe: Die Zahl der stationären Plätze ist gesunken — fehlende Arbeitskräfte, gesunkene Investitionsbereitschaft — und es gibt wochenlange Wartezeiten bei Kurzzeit-, Verhinderungs- und Dauerpflege. Die Last hat sich also zu den Familien verschoben. Von den über 85-jährigen Hannoveranern sind 69,0 Prozent pflegebedürftig.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Hannover bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Hannover und Region: Garbsen, Langenhagen, Burgdorf, Lehrte, Sehnde, Pattensen und alle Gemeinden in der Region Hannover' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Hannover?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Niedersachsen (Eigenanteil rund 3.010 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Hannover starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Hannover rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Hannover?', a: 'Das hängt am Grundriss, und die Ausgangslage in Hannover ist bekannt: Die durchschnittliche Wohnung misst 78,1 Quadratmeter, 33,4 Prozent liegen unter 60 Quadratmetern (Niedersachsen: 17,1 Prozent), und 23,4 Prozent der Haushalte wohnen im Eigentum (Niedersachsen: 51,1 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Hannover?', a: '51.876 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,1 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Hannover — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Hannover im Schnitt 4,3 Wohnungen, in Niedersachsen 1,7. 28,9 Prozent der Gebäude stehen frei, 53,9 Prozent sind Reihenhäuser. 67,9 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Hannover ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Warum leben in Hannover immer weniger Pflegebedürftige im Heim?', a: 'Nicht, weil es weniger Bedarf gäbe. Der Anteil fiel von 26,4 Prozent im Jahr 2017 auf 16,6 Prozent 2023, während der Anteil der allein von Angehörigen versorgten Menschen von 43,3 auf 58,6 Prozent stieg. Die Stadt nennt in ihrer eigenen Auswertung die Gründe: Die Zahl der stationären Plätze ist gesunken — fehlende Arbeitskräfte, gesunkene Investitionsbereitschaft — und es gibt wochenlange Wartezeiten bei Kurzzeit-, Verhinderungs- und Dauerpflege. Die Last hat sich also zu den Familien verschoben. Von den über 85-jährigen Hannoveranern sind 69,0 Prozent pflegebedürftig.' },
  { q: 'Welches Einzugsgebiet wird in Hannover bedient?', a: 'Hannover und Region: Garbsen, Langenhagen, Burgdorf, Lehrte, Sehnde, Pattensen und alle Gemeinden in der Region Hannover' },
  { q: 'Ist in einer Wohnung in Hannover Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Hannover hat im Schnitt 78,1 m², 33,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 58,5 % der Wohnungen in Hannover liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.087 € Unterschied im Monat, 25.044 € im Jahr.' },
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
            { label: 'Hannover' },
          ]}
          augenbraue="24-Stunden-Pflege in Hannover"
          titel="24-Stunden-Pflege und Betreuung in Hannover"
          einleitung={<>Die Wohnung in der List, das Haus in Kirchrode oder Linden mit seinen Kneipen von früher: Hannoveraner haben ihr Viertel — und wollen es im Alter nicht gegen ein Heimzimmer tauschen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, vom Maschsee bis Herrenhausen. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Niedersachsen: Eigenanteil rund 3.010 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Hannover auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Hannover bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Hannover bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Hannover 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Hannover"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Niedersachsen: Eigenanteil rund 3.010 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-hannover" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-hannover" titel="Polnische Betreuungskräfte in Hannover">
            <Text>Wer in Hannover nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Hannover und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.010 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Hannover ausmacht">
            <Text>In Hannover hat sich in sechs Jahren verschoben, wer die Pflege trägt — und zwar dramatisch.{' '} <strong className="text-pm-ink font-semibold">2017 lebten noch 26,4 Prozent der Pflegebedürftigen im Heim, 2023 waren es 16,6 Prozent.</strong> Im selben Zeitraum stieg der Anteil derer, die zu Hause allein von Angehörigen versorgt werden, von 43,3 auf 58,6 Prozent. Das ist keine Verlagerung aus Überzeugung: Die Stadt schreibt in ihrer eigenen Auswertung, die Zahl der stationären Plätze sei gesunken — wegen fehlender Arbeitskräfte und gesunkener Investitionsbereitschaft — und es gebe wochenlange Wartezeiten bei Kurzzeit-, Verhinderungs- und Dauerpflege.</Text>
            <Text>Von den 38.149 Pflegebedürftigen der Stadt nutzen 24,8 Prozent zusätzlich einen ambulanten Dienst. Wie steil der Bedarf mit dem Alter steigt, zeigt eine Zahlenreihe, die man kennen sollte: Von den 60- bis 74-Jährigen sind 9,2 Prozent pflegebedürftig, von den 75- bis 84-Jährigen 28,6 Prozent —{' '} <strong className="text-pm-ink font-semibold">und von den über 85-Jährigen 69,0 Prozent.</strong></Text>
            <Text>Innerhalb der Stadt verteilt sich das Alter sehr ungleich. Im Heideviertel sind 20,3 Prozent der Einwohner über 75, in der Nordstadt 5,3 Prozent — der Faktor 3,8. Bei den über 65-Jährigen liegt zwischen Heideviertel (31,4 Prozent) und Nordstadt (11,8) noch immer der Faktor 2,7. Eine Einschränkung, die wir dazusagen: Pflegedaten gibt es in Hannover nur für die Gesamtstadt, nicht je Stadtteil — die Stadt weist ausdrücklich darauf hin. Alterskarte und Pflegekarte lassen sich also nicht übereinanderlegen.</Text>
            <Text>Geriatrisch ist Hannover gut ausgestattet, aber die Adressen sind heikel. Das größte Angebot führt das DIAKOVERE Henriettenstift mit 92 Reha-Betten und 24 Tagesklinikplätzen —{' '} <strong className="text-pm-ink font-semibold">allerdings nicht am Haupthaus, sondern rund sieben Kilometer entfernt in Kirchrode.</strong> Dazu kommen die Klinik für Altersmedizin am KRH Klinikum Nordstadt und eine Akutgeriatrie am Klinikum Siloah. Nicht in Hannover, aber unter demselben Verbundnamen geführt: die geriatrischen Abteilungen in Langenhagen, Gehrden und Neustadt am Rübenberge. Und die geriatrische Reha wird gerade zwischen den Trägern neu verteilt — wer heute recherchiert, trifft womöglich auf ein auslaufendes Angebot. Fragen Sie vorher nach. Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-hannover" titel="Einzugsgebiet Hannover">
            <Text>Hannover und Region: Garbsen, Langenhagen, Burgdorf, Lehrte, Sehnde, Pattensen und alle Gemeinden in der Region Hannover</Text>
            <NearbyCities current="hannover" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Hannover'} land={'Niedersachsen'} altbau={67.9} miete={7.61} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Hannover">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
