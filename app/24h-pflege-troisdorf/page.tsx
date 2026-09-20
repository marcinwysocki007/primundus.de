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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Troisdorf bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Troisdorf 2026" },
  { id: 'polnische-betreuungskraefte-in-troisdorf', title: "Polnische Betreuungskräfte in Troisdorf" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Troisdorf ausmacht" },
  { id: 'einzugsgebiet-troisdorf', title: "Einzugsgebiet Troisdorf" },
  { id: 'werkzeuge', title: "Was es in Troisdorf kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Troisdorf" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Troisdorf ab 2.150 € im Monat',
  description: 'Zu Hause bleiben statt ins Pflegeheim: In Troisdorf zieht eine Betreuungskraft ein, hilft im Alltag und ist bei Bedarf auch nachts da. Ab 2.150 € im Monat.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-troisdorf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Troisdorf — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Troisdorf. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-troisdorf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-troisdorf#service',
    name: 'Primundus — 24h-Pflege Troisdorf',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Troisdorf. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-troisdorf',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Troisdorf' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Troisdorf', item: 'https://primundus.de/24h-pflege-troisdorf' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Troisdorf?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Troisdorf starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Troisdorf rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Troisdorf?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Troisdorf ist bekannt: Die durchschnittliche Wohnung misst 92,7 Quadratmeter, 18,4 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 41,2 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Troisdorf?',
        acceptedAnswer: { '@type': 'Answer', text: '7.546 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,0 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Troisdorf — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Troisdorf im Schnitt 2,2 Wohnungen, in Nordrhein-Westfalen 2,3. 39,3 Prozent der Gebäude stehen frei, 34,3 Prozent sind Reihenhäuser. 40,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Troisdorf ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wo ist die Geriatrie in Troisdorf?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seit März 2024 im St. Johannes Krankenhaus in Sieglar, Wilhelm-Busch-Straße — vorher war sie im St. Josef Hospital. Beide Häuser gehören demselben Träger und stehen in derselben Stadt, weshalb ältere Flyer und Wegbeschreibungen Angehörige regelmäßig zum falschen führen. Die Abteilung hat 40 Betten und ist vom Bundesverband Geriatrie zertifiziert; im gesamten Rhein-Sieg-Kreis gibt es nur zwei Häuser mit geriatrischer Leistungsgruppe. Eine geriatrische Tagesklinik oder Reha in Troisdorf ist uns nicht bekannt.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Troisdorf bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Troisdorf und Rhein-Sieg-Kreis Norden: Sankt Augustin, Niederkassel, Lohmar und alle Gemeinden im nördlichen Rhein-Sieg-Kreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Troisdorf?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Troisdorf starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Troisdorf rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Troisdorf?', a: 'Das hängt am Grundriss, und die Ausgangslage in Troisdorf ist bekannt: Die durchschnittliche Wohnung misst 92,7 Quadratmeter, 18,4 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 41,2 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
  { q: 'Wie viele ältere Menschen leben in Troisdorf?', a: '7.546 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,0 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Troisdorf — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Troisdorf im Schnitt 2,2 Wohnungen, in Nordrhein-Westfalen 2,3. 39,3 Prozent der Gebäude stehen frei, 34,3 Prozent sind Reihenhäuser. 40,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Troisdorf ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wo ist die Geriatrie in Troisdorf?', a: 'Seit März 2024 im St. Johannes Krankenhaus in Sieglar, Wilhelm-Busch-Straße — vorher war sie im St. Josef Hospital. Beide Häuser gehören demselben Träger und stehen in derselben Stadt, weshalb ältere Flyer und Wegbeschreibungen Angehörige regelmäßig zum falschen führen. Die Abteilung hat 40 Betten und ist vom Bundesverband Geriatrie zertifiziert; im gesamten Rhein-Sieg-Kreis gibt es nur zwei Häuser mit geriatrischer Leistungsgruppe. Eine geriatrische Tagesklinik oder Reha in Troisdorf ist uns nicht bekannt.' },
  { q: 'Welches Einzugsgebiet wird in Troisdorf bedient?', a: 'Troisdorf und Rhein-Sieg-Kreis Norden: Sankt Augustin, Niederkassel, Lohmar und alle Gemeinden im nördlichen Rhein-Sieg-Kreis' },
  { q: 'Ist in einer Wohnung in Troisdorf Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Troisdorf hat im Schnitt 92,7 m², 18,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 77,1 % der Wohnungen in Troisdorf liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Troisdorf' },
          ]}
          augenbraue="24-Stunden-Pflege in Troisdorf"
          titel="24-Stunden-Pflege und Betreuung in Troisdorf"
          einleitung={<>Zwischen Köln und Bonn gelegen, ist Troisdorf für viele Familien der Ort, an dem die Eltern wohnen — in Spich, Sieglar oder Bergheim — während die Kinder im Rheinland pendeln. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Troisdorf auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Troisdorf bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Troisdorf bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Troisdorf 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Troisdorf"
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
            <RechnerKasten src="ort-troisdorf" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-troisdorf" titel="Polnische Betreuungskräfte in Troisdorf">
            <Text>Wer in Troisdorf nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Troisdorf und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Troisdorf ausmacht">
            <Text>Troisdorf führt die Rangliste der Heimplätze im Rhein-Sieg-Kreis an — und das ist eine Statistik, die in die Irre führt. Mit 624 Plätzen hat die Stadt die meisten aller 19 Kommunen, aber sie ist auch die größte.{' '} <strong className="text-pm-ink font-semibold">Je 1.000 Einwohner über 65 sind es 38 Plätze, im Kreisschnitt 41.</strong> Die Stadt selbst widerspricht der Rangliste ausdrücklich: Sie schätzt ihr Angebot an Dauer-, Kurzzeit- und Tagespflege als nicht ausreichend ein, weil sich die Einrichtungen auf den Stadtkern und wenige Ortsteile konzentrieren — Pflegebedürftige müssten deshalb ihren bisherigen Lebensmittelpunkt verlassen.</Text>
            <Text>Noch deutlicher wird die Stadt bei der ambulanten Versorgung: Die 13 Pflegedienste mit Sitz in Troisdorf seien{' '} <strong className="text-pm-ink font-semibold">nicht mehr in der Lage, die Nachfrage im Stadtgebiet zu decken.</strong> Das ist keine Prognose, sondern eine Feststellung aus der laufenden Pflegeplanung. Für Familien heißt das: Wer sich auf einen ambulanten Dienst verlassen möchte, sollte früh anfragen und einen Plan B haben.</Text>
            <Text>Der Rhein-Sieg-Kreis pflegt dabei ohnehin ungewöhnlich häuslich:{' '} <strong className="text-pm-ink font-semibold">66 Prozent aller Pflegebedürftigen beziehen ausschließlich Pflegegeld</strong>, werden also allein von Angehörigen versorgt — in Nordrhein-Westfalen sind es 59 Prozent, bundesweit 54. Ambulante Dienste kommen mit 14 Prozent seltener zum Einsatz als im Land (17 Prozent). Troisdorf liegt laut Kreis nahe an diesen Durchschnittswerten.</Text>
            <Text>Und der Druck wächst schneller als anderswo im Kreis: Die Zahl der über 80-Jährigen in Troisdorf steigt bis 2040 um fast 35 Prozent, im Kreisschnitt um 27. Auf 100 Menschen zwischen 65 und 79 kommen dann 48 Hochbetagte. Topografisch ist die Stadt dabei unproblematisch — der höchste Punkt liegt in der Wahner Heide und ist unbewohnt, die Wohngebiete liegen in der Rheinebene.</Text>
            <Text>Ein Hinweis, der Angehörigen eine vergebliche Fahrt erspart:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie ist im März 2024 innerhalb Troisdorfs umgezogen</strong> — vom St. Josef Hospital ins St. Johannes Krankenhaus in Sieglar, Wilhelm-Busch-Straße. Beide Häuser gehören demselben Träger und stehen in derselben Stadt; jeder Flyer und jede Wegbeschreibung von vor 2024 führt zum falschen. Die Abteilung hat 40 Betten und ist vom Bundesverband Geriatrie zertifiziert. Im gesamten Rhein-Sieg-Kreis gibt es nur zwei Häuser mit geriatrischer Leistungsgruppe. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-troisdorf" titel="Einzugsgebiet Troisdorf">
            <Text>Troisdorf und Rhein-Sieg-Kreis Norden: Sankt Augustin, Niederkassel, Lohmar und alle Gemeinden im nördlichen Rhein-Sieg-Kreis</Text>
            <NearbyCities current="troisdorf" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Troisdorf'} land={'Nordrhein-Westfalen'} altbau={40.3} miete={7.01} />


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

            ort={'Troisdorf'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Troisdorf">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
