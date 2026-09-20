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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Aachen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Aachen 2026" },
  { id: 'polnische-betreuungskraefte-in-aachen', title: "Polnische Betreuungskräfte in Aachen" },
  { id: '24-stunden-pflege-in', title: "24-Stunden-Pflege in der StädteRegion Aachen" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Aachen ausmacht" },
  { id: 'einzugsgebiet-aachen', title: "Einzugsgebiet Aachen" },
  { id: 'werkzeuge', title: "Was es in Aachen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Aachen über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Aachen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Aachen: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-aachen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Aachen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Aachen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-aachen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-aachen#service',
    name: 'Primundus — 24h-Pflege Aachen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Aachen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-aachen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Aachen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Aachen', item: 'https://primundus.de/24h-pflege-aachen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Aachen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Aachen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Aachen rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Aachen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Aachen ist bekannt: Die durchschnittliche Wohnung misst 77,5 Quadratmeter, 40,1 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 23,6 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Aachen?',
        acceptedAnswer: { '@type': 'Answer', text: '24.661 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,4 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 19,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Aachen — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Aachen im Schnitt 3,5 Wohnungen, in Nordrhein-Westfalen 2,3. 25,2 Prozent der Gebäude stehen frei, 51,3 Prozent sind Reihenhäuser. 56,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Aachen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie schwer ist es, in Aachen einen Heimplatz zu bekommen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Schwer, und das ist belegt. Aachen hat mit 12,3 Prozent den höchsten Anteil vollstationär versorgter Pflegebedürftiger der Städteregion, aber nur 137 Heimplätze je 1.000 Einwohner über 80 — in der Städteregion sind es 153. Die Auslastung liegt bei 93 Prozent, im Heimfinder NRW ist weniger als ein Prozent der Plätze frei; die Pflegeplanung der Städteregion spricht von faktischer Vollbelegung, bei der die Wahlmöglichkeit entfällt. Aachen ist zudem die einzige Kommune der Region, in der das Angebot geschrumpft ist: 64 Plätze weniger als 2021. Für viele Familien ist die Betreuung zu Hause deshalb die einzige Lösung, die sich planen lässt.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Aachen bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Aachen und StädteRegion: Alsdorf, Baesweiler, Eschweiler, Herzogenrath, Würselen und alle Gemeinden in der StädteRegion Aachen' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Aachen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Aachen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Aachen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Aachen?', a: 'Das hängt am Grundriss, und die Ausgangslage in Aachen ist bekannt: Die durchschnittliche Wohnung misst 77,5 Quadratmeter, 40,1 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 23,6 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Aachen?', a: '24.661 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,4 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 19,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Aachen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Aachen im Schnitt 3,5 Wohnungen, in Nordrhein-Westfalen 2,3. 25,2 Prozent der Gebäude stehen frei, 51,3 Prozent sind Reihenhäuser. 56,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Aachen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie schwer ist es, in Aachen einen Heimplatz zu bekommen?', a: 'Schwer, und das ist belegt. Aachen hat mit 12,3 Prozent den höchsten Anteil vollstationär versorgter Pflegebedürftiger der Städteregion, aber nur 137 Heimplätze je 1.000 Einwohner über 80 — in der Städteregion sind es 153. Die Auslastung liegt bei 93 Prozent, im Heimfinder NRW ist weniger als ein Prozent der Plätze frei; die Pflegeplanung der Städteregion spricht von faktischer Vollbelegung, bei der die Wahlmöglichkeit entfällt. Aachen ist zudem die einzige Kommune der Region, in der das Angebot geschrumpft ist: 64 Plätze weniger als 2021. Für viele Familien ist die Betreuung zu Hause deshalb die einzige Lösung, die sich planen lässt.' },
  { q: 'Welches Einzugsgebiet wird in Aachen bedient?', a: 'Aachen und StädteRegion: Alsdorf, Baesweiler, Eschweiler, Herzogenrath, Würselen und alle Gemeinden in der StädteRegion Aachen' },
  { q: 'Ist in einer Wohnung in Aachen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Aachen hat im Schnitt 77,5 m², 40,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,2 % der Gebäude in Aachen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Aachen' },
          ]}
          augenbraue="24-Stunden-Pflege in Aachen"
          titel="24-Stunden-Pflege und Betreuung in Aachen"
          einleitung={<>Ob in Burtscheid, Brand oder Laurensberg: Aachener bleiben ihrer Stadt im Dreiländereck treu — und ihrem Zuhause erst recht. Wenn Mutter oder Vater mehr Hilfe brauchen, als die Familie leisten kann, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Aachen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Aachen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Aachen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Aachen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Aachen"
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
            <RechnerKasten src="ort-aachen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-aachen" titel="Polnische Betreuungskräfte in Aachen">
            <Text>Wer in Aachen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Aachen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-in" titel="24-Stunden-Pflege in der StädteRegion Aachen">
            <Text>Unsere Betreuungskräfte ziehen in Aachen und in der StädteRegion Aachen ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Aachen ausmacht">
            <Text>In Aachen ist der Heimplatz knapp, und das lässt sich beziffern. Die Stadt hat mit 12,3 Prozent den höchsten Anteil vollstationär versorgter Pflegebedürftiger der ganzen Städteregion — gleichzeitig stehen hier{' '} <strong className="text-pm-ink font-semibold">nur 137 Heimplätze je 1.000 Einwohner über 80 zur Verfügung, in der Städteregion sind es 153.</strong> Mehr Menschen im Heim bei weniger Plätzen: Das geht nur mit Vollbelegung. Die Auslastung liegt bei 93 Prozent, im Heimfinder NRW sind unter ein Prozent der Plätze frei. Die Pflegeplanung der Städteregion nennt das eine faktische Vollbelegung, bei der die Wahlmöglichkeit der Betroffenen entfällt.</Text>
            <Text>Und es wird enger, nicht weiter.{' '} <strong className="text-pm-ink font-semibold">Aachen ist die einzige Kommune der Region, in der das Heimplatzangebot geschrumpft ist</strong> — 64 Plätze weniger als 2021. Über 300 Plätze unerfüllter Bedarf finden, wie die Planung nüchtern festhält, investorenseitig keine Resonanz. Wer in Aachen für die Eltern einen Heimplatz sucht, sucht also nicht wochenlang, sondern länger. Die häusliche Lösung ist hier für viele Familien nicht die zweitbeste, sondern die einzige, die sich planen lässt.</Text>
            <Text>Versorgt wird in Aachen dabei professioneller als im Umland: 14,6 Prozent der Pflegebedürftigen nutzen einen ambulanten Dienst, 65,9 Prozent beziehen ausschließlich Pflegegeld. In den Altkreiskommunen liegt der professionelle Anteil bei 22 Prozent, in der Stadt bei fast 27. Das passt zum Angebot: 47 ambulante Dienste sind in Aachen ansässig — 43 Prozent des regionalen Angebots bei 40 Prozent der über 70-Jährigen.</Text>
            <Text>Beim Alter zerfällt Aachen in zwei Städte, und der Abstand wächst. Zwischen dem jüngsten und dem ältesten Stadtbezirk liegen{' '} <strong className="text-pm-ink font-semibold">15,8 Jahre Durchschnittsalter</strong> — am Ponttor 32,7 Jahre, in Steinebrück 48,5. Bemerkenswert ist die Richtung: Seit 2010 verjüngt sich die Innenstadt weiter, während die Außenbezirke altern. In Walheim stieg das Durchschnittsalter um fast vier Jahre, im Bezirk Theater sank es um ebenso viel. Wer in Aachen Pflege plant, plant für Kornelimünster, Walheim, Richterich und die Beverau — nicht für das Hochschulviertel.</Text>
            <Text>Zur Geriatrie zwei Hinweise, die Wege sparen. Die eigenständige geriatrische Klinik der Stadt sitzt im <strong className="text-pm-ink font-semibold">Luisenhospital am Boxgraben</strong> — mit Akutgeriatrie, geriatrischer Rehabilitation und Tagesklinik unter einem Dach. Die Altersmedizin der Uniklinik liegt dagegen nicht auf dem Hauptcampus an der Pauwelsstraße, sondern am Morillenhang im früheren Franziskushospital. Und das „Rhein-Maas Klinikum", das bei der Suche nach Geriatrie in Aachen weit oben auftaucht, steht in Würselen. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-aachen" titel="Einzugsgebiet Aachen">
            <Text>Aachen und StädteRegion: Alsdorf, Baesweiler, Eschweiler, Herzogenrath, Würselen und alle Gemeinden in der StädteRegion Aachen</Text>
            <NearbyCities current="aachen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Aachen'} land={'Nordrhein-Westfalen'} altbau={56.3} miete={8.04} />


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

            ort={'Aachen'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260202-nicole'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Aachen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
