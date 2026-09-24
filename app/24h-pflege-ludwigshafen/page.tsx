import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Ludwigshafen am Rhein anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Ludwigshafen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Ludwigshafen am Rhein in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-ludwigshafen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Ludwigshafen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Ludwigshafen am Rhein in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-ludwigshafen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Ludwigshafen am Rhein?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Ludwigshafen am Rhein starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Ludwigshafen?', a: '16.798 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,7 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Ludwigshafen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Ludwigshafen im Schnitt 3,1 Wohnungen, in Rheinland-Pfalz 1,7. 31,0 Prozent der Gebäude stehen frei, 45,6 Prozent stehen in geschlossener Reihe. 60,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Ludwigshafen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Spricht die Betreuungskraft die Sprache, die zu Hause gesprochen wird?', a: 'In Ludwigshafen ist das eine der häufigsten Fragen, und die Zahlen erklären warum: 15,1 Prozent der Einwohner über 65 haben keine deutsche Staatsangehörigkeit — in Rheinland-Pfalz sind es 5,1 Prozent. Beides sind Höchstwerte im Land. In Nord-Hemshof sind sogar 41,8 Prozent der über 75-Jährigen Ausländer. Unsere Betreuungskräfte kommen aus Polen. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto. Bei anderen Herkunftssprachen sagen wir Ihnen ehrlich, was wir leisten können und was nicht.' },
  { q: 'Welches Einzugsgebiet wird in Ludwigshafen am Rhein bedient?', a: 'Ludwigshafen und Rhein-Pfalz-Kreis: Frankenthal, Speyer, Neustadt an der Weinstraße, Landau und alle Gemeinden im Rhein-Pfalz-Kreis' },
  { q: 'Ist in einer Wohnung in Ludwigshafen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Ludwigshafen hat im Schnitt 84,8 m², 26,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 71,4 % der Gebäude in Ludwigshafen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'ludwigshafen',
  ort: 'Ludwigshafen am Rhein',
  land: 'Rheinland-Pfalz',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Ludwigshafen',
  einleitung: <>Ein Arbeitsleben bei der BASF, ein Zuhause in Friesenheim, Oggersheim oder der Gartenstadt: Ludwigshafener wissen, was sie sich aufgebaut haben — und wollen es im Alter nicht verlassen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Rhein-Pfalz-Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Ludwigshafen ist die kreisfreie Stadt in Rheinland-Pfalz, in der am wenigsten stationär gepflegt wird — und am wenigsten ambulant.{' '} <strong className="text-pm-ink font-semibold">13,2 Prozent im Heim und 16,1 Prozent mit Pflegedienst sind jeweils der niedrigste Wert aller zwölf kreisfreien Städte des Landes.</strong> Was übrig bleibt, tragen die Familien: 58,7 Prozent der Pflegebedürftigen werden ausschließlich von Angehörigen versorgt. Und das ist kein Rechenartefakt — auch die Zahl der Heimplätze je 1.000 Einwohner über 70 liegt mit 69 unter dem Landeswert von 71 und deutlich unter dem Schnitt der Städte von 78.</Text>
        <Text>Der Blick auf zwanzig Jahre macht deutlich, wie es dazu kam:{' '} <strong className="text-pm-ink font-semibold">Zwischen 2001 und 2021 stieg die Zahl der Pflegebedürftigen um 238 Prozent, die Zahl der Heimplätze nur um 52 Prozent.</strong>{' '} Der stationäre Anteil brach von 30,7 auf 13,2 Prozent ein. Praktisch der gesamte Zuwachs landete bei den Angehörigen.</Text>
        <Text>Ein zweiter Befund ist für Ludwigshafen besonders wichtig.{' '} <strong className="text-pm-ink font-semibold">15,1 Prozent der Einwohner über 65 haben keine deutsche Staatsangehörigkeit — in Rheinland-Pfalz sind es 5,1 Prozent, also ein Drittel davon.</strong> Beides sind Höchstwerte im Land. Kleinräumig ist das extrem konzentriert: In Nord-Hemshof sind 41,8 Prozent der über 75-Jährigen Ausländer, in Edigheim 4,5. Sprache und Gewohnheiten sind bei einer Betreuungskraft, die im Haushalt lebt, deshalb keine Nebenfrage. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto.</Text>
        <Text>Auch beim Alter zerfällt die Stadt. Insgesamt ist Ludwigshafen jung — 18,8 Prozent über 65 gegenüber 22,8 Prozent im Land. Zwischen den Stadtteilen liegt beim Anteil der über 75-Jährigen aber der Faktor drei: In West sind es 4,0 Prozent, in der Gartenstadt 13,0. Das Durchschnittsalter reicht von 36,3 Jahren in West bis 46,5 in Edigheim.</Text>
      </>
    ),
    beratungsabsatz: <Text>Geriatrisch ist die Stadt versorgt: Das St. Marien- und St. Annastiftskrankenhaus führt eine Klinik für Geriatrie mit Alterstraumatologischem Zentrum und war nach eigenen Angaben die erste geriatrische Klinik in Rheinland-Pfalz mit dem Qualitätssiegel Geriatrie; dazu kommt das Krankenhaus zum Guten Hirten in Oggersheim. Für Beratung gibt es in Ludwigshafen fünf Pflegestützpunkte, jeweils für bestimmte Stadtteile zuständig — die Beratung dort ist kostenlos und neutral (§ 7a SGB XI).</Text>,
  },
  einzugsgebiet: 'Ludwigshafen und Rhein-Pfalz-Kreis: Frankenthal, Speyer, Neustadt an der Weinstraße, Landau und alle Gemeinden im Rhein-Pfalz-Kreis',
  stimmen: ['k-20260802-karin', 'k-20251031-martina'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
