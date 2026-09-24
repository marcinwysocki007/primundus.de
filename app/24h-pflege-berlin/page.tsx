import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Berlin anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege zu Hause in Berlin | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Berlin in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-berlin' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege zu Hause in Berlin | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Berlin in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-berlin',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Berlin?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Berlin kostet im Schnitt rund 3.100 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Berlin starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. Primundus ist mit eigenen Betreuungskräften in ganz Berlin und im Umland.' },
  { q: 'Funktioniert 24-Stunden-Pflege auch in einer Berliner Altbauwohnung?', a: 'Ja — und in Vierteln wie Prenzlauer Berg, wo zwei Drittel der Wohnungen aus der Zeit zwischen 1871 und 1914 stammen, ist sie oft die Lösung, die das Wohnenbleiben überhaupt erlaubt. Die Betreuungskraft braucht ein eigenes Zimmer; ansonsten stellt der Altbau keine besonderen Anforderungen. Entscheidend ist, dass jemand die Wege nach draußen übernimmt, sobald das Treppenhaus zur Hürde wird.' },
  { q: 'Gilt das Angebot in allen Berliner Bezirken?', a: 'Ja, in allen zwölf — und das ist wichtiger, als es klingt. Für die Pflege ist Berlin nicht eine Stadt, sondern zwölf sehr verschiedene: Der Altbau in Prenzlauer Berg, die Großsiedlung in Marzahn und das Einfamilienhaus in Kaulsdorf stellen ganz unterschiedliche Anforderungen an den Alltag. Rund 715.000 Berlinerinnen und Berliner sind über 65, viele davon leben allein. Der Preis ist in jedem Bezirk derselbe, Anfahrtskosten berechnen wir nicht.' },
  { q: 'Ist in einer Wohnung in Berlin Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Berlin hat im Schnitt 73,2 m², 39,3 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 56,1 % der Gebäude in Berlin sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Berlin zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.100 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'berlin',
  ort: 'Berlin',
  land: 'Berlin',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Die Wohnung in Charlottenburg seit 40 Jahren, das Reihenhaus in Pankow, der Garten in Spandau: Berliner geben ihr Zuhause nicht auf — und Heimplätze mit kurzer Warteliste sind in der Stadt ohnehin rar. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da, von Steglitz bis Weißensee.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Für die Pflege ist Berlin keine Stadt, sondern zwölf sehr verschiedene. Wer in Prenzlauer Berg alt wird, wohnt mit hoher Wahrscheinlichkeit im Altbau: Zwei Drittel der Wohnungen dort stammen aus der Zeit zwischen 1871 und 1914, meist fünfgeschossige Häuser mit dreißig bis vierzig Parteien. Wer in Marzahn oder der Gropiusstadt wohnt, lebt in einer Großsiedlung mit ganz anderen Wegen. Und in Kaulsdorf oder Mahlsdorf steht das Einfamilienhaus mit Garten und Treppe ins Obergeschoss.</Text>
        <Text>Was alle drei gemeinsam haben: Irgendwann entscheidet nicht mehr die Wohnung, sondern die Frage, ob jemand da ist. Berlin gilt als junge Stadt — dabei leben hier rund 715.000 Menschen, die 65 oder älter sind. Viele von ihnen wohnen allein, oft seit Jahrzehnten in derselben Wohnung, und die Kinder sind über die Stadt verteilt oder längst weggezogen.</Text>
        <Text>Ambulante Dienste gibt es in Berlin viele, und die Wege sind kurz — die Stadt liegt im Urstromtal und ist überwiegend flach. Das Problem ist ein anderes: Ein Dienst kommt zu festen Zeiten und bleibt zwanzig Minuten. Er ist nicht da, wenn nachts jemand aufsteht und sich nicht mehr zurechtfindet, und er kocht nicht mit. Eine Betreuungskraft, die im Haushalt lebt, deckt genau die Stunden ab, die dazwischenliegen — in Pankow so wie in Spandau oder Köpenick.</Text>
      </>
    ),
    beratungsabsatz: <Text>Bevor Sie sich festlegen, nutzen Sie die kostenlose Beratung: Die Pflegestützpunkte in Berlin beraten neutral, in jedem Bezirk und auf Wunsch bei Ihnen zu Hause. Der Anspruch darauf ist gesetzlich geregelt (§ 7a SGB XI) und unabhängig davon, für welchen Anbieter Sie sich danach entscheiden.</Text>,
  },
  einzugsgebiet: 'Alle Berliner Bezirke: Mitte, Charlottenburg-Wilmersdorf, Steglitz-Zehlendorf, Tempelhof-Schöneberg, Kreuzberg-Friedrichshain, Pankow, Treptow-Köpenick, Marzahn-Hellersdorf, Lichtenberg, Neukölln, Reinickendorf, Spandau',
  stimmen: ['k-20260210-rainer'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
