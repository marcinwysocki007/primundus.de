import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Kasten, Liste, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegemangel-melden-beschwerden', '25. April 2026')

const SECTIONS = [
  { id: 'wann-melden', title: 'Wann eine Beschwerde sinnvoll ist' },
  { id: 'an-wen', title: 'An wen wendet man sich?' },
  { id: 'wie-melden', title: 'Wie eine Beschwerde einreichen' },
  { id: 'heimaufsicht', title: 'Heimaufsicht & MDK' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegemangel melden — Beschwerden richtig einreichen',
  description: 'Pflegemangel melden: An wen man sich bei Problemen in der Pflege wendet, wie eine Beschwerde eingereicht wird und welche Stellen zuständig sind.',
  alternates: { canonical: 'https://primundus.de/pflegemangel-melden-beschwerden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegemangel melden | Primundus',
    description: 'Probleme in der Pflege melden — welche Stellen zuständig sind und wie man vorgeht.',
    url: 'https://primundus.de/pflegemangel-melden-beschwerden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegemangel melden — Beschwerden richtig einreichen',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegemangel-melden-beschwerden',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Pflegemangel melden', item: 'https://primundus.de/pflegemangel-melden-beschwerden' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wo kann man Pflegemängel melden?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bei Problemen in der häuslichen Pflege: zunächst direkt bei der Pflegeagentur (z.B. Primundus), dann bei der Pflegekasse. Bei Pflegeheimen: Heimaufsicht des zuständigen Bundeslandes und Medizinischer Dienst (MD). Für Beratung: Pflegestützpunkte bieten kostenlose unabhängige Unterstützung.' },
      },
    ],
  },
]

