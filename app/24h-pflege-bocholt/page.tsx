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
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bocholt 2026" },
  { id: 'polnische-betreuungskraefte-in-bocholt', title: "Polnische Betreuungskräfte in Bocholt" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Westmünsterland" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bocholt ausmacht" },
  { id: 'einzugsgebiet-bocholt', title: "Einzugsgebiet Bocholt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bocholt" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bocholt: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Bocholt: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bocholt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bocholt — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bocholt. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bocholt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bocholt#service',
    name: 'Primundus — 24h-Pflege Bocholt',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bocholt. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bocholt',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bocholt' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bocholt', item: 'https://primundus.de/24h-pflege-bocholt' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bocholt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bocholt starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bocholt rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Bocholt ist flach und fahrradfreundlich — reicht das nicht?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die flache Lage hilft tatsächlich, und die Stadt selbst nennt sie in ihrem Mobilitätskonzept als guten Ausgangspunkt für Barrierefreiheit. In Bocholt werden über 40 Prozent aller Wege mit dem Rad zurückgelegt. Nur ist genau das Verkehrsmittel, das bei Gangunsicherheit, nachlassendem Sehvermögen oder Demenz als Erstes wegfällt — und danach bleibt ein Busangebot, das noch längst nicht durchgehend niederflurig ist. Die Flachheit verschiebt den Zeitpunkt, an dem es allein nicht mehr geht. Aufheben kann sie ihn nicht.' },
      },
      {
        '@type': 'Question',
        name: 'Sind Bocholter Wohnungen für Pflege zu Hause geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: 'In aller Regel ja, barrierefrei sind sie aber selten. Am 22. März 1945 wurde Bocholt in fünfundzwanzig Minuten zu rund 85 Prozent zerstört — in der Altstadt blieben drei Häuser unversehrt. Was heute steht, ist deshalb fast vollständig Wiederaufbau- und Nachkriegsbestand: solide gebaut, aber zu einer Zeit, als niemand an Aufzüge oder bodengleiche Duschen dachte. Für die Betreuungskraft genügt ein eigenes Zimmer.' },
      },
      {
        '@type': 'Question',
        name: 'Kommt eine Betreuungskraft auch in die Bauerschaften und in den Kreis Borken?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, und dort ist der Unterschied am deutlichsten. Bocholt ist die größte Stadt im Kreis Borken, aber nicht die Kreisstadt — das ist Borken selbst. Wer in Barlo, Stenern, Biemenhorst oder Richtung Isselburg und Rhede wohnt, kennt die längeren Wege: Ambulante Dienste fahren dort Touren, und die Termine richten sich nach der Route statt nach Ihrem Tagesablauf. Eine Betreuungskraft im Haus ist davon unabhängig, und Anfahrtskosten berechnen wir nicht.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bocholt bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bocholt und Westmünsterland: Rhede, Borken, Isselburg, Raesfeld und alle Gemeinden im Kreis Borken' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bocholt?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bocholt starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bocholt rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Bocholt ist flach und fahrradfreundlich — reicht das nicht?', a: 'Die flache Lage hilft tatsächlich, und die Stadt selbst nennt sie in ihrem Mobilitätskonzept als guten Ausgangspunkt für Barrierefreiheit. In Bocholt werden über 40 Prozent aller Wege mit dem Rad zurückgelegt. Nur ist genau das Verkehrsmittel, das bei Gangunsicherheit, nachlassendem Sehvermögen oder Demenz als Erstes wegfällt — und danach bleibt ein Busangebot, das noch längst nicht durchgehend niederflurig ist. Die Flachheit verschiebt den Zeitpunkt, an dem es allein nicht mehr geht. Aufheben kann sie ihn nicht.' },
  { q: 'Sind Bocholter Wohnungen für Pflege zu Hause geeignet?', a: 'In aller Regel ja, barrierefrei sind sie aber selten. Am 22. März 1945 wurde Bocholt in fünfundzwanzig Minuten zu rund 85 Prozent zerstört — in der Altstadt blieben drei Häuser unversehrt. Was heute steht, ist deshalb fast vollständig Wiederaufbau- und Nachkriegsbestand: solide gebaut, aber zu einer Zeit, als niemand an Aufzüge oder bodengleiche Duschen dachte. Für die Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Kommt eine Betreuungskraft auch in die Bauerschaften und in den Kreis Borken?', a: 'Ja, und dort ist der Unterschied am deutlichsten. Bocholt ist die größte Stadt im Kreis Borken, aber nicht die Kreisstadt — das ist Borken selbst. Wer in Barlo, Stenern, Biemenhorst oder Richtung Isselburg und Rhede wohnt, kennt die längeren Wege: Ambulante Dienste fahren dort Touren, und die Termine richten sich nach der Route statt nach Ihrem Tagesablauf. Eine Betreuungskraft im Haus ist davon unabhängig, und Anfahrtskosten berechnen wir nicht.' },
  { q: 'Welches Einzugsgebiet wird in Bocholt bedient?', a: 'Bocholt und Westmünsterland: Rhede, Borken, Isselburg, Raesfeld und alle Gemeinden im Kreis Borken' },
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
            { label: 'Bocholt' },
          ]}
          augenbraue="24-Stunden-Pflege in Bocholt"
          titel="24-Stunden-Pflege und Betreuung in Bocholt"
          einleitung={<>In Bocholt hat man sein Haus — in Biemenhorst, Mussum oder stadtnah an der Aa — und dort soll das Leben auch im Alter weitergehen, nicht in einem Heim. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, im ganzen Westmünsterland bis zur niederländischen Grenze. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bocholt auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Bocholt heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.</Text>
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bocholt 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bocholt"
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
            <RechnerKasten src="ort-bocholt" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bocholt" titel="Polnische Betreuungskräfte in Bocholt">
            <Text>Wer in Bocholt nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Bocholt und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Westmünsterland">
            <Text>Unsere Betreuungskräfte ziehen in Bocholt und im Westmünsterland ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bocholt ausmacht">
            <Text>Der Kreis Borken gilt als jung — Bocholt ist es nicht. <strong className="text-pm-ink font-semibold"> Gut sieben Prozent der Bocholter sind über 80</strong>, das ist der höchste Anteil aller siebzehn Kommunen des Kreises und liegt auf dem Niveau von Nordrhein-Westfalen insgesamt. Der Kreisdurchschnitt liegt darunter. Wer also vom „jungen Münsterland" auf die Stadt schließt, unterschätzt, wie viele Hochbetagte hier leben.</Text>
            <Text>Und die Versorgung ist knapp. Im Kreis Borken kommen auf jeden ambulanten Pflegedienst im Schnitt <strong className="text-pm-ink font-semibold">rund 108 Pflegebedürftige</strong> — in Nordrhein-Westfalen sind es 75, im Bund 71. Der Kreis Borken setzt stark auf ambulante Versorgung: Gut ein Viertel aller Pflegebedürftigen wird von einem Dienst betreut, im Land nur knapp ein Sechstel. Entsprechend ausgelastet sind die Dienste. Und der Kreis schreibt in seiner eigenen Pflegebedarfsplanung, dass es schwer sei, hier einen Kurzzeitpflegeplatz zu finden. Wer kurzfristig etwas braucht, merkt das sofort.</Text>
            <Text>Beim Wohnen prägt bis heute der 22. März 1945. In fünfundzwanzig Minuten wurde Bocholt zu rund 85 Prozent zerstört; in der Altstadt blieben drei Häuser unversehrt, und die Einwohnerzahl fiel von 35.000 auf etwa 8.000. In der Statistik zeigt sich das weniger an einem Übergewicht der fünfziger Jahre als am fehlenden Vorkriegsbestand: Nur knapp fünf Prozent der Bocholter Wohnungen stammen aus der Zeit vor 1919, in Nordrhein-Westfalen sind es gut zehn. Dafür ist der Bestand ungewöhnlich großzügig — fast 60 Prozent der Wohnungen liegen in Ein- oder Zweifamilienhäusern, die Eigentümerquote liegt bei über 50 Prozent, und eine Wohnung misst im Schnitt 103 Quadratmeter. Das heißt in der Praxis meist: eigenes Haus, eigene Treppe ins Obergeschoss, viel Fläche, die gepflegt werden will.</Text>
            <Text>Rundherum wird es schnell ländlich. Bocholt ist zwar die größte Stadt im Kreis Borken, aber nicht die Kreisstadt — das ist Borken selbst. Wer in einer der Bauerschaften wohnt, in Barlo, Stenern, Biemenhorst oder Richtung Isselburg und Rhede, kennt die längeren Wege: Ein ambulanter Dienst fährt hier Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft, die im Haus wohnt, ist davon unabhängig. Anfahrtskosten berechnen wir nicht, der Preis ist überall derselbe.</Text>
            <Text>Ein Punkt, der im Ernstfall zählt: Eine geriatrische Fachabteilung gibt es am Bocholter Krankenhaus nicht. Wer nach einem Sturz oder Schlaganfall Altersmedizin braucht, wird nach Borken, Ahaus oder Gronau verlegt. Für die Zeit danach heißt das: Die Versorgung zu Hause sollte früh geklärt sein, nicht erst am Entlassungstag.</Text>
            <Text>Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung im Kreis Borken ist kostenlos, trägerunabhängig und auf Wunsch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bocholt" titel="Einzugsgebiet Bocholt">
            <Text>Bocholt und Westmünsterland: Rhede, Borken, Isselburg, Raesfeld und alle Gemeinden im Kreis Borken</Text>
            <NearbyCities current="bocholt" />
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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bocholt">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
