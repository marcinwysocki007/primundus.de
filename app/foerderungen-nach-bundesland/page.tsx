import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('foerderungen-nach-bundesland', '21. August 2026')

const SECTIONS = [
  { id: 'bundesweit', title: 'Bundesweite Kassenzuschüsse' },
  { id: 'laender', title: 'Zusatzförderungen der Bundesländer' },
  { id: 'kfw', title: 'KfW-Förderung & Steuervorteil' },
  { id: 'checkliste', title: 'Checkliste: Alle Förderungen nutzen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Förderungen nach Bundesland — alle Pflegezuschüsse 2026',
  description: 'Pflege-Förderungen 2026: Bundesweite Pflegekasse-Leistungen plus Landesförderungen in Bayern, NRW, BW und weiteren Bundesländern. Mit vollständiger Checkliste.',
  alternates: { canonical: 'https://primundus.de/foerderungen-nach-bundesland' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Förderungen nach Bundesland — Pflegezuschüsse 2026 | Primundus',
    description: 'Welche Pflege-Förderungen gibt es 2026 — bundesweit und je Bundesland?',
    url: 'https://primundus.de/foerderungen-nach-bundesland',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Förderungen nach Bundesland — alle Pflegezuschüsse 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/foerderungen-nach-bundesland',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Förderungen nach Bundesland', item: 'https://primundus.de/foerderungen-nach-bundesland' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Gibt es Pflegeförderungen die über die Pflegekasse hinausgehen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — zusätzlich zur Pflegekasse gibt es: KfW-Förderung für barrierefreien Umbau (Kredit bis 50.000 €), steuerliche Absetzbarkeit der Pflegekosten (bis 4.000 €/Jahr), und einige Bundesländer bieten eigene Landespflegegeld- oder Beratungsleistungen. Primundus informiert im Beratungsgespräch über alle relevanten Möglichkeiten.' },
      },
    ],
  },
]

