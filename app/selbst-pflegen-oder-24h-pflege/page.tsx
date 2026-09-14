import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, HakenListe, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('selbst-pflegen-oder-24h-pflege', '25. April 2026')

const SECTIONS = [
  { id: 'ehrliche-fragen', title: 'Die ehrlichen Fragen' },
  { id: 'wenn-selbst', title: 'Wann Selbstpflege funktioniert' },
  { id: 'grenzen', title: 'Grenzen der Selbstpflege' },
  { id: 'kombination', title: 'Kombination: Angehörige + 24h-Kraft' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Selbst pflegen oder 24h-Pflege? — Ehrlicher Vergleich',
  description: 'Selbst pflegen oder 24-Stunden-Betreuung? Wann Angehörigenpflege funktioniert, wo ihre Grenzen liegen und was die Alternative kostet.',
  alternates: { canonical: 'https://primundus.de/selbst-pflegen-oder-24h-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Selbst pflegen oder 24h-Pflege? | Primundus',
    description: 'Wann Angehörigenpflege reicht — und wann eine 24h-Kraft die bessere Entscheidung ist.',
    url: 'https://primundus.de/selbst-pflegen-oder-24h-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Selbst pflegen oder 24h-Pflege — ehrlicher Vergleich',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/selbst-pflegen-oder-24h-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
      { '@type': 'ListItem', position: 3, name: 'Selbst pflegen oder 24h-Pflege', item: 'https://primundus.de/selbst-pflegen-oder-24h-pflege' },
    ],
  },
]

