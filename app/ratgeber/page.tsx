import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, Gruppen, Punkte, RatgeberKopf, RatgeberRumpf } from '@/components/vorlage/Ratgeber'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ratgeber-Übersicht in der Seitenvorlage (19.09.2026, Muster /finanzierung). Sieben Themen mit je drei Artikeln wie bisher,
// jetzt als Linienliste statt Karten mit Symbolen. Die fünf Fragen standen bisher nur in den Daten für Google; jetzt sichtbar
// und korrigiert (kein „Rund-um-die-Uhr", Deutschkenntnisse statt „Qualifikation", Anbieter statt „Agentur").

export const metadata: Metadata = {
  title: 'Ratgeber 24h-Pflege 2026 — alle Themen für Angehörige',
  description: 'Alle Themen rund um 24-Stunden-Pflege: Pflegegrade, Finanzierung, Kosten, Rechtliches und Unterstützung für pflegende Angehörige. Aktuell 2026.',
  alternates: {
    canonical: 'https://primundus.de/ratgeber',
  },
  openGraph: {
    title: 'Ratgeber 24h-Pflege | Primundus',
    description: 'Alle Themen rund um 24-Stunden-Pflege: Pflegegrade, Finanzierung, Organisation, Krankheiten, Alltag, Rechtliches und Unterstützung für Angehörige.',
    url: 'https://primundus.de/ratgeber',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Was kostet eine 24-Stunden-Pflegekraft im Monat?',
    a: 'Eine 24-Stunden-Betreuung kostet bei Primundus ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen der Betreuungskraft. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro im Monat selbst zu tragen.',
  },
  {
    q: 'Welcher Pflegegrad ist für 24-Stunden-Pflege erforderlich?',
    a: 'Keiner: Eine Betreuungskraft können Sie auch ohne Pflegegrad beauftragen. Pflegegeld und Entlastungsbudget gibt es ab Pflegegrad 2, und je höher der Pflegegrad, desto mehr zahlt die Pflegekasse. Bei Pflegegrad 5 bleiben ab ca. 582 Euro im Monat selbst zu tragen.',
  },
  {
    q: 'Wie finde ich einen seriösen Anbieter für 24-Stunden-Pflege?',
    a: 'Achten Sie auf vier Dinge: eine A1-Bescheinigung für jede Betreuungskraft, Preis und Betreuungskraft vor dem Vertrag, klare Regeln im Vertrag zu An- und Abreise, Ersatz bei Krankheit, Feiertagen und Kündigung, und keine Vermittlungsgebühr oder Anzahlung.',
  },
  {
    q: 'Kann ich 24-Stunden-Pflege steuerlich absetzen?',
    a: 'Ja. 20 Prozent der Kosten können Sie als haushaltsnahe Dienstleistung von der Steuer abziehen, höchstens 4.000 Euro im Jahr. Bei anerkannter Pflegebedürftigkeit gibt es weitere Abzugsmöglichkeiten.',
  },
  {
    q: 'Was ist der Unterschied zwischen Pflegegeld und Pflegesachleistung?',
    a: 'Pflegegeld zahlt die Pflegekasse an den Pflegebedürftigen, wenn die Pflege zu Hause selbst organisiert ist, mit Angehörigen oder einer Betreuungskraft. Pflegesachleistungen rechnet die Kasse direkt mit einem zugelassenen Pflegedienst ab. Bei der 24-Stunden-Pflege mit Betreuungskraft ist es das Pflegegeld.',
  },
]

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber 24h-Pflege', item: 'https://primundus.de/ratgeber' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
])

