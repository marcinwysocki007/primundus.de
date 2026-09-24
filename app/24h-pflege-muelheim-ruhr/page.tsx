import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Mülheim an der Ruhr anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Mülheim an der Ruhr | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Mülheim an der Ruhr in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-muelheim-ruhr' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Mülheim an der Ruhr | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Mülheim an der Ruhr in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-muelheim-ruhr',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Mülheim an der Ruhr?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Mülheim an der Ruhr starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Mülheim an der Ruhr?', a: '21.402 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,5 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 27,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Mülheim an der Ruhr — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Mülheim an der Ruhr im Schnitt 2,8 Wohnungen, in Nordrhein-Westfalen 2,3. 31,6 Prozent der Gebäude stehen frei, 40,5 Prozent stehen in geschlossener Reihe. 63,2 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Mülheim an der Ruhr ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Mülheim an der Ruhr bedient?', a: 'Mülheim an der Ruhr und Umland: Essen, Duisburg, Oberhausen, Bottrop, Ratingen und alle angrenzenden Städte in der Metropole Ruhr' },
  { q: 'Ist in einer Wohnung in Mülheim an der Ruhr Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Mülheim an der Ruhr hat im Schnitt 86,4 m², 26,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 64,9 % der Gebäude in Mülheim an der Ruhr sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'muelheim-ruhr',
  ort: 'Mülheim an der Ruhr',
  land: 'Nordrhein-Westfalen',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Saarn, Speldorf oder Broich wohnt man an der Ruhr mit Grün vor der Tür — und gibt das im Alter nicht her. Eine Betreuungskraft von Primundus sorgt dafür, dass es dabei bleibt: Sie zieht mit ein, übernimmt den Alltag und ist auch nachts da.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Nur 31,6 Prozent der Gebäude stehen frei, in Nordrhein-Westfalen sind es 50,2 Prozent. Zwei von fünf Gebäuden in Mülheim an der Ruhr ist ein Reihenhaus — in Nordrhein-Westfalen 27,2 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
        <Text>Gut jeder vierte Haushalt in Mülheim an der Ruhr besteht nur aus Menschen ab 65 — in Nordrhein-Westfalen 24,2 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist. Mülheim an der Ruhr ist älter als das Land: 12,5 Prozent der Einwohner sind 75 Jahre oder älter — das sind 21.402 Menschen, in Nordrhein-Westfalen sind es 10,7 Prozent.</Text>
        <Text>Mülheim an der Ruhr ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 2,8 Wohnungen, in Nordrhein-Westfalen 2,3. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. In Mülheim an der Ruhr wohnen nur 34,2 Prozent der Haushalte im Eigentum, in Nordrhein-Westfalen 40,6 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. 40,0 Prozent aller Wohnungen stammen aus den Jahren 1950 bis 1969, in Nordrhein-Westfalen sind es 33,6 Prozent. Das ist der Wiederaufbau — und der baute Treppenhäuser, die niemand für Rollatoren geplant hat.</Text>
        <Text>In Zahlen: 21.402 Menschen in Mülheim an der Ruhr sind 75 Jahre oder älter, und es gibt 90.500 Wohnungen in 31.841 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Mülheim an der Ruhr und Umland: Essen, Duisburg, Oberhausen, Bottrop, Ratingen und alle angrenzenden Städte in der Metropole Ruhr',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
