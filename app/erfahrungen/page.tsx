import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { KontaktBand } from '@/components/ArticleCTA'
import { Fragen, MehrDazu, Punkte } from '@/components/vorlage/Ratgeber'
import { BewertungsListe } from '@/components/bewertungen/BewertungsListe'
import { BewertungsFormular } from '@/components/bewertungen/BewertungsFormular'
import { GoogleLogo, Sterne, TrustpilotLogo } from '@/components/bewertungen/Sterne'
import {
  BEWERTUNGEN, KUNDENSTIMMEN, KUNDENSTIMMEN_QUELLE, PROFILE, STAND,
  anzahlText, googleBewertungen, ladeDirekteBewertungen, schnitt, schnittText, verteilung, vonProfil,
} from '@/lib/bewertungen'
import { aktualisiertAm } from '@/lib/lastmod'
import { ORG_ID, WEBSITE_ID } from '@/lib/schema'

// „Primundus Erfahrungen und Bewertungen" (Martin 17.09.2026): Bewertungen aus Google
// (München, Hamburg) und Trustpilot im Wortlaut mit Quelle, darunter das Formular für
// eigene Bewertungen. Pflichtangabe nach § 5b Abs. 3 UWG: ob und wie wir prüfen, dass
// Bewertungen von Kunden stammen (Abschnitt „So prüfen wir Bewertungen").
// Kein Review-/AggregateRating-Markup, siehe lib/bewertungen.ts.

const SEITE_URL = 'https://primundus.de/erfahrungen'
const AKTUALISIERT = aktualisiertAm('erfahrungen', '17. September 2026')

// Direkt abgegebene Bewertungen neu laden, sobald das Backend live ist (lib/bewertungen.ts)
export const revalidate = 300

const H2 = 'text-[clamp(27px,3.2vw,38px)] font-extrabold leading-[1.1] tracking-[-0.032em] text-pm-ink [text-wrap:balance]'
const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe'
const SPRUNG = 'scroll-mt-[88px] md:scroll-mt-[150px]'

const google = googleBewertungen()
const G_SCHNITT = schnittText(schnitt(google))
const G_ANZAHL = google.length
const MUC = vonProfil('muenchen')
const HH = vonProfil('hamburg')
const TP = vonProfil('trustpilot')

const FRAGEN = [
  {
    q: 'Welche Erfahrungen machen Familien mit Primundus?',
    a: `Auf Google bewerten Familien Primundus mit ${G_SCHNITT} von 5 Sternen, aus ${G_ANZAHL} Rezensionen für die Standorte München und Hamburg (Stand ${STAND.sichtbar}). Gelobt werden vor allem schnelle Hilfe, reibungslose Abläufe und freundliche Ansprechpartner. Eine Rezension vergibt 4 Sterne. Alle Rezensionen stehen im Wortlaut auf dieser Seite.`,
  },
  {
    q: 'Ist Primundus seriös?',
    a: 'Primundus hat 20 Jahre Erfahrung in der 24-Stunden-Pflege und ist 6× Testsieger DIE WELT. Firmensitz und Registernummer stehen im Impressum: PRIMUNDUS Sp. z o.o., Warschau, KRS 0001259402. Die Betreuungskräfte sind bei der Unternehmensgruppe angestellt und arbeiten mit A1-Bescheinigung. Der Vertrag ist täglich kündbar.',
  },
  {
    q: 'Wie kann ich Primundus bewerten?',
    a: 'Direkt auf dieser Seite: Sterne wählen, Erfahrung beschreiben, Namen und E-Mail-Adresse angeben und die Bewertung über den Link in der E-Mail bestätigen. Wir prüfen sie und veröffentlichen sie danach hier. Sie können Primundus auch auf Google oder Trustpilot bewerten.',
  },
  {
    q: 'Veröffentlicht Primundus auch negative Bewertungen?',
    a: 'Ja. Wir veröffentlichen jede bestätigte Bewertung, auch mit einem Stern, solange sie keine Beleidigungen, Werbung oder Daten anderer Personen enthält. Von Google und Trustpilot zeigen wir alle Rezensionen unserer Profile, nicht nur die guten.',
  },
  {
    q: 'Sind die Bewertungen auf dieser Seite echt?',
    a: 'Jede Rezension von Google und Trustpilot ist mit ihrer Quelle verlinkt, dort können Sie sie nachlesen. Bewertungen, die Kunden hier abgeben, müssen per E-Mail bestätigt werden, bevor wir sie prüfen. Können wir die E-Mail-Adresse einer Betreuung bei Primundus zuordnen, steht an der Bewertung „Kunde bestätigt".',
  },
]

