import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegekraft-aus-bulgarien', '25. April 2026')

const SECTIONS = [
  { id: 'warum', title: 'Warum Pflegekraft aus Bulgarien?' },
  { id: 'entsendemodell', title: 'Das Entsendemodell — legal & sicher' },
  { id: 'qualifikation', title: 'Qualifikation & Deutschkenntnisse' },
  { id: 'kosten', title: 'Kosten & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Bulgarien — legal, Kosten & Entsendemodell',
  description: 'Pflegekraft aus Bulgarien: Wie das Entsendemodell funktioniert, was eine bulgarische Betreuungskraft kostet und worauf bei der Auswahl zu achten ist.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-bulgarien' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft aus Bulgarien | Primundus',
    description: 'Pflegekraft aus Bulgarien im Entsendemodell: legal, sicher und oft eine gute Wahl.',
    url: 'https://primundus.de/pflegekraft-aus-bulgarien',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft aus Bulgarien — legal, Kosten und Entsendemodell',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-bulgarien',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Bulgarien', item: 'https://primundus.de/pflegekraft-aus-bulgarien' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Ist eine Pflegekraft aus Bulgarien legal?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn sie im Entsendemodell über eine seriöse Agentur vermittelt wird. Die bulgarische Betreuungskraft ist bei einem Unternehmen in Bulgarien angestellt und wird mit A1-Bescheinigung legal nach Deutschland entsandt. Primundus arbeitet ausschließlich im rechtssicheren Entsendemodell.' } },
      { '@type': 'Question', name: 'Was kostet eine Pflegekraft aus Bulgarien?', acceptedAnswer: { '@type': 'Answer', text: 'Die Kosten entsprechen dem allgemeinen Primundus-Preisrahmen: 2.200–3.500 €/Monat je nach Pflegebedarf — unabhängig ob die Kraft aus Polen, Bulgarien oder einem anderen EU-Land kommt.' } },
    ],
  },
]

