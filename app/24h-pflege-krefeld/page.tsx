import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Krefeld anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Krefeld | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Krefeld in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-krefeld' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Krefeld | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Krefeld in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-krefeld',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Krefeld?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Krefeld starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Krefeld — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Krefeld im Schnitt 2,6 Wohnungen, in Nordrhein-Westfalen 2,3. 24,0 Prozent der Gebäude stehen frei, 50,1 Prozent stehen in geschlossener Reihe. 61,5 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Krefeld ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Krefeld?', a: '25.957 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Warum ist die Pflegequote in Krefeld so hoch?', a: 'Am Alter liegt es nicht — das ist das Bemerkenswerte. Krefelds Altersstruktur entspricht fast exakt dem Landesdurchschnitt: 22,3 Prozent der Einwohner sind über 65 (NRW 22,0), 7,2 Prozent über 80 (NRW 6,9). Trotzdem ist mit 10,1 Prozent die zweithöchste Pflegequote Nordrhein-Westfalens erreicht, 23.169 Menschen. Auffällig ist vor allem, wie sie versorgt werden: 15.936 Menschen — 68,8 Prozent — werden ausschließlich von Angehörigen gepflegt, gegenüber 59,0 Prozent im Land. Ambulante Dienste kommen seltener ins Haus (14,6 gegen 17,3 Prozent), und der Anteil von Pflegegrad 1 ist mit 6,9 Prozent auffällig niedrig (Land 11,5) — es geht hier also überwiegend nicht um leichte Fälle.' },
  { q: 'Welches Einzugsgebiet wird in Krefeld bedient?', a: 'Krefeld und Umland: Willich, Tönisvorst, Viersen und alle Gemeinden im Kreis Viersen nördlich von Mönchengladbach' },
  { q: 'Ist in einer Wohnung in Krefeld Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Krefeld hat im Schnitt 85,2 m², 28,3 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 71,2 % der Gebäude in Krefeld sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'krefeld',
  ort: 'Krefeld',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Uerdingen am Rhein, Bockum, Hüls: Die Samt- und Seidenstadt hält ihre Menschen — und die halten an ihrem Zuhause fest. Eine Betreuungskraft von Primundus zieht mit ein, wenn es allein nicht mehr geht: Sie führt den Haushalt, begleitet den Tag und ist nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>In Krefeld pflegen Familien in einem Ausmaß, das die Statistik sonst kaum kennt.{' '} <strong className="text-pm-ink font-semibold">15.936 Menschen — 68,8 Prozent aller Pflegebedürftigen — beziehen ausschließlich Pflegegeld</strong>, werden also allein von Angehörigen versorgt. In Nordrhein-Westfalen sind es 59,0 Prozent; unter allen 53 Kreisen und kreisfreien Städten des Landes liegt Krefeld damit auf Rang sechs. Rechnerisch wird hier fast jeder fünfzehnte Einwohner zu Hause von der Familie gepflegt. Ambulante Dienste kommen dagegen unterdurchschnittlich zum Einsatz: 14,6 gegen 17,3 Prozent.</Text>
        <Text>Dahinter steht eine Pflegequote von 10,1 Prozent — der zweithöchste Wert in ganz Nordrhein-Westfalen, wo der Landesschnitt bei 7,6 Prozent liegt. Und das Bemerkenswerte daran:{' '} <strong className="text-pm-ink font-semibold">Am Alter liegt es nicht.</strong> Krefelds Altersstruktur entspricht fast exakt dem Landesdurchschnitt — 22,3 Prozent über 65 gegenüber 22,0 Prozent, 7,2 Prozent über 80 gegenüber 6,9. Die um ein Drittel höhere Pflegequote lässt sich demografisch also nicht erklären. Auffällig ist auch, dass Pflegegrad 1 hier mit 6,9 Prozent viel seltener vorkommt als im Land (11,5 Prozent) — in Krefeld werden nicht mehr leichte Fälle gezählt, sondern mehr schwere zu Hause aufgefangen.</Text>
        <Text>Ein naheliegender Fehlschluss sei ausgeräumt. Nur 9,7 Prozent der Krefelder Pflegebedürftigen leben im Heim, im Land 12,2 Prozent — daraus liest sich leicht ein Platzmangel heraus. Das Gegenteil trifft zu: Gemessen an der Zahl der über 65-Jährigen stehen 47 vollstationäre Plätze je 1.000 bereit, in Nordrhein-Westfalen 46. Der niedrige Anteil entsteht allein daraus, dass die Zahl der Pflegebedürftigen so groß ist. Wer sich für die Betreuung zu Hause entscheidet, tut das in Krefeld nicht mangels Alternative.</Text>
        <Text>Räumlich ist Krefeld unkompliziert: Das bewohnte Stadtgebiet bewegt sich zwischen etwa 31 und 40 Metern über dem Meer — rund zehn Höhenmeter über die gesamte Kernstadt. Die drei „Berge" der Stadt sind Wald- und Naherholungsflächen, der Rhein bildet nur die Ostgrenze. Ungleich verteilt ist dagegen das Alter: In Traar-Ost sind 31,4 Prozent der Einwohner über 65, am Stephanplatz 13,2 Prozent. Die äußeren Villen- und Dorflagen — Traar, Verberg, Stadtwald, Gellep-Stratum, Königshof — sind alt, die innenstadtnahen Viertel jung.</Text>
        <Text>Geriatrisch ist Krefeld gut ausgestattet: drei Kliniken mit eigener geriatrischer Fachabteilung, die größte am Alexianer-Krankenhaus Maria-Hilf mit 917 stationären Fällen. Bei Helios lohnt der Blick auf die Adresse — der Träger führt an zwei Standorten eine Geriatrie, die eigentliche Versorgung sitzt im Cäcilien-Hospital in Hüls (726 Fälle), rund zehn Kilometer vom Hauptstandort am Lutherplatz entfernt. Wer „Helios Geriatrie Krefeld" sucht, sollte den Standort mitlesen. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Krefeld und Umland: Willich, Tönisvorst, Viersen und alle Gemeinden im Kreis Viersen nördlich von Mönchengladbach',
  stimmen: ['k-20250311-michaela'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
