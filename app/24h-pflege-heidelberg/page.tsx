import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Heidelberg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Heidelberg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Heidelberg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-heidelberg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Heidelberg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Heidelberg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-heidelberg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Heidelberg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Heidelberg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wie viele ältere Menschen leben in Heidelberg?', a: '12.601 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 8,2 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 17,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Gibt es 24-Stunden-Pflege auch in Sinsheim, Wiesloch und im Rhein-Neckar-Kreis?', a: 'Ja. Eine Betreuungskraft von Primundus kann auch in Sinsheim, Wiesloch, Schwetzingen, Eberbach und den anderen Gemeinden des Rhein-Neckar-Kreises einziehen. Es gelten dieselben Bedingungen wie in Heidelberg, und auch dort ist eine Anreise in 3 Tagen möglich. Kostenlos berät der Pflegestützpunkt des Kreises, unter anderem mit Beratungsstellen in Sinsheim und Wiesloch.' },
  { q: 'Ist in einer Wohnung in Heidelberg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Heidelberg hat im Schnitt 83,2 m², 36,3 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 57,7 % der Gebäude in Heidelberg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

// Link-Stil wie in components/orte/OrtBeratung.tsx
const LINK =
  'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const ORT: OrtDaten = {
  slug: 'heidelberg',
  ort: 'Heidelberg',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '2. Oktober 2026',
  lesezeit: '6 Min.',
  einleitung: <>Wer in Heidelberg einen Angehörigen zu Hause pflegt, macht das meist ohne Pflegedienst. Sechs von zehn Pflegebedürftigen in der Stadt bekommen nur Pflegegeld und werden in der Regel von Angehörigen versorgt. Eine Betreuungskraft von Primundus wohnt mit im Haushalt und ist bei Bedarf auch nachts da.</>,
  kreis: 'Rhein-Neckar-Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>Ende 2023 waren in Heidelberg 6.812 Menschen pflegebedürftig. Damit war schon erreicht, was das Statistische Landesamt im Oktober 2023 erst für das Jahr 2040 vorausberechnet hatte (6.808). Ein Teil des Anstiegs hängt laut Landesamt mit dem seit 2017 weiter gefassten Begriff der Pflegebedürftigkeit zusammen. Der Kommunalverband für Jugend und Soziales setzt für 2040 inzwischen 8.399 Pflegebedürftige in Heidelberg als Orientierungswert an. Ambulante und stationäre Pflegeeinrichtungen gab es in der Stadt Ende 2023 zusammen 36, zwei weniger als 2021.</Text>
        <Text>Der Boxberg am Westhang des Königstuhls und der Emmertsgrund liegen auf rund 250 Metern Höhe. Laut Statistik der Stadt gehören beide zu den drei Stadtteilen mit dem höchsten Anteil Älterer. Auf dem Boxberg war Ende 2023 mehr als jeder fünfte Einwohner 65 oder älter, in der ganzen Stadt jeder sechste. Nach dem Pfaffengrund hat der Boxberg die längste Wohndauer aller Stadtteile. Am Mittagstisch des Seniorenzentrums Boxberg-Emmertsgrund können Menschen ab 65 nach Anmeldung teilnehmen. Eine Betreuungskraft kann Ihre Mutter dorthin und zum Arzt begleiten, wenn ihr die Wege allein zu weit werden.</Text>
        <Text>Im Rhein-Neckar-Kreis rund um Heidelberg war zuletzt etwa jeder Fünfzehnte pflegebedürftig. Für 2040 erwartet das Landratsamt jeden Dreizehnten. Pflegedienste und Heime im Kreis versorgten 2023 mehr Menschen als 2021, hatten aber 6,6 Prozent weniger Beschäftigte. Altersmedizin im Krankenhaus und eine Reha speziell für ältere Patienten bieten die GRN-Kliniken in Sinsheim, Schwetzingen und Weinheim.</Text>
        <Text>Das Agaplesion Bethanien Krankenhaus an der Rohrbacher Straße ist auf ältere Patientinnen und Patienten spezialisiert. Als Geriatrisches Zentrum hat es ein Akutkrankenhaus und eine Rehabilitationsklinik mit zusammen 171 Betten. Für akut erkrankte Menschen mit Demenz gibt es dort eine eigene Einheit mit sechs Betten. Unser Ratgeber{' '}<a href="/demenz-pflege-zuhause" className={LINK}>Demenz zu Hause pflegen</a>{' '}beschreibt, wie lange die Betreuung zu Hause gehen kann und wann ein Heim besser passt. In der Dantestraße in der Weststadt sitzt der Pflegestützpunkt der Stadt. Er berät neutral und kostenfrei, bei Bedarf auch zu Hause. Kommt Ihr Vater aus dem Krankenhaus und schafft den Alltag nicht mehr allein, kann eine Betreuungskraft von Primundus bei ihm einziehen. Eine Anreise ist in 3 Tagen möglich.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Heidelberg und Rhein-Neckar-Kreis: Schwetzingen, Sinsheim, Eberbach, Wiesloch, Leimen, Sandhausen, Weinheim und alle Gemeinden im Rhein-Neckar-Kreis',
  stimmen: ['k-20260615-monika', 'k-20260208-andrea', 'k-20241122-rainer'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
