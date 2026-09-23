import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Landshut anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Landshut und Landkreis | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Landshut in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-landshut' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Landshut und Landkreis | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Landshut in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-landshut',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Landshut?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Landshut starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Kommt eine Betreuungskraft auch in die Dörfer im Landkreis Landshut?', a: 'Ja, und dort wiegt der Unterschied am schwersten. Auf über 1.300 Quadratkilometern verteilen sich 35 Gemeinden mit im Schnitt gut 120 Einwohnern je Quadratkilometer — deutlich dünner besiedelt als Bayern insgesamt. Ambulante Dienste fahren entsprechend lange Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft, die im Haus wohnt, braucht keine Anfahrt. Der Preis ist im Landkreis derselbe wie in der Stadt.' },
  { q: 'Gibt es in Bayern zusätzliche Leistungen zum Pflegegeld?', a: 'Ja, das Landespflegegeld: 500 Euro im Jahr für Pflegebedürftige ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt und ob zusätzlich Pflegegeld oder Sachleistungen fließen. Der Antrag läuft über das Landesamt für Pflege. Zusammen mit Pflegegeld und Entlastungsbetrag senkt das den Eigenanteil einer 24-Stunden-Betreuung spürbar.' },
  { q: 'Welches Einzugsgebiet wird in Landshut bedient?', a: 'Landshut und Landkreis Landshut: Rottenburg, Geisenhausen, Ergoldsbach und alle Gemeinden im Landkreis Landshut und Dingolfing-Landau' },
  { q: 'Ist in einer Wohnung in Landshut Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Landshut hat im Schnitt 89,8 m², 27,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 75,9 % der Gebäude in Landshut sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'landshut',
  ort: 'Landshut',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Altstadt und Ergolding, in Altdorf oder draußen in Vilsbiburg: Wer in und um Landshut alt geworden ist, hängt an seinem Zuhause — am Garten, an den Nachbarn, am Blick auf die Burg Trausnitz. Eine Betreuungskraft von Primundus zieht mit ein, damit das so bleibt: 1:1-Betreuung, bei Bedarf auch nachts, täglich kündbar, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Landshut',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Landshut selbst sind die Wege kurz. Der bebaute Teil der Stadt liegt auf den flachen Terrassen im Isartal, und wer in der Altstadt oder in Achdorf wohnt, hat Arzt, Apotheke und Bäcker in erreichbarer Nähe. Steil wird es erst am Rand, wo die Hügelketten ansteigen und die Burg Trausnitz über dem Hofberg liegt.</Text>
        <Text>Ganz anders sieht es im Landkreis aus. Auf über 1.300 Quadratkilometern verteilen sich 35 Gemeinden, im Schnitt gerade einmal gut 120 Einwohner je Quadratkilometer — deutlich dünner besiedelt als Bayern insgesamt. Wer in einem der Dörfer wohnt, für den bedeutet Pflege zu Hause vor allem eines: Jemand muss die Strecke fahren. Der ambulante Dienst legt lange Touren zurück und kommt, wann es der Plan hergibt. Und wenn der eigene Führerschein wegfällt, wird aus jedem Arzttermin ein organisatorisches Projekt.</Text>
        <Text>Genau dort liegt die Stärke einer Betreuungskraft, die mit einzieht: Sie ist keine Anfahrt, sie ist schon da — morgens, nachts und an dem Nachmittag, an dem sonst niemand vorbeikommt. Das gilt in Landshut ebenso wie in Ergolding, Essenbach, Altdorf oder Vilsbiburg. Landshut wächst seit Jahren kräftig, aber die Menschen, die hier alt werden, bleiben meist genau dort wohnen, wo sie ihr Leben verbracht haben.</Text>
        <Text>Bevor Sie sich entscheiden, holen Sie sich eine neutrale Einschätzung: Die Fachstellen für Pflege- und Behindertenberatung in Bayern beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause (§ 7a SGB XI). Dazu kommt in Bayern das Landespflegegeld: 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Landshut und Landkreis Landshut: Rottenburg, Geisenhausen, Ergoldsbach und alle Gemeinden im Landkreis Landshut und Dingolfing-Landau',
  stimmen: ['k-20250713-margit'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
