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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Mainz bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Mainz 2026" },
  { id: 'polnische-betreuungskraefte-in-mainz', title: "Polnische Betreuungskräfte in Mainz" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Mainz ausmacht" },
  { id: 'einzugsgebiet-mainz', title: "Einzugsgebiet Mainz" },
  { id: 'werkzeuge', title: "Was es für Ihre Eltern in Mainz kostet" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Mainz" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Mainz: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Mainz: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-mainz' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Mainz — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Mainz. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-mainz',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-mainz#service',
    name: 'Primundus — 24h-Pflege Mainz',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Mainz. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-mainz',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Mainz' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Mainz', item: 'https://primundus.de/24h-pflege-mainz' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Mainz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Mainz starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Mainz rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Mainz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Mainz ist bekannt: Die durchschnittliche Wohnung misst 81,0 Quadratmeter, 36,9 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 30,7 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Mainz?',
        acceptedAnswer: { '@type': 'Answer', text: '20.287 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,2 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 18,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Mainz — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Mainz im Schnitt 3,6 Wohnungen, in Rheinland-Pfalz 1,7. 41,6 Prozent der Gebäude stehen frei, 39,4 Prozent sind Reihenhäuser. 47,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Mainz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'In welchen Mainzer Stadtteilen leben die meisten älteren Menschen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Der Unterschied ist groß: In Drais sind 16,3 Prozent der Einwohner über 75, in der Neustadt 5,1 Prozent — der Faktor drei. Dahinter folgen Lerchenberg (13,4 Prozent), Finthen und Laubenheim (je 11,9). Besonders auffällig ist der Lerchenberg: Dort überwiegen die Hochaltrigen deutlich gegenüber den 65- bis 75-Jährigen — das Muster einer Großwohnsiedlung, deren Erstbezieher gemeinsam alt geworden sind. Unsere Betreuungskräfte kommen in jeden Stadtteil; Anreise und Preis sind überall gleich.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Mainz bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Mainz und Umland: Wiesbaden, Bingen, Bad Kreuznach, Ingelheim und alle Gemeinden im Landkreis Mainz-Bingen' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Mainz?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Mainz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Mainz rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Mainz?', a: 'Das hängt am Grundriss, und die Ausgangslage in Mainz ist bekannt: Die durchschnittliche Wohnung misst 81,0 Quadratmeter, 36,9 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 30,7 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Mainz?', a: '20.287 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,2 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 18,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Mainz — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Mainz im Schnitt 3,6 Wohnungen, in Rheinland-Pfalz 1,7. 41,6 Prozent der Gebäude stehen frei, 39,4 Prozent sind Reihenhäuser. 47,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Mainz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'In welchen Mainzer Stadtteilen leben die meisten älteren Menschen?', a: 'Der Unterschied ist groß: In Drais sind 16,3 Prozent der Einwohner über 75, in der Neustadt 5,1 Prozent — der Faktor drei. Dahinter folgen Lerchenberg (13,4 Prozent), Finthen und Laubenheim (je 11,9). Besonders auffällig ist der Lerchenberg: Dort überwiegen die Hochaltrigen deutlich gegenüber den 65- bis 75-Jährigen — das Muster einer Großwohnsiedlung, deren Erstbezieher gemeinsam alt geworden sind. Unsere Betreuungskräfte kommen in jeden Stadtteil; Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Mainz bedient?', a: 'Mainz und Umland: Wiesbaden, Bingen, Bad Kreuznach, Ingelheim und alle Gemeinden im Landkreis Mainz-Bingen' },
  { q: 'Ist in einer Wohnung in Mainz Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Mainz hat im Schnitt 81,0 m², 36,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 69,4 % der Wohnungen in Mainz liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Mainz' },
          ]}
          augenbraue="24-Stunden-Pflege in Mainz"
          titel="24-Stunden-Pflege und Betreuung in Mainz"
          einleitung={<>Ob in Gonsenheim, Bretzenheim oder der Oberstadt: Meenzer bleiben ihrer Stadt treu — dem Wochenmarkt, der Fastnacht, dem Blick über den Rhein. Auch mit Pflegebedarf muss das nicht enden: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Mainz auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Mainz bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Mainz bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Mainz 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Mainz"
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
            <RechnerKasten src="ort-mainz" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-mainz" titel="Polnische Betreuungskräfte in Mainz">
            <Text>Wer in Mainz nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Mainz und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.220 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Mainz ausmacht">
            <Text>Mainz hat die niedrigste Pflegeprävalenz in ganz Rheinland-Pfalz — 209 Pflegebedürftige je 1.000 Einwohner über 70 gegenüber 269 im Land. Das ist kein Versorgungserfolg, sondern eine Frage der Altersstruktur: Die Stadt ist jung, 17,9 Prozent der Einwohner sind über 65. Wichtiger als der Durchschnitt ist ohnehin, wo in Mainz alt gewohnt wird — und da{' '} <strong className="text-pm-ink font-semibold">liegt zwischen Drais und der Neustadt der Faktor drei</strong>: In Drais sind 16,3 Prozent der Einwohner über 75, in der Neustadt 5,1 Prozent.</Text>
            <Text>Ein Stadtteil fällt dabei besonders auf. Am Lerchenberg sind 13,4 Prozent über 75, aber nur 9,4 Prozent zwischen 65 und 75 — die Hochaltrigen überwiegen deutlich. Das ist das Muster einer Großwohnsiedlung, deren Erstbezieher gemeinsam alt geworden sind. Dort konzentriert sich Pflegebedarf auf engem Raum, während er in der Neustadt kaum vorkommt.</Text>
            <Text>Was Familien in Mainz zu schaffen macht, ist eine andere Entwicklung: Das Angebot schrumpft.{' '} <strong className="text-pm-ink font-semibold">Von 27 ambulanten Pflegediensten sind noch 23 übrig, von 21 Pflegeheimen noch 19</strong>, und bei der Tagespflege fielen 29 Plätze weg. Gleichzeitig ist der Anteil der Heimversorgung leicht gestiegen. Beides zusammen heißt: Es konkurrieren mehr Menschen um weniger Angebot. Wer sich auf einen ambulanten Dienst verlassen will, sollte das früh klären.</Text>
            <Text>Ein Hinweis zu Zahlen, die kursieren: Die häufig genannten 7.871 Pflegebedürftigen für Mainz enthalten die Gruppe mit Pflegegrad 1 ohne reguläre Leistungen nicht — 2021 waren das allein rund 1.180 Menschen. Wer mit 7.871 rechnet, unterschätzt die tatsächliche Zahl also. Von diesen 7.871 werden 60,5 Prozent allein von Angehörigen versorgt, 19,1 Prozent von einem ambulanten Dienst, 20,4 Prozent leben im Heim.</Text>
            <Text>Medizinisch ist Mainz gut versorgt: Das Marienhaus Klinikum An der Goldgrube führt eine Akutgeriatrie mit 59 Betten und seit August 2023 zusätzlich eine geriatrische Rehabilitation mit 50 Betten im selben Haus. Ein praktischer Hinweis, weil ältere Verweise noch kursieren: Die Akutgeriatrie saß bis 2017 am St. Hildegardis-Krankenhaus und ist seither An der Goldgrube. Lassen Sie sich vorher unabhängig beraten — die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-mainz" titel="Einzugsgebiet Mainz">
            <Text>Mainz und Umland: Wiesbaden, Bingen, Bad Kreuznach, Ingelheim und alle Gemeinden im Landkreis Mainz-Bingen</Text>
            <NearbyCities current="mainz" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Mainz'} land={'Rheinland-Pfalz'} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Mainz">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
