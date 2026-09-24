import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Erfurt anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Erfurt | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Erfurt in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-erfurt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Erfurt | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Erfurt in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-erfurt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Erfurt?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Thüringen kostet im Schnitt rund 3.000 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Erfurt starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Erfurt gilt als jung — ist Pflege hier überhaupt ein großes Thema?', a: 'Der Anteil täuscht. Erfurt ist mit knapp 24 Prozent über 65 tatsächlich rund fünf Punkte jünger als Thüringen insgesamt, und die Pflegequote liegt entsprechend niedriger. In absoluten Zahlen leben hier aber rund 52.000 Menschen über 65 und über 16.000 über 80. Dazu kommt: Knapp die Hälfte aller Erfurter Haushalte sind Einpersonenhaushalte, deutlich mehr als im Land. Viele Ältere sind also auf sich gestellt.' },
  { q: 'Ist eine Erfurter Wohnung groß genug für eine Betreuungskraft?', a: 'Das ist in Erfurt tatsächlich die zentrale Frage. Mit gut 40 Quadratmetern Wohnfläche je Einwohner hat die Stadt den niedrigsten Wert aller zweiundzwanzig Thüringer Kreise, zwei Drittel aller Wohnungen liegen in Häusern mit sieben und mehr Parteien, und nur gut ein Fünftel der Erfurter wohnt im Eigentum. Eine Betreuungskraft braucht ein eigenes Zimmer — das ist die Voraussetzung. In vielen Erfurter Wohnungen lässt sich das einrichten, in kleinen Zwei-Zimmer-Wohnungen nicht. Wir klären das vorab mit Ihnen, bevor irgendetwas entschieden wird.' },
  { q: 'Altern die Erfurter Plattenbaugebiete besonders stark?', a: 'Erstaunlicherweise nicht. Der Reflex liegt nahe — die Erstbezieher vom Berliner Platz, aus dem Rieth oder vom Wiesenhügel sind heute alt. Die Vorausberechnung der Stadt zeigt aber das Gegenteil: In der Großwohnsiedlung Nord geht die Zahl der über 65-Jährigen bis 2045 zurück, während sie in der östlichen Innenstadt und in den eingemeindeten Dörfern kräftig steigt. Der Pflegebedarf wandert also eher in die Altbauviertel und an den Stadtrand.' },
  { q: 'Welches Einzugsgebiet wird in Erfurt bedient?', a: 'Erfurt und Umland: Gotha, Weimar, Arnstadt, Ilmenau und alle Gemeinden im Landkreis Gotha und Ilm-Kreis' },
  { q: 'Ist in einer Wohnung in Erfurt Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Erfurt hat im Schnitt 74,3 m², 38,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 65,9 % der Gebäude in Erfurt sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Thüringen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.000 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'erfurt',
  ort: 'Erfurt',
  land: 'Thüringen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Wohnung in der Andreasvorstadt, das Haus in Hochheim, der Garten vor der Stadt: Erfurter bleiben gern, wo Dom und Krämerbrücke zum Alltag gehören. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, im vertrauten Zuhause.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Erfurt ist deutlich jünger als sein Bundesland: Knapp 24 Prozent der Erfurter sind über 65, in Thüringen sind es fast 29. Das ist der Grund, warum die Pflegequote hier spürbar niedriger liegt als im Landesschnitt. In absoluten Zahlen sind es trotzdem rund 52.000 Menschen über 65 und über 16.000 über 80 — und <strong className="text-pm-ink font-semibold"> knapp die Hälfte aller Erfurter Haushalte sind Einpersonenhaushalte</strong>, deutlich mehr als im Land.</Text>
        <Text>Die eigentliche Besonderheit steckt aber im Wohnen. Nur <strong className="text-pm-ink font-semibold"> gut ein Fünftel der Erfurter wohnt im Eigentum</strong> — in Thüringen ist es knapp die Hälfte. Zwei Drittel aller Wohnungen liegen in Häusern mit sieben und mehr Parteien. Und der Wohnraum ist knapp: Mit gut 40 Quadratmetern je Einwohner hat Erfurt den niedrigsten Wert aller zweiundzwanzig Thüringer Kreise. Für Pflege zu Hause ist das der entscheidende Punkt, denn ein Pflegebett, Hilfsmittel und ein eigenes Zimmer für die Betreuungskraft brauchen Platz. Wer eine 74-Quadratmeter-Wohnung im vierten Stock hat, muss anders planen als jemand mit einem Haus.</Text>
        <Text>Ein verbreiteter Reflex trifft in Erfurt übrigens nicht zu. Man erwartet, dass die großen Plattenbausiedlungen mit ihren Erstbeziehern besonders schnell altern — am Berliner Platz, im Rieth, am Roten Berg, in Melchendorf oder am Wiesenhügel. Die Vorausberechnung der Stadt sagt das Gegenteil: In der Großwohnsiedlung Nord geht die Zahl der über 65-Jährigen bis 2045 zurück, während sie in der östlichen Innenstadt und in den Dörfern am Stadtrand kräftig zunimmt. Der Pflegebedarf wandert also eher in die Altbauviertel und in die eingemeindeten Dörfer.</Text>
        <Text>Geografisch ist Erfurt für ältere Menschen günstig. Die Stadt reicht zwar von etwa 160 bis 430 Metern, aber die Höhen sind Wald: Der Steigerwald ist seit Jahrzehnten Erholungsgebiet, der Petersberg ist Festung und Park. Gewohnt wird überwiegend im flachen Teil; nur die Bergdörfer im Süden wie Egstedt liegen wirklich hoch. Auch beim Nahverkehr steht Erfurt gut da — nahezu alle Stadtbahnhaltestellen sind barrierefrei ausgebaut, bei den Bushaltestellen knapp sechzig Prozent.</Text>
        <Text>Wenn es ernst wird, gibt es in Erfurt echte Altersmedizin: Das Helios Klinikum führt ein eigenes Zentrum für Geriatrie mit ausgeprägt alterstraumatologischem Schwerpunkt — die häufigsten Diagnosen sind Oberschenkel- und Schenkelhalsbrüche, also genau die Stürze, nach denen zu Hause nichts mehr wie vorher ist. Für die Zeit danach lohnt sich frühe Beratung: Die Pflegeberatung in Erfurt ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
      </>
    ),
  },
  einzugsgebiet: 'Erfurt und Umland: Gotha, Weimar, Arnstadt, Ilmenau und alle Gemeinden im Landkreis Gotha und Ilm-Kreis',
  stimmen: ['k-20250918-cornelia'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
