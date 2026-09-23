import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bergisch Gladbach anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bergisch Gladbach | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bergisch Gladbach in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bergisch-gladbach' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bergisch Gladbach | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bergisch Gladbach in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bergisch-gladbach',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bergisch Gladbach?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bergisch Gladbach starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Was tun, wenn die Kinder nicht in Bergisch Gladbach wohnen?', a: 'Das ist hier die häufigste Ausgangslage. Bergisch Gladbach hat einen überdurchschnittlich hohen Anteil Hochbetagter, und zugleich ziehen junge Erwachsene zum Studium weg — die Eltern werden also hier alt, während die Kinder in Köln, Düsseldorf oder weiter entfernt wohnen. Kümmern über Entfernung funktioniert im Alltag nicht: Niemand kann morgens beim Anziehen helfen und abends nachsehen, ob der Herd aus ist. Eine Betreuungskraft, die im Haus wohnt, übernimmt genau das — und die Angehörigen bleiben Angehörige.' },
  { q: 'Gilt das Angebot auch in Kürten, Overath oder Odenthal?', a: 'Ja, im gesamten Rheinisch-Bergischen Kreis. Dort ist es sogar besonders relevant: Bergisch Gladbach ist rund viermal so dicht besiedelt wie Kürten oder Overath. Wer in den dünner besiedelten Gemeinden lebt, wartet auf einen ambulanten Dienst, der lange Touren fährt. Eine Betreuungskraft im Haus ist davon unabhängig — der Preis ist derselbe wie in der Kreisstadt, Anfahrtskosten berechnen wir nicht.' },
  { q: 'Welches Einzugsgebiet wird in Bergisch Gladbach bedient?', a: 'Bergisch Gladbach und Rheinisch-Bergischer Kreis: Overath, Rösrath, Kürten, Odenthal und alle Gemeinden im Rheinisch-Bergischen Kreis' },
  { q: 'Ist in einer Wohnung in Bergisch Gladbach Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bergisch Gladbach hat im Schnitt 98,5 m², 18,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 80,2 % der Gebäude in Bergisch Gladbach sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bergisch-gladbach',
  ort: 'Bergisch Gladbach',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Bensberg, Refrath oder Paffrath wohnen viele, deren Kinder täglich nach Köln pendeln — und die ihr Haus im Grünen um nichts in der Welt aufgeben wollen. Müssen sie auch nicht: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, wenn allein leben nicht mehr geht. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Rheinisch-Bergischen Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Bergisch Gladbach ist eine ältere Stadt, als viele denken. Das Medianalter liegt bei 49 Jahren, jeder Vierte ist über 65, und fast jeder Zehnte ist über 80 — deutlich mehr als im Bundesschnitt. Gleichzeitig ziehen junge Erwachsene zum Studium weg. Für viele Familien heißt das: Die Eltern werden hier alt, die Kinder wohnen in Köln, Düsseldorf oder noch weiter weg.</Text>
        <Text>Genau diese Konstellation führt zu den Anrufen, die wir am häufigsten bekommen. Nicht, weil sich niemand kümmern will, sondern weil Kümmern über Entfernung nicht funktioniert. Wer eine Stunde entfernt arbeitet, kann nicht morgens beim Anziehen helfen und abends nachsehen, ob der Herd aus ist. Eine Betreuungskraft, die im Haus wohnt, übernimmt genau das — und die Angehörigen bleiben Angehörige, statt zum Pflegedienst auf Abruf zu werden.</Text>
        <Text>Dazu kommt die Lage am ansteigenden Westrand der Bergischen Höhen: Zwischen dem tiefsten und dem höchsten Punkt des Stadtgebiets liegen über 200 Höhenmeter. Was in Refrath eben ist, ist in Herkenrath oder Sand eine Steigung. Und im Kreis wird es dünner: Bergisch Gladbach ist rund viermal so dicht besiedelt wie Kürten oder Overath. Wer dort lebt, wartet auf einen ambulanten Dienst, der lange Touren fährt — eine Betreuungskraft im Haus ist davon unabhängig. Das gilt ebenso in Odenthal, Rösrath oder Burscheid.</Text>
      </>
    ),
    beratungsabsatz: <Text>Wenn Sie erst einmal sortieren möchten, was Ihnen zusteht: Die Pflegestützpunkte im Rheinisch-Bergischen Kreis beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Der Anspruch darauf ist gesetzlich verankert (§ 7a SGB XI).</Text>,
  },
  einzugsgebiet: 'Bergisch Gladbach und Rheinisch-Bergischer Kreis: Overath, Rösrath, Kürten, Odenthal und alle Gemeinden im Rheinisch-Bergischen Kreis',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
