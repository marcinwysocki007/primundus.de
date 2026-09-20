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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bad Reichenhall bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bad Reichenhall 2026" },
  { id: 'polnische-betreuungskraefte-in-bad', title: "Polnische Betreuungskräfte in Bad Reichenhall" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Berchtesgadener Land" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bad Reichenhall ausmacht" },
  { id: 'einzugsgebiet-bad-reichenhall', title: "Einzugsgebiet Bad Reichenhall" },
  { id: 'werkzeuge', title: "Was es in Bad Reichenhall kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bad Reichenhall" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege Bad Reichenhall ab 2.150 €: 1:1 zu Hause',
  description: '1:1-Betreuung in den eigenen vier Wänden statt Heimplatz: Betreuungskraft zieht in Bad Reichenhall ein, entlastet die Familie. Ab 2.150 €, Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-reichenhall' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bad Reichenhall — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bad Reichenhall. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-reichenhall',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bad-reichenhall#service',
    name: 'Primundus — 24h-Pflege Bad Reichenhall',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bad Reichenhall. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-reichenhall',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bad Reichenhall' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bad Reichenhall', item: 'https://primundus.de/24h-pflege-bad-reichenhall' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bad Reichenhall?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bad Reichenhall starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bad Reichenhall rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bad Reichenhall?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Bad Reichenhall ist bekannt: Die durchschnittliche Wohnung misst 78,4 Quadratmeter, 33,7 Prozent liegen unter 60 Quadratmetern (Bayern: 20,7 Prozent), und 33,9 Prozent der Haushalte wohnen im Eigentum (Bayern: 49,3 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Bad Reichenhall?',
        acceptedAnswer: { '@type': 'Answer', text: '3.170 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 17,6 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 34,3 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Bad Reichenhall — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Bad Reichenhall im Schnitt 3,6 Wohnungen, in Bayern 2,1. 52,7 Prozent der Gebäude stehen frei, 28,1 Prozent sind Reihenhäuser. 45,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bad Reichenhall ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Bad Reichenhall eine Akutgeriatrie?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein — und das zu wissen erspart Angehörigen Fahrerei. Die Kreisklinik Bad Reichenhall hat 16 Fachabteilungen, aber keine Akutgeriatrie. Die Akutgeriatrie desselben Trägers sitzt an der Kreisklinik Trostberg, einem anderen Landkreis rund 55 Kilometer entfernt. Am Ort gibt es dafür eine geriatrische Rehaklinik, die Rehaklinik Prinzregent Luitpold. Von den übrigen Kurkliniken der Stadt arbeitet keine geriatrisch — sie behandeln Atemwege, Orthopädie und Onkologie. Bad Reichenhall ist mit 29,2 Prozent Einwohnern über 65 zugleich eine der ältesten Städte Bayerns (Freistaat: 21,6 Prozent).' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bad Reichenhall bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bad Reichenhall und Berchtesgadener Land Nord: Piding, Bayerisch Gmain, Ainring und alle Gemeinden im nördlichen Landkreis Berchtesgadener Land' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Reichenhall?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Reichenhall starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bad Reichenhall rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bad Reichenhall?', a: 'Das hängt am Grundriss, und die Ausgangslage in Bad Reichenhall ist bekannt: Die durchschnittliche Wohnung misst 78,4 Quadratmeter, 33,7 Prozent liegen unter 60 Quadratmetern (Bayern: 20,7 Prozent), und 33,9 Prozent der Haushalte wohnen im Eigentum (Bayern: 49,3 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Bad Reichenhall?', a: '3.170 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 17,6 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 34,3 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bad Reichenhall — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bad Reichenhall im Schnitt 3,6 Wohnungen, in Bayern 2,1. 52,7 Prozent der Gebäude stehen frei, 28,1 Prozent sind Reihenhäuser. 45,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bad Reichenhall ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Gibt es in Bad Reichenhall eine Akutgeriatrie?', a: 'Nein — und das zu wissen erspart Angehörigen Fahrerei. Die Kreisklinik Bad Reichenhall hat 16 Fachabteilungen, aber keine Akutgeriatrie. Die Akutgeriatrie desselben Trägers sitzt an der Kreisklinik Trostberg, einem anderen Landkreis rund 55 Kilometer entfernt. Am Ort gibt es dafür eine geriatrische Rehaklinik, die Rehaklinik Prinzregent Luitpold. Von den übrigen Kurkliniken der Stadt arbeitet keine geriatrisch — sie behandeln Atemwege, Orthopädie und Onkologie. Bad Reichenhall ist mit 29,2 Prozent Einwohnern über 65 zugleich eine der ältesten Städte Bayerns (Freistaat: 21,6 Prozent).' },
  { q: 'Welches Einzugsgebiet wird in Bad Reichenhall bedient?', a: 'Bad Reichenhall und Berchtesgadener Land Nord: Piding, Bayerisch Gmain, Ainring und alle Gemeinden im nördlichen Landkreis Berchtesgadener Land' },
  { q: 'Ist in einer Wohnung in Bad Reichenhall Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Reichenhall hat im Schnitt 78,4 m², 33,7 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 62,0 % der Wohnungen in Bad Reichenhall liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Bad Reichenhall' },
          ]}
          augenbraue="24-Stunden-Pflege in Bad Reichenhall"
          titel="24-Stunden-Pflege und Betreuung in Bad Reichenhall"
          einleitung={<>Alpenkurstadt mit Salzgeschichte: In Bad Reichenhall, Kirchberg oder drüben in Bayerisch Gmain lebt man mit Bergblick — und möchte genau dort gepflegt werden, nicht hinter Heimtüren. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026)',
            'Bayern: Landespflegegeld +500 €/Jahr',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bad Reichenhall auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bad Reichenhall bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bad Reichenhall bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bad Reichenhall 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bad Reichenhall"
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
            <RechnerKasten src="ort-bad-reichenhall" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bad" titel="Polnische Betreuungskräfte in Bad Reichenhall">
            <Text>Wer in Bad Reichenhall nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Bad Reichenhall und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.200 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Berchtesgadener Land">
            <Text>Unsere Betreuungskräfte ziehen in Bad Reichenhall und im Berchtesgadener Land ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bad Reichenhall ausmacht">
            <Text>Bad Reichenhall ist eine der ältesten Städte Bayerns.{' '} <strong className="text-pm-ink font-semibold">29,2 Prozent der Einwohner sind über 65 — 5.349 Menschen —, im Freistaat sind es 21,6 Prozent.</strong> Das sind fast acht Prozentpunkte Unterschied, und selbst gegenüber dem eigenen Landkreis liegt die Stadt um knapp fünf Punkte darüber. Das Durchschnittsalter beträgt 48,3 Jahre. Auf 100 Menschen im Erwerbsalter kommen hier 54 im Rentenalter.</Text>
            <Text>Umso überraschender ist eine zweite Zahl: Die Pflegequote im Landkreis Berchtesgadener Land liegt mit 44 Pflegebedürftigen je 1.000 Einwohner{' '} <em>unter</em> dem bayerischen Wert von 47 — obwohl der Kreis deutlich älter ist als das Land. Was dagegen auffällt, ist die Versorgungsform:{' '} <strong className="text-pm-ink font-semibold">Nur 43,0 Prozent der Pflegebedürftigen werden allein von Angehörigen versorgt, in Bayern sind es 48,5 Prozent</strong> — und 21,6 Prozent leben im Heim gegenüber 17,6 im Freistaat. Hier wird Pflege früher aus der Hand gegeben als anderswo in Bayern.</Text>
            <Text>Dass mehr Menschen im Heim leben, heißt allerdings nicht, dass es besonders viele Plätze gäbe. Gemessen an der Zahl der über 65-Jährigen stehen 46 Plätze je 1.000 bereit, in Bayern 44 — ein Vorsprung von rund vier Prozent, während der Heimanteil um 23 Prozent über dem Landeswert liegt. Der Unterschied erklärt sich aus dem Nenner: Der Kreis ist eben alt. Für Familien heißt das, dass ein Heimplatz hier keineswegs leichter zu bekommen ist, als die Anteilszahl vermuten lässt.</Text>
            <Text>Die Alpenlage wird beim Thema Pflege gern bemüht, meist mit den falschen Zahlen. Die oft zitierte Spanne von 470 bis 1.750 Metern ist für den Alltag bedeutungslos: Der Predigtstuhl trägt eine Bergstation, das Reichenhaller Haus eine Alpenvereinshütte — dort wohnt niemand. Alltagsrelevant ist etwas anderes:{' '} <strong className="text-pm-ink font-semibold">Der bewohnte Ortsteil Nonn erstreckt sich über rund 170 Höhenmeter</strong>, vom Unterland auf 474 Metern bis zum Oberland auf über 600. Wer dort oben wohnt, kennt die Anfahrt im Winter.</Text>
            <Text>Ein Punkt, der Angehörigen viel Fahrerei erspart: Die Kreisklinik Bad Reichenhall hat 16 Fachabteilungen, aber{' '} <strong className="text-pm-ink font-semibold">keine Akutgeriatrie</strong>. Die Akutgeriatrie desselben Trägers sitzt an der Kreisklinik Trostberg — anderer Landkreis, rund 55 Kilometer entfernt. Am Ort gibt es dafür eine geriatrische Rehaklinik, die Rehaklinik Prinzregent Luitpold. Von den übrigen Kurkliniken der Stadt arbeitet keine geriatrisch; sie behandeln Atemwege, Orthopädie und Onkologie. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bad-reichenhall" titel="Einzugsgebiet Bad Reichenhall">
            <Text>Bad Reichenhall und Berchtesgadener Land Nord: Piding, Bayerisch Gmain, Ainring und alle Gemeinden im nördlichen Landkreis Berchtesgadener Land</Text>
            <NearbyCities current="bad-reichenhall" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bad Reichenhall'} land={'Bayern'} altbau={45.6} miete={7.74} />


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

            ort={'Bad Reichenhall'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260823-michael', 'k-20260416-barbara'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bad Reichenhall">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
