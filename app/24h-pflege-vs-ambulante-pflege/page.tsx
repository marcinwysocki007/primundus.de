import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24h-pflege-vs-ambulante-pflege', '25. April 2026')

const SECTIONS = [
  { id: 'unterschied', title: 'Der grundlegende Unterschied' },
  { id: 'kosten', title: 'Kostenvergleich 2026' },
  { id: 'wann-was', title: 'Wann was sinnvoll ist' },
  { id: 'kombination', title: 'Kombination möglich?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24h-Pflege vs. ambulante Pflege — Vergleich 2026 | Primundus',
  description: '24h-Pflege vs. ambulanter Pflegedienst: Was kostet was, wann ist welche Form sinnvoll und wann wird aus ambulant eine 24h-Betreuung notwendig? Vollständiger.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-vs-ambulante-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege vs. ambulante Pflege 2026 | Primundus',
    description: 'Vollständiger Vergleich: Kosten, Leistungen und wann welche Pflegeform sinnvoll ist.',
    url: 'https://primundus.de/24h-pflege-vs-ambulante-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege vs. ambulante Pflege — Vergleich 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24h-pflege-vs-ambulante-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege vs. ambulante Pflege', item: 'https://primundus.de/24h-pflege-vs-ambulante-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen ambulanter Pflege und 24h-Pflege?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ambulanter Pflegedienst kommt zu vereinbarten Zeiten, geht dann wieder. 24h-Betreuungskraft lebt im Haushalt und ist immer da. Der entscheidende Unterschied: nächtliche Sicherheit, Demenzbetreuung, Gesellschaft rund um die Uhr.' },
      },
      {
        '@type': 'Question',
        name: 'Wann reicht ambulante Pflege nicht mehr aus?',
        acceptedAnswer: { '@type': 'Answer', text: 'Wenn Pflegebedarf über mehrere Tageszeiten verteilt ist und Angehörige nicht übernehmen können, bei nächtlichem Betreuungsbedarf, bei Demenz mit Weglaufen oder Selbstgefährdung, oder wenn ambulante Kosten die Sachleistungen deutlich übersteigen.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet ambulante Pflege im Vergleich zu 24h?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ambulant: 800–2.500 €/Monat, bei PG 2–5 oft durch Sachleistungen vollständig gedeckt. 24h: 2.200–3.500 €/Monat brutto, Eigenanteil mit Zuschüssen bei PG 3 ca. 1.500–1.900 €.' },
      },
      {
        '@type': 'Question',
        name: 'Kann man ambulante Pflege und 24h kombinieren?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — Kombinationsleistung: Sachleistungen für ambulanten Pflegedienst + anteiliges Pflegegeld für private Betreuung. Sinnvoll wenn z.B. medizinische Behandlungspflege durch Dienst und Betreuung durch 24h-Kraft.' },
      },
    ],
  },
]

