import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
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
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Gütersloh 2026" },
  { id: 'polnische-betreuungskraefte-in-guetersloh', title: "Polnische Betreuungskräfte in Gütersloh" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Kreis Gütersloh" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Gütersloh ausmacht" },
  { id: 'einzugsgebiet-guetersloh', title: "Einzugsgebiet Gütersloh" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Gütersloh" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Gütersloh | Primundus',
  description: '24-Stunden-Pflege in Gütersloh: Eigenanteil ab ca. 1300 €/Monat (PG 3). Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-guetersloh' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Gütersloh — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Gütersloh. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-guetersloh',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-guetersloh#service',
    name: 'Primundus — 24h-Pflege Gütersloh',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Gütersloh. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-guetersloh',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Gütersloh' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Gütersloh', item: 'https://primundus.de/24h-pflege-guetersloh' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Gütersloh?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Gütersloh starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Gütersloh rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Gütersloh gilt als junge Stadt — ist Pflege hier überhaupt ein Thema?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, und zwar zunehmend. Der Anteil der über 65-Jährigen liegt zwar leicht unter dem nordrhein-westfälischen Schnitt, aber das liegt am Zuzug jüngerer Menschen, nicht an wenigen Älteren. In absoluten Zahlen wächst die Gruppe der über 65-Jährigen bis 2050 um rund 27 Prozent, im Land nur um 12. Und die Gruppe der über 80-Jährigen bleibt bis 2030 fast konstant — das sind die geburtenschwachen Kriegsjahrgänge — und wächst danach bis 2040 um mehr als ein Drittel.' },
      },
      {
        '@type': 'Question',
        name: 'Im Kreis Gütersloh gibt es viele Pflege-Wohngemeinschaften. Was ist der Unterschied zur Betreuung zu Hause?',
        acceptedAnswer: { '@type': 'Answer', text: 'In einer Pflege-Wohngemeinschaft ziehen mehrere Menschen zusammen, ein ambulanter Dienst betreut rund um die Uhr. Der Kreis Gütersloh hat davon rund 84 — eine bundesweite Besonderheit, und ein Grund, warum hier nur 10,7 Prozent der Pflegebedürftigen im Heim leben, deutlich weniger als in NRW und im Bund. Bei einer Betreuungskraft zu Hause bleibt dagegen alles, wie es ist: die eigene Wohnung, die eigenen Möbel, der eigene Tagesablauf — nur mit jemandem, der da ist.' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Gütersloh eine geriatrische Klinik?',
        acceptedAnswer: { '@type': 'Answer', text: 'Im somatischen Krankenhaus in Gütersloh selbst nicht. Nach dem Krankenhausplan des Landes hat weder das Klinikum Gütersloh noch das Sankt Elisabeth Hospital eine geriatrische Fachabteilung; geplant ist Geriatrie in der Stadt nur an der LWL-Klinik, einem psychiatrischen Haus. Die nächstgelegenen geriatrischen Abteilungen liegen in Harsewinkel, Rheda-Wiedenbrück und Halle. Für den Übergang nach einem Klinikaufenthalt ist es deshalb sinnvoll, die Versorgung zu Hause früh zu klären.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Gütersloh bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gütersloh und Kreis Gütersloh: Bielefeld-Südost, Rheda-Wiedenbrück, Herzebrock-Clarholz, Borgholzhausen und alle Gemeinden im Kreis Gütersloh' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Gütersloh?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Gütersloh starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Gütersloh rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Gütersloh gilt als junge Stadt — ist Pflege hier überhaupt ein Thema?', a: 'Ja, und zwar zunehmend. Der Anteil der über 65-Jährigen liegt zwar leicht unter dem nordrhein-westfälischen Schnitt, aber das liegt am Zuzug jüngerer Menschen, nicht an wenigen Älteren. In absoluten Zahlen wächst die Gruppe der über 65-Jährigen bis 2050 um rund 27 Prozent, im Land nur um 12. Und die Gruppe der über 80-Jährigen bleibt bis 2030 fast konstant — das sind die geburtenschwachen Kriegsjahrgänge — und wächst danach bis 2040 um mehr als ein Drittel.' },
  { q: 'Im Kreis Gütersloh gibt es viele Pflege-Wohngemeinschaften. Was ist der Unterschied zur Betreuung zu Hause?', a: 'In einer Pflege-Wohngemeinschaft ziehen mehrere Menschen zusammen, ein ambulanter Dienst betreut rund um die Uhr. Der Kreis Gütersloh hat davon rund 84 — eine bundesweite Besonderheit, und ein Grund, warum hier nur 10,7 Prozent der Pflegebedürftigen im Heim leben, deutlich weniger als in NRW und im Bund. Bei einer Betreuungskraft zu Hause bleibt dagegen alles, wie es ist: die eigene Wohnung, die eigenen Möbel, der eigene Tagesablauf — nur mit jemandem, der da ist.' },
  { q: 'Gibt es in Gütersloh eine geriatrische Klinik?', a: 'Im somatischen Krankenhaus in Gütersloh selbst nicht. Nach dem Krankenhausplan des Landes hat weder das Klinikum Gütersloh noch das Sankt Elisabeth Hospital eine geriatrische Fachabteilung; geplant ist Geriatrie in der Stadt nur an der LWL-Klinik, einem psychiatrischen Haus. Die nächstgelegenen geriatrischen Abteilungen liegen in Harsewinkel, Rheda-Wiedenbrück und Halle. Für den Übergang nach einem Klinikaufenthalt ist es deshalb sinnvoll, die Versorgung zu Hause früh zu klären.' },
  { q: 'Welches Einzugsgebiet wird in Gütersloh bedient?', a: 'Gütersloh und Kreis Gütersloh: Bielefeld-Südost, Rheda-Wiedenbrück, Herzebrock-Clarholz, Borgholzhausen und alle Gemeinden im Kreis Gütersloh' },
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
            { label: 'Gütersloh' },
          ]}
          augenbraue="24-Stunden-Pflege in Gütersloh"
          titel="24-Stunden-Pflege und Betreuung in Gütersloh"
          einleitung={<>Ein Arbeitsleben bei Miele, Bertelsmann oder auf dem Hof im Umland — und den Ruhestand dann im eigenen Zuhause in Isselhorst, Spexard oder Avenwedde verbringen: So stellen sich die meisten Gütersloher das Alter vor. Eine Betreuungskraft von Primundus zieht mit ein, wenn es allein nicht mehr geht, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Gütersloh auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Gütersloh heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.</Text>
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Gütersloh 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Gütersloh"
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
            <RechnerKasten src="ort-guetersloh" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-guetersloh" titel="Polnische Betreuungskräfte in Gütersloh">
            <Text>Wer in Gütersloh nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Gütersloh und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Kreis Gütersloh">
            <Text>Unsere Betreuungskräfte ziehen in Gütersloh und im Kreis Gütersloh ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Gütersloh ausmacht">
            <Text>Gütersloh gilt als junge Stadt, und die Zahlen geben das her: Der Anteil der über 65-Jährigen liegt leicht unter dem nordrhein-westfälischen Schnitt, die Stadt wächst, während das Land schrumpft. Für die Pflege ist trotzdem eine andere Zahl entscheidend — die absolute. <strong className="text-pm-ink font-semibold">Bis 2050 wird die Zahl der Menschen über 65 in Gütersloh um rund 27 Prozent steigen</strong>, in Nordrhein-Westfalen insgesamt nur um 12. Der niedrige Anteil entsteht durch Zuzug jüngerer Menschen, nicht dadurch, dass es wenige Ältere gäbe.</Text>
            <Text>Dabei kommt die Welle nicht gleichmäßig. Die Gruppe der über 80-Jährigen wächst bis 2030 praktisch gar nicht — das sind die geburtenschwachen Kriegsjahrgänge. Danach steigt sie bis 2040 um mehr als ein Drittel. Wer heute plant, sollte also nicht von der Gegenwart auf die kommenden Jahre schließen.</Text>
            <Text>Bemerkenswert ist, wie im Kreis Gütersloh gepflegt wird. Nur <strong className="text-pm-ink font-semibold"> 10,7 Prozent aller Pflegebedürftigen leben im Heim</strong> — deutlich weniger als in Nordrhein-Westfalen und im Bund. Der Kreis hat stattdessen eine Besonderheit entwickelt: rund 84 Haus- und Pflegewohngemeinschaften, in denen ambulante Dienste rund um die Uhr betreuen. Über tausend Menschen leben dort. Die klassischen Heime sind entsprechend nur zu gut 83 Prozent ausgelastet, während die Wohngemeinschaften über 90 Prozent erreichen. Anders gesagt: Hier ist man offen für Lösungen jenseits des Heims — und die Betreuung im eigenen Zuhause ist die konsequenteste davon.</Text>
            <Text>Beim Wohnen kommt Gütersloh der häuslichen Pflege entgegen und stellt sie zugleich vor eine Hürde. Die Stadt liegt in der Emssandebene, also flach — Steigungen sind hier kein Thema. Dafür ist der Bestand ungewöhnlich großzügig: Nur 16,5 Prozent der Wohnungen liegen in größeren Mehrfamilienhäusern, in Nordrhein-Westfalen sind es fast doppelt so viele; gut vier von zehn Wohnungen haben über 100 Quadratmeter. Das heißt in der Praxis: eigenes Haus, eigene Treppe, viel Fläche, die gepflegt werden will. Genau dafür ist eine Betreuungskraft im Haus gemacht — sie führt den Haushalt mit und ist nachts da. Das gilt in Isselhorst und Avenwedde ebenso wie in Verl, Rheda-Wiedenbrück oder Harsewinkel.</Text>
            <Text>Ein praktischer Hinweis für den Ernstfall: Eine geriatrische Akutabteilung im somatischen Krankenhaus gibt es in Gütersloh selbst nicht — die nächstgelegenen liegen in Harsewinkel, Rheda-Wiedenbrück und Halle. Für die Beratung im Vorfeld gilt: Die Pflegeberatung im Kreis Gütersloh ist kostenlos, trägerunabhängig und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-guetersloh" titel="Einzugsgebiet Gütersloh">
            <Text>Gütersloh und Kreis Gütersloh: Bielefeld-Südost, Rheda-Wiedenbrück, Herzebrock-Clarholz, Borgholzhausen und alle Gemeinden im Kreis Gütersloh</Text>
            <NearbyCities current="guetersloh" />
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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Gütersloh">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
