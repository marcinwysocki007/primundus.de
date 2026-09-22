import type { Metadata } from 'next'
import { OrtBeratung } from '@/components/orte/OrtBeratung'
import { OrtErsteTage } from '@/components/orte/OrtErsteTage'
import { OrtAblauf, OrtAufgaben, OrtPassendeKraft, OrtWarumPrimundus, OrtWasBedeutet } from '@/components/orte/OrtGrundlagen'
import { OrtWohnen } from '@/components/orte/OrtWohnen'
import { OrtWannSinnvoll } from '@/components/orte/OrtWannSinnvoll'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import {
  MehrDazu, Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'was-bedeutet', title: "Was 24-Stunden-Pflege in Hamburg bedeutet" },
  { id: 'wann-sinnvoll', title: "Wann Betreuung zu Hause sinnvoll ist" },
  { id: 'wohnen', title: "Wohnen in Hamburg: was das für die Betreuung heißt" },
  { id: 'aufgaben', title: "Was eine Betreuungskraft übernimmt — und was der Pflegedienst" },
  { id: 'ablauf', title: "So läuft die Betreuung ab" },
  { id: 'voraussetzungen', title: "Was Sie zu Hause brauchen" },
  { id: 'kosten', title: "Was 24-Stunden-Pflege in Hamburg kostet" },
  { id: 'werkzeuge', title: "Zuschüsse und Rechner: was die Pflegekasse dazugibt" },
  { id: 'passende-kraft', title: "Wie Sie die passende Betreuungskraft finden" },
  { id: 'warum-primundus', title: "Warum Familien in Hamburg Primundus wählen" },
  { id: 'erste-tage', title: "Die ersten Tage: worauf es ankommt" },
  { id: 'stimmen-vor-ort', title: "Familien aus Hamburg über uns" },
  { id: 'einzugsgebiet-hamburg', title: "Einzugsgebiet Hamburg" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Hamburg" },
  { id: 'beratung-hamburg', title: "Wo Sie sich in Hamburg unabhängig beraten lassen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Hamburg | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Anreise in Hamburg in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hamburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Hamburg | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Anreise in Hamburg in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-hamburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Hamburg?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — oft günstiger als ein Heimplatz in Hamburg (Eigenanteil rund 3.500 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Hamburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Hamburg und im Umland.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Hamburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Ist das Altenpflege, Seniorenbetreuung oder 24-Stunden-Pflege?', a: 'Gemeint ist meist dasselbe: Eine Betreuungskraft zieht in die Wohnung ein, hilft bei Körperpflege, Haushalt und Alltag und ist bei Bedarf auch nachts da. „Altenpflege" und „Seniorenbetreuung" sind die Wörter, mit denen viele Hamburger Familien suchen; medizinische Behandlungspflege wie Spritzen oder Verbände übernimmt weiterhin der ambulante Pflegedienst, den Sie zusätzlich behalten.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hamburg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.500 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.577 € Unterschied im Monat, 30.924 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-hamburg#service',
    name: 'Primundus — 24h-Pflege Hamburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Hamburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-hamburg',
    areaServed: { '@type': 'State', name: 'Hamburg' },
    // Echte Niederlassung mit eigener Nummer (Branchenbuch hamburg.de, Gelbe Seiten; Martin 21.09.).
    // Adresse wie in lib/bewertungen.ts, wo auch das Google-Unternehmensprofil hinterlegt ist.
    provider: {
      '@type': 'LocalBusiness',
      name: 'Primundus 24-Stunden-Pflege Hamburg',
      telephone: '+49 40 468951181',
      email: 'hamburg@primundus.de',
      url: 'https://primundus.de/24h-pflege-hamburg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Baumwall 7',
        postalCode: '20459',
        addressLocality: 'Hamburg',
        addressCountry: 'DE',
      },
    },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Hamburg', item: 'https://primundus.de/24h-pflege-hamburg' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // Aus FRAGEN erzeugt — ausgezeichnet wird genau das, was auf der Seite steht.
    mainEntity: FRAGEN.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]


