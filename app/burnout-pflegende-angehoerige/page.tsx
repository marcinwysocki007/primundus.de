import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('burnout-pflegende-angehoerige', '25. April 2026')

const SECTIONS = [
  { id: 'zeichen', title: 'Anzeichen erkennen' },
  { id: 'ursachen', title: 'Warum Burnout entsteht' },
  { id: 'hilfe', title: 'Sofortige Entlastung' },
  { id: 'praevention', title: 'Langfristig schützen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Burnout pflegende Angehörige — Warnsignale & Hilfe',
  description: 'Burnout durch Pflege erkennen: Erschöpfung, Isolation, Reizbarkeit. Was sofort hilft und wie eine 24h-Betreuungskraft pflegende Angehörige dauerhaft entlastet.',
  alternates: { canonical: 'https://primundus.de/burnout-pflegende-angehoerige' },
  openGraph: {
    title: 'Burnout pflegende Angehörige | Primundus',
    description: 'Warnsignale für Burnout durch Pflege und wie man Angehörige dauerhaft entlastet.',
    url: 'https://primundus.de/burnout-pflegende-angehoerige',
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
    headline: 'Burnout pflegende Angehörige — Warnsignale, Ursachen & Hilfe',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/burnout-pflegende-angehoerige',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Burnout pflegende Angehörige', item: 'https://primundus.de/burnout-pflegende-angehoerige' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Woran erkennt man Burnout bei pflegenden Angehörigen?', acceptedAnswer: { '@type': 'Answer', text: 'Typische Zeichen: chronische Erschöpfung die Schlaf nicht behebt, zunehmende Reizbarkeit und Ungeduld gegenüber dem Pflegebedürftigen, sozialer Rückzug, Vernachlässigung der eigenen Gesundheit, Schuldgefühle kombiniert mit Hilflosigkeit, Schlafstörungen und körperliche Beschwerden ohne organische Ursache.' } },
      { '@type': 'Question', name: 'Wie viele pflegende Angehörige leiden unter Burnout?', acceptedAnswer: { '@type': 'Answer', text: 'Studien zeigen dass rund 30–50 % der pflegenden Angehörigen unter erhöhtem Stressniveau leiden, ein erheblicher Teil entwickelt klinisch relevante Burnout-Symptome oder Depressionen. Besonders betroffen: Kinder die berufstätig sind und gleichzeitig Eltern pflegen.' } },
      { '@type': 'Question', name: 'Was hilft bei Burnout durch Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Sofortige Entlastung: Verhinderungspflege oder Kurzzeitpflege aus dem Entlastungsbudget (3.539 €/Jahr) nutzen. Mittelfristig: 24h-Betreuungskraft die die Hauptlast übernimmt. Parallel: eigene Beratung bei Pflegestützpunkten, Selbsthilfegruppen für pflegende Angehörige.' } },
    ],
  },
]

