import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Werte,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-4', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 4?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'alltag', title: '24h-Pflege bei Pflegegrad 4' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 4 — Leistungen & 800 € Pflegegeld 2026',
  description: 'Pflegegrad 4: alle Leistungen und Beträge 2026, Voraussetzungen der Einstufung und wie Familien die Betreuung zu Hause damit finanzieren.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-4' },
  openGraph: {
    title: 'Pflegegrad 4 — Leistungen & Beträge 2026 | Primundus',
    description: 'Pflegegrad 4: 800 € Pflegegeld + 1.859 € Sachleistungen. Schwerste Beeinträchtigung — alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-4',
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
    headline: 'Pflegegrad 4 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-4',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 4', item: 'https://primundus.de/pflegegrad-4' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 4?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 4 gibt es 800 € Pflegegeld/Monat, 1.859 € Pflegesachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. Zusätzlich: erhöhte Zuschläge im Pflegeheim (30 % ab 13. Monat).' } },
      { '@type': 'Question', name: 'Was sind die Voraussetzungen für Pflegegrad 4?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 4 wird vergeben wenn beim NBA 70 bis 89,9 Punkte erreicht werden. Es liegt schwerste Beeinträchtigung der Selbstständigkeit vor — kaum eigenständige Körperpflege, umfangreiche Mobilitätshilfe, oft Inkontinenz.' } },
      { '@type': 'Question', name: 'Kann man mit Pflegegrad 4 zuhause bleiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — mit einer 24h-Betreuungskraft ist zuhause bleiben bei PG 4 in den meisten Fällen möglich. Der Pflegebedarf ist hoch, aber eine professionelle Kraft kann das sicher leisten. Primundus ist mit eigenen Betreuungskräften in 4–7 Tagen vor Ort.' } },
    ],
  },
]

