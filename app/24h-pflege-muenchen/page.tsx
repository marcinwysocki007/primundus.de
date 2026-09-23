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
// Ursprünglich erzeugt von scripts/codemods/13-ortsseiten.py; seit 20.09.2026 ist diese
// Seite von Hand geschrieben und nicht mehr aus der Vorlage gefüllt — siehe unten.

const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

// München von Hand geschrieben (20.09.2026) — erste der zehn großen Ortsseiten.
//
// Gemessen für „24 stunden pflege münchen" (mobil, 20.09.): SECHS Kartenblock-Einträge stehen über
// dem ersten organischen Treffer, alle ambulante Pflegedienste mit 4,9–5,0 Sternen; der erste
// organische Platz ist ein Branchenbuch. Ins Kartenpaket kommen wir ohne Standort in München nicht.
// Der organische Treffer muss den Klick also allein verdienen — mit dem, was die Karte nicht liefert.
// Daraus die drei neuen Abschnitte:
//  1. „Betreuungskraft oder Pflegedienst" — die Entscheidung, vor der die Familie wirklich steht.
//     Keine Seite auf Platz 1–10 erklärt sie; bei uns stand sie versteckt im FAQ.
//  2. „Wie schnell es gehen kann" — eine der vier Fragen, die Google bei dieser Suche selbst stellt.
//     Wir sind die Einzigen mit einer belegten Antwort (Anreise in 3 Tagen, Bewerbung am selben Werktag).
//  3. „Was in den ersten Tagen schiefgeht" — „Schlechte Erfahrungen mit 24-Stunden Pflege" zeigt Google
//     als verwandte Suche. Unsere vier echten Münchner Rückmeldungen (4/4/3/5 Sterne) sind der Beleg,
//     den kein Wettbewerber auf seiner Standortseite hat. Martin am 16.09.: „erfahrungen nie pauschal negieren".
//  4. „Wo Sie sich unabhängig beraten lassen" — „pflegeberatung münchen" wird 170× im Monat gesucht,
//     genauso oft wie unser Hauptbegriff; verwandte Suchen nennen die Pflegestützpunkte nach Stadtteil.
//     Alle vier Adressen am 20.09.2026 auf Erreichbarkeit geprüft (HTTP 200).
const SECTIONS = [
  { id: 'was-bedeutet', title: "Was 24-Stunden-Pflege in München bedeutet" },
  { id: 'wann-sinnvoll', title: "Wann Betreuung zu Hause sinnvoll ist" },
  { id: 'wohnen', title: "Wohnen in München: was das für die Betreuung heißt" },
  { id: 'aufgaben', title: "Was eine Betreuungskraft übernimmt — und was der Pflegedienst" },
  { id: 'ablauf', title: "So läuft die Betreuung ab" },
  { id: 'voraussetzungen', title: "Was Sie zu Hause brauchen" },
  { id: 'kosten', title: "Was 24-Stunden-Pflege in München kostet" },
  { id: 'werkzeuge', title: "Zuschüsse und Rechner: was die Pflegekasse dazugibt" },
  { id: 'passende-kraft', title: "Wie Sie die passende Betreuungskraft finden" },
  { id: 'warum-primundus', title: "Warum Familien in München Primundus wählen" },
  { id: 'erste-tage', title: "Die ersten Tage: worauf es ankommt" },
  { id: 'stimmen-vor-ort', title: "Familien aus München über uns" },
  { id: 'einzugsgebiet-muenchen', title: "Einzugsgebiet München" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in München" },
  { id: 'beratung-muenchen', title: "Wo Sie sich in München unabhängig beraten lassen" },
]

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
  { q: 'Was kostet eine 24h-Pflegekraft in München?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in München starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in München rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in München?', a: '137.429 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,3 Prozent — in Bayern 10,4 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 19,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Bayern: 23,0 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Welches Einzugsgebiet wird in München bedient?', a: 'Schwabing, Bogenhausen, Solln, Pullach, Grünwald, Unterhaching, Ottobrunn, Haar, Dachau, Freising, Starnberg, Germering, Gauting, Weilheim, Landsberg am Lech und alle Gemeinden im Landkreis München' },
  { q: 'Heißt das Altenpflege, Seniorenbetreuung oder 24-Stunden-Pflege?', a: 'In München fragen Familien nach allen drei Begriffen und meinen dasselbe: eine Betreuungskraft, die mit einzieht, den Haushalt führt, bei Körperpflege und Alltag hilft und bei Bedarf auch nachts da ist. Spritzen, Verbände und andere Behandlungspflege bleiben beim ambulanten Pflegedienst, der weiterhin vorbeikommt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.277 € Unterschied im Monat, 27.324 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-muenchen#service',
    name: 'Primundus — 24h-Pflege München',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in München. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-muenchen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'München' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'München', item: 'https://primundus.de/24h-pflege-muenchen' },
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
            { label: 'München' },
          ]}
          augenbraue="24-Stunden-Pflege in München"
          titel="24-Stunden-Pflege in München: So funktioniert Betreuung zu Hause"
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
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=ort-muenchen', text: 'Preis & Betreuungskräfte ansehen' }}
          knopfOben
          person={<AnsprechpartnerinGross ort="München" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <OrtWasBedeutet ort="München" />

          <OrtWannSinnvoll slug="muenchen" ort="München" />
          <OrtWohnen slug="muenchen" ort="München" />

          <OrtAufgaben />

          <OrtAblauf />

          <Abschnitt id="voraussetzungen" titel="Was Sie zu Hause brauchen">
            <Text>
              Die Betreuungskraft braucht ein eigenes, abschließbares Zimmer; Bad und Küche werden in der Regel geteilt.
              Meist wird es das ehemalige Kinder- oder Arbeitszimmer. Unterkunft und Verpflegung stellt die Familie — sie
              lebt ja mit im Haushalt und isst mit.
            </Text>
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
          </Abschnitt>

          <Abschnitt id="kosten" titel="Was 24-Stunden-Pflege in München kostet">
            <Text>
              Der Preis richtet sich danach, wie viel Hilfe nötig ist und was Sie von der Betreuungskraft erwarten: wie gut sie
              Deutsch spricht, ob sie Erfahrung mit Demenz hat, ob nachts jemand aufstehen muss, ob eine oder zwei Personen
              versorgt werden. Bei Primundus beginnt er bei 2.150 € im Monat, dazu kommen An- und Abreise mit 125 € je Strecke.
              Von diesem Preis geht ab, was die Pflegekasse zahlt — das Beispiel zeigt, wie viel.
            </Text>
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in München"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Zum Vergleich: Ein Heimplatz in Bayern kostet im ersten Jahr rund 3.200 €/Monat Eigenanteil (vdek, 07/2026)"
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
            <Kasten ton="gruen" titel="Bayern-Vorteil: Landespflegegeld 500 €/Jahr">
              <Text>Bayern zahlt zusätzlich 500 €/Jahr (ca. 42 €/Monat) ab Pflegegrad 2, wenn der Hauptwohnsitz in Bayern liegt (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern) — kumulierbar mit allen Pflegekasse-Zuschüssen.</Text>
            </Kasten>
            <Kasten titel="Bei Primundus warten Sie nicht auf ein Angebot">
              <Text>Nach wenigen Angaben zur Pflegesituation sehen Sie Ihren konkreten Preis — und die Betreuungskräfte, die dafür in Frage kommen.</Text>
            </Kasten>
            <RechnerKasten src="ort-muenchen" />
          </Abschnitt>

          <OrtWerkzeuge ohneWohnen ort={'München'} land={'Bayern'} altbau={51.6} miete={12.89} titel="Zuschüsse und Rechner: was die Pflegekasse dazugibt" />

          <OrtPassendeKraft />

          <OrtWarumPrimundus ort="München" />

          <OrtErsteTage ort="München" />

          <OrtStimmen
            ort={'München'}
            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260823-michael', 'k-20260416-barbara', 'k-20251020-christine', 'k-20241106-verena'].includes(b.id))}
          />

          <Abschnitt id="einzugsgebiet-muenchen" titel="Einzugsgebiet München">
            <Text>Schwabing, Bogenhausen, Solln, Pullach, Grünwald, Unterhaching, Ottobrunn, Haar, Dachau, Freising, Starnberg, Germering, Gauting, Weilheim, Landsberg am Lech und alle Gemeinden im Landkreis München.</Text>
            <NearbyCities current="muenchen" />
          </Abschnitt>

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in München">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <OrtBeratung
            slug="muenchen"
            ort="München"
            id="beratung-muenchen"
            eigene={
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
            }
          />
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
