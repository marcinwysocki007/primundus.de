import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Speyer anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Speyer | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Speyer in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-speyer' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Speyer | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Speyer in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-speyer',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Speyer?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.220 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Speyer starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie wohnt man in Speyer — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Speyer im Schnitt 2,5 Wohnungen, in Rheinland-Pfalz 1,7. 35,8 Prozent der Gebäude stehen frei, 42,5 Prozent stehen in geschlossener Reihe. 49,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Speyer ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie viele ältere Menschen leben in Speyer?', a: '5.707 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,5 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie gut ist die ambulante Versorgung in Speyer?', a: 'Dünner als im Landesdurchschnitt. Nur 16,3 Prozent der Speyerer Pflegebedürftigen werden von einem ambulanten Dienst betreut, in Rheinland-Pfalz sind es 18,3 Prozent — und in der ganzen Stadt gibt es nur 15 solcher Dienste. Umgekehrt ist das Heimangebot außergewöhnlich dicht: 96,8 vollstationäre Plätze je 1.000 Einwohner über 70 gegenüber 63,1 im Land, schon 2021 der Spitzenwert aller 36 Verwaltungsbezirke in Rheinland-Pfalz. Speyer ist also stark auf stationäre Versorgung ausgerichtet. Wer zu Hause bleiben möchte, findet weniger Unterstützung von außen als in vergleichbaren Städten — eine Betreuungskraft, die im Haushalt lebt, ist hier oft die einzige durchgehende Lösung.' },
  { q: 'Wie gut ist die häusliche Pflege in Speyer aufgestellt?', a: 'Ehrlich gesagt: dünner als das Heimangebot. Speyer hat mit 97 vollstationären Plätzen je 1.000 Einwohner über 70 die höchste Heimplatzdichte in Rheinland-Pfalz (Land: 63) — 2021 war es der Spitzenwert aller 36 Verwaltungsbezirke. Ambulant sieht es anders aus: Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von einem Pflegedienst betreut, im Land 18,3 Prozent, und es gibt in der ganzen Stadt lediglich 15 Dienste. Wer zu Hause bleiben möchte, hat also weniger Auswahl und sollte früher planen. Eine Betreuungskraft, die im Haushalt lebt, ist von dieser Knappheit nicht betroffen — sie ist durchgehend da, nicht nach Tourenplan.' },
  { q: 'Welches Einzugsgebiet wird in Speyer bedient?', a: 'Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau' },
  { q: 'Ist in einer Wohnung in Speyer Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Speyer hat im Schnitt 92,9 m², 20,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 72,7 % der Gebäude in Speyer sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'speyer',
  ort: 'Speyer',
  land: 'Rheinland-Pfalz',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Mit dem Dom vor Augen alt werden: In Speyer-West, im Vogelgesang oder in der Altstadt wohnen viele seit Jahrzehnten — und bleiben am liebsten genau dort. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da.</>,
  kreis: 'Rhein-Pfalz-Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Speyer ist auf das Heim hin gebaut wie kaum eine zweite Stadt in Rheinland-Pfalz.{' '} <strong className="text-pm-ink font-semibold">Auf 1.000 Einwohner über 70 kommen hier 97 vollstationäre Heimplätze, im Land 63</strong> — schon 2021 war das der höchste Wert aller 36 rheinland-pfälzischen Verwaltungsbezirke. Und anders als in manchen Städten ist das kein Rechenartefakt: Auch der Anteil der Pflegebedürftigen, die tatsächlich im Heim leben, liegt mit 20,8 Prozent weit über dem Landeswert von 13,7. Beide Kennzahlen zeigen in dieselbe Richtung, fast deckungsgleich.</Text>
        <Text>Die Kehrseite betrifft genau die Familien, die zu Hause bleiben wollen: Das ambulante Netz ist dünner als anderswo. Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von einem Pflegedienst betreut, im Land 18,3 Prozent — und es gibt in der ganzen Stadt lediglich 15 solche Dienste. Wer hier eine Versorgung zu Hause organisiert, hat weniger Auswahl und muss früher planen.</Text>
        <Text>Der Druck wächst dabei, denn Speyer ist alt.{' '} <strong className="text-pm-ink font-semibold">Mit einem Medianalter von 47 Jahren ist es die älteste kreisfreie Stadt in Rheinland-Pfalz</strong> (Land: 45). 24,8 Prozent der Einwohner sind über 65, 7,8 Prozent über 80 — beides deutlich über dem Landesschnitt von 23,3 und 6,9 Prozent.</Text>
        <Text>Topografisch nimmt Speyer den Bewohnern nichts ab, aber es macht auch nichts schwerer: Die Stadt liegt in der Oberrheinebene, zwischen der Rheinniederung und der Hochterrasse liegen über das gesamte Stadtgebiet rund 20 Höhenmeter. Was im Volksmund „Buckel" heißt — Museumsbuckel, Brauereibuckel, Schützenbuckel —, sind kurze Rampen, keine Hanglagen. Der Rhein bildet nur die Ostgrenze und zerschneidet die Stadt nicht. Die reale Barriere ist eine andere, und die Stadt benennt sie selbst: Speyer-Süd ist durch die B 39 vom Zentrum abgehängt.</Text>
        <Text>Medizinisch ist die Stadt stark: Das Diakonissen-Stiftungs-Krankenhaus führt eine geriatrische Fachabteilung mit 1.297 stationären Fällen im Jahr — die größte, die uns bei diesen Recherchen begegnet ist — dazu ein Geriatrisches Zentrum mit 16 Tagesklinikplätzen. Ein Hinweis, weil derselbe Träger auch das Evangelische Krankenhaus in Bad Dürkheim betreibt: Die Geriatrie sitzt in Speyer, Paul-Egell-Straße. Eine eigenständige geriatrische Reha gibt es hier nicht, die Anschlussbehandlung findet auswärts statt. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau',
  stimmen: ['k-20250418-roswitha'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
