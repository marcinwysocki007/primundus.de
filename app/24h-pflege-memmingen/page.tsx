import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Memmingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Memmingen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Memmingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-memmingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Memmingen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Memmingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-memmingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Memmingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Memmingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Welches Einzugsgebiet wird in Memmingen bedient?', a: 'Memmingen und Unterallgäu: Bad Wörishofen, Ottobeuren, Mindelheim und alle Gemeinden im Landkreis Unterallgäu' },
  { q: 'Ist in einer Wohnung in Memmingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Memmingen hat im Schnitt 90,0 m², 24,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 79,6 % der Gebäude in Memmingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'memmingen',
  ort: 'Memmingen',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob in der Altstadt mit ihren Giebeln, in Amendingen oder Steinheim: Memminger bleiben ihrem Stück Allgäu treu. Wenn Mutter oder Vater mehr Hilfe brauchen, als die Familie leisten kann, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, im vertrauten Zuhause.</>,
  kreis: 'Unterallgäu',
  vorOrt: {
    inhalt: (
      <>
        <Text>Memmingen ist deutlich älter als der Freistaat, und zwar dort, wo es zählt.{' '} <strong className="text-pm-ink font-semibold">7,5 Prozent der Einwohner sind über 80 — 3.315 Menschen —, in Bayern sind es 6,7 Prozent.</strong> Bei den über 65-Jährigen sind es 9.911 oder 22,4 Prozent gegenüber 21,6 im Land. Entsprechend liegt die Pflegequote mit 51 Pflegebedürftigen je 1.000 Einwohner über dem bayerischen Wert von 47. Für eine Stadt mit gut 44.000 Einwohnern sind das 2.366 Menschen mit Pflegebedarf.</Text>
        <Text>Versorgt werden sie ganz überwiegend zu Hause: 50,8 Prozent allein durch Angehörige (Bayern 48,5), weitere 22,3 Prozent mit einem ambulanten Dienst (Bayern 20,0). Nur 13,9 Prozent leben im Heim, im Freistaat 17,6. Das heißt aber nicht, dass Memmingen heimarm wäre — gemessen an der Zahl der über 65-Jährigen stehen hier 47 Plätze je 1.000 bereit, in Bayern 44. Die Plätze gäbe es also; sie werden nur seltener gebraucht, weil mehr Menschen zu Hause bleiben.</Text>
        <Text>Auffällig ist, wer in Memmingen mit wem zusammenlebt.{' '} <strong className="text-pm-ink font-semibold">In 26,1 Prozent aller Haushalte leben ausschließlich Menschen ab 65</strong> — in Bayern sind es 23,0 Prozent. In gut jedem vierten Haushalt der Stadt ist also niemand da, der nachts einspringen könnte, wenn etwas passiert. Genau für diese Konstellation ist eine Betreuungskraft gedacht, die im Haushalt wohnt.</Text>
        <Text>Räumlich steht Memmingen besser da als die großen Städte: 79,6 Prozent der Gebäude sind Ein- oder Zweifamilienhäuser, die durchschnittliche Wohnung misst 90 Quadratmeter, und mit 6,51 Euro Nettokaltmiete je Quadratmeter ist Wohnen hier vergleichsweise günstig (Bayern 8,74). Ein Zimmer für die Betreuungskraft ist also oft schon vorhanden. Eine Einschränkung bleibt: Ein Drittel der Wohnungen stammt aus den Jahren 1950 bis 1969, und knapp jede vierte hat weniger als 60 Quadratmeter. Dort wird es eng.</Text>
        <Text>Ein Punkt, den man kennen sollte: Das Klinikum Memmingen führt seit 2016 eine anerkannte Akutgeriatrie. Eine geriatrische Tagesklinik oder eine geriatrische Rehabilitation gibt es in der Stadt dagegen nicht — in ganz Schwaben findet sich keine akutgeriatrische Tagesklinik. Nach einem Krankenhausaufenthalt geht es hier also meist direkt nach Hause, ohne den Zwischenschritt einer Reha. Umso wichtiger ist, dass zu Hause jemand da ist. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Memmingen und Unterallgäu: Bad Wörishofen, Ottobeuren, Mindelheim und alle Gemeinden im Landkreis Unterallgäu',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
