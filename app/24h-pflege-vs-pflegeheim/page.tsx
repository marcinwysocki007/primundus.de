import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, Liste, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24h-pflege-vs-pflegeheim', '30. April 2026')

const SECTIONS = [{ id: 'kosten', title: 'Kostenvergleich 2026' }, { id: 'qualitaet', title: 'Betreuungsqualität' }, { id: 'alltag', title: 'Alltag & Lebensqualität' }, { id: 'wann-was', title: 'Wann was sinnvoll ist' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: '24h-Pflege vs. Pflegeheim — vollständiger Vergleich 2026',
  description: '24h-Pflege zuhause oder Pflegeheim? Kosten, Qualität, Alltag — vollständiger Vergleich 2026 mit echten Zahlen. Wann was die bessere Wahl ist.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-vs-pflegeheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege vs. Pflegeheim 2026 | Primundus',
    description: '24h-Pflege zuhause oder Pflegeheim? Kosten, Qualität, Alltag — vollständiger Vergleich 2026 mit echten Zahlen. Wann was die bessere Wahl ist.',
    url: 'https://primundus.de/24h-pflege-vs-pflegeheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege vs. Pflegeheim — der vollständige Vergleich 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24h-pflege-vs-pflegeheim',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege vs. Pflegeheim', item: 'https://primundus.de/24h-pflege-vs-pflegeheim' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist günstiger — Pflegeheim oder 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Oft ist 24h-Pflege günstiger — besonders in teuren Regionen wie Bayern oder BW. Mit Kassenzuschüssen liegt der Eigenanteil bei PG 3 oft unter dem Pflegeheim-Eigenanteil.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied in der Betreuungsqualität?', acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege: eine Kraft für eine Person, 24 Stunden. Pflegeheim: eine Kraft für 3–5 Bewohner, begrenzte Individualzeit.' } },
      { '@type': 'Question', name: 'Wann ist das Pflegeheim die bessere Wahl?', acceptedAnswer: { '@type': 'Answer', text: 'Bei sehr hohem medizinischem Bedarf der dauerhafte Fachpflege erfordert, oder wenn kein Zimmer für die Kraft vorhanden ist.' } }
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
            { label: "24h-Pflege vs. Pflegeheim" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="24h-Pflege vs. Pflegeheim — der vollständige Vergleich 2026"
          einleitung="Pflegeheim oder 24h-Pflege zuhause — das ist die wichtigste Entscheidung wenn Pflege nötig wird. Dieser Vergleich zeigt alle relevanten Unterschiede: Kosten, Betreuungsqualität, Alltag und emotionale Aspekte."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="8 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="kosten" titel="Kostenvergleich 2026">
            <Text>
              Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 3.364 €/Monat bundesweit (Quelle: vdek-Auswertung, Stand 1. Juli 2026) — in Bayern und Baden-Württemberg deutlich höher. 24h-Pflege über Primundus kostet 2.200–3.500 €/Monat, mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 typisch auf 1.500–2.000 €/Monat.
            </Text>
            <Kasten augenbraue="Kosten im Vergleich — Pflegegrad 3" ton="gruen">
              <Liste punkte={["Pflegeheim bundesweit: Ø 3.364 €/Monat Eigenanteil", "Pflegeheim Bayern/BW: bis 4.000 €/Monat Eigenanteil", "24h-Pflege brutto: 2.200–3.500 €/Monat", "24h-Pflege nach Zuschüssen: ca. 1.500–2.000 €/Monat", "Ersparnis vs. Pflegeheim Bayern: bis 2.500 €/Monat möglich"]} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="qualitaet" titel="Betreuungsqualität">
            <Text>
              Im Pflegeheim teilen sich typisch 3–5 Bewohner eine Pflegekraft. Individueller Zeitaufwand pro Person: 30–60 Minuten täglich. Bei der 24h-Pflege ist eine Kraft ausschließlich für eine Person da — 24 Stunden, 7 Tage.
            </Text>
            <Text>
              Der entscheidende Unterschied: Kontinuität. Die 24h-Kraft kennt die Vorlieben, Gewohnheiten und Eigenheiten der betreuten Person — das ist bei Demenz nicht verhandelbar.
            </Text>
          </Abschnitt>

          <Abschnitt id="alltag" titel="Alltag & Lebensqualität">
            <Text>
              Im Pflegeheim gelten Hausordnung, feste Essenszeiten, geteilte Räume. Zuhause bleibt alles: die eigene Küche, der Garten, die Katze, die Nachbarn, der gewohnte Tagesrhythmus.
            </Text>
            <Punkte
              punkte={[
                { title: "Eigenes Zuhause vs. Heimzimmer", desc: "Vertraute Umgebung gibt Orientierung und Halt." },
                { title: "Flexibler Tagesablauf vs. Heimstruktur", desc: "Kein Frühstück um 7:30 wenn man Langschläfer ist — der Alltag bleibt selbstbestimmt." },
                { title: "Besuche jederzeit vs. Besuchszeiten", desc: "Familie und Freunde können jederzeit kommen — keine Einschränkungen." },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: "Was ist günstiger — Pflegeheim oder 24h-Pflege?", a: "Oft ist 24h-Pflege günstiger — besonders in teuren Regionen wie Bayern oder BW. Mit Kassenzuschüssen liegt der Eigenanteil bei PG 3 oft unter dem Pflegeheim-Eigenanteil." },
                { q: "Was ist der Unterschied in der Betreuungsqualität?", a: "24h-Pflege: eine Kraft für eine Person, 24 Stunden. Pflegeheim: eine Kraft für 3–5 Bewohner, begrenzte Individualzeit." },
                { q: "Wann ist das Pflegeheim die bessere Wahl?", a: "Bei sehr hohem medizinischem Bedarf der dauerhafte Fachpflege erfordert, oder wenn kein Zimmer für die Kraft vorhanden ist." },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24h-pflege-vs-pflegeheim" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
