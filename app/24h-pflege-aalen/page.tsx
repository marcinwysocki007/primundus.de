import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, MehrDazu, Punkte,
  RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const SECTIONS = [
  { id: 'was-ist-24-stunden', title: "Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?" },
  { id: 'fuer-wen-ist-24h', title: "Für wen ist 24h-Pflege die richtige Wahl?" },
  { id: 'was-macht-eine-betreuungskraft', title: "Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Aalen 2026" },
  { id: 'polnische-betreuungskraefte-in-aalen', title: "Polnische Betreuungskräfte in Aalen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Ostalbkreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Aalen ausmacht" },
  { id: 'einzugsgebiet-aalen', title: "Einzugsgebiet Aalen" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Aalen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Aalen | Primundus',
  description: '24-Stunden-Pflege in Aalen: Eigenanteil ab ca. 1200 €/Monat (PG 3). Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-aalen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Aalen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Aalen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-aalen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-aalen#service',
    name: 'Primundus — 24h-Pflege Aalen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Aalen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-aalen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Aalen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Aalen', item: 'https://primundus.de/24h-pflege-aalen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Aalen?',
        acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1200–2300 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Aalen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Aalen rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Aalen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Aalen ist bekannt: Die durchschnittliche Wohnung misst 97,6 Quadratmeter, 17,9 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 55,3 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Aalen?',
        acceptedAnswer: { '@type': 'Answer', text: '7.427 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,1 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Aalen — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Aalen im Schnitt 2,0 Wohnungen, in Baden-Württemberg 2,1. 72,7 Prozent der Gebäude stehen frei, 10,8 Prozent sind Reihenhäuser. 44,5 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Aalen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist mit Kurzzeitpflege in Aalen, wenn ich selbst ausfalle?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das ist in Aalen der wundeste Punkt. Die Zahl der Kurzzeitpflegeplätze in der Stadt ist von 40 im Jahr 2022 auf 22 im Jahr 2024 gefallen, also fast halbiert. Genau diese Plätze braucht man aber, wenn die pflegende Tochter selbst operiert wird oder zwei Wochen wegmuss. Bei einer Betreuung im Haushalt stellt sich die Frage anders: Fällt Ihre Betreuungskraft aus, stellen wir Ersatz, ohne dass für den Wechsel selbst etwas berechnet wird — es fallen lediglich die An- und Abreisekosten der neuen Kraft an. Ein Heimplatz muss dafür nicht gesucht werden.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Aalen bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Aalen und Ostalbkreis: Schwäbisch Gmünd, Ellwangen, Bopfingen, Heidenheim und alle Gemeinden im Ostalbkreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Aalen?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1200–2300 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Aalen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Aalen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Aalen?', a: 'Das hängt am Grundriss, und die Ausgangslage in Aalen ist bekannt: Die durchschnittliche Wohnung misst 97,6 Quadratmeter, 17,9 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 55,3 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
  { q: 'Wie viele ältere Menschen leben in Aalen?', a: '7.427 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,1 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Aalen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Aalen im Schnitt 2,0 Wohnungen, in Baden-Württemberg 2,1. 72,7 Prozent der Gebäude stehen frei, 10,8 Prozent sind Reihenhäuser. 44,5 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Aalen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Was ist mit Kurzzeitpflege in Aalen, wenn ich selbst ausfalle?', a: 'Das ist in Aalen der wundeste Punkt. Die Zahl der Kurzzeitpflegeplätze in der Stadt ist von 40 im Jahr 2022 auf 22 im Jahr 2024 gefallen, also fast halbiert. Genau diese Plätze braucht man aber, wenn die pflegende Tochter selbst operiert wird oder zwei Wochen wegmuss. Bei einer Betreuung im Haushalt stellt sich die Frage anders: Fällt Ihre Betreuungskraft aus, stellen wir Ersatz, ohne dass für den Wechsel selbst etwas berechnet wird — es fallen lediglich die An- und Abreisekosten der neuen Kraft an. Ein Heimplatz muss dafür nicht gesucht werden.' },
  { q: 'Welches Einzugsgebiet wird in Aalen bedient?', a: 'Aalen und Ostalbkreis: Schwäbisch Gmünd, Ellwangen, Bopfingen, Heidenheim und alle Gemeinden im Ostalbkreis' },
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
            { label: 'Aalen' },
          ]}
          augenbraue="24-Stunden-Pflege in Aalen"
          titel="24-Stunden-Pflege und Betreuung in Aalen"
          einleitung={<>Ob in Wasseralfingen, Unterkochen oder Fachsenfeld: Auf der Ostalb hält man an Haus und Hof fest — oft über Generationen. Eine Betreuungskraft von Primundus sorgt dafür, dass das Alter daran nichts ändert: Sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: 2.200–3.500 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ca. 1200–2300 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Aalen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Aalen heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.</Text>
            <Punkte
              punkte={[
                { title: 'Eigenes Zuhause', desc: 'Vertraute Umgebung bleibt — kein Heimumzug' },
                { title: '1:1-Betreuung', desc: 'Eine Kraft, ein Mensch — keine wechselnden Gesichter' },
                { title: 'Nachts im Haus', desc: 'Da, wenn nachts Hilfe gebraucht wird' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="fuer-wen-ist-24h" titel="Für wen ist 24h-Pflege die richtige Wahl?">
            <Text>Viele Familien stehen irgendwann vor demselben Moment: Man merkt, dass es so nicht mehr geht — aber ein Pflegeheim fühlt sich falsch an. Genau für diese Situation ist die 24h-Betreuung zuhause die Antwort.</Text>
            <Punkte
              punkte={[
                { title: 'Selbstständigkeit lässt nach', desc: 'Alltägliches gelingt nicht mehr zuverlässig alleine — Anziehen, Kochen, Waschen, Orientierung' },
                { title: 'Familie kann nicht immer da sein', desc: 'Beruf, eigene Kinder, Entfernung — Angehörige wollen helfen, aber nicht rund um die Uhr' },
                { title: 'Pflegeheim ist keine Option', desc: 'Das eigene Zuhause, die gewohnten Möbel, der Garten — das soll bleiben' },
                { title: 'Nächtliche Unsicherheit', desc: 'Stürze, Toilettengänge, Orientierungslosigkeit — nachts ist niemand da' },
                { title: 'Demenz oder Orientierungsprobleme', desc: 'Vertraute Ansprechpartnerin nötig — keine wechselnden Gesichter' },
                { title: 'Nach Krankenhausaufenthalt', desc: 'Nach OP oder Schlaganfall: Wochen intensiver Unterstützung überbrücken' },
              ]}
            />
            <Kasten augenbraue="Wann 24h-Pflege alleine nicht ausreicht">
              <Text>Bei intensivem medizinischem Versorgungsbedarf arbeitet die Betreuungskraft in Kombination mit einem ambulanten Pflegedienst. Primundus koordiniert diese Zusammenarbeit auf Wunsch — so bleibt das Zuhause auch bei höherem Bedarf die Option.</Text>
            </Kasten>
            <Text>Nicht sicher ob 24h-Pflege die richtige Lösung ist? Primundus berät kostenlos und ehrlich — auch wenn das Ergebnis eine andere Empfehlung ist.</Text>
          </Abschnitt>

          <Abschnitt id="was-macht-eine-betreuungskraft" titel="Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?">
            <Gegenueber
              seiten={[
                { titel: 'Betreuungskraft übernimmt', ton: 'gruen', punkte: ['Körperpflege — Waschen, Ankleiden, Zahnpflege', 'Kochen — frisch, nach Vorlieben und Diät', 'Haushalt — Putzen, Einkaufen, Wäsche', 'Mobilisierung, Spaziergänge, Begleitung', 'Gesellschaft und Begleitung im Alltag', 'Medikamentenerinnerung', 'Arzt- und Therapietermine begleiten', 'Nachts im Haus — da, wenn Hilfe gebraucht wird'] },
                { titel: 'Ambulanter Pflegedienst ergänzt', ton: 'taupe', punkte: ['Injektionen (Insulin, Blutverdünner)', 'Verbandswechsel, Wundversorgung', 'Katheterversorgung', 'Ernährung über Magensonde', 'Beatmungspflege', 'Komplexe medizinische Versorgung'] },
              ]}
            />
            <Text><strong className="font-bold text-pm-ink">Beide gemeinsam machen häusliche Pflege auch bei hohem Bedarf möglich.</strong> Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst.</Text>
          </Abschnitt>

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Aalen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Aalen"
              zeilen={[
                ['Kosten Primundus', '2.200–3.500 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerabzug (ca.)', '− ca. 200 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ca. 1200–2300 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <Kasten titel="Ihren eigenen Fall durchrechnen">
              <Text>Welcher Pflegegrad realistisch ist und was am Ende tatsächlich übrig bleibt, hängt von der konkreten Situation ab. Zwei Rechner helfen weiter — beide kostenlos und ohne Anmeldung:</Text>
              <MehrDazu
                label="Rechner:"
                links={[
                  { href: '/pflegegrad-rechner', text: 'Pflegegrad berechnen — dieselben sechs Module wie bei der Begutachtung' },
                  { href: 'https://kostenrechner.primundus.de/?start=1&amp;src=ort-aalen', text: 'Preis und Betreuungskräfte für Aalen ansehen — in 2 Minuten' },
                ]}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-aalen" titel="Polnische Betreuungskräfte in Aalen">
            <Text>Wer in Aalen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Aalen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbetrag und Entlastungsbudget in Baden-Württemberg meist rund 1200 bis 2300 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Ostalbkreis">
            <Text>Unsere Betreuungskräfte ziehen in Aalen und im Ostalbkreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Aalen ausmacht">
            <Text>Der Ostalbkreis ist ein gutes Beispiel dafür, dass ein hoher Heim-Anteil nicht viele Heimplätze bedeutet.{' '} <strong className="text-pm-ink font-semibold">16,6 Prozent der Pflegebedürftigen leben hier im Heim, in Baden-Württemberg sind es 14,9 Prozent — bei den Plätzen je 1.000 Einwohner über 65 liegt der Kreis mit 43,8 aber nur im Landesschnitt (42,9).</strong>{' '} Der hohe Anteil kommt also nicht von einem großzügigen Angebot. Dazu passt die auffällig niedrige ambulante Quote: 13,1 Prozent gegen 16,4 Prozent im Land.</Text>
            <Text>Für die Stadt Aalen rechnet der Kreis in seiner Pflegebedarfsplanung selbst vor, wohin das führt.{' '} <strong className="text-pm-ink font-semibold">Bis 2035 sinkt der Platzbestand im Ostalbkreis von 2.938 auf 2.841 — vor allem, weil Doppelzimmer wegfallen müssen — während der Bedarf auf 3.340 steigt. 499 Plätze Lücke, in 31 von 42 Kommunen.</strong>{' '} Für Aalen selbst sind es 19 Plätze, für den Planungsraum Aalen 90. Die Zahl der Pflegebedürftigen im Kreis hat sich zwischen 2001 und 2021 mehr als verdoppelt und ist seither noch einmal um 12,8 Prozent gestiegen — der Wert von 2023 liegt bereits über dem, was für 2030 vorhergesagt war.</Text>
            <Text>Am härtesten trifft Angehörige eine andere Entwicklung:{' '} <strong className="text-pm-ink font-semibold">Die Kurzzeitpflegeplätze in Aalen sind von 40 im Jahr 2022 auf 22 im Jahr 2024 gefallen — fast halbiert.</strong> Kurzzeitpflege ist genau das, was häusliche Pflege überhaupt tragfähig macht: der Platz für die zwei Wochen, in denen die pflegende Tochter selbst im Krankenhaus liegt. Auch bei der Tagespflege liegt Aalen mit 2,9 Plätzen je 1.000 Ältere unter dem Kreiswert von 5,5, obwohl die Stadt das Zentrum ist.</Text>
            <Text>Aalen erstreckt sich über 18 mal 25 Kilometer, und die Teilorte liegen auf sehr verschiedenen Höhen: Die Rathäuser von Ebnat und Waldhausen stehen auf 613 und 611 Metern, rund 180 Meter über dem Marktplatz der Kernstadt auf 430 Metern — sie sitzen oben auf dem Albuch, während Aalen selbst im Kochertal liegt. Auf die Alterung wirkt sich das interessanterweise nicht aus: Waldhausen ist mit 20,8 Prozent über 65 einer der jüngsten Stadtbezirke. Überhaupt ist Aalen kleinräumig sehr ausgeglichen — zwischen Dewangen (24,5 Prozent) und Unterkochen (20,8) liegen nur 3,7 Prozentpunkte.</Text>
            <Text>Bei der Altersmedizin steht Aalen ungewöhnlich gut da:{' '} <strong className="text-pm-ink font-semibold">Das Ostalb-Klinikum deckt Akutgeriatrie (12 Betten), stationäre geriatrische Rehabilitation (45 Betten) und eine geriatrische Tagesklinik am selben Standort ab.</strong> Diese vollständige Kette an einem Ort ist selten — in vielen Städten liegen Akutstation und Reha zehn oder zwanzig Kilometer auseinander. Ein Hinweis dennoch: Die Reha wird von einer rechtlich eigenständigen Gesellschaft betrieben, weshalb manche Verzeichnisse sie als separates Haus führen.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-aalen" titel="Einzugsgebiet Aalen">
            <Text>Aalen und Ostalbkreis: Schwäbisch Gmünd, Ellwangen, Bopfingen, Heidenheim und alle Gemeinden im Ostalbkreis</Text>
            <NearbyCities current="aalen" />
          </Abschnitt>

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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Aalen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
