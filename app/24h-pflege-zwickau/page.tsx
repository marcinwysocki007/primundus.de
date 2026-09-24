import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Zwickau anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Zwickau | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Zwickau in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-zwickau' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Zwickau | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Zwickau in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-zwickau',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Zwickau?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Sachsen kostet im Schnitt rund 2.990 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Zwickau starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Zwickau?', a: '13.424 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 15,4 Prozent — in Sachsen 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 32,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen: 29,1 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Zwickau — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Zwickau im Schnitt 3,7 Wohnungen, in Sachsen 2,7. 48,4 Prozent der Gebäude stehen frei, 28,5 Prozent stehen in geschlossener Reihe. 62,9 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Zwickau ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Zwickau bedient?', a: 'Zwickau und Landkreis Zwickau: Plauen, Werdau, Glauchau, Limbach-Oberfrohna und alle Gemeinden im Landkreis Zwickau' },
  { q: 'Ist in einer Wohnung in Zwickau Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Zwickau hat im Schnitt 72,3 m², 42,2 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 59,2 % der Gebäude in Zwickau sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.990 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'zwickau',
  ort: 'Zwickau',
  land: 'Sachsen',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Marienthal, Planitz oder Eckersbach: In der Stadt, die Autos baute, hält man an seinem Zuhause fest. Eine Betreuungskraft von Primundus sorgt dafür, dass das Alter daran nichts ändert — sie zieht mit ein, übernimmt den Haushalt und ist auch nachts da.</>,
  kreis: 'Landkreis Zwickau',
  vorOrt: {
    inhalt: (
      <>
        <Text>13,1 Prozent der Wohnungen stehen leer, in Sachsen 8,5 Prozent. Wo ein Zimmer fehlt, ist eine größere Wohnung hier eher zu finden als anderswo. Zwickau ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 3,7 Wohnungen, in Sachsen 2,7. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe.</Text>
        <Text>In Zwickau wohnen nur 24,5 Prozent der Haushalte im Eigentum, in Sachsen 34,3 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Zwickau häufiger als anderswo. Gut zwei von fünf Wohnungen sind kleiner als 60 Quadratmeter — in Sachsen sind es 34,1 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden.</Text>
        <Text>Nur 48,4 Prozent der Gebäude stehen frei, in Sachsen sind es 64,3 Prozent. Gut jedes vierte Gebäude in Zwickau ist ein Reihenhaus — in Sachsen 18,6 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Knapp jeder dritte Haushalt in Zwickau besteht nur aus Menschen ab 65 — in Sachsen 29,1 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist.</Text>
        <Text>In Zahlen: 13.424 Menschen in Zwickau sind 75 Jahre oder älter, und es gibt 56.186 Wohnungen in 15.042 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Zwickau und Landkreis Zwickau: Plauen, Werdau, Glauchau, Limbach-Oberfrohna und alle Gemeinden im Landkreis Zwickau',
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
