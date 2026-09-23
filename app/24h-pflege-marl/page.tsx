import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Marl anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Marl | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Marl in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-marl' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Marl | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Marl in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-marl',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Marl?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Marl starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Marl?', a: '9.493 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,1 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Marl — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Marl im Schnitt 2,2 Wohnungen, in Nordrhein-Westfalen 2,3. 31,8 Prozent der Gebäude stehen frei, 35,1 Prozent stehen in geschlossener Reihe. 57,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Marl ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele Heimplätze sind in Marl frei?', a: 'Fast keine. Von den 1.014 Pflegeplätzen in Marl waren im Frühjahr 2023 sieben frei — 0,7 Prozent. Kreisweit standen nominell 483 Plätze leer, tatsächlich belegbar waren davon 47; der Rest hing an Umbauten, Doppelzimmerabbau und Belegungsstopps. Der Kreis Recklinghausen hat mit 85,5 Pflegebedürftigen je 1.000 Einwohner die höchste Pflegequote aller achtzehn Kreise in Westfalen-Lippe, und die Kreisplanung erwartet für Marl bis 2040 eine Lücke von rund 111 Plätzen. Wer heute plant, sollte nicht mit einem kurzfristig verfügbaren Heimplatz rechnen.' },
  { q: 'Welches Einzugsgebiet wird in Marl bedient?', a: 'Marl und Umland: Recklinghausen, Haltern am See, Oer-Erkenschwick, Datteln, Dorsten und alle Gemeinden im Kreis Recklinghausen' },
  { q: 'Ist in einer Wohnung in Marl Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Marl hat im Schnitt 87,7 m², 22,1 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 77,7 % der Gebäude in Marl sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'marl',
  ort: 'Marl',
  land: 'Nordrhein-Westfalen',
  art: 'erzeugt',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Hüls, Brassert oder Sinsen: Viele Marler haben ihr Arbeitsleben im Chemiepark verbracht — der Ruhestand gehört ins eigene Haus, nicht ins Heim. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Eine Zahl beschreibt die Lage in Marl besser als jede Prozentangabe:{' '} <strong className="text-pm-ink font-semibold">Von den 1.014 Pflegeplätzen in der Stadt waren im Frühjahr 2023 genau sieben frei.</strong> Das sind 0,7 Prozent. Kreisweit standen nominell 483 Plätze leer — tatsächlich belegbar waren davon 47, der Rest hing an Umbauten, Doppelzimmerabbau und Belegungsstopps. Bei 97 Prozent Auslegung gilt ein Heim als voll.</Text>
        <Text>Der Kreis Recklinghausen hat dabei{' '} <strong className="text-pm-ink font-semibold">mit 85,5 Pflegebedürftigen je 1.000 Einwohner die höchste Pflegequote aller achtzehn Kreise in Westfalen-Lippe</strong>{' '} (Nordrhein-Westfalen: 76,3). Und die stationäre Versorgung schrumpft: Zwischen 2019 und 2023 stieg die Zahl der ambulant versorgten Menschen um 19,6 Prozent, die der stationär versorgten sank um 1,8 Prozent. Die Kreisplanung rechnet für Marl vor, dass 2040 rund 111 Plätze fehlen werden und 2050 rund 253 — und sie rechnet dabei noch mit der Bevölkerung vor dem Zensus 2022, ist also eher vorsichtig.</Text>
        <Text>Marl veröffentlicht als eine der wenigen Städte Einwohnerzahlen je Statistikbezirk, und das Bild innerhalb der Stadt ist sehr uneinheitlich:{' '} <strong className="text-pm-ink font-semibold">In Polsum sind 32,1 Prozent der Einwohner über 65, in Drewer-Nord 16,6 Prozent</strong> — 15,5 Prozentpunkte Unterschied, Alt-Marl liegt mit 29,9 Prozent knapp hinter Polsum.</Text>
        <Text>Naheliegend wäre die Vermutung, dass die alten Zechensiedlungen die ältesten Quartiere sind. Das stimmt nur zum Teil, und wir sagen es lieber genau: Der Bezirk der Siedlung Auguste Victoria in Hüls-Nord — benannt nach der Zeche, die am 18. Dezember 2015 als drittletzte Steinkohlezeche Deutschlands schloss — liegt mit 35,3 Prozent über 65 auf dem dritten Platz der Stadt. Die Zollvereinsiedlung in Marl-Hamm dagegen kommt auf 17,9 Prozent und liegt damit unter dem Stadtdurchschnitt. Ein durchgängiges Muster ist es also nicht.</Text>
        <Text>Geriatrisch ist Marl gut versorgt, auch wenn der Name in die Irre führt:{' '} <strong className="text-pm-ink font-semibold">Die Klinik für Geriatrie und geriatrische Frührehabilitation liegt am Lipper Weg in Marl</strong> und behandelt rund 1.150 Menschen stationär im Jahr, dazu kommt ein Zentrum für Alterstraumatologie am selben Standort. Der Träger heißt allerdings nach dem Vest Recklinghausen, und das größere Haus des Verbunds steht in Recklinghausen — wer nach dem Verbundnamen sucht, landet leicht in der falschen Stadt. Hinzu kommt, dass das Haus in Marl zweimal umbenannt wurde und in älteren Verzeichnissen noch unter dem früheren Namen steht.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Marl und Umland: Recklinghausen, Haltern am See, Oer-Erkenschwick, Datteln, Dorsten und alle Gemeinden im Kreis Recklinghausen',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
