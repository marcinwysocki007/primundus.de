import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text, Vorspann, Werte,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('verhinderungspflege', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist das Entlastungsbudget?' },
  { id: 'neu-2026', title: 'Was sich 2026 geändert hat' },
  { id: 'beantragen', title: 'Beantragen & nutzen' },
  { id: 'kombinieren', title: 'Mit 24h-Pflege kombinieren' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Verhinderungspflege 2026 — neues Entlastungsbudget erklärt',
  description: 'Verhinderungspflege 2026: gemeinsames Jahresbudget von 3.539 €, was sich geändert hat, wer Anspruch hat und wie Angehörige es beantragen.',
  alternates: { canonical: 'https://primundus.de/verhinderungspflege' },
  openGraph: {
    title: 'Verhinderungspflege 2026 — neues Entlastungsbudget | Primundus',
    description: 'Verhinderungspflege und Kurzzeitpflege wurden zum Entlastungsbudget (3.539 €/Jahr) zusammengelegt. Alles erklärt.',
    url: 'https://primundus.de/verhinderungspflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Verhinderungspflege 2026 — das neue Entlastungsbudget erklärt',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/verhinderungspflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Verhinderungspflege', item: 'https://primundus.de/verhinderungspflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist Verhinderungspflege 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Seit 1. Juli 2025 gibt es keine eigenständige Verhinderungspflege mehr. Sie wurde mit der Kurzzeitpflege zum gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengefasst. Das Budget gilt für Pflegegrad 2–5 und kann flexibel für beide Leistungsarten genutzt werden.' } },
      { '@type': 'Question', name: 'Wie hoch ist das Entlastungsbudget 2026?', acceptedAnswer: { '@type': 'Answer', text: '3.539 Euro pro Jahr — für Pflegegrad 2 bis 5. Es fasst die frühere Verhinderungspflege (bis 1.685 €) und Kurzzeitpflege (bis 1.854 €) zusammen. Die Vorpflegezeit von 6 Monaten entfällt. Das Budget läuft am 31. Dezember ab.' } },
      { '@type': 'Question', name: 'Wer hat Anspruch auf das Entlastungsbudget?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegebedürftige mit Pflegegrad 2 bis 5, die zu Hause gepflegt werden. Die frühere Voraussetzung von 6 Monaten häuslicher Pflege (Vorpflegezeit) entfällt seit Juli 2025.' } },
      { '@type': 'Question', name: 'Verfällt das Entlastungsbudget am Jahresende?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — nicht genutztes Entlastungsbudget verfällt am 31. Dezember. Wichtig: Belege und Rechnungen rechtzeitig bei der Pflegekasse einreichen. Eine Übertragung ins Folgejahr ist nicht möglich.' } },
    ],
  },
]