export default function VsAmbulantePflege() {
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
            { label: "24h-Pflege vs. ambulante Pflege" },
          ]}
          augenbraue="Ratgeber Vergleich"
          titel="24h-Pflege vs. ambulante Pflege — Vergleich 2026"
          einleitung="Ambulante Pflege oder 24h-Betreuung — das ist oft die erste Entscheidung wenn Pflege notwendig wird. Ambulante Dienste kommen mehrmals täglich für definierte Einsätze. Eine 24h-Kraft lebt im Haushalt und ist immer da. Wann was sinnvoll ist, hängt nicht nur von den Kosten ab — sondern vom tatsächlichen Pflegebedarf."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Ambulante Pflege: kommt für definierte Einsätze — außerhalb nicht vor Ort',
                '24h-Betreuung: Kraft lebt im Haushalt — rund um die Uhr erreichbar',
                'Kosten ambulant: 800–2.500 €/Monat, oft durch Sachleistungen gedeckt',
                'Kosten 24h: 2.200–3.500 €/Monat, Eigenanteil mit Zuschüssen ab ca. 1.500 €',
                'Wechsel von ambulant zu 24h meist wenn: Demenz, Sturzrisiko nachts, hoher Gesamtbedarf',
                'Kombination möglich: ambulant + 24h-Kraft parallel in bestimmten Konstellationen',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="unterschied" titel="Der grundlegende Unterschied">
            <Text>
              Der entscheidende Unterschied ist nicht das Leistungsspektrum — sondern die Verfügbarkeit. Ein ambulanter Pflegedienst kommt zu vereinbarten Zeiten und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt und ist immer anwesend.
            </Text>
            <Tabelle
              titel=""
              kopf={["Kriterium", "Ambulante Pflege", "24h-Pflege (Primundus)"]}
              zeilen={[
                ['Verfügbarkeit', 'Nur zu Einsatzzeiten', 'Rund um die Uhr'],
                ['Nächtliche Sicherheit', 'Kein Personal nachts', 'Immer anwesend'],
                ['Gesellschaft & Betreuung', 'Nur während Einsatz', 'Ganztagsbegleitung'],
                ['Haushalt', 'Begrenzt je Einsatz', 'Vollständige Haushaltsführung'],
                ['Demenzbetreuung', 'Schwierig ohne Kontinuität', 'Vertraute Person immer da'],
                ['Kosten/Monat', '800–2.500 €', '2.200–3.500 €'],
                ['Eigenanteil (PG 3)', 'Oft sehr gering durch Sachleistungen', 'ca. 1.500–2.000 € nach Zuschüssen'],
                ['Flexibilität', 'Einsatzzeiten planbar', 'Täglich kündbar'],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kostenvergleich 2026">
            <Text>
              Der Kostenvergleich ist komplex — weil die Pflegekasse beide Modelle unterschiedlich bezuschusst.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">Ambulante Pflege — Kosten und Kassenzuschüsse</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-3">Die Pflegekasse zahlt bei ambulanter Pflege die Sachleistungen direkt an den Pflegedienst: PG 2 = 796 €/Monat, PG 3 = 1.497 €/Monat, PG 4 = 1.859 €/Monat, PG 5 = 2.299 €/Monat. Viele ambulante Pflegeeinsätze werden damit vollständig gedeckt — Eigenanteil kann gegen null gehen wenn der Gesamtbedarf im Sachleistungsrahmen liegt.</p>
              <p className="text-[13px] text-pm-mute">Bei hohem Pflegebedarf (viele Einsätze täglich) übersteigen die Kosten schnell den Sachleistungsrahmen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">24h-Pflege — Kosten und Kassenzuschüsse</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-3">Gesamtkosten 2.200–3.500 €/Monat. Mit Pflegegeld (statt Sachleistungen), Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1.500–1.900 €/Monat. Bei PG 4: ca. 1.700–2.100 €/Monat.</p>
              <p className="text-[13px] text-pm-mute">Inklusive: 24h-Verfügbarkeit, Haushalt, Betreuung, Gesellschaft — alles in einem Preis.</p>
            </div>
          </div>
          </Abschnitt>

          <Abschnitt id="wann-was" titel="Wann ist was sinnvoll?">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-10">
            {[
              {
                label: 'Ambulante Pflege sinnvoll wenn…',
                items: [
                  'Pflegebedarf auf 2–3 definierte Einsätze täglich begrenzt ist',
                  'Angehörige den Rest der Zeit zuverlässig übernehmen können',
                  'Keine nächtliche Betreuung nötig',
                  'Keine Demenz mit Weglaufen oder Verwirrtheit nachts',
                  'Kosten vollständig durch Sachleistungen gedeckt werden können',
                ],
                color: 'bg-pm-mint border-[rgba(61,122,92,0.2)]',
                textColor: 'text-pm-green-deep',
              },
              {
                label: '24h-Pflege sinnvoll wenn…',
                items: [
                  'Pflegebedarf über den ganzen Tag verteilt ist und Angehörige nicht übernehmen können',
                  'Nächtliche Unruhe, Toilettengänge oder Orientierungslosigkeit nachts auftreten',
                  'Demenz mit Weglaufen oder Selbstgefährdung vorliegt',
                  'Gesamtkosten ambulant die Sachleistungen deutlich übersteigen',
                  'Gesellschaft und Begleitung rund um die Uhr gewünscht wird',
                ],
                color: 'bg-pm-shell border-[rgba(139,115,85,0.2)]',
                textColor: 'text-pm-taupe-ink',
              },
            ].map((block) => (
              <div key={block.label} className={`rounded-2xl p-5 border ${block.color}`}>
                <p className={`text-[13px] font-bold uppercase tracking-[0.08em] mb-3 ${block.textColor}`}>{block.label}</p>
                <ul className="space-y-1.5">
                  {block.items.map((item) => (
                    <li key={item} className={`text-[14px] leading-relaxed ${block.textColor} flex gap-2`}>
                      <span className="flex-shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="kombination" titel="Kombination aus ambulant und 24h möglich?">
            <Text>
              Ja — die sogenannte Kombinationsleistung ermöglicht es, Sachleistungen (ambulanter Pflegedienst) und Pflegegeld (für private Betreuung) zu kombinieren. Das ist besonders dann sinnvoll wenn ein ambulanter Pflegedienst bestimmte Aufgaben übernimmt (z.B. medizinische Behandlungspflege) und eine Betreuungskraft oder Angehörige den Rest.
            </Text>
            <MehrDazu
              label="Kombinationsleistung erklärt:"
              links={[{ href: "/kombinationsleistung-pflege", text: "Kombinationsleistung Pflege — Sachleistung + Pflegegeld kombinieren" }, { href: "/kosten", text: "Was kostet 24h-Pflege?" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist der Unterschied zwischen ambulanter Pflege und 24h-Pflege?', a: 'Ambulanter Pflegedienst kommt zu vereinbarten Zeiten, geht dann wieder. 24h-Betreuungskraft lebt im Haushalt und ist immer da. Der entscheidende Unterschied: nächtliche Sicherheit, Demenzbetreuung, Gesellschaft rund um die Uhr.' },
                { q: 'Wann reicht ambulante Pflege nicht mehr aus?', a: 'Wenn Pflegebedarf über mehrere Tageszeiten verteilt ist und Angehörige nicht übernehmen können, bei nächtlichem Betreuungsbedarf, bei Demenz mit Weglaufen oder Selbstgefährdung, oder wenn ambulante Kosten die Sachleistungen deutlich übersteigen.' },
                { q: 'Was kostet ambulante Pflege im Vergleich zu 24h?', a: 'Ambulant: 800–2.500 €/Monat, bei PG 2–5 oft durch Sachleistungen vollständig gedeckt. 24h: 2.200–3.500 €/Monat brutto, Eigenanteil mit Zuschüssen bei PG 3 ca. 1.500–1.900 €.' },
                { q: 'Kann man ambulante Pflege und 24h kombinieren?', a: 'Ja — Kombinationsleistung: Sachleistungen für ambulanten Pflegedienst + anteiliges Pflegegeld für private Betreuung. Sinnvoll wenn z.B. medizinische Behandlungspflege durch Dienst und Betreuung durch 24h-Kraft.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24h-pflege-vs-ambulante-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
