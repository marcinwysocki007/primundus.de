import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Sindelfingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Sindelfingen | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Sindelfingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-sindelfingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Sindelfingen | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Sindelfingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-sindelfingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Sindelfingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Sindelfingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Sindelfingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Sindelfingen im Schnitt 3,2 Wohnungen, in Baden-Württemberg 2,1. 46,7 Prozent der Gebäude stehen frei, 31,1 Prozent stehen in geschlossener Reihe. 41,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Sindelfingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Sindelfingen?', a: '6.794 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Spricht die Betreuungskraft die Sprache, die zu Hause gesprochen wird?', a: 'In Sindelfingen ist das eine der häufigsten Fragen, und das aus gutem Grund: Laut städtischem Sozialbericht haben 52 Prozent der Einwohner einen Migrationshintergrund, die Stadt zählt Menschen aus 118 Nationen — viele davon kamen für das Mercedes-Werk und sind heute hochbetagt. Unsere Betreuungskräfte kommen aus Polen. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto. Bei anderen Herkunftssprachen sagen wir Ihnen ehrlich, was wir leisten können und was nicht — lieber vorher als hinterher.' },
  { q: 'Welches Einzugsgebiet wird in Sindelfingen bedient?', a: 'Sindelfingen und Landkreis Böblingen: Böblingen, Leonberg, Herrenberg, Holzgerlingen, Weil der Stadt und alle Gemeinden im Landkreis Böblingen' },
  { q: 'Ist in einer Wohnung in Sindelfingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Sindelfingen hat im Schnitt 89,3 m², 20,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 72,3 % der Gebäude in Sindelfingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'sindelfingen',
  ort: 'Sindelfingen',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ein Arbeitsleben im Werk, ein Haus in Maichingen oder Darmsheim, ein Garten für die Enkel: So sieht der Ruhestand vieler Sindelfinger aus — und so soll er bleiben. Eine Betreuungskraft von Primundus zieht mit ein, wenn Hilfe nötig wird, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Böblingen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Sindelfingen altert anders als sein Umland, und der Grund liegt im Werk. Rund 25.000 Menschen arbeiten im Mercedes-Benz-Werk, eine der zehn größten Fabriken der Welt. Die Generation, die dafür in den sechziger und siebziger Jahren hergekommen ist, ist heute hochbetagt. Man sieht es in den Zahlen:{' '} <strong className="text-pm-ink font-semibold">7,5 Prozent der Sindelfinger sind über 80 — mehr als im Landkreis Böblingen (7,1) und mehr als in Baden-Württemberg (6,9)</strong> —, während der Anteil der 65- bis 79-Jährigen unter beiden Werten liegt. Die Stadt hat also nicht mehr Ältere, sondern mehr sehr Alte. Von allen über 75-Jährigen im Landkreis leben 17 Prozent in Sindelfingen, der größte Einzelanteil aller 26 Kommunen.</Text>
        <Text>Dazu gehört ein zweiter Befund. Laut städtischem Sozialbericht haben 52 Prozent der Einwohner einen Migrationshintergrund, die Stadt zählt Menschen aus 118 Nationen. Sprache und Gewohnheiten sind bei einer Betreuungskraft, die im Haushalt lebt, deshalb kein Nebenthema — es ist die Frage, an der es steht und fällt. Das Sprachniveau jeder Kraft steht bei uns vorab im Profil, zusammen mit Erfahrung und Foto. Sie sehen, wen Sie bekommen, bevor Sie sich festlegen.</Text>
        <Text>Heimplätze sind in Sindelfingen rechnerisch ausreichend vorhanden: 535 Plätze in der stationären Dauerpflege, womit der Kreispflegeplan den Bedarf für 2035 als exakt gedeckt ausweist — anders als für den Landkreis insgesamt, wo eine Lücke prognostiziert wird. Bemerkenswert dabei:{' '} <strong className="text-pm-ink font-semibold">70,4 Prozent der Heimbewohner in Sindelfingen stammen aus der Stadt selbst</strong>, im Kreisschnitt sind es 59,4 Prozent. Wer hier ins Heim geht, bleibt meist am Ort. Im Landkreis Böblingen werden 53,9 Prozent aller Pflegebedürftigen allein von Angehörigen versorgt, etwas weniger als in Baden-Württemberg mit 55,9 Prozent; ambulante Dienste sind mit 19,1 Prozent dagegen stärker vertreten als im Land (16,4).</Text>
        <Text>Einen Punkt sagen wir offen, weil er Wege kostet: Eine eigenständige, bettenführende geriatrische Abteilung ist am Klinikum Sindelfingen nicht nachweisbar — der Klinikverbund führt hier eine Altersmedizin ohne eigene Betten und eine geriatrische Institutsambulanz. Die ambulante geriatrische Reha des Verbunds sitzt inzwischen in <strong className="text-pm-ink font-semibold"> Böblingen</strong>, nicht mehr in Sindelfingen; ältere Adressangaben führen in die Irre. Nach einem Krankenhausaufenthalt heißt das: Der Weg zur Anschlussbehandlung führt aus der Stadt heraus — und umso mehr zählt, dass zu Hause jemand da ist. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Sindelfingen und Landkreis Böblingen: Böblingen, Leonberg, Herrenberg, Holzgerlingen, Weil der Stadt und alle Gemeinden im Landkreis Böblingen',
  stimmen: ['k-20241224-ursula'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
