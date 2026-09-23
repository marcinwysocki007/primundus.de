import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Pfaffenhofen an der Ilm anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Pfaffenhofen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Pfaffenhofen an der Ilm in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-pfaffenhofen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Pfaffenhofen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Pfaffenhofen an der Ilm in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-pfaffenhofen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Pfaffenhofen an der Ilm?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Pfaffenhofen an der Ilm starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Kommt eine Betreuungskraft auch in die Gemeindeteile rund um Pfaffenhofen?', a: 'Ja, und dort ist der Unterschied besonders groß. Zum Stadtgebiet gehören 62 Gemeindeteile auf gut 92 Quadratkilometern — rechnerisch keine 300 Einwohner je Quadratkilometer. Wer in Förnbach, Tegernbach oder Uttenhofen wohnt, hängt bei jedem Termin daran, dass jemand fährt. Eine Betreuungskraft, die im Haus wohnt, übernimmt diese Wege und ist von keiner Tourenplanung abhängig. Anfahrtskosten berechnen wir nicht.' },
  { q: 'Was passiert, wenn der Führerschein wegfällt?', a: 'In einer so gestreuten Siedlungsstruktur ist das oft der Moment, in dem der Alltag kippt — nicht die Pflegebedürftigkeit selbst. Einkaufen, Arzttermine, Besuche: alles hängt plötzlich an anderen. Eine Betreuungskraft im Haushalt löst beides auf einmal, weil sie da ist und die Wege übernimmt. In Bayern kommt das Landespflegegeld von 500 Euro im Jahr ab Pflegegrad 2 hinzu, unabhängig davon, wer die Pflege leistet.' },
  { q: 'Welches Einzugsgebiet wird in Pfaffenhofen an der Ilm bedient?', a: 'Pfaffenhofen und Landkreis Pfaffenhofen: Wolnzach, Schrobenhausen-Grenze, Geisenfeld und alle Gemeinden im Landkreis Pfaffenhofen an der Ilm' },
  { q: 'Ist in einer Wohnung in Pfaffenhofen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Pfaffenhofen hat im Schnitt 103,0 m², 18,8 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 82,0 % der Gebäude in Pfaffenhofen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'pfaffenhofen',
  ort: 'Pfaffenhofen an der Ilm',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Pfaffenhofen',
  einleitung: <>Zwischen Hopfengärten der Hallertau, der Ilm und den Dörfern Richtung Wolnzach und Scheyern: Rund um Pfaffenhofen bleibt man auf dem eigenen Grund — auch wenn München und Ingolstadt nah sind, das Zuhause ist näher. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Pfaffenhofen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Pfaffenhofen heißt Stadt, ist aber zu großen Teilen Land. Zum Stadtgebiet gehören 62 Gemeindeteile, verteilt über gut 92 Quadratkilometer — rechnerisch keine 300 Einwohner je Quadratkilometer. Wer nicht in der Kernstadt wohnt, sondern in Förnbach, Tegernbach, Uttenhofen oder auf einem der Höfe dazwischen, lebt schön, aber weit auseinander.</Text>
        <Text>Für die Pflege ist das der entscheidende Punkt. Solange man selbst Auto fährt, ist die Streulage kein Thema. Wenn der Führerschein wegfällt, wird sie zum täglichen Problem: Einkaufen, Arzttermine, der Besuch bei der Nachbarin — alles hängt daran, dass jemand fährt. Und ein ambulanter Dienst, der solche Strecken zurücklegt, kommt dann, wann die Tour es hergibt, nicht wann es passt. Eine Betreuungskraft, die im Haus wohnt, löst beides auf einmal: Sie ist da, und sie übernimmt die Wege.</Text>
        <Text>Das Ilmtal liegt bei gut 400 Metern, die Höhenzüge ringsum reichen auf über 500 — sanft geschwungenes Hügelland mit einzelnen steileren Hängen. Bemerkenswert ist die Altersstruktur: Die Stadt Pfaffenhofen ist etwas älter als ihr Landkreis, gut jeder Fünfte ist hier über 65. Für Familien in Wolnzach, Geisenfeld, Reichertshofen oder Hohenwart stellt sich dieselbe Frage.</Text>
        <Text>Wenn Sie zuerst wissen wollen, was Ihnen zusteht: Die Fachstellen für Pflege- und Behindertenberatung in Bayern beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Der Beratungsanspruch ist gesetzlich verankert (§ 7a SGB XI). In Bayern kommt das Landespflegegeld dazu: 500 Euro im Jahr für Pflegebedürftige ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Pfaffenhofen und Landkreis Pfaffenhofen: Wolnzach, Schrobenhausen-Grenze, Geisenfeld und alle Gemeinden im Landkreis Pfaffenhofen an der Ilm',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
