import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Gruppen, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// 01.10.2026: Ersatz „schnellstmöglich, in der Regel innerhalb von 3 Tagen“ (Mustervertrag § 1 Nr. 4, Martin 01.10.: „ist auch
// richtig“); Krankheitstage ohne Honorar (§ 4 Nr. 6). Raus: „sofort/unverzüglich Ersatz“, „keine Versorgungslücke“,
// „durchgehend gesichert, ohne Lücken“, „unmittelbarer Wechsel“.
// 22.10.2026 (Martin): „Pflegeagentur“ statt „Anbieter“ (Primundus ist Pflegeagentur, kein Vermittler); Hauptaussage: passende
// Pflegekräfte sofort sehen und selbst auswählen; ohne Agentur wird die Familie Arbeitgeber und sucht bei jedem Wechsel neu.
const AKTUALISIERT = aktualisiertAm('pflegekraft-finden', '22. Oktober 2026')

const SECTIONS = [
  { id: 'wege', title: 'Wege zur Pflegekraft' },
  { id: 'agentur', title: 'Über eine Pflegeagentur: Vorteile' },
  { id: 'worauf-achten', title: 'Worauf bei der Auswahl achten?' },
  { id: 'ablauf', title: 'Ablauf bei Primundus' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft finden: Wege und worauf Sie achten sollten',
  description: 'Pflegekraft finden: Agentur, Anbieter mit eigenen Kräften oder Selbstständige? Worauf Sie bei Auswahl, Sprache und Rechtssicherheit achten sollten.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-finden' },
  openGraph: {
    title: 'Pflegekraft finden: Wege und worauf Sie achten sollten',
    description: 'Wie man eine zuverlässige Pflegekraft findet — Agentur vs. Direktsuche, Qualifikationen, Auswahlkriterien.',
    url: 'https://primundus.de/pflegekraft-finden',
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
    headline: 'Pflegekraft finden: welche Wege es gibt und worauf Sie bei der Auswahl achten',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-finden',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft finden', item: 'https://primundus.de/pflegekraft-finden' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie findet man eine gute Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Am einfachsten über eine Pflegeagentur wie Primundus. Sie sehen passende Pflegekräfte sofort mit Profil und wählen selbst aus. Primundus prüft die Kräfte, stellt Ersatz bei Ausfall und regelt das Rechtliche. Ohne Agentur werden Sie Arbeitgeber und suchen bei jedem Wechsel neu.' } },
      { '@type': 'Question', name: 'Was ist, wenn ich ohne Agentur suche?', acceptedAnswer: { '@type': 'Answer', text: 'Dann werden Sie Arbeitgeber und regeln Vertrag, Anmeldung und Lohn selbst. Fällt die Kraft aus oder muss sie wechseln, stehen Sie ohne Pflegekraft da, bis Sie eine neue gefunden haben. Von Schwarzarbeit raten wir ab.' } },
      { '@type': 'Question', name: 'Worauf sollte man bei der Auswahl achten?', acceptedAnswer: { '@type': 'Answer', text: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung (Anzahl und Art früherer Einsätze), Referenzen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen (Demenz, Parkinson) auf Spezialerfahrung achten.' } },
      { '@type': 'Question', name: 'Wie schnell findet Primundus eine Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Passende Pflegekräfte sehen Sie sofort nach der Kostenberechnung im Kundenportal. Eine Anreise ist schon in 3 Tagen möglich. Wann genau, richtet sich nach Ihrem Wunschtermin.' } },
    ],
  },
]

