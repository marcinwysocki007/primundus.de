import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Dormagen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Dormagen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dormagen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dormagen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Dormagen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dormagen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-dormagen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dormagen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dormagen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wir pflegen bisher selbst — lohnt sich eine Betreuungskraft trotzdem?', a: 'Gerade dann. Im Rhein-Kreis Neuss beziehen rund 63 Prozent aller Pflegebedürftigen Pflegegeld — in Nordrhein-Westfalen sind es 59, bundesweit 55 Prozent. Hier pflegen also überdurchschnittlich viele Familien selbst. Eine Betreuungskraft ersetzt Sie nicht, sie entlastet Sie: Sie bleiben Tochter oder Sohn, statt rund um die Uhr Pflegekraft zu sein. Pflegegeld und Betreuung lassen sich dabei kombinieren.' },
  { q: 'Welche Hindernisse gibt es in Dormagener Wohnungen typischerweise?', a: 'Anders als bei einer Industriestadt vermutet, ist es selten der Altbau — nur rund sieben Prozent der Wohnungen stammen aus der Zeit vor 1950, und gut zwei Drittel der Gebäude sind Einfamilienhäuser. Dort ist meist die eigene Treppe ins Obergeschoss die Hürde. In Horrem kommt eine zweite hinzu: Bei den Zeilenbauten der sechziger und siebziger Jahre liegt schon das Erdgeschoss zwei bis sechs Stufen über dem Außengelände, und einen Aufzug haben nur wenige Häuser.' },
  { q: 'Welches Einzugsgebiet wird in Dormagen bedient?', a: 'Dormagen und Rhein-Kreis Neuss Mitte: Neuss-Nord, Grevenbroich-Ost und alle Gemeinden im mittleren Rhein-Kreis Neuss' },
  { q: 'Ist in einer Wohnung in Dormagen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dormagen hat im Schnitt 97,2 m², 13,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 81,0 % der Gebäude in Dormagen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'dormagen',
  ort: 'Dormagen',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Viele Dormagener Familien kennen das: Die Kinder arbeiten in Köln oder Düsseldorf, die Eltern wohnen in Nievenheim, Hackenbroich oder bei der alten Zollfeste in Zons — und brauchen plötzlich mehr Hilfe, als sich mit Besuchen am Wochenende leisten lässt. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Rhein-Kreis Neuss',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Dormagen pflegen die Familien besonders oft selbst. Im Rhein-Kreis Neuss beziehen rund <strong className="text-pm-ink font-semibold">63 Prozent aller Pflegebedürftigen Pflegegeld</strong> — in Nordrhein-Westfalen sind es 59, bundesweit 55 Prozent. Pflegegeld bekommt, wer zu Hause von Angehörigen versorgt wird. Hinter dieser Zahl stehen also sehr viele Töchter, Söhne und Ehepartner, die das seit Jahren stemmen. Genau bei ihnen melden sich irgendwann die Grenzen: wenn der eigene Rücken nicht mehr mitmacht, wenn Nächte durchwacht werden, wenn der Urlaub seit Jahren ausfällt.</Text>
        <Text>Eine Betreuungskraft, die mit einzieht, ersetzt die Familie nicht — sie entlastet sie. Die Angehörigen bleiben Tochter oder Sohn, statt rund um die Uhr Pflegekraft zu sein. Und weil Pflegegeld und Betreuung sich kombinieren lassen, muss dafür niemand den bisherigen Weg komplett aufgeben.</Text>
        <Text>Beim Wohnen ist Dormagen anders, als man es einer Industriestadt zutrauen würde: Gründerzeit-Altbau gibt es hier kaum, nur etwa sieben Prozent der Wohnungen stammen aus der Zeit vor 1950. Gut zwei Drittel der Gebäude sind Einfamilienhäuser — die Barriere ist dort meist die eigene Treppe ins Obergeschoss. In Horrem, das zu großen Teilen als Werkssiedlung für das Chemiewerk entstand, kommt eine andere hinzu: Bei den Zeilenbauten der sechziger und siebziger Jahre liegt schon das Erdgeschoss zwei bis sechs Stufen über dem Außengelände, und einen Aufzug haben nur wenige Häuser. Ebenerdig ist die Stadt zwar — sie liegt flach am Rhein —, aber bis zur Wohnungstür hilft das nicht.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie etwas entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte im Rhein-Kreis Neuss beraten kostenlos und neutral, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — und er gilt unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>,
  },
  einzugsgebiet: 'Dormagen und Rhein-Kreis Neuss Mitte: Neuss-Nord, Grevenbroich-Ost und alle Gemeinden im mittleren Rhein-Kreis Neuss',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
