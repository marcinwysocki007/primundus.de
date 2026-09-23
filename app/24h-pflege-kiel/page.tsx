import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Kiel anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Kiel | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Kiel in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-kiel' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Kiel | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Kiel in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-kiel',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Kiel?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Schleswig-Holstein kostet im Schnitt rund 3.040 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Kiel starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Kiel?', a: '24.749 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,9 Prozent — in Schleswig-Holstein 12,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Schleswig-Holstein: 26,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Kiel — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Kiel im Schnitt 3,6 Wohnungen, in Schleswig-Holstein 1,8. 32,5 Prozent der Gebäude stehen frei, 46,0 Prozent stehen in geschlossener Reihe. 70,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Kiel ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Warum gibt es in Kiel so viele ambulante Pflegedienste?', a: 'Weil Heimplätze knapp sind. Kiel hat 54 ambulante Dienste bei nur 34 Pflegeheimen, und auf 1.000 Einwohner kommen 8,3 vollstationäre Plätze — im Land sind es 12,8, die dünnste Decke aller vier kreisfreien Städte Schleswig-Holsteins. Entsprechend werden hier 28,6 Prozent der Pflegebedürftigen ambulant betreut (Land: 21,3 Prozent). Kiel ist zudem der einzige Kreis in Schleswig-Holstein, in dem die ambulanten Dienste mehr Personal beschäftigen als die Heime. Zwischen 2021 und 2023 stieg die Zahl der Pflegebedürftigen um 11,9 Prozent, während 86 Heimplätze wegfielen.' },
  { q: 'Welches Einzugsgebiet wird in Kiel bedient?', a: 'Kiel und Umland: Neumünster, Rendsburg, Plön, Preetz und alle Gemeinden im Kreis Rendsburg-Eckernförde und Plön' },
  { q: 'Ist in einer Wohnung in Kiel Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Kiel hat im Schnitt 73,0 m², 42,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 67,0 % der Gebäude in Kiel sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Schleswig-Holstein zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.040 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'kiel',
  ort: 'Kiel',
  land: 'Schleswig-Holstein',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in Wik mit Blick auf die Förde, in Elmschenhagen oder drüben in Kronshagen: Kieler bleiben gern, wo das Wasser nah ist. Auch mit Pflegebedarf — eine Betreuungskraft von Primundus zieht mit ein, übernimmt Haushalt, Begleitung und die Nacht, und das vertraute Zuhause bleibt erhalten. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Kiel geht einen anderen Weg als der Rest von Schleswig-Holstein. Während anderswo die Last überwiegend bei den Familien liegt, setzt diese Stadt auf ambulante Dienste:{' '} <strong className="text-pm-ink font-semibold">28,6 Prozent der Pflegebedürftigen werden von einem Pflegedienst betreut, im Land sind es 21,3 Prozent.</strong> Der Anteil derer, die allein von Angehörigen versorgt werden, liegt mit 43,4 Prozent dagegen unter dem Landeswert. Kiel hat 54 ambulante Dienste bei nur 34 Pflegeheimen — und ist der einzige Kreis in Schleswig-Holstein, in dem die ambulanten Dienste mehr Personal beschäftigen als die Heime.</Text>
        <Text>Das hat einen handfesten Hintergrund: Heimplätze sind hier knapp. Auf 1.000 Einwohner kommen in Kiel 8,3 vollstationäre Plätze, im Land 12,8 — die dünnste Decke aller vier kreisfreien Städte Schleswig-Holsteins. Und sie wird dünner.{' '} <strong className="text-pm-ink font-semibold">Zwischen 2021 und 2023 stieg die Zahl der Pflegebedürftigen um 11,9 Prozent, die Zahl der Heimplätze sank um 86.</strong> Der Zuwachs von rund 1.360 Menschen verteilte sich fast vollständig auf Pflegegeld und ambulante Dienste.</Text>
        <Text>Innerhalb der Stadt ist der Unterschied dramatisch.{' '} <strong className="text-pm-ink font-semibold">In Schilksee sind 44,4 Prozent der Einwohner über 65 und 18,7 Prozent über 80 — in Ravensberg 11,7 beziehungsweise 3,2 Prozent.</strong> Schilksee hat mehr über 64-Jährige als Menschen im Erwerbsalter und ein Durchschnittsalter von 55,8 Jahren; in Ravensberg sind es 37,2. Zwischen diesen beiden Kieler Stadtteilen liegen 18,6 Lebensjahre.</Text>
        <Text>Die Förde teilt die Stadt tatsächlich, und die Fähren gehören zum Nahverkehr — die Schwentinelinie fährt ganzjährig im Halbstundentakt zwischen West- und Ostufer. Für einen ambulanten Dienst, der von Westufer nach Wellingdorf oder Dietrichsdorf muss, bedeutet das entweder Fähre oder den Weg um den Fördekopf. Für eine Betreuungskraft, die im Haushalt lebt, spielt das keine Rolle. Steillagen sind in Kiel dagegen kein Thema — der höchste Punkt des Stadtgebiets liegt bei 74 Metern.</Text>
        <Text>Geriatrisch ist Kiel gut aufgestellt: Das Städtische Krankenhaus führt eine eigene Klinik für Geriatrie mit 2.135 stationären Fällen und eine Tagesklinik mit über 20 Plätzen, dazu ein Zentrum für Alterstraumatologie. Ein Hinweis, weil Portale es falsch einsortieren: Das ist eine{' '} <strong className="text-pm-ink font-semibold">Akutklinik, keine Reha-Einrichtung</strong>{' '} — eine eigenständige geriatrische Rehaklinik gibt es in Kiel nach unserer Recherche nicht. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Kiel und Umland: Neumünster, Rendsburg, Plön, Preetz und alle Gemeinden im Kreis Rendsburg-Eckernförde und Plön',
  stimmen: ['k-20260504-christian', 'k-20260118-jens'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
