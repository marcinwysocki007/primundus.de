import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Saarbrücken anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Saarbrücken | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Saarbrücken in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-saarbruecken' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Saarbrücken | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Saarbrücken in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-saarbruecken',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Saarbrücken?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Saarland kostet im Schnitt rund 3.690 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Saarbrücken starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Lohnt sich 24-Stunden-Pflege, wenn es in Saarbrücken genug ambulante Dienste gibt?', a: 'Die Frage ist berechtigt — der Regionalverband ist dicht besiedelt, ambulante Dienste sind erreichbar. Der Unterschied liegt nicht in der Entfernung, sondern in der Anwesenheit. Ein Dienst kommt zu festen Zeiten und bleibt zwanzig Minuten. Er ist nicht da, wenn nachts jemand aufsteht, er kocht nicht mit und er merkt nicht, wenn tagsüber etwas nicht stimmt. Wo es um Begleitung über den ganzen Tag geht, ersetzt kein Einsatzplan jemanden, der im Haus wohnt.' },
  { q: 'Was bedeutet die Hanglage für die Betreuung in Saarbrücken?', a: 'Zwischen der Stadtmitte auf rund 230 Metern und Wohnlagen wie dem Eschberg auf 340 Metern liegen gut hundert Höhenmeter — auf kurzer Strecke. Wer dort oben oder in einer der Hanglagen über der Saar wohnt, merkt jede Steigung, sobald das Gehen schwerer fällt. Eine Betreuungskraft übernimmt die Wege nach draußen: einkaufen, Arzttermine, Begleitung. Damit bleibt der Alltag möglich, ohne dass jemand die vertraute Wohnung aufgeben muss.' },
  { q: 'Welches Einzugsgebiet wird in Saarbrücken bedient?', a: 'Saarbrücken und Umland: Neunkirchen, Homburg, Völklingen, Saarlouis und alle Gemeinden im Saarpfalz-Kreis und Landkreis Saarlouis' },
  { q: 'Ist in einer Wohnung in Saarbrücken Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Saarbrücken hat im Schnitt 85,7 m², 28,9 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 69,7 % der Gebäude in Saarbrücken sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Saarland zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.690 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'saarbruecken',
  ort: 'Saarbrücken',
  land: 'Saarland',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Von St. Johann über Dudweiler bis Burbach: Saarbrücker bleiben ihrem Viertel treu — oft ein Leben lang. Damit das auch mit Pflegebedarf so bleibt, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, im vertrauten Zuhause statt im Heim, auch im Umland bis Völklingen und Sulzbach. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Saarbrücken liegt im Tal, aber gewohnt wird auch weit darüber. Die Stadtmitte liegt auf rund 230 Metern, der Eschberg auf 340 — gut zwei Kilometer Luftlinie, gut hundert Meter Höhenunterschied. Wer dort oben wohnt oder in einer der Hanglagen über der Saar, merkt das jeden Tag ein bisschen deutlicher, sobald die Puste nachlässt. Selbst das Klinikum steht auf dem Winterberg.</Text>
        <Text>Dazu kommt der Wohnungsbestand. Im Nauwieser Viertel und in den gewachsenen Straßen von St. Johann stehen viele Häuser aus der Zeit zwischen 1860 und 1920 — schöne Altbauten mit hohen Decken, aber eben auch mit Treppenhäusern, die für einen Rollator nie gedacht waren. Eine Wohnung im dritten Stock ohne Aufzug ist jahrzehntelang kein Thema und dann plötzlich das größte.</Text>
        <Text>Anders als in vielen ländlichen Kreisen liegt es hier nicht an weiten Wegen: Der Regionalverband Saarbrücken ist dicht besiedelt, ambulante Dienste sind erreichbar. Was sie nicht leisten können, ist Anwesenheit. Zweimal zwanzig Minuten am Tag helfen beim Waschen — aber nicht nachts um drei, und nicht an dem langen Nachmittag, an dem sonst niemand kommt. Genau diese Lücke schließt eine Betreuungskraft, die mit einzieht. Das gilt in Saarbrücken ebenso wie in Völklingen, Sulzbach oder Riegelsberg.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie sich festlegen, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte im Saarland beraten kostenlos und neutral, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — ganz gleich, für welchen Anbieter Sie sich danach entscheiden.</Text>,
  },
  einzugsgebiet: 'Saarbrücken und Umland: Neunkirchen, Homburg, Völklingen, Saarlouis und alle Gemeinden im Saarpfalz-Kreis und Landkreis Saarlouis',
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
