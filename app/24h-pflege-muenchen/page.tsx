//
// 24.09.2026: von der eigenen 15-Abschnitt-Seite auf die Vorlage OrtSeite (Rechner-Form) umgestellt — dieselbe
// Kur wie die 187 Standardseiten (Martin: „mach die anderen Seiten"). Wörtlich geblieben: Kommentare, metadata,
// FRAGEN, die drei Absätze zu Wohnen und Wohnungen (jetzt die Ortsprosa unter „Pflege vor Ort"), die geprüften
// Anlaufstellen (beratungEigene), die Stimmen-IDs, das Einzugsgebiet. Gefallen: die Schablonen-Abschnitte, die
// die Vorlage besser kann (Definition, Ablauf, Kosten-Tabellen, Werkzeuge, Erste Tage, eigener Kosten-Text).
import type { Metadata } from 'next'
import { OrtSeite } from '@/components/vorlage/OrtSeite'
import { Punkte, Text } from '@/components/vorlage/Ratgeber'
import type { OrtDaten } from '@/lib/orte-daten'

const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in München | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in München in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-muenchen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in München | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in München in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-muenchen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in München?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Bayern kostet im Schnitt rund 3.200 € Eigenanteil (vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in München starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in München rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in München?', a: '137.429 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,3 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 19,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Welches Einzugsgebiet wird in München bedient?', a: 'Schwabing, Bogenhausen, Solln, Pullach, Grünwald, Unterhaching, Ottobrunn, Haar, Dachau, Freising, Starnberg, Germering, Gauting, Weilheim, Landsberg am Lech und alle Gemeinden im Landkreis München' },
  { q: 'Heißt das Altenpflege, Seniorenbetreuung oder 24-Stunden-Pflege?', a: 'In München fragen Familien nach allen drei Begriffen und meinen dasselbe: eine Betreuungskraft, die mit einzieht, den Haushalt führt, bei Körperpflege und Alltag hilft und bei Bedarf auch nachts da ist. Spritzen, Verbände und andere Behandlungspflege bleiben beim ambulanten Pflegedienst, der weiterhin vorbeikommt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'muenchen',
  ort: 'München',
  land: 'Bayern',
  art: 'hand',
  aktualisiert: '24. September 2026',
  lesezeit: '8 Min.',
  titel: '24-Stunden-Pflege in München: So funktioniert Betreuung zu Hause',
  // Die Wohnungsdaten stehen schon in der Prosa — kein zweiter Wohnen-Baustein
  wohnenBaustein: false,
  einleitung: <>Die Betreuungskraft braucht ein eigenes, abschließbares Zimmer; Bad und Küche werden in der Regel geteilt.
        Meist wird es das ehemalige Kinder- oder Arbeitszimmer. Unterkunft und Verpflegung stellt die Familie — sie
        lebt ja mit im Haushalt und isst mit.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>
        In München ist das oft die eigentliche Frage. Die Stadt ist städtischer gebaut, als der Landesschnitt vermuten
        lässt: Auf ein Gebäude kommen hier 5,6 Wohnungen, in Bayern 2,1. Die durchschnittliche Wohnung misst 73,5
        Quadratmeter gegenüber 100,5 in Bayern, und zwei von fünf Wohnungen sind kleiner als 60 Quadratmeter — in Bayern
        sind es 20,7 Prozent. Nur 23,9 Prozent der Haushalte wohnen im Eigentum; in eine größere Wohnung zu ziehen ist
        für die meisten keine Option, es muss also in der vorhandenen gehen.
        </Text>
        <Text>
        Dazu kommt die Treppe: 44,4 Prozent der Gebäude in München stehen in geschlossener Reihe, an beiden Seiten angebaut, in Bayern 14,7 Prozent. Schmaler
        Grundriss, Schlafzimmer und Bad im Obergeschoss — wenn das Treppensteigen zur täglichen Hürde wird, ist jemand
        im Haus oft die Alternative zum Umzug. Ob Ihre Wohnung ein Zimmer hergibt, entscheidet sich nicht an der
        Statistik, sondern an Ihrem Grundriss. Das klären wir vorab am Telefon, damit es hinterher keine Überraschung gibt.
        </Text>
        <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
      </>
    ),
  },
  einzugsgebiet: 'Schwabing, Bogenhausen, Solln, Pullach, Grünwald, Unterhaching, Ottobrunn, Haar, Dachau, Freising, Starnberg, Germering, Gauting, Weilheim, Landsberg am Lech und alle Gemeinden im Landkreis München.',
  stimmen: ['k-20260823-michael', 'k-20260416-barbara', 'k-20251020-christine', 'k-20241106-verena'],
  beratungEigene: (
              <>
            <Punkte
              punkte={[
                {
                  title: (
                    <a href="https://stadt.muenchen.de/buergerservice/gesundheit-soziales/alter-pflege.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>Landeshauptstadt München — Alter und Pflegebedarf</a>
                  ),
                  desc: 'Die Übersicht der Stadt: Beratungsstellen, Alten- und Service-Zentren, Beschwerdestelle Pflege.',
                },
                {
                  title: (
                    <a href="https://www.stmgp.bayern.de/pflege/pflege-zu-hause/fachstellen_pflegende_angehoerige/" target="_blank" rel="noopener noreferrer" className={QUELLE}>Fachstellen für pflegende Angehörige</a>
                  ),
                  desc: 'Beratung und Entlastung für die, die pflegen — in München nach Stadtteil aufgeteilt. Verzeichnis des Bayerischen Gesundheitsministeriums.',
                },
                {
                  title: (
                    <a href="https://www.landkreis-muenchen.de/themen/familie-soziales/senioren/pflege/pflegestuetzpunkt/" target="_blank" rel="noopener noreferrer" className={QUELLE}>Pflegestützpunkt Landkreis München</a>
                  ),
                  desc: 'Für Haar, Unterhaching, Ottobrunn, Grünwald, Pullach und die übrigen Gemeinden im Landkreis.',
                },
                {
                  title: (
                    <a href="https://www.lfp.bayern.de/landespflegegeld/" target="_blank" rel="noopener noreferrer" className={QUELLE}>Landesamt für Pflege — Landespflegegeld</a>
                  ),
                  desc: 'Hier wird das bayerische Landespflegegeld beantragt: 500 € im Jahr ab Pflegegrad 2, zusätzlich zu allem, was die Pflegekasse zahlt.',
                },
              ]}
            />
            <p className="text-[15px] leading-[1.6] text-pm-body/70">
              Die vier Adressen haben wir am 20. September 2026 geprüft. Wir bekommen für diese Verweise nichts, und die
              Stellen wissen nichts von uns.
            </p>
              </>
  ),
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
