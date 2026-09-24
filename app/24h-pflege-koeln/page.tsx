import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Köln anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Köln | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Köln in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-koeln' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Köln | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Köln in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-koeln',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Köln?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Köln starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Köln?', a: '92.688 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,1 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 19,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Köln — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Köln im Schnitt 4,0 Wohnungen, in Nordrhein-Westfalen 2,3. 21,1 Prozent der Gebäude stehen frei, 60,1 Prozent stehen in geschlossener Reihe. 58,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Köln ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Köln bedient?', a: 'Alle Kölner Stadtbezirke sowie Leverkusen, Bonn, Bergisch Gladbach, Frechen, Pulheim, Brühl, Kerpen und weiterer Großraum Köln/Bonn' },
  { q: 'Ist in einer Wohnung in Köln Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Köln hat im Schnitt 77,6 m², 34,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 58,0 % der Gebäude in Köln sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'koeln',
  ort: 'Köln',
  land: 'Nordrhein-Westfalen',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Nippes, Sülz, Ehrenfeld oder rechtsrheinisch in Deutz: Kölner verlassen ihr Veedel nicht — da können die Heim-Wartelisten der Stadt noch so lang sein. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, damit das Zuhause mit Dom-Blick oder Hinterhof-Garten genau das bleibt.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Drei von fünf Gebäuden in Köln ist ein Reihenhaus — in Nordrhein-Westfalen 27,2 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Köln ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 4,0 Wohnungen, in Nordrhein-Westfalen 2,3. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe.</Text>
        <Text>Nur 21,1 Prozent der Gebäude stehen frei, in Nordrhein-Westfalen sind es 50,2 Prozent. In Köln wohnen nur 24,7 Prozent der Haushalte im Eigentum, in Nordrhein-Westfalen 40,6 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Mit 9,39 Euro Nettokaltmiete je Quadratmeter wohnt es sich in Köln teurer als im Schnitt von Nordrhein-Westfalen (6,82 Euro). Die durchschnittliche Wohnung misst 77,6 Quadratmeter gegenüber 92,7 in Nordrhein-Westfalen — rund 15 Quadratmeter weniger. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Köln häufiger als anderswo. Gut jede dritte Wohnung ist kleiner als 60 Quadratmeter — in Nordrhein-Westfalen sind es 22,4 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden.</Text>
        <Text>In Zahlen: 92.688 Menschen in Köln sind 75 Jahre oder älter, und es gibt 567.401 Wohnungen in 142.726 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Alle Kölner Stadtbezirke sowie Leverkusen, Bonn, Bergisch Gladbach, Frechen, Pulheim, Brühl, Kerpen und weiterer Großraum Köln/Bonn',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas', 'k-20260109-petra', 'k-20241118-bjorn'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
