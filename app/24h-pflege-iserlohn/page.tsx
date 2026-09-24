import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Iserlohn anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Betreuung und Pflege in Iserlohn | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Iserlohn in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-iserlohn' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Betreuung und Pflege in Iserlohn | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Iserlohn in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-iserlohn',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Iserlohn?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Iserlohn starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Funktioniert 24-Stunden-Pflege auch in einem Iserlohner Altbau?', a: 'Ja, und hier stellt sich die Frage häufiger als anderswo. Weil Iserlohn im Krieg weitgehend verschont blieb, steht viel alte Bausubstanz — mit engen Treppenhäusern und selten einem Aufzug. Für die Betreuungskraft braucht es lediglich ein eigenes Zimmer. Der eigentliche Gewinn liegt darin, dass jemand im Haus ist und die Wege nach draußen übernimmt, sobald die Treppe zur Hürde wird.' },
  { q: 'Was bedeutet die Höhenlage für die Betreuung in Iserlohn?', a: 'Zwischen der Ruhr im Norden und dem Rüssenberg im Süden liegen rund 390 Höhenmeter — Iserlohn ist eine Sauerlandstadt, keine Stadt der Ebene. Wer am Hang wohnt, für den beginnt jeder Weg mit einer Steigung, auch der zur Bushaltestelle. Viele Ältere bleiben deshalb irgendwann einfach zu Hause. Eine Betreuungskraft übernimmt diese Wege: einkaufen, zum Arzt begleiten, Termine organisieren — und hält damit den Alltag offen.' },
  { q: 'Kommt eine Betreuungskraft auch in die Stadtteile und Nachbarorte?', a: 'Ja. Letmathe ist mit rund 24.800 Einwohnern der mit Abstand größte Stadtteil, dazu kommen Hennen, Kesbern, Sümmern und die kleineren Ortslagen. Auch in Hemer, Menden, Altena und Lüdenscheid sind unsere Betreuungskräfte im Einsatz. Die Anreise dauert überall gleich lang, Anfahrtskosten berechnen wir nicht, und der Preis ist derselbe wie in der Kernstadt.' },
  { q: 'Welches Einzugsgebiet wird in Iserlohn bedient?', a: 'Iserlohn und Märkischer Kreis: Lüdenscheid, Hemer, Menden, Plettenberg und alle Gemeinden im Märkischen Kreis' },
  { q: 'Ist in einer Wohnung in Iserlohn Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Iserlohn hat im Schnitt 88,7 m², 23,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 72,0 % der Gebäude in Iserlohn sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'iserlohn',
  ort: 'Iserlohn',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Waldstadt lässt man nicht gern los: das eigene Haus in Letmathe oder Hennen, der Blick ins Grüne am Seilersee, die Nachbarn von nebenan. Wenn Mutter oder Vater mehr Hilfe brauchen, als die Familie leisten kann, zieht eine Betreuungskraft von Primundus mit ein — und ist bei Bedarf auch nachts da.</>,
  kreis: 'Märkischen Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Iserlohn liegt im Sauerland, nicht im Ruhrgebiet — und das ist keine Wortklauberei, sondern spürbar. Zwischen der Ruhr im Norden auf gut 100 Metern und dem Rüssenberg im Süden auf fast 500 Metern liegen rund <strong className="text-pm-ink font-semibold">390 Höhenmeter</strong>. Das Stadtzentrum sitzt auf etwa 250 Metern, das südliche Stadtdrittel ist waldbeherrscht. Wer hier wohnt, kennt Steigungen. Sobald das Gehen schwerfällt, entscheidet die Adresse darüber, wie weit man noch kommt.</Text>
        <Text>Beim Wohnen unterscheidet sich Iserlohn deutlich von den meisten Städten der Region: Die Stadt blieb im Zweiten Weltkrieg weitgehend verschont — sie wurde Mitte April 1945 kampflos übergeben. Wo andernorts der Wiederaufbau der fünfziger Jahre das Straßenbild prägt, steht in Iserlohn viel gewachsene alte Bausubstanz. Schön, aber eben auch: enge Treppenhäuser, hohe Stufen, selten ein Aufzug. Genau diese Häuser wollen die Menschen nicht verlassen, wenn sie älter werden.</Text>
        <Text>Dazu kommt die demografische Entwicklung. Iserlohn ist die größte Stadt des Märkischen Kreises und des gesamten Sauerlandes, aber die Einwohnerzahl geht seit dem Höchststand um die Jahrtausendwende zurück — von knapp 99.500 im Jahr 1999 auf rund 92.000 heute. Wenn eine Stadt schrumpft, sind es meist die Jüngeren, die gehen. Zurück bleiben Eltern und Großeltern, deren Kinder in Dortmund, Hagen oder weiter entfernt arbeiten. Hilfe am Wochenende ist dann möglich; Hilfe am Dienstagmorgen um sieben nicht.</Text>
        <Text>Eine Betreuungskraft, die mit einzieht, schließt genau diese Lücke. Sie ist morgens da, nachts, und an den langen Nachmittagen, an denen sonst niemand vorbeikommt. Sie übernimmt die Wege, die durch die Hanglage schwierig geworden sind, und führt den Haushalt mit. Das gilt in Letmathe, dem mit Abstand größten Stadtteil, ebenso wie in Hennen, Kesbern oder Sümmern — und ebenso in den Nachbarstädten Hemer, Menden und Altena. Anfahrtskosten berechnen wir nicht, der Preis ist überall derselbe.</Text>
        <Text>Bevor Sie sich festlegen, lassen Sie sich unabhängig beraten: Die Pflegeberatung im Märkischen Kreis ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Iserlohn und Märkischer Kreis: Lüdenscheid, Hemer, Menden, Plettenberg und alle Gemeinden im Märkischen Kreis',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
