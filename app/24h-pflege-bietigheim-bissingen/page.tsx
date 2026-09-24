import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bietigheim-Bissingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bietigheim-Bissingen | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bietigheim-Bissingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bietigheim-bissingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bietigheim-Bissingen | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bietigheim-Bissingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bietigheim-bissingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bietigheim-Bissingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bietigheim-Bissingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Bietigheim-Bissingen?', a: '4.876 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bietigheim-Bissingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bietigheim-Bissingen im Schnitt 2,4 Wohnungen, in Baden-Württemberg 2,1. 53,5 Prozent der Gebäude stehen frei, 25,9 Prozent stehen in geschlossener Reihe. 40,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bietigheim-Bissingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie ist die Heimplatz-Lage in Bietigheim-Bissingen?', a: 'Besser als im Umland. Die Kreispflegeplanung rechnet je Kommune und kommt für Bietigheim-Bissingen auf 457 vorhandene Plätze bei einem Bedarf von 461 — praktisch ausgeglichen, während im gesamten Landkreis Ludwigsburg 920 Plätze fehlen. Zum Vergleich: Freiberg am Neckar fehlen 125, Gerlingen 99, Ditzingen 96. Knapp ist dagegen die Kurzzeitpflege: Im ganzen Landkreis gibt es nur 53 solitäre Plätze bei einem Bedarf von 162 — also genau das Angebot, das Angehörige brauchen, wenn sie selbst ausfallen. In der Stadt gibt es fünf Pflegeheime, vier Tagespflegen und drei ambulante Dienste.' },
  { q: 'Welches Einzugsgebiet wird in Bietigheim-Bissingen bedient?', a: 'Bietigheim-Bissingen und nördlicher Landkreis Ludwigsburg: Tamm, Sachsenheim, Besigheim, Bönnigheim und alle Gemeinden im nördlichen Landkreis Ludwigsburg' },
  { q: 'Ist in einer Wohnung in Bietigheim-Bissingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bietigheim-Bissingen hat im Schnitt 94,9 m², 17,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 77,6 % der Gebäude in Bietigheim-Bissingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bietigheim-bissingen',
  ort: 'Bietigheim-Bissingen',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Fachwerk-Altstadt, Buch oder Untermberg an Enz und Metter: Bietigheimer bleiben ihrem Zuhause treu. Eine Betreuungskraft von Primundus zieht mit ein, wenn Mutter oder Vater Hilfe brauchen, und ist bei Bedarf auch nachts da.</>,
  kreis: 'nördlichen Landkreis Ludwigsburg',
  vorOrt: {
    inhalt: (
      <>
        <Text>Der Landkreis Ludwigsburg zeigt eine Entwicklung, die man einmal in Zahlen gesehen haben sollte:{' '} <strong className="text-pm-ink font-semibold">Zwischen 2017 und 2023 stieg die Zahl der Pflegebedürftigen um fast 60 Prozent — von 17.575 auf 28.077. Die Zahl der Menschen im Pflegeheim blieb dabei praktisch unverändert bei rund 4.000.</strong> Der Anteil der stationär Versorgten fiel dadurch von 22,8 auf 14,3 Prozent. Es sind nicht weniger Menschen ins Heim gezogen — es sind nur sehr viel mehr pflegebedürftig geworden, und die alle bleiben zu Hause.</Text>
        <Text>Bietigheim-Bissingen steht dabei besser da als das Umland. Die Kreispflegeplanung rechnet je Kommune, und für die Stadt kommt sie auf 457 vorhandene Plätze bei einem Bedarf von 461 — praktisch ausgeglichen, während{' '} <strong className="text-pm-ink font-semibold">im gesamten Landkreis 920 Plätze fehlen.</strong> In Freiberg am Neckar sind es minus 125, in Gerlingen minus 99, in Ditzingen minus 96. Wer hier wohnt, hat also vergleichsweise gute Karten.</Text>
        <Text>Eine Lücke gibt es trotzdem, und sie trifft genau die Familien, die zu Hause pflegen:{' '} <strong className="text-pm-ink font-semibold">Im ganzen Landkreis gibt es nur 53 solitäre Kurzzeitpflegeplätze</strong>, dem Bedarf von 162 steht also ein Defizit von 109 gegenüber. Kurzzeitpflege ist das, was Angehörige brauchen, wenn sie selbst krank werden oder in Urlaub fahren. Der Landkreis vermittelt 19 dieser Plätze inzwischen selbst. In der Stadt selbst gibt es fünf Pflegeheime, vier Tagespflegen mit 56 Plätzen und drei ambulante Dienste.</Text>
        <Text>Bemerkenswert ist, wohin der Landkreis sein Geld lenkt. Statt allein neue Heimplätze zu fördern, stellt er{' '} <strong className="text-pm-ink font-semibold">jährlich 150.000 Euro für dezentrale Quartiersmanager bereit — ausdrücklich, um die häusliche Pflege zu stärken und Angehörige zu entlasten.</strong> Das ist eine Antwort auf genau die Entwicklung oben: Wenn der Zuwachs ohnehin zu Hause bleibt, muss die Unterstützung dorthin. In Bietigheim-Bissingen gibt es außerdem 193 Wohnungen im Betreuten Wohnen — eine Zwischenstufe, die oft übersehen wird, wenn die Entscheidung zwischen „allein zu Hause" und „Heim" aufgemacht wird. Innerhalb des Kreises schwankt der Anteil der über 65-Jährigen übrigens zwischen 16,8 und 24,6 Prozent; die Ausgangslage ist von Gemeinde zu Gemeinde sehr verschieden.</Text>
        <Text>Zur Altersmedizin ein Hinweis, weil ältere Quellen in die Irre führen:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie zog im April 2020 von Marbach am Neckar nach Bietigheim.</strong> Sie ist heute Teil der Klinik für Innere Medizin am RKH Krankenhaus in der Riedstraße. Verwirrend ist außerdem der Name des Zentrums — es heißt „Geriatrisches Zentrum Ludwigsburg-Bietigheim" und wird auf den Seiten des Ludwigsburger Klinikums geführt, die Akutstation liegt aber in Bietigheim-Bissingen. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Bietigheim-Bissingen und nördlicher Landkreis Ludwigsburg: Tamm, Sachsenheim, Besigheim, Bönnigheim und alle Gemeinden im nördlichen Landkreis Ludwigsburg',
  stimmen: ['k-20260829-sabine', 'k-20260318-thomas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
