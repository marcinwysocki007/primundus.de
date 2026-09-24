import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Dessau-Roßlau anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Dessau-Roßlau | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dessau-Roßlau in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dessau' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Dessau-Roßlau | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dessau-Roßlau in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-dessau',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dessau-Roßlau?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Sachsen-Anhalt kostet im Schnitt rund 2.890 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dessau-Roßlau starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Dessau-Roßlau?', a: '13.463 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 17,7 Prozent — in Sachsen-Anhalt 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 34,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen-Anhalt: 29,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Dessau-Roßlau — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Dessau-Roßlau im Schnitt 2,7 Wohnungen, in Sachsen-Anhalt 2,1. 38,5 Prozent der Gebäude stehen frei, 34,0 Prozent stehen in geschlossener Reihe. 57,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Dessau-Roßlau ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Dessau-Roßlau bedient?', a: 'Dessau-Roßlau und Landkreis Anhalt-Bitterfeld: Bitterfeld, Zerbst, Köthen und alle Gemeinden im Landkreis Anhalt-Bitterfeld' },
  { q: 'Ist in einer Wohnung in Dessau-Roßlau Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dessau-Roßlau hat im Schnitt 77,7 m², 37,0 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 76,8 % der Gebäude in Dessau-Roßlau sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen-Anhalt zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.890 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'dessau',
  ort: 'Dessau-Roßlau',
  land: 'Sachsen-Anhalt',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ziebigk, die Bauhaus-Siedlung Törten oder stadtnah zwischen Elbe und Mulde: Dessauer wohnen mit Geschichte — und möchten darin alt werden. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Anhalt-Bitterfeld',
  vorOrt: {
    inhalt: (
      <>
        <Text>12,5 Prozent der Wohnungen stehen leer, in Sachsen-Anhalt 8,9 Prozent. Wo ein Zimmer fehlt, ist eine größere Wohnung hier eher zu finden als anderswo. Dessau-Roßlau ist älter als das Land: 17,7 Prozent der Einwohner sind 75 Jahre oder älter — das sind 13.463 Menschen, in Sachsen-Anhalt sind es 13,8 Prozent.</Text>
        <Text>Gut jeder dritte Haushalt in Dessau-Roßlau besteht nur aus Menschen ab 65 — in Sachsen-Anhalt 29,4 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist. Nur 38,5 Prozent der Gebäude stehen frei, in Sachsen-Anhalt sind es 58,6 Prozent.</Text>
        <Text>Jedes dritte Gebäude in Dessau-Roßlau ist ein Reihenhaus — in Sachsen-Anhalt 22,5 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. In Dessau-Roßlau wohnen nur 34,5 Prozent der Haushalte im Eigentum, in Sachsen-Anhalt 43,0 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Dessau-Roßlau häufiger als anderswo. Knapp zwei von fünf Wohnungen sind kleiner als 60 Quadratmeter — in Sachsen-Anhalt sind es 31,3 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden.</Text>
        <Text>In Zahlen: 13.463 Menschen in Dessau-Roßlau sind 75 Jahre oder älter, und es gibt 49.629 Wohnungen in 18.663 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Dessau-Roßlau und Landkreis Anhalt-Bitterfeld: Bitterfeld, Zerbst, Köthen und alle Gemeinden im Landkreis Anhalt-Bitterfeld',
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