export default function SelbstPflegenOder24h() {
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
            { label: "Vergleiche", href: "/vergleiche" },
            { label: "Selbst pflegen oder 24h-Pflege" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="Selbst pflegen oder 24h-Pflege? — Ehrlicher Vergleich"
          einleitung="Die Entscheidung zwischen Selbstpflege und professioneller 24h-Betreuung ist eine der schwierigsten die pflegende Familien treffen. Sie ist emotional aufgeladen — und wird oft zu lange hinausgezögert. Dieser Ratgeber gibt keine schnelle Antwort. Aber er stellt die Fragen die gestellt werden müssen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="ehrliche-fragen" titel="Die ehrlichen Fragen — Selbsttest">
            <Text>
              Beantworten Sie diese Fragen ehrlich — sie zeigen wo Sie heute stehen.
            </Text>
            <Punkte
              punkte={[
                { title: 'Schlafen Sie durch?', desc: 'Wenn die Pflege nächtliche Unterbrechungen bedeutet — wer übernimmt das? Dauerhafter Schlafentzug macht die eigene Pflege unmöglich.' },
                { title: 'Haben Sie noch Zeit für sich?', desc: 'Mindestens 2 Stunden täglich die nur Ihnen gehören? Wenn nicht: Burnout ist nah.' },
                { title: 'Können Sie sich noch Fehler erlauben?', desc: 'Wer pflegt ist irgendwann müde und macht Fehler. Wer springt ein? Gibt es Backup?' },
                { title: 'Ist die Pflege körperlich für Sie noch machbar?', desc: 'Heben, Transfers, Körperpflege — das geht an die Grenzen. Rückenverletzungen durch Pflegearbeit sind häufig.' },
                { title: 'Haben Sie noch eine Beziehung — nicht nur eine Pflegebeziehung?', desc: 'Wer 24h pflegt hört irgendwann auf, Sohn oder Tochter zu sein und wird zur Pflegekraft. Das belastet beide Seiten.' },
                { title: 'Was würde passieren wenn Sie morgen ausfallen?', desc: 'Gibt es einen Plan B? Wenn nicht: Das Risiko liegt vollständig bei Ihnen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wenn-selbst" titel="Wann Selbstpflege funktioniert">
            <Text>
              Angehörigenpflege kann sehr gut funktionieren — unter bestimmten Voraussetzungen.
            </Text>
            <HakenListe punkte={[
              'Pflegebedarf ist klar begrenzt und berechenbar (keine Nacht-Situationen)',
              'Mehrere Angehörige teilen die Verantwortung fair und verlässlich',
              'Die pflegende Person hat eigene Auszeiten und Erholung',
              'Es gibt einen klaren Notfallplan wenn jemand ausfällt',
              'Die Beziehung zwischen Pflegenden und Pflegebedürftigem bleibt gut',
              'Körperlich ist die Pflege ohne Eigengefährdung machbar',
            ]} />
          </Abschnitt>

          <DunklerAbschnitt
            id="grenzen"
            titel="Grenzen der Selbstpflege — Warnsignale"
            einleitung="Diese Signale zeigen dass die Selbstpflege an ihre Grenzen stößt — und professionelle Unterstützung nötig wird."
            punkte={[
              { title: 'Chronische Erschöpfung', desc: 'Ständige Müdigkeit trotz Schlaf, keine Energie mehr für eigene Bedürfnisse. Das ist kein Durchhänger — das ist Erschöpfung.' },
              { title: 'Gefühle der Überforderung und Hilflosigkeit', desc: '"Ich kann nicht mehr aber ich kann nicht aufhören." Wenn das die tägliche Erfahrung ist, ist professionelle Hilfe keine Schwäche — sie ist die einzig richtige Entscheidung.' },
              { title: 'Vernachlässigung der eigenen Gesundheit', desc: 'Eigene Arzttermine werden abgesagt, eigene Erkrankungen werden ignoriert. Wer sich selbst nicht mehr pflegen kann, kann andere nicht gut pflegen.' },
              { title: 'Beziehungsschäden', desc: 'Wenn die Pflege die Beziehung zur pflegebedürftigen Person zerstört — beide leiden. Eine Betreuungskraft gibt der Beziehung wieder Raum.' },
              { title: 'Sicherheitsrisiken', desc: 'Wenn durch Erschöpfung Fehler passieren die die Sicherheit des Pflegebedürftigen gefährden.' },
            ]}
          >
            <MehrDazu
              label="Burnout erkennen:"
              links={[{ href: "/burnout-pflegende-angehoerige", text: "Burnout pflegender Angehöriger — Warnsignale & Hilfe" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="kombination" titel="Die beste Lösung: Kombination aus Angehörigen + 24h-Kraft">
            <Text>
              Die häufigste und meist beste Lösung ist nicht entweder-oder — sondern beides: Eine 24h-Betreuungskraft übernimmt die durchgehende Versorgung und Haushaltsführung. Angehörige können Tochter oder Sohn bleiben — für Besuche, Gespräche, gemeinsame Aktivitäten. Die Pflege wird zur Beziehung, nicht zur Last.
            </Text>
            <Tabelle
              titel=""
              kopf={["Aufgabe", "Betreuungskraft", "Angehörige"]}
              zeilen={[
                ['Körperpflege täglich', '✓', '—'],
                ['Haushalt & Kochen', '✓', '—'],
                ['Nachtbereitschaft', '✓', '—'],
                ['Medikamentenerinnerung', '✓', '—'],
                ['Arzt- und Behördengänge', '✓ (begleiten)', '✓ (koordinieren)'],
                ['Gesellschaft & Gespräch', '✓', '✓'],
                ['Entscheidungen treffen', '—', '✓'],
                ['Qualitätssicherung Kraft', '—', '✓'],
                ['Besuche, Ausflüge, Feiern', '—', '✓'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wann reicht Angehörigenpflege aus?', a: 'Wenn: Pflegebedarf klar begrenzt, mehrere Angehörige teilen die Last, es gibt Auszeiten und einen Notfallplan, körperliche und emotionale Grenzen noch nicht erreicht.' },
                { q: 'Wann wird eine 24h-Kraft nötig?', a: 'Wenn: Chronische Erschöpfung, Schlafentzug, keine eigene Zeit, Sicherheitsrisiken durch Erschöpfung, die Beziehung leidet, oder der Pflegebedarf die verfügbare Kapazität übersteigt.' },
                { q: 'Ist es ein Versagen wenn man professionelle Hilfe holt?', a: 'Nein — es ist die verantwortungsvolle Entscheidung. Eine 24h-Kraft ermöglicht es, wieder Tochter oder Sohn zu sein statt Vollzeit-Pflegerin. Die Beziehungsqualität steigt oft durch professionelle Entlastung.' },
                { q: 'Können Angehörige und 24h-Kraft zusammenarbeiten?', a: 'Ja — das ist die häufigste und beste Lösung. Die Kraft übernimmt die tägliche Versorgung, Angehörige koordinieren, besuchen und entscheiden. Klare Aufgabenteilung schafft Vertrauen für alle.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="selbst-pflegen-oder-24h-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
