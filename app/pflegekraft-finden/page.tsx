import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegekraft-finden', '25. April 2026')

const SECTIONS = [
  { id: 'wege', title: 'Wege zur Pflegekraft' },
  { id: 'agentur', title: 'Über eine Agentur — Vorteile' },
  { id: 'worauf-achten', title: 'Worauf bei der Auswahl achten?' },
  { id: 'ablauf', title: 'Ablauf bei Primundus' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft finden — worauf achten & wie vorgehen 2026',
  description: 'Pflegekraft finden: Agentur, Anbieter mit eigenen Kräften oder Selbstständige? Worauf Sie bei Auswahl, Sprache und Rechtssicherheit achten sollten.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-finden' },
  openGraph: {
    title: 'Pflegekraft finden 2026 | Primundus',
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
    headline: 'Pflegekraft finden — worauf achten und wie vorgehen 2026',
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
      { '@type': 'Question', name: 'Wie findet man eine gute Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Der zuverlässigste Weg ist die Vermittlung über eine seriöse Agentur wie Primundus. Die Agentur prüft Qualifikation, Erfahrung und Deutschkenntnisse, stellt Ersatz bei Ausfall und regelt das Rechtliche. Direktsuche über Portale ist möglich, erfordert aber mehr Eigenaufwand und rechtliches Know-how.' } },
      { '@type': 'Question', name: 'Worauf sollte man bei der Auswahl achten?', acceptedAnswer: { '@type': 'Answer', text: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung (Anzahl und Art früherer Einsätze), Referenzen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen (Demenz, Parkinson) auf Spezialerfahrung achten.' } },
      { '@type': 'Question', name: 'Wie schnell findet Primundus eine Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Primundus findet typischerweise innerhalb von 4–7 Tagen nach dem ersten Beratungsgespräch eine passende Betreuungskraft. In dringenden Fällen ist ein schnellerer Start möglich.' } },
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
          titel="Pflegekraft finden — worauf achten & wie vorgehen"
          einleitung="Eine zuverlässige Pflegekraft zu finden ist die wichtigste Entscheidung bei der Organisation der 24h-Pflege. Der sicherste Weg führt über eine seriöse Agentur — sie prüft Qualifikation und Erfahrung, stellt Ersatz bei Ausfall und regelt alles Rechtliche. Bei Primundus ist die passende Kraft in 4–7 Tagen vor Ort."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Agentur wie Primundus: sicherster Weg — Prüfung, Ersatz, Rechtssicherheit',
                'Direktsuche: möglich, aber mehr Aufwand und rechtliches Risiko',
                'Deutschkenntnisse: Grundkommunikation ist Mindestanforderung',
                'Pflegeerfahrung: Anzahl und Art früherer Einsätze prüfen',
                'Persönlichkeit: Telefonat vorab möglich — Passung zur Pflegesituation zählt',
                'Start: Mit Primundus in 4–7 Tagen nach Erstgespräch',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wege" titel="Wege zur Pflegekraft — was gibt es?">
            <Punkte
              punkte={[
                { title: 'Über eine Agentur (empfohlen)', desc: 'Die Agentur übernimmt Suche, Prüfung und Vermittlung. Bei Primundus: Rechtssicheres Entsendemodell mit A1-Bescheinigung, Ersatz bei Ausfall, persönliche Beratung.' },
                { title: 'Direktsuche über Portale', desc: 'Plattformen wie Pflegemarkt.de, care.de oder Kleinanzeigen. Mehr Eigenaufwand bei Prüfung und Rechtlichem — aber potenziell günstigere Preise.' },
                { title: 'Weiterempfehlung im Bekanntenkreis', desc: 'Oft der persönlichste Weg — aber Rechtliches (Arbeitsvertrag, Sozialversicherung) muss trotzdem sorgfältig geregelt werden.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="agentur"
            titel="Über eine Agentur — was die Vorteile sind"
            einleitung="Eine seriöse Agentur wie Primundus übernimmt alles was bei der Direktsuche an der Familie hängenbleibt — und liefert zusätzliche Sicherheitsnetze."
            punkte={[
              { title: 'Geprüfte Qualifikation', desc: 'Pflegeerfahrung, Deutschkenntnisse, Referenzen — alles wird vor der Vermittlung geprüft. Kein Risiko mit ungeprüften Personen.' },
              { title: 'Rechtliche Absicherung', desc: 'Entsendemodell mit A1-Bescheinigung — vollständig rechtssicher. Die Familie hat kein eigenes Arbeitsverhältnis.' },
              { title: 'Ersatz bei Ausfall', desc: 'Wird die Betreuungskraft krank oder muss wechseln — Primundus stellt sofort eine Ersatzkraft. Kein Versorgungsausfall.' },
              { title: 'Nahtlose Rotation', desc: 'Wechsel der Kraft alle 6–8 Wochen ist organisiert und wird von Primundus koordiniert — Familie muss sich nicht selbst darum kümmern.' },
              { title: 'Persönliche Beratung', desc: 'Marta Kapcio und das Primundus-Team begleiten die Familie — von der ersten Anfrage bis zur laufenden Betreuung.' },
            ]}
          />

          <Abschnitt id="worauf-achten" titel="Worauf bei der Auswahl zu achten ist">
            <Text>
              Diese Kriterien sollten bei jeder Pflegekraft — ob über Agentur oder direkt — geprüft werden:
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-6">
            {[
              { kriterium: 'Deutschkenntnisse', wichtigkeit: 'Pflicht', beschreibung: 'Grundlegende Kommunikation auf Deutsch ist Mindestanforderung. Bei Demenzbetroffenen kann emotionale Verbindung wichtiger sein als perfektes Deutsch.' },
              { kriterium: 'Pflegeerfahrung', wichtigkeit: 'Pflicht', beschreibung: 'Wie viele Einsätze? Welche Pflegesituationen? Erfahrung mit spezifischen Erkrankungen (Demenz, Parkinson, Schlaganfall) bei Bedarf prüfen.' },
              { kriterium: 'Referenzen', wichtigkeit: 'Empfohlen', beschreibung: 'Kontakt zu früheren Familien aufnehmen — falls verfügbar. Seriöse Agenturen stellen Referenzen auf Anfrage bereit.' },
              { kriterium: 'Führerschein', wichtigkeit: 'Je nach Situation', beschreibung: 'Wenn Arztbesuche oder Einkaufsfahrten in ländlichen Gebieten zu den Aufgaben gehören.' },
              { kriterium: 'Persönlichkeit & Passung', wichtigkeit: 'Sehr wichtig', beschreibung: 'Ein Telefonat vorab gibt einen ersten Eindruck. Schnuppertage in der ersten Woche helfen bei der endgültigen Entscheidung.' },
            ].map((item) => (
              <div key={item.kriterium} className="bg-white rounded-xl p-5 border border-pm-line">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-[15px] font-bold text-pm-ink">{item.kriterium}</p>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${item.wichtigkeit === 'Pflicht' ? 'bg-pm-coral-tint text-pm-coral-ink' : item.wichtigkeit === 'Sehr wichtig' ? 'bg-pm-shell text-pm-taupe' : 'bg-pm-paper text-pm-mute'}`}>{item.wichtigkeit}</span>
                </div>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.beschreibung}</p>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="ablauf" titel="Ablauf bei Primundus — von Anfrage bis Start">
            <Schritte
              schritte={[
                { title: 'Kostenloses Beratungsgespräch', desc: 'Pflegesituation, Diagnosen, besondere Anforderungen erfassen. Kein Auftrag, kein Risiko.' },
                { title: 'Passende Kraft vorschlagen', desc: 'Primundus schlägt eine geprüfte Kraft vor — Profil mit Erfahrung, Qualifikation und Foto. Telefonat vorab möglich.' },
                { title: 'Angebot & Vertrag', desc: 'Transparentes Angebot mit allen Kosten. Vertrag mit Primundus — kein direktes Arbeitsverhältnis mit der Kraft.' },
                { title: 'Anreise in 4–7 Tagen', desc: 'Betreuungskraft reist an. A1-Bescheinigung liegt vor. Übergabe durch Primundus-Team begleitet.' },
                { title: 'Laufende Betreuung', desc: 'Primundus bleibt Ansprechpartner — Qualitätssicherung, Kraftwechsel, Ersatz bei Ausfall.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie findet man eine gute Pflegekraft?', a: 'Der sicherste Weg ist eine seriöse Agentur wie Primundus — sie prüft Qualifikation, stellt Ersatz bei Ausfall und regelt das Rechtliche. Direktsuche ist möglich, erfordert aber mehr Eigenaufwand.' },
                { q: 'Worauf sollte man bei der Auswahl achten?', a: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung und Referenzen prüfen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen auf Spezialerfahrung achten.' },
                { q: 'Wie schnell findet Primundus eine Pflegekraft?', a: 'Typischerweise 4–7 Tage nach dem ersten Beratungsgespräch. In dringenden Situationen ist oft ein schnellerer Start möglich.' },
                { q: 'Kann ich vor dem Einsatz mit der Pflegekraft sprechen?', a: 'Ja — Primundus ermöglicht ein Telefonat vorab. So kann die Familie einen ersten Eindruck gewinnen bevor die Kraft anreist.' },
                { q: 'Was passiert wenn die Pflegekraft nicht passt?', a: 'Bei Primundus ist der Vertrag täglich kündbar. Primundus findet unverzüglich eine Ersatzkraft — kein Versorgungsausfall.' },
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
