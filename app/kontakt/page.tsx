import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, MehrDazu, RatgeberKopf, RatgeberRumpf, Schritte, Werte } from '@/components/vorlage/Ratgeber'
import { MartaBand, WHATSAPP } from '@/components/vertrauen/Vertrauen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'

// Kernseite in der Seitenvorlage (Paket 3, 19.09.2026). Vorher: alte Optik mit Symbol-Kästen, Taupe-Hinweis, Bewertungs-Auszug.
// Jetzt: Kopf der Vorlage, Kontakt mit dem Standard-Baustein MartaBand (Martin 19.09.: „Wir haben doch einen Button für
// Anrufen, für WhatsApp … fang nicht an, Dinge zu entwickeln“), Nummer und E-Mail als Zeilen, Anschrift, was nach der Anfrage passiert (wie
// Rechner und Kundenportal; seit 19.09. wieder Kontaktdaten vor dem Preis), Fragen, Seitenende wie überall. Raus: „Kein Callcenter, kein Warteschleife",
// „Keine Anfrage zu groß oder zu klein" (Floskeln ohne Inhalt).

const AKTUALISIERT = aktualisiertAm('kontakt', '19. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-kontakt'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'wege', title: 'So erreichen Sie uns' },
  { id: 'anschrift', title: 'Anschrift' },
  { id: 'danach', title: 'Was nach Ihrer Anfrage passiert' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kontakt: Primundus täglich 8–20 Uhr erreichen',
  description:
    'Primundus erreichen: 089 200 000 830, täglich 8 bis 20 Uhr, WhatsApp, info@primundus.de. Preis und Pflegekräfte sehen Sie auch ohne Anruf im Kostenrechner.',
  alternates: { canonical: 'https://primundus.de/kontakt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Kontakt: Primundus täglich 8–20 Uhr erreichen',
    description: '089 200 000 830 täglich 8–20 Uhr, WhatsApp, info@primundus.de. Büro in München.',
    url: 'https://primundus.de/kontakt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Muss ich anrufen, um den Preis zu erfahren?',
    a: 'Nein. Im Kostenrechner beantworten Sie ein paar Fragen zur Pflegesituation und sehen nach 2 Minuten Ihren Monatspreis und passende Pflegekräfte. Anrufen können Sie, wenn Sie Fragen haben.',
  },
  {
    q: 'Wann erreiche ich jemanden bei Primundus?',
    a: 'Täglich von 8 bis 20 Uhr unter 089 200 000 830, auch am Wochenende. Per WhatsApp an dieselbe Nummer und per E-Mail an info@primundus.de können Sie jederzeit schreiben.',
  },
  {
    q: 'Mit wem spreche ich?',
    a: 'Mit Marta Kapcio und ihrem Team. Marta Kapcio begleitet Familien von der ersten Frage bis zum Start der Betreuung und ist auch danach Ihre Ansprechpartnerin.',
  },
  {
    q: 'Wo ist das Büro von Primundus?',
    a: 'Primundus Deutschland, Landsberger Str. 155, 80687 München. Vertragspartner ist die PRIMUNDUS Sp. z o.o. in Warschau, bei der die Betreuungskräfte angestellt sind.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://primundus.de/kontakt' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function KontaktPage() {
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
            { label: 'Kontakt' },
          ]}
          augenbraue="Kontakt"
          titel="Kontakt: Marta Kapcio und ihr Team erreichen Sie täglich von 8 bis 20 Uhr"
          einleitung={<>Rufen Sie an oder schreiben Sie per WhatsApp oder E-Mail, auch am Wochenende. Ihren Preis und passende Betreuungskräfte sehen Sie auch ohne Anruf: im Kostenrechner, in <strong className="text-pm-ink">2 Minuten</strong>.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="2 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          blickTitel="Auf einen Blick"
          blick={[
            'Telefon 089 200 000 830, täglich 8–20 Uhr',
            'WhatsApp an dieselbe Nummer',
            'E-Mail info@primundus.de',
            'Büro: Landsberger Str. 155, 80687 München',
            'Preis und Pflegekräfte online, ohne Anruf',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wege" titel="So erreichen Sie uns">
            <MartaBand eingebettet />
            <Werte
              zeilen={[
                ['Telefon', <><a href="tel:+4989200000830" className={LINK}>089 200 000 830</a>, täglich 8–20 Uhr, auch am Wochenende</>],
                ['WhatsApp', <><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={LINK}>089 200 000 830</a>, schreiben Sie, wann es Ihnen passt</>],
                ['E-Mail', <><a href="mailto:info@primundus.de" className={LINK}>info@primundus.de</a>, auch für Unterlagen wie den Pflegegradbescheid</>],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="anschrift" titel="Anschrift">
            <Werte
              zeilen={[
                ['Büro Deutschland', 'Primundus Deutschland, Landsberger Str. 155, 80687 München'],
                ['Vertragspartner', 'PRIMUNDUS Sp. z o.o., Poznańska 21/48, 00-685 Warszawa, Polen'],
                ['Geschäftsführung', 'Karolina Jakubowska'],
              ]}
            />
            <MehrDazu label="Mehr über uns:" links={[{ href: '/ueber-uns', text: 'Wer hinter Primundus steht' }, { href: '/impressum', text: 'Impressum' }]} />
          </Abschnitt>

          <Abschnitt id="danach" titel="Was nach Ihrer Anfrage passiert">
            <Schritte
              schritte={[
                { title: 'Preis und Pflegekräfte sehen', desc: 'Im Kostenrechner oder am Telefon: Sie beantworten ein paar Fragen zur Pflegesituation, hinterlassen Ihre Kontaktdaten und kennen Ihren Monatspreis, auch was nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleibt. Dazu sehen Sie passende Pflegekräfte mit Foto, Erfahrung und Deutschkenntnissen.', tag: 'Unter 2 Minuten' },
                { title: 'Bewerbungen erhalten', desc: 'Ergänzen Sie die Angaben zu Ihrem Angehörigen, dann bewerben sich Pflegekräfte bei Ihnen. Bewerbungen kommen am selben Werktag.', tag: 'Bewerbungen am selben Werktag' },
                { title: 'Aussuchen, dann Vertrag', desc: 'Sie entscheiden, wer kommt. Erst nach Ihrer Auswahl kommt der Betreuungsvertrag; den Mustervertrag können Sie vorher lesen. Danach reist die Betreuungskraft an.', tag: 'Anreise in 3 Tagen möglich' },
              ]}
            />
            <MehrDazu label="Schritt für Schritt:" links={[{ href: '/ablauf', text: 'Ablauf der 24h-Pflege bei Primundus' }, { href: '/beratungsgespraech', text: 'So läuft ein Gespräch mit uns ab' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Kontakt">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
