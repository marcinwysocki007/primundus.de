import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { KurzAntwort } from '@/components/KurzAntwort'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24-stunden-pflege-kostenuebernahme', '21. August 2026')

// Nachfrage-Lücke (GSC 08/2026): "24 stunden pflege kostenübernahme"
// 38 Impr. auf Pos. 66 — keine fokussierte Seite. Kaufnahe Query; die
// Kernfrage dahinter ist fast immer: "Zahlt das jemand für uns — und
// müssen am Ende die Kinder ran?" (Antwort: 100.000-€-Regel).

// Inhaltsverzeichnis (neu mit der Vorlage: Zwischenüberschriften hatten keine Anker)
const SECTIONS = [
  { id: 'die-drei-toepfe-pflegekasse', title: "Die drei Töpfe: Pflegekasse, Finanzamt, Sozialamt" },
  { id: 'was-bleibt-am-ende', title: "Was bleibt am Ende wirklich zu zahlen?" },
  { id: 'wenn-das-geld-nicht', title: "Wenn das Geld nicht reicht: Hilfe zur Pflege vom Sozialamt" },
  { id: 'haeufige-fragen-zur-kostenuebernahme', title: "Häufige Fragen zur Kostenübernahme" },
]

export const metadata: Metadata = {
  title: 'Kostenübernahme 24-Stunden-Pflege: Wer zahlt was?',
  description:
    'Wer übernimmt die Kosten der 24-Stunden-Pflege? Pflegekasse, Sozialamt, Steuervorteil — und wann Kinder zahlen müssen (100.000-€-Grenze). Einfach erklärt.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege-kostenuebernahme' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Kostenübernahme 24-Stunden-Pflege: Wer zahlt was? | Primundus',
    description: 'Pflegekasse, Sozialamt, Steuervorteil — und die 100.000-€-Regel für Angehörige. Einfach erklärt.',
    url: 'https://primundus.de/24-stunden-pflege-kostenuebernahme',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kostenübernahme bei der 24-Stunden-Pflege: Wer zahlt was?',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-08-14',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24-stunden-pflege-kostenuebernahme',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Übernimmt die Pflegekasse die 24-Stunden-Pflege komplett?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein. Die Pflegekasse zahlt feste Zuschüsse — Pflegegeld (347 bis 990 Euro je nach Pflegegrad), Entlastungsbetrag (131 Euro monatlich) und Verhinderungspflege (bis 3.539 Euro im Jahr). Zusammen deckt das oft 700 bis 1.200 Euro im Monat, den Rest tragen die Familien selbst.',
        },
      },
      {
        '@type': 'Question',
        name: 'Zahlt das Sozialamt die 24-Stunden-Pflege, wenn das Geld nicht reicht?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reichen Rente, Pflegegeld und Erspartes nicht, kann beim Sozialamt „Hilfe zur Pflege" beantragt werden. Ein Schonvermögen von 10.000 Euro pro Person bleibt dabei geschützt. Das Sozialamt prüft den Einzelfall und übernimmt anerkannte, angemessene Pflegekosten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Müssen Kinder für die Pflege ihrer Eltern zahlen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nur bei sehr hohem Einkommen: Seit dem Angehörigen-Entlastungsgesetz müssen Kinder erst ab 100.000 Euro Bruttojahreseinkommen zum Elternunterhalt beitragen. Wer darunter liegt, wird vom Sozialamt nicht herangezogen — das Vermögen der Kinder spielt keine Rolle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann man die 24-Stunden-Pflege von der Steuer absetzen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Für haushaltsnahe Dienstleistungen erkennt das Finanzamt bis zu 4.000 Euro Steuerermäßigung pro Jahr an — das entspricht gut 330 Euro im Monat zusätzlicher Entlastung.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Kostenübernahme 24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege-kostenuebernahme' },
    ],
  },
]

