import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Berlin-Charlottenburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Berlin-Charlottenburg | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Berlin-Charlottenburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-charlottenburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Berlin-Charlottenburg | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Berlin-Charlottenburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-charlottenburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Berlin-Charlottenburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Berlin kostet im Schnitt rund 3.100 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Berlin-Charlottenburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. Primundus ist mit eigenen Betreuungskräften in ganz Berlin und im Umland.' },
  { q: 'Ist in einer Wohnung in Berlin-Charlottenburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Berlin-Charlottenburg hat im Schnitt 73,2 m², 39,3 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 56,1 % der Gebäude in Berlin-Charlottenburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Berlin zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.100 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'charlottenburg',
  ort: 'Berlin-Charlottenburg',
  land: 'Berlin',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Altbauwohnung an der Kantstraße, das Haus am Lietzensee, die Etage in Schmargendorf: Wer in Charlottenburg alt geworden ist, will hier nicht weg — und Heimplätze im Berliner Westen sind knapp. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Charlottenburg-Wilmersdorf und im Berliner Westen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Berlin-Charlottenburg liegt beim Wohnen dicht am Schnitt von Berlin — was für die Pflege zu Hause eine gute Nachricht ist, weil es weder besonders beengt noch besonders weitläufig zugeht. Die durchschnittliche Wohnung misst 73,2 Quadratmeter, auf ein Gebäude kommen 6,0 Wohnungen, und 16,4 Prozent der Haushalte wohnen im Eigentum.</Text>
        <Text>10,1 Prozent der Einwohner sind 75 Jahre oder älter, das sind 362.829 Menschen. In 21,9 Prozent der Haushalte lebt ausschließlich, wer schon 65 ist — dort ist niemand im Haus, der nachts einspringen könnte. Genau für diese Haushalte ist eine Betreuungskraft gedacht, die mit einzieht.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Charlottenburg-Wilmersdorf mit allen Ortsteilen: Charlottenburg, Westend, Wilmersdorf, Schmargendorf, Halensee, Grunewald sowie die Nachbarbezirke Spandau und Steglitz-Zehlendorf',
  stimmen: ['k-20260210-rainer'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
