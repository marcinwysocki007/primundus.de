import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Gütersloh anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Betreuung und Pflege in Gütersloh | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Gütersloh in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-guetersloh' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Betreuung und Pflege in Gütersloh | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Gütersloh in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-guetersloh',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Gütersloh?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Gütersloh starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Gütersloh gilt als junge Stadt — ist Pflege hier überhaupt ein Thema?', a: 'Ja, und zwar zunehmend. Der Anteil der über 65-Jährigen liegt zwar leicht unter dem nordrhein-westfälischen Schnitt, aber das liegt am Zuzug jüngerer Menschen, nicht an wenigen Älteren. In absoluten Zahlen wächst die Gruppe der über 65-Jährigen bis 2050 um rund 27 Prozent, im Land nur um 12. Und die Gruppe der über 80-Jährigen bleibt bis 2030 fast konstant — das sind die geburtenschwachen Kriegsjahrgänge — und wächst danach bis 2040 um mehr als ein Drittel.' },
  { q: 'Im Kreis Gütersloh gibt es viele Pflege-Wohngemeinschaften. Was ist der Unterschied zur Betreuung zu Hause?', a: 'In einer Pflege-Wohngemeinschaft ziehen mehrere Menschen zusammen, ein ambulanter Dienst betreut rund um die Uhr. Der Kreis Gütersloh hat davon rund 84 — eine bundesweite Besonderheit, und ein Grund, warum hier nur 10,7 Prozent der Pflegebedürftigen im Heim leben, deutlich weniger als in NRW und im Bund. Bei einer Betreuungskraft zu Hause bleibt dagegen alles, wie es ist: die eigene Wohnung, die eigenen Möbel, der eigene Tagesablauf — nur mit jemandem, der da ist.' },
  { q: 'Gibt es in Gütersloh eine geriatrische Klinik?', a: 'Im somatischen Krankenhaus in Gütersloh selbst nicht. Nach dem Krankenhausplan des Landes hat weder das Klinikum Gütersloh noch das Sankt Elisabeth Hospital eine geriatrische Fachabteilung; geplant ist Geriatrie in der Stadt nur an der LWL-Klinik, einem psychiatrischen Haus. Die nächstgelegenen geriatrischen Abteilungen liegen in Harsewinkel, Rheda-Wiedenbrück und Halle. Für den Übergang nach einem Klinikaufenthalt ist es deshalb sinnvoll, die Versorgung zu Hause früh zu klären.' },
  { q: 'Welches Einzugsgebiet wird in Gütersloh bedient?', a: 'Gütersloh und Kreis Gütersloh: Bielefeld-Südost, Rheda-Wiedenbrück, Herzebrock-Clarholz, Borgholzhausen und alle Gemeinden im Kreis Gütersloh' },
  { q: 'Ist in einer Wohnung in Gütersloh Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Gütersloh hat im Schnitt 97,9 m², 15,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,7 % der Gebäude in Gütersloh sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'guetersloh',
  ort: 'Gütersloh',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ein Arbeitsleben bei Miele, Bertelsmann oder auf dem Hof im Umland — und den Ruhestand dann im eigenen Zuhause in Isselhorst, Spexard oder Avenwedde verbringen: So stellen sich die meisten Gütersloher das Alter vor. Eine Betreuungskraft von Primundus zieht mit ein, wenn es allein nicht mehr geht, und ist bei Bedarf auch nachts da.</>,
  kreis: 'Kreis Gütersloh',
  vorOrt: {
    inhalt: (
      <>
        <Text>Gütersloh gilt als junge Stadt, und die Zahlen geben das her: Der Anteil der über 65-Jährigen liegt leicht unter dem nordrhein-westfälischen Schnitt, die Stadt wächst, während das Land schrumpft. Für die Pflege ist trotzdem eine andere Zahl entscheidend — die absolute. <strong className="text-pm-ink font-semibold">Bis 2050 wird die Zahl der Menschen über 65 in Gütersloh um rund 27 Prozent steigen</strong>, in Nordrhein-Westfalen insgesamt nur um 12. Der niedrige Anteil entsteht durch Zuzug jüngerer Menschen, nicht dadurch, dass es wenige Ältere gäbe.</Text>
        <Text>Dabei kommt die Welle nicht gleichmäßig. Die Gruppe der über 80-Jährigen wächst bis 2030 praktisch gar nicht — das sind die geburtenschwachen Kriegsjahrgänge. Danach steigt sie bis 2040 um mehr als ein Drittel. Wer heute plant, sollte also nicht von der Gegenwart auf die kommenden Jahre schließen.</Text>
        <Text>Bemerkenswert ist, wie im Kreis Gütersloh gepflegt wird. Nur <strong className="text-pm-ink font-semibold"> 10,7 Prozent aller Pflegebedürftigen leben im Heim</strong> — deutlich weniger als in Nordrhein-Westfalen und im Bund. Der Kreis hat stattdessen eine Besonderheit entwickelt: rund 84 Haus- und Pflegewohngemeinschaften, in denen ambulante Dienste rund um die Uhr betreuen. Über tausend Menschen leben dort. Die klassischen Heime sind entsprechend nur zu gut 83 Prozent ausgelastet, während die Wohngemeinschaften über 90 Prozent erreichen. Anders gesagt: Hier ist man offen für Lösungen jenseits des Heims — und die Betreuung im eigenen Zuhause ist die konsequenteste davon.</Text>
        <Text>Beim Wohnen kommt Gütersloh der häuslichen Pflege entgegen und stellt sie zugleich vor eine Hürde. Die Stadt liegt in der Emssandebene, also flach — Steigungen sind hier kein Thema. Dafür ist der Bestand ungewöhnlich großzügig: Nur 16,5 Prozent der Wohnungen liegen in größeren Mehrfamilienhäusern, in Nordrhein-Westfalen sind es fast doppelt so viele; gut vier von zehn Wohnungen haben über 100 Quadratmeter. Das heißt in der Praxis: eigenes Haus, eigene Treppe, viel Fläche, die gepflegt werden will. Genau dafür ist eine Betreuungskraft im Haus gemacht — sie führt den Haushalt mit und ist nachts da. Das gilt in Isselhorst und Avenwedde ebenso wie in Verl, Rheda-Wiedenbrück oder Harsewinkel.</Text>
        <Text>Ein praktischer Hinweis für den Ernstfall: Eine geriatrische Akutabteilung im somatischen Krankenhaus gibt es in Gütersloh selbst nicht — die nächstgelegenen liegen in Harsewinkel, Rheda-Wiedenbrück und Halle. Für die Beratung im Vorfeld gilt: Die Pflegeberatung im Kreis Gütersloh ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
      </>
    ),
  },
  einzugsgebiet: 'Gütersloh und Kreis Gütersloh: Bielefeld-Südost, Rheda-Wiedenbrück, Herzebrock-Clarholz, Borgholzhausen und alle Gemeinden im Kreis Gütersloh',
  stimmen: ['k-20250601-marion'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
