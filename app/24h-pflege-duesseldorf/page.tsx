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
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Düsseldorf 2026" },
  { id: 'polnische-betreuungskraefte-in-duesseldorf', title: "Polnische Betreuungskräfte in Düsseldorf" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Düsseldorf ausmacht" },
  { id: 'einzugsgebiet-duesseldorf', title: "Einzugsgebiet Düsseldorf" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Düsseldorf" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Düsseldorf | Primundus',
  description: '24-Stunden-Pflege in Düsseldorf: Eigenanteil ab ca. 1200 €/Monat (PG 3). Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-duesseldorf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Düsseldorf — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Düsseldorf. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-duesseldorf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-duesseldorf#service',
    name: 'Primundus — 24h-Pflege Düsseldorf',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Düsseldorf. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-duesseldorf',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Düsseldorf' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Düsseldorf', item: 'https://primundus.de/24h-pflege-duesseldorf' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Düsseldorf?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Düsseldorf starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Düsseldorf rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Düsseldorf genug Heimplätze als Alternative?',
        acceptedAnswer: { '@type': 'Answer', text: 'Weniger als im Landesdurchschnitt. Düsseldorf hat 40 vollstationäre Heimplätze je 1.000 Einwohner über 65, in Nordrhein-Westfalen sind es 46. Beide Kennzahlen zeigen dabei in dieselbe Richtung: Auch der Anteil der Pflegebedürftigen, die im Heim leben, liegt mit 11,3 Prozent unter dem Landeswert von 12,2 Prozent. Bei 40.248 Pflegebedürftigen in der Stadt bedeutet das eine spürbar längere Suche. Für viele Familien ist die Betreuung zu Hause deshalb nicht die zweitbeste Lösung, sondern die einzige, die sich kurzfristig umsetzen lässt.' },
      },
      {
        '@type': 'Question',
        name: 'Funktioniert 24-Stunden-Betreuung in einer Düsseldorfer Nachkriegswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Häufig ja — es ist hier sogar der Normalfall. 43,3 Prozent aller Düsseldorfer Wohnungen stammen aus den Jahren 1950 bis 1969, allein 87.521 aus den Fünfzigern; in NRW sind es 33,6 Prozent. Auf ein Gebäude kommen 4,7 Wohnungen. Die typische Ausgangslage ist also eine Mietwohnung im Obergeschoss eines Wiederaufbaus. Gerade wenn die Treppe zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Notwendig ist ein eigenes, abschließbares Zimmer — die durchschnittliche Wohnung misst 77,6 Quadratmeter, gut jede dritte liegt unter 60.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wird in Düsseldorf gepflegt — eher familiär oder professionell?',
        acceptedAnswer: { '@type': 'Answer', text: 'Deutlich professioneller als im Land. Nur 56,9 Prozent der Düsseldorfer Pflegebedürftigen beziehen ausschließlich Pflegegeld, versorgen sich also rein familiär; in Nordrhein-Westfalen sind es 59,0 Prozent. Dafür nehmen 21,0 Prozent einen ambulanten Dienst in Anspruch gegenüber 17,3 Prozent im Land. Eine Betreuungskraft im Haushalt setzt diesen Weg fort: nicht ein Besuch dreimal täglich, sondern durchgehend jemand vor Ort — auch nachts.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Düsseldorf bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Düsseldorf und Umland: Ratingen, Mettmann, Neuss, Krefeld, Meerbusch, Langenfeld, Hilden, Erkrath und alle Gemeinden im Rhein-Kreis Neuss und Kreis Mettmann' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Düsseldorf?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Düsseldorf starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Düsseldorf rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Gibt es in Düsseldorf genug Heimplätze als Alternative?', a: 'Weniger als im Landesdurchschnitt. Düsseldorf hat 40 vollstationäre Heimplätze je 1.000 Einwohner über 65, in Nordrhein-Westfalen sind es 46. Beide Kennzahlen zeigen dabei in dieselbe Richtung: Auch der Anteil der Pflegebedürftigen, die im Heim leben, liegt mit 11,3 Prozent unter dem Landeswert von 12,2 Prozent. Bei 40.248 Pflegebedürftigen in der Stadt bedeutet das eine spürbar längere Suche. Für viele Familien ist die Betreuung zu Hause deshalb nicht die zweitbeste Lösung, sondern die einzige, die sich kurzfristig umsetzen lässt.' },
  { q: 'Funktioniert 24-Stunden-Betreuung in einer Düsseldorfer Nachkriegswohnung?', a: 'Häufig ja — es ist hier sogar der Normalfall. 43,3 Prozent aller Düsseldorfer Wohnungen stammen aus den Jahren 1950 bis 1969, allein 87.521 aus den Fünfzigern; in NRW sind es 33,6 Prozent. Auf ein Gebäude kommen 4,7 Wohnungen. Die typische Ausgangslage ist also eine Mietwohnung im Obergeschoss eines Wiederaufbaus. Gerade wenn die Treppe zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Notwendig ist ein eigenes, abschließbares Zimmer — die durchschnittliche Wohnung misst 77,6 Quadratmeter, gut jede dritte liegt unter 60.' },
  { q: 'Wie wird in Düsseldorf gepflegt — eher familiär oder professionell?', a: 'Deutlich professioneller als im Land. Nur 56,9 Prozent der Düsseldorfer Pflegebedürftigen beziehen ausschließlich Pflegegeld, versorgen sich also rein familiär; in Nordrhein-Westfalen sind es 59,0 Prozent. Dafür nehmen 21,0 Prozent einen ambulanten Dienst in Anspruch gegenüber 17,3 Prozent im Land. Eine Betreuungskraft im Haushalt setzt diesen Weg fort: nicht ein Besuch dreimal täglich, sondern durchgehend jemand vor Ort — auch nachts.' },
  { q: 'Welches Einzugsgebiet wird in Düsseldorf bedient?', a: 'Düsseldorf und Umland: Ratingen, Mettmann, Neuss, Krefeld, Meerbusch, Langenfeld, Hilden, Erkrath und alle Gemeinden im Rhein-Kreis Neuss und Kreis Mettmann' },
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
            { label: 'Düsseldorf' },
          ]}
          augenbraue="24-Stunden-Pflege in Düsseldorf"
          titel="24-Stunden-Pflege und Betreuung in Düsseldorf"
          einleitung={<>Die Wohnung in Oberkassel, das Haus in Gerresheim, der Garten in Kaiserswerth: Düsseldorfer geben ihr Zuhause ungern auf — schon gar nicht für einen Heimplatz mit Wartezeit. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da, von Benrath bis Wittlaer. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Düsseldorf auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Düsseldorf heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.</Text>
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Düsseldorf 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Düsseldorf"
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
            <Kasten titel="Ihren eigenen Fall durchrechnen">
              <Text>Welcher Pflegegrad realistisch ist und was am Ende tatsächlich übrig bleibt, hängt von der konkreten Situation ab. Zwei Rechner helfen weiter — beide kostenlos und ohne Anmeldung:</Text>
              <MehrDazu
                label="Rechner:"
                links={[
                  { href: '/pflegegrad-rechner', text: 'Pflegegrad berechnen — dieselben sechs Module wie bei der Begutachtung' },
                  { href: 'https://kostenrechner.primundus.de/?start=1&amp;src=ort-duesseldorf', text: 'Preis und Betreuungskräfte für Düsseldorf ansehen — in 2 Minuten' },
                ]}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-duesseldorf" titel="Polnische Betreuungskräfte in Düsseldorf">
            <Text>Wer in Düsseldorf nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Düsseldorf und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Düsseldorf ausmacht">
            <Text>Düsseldorf wohnt zu einem erstaunlichen Teil in den fünfziger Jahren.{' '} <strong className="text-pm-ink font-semibold">43,3 Prozent aller Wohnungen der Stadt stammen aus den Jahren 1950 bis 1969</strong> — in Nordrhein-Westfalen sind es 33,6 Prozent. Allein aus den Fünfzigern kommen 87.521 Wohnungen. Das ist der Wiederaufbau, und der baute in die Höhe: Auf ein Düsseldorfer Gebäude kommen 4,7 Wohnungen, in NRW sind es 2,3. Wer in dieser Stadt alt wird, wird das mit hoher Wahrscheinlichkeit im dritten oder vierten Obergeschoss eines Nachkriegsbaus. Was das für Treppen bedeutet, weiß jede Familie, die schon einmal einen Rollator hochgetragen hat.</Text>
            <Text>Die zweite Zahl, die man kennen sollte, betrifft die Alternative.{' '} <strong className="text-pm-ink font-semibold">Düsseldorf hat 40 vollstationäre Heimplätze je 1.000 Einwohner über 65 — Nordrhein-Westfalen 46.</strong> Und das ist keine Frage der Betrachtungsweise: Auch der Anteil der Pflegebedürftigen, die im Heim leben, liegt mit 11,3 Prozent unter dem Landeswert von 12,2. Beide Kennzahlen zeigen in dieselbe Richtung. Bei 40.248 Pflegebedürftigen in der Stadt heißt das schlicht: Der Heimplatz ist hier knapper als anderswo in NRW. Für viele Familien ist die häusliche Lösung nicht die zweitbeste, sondern die einzige, die kurzfristig verfügbar ist.</Text>
            <Text>Auffällig ist auch, wie in Düsseldorf gepflegt wird. Nur 56,9 Prozent beziehen ausschließlich Pflegegeld, versorgen sich also rein familiär — in NRW sind es 59,0 Prozent. Dafür nehmen 21,0 Prozent einen ambulanten Dienst in Anspruch, gegenüber 17,3 im Land. Düsseldorfer Familien kaufen professionelle Unterstützung eher ein, als alles allein zu tragen. Eine Betreuungskraft im Haushalt ist die konsequente Fortsetzung dieses Wegs: nicht dreimal täglich ein Besuch, sondern durchgehend jemand da.</Text>
            <Text>Beim Platz wird es allerdings eng. Die durchschnittliche Düsseldorfer Wohnung misst 77,6 Quadratmeter gegenüber 92,7 im Land, gut jede dritte liegt unter 60, und nur 22,1 Prozent der Haushalte wohnen im Eigentum. Bei 9,24 Euro Nettokaltmiete je Quadratmeter ist der Umzug in etwas Größeres für die meisten keine Option. Ob ein eigenes Zimmer für die Betreuungskraft frei wird, entscheidet sich deshalb sehr konkret — und diese Frage klären wir vorher, nicht hinterher.</Text>
            <Text>Dazu kommt, dass Düsseldorf zwei sehr verschiedene Städte ist. In Friedrichstadt leben gut 20.000 Menschen je Quadratkilometer, in Hubbelrath 130. Innenstadtlagen wie Pempelfort oder Unterbilk haben alles fußläufig; in Kalkum, Angermund oder Himmelgeist geht ohne Auto wenig. Für eine Kraft, die im Haus wohnt, spielt das keine Rolle. Medizinisch ist die Stadt gut aufgestellt — St. Martinus in Bilk und das Krankenhaus Elbroich führen beide eine eigene geriatrische Klinik, St. Martinus zusätzlich eine Tagesklinik. Bevor Sie entscheiden, lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt zu Ihnen.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-duesseldorf" titel="Einzugsgebiet Düsseldorf">
            <Text>Düsseldorf und Umland: Ratingen, Mettmann, Neuss, Krefeld, Meerbusch, Langenfeld, Hilden, Erkrath und alle Gemeinden im Rhein-Kreis Neuss und Kreis Mettmann</Text>
            <NearbyCities current="duesseldorf" />
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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Düsseldorf">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
