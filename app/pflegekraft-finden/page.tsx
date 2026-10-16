import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Gruppen, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// 01.10.2026: Ersatz „schnellstmöglich, in der Regel innerhalb von 3 Tagen“ (Mustervertrag § 1 Nr. 4, Martin 01.10.: „ist auch
// richtig“); Krankheitstage ohne Honorar (§ 4 Nr. 6). Raus: „sofort/unverzüglich Ersatz“, „keine Versorgungslücke“,
// „durchgehend gesichert, ohne Lücken“, „unmittelbarer Wechsel“.
const AKTUALISIERT = aktualisiertAm('pflegekraft-finden', '16. Oktober 2026')

const SECTIONS = [
  { id: 'wege', title: 'Wege zur Pflegekraft' },
  { id: 'agentur', title: 'Über einen Anbieter: Vorteile' },
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
      { '@type': 'Question', name: 'Wie findet man eine gute Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Ein guter Weg ist ein Anbieter wie Primundus. Er prüft Qualifikation, stellt Ersatz bei Ausfall und regelt das Rechtliche. Direktsuche ist möglich, erfordert aber mehr Eigenaufwand.' } },
      { '@type': 'Question', name: 'Worauf sollte man bei der Auswahl achten?', acceptedAnswer: { '@type': 'Answer', text: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung (Anzahl und Art früherer Einsätze), Referenzen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen (Demenz, Parkinson) auf Spezialerfahrung achten.' } },
      { '@type': 'Question', name: 'Wie schnell findet Primundus eine Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon 3 Tage nach dem ersten Beratungsgespräch möglich. Wann genau, richtet sich nach Ihrem Wunschtermin.' } },
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
          einleitung="Eine zuverlässige Pflegekraft zu finden ist die wichtigste Entscheidung bei der Organisation der 24h-Pflege. Ein guter Weg führt über einen seriösen Anbieter. Er prüft Qualifikation und Erfahrung, stellt Ersatz bei Ausfall und regelt das Rechtliche. Bei Primundus kann die passende Kraft schon in 3 Tagen vor Ort sein."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Anbieter wie Primundus: Prüfung, Ersatz, Rechtssicherheit',
                'Direktsuche: möglich, aber mehr Aufwand und rechtliches Risiko',
                'Deutschkenntnisse: Grundkommunikation ist Mindestanforderung',
                'Pflegeerfahrung: Anzahl und Art früherer Einsätze prüfen',
                'Persönlichkeit: Telefonat vorab möglich — Passung zur Pflegesituation zählt',
                'Start: Anreise schon 3 Tage nach dem Erstgespräch möglich',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wege" titel="Wege zur Pflegekraft — was gibt es?">
            <Punkte
              punkte={[
                { title: 'Über einen Anbieter (empfohlen)', desc: 'Der Anbieter übernimmt Auswahl, Prüfung und Einsatzplanung. Bei Primundus: Rechtssicheres Entsendemodell mit A1-Bescheinigung, Ersatz bei Ausfall, persönliche Beratung.' },
                { title: 'Direktsuche über Portale', desc: 'Plattformen wie Pflegemarkt.de, care.de oder Kleinanzeigen. Mehr Eigenaufwand bei Prüfung und Rechtlichem — aber potenziell günstigere Preise.' },
                { title: 'Weiterempfehlung im Bekanntenkreis', desc: 'Oft der persönlichste Weg — aber Rechtliches (Arbeitsvertrag, Sozialversicherung) muss trotzdem sorgfältig geregelt werden.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="agentur"
            titel="Über einen Anbieter: was die Vorteile sind"
            einleitung="Ein Anbieter wie Primundus übernimmt viele Aufgaben, die bei der Direktsuche bei der Familie liegen, und bietet zusätzliche Sicherheitsnetze."
            punkte={[
              { title: 'Geprüfte Qualifikation', desc: 'Pflegeerfahrung, Deutschkenntnisse, Referenzen — alles wird vor dem Einsatz geprüft. Kein Risiko mit ungeprüften Personen.' },
              { title: 'Rechtliche Absicherung', desc: 'Entsendemodell mit A1-Bescheinigung — vollständig rechtssicher. Die Familie hat kein eigenes Arbeitsverhältnis.' },
              { title: 'Ersatz bei Ausfall', desc: 'Wird die Betreuungskraft krank, stellt Primundus schnellstmöglich eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Die Krankheitstage berechnet Primundus nicht.' },
              { title: 'Nahtlose Rotation', desc: 'Wechsel der Kraft alle 6–8 Wochen ist organisiert und wird von Primundus koordiniert — Familie muss sich nicht selbst darum kümmern.' },
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

          <Abschnitt id="ablauf" titel="Ablauf bei Primundus — von Anfrage bis Start">
            <Schritte
              schritte={[
                { title: 'Kostenloses Beratungsgespräch', desc: 'Pflegesituation, Diagnosen, besondere Anforderungen erfassen. Kein Auftrag, kein Risiko.' },
                { title: 'Passende Kraft vorschlagen', desc: 'Primundus schlägt eine geprüfte Kraft vor — Profil mit Erfahrung, Qualifikation und Foto. Telefonat vorab möglich.' },
                { title: 'Angebot & Vertrag', desc: 'Transparentes Angebot mit allen Kosten. Vertrag mit Primundus — kein direktes Arbeitsverhältnis mit der Kraft.' },
                { title: 'Anreise in 3 Tagen möglich', desc: 'Die Betreuungskraft reist an, das Primundus-Team begleitet die Übergabe.' },
                { title: 'Laufende Betreuung', desc: 'Primundus bleibt Ansprechpartner — Qualitätssicherung, Kraftwechsel, Ersatz bei Ausfall.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie findet man eine gute Pflegekraft?', a: 'Ein guter Weg ist ein Anbieter wie Primundus. Er prüft Qualifikation, stellt Ersatz bei Ausfall und regelt das Rechtliche. Direktsuche ist möglich, erfordert aber mehr Eigenaufwand.' },
                { q: 'Worauf sollte man bei der Auswahl achten?', a: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung und Referenzen prüfen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen auf Spezialerfahrung achten.' },
                { q: 'Wie schnell findet Primundus eine Pflegekraft?', a: 'Eine Anreise ist schon 3 Tage nach dem ersten Beratungsgespräch möglich. Wann genau, richtet sich nach Ihrem Wunschtermin.' },
                { q: 'Kann ich vor dem Einsatz mit der Pflegekraft sprechen?', a: 'Ja — Primundus ermöglicht ein Telefonat vorab. So kann die Familie einen ersten Eindruck gewinnen bevor die Kraft anreist.' },
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
