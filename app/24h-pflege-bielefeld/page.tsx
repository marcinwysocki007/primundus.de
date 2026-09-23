import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bielefeld anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bielefeld | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bielefeld in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bielefeld' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bielefeld | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bielefeld in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bielefeld',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bielefeld?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bielefeld starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bielefeld?', a: '34.515 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,5 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bielefeld — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bielefeld im Schnitt 2,7 Wohnungen, in Nordrhein-Westfalen 2,3. 54,6 Prozent der Gebäude stehen frei, 27,5 Prozent stehen in geschlossener Reihe. 55,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bielefeld ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'In welchen Bielefelder Stadtbezirken fehlen Heimplätze?', a: 'Die Stadt benennt es in ihrer Bedarfsplanung selbst: Unterversorgt sind Jöllenbeck, Heepen, Dornberg und Senne; ein Überangebot gibt es in Schildesche, Sennestadt und Gadderbaum. Bemerkenswert ist die Richtung — Jöllenbeck ist mit 8,2 Prozent Einwohnern über 80 der älteste Stadtbezirk und hat mit rund 51 Plätzen je 1.000 Hochbetagten zugleich das dünnste Angebot; in Sennestadt sind es 234. Über die ganze Stadt gerechnet reichen die 2.622 Plätze dagegen aus. Bielefeld hat also kein Mengen-, sondern ein Verteilungsproblem. Eine Betreuungskraft, die zu Ihnen kommt, löst genau das — sie ist dort, wo Sie wohnen.' },
  { q: 'Welches Einzugsgebiet wird in Bielefeld bedient?', a: 'Bielefeld und Umland: Gütersloh, Herford, Detmold, Paderborn, Minden und alle Gemeinden im Kreis Gütersloh und Herford' },
  { q: 'Ist in einer Wohnung in Bielefeld Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bielefeld hat im Schnitt 85,8 m², 27,0 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 69,2 % der Gebäude in Bielefeld sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bielefeld',
  ort: 'Bielefeld',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Schildesche, Brackwede oder am Hang zum Teutoburger Wald: Bielefelder wohnen solide — oft seit Jahrzehnten im selben Haus. Wenn Mutter oder Vater mehr Hilfe brauchen, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da, mit Blick auf die Sparrenburg statt auf eine Warteliste. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Bielefeld hat ein Verteilungsproblem, kein Mengenproblem — und das lässt sich genau beziffern. Über die ganze Stadt gerechnet reichen die 2.622 Heimplätze aus; die städtische Bedarfsplanung errechnet bis 2027 sogar einen Überschuss. Zwischen den Stadtbezirken sieht es anders aus:{' '} <strong className="text-pm-ink font-semibold">Der Altersaufbau streut nur um den Faktor 1,7, das Platzangebot aber um den Faktor 4,6</strong> — und beide zeigen in entgegengesetzte Richtungen.</Text>
        <Text>Konkret heißt das: Jöllenbeck ist mit 8,2 Prozent Einwohnern über 80 der älteste Stadtbezirk und hat mit 51 Plätzen je 1.000 Hochbetagten zugleich das dünnste Angebot. In Sennestadt, altersmäßig unauffällig, sind es 234. Die Stadt benennt das selbst: Unterversorgung in Jöllenbeck, Heepen, Dornberg und Senne, Überangebot in Schildesche, Sennestadt und Gadderbaum. Wer in Jöllenbeck einen Heimplatz sucht, sucht ihn also außerhalb des eigenen Viertels — oder bleibt zu Hause.</Text>
        <Text>Eine Zahl macht die Dringlichkeit deutlich:{' '} <strong className="text-pm-ink font-semibold">Von den Bielefeldern über 80 sind 49,7 Prozent pflegebedürftig</strong> — fast jeder zweite. Bei den 65- bis 79-Jährigen sind es 11,3 Prozent. Insgesamt zählt die Stadt 22.590 Pflegebedürftige, von denen 66,1 Prozent zu Hause ohne Pflegedienst versorgt werden und 22,1 Prozent mit einem Dienst. Nur 11,8 Prozent leben stationär, deutlich weniger als im Bund.</Text>
        <Text>Eine Entwicklung sollte man dabei kennen: Die Zahl der über 80-Jährigen{' '} <em>sinkt</em> in Bielefeld bis 2027 um rund 2.000 — die geburtenschwachen Jahrgänge der Kriegsjahre erreichen jetzt dieses Alter. Ab 2034 steigt sie dann deutlich an. Die heutige Entspannung ist also eine Atempause, keine Trendwende.</Text>
        <Text>Zur Geriatrie der wichtigste praktische Hinweis dieser Seite:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie des Evangelischen Klinikums Bethel liegt nicht in Bethel.</strong> Sie sitzt im Johannesstift an der Schildescher Straße in Bielefeld-Schildesche — rund fünf Kilometer und einen Stadtbezirk vom Bethel-Campus in Gadderbaum entfernt. Wer zu Bethel fährt, ist am falschen Ort. Vier Bielefelder Häuser haben eine geriatrische Leistungsgruppe; die Klinik an der Rosenhöhe heißt inzwischen Universitätsklinik für Geriatrie und hat seit Juli 2025 eine neue Leitung — viele Verzeichnisse führen noch den alten Namen. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bielefeld und Umland: Gütersloh, Herford, Detmold, Paderborn, Minden und alle Gemeinden im Kreis Gütersloh und Herford',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
