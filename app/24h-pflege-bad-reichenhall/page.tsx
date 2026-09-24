import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bad Reichenhall anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Reichenhall | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Reichenhall in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-reichenhall' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bad Reichenhall | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Reichenhall in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bad-reichenhall',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Reichenhall?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Reichenhall starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bad Reichenhall?', a: '3.170 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 17,6 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 34,3 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bad Reichenhall — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bad Reichenhall im Schnitt 3,6 Wohnungen, in Bayern 2,1. 52,7 Prozent der Gebäude stehen frei, 28,1 Prozent stehen in geschlossener Reihe. 45,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bad Reichenhall ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Gibt es in Bad Reichenhall eine Akutgeriatrie?', a: 'Nein — und das zu wissen erspart Angehörigen Fahrerei. Die Kreisklinik Bad Reichenhall hat 16 Fachabteilungen, aber keine Akutgeriatrie. Die Akutgeriatrie desselben Trägers sitzt an der Kreisklinik Trostberg, einem anderen Landkreis rund 55 Kilometer entfernt. Am Ort gibt es dafür eine geriatrische Rehaklinik, die Rehaklinik Prinzregent Luitpold. Von den übrigen Kurkliniken der Stadt arbeitet keine geriatrisch — sie behandeln Atemwege, Orthopädie und Onkologie. Bad Reichenhall ist mit 29,2 Prozent Einwohnern über 65 zugleich eine der ältesten Städte Bayerns (Freistaat: 21,6 Prozent).' },
  { q: 'Welches Einzugsgebiet wird in Bad Reichenhall bedient?', a: 'Bad Reichenhall und Berchtesgadener Land Nord: Piding, Bayerisch Gmain, Ainring und alle Gemeinden im nördlichen Landkreis Berchtesgadener Land' },
  { q: 'Ist in einer Wohnung in Bad Reichenhall Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Reichenhall hat im Schnitt 78,4 m², 33,7 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 62,0 % der Gebäude in Bad Reichenhall sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bad-reichenhall',
  ort: 'Bad Reichenhall',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Alpenkurstadt mit Salzgeschichte: In Bad Reichenhall, Kirchberg oder drüben in Bayerisch Gmain lebt man mit Bergblick — und möchte genau dort gepflegt werden, nicht hinter Heimtüren. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Berchtesgadener Land',
  vorOrt: {
    inhalt: (
      <>
        <Text>Bad Reichenhall ist eine der ältesten Städte Bayerns.{' '} <strong className="text-pm-ink font-semibold">29,2 Prozent der Einwohner sind über 65 — 5.349 Menschen —, im Freistaat sind es 21,6 Prozent.</strong> Das sind fast acht Prozentpunkte Unterschied, und selbst gegenüber dem eigenen Landkreis liegt die Stadt um knapp fünf Punkte darüber. Das Durchschnittsalter beträgt 48,3 Jahre. Auf 100 Menschen im Erwerbsalter kommen hier 54 im Rentenalter.</Text>
        <Text>Umso überraschender ist eine zweite Zahl: Die Pflegequote im Landkreis Berchtesgadener Land liegt mit 44 Pflegebedürftigen je 1.000 Einwohner{' '} <em>unter</em> dem bayerischen Wert von 47 — obwohl der Kreis deutlich älter ist als das Land. Was dagegen auffällt, ist die Versorgungsform:{' '} <strong className="text-pm-ink font-semibold">Nur 43,0 Prozent der Pflegebedürftigen werden allein von Angehörigen versorgt, in Bayern sind es 48,5 Prozent</strong> — und 21,6 Prozent leben im Heim gegenüber 17,6 im Freistaat. Hier wird Pflege früher aus der Hand gegeben als anderswo in Bayern.</Text>
        <Text>Dass mehr Menschen im Heim leben, heißt allerdings nicht, dass es besonders viele Plätze gäbe. Gemessen an der Zahl der über 65-Jährigen stehen 46 Plätze je 1.000 bereit, in Bayern 44 — ein Vorsprung von rund vier Prozent, während der Heimanteil um 23 Prozent über dem Landeswert liegt. Der Unterschied erklärt sich aus dem Nenner: Der Kreis ist eben alt. Für Familien heißt das, dass ein Heimplatz hier keineswegs leichter zu bekommen ist, als die Anteilszahl vermuten lässt.</Text>
        <Text>Die Alpenlage wird beim Thema Pflege gern bemüht, meist mit den falschen Zahlen. Die oft zitierte Spanne von 470 bis 1.750 Metern ist für den Alltag bedeutungslos: Der Predigtstuhl trägt eine Bergstation, das Reichenhaller Haus eine Alpenvereinshütte — dort wohnt niemand. Alltagsrelevant ist etwas anderes:{' '} <strong className="text-pm-ink font-semibold">Der bewohnte Ortsteil Nonn erstreckt sich über rund 170 Höhenmeter</strong>, vom Unterland auf 474 Metern bis zum Oberland auf über 600. Wer dort oben wohnt, kennt die Anfahrt im Winter.</Text>
        <Text>Ein Punkt, der Angehörigen viel Fahrerei erspart: Die Kreisklinik Bad Reichenhall hat 16 Fachabteilungen, aber{' '} <strong className="text-pm-ink font-semibold">keine Akutgeriatrie</strong>. Die Akutgeriatrie desselben Trägers sitzt an der Kreisklinik Trostberg — anderer Landkreis, rund 55 Kilometer entfernt. Am Ort gibt es dafür eine geriatrische Rehaklinik, die Rehaklinik Prinzregent Luitpold. Von den übrigen Kurkliniken der Stadt arbeitet keine geriatrisch; sie behandeln Atemwege, Orthopädie und Onkologie. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bad Reichenhall und Berchtesgadener Land Nord: Piding, Bayerisch Gmain, Ainring und alle Gemeinden im nördlichen Landkreis Berchtesgadener Land',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
