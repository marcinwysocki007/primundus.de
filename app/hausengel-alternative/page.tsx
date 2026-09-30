import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { VergleichDuell } from '@/components/VergleichDuell'
import { ANBIETER, STAND } from '@/lib/anbieterVergleich'

const PH = ANBIETER.find((a) => a.slug === 'hausengel')!

export const metadata: Metadata = {
  title: 'Hausengel-Alternative? Primundus im direkten Vergleich',
  description:
    'Hausengel oder Primundus: angestellte statt selbstständige Kräfte, Preis online nach Kontaktdaten statt nach Beratung, Gebühren und Kündigung.',
  alternates: { canonical: 'https://primundus.de/hausengel-alternative' },
  openGraph: {
    title: 'Hausengel oder Primundus? Der direkte Vergleich',
    description:
      'Zwei Modelle der 24-Stunden-Pflege: selbstständige Betreuungskräfte oder bei Primundus angestelltes Personal. Der Faktenvergleich.',
    url: 'https://primundus.de/hausengel-alternative',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const faqs = [
  {
    q: 'Ist Primundus eine Alternative zu Hausengel?',
    a: 'Ja — mit einem anderen Beschäftigungsmodell: Hausengel arbeitet mit selbstständigen Betreuungskräften, bei Primundus sind die Betreuungskräfte angestellt und werden über das Entsendemodell mit A1-Bescheinigung eingesetzt. Dazu sehen Sie bei Primundus Preis und passende Kräfte online, direkt nach Eingabe der Kontaktdaten und vor jedem Vertrag.',
  },
  {
    q: 'Was ist der Unterschied zwischen selbstständigen und angestellten Betreuungskräften?',
    a: 'Bei selbstständigen Kräften schließt die Familie den Betreuungsvertrag mit der Kraft selbst; bei Hausengel ist das laut Mustervertrag eine Franchisenehmerin oder ein Franchisenehmer der Hausengel Holding. Bei Primundus werden die Betreuungskräfte im Entsendemodell mit A1-Bescheinigung eingesetzt; den Betreuungsvertrag schließt die Familie mit Primundus.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei Hausengel im Vergleich?',
    a: 'Hausengel nennt Kosten ab 2.500 € im Monat und rechnet auf der Website ein Beispiel vor: Gesamtbelastung 3.010 € im Monat, darin 220 € für die Vermittlung (laut Hausengel in der Regel über die Pflegekasse erstattungsfähig) und ca. 490 € Franchisegebühr. Mit dem Eigenanteil nach Kassenleistungen wirbt Hausengel ab 945 €. Primundus beginnt bei 2.150 € im Monat; Ihren Preis berechnet der Kostenrechner in 2 Minuten, direkt nach Eingabe der Kontaktdaten, mit Aufstellung der Zuschüsse.',
  },
  {
    q: 'Gibt es bei Primundus eine Mindestvertragslaufzeit?',
    a: 'Nein. Primundus-Verträge haben keine Mindestlaufzeit, sind täglich kündbar und werden taggenau abgerechnet. Der Muster-Dienstleistungsvertrag von Hausengel sieht eine Kündigungsfrist von einem Monat vor.',
  },
]

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Anbieter-Vergleich', item: 'https://primundus.de/anbieter-vergleich' },
      { '@type': 'ListItem', position: 3, name: 'Hausengel-Alternative', item: 'https://primundus.de/hausengel-alternative' },
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
            <span className="text-pm-ink">Hausengel-Alternative</span>
          </nav>

          {/* Header */}
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Anbieter-Vergleich · Stand {STAND}
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Hausengel oder Primundus? Der direkte Vergleich
          </h1>
          <p className="text-[16px] text-pm-body leading-relaxed mb-6 max-w-[720px]">
            Wer Hausengel mit anderen Anbietern vergleicht, steht vor allem vor einer Grundsatzfrage:
            selbstständige Betreuungskräfte oder angestelltes Personal? Dazu kommt das Praktische — wann
            sehe ich Preis und Kraft? Hier die Antworten beider Anbieter, Punkt für Punkt mit Quellenangabe.
          </p>

          {/* TL;DR */}
          <div className="bg-white border border-pm-line rounded-2xl p-5 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-taupe mb-2">Das Wichtigste in Kürze</p>
            <p className="text-[14px] text-pm-ink leading-relaxed">
              <strong>Hausengel</strong> arbeitet mit selbstständigen Betreuungskräften, nennt Kosten ab 2.500 € im
              Monat und rechnet auf der Website ein Beispiel vor; das Angebot gibt es im Beratungsgespräch, die
              Betreuungskraft lernen Familien vor der Auftragsvergabe telefonisch kennen.{' '}
              <strong>Primundus</strong> zeigt Preis <em>und</em> passende Betreuungskräfte online, direkt nach
              Eingabe der Kontaktdaten — Sie wählen Ihre Betreuungskraft aus, <em>bevor</em> ein Vertrag
              unterschrieben wird. Ab 2.150 €/Monat zzgl. An- und Abreise 125 € je Strecke, ohne
              Vermittlungsgebühr, ohne Mindestlaufzeit, taggenau abgerechnet.
            </p>
            <p className="text-[14px] text-pm-ink leading-relaxed mt-3">
              <strong>Kurz:</strong> Der Kernunterschied ist das Modell — selbstständige Kräfte bei Hausengel,
              bei Primundus angestelltes Personal mit A1-Entsendung. Dazu der Weg zum Preis: bei Primundus in
              2 Minuten online nach Eingabe der Kontaktdaten, bei Hausengel im Beratungsgespräch. Und die Kosten:
              bei Primundus ohne Vermittlungs-, Aufnahme- oder Franchisegebühr, ohne Mindestlaufzeit und täglich
              kündbar.
            </p>
          </div>

          {/* Duell-Tabelle: gemeinsamer Baustein, auf dem Handy als Karten (Optik-Plan Stufe 0) */}
          <VergleichDuell anbieter={PH} />

          {/* Worin Hausengel stark ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-4">Worin Hausengel stark ist</h2>
            <div className="bg-white border border-pm-line rounded-2xl p-5">
              <p className="text-[14px] text-pm-body leading-relaxed">
                Hausengel nennt über 200.000 Vermittlungen seit 2005 und legt Wert darauf, dass Familien ihre
                Betreuungskraft vorab kennenlernen. Im Selbstständigen-Modell schließen Familien den Vertrag direkt
                mit der Betreuungskraft. Hausengel gibt an, rund um die Uhr erreichbar zu sein, bietet Beratung in
                der Region und veröffentlicht einen Mustervertrag und eine Beispielrechnung mit allen Kosten. Für
                Familien, die dieses Modell und den Weg über ein persönliches Beratungsgespräch bevorzugen, kann
                Hausengel passen.
              </p>
            </div>
          </section>

          {/* Worin Primundus anders ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-4">Worin Primundus anders ist</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { t: 'Preis in 2 Minuten', d: 'Sie beantworten wenige Fragen zur Pflegesituation, geben Ihre Kontaktdaten ein und sehen sofort Ihren Preis samt Zuschüssen — ohne Rückruf, ohne Termin.' },
                { t: 'Betreuungskräfte mit dem Angebot', d: 'Direkt mit dem Angebot sehen Sie passende Betreuungskräfte mit Erfahrung und Sprachkenntnissen online — und können vergleichen.' },
                { t: 'Eigenes Personal', d: 'Unsere Betreuungskräfte sind bei Primundus beschäftigt; Ihr Vertrag läuft mit Primundus, nicht mit der einzelnen Kraft.' },
                { t: 'Keine Vermittlungsgebühr, täglich kündbar', d: 'Keine Vermittlungs-, Aufnahme- oder Franchisegebühr, keine Mindestlaufzeit — täglich kündbar, taggenau abgerechnet. An- und Abreise werden mit 125 € je Strecke gesondert berechnet.' },
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
                <p className="text-[13px] font-bold text-pm-ink mb-3">Hausengel (eigene Darstellung)</p>
                <ol className="space-y-2.5">
                  {[
                    'Kontaktaufnahme und Bedarfsanalyse im Beratungsgespräch',
                    'Angebote passender selbstständiger Betreuungskräfte',
                    'Telefonisches Kennenlernen, dann Ihre Entscheidung',
                    'Vertrag und Anreise zum Vertragsbeginn',
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
            Hausengel ist eine Marke der Hausengel-Gruppe; Primundus steht in keiner Verbindung zu
            Hausengel. Alle Angaben zu Hausengel stammen von hausengel.de einschließlich des dort
            veröffentlichten Muster-Dienstleistungsvertrags (Stand {STAND}) —
            Konditionen können sich ändern. Sollte eine Angabe nicht mehr aktuell sein, korrigieren wir sie
            umgehend: <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>.
          </p>

        </div>
      </div>
    </>
  )
}
