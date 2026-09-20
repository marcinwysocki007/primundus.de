import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Punkte, RatgeberKopf, RatgeberRumpf } from '@/components/vorlage/Ratgeber'
import { HeimVsZuhause } from '@/components/grafik/Grafik'
import { ArticleTOC } from '@/components/ArticleTOC'

// Übersicht in der Seitenvorlage (19.09.2026, scripts/codemods/17-uebersichten.py; Muster /finanzierung). Linklisten
// unverändert übernommen, Einleitung ohne Gedankenstrich-Kette; Sonderblöcke und Korrekturen siehe SEITEN im Skript.

export const metadata: Metadata = {
  title: 'Pflege vergleichen — alle Vergleiche auf einen Blick',
  description: 'Pflegeformen, Kosten und Betreuungsmodelle vergleichen: 24h-Pflege vs. Pflegeheim, ambulante Pflege, Tagespflege, osteuropäische Pflegekräfte. Alle Vergleiche.',
  alternates: { canonical: 'https://primundus.de/vergleiche' },
  openGraph: {
    title: 'Pflege vergleichen | Primundus',
    description: 'Alle Pflegevergleiche auf einen Blick — von Pflegeheim vs. 24h bis ambulant vs. stationär.',
    url: 'https://primundus.de/vergleiche',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Vergleiche', item: 'https://primundus.de/vergleiche' },
    ],
  },
])

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'pflegeformen-vergleichen', title: 'Pflegeformen vergleichen' },
  { id: 'kostenvergleiche', title: 'Kostenvergleiche' },
  { id: 'anbieter-und-modelle-vergleichen', title: 'Anbieter & Modelle vergleichen' },
  { id: 'pflegekraefte-aus-eu-laendern', title: 'Pflegekräfte aus EU-Ländern' },
]

export default function Vergleiche() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Vergleiche' },
          ]}
          augenbraue="Ratgeber"
          titel="Pflege vergleichen"
          einleitung="Pflegeheim, ambulanter Pflegedienst, Tagespflege oder Betreuungskraft zu Hause: alle Vergleiche mit konkreten Zahlen."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflegeformen-vergleichen" titel="Pflegeformen vergleichen">
            <Punkte
              punkte={[
                { title: l('/24h-pflege-vs-pflegeheim', '24h-Pflege vs. Pflegeheim'), desc: 'Der vollständige Vergleich — Kosten, Lebensqualität und wann welche Form besser passt.' },
                { title: l('/24h-pflege-vs-pflegeheim-kosten', '24h-Pflege vs. Pflegeheim — Kosten'), desc: 'Detaillierter Kostenvergleich mit konkreten Zahlen für 2026.' },
                { title: l('/24h-pflege-vs-ambulante-pflege', '24h-Pflege vs. ambulante Pflege'), desc: 'Wann reicht ein ambulanter Pflegedienst — und wann wird eine 24h-Kraft nötig?' },
                { title: l('/ambulante-vs-stationaere-pflege', 'Ambulante vs. stationäre Pflege'), desc: 'Unterschiede, Kosten und wann welche Versorgungsform die richtige Wahl ist.' },
                { title: l('/tagespflege-vs-24h-betreuung', 'Tagespflege vs. 24h-Betreuung'), desc: 'Tagespflege entlastet tagsüber — 24h-Betreuung ist immer da. Wann was besser passt.' },
                { title: l('/pflegedienst-oder-24h-kraft', 'Pflegedienst oder 24h-Kraft'), desc: 'Ambulanter Pflegedienst vs. 24h-Betreuungskraft — der direkte Vergleich.' },
                { title: l('/kurzzeitpflege-oder-24h-pflege', 'Kurzzeitpflege oder 24h-Pflege'), desc: 'Wann Kurzzeitpflege reicht und wann eine dauerhaft 24h-Kraft nötig ist.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kostenvergleiche" titel="Kostenvergleiche">
            <HeimVsZuhause />
            <Punkte
              punkte={[
                { title: l('/pflegeheim-kosten-deutschland', 'Pflegeheim Kosten in Deutschland'), desc: 'Was ein Pflegeheim kostet, regionale Unterschiede und warum 24h-Pflege oft günstiger ist.' },
                { title: l('/pflegeheim-kosten-deutschland', 'Pflegeheim-Kosten je Bundesland'), desc: 'Eigenanteil im Heim nach Bundesland, Pflegegrad und Heimjahr, daneben die Kosten zu Hause.' },
                { title: l('/eigenanteil-24h-pflege-senken', 'Eigenanteil bei 24h-Pflege senken'), desc: 'Alle Möglichkeiten 2026 um den monatlichen Eigenanteil zu reduzieren.' },
                { title: l('/kosten', 'Was kostet 24h-Pflege?'), desc: 'Vollständige Kostenübersicht mit allen Zuschüssen und realistischen Eigenanteilen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="anbieter-und-modelle-vergleichen" titel="Anbieter & Modelle vergleichen">
            <Punkte
              punkte={[
                { title: l('/osteuropaeische-pflegekraft-oder-agentur', 'Osteuropäische Pflegekraft oder Agentur'), desc: 'Betreuungskraft selbst suchen oder über einen Anbieter: Risiken, Aufwand, Kosten.' },
                { title: l('/selbst-pflegen-oder-24h-pflege', 'Selbst pflegen oder 24h-Pflege'), desc: 'Wann die Familie an ihre Grenzen stößt und professionelle Unterstützung nötig wird.' },
                { title: l('/anbieter-vergleich', '24h-Pflege Anbieter vergleichen'), desc: 'Die bekannten Anbieter für 24-Stunden-Pflege im Vergleich: Preise, Gebühren, Vertragsbindung.' },
                { title: l('/24h-pflege-checkliste', 'Checkliste: Worauf bei 24h-Pflege achten'), desc: 'Die wichtigsten Prüfpunkte vor der Anbieter-Entscheidung — kompakt zum Abhaken.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="pflegekraefte-aus-eu-laendern" titel="Pflegekräfte aus EU-Ländern">
            <Punkte
              punkte={[
                { title: l('/pflegekraft-aus-polen', 'Pflegekraft aus Polen'), desc: 'Das Entsendemodell mit Betreuungskräften aus Polen: rechtlicher Rahmen, Kosten, Qualifikation.' },
                { title: l('/pflegekraft-aus-bulgarien', 'Pflegekraft aus Bulgarien'), desc: 'Was bei Betreuungskräften aus Bulgarien rechtlich gilt.' },
                { title: l('/pflegekraft-aus-rumaenien', 'Pflegekraft aus Rumänien'), desc: 'Was bei Betreuungskräften aus Rumänien rechtlich gilt.' },
              ]}
            />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
