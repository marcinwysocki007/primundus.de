import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('patientenverfuegung-aufsetzen', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist eine Patientenverfügung?' },
  { id: 'inhalte', title: 'Was muss rein?' },
  { id: 'aufsetzen', title: 'Schritt für Schritt aufsetzen' },
  { id: 'unterschied', title: 'Unterschied zur Vorsorgevollmacht' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Patientenverfügung aufsetzen — Anleitung & was rein muss',
  description: 'Patientenverfügung aufsetzen: Was hineingehört, wie man sie gültig erstellt und was der Unterschied zur Vorsorgevollmacht ist.',
  alternates: { canonical: 'https://primundus.de/patientenverfuegung-aufsetzen' },
  openGraph: {
    title: 'Patientenverfügung aufsetzen | Primundus',
    description: 'Was in eine Patientenverfügung gehört und wie man sie rechtsgültig erstellt — Anleitung und Checkliste.',
    url: 'https://primundus.de/patientenverfuegung-aufsetzen',
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
    headline: 'Patientenverfügung aufsetzen — Anleitung und was hineingehört',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/patientenverfuegung-aufsetzen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Patientenverfügung aufsetzen', item: 'https://primundus.de/patientenverfuegung-aufsetzen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist eine Patientenverfügung?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Patientenverfügung ist ein schriftliches Dokument in dem man im Voraus festlegt welche medizinischen Maßnahmen man im Fall der eigenen Entscheidungsunfähigkeit wünscht oder ablehnt. Sie ist rechtlich verbindlich und muss von Ärzten und Pflegepersonen beachtet werden.' } },
      { '@type': 'Question', name: 'Muss eine Patientenverfügung notariell beglaubigt werden?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — eine Patientenverfügung ist bereits ohne Notar rechtsgültig, wenn sie handschriftlich unterschrieben und datiert ist. Eine notarielle Beglaubigung erhöht die Beweissicherheit, ist aber keine Pflicht.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied zur Vorsorgevollmacht?', acceptedAnswer: { '@type': 'Answer', text: 'Die Patientenverfügung regelt direkt welche Behandlungen gewünscht oder abgelehnt werden. Die Vorsorgevollmacht bestimmt eine Person die im Ernstfall stellvertretend Entscheidungen trifft. Beide zusammen geben den größten Schutz.' } },
    ],
  },
]

