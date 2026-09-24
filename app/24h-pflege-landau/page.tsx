import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Landau in der Pfalz anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Landau | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Landau in der Pfalz in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-landau' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Landau | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Landau in der Pfalz in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-landau',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Landau in der Pfalz?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Landau in der Pfalz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Landau?', a: '4.625 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,8 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Landau — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Landau im Schnitt 2,3 Wohnungen, in Rheinland-Pfalz 1,7. 53,2 Prozent der Gebäude stehen frei, 26,8 Prozent stehen in geschlossener Reihe. 50,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Landau ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Landau in der Pfalz bedient?', a: 'Landau und Südliche Weinstraße: Neustadt an der Weinstraße, Edenkoben, Herxheim und alle Gemeinden im Landkreis Südliche Weinstraße' },
  { q: 'Ist in einer Wohnung in Landau Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Landau hat im Schnitt 96,1 m², 21,3 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 77,9 % der Gebäude in Landau sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'landau',
  ort: 'Landau in der Pfalz',
  land: 'Rheinland-Pfalz',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Landau',
  einleitung: <>Queichheim, Arzheim oder mitten in der Stadt an der Weinstraße: Landauer bleiben in der Südpfalz — beim Wein, beim Markt, im eigenen Zuhause. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'der Südlichen Weinstraße',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Landau wohnen nur 42,5 Prozent der Haushalte im Eigentum, in Rheinland-Pfalz 54,4 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Die durchschnittliche Wohnung misst 96,1 Quadratmeter gegenüber 107,7 in Rheinland-Pfalz — rund 12 Quadratmeter weniger.</Text>
        <Text>12,4 Prozent der Wohnungen wurden nach 2010 gebaut, in Rheinland-Pfalz 7,2 Prozent — ein vergleichsweise junger Bestand. Nur 53,2 Prozent der Gebäude stehen frei, in Rheinland-Pfalz sind es 69,6 Prozent.</Text>
        <Text>48,1 Prozent aller Haushalte in Landau bestehen aus einer einzigen Person, in Rheinland-Pfalz sind es 40,4 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt. Gut jedes vierte Gebäude in Landau ist ein Reihenhaus — in Rheinland-Pfalz 15,5 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. 18,1 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Rheinland-Pfalz 25,7 Prozent.</Text>
        <Text>In Zahlen: 4.625 Menschen in Landau sind 75 Jahre oder älter, und es gibt 25.943 Wohnungen in 11.114 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Landau und Südliche Weinstraße: Neustadt an der Weinstraße, Edenkoben, Herxheim und alle Gemeinden im Landkreis Südliche Weinstraße',
  stimmen: ['k-20260802-karin', 'k-20251031-martina'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
