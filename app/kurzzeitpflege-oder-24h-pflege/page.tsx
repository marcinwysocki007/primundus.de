import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('kurzzeitpflege-oder-24h-pflege', '30. April 2026')

const SECTIONS = [{ id: 'unterschied', title: 'Der grundlegende Unterschied' }, { id: 'wann-kurz', title: 'Wann Kurzzeitpflege' }, { id: 'wann-24h', title: 'Wann 24h-Pflege' }, { id: 'kosten', title: 'Kostenvergleich' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Kurzzeitpflege oder 24h-Pflege — was ist besser? | Primundus',
  description: 'Kurzzeitpflege vs. 24h-Pflege zuhause: Wann was sinnvoll ist, Kostenvergleich 2026 und welche Lösung für welche Situation passt.',
  alternates: { canonical: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Kurzzeitpflege oder 24h-Pflege? | Primundus',
    description: 'Kurzzeitpflege vs. 24h-Pflege zuhause: Wann was sinnvoll ist, Kostenvergleich 2026 und welche Lösung für welche Situation passt.',
    url: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kurzzeitpflege oder 24h-Pflege — was passt zu Ihrer Situation?',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Kurzzeitpflege oder 24h-Pflege', item: 'https://primundus.de/kurzzeitpflege-oder-24h-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist günstiger — Kurzzeitpflege oder 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Für kurze Übergänge (unter 4 Wochen): Kurzzeitpflege mit Entlastungsbudget oft günstiger. Bei dauerhaftem Bedarf: 24h-Pflege mit allen Zuschüssen meist günstiger als stationäre Lösung.' } },
      { '@type': 'Question', name: 'Kann man Kurzzeitpflege als Übergang nutzen und dann 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — das ist ein häufiges Muster. Kurzzeitpflege überbrückt die Zeit bis die 24h-Kraft startet. Primundus kann schon in 3 Tagen starten.' } }
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
            { label: "Kurzzeitpflege oder 24h-Pflege" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="Kurzzeitpflege oder 24h-Pflege — was passt zu Ihrer Situation?"
          einleitung="Nach dem Krankenhausaufenthalt, beim Ausfall des pflegenden Angehörigen, in einer Übergangssituation — welche Lösung ist die richtige? Kurzzeitpflege oder direkt 24h-Pflege zuhause? Dieser Ratgeber hilft bei der Entscheidung."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="unterschied" titel="Der grundlegende Unterschied">
            <Text>
              Kurzzeitpflege ist stationär und zeitlich begrenzt — die Person zieht vorübergehend in eine Einrichtung. 24h-Pflege ist dauerhaft häuslich — eine Kraft zieht ein und bleibt so lange wie nötig.
            </Text>
            <Punkte
              punkte={[
                { title: "Kurzzeitpflege sinnvoll wenn...", desc: "Überbrückung nach Krankenhausaufenthalt, Ausfall der Pflegeperson für wenige Wochen, Testphase vor dauerhafter Entscheidung." },
                { title: "24h-Pflege sinnvoll wenn...", desc: "Dauerhafter Pflegebedarf, eigenes Zuhause soll erhalten bleiben, Demenz (Kontinuität wichtig), Familien die keine stationäre Lösung wollen." },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kostenvergleich">
            <Text>
              Kurzzeitpflege kostet typisch 80–130 €/Tag in einer Einrichtung. Mit Entlastungsbudget (3.539 €/Jahr) sind ca. 30–40 Tage gedeckt. 24h-Pflege: ab 2.150 €/Monat, nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bei Pflegegrad 3 ab ca. 923 €/Monat Eigenanteil.
            </Text>
            <Text>
              Für Übergangsphasen bis 4 Wochen: Kurzzeitpflege oft günstiger. Für dauerhaften Bedarf: 24h-Pflege typisch günstiger als stationär — und das Zuhause bleibt.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: "Was ist günstiger — Kurzzeitpflege oder 24h-Pflege?", a: "Für kurze Übergänge (unter 4 Wochen): Kurzzeitpflege mit Entlastungsbudget oft günstiger. Bei dauerhaftem Bedarf: 24h-Pflege mit allen Zuschüssen meist günstiger als stationäre Lösung." },
                { q: "Kann man Kurzzeitpflege als Übergang nutzen und dann 24h-Pflege?", a: "Ja — das ist ein häufiges Muster. Kurzzeitpflege überbrückt die Zeit bis die 24h-Kraft startet. Primundus kann schon in 3 Tagen starten." },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="kurzzeitpflege-oder-24h-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
