import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Bad Homburg vor der Höhe anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Homburg | 6× Testsieger | Primundus',
  description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Homburg vor der Höhe in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-homburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Bad Homburg | 6× Testsieger | Primundus',
    description: 'Geprüfte Betreuungskräfte und Preis direkt online sehen. Anreise in Bad Homburg vor der Höhe in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bad-homburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Homburg vor der Höhe?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Hessen kostet im Schnitt rund 3.230 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Homburg vor der Höhe starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Wir pflegen bisher selbst — wann wird eine Betreuungskraft sinnvoll?', a: 'Im Hochtaunuskreis beziehen 61,7 Prozent aller Pflegebedürftigen ausschließlich Pflegegeld, werden also allein von Angehörigen versorgt; in Hessen sind es 58,6 Prozent. Gleichzeitig nutzen nur 15,2 Prozent einen ambulanten Dienst. Viele Familien hier stehen deshalb vor einem Entweder-oder. Eine Betreuungskraft, die mit einzieht, ist der Weg dazwischen: Sie übernimmt die Dauerbelastung, während Sie Angehörige bleiben. Pflegegeld und Betreuung lassen sich kombinieren.' },
  { q: 'Ist eine Bad Homburger Wohnung für Pflege zu Hause geeignet?', a: 'In aller Regel ja, barrierefrei ist sie aber meist nicht. Zwar sind drei Viertel der Gebäude in Bad Homburg Ein- oder Zweifamilienhäuser, doch zwei Drittel aller Wohnungen liegen in Mehrfamilienhäusern — und knapp die Hälfte des Bestands stammt aus den Jahren 1949 bis 1978, also aus einer Zeit vor jeder Barrierefreiheitsanforderung. Für die Betreuungskraft genügt ein eigenes Zimmer; entscheidend ist, dass jemand da ist und die Wege übernimmt.' },
  { q: 'Kommt eine Betreuungskraft auch in die Ortsteile und in den Hochtaunuskreis?', a: 'Ja. Das ist außerhalb der Kernstadt besonders wichtig, denn der Kreis ist zweigeteilt: Bad Homburg kommt auf über 1.100 Einwohner je Quadratkilometer, das Usinger Land auf keine 300. Dort fahren ambulante Dienste lange Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft im Haus ist davon unabhängig — in Ober-Erlenbach und Dornholzhausen ebenso wie in Oberursel, Friedrichsdorf oder Königstein. Anfahrtskosten berechnen wir nicht.' },
  { q: 'Welches Einzugsgebiet wird in Bad Homburg vor der Höhe bedient?', a: 'Bad Homburg und Hochtaunuskreis: Friedrichsdorf, Oberursel, Kronberg im Taunus, Königstein im Taunus und alle Gemeinden im Hochtaunuskreis' },
  { q: 'Ist in einer Wohnung in Bad Homburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Homburg hat im Schnitt 97,4 m², 23,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 74,8 % der Gebäude in Bad Homburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'bad-homburg',
  ort: 'Bad Homburg vor der Höhe',
  land: 'Hessen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  titel: '24-Stunden-Pflege und Betreuung in Bad Homburg',
  einleitung: <>Viele Bad Homburger haben ihr Berufsleben in Frankfurt verbracht — gewohnt wird aber am Kurpark, in Gonzenheim oder Kirdorf, und dort soll auch das Alter stattfinden. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Hochtaunuskreis',
  vorOrt: {
    inhalt: (
      <>
        <Text>In Bad Homburg ist eine Altersgruppe besonders stark vertreten: die der Hochbetagten. <strong className="text-pm-ink font-semibold"> Fast neun Prozent der Einwohner sind über 80</strong> — mehr als im Bundesschnitt und deutlich mehr als noch vor zehn Jahren. Bemerkenswert ist dabei, dass die Gruppe der 65- bis 79-Jährigen im gleichen Zeitraum kleiner geworden ist. Es sind also nicht mehr Ältere insgesamt, sondern mehr sehr alte Menschen — genau die Gruppe, bei der Alleinleben irgendwann nicht mehr trägt.</Text>
        <Text>Im Hochtaunuskreis zeigt die Pflegestatistik ein klares Muster: <strong className="text-pm-ink font-semibold"> 61,7 Prozent aller Pflegebedürftigen beziehen ausschließlich Pflegegeld</strong>, werden also von Angehörigen versorgt — in Hessen sind es 58,6 Prozent. Gleichzeitig nehmen nur 15,2 Prozent einen ambulanten Dienst in Anspruch, weniger als im Land. Die mittlere Lösung, bei der regelmäßig jemand ins Haus kommt, ist hier also schwächer ausgeprägt als anderswo. Viele Familien stehen damit vor einem Entweder-oder: alles selbst machen oder ins Heim.</Text>
        <Text>Beim Wohnen räumt ein Blick in die Zahlen mit einem Klischee auf. Bad Homburg gilt als wohlhabend, und der Kaufkraftindex bestätigt das. Trotzdem wohnen sechs von zehn Haushalten zur Miete, die Eigentümerquote liegt mit 41 Prozent unter dem hessischen Schnitt. Und: Zwar sind drei Viertel der Gebäude Ein- oder Zweifamilienhäuser, aber <strong className="text-pm-ink font-semibold"> zwei Drittel aller Wohnungen liegen in Mehrfamilienhäusern</strong>. Knapp die Hälfte des Bestands stammt aus den Jahren 1949 bis 1978 — solide gebaut, aber lange vor jedem Gedanken an Barrierefreiheit.</Text>
        <Text>Zur Lage noch ein weit verbreiteter Irrtum: Bad Homburg heißt „vor der Höhe", weil es am Fuß des Taunus liegt — die Höhen darüber gehören zwar zur Gemarkung, sind aber Wald. Gewohnt wird zwischen 137 und 250 Metern. Die Wege in der Stadt sind also meist machbar; anders sieht es in den Ortsteilen aus, die ihren dörflichen Charakter behalten haben, etwa in Ober-Erlenbach oder Dornholzhausen. Und im Kreis wird es schnell ländlich: Während Bad Homburg auf über 1.100 Einwohner je Quadratkilometer kommt, sind es rund um Usingen keine 300.</Text>
      </>
    ),
    beratungsabsatz: <Text>Eine Betreuungskraft, die mit einzieht, füllt genau die Lücke zwischen „allein zurechtkommen" und „ins Heim ziehen". Sie ist nachts da, führt den Haushalt und begleitet zu Terminen. Bevor Sie sich entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte in Hessen beraten kostenlos und neutral, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI).</Text>,
  },
  einzugsgebiet: 'Bad Homburg und Hochtaunuskreis: Friedrichsdorf, Oberursel, Kronberg im Taunus, Königstein im Taunus und alle Gemeinden im Hochtaunuskreis',
  stimmen: ['k-20260605-daniel', 'k-20260327-marco'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
