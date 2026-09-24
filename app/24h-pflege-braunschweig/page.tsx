import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Braunschweig anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Braunschweig | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Braunschweig in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-braunschweig' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Braunschweig | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Braunschweig in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-braunschweig',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Braunschweig?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Niedersachsen kostet im Schnitt rund 3.010 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Braunschweig starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Braunschweig?', a: '28.514 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Braunschweig — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Braunschweig im Schnitt 3,2 Wohnungen, in Niedersachsen 1,7. 47,3 Prozent der Gebäude stehen frei, 34,4 Prozent stehen in geschlossener Reihe. 67,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Braunschweig ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Braunschweig bedient?', a: 'Braunschweig und Umland: Wolfsburg, Wolfenbüttel, Salzgitter, Peine, Helmstedt und alle Gemeinden im Landkreis Wolfenbüttel' },
  { q: 'Ist in einer Wohnung in Braunschweig Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Braunschweig hat im Schnitt 83,4 m², 30,3 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 68,2 % der Gebäude in Braunschweig sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'braunschweig',
  ort: 'Braunschweig',
  land: 'Niedersachsen',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Östliches Ringgebiet, Melverode oder raus Richtung Riddagshausen: Braunschweiger bleiben ihrer Löwenstadt treu — und dem eigenen Zuhause erst recht. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht, und ist bei Bedarf auch nachts da.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Die durchschnittliche Wohnung misst 83,4 Quadratmeter gegenüber 104,4 in Niedersachsen — rund 21 Quadratmeter weniger. In Braunschweig wohnen nur 30,5 Prozent der Haushalte im Eigentum, in Niedersachsen 51,1 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Braunschweig ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 3,2 Wohnungen, in Niedersachsen 1,7. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. Jedes dritte Gebäude in Braunschweig ist ein Reihenhaus — in Niedersachsen 12,9 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
        <Text>Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Braunschweig häufiger als anderswo. Knapp jede dritte Wohnung ist kleiner als 60 Quadratmeter — in Niedersachsen sind es 17,1 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden. Nur 47,3 Prozent der Gebäude stehen frei, in Niedersachsen sind es 72,2 Prozent. 31,1 Prozent der Wohnungen stammen aus der Zeit vor 1950, in Niedersachsen 20,7 Prozent — schöner Altbau, aber mit Treppenhäusern, die für einen Rollator nie gedacht waren.</Text>
        <Text>In Zahlen: 28.514 Menschen in Braunschweig sind 75 Jahre oder älter, und es gibt 144.288 Wohnungen in 44.493 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Braunschweig und Umland: Wolfsburg, Wolfenbüttel, Salzgitter, Peine, Helmstedt und alle Gemeinden im Landkreis Wolfenbüttel',
  stimmen: ['k-20250323-florian'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
