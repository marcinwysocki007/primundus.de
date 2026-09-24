import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Singen am Hohentwiel anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Singen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Singen am Hohentwiel in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-singen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Singen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Singen am Hohentwiel in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-singen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Singen am Hohentwiel?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Singen am Hohentwiel starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Singen?', a: '5.226 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Singen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Singen im Schnitt 2,9 Wohnungen, in Baden-Württemberg 2,1. 55,0 Prozent der Gebäude stehen frei, 22,1 Prozent stehen in geschlossener Reihe. 53,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Singen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Hat das Klinikum Singen eine Altersmedizin?', a: 'Nein — und das wird häufig verwechselt. Die Klinik für Altersmedizin des Gesundheitsverbunds Landkreis Konstanz sitzt am Klinikum Konstanz, nicht am Hegau-Bodensee-Klinikum in Singen. Weil der Verbund den Fachbereich zentral führt und dabei teilweise die Singener Verbandsadresse angibt, ordnen Verzeichnisse die Geriatrie fälschlich Singen zu. Das Singener Haus führt 16 Fachabteilungen, Altersmedizin ist keine davon. Für eine geriatrische Behandlung geht es nach Konstanz.' },
  { q: 'Welches Einzugsgebiet wird in Singen am Hohentwiel bedient?', a: 'Singen und westlicher Landkreis Konstanz: Radolfzell, Stockach, Engen und alle Gemeinden im westlichen Landkreis Konstanz' },
  { q: 'Ist in einer Wohnung in Singen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Singen hat im Schnitt 88,6 m², 21,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 70,1 % der Gebäude in Singen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'singen',
  ort: 'Singen am Hohentwiel',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Singen',
  einleitung: <>Mit dem Hohentwiel vor dem Fenster wird man ungern woanders alt: Singener bleiben in ihrem Haus, ob stadtnah oder in Rielasingen und Gottmadingen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da — im ganzen Hegau bis zum Bodensee.</>,
  kreis: 'westlichen Landkreis Konstanz',
  vorOrt: {
    inhalt: (
      <>
        <Text>Eine Verwechslung vorweg, die Angehörige regelmäßig in die falsche Stadt schickt:{' '} <strong className="text-pm-ink font-semibold">Die Klinik für Altersmedizin des Gesundheitsverbunds sitzt in Konstanz, nicht in Singen.</strong> Weil der Verbund den Fachbereich zentral führt und dabei teilweise die Singener Verbandsadresse angibt, ordnen Verzeichnisse die Geriatrie fälschlich dem Hegau-Bodensee-Klinikum zu. Das Haus in Singen hat 16 Fachabteilungen — Altersmedizin ist keine davon. Wer nach einer geriatrischen Behandlung sucht, muss nach Konstanz.</Text>
        <Text>Beim Blick auf den Landkreis Konstanz fällt ein Muster auf, das für die häusliche Pflege zählt.{' '} <strong className="text-pm-ink font-semibold">Nur 13,1 Prozent der 16.193 Pflegebedürftigen werden von einem ambulanten Dienst versorgt — in Baden-Württemberg sind es 16,4 Prozent.</strong> Gleichzeitig liegt der Heimanteil mit 16,9 Prozent über dem Landeswert von 14,9. Und hier zeigen Anteil und Dichte ausnahmsweise in dieselbe Richtung: Der Kreis ist tatsächlich heimlastig und tatsächlich ambulant dünn versorgt, nicht nur rechnerisch. Dazu kommt, dass die Zahl der Beschäftigten in der Pflege im Kreis gesunken ist, während sie landesweit gewachsen ist.</Text>
        <Text>In Singen selbst stehen sieben stationäre Pflegeeinrichtungen bei rund 48.000 Einwohnern — passend zum heimlastigen Muster des Kreises. Für Familien, die zu Hause bleiben wollen, heißt die Kombination aus dünnem ambulantem Netz und schrumpfendem Personal vor allem eines: früh planen. Eine Betreuungskraft, die im Haushalt lebt, ist von Tourenplänen und Personalengpässen nicht betroffen — sie ist durchgehend da.</Text>
      </>
    ),
    beratungsabsatz: <Text>Topografisch ist Singen unkompliziert, auch wenn der Hohentwiel etwas anderes vermuten lässt. Der Berg ragt 267 Meter über die Stadt, ist aber Naturschutzgebiet mit einer Festungsruine und unbewohnt — für den Pflegealltag ohne Bedeutung. Rund 85 Prozent der Singener leben in der flachen Kernstadt im Hegau-Becken. 21,7 Prozent der Einwohner sind über 65, 7,6 Prozent über 80. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral; der Pflegestützpunkt des Landkreises unterhält eine Nebenstelle in Singen.</Text>,
  },
  einzugsgebiet: 'Singen und westlicher Landkreis Konstanz: Radolfzell, Stockach, Engen und alle Gemeinden im westlichen Landkreis Konstanz',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
