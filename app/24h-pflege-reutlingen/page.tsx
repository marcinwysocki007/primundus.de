import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import type { OrtDaten } from '@/lib/orte-daten'
import { Text } from '@/components/vorlage/Ratgeber'

// Seit 23.09.2026 traegt diese Datei nur noch, was in Reutlingen anders ist; der feste Text steht
// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).
export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Reutlingen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Reutlingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-reutlingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Reutlingen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Reutlingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-reutlingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Reutlingen?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Baden-Württemberg kostet im Schnitt rund 3.660 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Reutlingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Kommt eine Betreuungskraft auch nach Gönningen oder Bronnweiler?', a: 'Ja, und gerade dort lohnt es sich besonders. Zwischen den bewohnten Ortskernen Reutlingens liegen rund 215 Höhenmeter — Mittelstadt am Neckar auf 320, Gönningen am Fuß des Albtraufs auf 521 Metern. Gönningen ist flächenmäßig gut halb so groß wie die gesamte Kernstadt, hat aber nur 3.902 Einwohner. Für ambulante Dienste bedeutet das lange Fahrwege zwischen wenigen Terminen; für eine Betreuungskraft, die im Haus lebt, spielt die Entfernung schlicht keine Rolle. Anreise und Preis sind in allen zwölf Stadtbezirken gleich.' },
  { q: 'Wie ist die Pflegesituation in Reutlingen und Umgebung?', a: 'Auffällig familiär. Von den 16.341 Pflegebedürftigen im Landkreis Reutlingen werden 9.895 ausschließlich von Angehörigen versorgt — 60,6 Prozent gegenüber 55,9 Prozent in Baden-Württemberg. Ambulante Dienste (13,6 statt 16,4 Prozent) und Heimplätze (12,9 statt 14,9 Prozent) liegen entsprechend unter dem Landeswert. Seit 2021 ist die Zahl der Pflegebedürftigen um 16,7 Prozent gestiegen. Die Statistik wird nur auf Kreisebene erhoben, für die Stadt allein gibt es keine eigenen Zahlen.' },
  { q: 'Welches Einzugsgebiet wird in Reutlingen bedient?', a: 'Reutlingen und Landkreis Reutlingen: Tübingen, Metzingen, Bad Urach, Münsingen und alle Gemeinden im Landkreis Reutlingen und Tübingen' },
  { q: 'Ist in einer Wohnung in Reutlingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Reutlingen hat im Schnitt 92,1 m², 22,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 79,2 % der Gebäude in Reutlingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'reutlingen',
  ort: 'Reutlingen',
  land: 'Baden-Württemberg',
  art: 'hand',
  aktualisiert: '23. September 2026',
  lesezeit: '6 Min.',
  einleitung: <>Am Fuß der Achalm bleibt man verwurzelt: das Haus in Betzingen, die Wohnung in Sondelfingen, der Blick auf die Alb. Damit das auch mit Pflegebedarf so bleibt, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da — 1:1, ohne Heimumzug. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>,
  kreis: 'Landkreis Reutlingen',
  vorOrt: {
    inhalt: (
      <>
        <Text>Reutlingen ist zwei Städte in einer, und das fällt erst auf, wenn jemand pflegebedürftig wird. In der Kernstadt leben rund 70.700 Menschen auf 2.780 Hektar. Gönningen, der südlichste Stadtbezirk, ist mit 1.568 Hektar flächenmäßig gut halb so groß wie die gesamte Kernstadt — und hat 3.902 Einwohner. Zwischen den bewohnten Ortskernen liegen rund 215 Höhenmeter: Mittelstadt am Neckar auf 320 Metern, Gönningen am Fuß des Albtraufs auf 521. Wer dort oben alt wird, hat für jeden Weg — Arzt, Apotheke, Einkauf — eine andere Rechnung aufzumachen als jemand in der Innenstadt.</Text>
        <Text>Die Pflegestatistik gibt es nur für den Landkreis, nicht für die Stadt allein. Sie zeigt aber etwas, das kaum jemand erwartet: <strong className="text-pm-ink font-semibold">Von den 16.341 Pflegebedürftigen im Kreis werden 9.895 ausschließlich von Angehörigen versorgt — 60,6 Prozent, ganz ohne Pflegedienst.</strong> In Baden-Württemberg sind es 55,9 Prozent. Beide professionellen Formen liegen entsprechend darunter: ambulant 13,6 statt 16,4 Prozent, vollstationär 12,9 statt 14,9. Hier wird also häufiger als sonst im Land allein gepflegt — von Töchtern, Söhnen und Ehepartnern, die das über Jahre neben Beruf und eigenem Haushalt stemmen. Dass die Zahl der Pflegebedürftigen seit 2021 um 16,7 Prozent gestiegen ist, macht die Sache nicht leichter.</Text>
        <Text>Beim Wohnen spielt Reutlingen der 24-Stunden-Betreuung in die Hände — allerdings nicht überall. Knapp die Hälfte der Haushalte wohnt im Eigentum (49,3 Prozent), und in den zwölf Stadtbezirken stehen überwiegend Ein- und Zweifamilienhäuser. Da ist das Gästezimmer meist schon vorhanden. In der Kernstadt sieht es anders aus: Ein Drittel aller Wohnungen liegt in Häusern mit sieben oder mehr Parteien, gut jede fünfte hat unter 60 Quadratmeter. Die durchschnittliche Reutlinger Wohnung misst 92 Quadratmeter und damit sieben weniger als der Landesschnitt. Ob eine Betreuungskraft einziehen kann, entscheidet sich also nicht an der Stadt, sondern am Stadtbezirk.</Text>
        <Text>Eine gute Nachricht gibt es seit Kurzem: Die akutgeriatrischen Betten liegen erst seit Mai 2023 im Klinikum am Steinenberg in der Stadt selbst — vorher musste man dafür in die Ermstalklinik nach Bad Urach. Wer nach einem Sturz oder Schlaganfall aus der Altersmedizin entlassen wird, steht damit zwar näher an zu Hause, aber vor derselben Frage: Wie geht es in der eigenen Wohnung weiter, wenn die Familie schon am Limit ist?</Text>
        <Text>Genau an dieser Stelle setzt eine Betreuungskraft an, die mit einziehen kann: Sie ist nachts da, führt den Haushalt und nimmt den Angehörigen die Dauerverantwortung ab — ohne dass jemand aus Gönningen oder Bronnweiler wegziehen muss. Bevor Sie sich festlegen, lassen Sie sich unabhängig beraten. Die Pflegeberatung ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause (§ 7a SGB XI).</Text>
      </>
    ),
  },
  einzugsgebiet: 'Reutlingen und Landkreis Reutlingen: Tübingen, Metzingen, Bad Urach, Münsingen und alle Gemeinden im Landkreis Reutlingen und Tübingen',
  stimmen: ['k-20250905-christine'],
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
