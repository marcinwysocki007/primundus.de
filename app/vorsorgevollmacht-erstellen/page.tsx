import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('vorsorgevollmacht-erstellen', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist eine Vorsorgevollmacht?' },
  { id: 'inhalt', title: 'Was muss rein?' },
  { id: 'erstellen', title: 'Erstellen — Schritt für Schritt' },
  { id: 'beglaubigung', title: 'Notariell oder nicht?' },
  { id: 'pflege', title: 'Bedeutung für die Pflege' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Vorsorgevollmacht erstellen — Anleitung, Inhalt & Kosten',
  description: 'Vorsorgevollmacht erstellen: Was reinmuss, ob Notar nötig ist, wie sie registriert wird und warum sie für die Organisation der 24h-Pflege unverzichtbar ist.',
  alternates: { canonical: 'https://primundus.de/vorsorgevollmacht-erstellen' },
  openGraph: {
    title: 'Vorsorgevollmacht erstellen | Primundus',
    description: 'Vorsorgevollmacht: Was reinmuss, ob Notar nötig ist und warum sie für die Pflege-Organisation unverzichtbar ist.',
    url: 'https://primundus.de/vorsorgevollmacht-erstellen',
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
    headline: 'Vorsorgevollmacht erstellen — Anleitung, Inhalt & Kosten',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/vorsorgevollmacht-erstellen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Vorsorgevollmacht erstellen', item: 'https://primundus.de/vorsorgevollmacht-erstellen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist eine Vorsorgevollmacht?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Vorsorgevollmacht ist ein Dokument das einer Vertrauensperson erlaubt, im Fall der eigenen Geschäftsunfähigkeit alle wichtigen Entscheidungen zu treffen — medizinische, finanzielle und rechtliche. Ohne Vollmacht müsste ein Gericht einen Betreuer bestellen.' } },
      { '@type': 'Question', name: 'Muss eine Vorsorgevollmacht notariell beglaubigt werden?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — für die meisten Bereiche reicht eine handschriftliche oder gedruckte Vollmacht mit Unterschrift. Für Immobiliengeschäfte und Bankgeschäfte bei manchen Instituten ist eine notarielle Beglaubigung (ca. 70 €) oder Beurkundung nötig.' } },
      { '@type': 'Question', name: 'Warum ist eine Vorsorgevollmacht für die Pflege wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Mit einer Vollmacht können Angehörige sofort handeln — Pflegegrad beantragen, Pflegeverträge unterschreiben, Krankenhausentscheidungen treffen. Ohne Vollmacht muss das Gericht einen Betreuer bestellen — das dauert Wochen bis Monate und kostet Kraft und Nerven.' } },
    ],
  },
]

