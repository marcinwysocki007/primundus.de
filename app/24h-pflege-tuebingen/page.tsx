import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Tübingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Betreuung und Pflege in Tübingen | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Tübingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-tuebingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Betreuung und Pflege in Tübingen | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Tübingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-tuebingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Tübingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Tübingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Ist eine Betreuung in der Tübinger Altstadt überhaupt praktikabel?', a: 'Ja, und sie ist dort oft besonders sinnvoll. Kopfsteinpflaster, enge Gassen und die Hanglage machen jeden Weg nach draußen anstrengend — selbst die offizielle Stadtführung für Rollstuhlfahrer braucht eine eigens ausgesuchte Route. Wer hier seit Jahrzehnten wohnt, will deshalb nicht wegziehen. Eine Betreuungskraft, die mit einzieht, übernimmt genau die Wege, die schwierig geworden sind, und macht das Wohnenbleiben damit erst möglich.' },
  { q: 'Kommt eine Betreuungskraft auch in die Tübinger Teilorte und in den Landkreis?', a: 'Ja. Hagelloch, Bebenhausen, Unterjesingen und Kilchberg sind klein, und im Landkreis Tübingen haben neun von fünfzehn Gemeinden weniger als 10.000 Einwohner. Dort fahren ambulante Dienste längere Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft im Haus ist davon unabhängig — in Rottenburg, Mössingen oder Ammerbuch genauso wie in der Stadt, zum selben Preis und ohne Anfahrtskosten.' },
  { q: 'Welches Einzugsgebiet wird in Tübingen bedient?', a: 'Tübingen und Landkreis Tübingen: Rottenburg am Neckar, Mössingen, Ammerbuch und alle Gemeinden im Landkreis Tübingen' },
  { q: 'Ist in einer Wohnung in Tübingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Tübingen hat im Schnitt 87,3 m², 34,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 66,0 % der Gebäude in Tübingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'tuebingen',
  ort: 'Tübingen',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Tübingen leben viele Eltern, deren Kinder längst in München, Hamburg oder im Ausland arbeiten — und die trotzdem in ihrer Wohnung an der Neckarfront, in Lustnau oder Derendingen bleiben möchten. Eine Betreuungskraft von Primundus macht das möglich: Sie wohnt mit im Haushalt und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Tübingen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Tübingen gilt als eine der jüngsten Städte Deutschlands — Durchschnittsalter knapp 40, über 26.000 Studierende. Das verdeckt leicht, dass hier rund 15.000 Menschen leben, die 65 oder älter sind. Sie werden in einer Stadt alt, die auf junge Beine ausgelegt ist.</Text>
        <Text>Am deutlichsten wird das in der Altstadt. Das historische Kopfsteinpflaster und die Gassen am Hang sind schön, aber für einen Rollator eine ernste Hürde; allein zum Schloss hinauf sind rund 40 Höhenmeter zu überwinden. Selbst die offizielle Stadtführung für Rollstuhlfahrer braucht eine eigens ausgesuchte Route. Wer hier seit vierzig Jahren wohnt, gibt die Wohnung deshalb nicht auf — aber der Weg zum Bäcker wird irgendwann zur Entscheidung, die man sich morgens gut überlegt.</Text>
        <Text>In den Teilorten stellt sich die Frage anders. Hagelloch, Bebenhausen, Unterjesingen und Kilchberg sind klein, und im Landkreis sind neun von fünfzehn Gemeinden kleiner als 10.000 Einwohner. Dort ist der ambulante Dienst nicht um die Ecke, und die Termine richten sich nach der Tour. Eine Betreuungskraft, die mit einzieht, ist von Fahrplänen unabhängig: Sie ist da, wenn sie gebraucht wird — in Tübingen genauso wie in Rottenburg, Mössingen oder Ammerbuch.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie entscheiden, holen Sie sich eine neutrale Einschätzung: Die Pflegestützpunkte in Baden-Württemberg beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Beratungsanspruch ist gesetzlich geregelt (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>,
  },
  einzugsgebiet: 'Tübingen und Landkreis Tübingen: Rottenburg am Neckar, Mössingen, Ammerbuch und alle Gemeinden im Landkreis Tübingen',
  stimmen: ['k-20260429-ulrike'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
