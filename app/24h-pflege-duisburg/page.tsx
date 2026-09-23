import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Duisburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Duisburg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Duisburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-duisburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Duisburg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Duisburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-duisburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Duisburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Duisburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Welches Einzugsgebiet wird in Duisburg bedient?', a: 'Duisburg und Umland: Krefeld, Mülheim an der Ruhr, Moers, Oberhausen und alle Gemeinden im Kreis Wesel' },
  { q: 'Ist in einer Wohnung in Duisburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Duisburg hat im Schnitt 77,6 m², 31,6 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 60,0 % der Gebäude in Duisburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'duisburg',
  ort: 'Duisburg',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Duisburg wohnt man bodenständig — in Buchholz, Rheinhausen oder Walsum, oft seit Jahrzehnten im selben Haus. Wenn die Kräfte nachlassen, muss das nicht enden: Eine Betreuungskraft von Primundus zieht mit ein, übernimmt Haushalt und Pflegealltag und ist auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>In keiner anderen Stadt, die wir uns bisher angesehen haben, tragen Familien so viel allein wie hier.{' '} <strong className="text-pm-ink font-semibold">27.900 Duisburgerinnen und Duisburger mit Pflegebedarf beziehen ausschließlich Pflegegeld</strong> — sie werden also ohne jeden Pflegedienst von Angehörigen versorgt. Das sind 62,1 Prozent aller Pflegebedürftigen, in Nordrhein-Westfalen 59,0 Prozent. Umgekehrt nutzen nur 14,4 Prozent einen ambulanten Dienst, im Land sind es 17,3. Insgesamt sind 44.910 Menschen in Duisburg pflegebedürftig.</Text>
        <Text>Das Bemerkenswerte daran: Es liegt nicht am Alter. Duisburg ist <em>jünger</em> als Nordrhein-Westfalen — 20,7 Prozent der Einwohner sind über 65, im Land 22,5 Prozent; bei den über 80-Jährigen 6,3 gegen 6,7 Prozent. Trotzdem liegt die Pflegequote mit 8,9 Prozent deutlich über dem Landeswert von 7,6. Die Stadt hat also nicht mehr alte Menschen, sondern mehr pflegebedürftige — und die werden überwiegend zu Hause versorgt, von Töchtern, Söhnen und Ehepartnern.</Text>
        <Text>Wie in Duisburg gewohnt wird, macht das nicht leichter.{' '} <strong className="text-pm-ink font-semibold">52,5 Prozent aller Gebäude stehen in geschlossener Reihe</strong> — in Nordrhein-Westfalen 27,2 Prozent. Das sind die Zechen- und Werkssiedlungen: schmaler Grundriss, steile Treppe, Schlafzimmer und Bad im Obergeschoss. Freistehend ist nur jedes fünfte Gebäude, im Land jedes zweite. Dazu kommt das Alter des Bestands: 70,3 Prozent aller Wohnungen stammen von vor 1970, gerade 2,3 Prozent von 2010 oder später. Wenn die Treppe zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
        <Text>Ein Punkt spricht dabei für Duisburg: Die durchschnittliche Wohnung misst 77,6 Quadratmeter und knapp ein Drittel liegt unter 60 — aber mit 5,84 Euro Nettokaltmiete je Quadratmeter ist Wohnraum hier so günstig wie in kaum einer anderen Großstadt. Wo ein Zimmer fehlt, ist etwas Größeres eher erreichbar als anderswo. Und Heimplätze sind trotz des niedrigen Heimanteils vorhanden: 51 je 1.000 Einwohner über 65 gegenüber 46 im Land. Duisburg ist also nicht heimarm — hier wird bewusst zu Hause gepflegt.</Text>
        <Text>Medizinisch ist die Stadt gut aufgestellt: vier Krankenhäuser mit eigener geriatrischer Abteilung, zusammen 225 Betten, dazu eine geriatrische Tagesklinik und eine Reha-Klinik am Ort. Die klinische Versorgung ist da. Was sie nicht abnimmt, ist der Alltag danach — und genau dort setzt eine Betreuungskraft an, die mit einzieht und die Dauerverantwortung von den Angehörigen nimmt. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Duisburg und Umland: Krefeld, Mülheim an der Ruhr, Moers, Oberhausen und alle Gemeinden im Kreis Wesel',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
