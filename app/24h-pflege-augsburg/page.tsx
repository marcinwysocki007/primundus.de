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
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Augsburg 2026" },
  { id: 'polnische-betreuungskraefte-in-augsburg', title: "Polnische Betreuungskräfte in Augsburg" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Augsburg ausmacht" },
  { id: 'einzugsgebiet-augsburg', title: "Einzugsgebiet Augsburg" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Augsburg" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Augsburg | Primundus',
  description: '24-Stunden-Pflege in Augsburg: Eigenanteil ab ca. 1100 €/Monat (PG 3). Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-augsburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Augsburg — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Augsburg. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-augsburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-augsburg#service',
    name: 'Primundus — 24h-Pflege Augsburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Augsburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-augsburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Augsburg' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Augsburg', item: 'https://primundus.de/24h-pflege-augsburg' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Augsburg?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Bayern besondere Pflegeförderungen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Augsburg starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Augsburg rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft in eine Augsburger Wohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das muss man in Augsburg genauer prüfen als anderswo in Bayern. Im Freistaat kommen auf ein Gebäude 2,1 Wohnungen, in Augsburg 4,1; die durchschnittliche Wohnung misst hier 76,4 statt 100,5 Quadratmeter, und gut jede dritte liegt unter 60 — in Bayern jede fünfte. Im Eigentum wohnen 32,5 Prozent der Haushalte gegenüber 49,3 im Land. Augsburg ist eine Großstadt mit Großstadtgrundrissen. Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft; ob Ihre Wohnung das hergibt, klären wir vorab am Telefon.' },
      },
      {
        '@type': 'Question',
        name: 'Wie ist die Pflegesituation in Augsburg?',
        acceptedAnswer: { '@type': 'Answer', text: 'Stärker professionalisiert als im übrigen Bayern. Von den 14.208 Pflegebedürftigen der Stadt werden nur 45,4 Prozent ausschließlich von Angehörigen versorgt, in Bayern sind es 48,5 Prozent. Ambulante Dienste (22,1 gegen 20,0 Prozent) und Heimpflege (18,2 gegen 17,6) liegen entsprechend darüber. Heimplätze sind reichlich vorhanden: 49 je 1.000 Einwohner über 65 gegenüber 44 in Bayern, bei durchschnittlich 71 Plätzen je Einrichtung statt 58. Eine Betreuung zu Hause tritt hier also nicht gegen einen Mangel an, sondern gegen ein gut ausgebautes stationäres Angebot.' },
      },
      {
        '@type': 'Question',
        name: 'Ich habe Pflegegrad 1 — lohnt sich das Thema für mich schon?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gerade dann lohnt sich das Nachdenken. In Augsburg haben 2.009 Menschen Pflegegrad 1, beziehen aber keine regulären Pflegeleistungen — 14,1 Prozent aller Pflegebedürftigen der Stadt und mehr als im bayerischen Durchschnitt (13,9 Prozent). Das sind über zweitausend Haushalte mit anerkanntem Unterstützungsbedarf, in denen bislang nichts organisiert ist. Bei Pflegegrad 1 stehen Entlastungsbetrag und Hilfsmittel zur Verfügung; wer früh plant, muss später nicht unter Zeitdruck entscheiden. Welche Leistungen Ihnen zustehen, rechnet der Pflegegrad-Rechner durch.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Augsburg bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Augsburg und Umland: Friedberg, Neusäß, Königsbrunn, Gersthofen, Stadtbergen und alle Gemeinden im Landkreis Augsburg' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Augsburg?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Augsburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Augsburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft in eine Augsburger Wohnung?', a: 'Das muss man in Augsburg genauer prüfen als anderswo in Bayern. Im Freistaat kommen auf ein Gebäude 2,1 Wohnungen, in Augsburg 4,1; die durchschnittliche Wohnung misst hier 76,4 statt 100,5 Quadratmeter, und gut jede dritte liegt unter 60 — in Bayern jede fünfte. Im Eigentum wohnen 32,5 Prozent der Haushalte gegenüber 49,3 im Land. Augsburg ist eine Großstadt mit Großstadtgrundrissen. Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft; ob Ihre Wohnung das hergibt, klären wir vorab am Telefon.' },
  { q: 'Wie ist die Pflegesituation in Augsburg?', a: 'Stärker professionalisiert als im übrigen Bayern. Von den 14.208 Pflegebedürftigen der Stadt werden nur 45,4 Prozent ausschließlich von Angehörigen versorgt, in Bayern sind es 48,5 Prozent. Ambulante Dienste (22,1 gegen 20,0 Prozent) und Heimpflege (18,2 gegen 17,6) liegen entsprechend darüber. Heimplätze sind reichlich vorhanden: 49 je 1.000 Einwohner über 65 gegenüber 44 in Bayern, bei durchschnittlich 71 Plätzen je Einrichtung statt 58. Eine Betreuung zu Hause tritt hier also nicht gegen einen Mangel an, sondern gegen ein gut ausgebautes stationäres Angebot.' },
  { q: 'Ich habe Pflegegrad 1 — lohnt sich das Thema für mich schon?', a: 'Gerade dann lohnt sich das Nachdenken. In Augsburg haben 2.009 Menschen Pflegegrad 1, beziehen aber keine regulären Pflegeleistungen — 14,1 Prozent aller Pflegebedürftigen der Stadt und mehr als im bayerischen Durchschnitt (13,9 Prozent). Das sind über zweitausend Haushalte mit anerkanntem Unterstützungsbedarf, in denen bislang nichts organisiert ist. Bei Pflegegrad 1 stehen Entlastungsbetrag und Hilfsmittel zur Verfügung; wer früh plant, muss später nicht unter Zeitdruck entscheiden. Welche Leistungen Ihnen zustehen, rechnet der Pflegegrad-Rechner durch.' },
  { q: 'Welches Einzugsgebiet wird in Augsburg bedient?', a: 'Augsburg und Umland: Friedberg, Neusäß, Königsbrunn, Gersthofen, Stadtbergen und alle Gemeinden im Landkreis Augsburg' },
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
            { label: 'Augsburg' },
          ]}
          augenbraue="24-Stunden-Pflege in Augsburg"
          titel="24-Stunden-Pflege und Betreuung in Augsburg"
          einleitung={<>Göggingen, Pfersee, Haunstetten oder das Lechviertel: Augsburger sind ihrem Viertel treu — und dem eigenen Zuhause sowieso. Wenn Mutter oder Vater mehr Hilfe brauchen, als Besuche leisten können, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da, auch im Umland bis Königsbrunn und Friedberg. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026)',
            'Bayern: Landespflegegeld +500 €/Jahr',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Augsburg auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Augsburg heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.</Text>
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Augsburg 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Augsburg"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <Kasten ton="gruen" titel="Bayern-Vorteil: Landespflegegeld +500 €/Jahr">
              <Text>Bayern zahlt zusätzlich 1.000 €/Jahr (ca. 83 €/Monat) für alle PG 2–5 in häuslicher Pflege. Antrag beim Landesamt für Pflege (LfP Bayern) — kumulierbar mit allen Pflegekasse-Zuschüssen.</Text>
            </Kasten>
            <RechnerKasten src="ort-augsburg" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-augsburg" titel="Polnische Betreuungskräfte in Augsburg">
            <Text>Wer in Augsburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Augsburg und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.200 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Augsburg ausmacht">
            <Text>Wer von Bayern auf Augsburg schließt, liegt beim Wohnen völlig daneben. Im Freistaat kommen auf ein Gebäude 2,1 Wohnungen, in Augsburg 4,1. Die durchschnittliche bayerische Wohnung misst 100,5 Quadratmeter, die Augsburger 76,4.{' '} <strong className="text-pm-ink font-semibold">Gut jede dritte Wohnung in der Stadt liegt unter 60 Quadratmetern — in Bayern ist es jede fünfte.</strong> Und im Eigentum wohnen hier 32,5 Prozent der Haushalte gegenüber 49,3 Prozent im Land. Augsburg ist eine Großstadt mit Großstadtgrundrissen, keine schwäbische Landstadt. Für die Frage, ob eine Betreuungskraft ein eigenes Zimmer bekommt, ist das die entscheidende Auskunft.</Text>
            <Text>Bei der Pflege selbst fällt ein Wert besonders auf.{' '} <strong className="text-pm-ink font-semibold">Nur 45,4 Prozent der 14.208 Augsburger Pflegebedürftigen werden ausschließlich von Angehörigen versorgt</strong> — in Bayern sind es 48,5 Prozent. Dafür liegen beide professionellen Formen darüber: ambulante Dienste bei 22,1 statt 20,0 Prozent, Heimpflege bei 18,2 statt 17,6. Augsburg ist eine Stadt, in der Pflege früher aus der Hand gegeben wird als im übrigen Bayern. Das hat nichts mit fehlender Zuwendung zu tun, sondern mit Wohnungsgrößen, Erwerbstätigkeit und Wegen.</Text>
            <Text>Heimplätze sind in Augsburg reichlich vorhanden — 49 je 1.000 Einwohner über 65 gegenüber 44 in Bayern, und mit durchschnittlich 71 Plätzen je Haus sind die Einrichtungen größer als im Land (58). Auch hier zeigen Anteil und Platzangebot in dieselbe Richtung. Eine Betreuung zu Hause tritt in dieser Stadt also nicht gegen einen Mangel an, sondern gegen ein gut ausgebautes stationäres Angebot. Der Unterschied liegt woanders: darin, dass jemand in der eigenen Wohnung bleibt, in der vertrauten Umgebung, mit einer festen Bezugsperson statt wechselnden Schichten.</Text>
            <Text>Eine Gruppe wird dabei regelmäßig übersehen. In Augsburg haben{' '} <strong className="text-pm-ink font-semibold">2.009 Menschen Pflegegrad 1, beziehen aber keine regulären Pflegeleistungen</strong> — 14,1 Prozent aller Pflegebedürftigen der Stadt und damit mehr als in Bayern (13,9 Prozent). Das sind über zweitausend Haushalte mit anerkanntem Unterstützungsbedarf, in denen bisher nichts organisiert ist. Wer hier früh handelt, muss später nicht unter Zeitdruck entscheiden.</Text>
            <Text>Zur medizinischen Lage gehören zwei Punkte. Mit der geriatrischen Rehaklinik der Hessing Stiftung hat Augsburg eine der größten Einrichtungen ihrer Art in Deutschland, rund zweitausend Patienten im Jahr, und das erklärte Ziel ist die Rückkehr nach Hause. Eine akutgeriatrische Tagesklinik gibt es in ganz Schwaben dagegen nicht. Beides zusammen heißt: Der Übergang von der Klinik zurück in die eigene Wohnung muss zu Hause aufgefangen werden. Genau dafür zieht eine Betreuungskraft mit ein — auch in Bergheim, Inningen oder der Firnhaberau, wo ein Dienst weite Wege für kurze Einsätze hätte. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-augsburg" titel="Einzugsgebiet Augsburg">
            <Text>Augsburg und Umland: Friedberg, Neusäß, Königsbrunn, Gersthofen, Stadtbergen und alle Gemeinden im Landkreis Augsburg</Text>
            <NearbyCities current="augsburg" />
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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Augsburg">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
