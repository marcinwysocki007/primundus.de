import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Rüsselsheim am Main anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Rüsselsheim | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Rüsselsheim am Main in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-ruesselsheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Rüsselsheim | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Rüsselsheim am Main in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-ruesselsheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Rüsselsheim am Main?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Hessen kostet im Schnitt rund 3.230 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Rüsselsheim am Main starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Rüsselsheim?', a: '6.362 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,9 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Rüsselsheim — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Rüsselsheim im Schnitt 2,8 Wohnungen, in Hessen 2,2. 65,7 Prozent der Gebäude stehen frei, 16,9 Prozent stehen in geschlossener Reihe. 54,2 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Rüsselsheim ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie schwer ist es, in Rüsselsheim einen Heimplatz zu bekommen?', a: 'Schwerer als fast überall sonst in Hessen. Der Kreis Groß-Gerau hat 36 vollstationäre Heimplätze je 1.000 Einwohner über 65 — in Hessen sind es 47, also fast ein Viertel mehr. Nur zwei Kreise im Regierungsbezirk Darmstadt liegen darunter. Dazu passt, dass hier 63,9 Prozent aller Pflegebedürftigen ausschließlich von Angehörigen versorgt werden (Hessen: 58,6 Prozent) und ambulante Dienste mit 12,9 Prozent deutlich seltener zum Einsatz kommen als landesweit (17,6 Prozent). Für viele Familien ist die Betreuung zu Hause deshalb nicht die zweitbeste Lösung, sondern die einzige, die sich planen lässt.' },
  { q: 'Welches Einzugsgebiet wird in Rüsselsheim am Main bedient?', a: 'Rüsselsheim und Groß-Gerau: Groß-Gerau, Mörfelden-Walldorf, Gernsheim und alle Gemeinden im Kreis Groß-Gerau' },
  { q: 'Ist in einer Wohnung in Rüsselsheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Rüsselsheim hat im Schnitt 84,6 m², 25,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 73,4 % der Gebäude in Rüsselsheim sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'ruesselsheim',
  ort: 'Rüsselsheim am Main',
  land: 'Hessen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Rüsselsheim',
  einleitung: <>Ein Arbeitsleben bei Opel, ein Zuhause in Königstädten oder Bauschheim: Rüsselsheimer wissen, was sie sich erarbeitet haben — und bleiben. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Kreis Groß-Gerau',
  vorOrt: {
    inhalt: (
      <>
        <Text>Im Kreis Groß-Gerau ruht die Pflege stärker auf den Familien als in jedem anderen hessischen Kreis, den wir uns angesehen haben.{' '} <strong className="text-pm-ink font-semibold">63,9 Prozent der 16.707 Pflegebedürftigen beziehen ausschließlich Pflegegeld</strong>, werden also allein von Angehörigen versorgt — in Hessen sind es 58,6 Prozent. Ambulante Dienste kommen dagegen selten zum Einsatz: 12,9 Prozent gegenüber 17,6 im Land.</Text>
        <Text>Das ist keine freie Entscheidung, sondern hat auch mit dem Angebot zu tun. Der Kreis hat{' '} <strong className="text-pm-ink font-semibold">36 Heimplätze je 1.000 Einwohner über 65, in Hessen sind es 47</strong> — fast ein Viertel weniger. Nur zwei Kreise im Regierungsbezirk Darmstadt liegen darunter. Anteil und Platzdichte zeigen hier in dieselbe Richtung, aber die Dichte ist der härtere Engpass. Wer in Rüsselsheim einen Heimplatz sucht, sucht in einem der knappsten Märkte Hessens.</Text>
        <Text>Rüsselsheim selbst ist dabei jung: 12.865 Einwohner sind über 65, das sind 18,4 Prozent gegenüber 21,3 Prozent in Hessen; das Durchschnittsalter liegt bei 42,1 Jahren. Aber der Durchschnitt verdeckt hier besonders viel.{' '} <strong className="text-pm-ink font-semibold">Zwischen den Stadtbezirken liegt beim Anteil der über 60-Jährigen der Faktor drei</strong> — in Alt-Bauschheim sind es 35,8 Prozent, im Wohngebiet Blauer See II 11,4. Das Muster ist deutlich: Die eingemeindeten Dörfer Bauschheim, Königstädten und Haßloch sind alt, die Großsiedlungen der Kernstadt und die Neubaugebiete sind jung.</Text>
        <Text>Ein zweiter Punkt gehört dazu: 32,5 Prozent der Rüsselsheimer haben keine deutsche Staatsangehörigkeit — in einem Kreis, dessen Pflege zu fast zwei Dritteln über Angehörige läuft. Sprache und Gewohnheiten sind bei einer Betreuungskraft, die im Haushalt lebt, deshalb kein Nebenthema. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto.</Text>
        <Text>Topografisch ist Rüsselsheim ohne Bedeutung für den Pflegealltag — zwischen dem höchsten und dem tiefsten Punkt des Stadtgebiets liegen 22 Meter. Geriatrisch ist die Stadt versorgt: Das GPR Klinikum führt eine eigenständige Geriatrische Klinik mit 40 Betten. Ein Hinweis, weil Verzeichnisse dem Haus hinterherhinken: Es hieß früher Stadtkrankenhaus Rüsselsheim — dieselbe Einrichtung, nicht ein zweites Haus. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Rüsselsheim und Groß-Gerau: Groß-Gerau, Mörfelden-Walldorf, Gernsheim und alle Gemeinden im Kreis Groß-Gerau',
  stimmen: ['k-20260605-daniel', 'k-20260327-marco'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
