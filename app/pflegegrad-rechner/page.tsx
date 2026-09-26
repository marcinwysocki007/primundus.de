import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Sicher } from '@/components/Sicher'
import {
  Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ModulGewichte, PflegegradSkala } from '@/components/grafik/Grafik'
import { PflegegradRechner } from '@/components/werkzeuge/PflegegradRechner'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'

// Pflegegrad-Rechner, neu gebaut am 20.09.2026 (Martin: „bestmöglichen Content liefern, um auf die Top-3-Positionen zu kommen").
// Der alte Rechner hatte fünf Module mit 15 gleich gewichteten Fragen und behauptete „dieselbe Gewichtung wie der Gutachter".
// Neu: das Begutachtungsinstrument selbst (§ 15 SGB XI, Anlage 1 und 2): 64 Kriterien in sechs Modulen, amtliche Einzelpunkte,
// Punktbereiche und Gewichtung, Kinder-Regeln (§ 15 Abs. 6 und 7), besondere Bedarfskonstellation (Abs. 4).
// Grundlage: Search Console (Seite auf Position 35 bei 1.329 Impressionen ohne Klick; Suchen zu Kindern/ADHS), Keyword-Planer
// („pflegegrad rechner" 12.100, „pflegegrad berechnen" 2.900, „… kostenlos" 2.400, „pflegegrad punkte tabelle" 1.600,
// „pflegegrad tabelle" 1.600, „pflegegrad punkte" 1.000, „pflegegrad einstufung" 1.000 im Monat), Googles Fragen („Wie berechnet
// man den Pflegegrad für ein Kind mit ADHS?", „Wie viel Geld gibt es bei Pflegegrad 1 bis 5?", „Wann Pflegestufe beantragen bei
// Krebserkrankung?", „Welche Pflegegrade gibt es bei Rheuma?") und die Autovervollständigung (ohne Anmeldung, ohne E-Mail, sofort,
// Kinder, Höherstufung, ausdrucken/PDF, mit Erklärung, Module, Punkte). Die Seiten auf Platz 1–8 haben 50–930 Wörter Text; dort
// gewinnt das Werkzeug. Leistungsbeträge aus lib/fakten.ts; Fristen nach § 18c und § 33 SGB XI (gelesen 20.09.2026).

const AKTUALISIERT = aktualisiertAm('pflegegrad-rechner', '20. September 2026')
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

