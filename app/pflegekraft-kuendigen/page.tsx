import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegekraft-kuendigen', '25. April 2026')

const SECTIONS = [
  { id: 'modell', title: 'Kündigung je nach Beschäftigungsmodell' },
  { id: 'entsendemodell', title: 'Kündigung beim Entsendemodell (Primundus)' },
  { id: 'direktanstellung', title: 'Kündigung bei Direktanstellung' },
  { id: 'sonderfall', title: 'Kündigung aus wichtigem Grund' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft kündigen — Fristen, Muster & Ablauf 2026',
  description: 'Pflegekraft kündigen 2026: Kündigungsfristen je nach Beschäftigungsmodell, Musterschreiben und was bei Kündigung aus wichtigem Grund gilt.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-kuendigen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft kündigen 2026 | Primundus',
    description: 'Kündigungsfristen, Musterschreiben und Ablauf — je nach Beschäftigungsmodell.',
    url: 'https://primundus.de/pflegekraft-kuendigen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft kündigen — Fristen, Muster und Ablauf 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-kuendigen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft kündigen', item: 'https://primundus.de/pflegekraft-kuendigen' },
    ],
  },
]

export default function PflegekraftKuendigen() {
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
            { label: "Organisation", href: "/organisation" },
            { label: "Pflegekraft kündigen" },
          ]}
          augenbraue="Ratgeber Pflegekräfte"
          titel="Pflegekraft kündigen — Fristen, Muster & Ablauf 2026"
          einleitung="Wie man eine Pflegekraft kündigt hängt komplett vom Beschäftigungsmodell ab. Beim Entsendemodell über Primundus ist die Kündigung denkbar einfach: täglich kündbar, ein Anruf genügt, Primundus stellt sofort Ersatz. Bei der Direktanstellung gelten die gesetzlichen Kündigungsfristen nach deutschem Arbeitsrecht."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="modell" titel="Kündigung je nach Beschäftigungsmodell">
            <Tabelle
              titel=""
              kopf={['Modell', 'Kündigung durch Familie', 'Frist', 'Ersatz']}
              zeilen={[
                ['Entsendemodell (Primundus)', 'Kündigung des Agenturvertrags', 'Täglich kündbar', 'Primundus stellt sofort Ersatz'],
                ['Direktanstellung', 'Arbeitgeberkündigung an Kraft', 'Probezeit: 2 Wo · danach: 4 Wo', 'Familie muss selbst organisieren'],
              ]}
              betont={2}
            />
          </Abschnitt>

          <Abschnitt id="entsendemodell" titel="Kündigung beim Entsendemodell (Primundus) — so einfach geht es">
            <Text>
              Beim Entsendemodell über Primundus gibt es kein direktes Arbeitsverhältnis zwischen Familie und Betreuungskraft. Die Familie kündigt den Vertrag mit Primundus — nicht die Kraft direkt. Das macht es unkompliziert.
            </Text>
            <Schritte
              schritte={[
                { title: 'Primundus anrufen oder schreiben', desc: '089 200 000 830 oder info@primundus.de — mitteilen dass der Einsatz beendet werden soll.' },
                { title: 'Wunschtermin nennen', desc: 'Ab wann soll die Kraft abreisen? Bei dringendem Bedarf sofort — Primundus organisiert die Abreise.' },
                { title: 'Primundus regelt alles', desc: 'Die Abreise der Kraft, eventuelle Ersatzorganisation, Schlussabrechnung. Kein direktes Gespräch der Familie mit der Kraft nötig.' },
              ]}
            />
            <Kasten titel="Kein Risiko, keine Fristen" ton="gruen">
              <Text>Täglich kündbar, keine Mindestlaufzeit, kein Aufwand. So ist es bei Primundus seit 20 Jahren.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="direktanstellung" titel="Kündigung bei Direktanstellung — gesetzliche Fristen">
            <Text>
              Wer die Pflegekraft direkt angestellt hat, ist Arbeitgeber im deutschen Sinne. Die Kündigung muss schriftlich erfolgen und die gesetzlichen Fristen einhalten.
            </Text>
            <Punkte
              punkte={[
                { title: 'Probezeit (max. 6 Monate)', desc: <><strong>2 Wochen</strong><br />Schriftliche Kündigung, keine Begründung nötig. Kündigung muss innerhalb der Probezeit zugehen.</> },
                { title: 'Nach Probezeit (bis 2 Jahre)', desc: <><strong>4 Wochen zum 15. oder Monatsende</strong><br />Gesetzliche Grundkündigung nach § 622 Abs. 1 BGB.</> },
                { title: 'Ab 2 Jahren Betriebszugehörigkeit', desc: <><strong>1 Monat zum Monatsende</strong><br />Verlängert sich stufenweise mit Dauer (ab 5 Jahre: 2 Monate, ab 8 Jahre: 3 Monate usw.).</> },
              ]}
            />
            <Kasten augenbraue="Musterschreiben Kündigung (Direktanstellung)">
              <Text>[Name Arbeitgeber]<br />[Adresse]<br />[Datum]</Text>
              <Text>Kündigung des Arbeitsverhältnisses<br />Arbeitnehmer: [Name der Pflegekraft]</Text>
              <Text>Sehr geehrte/r [Name],</Text>
              <Text>hiermit kündige ich das mit Ihnen bestehende Arbeitsverhältnis fristgerecht zum [Datum, z.B. 31.05.2026].</Text>
              <Text>Bitte bestätigen Sie den Erhalt dieses Schreibens.</Text>
              <Text>Mit freundlichen Grüßen,<br />[Unterschrift]<br />[Name]</Text>
            </Kasten>
          </Abschnitt>

          <DunklerAbschnitt
            id="sonderfall"
            titel="Kündigung aus wichtigem Grund — fristlos"
            einleitung="Bei schwerem Fehlverhalten ist eine außerordentliche (fristlose) Kündigung möglich. Die Familie muss schnell handeln — die Kündigung muss innerhalb von 2 Wochen nach Bekanntwerden des Grundes ausgesprochen werden."
            punkte={[
              { title: 'Diebstahl oder Unterschlagung', desc: 'Sofortige fristlose Kündigung. Beweise sichern. Primundus informieren. Ggf. Anzeige erstatten.' },
              { title: 'Schwere Pflichtverletzungen', desc: 'Z.B. grobe Vernachlässigung des Pflegebedürftigen, Dokumentenfälschung, Alkohol im Dienst. Fristlose Kündigung möglich, Begründungspflicht.' },
              { title: 'Beim Entsendemodell', desc: 'Sofort Primundus anrufen — Primundus organisiert die sofortige Ablösung und regelt alle weiteren Schritte. Keine direkte Kündigung der Familie gegenüber der Kraft nötig.' },
            ]}
          />

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie kündige ich eine Pflegekraft beim Entsendemodell?', a: 'Primundus anrufen (089 200 000 830) — fertig. Täglich kündbar, kein Formular, keine Fristen.' },
                { q: 'Was sind die Kündigungsfristen bei Direktanstellung?', a: 'Probezeit: 2 Wochen. Nach Probezeit bis 2 Jahre: 4 Wochen zum 15. oder Monatsende. Ab 2 Jahren: 1 Monat zum Monatsende.' },
                { q: 'Muss die Kündigung schriftlich sein?', a: 'Bei Direktanstellung: Ja — Schriftform ist Pflicht. Beim Entsendemodell über Primundus: Kündigung des Agenturvertrags genügt, formlos per Telefon.' },
                { q: 'Was wenn die Kraft sofort gehen soll?', a: 'Beim Entsendemodell: Primundus anrufen, sofortige Beendigung möglich. Bei Direktanstellung: nur bei wichtigem Grund (fristlose Kündigung) oder gegen Zahlung einer Abfindung.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekraft-kuendigen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
