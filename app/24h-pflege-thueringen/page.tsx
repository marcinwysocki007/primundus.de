import type { Metadata } from 'next'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import { KontaktBand } from '@/components/ArticleCTA'
import { CitiesOfRegion } from '@/components/CityIndex'
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
  { id: 'was-ist-24h-pflege', title: "Was ist 24h-Pflege — und was unterscheidet sie von allem anderen?" },
  { id: 'fuer-wen-ist-24h', title: "Für wen ist 24h-Pflege die richtige Wahl?" },
  { id: 'was-macht-eine-betreuungskraft', title: "Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Thüringen 2026" },
  { id: 'polnische-betreuungskraefte-in-thueringen', title: "Polnische Betreuungskräfte in Thüringen" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Thüringen ausmacht" },
  { id: 'einzugsgebiet-thueringen', title: "Einzugsgebiet Thüringen" },
  { id: 'werkzeuge', title: "Was es in Thüringen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Thüringen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Thüringen: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-thueringen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Thüringen | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Thüringen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-thueringen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-thueringen#service',
    name: 'Primundus — 24h-Pflege Thüringen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Thüringen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-thueringen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'State', name: 'Thüringen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Thüringen', item: 'https://primundus.de/24h-pflege-thueringen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Warum wird in Thüringen so viel zu Hause gepflegt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Weil kaum etwas anderes übrig bleibt. Zwischen 2017 und 2023 stieg die Zahl der Pflegebedürftigen in Thüringen um 67,7 Prozent, während die Zahl der Menschen im Heim um vier Prozent sank. Der gesamte Zuwachs — rund 78.300 Menschen — landete bei den Familien. Das Land schreibt in seinem Pflegeentwicklungsplan von 2025 selbst: „In mehr als der Hälfte der Fälle betreuen die An- und Zugehörigen die Pflegebedürftigen ohne Unterstützung durch ambulante Pflege- und Betreuungsdienste.“ Erschwerend kommt hinzu, dass die Zahl der 20- bis 65-Jährigen bis 2042 um 14 Prozent sinkt — die Generation, die diese Pflege leisten soll, wird kleiner.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Thüringen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — oft günstiger als ein Heimplatz in Thüringen (Eigenanteil rund 3.000 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Thüringen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Thüringen — auch in ländlichen Regionen.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Thüringen rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Warum wird in Thüringen so viel zu Hause gepflegt?', a: 'Weil kaum etwas anderes übrig bleibt. Zwischen 2017 und 2023 stieg die Zahl der Pflegebedürftigen in Thüringen um 67,7 Prozent, während die Zahl der Menschen im Heim um vier Prozent sank. Der gesamte Zuwachs — rund 78.300 Menschen — landete bei den Familien. Das Land schreibt in seinem Pflegeentwicklungsplan von 2025 selbst: „In mehr als der Hälfte der Fälle betreuen die An- und Zugehörigen die Pflegebedürftigen ohne Unterstützung durch ambulante Pflege- und Betreuungsdienste.“ Erschwerend kommt hinzu, dass die Zahl der 20- bis 65-Jährigen bis 2042 um 14 Prozent sinkt — die Generation, die diese Pflege leisten soll, wird kleiner.' },
  { q: 'Was kostet eine 24h-Pflegekraft in Thüringen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — oft günstiger als ein Heimplatz in Thüringen (Eigenanteil rund 3.000 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Thüringen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Thüringen — auch in ländlichen Regionen.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Thüringen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Ist in einer Wohnung in Thüringen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Thüringen hat im Schnitt 86,6 m², 27,8 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 84,1 % der Wohnungen in Thüringen liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Deutschland insgesamt zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.364 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.441 € Unterschied im Monat, 29.292 € im Jahr.' },
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
            { label: 'Thüringen' },
          ]}
          augenbraue="24-Stunden-Pflege in Thüringen"
          titel="24h-Pflege Thüringen — Betreuungskraft zuhause"
          einleitung={<>Fachwerk in Erfurt, Plattenbau in Jena, Haus am Waldrand im Thüringer Wald: Zuhause ist in Thüringen mehr als eine Adresse. Damit es auch mit Pflegebedarf so bleibt, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, 1:1, ohne Heimumzug. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim Thüringen: Eigenanteil Ø 2000–2500 €/Monat',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Thüringen auf einen Blick"
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Thüringen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Thüringen"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim Thüringen: Eigenanteil Ø 2000–2500 €/Monat — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="land-thueringen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-thueringen" titel="Polnische Betreuungskräfte in Thüringen">
            <Text>Wer in Thüringen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in ganz Thüringen im Einsatz, in der Großstadt wie im kleinsten Dorf.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der in Thüringen im ersten Jahr im Schnitt rund 3.000 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Thüringen ausmacht">
            <Text>Thüringen hat die schärfste Entwicklung aller Bundesländer, die uns bisher begegnet ist.{' '} <strong className="text-pm-ink font-semibold">Zwischen 2017 und 2023 stieg die Zahl der Pflegebedürftigen um 67,7 Prozent — von 115.620 auf 193.937. Im selben Zeitraum sank die Zahl der Menschen, die vollstationär im Heim versorgt werden, um vier Prozent.</strong>{' '} Der Zuwachs von rund 78.300 Menschen ging fast vollständig an die Familien: Die Zahl derer, die ausschließlich Pflegegeld beziehen, also allein von Angehörigen gepflegt werden, wuchs um 71,5 Prozent.</Text>
            <Text>Thüringen hat damit{' '} <strong className="text-pm-ink font-semibold">die zweithöchste Pflegequote Deutschlands — 9,14 Prozent der Bevölkerung, gut ein Drittel über dem Bundeswert.</strong> Beim Heimangebot liegt das Land dagegen exakt im Bundesschnitt: 46 Dauerpflegeplätze je 1.000 Einwohner über 65, bundesweit 47. Nicht das Angebot ist hier also besonders knapp, sondern der Bedarf besonders groß. Die Differenz zwischen beidem tragen die Angehörigen.</Text>
            <Text>Wie weit das inzwischen geht, sagt das Land selbst.{' '} <strong className="text-pm-ink font-semibold">Im ersten Thüringer Pflegeentwicklungsplan von 2025 steht: „In mehr als der Hälfte der Fälle betreuen die An- und Zugehörigen die Pflegebedürftigen ohne Unterstützung durch ambulante Pflege- und Betreuungsdienste."</strong> Und der Plan spricht von einem bereits bestehenden akuten Versorgungsmangel, der sich ohne Gegenmaßnahmen zu einem humanitären Problem zuspitzen werde. Das ist die Einschätzung des Landes, nicht unsere.</Text>
            <Text>Dazu kommt etwas, das für die Pflege zu Hause entscheidend ist und das man in keiner Pflegestatistik findet: In Thüringen wohnen die Kinder oft nicht mehr am Ort. Bis 2042 sinkt die Zahl der Menschen zwischen 20 und 65 um 14 Prozent, während die Zahl der über 65-Jährigen weiter steigt. Der Altenquotient klettert von 48 auf 60. Familienpflege setzt aber voraus, dass jemand da ist, der sie leisten kann — und genau diese Generation wird kleiner.</Text>
            <Text>Innerhalb des Landes ist der Unterschied groß: Im Unstrut-Hainich-Kreis sind 127 von 1.000 Einwohnern pflegebedürftig, in Jena 64.{' '} <strong className="text-pm-ink font-semibold">Bemerkenswert ist dabei, dass der älteste Kreis Thüringens nicht die höchste Pflegequote hat</strong> — im Altenburger Land sind 31,9 Prozent der Einwohner über 65, die Pflegequote liegt aber deutlich unter der des Unstrut-Hainich-Kreises. Alter allein erklärt den Pflegebedarf also nicht; Angebot und Inanspruchnahme wirken mit.</Text>
            <Text>Eine letzte Zahl zur Einordnung: Die eigene Vorausberechnung des Landes hatte für 2023 rund 179.500 Pflegebedürftige erwartet. Tatsächlich waren es 193.937 —{' '} <strong className="text-pm-ink font-semibold">der Wert, der erst für 2029 vorhergesagt war.</strong> Thüringen liegt also rund sechs Jahre vor seiner eigenen Prognose.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Pflegezahlen und Zeitreihe: Thüringer Landesamt für Statistik, Pflegestatistik zum 15. Dezember 2017 bis 2023, sowie Statistisches Bundesamt, Länderergebnisse 2023. Vorausberechnung: 3. regionalisierte Bevölkerungs- und Pflegevorausberechnung des Landesamts. Zitat und Einschätzung: Thüringer Ministerium für Soziales, Gesundheit, Arbeit und Familie, „1. Thüringer Pflegeentwicklungsplan", Juli 2025.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-thueringen" titel="Einzugsgebiet Thüringen">
            <Text>Erfurt, Jena, Gera, Weimar, Gotha, Nordhausen, Eisenach, Suhl, Mühlhausen und alle weiteren Städte und Gemeinden in Thüringen</Text>
            <CitiesOfRegion region="thueringen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Thüringen'} land={'Deutschland insgesamt'} altbau={55.7} miete={5.65} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Thüringen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
