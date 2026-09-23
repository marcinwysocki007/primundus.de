import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Neumarkt in der Oberpfalz anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Neumarkt i.d.OPf. | 6× Testsieger',
  description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Neumarkt in der Oberpfalz in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-neumarkt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Neumarkt i.d.OPf. | 6× Testsieger',
    description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Neumarkt in der Oberpfalz in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-neumarkt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Neumarkt in der Oberpfalz?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Neumarkt in der Oberpfalz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie ist die ambulante Versorgung im Landkreis Neumarkt?', a: 'Dünn. Für rund 138.000 Einwohner gibt es elf ambulante Pflegedienste; auf jeden kommen im Schnitt etwa 97 Pflegebedürftige, in Bayern sind es 58. Das ist einer der höchsten Werte der Oberpfalz. Wer kurzfristig Unterstützung braucht, merkt das sofort — die Dienste sind ausgelastet, und die Termine richten sich nach der Tour. Eine Betreuungskraft, die im Haus wohnt, hängt an keiner Tourenplanung.' },
  { q: 'Warum leben in Neumarkt so viele Pflegebedürftige im Heim?', a: 'Weil die Alternativen fehlen. Im Landkreis Neumarkt leben 20 Prozent aller Pflegebedürftigen in stationärer Dauerpflege, in Bayern sind es 17 und im Bund 14 Prozent. Zusammen mit der dünnen ambulanten Versorgung ergibt das für viele Familien ein Entweder-oder: alles selbst stemmen oder ins Heim. Die Betreuung im eigenen Zuhause ist der Weg dazwischen, und sie lässt sich mit dem Pflegegeld kombinieren.' },
  { q: 'Sind Neumarkter Wohnungen für Pflege zu Hause geeignet?', a: 'In aller Regel ja, barrierefrei sind sie aber selten. Im April 1945 lagen 92 Prozent der Bausubstanz im historischen Stadtkern in Trümmern — in der Marktstraße blieben zwei Häuser stehen. Was heute steht, ist deshalb fast durchweg Nachkriegsbau: Nur gut ein Prozent der Neumarkter Wohnungen stammt aus der Zeit vor 1919, im Bundesschnitt sind es dreizehn. Diese Häuser sind solide, entstanden aber vor jedem Gedanken an Barrierefreiheit. Für die Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Welches Einzugsgebiet wird in Neumarkt in der Oberpfalz bedient?', a: 'Neumarkt und Landkreis Neumarkt in der Oberpfalz: Parsberg, Velburg, Berching und alle Gemeinden im Landkreis Neumarkt' },
  { q: 'Ist in einer Wohnung in Neumarkt i.d.OPf. Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Neumarkt i.d.OPf. hat im Schnitt 100,9 m², 16,6 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 86,3 % der Gebäude in Neumarkt i.d.OPf. sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'neumarkt',
  ort: 'Neumarkt in der Oberpfalz',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Neumarkt i.d.OPf.',
  einleitung: <>Wer in Neumarkt alt geworden ist — in der Altstadt, in Woffenbach oder draußen Richtung Berg und Berngau — möchte den Blick auf den Jura und den eigenen Garten nicht gegen ein Pflegeheim tauschen. Muss auch niemand: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Neumarkt in der Oberpfalz',
  vorOrt: {
    inhalt: (
      <>
        <Text>Eine Zahl beschreibt die Lage im Landkreis Neumarkt besser als jede andere: Auf die rund 138.000 Einwohner kommen <strong className="text-pm-ink font-semibold">gerade einmal elf ambulante Pflegedienste</strong>. Jeder von ihnen versorgt im Schnitt rund 97 Pflegebedürftige — in Bayern sind es 58. Das ist einer der höchsten Werte der ganzen Oberpfalz. Wer hier kurzfristig Unterstützung braucht, merkt das sofort: Die Dienste sind ausgelastet, und die Termine richten sich nach der Tour.</Text>
        <Text>Entsprechend häufig endet der Weg im Heim. Im Landkreis leben 20 Prozent aller Pflegebedürftigen in stationärer Dauerpflege — in Bayern sind es 17, im Bund 14 Prozent. Das ist keine Frage der Vorliebe, sondern eine Frage fehlender Alternativen. Eine Betreuungskraft, die mit einzieht, ist genau diese Alternative: Sie hängt an keiner Tourenplanung, weil sie im Haus wohnt, und sie ist auch nachts und am Wochenende da.</Text>
        <Text>Dazu kommen die Entfernungen. Im Landkreis liegt der nächste Hausarzt im Schnitt fast 1.900 Meter entfernt, die nächste Apotheke fast 2.500 — deutlich weiter als im bayerischen Durchschnitt. Solange man Auto fährt, ist das kein Thema. Wenn der Führerschein wegfällt, wird daraus schnell die Frage, wer denn nun fährt. In der Stadt Neumarkt selbst ist die Lage besser, dafür ist die Stadt spürbar älter als ihr Umland: Über elf Prozent der Neumarkter sind über 75, im Landkreis sind es gut neun.</Text>
        <Text>Beim Wohnen prägt bis heute der April 1945. Im historischen Stadtkern lagen damals 92 Prozent der Bausubstanz in Trümmern; in der Marktstraße blieben zwei Häuser stehen. Was heute steht, ist deshalb fast durchweg Nachkriegsbau — <strong className="text-pm-ink font-semibold"> nur gut ein Prozent der Neumarkter Wohnungen stammt aus der Zeit vor 1919</strong>, im Bundesschnitt sind es dreizehn. Diese Häuser sind solide, aber sie entstanden vor jedem Gedanken an Barrierefreiheit. Und im Landkreis, wo mehr als sieben von zehn Wohnungen in Ein- oder Zweifamilienhäusern liegen, ist es meist die eigene Treppe, die zum Problem wird — in Freystadt, Berching oder Postbauer-Heng genauso wie in der Kernstadt.</Text>
        <Text>Bevor Sie etwas entscheiden, holen Sie sich eine neutrale Einschätzung: Die Fachstellen für Pflege- und Behindertenberatung in Bayern beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause (§ 7a SGB XI). Dazu kommt das bayerische Landespflegegeld: 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Neumarkt und Landkreis Neumarkt in der Oberpfalz: Parsberg, Velburg, Berching und alle Gemeinden im Landkreis Neumarkt',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
