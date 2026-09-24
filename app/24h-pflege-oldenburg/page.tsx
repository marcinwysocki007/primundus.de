import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Oldenburg anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Oldenburg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Oldenburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-oldenburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Oldenburg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Oldenburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-oldenburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Oldenburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Niedersachsen kostet im Schnitt rund 3.010 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Oldenburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Ist in einer Oldenburger Wohnung Platz für eine Betreuungskraft?', a: 'Häufiger als in vielen anderen Städten. 81 Prozent der Gebäude in Oldenburg sind Ein- oder Zweifamilienhäuser, 69 Prozent stehen frei — der Bestand ist zudem jung, fast jede fünfte Wohnung wurde nach 2000 gebaut. Das Gästezimmer ist also oft schon vorhanden. Es gilt aber nicht überall: Rund 27 Prozent der Wohnungen haben unter 60 Quadratmeter, und nur 36,3 Prozent der Haushalte wohnen im Eigentum (Niedersachsen: 51,1). Notwendig ist ein eigenes, abschließbares Zimmer. Was Ihre Wohnung hergibt, klären wir vorab.' },
  { q: 'Wie ist die Pflegesituation in Oldenburg?', a: 'In Oldenburg leben 10.606 Menschen mit Pflegebedarf, 35.882 Einwohner sind über 65. Bemerkenswert ist der Heimanteil: Mit 13,3 Prozent liegt er unter dem niedersächsischen Wert von 14,5 Prozent und deutlich unter dem Landkreis Oldenburg (16,6 Prozent) — die Stadt trägt die Heimversorgung fürs Umland also nicht mit. Die häusliche Pflege entspricht mit 56,0 Prozent reinem Pflegegeld dem Landesschnitt. Die auf den ersten Blick niedrige Pflegequote (61 je 1.000 Einwohner gegenüber 76 im Land) liegt an der jungen Universitätsstadt, nicht an geringerem Bedarf.' },
  { q: 'Kommen die Betreuungskräfte auch in die äußeren Stadtbezirke?', a: 'Ja, und dort zahlt es sich besonders aus. Oldenburg ist zwar insgesamt dicht besiedelt, doch zwischen den Stadtbezirken liegt der Faktor 23: In Ziegelhof/Ehnern leben 44,8 Menschen je Hektar, in Neuenwege/Kloster Blankenburg 2,0 — knapp 2.000 Einwohner auf fast zehn Quadratkilometern, mitten im Stadtgebiet. Für einen ambulanten Dienst bedeuten Bornhorst, Etzhorn oder Neuenwege lange Fahrten für kurze Einsätze. Eine Betreuungskraft, die im Haus lebt, hat diese Wege nicht. Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Oldenburg bedient?', a: 'Oldenburg und Umland: Delmenhorst, Westerstede, Cloppenburg, Wildeshausen und alle Gemeinden im Landkreis Oldenburg und Ammerland' },
]

const ORT: OrtDaten = {
  slug: 'oldenburg',
  ort: 'Oldenburg',
  land: 'Niedersachsen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>In Eversten, Osternburg oder Ofenerdiek wohnt man gern mit Garten und Fahrradweg vor der Tür — und möchte genau dort auch alt werden. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, im vertrauten Zuhause, auch im Ammerland und Umland.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>Oldenburg kam durch den Krieg nahezu unbeschadet — 1,4 Prozent der Stadt wurden zerstört, 130 Wohnhäuser, die Innenstadt blieb stehen. Trotzdem hat Oldenburg heute weniger alte Wohnungen als Städte, die in Trümmern lagen: 16,0 Prozent stammen aus der Zeit vor 1950. Der Grund ist ein anderer. 1946 überschritt die Stadt durch den Zuzug von Flüchtlingen und Vertriebenen erstmals die 100.000-Einwohner-Marke, und was danach gebaut wurde, überwiegt den alten Bestand bei Weitem. Für die Pflege zu Hause ist das eine gute Nachricht: <strong className="text-pm-ink font-semibold">81 Prozent der Gebäude sind Ein- oder Zweifamilienhäuser, 69 Prozent stehen frei.</strong> Ein Zimmer für eine Betreuungskraft ist hier häufiger vorhanden als anderswo.</Text>
        <Text>Das gilt allerdings nicht für die ganze Stadt. Oldenburg ist mit rund 1.714 Einwohnern je Quadratkilometer dichter besiedelt, als das Bild der Einfamilienhäuser vermuten lässt, und zwischen den neun Stadtbezirken liegen Welten: Im Bezirk Ziegelhof/Ehnern leben 44,8 Menschen je Hektar, im Bezirk Neuenwege/Kloster Blankenburg 2,0 — knapp 2.000 Einwohner auf fast zehn Quadratkilometern, also Landkreis-Verhältnisse innerhalb der Stadtgrenze. Rund 27 Prozent der Wohnungen haben unter 60 Quadratmeter, und nur 36,3 Prozent der Haushalte wohnen im Eigentum, deutlich weniger als in Niedersachsen mit 51,1. Ob eine Betreuungskraft einziehen kann, hängt also auch hier am konkreten Grundriss.</Text>
        <Text>Die Pflegezahlen halten eine Überraschung bereit. In Oldenburg leben 10.606 Menschen mit Pflegebedarf. Der Anteil derer, die vollstationär im Heim versorgt werden, liegt mit 13,3 Prozent <em>unter</em> dem niedersächsischen Wert von 14,5 — und deutlich unter dem Landkreis Oldenburg mit 16,6 Prozent. Der sonst übliche Effekt, dass eine Stadt die Heimversorgung fürs Umland mitträgt, zeigt sich hier also nicht. Die häusliche Pflege entspricht mit 56,0 Prozent reinem Pflegegeld ziemlich genau dem Landesschnitt (55,4). Ein Hinweis zur Einordnung: Die niedrige Pflegequote der Stadt (61 je 1.000 Einwohner gegenüber 76 im Land) bedeutet keinen geringeren Bedarf — Oldenburg ist Universitätsstadt mit jüngerer Bevölkerung. 35.882 Menschen hier sind über 65.</Text>
        <Text>Medizinisch ist Oldenburg gut aufgestellt: Die Universitätsklinik für Geriatrie am Klinikum Oldenburg deckt die Akutversorgung ab, und mit der geriatrischen Rehabilitation im Reha-Zentrum gibt es die Anschlussbehandlung am selben Ort. Was nach der Entlassung kommt, ist trotzdem die Frage, an der es meistens hängt. Eine Betreuungskraft, die mit einzieht, ist nachts da, führt den Haushalt und macht es möglich, dass jemand in seinem eigenen Haus bleibt — auch draußen in Bornhorst oder Neuenwege, wo ein ambulanter Dienst weite Wege für wenige Termine fahren müsste. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Oldenburg und Umland: Delmenhorst, Westerstede, Cloppenburg, Wildeshausen und alle Gemeinden im Landkreis Oldenburg und Ammerland',
  stimmen: ['k-20260105-sven'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
