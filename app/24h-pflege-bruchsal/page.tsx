import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bruchsal anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bruchsal | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bruchsal in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bruchsal' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bruchsal | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bruchsal in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bruchsal',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bruchsal?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bruchsal starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bruchsal?', a: '4.599 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,8 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bruchsal — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bruchsal im Schnitt 2,1 Wohnungen, in Baden-Württemberg 2,1. 50,4 Prozent der Gebäude stehen frei, 29,3 Prozent stehen in geschlossener Reihe. 48,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bruchsal ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Gibt es in Bruchsal eine geriatrische Klinik?', a: 'Nein. Die Fürst-Stirum-Klinik hat rund 400 Betten, aber keine geriatrische Fachabteilung — auch wenn einzelne Klinikverzeichnisse eine listen; das ist falsch. Die nächsten geriatrischen Angebote liegen außerhalb: die ViDia Kliniken in Karlsruhe und die Sankt Rochus Kliniken in Bad Schönborn. Nach einem Krankenhausaufenthalt führt der Weg zur Anschlussbehandlung also aus der Stadt heraus. Beratung gibt es dagegen vor Ort: Der Pflegestützpunkt des Landkreises Karlsruhe hat eine Anlaufstelle in Bruchsal, kostenlos und neutral.' },
  { q: 'Welches Einzugsgebiet wird in Bruchsal bedient?', a: 'Bruchsal und Landkreis Karlsruhe Nord: Philippsburg, Kraichtal, Bretten und alle Gemeinden im nördlichen Landkreis Karlsruhe' },
  { q: 'Ist in einer Wohnung in Bruchsal Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bruchsal hat im Schnitt 100,0 m², 16,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,0 % der Gebäude in Bruchsal sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bruchsal',
  ort: 'Bruchsal',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Kraichgau-Hügeln und Spargelfeldern wohnt man in Bruchsal, Heidelsheim oder Untergrombach gern im eigenen Haus — und möchte dort auch alt werden. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Karlsruhe Nord',
  vorOrt: {
    inhalt: (
      <>
        <Text>Eines vorweg, weil es Wege spart:{' '} <strong className="text-pm-ink font-semibold">In Bruchsal gibt es keine geriatrische Fachabteilung.</strong> Die Fürst-Stirum-Klinik hat rund 400 Betten, aber keine Altersmedizin — auch wenn manche Klinikverzeichnisse eine listen. Die nächsten geriatrischen Angebote liegen außerhalb: die ViDia Kliniken in Karlsruhe und die Sankt Rochus Kliniken in Bad Schönborn. Nach einem Krankenhausaufenthalt führt der Weg zur Anschlussbehandlung also aus der Stadt heraus. Umso wichtiger ist, was danach zu Hause passiert.</Text>
        <Text>Die Pflegestatistik gibt es in Baden-Württemberg nur für den Landkreis. Im Landkreis Karlsruhe sind 27.562 Menschen pflegebedürftig — eine Pflegequote von 6,1 Prozent gegenüber 5,6 Prozent im Land, und ein Zuwachs von 20 Prozent gegenüber 2021. 58,4 Prozent werden allein von Angehörigen versorgt (Land: 55,9), ambulante Dienste kommen mit 15,4 Prozent seltener zum Einsatz als landesweit (16,4).</Text>
        <Text>Ein Zahlenfallstrick sei dabei ausgeräumt. Der Anteil der Pflegebedürftigen, die im Heim leben, liegt mit 14,5 Prozent leicht unter dem Landeswert von 14,9 — daraus liest sich leicht ein knappes Angebot heraus.{' '} <strong className="text-pm-ink font-semibold">Gemessen an der Einwohnerzahl ist die Heimversorgung im Kreis aber dichter als im Land</strong>, weil hier insgesamt mehr Menschen pflegebedürftig sind. Anteil und Dichte zeigen in entgegengesetzte Richtungen — wer nur den Anteil liest, unterschätzt das Angebot.</Text>
      </>
    ),
    beratungsabsatz: <Text>Räumlich ist Bruchsal für die meisten unkompliziert: Rund 28.400 der 47.382 Einwohner leben in der Kernstadt, und die liegt flach in der Oberrheinebene auf 114 Metern. Der Michaelsberg bei Untergrombach ragt zwar 155 Meter darüber auf, ist aber Kapelle, Weinberg und Streuobstwiese — kein Wohngebiet. In der Stadt leben 9.968 Menschen über 65, das sind 21,0 Prozent. Der Pflegestützpunkt des Landkreises hat eine Anlaufstelle in Bruchsal; die Beratung dort ist kostenlos und neutral (§ 7a SGB XI).</Text>,
  },
  einzugsgebiet: 'Bruchsal und Landkreis Karlsruhe Nord: Philippsburg, Kraichtal, Bretten und alle Gemeinden im nördlichen Landkreis Karlsruhe',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
