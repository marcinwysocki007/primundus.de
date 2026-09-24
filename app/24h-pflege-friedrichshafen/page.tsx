import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Friedrichshafen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Friedrichshafen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Friedrichshafen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-friedrichshafen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Friedrichshafen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Friedrichshafen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-friedrichshafen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Friedrichshafen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Friedrichshafen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Friedrichshafen?', a: '7.376 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,9 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Friedrichshafen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Friedrichshafen im Schnitt 2,8 Wohnungen, in Baden-Württemberg 2,1. 54,6 Prozent der Gebäude stehen frei, 22,4 Prozent stehen in geschlossener Reihe. 45,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Friedrichshafen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Friedrichshafen bedient?', a: 'Friedrichshafen und Bodenseekreis: Ravensburg, Überlingen, Konstanz, Lindau und alle Gemeinden im Bodenseekreis und Landkreis Ravensburg' },
  { q: 'Ist in einer Wohnung in Friedrichshafen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Friedrichshafen hat im Schnitt 88,7 m², 21,1 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 68,5 % der Gebäude in Friedrichshafen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'friedrichshafen',
  ort: 'Friedrichshafen',
  land: 'Baden-Württemberg',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ein Arbeitsleben bei ZF oder Zeppelin, ein Zuhause in Fischbach oder Ailingen mit dem See vor der Tür: Häfler bleiben am Bodensee. Eine Betreuungskraft von Primundus zieht mit ein, wenn Hilfe nötig wird, und ist bei Bedarf auch nachts da.</>,
  kreis: 'Bodenseekreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Die durchschnittliche Wohnung misst 88,7 Quadratmeter gegenüber 99,1 in Baden-Württemberg — rund 10 Quadratmeter weniger. In Friedrichshafen wohnen nur 42,4 Prozent der Haushalte im Eigentum, in Baden-Württemberg 51,6 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Friedrichshafen ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 2,8 Wohnungen, in Baden-Württemberg 2,1. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. Nur 54,6 Prozent der Gebäude stehen frei, in Baden-Württemberg sind es 65,9 Prozent.</Text>
        <Text>In Zahlen: 7.376 Menschen in Friedrichshafen sind 75 Jahre oder älter, und es gibt 31.773 Wohnungen in 11.255 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Friedrichshafen und Bodenseekreis: Ravensburg, Überlingen, Konstanz, Lindau und alle Gemeinden im Bodenseekreis und Landkreis Ravensburg',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
