import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Villingen-Schwenningen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Villingen-Schwenningen | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Villingen-Schwenningen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-villingen-schwenningen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Villingen-Schwenningen | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Villingen-Schwenningen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-villingen-schwenningen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Villingen-Schwenningen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Villingen-Schwenningen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Villingen-Schwenningen?', a: '9.923 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Villingen-Schwenningen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Villingen-Schwenningen im Schnitt 2,6 Wohnungen, in Baden-Württemberg 2,1. 53,8 Prozent der Gebäude stehen frei, 21,3 Prozent stehen in geschlossener Reihe. 51,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Villingen-Schwenningen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Macht es einen Unterschied, ob ich in Villingen oder in Schwenningen wohne?', a: 'Für unsere Betreuung nicht — Anreise und Preis sind in beiden Stadtteilen und in allen zehn Ortschaften gleich. Statistisch gibt es den Unterschied aber: Villingen liegt beim Durchschnittsalter bei 44,1 Jahren, Schwenningen bei 42,1, die Ortschaften bei 45,1. Die beiden fast gleich großen Zentren (Villingen 41.136, Schwenningen 36.915 Einwohner) liegen rund fünf Kilometer auseinander und altern unterschiedlich schnell. In der Gesamtstadt leben 19.752 Menschen über 65, das sind 22,1 Prozent.' },
  { q: 'Welches Einzugsgebiet wird in Villingen-Schwenningen bedient?', a: 'Villingen-Schwenningen und Schwarzwald-Baar-Kreis: Donaueschingen, Blumberg, Triberg und alle Gemeinden im Schwarzwald-Baar-Kreis' },
  { q: 'Ist in einer Wohnung in Villingen-Schwenningen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Villingen-Schwenningen hat im Schnitt 91,9 m², 20,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 73,1 % der Gebäude in Villingen-Schwenningen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'villingen-schwenningen',
  ort: 'Villingen-Schwenningen',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwei Städte, ein Zuhause: Ob im Villinger Zähringerviertel oder auf der Schwenninger Seite Richtung Neckarquelle — wer hier alt geworden ist, bleibt gern. Eine Betreuungskraft von Primundus zieht mit ein, wenn es allein nicht mehr geht, und ist bei Bedarf auch nachts da, auch im Umland vom Schwarzwald bis zur Baar. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Schwarzwald-Baar-Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Villingen-Schwenningen ist pflegerisch nicht eine Stadt, sondern zwei Einzugsgebiete. Die beiden historischen Zentren liegen rund fünf Kilometer auseinander und sind fast gleich groß — Villingen mit 41.136, Schwenningen mit 36.915 Einwohnern —, und sie altern unterschiedlich:{' '} <strong className="text-pm-ink font-semibold">Villingen liegt beim Durchschnittsalter bei 44,1 Jahren, Schwenningen bei 42,1, die zehn Ortschaften bei 45,1.</strong> Wer für Marbach oder Herzogenweiler plant, plant unter anderen Vorzeichen als für die Schwenninger Innenstadt.</Text>
        <Text>In der Stadt leben 19.752 Menschen über 65, das sind 22,1 Prozent. Die Pflegezahlen selbst gibt es in Baden-Württemberg nur für den Kreis: Im Schwarzwald-Baar-Kreis sind 13.617 Menschen pflegebedürftig — eine Pflegequote von 6,4 Prozent gegenüber 5,6 im Land, und ein Zuwachs von 16 Prozent gegenüber 2021. 55,2 Prozent werden allein von Angehörigen versorgt, 16,8 Prozent von einem ambulanten Dienst, 16,1 Prozent leben im Heim — letzteres etwas mehr als im Land mit 14,9 Prozent.</Text>
        <Text>Eine Einschränkung sagen wir dazu, statt sie zu überspielen: Ob hinter dem höheren Heimanteil auch mehr Heimplätze stehen, lässt sich für diesen Kreis nicht belegen — Baden-Württemberg veröffentlicht die Platzzahlen nicht kreisscharf. In anderen Regionen zeigen diese beiden Kennzahlen oft in entgegengesetzte Richtungen. Wir rechnen das nicht hoch, sondern lassen die Frage offen.</Text>
        <Text>Geriatrisch ist die Lage gemischt. Das Schwarzwald-Baar Klinikum führt keine eigenständige geriatrische Fachabteilung, sondern einen geriatrischen Schwerpunkt — einen konsiliarischen Dienst, der die geriatrische Frührehabilitation in der Inneren Medizin und der Unfallchirurgie leitet. Eine geriatrische Rehaklinik gibt es dagegen am Ort, Am Klosterwald; sie firmiert unter zwei Namen, ist aber eine Adresse. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Villingen-Schwenningen und Schwarzwald-Baar-Kreis: Donaueschingen, Blumberg, Triberg und alle Gemeinden im Schwarzwald-Baar-Kreis',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
