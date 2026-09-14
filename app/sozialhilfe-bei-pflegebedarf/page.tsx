import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('sozialhilfe-bei-pflegebedarf', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Sozialhilfe in der Pflege?' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Vermögen' },
  { id: 'unterhalt', title: 'Müssen Kinder zahlen?' },
  { id: 'antrag', title: 'Antrag stellen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Sozialhilfe bei Pflegebedarf — Hilfe zur Pflege beantragen',
  description: 'Sozialhilfe Pflege 2026: Was Hilfe zur Pflege (§61 SGB XII) ist, wer Anspruch hat, ob Kinder zahlen müssen und wie man den Antrag stellt.',
  alternates: { canonical: 'https://primundus.de/sozialhilfe-bei-pflegebedarf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Sozialhilfe bei Pflegebedarf 2026 | Primundus',
    description: 'Hilfe zur Pflege (§61 SGB XII): Wer Anspruch hat, ob Kinder zahlen müssen und wie man Antrag stellt.',
    url: 'https://primundus.de/sozialhilfe-bei-pflegebedarf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sozialhilfe bei Pflegebedarf — Hilfe zur Pflege beantragen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/sozialhilfe-bei-pflegebedarf',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Sozialhilfe bei Pflegebedarf', item: 'https://primundus.de/sozialhilfe-bei-pflegebedarf' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Müssen Kinder für Pflege der Eltern zahlen?', acceptedAnswer: { '@type': 'Answer', text: 'Grundsätzlich ja — Kinder sind gegenüber Eltern unterhaltspflichtig. Jedoch gilt seit 2020: Elternunterhalt für Pflegekosten wird erst verlangt wenn das eigene Jahreseinkommen des Kindes über 100.000 € brutto liegt. Unter dieser Grenze müssen Kinder nicht zahlen.' } },
      { '@type': 'Question', name: 'Was ist Hilfe zur Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Hilfe zur Pflege ist die Sozialhilfeleistung die greift wenn Rente, Vermögen und Pflegekasse-Leistungen die Pflegekosten nicht decken. Das Sozialamt übernimmt dann den nicht gedeckten Teil — nach Prüfung von Einkommen und Vermögen.' } },
    ],
  },
]

