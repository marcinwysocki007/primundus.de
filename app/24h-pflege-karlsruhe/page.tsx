import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Karlsruhe anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Karlsruhe | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Karlsruhe in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-karlsruhe' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Karlsruhe | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Karlsruhe in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-karlsruhe',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Karlsruhe?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Karlsruhe starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Karlsruhe?', a: '30.521 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,0 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Karlsruhe — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Karlsruhe im Schnitt 3,7 Wohnungen, in Baden-Württemberg 2,1. 34,0 Prozent der Gebäude stehen frei, 45,2 Prozent stehen in geschlossener Reihe. 62,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Karlsruhe ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Karlsruhe bedient?', a: 'Karlsruhe und Umland: Bretten, Bruchsal, Ettlingen, Rastatt, Baden-Baden und alle Gemeinden im Landkreis Karlsruhe und Rastatt' },
  { q: 'Ist in einer Wohnung in Karlsruhe Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Karlsruhe hat im Schnitt 85,2 m², 27,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 61,0 % der Gebäude in Karlsruhe sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'karlsruhe',
  ort: 'Karlsruhe',
  land: 'Baden-Württemberg',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in der Weststadt, in Durlach oder Rüppurr: Karlsruher bleiben im Fächer — im vertrauten Zuhause zwischen Schloss und Turmberg. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da, auch wenn die Kinder längst woanders leben.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>In Karlsruhe wohnen nur 29,1 Prozent der Haushalte im Eigentum, in Baden-Württemberg 51,6 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. 45,2 Prozent der Gebäude in Karlsruhe stehen in geschlossener Reihe, an beiden Seiten angebaut — in Baden-Württemberg 15,4 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
        <Text>Karlsruhe ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 3,7 Wohnungen, in Baden-Württemberg 2,1. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. Nur 34,0 Prozent der Gebäude stehen frei, in Baden-Württemberg sind es 65,9 Prozent.</Text>
        <Text>Die durchschnittliche Wohnung misst 85,2 Quadratmeter gegenüber 99,1 in Baden-Württemberg — rund 14 Quadratmeter weniger. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Karlsruhe häufiger als anderswo. Gut jede vierte Wohnung ist kleiner als 60 Quadratmeter — in Baden-Württemberg sind es 18,1 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden. 26,6 Prozent der Wohnungen stammen aus der Zeit vor 1950, in Baden-Württemberg 17,4 Prozent — schöner Altbau, aber mit Treppenhäusern, die für einen Rollator nie gedacht waren.</Text>
        <Text>In Zahlen: 30.521 Menschen in Karlsruhe sind 75 Jahre oder älter, und es gibt 161.422 Wohnungen in 43.145 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Karlsruhe und Umland: Bretten, Bruchsal, Ettlingen, Rastatt, Baden-Baden und alle Gemeinden im Landkreis Karlsruhe und Rastatt',
  stimmen: ['k-20260506-elke'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
