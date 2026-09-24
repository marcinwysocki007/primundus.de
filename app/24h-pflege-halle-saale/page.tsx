import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Halle (Saale) anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Halle (Saale) | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Halle (Saale) in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-halle-saale' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Halle (Saale) | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Halle (Saale) in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-halle-saale',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Halle (Saale)?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Sachsen-Anhalt kostet im Schnitt rund 2.890 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Halle (Saale) starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Halle (Saale)?', a: '30.293 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 13,4 Prozent — in Sachsen-Anhalt 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 27,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen-Anhalt: 29,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Halle (Saale) — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Halle (Saale) im Schnitt 4,7 Wohnungen, in Sachsen-Anhalt 2,1. 34,5 Prozent der Gebäude stehen frei, 48,5 Prozent stehen in geschlossener Reihe. 55,3 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Halle (Saale) ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Halle (Saale) bedient?', a: 'Halle und Saalekreis: Merseburg, Querfurt, Weißenfels und alle Gemeinden im Saalekreis und Burgenlandkreis' },
  { q: 'Ist in einer Wohnung in Halle (Saale) Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Halle (Saale) hat im Schnitt 70,4 m², 47,8 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 55,9 % der Gebäude in Halle (Saale) sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen-Anhalt zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.890 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'halle-saale',
  ort: 'Halle (Saale)',
  land: 'Sachsen-Anhalt',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Das Paulusviertel mit seinen Gründerzeithäusern, Kröllwitz oder Giebichenstein an der Saale: Hallenser hängen an ihren Wohnungen — Treppen hin oder her. Eine Betreuungskraft von Primundus zieht mit ein, übernimmt Einkäufe und Haushalt und ist auch nachts da.</>,
  kreis: 'Saalekreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Halle (Saale) ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 4,7 Wohnungen, in Sachsen-Anhalt 2,1. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. In Halle (Saale) wohnen nur 16,8 Prozent der Haushalte im Eigentum, in Sachsen-Anhalt 43,0 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Halle (Saale) häufiger als anderswo. Knapp jede zweite Wohnung ist kleiner als 60 Quadratmeter — in Sachsen-Anhalt sind es 31,3 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden. Knapp jedes zweite Gebäude in Halle (Saale) ist ein Reihenhaus — in Sachsen-Anhalt 22,5 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
        <Text>Nur 34,5 Prozent der Gebäude stehen frei, in Sachsen-Anhalt sind es 58,6 Prozent. Die durchschnittliche Wohnung misst 70,4 Quadratmeter gegenüber 84,0 in Sachsen-Anhalt — rund 14 Quadratmeter weniger. 54,9 Prozent aller Haushalte in Halle (Saale) bestehen aus einer einzigen Person, in Sachsen-Anhalt sind es 44,7 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt.</Text>
        <Text>In Zahlen: 30.293 Menschen in Halle (Saale) sind 75 Jahre oder älter, und es gibt 143.824 Wohnungen in 30.389 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Halle und Saalekreis: Merseburg, Querfurt, Weißenfels und alle Gemeinden im Saalekreis und Burgenlandkreis',
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
