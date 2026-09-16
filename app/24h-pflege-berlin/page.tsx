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
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Berlin 2026" },
  { id: 'polnische-betreuungskraefte-in-berlin', title: "Polnische Betreuungskräfte in Berlin" },
  { id: '24-stunden-pflege-in', title: "24-Stunden-Pflege in allen Berliner Bezirken" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Berlin ausmacht" },
  { id: 'einzugsgebiet-berlin', title: "Einzugsgebiet Berlin" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Berlin" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Berlin | Primundus',
  description: '24-Stunden-Pflege in Berlin: Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-berlin' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Berlin | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Berlin. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-berlin',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-berlin#service',
    name: 'Primundus — 24h-Pflege Berlin',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Berlin. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-berlin',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'State', name: 'Berlin' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Berlin', item: 'https://primundus.de/24h-pflege-berlin' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Berlin?',
        acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1000–2000 €/Monat — oft günstiger als ein Heimplatz in Brandenburg (Eigenanteil rund 3.020 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Berlin starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Berlin — auch in ländlichen Regionen.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Funktioniert 24-Stunden-Pflege auch in einer Berliner Altbauwohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — und in Vierteln wie Prenzlauer Berg, wo zwei Drittel der Wohnungen aus der Zeit zwischen 1871 und 1914 stammen, ist sie oft die Lösung, die das Wohnenbleiben überhaupt erlaubt. Die Betreuungskraft braucht ein eigenes Zimmer; ansonsten stellt der Altbau keine besonderen Anforderungen. Entscheidend ist, dass jemand die Wege nach draußen übernimmt, sobald das Treppenhaus zur Hürde wird.' },
      },
      {
        '@type': 'Question',
        name: 'Gilt das Angebot in allen Berliner Bezirken?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, in allen zwölf — und das ist wichtiger, als es klingt. Für die Pflege ist Berlin nicht eine Stadt, sondern zwölf sehr verschiedene: Der Altbau in Prenzlauer Berg, die Großsiedlung in Marzahn und das Einfamilienhaus in Kaulsdorf stellen ganz unterschiedliche Anforderungen an den Alltag. Rund 715.000 Berlinerinnen und Berliner sind über 65, viele davon leben allein. Der Preis ist in jedem Bezirk derselbe, Anfahrtskosten berechnen wir nicht.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Berlin rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Berlin?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1000–2000 €/Monat — oft günstiger als ein Heimplatz in Brandenburg (Eigenanteil rund 3.020 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Berlin starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Berlin — auch in ländlichen Regionen.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Funktioniert 24-Stunden-Pflege auch in einer Berliner Altbauwohnung?', a: 'Ja — und in Vierteln wie Prenzlauer Berg, wo zwei Drittel der Wohnungen aus der Zeit zwischen 1871 und 1914 stammen, ist sie oft die Lösung, die das Wohnenbleiben überhaupt erlaubt. Die Betreuungskraft braucht ein eigenes Zimmer; ansonsten stellt der Altbau keine besonderen Anforderungen. Entscheidend ist, dass jemand die Wege nach draußen übernimmt, sobald das Treppenhaus zur Hürde wird.' },
  { q: 'Gilt das Angebot in allen Berliner Bezirken?', a: 'Ja, in allen zwölf — und das ist wichtiger, als es klingt. Für die Pflege ist Berlin nicht eine Stadt, sondern zwölf sehr verschiedene: Der Altbau in Prenzlauer Berg, die Großsiedlung in Marzahn und das Einfamilienhaus in Kaulsdorf stellen ganz unterschiedliche Anforderungen an den Alltag. Rund 715.000 Berlinerinnen und Berliner sind über 65, viele davon leben allein. Der Preis ist in jedem Bezirk derselbe, Anfahrtskosten berechnen wir nicht.' },
  { q: 'Ist 24h-Pflege über Primundus in Berlin rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
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
            { label: 'Berlin' },
          ]}
          augenbraue="24-Stunden-Pflege in Berlin"
          titel="24-Stunden-Pflege und Betreuung in Berlin"
          einleitung={<>Die Wohnung in Charlottenburg seit 40 Jahren, das Reihenhaus in Pankow, der Garten in Spandau: Berliner geben ihr Zuhause nicht auf — und Heimplätze mit kurzer Warteliste sind in der Stadt ohnehin rar. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da, von Steglitz bis Weißensee. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: 2.200–3.500 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ca. 1000–2000 €/Monat',
            'Pflegeheim in Brandenburg: Eigenanteil rund 3.020 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Berlin auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Berlin heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.</Text>
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Berlin 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Berlin"
              zeilen={[
                ['Kosten Primundus', '2.200–3.500 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerabzug (ca.)', '− ca. 200 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ca. 1000–2000 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Pflegeheim in Brandenburg: Eigenanteil rund 3.020 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
                  { href: 'https://kostenrechner.primundus.de/?start=1&amp;src=ort-berlin', text: 'Preis und Betreuungskräfte für Berlin ansehen — in 2 Minuten' },
                ]}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-berlin" titel="Polnische Betreuungskräfte in Berlin">
            <Text>Wer in Berlin nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Berlin und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbetrag und Entlastungsbudget in Brandenburg meist rund 1000 bis 2000 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.020 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-in" titel="24-Stunden-Pflege in allen Berliner Bezirken">
            <Text>Unsere Betreuungskräfte ziehen in ganz Berlin ein — in <a href="/24h-pflege-charlottenburg" className="text-pm-taupe font-semibold hover:underline">Charlottenburg-Wilmersdorf</a> ebenso wie in Steglitz-Zehlendorf, Pankow, Tempelhof-Schöneberg, Reinickendorf oder Spandau. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Berlin ausmacht">
            <Text>Für die Pflege ist Berlin keine Stadt, sondern zwölf sehr verschiedene. Wer in Prenzlauer Berg alt wird, wohnt mit hoher Wahrscheinlichkeit im Altbau: Zwei Drittel der Wohnungen dort stammen aus der Zeit zwischen 1871 und 1914, meist fünfgeschossige Häuser mit dreißig bis vierzig Parteien. Wer in Marzahn oder der Gropiusstadt wohnt, lebt in einer Großsiedlung mit ganz anderen Wegen. Und in Kaulsdorf oder Mahlsdorf steht das Einfamilienhaus mit Garten und Treppe ins Obergeschoss.</Text>
            <Text>Was alle drei gemeinsam haben: Irgendwann entscheidet nicht mehr die Wohnung, sondern die Frage, ob jemand da ist. Berlin gilt als junge Stadt — dabei leben hier rund 715.000 Menschen, die 65 oder älter sind. Viele von ihnen wohnen allein, oft seit Jahrzehnten in derselben Wohnung, und die Kinder sind über die Stadt verteilt oder längst weggezogen.</Text>
            <Text>Ambulante Dienste gibt es in Berlin viele, und die Wege sind kurz — die Stadt liegt im Urstromtal und ist überwiegend flach. Das Problem ist ein anderes: Ein Dienst kommt zu festen Zeiten und bleibt zwanzig Minuten. Er ist nicht da, wenn nachts jemand aufsteht und sich nicht mehr zurechtfindet, und er kocht nicht mit. Eine Betreuungskraft, die im Haushalt lebt, deckt genau die Stunden ab, die dazwischenliegen — in Pankow so wie in Spandau oder Köpenick.</Text>
            <Text>Bevor Sie sich festlegen, nutzen Sie die kostenlose Beratung: Die Pflegestützpunkte in Berlin beraten trägerunabhängig, in jedem Bezirk und auf Wunsch bei Ihnen zu Hause. Der Anspruch darauf ist gesetzlich geregelt (§ 7a SGB XI) und unabhängig davon, für welchen Anbieter Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-berlin" titel="Einzugsgebiet Berlin">
            <Text>Alle Berliner Bezirke: Mitte, Charlottenburg-Wilmersdorf, Steglitz-Zehlendorf, Tempelhof-Schöneberg, Kreuzberg-Friedrichshain, Pankow, Treptow-Köpenick, Marzahn-Hellersdorf, Lichtenberg, Neukölln, Reinickendorf, Spandau</Text>
            <NearbyCities current="berlin" />
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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Berlin">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