export default function PflegekraftAusBulgarien() {
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
            { label: "Pflegekraft aus Bulgarien" },
          ]}
          augenbraue="Ratgeber Pflegekräfte"
          titel="Pflegekraft aus Bulgarien — legal, Kosten & Entsendemodell"
          einleitung="Bulgarien ist EU-Mitglied — das bedeutet: Betreuungskräfte aus Bulgarien können im selben rechtlich abgesicherten Entsendemodell nach Deutschland kommen wie Kräfte aus Polen oder Rumänien. Primundus arbeitet auf Wunsch auch bulgarische Betreuungskräfte — im selben Preisrahmen, derselben Rechtssicherheit, denselben Qualitätsstandards."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blick={[
                'Bulgarien ist EU-Mitglied — Entsendemodell funktioniert identisch wie bei Polen',
                'Rechtssicher mit A1-Bescheinigung — vollständiger Schutz für die Familie',
                'Kosten: 2.200–3.500 €/Monat — identisch zu anderen EU-Kräften',
                'Qualifikationsstandards: Primundus prüft Erfahrung, Deutschkenntnisse, Referenzen',
                'Kraftwechsel alle 6–8 Wochen — nahtloser Übergang organisiert durch Primundus',
                'Täglich kündbar — volle Flexibilität',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="warum" titel="Warum Pflegekraft aus Bulgarien?">
            <Text>
              Bulgarien hat eine lange Tradition in der Pflege und Betreuung älterer Menschen. Viele bulgarische Betreuungskräfte haben langjährige Erfahrung in der häuslichen 24h-Pflege — in Deutschland, Österreich und anderen EU-Ländern. Manchmal passt schlicht die Persönlichkeit einer bulgarischen Kraft besonders gut zu einer bestimmten Pflegesituation.
            </Text>
            <Text>
              Entscheidend ist letztlich nicht das Herkunftsland — sondern die Qualifikation, Erfahrung, Deutschkenntnisse und Persönlichkeit der einzelnen Person. Primundus wählt die passende Kraft aus dem gesamten EU-Pool aus.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="entsendemodell"
            titel="Das Entsendemodell — legal & sicher"
            einleitung="Das Entsendemodell funktioniert bei Bulgarien identisch wie bei Polen oder Rumänien. Die Betreuungskraft ist bei einem bulgarischen Unternehmen angestellt, dort sozialversichert und wird mit A1-Bescheinigung für typischerweise 6–8 Wochen nach Deutschland entsandt."
            punkte={[
              { title: 'Für die Familie', desc: 'Kein eigenes Arbeitsverhältnis mit der Kraft. Vertrag mit Primundus als Agentur. Keine deutschen Sozialabgaben. Bei Kontrolle: A1-Bescheinigung vorzeigen — fertig.' },
              { title: 'Für die Betreuungskraft', desc: 'Angestellt in Bulgarien mit bulgarischer Sozialversicherung. A1-Bescheinigung sichert legalen Status in Deutschland. Regelmäßiger Wechsel ermöglicht Rückkehr zur Familie in Bulgarien.' },
              { title: 'Qualitätskontrolle durch Primundus', desc: 'Alle Kräfte — unabhängig vom Herkunftsland — werden von Primundus auf Erfahrung, Deutschkenntnisse und Referenzen geprüft.' },
            ]}
          >
            <MehrDazu
              label="Entsendemodell erklärt:"
              links={[{ href: "/pflegekraft-legal-beschaeftigen", text: "Pflegekraft legal beschäftigen — die 3 Wege" }, { href: "/pflegekraft-aus-polen", text: "Pflegekraft aus Polen" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="qualifikation" titel="Qualifikation & Deutschkenntnisse">
            <Text>
              Primundus prüft alle Betreuungskräfte — unabhängig vom Herkunftsland — nach denselben Standards.
            </Text>
            <Punkte
              punkte={[
                { title: 'Pflegeerfahrung', desc: 'Mindestens 1–2 Jahre Erfahrung in der häuslichen 24h-Betreuung. Anzahl und Art früherer Einsätze.' },
                { title: 'Deutschkenntnisse', desc: 'Grundkommunikation auf Deutsch Pflicht. Primundus prüft aktiv — kein Verlass auf Eigenangaben.' },
                { title: 'Referenzen', desc: 'Kontakt zu früheren Familien möglich. Primundus stellt auf Anfrage Referenzen bereit.' },
                { title: 'Spezialerfahrung', desc: 'Bei spezifischen Erkrankungen (Demenz, Parkinson, Schlaganfall) auf entsprechende Erfahrung achten — wird bei der Auswahl berücksichtigt.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kosten & Kassenzuschüsse">
            <Text>
              Die Kosten für eine bulgarische Betreuungskraft über Primundus entsprechen dem allgemeinen Preisrahmen — das Herkunftsland hat keinen Einfluss auf den Preis.
            </Text>
            <Tabelle
              titel=""
              zeilen={[
                ['Kosten Primundus', '2.200–3.500 €/Monat', 'Je nach Pflegebedarf'],
                ['Pflegegeld PG 3', '– 599 €/Monat', 'Kassenzuschuss'],
                ['Entlastungsbetrag', '– 131 €/Monat', 'Kassenzuschuss'],
                ['Entlastungsbudget (anteilig)', '– ca. 295 €/Monat', 'Kassenzuschuss'],
                ['Eigenanteil (ca.)', 'ca. 1.700–2.500 €/Monat', 'Je nach PG und Kosten'],
              ]}
            />
            <MehrDazu
              label="Alle Kosten & Zuschüsse:"
              links={[{ href: "/kosten", text: "Was kostet 24h-Pflege?" }, { href: "/finanzierung", text: "Alle Kassenzuschüsse 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Ist eine Pflegekraft aus Bulgarien legal?', a: 'Ja — wenn sie im Entsendemodell über eine seriöse Agentur vermittelt wird. A1-Bescheinigung aus Bulgarien belegt den legalen EU-Entsendestatus. Primundus arbeitet ausschließlich im rechtssicheren Entsendemodell.' },
                { q: 'Was kostet eine Pflegekraft aus Bulgarien?', a: 'Identisch zum allgemeinen Primundus-Preisrahmen: 2.200–3.500 €/Monat — das Herkunftsland hat keinen Einfluss auf den Preis.' },
                { q: 'Wie unterscheiden sich polnische und bulgarische Betreuungskräfte?', a: 'Rechtlich und preislich identisch — beide EU-Länder, beide im Entsendemodell. Qualitätsstandards sind bei Primundus für alle Kräfte gleich. Manchmal passt die Persönlichkeit einer bulgarischen Kraft besser — das wird individuell berücksichtigt.' },
                { q: 'Wie finde ich eine passende Betreuungskraft aus Bulgarien?', a: 'Primundus wählt aus dem gesamten EU-Pool die passende Kraft aus — auf Wunsch aus Bulgarien. Anfrage genügt: 089 200 000 830 oder info@primundus.de.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekraft-aus-bulgarien" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
