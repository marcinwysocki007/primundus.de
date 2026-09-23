import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Moers anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Moers | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Moers in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-moers' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Moers | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Moers in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-moers',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Moers?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Moers starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Moers?', a: '11.863 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,8 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 27,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Moers — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Moers im Schnitt 2,1 Wohnungen, in Nordrhein-Westfalen 2,3. 33,6 Prozent der Gebäude stehen frei, 33,4 Prozent stehen in geschlossener Reihe. 54,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Moers ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Bekommt man in Moers einen Heimplatz in der eigenen Stadt?', a: 'Häufig nicht. Von den 758 Moerserinnen und Moersern, die stationär gepflegt werden, leben nur 492 in Moers selbst — 266, also gut jeder Dritte, mussten die Stadt verlassen. Moers hat die dünnste Heimplatz-Ausstattung im gesamten Kreis Wesel: Auf einen Platz kommen hier 8,8 Einwohner über 80, im Kreisschnitt 6,8. Die 873 Plätze der Stadt sind zwar die zweithöchste absolute Zahl im Kreis, Moers ist aber auch die mit Abstand größte Kommune. Die Auslastung lag zuletzt bei 97 Prozent. Für viele Familien ist die Betreuung zu Hause deshalb die Lösung, die den Lebensmittelpunkt erhält.' },
  { q: 'Welches Einzugsgebiet wird in Moers bedient?', a: 'Moers und Umland: Duisburg, Krefeld, Kamp-Lintfort, Rheinberg, Xanten und alle Gemeinden im Kreis Wesel am Niederrhein' },
  { q: 'Ist in einer Wohnung in Moers Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Moers hat im Schnitt 90,0 m², 19,0 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,8 % der Gebäude in Moers sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'moers',
  ort: 'Moers',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Am Niederrhein gibt man sein Zuhause nicht her: das Haus in Kapellen, die Wohnung in Asberg, den Garten in Repelen. Eine Betreuungskraft von Primundus sorgt dafür, dass es dabei bleibt — sie zieht mit ein, übernimmt Haushalt und Pflegealltag und ist auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Eine Zahl aus dem Pflegeplan des Kreises Wesel beschreibt die Moerser Lage genauer als jede andere:{' '} <strong className="text-pm-ink font-semibold">Von den 758 Moerserinnen und Moersern, die stationär gepflegt werden, leben nur 492 in der eigenen Stadt. 266 mussten Moers verlassen</strong> — gut jeder Dritte. Der Grund ist kein Zufall: Moers ist die Kommune mit der dünnsten Heimplatz-Ausstattung im ganzen Kreis. Auf einen Platz kommen hier 8,8 Einwohner über 80, im Kreisschnitt 6,8. Die 873 Plätze der Stadt klingen nach viel — Moers ist aber auch die mit Abstand größte Kommune des Kreises.</Text>
        <Text>Dass es eng ist, zeigt auch die Auslastung: 97 Prozent der Moerser Plätze waren zuletzt belegt. Und die Nachfrage kommt zusätzlich von außen — auf einen auswärtigen Bewohner kommen in Moerser Heimen 2,5 aus dem Kreis, im Kreisschnitt sind es 3,1. Kurzzeitpflege gibt es in der ganzen Stadt in nur einer solitären Einrichtung mit 15 Plätzen. Kreisweit waren zuletzt von 201 als frei gemeldeten Plätzen tatsächlich nur 125 unmittelbar verfügbar.</Text>
        <Text>Wie stark der Bedarf mit dem Alter steigt, zeigt der Kreis in einer Zahlenreihe, die man sich merken sollte: Von den 70- bis 80-Jährigen sind 20,5 Prozent pflegebedürftig, von den 80- bis 85-Jährigen 48,7 Prozent, von den 85- bis 90-Jährigen 74,4 Prozent —{' '} <strong className="text-pm-ink font-semibold">und von den über 90-Jährigen praktisch alle.</strong> Im Kreis Wesel werden 59,6 Prozent aller Pflegebedürftigen allein von Angehörigen versorgt.</Text>
        <Text>Innerhalb von Moers verteilt sich das Alter sehr ungleich, und zwar anders als man denkt. Am ältesten ist Schwafheim: 16,6 Prozent der Einwohner sind über 75, Durchschnittsalter 50,0 Jahre. Am jüngsten ist{' '} <strong className="text-pm-ink font-semibold">Meerbeck mit 8,1 Prozent und einem Durchschnittsalter von 41,5 Jahren — ausgerechnet die alte Bergarbeitersiedlung der Zeche Rheinpreußen.</strong> Wer erwartet, dass Zechensiedlungen überaltert sind, liegt hier falsch; Meerbeck hat sich über Zuwanderung verjüngt.</Text>
        <Text>Zur Geriatrie ein Hinweis, der Angehörigen eine Fahrt erspart. Im Krankenhausplan Nordrhein-Westfalen ist keinem der beiden Moerser Krankenhäuser die Leistungsgruppe Geriatrie zugewiesen; das St. Josef Krankenhaus Moers führt geriatrische Leistungen innerhalb der Inneren Medizin. Besonders leicht zu verwechseln:{' '} <strong className="text-pm-ink font-semibold">Das St. Josef-Hospital in Xanten hat die Geriatrie — das St. Josef Krankenhaus in Moers nicht.</strong> Beide gehören demselben Träger, die Namen sind fast gleich, die Häuser liegen rund 30 Kilometer auseinander. Und das Reha-Zentrum Niederrhein steht in Wesel, nicht in Moers. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Moers und Umland: Duisburg, Krefeld, Kamp-Lintfort, Rheinberg, Xanten und alle Gemeinden im Kreis Wesel am Niederrhein',
  stimmen: ['k-20250527-volker'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
