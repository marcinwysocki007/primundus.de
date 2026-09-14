import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, Liste, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('nachteile-24h-pflege', '30. April 2026')

const SECTIONS = [{ id: 'nachteile', title: 'Die wichtigsten Nachteile' }, { id: 'loesungen', title: 'Was die Lösung ist' }, { id: 'wann-nicht', title: 'Wann 24h-Pflege nicht passt' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Nachteile der 24h-Pflege — was man wissen sollte | Primundus',
  description: 'Ehrliche Übersicht der Nachteile der 24h-Pflege: Privatsphäre, Sprachbarrieren, Kraftwechsel, Kosten. Was die Lösung ist und wann 24h-Pflege nicht passt.',
  alternates: { canonical: 'https://primundus.de/nachteile-24h-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Nachteile der 24h-Pflege | Primundus',
    description: 'Ehrliche Übersicht der Nachteile der 24h-Pflege: Privatsphäre, Sprachbarrieren, Kraftwechsel, Kosten. Was die Lösung ist und wann 24h-Pflege nicht passt.',
    url: 'https://primundus.de/nachteile-24h-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nachteile der 24h-Pflege — eine ehrliche Einschätzung',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/nachteile-24h-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Nachteile der 24h-Pflege', item: 'https://primundus.de/nachteile-24h-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sind die Nachteile der 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Eingeschränkte Privatsphäre, mögliche Sprachbarrieren, regelmäßige Kraftwechsel, kein Ersatz für medizinische Behandlungspflege, Platzbedarf für eigenes Zimmer der Kraft.' } },
      { '@type': 'Question', name: 'Wie oft wechselt die Betreuungskraft?', acceptedAnswer: { '@type': 'Answer', text: 'Alle 6–8 Wochen — Kräfte aus EU-Ländern haben Anspruch auf Heimfahrt. Primundus organisiert nahtlose Übergaben.' } },
      { '@type': 'Question', name: 'Was wenn die Kraft nicht gut Deutsch spricht?', acceptedAnswer: { '@type': 'Answer', text: 'Primundus prüft Deutschkenntnisse aktiv im Gespräch. Auf Wunsch Telefonat mit der Kraft vor Beginn möglich.' } }
    ],
  },
]

export default function Page() {
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
            { label: "Ratgeber", href: "/ratgeber" },
            { label: "Nachteile der 24h-Pflege" },
          ]}
          augenbraue="Ratgeber 24-Stunden-Pflege"
          titel="Nachteile der 24h-Pflege — eine ehrliche Einschätzung"
          einleitung="24h-Pflege ist für viele die beste Lösung — aber nicht für alle. Hier sind die echten Nachteile, offen aufgelistet. Und was man dagegen tun kann."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Punkte
              punkte={[
                { title: "Privatsphäre eingeschränkt", desc: "Eine fremde Person lebt im Haushalt — das erfordert Anpassung. Nicht jeder Pflegebedürftige und nicht jede Familie ist darauf vorbereitet." },
                { title: "Sprachbarriere möglich", desc: "Osteuropäische Kräfte sprechen oft gut aber nicht perfekt Deutsch. Bei Verständigungsproblemen: Primundus wählt aktiv Kräfte mit guten Deutschkenntnissen." },
                { title: "Regelmäßige Kraftwechsel", desc: "Alle 6–8 Wochen kommt eine neue Kraft. Das erfordert Eingewöhnungszeit — besonders bei Demenz kann das herausfordernd sein." },
                { title: "Kein Ersatz für medizinische Pflege", desc: "Behandlungspflege (Injektionen, Wundversorgung) muss ein ambulanter Pflegedienst übernehmen. Die 24h-Kraft ergänzt, ersetzt aber keinen Pflegedienst." },
                { title: "Wohnraumanpassung nötig", desc: "Die Kraft braucht ein eigenes Zimmer. Nicht jeder Haushalt hat dafür Platz." },
                { title: "Kosten trotz Zuschüssen nicht null", desc: "Auch mit allen Kassenzuschüssen bleibt ein Eigenanteil von typisch 1.000–2.000 €/Monat — für manche Familien zu viel." },
              ]}
            />
          </Vorspann>

          <Abschnitt id="wann-nicht" titel="Wann 24h-Pflege nicht die richtige Wahl ist">
            <Text>
              24h-Pflege passt nicht bei sehr hohem medizinischem Versorgungsbedarf, der dauerhaft qualifiziertes Pflegepersonal erfordert. Auch wenn kein Zimmer für die Kraft vorhanden ist, oder wenn der Pflegebedürftige ausdrücklich eine stationäre Einrichtung bevorzugt.
            </Text>
            <Kasten augenbraue="Wann Alternativen sinnvoller sind">
              <Liste punkte={["Intensivpflege oder Beatmung — spezialisierter Dienst nötig", "Kein freies Zimmer im Haushalt verfügbar", "Pflegebedürftiger wünscht ausdrücklich Pflegeheim", "Sehr kurzer Bedarf unter 4 Wochen — Kurzzeitpflege prüfen"]} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: "Was sind die Nachteile der 24h-Pflege?", a: "Eingeschränkte Privatsphäre, mögliche Sprachbarrieren, regelmäßige Kraftwechsel, kein Ersatz für medizinische Behandlungspflege, Platzbedarf für eigenes Zimmer der Kraft." },
                { q: "Wie oft wechselt die Betreuungskraft?", a: "Alle 6–8 Wochen — Kräfte aus EU-Ländern haben Anspruch auf Heimfahrt. Primundus organisiert nahtlose Übergaben." },
                { q: "Was wenn die Kraft nicht gut Deutsch spricht?", a: "Primundus prüft Deutschkenntnisse aktiv im Gespräch. Auf Wunsch Telefonat mit der Kraft vor Beginn möglich." },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="nachteile-24h-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
