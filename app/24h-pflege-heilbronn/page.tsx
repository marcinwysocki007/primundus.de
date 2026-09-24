import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Heilbronn anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Heilbronn und Landkreis | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Heilbronn in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-heilbronn' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Heilbronn und Landkreis | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Heilbronn in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-heilbronn',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Heilbronn?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Heilbronn starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Warum wird 24-Stunden-Pflege in Heilbronn zunehmend nachgefragt?', a: 'Wegen der Dynamik, nicht wegen des Bestands. Heilbronn ist mit einem Durchschnittsalter von 42 Jahren jünger als der Bundesschnitt — aber die Gruppe der über 80-Jährigen ist zwischen 2014 und 2023 um 31 Prozent gewachsen, während die 65- bis 79-Jährigen sogar weniger wurden. Es gibt also deutlich mehr Hochbetagte, und damit mehr Familien, bei denen es zu Hause allein nicht mehr geht.' },
  { q: 'Ist eine Heilbronner Nachkriegswohnung für Pflege geeignet?', a: 'In aller Regel ja, barrierefrei ist sie meist nicht. Die Altstadt wurde am 4. Dezember 1944 in 37 Minuten zu großen Teilen zerstört; heute stammen nur rund zwei Prozent der Wohnungen aus der Zeit vor 1900, dafür etwa die Hälfte aus den Jahren 1946 bis 1977. Die Stadt selbst nennt den Mangel an barrierearmem Wohnraum als eine ihrer größten Herausforderungen. Für eine Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Welches Einzugsgebiet wird in Heilbronn bedient?', a: 'Heilbronn und Landkreis Heilbronn: Bad Rappenau, Brackenheim, Neckarsulm, Öhringen und alle Gemeinden im Landkreis Heilbronn' },
  { q: 'Ist in einer Wohnung in Heilbronn Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Heilbronn hat im Schnitt 87,3 m², 22,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 68,0 % der Gebäude in Heilbronn sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'heilbronn',
  ort: 'Heilbronn',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Das Haus mit Blick auf die Weinberge am Wartberg, die Wohnung in Böckingen oder Sontheim: Heilbronner geben ihr Zuhause nicht leichtfertig auf — schon gar nicht für ein Pflegeheim mit Warteliste. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da, auch im ganzen Landkreis.</>,
  kreis: 'Landkreis Heilbronn',
  vorOrt: {
    inhalt: (
      <>
        <Text>Heilbronn gilt als junge Stadt, und das stimmt auch: Mit einem Durchschnittsalter von 42 Jahren liegt sie unter dem Bundesschnitt, und sie wächst kräftig. Die Zahl, auf die es für die Pflege ankommt, ist trotzdem eine andere. Zwischen 2014 und 2023 ist die Gruppe der über 80-Jährigen in Heilbronn um <strong className="text-pm-ink font-semibold">31 Prozent gewachsen</strong> — während die Gruppe der 65- bis 79-Jährigen sogar kleiner wurde. Es sind also nicht mehr Ältere insgesamt, sondern deutlich mehr Hochbetagte. Und hochbetagt heißt: der Punkt, an dem es allein nicht mehr geht, rückt näher.</Text>
        <Text>Dazu kommt, wie in Heilbronn gewohnt wird. Am 4. Dezember 1944 wurde die Stadt in 37 Minuten zu fast zwei Dritteln zerstört; von den historischen Gebäuden blieben kaum zwei Dutzend. Heute stammen nur rund zwei Prozent der Wohnungen aus der Zeit vor 1900 — dafür etwa die Hälfte aus den Jahren 1946 bis 1977. Das sind solide Wohnungen, gebaut in einer Zeit, in der Barrierefreiheit kein Thema war. Die Stadt selbst nennt den Mangel an barrierearmem Wohnraum ausdrücklich als eine der großen Herausforderungen auf dem hiesigen Wohnungsmarkt.</Text>
        <Text>Wer im Osten wohnt, kennt zusätzlich die Steigungen: Zwischen dem Neckartal und den Heilbronner Bergen mit ihren Weinlagen liegen über 200 Höhenmeter, während es im Westen Richtung Gartacher Feld eben bleibt. Und im Landkreis, der die Stadt vollständig umschließt, ist es dünner besiedelt — rund 320 Einwohner je Quadratkilometer gegen etwa 1.300 in der Stadt. In Neckarsulm, Bad Rappenau oder Eppingen sind die Wege zum nächsten Dienst länger. Eine Betreuungskraft, die mit einzieht, ist von beidem unabhängig: von der Entfernung und von der Treppe.</Text>
      </>
    ),
    beratungsabsatz: <Text>Verschaffen Sie sich zuerst einen neutralen Überblick: Die Pflegestützpunkte in Baden-Württemberg beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich geregelt (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>,
  },
  einzugsgebiet: 'Heilbronn und Landkreis Heilbronn: Bad Rappenau, Brackenheim, Neckarsulm, Öhringen und alle Gemeinden im Landkreis Heilbronn',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
