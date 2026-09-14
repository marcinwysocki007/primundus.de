import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Liste, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-3', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 3?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'kosten-24h', title: 'Kosten der 24-Stunden-Pflege' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'beantragen', title: 'Pflegegrad 3 beantragen' },
  { id: 'hoeher', title: 'Höherstufung auf PG 4' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 3 — Leistungen & 599 € Pflegegeld 2026',
  description: 'Pflegegrad 3 im Überblick: Pflegegeld, Sachleistungen, Entlastungsbudget pro Jahr und was das für die Betreuung zu Hause bedeutet — mit Beträgen 2026.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-3' },
  openGraph: {
    title: 'Pflegegrad 3 — Leistungen & 599 € Pflegegeld 2026 | Primundus',
    description: 'Pflegegrad 3: 599 € Pflegegeld + 1.497 € Sachleistungen + 3.539 € Entlastungsbudget pro Jahr.',
    url: 'https://primundus.de/pflegegrad-3',
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
    headline: 'Pflegegrad 3 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-3',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 3', item: 'https://primundus.de/pflegegrad-3' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 3?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 3 gibt es 599 € Pflegegeld pro Monat (wenn Angehörige pflegen), 1.497 € Pflegesachleistungen (für ambulante Pflegedienste), 131 € Entlastungsbetrag und 3.539 € Entlastungsbudget pro Jahr für Verhinderungs- und Kurzzeitpflege. Alle Beträge gelten unverändert für 2026.' } },
      { '@type': 'Question', name: 'Welche Einschränkungen hat man bei Pflegegrad 3?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 3 bedeutet schwere Beeinträchtigung der Selbstständigkeit. Betroffene benötigen umfangreiche Unterstützung bei der Körperpflege, beim Anziehen, bei der Mobilität und oft auch bei der Ernährung. Die NBA-Punktzahl liegt zwischen 47,5 und 69,9 Punkten.' } },
      { '@type': 'Question', name: 'Kann man mit Pflegegrad 3 zu Hause bleiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Pflegegrad 3 ist der häufigste Pflegegrad bei 24h-Pflege zu Hause. Mit einer Betreuungskraft, die dauerhaft im Haushalt lebt, ist ein sicheres Leben zuhause in fast allen Fällen möglich. Bei Primundus sind die Betreuungskräfte fest angestellt und können in 4–7 Tagen starten.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Pflegegrad 3 und 4?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 4 (schwerste Beeinträchtigung, 70–89,9 NBA-Punkte) steigt das Pflegegeld auf 800 €/Monat und die Sachleistungen auf 1.859 €/Monat. Die Einschränkungen sind deutlich umfangreicher — oft ist keine eigenständige Körperpflege mehr möglich.' } },
      { '@type': 'Question', name: 'Wie beantrage ich Pflegegrad 3?', acceptedAnswer: { '@type': 'Answer', text: 'Antrag bei der Pflegekasse (Krankenkasse) stellen, dann kommt der Medizinische Dienst zur Begutachtung. Wichtig: Pflegetagebuch führen und den schlechtesten Tagesverlauf schildern. Leistungen gelten rückwirkend ab Antragsdatum.' } },
      { '@type': 'Question', name: 'Wie hoch ist das Pflegegeld bei Pflegegrad 3 in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegegeld bei Pflegegrad 3 beträgt 599 Euro pro Monat — unverändert gegenüber 2025. Eine Erhöhung ist für 2026 nicht geplant, die nächste Dynamisierung kommt frühestens Januar 2028.' } },
    ],
  },
]

