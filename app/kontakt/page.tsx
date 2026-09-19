import type { Metadata } from 'next'
import Image from 'next/image'
import { KNOPF, KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, MehrDazu, RatgeberKopf, RatgeberRumpf, Schritte, Text, Werte } from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'

// Kernseite in der Seitenvorlage (Paket 3, 19.09.2026). Vorher: alte Optik mit Symbol-Kästen, Taupe-Hinweis, Bewertungs-Auszug.
// Jetzt: Kopf der Vorlage, drei Wege (Telefon, WhatsApp, E-Mail) als Karten, Anschrift, was nach der Anfrage passiert (wie
// Rechner und Kundenportal seit „Preis zuerst"), Fragen, Seitenende wie überall. Raus: „Kein Callcenter, kein Warteschleife",
// „Keine Anfrage zu groß oder zu klein" (Floskeln ohne Inhalt).

const AKTUALISIERT = aktualisiertAm('kontakt', '19. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-kontakt'
const WHATSAPP = 'https://wa.me/4989200000830?text=Hallo%20Frau%20Kapcio%2C%20ich%20habe%20eine%20Frage%3A'

const SECTIONS = [
  { id: 'wege', title: 'So erreichen Sie uns' },
  { id: 'anschrift', title: 'Anschrift' },
  { id: 'danach', title: 'Was nach Ihrer Anfrage passiert' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kontakt: Primundus täglich 8–20 Uhr erreichen',
  description:
    'Primundus erreichen: 089 200 000 830 täglich 8–20 Uhr, WhatsApp, info@primundus.de. Büro Landsberger Str. 155, München. Preis und Pflegekräfte auch ohne Anruf im Kostenrechner.',
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
    a: 'Nein. Im Kostenrechner beantworten Sie ein paar Fragen zur Pflegesituation und sehen nach 2 Minuten Ihren Monatspreis, noch ohne Kontaktdaten. Anrufen können Sie, wenn Sie Fragen haben.',
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

const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe'
const KNOPF_HELL = 'inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-pm-ink/15 bg-white px-5 py-3 text-[16px] font-bold text-pm-ink transition-colors hover:border-pm-taupe min-h-[52px]'

/** Drei Wege, gleich gebaut: Augenbraue, große Angabe, Knopf. */
function Wege() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="flex flex-col rounded-[20px] bg-white p-6 shadow-lift">
        <p className={AUGENBRAUE}>Telefon</p>
        <a href="tel:+4989200000830" className="mt-3 text-[24px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink whitespace-nowrap hover:text-pm-taupe-ink min-[375px]:text-[26px] md:text-[21px] xl:text-[24px]">089 200 000 830</a>
        <p className="mt-2 text-[15px] leading-[1.5] text-pm-mute">Täglich 8–20 Uhr, auch am Wochenende</p>
        <div className="mt-auto pt-5">
          <a href="tel:+4989200000830" className={`${KNOPF} !min-h-[52px] !text-[16px] gap-3 !px-5`}>
            <Image src="/images/marta-kapcio-gesicht.jpg" alt="" width={64} height={64} className="h-7 w-7 rounded-full object-cover ring-2 ring-white/70" />
            Anrufen
          </a>
        </div>
      </div>
      <div className="flex flex-col rounded-[20px] bg-white p-6 shadow-lift">
        <p className={AUGENBRAUE}>WhatsApp</p>
        <p className="mt-3 text-[24px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink whitespace-nowrap min-[375px]:text-[26px] md:text-[21px] xl:text-[24px]">089 200 000 830</p>
        <p className="mt-2 text-[15px] leading-[1.5] text-pm-mute">Schreiben Sie, wann es Ihnen passt</p>
        <div className="mt-auto pt-5">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[16px] font-bold text-white transition-colors hover:bg-[#1FB854]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
          <span className="xl:hidden">WhatsApp</span><span className="hidden xl:inline">WhatsApp schreiben</span>
        </a>
        </div>
      </div>
      <div className="flex flex-col rounded-[20px] bg-white p-6 shadow-lift">
        <p className={AUGENBRAUE}>E-Mail</p>
        <a href="mailto:info@primundus.de" className="mt-3 whitespace-nowrap text-[21px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink hover:text-pm-taupe-ink min-[375px]:text-[22px] md:text-[16.5px] xl:text-[19px]">info@primundus.de</a>
        <p className="mt-2 text-[15px] leading-[1.5] text-pm-mute">Für Unterlagen und alles, was Zeit hat</p>
        <div className="mt-auto pt-5">
          <a href="mailto:info@primundus.de" className={KNOPF_HELL}><span className="xl:hidden">E-Mail</span><span className="hidden xl:inline">E-Mail schreiben</span></a>
        </div>
      </div>
    </div>
  )
}

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
          titel="Kontakt: Marta Kapcio erreichen Sie täglich von 8 bis 20 Uhr"
          einleitung={<>Rufen Sie an, schreiben Sie per WhatsApp oder E-Mail. Ihren Preis und passende Betreuungskräfte sehen Sie auch ohne Anruf: im Kostenrechner, in <strong className="text-pm-ink">2 Minuten</strong>, ohne Kontaktdaten. Für alles andere ist Marta Kapcio da, <strong className="text-pm-ink">täglich von 8 bis 20 Uhr</strong>.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="2 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          blickTitel="Auf einen Blick"
          blick={[
            'Telefon 089 200 000 830, täglich 8–20 Uhr',
            'WhatsApp an dieselbe Nummer',
            'E-Mail info@primundus.de',
            'Büro: Landsberger Str. 155, 80687 München',
            'Preis und Pflegekräfte online, ohne Kontaktdaten',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wege" titel="So erreichen Sie uns">
            <Wege />
            <Text>
              Am schnellsten geht es am Telefon: Marta Kapcio und ihr Team sind täglich von 8 bis 20 Uhr erreichbar, auch
              samstags und sonntags. Wenn Sie lieber schreiben, nutzen Sie WhatsApp oder E-Mail; Unterlagen wie einen
              Pflegegradbescheid schicken Sie am besten per E-Mail.
            </Text>
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
                { title: 'Preis sehen', desc: 'Im Kostenrechner oder am Telefon: Sie beantworten ein paar Fragen zur Pflegesituation und kennen Ihren Monatspreis, auch was nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleibt.', tag: 'Unter 2 Minuten' },
                { title: 'Pflegekräfte ansehen', desc: 'Mit Ihren Kontaktdaten speichern Sie die Berechnung und sehen passende Pflegekräfte mit Foto, Erfahrung und Deutschkenntnissen. Bewerbungen kommen am selben Werktag.', tag: 'Bewerbungen am selben Werktag' },
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
