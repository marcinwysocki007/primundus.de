import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Osnabrück anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Osnabrück | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Osnabrück in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-osnabrueck' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Osnabrück | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Osnabrück in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-osnabrueck',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Osnabrück?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Niedersachsen kostet im Schnitt rund 3.010 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Osnabrück starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Osnabrück?', a: '16.260 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,9 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Was unterscheidet Seniorenbetreuung von 24-Stunden-Pflege in Osnabrück?', a: 'Mit Seniorenbetreuung ist oft stundenweise Hilfe gemeint. Bei der 24-Stunden-Pflege wohnt eine Betreuungskraft mit im Haushalt. Ehrenamtliche Seniorenbegleiter für einige Stunden finden Sie über den Seniorenstützpunkt der Stadt in der Bierstraße. Für bezahlte Stundenhilfe anerkannter Anbieter gibt es von der Pflegekasse den Entlastungsbetrag, bis zu 131 € im Monat. Braucht Ihre Mutter oder Ihr Vater tagsüber regelmäßig Hilfe, kann eine Betreuungskraft mit einziehen; bei Bedarf ist sie auch nachts da.' },
  { q: 'Welches Einzugsgebiet wird in Osnabrück bedient?', a: 'Osnabrück und Landkreis Osnabrück: Bad Iburg, Georgsmarienhütte, Bramsche, Melle und alle Gemeinden im Landkreis Osnabrück' },
  { q: 'Ist in einer Wohnung in Osnabrück Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Osnabrück hat im Schnitt 86,1 m², 28,3 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 68,3 % der Gebäude in Osnabrück sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

// Link-Stil wie in components/orte/OrtBeratung.tsx
const LINK =
  'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const ORT: OrtDaten = {
  slug: 'osnabrueck',
  ort: 'Osnabrück',
  land: 'Niedersachsen',
  art: 'hand',
  aktualisiert: '2. Oktober 2026',
  lesezeit: '6 Min.',
  einleitung: <>Einen Pflegedienst zu finden, ist in Osnabrück schwerer geworden. Nach einer Befragung von 2024 geht die Stadt davon aus, dass die Dienste etwa die Hälfte der Anfragen ablehnen. Im Alltag zu Hause kann auch eine Betreuungskraft von Primundus unterstützen: Sie zieht bei Ihren Eltern ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Osnabrück',
  vorOrt: {
    inhalt: (
      <>
        <Text>Dabei versorgen die Pflegedienste in Osnabrück mehr Menschen als früher: Ende 2023 waren es 3.135, fast die Hälfte mehr als 2019. Im Herbst und Winter sagen sie laut Pflegebericht häufiger ab. Als Hauptgründe nennt der Bericht die Lage im Stadtgebiet und besondere Aufträge, etwa nur Haushaltshilfe und Betreuung bei Pflegegrad 1 oder eine Wundversorgung. Der Pflegestützpunkt der Stadt im Stadthaus 2 am Natruper-Tor-Wall berät kostenlos und neutral, nach Vereinbarung auch bei einem Hausbesuch.</Text>
        <Text>Auch ein Dauerplatz im Heim ist schwer zu bekommen. Zwischen 2019 und 2023 wuchs die Zahl der Pflegebedürftigen in der Stadt um mehr als ein Drittel. Die Zahl der Heimplätze stieg in dieser Zeit nur um fünf, auf 1.456.{' '}<strong className="text-pm-ink font-semibold">Die neun Heime, die 2024 auf die Befragung der Stadt antworteten, lehnten im Schnitt mehr als 92 Prozent der Anfragen nach einem Dauerplatz ab.</strong>{' '}Alle neun nannten volle Belegung als Grund. Anfragen nach Kurzzeitpflege, etwa für die Wochen nach einem Krankenhausaufenthalt, lehnten die Einrichtungen zu 92 Prozent ab. Die Befragung zählt Anfragen, nicht Personen: Wer bei mehreren Heimen anfragt, wird mehrfach gezählt. Eine Nachtpflege, also eine Einrichtung, die Pflegebedürftige über Nacht betreut, gibt es in der Stadt nicht.</Text>
        <Text>Den höchsten Anteil Älterer haben die dünner besiedelten Stadtteile am Rand, die meist von Einfamilienhäusern geprägt sind. In Sutthausen und Hellern ist mehr als ein Viertel der Einwohner 65 oder älter. In der Innenstadt ist es etwa jeder Neunte. In einem Einfamilienhaus findet sich eher ein eigenes Zimmer für eine Betreuungskraft als in einer kleinen Wohnung. Im Stadtteil Westerberg, am Finkenhügel, hat das Klinikum Osnabrück eine Klinik für Geriatrie und Palliativmedizin.</Text>
        <Text>Im Landkreis Osnabrück waren Ende 2023 insgesamt 25.891 Menschen pflegebedürftig. Laut Pflegebericht des Kreises waren die Pflegedienste dort Ende 2021 im Schnitt zu 96 Prozent ausgelastet; viele Pflegeeinrichtungen führten damals Wartelisten. Kostenlose Beratung im Kreis gibt es beim Senioren- und Pflegestützpunkt im Kreishaus am Schölerberg und in Bramsche.</Text>
        <Text>Ein Pflegedienst, der schon kommt, muss nicht wegfallen. Übernimmt er nur noch Spritzen und Verbände auf ärztliche Verordnung, zahlt das die Krankenkasse, und das Pflegegeld bleibt in voller Höhe. Rechnet er weiter Körperpflege über die Pflegekasse ab, sinkt das Pflegegeld anteilig. Zu Hause ergänzen sich{' '}<a href="/pflegedienst-oder-24h-kraft" className={LINK}>Pflegedienst und Betreuungskraft</a>. Der Dienst kommt zu seinen Terminen, die Betreuungskraft wohnt im Haus und unterstützt im Alltag dazwischen.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Osnabrück und Landkreis Osnabrück: Bad Iburg, Georgsmarienhütte, Bramsche, Melle und alle Gemeinden im Landkreis Osnabrück',
  stimmen: ['k-20260706-stefan', 'k-20260403-heike'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
