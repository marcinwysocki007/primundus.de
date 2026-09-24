import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Augsburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Augsburg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Augsburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-augsburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Augsburg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Augsburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-augsburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Augsburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Augsburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie ist die Pflegesituation in Augsburg?', a: 'Stärker professionalisiert als im übrigen Bayern. Von den 14.208 Pflegebedürftigen der Stadt werden nur 45,4 Prozent ausschließlich von Angehörigen versorgt, in Bayern sind es 48,5 Prozent. Ambulante Dienste (22,1 gegen 20,0 Prozent) und Heimpflege (18,2 gegen 17,6) liegen entsprechend darüber. Heimplätze sind reichlich vorhanden: 49 je 1.000 Einwohner über 65 gegenüber 44 in Bayern, bei durchschnittlich 71 Plätzen je Einrichtung statt 58. Eine Betreuung zu Hause tritt hier also nicht gegen einen Mangel an, sondern gegen ein gut ausgebautes stationäres Angebot.' },
  { q: 'Ich habe Pflegegrad 1 — lohnt sich das Thema für mich schon?', a: 'Gerade dann lohnt sich das Nachdenken. In Augsburg haben 2.009 Menschen Pflegegrad 1, beziehen aber keine regulären Pflegeleistungen — 14,1 Prozent aller Pflegebedürftigen der Stadt und mehr als im bayerischen Durchschnitt (13,9 Prozent). Das sind über zweitausend Haushalte mit anerkanntem Unterstützungsbedarf, in denen bislang nichts organisiert ist. Bei Pflegegrad 1 stehen Entlastungsbetrag und Hilfsmittel zur Verfügung; wer früh plant, muss später nicht unter Zeitdruck entscheiden. Welche Leistungen Ihnen zustehen, rechnet der Pflegegrad-Rechner durch.' },
  { q: 'Welches Einzugsgebiet wird in Augsburg bedient?', a: 'Augsburg und Umland: Friedberg, Neusäß, Königsbrunn, Gersthofen, Stadtbergen und alle Gemeinden im Landkreis Augsburg' },
  { q: 'Ist in einer Wohnung in Augsburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Augsburg hat im Schnitt 76,4 m², 37,6 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 62,8 % der Gebäude in Augsburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'augsburg',
  ort: 'Augsburg',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Göggingen, Pfersee, Haunstetten oder das Lechviertel: Augsburger sind ihrem Viertel treu — und dem eigenen Zuhause sowieso. Wenn Mutter oder Vater mehr Hilfe brauchen, als Besuche leisten können, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da, auch im Umland bis Königsbrunn und Friedberg.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Wer von Bayern auf Augsburg schließt, liegt beim Wohnen völlig daneben. Im Freistaat kommen auf ein Gebäude 2,1 Wohnungen, in Augsburg 4,1. Die durchschnittliche bayerische Wohnung misst 100,5 Quadratmeter, die Augsburger 76,4.{' '} <strong className="text-pm-ink font-semibold">Gut jede dritte Wohnung in der Stadt liegt unter 60 Quadratmetern — in Bayern ist es jede fünfte.</strong> Und im Eigentum wohnen hier 32,5 Prozent der Haushalte gegenüber 49,3 Prozent im Land. Augsburg ist eine Großstadt mit Großstadtgrundrissen, keine schwäbische Landstadt. Für die Frage, ob eine Betreuungskraft ein eigenes Zimmer bekommt, ist das die entscheidende Auskunft.</Text>
        <Text>Bei der Pflege selbst fällt ein Wert besonders auf.{' '} <strong className="text-pm-ink font-semibold">Nur 45,4 Prozent der 14.208 Augsburger Pflegebedürftigen werden ausschließlich von Angehörigen versorgt</strong> — in Bayern sind es 48,5 Prozent. Dafür liegen beide professionellen Formen darüber: ambulante Dienste bei 22,1 statt 20,0 Prozent, Heimpflege bei 18,2 statt 17,6. Augsburg ist eine Stadt, in der Pflege früher aus der Hand gegeben wird als im übrigen Bayern. Das hat nichts mit fehlender Zuwendung zu tun, sondern mit Wohnungsgrößen, Erwerbstätigkeit und Wegen.</Text>
        <Text>Heimplätze sind in Augsburg reichlich vorhanden — 49 je 1.000 Einwohner über 65 gegenüber 44 in Bayern, und mit durchschnittlich 71 Plätzen je Haus sind die Einrichtungen größer als im Land (58). Auch hier zeigen Anteil und Platzangebot in dieselbe Richtung. Eine Betreuung zu Hause tritt in dieser Stadt also nicht gegen einen Mangel an, sondern gegen ein gut ausgebautes stationäres Angebot. Der Unterschied liegt woanders: darin, dass jemand in der eigenen Wohnung bleibt, in der vertrauten Umgebung, mit einer festen Bezugsperson statt wechselnden Schichten.</Text>
        <Text>Eine Gruppe wird dabei regelmäßig übersehen. In Augsburg haben{' '} <strong className="text-pm-ink font-semibold">2.009 Menschen Pflegegrad 1, beziehen aber keine regulären Pflegeleistungen</strong> — 14,1 Prozent aller Pflegebedürftigen der Stadt und damit mehr als in Bayern (13,9 Prozent). Das sind über zweitausend Haushalte mit anerkanntem Unterstützungsbedarf, in denen bisher nichts organisiert ist. Wer hier früh handelt, muss später nicht unter Zeitdruck entscheiden.</Text>
        <Text>Zur medizinischen Lage gehören zwei Punkte. Mit der geriatrischen Rehaklinik der Hessing Stiftung hat Augsburg eine der größten Einrichtungen ihrer Art in Deutschland, rund zweitausend Patienten im Jahr, und das erklärte Ziel ist die Rückkehr nach Hause. Eine akutgeriatrische Tagesklinik gibt es in ganz Schwaben dagegen nicht. Beides zusammen heißt: Der Übergang von der Klinik zurück in die eigene Wohnung muss zu Hause aufgefangen werden. Genau dafür zieht eine Betreuungskraft mit ein — auch in Bergheim, Inningen oder der Firnhaberau, wo ein Dienst weite Wege für kurze Einsätze hätte. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Augsburg und Umland: Friedberg, Neusäß, Königsbrunn, Gersthofen, Stadtbergen und alle Gemeinden im Landkreis Augsburg',
  stimmen: ['k-20260508-robert', 'k-20250929-sandra', 'k-20241130-gerhard'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
