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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Jena bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Jena 2026" },
  { id: 'polnische-betreuungskraefte-in-jena', title: "Polnische Betreuungskräfte in Jena" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Saale-Holzland-Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Jena ausmacht" },
  { id: 'einzugsgebiet-jena', title: "Einzugsgebiet Jena" },
  { id: 'werkzeuge', title: "Was es in Jena kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Jena über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Jena" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Jena: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-jena' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Jena — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Jena. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-jena',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-jena#service',
    name: 'Primundus — 24h-Pflege Jena',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Jena. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-jena',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Jena' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Jena', item: 'https://primundus.de/24h-pflege-jena' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Jena?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Thüringen (Eigenanteil rund 3.000 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Jena starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Jena rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Jena?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Jena ist bekannt: Die durchschnittliche Wohnung misst 73,0 Quadratmeter, 40,5 Prozent liegen unter 60 Quadratmetern (Thüringen: 27,8 Prozent), und 21,4 Prozent der Haushalte wohnen im Eigentum (Thüringen: 46,2 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Jena — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Jena im Schnitt 3,9 Wohnungen, in Thüringen 2,1. 46,1 Prozent der Gebäude stehen frei, 29,7 Prozent sind Reihenhäuser. 47,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Jena ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Jena?',
        acceptedAnswer: { '@type': 'Answer', text: '13.581 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,3 Prozent — in Thüringen 13,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Thüringen: 28,3 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'In welchen Jenaer Stadtteilen wird Pflege am häufigsten gebraucht?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das Alter verteilt sich in Jena extrem ungleich. In Wogau ist mehr als jeder dritte Einwohner über 65 (37,0 Prozent), in Drackendorf/Lobeda-Ost fast ein Drittel (32,3), in Winzerla 28,5 Prozent — im Jenaer Zentrum dagegen nur 10,1 Prozent und in Lichtenhain Ort 9,5. Zwischen dem ältesten und dem jüngsten Bezirk liegt der Faktor vier. Alt wird man in Jena in den Plattenbaulagen von Lobeda und Winzerla und in den eingemeindeten Dörfern auf den Hochflächen. Unsere Betreuungskräfte kommen in jeden Stadtteil — auch nach Cospeda auf 335 Metern, wo ein ambulanter Dienst weite Wege hätte. Anreise und Preis sind überall gleich.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Jena bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Jena und Saale-Holzland-Kreis: Kahla, Stadtroda, Hermsdorf und alle Gemeinden im Saale-Holzland-Kreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Jena?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Thüringen (Eigenanteil rund 3.000 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Jena starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Jena rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Jena?', a: 'Das hängt am Grundriss, und die Ausgangslage in Jena ist bekannt: Die durchschnittliche Wohnung misst 73,0 Quadratmeter, 40,5 Prozent liegen unter 60 Quadratmetern (Thüringen: 27,8 Prozent), und 21,4 Prozent der Haushalte wohnen im Eigentum (Thüringen: 46,2 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Jena — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Jena im Schnitt 3,9 Wohnungen, in Thüringen 2,1. 46,1 Prozent der Gebäude stehen frei, 29,7 Prozent sind Reihenhäuser. 47,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Jena ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Jena?', a: '13.581 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,3 Prozent — in Thüringen 13,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Thüringen: 28,3 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'In welchen Jenaer Stadtteilen wird Pflege am häufigsten gebraucht?', a: 'Das Alter verteilt sich in Jena extrem ungleich. In Wogau ist mehr als jeder dritte Einwohner über 65 (37,0 Prozent), in Drackendorf/Lobeda-Ost fast ein Drittel (32,3), in Winzerla 28,5 Prozent — im Jenaer Zentrum dagegen nur 10,1 Prozent und in Lichtenhain Ort 9,5. Zwischen dem ältesten und dem jüngsten Bezirk liegt der Faktor vier. Alt wird man in Jena in den Plattenbaulagen von Lobeda und Winzerla und in den eingemeindeten Dörfern auf den Hochflächen. Unsere Betreuungskräfte kommen in jeden Stadtteil — auch nach Cospeda auf 335 Metern, wo ein ambulanter Dienst weite Wege hätte. Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Jena bedient?', a: 'Jena und Saale-Holzland-Kreis: Kahla, Stadtroda, Hermsdorf und alle Gemeinden im Saale-Holzland-Kreis' },
  { q: 'Ist in einer Wohnung in Jena Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Jena hat im Schnitt 73,0 m², 40,5 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,9 % der Gebäude in Jena sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Thüringen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.000 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.077 € Unterschied im Monat, 24.924 € im Jahr.' },
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
            { label: 'Jena' },
          ]}
          augenbraue="24-Stunden-Pflege in Jena"
          titel="24-Stunden-Pflege und Betreuung in Jena"
          einleitung={<>Ob Altbau in der Innenstadt, Wohnung in Winzerla oder Haus unterm Kernberg-Hang: Jenaer bleiben ihrer Stadt an der Saale verbunden. Damit das auch mit Pflegebedarf gilt, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, 1:1, ohne Heimumzug. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Thüringen: Eigenanteil rund 3.000 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Jena auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Jena bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Jena bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Jena 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Jena"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Thüringen: Eigenanteil rund 3.000 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-jena" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-jena" titel="Polnische Betreuungskräfte in Jena">
            <Text>Wer in Jena nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Jena und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.000 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Saale-Holzland-Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Jena und im Saale-Holzland-Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Jena ausmacht">
            <Text>Jena hat die niedrigste Pflegequote aller 22 thüringischen Kreise — 64 Pflegebedürftige je 1.000 Einwohner gegenüber 92 im Land. Das liegt an der Universität: 22,9 Prozent der Jenaer sind über 65, in Thüringen 28,7 Prozent. Mit dem Stadtdurchschnitt zu planen wäre trotzdem ein Fehler, denn{' '} <strong className="text-pm-ink font-semibold">zwischen den Stadtteilen liegt beim Seniorenanteil der Faktor vier</strong>: In Lichtenhain sind 9,5 Prozent der Einwohner über 65, in Wogau 37,0 Prozent. Winzerla mit seinen gut 10.000 Bewohnern liegt bei 28,5 Prozent, Lobeda-Ost bei 32,3. Die Stadt selbst rechnet damit, dass Winzerla und die Ortschaften bis 2030 die ältesten Planungsräume werden.</Text>
            <Text>Dazu kommt die Lage im Saaletal, und die ist hier alltagsrelevant. Das Zentrum liegt auf 143 Metern,{' '} <strong className="text-pm-ink font-semibold">der Ortsteil Cospeda mit seinen 1.387 Einwohnern auf 335</strong> — rund 190 Höhenmeter zwischen zwei bewohnten Stadtteilen derselben Stadt. Die Stadt beschreibt ihre Planungsräume selbst über die Topografie: die Ortschaften „in den Seitentälern der Saale sowie auf den Hochflächen", Jena-Ost geprägt von den „Steilhängen der Kernberge". Und die Saale teilt die Stadt; die Übergänge nennt die Verwaltung als Engpass. Für einen ambulanten Dienst heißt das lange Wege für kurze Einsätze — für jemanden, der im Haus wohnt, gar nichts.</Text>
            <Text>Bei der Versorgung fällt auf, dass in Jena seltener rein familiär gepflegt wird als im Land: 51,0 gegen 54,2 Prozent. Der Heimanteil liegt mit 15,9 Prozent über dem thüringischen Wert von 12,6. Daraus auf ein besonders dichtes Heimangebot zu schließen, wäre allerdings falsch. Gemessen an der Zahl der über 65-Jährigen stehen in Jena rund 41 Dauerpflegeplätze je 1.000 bereit, im Land 38 — ein Vorsprung von sechs Prozent, während der Anteil um 26 Prozent höher liegt. Der Grund ist der Nenner:{' '} <strong className="text-pm-ink font-semibold">Jena hat nicht auffällig viele Heimplätze, sondern auffällig wenige Pflegebedürftige insgesamt.</strong></Text>
            <Text>Geriatrisch versorgt das Universitätsklinikum die Stadt mit einer eigenen Klinik für Geriatrie samt Tagesklinik. Ein praktischer Hinweis, der Angehörigen Wege spart: Mehrere Verzeichnisse führen die Klinik unter der zentralen UKJ-Adresse in der Bachstraße — sie sitzt aber am Klinikumsstandort in Lobeda, rund fünf Kilometer entfernt und mit anderer Anbindung. Eine eigenständige geriatrische Reha-Klinik gibt es in Jena nicht; die Anschlussbehandlung findet in der Region statt. Umso mehr zählt, wer danach zu Hause da ist. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-jena" titel="Einzugsgebiet Jena">
            <Text>Jena und Saale-Holzland-Kreis: Kahla, Stadtroda, Hermsdorf und alle Gemeinden im Saale-Holzland-Kreis</Text>
            <NearbyCities current="jena" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Jena'} land={'Thüringen'} altbau={47.6} miete={7.04} />


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

            ort={'Jena'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250711-patrick'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Jena">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
