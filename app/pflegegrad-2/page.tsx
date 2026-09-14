import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-2', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 2?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'alltag', title: '24h-Pflege bei Pflegegrad 2' },
  { id: 'hoeher', title: 'Höherstufung auf PG 3' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 2 — Leistungen & 347 € Pflegegeld 2026',
  description: 'Pflegegrad 2: 347 € Pflegegeld/Monat, 796 € Sachleistungen, 3.539 € Entlastungsbudget/Jahr. Alle Leistungen, Voraussetzungen und ob 24h-Pflege sinnvoll ist.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-2' },
  openGraph: {
    title: 'Pflegegrad 2 — Leistungen & Beträge 2026 | Primundus',
    description: 'Pflegegrad 2: 347 € Pflegegeld + 796 € Sachleistungen + 3.539 € Entlastungsbudget. Alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-2',
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
    headline: 'Pflegegrad 2 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-2',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 2', item: 'https://primundus.de/pflegegrad-2' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 2?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 2 gibt es 347 € Pflegegeld/Monat (wenn Angehörige pflegen), 796 € Pflegesachleistungen (für ambulante Pflegedienste), 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr für Verhinderungs- und Kurzzeitpflege. Stand 2026, identisch zu 2025.' } },
      { '@type': 'Question', name: 'Was sind die Voraussetzungen für Pflegegrad 2?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 2 wird vergeben wenn beim NBA-Begutachtungsverfahren 27 bis 47,4 Punkte erreicht werden. Es liegt erhebliche Beeinträchtigung der Selbstständigkeit vor — Hilfe bei mehreren Alltagsaktivitäten nötig, aber noch weitgehend eigenständig.' } },
      { '@type': 'Question', name: 'Kann man mit Pflegegrad 2 eine 24h-Betreuungskraft bekommen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — 24h-Pflege ist ab Pflegegrad 2 möglich. Bei PG 2 ist der Pflegebedarf noch moderat, aber eine rund um die Uhr präsente Betreuungskraft kann sinnvoll sein wenn der Pflegebedürftige allein lebt, Sicherheitsrisiken bestehen oder Angehörige nicht täglich präsent sein können.' } },
    ],
  },
]

