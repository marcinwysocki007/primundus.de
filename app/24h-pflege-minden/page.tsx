import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Minden anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Minden | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Minden in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-minden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Minden | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Minden in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-minden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Minden?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Minden starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Minden?', a: '9.423 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Minden — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Minden im Schnitt 2,0 Wohnungen, in Nordrhein-Westfalen 2,3. 74,6 Prozent der Gebäude stehen frei, 12,4 Prozent stehen in geschlossener Reihe. 57,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Minden ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Gibt es in Minden eine Klinik für Altersmedizin?', a: 'Ja, und eine ungewöhnlich gute: Das Johannes Wesling Klinikum führt eine Universitätsklinik für Geriatrie — Altersmedizin auf Universitätsniveau findet man sonst in Großstädten. Träger sind die Mühlenkreiskliniken. Ein Hinweis, weil derselbe Träger mehrere Häuser betreibt: Geriatrie gibt es auch in Lübbecke und Bad Oeynhausen; die Universitätsklinik steht in Minden. Für die Zeit nach der Entlassung ändert das allerdings nichts an der eigentlichen Frage — wer zu Hause da ist, wenn es allein nicht mehr geht.' },
  { q: 'Welches Einzugsgebiet wird in Minden bedient?', a: 'Minden und Kreis Minden-Lübbecke: Porta Westfalica, Lübbecke, Bad Oeynhausen, Petershagen und alle Gemeinden im Kreis Minden-Lübbecke' },
  { q: 'Ist in einer Wohnung in Minden Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Minden hat im Schnitt 98,9 m², 16,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 81,7 % der Gebäude in Minden sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'minden',
  ort: 'Minden',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Rechts oder links der Weser, in Rodenbeck oder draußen in Todtenhausen: Mindener wohnen bodenständig — oft seit Jahrzehnten im selben Haus. Eine Betreuungskraft von Primundus sorgt dafür, dass das so bleibt: Sie zieht mit ein, übernimmt den Haushalt und ist auch nachts da.</>,
  kreis: 'Kreis Minden-Lübbecke',
  vorOrt: {
    inhalt: (
      <>
        <Text>Für eine Stadt dieser Größe hat Minden etwas Ungewöhnliches:{' '} <strong className="text-pm-ink font-semibold">eine Universitätsklinik für Geriatrie</strong> am Johannes Wesling Klinikum. Altersmedizin auf Universitätsniveau findet man sonst in Großstädten. Ein Hinweis, weil der Träger mehrere Häuser betreibt: Geriatrie gibt es auch in Lübbecke und Bad Oeynhausen — die Universitätsklinik steht in Minden.</Text>
        <Text>Die Pflegezahlen gibt es in Nordrhein-Westfalen nur für den Kreis, nicht für die Stadt. Sie zeichnen ein klares Bild: Im Kreis Minden-Lübbecke sind 21.351 Menschen pflegebedürftig, das sind 6,8 Prozent der Einwohner gegenüber 7,6 Prozent im Land — deutlich weniger. Innerhalb dieser kleineren Gruppe wird aber häufiger professionell versorgt.{' '} <strong className="text-pm-ink font-semibold">Nur 52,6 Prozent beziehen ausschließlich Pflegegeld, werden also allein von Angehörigen versorgt; in Nordrhein-Westfalen sind es 59,0 Prozent.</strong> Ambulante Dienste kommen häufiger zum Einsatz (19,1 gegen 17,3 Prozent), und auch der Heimanteil liegt höher (15,3 gegen 12,2). Familien tragen hier also seltener alles allein — was gut ist, solange die Hilfe verfügbar bleibt.</Text>
        <Text>Im Alltag spielt die Weser eine Rolle, und zwar die entscheidende: Sie durchschneidet die Stadt, Minden liegt auf beiden Ufern. Wer einen ambulanten Dienst braucht, hängt an den Brücken — für eine Betreuungskraft, die im Haushalt wohnt, ist das kein Thema. Zur oft genannten Höhenspanne von über 230 Metern eine ehrliche Einordnung: Der höchste Punkt liegt auf dem bewaldeten Kamm des Wiehengebirges und ist nicht bewohnt. Die Wohnbebauung von Häverstädt, Dützen und Haddenhausen liegt am Fuß des Gebirges.</Text>
        <Text>In Minden selbst leben 19.107 Menschen über 65, das sind 22,7 Prozent der Einwohner (Nordrhein-Westfalen: 22,0). Ob eine Betreuungskraft bei Ihnen einziehen kann, hängt am Grundriss — notwendig ist ein eigenes, abschließbares Zimmer. Das klären wir vorab am Telefon. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Minden und Kreis Minden-Lübbecke: Porta Westfalica, Lübbecke, Bad Oeynhausen, Petershagen und alle Gemeinden im Kreis Minden-Lübbecke',
  stimmen: ['k-20250103-nils'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
