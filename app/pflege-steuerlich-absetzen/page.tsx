import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflege-steuerlich-absetzen', '25. April 2026')

const SECTIONS = [
  { id: 'grundlagen', title: 'Was absetzbar ist' },
  { id: 'haushaltsnahe', title: 'Haushaltsnahe Dienstleistungen' },
  { id: 'außergewöhnlich', title: 'Außergewöhnliche Belastungen' },
  { id: 'berechnung', title: 'Rechenbeispiel 2026' },
  { id: 'so-gehts', title: 'So wird es eingetragen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege steuerlich absetzen 2026 — was geht & wie viel?',
  description: 'Pflege steuerlich absetzen 2026: 20 % der Kosten als haushaltsnahe Dienstleistung, max. 4.000 € Ersparnis/Jahr. Außergewöhnliche Belastungen zusätzlich möglich.',
  alternates: { canonical: 'https://primundus.de/pflege-steuerlich-absetzen' },
  openGraph: {
    title: 'Pflege steuerlich absetzen 2026 | Primundus',
    description: '20 % der Pflegekosten absetzbar — max. 4.000 € Steuerersparnis/Jahr. Wie es geht und was zusätzlich möglich ist.',
    url: 'https://primundus.de/pflege-steuerlich-absetzen',
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
    headline: 'Pflege steuerlich absetzen 2026 — was geht und wie viel?',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflege-steuerlich-absetzen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Pflege steuerlich absetzen', item: 'https://primundus.de/pflege-steuerlich-absetzen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie viel Pflege kann man von der Steuer absetzen?', acceptedAnswer: { '@type': 'Answer', text: '20 % der Aufwendungen für haushaltsnahe Pflegedienstleistungen können direkt von der Steuerschuld abgezogen werden — maximal 4.000 Euro Steuerersparnis pro Jahr. Das Maximum wird bei Pflegekosten von 20.000 €/Jahr erreicht.' } },
      { '@type': 'Question', name: 'Kann man 24h-Pflege von der Steuer absetzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — 24h-Pflegekosten bei einer Agentur wie Primundus sind als haushaltsnahe Dienstleistungen absetzbar. 20 % der jährlichen Kosten, maximal 4.000 € Steuerersparnis. Die Kosten werden in der Anlage Haushaltsnahe Aufwendungen der Steuererklärung eingetragen.' } },
      { '@type': 'Question', name: 'Können Angehörige die Pflegekosten absetzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn Angehörige die Pflegekosten für eine pflegebedürftige Person tragen und diese nicht selbst die finanzielle Belastung übernehmen kann, können die Kosten als außergewöhnliche Belastungen geltend gemacht werden — allerdings nur über die zumutbare Belastung hinaus.' } },
    ],
  },
]