export default function BurnoutPflegendeAngehoerige() {
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
            { label: "Burnout pflegende Angehörige" },
          ]}
          augenbraue="Ratgeber Angehörige"
          titel="Burnout pflegende Angehörige — Warnsignale erkennen & Hilfe finden"
          einleitung="Rund 30–50 % der pflegenden Angehörigen leiden unter chronischer Überlastung. Burnout entwickelt sich schleichend — und wer ihn nicht rechtzeitig erkennt, gefährdet am Ende die eigene Gesundheit und die Pflege des Angehörigen. Die wichtigste Botschaft: Entlastung zu suchen ist keine Schwäche, sondern Verantwortung."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                '30–50 % der pflegenden Angehörigen leiden unter Burnout-Symptomen',
                'Burnout entwickelt sich schleichend — frühe Zeichen oft ignoriert',
                'Sofortige Entlastung: Entlastungsbudget (3.539 €/Jahr) für Auszeit nutzen',
                '24h-Betreuungskraft: dauerhafteste Entlastung — übernimmt Hauptlast',
                'Pflegestützpunkte und Selbsthilfegruppen kostenlos nutzen',
                'Eigene Gesundheit schützen = beste Pflege für den Angehörigen',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <DunklerAbschnitt
            id="zeichen"
            titel="Warnsignale erkennen — diese Zeichen ernst nehmen"
            einleitung={"Burnout bei pflegenden Angehörigen entwickelt sich über Monate und Jahre. Die Zeichen werden oft als \"normal\" abgetan — dabei sind sie ein ernstes Signal des Körpers."}
            punkte={[
              { title: 'Chronische Erschöpfung', desc: 'Müdigkeit die auch nach Schlaf nicht besser wird. Das Gefühl nie wirklich erholt zu sein — selbst nach freien Stunden.' },
              { title: 'Zunehmende Reizbarkeit', desc: 'Ungeduld und Gereiztheit gegenüber dem Pflegebedürftigen, aber auch gegenüber Familienmitgliedern und Kollegen. Gefolgt von Schuldgefühlen.' },
              { title: 'Sozialer Rückzug', desc: 'Freundschaften einschlafen lassen, Einladungen absagen, Hobbys aufgeben. "Ich habe keine Zeit und keine Kraft mehr."' },
              { title: 'Vernachlässigung der eigenen Gesundheit', desc: 'Eigene Arzttermine vergessen oder verschieben. Schmerzen ignorieren. Keine Zeit mehr für Sport oder Erholung.' },
              { title: 'Körperliche Beschwerden', desc: 'Kopfschmerzen, Rückenprobleme, Schlafstörungen, häufige Infekte — ohne organische Ursache. Der Körper zeigt was die Seele nicht mehr schafft.' },
              { title: 'Gefühl der Hilflosigkeit', desc: '"Ich schaffe das nicht mehr, aber ich kann nicht aufhören." Dieses Gefühl — kombiniert mit Schuldgefühlen beim Gedanken an Entlastung — ist ein zentrales Burnout-Symptom.' },
            ]}
          />

          <Abschnitt id="ursachen" titel="Warum Burnout bei Pflegenden entsteht">
            <Text>
              Pflege ist kein Teilzeitjob — sie ist oft 24 Stunden am Tag, 7 Tage/Woche, ohne Urlaubsanspruch. Hinzu kommen spezifische Belastungsfaktoren die Burnout besonders wahrscheinlich machen.
            </Text>
            <Punkte
              punkte={[
                { title: 'Doppelbelastung Beruf + Pflege', desc: 'Viele pflegende Angehörige sind berufstätig und versuchen beides zu stemmen. Der Feierabend beginnt mit der nächsten Schicht — zuhause.' },
                { title: 'Kein Ende in Sicht', desc: 'Anders als bei anderen Belastungen gibt es bei chronischer Pflege kein Ablaufdatum. Die Belastung steigt oft sogar mit der Zeit.' },
                { title: 'Gesellschaftliche Erwartungen', desc: '"Du müsstest das doch schaffen — das ist deine Mutter." Schuldgefühle bei jedem Gedanken an Entlastung.' },
                { title: 'Fehlende Unterstützung', desc: 'Viele Pflegende wissen nicht welche Leistungen ihnen zustehen — und zahlen damit mit ihrer Gesundheit.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="hilfe" titel="Sofortige Entlastung — diese Möglichkeiten gibt es">
            <Text>
              Entlastung ist kein Luxus — sie ist eine gesetzliche Leistung. Wer das Entlastungsbudget nicht nutzt, verschenkt Geld und Gesundheit.
            </Text>
            <Punkte
              punkte={[
                { title: 'Entlastungsbudget nutzen — 3.539 €/Jahr', desc: 'Seit Juli 2025 gibt es ein gemeinsames Budget für Verhinderungs- und Kurzzeitpflege. Es ermöglicht Auszeiten von mehreren Wochen — während die Pflege durch eine Vertretung sichergestellt wird. Kein Antrag nötig — einfach bei der Pflegekasse anmelden.' },
                { title: '24h-Betreuungskraft — dauerhafte Entlastung', desc: 'Die wirkungsvollste Lösung: Eine Betreuungskraft übernimmt die tägliche Pflege. Angehörige sind wieder Angehörige — nicht rund um die Uhr Pflegepersonal. Primundus startet in 4–7 Tagen.' },
                { title: 'Tagespflege — stundenweise Entlastung', desc: 'Der pflegebedürftige Mensch verbringt einige Tage pro Woche in einer Tagespflegeeinrichtung. Angehörige haben Freizeit — der Pflegebedürftige hat Struktur und Gesellschaft.' },
                { title: 'Pflegestützpunkte — kostenlose Beratung', desc: 'In jedem Bundesland gibt es kostenlose Pflegestützpunkte. Beratung zu Leistungsansprüchen, Unterstützungsangeboten und Entlastungsmöglichkeiten — ohne Voranmeldung.' },
              ]}
            />
            <MehrDazu
              label="Entlastungsbudget im Detail:"
              links={[{ href: "/verhinderungspflege", text: "Verhinderungspflege & Entlastungsbudget 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="praevention" titel="Langfristig schützen — was hilft wirklich">
            <Punkte
              punkte={[
                { title: 'Grenzen setzen lernen', desc: '"Ich kann nicht alles" ist keine Niederlage — es ist Realismus. Wer klare Grenzen setzt, pflegt länger und besser als wer sich bis zum Zusammenbruch verausgabt.' },
                { title: 'Hilfe annehmen', desc: 'Freunde und Familie in die Pflege einbinden. Professionelle Unterstützung organisieren. "Ich schaffe das allein" ist oft keine Tugend — sondern ein Risiko.' },
                { title: 'Eigene Bedürfnisse ernst nehmen', desc: 'Sport, Schlaf, soziale Kontakte, eigene Arzttermine — das sind keine Extras, sondern Grundlage für gute Pflege.' },
                { title: 'Selbsthilfegruppen', desc: 'Der Austausch mit anderen pflegenden Angehörigen ist heilsam. Lokale Gruppen über die Pflegekasse oder die Alzheimer Gesellschaft finden.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Woran erkennt man Burnout bei pflegenden Angehörigen?', a: 'Chronische Erschöpfung die Schlaf nicht behebt, Reizbarkeit, sozialer Rückzug, Vernachlässigung der eigenen Gesundheit, körperliche Beschwerden ohne organische Ursache, Gefühl der Hilflosigkeit kombiniert mit Schuldgefühlen.' },
                { q: 'Was hilft sofort bei Burnout durch Pflege?', a: 'Das Entlastungsbudget (3.539 €/Jahr) für Verhinderungs- oder Kurzzeitpflege nutzen — das ermöglicht mehrwöchige Auszeiten. Kostenlose Beratung bei Pflegestützpunkten. Mittelfristig: 24h-Betreuungskraft die die tägliche Hauptlast übernimmt.' },
                { q: 'Darf man Pflege abgeben?', a: 'Ja — und es ist oft das Verantwortlichste was man tun kann. Eine professionelle 24h-Betreuungskraft bietet oft bessere Pflege als erschöpfte Angehörige. Pflege abgeben bedeutet nicht aufgeben — sondern klug organisieren.' },
                { q: 'Welche Leistungen stehen pflegenden Angehörigen zu?', a: 'Pflegegeld kann an pflegende Angehörige weitergegeben werden. Das Entlastungsbudget (3.539 €/Jahr) ermöglicht Urlaub. Pflegezeitgesetz: bis zu 6 Monate Auszeit vom Beruf möglich. Pflegekurs: Kostenlose Schulung durch die Pflegekasse.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="burnout-pflegende-angehoerige" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