export default function Pflegegrad2() {
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
            { label: "Pflegegrad 2" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad 2 — Leistungen & Beträge 2026"
          einleitung="Pflegegrad 2 ist der Einstiegspflegegrad für regelmäßige Kassenleistungen. Betroffene erhalten 347 € Pflegegeld pro Monat, 796 € Sachleistungen und 3.539 € Entlastungsbudget pro Jahr. PG 2 bedeutet erhebliche Beeinträchtigung — Hilfe bei mehreren Alltagsaktivitäten nötig, aber noch weitgehende Selbstständigkeit."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Pflegegeld: 347 €/Monat (wenn Angehörige oder private Kräfte pflegen)',
                'Pflegesachleistungen: 796 €/Monat (für ambulante Pflegedienste)',
                'Entlastungsbetrag: 131 €/Monat zusätzlich',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege',
                'Voraussetzung: 27–47,4 Punkte im NBA-Begutachtungsverfahren',
                'Keine Erhöhung 2026 — nächste Dynamisierung frühestens Januar 2028',
              ]}
          blickTitel="Auf einen Blick — Pflegegrad 2"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was bedeutet Pflegegrad 2?">
            <Text>
              Pflegegrad 2 steht für <strong>erhebliche Beeinträchtigung der Selbstständigkeit</strong>. Betroffene brauchen regelmäßige Unterstützung bei mehreren Alltagsaktivitäten — sind aber noch in vielen Bereichen selbstständig.
            </Text>
            <Text>
              Typische Situationen bei Pflegegrad 2: Leichte Demenz mit Orientierungsproblemen, eingeschränkte Mobilität nach Sturz oder OP, beginnende Parkinson-Erkrankung, Herzinsuffizienz mit Erschöpfung, Sehbehinderung die Alltagsaktivitäten erschwert.
            </Text>
            <Punkte
              punkte={[
                { title: 'Was noch selbstständig möglich ist', desc: 'Einfache Körperpflege, kurze Wege ohne Hilfsmittel, einfache Mahlzeiten, Gespräche führen. Die Selbstständigkeit ist erheblich — aber nicht vollständig — eingeschränkt.' },
                { title: 'Wo regelmäßige Hilfe nötig ist', desc: 'Körperpflege (Dusche, Haarpflege), Mobilität außer Haus, Kochen komplexerer Mahlzeiten, Medikamentenverwaltung, Behördenkommunikation.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Leistungen & Beträge 2026">
            <Tabelle
              titel="Alle Leistungen bei Pflegegrad 2 — Stand 2026"
              zeilen={[
                ['Pflegegeld', '347 €/Monat', 'Wenn Angehörige oder private Kräfte pflegen'],
                ['Pflegesachleistungen', '796 €/Monat', 'Für ambulante Pflegedienste'],
                ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote'],
                ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege'],
                ['Tages-/Nachtpflege', '721 €/Monat', 'Eigenes Budget, keine Anrechnung'],
                ['Pflegehilfsmittel', '42 €/Monat', 'Handschuhe, Desinfektionsmittel etc.'],
                ['Wohnraumanpassung', 'bis 4.180 €/Maßnahme', 'Treppenlift, Badumbau etc.'],
              ]}
              betont={1}
              fuss="Quelle: GKV-Spitzenverband · Stand 2026 · Identisch zu 2025"
            />
            <MehrDazu
              label="Alle Zuschüsse kombinieren:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Zuschüsse 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="voraussetzungen" titel="Voraussetzungen & Einstufung">
            <Text>
              Pflegegrad 2 wird vergeben wenn beim NBA-Begutachtungsverfahren <strong>27 bis 47,4 Punkte</strong> erreicht werden. Der Medizinische Dienst bewertet sechs Lebensbereiche — Selbstversorgung hat mit 36 % das höchste Gewicht.
            </Text>
            <Tabelle
              titel=""
              kopf={['Pflegegrad', 'Punkte', 'Pflegegeld', 'Bezeichnung']}
              zeilen={[
                ['PG 1', '12,5–26,9', '—', 'Geringe Beeinträchtigung'],
                ['PG 2', '27–47,4', '347 €', 'Erhebliche Beeinträchtigung'],
                ['PG 3', '47,5–69,9', '599 €', 'Schwere Beeinträchtigung'],
                ['PG 4', '70–89,9', '800 €', 'Schwerste Beeinträchtigung'],
                ['PG 5', '90–100', '990 €', 'Schwerste + besondere Anforderungen'],
              ]}
              betont={2}
            />
            <MehrDazu
              label="Pflegegrad beantragen:"
              links={[{ href: "/pflegegrad-beantragen", text: "Schritt für Schritt Anleitung" }, { href: "/pflegegrad-begutachtung-vorbereiten", text: "Begutachtung vorbereiten" }]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="alltag"
            titel="24h-Pflege bei Pflegegrad 2 — wann sinnvoll?"
            einleitung="Bei Pflegegrad 2 ist der Pflegebedarf noch moderat — aber eine 24h-Betreuungskraft kann schon jetzt sinnvoll sein, besonders in diesen Situationen:"
            punkte={[
              { title: 'Alleinlebend', desc: 'Wenn der Pflegebedürftige allein lebt und niemand täglich vorbeischauen kann. Die Betreuungskraft gibt Sicherheit und Gesellschaft.' },
              { title: 'Beginnende Demenz', desc: 'Schon im frühen Stadium bietet eine feste Bezugsperson Orientierung und verlangsamt den Verlauf.' },
              { title: 'Sturzrisiko', desc: 'Bei eingeschränkter Mobilität und Sturzgefahr ist permanente Präsenz eine wichtige Prävention.' },
              { title: 'Angehörige überlastet', desc: 'Wenn Kinder oder Partner an ihre Belastungsgrenze kommen — bevor es zum Burnout kommt.' },
            ]}
          >
            <MehrDazu
              label="Wann 24h-Pflege die richtige Lösung ist:"
              links={[{ href: "/wann-brauche-ich-24h-pflege", text: "Wann brauche ich 24h-Pflege?" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="hoeher" titel="Höherstufung auf Pflegegrad 3">
            <Text>
              Bei PG 3 steigt das Pflegegeld auf 599 €/Monat (+252 €) und die Sachleistungen auf 1.497 €/Monat. Ein Antrag auf Höherstufung lohnt sich wenn sich der Pflegebedarf verschlechtert hat — keine Sperrfrist, jederzeit möglich.
            </Text>
            <MehrDazu
              label="Details:"
              links={[{ href: "/pflegegrad-3", text: "Pflegegrad 3 — Leistungen & Beträge" }, { href: "/pflegegrad-erhoehen", text: "Pflegegrad erhöhen — wann und wie" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu Pflegegrad 2">
            <Fragen
              fragen={[
                { q: 'Was bekommt man bei Pflegegrad 2?', a: '347 € Pflegegeld/Monat, 796 € Sachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. Alle Beträge 2026 identisch zu 2025.' },
                { q: 'Was sind die Voraussetzungen für Pflegegrad 2?', a: '27–47,4 Punkte im NBA-Begutachtungsverfahren. Erhebliche Beeinträchtigung der Selbstständigkeit — regelmäßige Hilfe bei mehreren Alltagsaktivitäten nötig.' },
                { q: 'Kann man mit Pflegegrad 2 eine 24h-Betreuungskraft bekommen?', a: 'Ja — 24h-Pflege ist ab PG 2 möglich. Besonders sinnvoll wenn der Pflegebedürftige allein lebt, Sicherheitsrisiken bestehen oder Angehörige nicht täglich präsent sein können.' },
                { q: 'Wie beantrage ich Pflegegrad 2?', a: 'Antrag bei der Pflegekasse stellen, MD-Begutachtung abwarten. Pflegetagebuch führen und beim Termin den schlechtesten Tagesverlauf schildern. Leistungen gelten rückwirkend ab Antragsdatum.' },
                { q: 'Wann lohnt sich die Höherstufung auf PG 3?', a: 'Wenn sich der Pflegebedarf verschlechtert hat. Bei PG 3 steigt das Pflegegeld auf 599 €/Monat (+252 €) und Sachleistungen auf 1.497 €/Monat. Keine Sperrfrist — jederzeit beantragbar.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-2" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