export default function Pflegegrad4() {
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
            { label: "Pflegegrade", href: "/pflegegrade" },
            { label: "Pflegegrad 4" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad 4 — Leistungen & Beträge 2026"
          einleitung="Pflegegrad 4 bedeutet schwerste Beeinträchtigung der Selbstständigkeit. Betroffene erhalten 800 € Pflegegeld pro Monat, 1.859 € Sachleistungen und 3.539 € Entlastungsbudget pro Jahr. Mit einer 24h-Betreuungskraft ist zuhause bleiben bei PG 4 in den meisten Fällen möglich."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Pflegegeld: 800 €/Monat (wenn Angehörige oder private Kräfte pflegen)',
                'Pflegesachleistungen: 1.859 €/Monat (für ambulante Pflegedienste)',
                'Entlastungsbetrag: 131 €/Monat zusätzlich',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege',
                'Voraussetzung: 70–89,9 Punkte im NBA-Begutachtungsverfahren',
                'Stand 2026: Identisch zu 2025 — nächste Dynamisierung frühestens Jan. 2028',
              ]}
          blickTitel="Auf einen Blick — Pflegegrad 4"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was bedeutet Pflegegrad 4?">
            <Text>
              Pflegegrad 4 steht für <strong>schwerste Beeinträchtigung der Selbstständigkeit</strong>. Eigenständige Körperpflege ist kaum noch möglich, umfangreiche Mobilitätshilfe wird benötigt, oft liegt Inkontinenz vor. Eine kontinuierliche Betreuungspräsenz ist in aller Regel notwendig.
            </Text>
            <Text>
              Typisch bei PG 4: Fortgeschrittene Demenz mit vollständiger Fremdversorgung, Zustand nach schwerem Schlaganfall mit Hemiplegie, schweres Parkinson-Stadium, Multimorbidität mit vollständiger Abhängigkeit.
            </Text>
            <Punkte
              punkte={[
                { title: 'Körperpflege', desc: 'Vollständige Übernahme von Waschen, Anziehen, Zahnpflege, Haarpflege. Eigenständiges Waschen nicht möglich.' },
                { title: 'Mobilität', desc: 'Transfer aus Bett, Rollstuhlversorgung, Umlagerung zur Dekubitusprophylaxe. Sturzgefahr sehr hoch.' },
                { title: 'Ernährung', desc: 'Hilfe bei allen Mahlzeiten, häufig Schluckstörungen (Dysphagie). Angepasste Nahrungszubereitung erforderlich.' },
                { title: 'Kognition', desc: 'Bei Demenz: weitgehender Verlust der Selbstständigkeit, Desorientierung, ständige Aufsicht notwendig.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Leistungen & Beträge 2026">
            <Tabelle
              titel="Alle Leistungen bei Pflegegrad 4 — Stand 2026"
              zeilen={[
                ['Pflegegeld', '800 €/Monat', 'Wenn Angehörige oder private Kräfte pflegen'],
                ['Pflegesachleistungen', '1.859 €/Monat', 'Für ambulante Pflegedienste'],
                ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote'],
                ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege'],
                ['Tages-/Nachtpflege', '1.685 €/Monat', 'Eigenes Budget, keine Anrechnung'],
                ['Pflegehilfsmittel', '42 €/Monat', 'Handschuhe, Desinfektionsmittel etc.'],
              ]}
              betont={1}
              fuss="Quelle: GKV-Spitzenverband · Stand 2026 · Identisch zu 2025"
            />
            <MehrDazu
              label="Alle Zuschüsse:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege" }, { href: "/pflegegeld", text: "Pflegegeld 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="voraussetzungen" titel="Voraussetzungen — Pflegegrad im Vergleich">
            <Tabelle
              titel=""
              kopf={['Pflegegrad', 'Punkte NBA', 'Pflegegeld', 'Bezeichnung']}
              zeilen={[
                ['PG 2', '27–47,4', '347 €', 'Erhebliche Beeinträchtigung'],
                ['PG 3', '47,5–69,9', '599 €', 'Schwere Beeinträchtigung'],
                ['PG 4', '70–89,9', '800 €', 'Schwerste Beeinträchtigung'],
                ['PG 5', '90–100', '990 €', 'Schwerste + besondere Anforderungen'],
              ]}
              betont={2}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="24h-Pflege bei Pflegegrad 4 — zuhause bleiben">
            <Text>
              PG 4 ist der häufigste Pflegegrad bei dem Familien überlegen ins Pflegeheim zu wechseln. Mit einer 24h-Betreuungskraft ist zuhause bleiben in den meisten Fällen aber weiterhin möglich und wird von Betroffenen meist klar bevorzugt.
            </Text>
            <Kasten titel="Kostenvergleich bei PG 4" ton="gruen">
              <Werte
                zeilen={[
                  ['24h-Pflege Primundus (brutto)', 'ca. 3.000 €/Monat'],
                  ['Abzüglich Pflegegeld PG 4', '– 800 €/Monat'],
                  
                  ['Eigenanteil ca.', 'ca. 2.200 €/Monat'],
                  ['Pflegeheim Eigenanteil Ø', '3.364 €/Monat (steigend)'],
                ]}
              />
            </Kasten>
            <MehrDazu
              label="Direkter Vergleich:"
              links={[{ href: "/24h-pflege-vs-pflegeheim-kosten", text: "24h-Pflege vs. Pflegeheim — Kostenvergleich 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu Pflegegrad 4">
            <Fragen
              fragen={[
                { q: 'Was bekommt man bei Pflegegrad 4?', a: '800 € Pflegegeld/Monat, 1.859 € Sachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. Alle Beträge 2026 identisch zu 2025.' },
                { q: 'Was sind die Voraussetzungen für Pflegegrad 4?', a: '70–89,9 Punkte im NBA-Begutachtungsverfahren. Schwerste Beeinträchtigung — kaum eigenständige Körperpflege, umfangreiche Mobilitätshilfe, oft Inkontinenz.' },
                { q: 'Kann man mit Pflegegrad 4 zuhause bleiben?', a: 'Ja — mit einer 24h-Betreuungskraft von Primundus ist zuhause bleiben bei PG 4 in den meisten Fällen möglich. Der Eigenanteil ist bei 24h-Pflege oft günstiger als beim Pflegeheim.' },
                { q: 'Wie unterscheidet sich PG 4 von PG 5?', a: 'Bei PG 5 (90–100 Punkte) liegt zusätzlich zu schwersten Beeinträchtigungen ein besonderer Bedarf an Beaufsichtigung und Begleitung vor. Pflegegeld steigt auf 990 €/Monat.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-4" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
