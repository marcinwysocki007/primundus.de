import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Witten anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Witten | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Witten in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-witten' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Witten | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Witten in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-witten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Witten?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Witten starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Warum ist 24-Stunden-Betreuung in Witten so oft ein Thema?', a: 'Weil hier ungewöhnlich viele Menschen allein leben. Fast die Hälfte aller Wittener Haushalte sind Einpersonenhaushalte — damit gehört die Stadt zu den knapp zehn Kommunen mit den meisten Alleinlebenden in ganz Nordrhein-Westfalen. Gleichzeitig ist Witten älter als das Land: knapp 24 Prozent über 65, fast acht Prozent über 80. Wer allein lebt und in einem Haus mit Treppen wohnt, steht früher vor der Frage, wie es weitergeht.' },
  { q: 'Was bedeutet die Hanglage in Bommern oder Herbede für die Betreuung?', a: 'Sie ist in Witten ein echter Faktor, anders als in vielen Nachbarstädten. Zwischen der Ruhr und den Höhen des Ardeygebirges liegen rund 190 Höhenmeter, und diese Höhen sind bewohnt: Gut ein Viertel aller Wittener Adressen liegt über 150 Metern. Auffällig dabei: Gerade die hügeligen Stadtteile sind die ältesten — in Bommern ist fast jeder Zehnte über 80, in Witten-Mitte nur gut jeder Fünfzehnte. Eine Betreuungskraft übernimmt genau die Wege, die dort schwer geworden sind.' },
  { q: 'Gibt es in Witten eine geriatrische Klinik?', a: 'Ja, und das ist keineswegs selbstverständlich — viele vergleichbare Städte haben keine. Das Evangelische Krankenhaus Witten führt eine eigene Klinik für Geriatrie und Frührehabilitation, dazu eine geriatrische Tagesklinik. Für die Zeit nach einem Klinikaufenthalt ist trotzdem entscheidend, wer zu Hause da ist: Die Frührehabilitation endet, der Alltag geht weiter. Genau dort setzt eine Betreuungskraft an, die mit einzieht.' },
  { q: 'Welches Einzugsgebiet wird in Witten bedient?', a: 'Witten und Ennepe-Ruhr-Kreis: Hattingen, Sprockhövel, Herdecke, Schwelm und alle Gemeinden im Ennepe-Ruhr-Kreis' },
  { q: 'Ist in einer Wohnung in Witten Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Witten hat im Schnitt 84,6 m², 26,1 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 64,4 % der Gebäude in Witten sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'witten',
  ort: 'Witten',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Zwischen Ruhr und Ardey-Wald wohnt man in Witten oft ein Leben lang — in Annen, Herbede oder Bommern, im Haus mit Garten oder der Wohnung nahe der Innenstadt. Damit das so bleiben kann, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, 1:1, im eigenen Zuhause statt im Heim.</>,
  kreis: 'Ennepe-Ruhr-Kreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Witten fällt eine Zahl aus dem Rahmen: <strong className="text-pm-ink font-semibold"> Fast die Hälfte aller Haushalte sind Einpersonenhaushalte</strong> — damit gehört die Stadt zu den knapp zehn Kommunen mit den meisten Alleinlebenden in ganz Nordrhein-Westfalen. Gleichzeitig ist Witten älter als das Land: Knapp 24 Prozent der Einwohner sind über 65, fast acht Prozent über 80, beides über dem Landeswert. Viele ältere Wittener leben also allein — und genau daraus entsteht der Moment, in dem es zu Hause nicht mehr allein geht.</Text>
        <Text>Anders als in vielen Ruhrgebietsstädten ist hier auch das Gelände ein Faktor. Zwischen der Ruhr und den Höhen des Ardeygebirges liegen rund 190 Höhenmeter, und diese Höhen sind bewohnt: Gut ein Viertel aller Wittener Adressen liegt oberhalb von 150 Metern. Bemerkenswert ist, wie das mit dem Alter zusammenfällt. <strong className="text-pm-ink font-semibold"> In Bommern ist fast jeder Zehnte über 80, in Witten-Mitte nur gut jeder Fünfzehnte</strong> — und Bommern gehört zu den Stadtteilen mit der größten Höhenspanne. Wer dort wohnt, hat den Berg jeden Tag vor der Haustür, auch auf dem Weg zur Bushaltestelle.</Text>
        <Text>Beim Wohnen ist Witten keine Einfamilienhausstadt: Nur gut ein Viertel aller Wohnungen liegt in Ein- oder Zweifamilienhäusern, deutlich weniger als im Land, und nur knapp ein Drittel der Wohnungen wird von den Eigentümern selbst bewohnt. Der Bestand ist entsprechend alt — <strong className="text-pm-ink font-semibold">gut drei Viertel aller Wittener Wohnungen stammen aus der Zeit vor 1980</strong>. Am 19. März 1945 wurde die Innenstadt in etwa zwanzig Minuten zu rund 80 Prozent zerstört, rund 18.000 Menschen wurden obdachlos; die Außenstadtteile blieben dagegen weitgehend stehen. Deshalb steht in Bommern, Herbede oder Heven bis heute mehr Vorkriegsbausubstanz als im Landesdurchschnitt — schön, aber mit Treppen.</Text>
        <Text>Für die Versorgung ist der Ennepe-Ruhr-Kreis vergleichsweise gut aufgestellt: Auf einen ambulanten Pflegedienst kommen hier rund 68 Pflegebedürftige, weniger als im Land. Was ein Dienst trotzdem nicht leisten kann, ist Anwesenheit. Er kommt zu festen Zeiten und geht wieder. Eine Betreuungskraft, die mit einzieht, ist auch nachts da, übernimmt die Wege den Berg hinunter und führt den Haushalt mit — in Bommern und Herbede ebenso wie in Annen, Heven oder Stockum.</Text>
        <Text>Ein Vorteil vor Ort: Das Evangelische Krankenhaus Witten hat eine eigene Klinik für Geriatrie samt geriatrischer Tagesklinik — das ist keineswegs selbstverständlich, viele vergleichbare Städte haben keine. Für die Beratung im Vorfeld gilt: Die Pflegeberatung im Ennepe-Ruhr-Kreis ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
      </>
    ),
  },
  einzugsgebiet: 'Witten und Ennepe-Ruhr-Kreis: Hattingen, Sprockhövel, Herdecke, Schwelm und alle Gemeinden im Ennepe-Ruhr-Kreis',
  stimmen: ['k-20260905-thomas', 'k-20260427-andreas'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