export default function PflegeSteuerlichAbsetzen() {
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
            { label: "Finanzierung", href: "/finanzierung" },
            { label: "Pflege steuerlich absetzen" },
          ]}
          augenbraue="Ratgeber Steuern"
          titel="Pflege steuerlich absetzen 2026 — was geht & wie viel?"
          einleitung="Pflegekosten sind steuerlich absetzbar — und das lohnt sich erheblich. Wer 24h-Pflege nutzt, kann 20 % der jährlichen Kosten direkt von der Steuerschuld abziehen — maximal 4.000 Euro pro Jahr. Bei typischen Primundus-Kosten von 2.700 €/Monat sind das die volle Maximalersparnis von 4.000 Euro jährlich."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Haushaltsnahe Dienstleistungen: 20 % der Kosten, max. 4.000 € Steuerersparnis/Jahr',
                'Wird direkt von der Steuerschuld abgezogen — kein Abzug vom Einkommen',
                'Maximum bei Pflegekosten von 20.000 €/Jahr erreicht',
                'Zusätzlich: Außergewöhnliche Belastungen für nicht erstattete Pflegekosten möglich',
                'Voraussetzung: Überweisung (kein Barzahlung) + Rechnung aufbewahren',
                'Eintrag: Anlage Haushaltsnahe Aufwendungen der Einkommensteuererklärung',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="grundlagen" titel="Was steuerlich absetzbar ist">
            <Text>
              Es gibt zwei verschiedene Wege Pflegekosten steuerlich geltend zu machen — sie können in bestimmten Fällen auch kombiniert werden.
            </Text>
            <Punkte
              punkte={[
                { title: '§ 35a EStG — Haushaltsnahe Dienstleistungen (empfohlen)', desc: '20 % der Aufwendungen für Pflege- und Betreuungsleistungen im Haushalt direkt von der Steuerschuld abziehen. Maximum: 4.000 €/Jahr Steuerersparnis (bei 20.000 €/Jahr Kosten). Gilt für alle Pflegebedürftigen und deren Angehörige die im gleichen Haushalt leben.' },
                { title: '§ 33 EStG — Außergewöhnliche Belastungen', desc: 'Nicht erstattete Pflegekosten die über eine zumutbare Eigenbelastung hinausgehen. Die Schwelle hängt vom Einkommen, Familienstand und Kinderzahl ab. Sinnvoll wenn die Kosten sehr hoch sind und § 35a bereits ausgeschöpft ist.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="haushaltsnahe" titel="Haushaltsnahe Dienstleistungen — der wichtigste Weg">
            <Text>
              § 35a EStG ist der Steuerklassiker für Pflegekosten. Er lohnt sich in den meisten Fällen mehr als außergewöhnliche Belastungen — weil der Abzug direkt von der Steuerschuld erfolgt, nicht nur vom zu versteuernden Einkommen.
            </Text>
            <Tabelle
              titel="Was unter § 35a fällt — haushaltsnahe Pflegeleistungen"
              zeilen={[
                ['24h-Betreuungskraft (Agentur)', '✓ Absetzbar', 'Anteil der Betreuungskosten der im Haushalt anfällt'],
                ['Ambulanter Pflegedienst', '✓ Absetzbar', 'Lohnkosten des Dienstes im Haushalt'],
                ['Haushaltshilfe / Putzdienst', '✓ Absetzbar', 'Bis zu 4.000 € eigenes Budget nach § 35a'],
                ['Heimunterbringung (Pflegeheim)', '✓ Teilweise', 'Nur der auf haushaltsnahe Leistungen entfallende Anteil'],
                ['Medikamente', '✗ Nicht absetzbar', 'Unter § 35a nicht anrechenbar'],
                ['Hilfsmittel (Rollstuhl, Pflegebett)', '✗ Nicht absetzbar', 'Ggf. als außergewöhnliche Belastung'],
              ]}
              betont={1}
            />
            <Text>
              <strong>Voraussetzungen für § 35a:</strong> Die Zahlung muss per Überweisung erfolgen (keine Barzahlung), und eine Rechnung muss vorliegen. Belege 10 Jahre aufbewahren.
            </Text>
          </Abschnitt>

          <Abschnitt id="außergewöhnlich" titel="Außergewöhnliche Belastungen — zusätzlich möglich">
            <Text>
              Wenn die Pflegekosten die zumutbare Eigenbelastung übersteigen, können sie zusätzlich als außergewöhnliche Belastungen nach § 33 EStG geltend gemacht werden. Die zumutbare Eigenbelastung liegt je nach Einkommen zwischen 1 % und 7 % des Gesamtbetrags der Einkünfte.
            </Text>
            <Text>
              Sinnvoll bei: sehr hohen nicht erstatteten Pflegekosten, Pflegehilfsmitteln, Heimunterbringungskosten die nicht unter § 35a fallen. Pflege-Pauschbetrag: 1.800 € (PG 4–5 oder Merkzeichen "H"), 600 € (PG 2–3) — ohne Einzelnachweise für Angehörige.
            </Text>
          </Abschnitt>

          <Abschnitt id="berechnung" titel="Rechenbeispiel 2026 — wie viel spart man?">
            <Tabelle
              titel="Steuerersparnis bei 24h-Pflege — Primundus 2026"
              zeilen={[
                ['Betreuungskosten/Monat', '2.700 €', 'Primundus Richtwert PG 3'],
                ['Jahreskosten', '32.400 €', '12 × 2.700 €'],
                ['Absetzbar (20 %)', '6.480 €', '20 % von 32.400 €'],
                ['Gesetzliches Maximum', '4.000 €', '§ 35a EStG Obergrenze'],
                ['Tatsächliche Steuerersparnis', '4.000 €/Jahr', 'Maximum ausgeschöpft'],
                ['Monatliche Ersparnis', '≈ 333 €/Monat', '4.000 € / 12 Monate'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="so-gehts" titel="So wird es in der Steuererklärung eingetragen">
            <Schritte
              schritte={[
                { title: 'Belege sammeln', desc: 'Alle Rechnungen von Primundus/dem Pflegedienst plus Überweisungsbelege des Jahres. Keine Barzahlungen — nur Überweisungen sind absetzbar.' },
                { title: 'Anlage Haushaltsnahe Aufwendungen ausfüllen', desc: 'In der Einkommensteuererklärung: Anlage „Haushaltsnahe Aufwendungen". Dort die Gesamtsumme der Pflegekosten eintragen — das Finanzamt berechnet automatisch 20 %, max. 4.000 €.' },
                { title: 'Belege aufbewahren', desc: 'Rechnungen und Überweisungsbelege 10 Jahre aufbewahren — das Finanzamt kann sie anfordern. Digitale Kopien ausreichend.' },
                { title: 'Steuerberater hinzuziehen', desc: 'Bei hohen Pflegekosten und möglicher Kombination mit außergewöhnlichen Belastungen lohnt sich ein Steuerberater — um das Maximum herauszuholen.' },
              ]}
            />
            <MehrDazu
              label="Alle Finanzierungsmöglichkeiten:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Zuschüsse 2026" }, { href: "/eigenanteil-24h-pflege-senken", text: "Eigenanteil senken — alle Möglichkeiten" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Steuerabzug">
            <Fragen
              fragen={[
                { q: 'Wie viel Pflege kann man von der Steuer absetzen?', a: '20 % der Aufwendungen für haushaltsnahe Pflegeleistungen (§ 35a EStG), maximal 4.000 Euro Steuerersparnis pro Jahr. Der Abzug erfolgt direkt von der Steuerschuld — das ist besonders wertvoll.' },
                { q: 'Kann man 24h-Pflege von der Steuer absetzen?', a: 'Ja — 24h-Pflegekosten bei Primundus sind als haushaltsnahe Dienstleistungen absetzbar. 20 % der Jahreskosten, max. 4.000 € Steuerersparnis. Eintrag in der Anlage Haushaltsnahe Aufwendungen der Steuererklärung.' },
                { q: 'Müssen Pflegekosten per Überweisung bezahlt werden?', a: 'Ja — Barzahlungen sind nicht absetzbar. Nur Überweisungen, Lastschriften oder Kartenzahlungen gelten. Überweisungsbelege und Rechnungen aufbewahren.' },
                { q: 'Können Angehörige Pflegekosten absetzen?', a: 'Wenn Angehörige die Pflegekosten für eine pflegebedürftige Person tragen und diese nicht selbst tragen kann, können die Kosten als außergewöhnliche Belastungen geltend gemacht werden — über die zumutbare Eigenbelastung hinaus.' },
                { q: 'Was ist der Pflege-Pauschbetrag?', a: '1.800 €/Jahr (PG 4–5 oder Merkzeichen "H") bzw. 600 €/Jahr (PG 2–3) für pflegende Angehörige — ohne Einzelnachweise. Wird in der Steuererklärung des pflegenden Angehörigen eingetragen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflege-steuerlich-absetzen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
