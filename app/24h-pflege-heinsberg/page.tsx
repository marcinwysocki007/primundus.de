import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Heinsberg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Heinsberg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Heinsberg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-heinsberg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Heinsberg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Heinsberg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-heinsberg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Heinsberg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Heinsberg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Heinsberg?', a: '4.447 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,4 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Heinsberg — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Heinsberg im Schnitt 1,5 Wohnungen, in Nordrhein-Westfalen 2,3. 56,0 Prozent der Gebäude stehen frei, 19,0 Prozent stehen in geschlossener Reihe. 43,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Heinsberg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Heinsberg bedient?', a: 'Heinsberg und Kreis Heinsberg: Geilenkirchen, Übach-Palenberg, Erkelenz, Hückelhoven und alle Gemeinden im Kreis Heinsberg' },
  { q: 'Ist in einer Wohnung in Heinsberg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Heinsberg hat im Schnitt 106,7 m², 12,9 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 90,8 % der Gebäude in Heinsberg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'heinsberg',
  ort: 'Heinsberg',
  land: 'Nordrhein-Westfalen',
  art: 'erzeugt',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Oberbruch, Dremmen oder draußen im Selfkant: Im westlichsten Zipfel Deutschlands hält man zusammen — und am eigenen Zuhause fest. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Kreis Heinsberg',
  vorOrt: {
    inhalt: (
      <>
        <Text>Die durchschnittliche Wohnung misst 106,7 Quadratmeter und damit rund 14 Quadratmeter mehr als im Schnitt von Nordrhein-Westfalen (92,7). Beim Platz steht Heinsberg besser da als das Land: Nur 12,9 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Nordrhein-Westfalen sind es 22,4 Prozent. Das Zimmer für eine Betreuungskraft ist hier meist schon vorhanden.</Text>
        <Text>Jeder zweite Haushalt in Heinsberg wohnt im Eigentum — in Nordrhein-Westfalen sind es 40,6 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. Gewohnt wird in Heinsberg überwiegend im eigenen Haus: Auf ein Gebäude kommen nur 1,5 Wohnungen, in Nordrhein-Westfalen 2,3. Wo ein Haus steht, ist das Gästezimmer meist schon da — und damit die wichtigste Voraussetzung erfüllt.</Text>
        <Text>9,8 Prozent der Wohnungen wurden nach 2010 gebaut, in Nordrhein-Westfalen 5,8 Prozent — ein vergleichsweise junger Bestand. 37,8 Prozent der Haushalte bestehen aus einer Person, in Nordrhein-Westfalen 43,7 Prozent. Altbau vor 1950 macht in Heinsberg 14,4 Prozent des Bestands aus, in Nordrhein-Westfalen 19,7 Prozent.</Text>
        <Text>In Zahlen: 4.447 Menschen in Heinsberg sind 75 Jahre oder älter, und es gibt 20.762 Wohnungen in 14.114 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Heinsberg und Kreis Heinsberg: Geilenkirchen, Übach-Palenberg, Erkelenz, Hückelhoven und alle Gemeinden im Kreis Heinsberg',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