const SECTIONS = [
  { id: 'rechner', title: 'Pflegegrad berechnen' },
  { id: 'so-rechnet', title: 'So rechnet der Gutachter' },
  { id: 'punkte-tabelle', title: 'Pflegegrad-Tabelle: Punkte' },
  { id: 'leistungen', title: 'Leistungen je Pflegegrad' },
  { id: 'kinder', title: 'Pflegegrad bei Kindern' },
  { id: 'diagnosen', title: 'Demenz, Krebs, Rheuma & Co.' },
  { id: 'vorbereitung', title: 'Begutachtung vorbereiten' },
  { id: 'bescheid', title: 'Widerspruch und Höherstufung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad-Rechner 2026: Pflegegrad berechnen, ohne E-Mail',
  description:
    'Die 64 Fragen des Medizinischen Dienstes, sechs Module, amtliche Punkte, Ergebnis sofort. Kostenlos, ohne Anmeldung, auch für Kinder.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-rechner' },
  openGraph: {
    title: 'Pflegegrad-Rechner 2026: Pflegegrad berechnen, ohne E-Mail',
    description: 'Alle 64 Fragen der Begutachtung, amtliche Punkte, Ergebnis sofort. Kostenlos, ohne Anmeldung, auch für Kinder.',
    url: 'https://primundus.de/pflegegrad-rechner',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Wie viele Punkte brauche ich für welchen Pflegegrad?',
    a: 'Die Begutachtung ergibt 0 bis 100 Punkte. Ab 12,5 Punkten gibt es Pflegegrad 1, ab 27 Pflegegrad 2, ab 47,5 Pflegegrad 3, ab 70 Pflegegrad 4 und ab 90 Punkten Pflegegrad 5. Unter 12,5 Punkten wird kein Pflegegrad anerkannt. Kinder bis 18 Monate werden mit denselben Punkten eine Stufe höher eingestuft.',
  },
  {
    q: 'Kann ich den Pflegegrad selbst berechnen?',
    a: 'Sie können ihn gut einschätzen, entscheiden kann ihn nur die Pflegekasse nach der Begutachtung. Unser Rechner stellt dieselben 64 Fragen wie der Gutachter und rechnet mit den amtlichen Punkten aus Anlage 1 und 2 zu § 15 SGB XI. Weil jede Einschätzung Ermessensspielraum hat, ist das Ergebnis ein belastbarer Hinweis, kein Bescheid.',
  },
  {
    q: 'Ist der Pflegegrad-Rechner kostenlos und anonym?',
    a: 'Ja. Es gibt keine Anmeldung und keine E-Mail-Adresse. Ihre Antworten bleiben auf Ihrem Gerät; wir speichern und senden nichts. Das Ergebnis sehen Sie sofort und können es drucken oder als PDF sichern.',
  },
  {
    q: 'Wie berechnet man den Pflegegrad für ein Kind mit ADHS?',
    a: 'Mit demselben Rechner, aber im Vergleich zu einem gesunden Kind gleichen Alters: Es zählt nur, was Gleichaltrige schon allein können. Bei ADHS liegen die Punkte meist in Modul 2 (mehrschrittige Handlungen steuern, Gefahren erkennen), Modul 3 (motorische Unruhe, Abwehr, sozial unpassendes Verhalten) und Modul 6 (Tagesablauf, Beschäftigung, Kontakte). Wählen Sie im Rechner „Kind ab 18 Monaten".',
  },
  {
    q: 'Wie viel Geld gibt es bei Pflegegrad 1 bis 5?',
    a: `Pflegegeld gibt es ab Pflegegrad 2: ${euro(PFLEGEGELD[2])} (Pflegegrad 2), ${euro(PFLEGEGELD[3])} (3), ${euro(PFLEGEGELD[4])} (4) und ${euro(PFLEGEGELD[5])} (5) im Monat. Dazu kommen der Entlastungsbetrag von ${euro(ENTLASTUNGSBETRAG)} im Monat ab Pflegegrad 1, Pflegesachleistungen für einen Pflegedienst bis ${euro(PFLEGESACHLEISTUNGEN[5])} und das Entlastungsbudget von ${euro(ENTLASTUNGSBUDGET)} im Jahr ab Pflegegrad 2.`,
  },
  {
    q: 'Wann sollte man bei einer Krebserkrankung den Pflegegrad beantragen?',
    a: 'Sobald die Erkrankung oder die Behandlung den Alltag auf Dauer einschränkt, voraussichtlich für mindestens sechs Monate. Stellen Sie den Antrag früh: Leistungen gibt es ab dem Monat der Antragstellung, nicht erst ab dem Bescheid. Im Krankenhaus oder Hospiz gelten verkürzte Begutachtungsfristen.',
  },
  {
    q: 'Welchen Pflegegrad gibt es bei Rheuma?',
    a: 'Keinen festen. Der Pflegegrad hängt nicht von der Diagnose ab, sondern davon, wie viel Hilfe im Alltag nötig ist. Bei Rheuma zählen meist Mobilität (Aufstehen, Treppen), Selbstversorgung (Knöpfe schließen, Waschen, Essen schneiden) und Modul 5 (Medikamente, Spritzen, Arztbesuche). Der Rechner zeigt, wie viele Punkte das ergibt.',
  },
  {
    q: 'Bekommt man bei Demenz einen Pflegegrad, auch wenn körperlich alles geht?',
    a: 'Ja. Die Module 2 und 3 bewerten Orientierung, Erinnern, nächtliche Unruhe und Ängste unabhängig davon, ob jemand noch gut laufen kann. Dazu kommt oft Modul 4: Waschen und Anziehen sind körperlich möglich, finden aber ohne Anleitung nicht mehr zuverlässig statt. Das zählt als „überwiegend unselbständig".',
  },
  {
    q: 'Wie wird der Pflegegrad berechnet?',
    a: 'In sechs Modulen mit insgesamt 64 Kriterien vergibt der Gutachter Einzelpunkte. Jede Modulsumme wird einem von fünf Punktbereichen zugeordnet und in gewichtete Punkte umgerechnet: Mobilität 10 %, Kognition und Verhalten zusammen 15 % (nur das höhere Modul zählt), Selbstversorgung 40 %, Umgang mit Krankheit 20 %, Alltag und Kontakte 15 %. Die Summe von 0 bis 100 ergibt den Pflegegrad.',
  },
  {
    q: 'Wie beantrage ich den Pflegegrad?',
    a: 'Formlos bei der Pflegekasse, die zu Ihrer Krankenkasse gehört, schriftlich oder telefonisch. Die Kasse beauftragt den Medizinischen Dienst (gesetzlich Versicherte) oder Medicproof (privat Versicherte) mit der Begutachtung und muss spätestens 25 Arbeitstage nach dem Antrag entscheiden. Bei Verzögerung stehen Ihnen 70 € je angefangene Woche zu.',
  },
  {
    q: 'Gilt der Pflegegrad rückwirkend?',
    a: 'Die Leistungen gibt es ab dem Tag der Antragstellung. Wird der Antrag erst nach dem Monat gestellt, in dem die Pflegebedürftigkeit begonnen hat, zählt der Beginn des Antragsmonats. Deshalb lohnt es sich, den Antrag zu stellen, sobald Hilfe nötig ist.',
  },
  {
    q: 'Was tun, wenn der Bescheid einen niedrigeren Pflegegrad nennt?',
    a: 'Innerhalb eines Monats schriftlich Widerspruch einlegen und das Gutachten anfordern. Vergleichen Sie das Gutachten Punkt für Punkt mit Ihrem Pflegetagebuch und dem Ergebnis dieses Rechners, und begründen Sie den Widerspruch mit konkreten Situationen. Der Bescheid gilt bis zur Entscheidung weiter.',
  },
  {
    q: 'Was ist der Unterschied zwischen Pflegestufe und Pflegegrad?',
    a: 'Die drei Pflegestufen wurden 2017 durch fünf Pflegegrade ersetzt. Seitdem zählt nicht mehr die Minutenzahl der Hilfe, sondern die Selbständigkeit in sechs Lebensbereichen. Geistige und psychische Einschränkungen, zum Beispiel bei Demenz, zählen gleichwertig mit körperlichen.',
  },
  {
    q: 'Kann ich das Ergebnis ausdrucken oder als PDF speichern?',
    a: 'Ja. Der Knopf „Ergebnis drucken oder als PDF sichern" druckt den Pflegegrad, die Punkte je Modul und alle Ihre Antworten als Fragebogen. Wählen Sie im Druckfenster „Als PDF sichern". Der Ausdruck ist eine gute Vorbereitung auf den Termin mit dem Gutachter.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pflegegrad-Rechner',
    url: 'https://primundus.de/pflegegrad-rechner',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    description: 'Pflegegrad berechnen mit den 64 Kriterien des Begutachtungsinstruments nach § 15 SGB XI: sechs Module, amtliche Punkte, Ergebnis sofort, ohne Anmeldung.',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-01-15',
    dateModified: AKTUALISIERT.iso,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Tools & Rechner', item: 'https://primundus.de/tools' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad-Rechner', item: 'https://primundus.de/pflegegrad-rechner' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>
const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export default function PflegegradRechnerSeite() {
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
            { label: 'Tools & Rechner', href: '/tools' },
            { label: 'Pflegegrad-Rechner' },
          ]}
          augenbraue="Pflegegrad-Rechner 2026"
          titel="Pflegegrad berechnen: der Rechner mit den Fragen des Medizinischen Dienstes"
          einleitung="Der Pflegegrad-Rechner stellt dieselben 64 Fragen wie der Gutachter, rechnet mit den amtlichen Punkten aus § 15 SGB XI und zeigt sofort den Pflegegrad, die Punkte je Modul und die Leistungen 2026. Kostenlos, ohne Anmeldung, auch für Kinder."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="9 Min."
          blick={[
            'Alle 64 Fragen der Begutachtung in sechs Modulen, mit Erklärung',
            'Amtliche Punkte und Gewichtung nach Anlage 1 und 2 zu § 15 SGB XI',
            'Ergebnis sofort, ohne E-Mail; nichts wird gespeichert',
            'Auch für Kinder; Vergleich mit dem bisherigen Pflegegrad',
            'Ergebnis mit allen Antworten drucken oder als PDF sichern',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="rechner" titel="Pflegegrad berechnen: 64 Fragen, Ergebnis sofort">
            <Text>
              Der Rechner geht die sechs Module des Begutachtungsinstruments durch, so wie der Gutachter des Medizinischen Dienstes bei
              seinem Besuch. Sie brauchen etwa zehn Minuten. Markieren Sie nur, wo die Person Hilfe braucht; alles andere bleibt auf
              „selbständig".
            </Text>
            <Sicher name="Pflegegrad-Rechner" fallback={<Kasten><Text>Der Rechner lädt gerade nicht. Laden Sie die Seite neu; die Punktetabelle unten zeigt die Grenzen der Pflegegrade.</Text></Kasten>}>
              <PflegegradRechner />
            </Sicher>
          </Abschnitt>

          <Abschnitt id="so-rechnet" titel="So rechnet der Gutachter: sechs Module, 100 Punkte">
            <Text>
              Seit 2017 zählt nicht mehr, wie viele Minuten Hilfe jemand braucht, sondern wie selbständig er in sechs Lebensbereichen
              ist. Für jedes der 64 Kriterien vergibt der Gutachter Einzelpunkte. Die Summe je Modul wird einem von fünf Punktbereichen
              zugeordnet, von „keine" bis „schwerste Beeinträchtigung", und daraus werden gewichtete Punkte. Ihre Summe ergibt den
              Pflegegrad.
            </Text>
            <ModulGewichte />
            <Punkte
              punkte={[
                { title: 'Modul 1: Mobilität (5 Kriterien, 10 %)', desc: 'Positionswechsel im Bett, Sitzen, Umsetzen, Gehen in der Wohnung, Treppensteigen. Höchstens 15 Einzelpunkte.' },
                { title: 'Modul 2: Kognitive und kommunikative Fähigkeiten (11 Kriterien)', desc: 'Personen erkennen, Orientierung, Erinnern, Handlungen steuern, Entscheidungen, Gefahren erkennen, sich verständigen. Höchstens 33 Einzelpunkte.' },
                { title: 'Modul 3: Verhaltensweisen und psychische Problemlagen (13 Kriterien)', desc: 'Nächtliche Unruhe, Aggression, Abwehr von Pflege, Wahn, Ängste, Antriebslosigkeit; bewertet nach Häufigkeit mit 0, 1, 3 oder 5 Punkten. Von Modul 2 und 3 zählt nur das höhere, zusammen 15 %.' },
                { title: 'Modul 4: Selbstversorgung (13 Kriterien, 40 %)', desc: 'Waschen, Körperpflege, Anziehen, Essen, Trinken, Toilette, Inkontinenz, Sondenernährung. Essen zählt dreifach, Trinken und Toilette doppelt. Höchstens 54 Einzelpunkte.' },
                { title: 'Modul 5: Umgang mit Krankheit und Therapie (16 Kriterien, 20 %)', desc: 'Medikamente, Spritzen, Verbände, Messungen, Arzt- und Therapiebesuche, Diät; gezählt wird, wie oft Hilfe nötig ist. Höchstens 15 Einzelpunkte.' },
                { title: 'Modul 6: Alltagsleben und soziale Kontakte (6 Kriterien, 15 %)', desc: 'Tagesablauf, Schlafen, Beschäftigung, Planen, Kontakt im Haus und nach außen. Höchstens 18 Einzelpunkte.' },
              ]}
            />
            <Kasten augenbraue="Die vier Stufen" titel={'Was „überwiegend selbständig" und „überwiegend unselbständig" unterscheidet'}>
              <Text>
                <strong>Selbständig:</strong> Die Person schafft es allein, auch mit Hilfsmitteln oder langsam. <strong>Überwiegend selbständig:</strong> Es
                reicht wenig Hilfe, etwa etwas zurechtlegen, erinnern oder kurz beaufsichtigen. <strong>Überwiegend unselbständig:</strong> Andere
                übernehmen den größeren Teil, die Person macht noch mit. <strong>Unselbständig:</strong> Andere übernehmen fast alles.
              </Text>
              <Text>
                Dass die Selbstversorgung 40 Prozent wiegt, überrascht viele Familien. Wer beim Waschen, Anziehen und Essen dauerhaft Hilfe braucht,
                kommt deshalb oft in einen höheren Pflegegrad als erwartet. Eine reine Gehbehinderung reicht dagegen selten: Mobilität zählt nur 10 Prozent.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="punkte-tabelle" titel="Pflegegrad-Tabelle: ab wie vielen Punkten welcher Pflegegrad">
            <Text>
              Die Gesamtpunkte liegen zwischen 0 und 100. Die Grenzen stehen in § 15 Abs. 3 SGB XI. Kinder bis 18 Monate werden nach Abs. 7 eine Stufe höher
              eingestuft, bei denselben Punkten.
            </Text>
            <PflegegradSkala />
            <Tabelle
              titel="Anlage 2: Einzelpunkte je Modul und die gewichteten Punkte"
              kopf={['Modul', 'keine', 'geringe', 'erhebliche', 'schwere', 'schwerste']}
              zeilen={[
                ['Mobilität (Summe)', '0–1', '2–3', '4–5', '6–9', '10–15'],
                ['→ gewichtet', '0', '2,5', '5', '7,5', '10'],
                ['Kognition (Summe)', '0–1', '2–5', '6–10', '11–16', '17–33'],
                ['Verhalten (Summe)', '0', '1–2', '3–4', '5–6', '7–65'],
                ['→ gewichtet (höherer Wert)', '0', '3,75', '7,5', '11,25', '15'],
                ['Selbstversorgung (Summe)', '0–2', '3–7', '8–18', '19–36', '37–54'],
                ['→ gewichtet', '0', '10', '20', '30', '40'],
                ['Krankheit und Therapie (Summe)', '0', '1', '2–3', '4–5', '6–15'],
                ['→ gewichtet', '0', '5', '10', '15', '20'],
                ['Alltag und Kontakte (Summe)', '0', '1–3', '4–6', '7–11', '12–18'],
                ['→ gewichtet', '0', '3,75', '7,5', '11,25', '15'],
              ]}
              fuss={'Punktbereiche 0 bis 4 nach Anlage 2 zu § 15 SGB XI. Beispiel: 21 Punkte in der Selbstversorgung liegen im Bereich „schwere Beeinträchtigung" und ergeben 30 gewichtete Punkte.'}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Was Sie mit welchem Pflegegrad bekommen (2026)">
            <Text>
              Mit dem Pflegegrad stehen die Leistungen der Pflegekasse fest. Pflegegeld gibt es ab Pflegegrad 2, wenn Angehörige oder eine Betreuungskraft
              zu Hause pflegen. Pflegesachleistungen zahlt die Kasse nur an zugelassene Pflegedienste. Der Entlastungsbetrag steht schon ab Pflegegrad 1 zu.
            </Text>
            <Tabelle
              titel="Leistungen je Pflegegrad, Stand 2026"
              kopf={['Leistung', 'PG 1', 'PG 2', 'PG 3', 'PG 4', 'PG 5']}
              zeilen={[
                ['Pflegegeld im Monat', '–', euro(PFLEGEGELD[2]), euro(PFLEGEGELD[3]), euro(PFLEGEGELD[4]), euro(PFLEGEGELD[5])],
                ['Pflegesachleistungen im Monat', '–', euro(PFLEGESACHLEISTUNGEN[2]), euro(PFLEGESACHLEISTUNGEN[3]), euro(PFLEGESACHLEISTUNGEN[4]), euro(PFLEGESACHLEISTUNGEN[5])],
                ['Entlastungsbetrag im Monat', euro(ENTLASTUNGSBETRAG), euro(ENTLASTUNGSBETRAG), euro(ENTLASTUNGSBETRAG), euro(ENTLASTUNGSBETRAG), euro(ENTLASTUNGSBETRAG)],
                ['Entlastungsbudget im Jahr', '–', euro(ENTLASTUNGSBUDGET), euro(ENTLASTUNGSBUDGET), euro(ENTLASTUNGSBUDGET), euro(ENTLASTUNGSBUDGET)],
                ['Pflegehilfsmittel im Monat', '42 €', '42 €', '42 €', '42 €', '42 €'],
                ['Wohnumfeld je Maßnahme', '4.180 €', '4.180 €', '4.180 €', '4.180 €', '4.180 €'],
              ]}
              betont={[2, 3, 4, 5]}
              fuss="§§ 36, 37, 40, 42a, 45b SGB XI. Das Entlastungsbudget fasst seit Juli 2025 Verhinderungs- und Kurzzeitpflege zusammen."
            />
            <MehrDazu
              label="Mehr zu den Pflegegraden:"
              links={[
                { href: '/pflegegrade', text: 'Alle Pflegegrade im Überblick' },
                { href: '/pflegegrad-1', text: 'Pflegegrad 1' },
                { href: '/pflegegrad-2', text: 'Pflegegrad 2' },
                { href: '/pflegegrad-3', text: 'Pflegegrad 3' },
                { href: '/pflegegrad-4', text: 'Pflegegrad 4' },
                { href: '/pflegegrad-5', text: 'Pflegegrad 5' },
                { href: '/pflegegeld', text: 'Pflegegeld 2026' },
                { href: '/zuschuss-rechner', text: 'Zuschuss-Rechner' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kinder" titel="Pflegegrad bei Kindern: ADHS, Autismus, Frühgeborene">
            <Text>
              Kinder werden mit demselben Instrument begutachtet, aber im Vergleich zu gesund entwickelten Kindern gleichen Alters (§ 15 Abs. 6 SGB XI).
              Es zählt nur die Hilfe, die ein gleichaltriges Kind nicht mehr bräuchte. Ein Dreijähriger, der sich nicht allein anzieht, bekommt dafür keine
              Punkte; ein Zehnjähriger schon.
            </Text>
            <Punkte
              punkte={[
                { title: 'Kinder bis 18 Monate', desc: 'Statt der 13 Kriterien zur Selbstversorgung gibt es eine Frage: Bestehen gravierende Probleme bei der Nahrungsaufnahme (20 Punkte)? Die Gesamtpunkte ergeben einen Pflegegrad höher als bei Erwachsenen: ab 12,5 Punkten Pflegegrad 2, ab 70 Punkten Pflegegrad 5 (§ 15 Abs. 7).' },
                { title: 'ADHS und Autismus', desc: 'Die Punkte entstehen meist in Modul 2 (mehrschrittige Handlungen steuern, Gefahren erkennen, Aufforderungen verstehen), Modul 3 (motorische Unruhe, Abwehr, sozial unpassendes Verhalten, Ängste) und Modul 6 (Tagesablauf, Beschäftigung, Kontakte). Auch Frühförderung und Therapiebesuche zählen in Modul 5.' },
                { title: 'Chronisch kranke Kinder', desc: 'Diabetes, Epilepsie, Mukoviszidose oder Herzfehler bringen Punkte vor allem in Modul 5: Medikamente, Messungen, Injektionen, Therapien und Diät, die das Kind nicht selbst übernehmen kann.' },
              ]}
            />
            <Text>
              Wählen Sie im Rechner „Kind ab 18 Monaten" oder „Kind bis 18 Monate". Dann erscheint das Kriterium 5.K für Besuche der Frühförderung, und der
              Pflegegrad folgt den Kinder-Regeln.
            </Text>
          </Abschnitt>

          <Abschnitt id="diagnosen" titel="Demenz, Parkinson, Schlaganfall, Krebs, Rheuma: Die Diagnose zählt nicht, die Selbständigkeit">
            <Text>
              Einen Pflegegrad „für Demenz" oder „für Krebs" gibt es nicht. Der Gutachter fragt bei jedem Kriterium nur: Was schafft die Person allein, wobei
              braucht sie Hilfe? Voraussetzung ist, dass die Einschränkung auf Dauer besteht, voraussichtlich für mindestens sechs Monate (§ 14 SGB XI).
              Trotzdem verteilen sich die Punkte je nach Krankheit typisch:
            </Text>
            <Punkte
              punkte={[
                { title: 'Demenz und Alzheimer', desc: <>Modul 2 und 3 (Orientierung, Erinnern, nächtliche Unruhe, Abwehr) und Modul 4, weil Waschen und Anziehen ohne Anleitung nicht mehr zuverlässig stattfinden. Mehr dazu: {l('/pflegegrad-bei-demenz', 'Pflegegrad bei Demenz')}.</> },
                { title: 'Parkinson', desc: <>Mobilität (Aufstehen, Umsetzen, Gehen), Selbstversorgung (Knöpfe, Essen schneiden, Essen) und Modul 5 (Medikamente zu festen Zeiten, Therapien). Mehr dazu: {l('/pflegegrad-bei-parkinson', 'Pflegegrad bei Parkinson')}.</> },
                { title: 'Schlaganfall', desc: <>Mobilität und Selbstversorgung bei Lähmungen, Modul 2 bei Sprach- und Verständnisstörungen, Modul 5 bei Therapien zu Hause. Mehr dazu: {l('/pflegegrad-nach-schlaganfall', 'Pflegegrad nach Schlaganfall')}.</> },
                { title: 'Krebs', desc: 'Während Chemotherapie oder Bestrahlung oft Modul 5 (Injektionen, Port, ausgedehnte Behandlungsbesuche, Diät), bei Schwäche Modul 1 und 4. Antrag stellen, sobald der Alltag auf Dauer eingeschränkt ist; im Krankenhaus oder Hospiz gelten verkürzte Fristen.' },
                { title: 'Rheuma, Arthrose, COPD, Herzschwäche', desc: 'Mobilität (Treppen, Aufstehen), Selbstversorgung (Waschen, Anziehen, Schuhe) und Modul 5 (Medikamente, Spritzen, Sauerstoff, Messungen, Arztbesuche).' },
                { title: 'Depression und andere psychische Erkrankungen', desc: <>Modul 3 (Antriebslosigkeit, Ängste, Abwehr), Modul 6 (Tagesablauf, Kontakte) und Modul 4, wenn Körperpflege und Essen ohne Anstoß unterbleiben. Auch ohne klare Diagnose ist ein Pflegegrad möglich.</> },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vorbereitung" titel="So bereiten Sie die Begutachtung vor">
            <Text>
              Der Gutachter sieht die Person eine Stunde lang, meist an einem guten Tag. Was er nicht sieht, muss er hören oder lesen. Diese sechs Schritte
              machen den Unterschied:
            </Text>
            <Schritte
              schritte={[
                { title: 'Antrag bei der Pflegekasse stellen', desc: 'Formlos, schriftlich oder telefonisch bei der Pflegekasse Ihrer Krankenkasse. Ab diesem Tag laufen die Leistungen und die Frist von 25 Arbeitstagen.' },
                { title: 'Rechner ausfüllen und drucken', desc: 'Gehen Sie die 64 Fragen oben in Ruhe durch und drucken Sie das Ergebnis mit allen Antworten. So haben Sie jedes Kriterium vor Augen, das der Gutachter abfragt.' },
                { title: 'Zwei Wochen Pflegetagebuch führen', desc: 'Notieren Sie täglich, wobei Hilfe nötig war, wie oft und wie lange, auch nachts. Konkrete Situationen überzeugen mehr als allgemeine Sätze.' },
                { title: 'Unterlagen bereitlegen', desc: 'Arztberichte, Krankenhausentlassungen, Medikamentenplan, Liste der Hilfsmittel, Bescheide über Schwerbehinderung.' },
                { title: 'Nicht allein zum Termin', desc: 'Ein Angehöriger oder der Pflegedienst sollte dabei sein und ergänzen. Viele Pflegebedürftige stellen sich vor Fremden besser dar, als es ihnen geht.' },
                { title: 'Ehrlich beschreiben, auch die schlechten Tage', desc: 'Nichts beschönigen und nichts übertreiben. Sagen Sie, was an schlechten Tagen nicht geht, und zeigen Sie, wo es hakt: die Treppe, das Bad, die Tabletten.' },
              ]}
            />
            <MehrDazu
              label="Ausführlich:"
              links={[
                { href: '/pflegegrad-beantragen', text: 'Pflegegrad beantragen: Schritt für Schritt' },
                { href: '/pflegegrad-begutachtung-vorbereiten', text: 'Begutachtung vorbereiten' },
                { href: '/mdk-begutachtung-tipps', text: 'Tipps für den Termin mit dem Medizinischen Dienst' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="bescheid" titel="Bescheid zu niedrig? Widerspruch und Höherstufung">
            <Text>
              Die Pflegekasse muss spätestens 25 Arbeitstage nach dem Antrag entscheiden; sonst stehen Ihnen 70 € für jede angefangene Woche Verzögerung zu
              (§ 18c SGB XI). Fällt der Pflegegrad niedriger aus als erwartet, haben Sie einen Monat Zeit für den Widerspruch.
            </Text>
            <Punkte
              punkte={[
                { title: 'Widerspruch innerhalb eines Monats', desc: <>Schriftlich bei der Pflegekasse, zunächst ohne Begründung, damit die Frist gewahrt ist. Fordern Sie das Gutachten an und vergleichen Sie es Kriterium für Kriterium mit Ihrem Pflegetagebuch und dem Ergebnis des Rechners. {l('/widerspruch-pflegekasse-einlegen', 'So legen Sie Widerspruch ein')}.</> },
                { title: 'Höherstufung bei Verschlechterung', desc: <>Braucht die Person mehr Hilfe als beim letzten Gutachten, stellen Sie einen Antrag auf Höherstufung; der Rechner zeigt vorher, ob die Punkte reichen. {l('/pflegegrad-erhoehen', 'Pflegegrad erhöhen')}.</> },
                { title: 'Änderungen melden', desc: 'Ein Krankenhausaufenthalt, ein Umzug ins Heim oder eine neue Pflegeperson: Melden Sie das der Pflegekasse, damit Pflegegeld und Zuschüsse stimmen und nichts zurückgefordert wird.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Pflegegrad-Rechner">
            <Fragen fragen={FRAGEN} />
            <RechnerKasten src="apex-pflegegrad-rechner" />
            <Text>
              Rechtsgrundlagen: <a href="https://www.gesetze-im-internet.de/sgb_11/__15.html" className={QUELLE} rel="noopener" target="_blank">§ 15 SGB XI</a> mit{' '}
              <a href="https://www.gesetze-im-internet.de/sgb_11/anlage_1.html" className={QUELLE} rel="noopener" target="_blank">Anlage 1</a> und{' '}
              <a href="https://www.gesetze-im-internet.de/sgb_11/anlage_2.html" className={QUELLE} rel="noopener" target="_blank">Anlage 2</a>, §§ 14, 18c, 33, 36, 37, 42a, 45b SGB XI,
              gelesen am 20. September 2026.
            </Text>
            <MehrDazu
              label="Weitere Werkzeuge:"
              links={[
                { href: '/pflegebedarf-einschaetzen', text: 'Pflegebedarf einschätzen' },
                { href: '/zuschuss-rechner', text: 'Zuschüsse berechnen' },
                { href: '/vollmacht-generator', text: 'Vorsorgevollmacht erstellen' },
                { href: '/tools', text: 'Alle Rechner und Werkzeuge' },
              ]}
            />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
