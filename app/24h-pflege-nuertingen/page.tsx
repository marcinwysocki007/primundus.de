import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Nürtingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Nürtingen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Nürtingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-nuertingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Nürtingen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Nürtingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-nuertingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Nürtingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Nürtingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Nürtingen?', a: '4.567 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,4 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Nürtingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Nürtingen im Schnitt 2,0 Wohnungen, in Baden-Württemberg 2,1. 51,9 Prozent der Gebäude stehen frei, 20,0 Prozent stehen in geschlossener Reihe. 42,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Nürtingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Nürtingen bedient?', a: 'Nürtingen und Landkreis Esslingen: Kirchheim unter Teck, Wendlingen, Neckartenzlingen, Bempflingen, Owen und alle Gemeinden im südlichen Landkreis Esslingen' },
  { q: 'Ist in einer Wohnung in Nürtingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Nürtingen hat im Schnitt 97,3 m², 19,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 82,5 % der Gebäude in Nürtingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'nuertingen',
  ort: 'Nürtingen',
  land: 'Baden-Württemberg',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Am Neckar mit Blick zur Alb: In Nürtingen, Oberensingen oder Zizishausen gibt man sein Zuhause nicht leichtfertig auf. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht, und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Esslingen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Nürtingen liegt beim Wohnen dicht am Schnitt von Baden-Württemberg — was für die Pflege zu Hause eine gute Nachricht ist, weil es weder besonders beengt noch besonders weitläufig zugeht. Die durchschnittliche Wohnung misst 97,3 Quadratmeter, auf ein Gebäude kommen 2,0 Wohnungen, und 56,4 Prozent der Haushalte wohnen im Eigentum.</Text>
        <Text>11,4 Prozent der Einwohner sind 75 Jahre oder älter, das sind 4.567 Menschen. In 25,5 Prozent der Haushalte lebt ausschließlich, wer schon 65 ist — dort ist niemand im Haus, der nachts einspringen könnte. Genau für diese Haushalte ist eine Betreuungskraft gedacht, die mit einzieht.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Nürtingen und Landkreis Esslingen: Kirchheim unter Teck, Wendlingen, Neckartenzlingen, Bempflingen, Owen und alle Gemeinden im südlichen Landkreis Esslingen',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
