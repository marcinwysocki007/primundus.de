import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Marburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Marburg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Marburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-marburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Marburg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Marburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-marburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Marburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Hessen kostet im Schnitt rund 3.230 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Marburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Marburg — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Marburg im Schnitt 3,1 Wohnungen, in Hessen 2,2. 71,5 Prozent der Gebäude stehen frei, 13,2 Prozent stehen in geschlossener Reihe. 53,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Marburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Marburg?', a: '6.145 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 8,4 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 17,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Gelten die Marburger Pflegezahlen für die Stadt oder für den Landkreis?', a: 'Für den Landkreis — in Hessen wird die Pflegestatistik nicht auf Gemeindeebene veröffentlicht. Das ist wichtig, weil Stadt und Kreis hier weit auseinanderliegen: Die Stadt Marburg ist mit einem Durchschnittsalter von 40,5 Jahren und 17,1 Prozent Einwohnern über 65 sehr jung, der Landkreis Marburg-Biedenkopf hat dagegen mit 88 Pflegebedürftigen je 1.000 Einwohner eine der höchsten Pflegequoten Hessens (Land: 67). Im Kreis werden 14.777 von 21.538 Pflegebedürftigen ausschließlich von Angehörigen versorgt — 68,6 Prozent gegenüber 58,6 Prozent im Land. Wer für die Stadt mit Kreiszahlen rechnet, überschätzt das Alter der Stadtbevölkerung deutlich.' },
  { q: 'Welches Einzugsgebiet wird in Marburg bedient?', a: 'Marburg und Landkreis Marburg-Biedenkopf: Biedenkopf, Stadtallendorf, Kirchhain und alle Gemeinden im Landkreis Marburg-Biedenkopf' },
  { q: 'Ist in einer Wohnung in Marburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Marburg hat im Schnitt 84,8 m², 37,3 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 68,7 % der Gebäude in Marburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'marburg',
  ort: 'Marburg',
  land: 'Hessen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Marburgs Schönheit hat Stufen: Wer in der Oberstadt oder am Hang wohnt, kennt jede davon — und irgendwann werden sie zum Hindernis. Ins Heim muss deshalb niemand: Eine Betreuungskraft von Primundus zieht mit ein, begleitet jeden Weg und ist bei Bedarf auch nachts da, auch in Wehrda, Cappel und Marbach. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Marburg-Biedenkopf',
  vorOrt: {
    inhalt: (
      <>
        <Text>Bei Marburg führt fast jede Statistik in die Irre, wenn man nicht genau hinsieht. Die Stadt selbst ist mit einem Durchschnittsalter von 40,5 Jahren sehr jung — rund 21.000 Studierende an der Philipps-Universität sorgen dafür, nur 17,1 Prozent der Einwohner sind über 65. Der umgebende Landkreis Marburg-Biedenkopf dagegen hat mit{' '} <strong className="text-pm-ink font-semibold">88 Pflegebedürftigen je 1.000 Einwohner eine der höchsten Pflegequoten Hessens</strong> (Land: 67). Wer für die Stadt mit Kreiszahlen rechnet, überschätzt das Alter der Stadtbevölkerung erheblich. Pflegedaten gibt es in Hessen nur auf Kreisebene — deshalb steht hier, was für den Kreis gilt, und zwar ausdrücklich als Kreiswert.</Text>
        <Text>Und dieser Kreiswert ist bemerkenswert.{' '} <strong className="text-pm-ink font-semibold">68,6 Prozent aller Pflegebedürftigen im Landkreis werden ausschließlich von Angehörigen versorgt</strong> — 14.777 von 21.538 Menschen, ganz ohne Pflegedienst. In Hessen sind es 58,6 Prozent. Das ist die höchste Angehörigenlast, die uns in dieser Region begegnet ist. Umgekehrt leben nur 9,7 Prozent in vollstationärer Dauerpflege, im Land 13,0. Dabei fehlt es nicht an Plätzen: Gemessen an der Zahl der über 65-Jährigen stehen 48 je 1.000 bereit, in Hessen 47. Die Kapazität ist also völlig normal — sie wird nur seltener genutzt. Familien tragen hier mehr als anderswo.</Text>
        <Text>Wie Marburg gebaut ist, macht das nicht leichter. Die Lahn teilt die Stadt, und die Oberstadt liegt am Steilhang unter dem Schloss.{' '} <strong className="text-pm-ink font-semibold">Der Oberstadtaufzug überwindet 28 Höhenmeter</strong> zwischen Pilgrimstein und Oberstadt — er existiert, weil der Weg zu Fuß für viele nicht geht. In der Altstadt leben 4.262 Menschen, am Richtsberg, einer Großwohnsiedlung auf einer Anhöhe, 8.551. Das sind reale Wohnlagen, keine Postkartenmotive. Der Stadtteil Lahnberge mit Uniklinik und Campus hat übrigens zehn Einwohner — er taucht in Statistiken auf, sagt über Pflege aber nichts.</Text>
        <Text>Eine Marburger Besonderheit gehört dazu: Die Deutsche Blindenstudienanstalt ist seit 1916 hier ansässig, mit dem bundesweit einzigen Gymnasium für blinde und sehbehinderte Schülerinnen und Schüler, einer Blindenbibliothek und Wohngruppen über das ganze Stadtgebiet. Marburg ist baulich und infrastrukturell ungewöhnlich stark auf Menschen mit Sehbehinderung eingestellt. In einer Stadt mit 28 Höhenmetern zwischen Ober- und Unterstadt ist das keine Randnotiz.</Text>
        <Text>Geriatrisch ist Marburg versorgt: Das DGD Diakonie-Krankenhaus Wehrda führt eine eigene geriatrische Hauptabteilung mit 748 stationären Fällen und bietet mobile ambulante geriatrische Rehabilitation an — die Reha kommt also zu Ihnen. Am Universitätsklinikum selbst gibt es keine eigenständige Geriatrie. Bevor Sie entscheiden, lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Marburg und Landkreis Marburg-Biedenkopf: Biedenkopf, Stadtallendorf, Kirchhain und alle Gemeinden im Landkreis Marburg-Biedenkopf',
  stimmen: ['k-20250817-angelika'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
