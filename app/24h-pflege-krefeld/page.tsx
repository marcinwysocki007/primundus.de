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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Krefeld bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Krefeld 2026" },
  { id: 'polnische-betreuungskraefte-in-krefeld', title: "Polnische Betreuungskräfte in Krefeld" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Krefeld ausmacht" },
  { id: 'einzugsgebiet-krefeld', title: "Einzugsgebiet Krefeld" },
  { id: 'werkzeuge', title: "Was es in Krefeld kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Krefeld über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Krefeld" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Krefeld: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-krefeld' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Krefeld — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Krefeld. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-krefeld',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-krefeld#service',
    name: 'Primundus — 24h-Pflege Krefeld',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Krefeld. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-krefeld',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Krefeld' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Krefeld', item: 'https://primundus.de/24h-pflege-krefeld' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Krefeld?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Krefeld starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Krefeld rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Krefeld?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Krefeld ist bekannt: Die durchschnittliche Wohnung misst 85,2 Quadratmeter, 28,3 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 36,0 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Krefeld — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Krefeld im Schnitt 2,6 Wohnungen, in Nordrhein-Westfalen 2,3. 24,0 Prozent der Gebäude stehen frei, 50,1 Prozent sind Reihenhäuser. 61,5 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Krefeld ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Krefeld?',
        acceptedAnswer: { '@type': 'Answer', text: '25.957 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Warum ist die Pflegequote in Krefeld so hoch?',
        acceptedAnswer: { '@type': 'Answer', text: 'Am Alter liegt es nicht — das ist das Bemerkenswerte. Krefelds Altersstruktur entspricht fast exakt dem Landesdurchschnitt: 22,3 Prozent der Einwohner sind über 65 (NRW 22,0), 7,2 Prozent über 80 (NRW 6,9). Trotzdem ist mit 10,1 Prozent die zweithöchste Pflegequote Nordrhein-Westfalens erreicht, 23.169 Menschen. Auffällig ist vor allem, wie sie versorgt werden: 15.936 Menschen — 68,8 Prozent — werden ausschließlich von Angehörigen gepflegt, gegenüber 59,0 Prozent im Land. Ambulante Dienste kommen seltener ins Haus (14,6 gegen 17,3 Prozent), und der Anteil von Pflegegrad 1 ist mit 6,9 Prozent auffällig niedrig (Land 11,5) — es geht hier also überwiegend nicht um leichte Fälle.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Krefeld bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Krefeld und Umland: Willich, Tönisvorst, Viersen und alle Gemeinden im Kreis Viersen nördlich von Mönchengladbach' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Krefeld?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Krefeld starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Krefeld rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Krefeld?', a: 'Das hängt am Grundriss, und die Ausgangslage in Krefeld ist bekannt: Die durchschnittliche Wohnung misst 85,2 Quadratmeter, 28,3 Prozent liegen unter 60 Quadratmetern (Nordrhein-Westfalen: 22,4 Prozent), und 36,0 Prozent der Haushalte wohnen im Eigentum (Nordrhein-Westfalen: 40,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie wohnt man in Krefeld — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Krefeld im Schnitt 2,6 Wohnungen, in Nordrhein-Westfalen 2,3. 24,0 Prozent der Gebäude stehen frei, 50,1 Prozent sind Reihenhäuser. 61,5 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Krefeld ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Krefeld?', a: '25.957 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Warum ist die Pflegequote in Krefeld so hoch?', a: 'Am Alter liegt es nicht — das ist das Bemerkenswerte. Krefelds Altersstruktur entspricht fast exakt dem Landesdurchschnitt: 22,3 Prozent der Einwohner sind über 65 (NRW 22,0), 7,2 Prozent über 80 (NRW 6,9). Trotzdem ist mit 10,1 Prozent die zweithöchste Pflegequote Nordrhein-Westfalens erreicht, 23.169 Menschen. Auffällig ist vor allem, wie sie versorgt werden: 15.936 Menschen — 68,8 Prozent — werden ausschließlich von Angehörigen gepflegt, gegenüber 59,0 Prozent im Land. Ambulante Dienste kommen seltener ins Haus (14,6 gegen 17,3 Prozent), und der Anteil von Pflegegrad 1 ist mit 6,9 Prozent auffällig niedrig (Land 11,5) — es geht hier also überwiegend nicht um leichte Fälle.' },
  { q: 'Welches Einzugsgebiet wird in Krefeld bedient?', a: 'Krefeld und Umland: Willich, Tönisvorst, Viersen und alle Gemeinden im Kreis Viersen nördlich von Mönchengladbach' },
  { q: 'Ist in einer Wohnung in Krefeld Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Krefeld hat im Schnitt 85,2 m², 28,3 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 71,2 % der Gebäude in Krefeld sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Krefeld' },
          ]}
          augenbraue="24-Stunden-Pflege in Krefeld"
          titel="24-Stunden-Pflege und Betreuung in Krefeld"
          einleitung={<>Uerdingen am Rhein, Bockum, Hüls: Die Samt- und Seidenstadt hält ihre Menschen — und die halten an ihrem Zuhause fest. Eine Betreuungskraft von Primundus zieht mit ein, wenn es allein nicht mehr geht: Sie führt den Haushalt, begleitet den Tag und ist nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Krefeld auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Krefeld bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Krefeld bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Krefeld 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Krefeld"
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
            <RechnerKasten src="ort-krefeld" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-krefeld" titel="Polnische Betreuungskräfte in Krefeld">
            <Text>Wer in Krefeld nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Krefeld und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Krefeld ausmacht">
            <Text>In Krefeld pflegen Familien in einem Ausmaß, das die Statistik sonst kaum kennt.{' '} <strong className="text-pm-ink font-semibold">15.936 Menschen — 68,8 Prozent aller Pflegebedürftigen — beziehen ausschließlich Pflegegeld</strong>, werden also allein von Angehörigen versorgt. In Nordrhein-Westfalen sind es 59,0 Prozent; unter allen 53 Kreisen und kreisfreien Städten des Landes liegt Krefeld damit auf Rang sechs. Rechnerisch wird hier fast jeder fünfzehnte Einwohner zu Hause von der Familie gepflegt. Ambulante Dienste kommen dagegen unterdurchschnittlich zum Einsatz: 14,6 gegen 17,3 Prozent.</Text>
            <Text>Dahinter steht eine Pflegequote von 10,1 Prozent — der zweithöchste Wert in ganz Nordrhein-Westfalen, wo der Landesschnitt bei 7,6 Prozent liegt. Und das Bemerkenswerte daran:{' '} <strong className="text-pm-ink font-semibold">Am Alter liegt es nicht.</strong> Krefelds Altersstruktur entspricht fast exakt dem Landesdurchschnitt — 22,3 Prozent über 65 gegenüber 22,0 Prozent, 7,2 Prozent über 80 gegenüber 6,9. Die um ein Drittel höhere Pflegequote lässt sich demografisch also nicht erklären. Auffällig ist auch, dass Pflegegrad 1 hier mit 6,9 Prozent viel seltener vorkommt als im Land (11,5 Prozent) — in Krefeld werden nicht mehr leichte Fälle gezählt, sondern mehr schwere zu Hause aufgefangen.</Text>
            <Text>Ein naheliegender Fehlschluss sei ausgeräumt. Nur 9,7 Prozent der Krefelder Pflegebedürftigen leben im Heim, im Land 12,2 Prozent — daraus liest sich leicht ein Platzmangel heraus. Das Gegenteil trifft zu: Gemessen an der Zahl der über 65-Jährigen stehen 47 vollstationäre Plätze je 1.000 bereit, in Nordrhein-Westfalen 46. Der niedrige Anteil entsteht allein daraus, dass die Zahl der Pflegebedürftigen so groß ist. Wer sich für die Betreuung zu Hause entscheidet, tut das in Krefeld nicht mangels Alternative.</Text>
            <Text>Räumlich ist Krefeld unkompliziert: Das bewohnte Stadtgebiet bewegt sich zwischen etwa 31 und 40 Metern über dem Meer — rund zehn Höhenmeter über die gesamte Kernstadt. Die drei „Berge" der Stadt sind Wald- und Naherholungsflächen, der Rhein bildet nur die Ostgrenze. Ungleich verteilt ist dagegen das Alter: In Traar-Ost sind 31,4 Prozent der Einwohner über 65, am Stephanplatz 13,2 Prozent. Die äußeren Villen- und Dorflagen — Traar, Verberg, Stadtwald, Gellep-Stratum, Königshof — sind alt, die innenstadtnahen Viertel jung.</Text>
            <Text>Geriatrisch ist Krefeld gut ausgestattet: drei Kliniken mit eigener geriatrischer Fachabteilung, die größte am Alexianer-Krankenhaus Maria-Hilf mit 917 stationären Fällen. Bei Helios lohnt der Blick auf die Adresse — der Träger führt an zwei Standorten eine Geriatrie, die eigentliche Versorgung sitzt im Cäcilien-Hospital in Hüls (726 Fälle), rund zehn Kilometer vom Hauptstandort am Lutherplatz entfernt. Wer „Helios Geriatrie Krefeld" sucht, sollte den Standort mitlesen. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-krefeld" titel="Einzugsgebiet Krefeld">
            <Text>Krefeld und Umland: Willich, Tönisvorst, Viersen und alle Gemeinden im Kreis Viersen nördlich von Mönchengladbach</Text>
            <NearbyCities current="krefeld" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Krefeld'} land={'Nordrhein-Westfalen'} altbau={61.5} miete={6.66} />


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

            ort={'Krefeld'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250311-michaela'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Krefeld">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
