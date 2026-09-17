import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Kasten, Liste, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('foerderungen-nach-bundesland', '21. August 2026')

// Links in der Checkliste wie die Linkzeilen der Vorlage (MehrDazu)
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

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
            <Tabelle
              titel=""
              kopf={['Leistung', 'PG 2', 'PG 3', 'PG 4', 'PG 5', 'Besonderheit']}
              zeilen={[
                ['Pflegegeld/Mo', '347 €', '599 €', '800 €', '990 €', 'Für private Pflege'],
                ['Sachleistungen/Mo', '796 €', '1.497 €', '1.859 €', '2.299 €', 'Für Pflegedienste'],
                ['Entlastungsbetrag/Mo', '131 €', '131 €', '131 €', '131 €', 'Auch PG 1'],
                ['Entlastungsbudget/Jahr', '3.539 €', '3.539 €', '3.539 €', '3.539 €', 'Angesammelt 3 Jahre'],
                // Fett 283 px breit, auf 360 px stehen 280 px zur Verfügung: Umbruch nach dem Schrägstrich
                // statt Silbentrennung „Maßnah-me"
                [<span className="whitespace-normal hyphens-manual">Wohnraumanpassung/<wbr />Maßnahme</span>, '4.180 €', '4.180 €', '4.180 €', '4.180 €', 'Antrag vor Beginn'],
                ['Pflegehilfsmittel/Mo', '42 €', '42 €', '42 €', '42 €', 'Pauschale'],
              ]}
              fuss="§36–45b SGB XI · Stand 2026 · Identisch zu 2025"
            />
          </Abschnitt>

          <Abschnitt id="laender" titel="Zusatzförderungen der Bundesländer">
            <Text>
              Zusätzlich zu den bundesweiten Pflegekasse-Leistungen bieten einige Bundesländer eigene Pflegeprogramme. Diese variieren stark und werden regelmäßig angepasst — vor Antragstellung immer beim zuständigen Landesamt prüfen.
            </Text>
            <Gruppen
              gruppen={[
                {
                  title: 'Bayern',
                  punkte: [
                    <><strong>Landespflegegeld</strong><br />{'500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP). Kumulierbar mit Pflegekasse-Leistungen.'}</>,
                    <><strong>Pflegeberatung (FQA)</strong><br />{'Kostenlose Fachberatung durch Fachstellen für Pflege- und Behinderteneinrichtungen – Qualitätsentwicklung und Aufsicht.'}</>,
                  ],
                },
                {
                  title: 'Baden-Württemberg',
                  punkte: [
                    <><strong>Landesberatungsstellen</strong><br />{'Kostenlose Pflegestützpunkte in allen Kreisen. Beratung über kommunale Angebote und ergänzende Förderungen.'}</>,
                    <><strong>Kommunale Pflegefonds</strong><br />{'Einige Landkreise bieten zusätzliche Entlastungsangebote — regional unterschiedlich.'}</>,
                  ],
                },
                {
                  title: 'NRW',
                  punkte: [
                    <><strong>Pflegestützpunkte</strong><br />{'100+ Pflegestützpunkte in NRW für kostenlose, unabhängige Beratung zu allen Pflegefragen.'}</>,
                    <><strong>{'Programm "Pflege in NRW"'}</strong><br />{'Landesförderprogramme für niedrigschwellige Angebote und Ehrenamt in der Pflege.'}</>,
                  ],
                },
                {
                  title: 'Alle Bundesländer',
                  punkte: [
                    <><strong>Pflegestützpunkte</strong><br />{'Jedes Bundesland betreibt ein Netz aus kostenlosen Pflegestützpunkten für unabhängige Beratung.'}</>,
                    <><strong>{'Verhinderungs- & Kurzzeitpflege'}</strong><br />{'Gemeinsames Entlastungsbudget bis 3.539 €/Jahr (bundesweit, seit Juli 2025) für Ersatzpflege, wenn die Hauptpflegeperson ausfällt.'}</>,
                  ],
                },
              ]}
            />
            <Kasten titel="Hinweis zu Landesförderungen">
              <Text>Landesförderungen werden regelmäßig angepasst, eingestellt oder neu aufgelegt. Die hier genannten Leistungen entsprechen dem Stand April 2026. Vor der Antragstellung immer beim zuständigen Landesamt oder Pflegestützpunkt prüfen.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="kfw" titel="KfW-Förderung & Steuerabzug — unterschätzte Möglichkeiten">
            <Punkte
              punkte={[
                {
                  title: 'KfW-Programm 159 — Altersgerecht Umbauen',
                  desc: (
                    <>
                      <p>KfW-Kredit bis 50.000 € für barrierefreie Wohnraumanpassung — zu günstigen Zinsen. Kombinierbar mit dem Pflegekasse-Zuschuss (4.180 €/Maßnahme). Für Maßnahmen die über den Pflegekasse-Zuschuss hinausgehen (z.B. Treppenlift, größerer Badumbau).</p>
                      <p className="mt-2 text-[15px] leading-[1.5] text-pm-mute">Antrag über Hausbank · kfw.de · Vor Beginn der Maßnahme beantragen</p>
                    </>
                  ),
                },
                {
                  title: 'Steuerliche Absetzbarkeit — bis 4.000 €/Jahr',
                  desc: (
                    <>
                      <p>Pflege- und Betreuungskosten können bis zu 4.000 € pro Jahr als außergewöhnliche Belastung oder haushaltsnahe Dienstleistung von der Steuer abgesetzt werden. Schon beim Primundus-Grundpreis von 2.150 €/Monat wird dieser Höchstbetrag erreicht.</p>
                      <div className="mt-2">
                        <MehrDazu label="Details:" links={[{ href: '/pflege-steuerlich-absetzen', text: 'Pflege steuerlich absetzen' }]} />
                      </div>
                    </>
                  ),
                },
                {
                  title: 'Verhinderungspflege — bis 3.539 €/Jahr aus dem Entlastungsbudget',
                  desc: (
                    <>
                      <p>Wenn die Hauptpflegeperson ausfällt (Urlaub, Krankheit), zahlt die Pflegekasse aus dem gemeinsamen Jahresbetrag für Verhinderungs- und Kurzzeitpflege bis zu 3.539 €/Jahr für eine Ersatzkraft — ab PG 2. Die frühere 6-Monats-Vorpflegezeit ist seit Juli 2025 entfallen.</p>
                      <div className="mt-2">
                        <MehrDazu label="Details:" links={[{ href: '/verhinderungspflege', text: 'Verhinderungspflege erklärt' }]} />
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="checkliste" titel="Checkliste: Alle Förderungen nutzen">
            <Liste
              punkte={[
                <a href="/pflegegrad-beantragen" className={LINK}>Pflegegrad beantragt (Antrag sofort stellen — rückwirkend ab Antragsdatum)</a>,
                <a href="/kombinationsleistung-pflege" className={LINK}>Pflegegeld oder Sachleistungen gewählt (oder Kombinationsleistung)</a>,
                <a href="/entlastungsbetrag" className={LINK}>Entlastungsbetrag (131 €/Mo) separat bei Pflegekasse beantragt</a>,
                <a href="/entlastungsbetrag" className={LINK}>Entlastungsbudget für anerkannte Leistungen genutzt (3.539 €/Jahr)</a>,
                <a href="/barrierefreies-zuhause-gestalten" className={LINK}>Wohnraumanpassung beantragt (bis 4.180 €/Maßnahme, VOR Beginn beantragen)</a>,
                'Pflegehilfsmittel-Pauschale (42 €/Mo) genutzt',
                <a href="/verhinderungspflege" className={LINK}>Verhinderungspflege eingeplant (Teil des Entlastungsbudgets, bis 3.539 €/Jahr)</a>,
                <a href="/pflege-steuerlich-absetzen" className={LINK}>Steuerliche Absetzbarkeit geprüft (bis 4.000 €/Jahr)</a>,
                'KfW-Kredit für größere Wohnraumanpassung geprüft (kfw.de)',
                'Landespflegegeld Bayern (500 €/Jahr) beantragt — falls zutreffend',
                'Lokalen Pflegestützpunkt kontaktiert für weitere Beratung',
              ]}
            />
            <MehrDazu
              label="Alle Kassenzuschüsse kombiniert:"
              links={[{ href: "/eigenanteil-24h-pflege-senken", text: "Eigenanteil bei 24h-Pflege senken" }, { href: "/finanzierung", text: "Finanzierungsübersicht 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Gibt es Pflegeförderungen die über die Pflegekasse hinausgehen?', a: 'Ja: KfW-Förderkredit (bis 50.000 €) für Wohnraumanpassung, Steuerabzug (bis 4.000 €/Jahr), Landespflegegeld Bayern (500 €/Jahr), kommunale Zuschüsse regional. Pflegestützpunkt berät kostenlos.' },
                { q: 'Wie viel Landespflegegeld gibt es in Bayern?', a: '500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP) in Bayern.' },
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
