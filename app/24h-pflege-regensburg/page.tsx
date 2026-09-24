import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Regensburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Regensburg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Regensburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-regensburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Regensburg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Regensburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-regensburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Regensburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Regensburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Welches Einzugsgebiet wird in Regensburg bedient?', a: 'Regensburg und Landkreis Regensburg: Neutraubling, Regenstauf, Hemau, Wörth und alle Gemeinden im Landkreis Regensburg' },
  { q: 'Ist in einer Wohnung in Regensburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Regensburg hat im Schnitt 76,4 m², 40,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 62,2 % der Gebäude in Regensburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'regensburg',
  ort: 'Regensburg',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob Altbau in Stadtamhof, Wohnung in Kumpfmühl oder Haus in Reinhausen: Regensburger geben ihren Platz an der Donau nicht her. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da — im vertrauten Zuhause statt im Heim.</>,
  kreis: 'Landkreis Regensburg',
  vorOrt: {
    inhalt: (
      <>
        <Text>Eine Zahl entscheidet in Regensburg fast alles:{' '} <strong className="text-pm-ink font-semibold">40,1 Prozent aller Wohnungen sind kleiner als 60 Quadratmeter</strong> — in Bayern ist es halb so viel (20,7 Prozent). Die durchschnittliche Regensburger Wohnung misst 76,4 Quadratmeter gegenüber 100,5 im Freistaat, auf ein Gebäude kommen 4,0 Wohnungen statt 2,1, und nur 23,1 Prozent der Haushalte wohnen im Eigentum gegenüber 49,3 Prozent im Land. In vier von zehn Wohnungen ist schlicht kein Zimmer für eine Betreuungskraft frei. Wir sagen das vorher, weil es hinterher niemandem hilft.</Text>
        <Text>Eine zweite Zahl wird dagegen regelmäßig falsch gelesen. In Regensburg bestehen 58,6 Prozent aller Haushalte aus einer einzigen Person — der höchste Wert weit und breit. Das ist <em>kein</em> Signal für viele alleinlebende Ältere, sondern für Studierende. Die Kennzahl, auf die es ankommt, sind Haushalte, in denen ausschließlich Menschen ab 65 leben: Die liegen mit 17,7 Prozent deutlich <em>unter</em> dem bayerischen Wert von 23,0 Prozent.</Text>
        <Text>Regensburg ist tatsächlich jung. 17,4 Prozent der Einwohner sind über 65, in Bayern 21,6 Prozent; über 80 sind es 5,6 gegen 6,7 Prozent. Entsprechend niedrig ist die Pflegequote mit 42 Pflegebedürftigen je 1.000 Einwohner (Bayern 47). Was daraus folgt, ist trotzdem nicht weniger Bedarf, sondern ein anderer: Nur 43,8 Prozent der 6.622 Pflegebedürftigen werden rein familiär versorgt, in Bayern 48,5 Prozent. In einer Stadt, in der viele Kinder zum Studium kommen und die Eltern anderswo wohnen, ist die Familie oft schlicht nicht um die Ecke.</Text>
        <Text>Heimplätze gibt es dafür reichlich — und zwar nach beiden Maßstäben. Der Anteil der Pflegebedürftigen im Heim liegt mit 21,6 Prozent über dem Landeswert von 17,6, und gemessen an der Zahl der über 65-Jährigen stehen{' '} <strong className="text-pm-ink font-semibold">61 Plätze je 1.000 bereit, in Bayern 44</strong>. Das sind knapp 40 Prozent mehr. Eine Betreuung zu Hause tritt hier also nicht gegen einen Mangel an, sondern gegen ein sehr gut ausgebautes Angebot. Der Unterschied liegt woanders: in der vertrauten Wohnung, mit einer festen Bezugsperson statt wechselnder Schichten.</Text>
        <Text>Medizinisch ist Regensburg außergewöhnlich gut versorgt: drei anerkannte Akutgeriatrien, eine geriatrische Tagesklinik mit 20 Plätzen und eine geriatrische Rehabilitation — die vollständige Kette an einem Ort, was in Bayern selten ist. Der Übergang vom Krankenhaus nach Hause ist damit gut abgefedert; die häusliche Betreuung setzt meist erst nach der Reha ein. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Regensburg und Landkreis Regensburg: Neutraubling, Regenstauf, Hemau, Wörth und alle Gemeinden im Landkreis Regensburg',
  stimmen: ['k-20260221-anke', 'k-20241123-hildegard'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
