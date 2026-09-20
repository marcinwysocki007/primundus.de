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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Singen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Singen am Hohentwiel 2026" },
  { id: 'polnische-betreuungskraefte-in-singen', title: "Polnische Betreuungskräfte in Singen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im westlichen Landkreis Konstanz" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Singen ausmacht" },
  { id: 'einzugsgebiet-singen-am-hohentwiel', title: "Einzugsgebiet Singen am Hohentwiel" },
  { id: 'werkzeuge', title: "Was es in Singen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Singen am Hohentwiel" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Singen: erst ansehen, dann entscheiden',
  description: 'Wenn es allein nicht mehr geht, muss es nicht das Heim sein: Eine Betreuungskraft zieht in Singen bei Ihnen ein. Foto, Erfahrung und Deutsch sehen Sie vorher.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-singen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Singen am Hohentwiel — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Singen am Hohentwiel. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-singen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-singen#service',
    name: 'Primundus — 24h-Pflege Singen am Hohentwiel',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Singen am Hohentwiel. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-singen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Singen am Hohentwiel' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Singen am Hohentwiel', item: 'https://primundus.de/24h-pflege-singen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Singen am Hohentwiel?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Singen am Hohentwiel starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Singen am Hohentwiel rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Singen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Singen ist bekannt: Die durchschnittliche Wohnung misst 88,6 Quadratmeter, 21,2 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 42,9 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Singen?',
        acceptedAnswer: { '@type': 'Answer', text: '5.226 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Singen — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Singen im Schnitt 2,9 Wohnungen, in Baden-Württemberg 2,1. 55,0 Prozent der Gebäude stehen frei, 22,1 Prozent sind Reihenhäuser. 53,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Singen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Hat das Klinikum Singen eine Altersmedizin?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein — und das wird häufig verwechselt. Die Klinik für Altersmedizin des Gesundheitsverbunds Landkreis Konstanz sitzt am Klinikum Konstanz, nicht am Hegau-Bodensee-Klinikum in Singen. Weil der Verbund den Fachbereich zentral führt und dabei teilweise die Singener Verbandsadresse angibt, ordnen Verzeichnisse die Geriatrie fälschlich Singen zu. Das Singener Haus führt 16 Fachabteilungen, Altersmedizin ist keine davon. Für eine geriatrische Behandlung geht es nach Konstanz.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Singen am Hohentwiel bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Singen und westlicher Landkreis Konstanz: Radolfzell, Stockach, Engen und alle Gemeinden im westlichen Landkreis Konstanz' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Singen am Hohentwiel?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Singen am Hohentwiel starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Singen am Hohentwiel rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Singen?', a: 'Das hängt am Grundriss, und die Ausgangslage in Singen ist bekannt: Die durchschnittliche Wohnung misst 88,6 Quadratmeter, 21,2 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 42,9 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Singen?', a: '5.226 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Singen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Singen im Schnitt 2,9 Wohnungen, in Baden-Württemberg 2,1. 55,0 Prozent der Gebäude stehen frei, 22,1 Prozent sind Reihenhäuser. 53,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Singen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Hat das Klinikum Singen eine Altersmedizin?', a: 'Nein — und das wird häufig verwechselt. Die Klinik für Altersmedizin des Gesundheitsverbunds Landkreis Konstanz sitzt am Klinikum Konstanz, nicht am Hegau-Bodensee-Klinikum in Singen. Weil der Verbund den Fachbereich zentral führt und dabei teilweise die Singener Verbandsadresse angibt, ordnen Verzeichnisse die Geriatrie fälschlich Singen zu. Das Singener Haus führt 16 Fachabteilungen, Altersmedizin ist keine davon. Für eine geriatrische Behandlung geht es nach Konstanz.' },
  { q: 'Welches Einzugsgebiet wird in Singen am Hohentwiel bedient?', a: 'Singen und westlicher Landkreis Konstanz: Radolfzell, Stockach, Engen und alle Gemeinden im westlichen Landkreis Konstanz' },
  { q: 'Ist in einer Wohnung in Singen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Singen hat im Schnitt 88,6 m², 21,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 70,1 % der Wohnungen in Singen liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Singen am Hohentwiel' },
          ]}
          augenbraue="24-Stunden-Pflege in Singen am Hohentwiel"
          titel="24-Stunden-Pflege und Betreuung in Singen"
          einleitung={<>Mit dem Hohentwiel vor dem Fenster wird man ungern woanders alt: Singener bleiben in ihrem Haus, ob stadtnah oder in Rielasingen und Gottmadingen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da — im ganzen Hegau bis zum Bodensee. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Singen am Hohentwiel auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Singen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Singen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Singen am Hohentwiel 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Singen am Hohentwiel"
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
            <RechnerKasten src="ort-singen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-singen" titel="Polnische Betreuungskräfte in Singen">
            <Text>Wer in Singen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Singen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im westlichen Landkreis Konstanz">
            <Text>Unsere Betreuungskräfte ziehen in Singen und im westlichen Landkreis Konstanz ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Singen ausmacht">
            <Text>Eine Verwechslung vorweg, die Angehörige regelmäßig in die falsche Stadt schickt:{' '} <strong className="text-pm-ink font-semibold">Die Klinik für Altersmedizin des Gesundheitsverbunds sitzt in Konstanz, nicht in Singen.</strong> Weil der Verbund den Fachbereich zentral führt und dabei teilweise die Singener Verbandsadresse angibt, ordnen Verzeichnisse die Geriatrie fälschlich dem Hegau-Bodensee-Klinikum zu. Das Haus in Singen hat 16 Fachabteilungen — Altersmedizin ist keine davon. Wer nach einer geriatrischen Behandlung sucht, muss nach Konstanz.</Text>
            <Text>Beim Blick auf den Landkreis Konstanz fällt ein Muster auf, das für die häusliche Pflege zählt.{' '} <strong className="text-pm-ink font-semibold">Nur 13,1 Prozent der 16.193 Pflegebedürftigen werden von einem ambulanten Dienst versorgt — in Baden-Württemberg sind es 16,4 Prozent.</strong> Gleichzeitig liegt der Heimanteil mit 16,9 Prozent über dem Landeswert von 14,9. Und hier zeigen Anteil und Dichte ausnahmsweise in dieselbe Richtung: Der Kreis ist tatsächlich heimlastig und tatsächlich ambulant dünn versorgt, nicht nur rechnerisch. Dazu kommt, dass die Zahl der Beschäftigten in der Pflege im Kreis gesunken ist, während sie landesweit gewachsen ist.</Text>
            <Text>In Singen selbst stehen sieben stationäre Pflegeeinrichtungen bei rund 48.000 Einwohnern — passend zum heimlastigen Muster des Kreises. Für Familien, die zu Hause bleiben wollen, heißt die Kombination aus dünnem ambulantem Netz und schrumpfendem Personal vor allem eines: früh planen. Eine Betreuungskraft, die im Haushalt lebt, ist von Tourenplänen und Personalengpässen nicht betroffen — sie ist durchgehend da.</Text>
            <Text>Topografisch ist Singen unkompliziert, auch wenn der Hohentwiel etwas anderes vermuten lässt. Der Berg ragt 267 Meter über die Stadt, ist aber Naturschutzgebiet mit einer Festungsruine und unbewohnt — für den Pflegealltag ohne Bedeutung. Rund 85 Prozent der Singener leben in der flachen Kernstadt im Hegau-Becken. 21,7 Prozent der Einwohner sind über 65, 7,6 Prozent über 80. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig; der Pflegestützpunkt des Landkreises unterhält eine Nebenstelle in Singen.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-singen-am-hohentwiel" titel="Einzugsgebiet Singen am Hohentwiel">
            <Text>Singen und westlicher Landkreis Konstanz: Radolfzell, Stockach, Engen und alle Gemeinden im westlichen Landkreis Konstanz</Text>
            <NearbyCities current="singen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Singen'} land={'Baden-Württemberg'} altbau={53.0} miete={7.81} />


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

            ort={'Singen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260829-sabine', 'k-20260318-thomas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Singen am Hohentwiel">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
