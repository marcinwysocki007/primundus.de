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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bielefeld bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bielefeld 2026" },
  { id: 'polnische-betreuungskraefte-in-bielefeld', title: "Polnische Betreuungskräfte in Bielefeld" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bielefeld ausmacht" },
  { id: 'einzugsgebiet-bielefeld', title: "Einzugsgebiet Bielefeld" },
  { id: 'werkzeuge', title: "Was es in Bielefeld kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bielefeld" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bielefeld ab 2.150 €: 1:1 zu Hause',
  description: '1:1-Betreuung in den eigenen vier Wänden statt Heimplatz: Betreuungskraft zieht in Bielefeld ein, entlastet die Familie. Ab 2.150 €, Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bielefeld' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bielefeld — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bielefeld. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bielefeld',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bielefeld#service',
    name: 'Primundus — 24h-Pflege Bielefeld',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bielefeld. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bielefeld',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bielefeld' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bielefeld', item: 'https://primundus.de/24h-pflege-bielefeld' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bielefeld?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bielefeld starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bielefeld rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bielefeld?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Bielefeld ist bekannt: Die durchschnittliche Wohnung misst 85,8 Quadratmeter, 27,0 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 33,3 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Bielefeld?',
        acceptedAnswer: { '@type': 'Answer', text: '34.515 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,5 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Bielefeld — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Bielefeld im Schnitt 2,7 Wohnungen, in Nordrhein-Westfalen 2,3. 54,6 Prozent der Gebäude stehen frei, 27,5 Prozent sind Reihenhäuser. 55,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bielefeld ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'In welchen Bielefelder Stadtbezirken fehlen Heimplätze?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die Stadt benennt es in ihrer Bedarfsplanung selbst: Unterversorgt sind Jöllenbeck, Heepen, Dornberg und Senne; ein Überangebot gibt es in Schildesche, Sennestadt und Gadderbaum. Bemerkenswert ist die Richtung — Jöllenbeck ist mit 8,2 Prozent Einwohnern über 80 der älteste Stadtbezirk und hat mit rund 51 Plätzen je 1.000 Hochbetagten zugleich das dünnste Angebot; in Sennestadt sind es 234. Über die ganze Stadt gerechnet reichen die 2.622 Plätze dagegen aus. Bielefeld hat also kein Mengen-, sondern ein Verteilungsproblem. Eine Betreuungskraft, die zu Ihnen kommt, löst genau das — sie ist dort, wo Sie wohnen.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bielefeld bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bielefeld und Umland: Gütersloh, Herford, Detmold, Paderborn, Minden und alle Gemeinden im Kreis Gütersloh und Herford' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bielefeld?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bielefeld starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bielefeld rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bielefeld?', a: 'Das hängt am Grundriss, und die Ausgangslage in Bielefeld ist bekannt: Die durchschnittliche Wohnung misst 85,8 Quadratmeter, 27,0 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 33,3 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Bielefeld?', a: '34.515 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,5 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bielefeld — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bielefeld im Schnitt 2,7 Wohnungen, in Nordrhein-Westfalen 2,3. 54,6 Prozent der Gebäude stehen frei, 27,5 Prozent sind Reihenhäuser. 55,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bielefeld ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'In welchen Bielefelder Stadtbezirken fehlen Heimplätze?', a: 'Die Stadt benennt es in ihrer Bedarfsplanung selbst: Unterversorgt sind Jöllenbeck, Heepen, Dornberg und Senne; ein Überangebot gibt es in Schildesche, Sennestadt und Gadderbaum. Bemerkenswert ist die Richtung — Jöllenbeck ist mit 8,2 Prozent Einwohnern über 80 der älteste Stadtbezirk und hat mit rund 51 Plätzen je 1.000 Hochbetagten zugleich das dünnste Angebot; in Sennestadt sind es 234. Über die ganze Stadt gerechnet reichen die 2.622 Plätze dagegen aus. Bielefeld hat also kein Mengen-, sondern ein Verteilungsproblem. Eine Betreuungskraft, die zu Ihnen kommt, löst genau das — sie ist dort, wo Sie wohnen.' },
  { q: 'Welches Einzugsgebiet wird in Bielefeld bedient?', a: 'Bielefeld und Umland: Gütersloh, Herford, Detmold, Paderborn, Minden und alle Gemeinden im Kreis Gütersloh und Herford' },
  { q: 'Ist in einer Wohnung in Bielefeld Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bielefeld hat im Schnitt 85,8 m², 27,0 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 69,2 % der Wohnungen in Bielefeld liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
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
            { label: 'Bielefeld' },
          ]}
          augenbraue="24-Stunden-Pflege in Bielefeld"
          titel="24-Stunden-Pflege und Betreuung in Bielefeld"
          einleitung={<>Schildesche, Brackwede oder am Hang zum Teutoburger Wald: Bielefelder wohnen solide — oft seit Jahrzehnten im selben Haus. Wenn Mutter oder Vater mehr Hilfe brauchen, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da, mit Blick auf die Sparrenburg statt auf eine Warteliste. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bielefeld auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bielefeld bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bielefeld bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bielefeld 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bielefeld"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-bielefeld" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bielefeld" titel="Polnische Betreuungskräfte in Bielefeld">
            <Text>Wer in Bielefeld nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Bielefeld und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bielefeld ausmacht">
            <Text>Bielefeld hat ein Verteilungsproblem, kein Mengenproblem — und das lässt sich genau beziffern. Über die ganze Stadt gerechnet reichen die 2.622 Heimplätze aus; die städtische Bedarfsplanung errechnet bis 2027 sogar einen Überschuss. Zwischen den Stadtbezirken sieht es anders aus:{' '} <strong className="text-pm-ink font-semibold">Der Altersaufbau streut nur um den Faktor 1,7, das Platzangebot aber um den Faktor 4,6</strong> — und beide zeigen in entgegengesetzte Richtungen.</Text>
            <Text>Konkret heißt das: Jöllenbeck ist mit 8,2 Prozent Einwohnern über 80 der älteste Stadtbezirk und hat mit 51 Plätzen je 1.000 Hochbetagten zugleich das dünnste Angebot. In Sennestadt, altersmäßig unauffällig, sind es 234. Die Stadt benennt das selbst: Unterversorgung in Jöllenbeck, Heepen, Dornberg und Senne, Überangebot in Schildesche, Sennestadt und Gadderbaum. Wer in Jöllenbeck einen Heimplatz sucht, sucht ihn also außerhalb des eigenen Viertels — oder bleibt zu Hause.</Text>
            <Text>Eine Zahl macht die Dringlichkeit deutlich:{' '} <strong className="text-pm-ink font-semibold">Von den Bielefeldern über 80 sind 49,7 Prozent pflegebedürftig</strong> — fast jeder zweite. Bei den 65- bis 79-Jährigen sind es 11,3 Prozent. Insgesamt zählt die Stadt 22.590 Pflegebedürftige, von denen 66,1 Prozent zu Hause ohne Pflegedienst versorgt werden und 22,1 Prozent mit einem Dienst. Nur 11,8 Prozent leben stationär, deutlich weniger als im Bund.</Text>
            <Text>Eine Entwicklung sollte man dabei kennen: Die Zahl der über 80-Jährigen{' '} <em>sinkt</em> in Bielefeld bis 2027 um rund 2.000 — die geburtenschwachen Jahrgänge der Kriegsjahre erreichen jetzt dieses Alter. Ab 2034 steigt sie dann deutlich an. Die heutige Entspannung ist also eine Atempause, keine Trendwende.</Text>
            <Text>Zur Geriatrie der wichtigste praktische Hinweis dieser Seite:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie des Evangelischen Klinikums Bethel liegt nicht in Bethel.</strong> Sie sitzt im Johannesstift an der Schildescher Straße in Bielefeld-Schildesche — rund fünf Kilometer und einen Stadtbezirk vom Bethel-Campus in Gadderbaum entfernt. Wer zu Bethel fährt, ist am falschen Ort. Vier Bielefelder Häuser haben eine geriatrische Leistungsgruppe; die Klinik an der Rosenhöhe heißt inzwischen Universitätsklinik für Geriatrie und hat seit Juli 2025 eine neue Leitung — viele Verzeichnisse führen noch den alten Namen. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bielefeld" titel="Einzugsgebiet Bielefeld">
            <Text>Bielefeld und Umland: Gütersloh, Herford, Detmold, Paderborn, Minden und alle Gemeinden im Kreis Gütersloh und Herford</Text>
            <NearbyCities current="bielefeld" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bielefeld'} land={'Nordrhein-Westfalen'} altbau={55.7} miete={7.12} />


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

            ort={'Bielefeld'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bielefeld">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
