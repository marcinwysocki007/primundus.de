import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Dortmund anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege zu Hause in Dortmund | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dortmund in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dortmund' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege zu Hause in Dortmund | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dortmund in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-dortmund',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dortmund?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dortmund starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Funktioniert 24-Stunden-Pflege auch in einer alten Zechensiedlung?', a: 'Ja. In Oberdorstfeld, der Alten Kolonie in Eving oder der Müsersiedlung in Derne stehen kleine Häuser mit Garten aus der Zeit um die vorletzte Jahrhundertwende. Sie sind eng und haben Treppen, waren also nie für einen Rollstuhl gedacht — trotzdem will kaum jemand dort weg. Für die Betreuungskraft braucht es ein eigenes Zimmer; alles Weitere richtet sich nach dem Alltag vor Ort. Genau in solchen Häusern ist eine Betreuung im Haus oft die einzige Alternative zum Umzug.' },
  { q: 'Gilt das Angebot auch im Umland von Dortmund?', a: 'Ja, im gesamten Einzugsgebiet. Bemerkenswert ist dabei: Dortmund ist jünger als sein Umland. In der Stadt ist gut jeder Fünfte über 65, in den Kreisen Unna, Recklinghausen und im Ennepe-Ruhr-Kreis jeweils rund ein Viertel. Wer in Lünen, Kamen oder Castrop-Rauxel lebt, findet dichte Versorgung vor — aber ein ambulanter Dienst kommt zu festen Zeiten, nicht dann, wenn nachts jemand aufsteht.' },
  { q: 'Welches Einzugsgebiet wird in Dortmund bedient?', a: 'Dortmund und Umland: Bochum, Herne, Castrop-Rauxel, Lünen, Unna, Schwerte, Witten und alle Gemeinden im Kreis Unna' },
  { q: 'Ist in einer Wohnung in Dortmund Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dortmund hat im Schnitt 79,7 m², 30,8 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 61,1 % der Gebäude in Dortmund sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'dortmund',
  ort: 'Dortmund',
  land: 'Nordrhein-Westfalen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Hörde, Aplerbeck, Mengede oder das Kreuzviertel: Dortmunder hängen an ihrem Viertel — am Bäcker um die Ecke, am Kleingarten, an Borsigplatz-Erinnerungen. Wenn die Eltern Hilfe brauchen, muss deshalb niemand quer durch die Stadt ins Heim ziehen: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>In Dortmund wird gerade die Generation pflegebedürftig, die den Strukturwandel selbst erlebt hat. Auf Minister Stein in Eving wurde 1987 die letzte Kohle gefördert, auf Gneisenau 1985; die Stahlproduktion in Hörde endete 2001. Wer damals als junger Mann unter Tage oder am Hochofen stand, ist heute Ende siebzig. Viele von ihnen wohnen noch genau dort, wo sie damals eingezogen sind.</Text>
        <Text>Das prägt die Wohnsituation bis heute. In den alten Zechensiedlungen — Oberdorstfeld, der Alten Kolonie in Eving, der Müsersiedlung in Derne — stehen kleine Häuser mit Garten, gebaut um die vorletzte Jahrhundertwende. Sie sind eng, sie haben Treppen, und sie waren nie für einen Rollstuhl gedacht. Trotzdem will kaum jemand dort weg, und das ist verständlich: Es ist nicht nur eine Wohnung, es ist die eigene Geschichte. In den Gründerzeitvierteln wie dem Kreuzviertel oder rund um die Kaiserstraße stellt sich dieselbe Frage in vier bis fünf Obergeschossen.</Text>
        <Text>Zwei Dinge überraschen viele: Dortmund ist nicht flach — zwischen Derne im Norden und dem Klusenberg bei Syburg liegen gut 200 Höhenmeter. Und die Stadt ist jünger als ihr Umland: In Dortmund ist gut jeder Fünfte über 65, in den Kreisen Unna, Recklinghausen und im Ennepe-Ruhr-Kreis ist es jeweils rund ein Viertel. Wer dort lebt, in Lünen, Kamen oder Castrop-Rauxel, findet zwar dichte Versorgung vor — aber ein ambulanter Dienst kommt zu festen Zeiten, nicht dann, wenn nachts jemand aufsteht.</Text>
      </>
    ),
    beratungsabsatz: <Text>Wenn Sie erst einmal Klarheit über Ihre Ansprüche wollen: Die Pflegestützpunkte und Pflegeberatungsstellen in Dortmund beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Der Anspruch darauf ist gesetzlich geregelt (§ 7a SGB XI) — unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>,
  },
  einzugsgebiet: 'Dortmund und Umland: Bochum, Herne, Castrop-Rauxel, Lünen, Unna, Schwerte, Witten und alle Gemeinden im Kreis Unna',
  stimmen: ['k-20260512-martin', 'k-20251223-karin'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