export default function PflegemangelMeldenBeschwerden() {
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
            { label: "Rechtliches", href: "/rechtliches" },
            { label: "Pflegemangel melden" },
          ]}
          augenbraue="Ratgeber Recht"
          titel="Pflegemangel melden — Beschwerden richtig einreichen"
          einleitung="Wer Pflegemängel erlebt — schlechte Versorgung, Vernachlässigung, unwürdige Behandlung — hat das Recht etwas dagegen zu tun. Dieser Ratgeber zeigt wann und wie man Beschwerden einreicht, an wen man sich wendet, und welche Stellen in Deutschland zuständig sind."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wann-melden" titel="Wann eine Beschwerde sinnvoll ist">
            <Text>
              Nicht jede Unzufriedenheit rechtfertigt sofort eine formelle Beschwerde — manchmal hilft ein direktes Gespräch. Aber in bestimmten Situationen ist schnelles Handeln nötig.
            </Text>
            <Kasten augenbraue="Sofort handeln — akute Gefahr" ton="koralle">
              <Liste punkte={['Körperliche oder psychische Gewalt gegen Pflegebedürftigen', 'Grobe Vernachlässigung (kein Essen, keine Pflege)', 'Medikamentenfehler mit Auswirkungen', 'Freiheitsentzug ohne rechtliche Grundlage']} />
            </Kasten>
            <Kasten augenbraue="Eskalation wenn direktes Gespräch scheitert">
              <Liste punkte={['Wiederholt schlechte Pflege trotz Hinweis', 'Nicht eingehaltene Leistungsvereinbarungen', 'Unzumutbare Wohnverhältnisse der Pflegekraft', 'Abrechnungsprobleme und Intransparenz']} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="an-wen" titel="An wen wendet man sich?">
            {/* Das Etikett „Erste Anlaufstelle" wird zur Augenbraue des Kastens */}
            <Kasten augenbraue="Erste Anlaufstelle">
              <Gruppen
                gruppen={[
                  { title: 'Primundus (bei häuslicher Pflege)', zusatz: '089 200 000 830 · info@primundus.de', punkte: ['Erste Anlaufstelle bei allen Problemen mit der Betreuungskraft. Primundus reagiert sofort — Gespräch mit Kraft, und wenn nötig unmittelbarer Wechsel. Täglich kündbar.'] },
                ]}
              />
            </Kasten>
            <Gruppen
              gruppen={[
                { title: 'Pflegekasse', zusatz: 'Telefonnummer auf der Versicherungskarte', punkte: ['Wenn ambulante Pflegeleistungen nicht vertragsgemäß erbracht werden. Pflegekasse kann Qualitätsprüfungen veranlassen.'] },
                { title: 'Pflegestützpunkt', zusatz: 'Lokalen Stützpunkt über pflegestuetzpunkte.de finden', punkte: ['Kostenlose unabhängige Beratung bei Problemen in der Pflege — für Betroffene und Angehörige. In allen Bundesländern.'] },
                { title: 'Heimaufsicht (bei Pflegeheim)', zusatz: 'Zuständige Behörde im Bundesland (variiert)', punkte: ['Zuständig für stationäre Pflegeeinrichtungen. Nimmt Beschwerden entgegen, führt unangekündigte Kontrollen durch.'] },
                { title: 'Medizinischer Dienst (MD)', zusatz: 'md-bund.de', punkte: ['Prüft Qualität von Pflegediensten und Pflegeheimen. Kann Beschwerden aufnehmen und Sonderprüfungen veranlassen.'] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wie-melden" titel="Wie eine Beschwerde einreichen — Schritt für Schritt">
            <Schritte
              schritte={[
                { title: 'Dokumentieren', desc: 'Vorfälle schriftlich festhalten — Datum, Uhrzeit, was genau passiert ist. Fotos wenn relevant (z.B. Wunden, Wohnzustand). Zeugen notieren.' },
                { title: 'Direktes Gespräch versuchen', desc: 'Bei Primundus: sofort anrufen. Oft lässt sich das Problem schnell lösen — Gespräch mit der Kraft, Wechsel, Nachschulung.' },
                { title: 'Schriftliche Beschwerde', desc: 'Falls Gespräch scheitert: Beschwerde schriftlich einreichen (per E-Mail oder Brief). Sachlich und konkret — was wann passiert ist, welche Abhilfe erwartet wird.' },
                { title: 'Externe Stelle einschalten', desc: 'Bei schwerwiegenden Mängeln oder ausbleibendem Ergebnis: Pflegekasse, Pflegestützpunkt oder Heimaufsicht informieren.' },
                { title: 'Bei akuter Gefahr: sofort', desc: 'Körperliche Gewalt oder akute Vernachlässigung sofort der Polizei melden (110) und Pflegekasse informieren.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="heimaufsicht" titel="Heimaufsicht & Medizinischer Dienst">
            <Punkte
              punkte={[
                { title: "Heimaufsicht — zuständig für stationäre Pflege", desc: "Jedes Bundesland hat eine Heimaufsichtsbehörde die Pflegeheime überwacht. Bei Beschwerden über ein Pflegeheim: Heimaufsicht des zuständigen Bundeslandes kontaktieren. Diese kann unangekündigte Kontrollen durchführen und Maßnahmen anordnen." },
                { title: "Medizinischer Dienst (MD) — prüft ambulante und stationäre Pflege", desc: "Der MD prüft regelmäßig Qualität von Pflegeeinrichtungen und ambulanten Diensten. Beschwerden können über md-bund.de eingereicht werden. Bei begründetem Verdacht: Sonderprüfung möglich." },
                { title: "Kostenlose Beratung: Pflegestützpunkt", desc: "Pflegestützpunkte in jedem Bundesland bieten kostenlose, unabhängige Beratung — auch bei Beschwerden und Konflikten. Lokalen Stützpunkt finden: pflegestuetzpunkte.de" },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wo kann man Pflegemängel melden?', a: 'Bei häuslicher Pflege: zunächst direkt bei der Agentur (Primundus: 089 200 000 830), dann bei der Pflegekasse. Bei Pflegeheimen: Heimaufsicht des Bundeslandes und Medizinischer Dienst. Für Beratung: Pflegestützpunkt kostenlos und unabhängig.' },
                { q: 'Kann ich die Betreuungskraft sofort abberufen?', a: 'Ja — bei Primundus täglich kündbar. Bei akuten Problemen sofort anrufen: 089 200 000 830. Primundus stellt unverzüglich Ersatz.' },
                { q: 'Was tun wenn jemand in einem Pflegeheim vernachlässigt wird?', a: 'Vorfälle dokumentieren, mit Heimleitung sprechen. Wenn ohne Ergebnis: Heimaufsicht des Bundeslandes einschalten. Bei akuter Gefahr: Polizei (110) und Pflegekasse informieren.' },
                { q: 'Ist eine Beschwerde beim MD kostenlos?', a: 'Ja — der Medizinische Dienst nimmt Beschwerden kostenlos entgegen. Auch Pflegestützpunkte beraten kostenlos.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegemangel-melden-beschwerden" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
