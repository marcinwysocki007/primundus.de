import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { VergleichDuell } from '@/components/VergleichDuell'
import { ANBIETER, STAND } from '@/lib/anbieterVergleich'

const PH = ANBIETER.find((a) => a.slug === 'promedica24')!

export const metadata: Metadata = {
  title: 'Promedica24-Alternative? Primundus im direkten Vergleich',
  description:
    'Promedica24 oder Primundus: Preisliste oder Preis nach 2 Minuten, Auswahl der Betreuungskraft, Mindestlaufzeit und Gebühren im Vergleich.',
  alternates: { canonical: 'https://primundus.de/promedica24-alternative' },
  openGraph: {
    title: 'Promedica24 oder Primundus? Der direkte Vergleich',
    description:
      'Zwei Wege zur 24-Stunden-Pflege: Preisliste und Beratung vor Ort oder Preis und Kräfte online nach Eingabe der Kontaktdaten.',
    url: 'https://primundus.de/promedica24-alternative',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const faqs = [
  {
    q: 'Ist Primundus eine Alternative zu Promedica24?',
    a: `Ja — mit einem anderen Weg zur Betreuungskraft: Bei Primundus sehen Sie Preis und passende Betreuungskräfte online, direkt nach Eingabe der Kontaktdaten, und wählen selbst aus. Promedica24 beschreibt auf der Startseite, dass Mitarbeiter der Hauptstelle in Warschau die Betreuungskraft aus einem Pool von über 6.800 Kräften aussuchen; eine Landingpage nennt die Auswahl gemeinsam mit dem Berater (eigene Angaben, Stand ${STAND}).`,
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei Promedica24?',
    a: 'Promedica24 veröffentlicht eine Preisliste mit drei Paketen und Tagespreisen ab 105 €; Betreuungs- und Vermittlungsgebühren sind laut Preisseite im Tagespreis enthalten, andere Seiten nennen einen Verzicht auf Vermittlungsgebühren. Ein preisliches Angebot gibt es laut FAQ nach individueller Beratung. Primundus beginnt bei 2.150 € im Monat; Ihren Preis berechnet der Kostenrechner in 2 Minuten, direkt nach Eingabe der Kontaktdaten.',
  },
  {
    q: 'Kann ich bei Promedica24 die Betreuungskraft selbst auswählen?',
    a: 'Promedica24 beschreibt das an zwei Stellen unterschiedlich: Auf der Startseite suchen Mitarbeiter der Hauptstelle die Betreuungskraft aus, auf einer Landingpage wählen Familie und Berater die Betreuungskraft gemeinsam vor dem Angebot aus. Bei Primundus sehen Sie die Profile direkt mit dem Angebot, vergleichen selbst und unterschreiben erst nach Ihrer Auswahl.',
  },
  {
    q: 'Gibt es bei Primundus eine Mindestvertragslaufzeit?',
    a: 'Nein. Primundus-Verträge haben keine Mindestlaufzeit, sind täglich kündbar und werden taggenau abgerechnet. Die öffentlich abrufbare Franchise-FAQ von Promedica24 nennt für Kundenverträge eine Mindestvertragslaufzeit von 2 Monaten; eine Kündigungsfrist nennt die Website nicht.',
  },
]

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Anbieter-Vergleich', item: 'https://primundus.de/anbieter-vergleich' },
      { '@type': 'ListItem', position: 3, name: 'Promedica24-Alternative', item: 'https://primundus.de/promedica24-alternative' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          {/* Breadcrumb */}
          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span aria-hidden="true">›</span>
            <a href="/anbieter-vergleich" className="hover:text-pm-taupe transition-colors">Anbieter-Vergleich</a>
            <span aria-hidden="true">›</span>
            <span className="text-pm-ink">Promedica24-Alternative</span>
          </nav>

          {/* Header */}
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Anbieter-Vergleich · Stand {STAND}
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Promedica24 oder Primundus? Der direkte Vergleich
          </h1>
          <p className="text-[16px] text-pm-body leading-relaxed mb-6 max-w-[720px]">
            Wer eine Alternative zu Promedica24 sucht, vergleicht meist drei Dinge: Was kostet die Betreuung,
            wer wählt die Betreuungskraft aus, und wie lange binde ich mich? Hier sind die Angaben beider
            Anbieter — Punkt für Punkt, mit Quellenangabe.
          </p>

          {/* TL;DR */}
          <div className="bg-white border border-pm-line rounded-2xl p-5 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-taupe mb-2">Das Wichtigste in Kürze</p>
            <p className="text-[14px] text-pm-ink leading-relaxed">
              <strong>Promedica24</strong> ist ein Entsende-Anbieter mit Franchise-Partnern vor Ort
              (Promedica Plus). Die Preisliste nennt Tagespreise ab 105 €, ein preisliches Angebot gibt es
              laut FAQ nach individueller Beratung; die Betreuungskraft suchen laut Startseite Mitarbeiter der
              Hauptstelle aus einem Pool von über 6.800 Kräften aus. <strong>Primundus</strong> zeigt
              Preis <em>und</em> passende Betreuungskräfte online, direkt nach Eingabe der Kontaktdaten — Sie
              wählen Ihre Betreuungskraft aus, <em>bevor</em> ein Vertrag unterschrieben wird. Ab 2.150 €/Monat
              zzgl. An- und Abreise 125 € je Strecke, ohne Vermittlungsgebühr, ohne Mindestlaufzeit, taggenau
              abgerechnet.
            </p>
            <p className="text-[14px] text-pm-ink leading-relaxed mt-3">
              <strong>Kurz:</strong> Bei Promedica24 führt der Weg über die Beratung vor Ort; die öffentlich abrufbare
              Franchise-FAQ nennt für Kundenverträge eine Mindestvertragslaufzeit von 2 Monaten. Bei Primundus sehen
              Sie Preis und passende Kräfte online nach Eingabe der Kontaktdaten, wählen selbst aus und unterschreiben
              erst danach, ohne Mindestlaufzeit.
            </p>
          </div>

          {/* Duell-Tabelle: gemeinsamer Baustein, auf dem Handy als Karten (Optik-Plan Stufe 0) */}
          <VergleichDuell anbieter={PH} />

          {/* Worin Promedica24 stark ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-4">Worin Promedica24 stark ist</h2>
            <div className="bg-white border border-pm-line rounded-2xl p-5">
              <p className="text-[14px] text-pm-body leading-relaxed">
                Promedica24 verweist auf einen Pool von über 6.800 Betreuungskräften. Über die Franchise-Partner von Promedica Plus gibt es persönliche
                Ansprechpartner vor Ort, die während der gesamten Betreuungszeit begleiten. Promedica24
                veröffentlicht eine Preisliste, nennt einen deutschsprachigen Kundenservice rund um die Uhr und
                laut Franchise-FAQ eine tagesgenaue Abrechnung. Für Familien, die Beratung zu Hause und einen
                Ansprechpartner vor Ort schätzen, kann dieses Modell passen.
              </p>
            </div>
          </section>

          {/* Worin Primundus anders ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-4">Worin Primundus anders ist</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { t: 'Individueller Preis in 2 Minuten', d: 'Sie beantworten wenige Fragen zur Pflegesituation, geben Ihre Kontaktdaten ein und sehen sofort Ihren Preis samt Zuschüssen — ohne Rückruf, ohne Termin.' },
                { t: 'Betreuungskräfte mit dem Angebot', d: 'Direkt mit dem Angebot sehen Sie passende Betreuungskräfte mit Erfahrung und Sprachkenntnissen — und können vergleichen.' },
                { t: 'Selbst auswählen, dann Vertrag', d: 'Sie wählen selbst aus den passenden Profilen aus. Erst nach Ihrer Auswahl unterschreiben Sie den Vertrag.' },
                { t: 'Keine Vermittlungsgebühr, keine Mindestlaufzeit', d: 'Keine Vermittlungs- oder Aufnahmegebühr, keine Mindestlaufzeit — täglich kündbar. An- und Abreise werden mit 125 € je Strecke gesondert berechnet.' },
                { t: 'Testsieger 6× in Folge', d: 'DIE WELT hat Primundus sechsmal in Folge ausgezeichnet. Betreuung ab 2.150 €/Monat, zzgl. An- und Abreise 125 € je Strecke.' },
              ].map((x) => (
                <div key={x.t} className="bg-white border border-pm-line rounded-2xl p-4">
                  <p className="text-[14px] font-bold text-pm-ink mb-1">{x.t}</p>
                  <p className="text-[13px] text-pm-body leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] font-semibold mt-3">
              <a href="/testsieger-24-stunden-pflege" className="text-pm-taupe hover:underline">→ Die Auszeichnung im Detail: Testsieger 24-Stunden-Pflege</a>
            </p>
          </section>

          {/* Ablauf-Vergleich */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-6">So läuft es bei beiden ab</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-pm-taupe rounded-2xl p-5">
                <p className="text-[13px] font-bold text-pm-taupe mb-3">Primundus</p>
                <ol className="space-y-2.5">
                  {[
                    'Fragen beantworten, Kontaktdaten eingeben: Preis in unter 2 Minuten',
                    'Passende Betreuungskräfte im Kundenportal ansehen und vergleichen',
                    'Auswählen — erst dann Vertrag; Anreise in 3 Tagen möglich',
                  ].map((s, i) => (
                    <li key={s} className="flex gap-2.5 text-[13px] text-pm-ink leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-pm-taupe text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white border border-pm-line rounded-2xl p-5">
                <p className="text-[13px] font-bold text-pm-ink mb-3">Promedica24 (eigene Darstellung)</p>
                <ol className="space-y-2.5">
                  {[
                    'Telefonisches Erstgespräch mit einem Berater aus der Region',
                    'Beratungstermin zu Hause',
                    'Die Hauptstelle in Warschau sucht eine Betreuungskraft aus dem Pool heraus (Startseite; eine Landingpage nennt die Auswahl gemeinsam mit dem Berater)',
                    'Organisation und Anreise, dann Betreuungsstart',
                  ].map((s, i) => (
                    <li key={s} className="flex gap-2.5 text-[13px] text-pm-body leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-pm-line text-pm-body text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <ArticleCTA />

          {/* FAQ */}
          <section className="mt-14 mb-14">
            <h2 className="text-[22px] font-bold text-pm-ink mb-6">Häufige Fragen</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white border border-pm-line rounded-xl px-5 py-4 group">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-pm-ink pr-2">{f.q}</h3>
                    <span className="text-pm-taupe font-bold text-[18px] leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[14px] text-pm-body leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Rechtlicher Hinweis */}
          <p className="text-[12px] text-pm-mute leading-relaxed">
            Promedica24 und Promedica Plus sind Marken der PROMEDICA24-Gruppe; Primundus steht in keiner
            Verbindung zu Promedica24. Alle Angaben zu Promedica24 stammen von promedica24.de einschließlich der
            Seiten für Franchise-Partner (Stand {STAND}) —
            Konditionen können sich ändern. Sollte eine Angabe nicht mehr aktuell sein, korrigieren wir sie
            umgehend: <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>.
          </p>

        </div>
      </div>
    </>
  )
}
