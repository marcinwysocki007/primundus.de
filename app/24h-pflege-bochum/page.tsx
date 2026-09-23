import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bochum anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bochum | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bochum in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bochum' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bochum | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bochum in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bochum',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bochum?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bochum starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bochum?', a: '39.643 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,2 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bochum — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bochum im Schnitt 3,3 Wohnungen, in Nordrhein-Westfalen 2,3. 32,1 Prozent der Gebäude stehen frei, 39,5 Prozent stehen in geschlossener Reihe. 65,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bochum ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Bochum bedient?', a: 'Bochum und Umland: Herne, Witten, Dortmund, Essen und alle Gemeinden im mittleren Ruhrgebiet' },
  { q: 'Ist in einer Wohnung in Bochum Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bochum hat im Schnitt 80,4 m², 31,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 57,9 % der Gebäude in Bochum sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bochum',
  ort: 'Bochum',
  land: 'Nordrhein-Westfalen',
  art: 'erzeugt',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Ehrenfeld, Wiemelhausen und Langendreer wohnt man in Bochum bodenständig — und bleibt, wo man verwurzelt ist. Wenn Mutter oder Vater mehr Hilfe brauchen, als die Familie stemmen kann, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Bochum ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 3,3 Wohnungen, in Nordrhein-Westfalen 2,3. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. Die durchschnittliche Wohnung misst 80,4 Quadratmeter gegenüber 92,7 in Nordrhein-Westfalen — rund 12 Quadratmeter weniger.</Text>
        <Text>In Bochum wohnen nur 28,5 Prozent der Haushalte im Eigentum, in Nordrhein-Westfalen 40,6 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Nur 32,1 Prozent der Gebäude stehen frei, in Nordrhein-Westfalen sind es 50,2 Prozent.</Text>
        <Text>Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Bochum häufiger als anderswo. Knapp jede dritte Wohnung ist kleiner als 60 Quadratmeter — in Nordrhein-Westfalen sind es 22,4 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden. Zwei von fünf Gebäuden in Bochum ist ein Reihenhaus — in Nordrhein-Westfalen 27,2 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. 50,5 Prozent aller Haushalte in Bochum bestehen aus einer einzigen Person, in Nordrhein-Westfalen sind es 43,7 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt.</Text>
        <Text>In Zahlen: 39.643 Menschen in Bochum sind 75 Jahre oder älter, und es gibt 197.473 Wohnungen in 59.490 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bochum und Umland: Herne, Witten, Dortmund, Essen und alle Gemeinden im mittleren Ruhrgebiet',
  stimmen: ['k-20251122-volker'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
