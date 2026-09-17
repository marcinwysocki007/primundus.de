import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { KontaktBand } from '@/components/ArticleCTA'
import { Fragen, MehrDazu, Punkte } from '@/components/vorlage/Ratgeber'
import { BewertungsListe } from '@/components/bewertungen/BewertungsListe'
import { BewertungsFormular } from '@/components/bewertungen/BewertungsFormular'
import { GoogleLogo, Sterne, TrustpilotLogo } from '@/components/bewertungen/Sterne'
import {
  KUNDENSTIMMEN, KUNDENSTIMMEN_QUELLE, PROFILE, STAND,
  TRUSTPILOT_SICHTBAR, alleBewertungen, anzahlText, ladeDirekteBewertungen, nachQuelle, schnitt, schnittText, verteilung, vonProfil,
} from '@/lib/bewertungen'
import { ladeGoogleDaten } from '@/lib/google-bewertungen'
import { PrimundusMarke } from '@/components/bewertungen/Sterne'
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

// Trustpilot erst ab 5 Bewertungen (lib/bewertungen.ts)
const TP_AN = TRUSTPILOT_SICHTBAR
const TP = vonProfil('trustpilot')
const EXTERN = TP_AN ? 'Google und Trustpilot' : 'Google'
const EXTERN_PRUEFT = TP_AN ? 'Google und Trustpilot prüfen' : 'Google prüft'
function aufzaehlung(teile: string[]): string {
  return teile.length < 2 ? teile.join('') : `${teile.slice(0, -1).join(', ')} und ${teile[teile.length - 1]}`
}

// Alles, was sich ohne Deploy ändert: Google (Places API, alle 6 Std.) und Backend
// (Formular und Admin-Einträge, alle 5 Min.). fetch-Ergebnisse teilen sich Metadaten und Seite.
async function laden() {
  const [backend, google] = await Promise.all([ladeDirekteBewertungen(), ladeGoogleDaten()])
  const alle = alleBewertungen(google.bewertungen, backend)
  const googleListe = nachQuelle('google', alle)
  return {
    alle,
    google,
    googleAnzahl: googleListe.length,
    direkt: nachQuelle('primundus', alle),
    schnitt: schnittText(schnitt(alle)),
  }
}
type Daten = Awaited<ReturnType<typeof laden>>

function fragen(d: Daten) {
  return [
    {
      q: 'Welche Erfahrungen machen Familien mit Primundus?',
      a: `Familien bewerten Primundus mit ${d.schnitt} von 5 Sternen, aus ${d.alle.length} Bewertungen: ${aufzaehlung([`${d.direkt.length} direkt an Primundus`, `${d.googleAnzahl} auf Google`, ...(TP_AN ? [`${TP.length} auf Trustpilot`] : [])])}. Gelobt werden die passende Betreuungskraft, Erreichbarkeit auch am Wochenende, klare Kosten und die eigene Auswahl der Betreuungskraft. Kritik gibt es an Wechseln nach der ersten Betreuungskraft und an verspäteten Anreisen.`,
    },
    {
      q: 'Ist Primundus seriös?',
      a: 'Primundus hat 20 Jahre Erfahrung in der 24-Stunden-Pflege und ist 6× Testsieger DIE WELT. Firmensitz und Registernummer stehen im Impressum: PRIMUNDUS Sp. z o.o., Warschau, KRS 0001259402. Die Betreuungskräfte sind bei der Unternehmensgruppe angestellt und arbeiten mit A1-Bescheinigung. Der Vertrag ist täglich kündbar.',
    },
    {
      q: 'Wie kann ich Primundus bewerten?',
      a: `Direkt auf dieser Seite: Sterne wählen, Erfahrung beschreiben, Namen und E-Mail-Adresse angeben und die Bewertung über den Link in der E-Mail bestätigen. Wir prüfen sie und veröffentlichen sie danach hier. Sie können Primundus auch auf ${TP_AN ? 'Google oder Trustpilot' : 'Google'} bewerten.`,
    },
    {
      q: 'Veröffentlicht Primundus auch negative Bewertungen?',
      a: `Ja. Wir veröffentlichen jede bestätigte Bewertung, auch mit einem Stern, solange sie keine Beleidigungen, Werbung oder Daten anderer Personen enthält. Auf dieser Seite stehen auch Bewertungen mit drei und vier Sternen, von ${EXTERN} alle Rezensionen unserer Profile.`,
    },
    {
      q: 'Sind die Bewertungen auf dieser Seite echt?',
      a: `Rezensionen von ${EXTERN} sind mit ihrer Quelle verlinkt. Die Rückmeldungen direkt an Primundus haben uns Familien geschickt, wir zeigen sie im Wortlaut mit Datum und Ort. Bewertungen über das Formular auf dieser Seite müssen per E-Mail bestätigt werden, bevor wir sie prüfen. Passt die Adresse zu einer Betreuung, steht an der Bewertung „Kunde bestätigt".`,
    },
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  const d = await laden()
  return {
    // Titel ≤ 60, Beschreibung ≤ 155 Zeichen (sonst kürzt Google). Zahlen live aus den Bewertungen.
    title: `Primundus Erfahrungen: ${d.schnitt} von 5 Sternen aus ${d.alle.length} Bewertungen`,
    description: `Erfahrungen mit der 24-Stunden-Pflege von Primundus: ${d.alle.length} Bewertungen von Familien im Wortlaut, auch die kritischen. Jetzt selbst bewerten.`,
    alternates: { canonical: SEITE_URL },
    openGraph: {
      title: `Primundus Erfahrungen: ${d.schnitt} von 5 Sternen`,
      description: `${d.alle.length} Bewertungen von Familien zur 24-Stunden-Pflege, alle im Wortlaut, auch die kritischen.`,
      url: SEITE_URL,
      siteName: 'Primundus',
      locale: 'de_DE',
      type: 'website',
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    },
  }
}

function schemaMarkup(d: Daten) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SEITE_URL}#webpage`,
      url: SEITE_URL,
      name: 'Primundus Erfahrungen und Bewertungen',
      description: `${d.alle.length} Bewertungen von Familien zur 24-Stunden-Pflege von Primundus im Wortlaut.`,
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
      mainEntity: fragen(d).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]
}

