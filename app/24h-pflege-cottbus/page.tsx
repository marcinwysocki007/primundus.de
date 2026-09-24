import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Cottbus anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Cottbus | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Cottbus in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-cottbus' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Cottbus | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Cottbus in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-cottbus',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Cottbus?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Brandenburg kostet im Schnitt rund 3.020 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Cottbus starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Cottbus?', a: '13.186 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 14,0 Prozent — in Brandenburg 12,6 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 28,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Brandenburg: 27,7 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Cottbus — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Cottbus im Schnitt 3,6 Wohnungen, in Brandenburg 1,9. 60,4 Prozent der Gebäude stehen frei, 28,2 Prozent stehen in geschlossener Reihe. 39,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Cottbus ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Cottbus bedient?', a: 'Cottbus und Landkreis Spree-Neiße: Spremberg, Guben, Forst und alle Gemeinden im Landkreis Spree-Neiße' },
  { q: 'Ist in einer Wohnung in Cottbus Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Cottbus hat im Schnitt 75,1 m², 44,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 71,2 % der Gebäude in Cottbus sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Brandenburg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.020 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'cottbus',
  ort: 'Cottbus',
  land: 'Brandenburg',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Sandow, Ströbitz oder am Branitzer Park: Cottbuser bleiben ihrer Stadt an der Spree treu — und dem eigenen Zuhause sowieso. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht, und ist bei Bedarf auch nachts da.</>,
  kreis: 'Landkreis Spree-Neiße',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Cottbus wohnen nur 23,7 Prozent der Haushalte im Eigentum, in Brandenburg 45,5 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Cottbus häufiger als anderswo. 44,9 Prozent der Wohnungen haben weniger als 60 Quadratmeter — in Brandenburg sind es 27,4 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden.</Text>
        <Text>Cottbus ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 3,6 Wohnungen, in Brandenburg 1,9. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. 39,0 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Brandenburg 20,0 Prozent.</Text>
        <Text>Altbau vor 1950 macht in Cottbus 21,9 Prozent des Bestands aus, in Brandenburg 33,8 Prozent. 53,5 Prozent aller Haushalte in Cottbus bestehen aus einer einzigen Person, in Brandenburg sind es 41,8 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt. Die durchschnittliche Wohnung misst 75,1 Quadratmeter gegenüber 88,5 in Brandenburg — rund 13 Quadratmeter weniger.</Text>
        <Text>In Zahlen: 13.186 Menschen in Cottbus sind 75 Jahre oder älter, und es gibt 57.895 Wohnungen in 16.074 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Cottbus und Landkreis Spree-Neiße: Spremberg, Guben, Forst und alle Gemeinden im Landkreis Spree-Neiße',
  stimmen: ['k-20260413-silke', 'k-20250925-holger'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
