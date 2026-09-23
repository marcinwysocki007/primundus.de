import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Flensburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Flensburg | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Flensburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-flensburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Flensburg | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Flensburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-flensburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Flensburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Schleswig-Holstein kostet im Schnitt rund 3.040 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Flensburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Flensburg — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Flensburg im Schnitt 3,0 Wohnungen, in Schleswig-Holstein 1,8. 44,7 Prozent der Gebäude stehen frei, 40,0 Prozent stehen in geschlossener Reihe. 60,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Flensburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Flensburg?', a: '9.855 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,4 Prozent — in Schleswig-Holstein 12,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,4 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Schleswig-Holstein: 26,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'In welchen Flensburger Stadtteilen wird Pflege am häufigsten gebraucht?', a: 'Das Alter verteilt sich in Flensburg extrem ungleich. In Mürwik sind 10,9 Prozent der Einwohner über 80, in der Neustadt nur 1,6 Prozent — fast das Siebenfache Unterschied. Mürwik ist mit 15.324 Menschen zugleich der größte Stadtteil. Hohe Anteile Hochbetagter haben außerdem die Westliche Höhe (8,7 Prozent), Fruerlund (8,4) und Engelsby (7,6). Insgesamt wirkt Flensburg jung — 20,1 Prozent über 65 gegenüber 23,6 Prozent in Schleswig-Holstein —, was an den rund 9.000 Studierenden liegt, nicht an wenigen alten Menschen. Unsere Betreuungskräfte kommen in jeden Stadtteil; Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Flensburg bedient?', a: 'Flensburg und Kreis Schleswig-Flensburg: Schleswig, Kappeln, Eckernförde und alle Gemeinden im Kreis Schleswig-Flensburg' },
  { q: 'Ist in einer Wohnung in Flensburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Flensburg hat im Schnitt 78,7 m², 36,2 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 71,0 % der Gebäude in Flensburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Schleswig-Holstein zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.040 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'flensburg',
  ort: 'Flensburg',
  land: 'Schleswig-Holstein',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>An der Förde bleibt man gern: ob in Mürwik, Weiche oder drüben in Glücksburg und Harrislee. Wenn die Kräfte nachlassen, muss deshalb niemand ins Heim — eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Kreis Schleswig-Flensburg',
  vorOrt: {
    inhalt: (
      <>
        <Text>Flensburg ist eine junge Stadt — und trotzdem gibt es hier Viertel, in denen jeder neunte Mensch über 80 ist. Insgesamt sind 20,1 Prozent der Flensburger über 65 und 6,6 Prozent über 80; in Schleswig-Holstein sind es 23,6 und 8,0 Prozent. Zwei Hochschulen mit rund 9.000 Studierenden drücken den Schnitt. Aber das Alter verteilt sich in dieser Stadt extrem ungleich:{' '} <strong className="text-pm-ink font-semibold">In Mürwik sind 10,9 Prozent der Einwohner über 80, in der Neustadt 1,6 Prozent</strong> — fast das Siebenfache. Und Mürwik ist mit 15.324 Einwohnern zugleich der größte Stadtteil. Wer in Flensburg Betreuung plant, plant faktisch für Mürwik, die Westliche Höhe, Fruerlund und Engelsby.</Text>
        <Text>Dazu kommt die Lage am Wasser, und die ist hier nicht nur schön. Die Innenstadt liegt am Hafen auf drei Metern über dem Meer, die bewohnten Höhen — Westliche Höhe, Friesischer Berg, Marienberg, Duburg — deutlich darüber. Die Fördehänge sind steil. Wer oben wohnt und unten einkauft, merkt das lange bevor ein Pflegegrad im Spiel ist. Mit einem Rollator wird aus dem Weg zum Bäcker eine Entscheidung.</Text>
        <Text>Bei der Pflege selbst liegt Flensburg dicht am Land: Von 5.298 Pflegebedürftigen werden 46,6 Prozent allein von Angehörigen versorgt (Schleswig-Holstein 46,3), 21,2 Prozent nutzen einen ambulanten Dienst. Interessant ist der Heimplatz — und hier widersprechen sich zwei Kennzahlen scheinbar. Der Anteil der Pflegebedürftigen im Heim liegt mit 18,6 Prozent unter dem Landeswert von 19,4. Gemessen an der Zahl der über 65-Jährigen stehen aber{' '} <strong className="text-pm-ink font-semibold">56 Plätze je 1.000 bereit, im Land 54</strong>. Flensburg hat also mehr Kapazität, aber weniger Menschen, die sie nutzen. Wer nur den Anteil liest, unterschätzt das Platzangebot.</Text>
        <Text>Medizinisch ist die Stadt gut versorgt: Das Malteser Fördeklinikum St. Katharina führt eine eigene Geriatrie mit rund 1.900 stationären Patienten im Jahr und eine geriatrische Tagesklinik mit knapp 600. Ein Hinweis zur Vorsicht: Die „Tagesklinik für Ältere" der DIAKO ist eine gerontopsychiatrische Einrichtung, keine somatische Altersmedizin — das wird oft verwechselt. Was nach der Entlassung kommt, entscheidet sich ohnehin zu Hause. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Flensburg und Kreis Schleswig-Flensburg: Schleswig, Kappeln, Eckernförde und alle Gemeinden im Kreis Schleswig-Flensburg',
  stimmen: ['k-20250910-gudrun'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