export default function Verhinderungspflege() {
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
            { label: "Startseite", href: "/" },
            { label: "Finanzierung", href: "/finanzierung" },
            { label: "Verhinderungspflege 2026" },
          ]}
          augenbraue="Ratgeber Finanzierung"
          titel="Verhinderungspflege 2026 — das neue Entlastungsbudget"
          einleitung="Seit 1. Juli 2025 gibt es keine eigenständige Verhinderungspflege mehr. Sie wurde mit der Kurzzeitpflege zum gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengefasst. 2026 ist das erste volle Jahr ohne Übergangsregelungen — wer das Budget nicht kennt, verschenkt bares Geld."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Das Entlastungsbudget 2026 auf einen Blick" ton="gruen">
              <Werte ton="gruen" zeilen={[['Betrag', '3.539 €/Jahr'], ['Für wen', 'Pflegegrad 2 bis 5, häusliche Pflege'], ['Wofür', 'Verhinderungs- und Kurzzeitpflege flexibel kombinierbar'], ['Vorpflegezeit', 'Entfällt — frühere 6-Monats-Pflicht abgeschafft'], ['Max. pro Leistungsart', '8 Wochen Verhinderungspflege · 8 Wochen Kurzzeitpflege'], ['Pflegegeld während Nutzung', 'Wird zur Hälfte weitergezahlt'], ['Verfallsfrist', '31. Dezember — kein Übertrag ins Folgejahr möglich']]} />
            </Kasten>
          </Vorspann>

          <DunklerAbschnitt
            id="was-ist"
            titel="Was ist das Entlastungsbudget? (früher: Verhinderungspflege)"
            einleitung="Das Entlastungsbudget ist eine Jahresleistung der Pflegekasse die es Angehörigen ermöglicht, sich eine Auszeit zu nehmen — ohne dass die Pflege unterbrochen wird. Es greift immer dann wenn die pflegende Person vorübergehend ausfällt oder Urlaub braucht."
            punkte={[
              { title: 'Verhinderungspflege (Teil des Entlastungsbudgets)', desc: 'Wenn die pflegende Person krank wird, Urlaub macht oder vorübergehend ausfällt. Eine andere Person — professionell oder privat — übernimmt die Pflege. Bezahlt wird aus dem gemeinsamen Entlastungsbudget.' },
              { title: 'Kurzzeitpflege (Teil des Entlastungsbudgets)', desc: 'Wenn der Pflegebedürftige vorübergehend in einer Pflegeeinrichtung betreut wird — z.B. nach einem Krankenhausaufenthalt oder in der Überbrückungszeit bis zur Betreuungskraft.' },
            ]}
          />

          <Abschnitt id="neu-2026" titel="Was sich 2026 geändert hat">
            <Text>
              Die Reform zum 1. Juli 2025 hat die Verhinderungspflege und Kurzzeitpflege grundlegend vereinfacht. 2026 gilt erstmals für ein volles Kalenderjahr ohne Übergangsregelungen.
            </Text>
            <Tabelle
              titel="Alt vs. Neu — was sich geändert hat"
              kopf={['Regelung', 'Bis Juni 2025', 'Ab Juli 2025 (gilt 2026)']}
              zeilen={[
                ['Budget', 'Verhinderungspflege 1.685 € + Kurzzeitpflege 1.854 € getrennt', 'Gemeinsames Entlastungsbudget 3.539 €/Jahr'],
                ['Vorpflegezeit', '6 Monate Pflege durch Angehörige Voraussetzung', 'Entfällt vollständig'],
                ['Flexibilität', 'Budget nicht oder nur begrenzt übertragbar', 'Frei zwischen beiden Leistungsarten aufteilbar'],
                ['Pflegegeld', 'Wurde während Verhinderungspflege halbiert', 'Wird zur Hälfte weitergezahlt (unverändert)'],
                ['Verfallsfrist', '30. Juni des Folgejahres', '31. Dezember des gleichen Jahres'],
              ]}
              betont={2}
            />
            <Kasten titel="Wichtig: Neue Verfallsfrist beachten" ton="koralle">
              <Text>Früher konnte nicht genutztes Budget bis zum 30. Juni des Folgejahres übertragen werden. Jetzt verfällt es am 31. Dezember. Wer das Budget nicht rechtzeitig einreicht, verliert es. Belege und Rechnungen also zeitnah bei der Pflegekasse einreichen.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="beantragen" titel="Entlastungsbudget beantragen & nutzen">
            <Text>
              Das Entlastungsbudget muss nicht separat beantragt werden — es steht automatisch zur Verfügung wenn ein Pflegegrad 2–5 vorliegt. Man muss es nur abrufen.
            </Text>
            <Schritte
              schritte={[
                { title: 'Pflegekasse informieren', desc: 'Mitteilen dass Verhinderungspflege oder Kurzzeitpflege genutzt werden soll. Die Pflegekasse bestätigt das verfügbare Budget.' },
                { title: 'Vertretungspflege organisieren', desc: 'Professionellen Ersatz (z.B. ambulanten Pflegedienst) oder private Person (Angehörige, Nachbarn) für die Überbrückungszeit organisieren. Angehörige haben Anspruch auf eine Aufwandsentschädigung.' },
                { title: 'Rechnungen sammeln', desc: 'Alle Belege für Vertretungspflege aufbewahren. Bei Kurzzeitpflege: Heimrechnung. Bei Verhinderungspflege: Nachweis über die Vertretungskosten.' },
                { title: 'Rechtzeitig einreichen', desc: 'Belege vor dem 31. Dezember bei der Pflegekasse einreichen. Kein Übertrag möglich — nicht genutztes Budget verfällt.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kombinieren" titel="Mit 24h-Pflege kombinieren">
            <Text>
              Das Entlastungsbudget lässt sich mit einer 24h-Betreuungskraft von Primundus sinnvoll kombinieren — besonders in der Übergangsphase oder bei Wechseln.
            </Text>
            <Punkte
              punkte={[
                { title: 'Überbrückung bis zur Betreuungskraft', desc: 'Wenn die erste Kraft noch nicht da ist oder ein Wechsel stattfindet — Kurzzeitpflege überbrückt aus dem Entlastungsbudget.' },
                { title: 'Urlaub für Angehörige', desc: 'Auch wenn eine 24h-Kraft da ist: Wenn Angehörige als Hauptpflegeperson anerkannt sind und Urlaub brauchen, greift Verhinderungspflege aus dem Budget.' },
                { title: 'Kraftwechsel-Überbrückung', desc: 'Beim Wechsel zwischen zwei Betreuungskräften (alle 6–8 Wochen) gibt es manchmal kurze Lücken — Kurzzeitpflege überbrückt diese nahtlos.' },
              ]}
            />
            <MehrDazu
              label="Alle Zuschüsse kombinieren:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Zuschüsse 2026" }, { href: "/pflegegeld", text: "Pflegegeld 2026 — Beträge & Kombinationen" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Verhinderungspflege 2026">
            <Fragen
              fragen={[
                { q: 'Was ist Verhinderungspflege 2026?', a: 'Seit Juli 2025 gibt es keine eigenständige Verhinderungspflege mehr. Sie wurde mit der Kurzzeitpflege zum gemeinsamen Entlastungsbudget von 3.539 €/Jahr zusammengefasst. Das Budget gilt für PG 2–5 und ist flexibel für beide Leistungsarten nutzbar.' },
                { q: 'Wie hoch ist das Entlastungsbudget 2026?', a: '3.539 Euro pro Jahr für Pflegegrad 2–5. Es fasst frühere Verhinderungspflege (bis 1.685 €) und Kurzzeitpflege (bis 1.854 €) zusammen. Vorpflegezeit entfällt. Verfällt am 31. Dezember.' },
                { q: 'Wer hat Anspruch auf das Entlastungsbudget?', a: 'Pflegebedürftige mit Pflegegrad 2 bis 5, die zu Hause gepflegt werden. Die frühere Voraussetzung von 6 Monaten häuslicher Pflege entfällt seit Juli 2025.' },
                { q: 'Verfällt das Entlastungsbudget am Jahresende?', a: 'Ja — nicht genutztes Budget verfällt am 31. Dezember. Eine Übertragung ins Folgejahr ist nicht mehr möglich (früher bis 30. Juni). Belege rechtzeitig einreichen.' },
                { q: 'Wie wird Pflegegeld während des Entlastungsbudgets behandelt?', a: 'Das Pflegegeld wird während der Nutzung des Entlastungsbudgets zur Hälfte weitergezahlt — bei PG 3 also 299,50 €/Monat statt 599 €.' },
                { q: 'Kann ich Verhinderungspflege und Kurzzeitpflege gleichzeitig nutzen?', a: 'Aus demselben Budget — ja, aber max. 8 Wochen je Leistungsart innerhalb eines Jahres. Das Budget kann also nicht gleichzeitig für Verhinderungs- und Kurzzeitpflege des gleichen Zeitraums genutzt werden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="verhinderungspflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
