import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Aalen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Aalen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Aalen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-aalen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Aalen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Aalen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-aalen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Aalen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Aalen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Aalen?', a: '7.427 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,1 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Aalen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Aalen im Schnitt 2,0 Wohnungen, in Baden-Württemberg 2,1. 72,7 Prozent der Gebäude stehen frei, 10,8 Prozent stehen in geschlossener Reihe. 44,5 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Aalen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Was ist mit Kurzzeitpflege in Aalen, wenn ich selbst ausfalle?', a: 'Das ist in Aalen der wundeste Punkt. Die Zahl der Kurzzeitpflegeplätze in der Stadt ist von 40 im Jahr 2022 auf 22 im Jahr 2024 gefallen, also fast halbiert. Genau diese Plätze braucht man aber, wenn die pflegende Tochter selbst operiert wird oder zwei Wochen wegmuss. Bei einer Betreuung im Haushalt stellt sich die Frage anders: Fällt Ihre Betreuungskraft aus, stellen wir Ersatz, ohne dass für den Wechsel selbst etwas berechnet wird — es fallen lediglich die An- und Abreisekosten der neuen Kraft an. Ein Heimplatz muss dafür nicht gesucht werden.' },
  { q: 'Welches Einzugsgebiet wird in Aalen bedient?', a: 'Aalen und Ostalbkreis: Schwäbisch Gmünd, Ellwangen, Bopfingen, Heidenheim und alle Gemeinden im Ostalbkreis' },
  { q: 'Ist in einer Wohnung in Aalen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Aalen hat im Schnitt 97,6 m², 17,9 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 83,6 % der Gebäude in Aalen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'aalen',
  ort: 'Aalen',
  land: 'Baden-Württemberg',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in Wasseralfingen, Unterkochen oder Fachsenfeld: Auf der Ostalb hält man an Haus und Hof fest — oft über Generationen. Eine Betreuungskraft von Primundus sorgt dafür, dass das Alter daran nichts ändert: Sie zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Ostalbkreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Der Ostalbkreis ist ein gutes Beispiel dafür, dass ein hoher Heim-Anteil nicht viele Heimplätze bedeutet.{' '} <strong className="text-pm-ink font-semibold">16,6 Prozent der Pflegebedürftigen leben hier im Heim, in Baden-Württemberg sind es 14,9 Prozent — bei den Plätzen je 1.000 Einwohner über 65 liegt der Kreis mit 43,8 aber nur im Landesschnitt (42,9).</strong>{' '} Der hohe Anteil kommt also nicht von einem großzügigen Angebot. Dazu passt die auffällig niedrige ambulante Quote: 13,1 Prozent gegen 16,4 Prozent im Land.</Text>
        <Text>Für die Stadt Aalen rechnet der Kreis in seiner Pflegebedarfsplanung selbst vor, wohin das führt.{' '} <strong className="text-pm-ink font-semibold">Bis 2035 sinkt der Platzbestand im Ostalbkreis von 2.938 auf 2.841 — vor allem, weil Doppelzimmer wegfallen müssen — während der Bedarf auf 3.340 steigt. 499 Plätze Lücke, in 31 von 42 Kommunen.</strong>{' '} Für Aalen selbst sind es 19 Plätze, für den Planungsraum Aalen 90. Die Zahl der Pflegebedürftigen im Kreis hat sich zwischen 2001 und 2021 mehr als verdoppelt und ist seither noch einmal um 12,8 Prozent gestiegen — der Wert von 2023 liegt bereits über dem, was für 2030 vorhergesagt war.</Text>
        <Text>Am härtesten trifft Angehörige eine andere Entwicklung:{' '} <strong className="text-pm-ink font-semibold">Die Kurzzeitpflegeplätze in Aalen sind von 40 im Jahr 2022 auf 22 im Jahr 2024 gefallen — fast halbiert.</strong> Kurzzeitpflege ist genau das, was häusliche Pflege überhaupt tragfähig macht: der Platz für die zwei Wochen, in denen die pflegende Tochter selbst im Krankenhaus liegt. Auch bei der Tagespflege liegt Aalen mit 2,9 Plätzen je 1.000 Ältere unter dem Kreiswert von 5,5, obwohl die Stadt das Zentrum ist.</Text>
        <Text>Aalen erstreckt sich über 18 mal 25 Kilometer, und die Teilorte liegen auf sehr verschiedenen Höhen: Die Rathäuser von Ebnat und Waldhausen stehen auf 613 und 611 Metern, rund 180 Meter über dem Marktplatz der Kernstadt auf 430 Metern — sie sitzen oben auf dem Albuch, während Aalen selbst im Kochertal liegt. Auf die Alterung wirkt sich das interessanterweise nicht aus: Waldhausen ist mit 20,8 Prozent über 65 einer der jüngsten Stadtbezirke. Überhaupt ist Aalen kleinräumig sehr ausgeglichen — zwischen Dewangen (24,5 Prozent) und Unterkochen (20,8) liegen nur 3,7 Prozentpunkte.</Text>
        <Text>Bei der Altersmedizin steht Aalen ungewöhnlich gut da:{' '} <strong className="text-pm-ink font-semibold">Das Ostalb-Klinikum deckt Akutgeriatrie (12 Betten), stationäre geriatrische Rehabilitation (45 Betten) und eine geriatrische Tagesklinik am selben Standort ab.</strong> Diese vollständige Kette an einem Ort ist selten — in vielen Städten liegen Akutstation und Reha zehn oder zwanzig Kilometer auseinander. Ein Hinweis dennoch: Die Reha wird von einer rechtlich eigenständigen Gesellschaft betrieben, weshalb manche Verzeichnisse sie als separates Haus führen.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Aalen und Ostalbkreis: Schwäbisch Gmünd, Ellwangen, Bopfingen, Heidenheim und alle Gemeinden im Ostalbkreis',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
