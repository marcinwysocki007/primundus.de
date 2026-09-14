import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, HakenListe, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('osteuropaeische-pflegekraft-oder-agentur', '25. April 2026')

const SECTIONS = [
  { id: 'direkt-vs-agentur', title: 'Direkt vs. Agentur' },
  { id: 'vorteile-agentur', title: 'Vorteile der Agentur' },
  { id: 'worauf-achten', title: 'Worauf bei der Agenturwahl achten?' },
  { id: 'primunus', title: 'Was Primundus anders macht' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Osteuropäische Pflegekraft direkt oder über Agentur?',
  description: 'Osteuropäische Pflegekraft privat oder über einen Anbieter? Der Vergleich nach Kosten, Rechtssicherheit, Ersatz bei Ausfall und Aufwand für die Familie.',
  alternates: { canonical: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Osteuropäische Pflegekraft oder Agentur? | Primundus',
    description: 'Direktvermittlung oder Agentur: Was ist besser, günstiger und rechtssicherer?',
    url: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Osteuropäische Pflegekraft direkt oder über Agentur',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
      { '@type': 'ListItem', position: 3, name: 'Osteuropäische Pflegekraft oder Agentur', item: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur' },
    ],
  },
]

export default function OsteuropaeischePflegekraftOderAgentur() {
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
            { label: "Osteuropäische Pflegekraft oder Agentur" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="Osteuropäische Pflegekraft direkt oder über Agentur?"
          einleitung="Viele Familien fragen sich: Warum nicht die Pflegekraft direkt in Polen oder Rumänien suchen statt über eine Agentur? Klingt günstiger. Die Realität ist komplexer — direktes Suchen bedeutet: selbst prüfen, selbst Rechtssicherheit herstellen, selbst Ersatz organisieren wenn die Kraft krank wird. Dieser Vergleich zeigt was wirklich anders ist."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="direkt-vs-agentur" titel="Direkt vs. Agentur — vollständiger Vergleich">
            <Tabelle
              titel=""
              kopf={["Kriterium", "Direktsuche", "Agentur (Primundus)"]}
              zeilen={[
                ['Rechtssicherheit', 'Eigenverantwortung — Scheinselbstständigkeitsrisiko', 'A1-Bescheinigung, Entsendemodell rechtssicher'],
                ['Prüfung der Kraft', 'Selbst durchführen — ohne Referenzen', 'Primundus prüft Erfahrung, Deutsch, Referenzen'],
                ['Ersatz bei Ausfall', 'Familie organisiert selbst — oft Versorgungslücke', 'Primundus stellt sofort Ersatz'],
                ['Zeitaufwand', 'Erheblich — Suche, Verhandlung, Verträge', 'Minimal — Primundus übernimmt alles'],
                ['Kraftwechsel', 'Familie muss neu suchen', 'Primundus organisiert nahtlos'],
                ['Startzeitraum', 'Wochen bis Monate', '4–7 Tage'],
                ['Qualitätssicherung', 'Keine systematische', 'Laufend durch Primundus'],
                ['Kosten', 'Evtl. niedriger', '2.200–3.500 €/Mo — transparent'],
              ]}
              betont={2}
            />
          </Abschnitt>

          <Abschnitt id="vorteile-agentur" titel="Warum die meisten Familien auf eine Agentur setzen">
            <Punkte
              punkte={[
                { title: 'Rechtssicherheit ohne eigene Expertise', desc: 'Das Entsendemodell mit A1-Bescheinigung ist komplex. Wer es falsch macht riskiert Scheinselbstständigkeit. Eine seriöse Agentur stellt die Rechtssicherheit vollständig her — die Familie muss sich nicht damit befassen.' },
                { title: 'Geprüfte Kräfte aus einem Pool', desc: 'Primundus prüft Deutschkenntnisse aktiv, prüft Referenzen, wählt nach Erfahrung und Diagnose aus. Wer selbst sucht — auf Facebook, Anzeigenmärkten — hat keine verlässliche Grundlage für die Qualitätsbewertung.' },
                { title: 'Ersatz ohne Lücke', desc: 'Was passiert wenn die direkt gesuchte Kraft krank wird, kündigt oder nach Hause möchte? Die Familie muss von vorne anfangen — während die Versorgung nicht gesichert ist. Bei Primundus gibt es sofort Ersatz.' },
                { title: 'Kraftwechsel ohne Aufwand', desc: 'Alle 6–8 Wochen wechselt die Kraft. Primundus kündigt rechtzeitig an, stellt die neue Kraft vor, organisiert die Übergabe. Die Familie muss sich nicht darum kümmern.' },
                { title: 'Schneller Start', desc: '4–7 Tage von der Anfrage bis zur Kraft zuhause. Wer selbst sucht braucht Wochen bis Monate.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="worauf-achten"
            titel="Worauf bei der Wahl einer Agentur achten?"
            einleitung="Nicht jede Agentur ist gleich. Diese Kriterien helfen seriöse von unseriösen Angeboten zu unterscheiden."
            punkte={[
              { title: '✓ Entsendemodell mit A1-Bescheinigung', desc: 'Die Kraft ist bei einem EU-Unternehmen angestellt und kommt mit A1-Bescheinigung. Keine Agentur die "selbstständige Kräfte" vermittelt.' },
              { title: '✓ Transparente Preise ohne versteckte Gebühren', desc: 'Alles inklusive — Kraft, Wechsel, Ersatz. Keine Aufpreis-Überraschungen.' },
              { title: '✓ Tägliche Kündbarkeit', desc: 'Keine Mindestlaufzeit, keine langen Kündigungsfristen. Seriosität zeigt sich darin dass man Kunden nicht hält sondern überzeugt.' },
              { title: '✓ Aktive Qualitätsprüfung der Kräfte', desc: 'Nicht nur Selbstauskunft der Kraft — aktive Prüfung von Deutschkenntnissen, Referenzen, Erfahrung.' },
              { title: '✓ Erfahrung und Referenzen der Agentur', desc: 'Wie lange am Markt? Wie viele Betreuungen? Gibt es unabhängige Bewertungen?' },
            ]}
          />

          <Abschnitt id="primunus" titel="Was Primundus anders macht">
            <HakenListe punkte={[
              '20+ Jahre Markterfahrung — 60.000+ Betreuungen durchgeführt',
              'Testsieger DIE WELT — unabhängig bewertet',
              'Täglich kündbar — ohne Mindestlaufzeit',
              'Transparente Preise: 2.200–3.500 €/Monat, alles inklusive',
              'Aktive Qualitätsprüfung aller Kräfte (Deutsch, Erfahrung, Referenzen)',
              'Sofortiger Ersatz bei Ausfall — keine Versorgungslücke',
              'Laufende Betreuung durch Primundus als Ansprechpartner',
              'Start in 4–7 Tagen nach Erstgespräch',
            ]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Ist Direktsuche einer Pflegekraft günstiger?', a: 'Evtl. auf dem Papier — aber dann muss die Familie selbst Rechtssicherheit herstellen, selbst prüfen, selbst Ersatz organisieren. Der versteckte Aufwand und das rechtliche Risiko werden selten einkalkuliert.' },
                { q: 'Kann ich eine Pflegekraft direkt aus Polen suchen?', a: 'Technisch ja — aber die Rechtssicherheit herzustellen ist komplex (Entsendemodell, A1-Bescheinigung) und das Scheinselbstständigkeitsrisiko ist hoch. Seriöse Agenturen nehmen dieses Risiko ab.' },
                { q: 'Wie erkenne ich eine seriöse Pflegeagentur?', a: 'Entsendemodell mit A1-Bescheinigung, transparente Preise, tägliche Kündbarkeit, aktive Qualitätsprüfung, langjährige Erfahrung, unabhängige Bewertungen.' },
                { q: 'Was passiert wenn die Kraft direkt kündigt?', a: 'Bei Direktsuche: Die Familie muss sofort neu suchen — Wochen bis Monate bis zur nächsten Kraft. Bei Primundus: Sofortiger Ersatz, keine Versorgungslücke.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="osteuropaeische-pflegekraft-oder-agentur" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
