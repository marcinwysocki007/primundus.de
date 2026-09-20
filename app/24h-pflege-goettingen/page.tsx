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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Göttingen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Göttingen 2026" },
  { id: 'polnische-betreuungskraefte-in-goettingen', title: "Polnische Betreuungskräfte in Göttingen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Göttingen" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Göttingen ausmacht" },
  { id: 'einzugsgebiet-goettingen', title: "Einzugsgebiet Göttingen" },
  { id: 'werkzeuge', title: "Was es in Göttingen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Göttingen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Göttingen: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-goettingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Göttingen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Göttingen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-goettingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-goettingen#service',
    name: 'Primundus — 24h-Pflege Göttingen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Göttingen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-goettingen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Göttingen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Göttingen', item: 'https://primundus.de/24h-pflege-goettingen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Göttingen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Niedersachsen (Eigenanteil rund 3.010 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Göttingen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Göttingen rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Göttingen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Göttingen ist bekannt: Die durchschnittliche Wohnung misst 76,6 Quadratmeter, 41,7 Prozent liegen unter 60 Quadratmetern (Niedersachsen: 17,1 Prozent), und 24,1 Prozent der Haushalte wohnen im Eigentum (Niedersachsen: 51,1 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Göttingen?',
        acceptedAnswer: { '@type': 'Answer', text: '12.795 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,3 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 18,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Göttingen — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Göttingen im Schnitt 3,8 Wohnungen, in Niedersachsen 1,7. 45,2 Prozent der Gebäude stehen frei, 36,9 Prozent sind Reihenhäuser. 54,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Göttingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Ab welchem Alter wird Pflege in Göttingen typischerweise gebraucht?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die Zahlen sind eindeutig: Von den Göttingern zwischen 70 und 80 sind 11,7 Prozent pflegebedürftig, zwischen 80 und 90 bereits 33,2 Prozent — und von den über 90-Jährigen 80,9 Prozent. Der Sprung liegt also im achten Lebensjahrzehnt. Auffällig ist außerdem, wohin sich die Versorgung verlagert hat: Zwischen 2017 und 2021 stieg die Zahl der allein von Angehörigen versorgten Menschen von 2.091 auf 2.976, während die Zahl der Heimbewohner absolut sank. Familien tragen in Göttingen also deutlich mehr als noch vor wenigen Jahren.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Göttingen bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Göttingen und Landkreis Göttingen: Hann. Münden, Duderstadt, Herzberg, Northeim und alle Gemeinden im Landkreis Göttingen' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Göttingen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Niedersachsen (Eigenanteil rund 3.010 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Göttingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Göttingen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Göttingen?', a: 'Das hängt am Grundriss, und die Ausgangslage in Göttingen ist bekannt: Die durchschnittliche Wohnung misst 76,6 Quadratmeter, 41,7 Prozent liegen unter 60 Quadratmetern (Niedersachsen: 17,1 Prozent), und 24,1 Prozent der Haushalte wohnen im Eigentum (Niedersachsen: 51,1 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
  { q: 'Wie viele ältere Menschen leben in Göttingen?', a: '12.795 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,3 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 18,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Göttingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Göttingen im Schnitt 3,8 Wohnungen, in Niedersachsen 1,7. 45,2 Prozent der Gebäude stehen frei, 36,9 Prozent sind Reihenhäuser. 54,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Göttingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Ab welchem Alter wird Pflege in Göttingen typischerweise gebraucht?', a: 'Die Zahlen sind eindeutig: Von den Göttingern zwischen 70 und 80 sind 11,7 Prozent pflegebedürftig, zwischen 80 und 90 bereits 33,2 Prozent — und von den über 90-Jährigen 80,9 Prozent. Der Sprung liegt also im achten Lebensjahrzehnt. Auffällig ist außerdem, wohin sich die Versorgung verlagert hat: Zwischen 2017 und 2021 stieg die Zahl der allein von Angehörigen versorgten Menschen von 2.091 auf 2.976, während die Zahl der Heimbewohner absolut sank. Familien tragen in Göttingen also deutlich mehr als noch vor wenigen Jahren.' },
  { q: 'Welches Einzugsgebiet wird in Göttingen bedient?', a: 'Göttingen und Landkreis Göttingen: Hann. Münden, Duderstadt, Herzberg, Northeim und alle Gemeinden im Landkreis Göttingen' },
  { q: 'Ist in einer Wohnung in Göttingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Göttingen hat im Schnitt 76,6 m², 41,7 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 62,0 % der Gebäude in Göttingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.087 € Unterschied im Monat, 25.044 € im Jahr.' },
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
            { label: 'Göttingen' },
          ]}
          augenbraue="24-Stunden-Pflege in Göttingen"
          titel="24-Stunden-Pflege und Betreuung in Göttingen"
          einleitung={<>Göttingen ist eine Stadt, aus der die Kinder zum Studium kommen — und die eigenen Kinder oft zum Arbeiten wegziehen. Zurück bleiben Eltern in Weende, Geismar oder Grone, die ihr Zuhause lieben. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Niedersachsen: Eigenanteil rund 3.010 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Göttingen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Göttingen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Göttingen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Göttingen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Göttingen"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Niedersachsen: Eigenanteil rund 3.010 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-goettingen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-goettingen" titel="Polnische Betreuungskräfte in Göttingen">
            <Text>Wer in Göttingen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Göttingen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.010 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Göttingen">
            <Text>Unsere Betreuungskräfte ziehen in Göttingen und im Landkreis Göttingen ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Göttingen ausmacht">
            <Text>In Göttingen hat sich in wenigen Jahren verschoben, wer die Pflege trägt — und zwar nicht so, wie man es erwarten würde. Der Anteil der Pflegebedürftigen im Heim fiel zwischen 2017 und 2021 von 30,0 auf 22,9 Prozent. Das klingt nach mehr ambulanter Versorgung, ist es aber nicht: Die Zahl der ambulant Betreuten blieb nahezu konstant.{' '} <strong className="text-pm-ink font-semibold">Der gesamte Zuwachs ging zu den Angehörigen — von 2.091 auf 2.976 Menschen, deren Anteil von 41,8 auf 50,9 Prozent sprang.</strong> Gleichzeitig sank die Zahl der Heimbewohner absolut, und 53 Heimplätze fielen weg.</Text>
            <Text>Anders gesagt: In Göttingen wurden binnen vier Jahren 885 Menschen zusätzlich zu Hause von ihren Familien versorgt, ohne dass professionelle Hilfe im gleichen Maß mitwuchs. Und das bei ordentlichem Platzangebot — rechnerisch stehen hier deutlich mehr Heimplätze je hochaltrigem Einwohner bereit als etwa in Aachen. Die Last verlagert sich also nicht aus Mangel, sondern weil die Zahl der Pflegebedürftigen schneller wächst als alles andere.</Text>
            <Text>Wie stark der Bedarf mit dem Alter steigt, zeigt eine Zahl, die man sich merken sollte:{' '} <strong className="text-pm-ink font-semibold">Von den Göttingern zwischen 80 und 90 sind 33,2 Prozent pflegebedürftig, von den über 90-Jährigen 80,9 Prozent.</strong> Bei den 70- bis 80-Jährigen sind es 11,7 Prozent. Wer heute mit Ende siebzig noch gut zurechtkommt, sollte trotzdem wissen, wie schnell sich das ändern kann — und lieber planen, bevor es eilig wird.</Text>
            <Text>Räumlich ist Göttingen für die meisten unproblematisch: Die Kernstadt liegt im Leinetal weitgehend eben. Drei bewohnte Ortsteile liegen allerdings deutlich höher — Nikolausberg und Roringen auf 280 bis 350 Metern, also bis zu 200 Meter über der Innenstadt, und Herberhausen mit einem Ortskern in ausgesprochener Hanglage. Für einen ambulanten Dienst bedeutet das lange Wege für kurze Einsätze; für jemanden, der im Haus wohnt, gar nichts.</Text>
            <Text>Geriatrisch ist Göttingen stark: Das Geriatrische Zentrum am Evangelischen Krankenhaus Weende führt eine Akutklinik mit Frührehabilitation und eine geriatrische Reha — zusammen 96 Betten, eines der größten Zentren Niedersachsens. Wichtig ist die Adresse:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie sitzt ausschließlich in Weende, An der Lutter</strong>, nicht im ebenfalls zum Haus gehörenden Krankenhaus Neu-Mariahilf an der Humboldtallee. Zwischen beiden liegen rund vier Kilometer. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-goettingen" titel="Einzugsgebiet Göttingen">
            <Text>Göttingen und Landkreis Göttingen: Hann. Münden, Duderstadt, Herzberg, Northeim und alle Gemeinden im Landkreis Göttingen</Text>
            <NearbyCities current="goettingen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Göttingen'} land={'Niedersachsen'} altbau={54.0} miete={8.38} />


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

            ort={'Göttingen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260706-stefan', 'k-20260403-heike'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Göttingen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
