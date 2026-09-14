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

const AKTUALISIERT = aktualisiertAm('pflegekraft-aus-rumaenien', '25. April 2026')

const SECTIONS = [
  { id: 'warum', title: 'Pflegekraft aus Rumänien — warum?' },
  { id: 'entsendemodell', title: 'Das Entsendemodell' },
  { id: 'qualifikation', title: 'Qualifikation & Sprache' },
  { id: 'kosten', title: 'Kosten & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Rumänien — legal, Kosten & Entsendemodell',
  description: 'Pflegekraft aus Rumänien im Entsendemodell: Wie es funktioniert, was es kostet und worauf bei der Auswahl zu achten ist. Rechtssicher mit A1-Bescheinigung.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-rumaenien' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft aus Rumänien | Primundus',
    description: 'Rumänische Pflegekraft im Entsendemodell: legal, geprüft, rechtssicher.',
    url: 'https://primundus.de/pflegekraft-aus-rumaenien',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft aus Rumänien — legal, Kosten und Entsendemodell',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-rumaenien',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Rumänien', item: 'https://primundus.de/pflegekraft-aus-rumaenien' },
    ],
  },
]

export default function PflegekraftAusRumaenien() {
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
            { label: "Pflegekraft aus Rumänien" },
          ]}
          augenbraue="Ratgeber Pflegekräfte"
          titel="Pflegekraft aus Rumänien — legal, Kosten & Entsendemodell"
          einleitung="Rumänien ist EU-Mitglied seit 2007 — rumänische Betreuungskräfte können im selben rechtlich abgesicherten Entsendemodell nach Deutschland kommen wie Kräfte aus Polen oder Bulgarien. Primundus arbeitet auf Wunsch auch rumänische Betreuungskräfte — vollständig rechtssicher, mit A1-Bescheinigung und denselben Qualitätsstandards."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blick={[
                'Rumänien ist EU-Mitglied — Entsendemodell funktioniert identisch wie bei Polen',
                'Rechtssicher mit A1-Bescheinigung aus Rumänien',
                'Rumänien: zweithäufigste Herkunft nach Polen bei osteuropäischen Pflegekräften',
                'Kosten: 2.200–3.500 €/Monat — identisch zu anderen EU-Kräften',
                'Primundus prüft Erfahrung, Deutschkenntnisse und Referenzen',
                'Täglich kündbar — volle Flexibilität',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="warum" titel="Pflegekraft aus Rumänien — warum eine gute Wahl?">
            <Text>
              Rumänien ist nach Polen das zweitgrößte Herkunftsland für osteuropäische Pflegekräfte in Deutschland. Rumänische Betreuungskräfte haben oft mehrjährige Erfahrung in der häuslichen 24h-Pflege in verschiedenen EU-Ländern und sind häufig auch deutschsprachig aufgewachsen oder haben gute Deutschkenntnisse durch frühere Einsätze.
            </Text>
            <Text>
              Letztlich ist das Herkunftsland zweitrangig — entscheidend sind Qualifikation, Erfahrung, Deutschkenntnisse und die Persönlichkeit der einzelnen Person. Primundus wählt aus dem gesamten EU-Pool die passende Kraft aus.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="entsendemodell"
            titel="Das Entsendemodell — so funktioniert es"
            einleitung="Das Entsendemodell funktioniert bei Rumänien identisch wie bei Polen oder Bulgarien. Die Betreuungskraft ist bei einem rumänischen Unternehmen angestellt, dort sozialversichert und wird mit A1-Bescheinigung nach Deutschland entsandt."
            punkte={[
              { title: 'Für die Familie', desc: 'Kein eigenes Arbeitsverhältnis — Vertrag nur mit Primundus als Agentur. Keine deutschen Sozialabgaben. Rechtssicher.' },
              { title: 'Für die Betreuungskraft', desc: 'Angestellt in Rumänien, sozialversichert. A1-Bescheinigung sichert legalen Status in Deutschland. Regelmäßiger Wechsel ermöglicht Heimkehr.' },
              { title: 'A1-Bescheinigung', desc: 'Das zentrale Dokument beim Entsendemodell — belegt die Sozialversicherungspflicht im Heimatland und damit den legalen Entsendestatus. Bei Kontrolle vorzeigen.' },
            ]}
          >
            <MehrDazu
              label="Vollständige Erklärung:"
              links={[{ href: "/pflegekraft-legal-beschaeftigen", text: "Pflegekraft legal beschäftigen" }, { href: "/pflegekraft-aus-polen", text: "Pflegekraft aus Polen" }, { href: "/pflegekraft-aus-bulgarien", text: "Pflegekraft aus Bulgarien" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="qualifikation" titel="Qualifikation & Deutschkenntnisse">
            <Text>
              Primundus prüft alle Betreuungskräfte nach denselben Standards — unabhängig vom Herkunftsland:
            </Text>
            <Punkte
              punkte={[
                { title: 'Deutschkenntnisse', desc: 'Grundkommunikation auf Deutsch Pflicht. Viele rumänische Kräfte haben durch frühere Einsätze gute Deutschkenntnisse. Primundus prüft aktiv.' },
                { title: 'Pflegeerfahrung', desc: 'Mindestens 1–2 Jahre häusliche 24h-Betreuung. Anzahl und Art früherer Einsätze werden geprüft.' },
                { title: 'Spezialerfahrung', desc: 'Bei Demenz, Parkinson oder Schlaganfall wird auf entsprechende Vorerfahrung geachtet.' },
                { title: 'Referenzen', desc: 'Kontakt zu früheren Familien auf Anfrage möglich.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kosten & Kassenzuschüsse">
            <Text>
              Die Kosten entsprechen dem allgemeinen Primundus-Preisrahmen — das Herkunftsland hat keinen Einfluss auf den Preis.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-10">
            {[
              ['Kosten Primundus', '2.200–3.500 €/Monat', 'Je nach Pflegebedarf'],
              ['Pflegegeld PG 3', '– 599 €/Monat', 'Kassenzuschuss'],
              ['Entlastungsbetrag', '– 131 €/Monat', 'Kassenzuschuss'],
              ['Eigenanteil ca. PG 3', 'ca. 1.700–2.500 €/Monat', 'Nach Zuschüssen'],
            ].map(([pos, wert, hinweis]) => (
              <div key={pos} className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-pm-line">
                <span className="text-[14px] text-pm-body">{pos}</span>
                <span className="text-[14px] font-bold text-pm-ink">{wert}</span>
                <span className="text-[12px] text-pm-mute hidden md:block">{hinweis}</span>
              </div>
            ))}
          </div>
            <MehrDazu
              label="Alle Kosten:"
              links={[{ href: "/kosten", text: "Was kostet 24h-Pflege?" }, { href: "/eigenanteil-24h-pflege-senken", text: "Eigenanteil senken" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Ist eine Pflegekraft aus Rumänien legal?', a: 'Ja — wenn sie im Entsendemodell über eine seriöse Agentur vermittelt wird. A1-Bescheinigung aus Rumänien belegt den legalen EU-Entsendestatus. Vollständig rechtssicher.' },
                { q: 'Was kostet eine Pflegekraft aus Rumänien?', a: 'Identisch zum allgemeinen Primundus-Preisrahmen: 2.200–3.500 €/Monat. Das Herkunftsland hat keinen Einfluss auf den Preis.' },
                { q: 'Wie unterscheiden sich polnische und rumänische Pflegekräfte?', a: 'Rechtlich und preislich identisch — beide EU-Länder, beide im Entsendemodell. Qualitätsstandards sind bei Primundus gleich. Manchmal passt die Persönlichkeit einer rumänischen Kraft besser.' },
                { q: 'Wie finde ich eine passende Betreuungskraft aus Rumänien?', a: 'Primundus wählt aus dem gesamten EU-Pool die passende Kraft aus — auf Wunsch aus Rumänien. Anfrage genügt: 089 200 000 830 oder info@primundus.de.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekraft-aus-rumaenien" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