export default function VorsorgevollmachtErstellen() {
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
            { label: "Alltag & Angehörige", href: "/alltag" },
            { label: "Vorsorgevollmacht erstellen" },
          ]}
          augenbraue="Ratgeber Vorsorge"
          titel="Vorsorgevollmacht erstellen — Anleitung, Inhalt & Kosten"
          einleitung="Eine Vorsorgevollmacht ist das wichtigste Dokument für den Pflegefall — und wird von den meisten Menschen zu spät erstellt. Wer eine Pflegesituation organisiert ohne gültige Vollmacht, verliert wertvolle Wochen durch gerichtliche Betreuungsverfahren. Erstellen dauert einen Nachmittag — und gilt ein Leben lang."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Vorsorgevollmacht: Vertrauensperson entscheidet wenn man selbst nicht mehr kann',
                'Kein Notar nötig für die meisten Bereiche — handschriftlich + Unterschrift reicht',
                'Registrierung im Zentralen Vorsorgeregister der Bundesnotarkammer empfohlen',
                'Ohne Vollmacht: Gericht muss Betreuer bestellen — dauert Wochen bis Monate',
                'Für Pflege unverzichtbar: Pflegegrad beantragen, Verträge unterschreiben',
                'Jederzeit widerrufbar — solange man geschäftsfähig ist',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist eine Vorsorgevollmacht?">
            <Text>
              Eine Vorsorgevollmacht ist ein rechtliches Dokument das einer selbst gewählten Vertrauensperson die Befugnis gibt, im Fall der eigenen Geschäfts- oder Einwilligungsunfähigkeit alle wichtigen Entscheidungen zu treffen — für Gesundheit, Finanzen und rechtliche Angelegenheiten.
            </Text>
            <Text>
              Ohne Vorsorgevollmacht kann niemand — nicht einmal der Ehepartner oder die Kinder — automatisch für den Betroffenen entscheiden. Das Familiengericht muss dann einen gesetzlichen Betreuer bestellen. Das dauert in der Praxis oft Wochen bis Monate und verursacht erheblichen bürokratischen und emotionalen Aufwand.
            </Text>
            <Punkte
              punkte={[
                { title: 'Vorsorgevollmacht vs. Betreuungsverfügung', desc: 'Die Vollmacht bevollmächtigt eine Privatperson direkt. Die Betreuungsverfügung sagt dem Gericht wen es als gesetzlichen Betreuer bestellen soll — weniger direkt und effektiv.' },
                { title: 'Vorsorgevollmacht vs. Patientenverfügung', desc: 'Die Patientenverfügung regelt medizinische Entscheidungen für konkrete Behandlungssituationen. Die Vorsorgevollmacht benennt wer diese Entscheidungen treffen darf. Beide Dokumente ergänzen sich.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="inhalt"
            titel="Was muss in die Vorsorgevollmacht?"
            einleitung="Eine Vorsorgevollmacht sollte alle Lebensbereiche abdecken in denen Entscheidungen anfallen könnten. Die wichtigsten Bereiche:"
            punkte={[
              { title: 'Gesundheit und Pflege', desc: 'Einwilligung in medizinische Behandlungen, Ablehnung lebensverlängernder Maßnahmen (in Kombination mit Patientenverfügung), Wahl des Pflegeheims oder der häuslichen Pflege, Pflegevertrag unterschreiben.' },
              { title: 'Aufenthaltsbestimmung', desc: 'Entscheidung wo der Betroffene lebt — zuhause, im Pflegeheim, in der eigenen Wohnung mit Betreuung.' },
              { title: 'Vermögensverwaltung', desc: 'Bankkonten führen, Rechnungen bezahlen, Steuererklärung einreichen, Verträge unterschreiben, Immobilien verwalten.' },
              { title: 'Behörden und Ämter', desc: 'Post entgegennehmen, Behördenkommunikation führen, Kranken- und Pflegekasse kontaktieren.' },
            ]}
          />

          <Abschnitt id="erstellen" titel="Vorsorgevollmacht erstellen — Schritt für Schritt">
            <Schritte
              schritte={[
                { title: 'Vorlage besorgen', desc: 'Das Bundesministerium der Justiz bietet kostenlose Musterdokumente an (bmj.de). Alternativ: Anwalt oder Notar für individuelle Gestaltung hinzuziehen.' },
                { title: 'Vertrauensperson bestimmen', desc: 'Wen vertraue ich? Wer ist bereit das zu übernehmen? Das Gespräch mit der Person vorab führen — Vollmacht niemals überraschend ausstellen.' },
                { title: 'Dokument ausfüllen und unterschreiben', desc: 'Vollständig ausfüllen, Datum eintragen und eigenhändig unterschreiben. Bei gedrucktem Dokument reicht die Unterschrift. Handschriftliche Vollmachten können vollständig handgeschrieben sein.' },
                { title: 'Im Zentralen Vorsorgeregister registrieren', desc: 'Bundesnotarkammer.de → Zentrales Vorsorgeregister. Kostenpflichtig (ca. 15 €) aber empfohlen: So kann die Vollmacht im Notfall schnell gefunden werden.' },
                { title: 'Original sicher aufbewahren und Kopien verteilen', desc: 'Original an einem sicheren Ort. Kopie beim Bevollmächtigten. Kopie beim Hausarzt. Kopie beim Notar wenn notariell beglaubigt.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="beglaubigung" titel="Notariell oder nicht — was ist nötig?">
            <Tabelle
              titel=""
              kopf={['Form', 'Wann ausreichend', 'Kosten']}
              zeilen={[
                ['Einfache Unterschrift', 'Für die meisten Bereiche — Pflege, Gesundheit, Behörden', 'Kostenlos'],
                ['Notarielle Beglaubigung', 'Viele Banken fordern das für Kontovollmacht', 'Ca. 70 €'],
                ['Notarielle Beurkundung', 'Pflicht für Immobiliengeschäfte', 'Ca. 150–500 € je nach Wert'],
              ]}
              betont={2}
            />
          </Abschnitt>

          <Abschnitt id="pflege" titel="Bedeutung für die Pflege-Organisation">
            <Text>
              Wer Pflege organisiert — ob 24h-Pflege oder Pflegeheim — braucht eine gültige Vollmacht. Ohne sie kann niemand für den Pflegebedürftigen unterschreiben oder entscheiden.
            </Text>
            <Punkte
              punkte={[
                { title: 'Pflegegrad beantragen', desc: 'Mit Vollmacht kann der Bevollmächtigte den Pflegeantrag bei der Pflegekasse stellen. Ohne Vollmacht — oder vor gerichtlicher Betreuerbestellung — ist das nicht möglich.' },
                { title: 'Pflegevertrag mit Primundus unterschreiben', desc: 'Der Betreuungsvertrag muss von einer handlungsfähigen Person unterschrieben werden. Der Bevollmächtigte kann das sofort tun.' },
                { title: 'Medizinische Entscheidungen', desc: 'Einwilligung in Operationen, Ablehnung von Behandlungen, Entlassung aus dem Krankenhaus — all das erfordert die Unterschrift des Bevollmächtigten.' },
              ]}
            />
            <MehrDazu
              label="Weitere wichtige Dokumente:"
              links={[{ href: "/patientenverfuegung-aufsetzen", text: "Patientenverfügung aufsetzen" }, { href: "/pflegevertrag-aufsetzen", text: "Pflegevertrag aufsetzen" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Vorsorgevollmacht">
            <Fragen
              fragen={[
                { q: 'Was ist eine Vorsorgevollmacht?', a: 'Ein Dokument das einer Vertrauensperson erlaubt, bei eigener Geschäftsunfähigkeit alle wichtigen Entscheidungen zu treffen — medizinisch, finanziell, rechtlich. Ohne Vollmacht muss das Gericht einen Betreuer bestellen.' },
                { q: 'Muss eine Vorsorgevollmacht notariell beglaubigt werden?', a: 'Nein — für Pflege, Gesundheit und Behörden reicht eine Unterschrift. Für Bankgeschäfte verlangen viele Institute eine notarielle Beglaubigung (ca. 70 €). Für Immobiliengeschäfte ist Beurkundung Pflicht.' },
                { q: 'Warum ist die Vollmacht für die Pflege wichtig?', a: 'Mit Vollmacht kann der Bevollmächtigte sofort Pflegegrad beantragen, Verträge unterschreiben und medizinische Entscheidungen treffen. Ohne Vollmacht dauert ein gerichtliches Betreuungsverfahren Wochen bis Monate.' },
                { q: 'Kann man eine Vorsorgevollmacht widerrufen?', a: 'Ja — jederzeit, solange man geschäftsfähig ist. Das Original zurückfordern und eine schriftliche Widerrufserklärung ausstellen. Im Zentralen Vorsorgeregister ggf. löschen lassen.' },
                { q: 'Was kostet eine Vorsorgevollmacht?', a: 'Selbst erstellt: kostenlos (Vorlage vom Bundesministerium der Justiz). Notarielle Beglaubigung: ca. 70 €. Notarielle Beurkundung: ca. 150–500 €. Registrierung im Zentralen Vorsorgeregister: ca. 15 €.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="vorsorgevollmacht-erstellen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
