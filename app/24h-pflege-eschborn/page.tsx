import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Eschborn anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Eschborn | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Eschborn in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-eschborn' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Eschborn | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Eschborn in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-eschborn',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Eschborn?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Hessen kostet im Schnitt rund 3.230 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Eschborn starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Eschborn?', a: '2.122 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,8 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Eschborn — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Eschborn im Schnitt 2,8 Wohnungen, in Hessen 2,2. 40,0 Prozent der Gebäude stehen frei, 34,7 Prozent stehen in geschlossener Reihe. 42,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Eschborn ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie ist die Heimplatz-Lage rund um Eschborn?', a: 'Sehr knapp. Der Main-Taunus-Kreis hat mit 31 vollstationären Plätzen je 1.000 Einwohner über 65 die dünnste Heimplatzdecke aller 26 hessischen Kreise — im Land sind es 47. In Eschborn selbst gibt es zwei Pflegeheime mit zusammen 97 Plätzen. Entsprechend leben im Kreis nur 10,9 Prozent der Pflegebedürftigen im Heim (Hessen: 13,5 Prozent), während 20,6 Prozent einen ambulanten Dienst nutzen (Hessen: 17,6). Die stärkere ambulante Versorgung ist hier keine Vorliebe, sondern eine Folge der Knappheit. Ein Krankenhaus und damit eine Geriatrie hat Eschborn nicht.' },
  { q: 'Welches Einzugsgebiet wird in Eschborn bedient?', a: 'Eschborn und Main-Taunus-Kreis: Sulzbach, Kelkheim, Hattersheim, Hofheim am Taunus und alle Gemeinden im Main-Taunus-Kreis' },
  { q: 'Ist in einer Wohnung in Eschborn Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Eschborn hat im Schnitt 88,9 m², 25,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,2 % der Gebäude in Eschborn sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'eschborn',
  ort: 'Eschborn',
  land: 'Hessen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Viele Eschborner haben Jahrzehnte zwischen Hochhäusern in Frankfurt gearbeitet und wohnen gern ruhig — in Niederhöchstadt oder im alten Ortskern. Damit das Zuhause auch mit Pflegebedarf bleibt, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, 1:1-Betreuung statt Heimalltag. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Main-Taunus-Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Der Main-Taunus-Kreis hat{' '} <strong className="text-pm-ink font-semibold">die dünnste Heimplatzdecke aller 26 hessischen Kreise: 31 Plätze je 1.000 Einwohner über 65, im Land sind es 47.</strong>{' '} Das ist kein Randbefund, sondern der Kern der Lage. Entsprechend leben hier nur 10,9 Prozent der Pflegebedürftigen im Heim gegenüber 13,5 Prozent in Hessen — aber der Rückstand beim Angebot ist fast doppelt so groß wie der beim Anteil. Wer hier einen Heimplatz sucht, sucht in dem knappsten Markt des Landes.</Text>
        <Text>Die ambulante Versorgung fängt das teilweise auf: 20,6 Prozent der 13.683 Pflegebedürftigen im Kreis nutzen einen Pflegedienst, in Hessen sind es 17,6 Prozent. Das ist allerdings keine Präferenz, sondern eine Folge der Knappheit. In Eschborn selbst gibt es zwei Pflegeheime mit zusammen 97 Plätzen, sieben ambulante Dienste und zwei Tagespflegen — für gut 22.000 Einwohner.</Text>
        <Text>Eschborn ist dabei jünger als sein Umfeld: 42,9 Jahre Durchschnittsalter gegenüber 44,7 im Kreis und 44,3 in Hessen. Das hat mit dem Arbeitsmarkt zu tun — in der Stadt gibt es{' '} <strong className="text-pm-ink font-semibold">rund 43.600 sozialversicherungspflichtige Arbeitsplätze bei gut 22.000 Einwohnern</strong>, fast doppelt so viele Stellen wie Bewohner. Ein niedriger Altersdurchschnitt heißt aber nicht weniger Bedarf, sondern nur: Er verteilt sich auf weniger Menschen.</Text>
        <Text>Ein Krankenhaus hat Eschborn nicht, und damit auch keine Geriatrie. Die drei nächsten geriatrischen Kliniken gehören alle demselben Träger — in Bad Soden, Hofheim und Frankfurt-Höchst. Hier ist Vorsicht geboten: Bad Soden und Hofheim werden von derselben Chefärztin geführt und sind unter derselben Rufnummer erreichbar, und ein Umstrukturierungskonzept sieht vor, die Geriatrie ganz nach Hofheim zu verlagern. Welcher Standort heute welchen Betrieb führt, ließ sich aus den öffentlichen Quellen nicht eindeutig klären — rufen Sie vorher an, bevor Sie fahren. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Eschborn und Main-Taunus-Kreis: Sulzbach, Kelkheim, Hattersheim, Hofheim am Taunus und alle Gemeinden im Main-Taunus-Kreis',
  stimmen: ['k-20260605-daniel', 'k-20260327-marco'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
