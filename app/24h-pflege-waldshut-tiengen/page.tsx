import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Waldshut-Tiengen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Waldshut-Tiengen | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Waldshut-Tiengen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-waldshut-tiengen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Waldshut-Tiengen | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Waldshut-Tiengen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-waldshut-tiengen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Waldshut-Tiengen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Waldshut-Tiengen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Waldshut-Tiengen?', a: '2.461 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,1 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Waldshut-Tiengen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Waldshut-Tiengen im Schnitt 2,5 Wohnungen, in Baden-Württemberg 2,1. 62,9 Prozent der Gebäude stehen frei, 15,9 Prozent stehen in geschlossener Reihe. 48,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Waldshut-Tiengen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Waldshut-Tiengen bedient?', a: 'Waldshut-Tiengen und Landkreis Waldshut: Bad Säckingen, Laufenburg, St. Blasien, Bonndorf und alle Gemeinden im Landkreis Waldshut' },
  { q: 'Ist in einer Wohnung in Waldshut-Tiengen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Waldshut-Tiengen hat im Schnitt 97,2 m², 16,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 71,8 % der Gebäude in Waldshut-Tiengen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'waldshut-tiengen',
  ort: 'Waldshut-Tiengen',
  land: 'Baden-Württemberg',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in der Waldshuter Altstadt, in Tiengen oder in den Ortsteilen ringsum: Am Hochrhein bleibt man dort, wo man verwurzelt ist. Eine Betreuungskraft von Primundus sorgt dafür, dass das Alter daran nichts ändert: Sie zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Waldshut',
  vorOrt: {
    inhalt: (
      <>
        <Text>Waldshut-Tiengen liegt beim Wohnen dicht am Schnitt von Baden-Württemberg — was für die Pflege zu Hause eine gute Nachricht ist, weil es weder besonders beengt noch besonders weitläufig zugeht. Die durchschnittliche Wohnung misst 97,2 Quadratmeter, auf ein Gebäude kommen 2,5 Wohnungen, und 41,9 Prozent der Haushalte wohnen im Eigentum.</Text>
        <Text>10,1 Prozent der Einwohner sind 75 Jahre oder älter, das sind 2.461 Menschen. In 24,2 Prozent der Haushalte lebt ausschließlich, wer schon 65 ist — dort ist niemand im Haus, der nachts einspringen könnte. Genau für diese Haushalte ist eine Betreuungskraft gedacht, die mit einzieht.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Waldshut-Tiengen und Landkreis Waldshut: Bad Säckingen, Laufenburg, St. Blasien, Bonndorf und alle Gemeinden im Landkreis Waldshut',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
