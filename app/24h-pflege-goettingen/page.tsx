import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Göttingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Göttingen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Göttingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-goettingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Göttingen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Göttingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-goettingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Göttingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Niedersachsen kostet im Schnitt rund 3.010 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Göttingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Göttingen?', a: '12.795 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 10,3 Prozent — in Niedersachsen 11,3 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 18,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Niedersachsen: 25,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Göttingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Göttingen im Schnitt 3,8 Wohnungen, in Niedersachsen 1,7. 45,2 Prozent der Gebäude stehen frei, 36,9 Prozent stehen in geschlossener Reihe. 54,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Göttingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Ab welchem Alter wird Pflege in Göttingen typischerweise gebraucht?', a: 'Die Zahlen sind eindeutig: Von den Göttingern zwischen 70 und 80 sind 11,7 Prozent pflegebedürftig, zwischen 80 und 90 bereits 33,2 Prozent — und von den über 90-Jährigen 80,9 Prozent. Der Sprung liegt also im achten Lebensjahrzehnt. Auffällig ist außerdem, wohin sich die Versorgung verlagert hat: Zwischen 2017 und 2021 stieg die Zahl der allein von Angehörigen versorgten Menschen von 2.091 auf 2.976, während die Zahl der Heimbewohner absolut sank. Familien tragen in Göttingen also deutlich mehr als noch vor wenigen Jahren.' },
  { q: 'Welches Einzugsgebiet wird in Göttingen bedient?', a: 'Göttingen und Landkreis Göttingen: Hann. Münden, Duderstadt, Herzberg, Northeim und alle Gemeinden im Landkreis Göttingen' },
  { q: 'Ist in einer Wohnung in Göttingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Göttingen hat im Schnitt 76,6 m², 41,7 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 62,0 % der Gebäude in Göttingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'goettingen',
  ort: 'Göttingen',
  land: 'Niedersachsen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Göttingen ist eine Stadt, aus der die Kinder zum Studium kommen — und die eigenen Kinder oft zum Arbeiten wegziehen. Zurück bleiben Eltern in Weende, Geismar oder Grone, die ihr Zuhause lieben. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Göttingen',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Göttingen hat sich in wenigen Jahren verschoben, wer die Pflege trägt — und zwar nicht so, wie man es erwarten würde. Der Anteil der Pflegebedürftigen im Heim fiel zwischen 2017 und 2021 von 30,0 auf 22,9 Prozent. Das klingt nach mehr ambulanter Versorgung, ist es aber nicht: Die Zahl der ambulant Betreuten blieb nahezu konstant.{' '} <strong className="text-pm-ink font-semibold">Der gesamte Zuwachs ging zu den Angehörigen — von 2.091 auf 2.976 Menschen, deren Anteil von 41,8 auf 50,9 Prozent sprang.</strong> Gleichzeitig sank die Zahl der Heimbewohner absolut, und 53 Heimplätze fielen weg.</Text>
        <Text>Anders gesagt: In Göttingen wurden binnen vier Jahren 885 Menschen zusätzlich zu Hause von ihren Familien versorgt, ohne dass professionelle Hilfe im gleichen Maß mitwuchs. Und das bei ordentlichem Platzangebot — rechnerisch stehen hier deutlich mehr Heimplätze je hochaltrigem Einwohner bereit als etwa in Aachen. Die Last verlagert sich also nicht aus Mangel, sondern weil die Zahl der Pflegebedürftigen schneller wächst als alles andere.</Text>
        <Text>Wie stark der Bedarf mit dem Alter steigt, zeigt eine Zahl, die man sich merken sollte:{' '} <strong className="text-pm-ink font-semibold">Von den Göttingern zwischen 80 und 90 sind 33,2 Prozent pflegebedürftig, von den über 90-Jährigen 80,9 Prozent.</strong> Bei den 70- bis 80-Jährigen sind es 11,7 Prozent. Wer heute mit Ende siebzig noch gut zurechtkommt, sollte trotzdem wissen, wie schnell sich das ändern kann — und lieber planen, bevor es eilig wird.</Text>
        <Text>Räumlich ist Göttingen für die meisten unproblematisch: Die Kernstadt liegt im Leinetal weitgehend eben. Drei bewohnte Ortsteile liegen allerdings deutlich höher — Nikolausberg und Roringen auf 280 bis 350 Metern, also bis zu 200 Meter über der Innenstadt, und Herberhausen mit einem Ortskern in ausgesprochener Hanglage. Für einen ambulanten Dienst bedeutet das lange Wege für kurze Einsätze; für jemanden, der im Haus wohnt, gar nichts.</Text>
        <Text>Geriatrisch ist Göttingen stark: Das Geriatrische Zentrum am Evangelischen Krankenhaus Weende führt eine Akutklinik mit Frührehabilitation und eine geriatrische Reha — zusammen 96 Betten, eines der größten Zentren Niedersachsens. Wichtig ist die Adresse:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie sitzt ausschließlich in Weende, An der Lutter</strong>, nicht im ebenfalls zum Haus gehörenden Krankenhaus Neu-Mariahilf an der Humboldtallee. Zwischen beiden liegen rund vier Kilometer. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Göttingen und Landkreis Göttingen: Hann. Münden, Duderstadt, Herzberg, Northeim und alle Gemeinden im Landkreis Göttingen',
  stimmen: ['k-20260706-stefan', 'k-20260403-heike'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
