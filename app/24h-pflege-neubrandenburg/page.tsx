import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Neubrandenburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Neubrandenburg | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Neubrandenburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-neubrandenburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Neubrandenburg | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Neubrandenburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-neubrandenburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Neubrandenburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Mecklenburg-Vorpommern kostet im Schnitt rund 3.030 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Neubrandenburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Neubrandenburg?', a: '8.291 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 13,9 Prozent — in Mecklenburg-Vorpommern 12,6 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 30,3 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Mecklenburg-Vorpommern: 28,5 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Neubrandenburg — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Neubrandenburg im Schnitt 4,4 Wohnungen, in Mecklenburg-Vorpommern 2,2. 43,0 Prozent der Gebäude stehen frei, 41,2 Prozent stehen in geschlossener Reihe. 25,9 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Neubrandenburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Neubrandenburg bedient?', a: 'Neubrandenburg und Mecklenburgische Seenplatte: Waren, Demmin, Altentreptow und alle Gemeinden im Landkreis Mecklenburgische Seenplatte' },
  { q: 'Ist in einer Wohnung in Neubrandenburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Neubrandenburg hat im Schnitt 69,7 m², 37,7 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,0 % der Gebäude in Neubrandenburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Mecklenburg-Vorpommern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.030 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'neubrandenburg',
  ort: 'Neubrandenburg',
  land: 'Mecklenburg-Vorpommern',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Hinter den vier Toren oder draußen am Tollensesee: Neubrandenburger bleiben, wo sie verwurzelt sind. Eine Betreuungskraft von Primundus zieht mit ein, wenn Mutter oder Vater Hilfe brauchen, und ist bei Bedarf auch nachts da.</>,
  kreis: 'der Mecklenburgischen Seenplatte',
  vorOrt: {
    inhalt: (
      <>
        <Text>Neubrandenburg ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 4,4 Wohnungen, in Mecklenburg-Vorpommern 2,2. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. 51,8 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Mecklenburg-Vorpommern 26,1 Prozent.</Text>
        <Text>Altbau vor 1950 macht in Neubrandenburg 7,5 Prozent des Bestands aus, in Mecklenburg-Vorpommern 27,8 Prozent. In Neubrandenburg wohnen nur 20,0 Prozent der Haushalte im Eigentum, in Mecklenburg-Vorpommern 39,5 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Gut zwei von fünf Gebäuden in Neubrandenburg ist ein Reihenhaus — in Mecklenburg-Vorpommern 17,6 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Die durchschnittliche Wohnung misst 69,7 Quadratmeter gegenüber 82,5 in Mecklenburg-Vorpommern — rund 13 Quadratmeter weniger. Nur 43,0 Prozent der Gebäude stehen frei, in Mecklenburg-Vorpommern sind es 63,6 Prozent.</Text>
        <Text>In Zahlen: 8.291 Menschen in Neubrandenburg sind 75 Jahre oder älter, und es gibt 37.419 Wohnungen in 8.555 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Neubrandenburg und Mecklenburgische Seenplatte: Waren, Demmin, Altentreptow und alle Gemeinden im Landkreis Mecklenburgische Seenplatte',
  stimmen: ['k-20250221-klaus'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
