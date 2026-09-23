import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gegenueber, Liste, MehrDazu, RatgeberKopf, RatgeberRumpf, RechnerKasten, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite in der Seitenvorlage (17.09.2026). Inhaltlich neu geprüft gegen § 37, § 38 und § 45b SGB XI:
// Pflegegeld gibt es auch mit Betreuungskraft (Pflege „selbst sichergestellt"), Pflegesachleistungen nur
// über zugelassene Pflegedienste, Entlastungsbetrag in der Regel nicht für die Betreuungskraft.
// Rechnung wie auf /kosten (Werte aus dem Kostenrechner), Landespflegegeld Bayern seit 2026: 500 €.

const AKTUALISIERT = aktualisiertAm('pflegegeld-und-24h-pflege-kombinieren', '17. September 2026')

const SECTIONS = [
  { id: 'pflegegeld', title: 'Pflegegeld bei 24h-Pflege' },
  { id: 'was-nicht', title: 'Was nicht für die Betreuungskraft gilt' },
  { id: 'kombinationsleistung', title: 'Kombinationsleistung mit Pflegedienst' },
  { id: 'rechnung', title: 'Rechenbeispiel Pflegegrad 3' },
  { id: 'faq', title: 'Häufige Fragen' },
]

// Preis aus dem Snippet entfernt (23.09.2026, Martin: „keine kosten in den snippets").
// Der Betrag bleibt im Text der Seite und im Rechner — nur das Suchergebnis nennt ihn nicht.
export const metadata: Metadata = {
  title: 'Pflegegeld und 24h-Pflege kombinieren — so geht es',
  description: 'Pflegegeld gibt es auch mit 24-Stunden-Betreuungskraft, Sachleistungen nicht. Was die Kasse zahlt und was als Eigenanteil bleibt.',
  alternates: { canonical: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegegeld und 24h-Pflege kombinieren | Primundus',
    description: 'Pflegegeld gibt es auch mit 24-Stunden-Betreuungskraft, Sachleistungen nicht. Was die Kasse zahlt und was bei Pflegegrad 3 bleibt.',
    url: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const FRAGEN = [
  { q: 'Bekommt man Pflegegeld, wenn eine 24-Stunden-Betreuungskraft pflegt?', a: 'Ja. Die Pflegekasse zahlt das Pflegegeld an den Pflegebedürftigen, wenn die Pflege zu Hause selbst sichergestellt ist, auch durch eine Betreuungskraft im Haushalt. Das Geld darf für die Betreuung eingesetzt werden. Voraussetzung sind Pflegegrad 2 bis 5 und ein Beratungsbesuch einmal im Halbjahr.' },
  { q: 'Kann man Pflegesachleistungen für die 24-Stunden-Betreuung nutzen?', a: 'Nein. Pflegesachleistungen rechnet die Kasse nur mit zugelassenen ambulanten Pflegediensten ab. Kommt zusätzlich ein Pflegedienst, lassen sich Sachleistung und Pflegegeld als Kombinationsleistung verbinden; das Pflegegeld sinkt dann um den genutzten Anteil.' },
  { q: 'Wie hoch ist das Pflegegeld 2026?', a: 'Pflegegrad 2: 347 €, Pflegegrad 3: 599 €, Pflegegrad 4: 800 €, Pflegegrad 5: 990 € im Monat.' },
  { q: 'Kann man den Entlastungsbetrag für die 24-Stunden-Pflege nutzen?', a: 'In der Regel nicht. Die 131 € im Monat gelten nur für Tages- oder Nachtpflege, Kurzzeitpflege, bestimmte Leistungen von Pflegediensten und anerkannte Angebote zur Unterstützung im Alltag.' },
  { q: 'Was bleibt bei Pflegegrad 3 selbst zu tragen?', a: 'Bei Primundus ab ca. 923 € im Monat: Betreuung ab 2.150 € abzüglich 599 € Pflegegeld, anteilig 295 € aus dem Entlastungsbudget und bis zu 333 € Steuerermäßigung. Dazu kommen An- und Abreise mit 125 € je Strecke; Kost und Logis stellen Sie.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegeld und 24h-Pflege kombinieren — alle Optionen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Kosten', item: 'https://primundus.de/kosten' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegeld und 24h-Pflege kombinieren', item: 'https://primundus.de/pflegegeld-und-24h-pflege-kombinieren' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

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
            { label: 'Kosten', href: '/kosten' },
            { label: 'Pflegegeld und 24h-Pflege kombinieren' },
          ]}
          augenbraue="Finanzierung"
          titel="Pflegegeld und 24h-Pflege kombinieren — alle Optionen 2026"
          einleitung={<>Ja, das geht: Mit einer 24-Stunden-Betreuungskraft zahlt die Pflegekasse das Pflegegeld weiter, und Sie dürfen es für die Betreuung einsetzen. Pflegesachleistungen gibt es dafür nicht, die zahlt die Kasse nur an zugelassene Pflegedienste. Bei Pflegegrad 3 bleiben so ab ca.{' '}923{' '}€ im Monat selbst zu tragen.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blickTitel="Was die Kasse zahlt"
          blick={[
            'Pflegegeld: 347–990 € im Monat, auch für die Betreuungskraft einsetzbar',
            'Entlastungsbudget: 3.539 € im Jahr für Verhinderungs- und Kurzzeitpflege',
            'Steuer: 20 % der Kosten, bis 4.000 € Ermäßigung im Jahr',
            'Pflegesachleistungen: 796–2.299 € im Monat, nur für zugelassene Pflegedienste',
            'Entlastungsbetrag: 131 € im Monat, in der Regel nicht für die Betreuungskraft',
            'Bayern: Landespflegegeld 500 € im Jahr zusätzlich',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflegegeld" titel="Bekommt man Pflegegeld bei 24-Stunden-Pflege?">
            <Text>
              Ja. Das Pflegegeld zahlt die Pflegekasse an den Pflegebedürftigen, wenn die Pflege zu Hause selbst
              organisiert wird, durch Angehörige oder eine Betreuungskraft, die im Haushalt lebt. Wofür das Geld
              verwendet wird, entscheidet die Familie. Viele bezahlen damit einen Teil der 24-Stunden-Betreuung.
            </Text>
            <Text>Voraussetzungen für das Pflegegeld:</Text>
            <Liste
              punkte={[
                'Pflegegrad 2 bis 5',
                'Die Pflege zu Hause ist sichergestellt, zum Beispiel durch eine Betreuungskraft im Haushalt',
                'Einmal im Halbjahr ein Beratungsbesuch zu Hause, bei Pflegegrad 4 und 5 auf Wunsch vierteljährlich',
              ]}
            />
            <Tabelle
              titel="Pflegegeld 2026"
              kopf={['Pflegegrad', 'Pflegegeld je Monat']}
              zeilen={[
                ['Pflegegrad 2', '347 €'],
                ['Pflegegrad 3', '599 €'],
                ['Pflegegrad 4', '800 €'],
                ['Pflegegrad 5', '990 €'],
              ]}
              betont={1}
              fuss={<>Quelle: <a href="https://www.gesetze-im-internet.de/sgb_11/__37.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 37 SGB XI</a> · Stand 2026</>}
            />
            <MehrDazu label="Mehr dazu:" links={[{ href: '/pflegegeld', text: 'Pflegegeld 2026 — Beträge & Anspruch' }]} />
          </Abschnitt>

          <Abschnitt id="was-nicht" titel="Was die Pflegekasse nicht für die Betreuungskraft zahlt">
            <Text>
              Zwei Leistungen klingen nach Zuschuss für die Betreuung, gelten dafür aber nicht. Der Überblick, was
              bei einer Betreuungskraft im Haushalt hilft und was nicht:
            </Text>
            <Gegenueber
              seiten={[
                {
                  titel: 'Hilft bei der 24-Stunden-Betreuung',
                  ton: 'gruen',
                  punkte: [
                    'Pflegegeld: 347–990 € im Monat je nach Pflegegrad',
                    'Entlastungsbudget: 3.539 € im Jahr für Verhinderungs- und Kurzzeitpflege, anteilig ca. 295 € im Monat',
                    'Steuerermäßigung: 20 % der Kosten, bis 4.000 € im Jahr',
                    'Bayern: Landespflegegeld 500 € im Jahr',
                  ],
                },
                {
                  titel: 'Gilt nicht für die Betreuungskraft',
                  ton: 'koralle',
                  punkte: [
                    'Pflegesachleistungen (796–2.299 € im Monat): Die Kasse rechnet sie nur mit zugelassenen ambulanten Pflegediensten ab',
                    'Entlastungsbetrag (131 € im Monat): nur für Tages- oder Nachtpflege, Kurzzeitpflege, bestimmte Leistungen von Pflegediensten und anerkannte Alltagshilfen',
                  ],
                },
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/pflegesachleistungen', text: 'Pflegesachleistungen' },
                { href: '/entlastungsbetrag', text: 'Entlastungsbetrag' },
                { href: '/verhinderungspflege', text: 'Verhinderungspflege & Entlastungsbudget' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kombinationsleistung" titel="Kombinationsleistung: wenn zusätzlich ein Pflegedienst kommt">
            <Text>
              Übernimmt ein zugelassener Pflegedienst einen Teil der Pflege, etwa die Körperpflege am Morgen, rechnet
              er mit der Kasse über die Pflegesachleistung ab. Das Pflegegeld sinkt dann um denselben Prozentsatz, den
              der Pflegedienst von der Sachleistung nutzt. An die gewählte Aufteilung sind Sie sechs Monate gebunden.
            </Text>
            <Tabelle
              titel="Pflegegrad 3: Sachleistung bis 1.497 €, Pflegegeld 599 €"
              kopf={['Pflegedienst rechnet ab', 'Anteil der Sachleistung', 'Pflegegeld danach']}
              zeilen={[
                ['0 €', '0 %', '599 €'],
                ['374 €', '25 %', '449 €'],
                ['749 €', '50 %', '300 €'],
              ]}
              betont={2}
              fuss={<>Rechnung nach <a href="https://www.gesetze-im-internet.de/sgb_11/__38.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 38 SGB XI</a> · Stand 2026</>}
            />
            <Text>
              Für die Betreuung heißt das: Nutzt der Pflegedienst ein Viertel der Sachleistung, fehlen beim Pflegegeld
              150 € im Monat. Medizinische Behandlungspflege wie Spritzen oder Verbände verordnet der Arzt; sie zahlt
              die Krankenkasse, und das Pflegegeld bleibt davon unberührt.
            </Text>
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/kombinationsleistung-pflege', text: 'Kombinationsleistung im Detail' },
                { href: '/pflegedienst-oder-24h-kraft', text: 'Pflegedienst oder 24h-Kraft' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="rechnung" titel="Rechenbeispiel: 24-Stunden-Pflege bei Pflegegrad 3">
            <Tabelle
              titel="Beispiel: eine Person, Pflegegrad 3"
              zeilen={[
                ['Betreuung im Monat', 'ab 2.150 €'],
                ['Pflegegeld (Pflegegrad 3)', '− 599 €'],
                ['Entlastungsbudget (3.539 € im Jahr)', '− 295 €'],
                ['Steuerermäßigung (20 %, bis 4.000 € im Jahr)', '− 333 €'],
                [<strong key="s">Selbst zu tragen im Monat</strong>, <strong key="w">ab ca. 923 €</strong>],
              ]}
              betont={1}
              fuss="Stand September 2026, Werte aus unserem Kostenrechner · zzgl. An- und Abreise 125 € je Strecke · Budget-Anteil setzt anerkannte Verhinderungspflege-Nutzung voraus"
            />
            <Text>
              Kommt zusätzlich ein Pflegedienst, der ein Viertel der Sachleistung nutzt, sinkt das Pflegegeld auf 449 €.
              Selbst zu tragen bleiben dann ab ca. 1.073 € im Monat für die Betreuung. Kost und Logis stellen Sie.
            </Text>
            <RechnerKasten src="apex-pflegegeld-kombinieren" />
            <MehrDazu label="Alle Kosten im Überblick:" links={[{ href: '/kosten', text: 'Was kostet 24-Stunden-Pflege? Kosten & Zuschüsse 2026' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
