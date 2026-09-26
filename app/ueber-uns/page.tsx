import type { Metadata } from 'next'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, StandardUnterzeile, Text, Werte } from '@/components/vorlage/Ratgeber'
import { VertrauensKarten } from '@/components/vertrauen/Vertrauen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'

// Kernseite in der Seitenvorlage (Paket 3, 19.09.2026; Martin: „warum ist die Über-uns-Seite noch alt"). Vorher: alte Optik,
// eigener Siegelkasten mit Goldrahmen, Bewertungs-Auszug und Kontaktkasten in Taupe. Jetzt: Kopf der Vorlage, Siegelkarten wie
// auf der Startseite (VertrauensKarten), Kundenstimmen und Schlussblock wie überall (KontaktBand). Fakten aus Impressum und
// lib/schema.ts: Firmengruppe seit 2006 (kein Gründungsjahr der heutigen Gesellschaft), über 60.000 Betreuungen, Vertragspartner
// PRIMUNDUS Sp. z o.o. in Warschau, Büro Landsberger Str. 155 in München, Geschäftsführung Karolina Jakubowska. Raus: „Jede
// Betreuungskraft wird persönlich überprüft" (nicht belegbar, wie auf /qualitaet), „Menschen, die wirklich passen".

const AKTUALISIERT = aktualisiertAm('ueber-uns', '19. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-ueber-uns'
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'wer', title: 'Wer wir sind' },
  { id: 'arbeitsweise', title: 'Wie wir arbeiten' },
  { id: 'team', title: 'Wer für Sie da ist' },
  { id: 'auszeichnung', title: 'Auszeichnung & Garantie' },
  { id: 'firma', title: 'Firma & Sitz' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Über Primundus: seit 2006 in der 24-Stunden-Pflege zu Hause',
  description:
    'Seit 2006 in der 24-Stunden-Pflege, über 60.000 Betreuungen, 6× Testsieger bei DIE WELT, eigene Betreuungskräfte, Büro in München.',
  alternates: { canonical: 'https://primundus.de/ueber-uns' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Über Primundus: seit 2006 in der 24-Stunden-Pflege zu Hause',
    description: 'Firmengruppe seit 2006, über 60.000 Betreuungen, 6× Testsieger DIE WELT, Betreuungskräfte bei uns angestellt.',
    url: 'https://primundus.de/ueber-uns',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Wer steht hinter Primundus?',
    a: 'Primundus wird von Karolina Jakubowska geführt. Die Firmengruppe hinter Primundus ist seit 2006 in der häuslichen 24-Stunden-Pflege tätig und hat seitdem über 60.000 Betreuungen organisiert. Ihre Ansprechpartner in Deutschland sind Marta Kapcio und ihr Team.',
  },
  {
    q: 'Wo sitzt Primundus?',
    a: 'Das Büro in Deutschland ist in München, Landsberger Str. 155. Vertragspartner ist die PRIMUNDUS Sp. z o.o. mit Sitz in Warschau, bei der die Betreuungskräfte angestellt sind.',
  },
  {
    q: 'Sind die Betreuungskräfte bei Primundus angestellt?',
    a: 'Ja. Die Betreuungskräfte sind bei uns angestellt und in Polen sozialversichert; jeder Einsatz läuft im Entsendemodell mit A1-Bescheinigung. Sie zahlen keine Vermittlungsgebühr.',
  },
  {
    q: 'Ist Primundus ausgezeichnet?',
    a: 'DIE WELT hat Primundus sechsmal in Folge ausgezeichnet: 2021, 2022, 2023, 2024, 2025 und 2026. Siegel und Veröffentlichung zeigen wir auf der Seite zur Auszeichnung.',
  },
  {
    q: 'Wie erreiche ich Primundus?',
    a: 'Täglich von 8 bis 20 Uhr unter 089 200 000 830, per WhatsApp oder per E-Mail an info@primundus.de. Ihren Preis und passende Betreuungskräfte sehen Sie jederzeit im Kostenrechner, ohne Anruf.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Über uns', item: 'https://primundus.de/ueber-uns' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

function Person({ bild, name, rolle, children }: { bild: string; name: string; rolle: string; children: ReactNode }) {
  return (
    <div className="flex gap-5 rounded-[20px] bg-white p-6 shadow-lift md:p-7">
      <Image src={bild} alt={name} width={160} height={160} className="h-16 w-16 flex-none rounded-full object-cover object-top md:h-20 md:w-20" />
      <div className="min-w-0">
        <p className="text-[19px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink">{name}</p>
        <p className="mt-0.5 text-[14.5px] font-semibold text-pm-taupe">{rolle}</p>
        <p className="mt-3 text-[16.5px] leading-[1.6] text-pm-body">{children}</p>
      </div>
    </div>
  )
}

export default function UeberUnsPage() {
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
            { label: 'Über uns' },
          ]}
          augenbraue="Über Primundus"
          titel={<>Über Primundus — seit 2006 in der <span className="min-[375px]:whitespace-nowrap">24-Stunden-Pflege</span> zu Hause</>}
          einleitung={<>Die Firmengruppe hinter Primundus organisiert seit 2006 Betreuungskräfte für Familien in Deutschland, über <strong className="text-pm-ink">60.000 Betreuungen</strong> bis heute. DIE WELT hat Primundus <strong className="text-pm-ink">sechsmal in Folge</strong> ausgezeichnet. Unsere Betreuungskräfte sind bei uns angestellt, Sie sehen Preis und passende Kräfte vor dem Vertrag. Marta Kapcio und ihr Team sind täglich von 8 bis 20 Uhr für Sie da.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="4 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          knopfOben
          unterzeile={<StandardUnterzeile />}
          einleitungTitel="Primundus in einem Absatz"
          blickTitel="Auf einen Blick"
          blick={[
            'Erfahrung in der häuslichen 24-Stunden-Pflege seit 2006',
            'Über 60.000 Betreuungen',
            '6× Testsieger DIE WELT',
            'Betreuungskräfte bei uns angestellt, Einsatz mit A1-Bescheinigung',
            'Geschäftsführung Karolina Jakubowska, Büro in München',
            'Marta Kapcio und ihr Team, täglich 8–20 Uhr',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wer" titel="Wer wir sind">
            <figure className="overflow-hidden rounded-[20px] bg-white shadow-lift">
              <Image
                src="/images/team-primundus-deutschland.webp"
                alt="Marta Kapcio und Karolina Jakubowska von Primundus"
                width={1448}
                height={1086}
                sizes="(min-width: 1024px) 760px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-6 py-4 text-[15px] leading-[1.5] text-pm-mute">Marta Kapcio, Ihre Ansprechpartnerin, und Karolina Jakubowska, Geschäftsführerin von Primundus.</figcaption>
            </figure>
            <Text>
              Primundus organisiert 24-Stunden-Pflege zu Hause: Eine Betreuungskraft aus Polen zieht
              bei Ihrem Angehörigen ein, hilft im Alltag und ist bei Bedarf auch nachts da. Die Firmengruppe hinter Primundus
              macht das seit 2006. In dieser Zeit sind über 60.000 Betreuungen zustande gekommen, und DIE WELT hat Primundus
              sechsmal in Folge ausgezeichnet.
            </Text>
            <Text>
              Der Unterschied zu einer Vermittlungsagentur: Unsere Betreuungskräfte sind bei uns angestellt und in Polen
              sozialversichert, jeder Einsatz läuft im Entsendemodell mit A1-Bescheinigung. Sie zahlen keine Vermittlungsgebühr,
              sehen Preis und passende Betreuungskräfte, bevor Sie etwas unterschreiben, und können täglich kündigen.
            </Text>
            <Werte
              zeilen={[
                ['seit 2006', 'Erfahrung der Firmengruppe in der häuslichen 24-Stunden-Pflege'],
                ['über 60.000', 'Betreuungen'],
                ['6× in Folge', 'Testsieger bei DIE WELT, Preis & Qualität'],
                ['täglich 8–20 Uhr', 'Marta Kapcio und ihr Team, per Telefon und WhatsApp'],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="arbeitsweise" titel="Wie wir arbeiten">
            <Punkte
              punkte={[
                { title: 'Preis und Pflegekräfte sofort', desc: 'Ein paar Fragen im Kostenrechner, und Sie sehen Ihren Monatspreis und passende Pflegekräfte. Das dauert 2 Minuten.' },
                { title: 'Sie wählen aus', desc: 'Sie sehen Profile mit Foto, Erfahrung, Einsätzen über Primundus und Deutschkenntnissen. Bewerbungen kommen am selben Werktag, den Vertrag gibt es erst nach Ihrer Auswahl.' },
                { title: 'Angestellt, nicht vermittelt', desc: 'Die Betreuungskräfte sind bei uns angestellt, jeder Einsatz läuft mit A1-Bescheinigung. Eine Vermittlungsgebühr gibt es nicht.' },
                { title: 'Täglich kündbar', desc: 'Keine Mindestlaufzeit, taggenaue Abrechnung. Sie zahlen erst, wenn die Betreuungskraft da ist.' },
                { title: 'Ersatz bei Krankheit', desc: 'Fällt eine Betreuungskraft aus, stellen wir schnellstmöglich Ersatz, in der Regel innerhalb von 3 Tagen. Die Krankheitstage berechnen wir nicht.' },
                { title: 'Deutschlandweit', desc: 'Unsere Betreuungskräfte sind in ganz Deutschland im Einsatz, in Großstädten wie auf dem Land. Eine Anreise ist in 3 Tagen möglich.' },
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/ablauf', text: 'So läuft es ab' },
                { href: '/qualitaet', text: 'Wie wir Betreuungskräfte auswählen' },
                { href: '/rechtssicher', text: 'Rechtssicherheit und Entsendemodell' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="team" titel="Wer für Sie da ist">
            <div className="grid gap-5">
              <Person bild="/images/marta-kapcio.jpg" name="Marta Kapcio" rolle="Ihre Ansprechpartnerin">
                Marta Kapcio begleitet Sie von der ersten Frage bis zum Start der Betreuung, und auch danach, wenn etwas zu
                klären ist. Sie erreichen sie und ihr Team täglich von 8 bis 20 Uhr, per Telefon oder WhatsApp.
              </Person>
              <Person bild="/images/karolina-jakubowska-gesicht.jpg" name="Karolina Jakubowska" rolle="Gründerin & Geschäftsführerin">
                Karolina Jakubowska ist Gründerin und Geschäftsführerin von Primundus. Die Firmengruppe hinter Primundus ist
                seit 2006 in der häuslichen 24-Stunden-Pflege tätig.
              </Person>
            </div>
          </Abschnitt>

          <Abschnitt id="auszeichnung" titel="Auszeichnung und Garantie">
            <VertrauensKarten eingebettet />
          </Abschnitt>

          <Abschnitt id="firma" titel="Firma und Sitz">
            <Werte
              zeilen={[
                ['Büro Deutschland', 'Primundus Deutschland, Landsberger Str. 155, 80687 München'],
                ['Vertragspartner', 'PRIMUNDUS Sp. z o.o., Poznańska 21/48, 00-685 Warszawa, Polen (KRS 0001259402)'],
                ['Geschäftsführung', 'Karolina Jakubowska'],
                ['Kontakt', <>089 200 000 830, täglich 8–20 Uhr · <a href="mailto:info@primundus.de" className={LINK}>info@primundus.de</a></>],
              ]}
            />
            <Text>
              Ihr Betreuungsvertrag kommt mit der PRIMUNDUS Sp. z o.o. zustande, bei der die Betreuungskräfte angestellt sind.
              Den Mustervertrag können Sie vor jeder Entscheidung lesen; alle Angaben zur Firma stehen im{' '}
              <a href="/impressum" className={LINK}>Impressum</a>.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu Primundus">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
