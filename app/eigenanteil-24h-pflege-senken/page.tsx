import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, HakenListe, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('eigenanteil-24h-pflege-senken', '25. April 2026')

const SECTIONS = [
  { id: 'uebersicht', title: 'Alle Stellschrauben' },
  { id: 'pflegegrad', title: '1. Pflegegrad korrekt beantragen' },
  { id: 'kassenzuschuesse', title: '2. Kassenzuschüsse voll nutzen' },
  { id: 'steuer', title: '3. Steuerlich absetzen' },
  { id: 'foerderungen', title: '4. Wohnraumanpassung & Hilfsmittel' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Eigenanteil 24h-Pflege senken — alle Möglichkeiten 2026',
  description: 'Eigenanteil der 24h-Pflege senken: Pflegegrad erhöhen, Entlastungsbudget nutzen, Steuerabzug, Hilfsmittel. Mit allen Maßnahmen auf unter 1.500 €/Monat.',
  alternates: { canonical: 'https://primundus.de/eigenanteil-24h-pflege-senken' },
  openGraph: {
    title: 'Eigenanteil 24h-Pflege senken | Primundus',
    description: 'Alle Möglichkeiten um den Eigenanteil der 24h-Pflege 2026 zu senken.',
    url: 'https://primundus.de/eigenanteil-24h-pflege-senken',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eigenanteil 24h-Pflege senken — alle Möglichkeiten 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/eigenanteil-24h-pflege-senken',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Eigenanteil senken', item: 'https://primundus.de/eigenanteil-24h-pflege-senken' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kann ich den Eigenanteil der 24h-Pflege senken?', acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Stellschrauben: 1. Pflegegrad korrekt beantragen — jede Stufe bedeutet hunderte Euro mehr. 2. Entlastungsbudget (3.539 €/Jahr) voll ausschöpfen. 3. Steuerlich absetzen (max. 4.000 €/Jahr). 4. Pflegehilfsmittel (42 €/Monat) beantragen. 5. Wohnraumanpassungsförderung nutzen.' } },
      { '@type': 'Question', name: 'Wie viel kann man beim Eigenanteil sparen?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 3 können durch Pflegegeld (599 €/Monat), Entlastungsbetrag (131 €/Monat), Entlastungsbudget (ca. 295 €/Monat anteilig) und Steuerabzug (ca. 333 €/Monat) zusammen über 1.350 € monatlich eingespart werden — aus Bruttokosten von 2.700 € werden ca. 1.350 € Eigenanteil.' } },
    ],
  },
]

