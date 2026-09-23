import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Hannover anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Hannover | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hannover in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hannover' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Hannover | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hannover in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-hannover',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Hannover?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Niedersachsen kostet im Schnitt rund 3.010 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Hannover starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Hannover?', a: '51.876 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,1 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Hannover — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Hannover im Schnitt 4,3 Wohnungen, in Niedersachsen 1,7. 28,9 Prozent der Gebäude stehen frei, 53,9 Prozent stehen in geschlossener Reihe. 67,9 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Hannover ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Warum leben in Hannover immer weniger Pflegebedürftige im Heim?', a: 'Nicht, weil es weniger Bedarf gäbe. Der Anteil fiel von 26,4 Prozent im Jahr 2017 auf 16,6 Prozent 2023, während der Anteil der allein von Angehörigen versorgten Menschen von 43,3 auf 58,6 Prozent stieg. Die Stadt nennt in ihrer eigenen Auswertung die Gründe: Die Zahl der stationären Plätze ist gesunken — fehlende Arbeitskräfte, gesunkene Investitionsbereitschaft — und es gibt wochenlange Wartezeiten bei Kurzzeit-, Verhinderungs- und Dauerpflege. Die Last hat sich also zu den Familien verschoben. Von den über 85-jährigen Hannoveranern sind 69,0 Prozent pflegebedürftig.' },
  { q: 'Welches Einzugsgebiet wird in Hannover bedient?', a: 'Hannover und Region: Garbsen, Langenhagen, Burgdorf, Lehrte, Sehnde, Pattensen und alle Gemeinden in der Region Hannover' },
  { q: 'Ist in einer Wohnung in Hannover Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Hannover hat im Schnitt 78,1 m², 33,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 58,5 % der Gebäude in Hannover sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'hannover',
  ort: 'Hannover',
  land: 'Niedersachsen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Wohnung in der List, das Haus in Kirchrode oder Linden mit seinen Kneipen von früher: Hannoveraner haben ihr Viertel — und wollen es im Alter nicht gegen ein Heimzimmer tauschen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, vom Maschsee bis Herrenhausen. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>In Hannover hat sich in sechs Jahren verschoben, wer die Pflege trägt — und zwar dramatisch.{' '} <strong className="text-pm-ink font-semibold">2017 lebten noch 26,4 Prozent der Pflegebedürftigen im Heim, 2023 waren es 16,6 Prozent.</strong> Im selben Zeitraum stieg der Anteil derer, die zu Hause allein von Angehörigen versorgt werden, von 43,3 auf 58,6 Prozent. Das ist keine Verlagerung aus Überzeugung: Die Stadt schreibt in ihrer eigenen Auswertung, die Zahl der stationären Plätze sei gesunken — wegen fehlender Arbeitskräfte und gesunkener Investitionsbereitschaft — und es gebe wochenlange Wartezeiten bei Kurzzeit-, Verhinderungs- und Dauerpflege.</Text>
        <Text>Von den 38.149 Pflegebedürftigen der Stadt nutzen 24,8 Prozent zusätzlich einen ambulanten Dienst. Wie steil der Bedarf mit dem Alter steigt, zeigt eine Zahlenreihe, die man kennen sollte: Von den 60- bis 74-Jährigen sind 9,2 Prozent pflegebedürftig, von den 75- bis 84-Jährigen 28,6 Prozent —{' '} <strong className="text-pm-ink font-semibold">und von den über 85-Jährigen 69,0 Prozent.</strong></Text>
        <Text>Innerhalb der Stadt verteilt sich das Alter sehr ungleich. Im Heideviertel sind 20,3 Prozent der Einwohner über 75, in der Nordstadt 5,3 Prozent — der Faktor 3,8. Bei den über 65-Jährigen liegt zwischen Heideviertel (31,4 Prozent) und Nordstadt (11,8) noch immer der Faktor 2,7. Eine Einschränkung, die wir dazusagen: Pflegedaten gibt es in Hannover nur für die Gesamtstadt, nicht je Stadtteil — die Stadt weist ausdrücklich darauf hin. Alterskarte und Pflegekarte lassen sich also nicht übereinanderlegen.</Text>
        <Text>Geriatrisch ist Hannover gut ausgestattet, aber die Adressen sind heikel. Das größte Angebot führt das DIAKOVERE Henriettenstift mit 92 Reha-Betten und 24 Tagesklinikplätzen —{' '} <strong className="text-pm-ink font-semibold">allerdings nicht am Haupthaus, sondern rund sieben Kilometer entfernt in Kirchrode.</strong> Dazu kommen die Klinik für Altersmedizin am KRH Klinikum Nordstadt und eine Akutgeriatrie am Klinikum Siloah. Nicht in Hannover, aber unter demselben Verbundnamen geführt: die geriatrischen Abteilungen in Langenhagen, Gehrden und Neustadt am Rübenberge. Und die geriatrische Reha wird gerade zwischen den Trägern neu verteilt — wer heute recherchiert, trifft womöglich auf ein auslaufendes Angebot. Fragen Sie vorher nach. Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Hannover und Region: Garbsen, Langenhagen, Burgdorf, Lehrte, Sehnde, Pattensen und alle Gemeinden in der Region Hannover',
  stimmen: ['k-20260706-stefan', 'k-20260403-heike', 'k-20241013-henning'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
