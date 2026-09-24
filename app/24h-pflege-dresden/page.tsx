import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Dresden anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Dresden | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dresden in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dresden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Dresden | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dresden in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-dresden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dresden?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Sachsen kostet im Schnitt rund 2.990 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dresden starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Dresden?', a: '69.125 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,4 Prozent — in Sachsen 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen: 29,1 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Dresden — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Dresden im Schnitt 5,1 Wohnungen, in Sachsen 2,7. 52,6 Prozent der Gebäude stehen frei, 29,0 Prozent stehen in geschlossener Reihe. 52,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Dresden ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'In welchen Dresdner Stadtteilen leben die meisten älteren Menschen?', a: 'Der Unterschied ist größer als in jeder anderen Stadt, die wir uns angesehen haben — Faktor sieben. In Johannstadt-Süd sind 36,3 Prozent der Einwohner über 65, in der Äußeren Neustadt 5,4 Prozent. Ebenfalls weit oben: Kleinpestitz/Mockritz mit 35,1 Prozent, Räcknitz/Zschertnitz und Hosterwitz/Pillnitz mit je 31,2 Prozent. Überraschend ist, dass die Plattenbausiedlungen nicht dazugehören: In Gorbitz und Prohlis leben weiterhin mehr Menschen im Erwerbsalter als über 65 — dort hat sich der Wandel als Wegzug ausgewirkt, nicht als Alterung. Unsere Betreuungskräfte kommen in jeden Stadtteil, Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Dresden bedient?', a: 'Dresden und Umland: Pirna, Freital, Radebeul, Meißen, Heidenau und alle Gemeinden im Landkreis Sächsische Schweiz-Osterzgebirge und Meißen' },
  { q: 'Ist in einer Wohnung in Dresden Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dresden hat im Schnitt 71,2 m², 39,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. In Dresden liegen 54,8 % der Wohnungen in Ein- oder Zweifamilienhäusern, der Rest sind Geschosswohnungen — dann zählt, welches Stockwerk und ob es einen Aufzug gibt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.990 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'dresden',
  ort: 'Dresden',
  land: 'Sachsen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Villa in Blasewitz, der Altbau in Striesen, das Häuschen am Elbhang in Loschwitz: Dresdner Zuhause sind zum Bleiben gebaut. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, mit Blick auf die Elbe statt auf Heimflure.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Eine Zahl beschreibt die Dresdner Entwicklung besser als jede andere:{' '} <strong className="text-pm-ink font-semibold">Zwischen 2019 und 2023 stieg die Zahl der Pflegebedürftigen um 49 Prozent — von 29.536 auf 44.141. Die Zahl der Heimplätze sank im selben Zeitraum leicht.</strong> Der gesamte Zuwachs ist in die eigene Wohnung gegangen: Die ambulante Versorgung wuchs um 42 Prozent, die Zahl der allein von Angehörigen versorgten Menschen um 55 Prozent auf 22.850.</Text>
        <Text>Beim Heimangebot selbst ist Dresden unauffällig: 13,1 Prozent der Pflegebedürftigen leben stationär gegenüber 13,7 Prozent in Sachsen, und auch bei den Plätzen je 1.000 Senioren liegt die Stadt nur vier Prozent unter dem Landeswert. Anteil und Angebot zeigen hier ausnahmsweise dasselbe. Der eigentliche Unterschied zu Sachsen liegt woanders: Die Pflegequote beträgt 7,8 Prozent gegenüber 8,9 im Land — Dresden ist schlicht jünger.</Text>
        <Text>Der Stadtdurchschnitt taugt allerdings zu gar nichts.{' '} <strong className="text-pm-ink font-semibold">Zwischen dem ältesten und dem jüngsten Stadtteil liegt der Faktor sieben:</strong> In Johannstadt-Süd sind 36,3 Prozent der Einwohner über 65, in der Äußeren Neustadt 5,4 Prozent. Auch Kleinpestitz/Mockritz (35,1 Prozent), Räcknitz/Zschertnitz und Hosterwitz/Pillnitz (je 31,2) liegen weit oben. Bemerkenswert: Die Plattenbausiedlungen sind es <em>nicht</em>. In Gorbitz und Prohlis leben nach wie vor mehr Menschen im Erwerbsalter als über 65 — dort hat sich der demografische Wandel nicht als Alterung ausgewirkt, sondern als Wegzug. Gorbitz-Nord hat seit 1990 fast die Hälfte seiner Einwohner verloren.</Text>
        <Text>Ein Wort zur Lage: Der Elbhang zwischen Loschwitz und Weißem Hirsch ist bewohntes Villengebiet, und die Standseilbahn, die beide verbindet, überwindet 95 Höhenmeter bei bis zu 29 Prozent Steigung — sie gehört zum regulären Nahverkehr, nicht zum Ausflugsprogramm. Hosterwitz und Pillnitz am selben Hang gehören zu den ältesten Stadtteilen. Dass daraus konkrete Probleme im Pflegealltag folgen, ist plausibel, aber wir haben dafür keinen Beleg gefunden — deshalb steht es hier als Beobachtung, nicht als Befund.</Text>
        <Text>Geriatrisch ist Dresden gut versorgt. Das Krankenhaus St. Joseph-Stift führt die größte Akutgeriatrie der Stadt mit 54 Betten und einer Tagesklinik mit 13 Plätzen. Beim Städtischen Klinikum lohnt der genaue Blick:{' '} <strong className="text-pm-ink font-semibold">Akutgeriatrie und geriatrische Reha sitzen an zwei Standorten rund zehn Kilometer auseinander</strong> — die Akutstation in Neustadt/Trachau, die Reha in Löbtau. Das Sekretariat der Akutgeriatrie sitzt wiederum in Löbtau. Wer der Sekretariatsadresse folgt, landet am falschen Haus. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Dresden und Umland: Pirna, Freital, Radebeul, Meißen, Heidenau und alle Gemeinden im Landkreis Sächsische Schweiz-Osterzgebirge und Meißen',
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