const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-ratgeber'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'themen', title: 'Alle Themen' },
  { id: 'werkzeuge', title: 'Werkzeuge' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export default function RatgeberPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Ratgeber' },
          ]}
          augenbraue="Ratgeber"
          titel="Ratgeber 24-Stunden-Pflege"
          einleitung="Antworten auf die Fragen, die Familien vor und während einer 24-Stunden-Pflege stellen: Pflegegrade, Finanzierung, Organisation, Krankheiten, Alltag und Recht."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="themen" titel="Alle Themen">
            <Gruppen
              gruppen={[
                { title: l('/pflegegrade', 'Pflegegrade'), zusatz: 'Pflegegrad beantragen, erhöhen und verstehen', punkte: [l('/pflegegrad-beantragen', 'Pflegegrad beantragen'), l('/pflegegrad-erhoehen', 'Pflegegrad erhöhen'), l('/pflegegrad-begutachtung-vorbereiten', 'Begutachtung vorbereiten'), l('/pflegegrade', 'Alle Artikel zum Thema')] },
                { title: l('/finanzierung', 'Finanzierung & Zuschüsse'), zusatz: 'Pflegegeld, Entlastungsbudget, Steuer & Sozialhilfe', punkte: [l('/pflegegeld', 'Pflegegeld'), l('/entlastungsbetrag', 'Entlastungsbetrag'), l('/pflege-steuerlich-absetzen', 'Steuerlich absetzen'), l('/finanzierung', 'Alle Artikel zum Thema')] },
                { title: l('/organisation', 'Organisation'), zusatz: 'Pflegekraft finden, Vertrag, Wechsel & Alltag', punkte: [l('/pflegekraft-finden', 'Pflegekraft finden'), l('/ablauf', 'Ablauf & Prozess'), l('/pflegevertrag-aufsetzen', 'Pflegevertrag aufsetzen'), l('/organisation', 'Alle Artikel zum Thema')] },
                { title: l('/krankheiten', 'Pflege bei Krankheiten'), zusatz: 'Demenz, Alzheimer, Parkinson, Schlaganfall & mehr', punkte: [l('/demenz-pflege-zuhause', 'Demenz'), l('/alzheimer-betreuung-zuhause', 'Alzheimer'), l('/parkinson-pflege-zuhause', 'Parkinson'), l('/krankheiten', 'Alle Artikel zum Thema')] },
                { title: l('/alltag', 'Alltag & Betreuung'), zusatz: 'Bewegung, Ernährung, Beschäftigung & Sturzprävention', punkte: [l('/beschaeftigung-senioren-zuhause', 'Beschäftigung Senioren'), l('/ernaehrung-pflegebeduerftige-senioren', 'Ernährung'), l('/sturzpraevention-senioren', 'Sturzprävention'), l('/alltag', 'Alle Artikel zum Thema')] },
                { title: l('/rechtliches', 'Rechtliches & Vorsorge'), zusatz: 'Patientenverfügung, Vollmacht & rechtliche Absicherung', punkte: [l('/patientenverfuegung-aufsetzen', 'Patientenverfügung'), l('/vorsorgevollmacht-erstellen', 'Vorsorgevollmacht'), l('/betreuungsverfuegung-erstellen', 'Betreuungsverfügung'), l('/rechtliches', 'Alle Artikel zum Thema')] },
                { title: l('/24h-pflege-fuer-angehoerige', 'Für Angehörige'), zusatz: 'Pflege koordinieren, Belastung erkennen & Unterstützung finden', punkte: [l('/pflege-und-beruf-vereinbaren', 'Pflege und Beruf'), l('/burnout-pflegende-angehoerige', 'Burnout Angehörige'), l('/pflege-aus-der-ferne-koordinieren', 'Pflege aus der Ferne'), l('/24h-pflege-fuer-angehoerige', 'Alle Artikel zum Thema')] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="werkzeuge" titel="Werkzeuge">
            <Punkte
              punkte={[
                { title: l(RECHNER, 'Kostenrechner'), desc: 'Ihr Monatspreis und passende Pflegekräfte in 2 Minuten, ohne Kontaktdaten.' },
                { title: l('/pflegegrad-rechner', 'Pflegegrad-Rechner'), desc: 'Eine erste Einschätzung, welcher Pflegegrad in Frage kommt.' },
                { title: l('/tools', 'Alle Werkzeuge'), desc: 'Rechner, Vorlagen und Checklisten für Ihre Pflegesituation.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur 24-Stunden-Pflege">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