export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Regionen', href: '/regionen' },
            { label: 'Hamburg' },
          ]}
          augenbraue="24-Stunden-Pflege in Hamburg"
          titel="24-Stunden-Pflege in Hamburg: So funktioniert Betreuung zu Hause"
          einleitung={<>Eine Betreuungskraft lebt mit im Haushalt und unterstützt im Alltag — bei Körperpflege, Essen, Haushalt und Begleitung. Hier erfahren Sie, wie die Betreuung abläuft, was sie kostet und worauf Sie achten sollten.</>}
          aktualisiert="21. September 2026"
          lesezeit="8 Min."
          sprung={[
            { id: 'ablauf', label: 'Ablauf' },
            { id: 'aufgaben', label: 'Aufgaben' },
            { id: 'kosten', label: 'Kosten' },
            { id: 'voraussetzungen', label: 'Voraussetzungen' },
            { id: 'passende-kraft', label: 'Betreuungskraft finden' },
          ]}
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=ort-hamburg', text: 'Preis & verfügbare Betreuungskräfte ansehen' }}
          knopfSchlicht
          person={
            <AnsprechpartnerinGross
              ort="Hamburg"
              telefon="+4940468951181"
              telefonAnzeige="040 468 951 181"
              adresse="Baumwall 7, 20459 Hamburg"
            />
          }
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <OrtWasBedeutet ort="Hamburg" />

          <OrtWannSinnvoll slug="hamburg" ort="Hamburg" />
          <OrtWohnen slug="hamburg" ort="Hamburg" />

          <OrtAufgaben />

          <OrtAblauf />

          <Abschnitt id="voraussetzungen" titel="Was Sie zu Hause brauchen">
            <Text>
              Die Betreuungskraft braucht ein eigenes, abschließbares Zimmer; Bad und Küche werden in der Regel geteilt.
              Meist wird es das ehemalige Kinder- oder Arbeitszimmer. Unterkunft und Verpflegung stellt die Familie — sie
              lebt ja mit im Haushalt und isst mit.
            </Text>
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
          </Abschnitt>

          <Abschnitt id="kosten" titel="Was 24-Stunden-Pflege in Hamburg kostet">
            <Text>
              Der Preis richtet sich danach, wie viel Hilfe nötig ist und was Sie von der Betreuungskraft erwarten: wie gut sie
              Deutsch spricht, ob sie Erfahrung mit Demenz hat, ob nachts jemand aufstehen muss, ob eine oder zwei Personen
              versorgt werden. Bei Primundus beginnt er bei 2.150 € im Monat, dazu kommen An- und Abreise mit 125 € je Strecke.
              Von diesem Preis geht ab, was die Pflegekasse zahlt — das Beispiel zeigt, wie viel.
            </Text>
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Hamburg"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Zum Vergleich: Ein Heimplatz in Hamburg kostet im ersten Jahr rund 3.500 €/Monat Eigenanteil (vdek, 07/2026)"
            />
            <Tabelle
              titel="Was die Pflegekasse zahlt"
              kopf={['Pflegegrad', 'Pflegegeld je Monat', 'Entlastungsbudget je Jahr']}
              zeilen={[
                ['PG 2', '347 €', '3.539 €'],
                ['PG 3', '599 €', '3.539 €'],
                ['PG 4', '800 €', '3.539 €'],
                ['PG 5', '990 €', '3.539 €'],
              ]}
              betont={1}
              fuss="Stand 2026 · bundesweit einheitlich"
            />
            <Kasten titel="Bei Primundus warten Sie nicht auf ein Angebot">
              <Text>Nach wenigen Angaben zur Pflegesituation sehen Sie Ihren konkreten Preis — und die Betreuungskräfte, die dafür in Frage kommen.</Text>
            </Kasten>
            <RechnerKasten src="ort-hamburg" />
          </Abschnitt>

          <OrtWerkzeuge ohneWohnen ort={'Hamburg'} land={'Hamburg'} altbau={62.1} miete={9.16} titel="Zuschüsse und Rechner: was die Pflegekasse dazugibt" />

          <OrtPassendeKraft />

          <OrtWarumPrimundus ort="Hamburg" />

          <OrtErsteTage ort="Hamburg" />

          <OrtStimmen
            ort={'Hamburg'}
            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260909-petra', 'k-20251029-rainer', 'k-20241129-melanie'].includes(b.id))}
          />

          <Abschnitt id="einzugsgebiet-hamburg" titel="Einzugsgebiet Hamburg">
            <Text>
              Alle sieben Bezirke: Hamburg-Mitte, Altona, Eimsbüttel, Hamburg-Nord, Wandsbek, Bergedorf und Harburg — von
              Blankenese bis Bergedorf, von Volksdorf bis Wilhelmsburg. Dazu das Umland: Norderstedt, Quickborn, Pinneberg,
              Ahrensburg, Reinbek, Buxtehude und die Kreise Pinneberg, Stormarn, Segeberg und Harburg.
            </Text>
            <NearbyCities current="hamburg" />
          </Abschnitt>

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Hamburg">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <OrtBeratung
            slug="hamburg"
            ort="Hamburg"
            id="beratung-hamburg"
            eigene={
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
            }
          />
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
