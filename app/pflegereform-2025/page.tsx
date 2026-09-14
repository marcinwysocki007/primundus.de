import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, Liste, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegereform-2025', '30. April 2026')

const SECTIONS = [{ id: 'aenderungen', title: 'Die wichtigsten Änderungen' }, { id: 'entlastungsbudget', title: 'Das neue Entlastungsbudget' }, { id: 'auswirkungen', title: 'Was das für Familien bedeutet' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegereform 2025 — was hat sich geändert? | Primundus',
  description: 'Pflegereform 2025: Das neue Entlastungsbudget, höhere Leistungsbeträge, Änderungen bei Verhinderungs- und Kurzzeitpflege. Alle Änderungen kompakt.',
  alternates: { canonical: 'https://primundus.de/pflegereform-2025' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegereform 2025 | Primundus',
    description: 'Pflegereform 2025: Das neue Entlastungsbudget, höhere Leistungsbeträge, Änderungen bei Verhinderungs- und Kurzzeitpflege. Alle Änderungen kompakt.',
    url: 'https://primundus.de/pflegereform-2025',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegereform 2025 — alle wichtigen Änderungen im Überblick',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegereform-2025',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Pflegereform 2025', item: 'https://primundus.de/pflegereform-2025' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was hat sich durch die Pflegereform 2025 geändert?', acceptedAnswer: { '@type': 'Answer', text: 'Verhinderungspflege und Kurzzeitpflege wurden zum Entlastungsbudget (3.539 €/Jahr) zusammengefasst. Leistungsbeträge für Pflegegeld und Sachleistungen stiegen.' } },
      { '@type': 'Question', name: 'Was ist das Entlastungsbudget 2026?', acceptedAnswer: { '@type': 'Answer', text: '3.539 €/Jahr für PG 2–5 — umfasst Verhinderungspflege und Kurzzeitpflege flexibel und ohne starre Aufteilung.' } },
      { '@type': 'Question', name: 'Wann trat die Pflegereform in Kraft?', acceptedAnswer: { '@type': 'Answer', text: 'Juli 2025. 2026 ist das erste volle Kalenderjahr ohne Übergangsregelungen.' } }
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
            { label: "Pflegereform 2025" },
          ]}
          augenbraue="Ratgeber Pflegereform"
          titel="Pflegereform 2025 — alle wichtigen Änderungen im Überblick"
          einleitung="Juli 2025: Die größte Pflegereform seit Jahren tritt in Kraft. Das neue Entlastungsbudget fasst Verhinderungspflege und Kurzzeitpflege zusammen. Leistungsbeträge steigen. Was das für Familien bedeutet."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Die wichtigsten Änderungen ab Juli 2025" ton="gruen">
              <Liste punkte={["Entlastungsbudget: Verhinderungspflege + Kurzzeitpflege zu einem Budget zusammengefasst", "Entlastungsbudget 2026: 3.539 €/Jahr für PG 2–5", "Entlastungsbetrag: weiterhin 131 €/Monat für alle PG 1–5", "Pflegegeld: PG 2 = 347 €, PG 3 = 599 €, PG 4 = 800 €, PG 5 = 990 €", "Sachleistungen: PG 2 = 796 €, PG 3 = 1.497 €, PG 4 = 1.859 €, PG 5 = 2.299 €"]} />
            </Kasten>
          </Vorspann>

          <Abschnitt id="entlastungsbudget" titel="Das neue Entlastungsbudget — was ist neu?">
            <Text>
              Bis Juni 2025 gab es getrennte Töpfe: Verhinderungspflege (bis 1.612 €/Jahr, ausbaubar auf 3.224 €) und Kurzzeitpflege (bis 1.774 €/Jahr). Das war kompliziert und führte oft zu nicht genutzten Mitteln.
            </Text>
            <Text>
              Ab Juli 2025 gilt ein einheitliches Entlastungsbudget: 3.539 €/Jahr — flexibel einsetzbar für beide Leistungsarten, kein Umschichten mehr nötig. 2026 ist das erste volle Jahr ohne Übergangsregelungen.
            </Text>
          </Abschnitt>

          <Abschnitt id="auswirkungen" titel="Was das für Familien bedeutet">
            <Text>
              Für Familien mit 24h-Pflege: Der Entlastungsbetrag (131 €/Mo) läuft weiter. Das Entlastungsbudget kann für Auszeiten der Kraft (Verhinderungspflege) genutzt werden. Insgesamt mehr Flexibilität, weniger Bürokratie.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: "Was hat sich durch die Pflegereform 2025 geändert?", a: "Verhinderungspflege und Kurzzeitpflege wurden zum Entlastungsbudget (3.539 €/Jahr) zusammengefasst. Leistungsbeträge für Pflegegeld und Sachleistungen stiegen." },
                { q: "Was ist das Entlastungsbudget 2026?", a: "3.539 €/Jahr für PG 2–5 — umfasst Verhinderungspflege und Kurzzeitpflege flexibel und ohne starre Aufteilung." },
                { q: "Wann trat die Pflegereform in Kraft?", a: "Juli 2025. 2026 ist das erste volle Kalenderjahr ohne Übergangsregelungen." },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegereform-2025" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
