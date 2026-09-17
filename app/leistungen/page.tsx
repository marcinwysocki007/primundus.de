import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gegenueber, Gruppen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite in der Seitenvorlage (17.09.2026). Leistungen nach dem Mustervertrag (Anlage 2 Leistungsumfang:
// Hauswirtschaft, Grundpflege nach § 14 Abs. 4 Nr. 1–3 SGB XI, Behandlungspflege nach SGB V ausgenommen).
// Nächte „bei Bedarf auch nachts" (Martin 14.09.), keine Stundenzahlen (Martin 12.09.).

const AKTUALISIERT = aktualisiertAm('leistungen', '17. September 2026')

const SECTIONS = [
  { id: 'was-inbegriffen', title: 'Was ist inbegriffen?' },
  { id: 'betreuung', title: 'Ein Tag mit Betreuungskraft' },
  { id: 'nachts', title: 'Nachts und in der Freizeit' },
  { id: 'medizinisch', title: 'Medizinische Unterstützung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Leistungen der 24h-Pflege — was eine Betreuungskraft macht',
  description: 'Was macht eine 24h-Betreuungskraft? Körperpflege, Haushalt, Begleitung und bei Bedarf Hilfe in der Nacht. Was inbegriffen ist und was ein Pflegedienst übernimmt.',
  alternates: { canonical: 'https://primundus.de/leistungen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Leistungen der 24h-Pflege | Primundus',
    description: 'Was eine 24h-Betreuungskraft macht — alle Leistungen im Überblick.',
    url: 'https://primundus.de/leistungen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const FRAGEN = [
  { q: 'Was macht eine 24h-Betreuungskraft?', a: 'Sie hilft bei der Körperpflege, beim Essen und beim Aufstehen, kocht, kauft ein, wäscht und hält die Räume Ihres Angehörigen in Ordnung. Sie leistet Gesellschaft, geht mit spazieren, begleitet zum Arzt und erinnert an Medikamente. Sie wohnt mit im Haushalt und ist bei Bedarf auch nachts da.' },
  { q: 'Was macht eine 24h-Kraft nicht?', a: 'Medizinische Behandlungspflege wie Spritzen, Verbandswechsel oder Katheterversorgung. Das übernimmt ein ambulanter Pflegedienst: Der Arzt verordnet die Behandlungspflege, die Krankenkasse zahlt sie.' },
  { q: 'Kocht die Betreuungskraft auch?', a: 'Ja. Sie kauft ein und kocht frisch, nach den Vorlieben Ihres Angehörigen und nach seiner Diät.' },
  { q: 'Ist die Betreuungskraft auch nachts da?', a: 'Ja, bei Bedarf. Sie wohnt mit im Haus und ist da, wenn nachts etwas ist. Regelmäßige Einsätze in der Nacht müssen ausgeglichen werden; wie oft nachts Hilfe nötig ist, fließt deshalb in den Preis ein.' },
  { q: 'Hat die Betreuungskraft Freizeit?', a: 'Ja. Sie hat geregelte Arbeitszeiten mit Pausen und Ruhezeiten. In ihrer freien Zeit kann sie das Haus verlassen.' },
  { q: 'Versorgt die Betreuungskraft auch Haustiere?', a: 'Ja. Die Versorgung von Haustieren gehört ebenso zu den Leistungen wie die Pflege der Zimmerpflanzen.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Leistungen der 24h-Pflege — was eine Betreuungskraft macht',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/leistungen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://primundus.de/leistungen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function Leistungen() {
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
            { label: 'Leistungen' },
          ]}
          augenbraue="Leistungen"
          titel="Leistungen der 24h-Pflege — was eine Betreuungskraft macht"
          einleitung="Eine Betreuungskraft von Primundus zieht bei Ihrem Angehörigen ein. Sie führt den Haushalt, hilft bei der Körperpflege, leistet Gesellschaft und ist bei Bedarf auch nachts da. Behandlungspflege wie Spritzen oder Verbände übernimmt ein ambulanter Pflegedienst."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blickTitel="Alle Leistungen auf einen Blick"
          blick={[
            'Körperpflege: Waschen, Duschen, Zahnpflege',
            'Hilfe beim Essen, Aufstehen und Anziehen',
            'Kochen, Einkaufen und Wäsche',
            'Ordnung in den Räumen Ihres Angehörigen',
            'Gesellschaft, Spaziergänge, Arztbesuche',
            'Bei Bedarf auch nachts da',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-inbegriffen" titel="Was ist inbegriffen?">
            <Text>
              Ein ambulanter Pflegedienst kommt zu festen Zeiten für einzelne Aufgaben. Eine Betreuungskraft lebt im
              Haushalt und hilft über den Tag verteilt bei dem, was anfällt. Das gehört dazu:
            </Text>
            <Gruppen
              gruppen={[
                {
                  title: 'Körperpflege und Bewegung',
                  punkte: [
                    'Waschen, Duschen, Baden, Rasieren, Mund- und Zahnpflege, Hautpflege',
                    'Hilfe bei Inkontinenz',
                    'Hilfe beim Essen und Trinken',
                    'Aufstehen, Zubettgehen, An- und Auskleiden, Treppensteigen',
                    'Lagern und Umlagern, wenn Ihr Angehöriger viel liegt',
                  ],
                },
                {
                  title: 'Haushalt',
                  punkte: [
                    'Kochen nach Vorlieben und Diät',
                    'Einkaufen und Besorgungen',
                    'Wäsche waschen und wechseln, Geschirr spülen',
                    'Ordnung und Sauberkeit in den Räumen, die Ihr Angehöriger nutzt',
                    'Haustiere und Zimmerpflanzen versorgen',
                  ],
                },
                {
                  title: 'Begleitung und Alltag',
                  punkte: [
                    'Gesellschaft und Gespräche',
                    'Spaziergänge, Spiele, Begleitung zu Veranstaltungen',
                    'Begleitung zu Arzt- und Therapieterminen',
                    'Beschäftigung nach Interessen',
                    'Kontakt mit der Familie halten',
                  ],
                },
                {
                  title: 'Sicherheit',
                  punkte: [
                    'Bei Bedarf auch nachts da',
                    'An Medikamente erinnern',
                    'Stürzen im Alltag vorbeugen',
                    'Im Notfall den Rettungsdienst rufen',
                  ],
                },
              ]}
            />
            <Text>
              Nicht dazu gehören laut Betreuungsvertrag Fensterputzen und die Reinigung von Garage, Heizraum und Nebengebäuden.
            </Text>
          </Abschnitt>

          <Abschnitt id="betreuung" titel="Ein Tag mit Betreuungskraft">
            <Text>
              Der Tag richtet sich nach den Gewohnheiten Ihres Angehörigen: Frühstück, wann er möchte, die Zeitung zum
              Kaffee, der Spaziergang im eigenen Tempo. So kann ein Tag aussehen:
            </Text>
            <Punkte
              punkte={[
                { title: 'Morgens', desc: 'Gemeinsam aufstehen, Körperpflege in Ruhe, Frühstück nach Wunsch. Danach Zeitung, Kaffee und Gespräch.' },
                { title: 'Tagsüber', desc: 'Haushalt und Einkäufe, bei Bedarf der Weg zum Arzt. Beschäftigung nach Interesse: Garten, Puzzeln, Musik, Besuch. Frisch gekochtes Mittagessen, danach Mittagsruhe.' },
                { title: 'Abends', desc: 'Abendessen, Gespräch oder Fernsehen, Abendpflege und zu Bett bringen. Nachts ist sie im Haus und bei Bedarf da.' },
              ]}
            />
            <Text>
              Den Haushalt führt die Betreuungskraft selbstständig. Einkäufe, Wäsche und Mahlzeiten müssen Angehörige
              nicht mehr organisieren.
            </Text>
          </Abschnitt>

          <Abschnitt id="nachts" titel="Nachts und in der Freizeit">
            <Text>
              Die Betreuungskraft wohnt mit im Haus. Braucht Ihr Angehöriger nachts Hilfe, ist sie da. Regelmäßige
              Einsätze in der Nacht müssen ausgeglichen werden; wie oft nachts Hilfe nötig ist, fließt deshalb in den
              Preis ein.
            </Text>
            <Text>
              Sie hat geregelte Arbeitszeiten mit Pausen und Ruhezeiten. In ihrer freien Zeit kann sie das Haus
              verlassen.
            </Text>
            <RechnerKasten src="apex-leistungen" />
          </Abschnitt>

          <Abschnitt id="medizinisch" titel="Medizinische Unterstützung — was geht, was nicht">
            <Gegenueber
              seiten={[
                {
                  titel: 'Übernimmt die Betreuungskraft',
                  ton: 'gruen',
                  punkte: [
                    'An Medikamente erinnern',
                    'Zu Arzt- und Therapieterminen begleiten',
                    'Auf Wunsch mit Ärzten sprechen',
                    'Im Notfall den Rettungsdienst rufen',
                  ],
                },
                {
                  titel: 'Übernimmt ein Pflegedienst',
                  ton: 'koralle',
                  punkte: [
                    'Spritzen, etwa Insulin oder Blutverdünner',
                    'Verbandswechsel und Wundversorgung',
                    'Katheterversorgung',
                    'Ernährung über eine Magensonde',
                    'Inhalationstherapie',
                  ],
                },
              ]}
            />
            <Text>
              Behandlungspflege verordnet der Arzt. Die Krankenkasse zahlt sie, und das Pflegegeld bleibt davon unberührt.
            </Text>
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/pflegedienst-oder-24h-kraft', text: 'Pflegedienst oder 24h-Kraft' },
                { href: '/pflegegeld-und-24h-pflege-kombinieren', text: 'Pflegegeld und Pflegedienst kombinieren' },
              ]}
            />
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
