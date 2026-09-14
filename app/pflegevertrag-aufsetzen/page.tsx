import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, HakenListe, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegevertrag-aufsetzen', '25. April 2026')

const SECTIONS = [
  { id: 'warum', title: 'Warum ein Pflegevertrag wichtig ist' },
  { id: 'inhalte', title: 'Was in den Vertrag gehört' },
  { id: 'modelle', title: 'Vertrag je nach Beschäftigungsmodell' },
  { id: 'kuendigung', title: 'Kündigung & Fristen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegevertrag aufsetzen — was muss rein? Muster & Tipps',
  description: 'Pflegevertrag aufsetzen: Was in einen Pflegevertrag gehört, welches Modell für wen gilt und worauf bei der Kündigung geachtet werden muss. Mit Checkliste.',
  alternates: { canonical: 'https://primundus.de/pflegevertrag-aufsetzen' },
  openGraph: {
    title: 'Pflegevertrag aufsetzen | Primundus',
    description: 'Was in einen Pflegevertrag gehört, Beschäftigungsmodelle und Kündigungsfristen — Checkliste und Tipps.',
    url: 'https://primundus.de/pflegevertrag-aufsetzen',
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
    headline: 'Pflegevertrag aufsetzen — was muss rein?',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegevertrag-aufsetzen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegevertrag aufsetzen', item: 'https://primundus.de/pflegevertrag-aufsetzen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was muss in einen Pflegevertrag?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Pflegevertrag sollte enthalten: Vertragsparteien, Leistungsumfang (konkrete Tätigkeiten), Arbeitszeit und Dienstplan, Vergütung und Zahlungsmodalitäten, Kost und Logis, Urlaubs- und Krankheitsregelungen, Kündigungsfristen und Datenschutz.' } },
      { '@type': 'Question', name: 'Wer schließt den Pflegevertrag beim Entsendemodell?', acceptedAnswer: { '@type': 'Answer', text: 'Beim Entsendemodell schließt die Familie einen Vertrag mit der deutschen Vermittlungsagentur (z.B. Primundus) — nicht direkt mit der Betreuungskraft. Die Kraft hat einen Arbeitsvertrag mit dem entsendenden Unternehmen im EU-Heimatland.' } },
    ],
  },
]

