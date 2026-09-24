import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Mainz anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Mainz | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Mainz in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-mainz' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Mainz | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Mainz in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-mainz',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Mainz?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Mainz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Mainz?', a: '20.287 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,2 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 18,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Mainz — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Mainz im Schnitt 3,6 Wohnungen, in Rheinland-Pfalz 1,7. 41,6 Prozent der Gebäude stehen frei, 39,4 Prozent stehen in geschlossener Reihe. 47,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Mainz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'In welchen Mainzer Stadtteilen leben die meisten älteren Menschen?', a: 'Der Unterschied ist groß: In Drais sind 16,3 Prozent der Einwohner über 75, in der Neustadt 5,1 Prozent — der Faktor drei. Dahinter folgen Lerchenberg (13,4 Prozent), Finthen und Laubenheim (je 11,9). Besonders auffällig ist der Lerchenberg: Dort überwiegen die Hochaltrigen deutlich gegenüber den 65- bis 75-Jährigen — das Muster einer Großwohnsiedlung, deren Erstbezieher gemeinsam alt geworden sind. Unsere Betreuungskräfte kommen in jeden Stadtteil; Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Mainz bedient?', a: 'Mainz und Umland: Wiesbaden, Bingen, Bad Kreuznach, Ingelheim und alle Gemeinden im Landkreis Mainz-Bingen' },
  { q: 'Ist in einer Wohnung in Mainz Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Mainz hat im Schnitt 81,0 m², 36,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 69,4 % der Gebäude in Mainz sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'mainz',
  ort: 'Mainz',
  land: 'Rheinland-Pfalz',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in Gonsenheim, Bretzenheim oder der Oberstadt: Meenzer bleiben ihrer Stadt treu — dem Wochenmarkt, der Fastnacht, dem Blick über den Rhein. Auch mit Pflegebedarf muss das nicht enden: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Mainz hat die niedrigste Pflegeprävalenz in ganz Rheinland-Pfalz — 209 Pflegebedürftige je 1.000 Einwohner über 70 gegenüber 269 im Land. Das ist kein Versorgungserfolg, sondern eine Frage der Altersstruktur: Die Stadt ist jung, 17,9 Prozent der Einwohner sind über 65. Wichtiger als der Durchschnitt ist ohnehin, wo in Mainz alt gewohnt wird — und da{' '} <strong className="text-pm-ink font-semibold">liegt zwischen Drais und der Neustadt der Faktor drei</strong>: In Drais sind 16,3 Prozent der Einwohner über 75, in der Neustadt 5,1 Prozent.</Text>
        <Text>Ein Stadtteil fällt dabei besonders auf. Am Lerchenberg sind 13,4 Prozent über 75, aber nur 9,4 Prozent zwischen 65 und 75 — die Hochaltrigen überwiegen deutlich. Das ist das Muster einer Großwohnsiedlung, deren Erstbezieher gemeinsam alt geworden sind. Dort konzentriert sich Pflegebedarf auf engem Raum, während er in der Neustadt kaum vorkommt.</Text>
        <Text>Was Familien in Mainz zu schaffen macht, ist eine andere Entwicklung: Das Angebot schrumpft.{' '} <strong className="text-pm-ink font-semibold">Von 27 ambulanten Pflegediensten sind noch 23 übrig, von 21 Pflegeheimen noch 19</strong>, und bei der Tagespflege fielen 29 Plätze weg. Gleichzeitig ist der Anteil der Heimversorgung leicht gestiegen. Beides zusammen heißt: Es konkurrieren mehr Menschen um weniger Angebot. Wer sich auf einen ambulanten Dienst verlassen will, sollte das früh klären.</Text>
        <Text>Ein Hinweis zu Zahlen, die kursieren: Die häufig genannten 7.871 Pflegebedürftigen für Mainz enthalten die Gruppe mit Pflegegrad 1 ohne reguläre Leistungen nicht — 2021 waren das allein rund 1.180 Menschen. Wer mit 7.871 rechnet, unterschätzt die tatsächliche Zahl also. Von diesen 7.871 werden 60,5 Prozent allein von Angehörigen versorgt, 19,1 Prozent von einem ambulanten Dienst, 20,4 Prozent leben im Heim.</Text>
        <Text>Medizinisch ist Mainz gut versorgt: Das Marienhaus Klinikum An der Goldgrube führt eine Akutgeriatrie mit 59 Betten und seit August 2023 zusätzlich eine geriatrische Rehabilitation mit 50 Betten im selben Haus. Ein praktischer Hinweis, weil ältere Verweise noch kursieren: Die Akutgeriatrie saß bis 2017 am St. Hildegardis-Krankenhaus und ist seither An der Goldgrube. Lassen Sie sich vorher unabhängig beraten — die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Mainz und Umland: Wiesbaden, Bingen, Bad Kreuznach, Ingelheim und alle Gemeinden im Landkreis Mainz-Bingen',
  stimmen: ['k-20260802-karin', 'k-20251031-martina', 'k-20241121-sonja'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
