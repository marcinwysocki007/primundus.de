import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bad Kissingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Bad Kissingen | Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Kissingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-kissingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Bad Kissingen | Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Kissingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bad-kissingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Kissingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Kissingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Warum ist 24-Stunden-Pflege in Bad Kissingen so häufig ein Thema?', a: 'Weil hier besonders viele hochbetagte Menschen allein leben. Bad Kissingen ist nach dem Landesamt für Statistik die zweitälteste Gemeinde Unterfrankens: Jeder achte Einwohner ist über 80, in Bayern nur jeder fünfzehnte. Dazu kommt, dass fast die Hälfte aller Haushalte Einpersonenhaushalte sind. Wenn dann jemand nach einem Klinikaufenthalt nach Hause kommt, ist niemand da — genau diese Lücke schließt eine Betreuungskraft, die mit einzieht.' },
  { q: 'Es gibt doch so viele Kliniken in Bad Kissingen — reicht das nicht?', a: 'Für die Behandlung ja, für den Alltag danach nicht. Über ein Dutzend Reha-Kliniken und ein Krankenhaus mit eigener Akutgeriatrie sorgen dafür, dass im Landkreis mehr als jeder vierte Beschäftigte in der Gesundheitswirtschaft arbeitet — der höchste Anteil aller bayerischen Kreise. Nur endet all das an der eigenen Wohnungstür. Die Kliniken decken die Wochen ab, in denen behandelt wird, nicht die Monate danach.' },
  { q: 'Welches Einzugsgebiet wird in Bad Kissingen bedient?', a: 'Bad Kissingen und Landkreis Bad Kissingen: Hammelburg, Münnerstadt, Bad Brückenau und alle Gemeinden im Landkreis Bad Kissingen' },
  { q: 'Ist in einer Wohnung in Bad Kissingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Kissingen hat im Schnitt 93,1 m², 22,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 75,0 % der Gebäude in Bad Kissingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bad-kissingen',
  ort: 'Bad Kissingen',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Bad Kissingen kennt sich mit gutem Altwerden aus — Kurgarten, Rosengarten, kurze Wege, Kurtradition seit Generationen. Wenn es allein in der Wohnung am Kurpark oder im Haus in Garitz nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, damit das Zuhause bleibt, was es ist.</>,
  kreis: 'Landkreis Bad Kissingen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Bad Kissingen ist eine der ältesten Städte Bayerns — nach Zahlen des Landesamts für Statistik die zweitälteste Gemeinde Unterfrankens. Das Durchschnittsalter liegt bei gut 49 Jahren gegenüber 44 im Land, fast jeder Dritte ist über 65, und <strong className="text-pm-ink font-semibold">jeder achte Einwohner ist über 80</strong> — in Bayern ist es nur jeder fünfzehnte.</Text>
        <Text>Das liegt übrigens nicht an den Kurgästen, wie oft vermutet wird: Wer im Schnitt sechs Tage bleibt, wird nirgends als Einwohner gezählt. Die gemeldete Bevölkerung ist tatsächlich so alt. Und noch eine Zahl gehört dazu: <strong className="text-pm-ink font-semibold">Fast die Hälfte aller Haushalte sind Einpersonenhaushalte</strong>. Viele hochbetagte Menschen in Bad Kissingen leben also allein — und zwar überwiegend im flachen Talkern, der ältesten Ecke der Stadt, nicht in den höher gelegenen Ortsteilen.</Text>
        <Text>Kaum irgendwo gibt es dabei so viel Gesundheitsversorgung auf engem Raum: über ein Dutzend Reha-Kliniken, dazu das Krankenhaus mit eigener Akutgeriatrie. Im Landkreis arbeitet mehr als jeder vierte Beschäftigte in der Gesundheitswirtschaft — der höchste Anteil aller bayerischen Kreise. Nur endet all das an der eigenen Wohnungstür. Die Kliniken decken die Wochen ab, in denen behandelt wird, nicht die Monate danach. Wer allein lebt und nach einer Reha nach Hause kommt, steht genau vor dieser Lücke — und sie ist es, die eine Betreuungskraft schließt, die mit einzieht.</Text>
        <Text>Bevor Sie sich entscheiden, lassen Sie sich neutral beraten: Die Fachstellen für Pflege- und Behindertenberatung in Bayern beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause (§ 7a SGB XI). Dazu kommt das bayerische Landespflegegeld von 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bad Kissingen und Landkreis Bad Kissingen: Hammelburg, Münnerstadt, Bad Brückenau und alle Gemeinden im Landkreis Bad Kissingen',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
