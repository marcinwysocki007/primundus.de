import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Salzgitter anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Salzgitter | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Salzgitter in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-salzgitter' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Salzgitter | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Salzgitter in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-salzgitter',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Salzgitter?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Niedersachsen kostet im Schnitt rund 3.010 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Salzgitter starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Salzgitter?', a: '12.083 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,6 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 26,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Gibt es 24-Stunden-Pflege auch in Wolfenbüttel?', a: 'Ja. Wolfenbüttel und alle Gemeinden des Landkreises gehören zu unserem Einzugsgebiet, es gelten dieselben Bedingungen wie in Salzgitter. Eine Anreise ist in 3 Tagen möglich. Rat und Informationen gibt vor Ort das Seniorenservicebüro der Stadt Wolfenbüttel. Pflegeberatung bekommen Sie kostenlos bei Ihrer Pflegekasse.' },
  { q: 'Ist in einer Wohnung in Salzgitter Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Salzgitter hat im Schnitt 85,8 m², 30,2 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 75,0 % der Gebäude in Salzgitter sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

// Link-Stil wie in components/orte/OrtBeratung.tsx
const LINK =
  'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const ORT: OrtDaten = {
  slug: 'salzgitter',
  ort: 'Salzgitter',
  land: 'Niedersachsen',
  art: 'hand',
  aktualisiert: '2. Oktober 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob Ihre Eltern in Lebenstedt wohnen oder in einem der Dörfer: Eine Betreuungskraft von Primundus kann bei ihnen einziehen und ist bei Bedarf auch nachts da. Salzgitter erstreckt sich über 22 Kilometer von Nord nach Süd, und die Stadt ordnet 27 ihrer 31 Stadtteile als ländlich ein. Weil die Betreuungskraft im Haus wohnt, muss für die tägliche Betreuung niemand anfahren.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Seit Ende September 2026 gibt es im St. Elisabeth-Krankenhaus in Salzgitter-Bad keinen Krankenhausbetrieb mehr. In Salzgitter-Bad war Ende 2024 jeder vierte Einwohner 65 oder älter. Im Juni 2026 hatte das Haus laut seiner Website noch eine Geriatrie mit 20 Betten. Für stationäre Altersmedizin bleibt in der Stadt damit das Helios Klinikum in Lebenstedt mit seiner Klinik für Innere Medizin und Altersmedizin. Nach einem Krankenhausaufenthalt ist oft noch offen, wie lange Hilfe nötig ist. Bei Primundus ist der Vertrag täglich kündbar und wird taggenau abgerechnet.</Text>
        <Text>Ende 2023 waren in Salzgitter 90 von 1.000 Einwohnern pflegebedürftig, im Landesschnitt 76. Seit 2019 kamen gut 2.500 Pflegebedürftige hinzu.{' '}<strong className="text-pm-ink font-semibold">Die Pflegedienste in Salzgitter versorgten 2023 fast genauso viele Menschen wie 2019, 1.088 statt 1.086.</strong>{' '}In den Heimen der Stadt lebten 2023 weniger Pflegebedürftige als 2019. Gewachsen ist vor allem die Zahl derer, die nur{' '}<a href="/pflegegeld" className={LINK}>Pflegegeld</a>{' '}bekommen. Ihre Pflege liegt meist bei Angehörigen.</Text>
        <Text>In manchen Dörfern ist der Anteil Älterer noch höher als in Salzgitter-Bad. In Bruchmachtersen und Groß Mahner sind drei von zehn Einwohnern 65 oder älter. Zu Seniorenbetreuung und Pflege berät die Stadt in ihrem Seniorenbüro und Pflegestützpunkt, im Rathaus in Lebenstedt an der Joachim-Campe-Straße.</Text>
        <Text>Bei der Gründung Salzgitters 1942 kamen 21 der 28 Ortschaften aus dem damaligen Kreis Wolfenbüttel. Von Lebenstedt sind es 17 Straßenkilometer bis in die Kreisstadt. Der Pflegebericht 2023 des Landkreises Wolfenbüttel beschreibt eine grundsätzlich gute Versorgung. In Randlagen findet sich aber nicht immer zeitnah ein Pflegedienst, und der Bedarf an Heimplätzen ist höher als das Angebot. Beratung bietet unter anderem das Seniorenservicebüro in der Langen Straße in Wolfenbüttel.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Salzgitter und Umland: Wolfenbüttel, Goslar, Peine und alle Gemeinden im Landkreis Wolfenbüttel und Peine',
  stimmen: ['k-20260706-stefan', 'k-20260403-heike'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