export default function FoerderungenNachBundesland() {
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
            { label: "Förderungen nach Bundesland" },
          ]}
          augenbraue="Ratgeber Finanzierung"
          titel="Förderungen nach Bundesland — alle Pflegezuschüsse 2026"
          einleitung="Viele Familien kennen die Pflegekassen-Zuschüsse — aber nicht alle wissen: Darüber hinaus gibt es KfW-Förderkredite für Wohnraumanpassung, steuerliche Absetzbarkeit, und in mehreren Bundesländern eigene Landeszuschüsse. Wer alle Förderungen kombiniert, kann den Eigenanteil bei der 24h-Pflege erheblich senken."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="bundesweit" titel="Bundesweite Kassenzuschüsse 2026 — die Basis">
            <Text>
              Diese Leistungen gelten in allen 16 Bundesländern identisch — für jeden Pflegebedürftigen mit anerkanntem Pflegegrad.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Leistung', 'PG 2', 'PG 3', 'PG 4', 'PG 5', 'Besonderheit'].map(h => (
                      <th key={h} className="px-3 py-3 text-[11px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegeld/Mo', '347 €', '599 €', '800 €', '990 €', 'Für private Pflege'],
                    ['Sachleistungen/Mo', '796 €', '1.497 €', '1.859 €', '2.299 €', 'Für Pflegedienste'],
                    ['Entlastungsbetrag/Mo', '131 €', '131 €', '131 €', '131 €', 'Auch PG 1'],
                    ['Entlastungsbudget/Jahr', '3.539 €', '3.539 €', '3.539 €', '3.539 €', 'Angesammelt 3 Jahre'],
                    ['Wohnraumanpassung/Maßnahme', '4.180 €', '4.180 €', '4.180 €', '4.180 €', 'Antrag vor Beginn'],
                    ['Pflegehilfsmittel/Mo', '42 €', '42 €', '42 €', '42 €', 'Pauschale'],
                  ].map(([leistung, pg2, pg3, pg4, pg5, hinweis], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-3 py-3 text-[13px] font-semibold text-pm-ink border-b border-pm-line">{leistung}</td>
                      {[pg2, pg3, pg4, pg5].map((v, j) => (
                        <td key={j} className="px-3 py-3 text-[13px] font-bold text-pm-green border-b border-pm-line">{v}</td>
                      ))}
                      <td className="px-3 py-3 text-[11px] text-pm-mute border-b border-pm-line">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">§36–45b SGB XI · Stand 2026 · Identisch zu 2025</p>
            </div>
          </div>
          </Abschnitt>

          <Abschnitt id="laender" titel="Zusatzförderungen der Bundesländer">
            <Text>
              Zusätzlich zu den bundesweiten Pflegekasse-Leistungen bieten einige Bundesländer eigene Pflegeprogramme. Diese variieren stark und werden regelmäßig angepasst — vor Antragstellung immer beim zuständigen Landesamt prüfen.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-4 mb-10">
            {[
              {
                land: 'Bayern',
                leistungen: [
                  { name: 'Landespflegegeld', detail: '1.000 €/Jahr für Pflegebedürftige mit PG 2–5 die zuhause gepflegt werden. Antrag beim Landesamt für Pflege (LfP). Kumulierbar mit Pflegekasse-Leistungen.' },
                  { name: 'Pflegeberatung (FQA)', detail: 'Kostenlose Fachberatung durch Fachstellen für Pflege- und Behinderteneinrichtungen – Qualitätsentwicklung und Aufsicht.' },
                ],
              },
              {
                land: 'Baden-Württemberg',
                leistungen: [
                  { name: 'Landesberatungsstellen', detail: 'Kostenlose Pflegestützpunkte in allen Kreisen. Beratung über kommunale Angebote und ergänzende Förderungen.' },
                  { name: 'Kommunale Pflegefonds', detail: 'Einige Landkreise bieten zusätzliche Entlastungsangebote — regional unterschiedlich.' },
                ],
              },
              {
                land: 'NRW',
                leistungen: [
                  { name: 'Pflegestützpunkte', detail: '100+ Pflegestützpunkte in NRW für kostenlose, unabhängige Beratung zu allen Pflegefragen.' },
                  { name: 'Programm "Pflege in NRW"', detail: 'Landesförderprogramme für niedrigschwellige Angebote und Ehrenamt in der Pflege.' },
                ],
              },
              {
                land: 'Alle Bundesländer',
                leistungen: [
                  { name: 'Pflegestützpunkte', detail: 'Jedes Bundesland betreibt ein Netz aus kostenlosen Pflegestützpunkten für unabhängige Beratung.' },
                  { name: 'Verhinderungs- & Kurzzeitpflege', detail: 'Gemeinsames Entlastungsbudget bis 3.539 €/Jahr (bundesweit, seit Juli 2025) für Ersatzpflege, wenn die Hauptpflegeperson ausfällt.' },
                ],
              },
            ].map((block) => (
              <div key={block.land} className="bg-white rounded-xl border border-pm-line overflow-hidden">
                <div className="bg-pm-paper px-5 py-3 border-b border-pm-line">
                  <p className="text-[13px] font-bold text-pm-ink">{block.land}</p>
                </div>
                <div className="divide-y divide-pm-line">
                  {block.leistungen.map((l) => (
                    <div key={l.name} className="px-5 py-3">
                      <p className="text-[13px] font-semibold text-pm-taupe mb-0.5">{l.name}</p>
                      <p className="text-[13px] text-pm-body leading-relaxed">{l.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
            <Kasten titel="Hinweis zu Landesförderungen">
              <Text>Landesförderungen werden regelmäßig angepasst, eingestellt oder neu aufgelegt. Die hier genannten Leistungen entsprechen dem Stand April 2026. Vor der Antragstellung immer beim zuständigen Landesamt oder Pflegestützpunkt prüfen.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="kfw" titel="KfW-Förderung & Steuerabzug — unterschätzte Möglichkeiten">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">KfW-Programm 159 — Altersgerecht Umbauen</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-3">
                KfW-Kredit bis 50.000 € für barrierefreie Wohnraumanpassung — zu günstigen Zinsen. Kombinierbar mit dem Pflegekasse-Zuschuss (4.180 €/Maßnahme). Für Maßnahmen die über den Pflegekasse-Zuschuss hinausgehen (z.B. Treppenlift, größerer Badumbau).
              </p>
              <p className="text-[13px] text-pm-mute">Antrag über Hausbank · kfw.de · Vor Beginn der Maßnahme beantragen</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">Steuerliche Absetzbarkeit — bis 4.000 €/Jahr</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-3">
                Pflege- und Betreuungskosten können bis zu 4.000 € pro Jahr als außergewöhnliche Belastung oder haushaltsnahe Dienstleistung von der Steuer abgesetzt werden. Bei Primundus-Kosten von 2.200–3.500 €/Monat ist der Steuereffekt erheblich.
              </p>
              <p className="text-[13px] text-pm-mute">→ Details: <a href="/pflege-steuerlich-absetzen" className="text-pm-taupe underline">Pflege steuerlich absetzen</a></p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">Verhinderungspflege — bis 3.539 €/Jahr aus dem Entlastungsbudget</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-3">
                Wenn die Hauptpflegeperson ausfällt (Urlaub, Krankheit), zahlt die Pflegekasse aus dem gemeinsamen Jahresbetrag für Verhinderungs- und Kurzzeitpflege bis zu 3.539 €/Jahr für eine Ersatzkraft — ab PG 2. Die frühere 6-Monats-Vorpflegezeit ist seit Juli 2025 entfallen.
              </p>
              <p className="text-[13px] text-pm-mute">→ Details: <a href="/verhinderungspflege" className="text-pm-taupe underline">Verhinderungspflege erklärt</a></p>
            </div>
          </div>
          </Abschnitt>

          <Abschnitt id="checkliste" titel="Checkliste: Alle Förderungen nutzen">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-2 mb-10">
            {[
              { check: 'Pflegegrad beantragt (Antrag sofort stellen — rückwirkend ab Antragsdatum)', link: '/pflegegrad-beantragen' },
              { check: 'Pflegegeld oder Sachleistungen gewählt (oder Kombinationsleistung)', link: '/kombinationsleistung-pflege' },
              { check: 'Entlastungsbetrag (131 €/Mo) separat bei Pflegekasse beantragt', link: '/entlastungsbetrag' },
              { check: 'Entlastungsbudget für anerkannte Leistungen genutzt (3.539 €/Jahr)', link: '/entlastungsbetrag' },
              { check: 'Wohnraumanpassung beantragt (bis 4.180 €/Maßnahme, VOR Beginn beantragen)', link: '/barrierefreies-zuhause-gestalten' },
              { check: 'Pflegehilfsmittel-Pauschale (42 €/Mo) genutzt', link: null },
              { check: 'Verhinderungspflege eingeplant (Teil des Entlastungsbudgets, bis 3.539 €/Jahr)', link: '/verhinderungspflege' },
              { check: 'Steuerliche Absetzbarkeit geprüft (bis 4.000 €/Jahr)', link: '/pflege-steuerlich-absetzen' },
              { check: 'KfW-Kredit für größere Wohnraumanpassung geprüft (kfw.de)', link: null },
              { check: 'Landespflegegeld Bayern (1.000 €/Jahr) beantragt — falls zutreffend', link: null },
              { check: 'Lokalen Pflegestützpunkt kontaktiert für weitere Beratung', link: null },
            ].map((item) => (
              <div key={item.check} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className="w-5 h-5 rounded border-2 border-pm-taupe flex-shrink-0 mt-0.5" />
                <p className="text-[14px] text-pm-body">
                  {item.link ? (
                    <a href={item.link} className="text-pm-taupe hover:underline">{item.check}</a>
                  ) : item.check}
                </p>
              </div>
            ))}
          </div>
            <MehrDazu
              label="Alle Kassenzuschüsse kombiniert:"
              links={[{ href: "/eigenanteil-24h-pflege-senken", text: "Eigenanteil bei 24h-Pflege senken" }, { href: "/finanzierung", text: "Finanzierungsübersicht 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Gibt es Pflegeförderungen die über die Pflegekasse hinausgehen?', a: 'Ja: KfW-Förderkredit (bis 50.000 €) für Wohnraumanpassung, Steuerabzug (bis 4.000 €/Jahr), Landespflegegeld Bayern (1.000 €/Jahr), kommunale Zuschüsse regional. Pflegestützpunkt berät kostenlos.' },
                { q: 'Wie viel Landespflegegeld gibt es in Bayern?', a: '1.000 €/Jahr für Pflegebedürftige mit PG 2–5 die zuhause gepflegt werden. Antrag beim Landesamt für Pflege (LfP) in Bayern.' },
                { q: 'Kann man KfW-Kredit und Pflegekasse-Zuschuss kombinieren?', a: 'Ja — KfW-Kredit (bis 50.000 € für barrierefreien Umbau) läuft zusätzlich zu den Pflegekasse-Zuschüssen (4.180 €/Maßnahme). Beide kombinieren für größere Projekte.' },
                { q: 'Wer berät kostenlos über alle Förderungen?', a: 'Pflegestützpunkte in jedem Bundesland bieten kostenlose, unabhängige Beratung. Primundus berät im kostenlosen Erstgespräch über alle relevanten Kassenzuschüsse.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="foerderungen-nach-bundesland" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
