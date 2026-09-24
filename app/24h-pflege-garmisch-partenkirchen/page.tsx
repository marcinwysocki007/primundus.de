import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Garmisch-Partenkirchen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Garmisch-Partenkirchen | 6× Testsieger',
  description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Garmisch-Partenkirchen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-garmisch-partenkirchen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Garmisch-Partenkirchen | 6× Testsieger',
    description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Garmisch-Partenkirchen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-garmisch-partenkirchen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Garmisch-Partenkirchen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Garmisch-Partenkirchen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Garmisch-Partenkirchen?', a: '4.218 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 15,0 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 30,4 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Garmisch-Partenkirchen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Garmisch-Partenkirchen im Schnitt 3,2 Wohnungen, in Bayern 2,1. 69,3 Prozent der Gebäude stehen frei, 14,3 Prozent stehen in geschlossener Reihe. 48,9 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Garmisch-Partenkirchen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Garmisch-Partenkirchen bedient?', a: 'Garmisch-Partenkirchen und Landkreis Garmisch-Partenkirchen: Mittenwald, Murnau, Oberammergau, Werdenfels und alle Gemeinden im Landkreis Garmisch-Partenkirchen' },
  { q: 'Ist in einer Wohnung in Garmisch-Partenkirchen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Garmisch-Partenkirchen hat im Schnitt 80,2 m², 32,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. In Garmisch-Partenkirchen liegen 53,8 % der Wohnungen in Ein- oder Zweifamilienhäusern, der Rest sind Geschosswohnungen — dann zählt, welches Stockwerk und ob es einen Aufzug gibt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'garmisch-partenkirchen',
  ort: 'Garmisch-Partenkirchen',
  land: 'Bayern',
  art: 'erzeugt',
  aktualisiert: '24. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob auf der Garmischer oder der Partenkirchner Seite, mit der Zugspitze im Blick: Wer hier zuhause ist, bleibt. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht, und ist bei Bedarf auch nachts da — im ganzen Werdenfelser Land.</>,
  kreis: 'Landkreis Garmisch-Partenkirchen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Die durchschnittliche Wohnung misst 80,2 Quadratmeter gegenüber 100,5 in Bayern — rund 20 Quadratmeter weniger. Garmisch-Partenkirchen ist älter als das Land: 15,0 Prozent der Einwohner sind 75 Jahre oder älter — das sind 4.218 Menschen, in Bayern sind es 10,4 Prozent.</Text>
        <Text>Knapp jeder dritte Haushalt in Garmisch-Partenkirchen besteht nur aus Menschen ab 65 — in Bayern 23,0 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist. In Garmisch-Partenkirchen wohnen nur 34,5 Prozent der Haushalte im Eigentum, in Bayern 49,3 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
        <Text>Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Garmisch-Partenkirchen häufiger als anderswo. Jede dritte Wohnung ist kleiner als 60 Quadratmeter — in Bayern sind es 20,7 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden. Garmisch-Partenkirchen ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 3,2 Wohnungen, in Bayern 2,1. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. 50,8 Prozent aller Haushalte in Garmisch-Partenkirchen bestehen aus einer einzigen Person, in Bayern sind es 41,9 Prozent. Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt.</Text>
        <Text>In Zahlen: 4.218 Menschen in Garmisch-Partenkirchen sind 75 Jahre oder älter, und es gibt 17.235 Wohnungen in 5.410 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
        <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Garmisch-Partenkirchen und Landkreis Garmisch-Partenkirchen: Mittenwald, Murnau, Oberammergau, Werdenfels und alle Gemeinden im Landkreis Garmisch-Partenkirchen',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
