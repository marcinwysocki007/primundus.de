import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bocholt anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Bocholt | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bocholt in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bocholt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Bocholt | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bocholt in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bocholt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bocholt?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bocholt starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Bocholt ist flach und fahrradfreundlich — reicht das nicht?', a: 'Die flache Lage hilft tatsächlich, und die Stadt selbst nennt sie in ihrem Mobilitätskonzept als guten Ausgangspunkt für Barrierefreiheit. In Bocholt werden über 40 Prozent aller Wege mit dem Rad zurückgelegt. Nur ist genau das Verkehrsmittel, das bei Gangunsicherheit, nachlassendem Sehvermögen oder Demenz als Erstes wegfällt — und danach bleibt ein Busangebot, das noch längst nicht durchgehend niederflurig ist. Die Flachheit verschiebt den Zeitpunkt, an dem es allein nicht mehr geht. Aufheben kann sie ihn nicht.' },
  { q: 'Sind Bocholter Wohnungen für Pflege zu Hause geeignet?', a: 'In aller Regel ja, barrierefrei sind sie aber selten. Am 22. März 1945 wurde Bocholt in fünfundzwanzig Minuten zu rund 85 Prozent zerstört — in der Altstadt blieben drei Häuser unversehrt. Was heute steht, ist deshalb fast vollständig Wiederaufbau- und Nachkriegsbestand: solide gebaut, aber zu einer Zeit, als niemand an Aufzüge oder bodengleiche Duschen dachte. Für die Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Kommt eine Betreuungskraft auch in die Bauerschaften und in den Kreis Borken?', a: 'Ja, und dort ist der Unterschied am deutlichsten. Bocholt ist die größte Stadt im Kreis Borken, aber nicht die Kreisstadt — das ist Borken selbst. Wer in Barlo, Stenern, Biemenhorst oder Richtung Isselburg und Rhede wohnt, kennt die längeren Wege: Ambulante Dienste fahren dort Touren, und die Termine richten sich nach der Route statt nach Ihrem Tagesablauf. Eine Betreuungskraft im Haus ist davon unabhängig, und Anfahrtskosten berechnen wir nicht.' },
  { q: 'Welches Einzugsgebiet wird in Bocholt bedient?', a: 'Bocholt und Westmünsterland: Rhede, Borken, Isselburg, Raesfeld und alle Gemeinden im Kreis Borken' },
  { q: 'Ist in einer Wohnung in Bocholt Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bocholt hat im Schnitt 102,9 m², 15,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 87,4 % der Gebäude in Bocholt sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bocholt',
  ort: 'Bocholt',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Bocholt hat man sein Haus — in Biemenhorst, Mussum oder stadtnah an der Aa — und dort soll das Leben auch im Alter weitergehen, nicht in einem Heim. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, im ganzen Westmünsterland bis zur niederländischen Grenze.</>,
  kreis: 'Westmünsterland',
  vorOrt: {
    inhalt: (
      <>
        <Text>Der Kreis Borken gilt als jung — Bocholt ist es nicht. <strong className="text-pm-ink font-semibold"> Gut sieben Prozent der Bocholter sind über 80</strong>, das ist der höchste Anteil aller siebzehn Kommunen des Kreises und liegt auf dem Niveau von Nordrhein-Westfalen insgesamt. Der Kreisdurchschnitt liegt darunter. Wer also vom „jungen Münsterland" auf die Stadt schließt, unterschätzt, wie viele Hochbetagte hier leben.</Text>
        <Text>Und die Versorgung ist knapp. Im Kreis Borken kommen auf jeden ambulanten Pflegedienst im Schnitt <strong className="text-pm-ink font-semibold">rund 108 Pflegebedürftige</strong> — in Nordrhein-Westfalen sind es 75, im Bund 71. Der Kreis Borken setzt stark auf ambulante Versorgung: Gut ein Viertel aller Pflegebedürftigen wird von einem Dienst betreut, im Land nur knapp ein Sechstel. Entsprechend ausgelastet sind die Dienste. Und der Kreis schreibt in seiner eigenen Pflegebedarfsplanung, dass es schwer sei, hier einen Kurzzeitpflegeplatz zu finden. Wer kurzfristig etwas braucht, merkt das sofort.</Text>
        <Text>Beim Wohnen prägt bis heute der 22. März 1945. In fünfundzwanzig Minuten wurde Bocholt zu rund 85 Prozent zerstört; in der Altstadt blieben drei Häuser unversehrt, und die Einwohnerzahl fiel von 35.000 auf etwa 8.000. In der Statistik zeigt sich das weniger an einem Übergewicht der fünfziger Jahre als am fehlenden Vorkriegsbestand: Nur knapp fünf Prozent der Bocholter Wohnungen stammen aus der Zeit vor 1919, in Nordrhein-Westfalen sind es gut zehn. Dafür ist der Bestand ungewöhnlich großzügig — fast 60 Prozent der Wohnungen liegen in Ein- oder Zweifamilienhäusern, die Eigentümerquote liegt bei über 50 Prozent, und eine Wohnung misst im Schnitt 103 Quadratmeter. Das heißt in der Praxis meist: eigenes Haus, eigene Treppe ins Obergeschoss, viel Fläche, die gepflegt werden will.</Text>
        <Text>Rundherum wird es schnell ländlich. Bocholt ist zwar die größte Stadt im Kreis Borken, aber nicht die Kreisstadt — das ist Borken selbst. Wer in einer der Bauerschaften wohnt, in Barlo, Stenern, Biemenhorst oder Richtung Isselburg und Rhede, kennt die längeren Wege: Ein ambulanter Dienst fährt hier Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft, die im Haus wohnt, ist davon unabhängig. Anfahrtskosten berechnen wir nicht, der Preis ist überall derselbe.</Text>
        <Text>Ein Punkt, der im Ernstfall zählt: Eine geriatrische Fachabteilung gibt es am Bocholter Krankenhaus nicht. Wer nach einem Sturz oder Schlaganfall Altersmedizin braucht, wird nach Borken, Ahaus oder Gronau verlegt. Für die Zeit danach heißt das: Die Versorgung zu Hause sollte früh geklärt sein, nicht erst am Entlassungstag.</Text>
        <Text>Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung im Kreis Borken ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bocholt und Westmünsterland: Rhede, Borken, Isselburg, Raesfeld und alle Gemeinden im Kreis Borken',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
