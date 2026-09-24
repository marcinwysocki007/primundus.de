import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Koblenz anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Koblenz | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Koblenz in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-koblenz' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Koblenz | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Koblenz in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-koblenz',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Koblenz?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Koblenz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Koblenz?', a: '12.965 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,5 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Koblenz — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Koblenz im Schnitt 2,9 Wohnungen, in Rheinland-Pfalz 1,7. 42,1 Prozent der Gebäude stehen frei, 38,7 Prozent stehen in geschlossener Reihe. 59,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Koblenz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Koblenz bedient?', a: 'Koblenz und Mittelrhein: Neuwied, Andernach, Lahnstein, Boppard und alle Gemeinden im Landkreis Mayen-Koblenz' },
  { q: 'Ist in einer Wohnung in Koblenz Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Koblenz hat im Schnitt 88,0 m², 25,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 64,3 % der Gebäude in Koblenz sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'koblenz',
  ort: 'Koblenz',
  land: 'Rheinland-Pfalz',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Metternich, die Karthause oder drüben unter Ehrenbreitstein: Wo Rhein und Mosel zusammenfließen, gibt man sein Zuhause nicht her. Eine Betreuungskraft von Primundus zieht mit ein, wenn Hilfe nötig wird, und ist bei Bedarf auch nachts da.</>,
  kreis: 'Mittelrhein',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Koblenz wohnen nur 30,6 Prozent der Haushalte im Eigentum, in Rheinland-Pfalz 54,4 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Die durchschnittliche Wohnung misst 88,0 Quadratmeter gegenüber 107,7 in Rheinland-Pfalz — rund 20 Quadratmeter weniger.</Text>
        <Text>Knapp zwei von fünf Gebäuden in Koblenz ist ein Reihenhaus — in Rheinland-Pfalz 15,5 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Nur 42,1 Prozent der Gebäude stehen frei, in Rheinland-Pfalz sind es 69,6 Prozent.</Text>
        <Text>Koblenz ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 2,9 Wohnungen, in Rheinland-Pfalz 1,7. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Koblenz häufiger als anderswo. Jede vierte Wohnung ist kleiner als 60 Quadratmeter — in Rheinland-Pfalz sind es 15,4 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden. 37,7 Prozent aller Wohnungen stammen aus den Jahren 1950 bis 1969, in Rheinland-Pfalz sind es 25,9 Prozent. Das ist der Wiederaufbau — und der baute Treppenhäuser, die niemand für Rollatoren geplant hat.</Text>
        <Text>In Zahlen: 12.965 Menschen in Koblenz sind 75 Jahre oder älter, und es gibt 63.391 Wohnungen in 21.835 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Koblenz und Mittelrhein: Neuwied, Andernach, Lahnstein, Boppard und alle Gemeinden im Landkreis Mayen-Koblenz',
  stimmen: ['k-20251006-uwe'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