export default function Pflegegrad3() {
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
            { label: "Pflegegrad 3" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad 3 — Leistungen & Beträge 2026"
          einleitung="Pflegegrad 3 bedeutet schwere Beeinträchtigung der Selbstständigkeit. Betroffene erhalten 599 € Pflegegeld pro Monat, 1.497 € Sachleistungen und 3.539 € Entlastungsbudget pro Jahr. PG 3 ist der häufigste Pflegegrad bei der 24h-Pflege zu Hause — mit einer Betreuungskraft bleibt ein sicheres Leben im eigenen Zuhause in fast allen Fällen möglich."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Pflegegeld: 599 €/Monat (wenn Angehörige oder nicht-professionelle Kräfte pflegen)',
                'Pflegesachleistungen: 1.497 €/Monat (für ambulante Pflegedienste)',
                'Entlastungsbetrag: 131 €/Monat zusätzlich für alle Pflegegrade',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege',
                'Voraussetzung: 47,5–69,9 Punkte im NBA-Begutachtungsverfahren',
                'Keine Erhöhung 2026 — nächste Dynamisierung frühestens Januar 2028',
              ]}
          blickTitel="Auf einen Blick — Pflegegrad 3"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was bedeutet Pflegegrad 3?">
            <Text>
              Pflegegrad 3 steht für <strong>schwere Beeinträchtigung der Selbstständigkeit</strong>. Betroffene benötigen umfangreiche Unterstützung bei mehreren grundlegenden Alltagsaktivitäten — Körperpflege, Mobilität, Ernährung, oft auch kognitive Einschränkungen.
            </Text>
            <Text>
              Typische Situationen bei Pflegegrad 3: Menschen nach schwerem Schlaganfall, fortgeschrittene Demenz im mittleren Stadium, schwere Parkinson-Erkrankung, oder mehrere gleichzeitige chronische Erkrankungen die zusammen zu umfangreichem Hilfebedarf führen.
            </Text>
            <Punkte
              punkte={[
                { title: 'Körperpflege', desc: 'Vollständige Unterstützung beim Waschen, Duschen, Zähneputzen, Haarpflege. Selbstständiges Waschen ist kaum oder nicht mehr möglich.' },
                { title: 'Mobilität', desc: 'Aufstehen, Gehen, Treppensteigen nur noch mit Unterstützung oder Hilfsmitteln. Häufig erhöhtes Sturzrisiko, Rollator oder Rollstuhl notwendig.' },
                { title: 'Kognition', desc: 'Bei Demenz: erhebliche Orientierungslosigkeit, Gedächtnisprobleme, fehlende Tagesstruktur. Ständige Beaufsichtigung oft erforderlich.' },
                { title: 'Selbstversorgung', desc: 'Hilfe beim Ankleiden, beim Essen und Trinken, bei der Kontinenzversorgung. Eigenständige Mahlzeitenzubereitung kaum möglich.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Leistungen & Beträge 2026">
            <Text>
              Die Beträge 2026 sind identisch zu 2025 — die Erhöhung um 4,5 % gilt seit Januar 2025, eine weitere Dynamisierung ist erst für Januar 2028 geplant.
            </Text>
            <Tabelle
              titel="Alle Leistungen bei Pflegegrad 3 — Stand 2026"
              zeilen={[
                ['Pflegegeld', '599 €/Monat', 'Wenn Angehörige oder private Kräfte pflegen'],
                ['Pflegesachleistungen', '1.497 €/Monat', 'Für ambulante Pflegedienste'],
                ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote, alle PG'],
                ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege (ab PG 2)'],
                ['Tages-/Nachtpflege', '1.357 €/Monat', 'Eigenes Budget, keine Anrechnung auf Sachleistungen'],
                ['Pflegehilfsmittel', '42 €/Monat', 'Handschuhe, Desinfektionsmittel etc.'],
                ['Wohnraumanpassung', 'bis 4.180 € je Maßnahme', 'Treppenlift, Badumbau, Türverbreiterung'],
              ]}
              betont={1}
              fuss="Quelle: GKV-Spitzenverband, SGB XI · Stand 2026"
            />
            <Kasten augenbraue="Kombinationsmöglichkeit" titel="Pflegegeld + Sachleistungen = mehr Gesamtleistung" ton="gruen">
              <Text>Wer sowohl einen Pflegedienst nutzt als auch Angehörige hat, kann beides kombinieren: Für jeden genutzten Prozentsatz der Sachleistung wird das Pflegegeld anteilig weitergezahlt. Beispiel: 50 % Sachleistungen genutzt → noch 50 % des Pflegegeldes (ca. 299 €) erhalten.</Text>
            </Kasten>
            <MehrDazu
              label="Alle Kombinationsmöglichkeiten:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Zuschüsse 2026" }]}
            />
            <MehrDazu
              label="Eigenanteil senken:"
              links={[{ href: "/eigenanteil-24h-pflege-senken", text: "Alle Möglichkeiten 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="kosten-24h" titel="Was kostet 24-Stunden-Pflege bei Pflegegrad 3?">
            <Text>
              24-Stunden-Pflege kostet bei Pflegegrad 3 in der Regel <strong>2.200–3.500 € brutto pro Monat</strong>, je nach Pflegebedarf und Qualifikation der Betreuungskraft. Die Pflegekasse übernimmt einen erheblichen Teil — der tatsächliche Eigenanteil liegt oft <strong>unter 2.000 € monatlich</strong> und damit häufig günstiger als ein Pflegeheim (Ø 3.364 €/Monat Eigenanteil).
            </Text>
            <Text>
              Diese Leistungen senken bei Pflegegrad 3 den Eigenanteil:
            </Text>
            <Liste
              punkte={[
                <><strong>Pflegegeld:</strong> 599 €/Monat</>,
                <><strong>Entlastungsbudget:</strong> 3.539 €/Jahr (Verhinderungs- & Kurzzeitpflege, seit Juli 2025 flexibel einsetzbar)</>,
                <><strong>Steuervorteil:</strong> 20 % der Kosten, bis zu 4.000 €/Jahr Steuerersparnis</>,
              ]}
            />
            <MehrDazu
              label="Individuelle Berechnung:"
              links={[{ href: "https://kostenrechner.primundus.de", text: "Kosten & passende Pflegekräfte in 2 Minuten" }]}
            />
            <MehrDazu
              label="Alle Kostenfaktoren im Detail:"
              links={[{ href: "/kosten", text: "Was kostet 24-Stunden-Pflege? Kosten & Zuschüsse 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="voraussetzungen" titel="Voraussetzungen & Einstufung">
            <Text>
              Pflegegrad 3 wird vergeben wenn beim Begutachtungsinstrument (NBA) <strong>47,5 bis 69,9 Punkte</strong> erreicht werden. Der Medizinische Dienst bewertet sechs Lebensbereiche — Selbstversorgung hat mit 36 % das höchste Gewicht.
            </Text>
            <Tabelle
              titel="Pflegegrade im Vergleich — Punktebereiche NBA"
              kopf={['Pflegegrad', 'Punkte NBA', 'Pflegegeld', 'Einstufung']}
              zeilen={[
                ['PG 1', '12,5–26,9', '—', 'Geringe Beeinträchtigung'],
                ['PG 2', '27–47,4', '347 €', 'Erhebliche Beeinträchtigung'],
                ['PG 3', '47,5–69,9', '599 €', 'Schwere Beeinträchtigung'],
                ['PG 4', '70–89,9', '800 €', 'Schwerste Beeinträchtigung'],
                ['PG 5', '90–100', '990 €', 'Schwerste Beeintr. + besondere Anforderungen'],
              ]}
              betont={2}
            />
          </Abschnitt>

          <Abschnitt id="beantragen" titel="Pflegegrad 3 beantragen">
            <Text>
              Der Antrag läuft über die Pflegekasse — schriftlich oder telefonisch. Wichtig: Die Leistungen gelten rückwirkend ab Antragsdatum, nicht erst ab dem Begutachtungstermin.
            </Text>
            <Schritte
              schritte={[
                { title: 'Antrag bei der Pflegekasse stellen', desc: 'Formlos per Brief oder Telefon — "Ich beantrage die Feststellung der Pflegebedürftigkeit." Datum notieren, Eingangsbestätigung anfordern.' },
                { title: 'Pflegetagebuch führen', desc: '1–2 Wochen täglich dokumentieren: Welche Hilfe ist bei welcher Tätigkeit nötig, wie lange dauert es? Das ist das stärkste Argument für PG 3.' },
                { title: 'Begutachtung durch den MD', desc: 'Gutachter kommt nach Hause. Den schlechtesten Tagesverlauf schildern — nicht den guten Tag. Vertrauensperson einladen.' },
                { title: 'Bescheid prüfen', desc: 'Stimmt der Pflegegrad? Bei zu niedriger Einstufung innerhalb eines Monats Widerspruch einlegen.' },
              ]}
            />
            <MehrDazu
              label="Vollständige Anleitung:"
              links={[{ href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen — Schritt für Schritt" }, { href: "/pflegegrad-begutachtung-vorbereiten", text: "MD-Begutachtung vorbereiten" }]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="hoeher"
            titel="Höherstufung auf Pflegegrad 4"
            einleitung="Verschlechtert sich der Pflegebedarf, kann jederzeit ein Antrag auf Höherstufung gestellt werden — keine Sperrfrist. Bei PG 4 steigt das Pflegegeld auf 800 €/Monat, die Sachleistungen auf 1.859 €/Monat. Das macht monatlich bis zu 362 € mehr Kassenzuschuss."
            punkte={[
              { title: 'Wann lohnt sich ein Höherstufungsantrag?', desc: 'Wenn sich mehrere Lebensbereiche verschlechtert haben, neue Diagnosen hinzugekommen sind, oder der aktuelle Pflegebedarf deutlich über dem liegt, was beim letzten Gutachten festgestellt wurde.' },
              { title: 'Wie läuft der Antrag ab?', desc: 'Formlos bei der Pflegekasse "Höherstufung beantragen". Der MD kommt erneut zur Begutachtung. Neue Pflegetagebücher und aktualisierte Arztberichte mitschicken.' },
            ]}
          >
            <MehrDazu
              label="Details:"
              links={[{ href: "/pflegegrad-erhoehen", text: "Pflegegrad erhöhen — wann und wie" }, { href: "/pflegegrad-4", text: "Pflegegrad 4 — Leistungen & Beträge" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu Pflegegrad 3">
            <Fragen
              fragen={[
                { q: 'Was bekommt man bei Pflegegrad 3?', a: '599 € Pflegegeld/Monat, 1.497 € Pflegesachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr für Verhinderungs- und Kurzzeitpflege. Alle Beträge gelten unverändert für 2026.' },
                { q: 'Welche Einschränkungen hat man bei Pflegegrad 3?', a: 'Schwere Beeinträchtigung der Selbstständigkeit — umfangreiche Hilfe bei Körperpflege, Mobilität, oft auch Ernährung und Kognition. NBA-Punktzahl: 47,5 bis 69,9 Punkte.' },
                { q: 'Kann man mit Pflegegrad 3 zu Hause bleiben?', a: 'Ja — mit einer 24h-Betreuungskraft die dauerhaft im Haushalt lebt, ist das in fast allen Fällen möglich. Bei Primundus sind die Betreuungskräfte fest angestellt und können in 4–7 Tagen starten.' },
                { q: 'Wie hoch ist das Pflegegeld bei Pflegegrad 3 in 2026?', a: '599 Euro pro Monat — identisch zu 2025. Keine Erhöhung für 2026 geplant, nächste Dynamisierung frühestens Januar 2028.' },
                { q: 'Was ist der Unterschied zwischen Pflegegrad 3 und 4?', a: 'PG 4 bedeutet schwerste Beeinträchtigung (70–89,9 NBA-Punkte). Pflegegeld steigt auf 800 €/Monat, Sachleistungen auf 1.859 €/Monat — zusammen 362 € mehr pro Monat als PG 3.' },
                { q: 'Wie beantrage ich Pflegegrad 3?', a: 'Antrag bei der Pflegekasse stellen, MD-Begutachtung abwarten. Pflegetagebuch führen und beim Termin den schlechtesten Tagesverlauf schildern. Leistungen gelten rückwirkend ab Antragsdatum.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-3" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
