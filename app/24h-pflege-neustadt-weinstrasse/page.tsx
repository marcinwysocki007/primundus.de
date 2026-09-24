import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Neustadt an der Weinstraße anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Neustadt an der Weinstraße | 6× Testsieger',
  description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Neustadt an der Weinstraße in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-neustadt-weinstrasse' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Neustadt an der Weinstraße | 6× Testsieger',
    description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Neustadt an der Weinstraße in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-neustadt-weinstrasse',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Neustadt an der Weinstraße?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Neustadt an der Weinstraße starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Neustadt an der Weinstraße?', a: '6.727 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,7 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 27,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Neustadt an der Weinstraße — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Neustadt an der Weinstraße im Schnitt 2,0 Wohnungen, in Rheinland-Pfalz 1,7. 55,0 Prozent der Gebäude stehen frei, 24,7 Prozent stehen in geschlossener Reihe. 55,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Neustadt an der Weinstraße ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Neustadt an der Weinstraße bedient?', a: 'Neustadt an der Weinstraße und Südliche Weinstraße: Haßloch, Deidesheim, Bad Dürkheim und alle Gemeinden im Landkreis Bad Dürkheim' },
  { q: 'Ist in einer Wohnung in Neustadt an der Weinstraße Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Neustadt an der Weinstraße hat im Schnitt 102,7 m², 16,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 80,9 % der Gebäude in Neustadt an der Weinstraße sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'neustadt-weinstrasse',
  ort: 'Neustadt an der Weinstraße',
  land: 'Rheinland-Pfalz',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Haardt, Mußbach oder unterm Hambacher Schloss: An der Weinstraße wird man zwischen Reben alt — am liebsten im eigenen Haus. Eine Betreuungskraft von Primundus zieht mit ein, wenn Hilfe nötig wird, und ist bei Bedarf auch nachts da.</>,
  kreis: 'der Südlichen Weinstraße',
  vorOrt: {
    inhalt: (
      <>
        <Text>Nur 55,0 Prozent der Gebäude stehen frei, in Rheinland-Pfalz sind es 69,6 Prozent. Neustadt an der Weinstraße ist älter als das Land: 12,7 Prozent der Einwohner sind 75 Jahre oder älter — das sind 6.727 Menschen, in Rheinland-Pfalz sind es 10,7 Prozent.</Text>
        <Text>In Neustadt an der Weinstraße wohnen nur 47,1 Prozent der Haushalte im Eigentum, in Rheinland-Pfalz 54,4 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Jedes vierte Gebäude in Neustadt an der Weinstraße ist ein Reihenhaus — in Rheinland-Pfalz 15,5 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
        <Text>27,1 Prozent der Wohnungen stammen aus der Zeit vor 1950, in Rheinland-Pfalz 21,5 Prozent — schöner Altbau, aber mit Treppenhäusern, die für einen Rollator nie gedacht waren. Gut jeder vierte Haushalt in Neustadt an der Weinstraße besteht nur aus Menschen ab 65 — in Rheinland-Pfalz 24,4 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist.</Text>
        <Text>In Zahlen: 6.727 Menschen in Neustadt an der Weinstraße sind 75 Jahre oder älter, und es gibt 28.093 Wohnungen in 14.237 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Neustadt an der Weinstraße und Südliche Weinstraße: Haßloch, Deidesheim, Bad Dürkheim und alle Gemeinden im Landkreis Bad Dürkheim',
  stimmen: ['k-20260802-karin', 'k-20251031-martina'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
