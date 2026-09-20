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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Eschborn bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Eschborn 2026" },
  { id: 'polnische-betreuungskraefte-in-eschborn', title: "Polnische Betreuungskräfte in Eschborn" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Main-Taunus-Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Eschborn ausmacht" },
  { id: 'einzugsgebiet-eschborn', title: "Einzugsgebiet Eschborn" },
  { id: 'werkzeuge', title: "Was es in Eschborn kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Eschborn" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Eschborn: Preis und Kräfte sofort sehen',
  description: '24-Stunden-Pflege in Eschborn: Ihren Preis und die passenden Betreuungskräfte sehen Sie in 2 Minuten — mit Foto, Erfahrung und Deutschniveau. Täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-eschborn' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Eschborn — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Eschborn. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-eschborn',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-eschborn#service',
    name: 'Primundus — 24h-Pflege Eschborn',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Eschborn. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-eschborn',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Eschborn' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Eschborn', item: 'https://primundus.de/24h-pflege-eschborn' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Eschborn?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Eschborn starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Eschborn rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Eschborn?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Eschborn ist bekannt: Die durchschnittliche Wohnung misst 88,9 Quadratmeter, 25,5 Prozent liegen unter 60 Quadratmetern (Hessen: 20,4 Prozent), und 42,4 Prozent der Haushalte wohnen im Eigentum (Hessen: 46,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Eschborn?',
        acceptedAnswer: { '@type': 'Answer', text: '2.122 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,8 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Eschborn — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Eschborn im Schnitt 2,8 Wohnungen, in Hessen 2,2. 40,0 Prozent der Gebäude stehen frei, 34,7 Prozent sind Reihenhäuser. 42,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Eschborn ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie ist die Heimplatz-Lage rund um Eschborn?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sehr knapp. Der Main-Taunus-Kreis hat mit 31 vollstationären Plätzen je 1.000 Einwohner über 65 die dünnste Heimplatzdecke aller 26 hessischen Kreise — im Land sind es 47. In Eschborn selbst gibt es zwei Pflegeheime mit zusammen 97 Plätzen. Entsprechend leben im Kreis nur 10,9 Prozent der Pflegebedürftigen im Heim (Hessen: 13,5 Prozent), während 20,6 Prozent einen ambulanten Dienst nutzen (Hessen: 17,6). Die stärkere ambulante Versorgung ist hier keine Vorliebe, sondern eine Folge der Knappheit. Ein Krankenhaus und damit eine Geriatrie hat Eschborn nicht.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Eschborn bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eschborn und Main-Taunus-Kreis: Sulzbach, Kelkheim, Hattersheim, Hofheim am Taunus und alle Gemeinden im Main-Taunus-Kreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Eschborn?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Eschborn starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Eschborn rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Eschborn?', a: 'Das hängt am Grundriss, und die Ausgangslage in Eschborn ist bekannt: Die durchschnittliche Wohnung misst 88,9 Quadratmeter, 25,5 Prozent liegen unter 60 Quadratmetern (Hessen: 20,4 Prozent), und 42,4 Prozent der Haushalte wohnen im Eigentum (Hessen: 46,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Eschborn?', a: '2.122 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,8 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Eschborn — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Eschborn im Schnitt 2,8 Wohnungen, in Hessen 2,2. 40,0 Prozent der Gebäude stehen frei, 34,7 Prozent sind Reihenhäuser. 42,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Eschborn ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie ist die Heimplatz-Lage rund um Eschborn?', a: 'Sehr knapp. Der Main-Taunus-Kreis hat mit 31 vollstationären Plätzen je 1.000 Einwohner über 65 die dünnste Heimplatzdecke aller 26 hessischen Kreise — im Land sind es 47. In Eschborn selbst gibt es zwei Pflegeheime mit zusammen 97 Plätzen. Entsprechend leben im Kreis nur 10,9 Prozent der Pflegebedürftigen im Heim (Hessen: 13,5 Prozent), während 20,6 Prozent einen ambulanten Dienst nutzen (Hessen: 17,6). Die stärkere ambulante Versorgung ist hier keine Vorliebe, sondern eine Folge der Knappheit. Ein Krankenhaus und damit eine Geriatrie hat Eschborn nicht.' },
  { q: 'Welches Einzugsgebiet wird in Eschborn bedient?', a: 'Eschborn und Main-Taunus-Kreis: Sulzbach, Kelkheim, Hattersheim, Hofheim am Taunus und alle Gemeinden im Main-Taunus-Kreis' },
  { q: 'Ist in einer Wohnung in Eschborn Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Eschborn hat im Schnitt 88,9 m², 25,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,2 % der Wohnungen in Eschborn liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.307 € Unterschied im Monat, 27.684 € im Jahr.' },
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
            { label: 'Eschborn' },
          ]}
          augenbraue="24-Stunden-Pflege in Eschborn"
          titel="24-Stunden-Pflege und Betreuung in Eschborn"
          einleitung={<>Viele Eschborner haben Jahrzehnte zwischen Hochhäusern in Frankfurt gearbeitet und wohnen gern ruhig — in Niederhöchstadt oder im alten Ortskern. Damit das Zuhause auch mit Pflegebedarf bleibt, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, 1:1-Betreuung statt Heimalltag. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Eschborn auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Eschborn bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Eschborn bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Eschborn 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Eschborn"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-eschborn" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-eschborn" titel="Polnische Betreuungskräfte in Eschborn">
            <Text>Wer in Eschborn nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Eschborn und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.230 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Main-Taunus-Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Eschborn und im Main-Taunus-Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Eschborn ausmacht">
            <Text>Der Main-Taunus-Kreis hat{' '} <strong className="text-pm-ink font-semibold">die dünnste Heimplatzdecke aller 26 hessischen Kreise: 31 Plätze je 1.000 Einwohner über 65, im Land sind es 47.</strong>{' '} Das ist kein Randbefund, sondern der Kern der Lage. Entsprechend leben hier nur 10,9 Prozent der Pflegebedürftigen im Heim gegenüber 13,5 Prozent in Hessen — aber der Rückstand beim Angebot ist fast doppelt so groß wie der beim Anteil. Wer hier einen Heimplatz sucht, sucht in dem knappsten Markt des Landes.</Text>
            <Text>Die ambulante Versorgung fängt das teilweise auf: 20,6 Prozent der 13.683 Pflegebedürftigen im Kreis nutzen einen Pflegedienst, in Hessen sind es 17,6 Prozent. Das ist allerdings keine Präferenz, sondern eine Folge der Knappheit. In Eschborn selbst gibt es zwei Pflegeheime mit zusammen 97 Plätzen, sieben ambulante Dienste und zwei Tagespflegen — für gut 22.000 Einwohner.</Text>
            <Text>Eschborn ist dabei jünger als sein Umfeld: 42,9 Jahre Durchschnittsalter gegenüber 44,7 im Kreis und 44,3 in Hessen. Das hat mit dem Arbeitsmarkt zu tun — in der Stadt gibt es{' '} <strong className="text-pm-ink font-semibold">rund 43.600 sozialversicherungspflichtige Arbeitsplätze bei gut 22.000 Einwohnern</strong>, fast doppelt so viele Stellen wie Bewohner. Ein niedriger Altersdurchschnitt heißt aber nicht weniger Bedarf, sondern nur: Er verteilt sich auf weniger Menschen.</Text>
            <Text>Ein Krankenhaus hat Eschborn nicht, und damit auch keine Geriatrie. Die drei nächsten geriatrischen Kliniken gehören alle demselben Träger — in Bad Soden, Hofheim und Frankfurt-Höchst. Hier ist Vorsicht geboten: Bad Soden und Hofheim werden von derselben Chefärztin geführt und sind unter derselben Rufnummer erreichbar, und ein Umstrukturierungskonzept sieht vor, die Geriatrie ganz nach Hofheim zu verlagern. Welcher Standort heute welchen Betrieb führt, ließ sich aus den öffentlichen Quellen nicht eindeutig klären — rufen Sie vorher an, bevor Sie fahren. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-eschborn" titel="Einzugsgebiet Eschborn">
            <Text>Eschborn und Main-Taunus-Kreis: Sulzbach, Kelkheim, Hattersheim, Hofheim am Taunus und alle Gemeinden im Main-Taunus-Kreis</Text>
            <NearbyCities current="eschborn" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Eschborn'} land={'Hessen'} altbau={42.8} miete={10.14} />


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

            ort={'Eschborn'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260605-daniel', 'k-20260327-marco'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Eschborn">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
