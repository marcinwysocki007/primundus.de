import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { CitiesOfRegion } from '@/components/CityIndex'
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
  { id: 'was-ist-24h-pflege', title: "Was ist 24h-Pflege — und was unterscheidet sie von allem anderen?" },
  { id: 'fuer-wen-ist-24h', title: "Für wen ist 24h-Pflege die richtige Wahl?" },
  { id: 'was-macht-eine-betreuungskraft', title: "Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Saarland 2026" },
  { id: 'polnische-betreuungskraefte-im-saarland', title: "Polnische Betreuungskräfte im Saarland" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause im Saarland ausmacht" },
  { id: 'einzugsgebiet-saarland', title: "Einzugsgebiet Saarland" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Saarland" },
]

export const metadata: Metadata = {
  title: '24h-Pflege Saarland — Betreuungskraft | Primundus',
  description: '24h-Pflege in Saarland: Geprüfte Betreuungskraft zuhause. Rechtssicher, täglich kündbar, startklar. Ab ca. 1000 €/Monat Eigenanteil (PG 3).',
  alternates: { canonical: 'https://primundus.de/24h-pflege-saarland' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Saarland | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Saarland. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-saarland',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-saarland#service',
    name: 'Primundus — 24h-Pflege Saarland',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Saarland. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-saarland',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'State', name: 'Saarland' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Saarland', item: 'https://primundus.de/24h-pflege-saarland' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Bekomme ich im Saarland überhaupt einen ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das ist im Saarland schwerer als in jedem anderen Bundesland. Nur 14,8 Prozent der Pflegebedürftigen werden ambulant versorgt — der niedrigste Wert aller sechzehn Länder —, und auf einen Dienst kommen rund 90 Pflegebedürftige gegenüber 71 im Bund, ebenfalls der Höchstwert. Zwischen 2021 und 2023 ist die Zahl der ambulant versorgten Menschen sogar gesunken, bei gleichzeitig 9.800 zusätzlichen Pflegebedürftigen. Am ausgeprägtesten ist das im Saarpfalz-Kreis, wo nur 10,1 Prozent einen Dienst in Anspruch nehmen. Eine Betreuungskraft im Haushalt ist deshalb im Saarland oft nicht die Ergänzung zum Pflegedienst, sondern die realistischere Alternative.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Saarland?',
        acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1000–2000 €/Monat — oft günstiger als ein Heimplatz im Saarland (Eigenanteil rund 3.690 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Saarland starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Saarland — auch in ländlichen Regionen.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Saarland rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Bekomme ich im Saarland überhaupt einen ambulanten Pflegedienst?', a: 'Das ist im Saarland schwerer als in jedem anderen Bundesland. Nur 14,8 Prozent der Pflegebedürftigen werden ambulant versorgt — der niedrigste Wert aller sechzehn Länder —, und auf einen Dienst kommen rund 90 Pflegebedürftige gegenüber 71 im Bund, ebenfalls der Höchstwert. Zwischen 2021 und 2023 ist die Zahl der ambulant versorgten Menschen sogar gesunken, bei gleichzeitig 9.800 zusätzlichen Pflegebedürftigen. Am ausgeprägtesten ist das im Saarpfalz-Kreis, wo nur 10,1 Prozent einen Dienst in Anspruch nehmen. Eine Betreuungskraft im Haushalt ist deshalb im Saarland oft nicht die Ergänzung zum Pflegedienst, sondern die realistischere Alternative.' },
  { q: 'Was kostet eine 24h-Pflegekraft in Saarland?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1000–2000 €/Monat — oft günstiger als ein Heimplatz im Saarland (Eigenanteil rund 3.690 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Saarland starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Saarland — auch in ländlichen Regionen.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Saarland rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
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
            { label: 'Saarland' },
          ]}
          augenbraue="24-Stunden-Pflege in Saarland"
          titel="24h-Pflege Saarland — Betreuungskraft zuhause"
          einleitung={<>Im Saarland wohnt man nah beieinander — und trotzdem können Kinder nicht rund um die Uhr bei den Eltern in Saarbrücken, Völklingen oder St. Wendel sein. Eine Betreuungskraft von Primundus schließt genau diese Lücke: Sie zieht mit ein und ist bei Bedarf auch nachts da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: 2.200–3.500 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ca. 1000–2000 €/Monat',
            'Pflegeheim Saarland: Eigenanteil Ø 2200–2700 €/Monat',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Saarland auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24h-pflege" titel="Was ist 24h-Pflege — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24h-Pflege lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Das eigene Zuhause bleibt erhalten. Der gewohnte Alltag auch.</Text>
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Saarland 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Saarland"
              zeilen={[
                ['Kosten Primundus', '2.200–3.500 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerabzug (ca.)', '− ca. 200 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ca. 1000–2000 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Pflegeheim Saarland: Eigenanteil Ø 2200–2700 €/Monat — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
                  { href: 'https://kostenrechner.primundus.de/?start=1&amp;src=land-saarland', text: 'Preis und Betreuungskräfte im Saarland ansehen — in 2 Minuten' },
                ]}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-im-saarland" titel="Polnische Betreuungskräfte im Saarland">
            <Text>Wer im Saarland nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind im gesamten Saarland im Einsatz, in der Großstadt wie im kleinsten Dorf.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbetrag und Entlastungsbudget meist rund 1000 bis 2000 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der im Saarland im ersten Jahr im Schnitt rund 3.690 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause im Saarland ausmacht">
            <Text>Das Saarland ist ein Lehrstück dafür, dass ein gutes Heimangebot Familien nicht entlastet.{' '} <strong className="text-pm-ink font-semibold">Gemessen an der älteren Bevölkerung gibt es hier überdurchschnittlich viele Heimplätze — 171 je 1.000 Einwohner über 80, Platz zwei von sechzehn Ländern. Und trotzdem pflegen 57,9 Prozent der Familien ganz allein</strong>, ohne jeden Pflegedienst, der dritthöchste Wert Deutschlands. Der Grund liegt im Nenner: Die Pflegequote ist so hoch, dass selbst ein reichliches Angebot nur einen normalen Anteil deckt.</Text>
            <Text>Der eigentliche Engpass liegt woanders, und er ist eindeutig.{' '} <strong className="text-pm-ink font-semibold">Das Saarland hat den schwächsten ambulanten Sektor Deutschlands: 14,8 Prozent ambulanter Anteil — letzter Platz. Die wenigsten Dienste je Ältere — letzter Platz. Und mit rund 90 Pflegebedürftigen je Dienst den höchsten Andrang aller Länder</strong> (Bund: 71). Zwischen 2021 und 2023 ist die Zahl der ambulant versorgten Menschen sogar gesunken, von 12.568 auf 11.921 — bei gleichzeitig 9.800 zusätzlichen Pflegebedürftigen. Wer hier zu Hause professionelle Hilfe sucht, konkurriert mit mehr Menschen um weniger Dienste als irgendwo sonst.</Text>
            <Text>Dazu passt eine zweite Lücke, die genau die Falschen trifft: Nur 8,4 Prozent aller Pflegeplätze im Saarland sind Tages- oder Nachtpflegeplätze, bundesweit sind es 10,7, in Brandenburg 17,1. Ausgerechnet das Entlastungsangebot für pflegende Angehörige ist hier am dünnsten — in dem Land, in dem der Anteil pflegender Angehöriger am höchsten ist.</Text>
            <Text>Innerhalb des Landes ist die Pflegequote bemerkenswert gleichmäßig — zwischen 76 und 87 je 1.000 Einwohner, für ein Flächenland ungewöhnlich homogen. Die Versorgung ist es nicht.{' '} <strong className="text-pm-ink font-semibold">Im Saarpfalz-Kreis pflegen 63,5 Prozent der Familien allein, und nur 10,1 Prozent nehmen einen ambulanten Dienst in Anspruch</strong> — beides Extremwerte des Landes. In Saarlouis stehen 42 Heimplätze je 1.000 Ältere zur Verfügung, in Merzig-Wadern 67.</Text>
            <Text>Das Saarland ist außerdem das älteste westdeutsche Land: 24,9 Prozent der Einwohner sind über 65, im Bund 22,4. Eine Landespflegeplanung gab es dazu lange nicht —{' '} <strong className="text-pm-ink font-semibold">der Landespflegeplan wurde zuletzt für die Jahre 2013 bis 2017 fortgeschrieben und dann eingestellt</strong>, mit der Begründung, er habe faktisch keine steuernde Wirkung entfaltet. Erst 2026 legte das Land wieder einen Pflegeinfrastrukturbericht vor. Dessen Befund: Drei von vier Einrichtungen melden Personalmangel, rund 1.300 Stellen sind unbesetzt, und bis 2030 werden etwa 4.000 zusätzliche Pflegekräfte gebraucht.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Pflegezahlen: Statistisches Amt des Saarlandes, „Pflegestatistik im Saarland 2023" (Stichtag 15. Dezember 2023), und Statistisches Bundesamt, Länderergebnisse 2023. Ländervergleiche und Platzquoten eigene Berechnung auf dieser Grundlage. Personalzahlen: saarländischer Pflegeinfrastrukturbericht, Juni 2026.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-saarland" titel="Einzugsgebiet Saarland">
            <Text>Saarbrücken, Neunkirchen, Homburg, Völklingen, Saarlouis, Merzig, St. Ingbert und alle weiteren Städte und Gemeinden im Saarland</Text>
            <CitiesOfRegion region="saarland" />
          </Abschnitt>

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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Saarland">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
