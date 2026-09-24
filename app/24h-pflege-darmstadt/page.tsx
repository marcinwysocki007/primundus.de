import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Darmstadt anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Darmstadt und Landkreis | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Darmstadt in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-darmstadt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Darmstadt und Landkreis | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Darmstadt in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-darmstadt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Darmstadt?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Hessen kostet im Schnitt rund 3.230 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Darmstadt starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Funktioniert 24-Stunden-Betreuung in einer Darmstädter Wohnung?', a: 'Das ist hier die entscheidende Frage, und wir beantworten sie ehrlich: Darmstadt ist räumlich die anspruchsvollste Stadt der Region. Die durchschnittliche Wohnung misst 81,8 Quadratmeter gegenüber 98,3 in Hessen, jede dritte hat unter 60, und 53,1 Prozent liegen in Häusern mit sieben oder mehr Parteien — eine Folge des Wiederaufbaus nach der Brandnacht 1944, aus der allein 20,9 Prozent des heutigen Wohnungsbestands stammen. Nur 29,5 Prozent der Haushalte wohnen im Eigentum. Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. Ist das da, funktioniert es wie überall; ist es nicht da, sagen wir Ihnen das vorher.' },
  { q: 'Darmstadt ist eine junge Stadt — lohnt sich das Thema hier überhaupt?', a: 'Die Quote täuscht. Mit 48 Pflegebedürftigen je 1.000 Einwohner hat Darmstadt die niedrigste Pflegequote aller 26 hessischen Kreise (Hessen: 67) — das liegt an den vielen Studierenden, nicht an geringerem Bedarf. In absoluten Zahlen sind 7.587 Menschen pflegebedürftig und 29.645 über 65 Jahre alt. Interessanter ist die Struktur: In Darmstadt wird seltener rein familiär gepflegt als im Umland (54,5 gegen 62,1 Prozent im Landkreis Darmstadt-Dieburg), dafür ist die ambulante Versorgung mit 19,4 Prozent überdurchschnittlich.' },
  { q: 'Gibt es in Darmstadt genug Heimplätze als Alternative?', a: 'Weniger, als viele annehmen. Zwar leben mit 14,4 Prozent etwas mehr Pflegebedürftige im Heim als in Hessen insgesamt (13,0 Prozent) — gemessen an der Zahl der über 65-Jährigen stehen aber nur 43 Plätze je 1.000 zur Verfügung, gegenüber 47 im Land. Der Landkreis Darmstadt-Dieburg liegt mit 34 noch deutlich darunter. Die Region ist insgesamt heimplatzarm, und die Stadt gleicht das nicht aus. Wer zu Hause bleiben möchte, hat dafür also nicht nur persönliche, sondern auch praktische Gründe.' },
  { q: 'Welches Einzugsgebiet wird in Darmstadt bedient?', a: 'Darmstadt und Landkreis Darmstadt-Dieburg: Griesheim, Weiterstadt, Dieburg, Reinheim, Groß-Umstadt und alle Gemeinden im Landkreis Darmstadt-Dieburg' },
  { q: 'Ist in einer Wohnung in Darmstadt Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Darmstadt hat im Schnitt 81,8 m², 33,5 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,5 % der Gebäude in Darmstadt sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'darmstadt',
  ort: 'Darmstadt',
  land: 'Hessen',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Ob Jugendstilwohnung nahe der Mathildenhöhe, Haus in Bessungen oder Eberstadt: Darmstädter möchten im Alter dort bleiben, wo ihr Leben stattgefunden hat. Eine Betreuungskraft von Primundus macht das möglich — sie zieht mit ein, übernimmt Haushalt und Pflegealltag und ist auch nachts da, bis Arheilgen und ins Umland.</>,
  kreis: 'Landkreis Darmstadt-Dieburg',
  vorOrt: {
    inhalt: (
      <>
        <Text>In der Nacht vom 11. auf den 12. September 1944 wurden 78 Prozent der Darmstädter Kernstadt zerstört. Das klingt nach Geschichtsbuch, steht aber bis heute in der Wohnungsstatistik — und es entscheidet mit darüber, ob eine 24-Stunden-Betreuung in einer Wohnung überhaupt funktioniert.{' '} <strong className="text-pm-ink font-semibold">20,9 Prozent aller Darmstädter Wohnungen stammen aus den 1950er-Jahren, in ganz Hessen sind es 12,3 Prozent.</strong> Das ist der Wiederaufbau, und der baute schnell und knapp: Die durchschnittliche Wohnung misst hier 81,8 Quadratmeter gegenüber 98,3 im Land, jede dritte hat unter 60 Quadratmeter, und 53,1 Prozent liegen in Häusern mit sieben oder mehr Parteien.</Text>
        <Text>Wir sagen das offen, weil es der ehrlichere Weg ist: Darmstadt ist für eine Betreuungskraft im Haushalt räumlich die anspruchsvollste Stadt der Region. Nur 29,5 Prozent der Haushalte wohnen im Eigentum — in Hessen sind es 46,6. Wer hier über eine 24-Stunden-Betreuung nachdenkt, sollte als Erstes klären, ob ein eigenes Zimmer für die Kraft frei wird. Wo es das gibt, funktioniert es genauso gut wie überall sonst. Wo nicht, sagen wir das lieber vorher als hinterher.</Text>
        <Text>Bei den Pflegezahlen ist Darmstadt ein Sonderfall — und wird deshalb leicht falsch gelesen. Mit 48 Pflegebedürftigen je 1.000 Einwohner hat die Stadt die niedrigste Pflegequote aller 26 hessischen Kreise (Land: 67). Das liegt an der jungen Universitätsstadt, nicht an weniger Bedarf: 7.587 Menschen sind pflegebedürftig, 29.645 sind über 65. Auffällig ist etwas anderes — in Darmstadt wird seltener rein familiär gepflegt als im Umland. 54,5 Prozent beziehen nur Pflegegeld, im Landkreis Darmstadt-Dieburg sind es 62,1. Dafür ist die ambulante Versorgung mit 19,4 Prozent besser als im Land (17,6), und ein ambulanter Dienst betreut hier im Schnitt 46 Menschen statt 70 wie im Landkreis.</Text>
        <Text>Ein verbreiteter Irrtum sei gleich mit ausgeräumt: Dass der Anteil der Heimbewohner in Darmstadt mit 14,4 Prozent über dem hessischen Wert von 13,0 liegt, heißt nicht, dass es hier viele Heimplätze gäbe. Gemessen an der Zahl der über 65-Jährigen sind es{' '} <strong className="text-pm-ink font-semibold">43 Plätze je 1.000 — weniger als die 47 im Land.</strong> Die ganze Region ist heimplatzarm; der Landkreis liegt mit 34 noch deutlich darunter. Wer einen Platz sucht, sucht hier länger.</Text>
        <Text>Dazu kommt, wie unterschiedlich die Stadtteile sind. Zwischen Darmstadt-Mitte und Wixhausen liegt beim Bevölkerungsdruck der Faktor 33 — 93 gegen 2,8 Einwohner je Hektar. Wixhausen und Eberstadt sind eigene Welten mit eigenen Wegen. Eine Betreuungskraft, die im Haushalt lebt, macht diesen Unterschied bedeutungslos: Sie ist da, unabhängig davon, wie weit der nächste Dienst fahren müsste. Die Akutgeriatrie der Stadt sitzt im AGAPLESION Elisabethenstift, das auch eine geriatrische Tagesklinik führt. Und bevor Sie entscheiden: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen.</Text>
      </>
    ),
  },
  einzugsgebiet: 'Darmstadt und Landkreis Darmstadt-Dieburg: Griesheim, Weiterstadt, Dieburg, Reinheim, Groß-Umstadt und alle Gemeinden im Landkreis Darmstadt-Dieburg',
  stimmen: ['k-20250906-alexander'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