export default function PflegekraftFinden() {
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
            { label: "Pflegekraft finden" },
          ]}
          augenbraue="Ratgeber Pflegekräfte"
          titel="Pflegekraft finden: welche Wege es gibt und worauf Sie bei der Auswahl achten"
          einleitung="Wer Ihre Pflegekraft wird, ist die wichtigste Entscheidung bei der 24-Stunden-Pflege. Bei Primundus sehen Sie nach der Kostenberechnung sofort passende Pflegekräfte mit Profil und wählen selbst aus. Unterschreiben müssen Sie erst, wenn Sie sich für eine Kraft entschieden haben. Die Anreise ist schon in 3 Tagen möglich."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Pflegeagentur wie Primundus: passende Kräfte sofort sehen und selbst auswählen',
                'Ohne Agentur: Sie werden Arbeitgeber und suchen bei jedem Wechsel neu',
                'Deutschkenntnisse: Grundkommunikation ist Mindestanforderung',
                'Pflegeerfahrung: Anzahl und Art früherer Einsätze prüfen',
                'Persönlichkeit: Telefonat vorab möglich, entscheidend ist die Passung zur Pflegesituation',
                'Start: Anreise schon in 3 Tagen möglich',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wege" titel="Wege zur Pflegekraft: Welche Möglichkeiten gibt es?">
            <Punkte
              punkte={[
                { title: 'Über eine Pflegeagentur (empfohlen)', desc: 'Die Agentur prüft die Kräfte, plant den Einsatz und stellt Ersatz. Bei Primundus sehen Sie passende Pflegekräfte sofort im Kundenportal und wählen selbst aus. Die Kräfte sind bei Primundus angestellt und kommen im Entsendemodell mit A1-Bescheinigung.' },
                { title: 'Direktsuche über Portale', desc: 'Plattformen wie Pflegemarkt.de, care.de oder Kleinanzeigen. Sie stellen die Kraft selbst an und kümmern sich um Vertrag, Anmeldung und Lohn. Der Preis kann niedriger sein, Aufwand und Risiko liegen bei Ihnen.' },
                { title: 'Weiterempfehlung im Bekanntenkreis', desc: 'Oft der persönlichste Weg. Arbeitsvertrag und Sozialversicherung müssen Sie trotzdem selbst regeln.' },
              ]}
            />
            <Zwischentitel>Ohne Agentur: was Sie bedenken sollten</Zwischentitel>
            <Punkte
              punkte={[
                { title: 'Sie werden Arbeitgeber', desc: 'Arbeitsvertrag, Anmeldung zur Sozialversicherung, Lohnabrechnung, Urlaub und Lohnfortzahlung bei Krankheit liegen bei Ihnen. Das ist rechtlich und organisatorisch aufwendig.' },
                { title: 'Schwarzarbeit', desc: 'Hinweis: Wird die Pflegekraft ohne Anmeldung beschäftigt, ist das Schwarzarbeit. Es besteht die Gefahr von Bußgeldern und Nachzahlungen der Sozialabgaben. Davon raten wir ab.' },
                { title: 'Wechsel', desc: 'Muss die Kraft wechseln, regulär oder weil es nicht passt, suchen Sie von vorn. Bis eine neue Kraft da ist, stehen Sie ohne Pflegekraft da. Bei Primundus ist der reguläre Wechsel geplant, und passt eine Kraft nicht, kommt Ersatz in der Regel innerhalb von 3 Tagen.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="agentur"
            titel="Über eine Pflegeagentur: was die Vorteile sind"
            einleitung="Eine Pflegeagentur wie Primundus übernimmt viele Aufgaben, die bei der Direktsuche bei Ihnen liegen."
            punkte={[
              { title: 'Pflegekräfte sofort sehen und auswählen', desc: 'Nach der Kostenberechnung sehen Sie im Kundenportal passende Pflegekräfte mit Profil. Sie wählen selbst aus, ein Telefonat vorab ist möglich.' },
              { title: 'Geprüfte Qualifikation', desc: 'Pflegeerfahrung, Deutschkenntnisse und Referenzen werden vor dem Einsatz geprüft.' },
              { title: 'Rechtliche Absicherung', desc: 'Die Kräfte sind bei Primundus angestellt und im Entsendemodell mit A1-Bescheinigung im Einsatz. Sie werden nicht Arbeitgeber.' },
              { title: 'Ersatz bei Ausfall', desc: 'Wird die Betreuungskraft krank, stellt Primundus schnellstmöglich eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Die Krankheitstage berechnet Primundus nicht.' },
              { title: 'Wechsel organisiert', desc: 'Ob regulär alle 6 bis 8 Wochen oder weil es nicht passt: Primundus plant den Wechsel und stellt die nächste Kraft. Sie müssen nicht selbst suchen.' },
              { title: 'Persönliche Beratung', desc: 'Marta Kapcio und das Primundus-Team begleiten die Familie — von der ersten Anfrage bis zur laufenden Betreuung.' },
            ]}
          />

          <Abschnitt id="worauf-achten" titel="Worauf bei der Auswahl zu achten ist">
            <Text>
              Diese Kriterien sollten bei jeder Pflegekraft — ob über Agentur oder direkt — geprüft werden:
            </Text>
            <Gruppen
              gruppen={[
                { title: 'Deutschkenntnisse', zusatz: 'Pflicht', punkte: ['Grundlegende Kommunikation auf Deutsch ist Mindestanforderung. Bei Demenzbetroffenen kann emotionale Verbindung wichtiger sein als perfektes Deutsch.'] },
                { title: 'Pflegeerfahrung', zusatz: 'Pflicht', punkte: ['Wie viele Einsätze? Welche Pflegesituationen? Erfahrung mit spezifischen Erkrankungen (Demenz, Parkinson, Schlaganfall) bei Bedarf prüfen.'] },
                { title: 'Referenzen', zusatz: 'Empfohlen', punkte: ['Kontakt zu früheren Familien aufnehmen — falls verfügbar. Seriöse Agenturen stellen Referenzen auf Anfrage bereit.'] },
                { title: 'Führerschein', zusatz: 'Je nach Situation', punkte: ['Wenn Arztbesuche oder Einkaufsfahrten in ländlichen Gebieten zu den Aufgaben gehören.'] },
                { title: 'Persönlichkeit & Passung', zusatz: 'Sehr wichtig', punkte: ['Ein Telefonat vorab gibt einen ersten Eindruck. Schnuppertage in der ersten Woche helfen bei der endgültigen Entscheidung.'] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="ablauf" titel="Ablauf bei Primundus: vom Preis bis zur Anreise">
            <Schritte
              schritte={[
                { title: 'Kosten berechnen', desc: 'Im Kostenrechner beschreiben Sie die Pflegesituation und sehen Ihren Preis sofort.' },
                { title: 'Pflegekräfte ansehen', desc: 'Im Kundenportal sehen Sie passende, verfügbare Pflegekräfte mit Profil und Foto.' },
                { title: 'Auswählen und kennenlernen', desc: 'Sie wählen selbst aus. Ein Telefonat vorab ist möglich.' },
                { title: 'Vertrag', desc: 'Unterschrieben wird erst, wenn Sie sich für eine Kraft entschieden haben. Ihr Vertrag ist mit Primundus, nicht mit der Kraft.' },
                { title: 'Anreise in 3 Tagen möglich', desc: 'Die Betreuungskraft reist an, das Primundus-Team begleitet die Übergabe.' },
                { title: 'Laufende Betreuung', desc: 'Marta Kapcio und das Team bleiben Ihre Ansprechpartner, auch beim Wechsel und bei Ausfall.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie findet man eine gute Pflegekraft?', a: 'Am einfachsten über eine Pflegeagentur wie Primundus. Sie sehen passende Pflegekräfte sofort mit Profil und wählen selbst aus. Primundus prüft die Kräfte, stellt Ersatz bei Ausfall und regelt das Rechtliche. Ohne Agentur werden Sie Arbeitgeber und suchen bei jedem Wechsel neu.' },
                { q: 'Was ist, wenn ich ohne Agentur suche?', a: 'Dann werden Sie Arbeitgeber und regeln Vertrag, Anmeldung und Lohn selbst. Fällt die Kraft aus oder muss sie wechseln, stehen Sie ohne Pflegekraft da, bis Sie eine neue gefunden haben. Von Schwarzarbeit raten wir ab.' },
                { q: 'Worauf sollte man bei der Auswahl achten?', a: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung und Referenzen prüfen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen auf Spezialerfahrung achten.' },
                { q: 'Wie schnell findet Primundus eine Pflegekraft?', a: 'Passende Pflegekräfte sehen Sie sofort nach der Kostenberechnung im Kundenportal. Eine Anreise ist schon in 3 Tagen möglich. Wann genau, richtet sich nach Ihrem Wunschtermin.' },
                { q: 'Kann ich vor dem Einsatz mit der Pflegekraft sprechen?', a: 'Ja. Sie wählen die Pflegekraft selbst aus und können vorab mit ihr telefonieren.' },
                { q: 'Was passiert wenn die Pflegekraft nicht passt?', a: 'Sagen Sie Primundus, was nicht passt. Primundus stellt schnellstmöglich Ersatz, in der Regel innerhalb von 3 Tagen. Der Vertrag ist außerdem täglich kündbar.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekraft-finden" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
