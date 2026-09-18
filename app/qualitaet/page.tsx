import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text, Werte } from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite in der Seitenvorlage (Paket 2, 18.09.2026). Inhalt gegen Rechner, Kundenportal und Mustervertrag geprüft:
// Betreuungskräfte sind bei uns angestellt (kein „vermitteln"), Sie sehen vorab das Profil (Foto, Erfahrung, Einsätze,
// Deutschkenntnisse) und wählen selbst; Ersatz bei Krankheit „in der Regel innerhalb von 3 Tagen" (Vertrag § 1), Wechsel
// mit An-/Abreise 125 € je Strecke und Wechseltag für beide (§ 4 Nr. 7) statt „keine Zusatzkosten"; kein „sofortiger
// Ersatz", kein „Vermittlungsrisiko". Aussagen ohne Beleg (Deutsch im Gespräch geprüft, Referenzen, Führerschein verifiziert,
// Telefonat vorab) sind raus, bis Martin sie bestätigt.

const AKTUALISIERT = aktualisiertAm('qualitaet', '18. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-qualitaet'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'auswahl', title: 'Wie wir Betreuungskräfte auswählen' },
  { id: 'vorab', title: 'Was Sie vorab sehen' },
  { id: 'einsatz', title: 'Während des Einsatzes' },
  { id: 'wechsel', title: 'Wenn es nicht passt' },
  { id: 'belege', title: 'Woran Sie das messen können' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Qualität der 24h-Pflege bei Primundus — wie wir Betreuungskräfte auswählen | Primundus',
  description: 'Wie Primundus Betreuungskräfte auswählt: bei uns angestellt, Profil mit Foto, Erfahrung und Deutschkenntnissen vorab, Sie wählen selbst, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/qualitaet' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Qualität der 24h-Pflege | Primundus',
    description: 'Bei uns angestellte Betreuungskräfte, Profil vorab, Sie wählen selbst, täglich kündbar.',
    url: 'https://primundus.de/qualitaet',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Wie stellt Primundus die Qualität der Betreuungskräfte sicher?',
    a: 'Unsere Betreuungskräfte sind bei uns angestellt. Sie sehen vor der Entscheidung das Profil mit Foto, Erfahrung, Einsätzen über Primundus und Deutschkenntnissen und wählen selbst aus. Während des Einsatzes sind Marta Kapcio und ihr Team täglich von 8 bis 20 Uhr erreichbar. Passt es nicht, wechseln Sie; der Vertrag ist täglich kündbar.',
  },
  {
    q: 'Was passiert, wenn die Betreuungskraft nicht passt?',
    a: 'Sagen Sie uns Bescheid, dann suchen wir eine andere Betreuungskraft, und Sie wählen wieder selbst aus. Sie zahlen An- und Abreise mit 125 € je Strecke; am Wechseltag berechnen wir den Tagessatz für beide Betreuungskräfte, weil An- und Abreisetag Arbeitstage sind. Eine Gebühr für den Wechsel gibt es nicht.',
  },
  {
    q: 'Was passiert, wenn die Betreuungskraft krank wird?',
    a: 'Wir stellen schnellstmöglich eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Für die Krankheitstage berechnen wir nichts; es fallen nur An- und Abreise mit 125 € je Strecke an.',
  },
  {
    q: 'Woher weiß Primundus, ob eine Betreuungskraft gut ist?',
    a: 'Aus über 20 Jahren und mehr als 60.000 Betreuungen und aus den Rückmeldungen der Familien. Im Profil sehen Sie, wie viele Einsätze eine Betreuungskraft über Primundus hatte. Bewertungen unserer Familien finden Sie auf der Seite Erfahrungen.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Qualität der 24h-Pflege bei Primundus — wie wir Betreuungskräfte auswählen',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/qualitaet',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Qualität', item: 'https://primundus.de/qualitaet' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function Qualitaet() {
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
            { label: 'Startseite', href: '/' },
            { label: 'Qualität' },
          ]}
          augenbraue="Über Primundus"
          titel="Qualität der 24h-Pflege — wie wir Betreuungskräfte auswählen und den Einsatz begleiten"
          einleitung={<>Über 20 Jahre Erfahrung, mehr als 60.000 Betreuungen, sechsmal Testsieger bei DIE WELT. Dahinter steht ein einfaches System: Unsere Betreuungskräfte sind bei uns angestellt, Sie sehen vor der Entscheidung, wer zu Ihnen kommt, und wenn es nicht passt, wechseln Sie. Der Vertrag ist täglich kündbar.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="4 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          blickTitel="Auf einen Blick"
          blick={[
            'Betreuungskräfte bei uns angestellt, Einsatz mit A1-Bescheinigung',
            'Sie sehen vorab Foto, Erfahrung, Einsätze und Deutschkenntnisse',
            'Sie wählen aus, erst dann der Vertrag',
            'Ersatz bei Krankheit in der Regel innerhalb von 3 Tagen',
            'Täglich kündbar, taggenau abgerechnet',
            'Ansprechpartnerin täglich 8–20 Uhr',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="auswahl" titel="Wie wir Betreuungskräfte auswählen">
            <Text>
              Zwischen Ihnen und der Betreuungskraft steht kein Vermittler. Die Betreuungskräfte bewerben sich bei uns,
              wir stellen sie an und setzen sie im Entsendemodell mit A1-Bescheinigung bei Ihnen ein. Sie werden nicht
              Arbeitgeber, und Sie entscheiden, wer kommt.
            </Text>
            <Schritte
              schritte={[
                {
                  title: 'Bewerbung bei Primundus',
                  desc: 'Betreuungskräfte bewerben sich bei uns, nicht bei Ihnen. Wer bei uns arbeitet, ist bei uns angestellt und in Polen sozialversichert.',
                },
                {
                  title: 'Profil für jede Betreuungskraft',
                  desc: 'Foto, Alter, Deutschkenntnisse, Jahre Erfahrung und die Zahl der Einsätze über Primundus. Das Profil sehen Sie, bevor Sie sich entscheiden.',
                },
                {
                  title: 'Passung zu Ihrer Situation',
                  desc: 'Sie geben an, was gebraucht wird: Hilfe in der Nacht, Führerschein, Deutschkenntnisse. Die Betreuungskräfte, die sich bei Ihnen bewerben, kennen diese Angaben.',
                },
                {
                  title: 'Sie entscheiden',
                  desc: <>Sie sehen die Bewerbungen und wählen aus, erst danach kommt der Vertrag. Den <a href={MUSTERVERTRAG} className={LINK}>Mustervertrag</a> können Sie vorher lesen. Wer nicht passt, dem sagen Sie ab.</>,
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vorab" titel="Was Sie vor der Entscheidung sehen">
            <Text>
              Sie müssen niemandem vertrauen, den Sie nicht kennen. Im Kundenportal steht zu jeder Betreuungskraft, die
              sich bei Ihnen bewirbt:
            </Text>
            <Punkte
              punkte={[
                { title: 'Foto und Alter', desc: 'Sie sehen, wer bei Ihrem Angehörigen einziehen würde.' },
                { title: 'Deutschkenntnisse', desc: 'Als Stufe im Profil, von mittel bis gut. Gute Deutschkenntnisse fließen in den Preis ein.' },
                { title: 'Erfahrung und Einsätze', desc: 'Jahre in der Betreuung und die Zahl der Einsätze, die die Betreuungskraft schon über Primundus hatte.' },
                { title: 'Verfügbarkeit', desc: 'Ab wann die Betreuungskraft anreisen kann. Eine Anreise ist in 3 Tagen möglich.' },
              ]}
            />
            <MehrDazu label="So läuft es ab:" links={[{ href: '/ablauf', text: 'Von der Preisberechnung bis zur Anreise' }]} />
          </Abschnitt>

          <Abschnitt id="einsatz" titel="Während des Einsatzes">
            <Text>
              Mit der Anreise endet unsere Arbeit nicht. Sie haben einen Vertrag mit uns, eine Ansprechpartnerin und
              feste Regeln für Wechsel und Ausfall:
            </Text>
            <Punkte
              punkte={[
                { title: 'Ansprechpartnerin täglich 8–20 Uhr', desc: 'Marta Kapcio und ihr Team sind an sieben Tagen die Woche erreichbar, per Telefon, E-Mail und WhatsApp.' },
                { title: 'Wechsel alle 6–8 Wochen', desc: 'Die Betreuungskräfte wechseln sich in der Regel alle 6–8 Wochen ab. Sie wählen jedes Mal selbst aus.' },
                { title: 'Ersatz bei Krankheit', desc: 'Fällt eine Betreuungskraft aus, stellen wir schnellstmöglich Ersatz, laut Vertrag in der Regel innerhalb von 3 Tagen. Die Krankheitstage berechnen wir nicht.' },
                { title: 'Ihre Rückmeldung', desc: 'Wir bitten Familien um eine Bewertung. Was sie schreiben, lesen Sie auf der Seite Erfahrungen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wechsel" titel="Wenn es nicht passt">
            <Text>
              Manchmal stimmt die Chemie nicht. Dann sagen Sie uns Bescheid, wir suchen eine andere Betreuungskraft, und
              Sie wählen wieder selbst aus. Ob regulär alle 6–8 Wochen oder weil es nicht passt: Sie zahlen An- und
              Abreise mit 125 € je Strecke, und weil An- und Abreisetag Arbeitstage sind, berechnen wir am Wechseltag den
              Tagessatz für beide Betreuungskräfte. Eine Gebühr für den Wechsel gibt es nicht.
            </Text>
            <Kasten augenbraue="Ihr Vertrag" titel="Täglich kündbar, taggenau abgerechnet">
              <Text>
                Keine Mindestlaufzeit, keine Kündigungsfrist zum Monatsende. Abgerechnet wird taggenau, dazu kommen An-
                und Abreise mit 125 € je Strecke. So steht es im Vertrag, den Sie vor Ihrer Auswahl lesen können.
              </Text>
              <MehrDazu label="Nachlesen:" links={[{ href: MUSTERVERTRAG, text: 'Mustervertrag (PDF)' }, { href: '/24-stunden-pflege-krankenhausaufenthalt', text: 'Was bei Krankenhaus, Ausfall und Wechsel gilt' }]} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="belege" titel="Woran Sie das messen können">
            <Werte
              zeilen={[
                ['über 20 Jahre', 'Erfahrung in der häuslichen 24-Stunden-Betreuung'],
                ['über 60.000', 'Betreuungen'],
                ['6× Testsieger', 'DIE WELT, Preis & Qualität, sechsmal in Folge'],
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/testsieger-24-stunden-pflege', text: 'Die Auszeichnung mit Original-Siegel und Veröffentlichung' },
                { href: '/erfahrungen', text: 'Bewertungen unserer Familien' },
                { href: '/rechtssicher', text: 'Rechtssicherheit und Entsendemodell' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Qualität">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
