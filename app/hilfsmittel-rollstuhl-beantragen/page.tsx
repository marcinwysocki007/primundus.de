import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('hilfsmittel-rollstuhl-beantragen', '20. August 2026')

const SECTIONS = [
  { id: 'was-zahlt', title: 'Welche Kasse zahlt?' },
  { id: 'rezept', title: 'Auf Rezept beantragen' },
  { id: 'pflegegrad', title: 'Was der Pflegegrad bringt' },
  { id: 'ablehnung', title: 'Wenn die Kasse ablehnt' },
  { id: 'hilfsmittel', title: 'Hilfsmittel im Überblick' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Rollator & Rollstuhl beantragen: Rezept, Kasse, Ablauf',
  description:
    'Rollator oder Rollstuhl auf Rezept: Die Krankenkasse zahlt — ganz ohne Pflegegrad. Ablauf über Arzt und Sanitätshaus, Zuzahlung, Fristen und Widerspruch.',
  alternates: { canonical: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Rollator & Rollstuhl beantragen',
    description: 'Auf Rezept über die Krankenkasse — ohne Pflegegrad. Ablauf, Kosten, Ablehnung.',
    url: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'Bekommt man einen Rollator ohne Pflegegrad?',
    a: 'Ja. Rollator und Rollstuhl sind Hilfsmittel der Krankenkasse — es genügt ein Rezept vom Arzt, ein Pflegegrad ist nicht nötig. Der Pflegegrad spielt erst bei Pflegehilfsmitteln eine Rolle, etwa der monatlichen Pflegehilfsmittel-Pauschale oder Zuschüssen für den Wohnungsumbau.',
  },
  {
    q: 'Was kostet ein Rollator oder Rollstuhl auf Rezept?',
    a: 'Für Erwachsene fällt die gesetzliche Zuzahlung von 5 bis 10 Euro an — den Rest übernimmt die Krankenkasse für das Standardmodell, oft als Leihgabe. Wer ein höherwertiges Modell möchte, zahlt die Differenz selbst (wirtschaftliche Aufzahlung).',
  },
  {
    q: 'Wie lange dauert die Genehmigung durch die Krankenkasse?',
    a: 'Die Kasse muss grundsätzlich innerhalb von drei Wochen entscheiden — wird der Medizinische Dienst eingeschaltet, innerhalb von fünf Wochen. Meldet sie sich in dieser Frist nicht und teilt auch keinen Grund mit, gilt der Antrag nach § 13 Abs. 3a SGB V als genehmigt.',
  },
  {
    q: 'Steht mir bei Pflegegrad 3 automatisch ein Rollstuhl zu?',
    a: 'Nein — aber er ist unabhängig vom Pflegegrad erreichbar: Entscheidend ist die medizinische Notwendigkeit, die der Arzt mit dem Rezept bescheinigt. Wer wegen einer Geh-Einschränkung einen Rollstuhl braucht, bekommt ihn über die Krankenkasse — mit Pflegegrad 3 genauso wie ganz ohne Pflegegrad.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rollator & Rollstuhl beantragen: Rezept, Kasse, Ablauf',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Rollator & Rollstuhl beantragen', item: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
            { label: "Rollator & Rollstuhl beantragen" },
          ]}
          augenbraue="Ratgeber Hilfsmittel"
          titel="Rollator & Rollstuhl beantragen: auf Rezept, ohne Pflegegrad"
          einleitung={<>Das Wichtigste zuerst: Für einen Rollator oder Rollstuhl brauchen Sie <strong>keinen
            Pflegegrad</strong> — nur ein Rezept vom Arzt. Zuständig ist die Krankenkasse, die Zuzahlung
            beträgt 5 bis 10 Euro. Hier steht, wie der Antrag Schritt für Schritt läuft, was der
            Pflegegrad zusätzlich bringt und was Sie tun können, wenn die Kasse ablehnt.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-zahlt" titel="Krankenkasse oder Pflegekasse — wer zahlt was?">
            <Text>
              Die häufigste Verwirrung zuerst: <strong>Hilfsmittel</strong> wie Rollator, Rollstuhl oder
            Duschhocker gleichen eine körperliche Einschränkung aus — sie zahlt die
            <strong> Krankenkasse</strong> auf ärztliche Verordnung, völlig unabhängig davon, ob ein
            Pflegegrad besteht. <strong>Pflegehilfsmittel</strong> dagegen erleichtern die Pflege zuhause —
            dafür ist die <strong>Pflegekasse</strong> zuständig, und hier braucht es einen Pflegegrad.
            Manche Produkte wie das Pflegebett können je nach Begründung über beide Wege laufen — das
            Sanitätshaus ordnet den richtigen Weg mit zu.
            </Text>
          </Abschnitt>

          <Abschnitt id="rezept" titel="Rollator oder Rollstuhl auf Rezept: so läuft der Antrag">
            <Schritte
              schritte={[
                { title: 'Zum Arzt gehen', desc: 'Hausarzt oder Facharzt stellt bei medizinischer Notwendigkeit eine Hilfsmittel-Verordnung aus — das „Rezept". Schildern Sie den Alltag konkret: Stürze, unsichere Wege, Schmerzen beim Gehen.' },
                { title: 'Zum Sanitätshaus mit Kassenvertrag', desc: 'Das Sanitätshaus prüft die Verordnung, berät zum passenden Modell und reicht den Antrag direkt bei Ihrer Krankenkasse ein — Sie müssen meist nichts selbst einsenden. Wichtig: ein Vertragspartner Ihrer Kasse sein (kurz nachfragen).' },
                { title: 'Genehmigung abwarten', desc: 'Die Kasse muss grundsätzlich binnen drei Wochen entscheiden, mit Medizinischem Dienst binnen fünf. Verstreicht die Frist ohne Rückmeldung und ohne mitgeteilten Grund, gilt der Antrag als genehmigt (§ 13 Abs. 3a SGB V).' },
                { title: 'Hilfsmittel erhalten', desc: 'Oft kommt ein Leihgerät aus dem Bestand der Kasse — geprüft und aufbereitet. Die gesetzliche Zuzahlung für Erwachsene: 10 Prozent des Preises, mindestens 5, höchstens 10 Euro. Wer ein Wunschmodell über dem Standard möchte, zahlt die Differenz privat dazu.' },
              ]}
            />
            <Text>
              Tipp: Notieren Sie sich das Antragsdatum. Die Fristen laufen ab Eingang bei der Kasse —
            und sie sind Ihr stärkstes Druckmittel.
            </Text>
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Was der Pflegegrad zusätzlich bringt">
            <Text>
              Für Rollator und Rollstuhl ist der Pflegegrad also nicht nötig — aber wer einen hat, bekommt
            mehr: <strong>Pflegehilfsmittel zum Verbrauch</strong> (Handschuhe, Betteinlagen,
            Desinfektion) bis 42 €/Monat ohne Zuzahlung, <strong>technische Pflegehilfsmittel</strong> wie
            Pflegebett oder Hausnotruf über die Pflegekasse — und Zuschüsse für
            <strong> Wohnumfeldverbesserung</strong> bis 4.180 € je Maßnahme, etwa für den Badumbau oder
            Türverbreiterungen, damit der Rollstuhl überhaupt durchpasst.
            </Text>
            <Text>
              → Noch kein Pflegegrad? <a href="/pflegegrad-rechner" className="text-pm-taupe underline hover:text-pm-taupe-deep">Erste Einschätzung im Pflegegrad-Rechner</a>
            {' · '}
            <a href="/pflegehilfsmittel-beantragen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegehilfsmittel beantragen</a>
            {' · '}
            <a href="/wohnraumanpassung-foerderung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Wohnumbau-Förderung</a>
            </Text>
          </Abschnitt>

          <Abschnitt id="ablehnung" titel="Wenn die Kasse ablehnt: Widerspruch lohnt sich">
            <Text>
              Gegen eine Ablehnung können Sie innerhalb <strong>eines Monats</strong> schriftlich
            Widerspruch einlegen — formlos, mit Aktenzeichen und kurzer Begründung. Stärken Sie den
            Widerspruch mit einer ergänzenden Stellungnahme des Arztes, warum genau dieses Hilfsmittel
            im Alltag notwendig ist. Viele Ablehnungen werden im Widerspruchsverfahren korrigiert;
            hilft das nicht, bleibt die kostenfreie Klage vor dem Sozialgericht.
            </Text>
          </Abschnitt>

          <Abschnitt id="hilfsmittel" titel="Wichtige Hilfsmittel im Überblick">
            <Tabelle
              titel=""
              kopf={['Hilfsmittel', 'Zuständig', 'Voraussetzung']}
              zeilen={[
                ['Rollator', 'Krankenkasse', 'Rezept vom Arzt'],
                ['Rollstuhl', 'Krankenkasse', 'Rezept vom Arzt'],
                ['Duschhocker, Badewannenlifter', 'Krankenkasse', 'Rezept vom Arzt'],
                ['Pflegebett', 'Kranken- oder Pflegekasse', 'Rezept bzw. Pflegegrad'],
                ['Hausnotruf', 'Pflegekasse', 'Pflegegrad 1–5'],
                ['Verbrauchs-Pflegehilfsmittel (42 €/Monat)', 'Pflegekasse', 'Pflegegrad 1–5'],
                ['Wohnumfeldverbesserung (bis 4.180 €)', 'Pflegekasse', 'Pflegegrad 1–5'],
              ]}
              fuss="Stand August 2026 · gesetzliche Kranken- und Pflegeversicherung; bei privaten Kassen gelten die Tarifbedingungen"
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen fragen={faqs} />
          </Abschnitt>


          <Weiterlesen aktuell="hilfsmittel-rollstuhl-beantragen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
