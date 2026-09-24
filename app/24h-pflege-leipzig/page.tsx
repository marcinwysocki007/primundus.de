import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Leipzig anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Leipzig | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Leipzig in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-leipzig' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Leipzig | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Leipzig in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-leipzig',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Leipzig?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Sachsen kostet im Schnitt rund 2.990 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Leipzig starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Leipzig ist eine junge Stadt — ist Pflege hier überhaupt ein großes Thema?', a: 'Der Anteil täuscht. Leipzig ist mit einem Durchschnittsalter von 42 Jahren tatsächlich der jüngste Kreis Sachsens, aber in absoluten Zahlen leben hier rund 120.000 Menschen über 65 und gut 45.000 über 80 — mehr Hochbetagte, als der Landkreis Nordsachsen insgesamt zählt. Der niedrige Prozentwert kommt daher, dass die Stadt seit 2000 um etwa ein Drittel gewachsen ist, nicht daher, dass es wenige Ältere gäbe.' },
  { q: 'Funktioniert 24-Stunden-Pflege in einer Leipziger Altbauwohnung?', a: 'Ja — und in Leipzig ist das der Normalfall. Rund ein Drittel aller Wohnungen stammt aus der Zeit vor 1919, knapp 90 Prozent liegen in Mehrfamilienhäusern, und nur gut 13 Prozent der Leipziger wohnen im Eigentum. Die typische Ausgangslage ist also: Mietwohnung im Gründerzeithaus, oft im zweiten oder dritten Stock. Für die Betreuungskraft braucht es ein eigenes Zimmer; alles Weitere richtet sich nach dem Alltag. Gerade wenn die Treppe zur Hürde wird, ist jemand im Haus oft die einzige Alternative zum Umzug.' },
  { q: 'Wie ist die ambulante Versorgung in Leipzig?', a: 'Angespannt, und zwar zunehmend. Die Zahl der Pflegebedürftigen in Leipzig hat sich seit 2013 mehr als verdoppelt, die stationären Plätze wuchsen im selben Zeitraum nur um gut ein Zehntel — der gesamte Zuwachs ist in die eigene Wohnung gegangen. Auf einen ambulanten Dienst kamen 2013 rund 43 Pflegebedürftige, heute sind es 81. Dazu kommen die Kosten: Die Zuzahlungen für ambulante Pflege stiegen in Sachsen seit 2015 um gut die Hälfte, ein Heimplatz verteuerte sich um mehr als das Doppelte.' },
  { q: 'Welches Einzugsgebiet wird in Leipzig bedient?', a: 'Leipzig und Umland: Markkleeberg, Schkeuditz, Taucha, Wurzen, Grimma und alle Gemeinden im Landkreis Leipzig und Nordsachsen' },
  { q: 'Ist in einer Wohnung in Leipzig Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Leipzig hat im Schnitt 72,1 m², 40,0 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. In Leipzig liegen 54,0 % der Wohnungen in Ein- oder Zweifamilienhäusern, der Rest sind Geschosswohnungen — dann zählt, welches Stockwerk und ob es einen Aufzug gibt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.990 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'leipzig',
  ort: 'Leipzig',
  land: 'Sachsen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Gohlis, Schleußig, Connewitz: Leipzigs schöne Gründerzeitwohnungen haben oft eines gemeinsam — viele Treppen und keinen Aufzug. Trotzdem müssen Eltern deshalb nicht ins Heim: Eine Betreuungskraft von Primundus zieht mit ein, übernimmt Einkäufe, Haushalt und Begleitung und ist bei Bedarf auch nachts da — auch in Markkleeberg und Taucha.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Leipzig ist der jüngste Kreis Sachsens — Durchschnittsalter 42 Jahre, während das Land bei 47 liegt. Das führt leicht in die Irre. Denn hinter dem niedrigen Anteil steht eine große absolute Zahl: <strong className="text-pm-ink font-semibold">rund 120.000 Leipzigerinnen und Leipziger sind über 65, gut 45.000 davon über 80.</strong> Das sind mehr Hochbetagte, als der ganze Landkreis Nordsachsen zählt. Der Prozentwert ist niedrig, weil die Stadt seit 2000 um rund ein Drittel gewachsen ist — nicht, weil es wenige alte Menschen gäbe.</Text>
        <Text>Dazu kommt, wie in Leipzig gewohnt wird. <strong className="text-pm-ink font-semibold"> Mehr als die Hälfte aller Haushalte sind Einpersonenhaushalte</strong>, und knapp 90 Prozent der Wohnungen liegen in Mehrfamilienhäusern. Nur gut 13 Prozent der Leipziger wohnen im Eigentum, der niedrigste Wert in ganz Sachsen. Das heißt in der Praxis: sehr viele ältere Menschen leben allein in einer Mietwohnung im Geschossbau — oft in einem Gründerzeithaus, denn rund ein Drittel aller Wohnungen stammt aus der Zeit vor 1919. Schöne Altbauten, aber mit Treppenhäusern, die für einen Rollator nie gedacht waren.</Text>
        <Text>Die Pflegestatistik zeigt, wohin sich das entwickelt hat. Die Zahl der Pflegebedürftigen in Leipzig hat sich seit 2013 mehr als verdoppelt, die stationäre Kapazität ist im selben Zeitraum aber nur um gut ein Zehntel gewachsen. Der gesamte Zuwachs ist also in die eigene Wohnung gegangen. Entsprechend belastet sind die Dienste: Kamen 2013 auf einen ambulanten Pflegedienst noch rund 43 Pflegebedürftige, sind es heute 81. Und die Kosten laufen mit — die Zuzahlungen für ambulante Pflege stiegen in Sachsen seit 2015 um gut die Hälfte, ein Heimplatz verteuerte sich um mehr als das Doppelte.</Text>
        <Text>Für die Pflege ist Leipzig zudem nicht eine Stadt, sondern viele. Zwischen dem ältesten und dem jüngsten Ortsteil liegen mehr als zwanzig Jahre Durchschnittsalter: In der Grünauer Siedlung und in Heiterblick sind die Menschen im Schnitt über 54, in Volkmarsdorf und Lindenau Mitte dreißig. Wer in Grünau, Lößnig oder Großzschocher alt wird, lebt in einer Umgebung, die selbst gealtert ist — Grünau hat seit den achtziger Jahren fast die Hälfte seiner Bewohner verloren. Geografisch ist die Stadt dagegen unproblematisch: Sie ist flach, die einzigen nennenswerten Erhebungen sind aufgeschüttete Trümmer- und Deponieberge und damit Ausflugsziele, keine Alltagswege.</Text>
        <Text>Eine Betreuungskraft, die mit einzieht, löst genau die Kombination, die in Leipzig so häufig ist: allein lebend, im Obergeschoss, ohne Angehörige um die Ecke. Bevor Sie entscheiden, lassen Sie sich unabhängig beraten — die Pflegeberatung in Leipzig ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
      </>
    ),
  },
  einzugsgebiet: 'Leipzig und Umland: Markkleeberg, Schkeuditz, Taucha, Wurzen, Grimma und alle Gemeinden im Landkreis Leipzig und Nordsachsen',
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
