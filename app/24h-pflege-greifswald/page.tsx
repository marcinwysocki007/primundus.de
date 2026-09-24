import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Greifswald anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Greifswald | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Greifswald in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-greifswald' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Greifswald | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Greifswald in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-greifswald',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Greifswald?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Mecklenburg-Vorpommern kostet im Schnitt rund 3.030 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Greifswald starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Greifswald?', a: '6.370 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,5 Prozent — in Mecklenburg-Vorpommern 12,6 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Mecklenburg-Vorpommern: 28,5 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Greifswald — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Greifswald im Schnitt 4,6 Wohnungen, in Mecklenburg-Vorpommern 2,2. 39,2 Prozent der Gebäude stehen frei, 43,8 Prozent stehen in geschlossener Reihe. 30,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Greifswald ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Greifswald bedient?', a: 'Greifswald und Landkreis Vorpommern-Greifswald: Anklam, Wolgast, Usedom und alle Gemeinden im Landkreis Vorpommern-Greifswald' },
  { q: 'Ist in einer Wohnung in Greifswald Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Greifswald hat im Schnitt 66,4 m², 51,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 58,1 % der Gebäude in Greifswald sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Mecklenburg-Vorpommern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.030 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'greifswald',
  ort: 'Greifswald',
  land: 'Mecklenburg-Vorpommern',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Innenstadt, Schönwalde oder Eldena an der Klosterruine: Greifswalder wohnen zwischen Uni und Bodden — und geben das im Alter nicht her. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Vorpommern-Greifswald',
  vorOrt: {
    inhalt: (
      <>
        <Text>Greifswald ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 4,6 Wohnungen, in Mecklenburg-Vorpommern 2,2. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Greifswald häufiger als anderswo. Gut jede zweite Wohnung ist kleiner als 60 Quadratmeter — in Mecklenburg-Vorpommern sind es 33,3 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden.</Text>
        <Text>In Greifswald wohnen nur 18,8 Prozent der Haushalte im Eigentum, in Mecklenburg-Vorpommern 39,5 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. 43,8 Prozent der Gebäude in Greifswald stehen in geschlossener Reihe, an beiden Seiten angebaut — in Mecklenburg-Vorpommern 17,6 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
        <Text>Die durchschnittliche Wohnung misst 66,4 Quadratmeter gegenüber 82,5 in Mecklenburg-Vorpommern — rund 16 Quadratmeter weniger. 58,4 Prozent aller Haushalte in Greifswald bestehen aus einer einzigen Person, in Mecklenburg-Vorpommern sind es 46,0 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt. Nur 39,2 Prozent der Gebäude stehen frei, in Mecklenburg-Vorpommern sind es 63,6 Prozent.</Text>
        <Text>In Zahlen: 6.370 Menschen in Greifswald sind 75 Jahre oder älter, und es gibt 35.597 Wohnungen in 7.705 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Greifswald und Landkreis Vorpommern-Greifswald: Anklam, Wolgast, Usedom und alle Gemeinden im Landkreis Vorpommern-Greifswald',
  stimmen: ['k-20250221-klaus'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
