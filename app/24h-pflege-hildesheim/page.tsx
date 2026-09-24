import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Hildesheim anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Hildesheim | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hildesheim in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hildesheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Hildesheim | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hildesheim in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-hildesheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Hildesheim?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Niedersachsen kostet im Schnitt rund 3.010 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Hildesheim starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Kommt eine Betreuungskraft auch in die Dörfer im Landkreis Hildesheim?', a: 'Ja — und dort wiegt der Unterschied am schwersten. In Bad Salzdetfurth, Alfeld, Elze, Sarstedt und den Gemeinden der Börde ist der nächste ambulante Dienst selten um die Ecke; jede Fahrt geht in die Tourenplanung ein, und die Termine liegen dann, wann sie eben liegen. Eine Betreuungskraft, die im Haus wohnt, braucht keine Anfahrt. Anfahrtskosten berechnen wir nicht, der Preis ist im Landkreis derselbe wie in der Stadt.' },
  { q: 'Was tun, wenn die Wohnung im dritten Stock ohne Aufzug liegt?', a: 'Das ist in den gewachsenen Vierteln rund um den Dom und am Moritzberg häufig die Ausgangslage — und für sich genommen kein Grund auszuziehen. Solange jemand die Wohnung selbst nicht mehr verlassen kann, verlagert sich der Alltag nach innen: einkaufen, kochen, waschen, Gesellschaft. Genau das übernimmt eine Betreuungskraft, die mit einzieht. Für Arztbesuche organisieren wir gemeinsam mit Ihnen die Begleitung.' },
  { q: 'Welches Einzugsgebiet wird in Hildesheim bedient?', a: 'Hildesheim und Landkreis Hildesheim: Bad Salzdetfurth, Alfeld, Elze, Sarstedt und alle Gemeinden im Landkreis Hildesheim' },
  { q: 'Ist in einer Wohnung in Hildesheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Hildesheim hat im Schnitt 85,8 m², 27,9 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 68,0 % der Gebäude in Hildesheim sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'hildesheim',
  ort: 'Hildesheim',
  land: 'Niedersachsen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Domviertel, Moritzberg und den Dörfern der Börde: Die meisten Hildesheimer möchten im Alter genau dort wohnen bleiben, wo sie zuhause sind — auch wenn Alleinleben nicht mehr geht. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, auch in Sarstedt, Bad Salzdetfurth und im Umland.</>,
  kreis: 'Landkreis Hildesheim',
  vorOrt: {
    inhalt: (
      <>
        <Text>Hildesheim ist eine Stadt mit vielen Treppen. Rund um den Dom, am Moritzberg und in den gewachsenen Vierteln liegen die Wohnungen oft im zweiten oder dritten Stock, und ein Aufzug ist die Ausnahme. Solange jemand die Stufen schafft, denkt niemand darüber nach. Wenn es nicht mehr geht, ändert sich der Alltag schlagartig: Der Arzttermin wird zur Tagesaufgabe, der Einkauf um die Ecke ist unerreichbar, und Besuch kommt seltener.</Text>
        <Text>An diesem Punkt melden sich die meisten Familien bei uns. Meistens geht es gar nicht um medizinische Pflege im engeren Sinn, sondern um den Alltag: aufstehen, waschen, anziehen, kochen — und jemanden im Haus haben, der zuhört. Ein ambulanter Dienst kommt dafür zweimal am Tag für zwanzig Minuten. Eine Betreuungskraft, die mit einzieht, ist auch da, wenn nachts jemand aufsteht oder nachmittags die Unruhe kommt.</Text>
        <Text>Im Landkreis stellt sich die Frage anders. Wer in Bad Salzdetfurth, Alfeld oder Elze wohnt, hat den nächsten ambulanten Dienst selten um die Ecke, und in den Dörfern der Börde wird jede Fahrt zur Rechnung. Gerade dort, wo die Versorgung dünn ist, spielt die 24-Stunden-Betreuung ihre Stärke aus: Sie ist auf keine Anfahrt angewiesen, weil sie schon da ist.</Text>
      </>
    ),
    beratungsabsatz: <Text>Wenn Sie sich unabhängig beraten lassen möchten, bevor Sie sich entscheiden: Der Senioren- und Pflegestützpunkt des Landkreises Hildesheim berät kostenlos und neutral, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — unabhängig davon, für welchen Anbieter Sie sich am Ende entscheiden.</Text>,
  },
  einzugsgebiet: 'Hildesheim und Landkreis Hildesheim: Bad Salzdetfurth, Alfeld, Elze, Sarstedt und alle Gemeinden im Landkreis Hildesheim',
  stimmen: ['k-20250623-jan'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
