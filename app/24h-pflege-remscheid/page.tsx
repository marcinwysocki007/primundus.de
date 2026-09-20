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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Remscheid bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Remscheid 2026" },
  { id: 'polnische-betreuungskraefte-in-remscheid', title: "Polnische Betreuungskräfte in Remscheid" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Bergischen Land" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Remscheid ausmacht" },
  { id: 'einzugsgebiet-remscheid', title: "Einzugsgebiet Remscheid" },
  { id: 'werkzeuge', title: "Was es in Remscheid kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Remscheid" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Remscheid ab 2.150 €: 1:1 zu Hause',
  description: '1:1-Betreuung in den eigenen vier Wänden statt Heimplatz: Betreuungskraft zieht in Remscheid ein, entlastet die Familie. Ab 2.150 €, Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-remscheid' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Remscheid — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Remscheid. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-remscheid',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-remscheid#service',
    name: 'Primundus — 24h-Pflege Remscheid',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Remscheid. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-remscheid',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Remscheid' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Remscheid', item: 'https://primundus.de/24h-pflege-remscheid' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Remscheid?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Remscheid starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Remscheid rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Remscheid?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Remscheid ist bekannt: Die durchschnittliche Wohnung misst 85,5 Quadratmeter, 26,7 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 36,2 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Remscheid — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Remscheid im Schnitt 2,8 Wohnungen, in Nordrhein-Westfalen 2,3. 46,0 Prozent der Gebäude stehen frei, 32,9 Prozent sind Reihenhäuser. 64,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Remscheid ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Remscheid?',
        acceptedAnswer: { '@type': 'Answer', text: '12.814 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Bekommt man in Remscheid schwer einen Heimplatz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein, und das wird oft falsch gelesen. Zwar leben nur 11,4 Prozent der Remscheider Pflegebedürftigen im Heim gegenüber 12,2 Prozent in Nordrhein-Westfalen — gemessen an der Zahl der über 65-Jährigen stehen hier aber 47 vollstationäre Plätze je 1.000 bereit, im Land 46. Es gibt also eher etwas mehr Plätze als anderswo, sie werden nur seltener genutzt. Die Stadt selbst begründet das in ihrer Pflegeplanung mit dem sehr großen privaten und ambulanten Pflegepotential und rechnet deshalb sogar einen Abschlag beim künftigen Platzbedarf ein. Nach eigenen Angaben werden 85,5 Prozent aller Remscheider Pflegebedürftigen ambulant versorgt.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Remscheid bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Remscheid und Bergisches Land: Wuppertal-Süd, Solingen, Radevormwald, Hückeswagen und alle Gemeinden im Oberbergischen Kreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Remscheid?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Remscheid starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Remscheid rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Remscheid?', a: 'Das hängt am Grundriss, und die Ausgangslage in Remscheid ist bekannt: Die durchschnittliche Wohnung misst 85,5 Quadratmeter, 26,7 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 36,2 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Remscheid — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Remscheid im Schnitt 2,8 Wohnungen, in Nordrhein-Westfalen 2,3. 46,0 Prozent der Gebäude stehen frei, 32,9 Prozent sind Reihenhäuser. 64,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Remscheid ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Remscheid?', a: '12.814 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Bekommt man in Remscheid schwer einen Heimplatz?', a: 'Nein, und das wird oft falsch gelesen. Zwar leben nur 11,4 Prozent der Remscheider Pflegebedürftigen im Heim gegenüber 12,2 Prozent in Nordrhein-Westfalen — gemessen an der Zahl der über 65-Jährigen stehen hier aber 47 vollstationäre Plätze je 1.000 bereit, im Land 46. Es gibt also eher etwas mehr Plätze als anderswo, sie werden nur seltener genutzt. Die Stadt selbst begründet das in ihrer Pflegeplanung mit dem sehr großen privaten und ambulanten Pflegepotential und rechnet deshalb sogar einen Abschlag beim künftigen Platzbedarf ein. Nach eigenen Angaben werden 85,5 Prozent aller Remscheider Pflegebedürftigen ambulant versorgt.' },
  { q: 'Welches Einzugsgebiet wird in Remscheid bedient?', a: 'Remscheid und Bergisches Land: Wuppertal-Süd, Solingen, Radevormwald, Hückeswagen und alle Gemeinden im Oberbergischen Kreis' },
  { q: 'Ist in einer Wohnung in Remscheid Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Remscheid hat im Schnitt 85,5 m², 26,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 68,5 % der Wohnungen in Remscheid liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Remscheid' },
          ]}
          augenbraue="24-Stunden-Pflege in Remscheid"
          titel="24-Stunden-Pflege und Betreuung in Remscheid"
          einleitung={<>In Lennep mit seiner Altstadt, in Lüttringhausen oder oben im Bergischen: Remscheider Häuser stehen oft seit Generationen in Familienhand. Eine Betreuungskraft von Primundus sorgt dafür, dass niemand sie im Alter verlassen muss — sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Remscheid auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Remscheid bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Remscheid bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Remscheid 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Remscheid"
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
            <RechnerKasten src="ort-remscheid" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-remscheid" titel="Polnische Betreuungskräfte in Remscheid">
            <Text>Wer in Remscheid nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Remscheid und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Bergischen Land">
            <Text>Unsere Betreuungskräfte ziehen in Remscheid und im Bergischen Land ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Remscheid ausmacht">
            <Text>Remscheid verbindet zwei Dinge, die selten zusammen auftreten: einen überdurchschnittlich hohen Pflegebedarf und eine überdurchschnittlich starke häusliche Versorgung.{' '} <strong className="text-pm-ink font-semibold">10.011 Menschen sind hier pflegebedürftig, das sind 8,8 Prozent der Einwohner gegenüber 7,6 Prozent in Nordrhein-Westfalen.</strong>{' '} Und die Zahl wächst rasant: 2019 waren es 6.783, 2021 schon 7.770 — ein Zuwachs von fast 29 Prozent in nur zwei Jahren. Versorgt wird trotzdem überwiegend zu Hause: 59,6 Prozent allein durch Angehörige (Land 59,0), 18,3 Prozent mit ambulantem Dienst (Land 17,3). Nach Angaben der Stadt werden 85,5 Prozent aller Remscheider Pflegebedürftigen ambulant versorgt.</Text>
            <Text>Ein verbreiteter Fehlschluss sei hier ausdrücklich ausgeräumt. Nur 11,4 Prozent der Pflegebedürftigen leben im Heim, im Land 12,2 Prozent — daraus liest sich leicht ein Platzmangel heraus. Das Gegenteil stimmt:{' '} <strong className="text-pm-ink font-semibold">Gemessen an der Zahl der über 65-Jährigen stehen in Remscheid 47 vollstationäre Plätze je 1.000 bereit, in Nordrhein-Westfalen 46.</strong> Die Stadt selbst begründet das in ihrer Pflegeplanung mit dem „sehr großen privaten und ambulanten Pflegepotential" und rechnet deshalb sogar einen Abschlag beim künftigen Platzbedarf ein. Wer in Remscheid zu Hause bleibt, tut das nicht mangels Alternative, sondern weil die Familien es tragen.</Text>
            <Text>Beim Alter geht die Stadt weit auseinander. Der Stadtbezirk Lennep ist durchgängig der älteste — 24,4 Prozent über 65, 8,5 Prozent über 80 —, und im Stadtteil Stadtgarten sind es sogar 16,1 Prozent über 80. Am anderen Ende steht der Honsberg mit 3,3 Prozent. Zur oft zitierten Höhenlage eine ehrliche Einordnung: Zwischen dem tiefsten Punkt an der Wupper (96 Meter) und dem Brodtberg (379 Meter) liegen fast 283 Meter, aber die tief eingeschnittenen Täler sind überwiegend Wald und Talsperre. Die Wohnquartiere liegen fast durchweg auf den Hochflächen. Was im Alltag zählt, sind die Hanglagen innerhalb der Viertel — etwa vom Honsberg, aus Vieringhausen oder Kremenholl hinunter zum Morsbachtal.</Text>
            <Text>Zur Stadt gehört noch etwas: 21,2 Prozent der Einwohner haben eine ausländische Staatsangehörigkeit — Remscheid gibt seinen „Ratgeber Pflege" deshalb in sieben Sprachen heraus. Wenn Sprache in Ihrer Familie ein Thema ist, sprechen Sie es an. Das Deutschniveau jeder Betreuungskraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto.</Text>
            <Text>Geriatrisch ist Remscheid versorgt, aber die Adresse ist wichtig: Die geriatrische Fachabteilung mit 558 stationären Fällen und die Tagesklinik mit zwölf Plätzen sitzen in der <strong className="text-pm-ink font-semibold">Sana Fabricius-Klinik in der Brüderstraße</strong> — nicht im Sana-Klinikum an der Burger Straße. Das sind zwei verschiedene Häuser desselben Trägers, die regelmäßig verwechselt werden. Die Geriatrie bietet dort auch kostenlose Kurse für pflegende Angehörige an. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-remscheid" titel="Einzugsgebiet Remscheid">
            <Text>Remscheid und Bergisches Land: Wuppertal-Süd, Solingen, Radevormwald, Hückeswagen und alle Gemeinden im Oberbergischen Kreis</Text>
            <NearbyCities current="remscheid" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Remscheid'} land={'Nordrhein-Westfalen'} altbau={64.3} miete={5.78} />


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

            ort={'Remscheid'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Remscheid">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
