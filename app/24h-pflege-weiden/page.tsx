import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Weiden in der Oberpfalz anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Weiden i.d. Oberpfalz | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Weiden in der Oberpfalz in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-weiden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Weiden i.d. Oberpfalz | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Weiden in der Oberpfalz in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-weiden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Weiden in der Oberpfalz?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Weiden in der Oberpfalz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Weiden i.d. Oberpfalz?', a: '5.053 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,0 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Weiden i.d. Oberpfalz — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Weiden i.d. Oberpfalz im Schnitt 2,5 Wohnungen, in Bayern 2,1. 53,2 Prozent der Gebäude stehen frei, 23,2 Prozent stehen in geschlossener Reihe. 54,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Weiden i.d. Oberpfalz ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Weiden in der Oberpfalz bedient?', a: 'Weiden und Landkreis Neustadt an der Waldnaab: Neustadt an der Waldnaab, Vohenstrauß, Eschenbach und alle Gemeinden im Landkreis Neustadt an der Waldnaab' },
  { q: 'Ist in einer Wohnung in Weiden i.d. Oberpfalz Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Weiden i.d. Oberpfalz hat im Schnitt 88,7 m², 25,8 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 71,0 % der Gebäude in Weiden i.d. Oberpfalz sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'weiden',
  ort: 'Weiden in der Oberpfalz',
  land: 'Bayern',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Weiden i.d. Oberpfalz',
  einleitung: <>Die Altstadt mit ihrem Marktplatz, Rehbühl oder das Umland: Weidener bleiben ihrer Oberpfalz treu. Eine Betreuungskraft von Primundus zieht mit ein, wenn Mutter oder Vater Hilfe brauchen, und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Neustadt an der Waldnaab',
  vorOrt: {
    inhalt: (
      <>
        <Text>Die Nettokaltmiete liegt bei 5,95 Euro je Quadratmeter, in Bayern bei 8,74 Euro. Wo ein Zimmer fehlt, ist etwas Größeres hier eher erreichbar als anderswo. In Weiden i.d. Oberpfalz wohnen nur 35,3 Prozent der Haushalte im Eigentum, in Bayern 49,3 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Die durchschnittliche Wohnung misst 88,7 Quadratmeter gegenüber 100,5 in Bayern — rund 12 Quadratmeter weniger. 50,4 Prozent aller Haushalte in Weiden i.d. Oberpfalz bestehen aus einer einzigen Person, in Bayern sind es 41,9 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt.</Text>
        <Text>Nur 53,2 Prozent der Gebäude stehen frei, in Bayern sind es 67,3 Prozent. 33,6 Prozent aller Wohnungen stammen aus den Jahren 1950 bis 1969, in Bayern sind es 26,0 Prozent. Das ist der Wiederaufbau — und der baute Treppenhäuser, die niemand für Rollatoren geplant hat. 20,2 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Bayern 27,8 Prozent.</Text>
        <Text>In Zahlen: 5.053 Menschen in Weiden i.d. Oberpfalz sind 75 Jahre oder älter, und es gibt 24.573 Wohnungen in 9.728 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Weiden und Landkreis Neustadt an der Waldnaab: Neustadt an der Waldnaab, Vohenstrauß, Eschenbach und alle Gemeinden im Landkreis Neustadt an der Waldnaab',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