export default function EigenanteilSenken() {
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
            { label: "Eigenanteil senken" },
          ]}
          augenbraue="Ratgeber Kosten"
          titel="Eigenanteil der 24h-Pflege senken — alle Möglichkeiten 2026"
          einleitung="24h-Pflege kostet 2.200–3.500 Euro brutto — aber wer alle verfügbaren Leistungen kennt und kombiniert, kann den tatsächlichen Eigenanteil auf unter 1.500 Euro pro Monat senken. Viele Familien verschenken hunderte Euro monatlich weil sie nicht alle Möglichkeiten nutzen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Potenzielle Ersparnis pro Monat (Pflegegrad 3)">
              <HakenListe punkte={[
                'Pflegegeld: – 599 €/Monat',
                'Entlastungsbetrag: – 131 €/Monat',
                'Entlastungsbudget (anteilig): – ca. 295 €/Monat',
                'Steuerabzug: – ca. 333 €/Monat (max. 4.000 €/Jahr)',
                'Pflegehilfsmittel: – 42 €/Monat',
                'Gesamt mögliche Einsparung: über 1.400 €/Monat',
              ]} />
            </Kasten>
          </Vorspann>

          <Abschnitt id="uebersicht" titel="Alle Stellschrauben im Überblick">
            <Tabelle
              titel=""
              kopf={['Maßnahme', 'Potenzielle Ersparnis', 'Aufwand']}
              zeilen={[
                ['Pflegegrad korrekt beantragen', 'bis 252 €/Monat mehr (PG 2→3)', 'Mittel'],
                ['Pflegegeld nutzen', '347–990 €/Monat', 'Gering'],
                ['Entlastungsbetrag einreichen', '131 €/Monat', 'Gering'],
                ['Entlastungsbudget ausschöpfen', '3.539 €/Jahr = ca. 295 €/Monat', 'Mittel'],
                ['Steuerlich absetzen', 'max. 4.000 €/Jahr = 333 €/Monat', 'Gering'],
                ['Pflegehilfsmittel beantragen', '42 €/Monat', 'Sehr gering'],
                ['Wohnraumanpassung fördern lassen', 'bis 4.180 € je Maßnahme', 'Mittel'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="1. Pflegegrad korrekt beantragen">
            <Text>
              Die größte Einzelmaßnahme: Jede Pflegegrad-Stufe bedeutet deutlich mehr Kassenzuschuss. Wer zu niedrig eingestuft ist, verschenkt monatlich hunderte Euro.
            </Text>
            <Tabelle
              titel=""
              kopf={['Stufe', 'Pflegegeld', 'Mehrwert pro Stufe']}
              zeilen={[
                ['PG 2', '347 €/Monat', '—'],
                ['PG 3', '599 €/Monat', '+252 €/Monat'],
                ['PG 4', '800 €/Monat', '+201 €/Monat'],
                ['PG 5', '990 €/Monat', '+190 €/Monat'],
              ]}
              betont={1}
            />
            <MehrDazu
              label="Vollständige Anleitung:"
              links={[{ href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen" }, { href: "/pflegegrad-erhoehen", text: "Pflegegrad erhöhen" }]}
            />
          </Abschnitt>

          <Abschnitt id="kassenzuschuesse" titel="2. Alle Kassenzuschüsse voll ausschöpfen">
            <Punkte
              punkte={[
                { title: 'Pflegegeld — monatlich', desc: <>347–990 €/Monat je nach Pflegegrad. Wird automatisch ausgezahlt — aber nur wenn Beratungseinsätze wahrgenommen werden (PG 2–3: halbjährlich, PG 4–5: vierteljährlich).<br /><a href="/pflegegeld" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Mehr Details</a></> },
                { title: 'Entlastungsbetrag — 131 €/Monat', desc: <>Wird nicht automatisch ausgezahlt — Rechnungen anerkannter Anbieter einreichen. Kann bis 30. Juni des Folgejahres angespart werden (max. 1.572 €).<br /><a href="/entlastungsbetrag" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Mehr Details</a></> },
                { title: 'Entlastungsbudget — 3.539 €/Jahr', desc: <>Für Verhinderungs- und Kurzzeitpflege. Verfällt am 31. Dezember — rechtzeitig nutzen und einreichen. Vorpflegezeit entfällt seit Juli 2025.<br /><a href="/verhinderungspflege" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Mehr Details</a></> },
                { title: 'Pflegehilfsmittel — 42 €/Monat', desc: 'Handschuhe, Desinfektionsmittel, Bettschutzeinlagen. Bei der Pflegekasse beantragen — werden direkt nach Hause geliefert. Kaum jemand nutzt das.' },
              ]}
            />
            <MehrDazu
              label="Alle Zuschüsse in einer Übersicht:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Kassenzuschüsse 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="steuer" titel="3. Steuerlich absetzen — bis 4.000 € pro Jahr">
            <Text>
              20 % der Pflegekosten können als haushaltsnahe Dienstleistungen von der Steuerschuld abgezogen werden — direkt, nicht nur vom zu versteuernden Einkommen. Maximum: 4.000 € Steuerersparnis pro Jahr.
            </Text>
            <Text>
              Bei Primundus-Kosten von 2.700 €/Monat (32.400 €/Jahr) sind das 4.000 € Maximalersparnis — entspricht ca. 333 €/Monat. Voraussetzung: Zahlung per Überweisung, Rechnung aufbewahren, Anlage V der Steuererklärung.
            </Text>
            <MehrDazu
              label="Ausführlich erklärt:"
              links={[{ href: "/pflege-steuerlich-absetzen", text: "Pflege steuerlich absetzen 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="foerderungen" titel="4. Wohnraumanpassung & Hilfsmittel fördern lassen">
            <Punkte
              punkte={[
                { title: 'Wohnraumanpassung — bis 4.180 € je Maßnahme', desc: 'Treppenlift, Badumbau, Türverbreiterung, Rampen — die Pflegekasse übernimmt bis zu 4.180 € je wohnumfeldverbessernder Maßnahme. Bei mehreren Pflegebedürftigen im Haushalt kumulierbar.' },
                { title: 'KfW-Förderung Barrierefrei', desc: 'Zusätzlich zur Kassenleistung gibt es KfW-Förderdarlehen und -Zuschüsse für barrierefreien Umbau. KfW Programm 455-B: bis zu 4.000 € Zuschuss pro Wohneinheit.' },
                { title: 'Hilfsmittel auf Kassenrezept', desc: 'Rollstuhl, Pflegebett, Toilettenstuhl, Duschhocker — können auf Rezept vom Hausarzt von der Krankenkasse bezahlt werden. Eigenanteil oft nur 10 € pro Hilfsmittel.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie kann ich den Eigenanteil der 24h-Pflege senken?', a: 'Die 5 wichtigsten Hebel: Pflegegrad korrekt beantragen, alle Kassenzuschüsse ausschöpfen (Pflegegeld, Entlastungsbetrag, Entlastungsbudget), steuerlich absetzen (max. 4.000 €/Jahr), Pflegehilfsmittel (42 €/Monat) beantragen, Wohnraumanpassung fördern lassen.' },
                { q: 'Wie viel kann man beim Eigenanteil sparen?', a: 'Bei PG 3 und optimaler Kombination: Pflegegeld (599 €) + Entlastungsbetrag (131 €) + Entlastungsbudget (ca. 295 €/Monat) + Steuerabzug (ca. 333 €) = über 1.350 €/Monat Einsparung gegenüber den Bruttokosten.' },
                { q: 'Muss man den Entlastungsbetrag extra beantragen?', a: 'Der Anspruch entsteht automatisch mit dem Pflegegrad — aber er wird nicht automatisch ausgezahlt. Rechnungen anerkannter Anbieter einreichen und bis zu 131 €/Monat erstatten lassen. Kann bis 30. Juni des Folgejahres angespart werden.' },
                { q: 'Wann lohnt sich ein Antrag auf Höherstufung?', a: 'Wenn sich der Pflegebedarf verschlechtert hat. Bei Höherstufung von PG 2 auf PG 3 steigt das Pflegegeld um 252 €/Monat. Keine Sperrfrist — jederzeit beantragbar.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="eigenanteil-24h-pflege-senken" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
