import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bremerhaven anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bremerhaven | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bremerhaven in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bremerhaven' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bremerhaven | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bremerhaven in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bremerhaven',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bremerhaven?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bremen kostet im Schnitt rund 3.760 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bremerhaven starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bremerhaven?', a: '12.395 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,5 Prozent — in Bremen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bremen: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bremerhaven — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bremerhaven im Schnitt 3,0 Wohnungen, in Bremen 2,5. 55,4 Prozent der Gebäude stehen frei, 31,0 Prozent stehen in geschlossener Reihe. 71,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bremerhaven ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Bremerhaven bedient?', a: 'Bremerhaven und Cuxhaven: Cuxhaven, Geestland, Wurster Nordseeküste und alle Gemeinden im Landkreis Cuxhaven' },
  { q: 'Ist in einer Wohnung in Bremerhaven Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bremerhaven hat im Schnitt 79,1 m², 33,2 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 72,3 % der Gebäude in Bremerhaven sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bremen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.760 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bremerhaven',
  ort: 'Bremerhaven',
  land: 'Bremen',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Geestemünde, Lehe oder Wulsdorf wohnen viele, die ihr Leben lang im Hafen oder auf den Werften gearbeitet haben — und ihren Ruhestand an der Weser verbringen wollen, nicht hinter Heimtüren. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Cuxhaven',
  vorOrt: {
    inhalt: (
      <>
        <Text>Gebäude in geschlossener Reihe sind in Bremerhaven mit 31,0 Prozent seltener als in Bremen (52,9 Prozent). 55,4 Prozent der Gebäude stehen frei, in Bremen 32,3 Prozent — mehr Haus, mehr Platz, mehr Möglichkeiten.</Text>
        <Text>Die Nettokaltmiete liegt bei 5,58 Euro je Quadratmeter, in Bremen bei 7,34 Euro. Wo ein Zimmer fehlt, ist etwas Größeres hier eher erreichbar als anderswo. 5,8 Prozent der Wohnungen stehen leer, in Bremen 3,7 Prozent. Wo ein Zimmer fehlt, ist eine größere Wohnung hier eher zu finden als anderswo.</Text>
        <Text>In Zahlen: 12.395 Menschen in Bremerhaven sind 75 Jahre oder älter, und es gibt 64.777 Wohnungen in 21.765 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bremerhaven und Cuxhaven: Cuxhaven, Geestland, Wurster Nordseeküste und alle Gemeinden im Landkreis Cuxhaven',
  stimmen: ['k-20260803-jurgen', 'k-20260420-torsten'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
