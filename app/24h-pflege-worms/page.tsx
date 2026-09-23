import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Worms anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
// Snippet neu am 22.09.2026 — die Seite steht auf Position 10,4 und bekommt NULL Klicks.
//
// Zwei Anfragen tragen die ganze Seite, und die staerkere nennt den KREIS:
//   „24 stunden pflege in alzey worms“   Position  8,7   105 Impressionen   0 Klicks
//   „24 stunden pflege in worms“         Position 12,2    96 Impressionen   0 Klicks
// Unsere eigene Kreis-Seite /24h-pflege-alzey-worms hat in 90 Tagen null Impressionen — die
// Stadtseite holt die Kreis-Anfrage. Deshalb steht der Kreis jetzt im Titel.
//
// „polnische Pflegekraefte“ in der MEHRZAHL (Martin, 22.09.): In der Mehrzahl stehen wir auf
// Position 21,2, in der Einzahl auf 51,3. Die Einzahl hat zwar mehr Impressionen, aber auf
// Position 51 sind die wertlos.
//
// Gemessen in Googles Darstellungsgroessen: Titel 555 von 580 px, Beschreibung 782 von 920 px.
// „Auswahl vorab“ ist auf Martins Ansage gestrichen („versteht keiner“). Ein Vorschlag von
// OpenAI, „4,9/5 (126)“ in die Beschreibung zu nehmen, wurde verworfen: Das waere eine feste
// Zahl in der Quelldatei, die irgendwann veraltet im Suchergebnis steht.
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Worms und Alzey-Worms | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Worms in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-worms' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Worms und Alzey-Worms | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Worms in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-worms',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Worms?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Worms starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie ist die Pflege-Versorgung in Worms im Vergleich?', a: 'Angespannt. Auf jeden der elf ambulanten Pflegedienste in Worms kommen im Schnitt rund 110 Pflegebedürftige, landesweit sind es 82 (Pflegestatistik des Statistischen Landesamts Rheinland-Pfalz). Gleichzeitig wird in Worms deutlich häufiger ambulant gepflegt als im Landesschnitt. Der Bedarf ist also hoch und die Kapazität knapp — das merken Familien vor allem dann, wenn sie kurzfristig etwas brauchen. Eine Betreuungskraft, die im Haus lebt, hängt an keiner Tourenplanung.' },
  { q: 'Sind Wormser Innenstadtwohnungen für Pflege zu Hause geeignet?', a: 'Meist ja, barrierefrei sind sie aber selten. Im Februar und März 1945 wurde gut ein Drittel des Wormser Gebäudebestands vollständig zerstört; die Innenstadt entstand danach neu, ein großer Teil der Wohnungen stammt aus den fünfziger Jahren. Solide gebaut, aber zu einer Zeit, als niemand an Aufzüge oder bodengleiche Duschen dachte. Für eine Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Welches Einzugsgebiet wird in Worms bedient?', a: 'Worms und Landkreis Alzey-Worms: Alzey, Osthofen, Monsheim und alle Gemeinden im Landkreis Alzey-Worms' },
  { q: 'Ist in einer Wohnung in Worms Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Worms hat im Schnitt 92,3 m², 22,6 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,4 % der Gebäude in Worms sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'worms',
  ort: 'Worms',
  land: 'Rheinland-Pfalz',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in der Innenstadt nahe dem Dom, in Pfeddersheim oder draußen in Herrnsheim: Die meisten Wormser wollen im Alter dort bleiben, wo sie ihr Leben verbracht haben. Eine Betreuungskraft von Primundus zieht mit ein und macht genau das möglich — bei Bedarf auch nachts da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Alzey-Worms',
  vorOrt: {
    inhalt: (
      <>
        <Text>Worms liegt flach. Zwischen dem tiefsten Punkt bei Ibersheim und der westlichen Stadtgrenze zum Wonnegau liegen keine achtzig Höhenmeter — für jemanden mit Rollator oder Gehstock ist das eine gute Nachricht. Die Schwierigkeiten liegen hier woanders.</Text>
        <Text>Im Februar und März 1945 wurde gut ein Drittel des Wormser Gebäudebestands vollständig zerstört, ein weiteres knappes Drittel beschädigt; rund 15.000 Menschen verloren ihr Zuhause. Was in den Jahren danach entstand, folgte den Plänen für eine aufgelockerte, autogerechte Stadt: breitere Straßen, weniger Enge. Für die Pflege heißt das, dass ein großer Teil der Innenstadtwohnungen aus den fünfziger Jahren stammt — solide gebaut, aber zu einer Zeit, als niemand an Barrierefreiheit dachte. Ein Treppenhaus ohne Aufzug ist dort keine Seltenheit.</Text>
        <Text>Rund um die Kernstadt liegen die gewachsenen Ortsteile: Pfeddersheim, Herrnsheim, Abenheim, Rheindürkheim, Ibersheim. Dort wohnen viele Ältere im eigenen Haus, mit Garten und Treppe ins Obergeschoss. Der Landkreis Alzey-Worms ringsum ist ländlich geprägt, aber nicht menschenleer — die Wege sind länger als in der Stadt, doch nicht so weit wie in Niederbayern.</Text>
        <Text>Eine Zahl erklärt, warum viele Wormser Familien trotzdem nicht weiterkommen: Auf jeden der elf ambulanten Pflegedienste in Worms kommen im Schnitt rund 110 Pflegebedürftige — landesweit sind es 82 (Pflegestatistik des Statistischen Landesamts Rheinland-Pfalz). Die Dienste sind also spürbar stärker ausgelastet als anderswo in Rheinland-Pfalz, und das merkt man, wenn man kurzfristig etwas braucht. Umgekehrt wird in Worms deutlich häufiger ambulant gepflegt als im Landesschnitt. Der Bedarf ist da, die Kapazität knapp. Eine Betreuungskraft, die im Haus lebt, hängt an keiner Tour und übernimmt den Haushalt gleich mit.</Text>
      </>
    ),
    beratungsabsatz: <Text>Wenn Sie zuerst wissen möchten, was Ihnen zusteht: Die Pflegestützpunkte in Rheinland-Pfalz beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI) und gilt unabhängig davon, für welchen Anbieter Sie sich danach entscheiden.</Text>,
  },
  einzugsgebiet: 'Worms und Landkreis Alzey-Worms: Alzey, Osthofen, Monsheim und alle Gemeinden im Landkreis Alzey-Worms',
  stimmen: ['k-20250307-reinhard'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
