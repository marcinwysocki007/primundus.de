import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Pforzheim anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Pforzheim und Enzkreis | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Pforzheim in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-pforzheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Pforzheim und Enzkreis | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Pforzheim in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-pforzheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Pforzheim?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Pforzheim starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Was bedeuten die Pforzheimer Höhenunterschiede für die Betreuung?', a: 'Zwischen dem tiefsten und dem höchsten Punkt der Stadt liegen rund 370 Höhenmeter. Die Innenstadt sitzt unten in den Talsohlen am Zusammenfluss von Enz, Nagold und Würm, große Teile des Stadtgebiets liegen mehrere hundert Meter darüber. Wer am Hang wohnt, für den beginnt jeder Weg mit einer Steigung — auch der zur Bushaltestelle. Eine Betreuungskraft übernimmt genau diese Wege und macht das Wohnenbleiben damit erst praktikabel.' },
  { q: 'Sind Pforzheimer Wohnungen aus der Nachkriegszeit für Pflege geeignet?', a: 'Meist ja, aber selten barrierefrei. Nach der Zerstörung von 1945 stammt knapp die Hälfte des Wohnungsbestands aus den Jahren 1949 bis 1978. Diese Häuser sind solide gebaut, entstanden aber lange vor jedem Gedanken an Barrierefreiheit — schmale Treppenhäuser ohne Aufzug gehören dazu. Für eine Betreuungskraft reicht ein eigenes Zimmer; die eigentliche Erleichterung liegt darin, dass jemand da ist und die Wege nach draußen übernimmt.' },
  { q: 'Welches Einzugsgebiet wird in Pforzheim bedient?', a: 'Pforzheim und Enzkreis: Mühlacker, Neuenbürg, Birkenfeld und alle Gemeinden im Enzkreis und Landkreis Calw' },
  { q: 'Ist in einer Wohnung in Pforzheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Pforzheim hat im Schnitt 85,4 m², 27,6 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 64,8 % der Gebäude in Pforzheim sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'pforzheim',
  ort: 'Pforzheim',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Goldstadt lässt ihre Menschen nicht los: Wer in Brötzingen, auf dem Buckenberg oder in Huchenfeld sein Haus hat, will es im Alter nicht gegen ein Heimzimmer tauschen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da — zwischen Enz und Schwarzwaldrand, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Enzkreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Zwischen dem tiefsten und dem höchsten Punkt Pforzheims liegen rund 370 Höhenmeter. Die Innenstadt sitzt unten in den Talsohlen, wo Enz, Nagold und Würm zusammenkommen; Büchenbronn und die Hochflächen liegen mehrere hundert Meter darüber. Deshalb erlebt jeder Pforzheimer seine Stadt anders, sobald das Gehen schwerfällt — je nachdem, ob er unten im Tal wohnt oder oben am Hang, wo schon der Weg zur Bushaltestelle eine Steigung ist.</Text>
        <Text>Beim Wohnen prägt bis heute der 23. Februar 1945 das Bild. In 22 Minuten wurden fast das gesamte Zentrum und vier Fünftel des Stadtgebiets zerstört. Was danach entstand, stammt überwiegend aus den Jahren 1949 bis 1978 — knapp die Hälfte aller Wohngebäude. Diese Häuser sind stabil und solide, aber sie wurden lange vor jedem Gedanken an Barrierefreiheit gebaut. Schmale Treppenhäuser ohne Aufzug und Bäder mit hoher Wannenkante gehören bei diesem Baualter oft dazu.</Text>
        <Text>Rund um die Stadt liegt der Enzkreis wie ein nach Süden geöffneter Ring — verwaltet von Pforzheim aus, aber ein eigener Raum, und ein deutlich älterer: Das Medianalter liegt dort bei 46 Jahren gegenüber 41 in der Stadt. Wer in Mühlacker, Neuenbürg oder Birkenfeld lebt, hat zudem längere Wege zu allem. Eine Betreuungskraft, die mit einzieht, ist von diesen Entfernungen unabhängig — und von den Höhenmetern zwischen Wohnung und Bushaltestelle ebenso.</Text>
      </>
    ),
    beratungsabsatz: <Text>Verschaffen Sie sich zuerst einen neutralen Überblick: Die Pflegestützpunkte in Baden-Württemberg beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich geregelt (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>,
  },
  einzugsgebiet: 'Pforzheim und Enzkreis: Mühlacker, Neuenbürg, Birkenfeld und alle Gemeinden im Enzkreis und Landkreis Calw',
  stimmen: ['k-20250118-sebastian'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
