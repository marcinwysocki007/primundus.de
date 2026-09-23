import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Pirmasens anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Pirmasens | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Pirmasens in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-pirmasens' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Pirmasens | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Pirmasens in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-pirmasens',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Pirmasens?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Pirmasens starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Kommt eine Betreuungskraft auch in die Orte im Pfälzerwald?', a: 'Ja, und genau dort ist der Unterschied am größten. In Rodalben, Hauenstein, Dahn und den kleineren Gemeinden des Landkreises Südwestpfalz fahren ambulante Dienste lange Touren — die Termine richten sich dann nach der Route, nicht nach Ihrem Tagesablauf. Eine Betreuungskraft, die im Haus wohnt, ist von Fahrplänen unabhängig. Anfahrtskosten berechnen wir nicht, der Preis ist derselbe wie in der Stadt.' },
  { q: 'Was bedeuten die Pirmasenser Steigungen für die Betreuung?', a: 'Sie sind oft der eigentliche Auslöser. Wer in einer der Hanglagen wohnt, schafft irgendwann den Weg zur Haltestelle oder zum Arzt nicht mehr allein — und bleibt dann zu Hause, obwohl gesundheitlich noch mehr möglich wäre. Eine Betreuungskraft übernimmt genau diese Wege: einkaufen, begleiten, Termine organisieren. Das hält Menschen im Alltag, statt sie in der Wohnung zu isolieren.' },
  { q: 'Welches Einzugsgebiet wird in Pirmasens bedient?', a: 'Pirmasens und Zweibrücken sowie Landkreis Südwestpfalz: Rodalben, Hauenstein, Dahn und alle Gemeinden im Landkreis Südwestpfalz' },
  { q: 'Ist in einer Wohnung in Pirmasens Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Pirmasens hat im Schnitt 91,1 m², 22,8 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 72,1 % der Gebäude in Pirmasens sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'pirmasens',
  ort: 'Pirmasens',
  land: 'Rheinland-Pfalz',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Pirmasens hat viele Menschen, die ihr Leben lang hier gearbeitet haben — oft in der Schuhindustrie — und jetzt in den eigenen vier Wänden alt werden möchten, ob in Winzeln, auf der Ruhbank oder in der Innenstadt. Eine Betreuungskraft von Primundus macht das möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Südwestpfalz',
  vorOrt: {
    inhalt: (
      <>
        <Text>Pirmasens ist auf sieben Hügeln gebaut, und das merkt man an jedem Tag, an dem das Gehen schwerer fällt. Was mit gesunden Knien ein Spaziergang ist, wird mit Rollator zur Grenze: die steilen Straßen, die Treppen zwischen den Ebenen, der Weg zur Haltestelle bergauf. Viele ältere Pirmasenser bleiben deshalb irgendwann einfach zu Hause — nicht, weil sie krank wären, sondern weil der Weg nach draußen zu anstrengend geworden ist.</Text>
        <Text>Genau dort beginnt die Vereinsamung, und genau dort setzt eine Betreuung im eigenen Haus an. Eine Betreuungskraft, die mit einzieht, übernimmt die Wege: einkaufen, zum Arzt begleiten, den Haushalt führen. Vor allem aber ist jemand da — morgens, nachts und an dem Nachmittag, an dem sonst niemand vorbeikommt.</Text>
        <Text>Rund um Pirmasens kommt der Pfälzerwald dazu. Wer in Rodalben, Hauenstein oder Dahn lebt, kennt die Entfernungen: Der ambulante Dienst fährt lange Strecken, und die Termine liegen dann, wann sie eben liegen. Eine Betreuungskraft im Haus ist von Touren und Fahrplänen unabhängig — sie ist da, wenn sie gebraucht wird.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie sich entscheiden, lassen Sie sich neutral beraten: Die Pflegestützpunkte in Rheinland-Pfalz beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>,
  },
  einzugsgebiet: 'Pirmasens und Zweibrücken sowie Landkreis Südwestpfalz: Rodalben, Hauenstein, Dahn und alle Gemeinden im Landkreis Südwestpfalz',
  stimmen: ['k-20260802-karin', 'k-20251031-martina'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
