import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, StandardUnterzeile, Schritte, Text } from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite in der Seitenvorlage (Paket 3, 19.09.2026). Inhalt gegen Impressum, Mustervertrag und die Hauptseite geprüft.
// Raus, weil nicht belegbar oder falsch: „Kein einziger Kundenfall mit rechtlichen Konsequenzen" / „0 rechtliche Probleme" /
// „null rechtliche Probleme", „laufende Rechtsprüfung, Änderungen sofort umgesetzt", „Tausende Haushalte … wissen es nicht",
// „Kontrollen seit Jahren häufiger", „Vertrag mit Primundus als deutscher Agentur" (Vertragspartner ist die PRIMUNDUS
// Sp. z o.o.; kein „Agentur"), „seit 20 Jahren ausschließlich". Die Kurzantwort (August 2026) steht jetzt als Einleitung.

const AKTUALISIERT = aktualisiertAm('rechtssicher', '19. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-rechtssicher'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'modelle', title: 'Drei Modelle, ein legales' },
  { id: 'entsendemodell', title: 'So funktioniert das Entsendemodell' },
  { id: 'primundus', title: 'Was Primundus dafür tut' },
  { id: 'kontrolle', title: 'Bei einer Kontrolle' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Rechtssichere 24-Stunden-Pflege: Entsendemodell mit A1',
  description:
    'Rechtssichere 24-Stunden-Pflege: bei uns angestellt, A1-Bescheinigung je Einsatz, Sie werden nicht Arbeitgeber. Was bei einer Kontrolle zählt.',
  alternates: { canonical: 'https://primundus.de/rechtssicher' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Rechtssichere 24-Stunden-Pflege: Entsendemodell mit A1',
    description: 'Betreuungskraft angestellt, A1-Bescheinigung für jeden Einsatz, Sie werden nicht Arbeitgeber.',
    url: 'https://primundus.de/rechtssicher',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Ist 24-Stunden-Pflege legal?',
    a: 'Ja, im Entsendemodell: Die Betreuungskraft ist bei einem Unternehmen in einem anderen EU-Land angestellt und dort sozialversichert, für jeden Einsatz liegt eine A1-Bescheinigung vor, und sie hat geregelte Arbeits- und Ruhezeiten. Bei Primundus sind die Betreuungskräfte bei uns angestellt und in Polen sozialversichert; Sie als Familie werden nicht Arbeitgeber.',
  },
  {
    q: 'Was passiert bei einer behördlichen Kontrolle?',
    a: 'Sie zeigen die A1-Bescheinigung der Betreuungskraft und Ihren Betreuungsvertrag mit Primundus und rufen uns an (089 200 000 830). Beides belegt, dass die Betreuungskraft angestellt und sozialversichert ist und Sie kein Arbeitsverhältnis haben.',
  },
  {
    q: 'Warum ist eine „selbstständige“ Betreuungskraft riskant?',
    a: 'Wer im Haushalt wohnt, weisungsgebunden arbeitet und nur einen Auftraggeber hat, ist in der Regel scheinselbstständig. Dann gilt die Familie als Arbeitgeber: Sozialversicherungsbeiträge können für bis zu vier Jahre nachgefordert werden, dazu Bußgelder, bei Vorsatz auch ein Strafverfahren.',
  },
  {
    q: 'Gilt das Entsendemodell in ganz Deutschland?',
    a: 'Ja. Es beruht auf der EU-Verordnung 883/2004 zur Koordinierung der Sozialversicherung und gilt in allen Bundesländern gleich.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rechtssichere 24-Stunden-Pflege: so stellt Primundus das sicher',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/rechtssicher',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtssicher', item: 'https://primundus.de/rechtssicher' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function RechtssicherPage() {
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
            { label: 'Rechtssicher' },
          ]}
          augenbraue="Über Primundus"
          titel={<>Rechtssichere <span className="min-[375px]:whitespace-nowrap">24-Stunden-Pflege</span>: so stellt Primundus das sicher</>}
          einleitung={<>Legal ist die 24-Stunden-Betreuung im <strong className="text-pm-ink">Entsendemodell</strong>: Die Betreuungskraft ist bei uns angestellt und sozialversichert, für jeden Einsatz liegt eine <strong className="text-pm-ink">A1-Bescheinigung</strong> vor, und sie hat geregelte Arbeits- und Ruhezeiten. Sie als Familie werden nicht Arbeitgeber. Was das im Einzelnen heißt, warum „selbstständige“ Kräfte riskant sind und was bei einer Kontrolle zählt.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          knopfOben
          unterzeile={<StandardUnterzeile />}
          einleitungTitel="Kurz gesagt: das Entsendemodell"
          blickTitel="Auf einen Blick"
          blick={[
            'A1-Bescheinigung für jeden Einsatz, kein Einsatz ohne',
            'Betreuungskraft bei uns angestellt, in Polen sozialversichert',
            'Sie werden nicht Arbeitgeber: keine Anmeldung, keine Sozialabgaben, keine Lohnsteuer',
            'Vertragspartner: PRIMUNDUS Sp. z o.o., Mustervertrag vorab lesbar',
            'Wechsel in der Regel alle 6–8 Wochen',
            'Bei Kontrolle: A1 und Vertrag zeigen, uns anrufen',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="modelle" titel="Drei Modelle, ein legales">
            <Text>
              Eine Betreuungskraft aus dem EU-Ausland kann auf drei Wegen bei Ihnen arbeiten. Entscheidend ist, wer ihr Arbeitgeber
              ist und wer die Sozialabgaben zahlt:
            </Text>
            <Punkte
              punkte={[
                { title: '„Selbstständige“ Betreuungskraft', desc: 'Sie beauftragen die Kraft direkt, sie stellt Rechnungen. Wer im Haushalt wohnt, weisungsgebunden arbeitet und nur einen Auftraggeber hat, ist in der Regel scheinselbstständig. Dann gelten Sie als Arbeitgeber: Sozialversicherungsbeiträge können für bis zu vier Jahre nachgefordert werden, dazu Bußgelder, bei Vorsatz ein Strafverfahren.' },
                { title: 'Sie stellen selbst an', desc: 'Legal, aber Sie sind Arbeitgeber: Anmeldung bei der Sozialversicherung, Lohnabrechnung, Lohnsteuer, Urlaub, Krankheit, Ersatz. Ohne korrekte Anmeldung ist es Schwarzarbeit.' },
                { title: 'Entsendemodell (Primundus)', desc: 'Die Betreuungskraft ist bei uns angestellt und in Polen sozialversichert, jeder Einsatz läuft mit A1-Bescheinigung. Sie haben einen Betreuungsvertrag mit uns und werden nicht Arbeitgeber.' },
              ]}
            />
            <MehrDazu label="Mehr dazu:" links={[{ href: '/pflegekraft-legal-beschaeftigen', text: 'Pflegekraft legal beschäftigen: die drei Modelle' }, { href: '/scheinselbststaendigkeit-pflege-vermeiden', text: 'Scheinselbstständigkeit vermeiden' }]} />
          </Abschnitt>

          <Abschnitt id="entsendemodell" titel="So funktioniert das Entsendemodell">
            <Text>
              Grundlage ist die EU-Verordnung 883/2004: Wer in einem EU-Land angestellt und sozialversichert ist, kann vorübergehend in
              ein anderes EU-Land entsandt werden und bleibt dabei im Heimatland versichert. Den Nachweis liefert die
              A1-Bescheinigung des Sozialversicherungsträgers im Heimatland.
            </Text>
            <Schritte
              schritte={[
                { title: 'Anstellung bei uns', desc: 'Die Betreuungskraft hat einen Arbeitsvertrag mit der PRIMUNDUS Sp. z o.o. und ist in Polen kranken- und rentenversichert.' },
                { title: 'A1-Bescheinigung für den Einsatz', desc: 'Vor jedem Einsatz wird die A1-Bescheinigung ausgestellt. Sie belegt, dass die Sozialabgaben in Polen gezahlt werden, und liegt bei der Betreuungskraft.' },
                { title: 'Einsatz bei Ihnen', desc: 'Die Betreuungskraft wohnt und arbeitet bei Ihnen, in der Regel 6–8 Wochen, dann wechselt sie sich mit einer Kollegin ab. Sie hat geregelte Arbeitszeiten mit Pausen und Ruhezeiten.' },
                { title: 'Ihr Vertrag', desc: 'Sie schließen einen Betreuungsvertrag mit der PRIMUNDUS Sp. z o.o. Sie werden nicht Arbeitgeber: keine Anmeldung, keine Sozialabgaben, keine Lohnsteuer.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="primundus" titel="Was Primundus dafür tut">
            <Punkte
              punkte={[
                { title: 'A1 vor jedem Einsatz', desc: 'Keine Betreuungskraft reist ohne gültige A1-Bescheinigung an. Sie liegt bei ihr und kann bei jeder Kontrolle vorgezeigt werden.' },
                { title: 'Vertrag vorab lesbar', desc: <>Den <a href={MUSTERVERTRAG} target="_blank" rel="noopener" className={LINK}>Mustervertrag</a> können Sie vor jeder Entscheidung lesen: Leistungen, An- und Abreise, Ersatz bei Krankheit, Feiertage, Kündigung.</> },
                { title: 'Geregelte Arbeitszeiten', desc: 'Die Betreuungskraft hat Pausen und Ruhezeiten wie jede Arbeitnehmerin. „24 Stunden“ heißt: Sie wohnt im Haus und ist bei Bedarf auch nachts da, nicht rund um die Uhr im Einsatz.' },
                { title: 'Ersatz bei Krankheit', desc: 'Fällt eine Betreuungskraft aus, stellen wir schnellstmöglich Ersatz, in der Regel innerhalb von 3 Tagen. Die Krankheitstage berechnen wir nicht.' },
              ]}
            />
            <Kasten augenbraue="Ihr Vertragspartner" titel="Wer bei Primundus Ihr Vertragspartner ist">
              <Text>
                Ihr Betreuungsvertrag kommt mit der PRIMUNDUS Sp. z o.o. mit Sitz in Warschau zustande. Bei ihr sind die
                Betreuungskräfte angestellt; genau deshalb funktioniert die Entsendung. Ihre Ansprechpartner sitzen in München:
                Marta Kapcio und ihr Team, täglich von 8 bis 20 Uhr.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="kontrolle" titel="Was bei einer Kontrolle passiert">
            <Text>
              Kontrollen durch den Zoll (Finanzkontrolle Schwarzarbeit) oder die Rentenversicherung sind möglich. Im Entsendemodell
              sind sie kein Problem, wenn drei Dinge da sind:
            </Text>
            <Schritte
              schritte={[
                { title: 'A1-Bescheinigung zeigen', desc: 'Das zentrale Dokument. Es liegt bei der Betreuungskraft und belegt die Sozialversicherung in Polen.' },
                { title: 'Betreuungsvertrag zeigen', desc: 'Ihr Vertrag mit Primundus belegt, dass Sie kein Arbeitsverhältnis mit der Betreuungskraft haben.' },
                { title: 'Uns anrufen', desc: '089 200 000 830, täglich 8–20 Uhr. Wir beantworten Rückfragen der Behörde und liefern Unterlagen nach.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Rechtssicherheit">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
