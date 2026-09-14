import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('kombinationsleistung-pflege', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist die Kombinationsleistung?' },
  { id: 'berechnung', title: 'Berechnung & Rechenbeispiel' },
  { id: 'wann-sinnvoll', title: 'Wann ist Kombination sinnvoll?' },
  { id: 'beantragen', title: 'Wie man sie beantragt' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kombinationsleistung Pflege — Pflegegeld + Sachleistung kombinieren | Primundus',
  description: 'Kombinationsleistung: Pflegegeld und Sachleistung gleichzeitig nutzen. Wie die Berechnung funktioniert, was übrig bleibt und für wen sich das lohnt.',
  alternates: { canonical: 'https://primundus.de/kombinationsleistung-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Kombinationsleistung Pflege | Primundus',
    description: 'Pflegegeld und Sachleistungen kombinieren — wie es geht und was dabei rauskommt.',
    url: 'https://primundus.de/kombinationsleistung-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kombinationsleistung Pflege — Pflegegeld und Sachleistungen kombinieren',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/kombinationsleistung-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Kombinationsleistung', item: 'https://primundus.de/kombinationsleistung-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist die Kombinationsleistung in der Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Die Kombinationsleistung (§38 SGB XI) erlaubt es, Pflegesachleistungen und Pflegegeld gleichzeitig zu beziehen. Wenn nur ein Teil der Sachleistungen durch einen ambulanten Pflegedienst genutzt wird, erhält man für den ungenutzten Anteil anteiliges Pflegegeld.' } },
      { '@type': 'Question', name: 'Wie berechnet sich die Kombinationsleistung?', acceptedAnswer: { '@type': 'Answer', text: 'Wenn 50 % der Sachleistungen durch einen Pflegedienst genutzt werden, erhält man 50 % des Pflegegeldes. Beispiel PG 3: 50 % Sachleistungen genutzt (748,50 €) → 50 % Pflegegeld = 299,50 €. Gesamtentlastung: 1.048 €/Monat.' } },
    ],
  },
]

