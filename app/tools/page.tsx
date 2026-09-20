import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, Punkte, RatgeberKopf, RatgeberRumpf, Schritte } from '@/components/vorlage/Ratgeber'
import { ArticleTOC } from '@/components/ArticleTOC'

// Werkzeug-Übersicht in der Seitenvorlage (19.09.2026, Muster /finanzierung). Der Kostenrechner stand als große Karte oben,
// deshalb Knopf im Kopf. Fragen: sichtbarer Text und Daten für Google waren verschieden, jetzt eine Quelle. Raus: „neutral"
// (wir vergleichen uns selbst), „rechtssicher" bei Vorlagen (ein Generator kann das nicht garantieren), „Angebot anfordern"
// (seit Preis zuerst: Preis und Pflegekräfte ansehen), „Hauptpflegepersonen" beim Pflegegeld (keine Bedingung, § 37 SGB XI).

export const metadata: Metadata = {
  title: 'Kostenlose Pflege-Tools & Rechner 2026 für Angehörige',
  description: 'Kostenloser Pflegegrad-Rechner, Zuschuss-Rechner und 24h-Pflegekostenrechner — alle Tools für Ihre Pflegeplanung 2026. Anonym, kostenlos, sofort nutzbar.',
  alternates: {
    canonical: 'https://primundus.de/tools',
  },
  openGraph: {
    title: 'Kostenlose Pflege-Tools & Rechner 2026 für Angehörige | Primundus',
    description: 'Pflegegrad einschätzen, Zuschüsse berechnen, Kosten vergleichen — alle Werkzeuge für Ihre Pflegeplanung.',
    url: 'https://primundus.de/tools',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Sind die Pflege-Tools wirklich kostenlos?',
    a: 'Ja. Alle Rechner und Vorlagen auf dieser Seite sind kostenlos und ohne Anmeldung nutzbar.',
  },
  {
    q: 'Wie genau ist der Pflegegrad-Rechner?',
    a: 'Er fragt die Bereiche ab, nach denen der Medizinische Dienst begutachtet (Neues Begutachtungsassessment), und gibt eine erste Einschätzung. Er ersetzt kein Gutachten: Die Einstufung nimmt der Medizinische Dienst oder bei Privatversicherten MEDICPROOF vor.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege nach Abzug aller Zuschüsse?',
    a: 'Bei Primundus kostet die Betreuung ab 2.150 € im Monat. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € im Monat selbst zu tragen (Pflegegrad 2: ab ca. 1.175 €, Pflegegrad 5: ab ca. 582 €).',
  },
  {
    q: 'Kann ich gleichzeitig Pflegegeld und eine Betreuungskraft haben?',
    a: 'Ja. Pflegegeld gibt es, wenn die Pflege zu Hause selbst organisiert ist, mit Angehörigen oder einer Betreuungskraft. Es geht direkt an Ihren Angehörigen.',
  },
]

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflege-Tools & Rechner', item: 'https://primundus.de/tools' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
])

const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-tools'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'werkzeuge', title: 'Alle Werkzeuge' },
  { id: 'schritte', title: 'In vier Schritten' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export default function ToolsPage() {
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
            { label: 'Tools & Rechner' },
          ]}
          augenbraue="Tools & Rechner"
          titel="Kostenlose Pflege-Tools und Rechner 2026"
          einleitung="Pflegegrad einschätzen, Zuschüsse sehen, Kosten vergleichen, Vertrag und Vollmacht erstellen: alle Werkzeuge kostenlos und ohne Anmeldung. Am häufigsten genutzt: der Kostenrechner mit Ihrem Monatspreis und passenden Pflegekräften."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="werkzeuge" titel="Alle Werkzeuge">
            <Punkte
              punkte={[
                { title: l(RECHNER, 'Kostenrechner 24-Stunden-Pflege'), desc: 'Ihr Monatspreis in 2 Minuten, dazu was nach Zuschüssen bleibt und welche Pflegekräfte passen.' },
                { title: l('/pflegegrad-rechner', 'Pflegegrad-Rechner'), desc: 'Pflegebedarf selbst einschätzen: ein erster Hinweis auf den Pflegegrad vor der Begutachtung.' },
                { title: l('/zuschuss-rechner', 'Zuschüsse und Förderung 2026'), desc: 'Pflegegrad wählen und alle Leistungen sehen: Pflegegeld, Entlastungsbudget, Steuerermäßigung.' },
                { title: l('/pflegeheim-kosten-deutschland', 'Pflegeheim-Kosten-Rechner'), desc: 'Eigenanteil im Heim je Bundesland, Pflegegrad und Heimjahr, daneben die Kosten zu Hause.' },
                { title: l('/pflegebedarf-einschaetzen', 'Pflegebedarf einschätzen'), desc: 'Selbsttest für Angehörige: wie viel Unterstützung nötig ist und welche Betreuungsform passt.' },
                { title: l('/checkliste-pflegeuebernahme', 'Checkliste Pflegeübernahme'), desc: 'Alle Anträge, Fristen und Aufgaben für den Start in die Pflege zum Abhaken.' },
                { title: l('/pflegevertrag-generator', 'Pflegevertrag-Generator'), desc: 'Einen Pflegevertrag erstellen, anpassen und herunterladen.' },
                { title: l('/vollmacht-generator', 'Vollmacht-Generator'), desc: 'Eine Vorsorgevollmacht Schritt für Schritt erstellen.' },
                { title: l('/anbieter-vergleich', 'Anbieter-Vergleich'), desc: 'Anbieter für 24-Stunden-Pflege im Vergleich: Preise, Gebühren, Vertragsbindung.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="schritte" titel="Pflege planen in vier Schritten">
            <Schritte
              schritte={[
                { title: 'Pflegegrad einschätzen', desc: 'Mit dem Pflegegrad-Rechner den Hilfebedarf einschätzen und vorbereitet in die Begutachtung gehen.' },
                { title: 'Zuschüsse kennen', desc: 'Im Zuschuss-Rechner alle Leistungen nach Pflegegrad sehen: Pflegegeld, Entlastungsbudget, Steuerermäßigung.' },
                { title: 'Kosten vergleichen', desc: 'Pflegeheim und Betreuung zu Hause im Kostenvergleich nebeneinander.' },
                { title: 'Preis und Pflegekräfte sehen', desc: 'Im Kostenrechner Ihren Monatspreis sehen und passende Pflegekräfte ansehen, noch ohne Vertrag.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu den Tools">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
