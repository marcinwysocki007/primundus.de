import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Trier anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Trier | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Trier in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-trier' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Trier | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Trier in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-trier',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Trier?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Trier starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Trier — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Trier im Schnitt 3,0 Wohnungen, in Rheinland-Pfalz 1,7. 32,5 Prozent der Gebäude stehen frei, 51,3 Prozent stehen in geschlossener Reihe. 53,2 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Trier ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Trier?', a: '9.646 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,4 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 19,9 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Warum leben in Trier so viele Pflegebedürftige im Heim?', a: 'Weil in Trier deutlich seltener zu Hause gepflegt wird als im übrigen Rheinland-Pfalz: Nur 46,6 Prozent der 4.782 Pflegebedürftigen werden allein von Angehörigen versorgt, im Land sind es 55,4 Prozent. Entsprechend leben 20,3 Prozent vollstationär gegenüber 13,7 Prozent im Land — es gibt hier sogar mehr Heimbewohner (969) als ambulant versorgte Menschen (832), landesweit ist das umgekehrt. Ein Teil erklärt sich daraus, dass Trier Oberzentrum für den Landkreis Trier-Saarburg ist und die Statistik Heimbewohner dem Standort der Einrichtung zuordnet, nicht dem Wohnort. Wer zu Hause bleiben möchte, ist in Trier also eher die Ausnahme — möglich ist es trotzdem.' },
  { q: 'Welches Einzugsgebiet wird in Trier bedient?', a: 'Trier und Region Trier: Konz, Saarburg, Bitburg, Prüm und alle Gemeinden in der Region Trier' },
  { q: 'Ist in einer Wohnung in Trier Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Trier hat im Schnitt 85,3 m², 31,2 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 65,5 % der Gebäude in Trier sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'trier',
  ort: 'Trier',
  land: 'Rheinland-Pfalz',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Deutschlands älteste Stadt ist zum Bleiben gebaut: die Wohnung in Trier-Süd, das Haus in Ehrang oder Heiligkreuz, die Mosel vor der Tür. Eine Betreuungskraft von Primundus sorgt dafür, dass das Zuhause auch mit Pflegebedarf Zuhause bleibt — sie zieht mit ein und ist bei Bedarf auch nachts da.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Trier fällt in der rheinland-pfälzischen Pflegestatistik doppelt auf. Zum einen ist die Stadt jung: Das Medianalter liegt bei 40 Jahren gegenüber 45 im Land, 19,6 Prozent der Einwohner sind über 65 statt 23,3 Prozent — Universität und Hochschule prägen das. Die Pflegequote ist entsprechend niedrig, 4,2 gegen 6,5 Prozent, die zweitniedrigste aller 24 kreisfreien Städte des Landes. Zum anderen wird hier ungewöhnlich selten zu Hause gepflegt:{' '} <strong className="text-pm-ink font-semibold">Nur 46,6 Prozent der 4.782 Pflegebedürftigen werden allein von Angehörigen versorgt, in Rheinland-Pfalz sind es 55,4 Prozent</strong> — fast neun Punkte Unterschied.</Text>
        <Text>Das Gegenstück dazu ist das Heim. In Trier leben 20,3 Prozent der Pflegebedürftigen vollstationär, im Land 13,7 Prozent — und anders als in manchen Städten ist das kein Rechenartefakt: Auch gemessen an der Zahl der über 70-Jährigen stehen hier 74 Plätze je 1.000 bereit gegenüber 63 im Land. Beide Kennzahlen zeigen in dieselbe Richtung. Bemerkenswert ist die Folge:{' '} <strong className="text-pm-ink font-semibold">In Trier leben mehr Menschen im Heim (969) als von ambulanten Diensten versorgt werden (832)</strong> — landesweit ist das Verhältnis umgekehrt. Ein Teil davon geht auf das Umland zurück, denn Trier ist Oberzentrum für den Landkreis Trier-Saarburg und die Statistik ordnet Heimbewohner dem Standort der Einrichtung zu.</Text>
        <Text>Wer in Trier alt wird, merkt außerdem die Lage. Zwischen der Talstadt am Hauptmarkt auf 137 Metern und dem Höhenstadtteil Tarforst auf 293 Metern liegen rund 150 Höhenmeter — und beide sind bewohnt, Tarforst mit 6.487 Menschen. Dazu kommen Filsch, Kernscheid, Irsch und Mariahof auf den Höhen sowie die Mosel, die die Stadt teilt: Euren und West/Pallien liegen auf der linken Seite. Der älteste Ortsbezirk ist ausgerechnet Kernscheid — 9,7 Prozent über 80, 28,1 Prozent über 65 — und zugleich der kleinste, oben am Stadtrand gelegen. Kurze Wege gibt es dort nicht.</Text>
        <Text>Medizinisch ist Trier gut ausgestattet: eine eigene geriatrische Fachabteilung am Klinikum Mutterhaus mit 750 stationären Fällen, eine geriatrische Rehabilitationsklinik mit 80 Betten (St. Irminen) samt Tagesklinik und ein zertifiziertes AltersTraumaZentrum. Die Frage bleibt trotzdem dieselbe wie überall: Was passiert nach der Entlassung? Eine Betreuungskraft, die mit einzieht, ist nachts da und macht den Weg zurück in die eigene Wohnung möglich — auch in Tarforst oder Kernscheid, wo ein Dienst weite Anfahrten hätte. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Trier und Region Trier: Konz, Saarburg, Bitburg, Prüm und alle Gemeinden in der Region Trier',
  stimmen: ['k-20250913-matthias'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