export const metadata: Metadata = {
  title: 'Primundus Erfahrungen und Bewertungen | 24-Stunden-Pflege',
  description: `Primundus Erfahrungen: ${G_SCHNITT} von 5 Sternen auf Google aus ${G_ANZAHL} Rezensionen (München, Hamburg). Alle Bewertungen im Wortlaut mit Quelle, dazu das Formular für Ihre eigene Bewertung.`,
  alternates: { canonical: SEITE_URL },
  openGraph: {
    title: 'Primundus Erfahrungen und Bewertungen',
    description: `${G_SCHNITT} von 5 Sternen auf Google. Alle Rezensionen im Wortlaut, mit Link zur Quelle.`,
    url: SEITE_URL,
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SEITE_URL}#webpage`,
    url: SEITE_URL,
    name: 'Primundus Erfahrungen und Bewertungen',
    inLanguage: 'de-DE',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    dateModified: AKTUALISIERT.iso,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Über uns', item: 'https://primundus.de/ueber-uns' },
      { '@type': 'ListItem', position: 3, name: 'Erfahrungen und Bewertungen', item: SEITE_URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

function ProfilZeile({ logo, titel, liste, href, zusatz }: { logo: ReactNode; titel: string; liste: { sterne: number }[]; href: string; zusatz?: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 py-3 border-b border-pm-line-soft last:border-0 text-[15.5px]"
      >
        {logo}
        <span className="min-w-0 flex-1 font-semibold text-pm-ink group-hover:text-pm-taupe-ink">{titel}</span>
        {zusatz ? (
          <span className="text-pm-mute whitespace-nowrap">{zusatz}</span>
        ) : (
          <span className="text-pm-body whitespace-nowrap [font-variant-numeric:tabular-nums]">
            <span className="font-bold text-pm-ink">{schnittText(schnitt(liste))}</span> · {anzahlText(liste.length, 'Rezension', 'Rezensionen')}
          </span>
        )}
        <span aria-hidden="true" className="text-pm-taupe group-hover:translate-x-0.5 transition-transform">→</span>
        <span className="sr-only">(öffnet in neuem Fenster)</span>
      </a>
    </li>
  )
}

export default async function ErfahrungenPage() {
  const direkt = await ladeDirekteBewertungen()
  const alle = [...direkt, ...BEWERTUNGEN].sort((a, b) => b.sortierDatum.localeCompare(a.sortierDatum))
  const stufen = verteilung(google)
  const max = Math.max(...stufen.map((s) => s.anzahl), 1)

  return (
    <>
      {schemaMarkup.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="bg-pm-paper">
        {/* ── Kopf ─────────────────────────────────────────────────────── */}
        <div className="bg-pm-shell">
          <div className="max-w-[1200px] mx-auto px-5 pt-6 pb-14 md:pt-8 md:pb-20">
            <nav aria-label="Brotkrumen" className="text-[14px] text-pm-mute flex items-center gap-2 flex-wrap">
              <a href="/" className="hover:text-pm-ink transition-colors">Startseite</a>
              <span aria-hidden="true">›</span>
              <a href="/ueber-uns" className="hover:text-pm-ink transition-colors">Über uns</a>
              <span aria-hidden="true">›</span>
              <span className="text-pm-body">Erfahrungen und Bewertungen</span>
            </nav>

            <div className="mt-8 md:mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:items-center">
              <div className="min-w-0">
                <p className={AUGENBRAUE}>Bewertungen</p>
                <h1 className="mt-4 text-[clamp(34px,4.4vw,50px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-pm-ink [text-wrap:balance] max-sm:hyphens-auto">
                  Primundus Erfahrungen und Bewertungen
                </h1>
                <p className="mt-6 text-[19px] md:text-[20px] leading-[1.6] text-pm-body max-w-[56ch] [text-wrap:pretty]">
                  Familien bewerten Primundus auf Google mit {G_SCHNITT} von 5 Sternen, aus {G_ANZAHL} Rezensionen für unsere Standorte München und Hamburg.
                  Hier lesen Sie jede Rezension im Wortlaut, mit Link zur Quelle. Sind Sie selbst Kunde, können Sie Primundus direkt auf dieser Seite bewerten.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <a
                    href="#bewerten"
                    className="inline-flex items-center justify-center min-h-[56px] px-8 rounded-full bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[17px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
                  >
                    Bewertung schreiben
                  </a>
                  <a href="#bewertungen" className="text-[17px] font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-ink">
                    Alle Bewertungen lesen
                  </a>
                </div>
                <p className="mt-6 text-[14px] text-pm-mute">
                  <span className="whitespace-nowrap">Aktualisiert am {AKTUALISIERT.sichtbar}</span> ·{' '}
                  <a href="#pruefung" className="underline underline-offset-4 hover:text-pm-ink whitespace-nowrap">So prüfen wir Bewertungen</a>
                </p>
              </div>

              <aside aria-label="Bewertungen im Überblick" className="bg-white rounded-[24px] shadow-lift p-6 md:p-8">
                <p className={`${AUGENBRAUE} flex items-center gap-2`}>
                  <GoogleLogo groesse={16} /> Google-Bewertungen
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-[56px] font-extrabold leading-none tracking-[-0.04em] text-pm-ink [font-variant-numeric:tabular-nums]">{G_SCHNITT}</span>
                  <span>
                    <Sterne wert={schnitt(google)} groesse={22} />
                    <span className="mt-1 block text-[15px] text-pm-body">aus {anzahlText(G_ANZAHL, 'Rezension', 'Rezensionen')}</span>
                  </span>
                </div>

                <ul className="mt-6 grid gap-1.5" aria-label="Verteilung der Sterne">
                  {stufen.map((s) => (
                    <li key={s.sterne} className="flex items-center gap-3 text-[14px] text-pm-body [font-variant-numeric:tabular-nums]">
                      <span className="w-14 whitespace-nowrap">{s.sterne} {s.sterne === 1 ? 'Stern' : 'Sterne'}</span>
                      <span className="flex-1 h-2 rounded-full bg-pm-line-soft overflow-hidden" aria-hidden="true">
                        <span className="block h-full rounded-full bg-pm-gold" style={{ width: `${(s.anzahl / max) * 100}%` }} />
                      </span>
                      <span className="w-4 text-right">{s.anzahl}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 pt-2 border-t border-pm-line">
                  <ProfilZeile logo={<GoogleLogo />} titel="Google · München" liste={MUC} href={PROFILE.muenchen.url} />
                  <ProfilZeile logo={<GoogleLogo />} titel="Google · Hamburg" liste={HH} href={PROFILE.hamburg.url} />
                  <ProfilZeile
                    logo={<TrustpilotLogo />}
                    titel="Trustpilot"
                    liste={TP}
                    href={PROFILE.trustpilot.url}
                    zusatz={anzahlText(TP.length, 'Bewertung', 'Bewertungen')}
                  />
                </ul>
                <p className="mt-4 text-[13px] leading-[1.5] text-pm-mute">Stand {STAND.sichtbar}. Google und Trustpilot prüfen nicht, ob Verfasser Kunden sind.</p>
              </aside>
            </div>
          </div>
        </div>

        {/* ── Alle Bewertungen ─────────────────────────────────────────── */}
        <section id="bewertungen" className={`${SPRUNG} max-w-[1200px] mx-auto px-5 pt-16 md:pt-24`}>
          <div className="max-w-[46rem]">
            <h2 className={H2}>Was Familien über Primundus schreiben</h2>
            <p className="mt-5 text-[18px] leading-[1.7] text-pm-body [text-wrap:pretty]">
              Alle Rezensionen unserer Google-Profile und von Trustpilot, auch die mit weniger als 5 Sternen. Die neuesten stehen oben. Zeitangaben wie in der
              Quelle, Stand {STAND.sichtbar}.
            </p>
          </div>
          <div className="mt-8">
            <BewertungsListe bewertungen={alle} />
          </div>

          {KUNDENSTIMMEN.length > 0 && (
            <div className="mt-12 md:mt-16">
              <h3 className="text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-pm-ink">Kundenstimmen aus Hamburg</h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-pm-body max-w-[60ch]">
                Rückmeldungen ohne Sterne, deshalb nicht im Durchschnitt. Zuerst veröffentlicht auf{' '}
                <a href={KUNDENSTIMMEN_QUELLE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-pm-ink">
                  primundus-hamburg.de
                </a>
                .
              </p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {KUNDENSTIMMEN.map((k) => (
                  <li key={k.name}>
                    <figure className="h-full rounded-[20px] border border-pm-line bg-white/60 p-6">
                      <blockquote className="text-[16.5px] leading-[1.65] text-pm-body">„{k.text}“</blockquote>
                      <figcaption className="mt-4 text-[15px]">
                        <span className="font-semibold text-pm-ink">{k.name}</span>
                        <span className="text-pm-mute">, {k.ort}</span>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* ── Bewertung schreiben ──────────────────────────────────────── */}
        <section id="bewerten" className={`${SPRUNG} mt-16 md:mt-24 bg-pm-shell`}>
          <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-24 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)] lg:gap-16">
            <div className="min-w-0">
              <p className={AUGENBRAUE}>Für Kunden</p>
              <h2 className={`mt-4 ${H2}`}>Wie war Ihre Erfahrung mit Primundus?</h2>
              <p className="mt-5 text-[18px] leading-[1.7] text-pm-body max-w-[48ch]">
                Ihre Bewertung hilft Familien, die gerade eine Betreuung suchen. Wir veröffentlichen gute und kritische Bewertungen.
              </p>
              <ol className="mt-8 border-t border-pm-line max-w-[30rem]">
                {[
                  ['Sterne und Text', 'Beschreiben Sie, was gut lief und was nicht.'],
                  ['E-Mail bestätigen', 'Sie bekommen einen Link. Erst mit dem Klick zählt die Bewertung.'],
                  ['Prüfen und veröffentlichen', 'Wir lesen jede Bewertung, bevor sie hier erscheint.'],
                ].map(([titel, text], i) => (
                  <li key={titel} className="flex gap-4 py-4 border-b border-pm-line">
                    <span aria-hidden="true" className="w-8 h-8 rounded-full border-2 border-pm-line bg-white text-pm-ink font-bold text-[14px] flex items-center justify-center flex-none">
                      {i + 1}
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span className="block text-[17px] font-bold leading-[1.35] text-pm-ink">{titel}</span>
                      <span className="block mt-0.5 text-[16px] leading-[1.55] text-pm-body">{text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[16px] leading-[1.6] text-pm-body">
                Lieber auf Google?{' '}
                <a
                  href={PROFILE.muenchen.bewertenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-ink"
                >
                  <GoogleLogo groesse={15} /> Primundus auf Google bewerten
                </a>
              </p>
            </div>
            <div className="min-w-0">
              <BewertungsFormular />
            </div>
          </div>
        </section>

        {/* ── Prüfung (§ 5b Abs. 3 UWG) ────────────────────────────────── */}
        <section id="pruefung" className={`${SPRUNG} max-w-[1200px] mx-auto px-5 pt-16 md:pt-24`}>
          <div className="max-w-[46rem]">
            <h2 className={H2}>So prüfen wir Bewertungen</h2>
            <p className="mt-5 text-[18px] leading-[1.7] text-pm-body">
              Auf dieser Seite stehen Bewertungen aus drei Quellen. Für jede gilt eine andere Prüfung.
            </p>
            <div className="mt-8">
              <Punkte
                punkte={[
                  {
                    title: 'Google und Trustpilot',
                    desc: `Wir übernehmen alle Rezensionen unserer Google-Profile München und Hamburg und von Trustpilot im Wortlaut und verlinken die Quelle. Google und Trustpilot prüfen nicht, ob die Verfasser Kunden von Primundus sind. Nachnamen kürzen wir auf den Anfangsbuchstaben. Stand: ${STAND.sichtbar}.`,
                  },
                  {
                    title: 'Bewertungen über das Formular',
                    desc: 'Jede Bewertung muss über einen Link per E-Mail bestätigt werden. Danach prüfen wir, ob die E-Mail-Adresse zu einer Betreuung bei Primundus gehört. Passt sie, steht an der Bewertung „Kunde bestätigt". Bewertungen ohne diesen Hinweis konnten wir keinem Kundenkonto zuordnen.',
                  },
                  {
                    title: 'Was wir nicht veröffentlichen',
                    desc: 'Beleidigungen, Werbung, Links und Angaben, die andere Personen erkennbar machen, etwa volle Namen von Betreuungskräften oder Gesundheitsdaten. Kritik veröffentlichen wir, und wir können unter der Bewertung antworten.',
                  },
                  {
                    title: 'Keine Gegenleistung',
                    desc: 'Für eine Bewertung gibt es bei Primundus kein Geld, keinen Rabatt und kein Geschenk.',
                  },
                  {
                    title: 'Kundenstimmen aus Hamburg',
                    desc: 'Diese Rückmeldungen standen auf unserer früheren Hamburger Website. Sie haben keine Sterne und zählen nicht zum Durchschnitt.',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── Häufige Fragen ───────────────────────────────────────────── */}
        <section id="faq" className={`${SPRUNG} max-w-[1200px] mx-auto px-5 pt-16 md:pt-24 pb-20 md:pb-24`}>
          <div className="max-w-[46rem]">
            <h2 className={H2}>Häufige Fragen</h2>
            <div className="mt-8">
              <Fragen fragen={FRAGEN} />
            </div>
            <div className="mt-10">
              <MehrDazu
                label="Mehr über Primundus:"
                links={[
                  { href: '/testsieger-24-stunden-pflege', text: 'Testsieger-Auszeichnung' },
                  { href: '/ueber-uns', text: 'Über uns' },
                  { href: '/qualitaet', text: 'Qualität & Standards' },
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      <KontaktBand />
    </>
  )
}