export default function PatientenverfuegungAufsetzen() {
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
            { label: "Patientenverfügung aufsetzen" },
          ]}
          augenbraue="Ratgeber Vorsorge"
          titel="Patientenverfügung aufsetzen — Anleitung & Pflichtinhalte"
          einleitung="Eine Patientenverfügung legt verbindlich fest welche medizinischen Maßnahmen man im Fall der Entscheidungsunfähigkeit wünscht oder ablehnt. Sie muss schriftlich sein und eigenhändig unterschrieben werden — ein Notar ist nicht nötig. Je konkreter die Formulierungen, desto wirksamer das Dokument."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Rechtlich verbindlich — Ärzte und Pflegepersonen müssen sie beachten',
                'Schriftform + eigenhändige Unterschrift + Datum — Notar nicht nötig',
                'Regelmäßig aktualisieren — mit Datum und Unterschrift bestätigen',
                'Gut verwahren: Original beim Arzt hinterlegen, Kopie bei Angehörigen',
                'Ergänzung durch Vorsorgevollmacht empfohlen — für Entscheidungen die die PV nicht regelt',
                'Bundesgesundheitsministerium bietet kostenloses Muster-Dokument an',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist eine Patientenverfügung?">
            <Text>
              Eine Patientenverfügung (§ 1827 BGB) ist ein schriftliches Dokument in dem man vorausschauend festlegt welche medizinischen Behandlungen man im Fall der eigenen Entscheidungsunfähigkeit wünscht und welche man ausdrücklich ablehnt. Sie greift wenn man selbst — zum Beispiel durch Bewusstlosigkeit, Demenz oder schwere Erkrankung — keine Entscheidungen mehr treffen kann.
            </Text>
            <Text>
              Die Patientenverfügung ist rechtlich verbindlich: Ärzte, Pflegepersonen und Krankenhäuser sind gesetzlich verpflichtet sie zu beachten. Das unterscheidet sie von einer bloßen Wunschliste.
            </Text>
            <Text>
              Typische Situationen in denen sie greift: Wachkoma, schwere Demenz im Endstadium, fortgeschrittener Krebs, schwerster Schlaganfall. Sie kann sowohl lebenserhaltende Maßnahmen ausdrücklich wünschen als auch ablehnen.
            </Text>
          </Abschnitt>

          <Abschnitt id="inhalte" titel="Was muss in die Patientenverfügung?">
            <Text>
              Je konkreter die Formulierungen, desto wirksamer. Allgemeine Aussagen wie "keine lebensverlängernden Maßnahmen" reichen oft nicht aus — Situationen und Maßnahmen müssen spezifiziert werden.
            </Text>
            {/* Das Etikett „Pflicht" (vorher an jedem der ersten vier Punkte) steht als Augenbraue über ihnen */}
            <Kasten augenbraue="Pflicht" ton="koralle">
              <Punkte
                punkte={[
                  { title: 'Persönliche Angaben', desc: 'Vollständiger Name, Geburtsdatum, Adresse — damit zweifelsfrei klar ist wer das Dokument verfasst hat.' },
                  { title: 'Konkrete Situationsbeschreibungen', desc: 'Für welche Situationen soll die Verfügung gelten? Z.B.: "Wenn ich mich im Endstadium einer unheilbaren Erkrankung befinde..." oder "Wenn ich dauerhaft bewusstlos bin..."' },
                  { title: 'Konkrete Maßnahmen — Wunsch oder Ablehnung', desc: 'Künstliche Beatmung, Wiederbelebung, künstliche Ernährung, Dialyse, Antibiotikagabe — für jede Maßnahme festlegen ob gewünscht oder abgelehnt.' },
                  { title: 'Eigenhändige Unterschrift + Datum', desc: 'Handgeschriebene Unterschrift und Datum sind Pflicht für die Rechtsgültigkeit. Kein Notar nötig.' },
                ]}
              />
            </Kasten>
            <Punkte
              punkte={[
                { title: 'Schmerztherapie und Palliativversorgung', desc: 'Wünsche zur Schmerzlinderung und palliativen Begleitung ausdrücklich festhalten.' },
                { title: 'Aussagen zur Organspende', desc: 'Separat vom Organspendeausweis in die PV aufnehmen wenn gewünscht.' },
                { title: 'Kontaktperson / Bevollmächtigte', desc: 'Wer soll kontaktiert werden? Wenn eine Vorsorgevollmacht besteht: Bevollmächtigte Person benennen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="aufsetzen" titel="Schritt für Schritt aufsetzen">
            <Schritte
              schritte={[
                { title: 'Muster-Vorlage besorgen', desc: 'Das Bundesgesundheitsministerium bietet eine kostenlose Muster-Patientenverfügung an — abrufbar unter bundesgesundheitsministerium.de. Als Ausgangspunkt gut geeignet.' },
                { title: 'Situationen und Wünsche durchdenken', desc: 'Welche Situationen sollen abgedeckt sein? Welche Behandlungen werden ausdrücklich gewünscht, welche abgelehnt? Mit dem Hausarzt besprechen — er kann über die medizinische Realität der einzelnen Maßnahmen informieren.' },
                { title: 'Konkret formulieren', desc: 'Keine allgemeinen Phrasen — konkrete Situationen und Maßnahmen benennen. Z.B. "keine künstliche Beatmung wenn..." statt "keine lebensverlängernden Maßnahmen".' },
                { title: 'Eigenhändig unterschreiben und datieren', desc: 'Handschriftlich unterschreiben und Datum eintragen. Damit ist die PV rechtsgültig — kein Notar nötig.' },
                { title: 'Gut verwahren und bekannt machen', desc: 'Original beim Hausarzt hinterlegen, Kopie bei Angehörigen und im Portemonnaie (Hinweiskarte). Wer eine Vorsorgevollmacht hat: Bevollmächtigte Person informieren.' },
                { title: 'Regelmäßig aktualisieren', desc: 'Empfehlung: alle 2–3 Jahre erneut unterschreiben und datieren — das belegt den aktuellen Willen und stärkt die Rechtsgültigkeit.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="unterschied" titel="Unterschied zur Vorsorgevollmacht">
            <Text>
              Patientenverfügung und Vorsorgevollmacht ergänzen sich — sie decken unterschiedliche Aspekte ab.
            </Text>
            <Tabelle
              titel=""
              kopf={['', 'Patientenverfügung', 'Vorsorgevollmacht']}
              zeilen={[
                ['Was sie regelt', 'Konkrete medizinische Maßnahmen (Ja/Nein)', 'Wer Entscheidungen trifft wenn man selbst nicht kann'],
                ['Wann sie greift', 'Bei Entscheidungsunfähigkeit', 'Bei Entscheidungsunfähigkeit'],
                ['Notar nötig?', 'Nein — Schriftform + Unterschrift reicht', 'Empfohlen für Immobilien; sonst nein'],
                ['Grenzen', 'Kann nicht alle Situationen vorhersehen', 'Bevollmächtigte Person muss vertrauenswürdig sein'],
                ['Empfehlung', 'Immer aufsetzen', 'Immer zusätzlich aufsetzen'],
              ]}
            />
            <MehrDazu
              label="Vorsorgevollmacht erstellen:"
              links={[{ href: "/vorsorgevollmacht-erstellen", text: "Vorsorgevollmacht erstellen — Anleitung & Muster" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Patientenverfügung">
            <Fragen
              fragen={[
                { q: 'Was ist eine Patientenverfügung?', a: 'Ein schriftliches Dokument in dem man vorausschauend festlegt welche medizinischen Behandlungen man bei Entscheidungsunfähigkeit wünscht oder ablehnt. Rechtlich verbindlich — Ärzte und Kliniken müssen sie beachten.' },
                { q: 'Muss eine Patientenverfügung notariell beglaubigt werden?', a: 'Nein — Schriftform und eigenhändige Unterschrift mit Datum reichen. Ein Notar ist nicht nötig, erhöht aber die Beweissicherheit.' },
                { q: 'Was passiert ohne Patientenverfügung?', a: 'Ohne PV entscheiden im Notfall zunächst Angehörige (wenn vorhanden und einig) oder ein gerichtlich bestellter Betreuer. Das kann zu Entscheidungen führen die nicht dem eigenen Wunsch entsprechen.' },
                { q: 'Kann man eine Patientenverfügung widerrufen?', a: 'Ja — jederzeit und ohne besondere Form. Es reicht die schriftliche Erklärung des Widerrufs oder die körperliche Vernichtung aller Exemplare.' },
                { q: 'Was ist der Unterschied zur Vorsorgevollmacht?', a: 'Die Patientenverfügung regelt direkt welche Behandlungen gewünscht/abgelehnt werden. Die Vorsorgevollmacht bestimmt eine Person die stellvertretend Entscheidungen trifft. Beide zusammen geben den umfassendsten Schutz.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="patientenverfuegung-aufsetzen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