function ProfilZeile({
  logo, titel, liste, href, zusatz, einheit = ['Rezension', 'Rezensionen'], stand,
}: {
  logo: ReactNode
  titel: string
  liste: { sterne: number }[]
  href?: string
  zusatz?: string
  einheit?: [string, string]
  /** Schnitt und Anzahl von der Quelle selbst (Google), sonst aus liste gerechnet */
  stand?: { schnitt: number; anzahl: number }
}) {
  const wert = stand ? stand.schnitt : schnitt(liste)
  const anzahl = stand ? stand.anzahl : liste.length
  const innen = (
    <>
        {logo}
        <span className="min-w-0 flex-1 font-semibold text-pm-ink group-hover:text-pm-taupe-ink">{titel}</span>
        {zusatz ? (
          <span className="text-pm-mute whitespace-nowrap">{zusatz}</span>
        ) : (
          <span className="text-pm-body whitespace-nowrap [font-variant-numeric:tabular-nums]">
            <span className="font-bold text-pm-ink">{schnittText(wert)}</span> · {anzahlText(anzahl, einheit[0], einheit[1])}
          </span>
        )}
      {href && (
        <>
          <span aria-hidden="true" className="text-pm-taupe group-hover:translate-x-0.5 transition-transform">→</span>
          <span className="sr-only">(öffnet in neuem Fenster)</span>
        </>
      )}
    </>
  )
  const zeile = 'group flex items-center gap-3 py-3 text-[15.5px]'
  return (
    <li className="border-b border-pm-line-soft last:border-0">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={zeile}>
          {innen}
        </a>
      ) : (
        <div className={zeile}>{innen}</div>
      )}
    </li>
  )
}

