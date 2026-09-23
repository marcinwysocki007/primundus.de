import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Rosenheim anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Rosenheim | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Rosenheim in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-rosenheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Rosenheim | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Rosenheim in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-rosenheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Rosenheim?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Rosenheim starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Rosenheim?', a: '6.751 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,7 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Rosenheim — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Rosenheim im Schnitt 3,1 Wohnungen, in Bayern 2,1. 47,2 Prozent der Gebäude stehen frei, 25,9 Prozent stehen in geschlossener Reihe. 38,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Rosenheim ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Gibt es in Rosenheim eine geriatrische Klinik?', a: 'In der Stadt Rosenheim nicht. Das RoMed Klinikum führt 19 Fachabteilungen, Altersmedizin ist nicht darunter. Das „Zentrum für Akutgeriatrie und Alterstraumatologie der RoMed Kliniken" nennt keinen Ort im Namen und sitzt in Bad Aibling, also im Landkreis; die geriatrische Rehabilitation ebenfalls. Eine Klinik in Bad Aibling bezeichnet sich sogar selbst als „Spezialklinik bei Rosenheim" — verständlich als Werbung, aber irreführend, wenn man einen Weg planen muss. Für eine geriatrische Behandlung geht es also aus der Stadt hinaus. Für die Betreuung zu Hause spielt das keine Rolle, für die Zeit davor schon.' },
  { q: 'Welches Einzugsgebiet wird in Rosenheim bedient?', a: 'Rosenheim und Landkreis Rosenheim: Bad Aibling, Wasserburg, Prien am Chiemsee und alle Gemeinden im Landkreis Rosenheim und Miesbach' },
  { q: 'Ist in einer Wohnung in Rosenheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Rosenheim hat im Schnitt 83,1 m², 30,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 69,7 % der Gebäude in Rosenheim sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'rosenheim',
  ort: 'Rosenheim',
  land: 'Bayern',
  art: 'erzeugt',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Mit den Bergen vor der Tür und dem Inn durch die Stadt ist Rosenheim ein Zuhause, das man nicht freiwillig verlässt — ob in Happing, Aising oder Westerndorf. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Rosenheim',
  vorOrt: {
    inhalt: (
      <>
        <Text>Die Stadt Rosenheim ist kreisfrei — ihre Zahlen haben mit denen des gleichnamigen Landkreises nichts zu tun, und der Unterschied ist gewaltig.{' '} <strong className="text-pm-ink font-semibold">In der Stadt leben 15,1 Prozent der Pflegebedürftigen im Heim, im Landkreis 26,5 Prozent — fast doppelt so viele.</strong>{' '} Bei den Plätzen dasselbe Bild: 32 je 1.000 Einwohner über 65 in der Stadt gegen 57 im Landkreis und 44 in ganz Bayern. Wer über „Rosenheim" liest, sollte deshalb immer prüfen, welches Rosenheim gemeint ist.</Text>
        <Text>Die Entwicklung der letzten Jahre ist in der Stadt besonders scharf.{' '} <strong className="text-pm-ink font-semibold">Zwischen 2019 und 2023 stieg die Zahl der Pflegebedürftigen um 31,6 Prozent — von 1.818 auf 2.393. Im selben Zeitraum sank die Zahl der Heimplätze von 463 auf 421, und die Zahl der ambulanten Dienste ging von 13 auf 11 zurück.</strong> Die ambulanten Dienste versorgten 2023 exakt so viele Menschen wie 2019: 461 gegen 458. Bei 575 zusätzlichen Pflegebedürftigen. Aufgefangen haben das die Familien — das reine Pflegegeld stieg um 40,4 Prozent.</Text>
        <Text>Eine Bewegung geht in die Gegenrichtung: Die Tagespflegeplätze wuchsen von 19 auf 47. Das ist mehr als eine Verdoppelung, bleibt aber eine kleine Zahl gegen 2.393 Pflegebedürftige — und Tagespflege ersetzt keine Nacht.</Text>
        <Text>Zur Altersmedizin ein Hinweis, der überrascht:{' '} <strong className="text-pm-ink font-semibold">In der Stadt Rosenheim gibt es keine geriatrische Fachabteilung.</strong> Das RoMed Klinikum in der Pettenkoferstraße führt 19 Fachabteilungen, Altersmedizin ist nicht darunter. Das „Zentrum für Akutgeriatrie und Alterstraumatologie der RoMed Kliniken" trägt keinen Ortsnamen im Titel und sitzt in Bad Aibling, also im Landkreis; die geriatrische Rehabilitation ebenfalls. Besonders irreführend ist eine Klinik in Bad Aibling, die sich selbst als „Spezialklinik bei Rosenheim" bezeichnet. Für Angehörige heißt das schlicht: Für eine geriatrische Behandlung geht es aus der Stadt hinaus. Lassen Sie sich vorher unabhängig beraten — die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Rosenheim und Landkreis Rosenheim: Bad Aibling, Wasserburg, Prien am Chiemsee und alle Gemeinden im Landkreis Rosenheim und Miesbach',
  stimmen: ['k-20251228-michael', 'k-20250524-iris'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
