import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Grevenbroich anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Grevenbroich | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Grevenbroich in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-grevenbroich' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Grevenbroich | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Grevenbroich in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-grevenbroich',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Grevenbroich?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Grevenbroich starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Grevenbroich?', a: '6.888 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,6 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Grevenbroich — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Grevenbroich im Schnitt 1,8 Wohnungen, in Nordrhein-Westfalen 2,3. 34,2 Prozent der Gebäude stehen frei, 37,7 Prozent stehen in geschlossener Reihe. 42,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Grevenbroich ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Grevenbroich bedient?', a: 'Grevenbroich und Rhein-Kreis Neuss Mitte: Jüchen, Korschenbroich, Rommerskirchen und alle Gemeinden im mittleren Rhein-Kreis Neuss' },
  { q: 'Ist in einer Wohnung in Grevenbroich Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Grevenbroich hat im Schnitt 99,5 m², 14,3 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 84,3 % der Gebäude in Grevenbroich sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'grevenbroich',
  ort: 'Grevenbroich',
  land: 'Nordrhein-Westfalen',
  art: 'erzeugt',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in Kapellen, Wevelinghoven oder mitten in der Stadt an der Erft: Grevenbroicher wollen im Alter dort bleiben, wo Haus, Garten und Nachbarn sind. Eine Betreuungskraft von Primundus macht das möglich — sie zieht mit ein, führt den Haushalt und ist auch nachts da.</>,
  kreis: 'Rhein-Kreis Neuss',
  vorOrt: {
    inhalt: (
      <>
        <Text>Beim Platz steht Grevenbroich besser da als das Land: Nur 14,3 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Nordrhein-Westfalen sind es 22,4 Prozent. Das Zimmer für eine Betreuungskraft ist hier meist schon vorhanden. Nur 34,2 Prozent der Gebäude stehen frei, in Nordrhein-Westfalen sind es 50,2 Prozent.</Text>
        <Text>Jeder zweite Haushalt in Grevenbroich wohnt im Eigentum — in Nordrhein-Westfalen sind es 40,6 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. Altbau vor 1950 macht in Grevenbroich 12,7 Prozent des Bestands aus, in Nordrhein-Westfalen 19,7 Prozent.</Text>
        <Text>Knapp zwei von fünf Gebäuden in Grevenbroich ist ein Reihenhaus — in Nordrhein-Westfalen 27,2 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Die durchschnittliche Wohnung misst 99,5 Quadratmeter und damit rund 7 Quadratmeter mehr als im Schnitt von Nordrhein-Westfalen (92,7).</Text>
        <Text>In Zahlen: 6.888 Menschen in Grevenbroich sind 75 Jahre oder älter, und es gibt 31.127 Wohnungen in 17.116 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Grevenbroich und Rhein-Kreis Neuss Mitte: Jüchen, Korschenbroich, Rommerskirchen und alle Gemeinden im mittleren Rhein-Kreis Neuss',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
