import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bayreuth anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bayreuth | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bayreuth in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bayreuth' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bayreuth | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bayreuth in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bayreuth',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bayreuth?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bayreuth starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wir pflegen im Landkreis bisher selbst — ist eine Betreuungskraft trotzdem sinnvoll?', a: 'Gerade dann. Im Landkreis Bayreuth wird fast die Hälfte der Menschen mit Pflegegrad 5 zu Hause versorgt statt im Heim — und zwei Drittel der ambulanten Dienste im Landkreis führen inzwischen eine Warteliste, neun von zehn haben offene Stellen. Diese Last tragen die Angehörigen. Eine Betreuungskraft ersetzt Sie nicht, sie übernimmt die Dauerbelastung: Nächte, Wochenenden, die Stunden dazwischen. Pflegegeld und Betreuung lassen sich dabei kombinieren.' },
  { q: 'Kommt eine Betreuungskraft auch in die Orte im Landkreis Bayreuth?', a: 'Ja, und dort ist der Unterschied besonders groß. Der Landkreis Bayreuth zählt nur rund 81 Einwohner je Quadratkilometer und gehört damit zu den am dünnsten besiedelten Bayerns. Ambulante Dienste fahren entsprechend lange Touren, und die Termine richten sich nach der Route statt nach Ihrem Tagesablauf. Eine Betreuungskraft, die im Haus wohnt, braucht keine Anfahrt. Der Preis ist im Landkreis derselbe wie in der Stadt, Anfahrtskosten berechnen wir nicht.' },
  { q: 'Wo bekomme ich in Bayreuth unabhängige Beratung?', a: 'Seit Juli 2025 gibt es in Bayreuth einen eigenen Pflegestützpunkt, getragen von Stadt, Bezirk Oberfranken und den Pflegekassen. Die Beratung ist kostenlos, unabhängig von Anbietern und auf Wunsch bei Ihnen zu Hause — dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI). Für pflegende Angehörige besteht zusätzlich eine eigene Fachstelle. Wir empfehlen ausdrücklich, dieses Angebot zu nutzen, bevor Sie sich für einen Weg entscheiden.' },
  { q: 'Welches Einzugsgebiet wird in Bayreuth bedient?', a: 'Bayreuth und Landkreis Bayreuth: Pegnitz, Creußen, Hollfeld und alle Gemeinden im Landkreis Bayreuth und Kulmbach' },
  { q: 'Ist in einer Wohnung in Bayreuth Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bayreuth hat im Schnitt 82,8 m², 37,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 69,3 % der Gebäude in Bayreuth sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bayreuth',
  ort: 'Bayreuth',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in der Gartenstadt, in St. Georgen oder draußen in Bindlach: Wer in Bayreuth alt geworden ist, will die Festspielstadt und das eigene Zuhause nicht verlassen. Muss auch niemand — eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, in der Stadt und im ganzen Umland. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Bayreuth',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Bayreuth leben auffällig viele Menschen allein. Nach dem Zensus sind <strong className="text-pm-ink font-semibold"> 55 Prozent aller Haushalte in der Stadt Einpersonenhaushalte</strong> — im Landkreis sind es 35 Prozent. Das erklärt sich teilweise durch die Universität, aber eben nicht nur: Auch ein großer Teil der über 16.000 Bayreutherinnen und Bayreuther über 65 wohnt für sich. Wenn dann etwas passiert, ein Sturz, ein Krankenhausaufenthalt, eine Diagnose, ist niemand im Haus, der den Alltag auffängt.</Text>
        <Text>Beim Blick in die Pflegestatistik trennen sich Stadt und Landkreis dann deutlich. In der Stadt Bayreuth leben <strong className="text-pm-ink font-semibold">26,8 Prozent aller Pflegebedürftigen im Heim</strong> — in Bayern sind es 17,6 Prozent. Auf 1.000 Einwohner über 65 kommen hier 82 Heimplätze, im Land nur 44. Bayreuth ist damit eine der am stärksten heimgeprägten Städte Bayerns. Im Landkreis ist es genau umgekehrt: Dort werden fast die Hälfte der Menschen mit Pflegegrad 5 zu Hause versorgt statt stationär. Dahinter stehen Familien, die das über Jahre allein stemmen.</Text>
        <Text>Dass das so ist, hat auch mit den Entfernungen zu tun. Die Stadt Bayreuth kommt auf gut 1.000 Einwohner je Quadratkilometer, der Landkreis auf 81 — er ist einer der am dünnsten besiedelten Bayerns. Ein ambulanter Dienst, der Pegnitz, Bad Berneck und die Dörfer dazwischen bedienen soll, fährt lange Touren, und die Termine richten sich nach der Route. Dazu kommt: Die Wohnungen im Landkreis sind mit durchschnittlich 114 Quadratmetern deutlich größer als in der Stadt mit 78 — meist Einfamilienhäuser mit Treppe, Garten und allem, was gepflegt werden will.</Text>
        <Text>Genau an dieser Stelle setzt eine Betreuungskraft an, die mit einzieht. Sie ersetzt die Angehörigen nicht, sondern nimmt ihnen die Dauerbelastung ab: nachts, an Wochenenden und in den Stunden, in denen sonst niemand da wäre. Sie ist von keiner Tourenplanung abhängig, weil sie im Haus wohnt. Und sie führt den Haushalt mit — was gerade in einem großen Haus den Unterschied macht.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie etwas entscheiden, lassen Sie sich unabhängig beraten. In Bayreuth gibt es seit Juli 2025 einen eigenen Pflegestützpunkt, getragen von Stadt, Bezirk und den Pflegekassen; die Beratung ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI). Für pflegende Angehörige gibt es zusätzlich eine eigene Fachstelle. Und in Bayern kommt das Landespflegegeld hinzu: 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>,
  },
  einzugsgebiet: 'Bayreuth und Landkreis Bayreuth: Pegnitz, Creußen, Hollfeld und alle Gemeinden im Landkreis Bayreuth und Kulmbach',
  stimmen: ['k-20250708-helga'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