export default function Kombinationsleistung() {
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
            { label: "Kombinationsleistung" },
          ]}
          augenbraue="Ratgeber Finanzierung"
          titel="Kombinationsleistung Pflege — Pflegegeld & Sachleistungen kombinieren"
          einleitung="Wer nicht alle Sachleistungen durch einen ambulanten Pflegedienst nutzt, bekommt anteiliges Pflegegeld für den Rest — das ist die Kombinationsleistung nach § 38 SGB XI. Damit lassen sich ambulanter Pflegedienst und private Betreuung durch Angehörige oder eine 24h-Kraft optimal kombinieren."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Die Grundformel</p>
            <div className="bg-pm-paper rounded-xl p-4 text-center mb-3">
              <p className="text-[16px] font-bold text-pm-ink">Nicht genutzte Sachleistungen × Pflegegeld = Anteiliges Pflegegeld</p>
            </div>
            <p className="text-[14px] text-pm-body">
              Wenn 60 % der Sachleistungen durch den Pflegedienst genutzt werden → verbleiben 40 % ungenutzt → 40 % des Pflegegeldes werden ausgezahlt.
            </p>
          </div>
          </Vorspann>

          <Abschnitt id="was-ist" titel="Was ist die Kombinationsleistung?">
            <Text>
              Normalerweise schließen sich Pflegegeld und Pflegesachleistungen gegenseitig aus: Entweder man wählt Pflegegeld (für private Pflege durch Angehörige) oder Sachleistungen (für ambulante Pflegedienste). Die Kombinationsleistung erlaubt beides — anteilig.
            </Text>
            <Text>
              Voraussetzung: Der ambulante Pflegedienst rechnet direkt mit der Pflegekasse ab und gibt an welcher Anteil der Sachleistungen genutzt wurde. Den Rest bekommt die pflegebedürftige Person als Pflegegeld.
            </Text>
          </Abschnitt>

          <Abschnitt id="berechnung" titel="Berechnung & Rechenbeispiele">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-4 mb-10">
            {[
              {
                beispiel: 'Rechenbeispiel 1 — Pflegegrad 3, 50 % Sachleistungen',
                rows: [
                  ['Sachleistungen PG 3', '1.497 €/Monat'],
                  ['Genutzter Anteil (50 %)', '748,50 €'],
                  ['Ungenutzter Anteil', '50 %'],
                  ['Pflegegeld PG 3 (voll)', '599 €/Monat'],
                  ['Anteiliges Pflegegeld (50 %)', '299,50 €'],
                  ['Gesamtentlastung', '748,50 € + 299,50 € = 1.048 €/Monat'],
                ],
              },
              {
                beispiel: 'Rechenbeispiel 2 — Pflegegrad 4, 30 % Sachleistungen',
                rows: [
                  ['Sachleistungen PG 4', '1.859 €/Monat'],
                  ['Genutzter Anteil (30 %)', '557,70 €'],
                  ['Ungenutzter Anteil', '70 %'],
                  ['Pflegegeld PG 4 (voll)', '800 €/Monat'],
                  ['Anteiliges Pflegegeld (70 %)', '560 €'],
                  ['Gesamtentlastung', '557,70 € + 560 € = 1.117,70 €/Monat'],
                ],
              },
            ].map((item) => (
              <div key={item.beispiel} className="bg-white rounded-2xl border border-pm-line overflow-hidden shadow-sm">
                <div className="px-5 py-3 bg-pm-paper border-b border-pm-line">
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">{item.beispiel}</p>
                </div>
                <div className="p-5 space-y-2">
                  {item.rows.map(([label, wert], i) => (
                    <div key={label} className={`flex justify-between items-center py-1 ${i === item.rows.length - 1 ? 'font-bold border-t border-pm-line mt-2 pt-3 text-pm-green' : ''}`}>
                      <span className="text-[14px] text-pm-body">{label}</span>
                      <span className={`text-[14px] ${i === item.rows.length - 1 ? 'text-pm-green font-bold' : 'text-pm-ink'}`}>{wert}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="wann-sinnvoll" titel="Wann ist die Kombinationsleistung besonders sinnvoll?">
            <Punkte
              punkte={[
                { title: 'Ambulanter Pflegedienst + Angehörigenpflege', desc: 'Pflegedienst übernimmt z.B. Medikamentengabe und Grundpflege morgens — Angehörige pflegen den Rest. Die Sachleistungen für den Dienst + anteiliges Pflegegeld für die Angehörigen optimiert die Gesamtentlastung.' },
                { title: 'Ambulanter Pflegedienst + 24h-Betreuungskraft', desc: 'Spezialisierter Pflegedienst für Behandlungspflege (Verbände, Injektionen) — 24h-Kraft für Grundpflege und Betreuung. Sachleistungen für den Dienst + Pflegegeld für die 24h-Kraft.' },
                { title: 'Sachleistungsrahmen wird nicht voll ausgeschöpft', desc: 'Wenn der Pflegedienst günstiger als der Sachleistungsrahmen ist — Kombination holt das Maximum an Kassenzuschüssen heraus.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="beantragen" titel="Wie man die Kombinationsleistung beantragt">
            <Text>
              Die Kombinationsleistung wird nicht separat beantragt — sie ergibt sich automatisch wenn ein ambulanter Pflegedienst die Sachleistungen nur teilweise ausschöpft.
            </Text>
            <Schritte
              schritte={[
                { title: 'Pflegekasse über Modell informieren', desc: 'Mitteilen dass Sachleistungen und Pflegegeld kombiniert werden sollen. Pflegekasse nimmt das zur Kenntnis.' },
                { title: 'Pflegedienst rechnet mit Pflegekasse ab', desc: 'Der ambulante Pflegedienst reicht Rechnungen direkt bei der Pflegekasse ein und gibt den genutzten Sachleistungsanteil an.' },
                { title: 'Anteiliges Pflegegeld wird automatisch ausgezahlt', desc: 'Die Pflegekasse berechnet den verbleibenden Anteil und zahlt das anteilige Pflegegeld aus.' },
              ]}
            />
            <MehrDazu
              label="Alle Kassenzuschüsse:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege" }, { href: "/pflegesachleistungen", text: "Pflegesachleistungen erklärt" }, { href: "/pflegegeld", text: "Pflegegeld 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist die Kombinationsleistung in der Pflege?', a: '§38 SGB XI: Wenn nicht alle Sachleistungen durch einen Pflegedienst genutzt werden, bekommt man für den ungenutzten Anteil anteiliges Pflegegeld. Pflegedienst + private Pflege lassen sich so kombinieren.' },
                { q: 'Wie berechnet sich die Kombinationsleistung?', a: 'Genutzter Sachleistungsanteil (%) → verbleibender Anteil in % × Pflegegeld = anteiliges Pflegegeld. Beispiel: 50 % Sachleistungen genutzt → 50 % Pflegegeld. Bei PG 3: 299,50 €/Monat.' },
                { q: 'Muss man die Kombinationsleistung separat beantragen?', a: 'Nein — sie ergibt sich automatisch wenn ein Pflegedienst nur Teile der Sachleistungen nutzt und der Pflegekasse den Anteil mitteilt.' },
                { q: 'Kann man Kombinationsleistung mit Entlastungsbetrag kombinieren?', a: 'Ja — Entlastungsbetrag (131 €/Monat) läuft immer zusätzlich, unabhängig von Pflegegeld und Sachleistungen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="kombinationsleistung-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