export default async function ErfahrungenPage() {
  const d = await laden()
  const { alle } = d
  const stufen = verteilung(alle)
  const max = Math.max(...stufen.map((s) => s.anzahl), 1)

  return (
    <>
      {schemaMarkup(d).map((s, i) => (
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
                  Familien bewerten Primundus mit {schnittText(schnitt(alle))} von 5 Sternen, aus {alle.length} Bewertungen:{' '}
                  {TP_AN ? 'Rückmeldungen direkt an uns, Google-Rezensionen für München und Hamburg und Trustpilot.' : 'Rückmeldungen direkt an uns und Google-Rezensionen für München und Hamburg.'}{' '}
                  Hier lesen Sie jede im Wortlaut, auch die kritischen. Sind Sie selbst Kunde,
                  können Sie Primundus direkt auf dieser Seite bewerten.
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
                <p className={AUGENBRAUE}>Alle Bewertungen</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-[56px] font-extrabold leading-none tracking-[-0.04em] text-pm-ink [font-variant-numeric:tabular-nums]">
                    {schnittText(schnitt(alle))}
                  </span>
                  <span>
                    <Sterne wert={schnitt(alle)} groesse={22} />
                    <span className="mt-1 block text-[15px] text-pm-body">aus {anzahlText(alle.length, 'Bewertung', 'Bewertungen')}</span>
                  </span>
                </div>

                <ul className="mt-6 grid gap-1.5" aria-label="Verteilung der Sterne">
                  {stufen.map((s) => (
                    <li key={s.sterne} className="flex items-center gap-3 text-[14px] text-pm-body [font-variant-numeric:tabular-nums]">
                      <span className="w-14 whitespace-nowrap">{s.sterne} {s.sterne === 1 ? 'Stern' : 'Sterne'}</span>
                      <span className="flex-1 h-2 rounded-full bg-pm-line-soft overflow-hidden" aria-hidden="true">
                        <span className="block h-full rounded-full bg-pm-gold" style={{ width: `${(s.anzahl / max) * 100}%` }} />
                      </span>
                      <span className="w-8 text-right">{s.anzahl}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 pt-2 border-t border-pm-line">
                  <ProfilZeile logo={<PrimundusMarke />} titel="Primundus" liste={nachQuelle('primundus', alle)} einheit={['Bewertung', 'Bewertungen']} />
                  <ProfilZeile logo={<GoogleLogo />} titel="München" liste={[]} stand={d.google.profile.muenchen} href={PROFILE.muenchen.url} />
                  <ProfilZeile logo={<GoogleLogo />} titel="Hamburg" liste={[]} stand={d.google.profile.hamburg} href={PROFILE.hamburg.url} />
                  {TP_AN && (
                    <ProfilZeile
                      logo={<TrustpilotLogo />}
                      titel="Trustpilot"
                      liste={TP}
                      href={PROFILE.trustpilot.url}
                      zusatz={anzahlText(TP.length, 'Bewertung', 'Bewertungen')}
                    />
                  )}
                </ul>
                <p className="mt-4 text-[13px] leading-[1.5] text-pm-mute">
                  {d.google.live ? 'Google-Werte laufend aktualisiert.' : `Stand ${STAND.sichtbar}.`} {EXTERN_PRUEFT} nicht, ob Verfasser Kunden sind.
                </p>
              </aside>
            </div>
          </div>
        </div>

        {/* ── Alle Bewertungen ─────────────────────────────────────────── */}
        <section id="bewertungen" className={`${SPRUNG} max-w-[1200px] mx-auto px-5 pt-16 md:pt-24`}>
          <div className="max-w-[46rem]">
            <h2 className={H2}>Was Familien über Primundus schreiben</h2>
            <p className="mt-5 text-[18px] leading-[1.7] text-pm-body [text-wrap:pretty]">
              Alle Bewertungen im Wortlaut, auch die mit drei und vier Sternen. Die neuesten stehen oben.
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
              Die Bewertungen auf dieser Seite kommen auf verschiedenen Wegen zu uns. Für jeden Weg steht hier, woher sie stammen und was wir prüfen.
            </p>
            <div className="mt-8">
              <Punkte
                punkte={[
                  {
                    title: 'Rückmeldungen direkt an Primundus',
                    desc: 'Diese Bewertungen haben uns Familien direkt geschickt, nicht über das Formular auf dieser Seite. Wir zeigen sie im Wortlaut mit Sternen, Datum und Ort, auch die mit drei und vier Sternen. Nachnamen kürzen wir auf den Anfangsbuchstaben.',
                  },
                  {
                    title: EXTERN,
                    desc: d.google.live
                      ? `Rezensionen unserer Google-Profile München und Hamburg${TP_AN ? ' und von Trustpilot' : ''} erscheinen hier im Wortlaut und mit Link zur Quelle. Google-Rezensionen holen wir automatisch über die Google-Schnittstelle, mit dem Namen wie bei Google. ${EXTERN_PRUEFT} nicht, ob die Verfasser Kunden von Primundus sind.`
                      : `Wir übernehmen alle Rezensionen unserer Google-Profile München und Hamburg${TP_AN ? ' und von Trustpilot' : ''} im Wortlaut und verlinken die Quelle. ${EXTERN_PRUEFT} nicht, ob die Verfasser Kunden von Primundus sind. Nachnamen kürzen wir auf den Anfangsbuchstaben. Stand: ${STAND.sichtbar}.`,
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
              <Fragen fragen={fragen(d)} />
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
