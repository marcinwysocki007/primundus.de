import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bad Neuenahr-Ahrweiler anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Neuenahr | 6× Testsieger | Primundus',
  description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Neuenahr-Ahrweiler in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-neuenahr' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bad Neuenahr | 6× Testsieger | Primundus',
    description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Neuenahr-Ahrweiler in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bad-neuenahr',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Neuenahr-Ahrweiler?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Neuenahr-Ahrweiler starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bad Neuenahr?', a: '4.770 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 18,4 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 36,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bad Neuenahr — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bad Neuenahr im Schnitt 2,2 Wohnungen, in Rheinland-Pfalz 1,7. 55,8 Prozent der Gebäude stehen frei, 25,3 Prozent stehen in geschlossener Reihe. 44,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bad Neuenahr ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Bad Neuenahr-Ahrweiler bedient?', a: 'Bad Neuenahr-Ahrweiler und Landkreis Ahrweiler: Sinzig, Remagen, Altenahr und alle Gemeinden im Landkreis Ahrweiler' },
  { q: 'Ist in einer Wohnung in Bad Neuenahr Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Neuenahr hat im Schnitt 96,2 m², 19,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 74,9 % der Gebäude in Bad Neuenahr sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bad-neuenahr',
  ort: 'Bad Neuenahr-Ahrweiler',
  land: 'Rheinland-Pfalz',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Bad Neuenahr',
  einleitung: <>Ob im Kurviertel, in Ahrweiler oder mit Blick auf die Weinberge: Wer an der Ahr zuhause ist, bleibt hier — gerade jetzt. Eine Betreuungskraft von Primundus zieht mit ein, wenn Hilfe nötig wird, und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Ahrweiler',
  vorOrt: {
    inhalt: (
      <>
        <Text>12,3 Prozent der Wohnungen stehen leer, in Rheinland-Pfalz 4,8 Prozent. Wo ein Zimmer fehlt, ist eine größere Wohnung hier eher zu finden als anderswo. Bad Neuenahr ist älter als das Land: 18,4 Prozent der Einwohner sind 75 Jahre oder älter — das sind 4.770 Menschen, in Rheinland-Pfalz sind es 10,7 Prozent.</Text>
        <Text>Gut jeder dritte Haushalt in Bad Neuenahr besteht nur aus Menschen ab 65 — in Rheinland-Pfalz 24,4 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist. In Bad Neuenahr wohnen nur 42,0 Prozent der Haushalte im Eigentum, in Rheinland-Pfalz 54,4 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Die durchschnittliche Wohnung misst 96,2 Quadratmeter gegenüber 107,7 in Rheinland-Pfalz — rund 12 Quadratmeter weniger. Nur 55,8 Prozent der Gebäude stehen frei, in Rheinland-Pfalz sind es 69,6 Prozent. 47,1 Prozent aller Haushalte in Bad Neuenahr bestehen aus einer einzigen Person, in Rheinland-Pfalz sind es 40,4 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt.</Text>
        <Text>In Zahlen: 4.770 Menschen in Bad Neuenahr sind 75 Jahre oder älter, und es gibt 15.964 Wohnungen in 7.088 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bad Neuenahr-Ahrweiler und Landkreis Ahrweiler: Sinzig, Remagen, Altenahr und alle Gemeinden im Landkreis Ahrweiler',
  stimmen: ['k-20260802-karin', 'k-20251031-martina'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
