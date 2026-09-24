import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Gärtringen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Gärtringen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Gärtringen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-gaertringen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Gärtringen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Gärtringen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-gaertringen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Gärtringen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Gärtringen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Gärtringen?', a: '1.317 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Gärtringen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Gärtringen im Schnitt 1,9 Wohnungen, in Baden-Württemberg 2,1. 58,5 Prozent der Gebäude stehen frei, 17,6 Prozent stehen in geschlossener Reihe. 24,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Gärtringen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Gärtringen bedient?', a: 'Gärtringen und südlicher Landkreis Böblingen: Herrenberg, Jettingen, Nufringen, Aidlingen und alle Gemeinden im südlichen Landkreis Böblingen' },
  { q: 'Ist in einer Wohnung in Gärtringen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Gärtringen hat im Schnitt 104,7 m², 12,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 84,0 % der Gebäude in Gärtringen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'gaertringen',
  ort: 'Gärtringen',
  land: 'Baden-Württemberg',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Im Gäu zwischen Böblingen und Herrenberg — in Gärtringen oder Rohrau — hält man an Haus und Garten fest. Eine Betreuungskraft von Primundus sorgt dafür, dass das Alter daran nichts ändert: Sie zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'südlichen Landkreis Böblingen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Altbau vor 1950 macht in Gärtringen 3,9 Prozent des Bestands aus, in Baden-Württemberg 17,4 Prozent. 42,1 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Baden-Württemberg 27,0 Prozent.</Text>
        <Text>Knapp zwei von drei Haushalten in Gärtringen wohnen im Eigentum — in Baden-Württemberg sind es 51,6 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. Beim Platz steht Gärtringen besser da als das Land: Nur 12,2 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Baden-Württemberg sind es 18,1 Prozent. Das Zimmer für eine Betreuungskraft ist hier meist schon vorhanden.</Text>
        <Text>33,9 Prozent der Haushalte bestehen aus einer Person, in Baden-Württemberg 39,5 Prozent. Mit 9,15 Euro Nettokaltmiete je Quadratmeter wohnt es sich in Gärtringen teurer als im Schnitt von Baden-Württemberg (8,13 Euro).</Text>
        <Text>In Zahlen: 1.317 Menschen in Gärtringen sind 75 Jahre oder älter, und es gibt 5.779 Wohnungen in 3.044 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Gärtringen und südlicher Landkreis Böblingen: Herrenberg, Jettingen, Nufringen, Aidlingen und alle Gemeinden im südlichen Landkreis Böblingen',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
