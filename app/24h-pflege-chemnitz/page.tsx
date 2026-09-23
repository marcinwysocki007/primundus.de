import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Chemnitz anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Chemnitz | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Chemnitz in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-chemnitz' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Chemnitz | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Chemnitz in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-chemnitz',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Chemnitz?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Sachsen kostet im Schnitt rund 2.990 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Chemnitz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Chemnitz — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Chemnitz im Schnitt 4,5 Wohnungen, in Sachsen 2,7. 50,8 Prozent der Gebäude stehen frei, 32,1 Prozent stehen in geschlossener Reihe. 57,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Chemnitz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Chemnitz?', a: '36.485 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 15,2 Prozent — in Sachsen 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 31,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen: 29,1 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'In welchen Chemnitzer Stadtteilen wird Pflege am häufigsten gebraucht?', a: 'In den Plattenbausiedlungen der siebziger und achtziger Jahre. Sie wurden damals von jungen Familien bezogen, die geblieben und gemeinsam alt geworden sind. Im Yorckgebiet leben heute mehr Menschen über 65 als im erwerbsfähigen Alter; Markersdorf, Helbersdorf, Kapellenberg, Morgenleite und Hutholz liegen kaum darunter. Im Lutherviertel und im Zentrum ist der Anteil rund ein Fünftel davon. Chemnitz insgesamt ist mit 27,7 Prozent über 65 und 10,2 Prozent über 80 eine der ältesten Großstädte Deutschlands. Unsere Betreuungskräfte kommen in jeden Stadtteil, auch in die eingemeindeten Dörfer am Rand — Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Chemnitz bedient?', a: 'Chemnitz und Erzgebirgskreis: Stollberg, Annaberg-Buchholz, Aue-Bad Schlema und alle Gemeinden im Erzgebirgskreis und Landkreis Mittelsachsen' },
  { q: 'Ist in einer Wohnung in Chemnitz Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Chemnitz hat im Schnitt 71,3 m², 43,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 59,7 % der Gebäude in Chemnitz sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.990 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'chemnitz',
  ort: 'Chemnitz',
  land: 'Sachsen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Gründerzeitwohnung auf dem Kaßberg, das Haus in Gablenz oder am Stadtrand Richtung Erzgebirge: Chemnitzer bleiben, wo sie zuhause sind — Treppen und Etagen hin oder her. Eine Betreuungskraft von Primundus zieht mit ein, übernimmt Einkäufe, Haushalt und Begleitung und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Erzgebirgskreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Chemnitz gehört zu den ältesten Großstädten Deutschlands, und die Zahlen lassen daran keinen Zweifel: 27,7 Prozent der Einwohner sind über 65, 10,2 Prozent über 80. In Sachsen sind es 27,2 und 9,5 Prozent — und Sachsen liegt bundesweit schon weit vorn.{' '} <strong className="text-pm-ink font-semibold">23.939 Chemnitzerinnen und Chemnitzer sind pflegebedürftig</strong>, das entspricht 9,6 Prozent der Bevölkerung gegenüber 8,9 Prozent im Land. Zum Vergleich: In Trier sind 6,1 Prozent über 80, hier ist es fast das Doppelte.</Text>
        <Text>Das Bemerkenswerte an Chemnitz ist aber nicht der Durchschnitt, sondern wie ungleich das Alter verteilt ist — und zwar auf eine sehr spezifische Weise. Die Plattenbausiedlungen der siebziger und achtziger Jahre wurden damals von jungen Familien bezogen, die dort geblieben und gemeinsam alt geworden sind. Im{' '} <strong className="text-pm-ink font-semibold">Yorckgebiet leben heute mehr Menschen über 65 als im erwerbsfähigen Alter</strong>; Markersdorf, Helbersdorf, Kapellenberg, Morgenleite und Hutholz liegen kaum darunter. Im Lutherviertel und im Zentrum ist der Anteil ein Fünftel davon. Für die häusliche Pflege heißt das: sehr hohe Fallzahlen in wenigen, baulich einheitlichen Quartieren — und Stadtteile fast ohne Bedarf.</Text>
        <Text>Bei der Versorgung fällt auf, dass in Chemnitz häufiger allein durch Angehörige gepflegt wird als im Land: 51,1 gegen 48,5 Prozent. Ambulante Dienste kommen dagegen seltener zum Einsatz, 21,1 gegen 24,4 Prozent. Heimplätze sind reichlich vorhanden — 17,2 je 1.000 Einwohner gegenüber 15,7 in Sachsen. Der Anteil der Pflegebedürftigen, die tatsächlich im Heim leben, ist mit 13,8 Prozent dagegen völlig unauffällig. Das ist kein Widerspruch, sondern eine Frage des Nenners: Die Zahl der Pflegebedürftigen ist hier so groß, dass hinter einem durchschnittlichen Anteil eine sehr große absolute Zahl steckt.</Text>
        <Text>Topografisch ist Chemnitz unkompliziert — die Stadt liegt in einer breiten Beckenlage am Nordrand des Erzgebirges, das bebaute Gebiet ist weitgehend flach. Räumlich zieht sich die Stadt dafür weit: Zwischen dem dichtesten Stadtteil Kaßberg mit 9.262 Einwohnern je Quadratkilometer und dem dünnsten, Euba mit 159, liegt der Faktor 58. In den eingemeindeten Dörfern am Rand hat ein ambulanter Dienst lange Wege für kurze Einsätze; für jemanden, der im Haus wohnt, spielt die Entfernung keine Rolle.</Text>
        <Text>Geriatrisch ist die Stadt gut versorgt: zwei Krankenhäuser mit eigener geriatrischer Fachabteilung — das Geriatriezentrum am Klinikum Chemnitz und die Klinik für Geriatrie am DRK-Krankenhaus Rabenstein — dazu eine geriatrische Rehabilitationsklinik mit 80 Betten. Eine Lücke gibt es allerdings: Die geriatrische Tagesklinik ist derzeit außer Betrieb. Umso mehr zählt, wer nach der Entlassung zu Hause da ist. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Chemnitz und Erzgebirgskreis: Stollberg, Annaberg-Buchholz, Aue-Bad Schlema und alle Gemeinden im Erzgebirgskreis und Landkreis Mittelsachsen',
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
