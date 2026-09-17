import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { ORG_ID } from '@/lib/schema'

// Kernseite in der Seitenvorlage (17.09.2026). Inhalt gegen Kostenrechner, Startseite und Mustervertrag geprüft:
// Preise aus dem Rechner (ab 2.150 €, Pflegegrad 3 ab ca. 923 €), Nächte „bei Bedarf auch nachts",
// Ersatzkraft nach Vertrag § 1 („schnellstmöglich, in der Regel innerhalb von 3 Tagen", Krankheitstage ohne
// Honorar nach § 4), Ablauf in drei Schritten wie auf der Startseite und im Rechner.

const AKTUALISIERT = aktualisiertAm('24-stunden-pflege', '17. September 2026')
const RECHNER_SEITE = 'https://kostenrechner.primundus.de/?start=1&src=apex-24-stunden-pflege'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist 24-Stunden-Pflege?' },
  { id: 'leistungen', title: 'Was leistet Primundus?' },
  { id: 'kosten', title: 'Kosten & Kassenzuschüsse' },
  { id: 'ablauf', title: 'Ablauf & Start' },
  { id: 'vorteile', title: 'Vergleich mit dem Pflegeheim' },
  { id: 'faq', title: 'Häufige Fragen' },
  { id: 'themen', title: 'Weitere Themen' },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege — Testsieger & täglich kündbar | Primundus',
  description: '24h-Pflege von Primundus: Geprüfte Betreuungskraft im Haushalt, täglich kündbar, Anreise in 3 Tagen möglich. 6× Testsieger DIE WELT. Ab 2.150 €/Monat.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege' },
  openGraph: {
    title: '24-Stunden-Pflege | Primundus — Testsieger & 20 Jahre Erfahrung',
    description: 'Geprüfte Betreuungskraft im Haushalt, täglich kündbar, Anreise in 3 Tagen möglich. 6× Testsieger DIE WELT.',
    url: 'https://primundus.de/24-stunden-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const FRAGEN = [
  { q: 'Was ist 24-Stunden-Pflege?', a: 'Eine Betreuungskraft zieht bei dem Pflegebedürftigen ein und hilft im Alltag: bei der Körperpflege, im Haushalt und mit Gesellschaft. Sie wohnt mit im Haus und ist bei Bedarf auch nachts da. Dabei hat sie geregelte Arbeitszeiten mit Pausen und Ruhezeiten.' },
  { q: 'Was kostet 24-Stunden-Pflege bei Primundus?', a: 'Ab 2.150 € im Monat für eine Person. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € im Monat selbst zu tragen. Dazu kommen An- und Abreise mit 125 € je Strecke. Kostenlose Beratung: 089 200 000 830.' },
  { q: 'Wie schnell kann 24h-Pflege bei Primundus starten?', a: 'Eine Anreise ist in 3 Tagen möglich. Preis und passende Betreuungskräfte sehen Sie sofort online; ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Ist 24-Stunden-Pflege bei Primundus legal?', a: 'Ja. Die Betreuungskräfte sind bei uns angestellt und arbeiten im Entsendemodell mit A1-Bescheinigung: Sie sind in Polen sozialversichert und legal in Deutschland tätig. Sie als Familie werden nicht Arbeitgeber.' },
  { q: 'Warum ist Primundus Testsieger?', a: 'Primundus ist sechsmal in Folge Testsieger bei DIE WELT. Primundus steht für die beste Kombination aus Preis, Qualität und Kundenservice, getragen von 20 Jahren Erfahrung und über 60.000 Betreuungen.' },
  { q: 'Was passiert, wenn die Betreuungskraft krank wird?', a: 'Wir stellen schnellstmöglich eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Für die Tage, an denen die Betreuungskraft krank ist, berechnen wir nichts. Der Wechsel kostet nichts extra, es fallen nur die An- und Abreisekosten an.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '24-Stunden-Pflege',
    provider: { '@id': ORG_ID },
    description: '24-Stunden-Betreuung zu Hause durch eigene, bei Primundus angestellte Betreuungskräfte im Entsendemodell mit A1-Bescheinigung. Täglich kündbar, taggenaue Abrechnung, Anreise in 3 Tagen möglich.',
    areaServed: 'DE',
    serviceType: '24-Stunden-Pflege',
    offers: { '@type': 'Offer', priceRange: 'ab 2150 €/Monat' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const THEMEN = [
  {
    title: 'Grundlagen',
    links: [
      { href: '/was-ist-24-stunden-pflege', text: 'Was ist 24h-Pflege?' },
      { href: '/wann-brauche-ich-24h-pflege', text: 'Wann brauche ich 24h-Pflege?' },
      { href: '/vorteile-24h-pflege', text: 'Vorteile der 24h-Pflege' },
      { href: '/nachteile-24h-pflege', text: 'Nachteile ehrlich betrachtet' },
    ],
  },
  {
    title: 'Ablauf & Organisation',
    links: [
      { href: '/ablauf', text: 'So läuft es ab' },
      { href: '/24h-pflege-organisieren', text: '24h-Pflege organisieren' },
      { href: '/pflegekraft-finden', text: 'Pflegekraft finden' },
      { href: '/checkliste-pflegekraft-einstellen', text: 'Checkliste: Pflegekraft einstellen' },
    ],
  },
  {
    title: 'Vergleiche',
    links: [
      { href: '/24h-pflege-vs-pflegeheim', text: '24h-Pflege oder Pflegeheim' },
      { href: '/24h-pflege-vs-ambulante-pflege', text: '24h-Pflege oder ambulante Pflege' },
      { href: '/selbst-pflegen-oder-24h-pflege', text: 'Selbst pflegen oder 24h-Pflege?' },
      { href: '/tagespflege-vs-24h-betreuung', text: 'Tagespflege oder 24h-Betreuung' },
    ],
  },
  {
    title: 'Pflegekräfte',
    links: [
      { href: '/pflegekraft-aus-polen', text: 'Pflegekraft aus Polen' },
      { href: '/pflegekraft-aus-rumaenien', text: 'Pflegekraft aus Rumänien' },
      { href: '/pflegekraft-aus-bulgarien', text: 'Pflegekraft aus Bulgarien' },
      { href: '/eu-pflegekraft-rechte-pflichten', text: 'EU-Pflegekraft: Rechte & Pflichten' },
    ],
  },
]

export default function VierUndZwanzigStundenPflege() {
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
            { label: '24-Stunden-Pflege' },
          ]}
          augenbraue="6× Testsieger DIE WELT"
          titel="24-Stunden-Pflege zu Hause — rechtssicher und täglich kündbar"
          einleitung={<>Eine Betreuungskraft zieht bei Ihrem Angehörigen ein, hilft im Alltag und ist bei Bedarf auch nachts da. Unsere Betreuungskräfte sind bei uns angestellt, der Vertrag ist täglich kündbar, und eine Anreise ist in 3 Tagen möglich. Die Betreuung kostet ab 2.150&nbsp;€ im Monat; bei Pflegegrad 3 bleiben davon nach Kassenleistungen und Steuerermäßigung ab ca. 923&nbsp;€ selbst zu tragen.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          knopf={{ href: RECHNER_SEITE, text: 'Kosten & Pflegekräfte ansehen' }}
          blickTitel="Warum Primundus"
          blick={[
            '6× Testsieger DIE WELT',
            'Betreuungskräfte bei uns angestellt, Einsatz mit A1-Bescheinigung',
            'Preis und passende Pflegekräfte sofort sehen, Vertrag erst nach Ihrer Auswahl',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich, Ersatzkraft bei Ausfall',
            'Ansprechpartnerin täglich 8–20 Uhr',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist 24-Stunden-Pflege?">
            <Text>
              Bei der 24-Stunden-Pflege zieht eine Betreuungskraft in den Haushalt des Pflegebedürftigen. Sie hilft bei
              der Körperpflege, führt den Haushalt und leistet Gesellschaft. So kann Ihr Angehöriger in seiner Wohnung
              bleiben und muss nicht in ein Pflegeheim ziehen.
            </Text>
            <Kasten titel="Was „24 Stunden“ bedeutet">
              <Text>
                Die Betreuungskraft wohnt mit im Haus und ist bei Bedarf auch nachts da. Sie hat geregelte Arbeitszeiten
                mit Pausen und Ruhezeiten. Medizinische Behandlungspflege wie Spritzen oder Verbände übernimmt ein
                ambulanter Pflegedienst.
              </Text>
            </Kasten>
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/was-ist-24-stunden-pflege', text: 'Was ist 24-Stunden-Pflege? Alle Fakten' },
                { href: '/wann-brauche-ich-24h-pflege', text: 'Wann braucht es 24h-Pflege?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Was leistet Primundus?">
            <Text>
              Zwischen Ihnen und der Betreuungskraft steht kein Vermittler. Sie wählen aus den Bewerbungen die
              Betreuungskraft aus, die zu Ihrem Angehörigen passt, und wir setzen sie im Entsendemodell
              mit A1-Bescheinigung bei Ihnen ein. Sie haben einen Vertrag und eine Ansprechpartnerin.
            </Text>
            <Punkte
              punkte={[
                { title: 'Grundpflege', desc: 'Waschen, Duschen, An- und Auskleiden, Hilfe beim Essen, beim Aufstehen und beim Zubettgehen.' },
                { title: 'Haushalt', desc: 'Kochen, Einkaufen, Wäsche und Ordnung in den Räumen, die Ihr Angehöriger nutzt.' },
                { title: 'Betreuung und Gesellschaft', desc: 'Gespräche, Spaziergänge, Begleitung zu Arztterminen und ein fester Tagesablauf, der gerade bei Demenz wichtig ist.' },
                { title: 'Ersatz bei Ausfall', desc: 'Wird die Betreuungskraft krank, stellen wir schnellstmöglich eine Ersatzkraft, in der Regel innerhalb von 3 Tagen. Die Krankheitstage berechnen wir nicht.' },
                { title: 'Ansprechpartnerin', desc: 'Marta Kapcio und ihr Team sind an 7 Tagen die Woche von 8 bis 20 Uhr erreichbar.' },
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/leistungen', text: 'Alle Leistungen im Detail' },
                { href: '/rechtssicher', text: 'Rechtssicherheit & Entsendemodell' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kosten & Kassenzuschüsse 2026">
            <Text>
              Die Betreuung einer Person kostet ab 2.150 € im Monat. Wie viel genau, hängt zum Beispiel davon ab, ob die
              Betreuungskraft nachts gebraucht wird oder einen Führerschein haben soll. Pflegegeld, Entlastungsbudget und
              Steuerermäßigung senken den Betrag, den Sie selbst tragen:
            </Text>
            <Tabelle
              kopf={['Pflegegrad', 'Betreuung', 'Pflegegeld', 'Selbst zu tragen']}
              zeilen={[
                ['Pflegegrad 2', 'ab 2.150 €', '− 347 €', 'ab ca. 1.175 €'],
                ['Pflegegrad 3', 'ab 2.150 €', '− 599 €', 'ab ca. 923 €'],
                ['Pflegegrad 4', 'ab 2.150 €', '− 800 €', 'ab ca. 722 €'],
                ['Pflegegrad 5', 'ab 2.200 €', '− 990 €', 'ab ca. 582 €'],
              ]}
              betont={3}
              fuss="Selbst zu tragen: nach Pflegegeld, 295 € Entlastungsbudget (3.539 € im Jahr) und 333 € Steuerermäßigung im Monat · zzgl. An- und Abreise 125 € je Strecke · Kost und Logis stellen Sie · Stand September 2026, Werte aus unserem Kostenrechner"
            />
            <RechnerKasten src="apex-24-stunden-pflege" />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/kosten', text: 'Alle Kosten im Detail' },
                { href: '/finanzierung', text: 'Alle Kassenzuschüsse 2026' },
                { href: '/pflegegeld-und-24h-pflege-kombinieren', text: 'Pflegegeld und 24h-Pflege kombinieren' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="ablauf" titel="Ablauf: Anreise in 3 Tagen möglich">
            <Schritte
              schritte={[
                {
                  title: 'Preis sofort sehen',
                  desc: 'Sie beantworten ein paar kurze Fragen zur Pflegesituation und sehen sofort Ihren Monatspreis, auch was nach Zuschüssen bleibt. Ihre Kontaktdaten brauchen wir dafür noch nicht.',
                  tag: 'Unter 2 Minuten',
                  tagTon: 'gruen',
                },
                {
                  title: 'Pflegekräfte ansehen — Bewerbungen erhalten',
                  desc: 'Mit Ihren Kontaktdaten speichern Sie die Berechnung und sehen sofort passende Pflegekräfte. Ergänzen Sie danach die Angaben zu Ihrem Angehörigen, dann bewerben sich Pflegekräfte bei Ihnen — mit Foto, Erfahrung und Verfügbarkeit.',
                  tag: 'Bewerbungen am selben Werktag',
                  tagTon: 'gruen',
                },
                {
                  title: 'Aussuchen — erst dann der Vertrag',
                  desc: <>Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl kommt der Betreuungsvertrag — den <a href={MUSTERVERTRAG} className={LINK}>Mustervertrag</a> können Sie jederzeit vorher lesen. Danach reist Ihre Betreuungskraft an.</>,
                  tag: 'Anreise in 3 Tagen möglich',
                  tagTon: 'gruen',
                },
              ]}
            />
            <MehrDazu label="Schritt für Schritt erklärt:" links={[{ href: '/ablauf', text: 'Ablauf der 24h-Pflege bei Primundus' }]} />
          </Abschnitt>

          <Abschnitt id="vorteile" titel="24-Stunden-Pflege oder Pflegeheim?">
            <Text>
              Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit 3.364 € im Monat (vdek-Auswertung,
              Stand 1. Juli 2026). Bei der 24-Stunden-Pflege tragen Sie bei Pflegegrad 3 ab ca. 923 € im Monat selbst,
              und Ihr Angehöriger bleibt in seiner vertrauten Umgebung.
            </Text>
            <Tabelle
              kopf={['', '24-Stunden-Pflege', 'Pflegeheim']}
              zeilen={[
                ['Selbst zu tragen im Monat', 'ab ca. 923 €', 'Ø 3.364 €'],
                ['Wohnen', 'im eigenen Zuhause', 'Umzug ins Heim'],
                ['Betreuung', '1:1, bei Bedarf auch nachts', 'Pflegepersonal für mehrere Bewohner'],
                ['Tagesablauf', 'nach eigenen Gewohnheiten', 'nach den Abläufen im Heim'],
                ['Kündigung', 'täglich', 'mit Frist zum Monatsende'],
              ]}
              betont={1}
              fuss="24-Stunden-Pflege: eine Person, Pflegegrad 3, Werte aus unserem Kostenrechner, zzgl. An- und Abreise · Pflegeheim: bundesweiter Durchschnitt, vdek-Auswertung, Stand 1. Juli 2026"
            />
            <MehrDazu label="Detaillierter Vergleich:" links={[{ href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2026' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur 24-Stunden-Pflege">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <Abschnitt id="themen" titel="Weitere Themen zur 24-Stunden-Pflege">
            <Gruppen
              gruppen={THEMEN.map((g) => ({
                title: g.title,
                punkte: g.links.map((l) => <a key={l.href} href={l.href} className={LINK}>{l.text}</a>),
              }))}
            />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
