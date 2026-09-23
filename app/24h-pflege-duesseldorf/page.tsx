import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Düsseldorf anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Düsseldorf | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Düsseldorf in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-duesseldorf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Düsseldorf | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Düsseldorf in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-duesseldorf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Düsseldorf?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Düsseldorf starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Gibt es in Düsseldorf genug Heimplätze als Alternative?', a: 'Weniger als im Landesdurchschnitt. Düsseldorf hat 40 vollstationäre Heimplätze je 1.000 Einwohner über 65, in Nordrhein-Westfalen sind es 46. Beide Kennzahlen zeigen dabei in dieselbe Richtung: Auch der Anteil der Pflegebedürftigen, die im Heim leben, liegt mit 11,3 Prozent unter dem Landeswert von 12,2 Prozent. Bei 40.248 Pflegebedürftigen in der Stadt bedeutet das eine spürbar längere Suche. Für viele Familien ist die Betreuung zu Hause deshalb nicht die zweitbeste Lösung, sondern die einzige, die sich kurzfristig umsetzen lässt.' },
  { q: 'Funktioniert 24-Stunden-Betreuung in einer Düsseldorfer Nachkriegswohnung?', a: 'Häufig ja — es ist hier sogar der Normalfall. 43,3 Prozent aller Düsseldorfer Wohnungen stammen aus den Jahren 1950 bis 1969, allein 87.521 aus den Fünfzigern; in NRW sind es 33,6 Prozent. Auf ein Gebäude kommen 4,7 Wohnungen. Die typische Ausgangslage ist also eine Mietwohnung im Obergeschoss eines Wiederaufbaus. Gerade wenn die Treppe zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Notwendig ist ein eigenes, abschließbares Zimmer — die durchschnittliche Wohnung misst 77,6 Quadratmeter, gut jede dritte liegt unter 60.' },
  { q: 'Wie wird in Düsseldorf gepflegt — eher familiär oder professionell?', a: 'Deutlich professioneller als im Land. Nur 56,9 Prozent der Düsseldorfer Pflegebedürftigen beziehen ausschließlich Pflegegeld, versorgen sich also rein familiär; in Nordrhein-Westfalen sind es 59,0 Prozent. Dafür nehmen 21,0 Prozent einen ambulanten Dienst in Anspruch gegenüber 17,3 Prozent im Land. Eine Betreuungskraft im Haushalt setzt diesen Weg fort: nicht ein Besuch dreimal täglich, sondern durchgehend jemand vor Ort — auch nachts.' },
  { q: 'Welches Einzugsgebiet wird in Düsseldorf bedient?', a: 'Düsseldorf und Umland: Ratingen, Mettmann, Neuss, Krefeld, Meerbusch, Langenfeld, Hilden, Erkrath und alle Gemeinden im Rhein-Kreis Neuss und Kreis Mettmann' },
  { q: 'Ist in einer Wohnung in Düsseldorf Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Düsseldorf hat im Schnitt 77,6 m², 36,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. In Düsseldorf liegen 49,9 % der Wohnungen in Ein- oder Zweifamilienhäusern, der Rest sind Geschosswohnungen — dann zählt, welches Stockwerk und ob es einen Aufzug gibt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'duesseldorf',
  ort: 'Düsseldorf',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Wohnung in Oberkassel, das Haus in Gerresheim, der Garten in Kaiserswerth: Düsseldorfer geben ihr Zuhause ungern auf — schon gar nicht für einen Heimplatz mit Wartezeit. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da, von Benrath bis Wittlaer. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Düsseldorf wohnt zu einem erstaunlichen Teil in den fünfziger Jahren.{' '} <strong className="text-pm-ink font-semibold">43,3 Prozent aller Wohnungen der Stadt stammen aus den Jahren 1950 bis 1969</strong> — in Nordrhein-Westfalen sind es 33,6 Prozent. Allein aus den Fünfzigern kommen 87.521 Wohnungen. Das ist der Wiederaufbau, und der baute in die Höhe: Auf ein Düsseldorfer Gebäude kommen 4,7 Wohnungen, in NRW sind es 2,3. Wer in dieser Stadt alt wird, wird das mit hoher Wahrscheinlichkeit im dritten oder vierten Obergeschoss eines Nachkriegsbaus. Was das für Treppen bedeutet, weiß jede Familie, die schon einmal einen Rollator hochgetragen hat.</Text>
        <Text>Die zweite Zahl, die man kennen sollte, betrifft die Alternative.{' '} <strong className="text-pm-ink font-semibold">Düsseldorf hat 40 vollstationäre Heimplätze je 1.000 Einwohner über 65 — Nordrhein-Westfalen 46.</strong> Und das ist keine Frage der Betrachtungsweise: Auch der Anteil der Pflegebedürftigen, die im Heim leben, liegt mit 11,3 Prozent unter dem Landeswert von 12,2. Beide Kennzahlen zeigen in dieselbe Richtung. Bei 40.248 Pflegebedürftigen in der Stadt heißt das schlicht: Der Heimplatz ist hier knapper als anderswo in NRW. Für viele Familien ist die häusliche Lösung nicht die zweitbeste, sondern die einzige, die kurzfristig verfügbar ist.</Text>
        <Text>Auffällig ist auch, wie in Düsseldorf gepflegt wird. Nur 56,9 Prozent beziehen ausschließlich Pflegegeld, versorgen sich also rein familiär — in NRW sind es 59,0 Prozent. Dafür nehmen 21,0 Prozent einen ambulanten Dienst in Anspruch, gegenüber 17,3 im Land. Düsseldorfer Familien kaufen professionelle Unterstützung eher ein, als alles allein zu tragen. Eine Betreuungskraft im Haushalt ist die konsequente Fortsetzung dieses Wegs: nicht dreimal täglich ein Besuch, sondern durchgehend jemand da.</Text>
        <Text>Beim Platz wird es allerdings eng. Die durchschnittliche Düsseldorfer Wohnung misst 77,6 Quadratmeter gegenüber 92,7 im Land, gut jede dritte liegt unter 60, und nur 22,1 Prozent der Haushalte wohnen im Eigentum. Bei 9,24 Euro Nettokaltmiete je Quadratmeter ist der Umzug in etwas Größeres für die meisten keine Option. Ob ein eigenes Zimmer für die Betreuungskraft frei wird, entscheidet sich deshalb sehr konkret — und diese Frage klären wir vorher, nicht hinterher.</Text>
        <Text>Dazu kommt, dass Düsseldorf zwei sehr verschiedene Städte ist. In Friedrichstadt leben gut 20.000 Menschen je Quadratkilometer, in Hubbelrath 130. Innenstadtlagen wie Pempelfort oder Unterbilk haben alles fußläufig; in Kalkum, Angermund oder Himmelgeist geht ohne Auto wenig. Für eine Kraft, die im Haus wohnt, spielt das keine Rolle. Medizinisch ist die Stadt gut aufgestellt — St. Martinus in Bilk und das Krankenhaus Elbroich führen beide eine eigene geriatrische Klinik, St. Martinus zusätzlich eine Tagesklinik. Bevor Sie entscheiden, lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt zu Ihnen.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Düsseldorf und Umland: Ratingen, Mettmann, Neuss, Krefeld, Meerbusch, Langenfeld, Hilden, Erkrath und alle Gemeinden im Rhein-Kreis Neuss und Kreis Mettmann',
  stimmen: ['k-20260814-andrea', 'k-20260311-claudia', 'k-20241120-oliver'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
