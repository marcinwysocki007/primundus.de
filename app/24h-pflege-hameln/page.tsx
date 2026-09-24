import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Hameln anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Hameln | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hameln in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hameln' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Hameln | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hameln in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-hameln',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Hameln?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Hameln starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Hameln?', a: '7.742 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 13,3 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 28,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Hameln — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Hameln im Schnitt 2,2 Wohnungen, in Niedersachsen 1,7. 56,3 Prozent der Gebäude stehen frei, 26,4 Prozent stehen in geschlossener Reihe. 60,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Hameln ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Hameln bedient?', a: 'Hameln und Umland: Bad Pyrmont, Springe, Hessisch Oldendorf, Rinteln, Holzminden und alle Gemeinden im Landkreis Hameln-Pyrmont' },
  { q: 'Ist in einer Wohnung in Hameln Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Hameln hat im Schnitt 93,5 m², 18,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 75,8 % der Gebäude in Hameln sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'hameln',
  ort: 'Hameln',
  land: 'Niedersachsen',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In der Altstadt an der Weser oder draußen Richtung Aerzen und Hessisch Oldendorf: Hamelner halten an Haus und Garten fest. Eine Betreuungskraft von Primundus zieht mit ein, wenn Hilfe nötig wird, und ist bei Bedarf auch nachts da.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Nur 2,3 Prozent der Wohnungen sind nach 2010 entstanden, in Niedersachsen 7,8 Prozent. Der Bestand ist älter als im Land. Die durchschnittliche Wohnung misst 93,5 Quadratmeter gegenüber 104,4 in Niedersachsen — rund 11 Quadratmeter weniger.</Text>
        <Text>Gut jedes vierte Gebäude in Hameln ist ein Reihenhaus — in Niedersachsen 12,9 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Nur 56,3 Prozent der Gebäude stehen frei, in Niedersachsen sind es 72,2 Prozent.</Text>
        <Text>In Hameln wohnen nur 41,9 Prozent der Haushalte im Eigentum, in Niedersachsen 51,1 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. 28,7 Prozent der Haushalte in Hameln bestehen nur aus Menschen ab 65 — in Niedersachsen 25,0 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist. 36,6 Prozent aller Wohnungen stammen aus den Jahren 1950 bis 1969, in Niedersachsen sind es 28,2 Prozent. Das ist der Wiederaufbau — und der baute Treppenhäuser, die niemand für Rollatoren geplant hat.</Text>
        <Text>In Zahlen: 7.742 Menschen in Hameln sind 75 Jahre oder älter, und es gibt 31.937 Wohnungen in 14.377 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Hameln und Umland: Bad Pyrmont, Springe, Hessisch Oldendorf, Rinteln, Holzminden und alle Gemeinden im Landkreis Hameln-Pyrmont',
  stimmen: ['k-20260706-stefan', 'k-20260403-heike'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
