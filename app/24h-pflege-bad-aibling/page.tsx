import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bad Aibling anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Aibling | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Aibling in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-aibling' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bad Aibling | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Aibling in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bad-aibling',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Aibling?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Aibling starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bad Aibling?', a: '2.333 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 13,0 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 27,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bad Aibling — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bad Aibling im Schnitt 2,2 Wohnungen, in Bayern 2,1. 55,3 Prozent der Gebäude stehen frei, 17,5 Prozent stehen in geschlossener Reihe. 29,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bad Aibling ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Bad Aibling bedient?', a: 'Bad Aibling und südlicher Landkreis Rosenheim: Bruckmühl, Kolbermoor, Kirchdorf am Inn und alle Gemeinden im südlichen Landkreis Rosenheim' },
  { q: 'Ist in einer Wohnung in Bad Aibling Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Aibling hat im Schnitt 96,6 m², 22,1 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 77,7 % der Gebäude in Bad Aibling sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bad-aibling',
  ort: 'Bad Aibling',
  land: 'Bayern',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Kurstadt im Mangfalltal ist zum Altwerden wie gemacht — Moorbäder, kurze Wege, die Berge am Horizont. Und wenn es allein in der Wohnung oder im Haus in Harthausen nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, damit Bad Aibling Zuhause bleibt.</>,
  kreis: 'südlichen Landkreis Rosenheim',
  vorOrt: {
    inhalt: (
      <>
        <Text>16,8 Prozent der Wohnungen wurden nach 2010 gebaut, in Bayern 9,9 Prozent — ein vergleichsweise junger Bestand. Bad Aibling ist älter als das Land: 13,0 Prozent der Einwohner sind 75 Jahre oder älter — das sind 2.333 Menschen, in Bayern sind es 10,4 Prozent.</Text>
        <Text>Nur 16,4 Prozent der Wohnungen stammen aus den Jahren 1950 bis 1969, in Bayern sind es 26,0 Prozent. Gut jeder vierte Haushalt in Bad Aibling besteht nur aus Menschen ab 65 — in Bayern 23,0 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist.</Text>
        <Text>Nur 55,3 Prozent der Gebäude stehen frei, in Bayern sind es 67,3 Prozent.</Text>
        <Text>In Zahlen: 2.333 Menschen in Bad Aibling sind 75 Jahre oder älter, und es gibt 9.547 Wohnungen in 4.250 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bad Aibling und südlicher Landkreis Rosenheim: Bruckmühl, Kolbermoor, Kirchdorf am Inn und alle Gemeinden im südlichen Landkreis Rosenheim',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
