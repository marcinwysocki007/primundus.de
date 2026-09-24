import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Breisach am Rhein anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Freiburg & Umland | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Breisach am Rhein in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-freiburg-umland' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Freiburg & Umland | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Breisach am Rhein in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-freiburg-umland',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Breisach am Rhein?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Breisach am Rhein starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Ist unsere Wohnung in Freiburg überhaupt groß genug für eine Betreuungskraft?', a: 'Das ist in Freiburg tatsächlich die erste Frage. Die Stadt hat mit rund 81 Quadratmetern die kleinsten Wohnungen der Region — im Land sind es 99 —, und gut ein Drittel misst weniger als 60 Quadratmeter. Eine Betreuungskraft braucht ein eigenes Zimmer, das ist die Voraussetzung. In vielen Freiburger Wohnungen lässt sich das einrichten, in einer kleinen Zwei-Zimmer-Wohnung nicht. Wir klären das vorab mit Ihnen, bevor irgendetwas entschieden wird — und sagen es offen, wenn es nicht passt.' },
  { q: 'Wäre ein Umzug in eine altersgerechte Wohnung nicht einfacher?', a: 'In Freiburg leider selten. Die Stadt hat mit gut zwei Prozent die niedrigste Leerstandsquote aller 44 Stadt- und Landkreise Baden-Württembergs und gehört zu den vier teuersten Großstädten Deutschlands. Wer hier eine bezahlbare, barrierearme Wohnung sucht, sucht lange — und muss meist das gewohnte Viertel verlassen. Deshalb ist die praktikablere Frage in der Regel, wie das Leben in der vorhandenen Wohnung weitergehen kann.' },
  { q: 'Kommt eine Betreuungskraft auch in die Gemeinden im Schwarzwald?', a: 'Ja, und dort ist der Unterschied besonders groß. Zwischen der Rheinebene und dem Hochschwarzwald liegen über 1.300 Höhenmeter. Ein ambulanter Dienst, der Gemeinden am Berg anfährt, plant im Winter anders als im Sommer, und die Termine richten sich nach der Tour. Eine Betreuungskraft, die im Haus wohnt, ist davon unabhängig. Anfahrtskosten berechnen wir nicht, der Preis ist im Umland derselbe wie in der Stadt.' },
  { q: 'Welches Einzugsgebiet wird in Breisach am Rhein bedient?', a: 'Breisach und westlicher Breisgau-Hochschwarzwald: Freiburg-Umland, Vogtsburg, Ihringen, Kaiserstuhl und alle Gemeinden im westlichen Landkreis Breisgau-Hochschwarzwald' },
  { q: 'Ist in einer Wohnung in Freiburg & Umland Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Freiburg & Umland hat im Schnitt 80,8 m², 35,0 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 55,1 % der Gebäude in Freiburg & Umland sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'freiburg-umland',
  ort: 'Freiburg',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Freiburg & Umland',
  einleitung: <>Vom Kaiserstuhl bis ins Dreisamtal: Rund um Freiburg wohnt man mit Blick auf Reben und Schwarzwald — in Gundelfingen, Denzlingen, Bad Krozingen oder Kirchzarten. Damit das Zuhause auch mit Pflegebedarf bleibt, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'westlichen Breisgau-Hochschwarzwald',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Freiburg entscheidet die Wohnung. Die Stadt hat mit rund 81 Quadratmetern die kleinsten Wohnungen weit und breit — im Land sind es 99 —, und <strong className="text-pm-ink font-semibold"> gut ein Drittel aller Freiburger Wohnungen misst weniger als 60 Quadratmeter</strong>. Fast 60 Prozent liegen in Häusern mit sieben und mehr Parteien, und knapp drei Viertel der Freiburger wohnen zur Miete. Für Pflege zu Hause heißt das: Der Platz für ein Pflegebett, für Hilfsmittel und für ein eigenes Zimmer der Betreuungskraft ist hier die erste Frage, nicht die letzte.</Text>
        <Text>Umziehen ist dabei keine echte Option. Freiburg hat mit gut zwei Prozent die <strong className="text-pm-ink font-semibold"> niedrigste Leerstandsquote aller 44 Stadt- und Landkreise Baden-Württembergs</strong> und gehört zu den vier teuersten Großstädten Deutschlands. Wer hier eine bezahlbare, altersgerechte Wohnung sucht, sucht lange. Deshalb ist die Frage meist nicht, wohin jemand zieht, sondern wie das Leben in der vorhandenen Wohnung weitergehen kann.</Text>
        <Text>Das Umland ist in fast jedem Punkt das Gegenteil. In Breisgau-Hochschwarzwald und Emmendingen sind die Wohnungen mit gut 103 Quadratmetern deutlich größer, mehr als die Hälfte der Menschen wohnt im Eigentum, und in beiden Kreisen ist knapp die Hälfte aller Gebäude ein Ein- oder Zweifamilienhaus. Dort ist selten der Platz das Problem, sondern die Treppe ins Obergeschoss — und die Entfernung. Zwischen der Rheinebene und dem Hochschwarzwald liegen über 1.300 Höhenmeter; ein ambulanter Dienst, der Gemeinden am Berg anfährt, plant im Winter anders als im Sommer.</Text>
        <Text>Eine Zahl sollten Familien kennen, bevor es eilt: In Freiburg gibt es nur rund zwei Dutzend Kurzzeitpflegeplätze — für eine Stadt mit über 230.000 Einwohnern. Wer nach einem Krankenhausaufenthalt kurzfristig eine Überbrückung braucht, findet sie also selten. Eine Betreuungskraft, die mit einzieht, lässt sich dagegen in wenigen Tagen organisieren und ist von Anfang an eine dauerhafte Lösung, keine Überbrückung.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte in Baden-Württemberg beraten kostenlos und neutral, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich geregelt (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>,
  },
  einzugsgebiet: 'Breisach und westlicher Breisgau-Hochschwarzwald: Freiburg-Umland, Vogtsburg, Ihringen, Kaiserstuhl und alle Gemeinden im westlichen Landkreis Breisgau-Hochschwarzwald',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