export default function PflegevertragAufsetzen() {
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
            { label: "Organisation", href: "/organisation" },
            { label: "Pflegevertrag aufsetzen" },
          ]}
          augenbraue="Ratgeber Vertrag"
          titel="Pflegevertrag aufsetzen — was muss rein?"
          einleitung="Ein schriftlicher Pflegevertrag schützt beide Seiten — die Familie und die Betreuungskraft. Er regelt Leistungen, Arbeitszeiten, Vergütung und Kündigungsmodalitäten klar und verbindlich. Was genau hineingehört, hängt vom Beschäftigungsmodell ab. Beim Entsendemodell über Primundus ist der Vertrag standardisiert und rechtssicher."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Pflicht-Inhalte jedes Pflegevertrags">
              <HakenListe punkte={[
                'Vertragsparteien: vollständige Namen und Adressen beider Seiten',
                'Leistungsumfang: konkrete Tätigkeiten (Grundpflege, Haushalt, Betreuung)',
                'Arbeitszeit: Wochenstunden, Dienstzeiten, Bereitschaftszeiten',
                'Vergütung: Höhe, Zahlungsmodalitäten, Datum',
                'Kost und Logis: Wert und Anrechnung auf Vergütung',
                'Urlaubs- und Krankheitsregelungen',
                'Kündigungsfristen',
              ]} />
            </Kasten>
          </Vorspann>

          <Abschnitt id="warum" titel="Warum ein Pflegevertrag so wichtig ist">
            <Text>
              Ohne schriftlichen Vertrag entstehen schnell Missverständnisse: Welche Tätigkeiten sind inbegriffen? Wie viele Stunden? Was passiert bei Krankheit der Betreuungskraft? Wer kümmert sich um Ersatz? Ein klarer Vertrag schafft von Anfang an Klarheit und vermeidet Konflikte.
            </Text>
            <Text>
              Rechtlich ist ein schriftlicher Vertrag bei Direktanstellung Pflicht. Beim Entsendemodell regelt der Vertrag mit der Agentur alle wesentlichen Punkte. Auf keinen Fall sollte auf einen Vertrag verzichtet werden — auch nicht bei vertrauensvollen Verhältnissen.
            </Text>
          </Abschnitt>

          <Abschnitt id="inhalte" titel="Was in den Pflegevertrag gehört — vollständige Checkliste">
            <Punkte
              punkte={[
                { title: 'Vertragsparteien', desc: 'Vollständige Namen, Adressen, Geburtsdaten beider Seiten. Bei Entsendemodell: Agentur als Vertragspartner, Name der Betreuungskraft als Anlage.' },
                { title: 'Leistungsumfang', desc: 'Konkret benennen: Körperpflege (Waschen, Anziehen, Zahnpflege), Haushalt (Kochen, Reinigung, Einkauf), Betreuung (Spaziergänge, Gespräche, Arztbegleitung). Was NICHT inbegriffen ist ebenfalls festhalten.' },
                { title: 'Arbeitszeit & Dienstplan', desc: 'Wochenstunden, Kern-Dienstzeiten, Bereitschaftsdienst-Regelung (Nacht/Wochenende). In Deutschland gilt das Arbeitszeitgesetz — max. 8 Stunden täglich reguläre Arbeitszeit.' },
                { title: 'Vergütung', desc: 'Monatliches Bruttogehalt, Zahlungsdatum, Zahlungsweg (Überweisung). Mindestlohn einhalten. Kost und Logis: Wert schriftlich festhalten und Anrechnung auf Vergütung regeln.' },
                { title: 'Urlaub & Krankheit', desc: 'Urlaubsanspruch (mind. 4 Wochen nach Bundesurlaubsgesetz), Krankheitsregelung (Lohnfortzahlung 6 Wochen), Vertretungsregelung bei Ausfall.' },
                { title: 'Kündigungsregelung', desc: 'Kündigungsfristen für beide Seiten, außerordentliche Kündigung bei schwerem Fehlverhalten, Übergabeprozess bei Kündigung.' },
                { title: 'Datenschutz', desc: 'Einwilligung für die Verarbeitung personenbezogener Daten der pflegebedürftigen Person, Schweigepflicht der Betreuungskraft.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="modelle"
            titel="Vertrag je nach Beschäftigungsmodell"
            einleitung="Das Beschäftigungsmodell bestimmt wer mit wem einen Vertrag schließt."
            punkte={[
              { title: 'Entsendemodell (über Agentur wie Primundus)', desc: 'Familie schließt Vertrag mit der deutschen Agentur. Die Betreuungskraft hat eigenen Arbeitsvertrag mit dem entsendenden EU-Unternehmen. Einfach, rechtssicher, klar geregelt.' },
              { title: 'Direktanstellung', desc: 'Familie ist Arbeitgeberin — schließt Arbeitsvertrag direkt mit der Betreuungskraft. Alle Arbeitgebergerechtlichen Pflichten liegen bei der Familie: Lohnabrechnung, Sozialversicherung, Urlaubsplanung.' },
            ]}
          >
            <MehrDazu
              label="Alle Modelle erklärt:"
              links={[{ href: "/pflegekraft-legal-beschaeftigen", text: "Pflegekraft legal beschäftigen — die 3 Wege" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="kuendigung" titel="Kündigung & Fristen">
            <Text>
              Bei Primundus ist der Vertrag täglich kündbar — das ist ein zentraler Vorteil des Entsendemodells. Bei Direktanstellung gelten die gesetzlichen Kündigungsfristen nach Beschäftigungsdauer.
            </Text>
            <Tabelle
              titel=""
              kopf={['Modell', 'Kündigungsfrist', 'Ersatz bei Kündigung']}
              zeilen={[
                ['Primundus (Entsendung)', 'Täglich kündbar', 'Primundus stellt sofort Ersatzkraft'],
                ['Direktanstellung <6 Monate', '2 Wochen', 'Familie muss selbst suchen'],
                ['Direktanstellung >2 Jahre', '2 Monate', 'Familie muss selbst suchen'],
              ]}
            />
            <MehrDazu
              label="Pflegekraft wechseln:"
              links={[{ href: "/pflegekraft-wechseln", text: "Pflegekraft wechseln — so geht es reibungslos" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Pflegevertrag">
            <Fragen
              fragen={[
                { q: 'Was muss in einen Pflegevertrag?', a: 'Vertragsparteien, Leistungsumfang (konkrete Tätigkeiten), Arbeitszeiten, Vergütung, Kost und Logis, Urlaubs- und Krankheitsregelungen, Kündigungsfristen, Datenschutz.' },
                { q: 'Wer schließt beim Entsendemodell den Vertrag?', a: 'Die Familie schließt den Vertrag mit der deutschen Agentur (z.B. Primundus) — nicht direkt mit der Betreuungskraft. Die Kraft hat einen Arbeitsvertrag mit dem entsendenden EU-Unternehmen.' },
                { q: 'Kann man den Pflegevertrag bei Primundus täglich kündigen?', a: 'Ja — Primundus-Verträge sind täglich kündbar, taggenaue Abrechnung. Das ist einer der zentralen Vorteile des Entsendemodells.' },
                { q: 'Muss der Pflegevertrag schriftlich sein?', a: 'Bei Direktanstellung ist Schriftform Pflicht. Beim Entsendemodell regelt der Agenturvertrag alle wesentlichen Punkte schriftlich. Auf einen schriftlichen Vertrag sollte in keinem Fall verzichtet werden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegevertrag-aufsetzen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
