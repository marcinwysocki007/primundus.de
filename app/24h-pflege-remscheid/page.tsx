import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Remscheid anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Remscheid | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Remscheid in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-remscheid' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Remscheid | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Remscheid in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-remscheid',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Remscheid?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Remscheid starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Remscheid — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Remscheid im Schnitt 2,8 Wohnungen, in Nordrhein-Westfalen 2,3. 46,0 Prozent der Gebäude stehen frei, 32,9 Prozent stehen in geschlossener Reihe. 64,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Remscheid ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Remscheid?', a: '12.814 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Bekommt man in Remscheid schwer einen Heimplatz?', a: 'Nein, und das wird oft falsch gelesen. Zwar leben nur 11,4 Prozent der Remscheider Pflegebedürftigen im Heim gegenüber 12,2 Prozent in Nordrhein-Westfalen — gemessen an der Zahl der über 65-Jährigen stehen hier aber 47 vollstationäre Plätze je 1.000 bereit, im Land 46. Es gibt also eher etwas mehr Plätze als anderswo, sie werden nur seltener genutzt. Die Stadt selbst begründet das in ihrer Pflegeplanung mit dem sehr großen privaten und ambulanten Pflegepotential und rechnet deshalb sogar einen Abschlag beim künftigen Platzbedarf ein. Nach eigenen Angaben werden 85,5 Prozent aller Remscheider Pflegebedürftigen ambulant versorgt.' },
  { q: 'Welches Einzugsgebiet wird in Remscheid bedient?', a: 'Remscheid und Bergisches Land: Wuppertal-Süd, Solingen, Radevormwald, Hückeswagen und alle Gemeinden im Oberbergischen Kreis' },
  { q: 'Ist in einer Wohnung in Remscheid Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Remscheid hat im Schnitt 85,5 m², 26,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 68,5 % der Gebäude in Remscheid sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'remscheid',
  ort: 'Remscheid',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Lennep mit seiner Altstadt, in Lüttringhausen oder oben im Bergischen: Remscheider Häuser stehen oft seit Generationen in Familienhand. Eine Betreuungskraft von Primundus sorgt dafür, dass niemand sie im Alter verlassen muss — sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Bergischen Land',
  vorOrt: {
    inhalt: (
      <>
        <Text>Remscheid verbindet zwei Dinge, die selten zusammen auftreten: einen überdurchschnittlich hohen Pflegebedarf und eine überdurchschnittlich starke häusliche Versorgung.{' '} <strong className="text-pm-ink font-semibold">10.011 Menschen sind hier pflegebedürftig, das sind 8,8 Prozent der Einwohner gegenüber 7,6 Prozent in Nordrhein-Westfalen.</strong>{' '} Und die Zahl wächst rasant: 2019 waren es 6.783, 2021 schon 7.770 — ein Zuwachs von fast 29 Prozent in nur zwei Jahren. Versorgt wird trotzdem überwiegend zu Hause: 59,6 Prozent allein durch Angehörige (Land 59,0), 18,3 Prozent mit ambulantem Dienst (Land 17,3). Nach Angaben der Stadt werden 85,5 Prozent aller Remscheider Pflegebedürftigen ambulant versorgt.</Text>
        <Text>Ein verbreiteter Fehlschluss sei hier ausdrücklich ausgeräumt. Nur 11,4 Prozent der Pflegebedürftigen leben im Heim, im Land 12,2 Prozent — daraus liest sich leicht ein Platzmangel heraus. Das Gegenteil stimmt:{' '} <strong className="text-pm-ink font-semibold">Gemessen an der Zahl der über 65-Jährigen stehen in Remscheid 47 vollstationäre Plätze je 1.000 bereit, in Nordrhein-Westfalen 46.</strong> Die Stadt selbst begründet das in ihrer Pflegeplanung mit dem „sehr großen privaten und ambulanten Pflegepotential" und rechnet deshalb sogar einen Abschlag beim künftigen Platzbedarf ein. Wer in Remscheid zu Hause bleibt, tut das nicht mangels Alternative, sondern weil die Familien es tragen.</Text>
        <Text>Beim Alter geht die Stadt weit auseinander. Der Stadtbezirk Lennep ist durchgängig der älteste — 24,4 Prozent über 65, 8,5 Prozent über 80 —, und im Stadtteil Stadtgarten sind es sogar 16,1 Prozent über 80. Am anderen Ende steht der Honsberg mit 3,3 Prozent. Zur oft zitierten Höhenlage eine ehrliche Einordnung: Zwischen dem tiefsten Punkt an der Wupper (96 Meter) und dem Brodtberg (379 Meter) liegen fast 283 Meter, aber die tief eingeschnittenen Täler sind überwiegend Wald und Talsperre. Die Wohnquartiere liegen fast durchweg auf den Hochflächen. Was im Alltag zählt, sind die Hanglagen innerhalb der Viertel — etwa vom Honsberg, aus Vieringhausen oder Kremenholl hinunter zum Morsbachtal.</Text>
        <Text>Zur Stadt gehört noch etwas: 21,2 Prozent der Einwohner haben eine ausländische Staatsangehörigkeit — Remscheid gibt seinen „Ratgeber Pflege" deshalb in sieben Sprachen heraus. Wenn Sprache in Ihrer Familie ein Thema ist, sprechen Sie es an. Das Deutschniveau jeder Betreuungskraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto.</Text>
        <Text>Geriatrisch ist Remscheid versorgt, aber die Adresse ist wichtig: Die geriatrische Fachabteilung mit 558 stationären Fällen und die Tagesklinik mit zwölf Plätzen sitzen in der <strong className="text-pm-ink font-semibold">Sana Fabricius-Klinik in der Brüderstraße</strong> — nicht im Sana-Klinikum an der Burger Straße. Das sind zwei verschiedene Häuser desselben Trägers, die regelmäßig verwechselt werden. Die Geriatrie bietet dort auch kostenlose Kurse für pflegende Angehörige an. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Remscheid und Bergisches Land: Wuppertal-Süd, Solingen, Radevormwald, Hückeswagen und alle Gemeinden im Oberbergischen Kreis',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
