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
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bietigheim-Bissingen 2026" },
  { id: 'polnische-betreuungskraefte-in-bietigheim', title: "Polnische Betreuungskräfte in Bietigheim-Bissingen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im nördlichen Landkreis Ludwigsburg" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bietigheim-Bissingen ausmacht" },
  { id: 'einzugsgebiet-bietigheim-bissingen', title: "Einzugsgebiet Bietigheim-Bissingen" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bietigheim-Bissingen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Bietigheim-Bissingen',
  description: '24-Stunden-Pflege in Bietigheim-Bissingen: Eigenanteil ab ca. 1200 €/Monat (PG 3). Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bietigheim-bissingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bietigheim-Bissingen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bietigheim-Bissingen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bietigheim-bissingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bietigheim-bissingen#service',
    name: 'Primundus — 24h-Pflege Bietigheim-Bissingen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bietigheim-Bissingen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bietigheim-bissingen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bietigheim-Bissingen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bietigheim-Bissingen', item: 'https://primundus.de/24h-pflege-bietigheim-bissingen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bietigheim-Bissingen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bietigheim-Bissingen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bietigheim-Bissingen rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bietigheim-Bissingen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Bietigheim-Bissingen ist bekannt: Die durchschnittliche Wohnung misst 94,9 Quadratmeter, 17,7 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 57,5 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Bietigheim-Bissingen?',
        acceptedAnswer: { '@type': 'Answer', text: '4.876 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Bietigheim-Bissingen — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Bietigheim-Bissingen im Schnitt 2,4 Wohnungen, in Baden-Württemberg 2,1. 53,5 Prozent der Gebäude stehen frei, 25,9 Prozent sind Reihenhäuser. 40,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bietigheim-Bissingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie ist die Heimplatz-Lage in Bietigheim-Bissingen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Besser als im Umland. Die Kreispflegeplanung rechnet je Kommune und kommt für Bietigheim-Bissingen auf 457 vorhandene Plätze bei einem Bedarf von 461 — praktisch ausgeglichen, während im gesamten Landkreis Ludwigsburg 920 Plätze fehlen. Zum Vergleich: Freiberg am Neckar fehlen 125, Gerlingen 99, Ditzingen 96. Knapp ist dagegen die Kurzzeitpflege: Im ganzen Landkreis gibt es nur 53 solitäre Plätze bei einem Bedarf von 162 — also genau das Angebot, das Angehörige brauchen, wenn sie selbst ausfallen. In der Stadt gibt es fünf Pflegeheime, vier Tagespflegen und drei ambulante Dienste.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bietigheim-Bissingen bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bietigheim-Bissingen und nördlicher Landkreis Ludwigsburg: Tamm, Sachsenheim, Besigheim, Bönnigheim und alle Gemeinden im nördlichen Landkreis Ludwigsburg' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bietigheim-Bissingen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bietigheim-Bissingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bietigheim-Bissingen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Bietigheim-Bissingen?', a: 'Das hängt am Grundriss, und die Ausgangslage in Bietigheim-Bissingen ist bekannt: Die durchschnittliche Wohnung misst 94,9 Quadratmeter, 17,7 Prozent liegen unter 60 Quadratmetern (Baden-Württemberg: 18,1 Prozent), und 57,5 Prozent der Haushalte wohnen im Eigentum (Baden-Württemberg: 51,6 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den meisten Fällen ist der Platz da; was Ihre Wohnung hergibt, klären wir trotzdem vorab am Telefon.' },
  { q: 'Wie viele ältere Menschen leben in Bietigheim-Bissingen?', a: '4.876 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bietigheim-Bissingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bietigheim-Bissingen im Schnitt 2,4 Wohnungen, in Baden-Württemberg 2,1. 53,5 Prozent der Gebäude stehen frei, 25,9 Prozent sind Reihenhäuser. 40,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bietigheim-Bissingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie ist die Heimplatz-Lage in Bietigheim-Bissingen?', a: 'Besser als im Umland. Die Kreispflegeplanung rechnet je Kommune und kommt für Bietigheim-Bissingen auf 457 vorhandene Plätze bei einem Bedarf von 461 — praktisch ausgeglichen, während im gesamten Landkreis Ludwigsburg 920 Plätze fehlen. Zum Vergleich: Freiberg am Neckar fehlen 125, Gerlingen 99, Ditzingen 96. Knapp ist dagegen die Kurzzeitpflege: Im ganzen Landkreis gibt es nur 53 solitäre Plätze bei einem Bedarf von 162 — also genau das Angebot, das Angehörige brauchen, wenn sie selbst ausfallen. In der Stadt gibt es fünf Pflegeheime, vier Tagespflegen und drei ambulante Dienste.' },
  { q: 'Welches Einzugsgebiet wird in Bietigheim-Bissingen bedient?', a: 'Bietigheim-Bissingen und nördlicher Landkreis Ludwigsburg: Tamm, Sachsenheim, Besigheim, Bönnigheim und alle Gemeinden im nördlichen Landkreis Ludwigsburg' },
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
            { label: 'Bietigheim-Bissingen' },
          ]}
          augenbraue="24-Stunden-Pflege in Bietigheim-Bissingen"
          titel="24-Stunden-Pflege und Betreuung in Bietigheim-Bissingen"
          einleitung={<>Fachwerk-Altstadt, Buch oder Untermberg an Enz und Metter: Bietigheimer bleiben ihrem Zuhause treu. Eine Betreuungskraft von Primundus zieht mit ein, wenn Mutter oder Vater Hilfe brauchen, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bietigheim-Bissingen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Bietigheim-Bissingen heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.</Text>
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bietigheim-Bissingen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bietigheim-Bissingen"
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
            <Kasten titel="Ihren eigenen Fall durchrechnen">
              <Text>Welcher Pflegegrad realistisch ist und was am Ende tatsächlich übrig bleibt, hängt von der konkreten Situation ab. Zwei Rechner helfen weiter — beide kostenlos und ohne Anmeldung:</Text>
              <MehrDazu
                label="Rechner:"
                links={[
                  { href: '/pflegegrad-rechner', text: 'Pflegegrad berechnen — dieselben sechs Module wie bei der Begutachtung' },
                  { href: 'https://kostenrechner.primundus.de/?start=1&amp;src=ort-bietigheim-bissingen', text: 'Preis und Betreuungskräfte für Bietigheim-Bissingen ansehen — in 2 Minuten' },
                ]}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bietigheim" titel="Polnische Betreuungskräfte in Bietigheim-Bissingen">
            <Text>Wer in Bietigheim-Bissingen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Bietigheim-Bissingen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im nördlichen Landkreis Ludwigsburg">
            <Text>Unsere Betreuungskräfte ziehen in Bietigheim-Bissingen und im nördlichen Landkreis Ludwigsburg ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bietigheim-Bissingen ausmacht">
            <Text>Der Landkreis Ludwigsburg zeigt eine Entwicklung, die man einmal in Zahlen gesehen haben sollte:{' '} <strong className="text-pm-ink font-semibold">Zwischen 2017 und 2023 stieg die Zahl der Pflegebedürftigen um fast 60 Prozent — von 17.575 auf 28.077. Die Zahl der Menschen im Pflegeheim blieb dabei praktisch unverändert bei rund 4.000.</strong> Der Anteil der stationär Versorgten fiel dadurch von 22,8 auf 14,3 Prozent. Es sind nicht weniger Menschen ins Heim gezogen — es sind nur sehr viel mehr pflegebedürftig geworden, und die alle bleiben zu Hause.</Text>
            <Text>Bietigheim-Bissingen steht dabei besser da als das Umland. Die Kreispflegeplanung rechnet je Kommune, und für die Stadt kommt sie auf 457 vorhandene Plätze bei einem Bedarf von 461 — praktisch ausgeglichen, während{' '} <strong className="text-pm-ink font-semibold">im gesamten Landkreis 920 Plätze fehlen.</strong> In Freiberg am Neckar sind es minus 125, in Gerlingen minus 99, in Ditzingen minus 96. Wer hier wohnt, hat also vergleichsweise gute Karten.</Text>
            <Text>Eine Lücke gibt es trotzdem, und sie trifft genau die Familien, die zu Hause pflegen:{' '} <strong className="text-pm-ink font-semibold">Im ganzen Landkreis gibt es nur 53 solitäre Kurzzeitpflegeplätze</strong>, dem Bedarf von 162 steht also ein Defizit von 109 gegenüber. Kurzzeitpflege ist das, was Angehörige brauchen, wenn sie selbst krank werden oder in Urlaub fahren. Der Landkreis vermittelt 19 dieser Plätze inzwischen selbst. In der Stadt selbst gibt es fünf Pflegeheime, vier Tagespflegen mit 56 Plätzen und drei ambulante Dienste.</Text>
            <Text>Bemerkenswert ist, wohin der Landkreis sein Geld lenkt. Statt allein neue Heimplätze zu fördern, stellt er{' '} <strong className="text-pm-ink font-semibold">jährlich 150.000 Euro für dezentrale Quartiersmanager bereit — ausdrücklich, um die häusliche Pflege zu stärken und Angehörige zu entlasten.</strong> Das ist eine Antwort auf genau die Entwicklung oben: Wenn der Zuwachs ohnehin zu Hause bleibt, muss die Unterstützung dorthin. In Bietigheim-Bissingen gibt es außerdem 193 Wohnungen im Betreuten Wohnen — eine Zwischenstufe, die oft übersehen wird, wenn die Entscheidung zwischen „allein zu Hause" und „Heim" aufgemacht wird. Innerhalb des Kreises schwankt der Anteil der über 65-Jährigen übrigens zwischen 16,8 und 24,6 Prozent; die Ausgangslage ist von Gemeinde zu Gemeinde sehr verschieden.</Text>
            <Text>Zur Altersmedizin ein Hinweis, weil ältere Quellen in die Irre führen:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie zog im April 2020 von Marbach am Neckar nach Bietigheim.</strong> Sie ist heute Teil der Klinik für Innere Medizin am RKH Krankenhaus in der Riedstraße. Verwirrend ist außerdem der Name des Zentrums — es heißt „Geriatrisches Zentrum Ludwigsburg-Bietigheim" und wird auf den Seiten des Ludwigsburger Klinikums geführt, die Akutstation liegt aber in Bietigheim-Bissingen. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bietigheim-bissingen" titel="Einzugsgebiet Bietigheim-Bissingen">
            <Text>Bietigheim-Bissingen und nördlicher Landkreis Ludwigsburg: Tamm, Sachsenheim, Besigheim, Bönnigheim und alle Gemeinden im nördlichen Landkreis Ludwigsburg</Text>
            <NearbyCities current="bietigheim-bissingen" />
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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bietigheim-Bissingen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
