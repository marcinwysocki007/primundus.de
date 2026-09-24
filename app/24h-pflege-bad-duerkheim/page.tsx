import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bad Dürkheim anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Dürkheim | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Dürkheim in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-duerkheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bad Dürkheim | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Dürkheim in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bad-duerkheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Dürkheim?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Dürkheim starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bad Dürkheim?', a: '2.600 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 13,7 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 29,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bad Dürkheim — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bad Dürkheim im Schnitt 1,8 Wohnungen, in Rheinland-Pfalz 1,7. 58,7 Prozent der Gebäude stehen frei, 23,4 Prozent stehen in geschlossener Reihe. 45,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bad Dürkheim ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Bad Dürkheim bedient?', a: 'Bad Dürkheim und Landkreis Bad Dürkheim: Grünstadt, Freinsheim, Wachenheim und alle Gemeinden im Landkreis Bad Dürkheim' },
  { q: 'Ist in einer Wohnung in Bad Dürkheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Dürkheim hat im Schnitt 104,6 m², 16,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 84,6 % der Gebäude in Bad Dürkheim sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bad-duerkheim',
  ort: 'Bad Dürkheim',
  land: 'Rheinland-Pfalz',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Weinbergen, Gradierbau und Kurpark wird man in Bad Dürkheim gern alt — ob stadtnah, in Seebach oder Grethen. Eine Betreuungskraft von Primundus sorgt dafür, dass das im eigenen Zuhause gelingt: Sie zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Bad Dürkheim',
  vorOrt: {
    inhalt: (
      <>
        <Text>Bad Dürkheim ist älter als das Land: 13,7 Prozent der Einwohner sind 75 Jahre oder älter — das sind 2.600 Menschen, in Rheinland-Pfalz sind es 10,7 Prozent. 29,2 Prozent der Haushalte in Bad Dürkheim bestehen nur aus Menschen ab 65 — in Rheinland-Pfalz 24,4 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist.</Text>
        <Text>Nur 58,7 Prozent der Gebäude stehen frei, in Rheinland-Pfalz sind es 69,6 Prozent.</Text>
        <Text>In Zahlen: 2.600 Menschen in Bad Dürkheim sind 75 Jahre oder älter, und es gibt 10.527 Wohnungen in 5.744 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bad Dürkheim und Landkreis Bad Dürkheim: Grünstadt, Freinsheim, Wachenheim und alle Gemeinden im Landkreis Bad Dürkheim',
  stimmen: ['k-20260802-karin', 'k-20251031-martina'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
