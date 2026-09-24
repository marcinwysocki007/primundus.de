import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Jena anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Jena | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Jena in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-jena' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Jena | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Jena in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-jena',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Jena?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Thüringen kostet im Schnitt rund 3.000 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Jena starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Jena — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Jena im Schnitt 3,9 Wohnungen, in Thüringen 2,1. 46,1 Prozent der Gebäude stehen frei, 29,7 Prozent stehen in geschlossener Reihe. 47,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Jena ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Jena?', a: '13.581 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,3 Prozent — in Thüringen 13,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Thüringen: 28,3 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'In welchen Jenaer Stadtteilen wird Pflege am häufigsten gebraucht?', a: 'Das Alter verteilt sich in Jena extrem ungleich. In Wogau ist mehr als jeder dritte Einwohner über 65 (37,0 Prozent), in Drackendorf/Lobeda-Ost fast ein Drittel (32,3), in Winzerla 28,5 Prozent — im Jenaer Zentrum dagegen nur 10,1 Prozent und in Lichtenhain Ort 9,5. Zwischen dem ältesten und dem jüngsten Bezirk liegt der Faktor vier. Alt wird man in Jena in den Plattenbaulagen von Lobeda und Winzerla und in den eingemeindeten Dörfern auf den Hochflächen. Unsere Betreuungskräfte kommen in jeden Stadtteil — auch nach Cospeda auf 335 Metern, wo ein ambulanter Dienst weite Wege hätte. Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Jena bedient?', a: 'Jena und Saale-Holzland-Kreis: Kahla, Stadtroda, Hermsdorf und alle Gemeinden im Saale-Holzland-Kreis' },
  { q: 'Ist in einer Wohnung in Jena Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Jena hat im Schnitt 73,0 m², 40,5 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,9 % der Gebäude in Jena sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Thüringen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.000 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'jena',
  ort: 'Jena',
  land: 'Thüringen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob Altbau in der Innenstadt, Wohnung in Winzerla oder Haus unterm Kernberg-Hang: Jenaer bleiben ihrer Stadt an der Saale verbunden. Damit das auch mit Pflegebedarf gilt, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, 1:1, ohne Heimumzug.</>,
  kreis: 'Saale-Holzland-Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Jena hat die niedrigste Pflegequote aller 22 thüringischen Kreise — 64 Pflegebedürftige je 1.000 Einwohner gegenüber 92 im Land. Das liegt an der Universität: 22,9 Prozent der Jenaer sind über 65, in Thüringen 28,7 Prozent. Mit dem Stadtdurchschnitt zu planen wäre trotzdem ein Fehler, denn{' '} <strong className="text-pm-ink font-semibold">zwischen den Stadtteilen liegt beim Seniorenanteil der Faktor vier</strong>: In Lichtenhain sind 9,5 Prozent der Einwohner über 65, in Wogau 37,0 Prozent. Winzerla mit seinen gut 10.000 Bewohnern liegt bei 28,5 Prozent, Lobeda-Ost bei 32,3. Die Stadt selbst rechnet damit, dass Winzerla und die Ortschaften bis 2030 die ältesten Planungsräume werden.</Text>
        <Text>Dazu kommt die Lage im Saaletal, und die ist hier alltagsrelevant. Das Zentrum liegt auf 143 Metern,{' '} <strong className="text-pm-ink font-semibold">der Ortsteil Cospeda mit seinen 1.387 Einwohnern auf 335</strong> — rund 190 Höhenmeter zwischen zwei bewohnten Stadtteilen derselben Stadt. Die Stadt beschreibt ihre Planungsräume selbst über die Topografie: die Ortschaften „in den Seitentälern der Saale sowie auf den Hochflächen", Jena-Ost geprägt von den „Steilhängen der Kernberge". Und die Saale teilt die Stadt; die Übergänge nennt die Verwaltung als Engpass. Für einen ambulanten Dienst heißt das lange Wege für kurze Einsätze — für jemanden, der im Haus wohnt, gar nichts.</Text>
        <Text>Bei der Versorgung fällt auf, dass in Jena seltener rein familiär gepflegt wird als im Land: 51,0 gegen 54,2 Prozent. Der Heimanteil liegt mit 15,9 Prozent über dem thüringischen Wert von 12,6. Daraus auf ein besonders dichtes Heimangebot zu schließen, wäre allerdings falsch. Gemessen an der Zahl der über 65-Jährigen stehen in Jena rund 41 Dauerpflegeplätze je 1.000 bereit, im Land 38 — ein Vorsprung von sechs Prozent, während der Anteil um 26 Prozent höher liegt. Der Grund ist der Nenner:{' '} <strong className="text-pm-ink font-semibold">Jena hat nicht auffällig viele Heimplätze, sondern auffällig wenige Pflegebedürftige insgesamt.</strong></Text>
        <Text>Geriatrisch versorgt das Universitätsklinikum die Stadt mit einer eigenen Klinik für Geriatrie samt Tagesklinik. Ein praktischer Hinweis, der Angehörigen Wege spart: Mehrere Verzeichnisse führen die Klinik unter der zentralen UKJ-Adresse in der Bachstraße — sie sitzt aber am Klinikumsstandort in Lobeda, rund fünf Kilometer entfernt und mit anderer Anbindung. Eine eigenständige geriatrische Reha-Klinik gibt es in Jena nicht; die Anschlussbehandlung findet in der Region statt. Umso mehr zählt, wer danach zu Hause da ist. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Jena und Saale-Holzland-Kreis: Kahla, Stadtroda, Hermsdorf und alle Gemeinden im Saale-Holzland-Kreis',
  stimmen: ['k-20250711-patrick'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
