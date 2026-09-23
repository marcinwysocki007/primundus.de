import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Troisdorf anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Troisdorf | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Troisdorf in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-troisdorf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Troisdorf | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Troisdorf in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-troisdorf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Troisdorf?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Troisdorf starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Troisdorf?', a: '7.546 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,0 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Troisdorf — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Troisdorf im Schnitt 2,2 Wohnungen, in Nordrhein-Westfalen 2,3. 39,3 Prozent der Gebäude stehen frei, 34,3 Prozent stehen in geschlossener Reihe. 40,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Troisdorf ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wo ist die Geriatrie in Troisdorf?', a: 'Seit März 2024 im St. Johannes Krankenhaus in Sieglar, Wilhelm-Busch-Straße — vorher war sie im St. Josef Hospital. Beide Häuser gehören demselben Träger und stehen in derselben Stadt, weshalb ältere Flyer und Wegbeschreibungen Angehörige regelmäßig zum falschen führen. Die Abteilung hat 40 Betten und ist vom Bundesverband Geriatrie zertifiziert; im gesamten Rhein-Sieg-Kreis gibt es nur zwei Häuser mit geriatrischer Leistungsgruppe. Eine geriatrische Tagesklinik oder Reha in Troisdorf ist uns nicht bekannt.' },
  { q: 'Welches Einzugsgebiet wird in Troisdorf bedient?', a: 'Troisdorf und Rhein-Sieg-Kreis Norden: Sankt Augustin, Niederkassel, Lohmar und alle Gemeinden im nördlichen Rhein-Sieg-Kreis' },
  { q: 'Ist in einer Wohnung in Troisdorf Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Troisdorf hat im Schnitt 92,7 m², 18,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 77,1 % der Gebäude in Troisdorf sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'troisdorf',
  ort: 'Troisdorf',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Köln und Bonn gelegen, ist Troisdorf für viele Familien der Ort, an dem die Eltern wohnen — in Spich, Sieglar oder Bergheim — während die Kinder im Rheinland pendeln. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Troisdorf führt die Rangliste der Heimplätze im Rhein-Sieg-Kreis an — und das ist eine Statistik, die in die Irre führt. Mit 624 Plätzen hat die Stadt die meisten aller 19 Kommunen, aber sie ist auch die größte.{' '} <strong className="text-pm-ink font-semibold">Je 1.000 Einwohner über 65 sind es 38 Plätze, im Kreisschnitt 41.</strong> Die Stadt selbst widerspricht der Rangliste ausdrücklich: Sie schätzt ihr Angebot an Dauer-, Kurzzeit- und Tagespflege als nicht ausreichend ein, weil sich die Einrichtungen auf den Stadtkern und wenige Ortsteile konzentrieren — Pflegebedürftige müssten deshalb ihren bisherigen Lebensmittelpunkt verlassen.</Text>
        <Text>Noch deutlicher wird die Stadt bei der ambulanten Versorgung: Die 13 Pflegedienste mit Sitz in Troisdorf seien{' '} <strong className="text-pm-ink font-semibold">nicht mehr in der Lage, die Nachfrage im Stadtgebiet zu decken.</strong> Das ist keine Prognose, sondern eine Feststellung aus der laufenden Pflegeplanung. Für Familien heißt das: Wer sich auf einen ambulanten Dienst verlassen möchte, sollte früh anfragen und einen Plan B haben.</Text>
        <Text>Der Rhein-Sieg-Kreis pflegt dabei ohnehin ungewöhnlich häuslich:{' '} <strong className="text-pm-ink font-semibold">66 Prozent aller Pflegebedürftigen beziehen ausschließlich Pflegegeld</strong>, werden also allein von Angehörigen versorgt — in Nordrhein-Westfalen sind es 59 Prozent, bundesweit 54. Ambulante Dienste kommen mit 14 Prozent seltener zum Einsatz als im Land (17 Prozent). Troisdorf liegt laut Kreis nahe an diesen Durchschnittswerten.</Text>
        <Text>Und der Druck wächst schneller als anderswo im Kreis: Die Zahl der über 80-Jährigen in Troisdorf steigt bis 2040 um fast 35 Prozent, im Kreisschnitt um 27. Auf 100 Menschen zwischen 65 und 79 kommen dann 48 Hochbetagte. Topografisch ist die Stadt dabei unproblematisch — der höchste Punkt liegt in der Wahner Heide und ist unbewohnt, die Wohngebiete liegen in der Rheinebene.</Text>
        <Text>Ein Hinweis, der Angehörigen eine vergebliche Fahrt erspart:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie ist im März 2024 innerhalb Troisdorfs umgezogen</strong> — vom St. Josef Hospital ins St. Johannes Krankenhaus in Sieglar, Wilhelm-Busch-Straße. Beide Häuser gehören demselben Träger und stehen in derselben Stadt; jeder Flyer und jede Wegbeschreibung von vor 2024 führt zum falschen. Die Abteilung hat 40 Betten und ist vom Bundesverband Geriatrie zertifiziert. Im gesamten Rhein-Sieg-Kreis gibt es nur zwei Häuser mit geriatrischer Leistungsgruppe. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Troisdorf und Rhein-Sieg-Kreis Norden: Sankt Augustin, Niederkassel, Lohmar und alle Gemeinden im nördlichen Rhein-Sieg-Kreis',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