export default function SozialhilfeBeiPflegebedarf() {
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
            { label: "Sozialhilfe bei Pflegebedarf" },
          ]}
          augenbraue="Ratgeber Finanzierung"
          titel="Sozialhilfe bei Pflegebedarf — Hilfe zur Pflege beantragen"
          einleitung="Wenn Rente, Ersparnisse und Pflegekasse-Leistungen die Pflegekosten nicht decken, greift die Hilfe zur Pflege nach §61 SGB XII. Das Sozialamt übernimmt den nicht gedeckten Teil. Und seit 2020 gilt: Kinder müssen erst dann für elterliche Pflegekosten aufkommen wenn ihr eigenes Jahreseinkommen 100.000 Euro brutto übersteigt."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Wichtige Änderung seit 2020: Angehörigen-Entlastungsgesetz" ton="gruen">
              <Text>Seit dem Angehörigen-Entlastungsgesetz (Januar 2020) müssen Kinder erst dann Elternunterhalt für Pflegekosten zahlen wenn ihr eigenes Jahreseinkommen über 100.000 € brutto liegt. Darunter bleibt das Sozialamt beim Elternteil und fragt nicht bei den Kindern an.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="was-ist" titel="Was ist Hilfe zur Pflege (§61 SGB XII)?">
            <Text>
              Hilfe zur Pflege ist eine nachrangige Sozialhilfeleistung — das heißt: Sie greift erst wenn alle anderen Mittel ausgeschöpft sind. Die Reihenfolge:
            </Text>
            <Schritte
              schritte={[
                { title: 'Rente und eigenes Einkommen des Pflegebedürftigen' },
                { title: 'Pflegekasse-Leistungen (Pflegegeld, Sachleistungen)' },
                { title: 'Vermögen des Pflegebedürftigen (mit Freibetrag)' },
                { title: 'Unterhaltsansprüche gegen Kinder (nur über 100.000 €/Jahr)' },
                { title: 'Dann erst: Hilfe zur Pflege durch das Sozialamt' },
              ]}
            />
            <Text>
              Das Sozialamt übernimmt dann die Differenz zwischen den verfügbaren Mitteln und den tatsächlichen Pflegekosten — in der Regel für Heimkosten oder anerkannte ambulante Pflegeleistungen.
            </Text>
          </Abschnitt>

          <Abschnitt id="voraussetzungen" titel="Voraussetzungen & Vermögen">
            <Punkte
              punkte={[
                { title: 'Einkommen', desc: 'Das gesamte Einkommen des Pflegebedürftigen wird angerechnet (Rente, Zinsen, Mieteinnahmen). Ein kleiner Barbetrag (ca. 130 €/Monat) verbleibt für persönliche Bedürfnisse.' },
                { title: 'Vermögen', desc: 'Vermögen über dem Schonbetrag wird eingesetzt. Schonvermögen: ca. 10.000 € für den Pflegebedürftigen. Das Elternhaus ist Schonvermögen wenn der Ehepartner noch darin wohnt oder es selbst bewohnt wird.' },
                { title: 'Selbst bewohntes Haus', desc: 'Solange der Pflegebedürftige oder nahe Angehörige das Haus bewohnen, ist es Schonvermögen und wird nicht verwertet. Erst bei vollstationärer Pflege kann das Sozialamt nach dem Tod Ansprüche geltend machen.' },
                { title: 'Pflegegrad', desc: 'Ab Pflegegrad 1 besteht grundsätzlich Anspruch auf Hilfe zur Pflege wenn die eigenen Mittel nicht reichen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="unterhalt" titel="Müssen Kinder für die Pflege der Eltern zahlen?">
            <Text>
              Grundsätzlich sind Kinder ihren Eltern gegenüber unterhaltspflichtig. Das Angehörigen-Entlastungsgesetz (seit Januar 2020) hat dies jedoch erheblich eingeschränkt:
            </Text>
            <Tabelle
              titel=""
              kopf={['Situation', 'Pflicht der Kinder']}
              zeilen={[
                ['Eigenes Jahreseinkommen des Kindes unter 100.000 € brutto', 'Kein Elternunterhalt — Sozialamt fragt nicht an'],
                ['Eigenes Jahreseinkommen des Kindes über 100.000 € brutto', 'Elternunterhalt möglich — aber nur der über 100.000 € liegende Teil'],
                ['Vermögen des Kindes', 'Wird grundsätzlich nicht angetastet (nur Einkommen wird geprüft)'],
                ['Geschwister', 'Jedes Kind wird separat beurteilt — keine Solidarhaftung'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="antrag" titel="Antrag stellen — so geht es">
            <Schritte
              schritte={[
                { title: 'Zuständiges Sozialamt ermitteln', desc: 'Das Sozialamt am Wohnort des Pflegebedürftigen ist zuständig.' },
                { title: 'Antrag auf Hilfe zur Pflege stellen', desc: 'Formloser Antrag oder Antrag auf dem Formular des Sozialamts. Datum notieren — Leistungen gelten ab Antragsdatum.' },
                { title: 'Einkommens- und Vermögensnachweise vorlegen', desc: 'Renten-, Konten- und Vermögensnachweise. Das Sozialamt prüft die Bedürftigkeit.' },
                { title: 'Pflegekasse-Bescheid vorlegen', desc: 'Pflegegrad und Leistungsbescheid miteinreichen.' },
                { title: 'Sozialamt übernimmt Differenz', desc: 'Das Sozialamt zahlt den Differenzbetrag direkt an den Leistungsanbieter.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist Hilfe zur Pflege?', a: 'Die Sozialhilfeleistung nach §61 SGB XII — greift wenn Rente, Vermögen und Pflegekasse nicht reichen. Das Sozialamt übernimmt den Differenzbetrag zwischen verfügbaren Mitteln und Pflegekosten.' },
                { q: 'Müssen Kinder für die Pflege der Eltern zahlen?', a: 'Nur wenn das eigene Jahreseinkommen über 100.000 € brutto liegt (seit Angehörigen-Entlastungsgesetz 2020). Darunter zahlen Kinder nichts — das Sozialamt trägt die Kosten.' },
                { q: 'Muss man das Haus verkaufen für die Pflege?', a: 'Nicht solange es selbst bewohnt wird oder nahe Angehörige darin wohnen — es ist Schonvermögen. Erst nach Tod des Pflegebedürftigen kann das Sozialamt beim Pflegeheim-Finanzierung Regressforderungen stellen.' },
                { q: 'Gilt Hilfe zur Pflege auch für 24h-Pflege zuhause?', a: 'In der Regel nicht — Hilfe zur Pflege wird meist für stationäre Pflegeheimkosten gewährt. Für häusliche 24h-Pflege empfiehlt sich zuerst alle Kassenzuschüsse und Steuervorteile auszuschöpfen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="sozialhilfe-bei-pflegebedarf" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
