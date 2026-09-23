import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bad Nauheim anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Nauheim | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Nauheim in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-nauheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bad Nauheim | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Nauheim in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bad-nauheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Nauheim?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Hessen kostet im Schnitt rund 3.230 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Nauheim starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Liegt der hohe Altersschnitt in Bad Nauheim an den Kurgästen?', a: 'Nein. Kurgäste sind nicht mit Hauptwohnsitz gemeldet und tauchen in der Bevölkerungsstatistik gar nicht auf — die 14,5 Prozent Einwohner über 75 entstehen ohne sie. Der eigentliche Grund ist Zuzug: Bad Nauheim gewinnt jedes Jahr deutlich mehr Menschen über 65 hinzu, als es verliert, während Hessen in dieser Altersgruppe insgesamt leicht abgibt. Viele ziehen hierher, um älter zu werden — und haben ihre Familie dann nicht in der Nähe.' },
  { q: 'Wir überlegen zwischen Heimplatz und Betreuung zu Hause — was ist im Wetteraukreis üblich?', a: 'Der Wetteraukreis hält rund 60 Heimplätze je 1.000 Einwohner über 65 vor, fast ein Drittel mehr als Hessen im Schnitt. Gleichzeitig beziehen 60 Prozent aller Pflegebedürftigen ausschließlich Pflegegeld, werden also allein von Angehörigen versorgt, und nur 14 Prozent nutzen einen ambulanten Dienst. Viel Heim, viel Angehörigenpflege — und wenig dazwischen. Eine Betreuungskraft im eigenen Zuhause ist genau dieser fehlende Mittelweg.' },
  { q: 'Ist Bad Nauheim für ältere Menschen gut erschlossen?', a: 'Ungewöhnlich gut. Die Stadt ist kompakt gebaut und liegt im flachen Talgrund der Wetterau; bis zum Hausarzt sind es im Schnitt gut 500 Meter, etwa halb so weit wie im Bundesdurchschnitt, zur Apotheke und zum Supermarkt ebenfalls deutlich weniger als anderswo. Was in Bad Nauheim fehlt, ist selten die Infrastruktur — es ist jemand im Haus, der beim Aufstehen hilft und nachts da ist.' },
  { q: 'Welches Einzugsgebiet wird in Bad Nauheim bedient?', a: 'Bad Nauheim und Wetteraukreis: Friedberg, Butzbach, Niddatal, Karben und alle Gemeinden im Wetteraukreis' },
  { q: 'Ist in einer Wohnung in Bad Nauheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Nauheim hat im Schnitt 95,9 m², 22,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 74,1 % der Gebäude in Bad Nauheim sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bad-nauheim',
  ort: 'Bad Nauheim',
  land: 'Hessen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Bad Nauheim ist zum Altwerden gemacht — Kurpark, Sprudelhof, kurze Wege. Und trotzdem kommt der Moment, in dem es allein in der Wohnung am Park oder im Haus in Steinfurth nicht mehr geht. Dann zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, damit das Zuhause Zuhause bleibt. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Wetteraukreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Bad Nauheim ist eine ausgesprochen alte Stadt — und das liegt nicht an den Kurgästen. <strong className="text-pm-ink font-semibold"> 14,5 Prozent der Einwohner sind über 75</strong>, im Bundesschnitt sind es 11,1. Kurgäste tauchen in dieser Statistik gar nicht auf: Wer im Schnitt ein paar Wochen bleibt, ist hier nicht gemeldet. Der wahre Grund lässt sich in den Wanderungszahlen ablesen — Bad Nauheim gewinnt jedes Jahr deutlich mehr Menschen über 65 hinzu, als es verliert, während Hessen insgesamt in dieser Altersgruppe leicht verliert. Menschen ziehen hierher, um älter zu werden.</Text>
        <Text>Das hat eine Folge, die im Alltag wiegt: <strong className="text-pm-ink font-semibold">Fast jeder fünfte Haushalt in Bad Nauheim ist ein Mensch über 65, der allein lebt.</strong> Wer zugezogen ist, hat die Kinder oft nicht in der Nähe — und alte Freundschaften auch nicht. Wenn dann etwas passiert, ein Sturz, ein Krankenhausaufenthalt, fehlt genau das, was anderswo selbstverständlich ist: jemand, der nach dem Rechten sieht.</Text>
        <Text>Im Wetteraukreis zeigt die Pflegestatistik ein klares Muster. 60 Prozent aller Pflegebedürftigen beziehen ausschließlich Pflegegeld, werden also von Angehörigen versorgt — mehr als in Hessen. Zugleich nutzen nur 14 Prozent einen ambulanten Dienst, der niedrigste Wert im weiten Umkreis. Dafür hält der Kreis <strong className="text-pm-ink font-semibold"> 60 Heimplätze je 1.000 Einwohner über 65 bereit, fast ein Drittel mehr als Hessen im Schnitt</strong>. Viel Angehörigenpflege, viel Heim — und dazwischen wenig. Die Betreuung im eigenen Zuhause ist genau dieser fehlende Mittelweg.</Text>
        <Text>Praktisch spricht vieles dafür, hier zu bleiben. Bad Nauheim ist kompakt gebaut, die Stadt liegt im flachen Talgrund der Wetterau, und die Wege sind kurz: Bis zum Hausarzt sind es im Schnitt gut 500 Meter, halb so weit wie im Bundesdurchschnitt. Was fehlt, ist selten die Infrastruktur — es ist die Person im Haus. Genau die bringt eine Betreuungskraft mit: morgens beim Aufstehen, nachts, und an den Nachmittagen, an denen sonst niemand vorbeikommt.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie sich entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte in Hessen beraten kostenlos und neutral, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI) und gilt unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>,
  },
  einzugsgebiet: 'Bad Nauheim und Wetteraukreis: Friedberg, Butzbach, Niddatal, Karben und alle Gemeinden im Wetteraukreis',
  stimmen: ['k-20260605-daniel', 'k-20260327-marco'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
