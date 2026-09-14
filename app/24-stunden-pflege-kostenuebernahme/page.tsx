import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
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
            {/* VORLAGE: unverändert übernommen */}
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
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-[14px] text-pm-body">
              <thead>
                <tr className="border-b-2 border-pm-line text-left">
                  <th className="py-3 pr-4 font-bold text-pm-ink">Wer zahlt?</th>
                  <th className="py-3 pr-4 font-bold text-pm-ink">Was genau?</th>
                  <th className="py-3 font-bold text-pm-ink">Wie viel?</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-b border-pm-line-soft">
                  <td className="py-3 pr-4 font-semibold">Pflegekasse</td>
                  <td className="py-3 pr-4">Pflegegeld (bei Pflege zuhause)</td>
                  <td className="py-3">347 € (PG 2) · 599 € (PG 3) · 800 € (PG 4) · 990 € (PG 5) monatlich</td>
                </tr>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-3 pr-4 font-semibold">Pflegekasse</td>
                  <td className="py-3 pr-4">Entlastungsbetrag</td>
                  <td className="py-3">131 € monatlich (ab PG 1)</td>
                </tr>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-3 pr-4 font-semibold">Pflegekasse</td>
                  <td className="py-3 pr-4">Verhinderungspflege (gemeinsamer Jahresbetrag mit Kurzzeitpflege)</td>
                  <td className="py-3">bis 3.539 € im Jahr (≈ 295 € monatlich)</td>
                </tr>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-3 pr-4 font-semibold">Finanzamt</td>
                  <td className="py-3 pr-4">Steuerermäßigung für haushaltsnahe Dienstleistungen (§ 35a EStG)</td>
                  <td className="py-3">bis 4.000 € im Jahr (≈ 333 € monatlich)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Sozialamt</td>
                  <td className="py-3 pr-4">„Hilfe zur Pflege", wenn Einkommen und Vermögen nicht reichen</td>
                  <td className="py-3">einzelfallabhängig; 10.000 € Schonvermögen bleiben geschützt</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[13px] text-pm-mute mt-4">
              Stand: August 2026. Alle Beträge sind gesetzliche Leistungen — sie gelten unabhängig davon,
              über welchen Anbieter die Betreuung organisiert wird.
            </p>
          </div>
          </Abschnitt>

          <Abschnitt id="was-bleibt-am-ende" titel="Was bleibt am Ende wirklich zu zahlen?">
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Ein typisches Beispiel mit Pflegegrad 3: Die Betreuung kostet 2.800 Euro im Monat. Davon
              gehen ab: 599 Euro Pflegegeld, 131 Euro Entlastungsbetrag, rund 295 Euro anteilige
              Verhinderungspflege und etwa 333 Euro Steuerersparnis. <strong>Es bleiben rund 1.450 Euro
              im Monat</strong> — für eine Kraft, die rund um die Uhr im Haus ist. Zum Vergleich: Ein
              Heimplatz kostet im Bundesdurchschnitt rund 3.364 Euro Eigenanteil, und das Haus
              steht leer.
            </p>
            <a
              href="https://kostenrechner.primundus.de/"
              className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
            >
              Ihre Zuschüsse in 2 Minuten berechnen
            </a>
          </div>
          </Abschnitt>

          <Abschnitt id="wenn-das-geld-nicht" titel="Wenn das Geld nicht reicht: Hilfe zur Pflege vom Sozialamt">
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Reichen Rente, Pflegegeld und Erspartes nicht aus, muss niemand auf Betreuung verzichten:
              Beim Sozialamt kann <strong>„Hilfe zur Pflege"</strong> beantragt werden. Dabei gilt ein{' '}
              <strong>Schonvermögen von 10.000 Euro pro Person</strong> (bei Ehepaaren 20.000 Euro), das
              nicht angetastet wird. Auch das selbst bewohnte Haus ist in der Regel geschützt, solange der
              Ehepartner darin wohnt.
            </p>
            <div className="bg-pm-shell rounded-xl p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-2">
                Die 100.000-Euro-Regel — die wichtigste Entlastung für Angehörige
              </p>
              <p className="text-[13px] text-pm-taupe-ink leading-relaxed">
                Seit dem Angehörigen-Entlastungsgesetz zieht das Sozialamt Kinder erst dann zum
                Elternunterhalt heran, wenn ihr <strong>Bruttojahreseinkommen über 100.000 Euro</strong>{' '}
                liegt — pro Kind gerechnet, Vermögen zählt nicht. Für die allermeisten Familien heißt das:
                Die Kinder zahlen nichts, auch wenn das Sozialamt einspringt.
              </p>
            </div>
          </div>
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
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-3">Weiterlesen</p>
            <div className="flex flex-wrap gap-2">
              <a href="/kosten" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Was kostet 24h-Pflege?</a>
              <a href="/pflegegeld-und-24h-pflege-kombinieren" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Pflegegeld & 24h-Pflege kombinieren</a>
              <a href="/sozialhilfe-bei-pflegebedarf" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Sozialhilfe bei Pflegebedarf</a>
              <a href="/eigenanteil-24h-pflege-senken" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Eigenanteil senken</a>
            </div>
          </div>
          </Abschnitt>


          <Weiterlesen aktuell="24-stunden-pflege-kostenuebernahme" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
