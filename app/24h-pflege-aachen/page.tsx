import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Aachen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Aachen | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Aachen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-aachen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Aachen | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Aachen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-aachen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Aachen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Aachen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Aachen?', a: '24.661 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,4 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 19,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Aachen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Aachen im Schnitt 3,5 Wohnungen, in Nordrhein-Westfalen 2,3. 25,2 Prozent der Gebäude stehen frei, 51,3 Prozent stehen in geschlossener Reihe. 56,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Aachen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie schwer ist es, in Aachen einen Heimplatz zu bekommen?', a: 'Schwer, und das ist belegt. Aachen hat mit 12,3 Prozent den höchsten Anteil vollstationär versorgter Pflegebedürftiger der Städteregion, aber nur 137 Heimplätze je 1.000 Einwohner über 80 — in der Städteregion sind es 153. Die Auslastung liegt bei 93 Prozent, im Heimfinder NRW ist weniger als ein Prozent der Plätze frei; die Pflegeplanung der Städteregion spricht von faktischer Vollbelegung, bei der die Wahlmöglichkeit entfällt. Aachen ist zudem die einzige Kommune der Region, in der das Angebot geschrumpft ist: 64 Plätze weniger als 2021. Für viele Familien ist die Betreuung zu Hause deshalb die einzige Lösung, die sich planen lässt.' },
  { q: 'Welches Einzugsgebiet wird in Aachen bedient?', a: 'Aachen und StädteRegion: Alsdorf, Baesweiler, Eschweiler, Herzogenrath, Würselen und alle Gemeinden in der StädteRegion Aachen' },
  { q: 'Ist in einer Wohnung in Aachen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Aachen hat im Schnitt 77,5 m², 40,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,2 % der Gebäude in Aachen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'aachen',
  ort: 'Aachen',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in Burtscheid, Brand oder Laurensberg: Aachener bleiben ihrer Stadt im Dreiländereck treu — und ihrem Zuhause erst recht. Wenn Mutter oder Vater mehr Hilfe brauchen, als die Familie leisten kann, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'der StädteRegion Aachen',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Aachen ist der Heimplatz knapp, und das lässt sich beziffern. Die Stadt hat mit 12,3 Prozent den höchsten Anteil vollstationär versorgter Pflegebedürftiger der ganzen Städteregion — gleichzeitig stehen hier{' '} <strong className="text-pm-ink font-semibold">nur 137 Heimplätze je 1.000 Einwohner über 80 zur Verfügung, in der Städteregion sind es 153.</strong> Mehr Menschen im Heim bei weniger Plätzen: Das geht nur mit Vollbelegung. Die Auslastung liegt bei 93 Prozent, im Heimfinder NRW sind unter ein Prozent der Plätze frei. Die Pflegeplanung der Städteregion nennt das eine faktische Vollbelegung, bei der die Wahlmöglichkeit der Betroffenen entfällt.</Text>
        <Text>Und es wird enger, nicht weiter.{' '} <strong className="text-pm-ink font-semibold">Aachen ist die einzige Kommune der Region, in der das Heimplatzangebot geschrumpft ist</strong> — 64 Plätze weniger als 2021. Über 300 Plätze unerfüllter Bedarf finden, wie die Planung nüchtern festhält, investorenseitig keine Resonanz. Wer in Aachen für die Eltern einen Heimplatz sucht, sucht also nicht wochenlang, sondern länger. Die häusliche Lösung ist hier für viele Familien nicht die zweitbeste, sondern die einzige, die sich planen lässt.</Text>
        <Text>Versorgt wird in Aachen dabei professioneller als im Umland: 14,6 Prozent der Pflegebedürftigen nutzen einen ambulanten Dienst, 65,9 Prozent beziehen ausschließlich Pflegegeld. In den Altkreiskommunen liegt der professionelle Anteil bei 22 Prozent, in der Stadt bei fast 27. Das passt zum Angebot: 47 ambulante Dienste sind in Aachen ansässig — 43 Prozent des regionalen Angebots bei 40 Prozent der über 70-Jährigen.</Text>
        <Text>Beim Alter zerfällt Aachen in zwei Städte, und der Abstand wächst. Zwischen dem jüngsten und dem ältesten Stadtbezirk liegen{' '} <strong className="text-pm-ink font-semibold">15,8 Jahre Durchschnittsalter</strong> — am Ponttor 32,7 Jahre, in Steinebrück 48,5. Bemerkenswert ist die Richtung: Seit 2010 verjüngt sich die Innenstadt weiter, während die Außenbezirke altern. In Walheim stieg das Durchschnittsalter um fast vier Jahre, im Bezirk Theater sank es um ebenso viel. Wer in Aachen Pflege plant, plant für Kornelimünster, Walheim, Richterich und die Beverau — nicht für das Hochschulviertel.</Text>
        <Text>Zur Geriatrie zwei Hinweise, die Wege sparen. Die eigenständige geriatrische Klinik der Stadt sitzt im <strong className="text-pm-ink font-semibold">Luisenhospital am Boxgraben</strong> — mit Akutgeriatrie, geriatrischer Rehabilitation und Tagesklinik unter einem Dach. Die Altersmedizin der Uniklinik liegt dagegen nicht auf dem Hauptcampus an der Pauwelsstraße, sondern am Morillenhang im früheren Franziskushospital. Und das „Rhein-Maas Klinikum", das bei der Suche nach Geriatrie in Aachen weit oben auftaucht, steht in Würselen. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Aachen und StädteRegion: Alsdorf, Baesweiler, Eschweiler, Herzogenrath, Würselen und alle Gemeinden in der StädteRegion Aachen',
  stimmen: ['k-20260202-nicole'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
