import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Potsdam anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Potsdam | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Potsdam in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-potsdam' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Potsdam | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Potsdam in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-potsdam',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Potsdam?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Brandenburg kostet im Schnitt rund 3.020 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Potsdam starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie ist die Pflegesituation in Potsdam?', a: 'Institutioneller als im übrigen Brandenburg. Von den 10.087 Pflegebedürftigen der Stadt werden 5.091 allein von Angehörigen versorgt — 50,5 Prozent gegenüber 54,5 Prozent im Land. Dafür lebt mit 16,4 Prozent rund jeder sechste Pflegebedürftige im Heim, im Land nur jeder neunte (10,9 Prozent). Das ist kein Effekt der jüngeren Stadtbevölkerung: Auch gemessen an der Zahl der über 65-Jährigen stehen in Potsdam mehr Heimplätze bereit als im Landesdurchschnitt. In der Stadt leben 37.970 Menschen über 65, davon 13.706 über 80.' },
  { q: 'Warum ist Tagespflege in Potsdam so schwer zu bekommen?', a: 'Weil es sie kaum gibt. Nur 2,6 Prozent der Leistungsempfänger in Potsdam nutzen Tagespflege, im Land Brandenburg sind es 4,1 Prozent. Von 1.943 Pflegeplätzen der Stadt entfallen gerade einmal 134 auf Tages- und Nachtpflege. Für Angehörige, die tagsüber arbeiten und abends pflegen, fehlt damit die naheliegendste Entlastung. Eine Betreuungskraft, die im Haushalt lebt, deckt genau diese Lücke — sie ist auch dann da, wenn niemand sonst kann.' },
  { q: 'Welches Einzugsgebiet wird in Potsdam bedient?', a: 'Potsdam und Umland: Werder, Brandenburg an der Havel, Teltow, Kleinmachnow und alle Gemeinden im Landkreis Potsdam-Mittelmark und Havelland' },
  { q: 'Ist in einer Wohnung in Potsdam Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Potsdam hat im Schnitt 75,8 m², 37,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 63,8 % der Gebäude in Potsdam sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Brandenburg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.020 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'potsdam',
  ort: 'Potsdam',
  land: 'Brandenburg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Babelsberg, Bornstedt und den Havelseen wohnt man zu schön, um fürs Alter wegzuziehen. Eine Betreuungskraft von Primundus sorgt dafür, dass niemand muss: Sie zieht mit ein, ist bei Bedarf auch nachts da und hält den vertrauten Alltag am Laufen — in Potsdam und im Umland.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Potsdam organisiert Pflege anders als das übrige Brandenburg — deutlich institutioneller. Von den 10.087 Pflegebedürftigen der Stadt werden 5.091 allein von Angehörigen versorgt, also 50,5 Prozent. Im Land sind es 54,5. Umgekehrt lebt in Potsdam mit 16,4 Prozent{' '} <strong className="text-pm-ink font-semibold">rund jeder sechste Pflegebedürftige im Heim, im Land nur jeder neunte (10,9 Prozent).</strong> Das ist kein Rechentrick der jüngeren Stadtbevölkerung: Auch gemessen an der Zahl der über 65-Jährigen stehen in Potsdam mehr Heimplätze bereit als anderswo im Land. Wer hier zu Hause bleiben möchte, entscheidet sich also gegen einen gut ausgebauten Strom.</Text>
        <Text>Eine Lücke fällt dabei besonders auf: <strong className="text-pm-ink font-semibold">Nur 2,6 Prozent der Leistungsempfänger nutzen Tagespflege</strong> — im Land sind es 4,1 Prozent. Von 1.943 Pflegeplätzen in Potsdam entfallen gerade 134 auf Tages- und Nachtpflege. Für Angehörige, die tagsüber arbeiten und abends pflegen, gibt es in dieser Stadt also kaum die klassische Entlastung. Genau diese Konstellation — jemand muss tagsüber da sein, aber der Alltag lässt es nicht zu — löst eine Betreuungskraft, die im Haushalt wohnt.</Text>
        <Text>Beim Wohnen wird es dafür eng. Auf ein Potsdamer Gebäude kommen im Schnitt 4,3 Wohnungen, die durchschnittliche Wohnung misst 75,8 Quadratmeter, und fast vier von zehn liegen unter 60. Nur 17,6 Prozent der Haushalte wohnen im Eigentum — der niedrigste Wert aller Städte, für die wir das geprüft haben, und weit unter Brandenburg mit 45,6 Prozent. Der Bestand ist dabei jung: 30 Prozent der Wohnungen stammen aus den siebziger und achtziger Jahren, also aus dem Plattenbau in Schlaatz, Waldstadt II, Stern und Drewitz, weitere 16 Prozent wurden nach 2010 gebaut. Ein separates Zimmer für die Betreuungskraft ist hier die entscheidende Frage — nicht das Baujahr.</Text>
        <Text>Und Potsdam ist räumlich keine kompakte Stadt. Zwischen dem dichtesten und dem dünnsten Ortsteil liegt der Faktor 700: In Waldstadt II leben gut 10.000 Menschen je Quadratkilometer, in Sacrow 14. Havel und Seenkette zerschneiden das Stadtgebiet, Uetz-Paaren, Satzkorn und Grube liegen weit draußen. Für einen ambulanten Dienst bedeutet das lange Anfahrten für kurze Einsätze. Für jemanden, der im Haus wohnt, spielt die Lage keine Rolle.</Text>
        <Text>Medizinisch ist die Stadt gut versorgt: Das Klinikum Ernst von Bergmann führt eine eigene Klinik für Geriatrie, und mit dem Evangelischen Zentrum für Altersmedizin gibt es ein eigenes geriatrisches Fachkrankenhaus samt Tagesklinik. Die Frage stellt sich, wie fast immer, erst danach — wenn es zurück in die eigenen vier Wände geht. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Potsdam und Umland: Werder, Brandenburg an der Havel, Teltow, Kleinmachnow und alle Gemeinden im Landkreis Potsdam-Mittelmark und Havelland',
  stimmen: ['k-20260413-silke', 'k-20250925-holger'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