export default function KostenuebernahmePage() {
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
            { label: "Kosten", href: "/kosten" },
            { label: "Kostenübernahme" },
          ]}
          augenbraue="Ratgeber Kosten"
          titel="Kostenübernahme bei der 24-Stunden-Pflege: Wer zahlt was?"
          einleitung=""
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <KurzAntwort frage="Wer zahlt bei einer 24-Stunden-Betreuung dazu?" stand="August 2026">
              Die Pflegekasse beteiligt sich ab Pflegegrad 2 mit dem Pflegegeld (347–990 €/Monat je nach Pflegegrad), dem Entlastungsbetrag (131 €/Monat) und dem gemeinsamen Jahresbetrag für Verhinderungs- und Kurzzeitpflege (bis 3.539 €/Jahr). Zusätzlich sind 20 % der Kosten (max. 4.000 €/Jahr) steuerlich absetzbar.
            </KurzAntwort>
            <Text>
              Die kurze, ehrliche Antwort: <strong>Komplett übernimmt die Kosten niemand</strong> — aber es
            zahlen mehr Stellen mit, als die meisten Familien denken. Die Pflegekasse steuert je nach
            Pflegegrad oft 700 bis 1.200 Euro im Monat bei, das Finanzamt bis zu 4.000 Euro im Jahr, und
            wenn das Geld trotzdem nicht reicht, springt das Sozialamt ein. Die wichtigste Beruhigung
            vorweg: <strong>Kinder müssen erst ab 100.000 Euro Bruttojahreseinkommen für die Pflege ihrer
            Eltern zahlen.</strong>
            </Text>
          </Vorspann>

          <Abschnitt id="die-drei-toepfe-pflegekasse" titel="Die drei Töpfe: Pflegekasse, Finanzamt, Sozialamt">
            {/* Lange Zellen: Tabelle setzt ab 640 px whitespace-nowrap, der span lässt sie im Textblock umbrechen (sonst Querscrollen); auf dem Handy trennt er lange Wörter wie „Verhinderungspflege" */}
            <Tabelle
              titel=""
              kopf={['Wer zahlt?', 'Was genau?', 'Wie viel?']}
              zeilen={[
                ['Pflegekasse', <span className="whitespace-normal max-sm:hyphens-auto">Pflegegeld (bei Pflege zuhause)</span>, <span className="whitespace-normal max-sm:hyphens-auto">347 € (PG 2) · 599 € (PG 3) · 800 € (PG 4) · 990 € (PG 5) monatlich</span>],
                ['Pflegekasse', <span className="whitespace-normal max-sm:hyphens-auto">Entlastungsbetrag</span>, <span className="whitespace-normal max-sm:hyphens-auto">131 € monatlich (ab PG 1)</span>],
                ['Pflegekasse', <span className="whitespace-normal max-sm:hyphens-auto">Verhinderungspflege (gemeinsamer Jahresbetrag mit Kurzzeitpflege)</span>, <span className="whitespace-normal max-sm:hyphens-auto">bis 3.539 € im Jahr (≈ 295 € monatlich)</span>],
                ['Finanzamt', <span className="whitespace-normal max-sm:hyphens-auto">Steuerermäßigung für haushaltsnahe Dienstleistungen (§ 35a EStG)</span>, <span className="whitespace-normal max-sm:hyphens-auto">bis 4.000 € im Jahr (≈ 333 € monatlich)</span>],
                ['Sozialamt', <span className="whitespace-normal max-sm:hyphens-auto">„Hilfe zur Pflege", wenn Einkommen und Vermögen nicht reichen</span>, <span className="whitespace-normal max-sm:hyphens-auto">einzelfallabhängig; 10.000 € Schonvermögen bleiben geschützt</span>],
              ]}
              fuss="Stand: August 2026. Alle Beträge sind gesetzliche Leistungen — sie gelten unabhängig davon, über welchen Anbieter die Betreuung organisiert wird."
            />
          </Abschnitt>

          <Abschnitt id="was-bleibt-am-ende" titel="Was bleibt am Ende wirklich zu zahlen?">
            <Kasten>
              <Text>
                Ein typisches Beispiel mit Pflegegrad 3: Die Betreuung kostet 2.800 Euro im Monat. Davon
                gehen ab: 599 Euro Pflegegeld, 131 Euro Entlastungsbetrag, rund 295 Euro anteilige
                Verhinderungspflege und etwa 333 Euro Steuerersparnis. <strong>Es bleiben rund 1.450 Euro
                im Monat</strong> — für eine Kraft, die rund um die Uhr im Haus ist. Zum Vergleich: Ein
                Heimplatz kostet im Bundesdurchschnitt rund 3.364 Euro Eigenanteil, und das Haus
                steht leer.
              </Text>
              <a
                href="https://kostenrechner.primundus.de/"
                className="self-start inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
              >
                Ihre Zuschüsse in 2 Minuten berechnen
              </a>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="wenn-das-geld-nicht" titel="Wenn das Geld nicht reicht: Hilfe zur Pflege vom Sozialamt">
            <Text>
              Reichen Rente, Pflegegeld und Erspartes nicht aus, muss niemand auf Betreuung verzichten:
              Beim Sozialamt kann <strong>„Hilfe zur Pflege"</strong> beantragt werden. Dabei gilt ein{' '}
              <strong>Schonvermögen von 10.000 Euro pro Person</strong> (bei Ehepaaren 20.000 Euro), das
              nicht angetastet wird. Auch das selbst bewohnte Haus ist in der Regel geschützt, solange der
              Ehepartner darin wohnt.
            </Text>
            <Kasten augenbraue="Die 100.000-Euro-Regel — die wichtigste Entlastung für Angehörige">
              <Text>
                Seit dem Angehörigen-Entlastungsgesetz zieht das Sozialamt Kinder erst dann zum
                Elternunterhalt heran, wenn ihr <strong>Bruttojahreseinkommen über 100.000 Euro</strong>{' '}
                liegt — pro Kind gerechnet, Vermögen zählt nicht. Für die allermeisten Familien heißt das:
                Die Kinder zahlen nichts, auch wenn das Sozialamt einspringt.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="haeufige-fragen-zur-kostenuebernahme" titel="Häufige Fragen zur Kostenübernahme">
            <Punkte
              punkte={[
                { title: "Übernimmt die Pflegekasse die 24-Stunden-Pflege komplett?", desc: "Nein. Die Pflegekasse zahlt feste Zuschüsse — Pflegegeld (347 bis 990 Euro je nach Pflegegrad), Entlastungsbetrag (131 Euro monatlich) und Verhinderungspflege (bis 3.539 Euro im Jahr). Zusammen deckt das oft 700 bis 1.200 Euro im Monat, den Rest tragen die Familien selbst." },
                { title: "Zahlt das Sozialamt die 24-Stunden-Pflege, wenn das Geld nicht reicht?", desc: "Reichen Rente, Pflegegeld und Erspartes nicht, kann beim Sozialamt „Hilfe zur Pflege\" beantragt werden. Ein Schonvermögen von 10.000 Euro pro Person bleibt dabei geschützt. Das Sozialamt prüft den Einzelfall und übernimmt anerkannte, angemessene Pflegekosten." },
                { title: "Müssen Kinder für die Pflege ihrer Eltern zahlen?", desc: "Nur bei sehr hohem Einkommen: Seit dem Angehörigen-Entlastungsgesetz müssen Kinder erst ab 100.000 Euro Bruttojahreseinkommen zum Elternunterhalt beitragen. Wer darunter liegt, wird vom Sozialamt nicht herangezogen — das Vermögen der Kinder spielt keine Rolle." },
                { title: "Kann man die 24-Stunden-Pflege von der Steuer absetzen?", desc: <>Ja. Für haushaltsnahe Dienstleistungen erkennt das Finanzamt bis zu 4.000 Euro
                Steuerermäßigung pro Jahr an — das entspricht gut 330 Euro im Monat zusätzlicher
                Entlastung. Mehr dazu:{' '}
                <a href="/pflege-steuerlich-absetzen" className="text-pm-taupe underline underline-offset-2">
                  Pflege steuerlich absetzen
                </a>.</> },
              ]}
            />
            <MehrDazu
              label="Weiterlesen:"
              links={[
                { href: '/kosten', text: 'Was kostet 24h-Pflege?' },
                { href: '/pflegegeld-und-24h-pflege-kombinieren', text: 'Pflegegeld & 24h-Pflege kombinieren' },
                { href: '/sozialhilfe-bei-pflegebedarf', text: 'Sozialhilfe bei Pflegebedarf' },
                { href: '/eigenanteil-24h-pflege-senken', text: 'Eigenanteil senken' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24-stunden-pflege-kostenuebernahme" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
