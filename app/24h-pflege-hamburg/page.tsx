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
  title: '24-Stunden-Pflege in Hamburg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hamburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hamburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Hamburg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hamburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-hamburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Hamburg?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Hamburg kostet im Schnitt rund 3.500 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Hamburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Hamburg und im Umland.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Hamburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Ist das Altenpflege, Seniorenbetreuung oder 24-Stunden-Pflege?', a: 'Gemeint ist meist dasselbe: Eine Betreuungskraft zieht in die Wohnung ein, hilft bei Körperpflege, Haushalt und Alltag und ist bei Bedarf auch nachts da. „Altenpflege" und „Seniorenbetreuung" sind die Wörter, mit denen viele Hamburger Familien suchen; medizinische Behandlungspflege wie Spritzen oder Verbände übernimmt weiterhin der ambulante Pflegedienst, den Sie zusätzlich behalten.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hamburg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.500 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const ORT: OrtDaten = {
  slug: 'hamburg',
  ort: 'Hamburg',
  land: 'Hamburg',
  art: 'hand',
  aktualisiert: '24. September 2026',
  lesezeit: '8 Min.',
  titel: '24-Stunden-Pflege in Hamburg: So funktioniert Betreuung zu Hause',
  telefon: { nummer: '+4940468951181', anzeige: '040 468 951 181', adresse: 'Baumwall 7, 20459 Hamburg' },
  // Die Wohnungsdaten stehen schon in der Prosa — kein zweiter Wohnen-Baustein
  wohnenBaustein: false,
  einleitung: <>Die Betreuungskraft braucht ein eigenes, abschließbares Zimmer; Bad und Küche werden in der Regel geteilt.
        Meist wird es das ehemalige Kinder- oder Arbeitszimmer. Unterkunft und Verpflegung stellt die Familie — sie
        lebt ja mit im Haushalt und isst mit.</>,
  vorOrt: {
    inhalt: (
      <>
        <Text>
        In Hamburg ist das oft die eigentliche Frage. Eine Wohnung misst hier im Schnitt 76,6 Quadratmeter, bundesweit
        sind es 94,4 — fast 18 Quadratmeter weniger. 37,6 Prozent der Wohnungen sind kleiner als 60 Quadratmeter, im
        Bundesschnitt 23,2 Prozent. Und nur 21,6 Prozent der Haushalte wohnen im Eigentum, bundesweit 44,3 Prozent: Die
        meisten Hamburger können nicht einfach in eine größere Wohnung ziehen, es muss in der vorhandenen gehen.
        </Text>
        <Text>
        Dazu kommt das Baujahr. 62,1 Prozent aller Wohnungen in Hamburg stammen aus der Zeit vor 1970 — der Altbau in
        Eimsbüttel, die Nachkriegsbauten in Barmbek und Dulsberg. In diesem Bestand fehlt häufiger ein Aufzug, das Bad
        ist klein und die Treppe steil. Genau das sind die Punkte, an denen Alleinleben scheitert und jemand im Haus den
        Unterschied macht. Ob Ihre Wohnung ein Zimmer hergibt, entscheidet sich nicht an der Statistik, sondern an Ihrem
        Grundriss — das klären wir vorab am Telefon, damit es hinterher keine Überraschung gibt.
        </Text>
        <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
      </>
    ),
  },
  einzugsgebiet: 'Alle sieben Bezirke: Hamburg-Mitte, Altona, Eimsbüttel, Hamburg-Nord, Wandsbek, Bergedorf und Harburg — von Blankenese bis Bergedorf, von Volksdorf bis Wilhelmsburg. Dazu das Umland: Norderstedt, Quickborn, Pinneberg, Ahrensburg, Reinbek, Buxtehude und die Kreise Pinneberg, Stormarn, Segeberg und Harburg.',
  stimmen: ['k-20260909-petra', 'k-20251029-rainer', 'k-20241129-melanie'],
  beratungEigene: (
              <>
            <Punkte
              punkte={[
                {
                  title: (
                    <a href="https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/beratung/pflegenottelefon" target="_blank" rel="noopener noreferrer" className={QUELLE}>Pflegenottelefon Hamburg — 040 428 99 1000</a>
                  ),
                  desc: 'Bei akuter Pflegenot jeden Tag zu jeder Zeit erreichbar. Wenn es heute eilt und Sie nicht wissen, wen Sie anrufen sollen: diese Nummer.',
                },
                {
                  title: (
                    <a href="https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/beratung/pflegestuetzpunkte" target="_blank" rel="noopener noreferrer" className={QUELLE}>Die acht Pflegestützpunkte</a>
                  ),
                  desc: 'Einer in jedem Bezirk, zwei in Wandsbek. Beratung ohne Anmeldung, auf Wunsch bei Ihnen zu Hause — unabhängig von Kasse und Versicherungsstatus.',
                },
                {
                  title: (
                    <a href="https://www.hamburg.de/pflege/" target="_blank" rel="noopener noreferrer" className={QUELLE}>Pflege in Hamburg — Übersicht der Sozialbehörde</a>
                  ),
                  desc: 'Was die Stadt an Beratung, Entlastung und Angeboten für pflegende Angehörige bereithält.',
                },
                {
                  title: (
                    <a href="https://www.alzheimer-hamburg.de/" target="_blank" rel="noopener noreferrer" className={QUELLE}>Alzheimer Gesellschaft Hamburg</a>
                  ),
                  desc: 'Beratung, Gesprächsgruppen und Schulungen für Angehörige von Menschen mit Demenz.',
                },
              ]}
            />
            <p className="text-[15px] leading-[1.6] text-pm-body/70">
              Die vier Adressen haben wir am 21. September 2026 geprüft. Wir bekommen für diese Verweise nichts, und die
              Stellen wissen nichts von uns.
            </p>
              </>
  ),
  fragen: FRAGEN,
}

export default function Page() {
  return <OrtSeite daten={ORT} />
}
