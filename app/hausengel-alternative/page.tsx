import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { VergleichDuell } from '@/components/VergleichDuell'
import { ANBIETER, STAND } from '@/lib/anbieterVergleich'

const PH = ANBIETER.find((a) => a.slug === 'hausengel')!

export const metadata: Metadata = {
  title: 'Hausengel-Alternative? Primundus im direkten Vergleich',
  description:
    'Hausengel oder Primundus: angestellte Betreuungskräfte statt selbstständiger, Preis sofort online statt nach Beratung, Auswahl vor dem Vertrag. Der Faktenvergleich, Stand August 2026.',
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
    a: 'Ja — mit einem anderen Beschäftigungsmodell: Hausengel arbeitet mit selbstständigen Betreuungskräften, bei Primundus sind die Betreuungskräfte angestellt und werden legal über das Entsendemodell mit A1-Bescheinigung eingesetzt. Dazu sehen Sie bei Primundus Preis und passende Kräfte sofort online — vor jedem Vertrag.',
  },
  {
    q: 'Was ist der Unterschied zwischen selbstständigen und angestellten Betreuungskräften?',
    a: 'Bei selbstständigen Kräften schließt die Familie den Betreuungsvertrag mit der Kraft selbst — wichtig ist dann, dass die Selbstständigkeit im Alltag sauber gelebt wird (Stichwort Scheinselbstständigkeit). Bei angestellten Kräften im Entsendemodell ist das Unternehmen der Arbeitgeber und verantwortet Sozialabgaben, Ersatz bei Ausfall und die Einsatzorganisation.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei Hausengel im Vergleich?',
    a: 'Hausengel wirbt mit „ab 945 € Eigenanteil" — das ist der Betrag nach Abzug von Kassenleistungen, kein Gesamtpreis; einen Online-Preis gibt es nicht. Primundus nennt den Gesamtpreis offen: ab 2.200 €/Monat, in 2 Minuten online berechnet — inklusive Aufstellung, was die Kasse übernimmt.',
  },
  {
    q: 'Gibt es bei Primundus eine Mindestvertragslaufzeit?',
    a: 'Nein. Primundus-Verträge haben keine Mindestlaufzeit, sind täglich kündbar und werden taggenau abgerechnet. Hausengel macht zu Laufzeit und Kündigungsfristen auf der Website keine Angaben.',
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
              <strong>Hausengel</strong> arbeitet mit selbstständigen Betreuungskräften und wirbt mit
              „ab 945 € Eigenanteil" — dem Betrag nach Kassenzuschüssen, nicht dem Gesamtpreis; ein Angebot
              gibt es über das Beratungsgespräch. <strong>Primundus</strong> zeigt Preis <em>und</em> passende
              Betreuungskräfte sofort online — Sie wählen Ihre Betreuungskraft aus, <em>bevor</em> ein
              Vertrag unterschrieben wird. Ab 2.200 €/Monat, ohne Vermittlungsgebühr, ohne Mindestlaufzeit,
              taggenau abgerechnet.
            </p>
            <p className="text-[14px] text-pm-ink leading-relaxed mt-3">
              <strong>Kurz:</strong> Der Kernunterschied ist das Modell — selbstständige Kräfte bei Hausengel,
              bei Primundus angestelltes Personal mit A1-Entsendung. Dazu der direkte Weg: Gesamtpreis in
              2 Minuten online statt Beratungsgespräch, Betreuungskräfte sofort sichtbar, Vertrag erst nach
              Ihrer Auswahl.
            </p>
          </div>

          {/* Duell-Tabelle: gemeinsamer Baustein, auf dem Handy als Karten (Optik-Plan Stufe 0) */}
          <VergleichDuell anbieter={PH} />

          {/* Worin Hausengel stark ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-4">Worin Hausengel stark ist</h2>
            <div className="bg-white border border-pm-line rounded-2xl p-5">
              <p className="text-[14px] text-pm-body leading-relaxed">
                Hausengel ist eine bekannte Marke mit langjähriger Markterfahrung und legt Wert darauf, dass
                Familien ihre Betreuungskraft vorab kennenlernen. Das Selbstständigen-Modell bietet Kräften
                unternehmerische Freiheit und Familien direkten Kontakt. Wer dieses Modell bevorzugt und den
                Weg über das persönliche Beratungsgespräch schätzt, findet dort einen etablierten Anbieter.
              </p>
            </div>
          </section>

          {/* Worin Primundus anders ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-4">Worin Primundus anders ist</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { t: 'Preis in 2 Minuten', d: 'Sie beantworten wenige Fragen zur Pflegesituation und sehen sofort Ihren Preis samt Zuschüssen — ohne Rückruf, ohne Termin.' },
                { t: 'Betreuungskräfte sofort sehen', d: 'Direkt mit dem Angebot sehen Sie passende Betreuungskräfte mit Erfahrung und Sprachkenntnissen — und können vergleichen.' },
                { t: 'Erst auswählen, dann Vertrag', d: 'Sie entscheiden, wer zu Ihnen kommt. Erst nach Ihrer Auswahl unterschreiben Sie den Vertrag.' },
                { t: 'Eigenes Personal', d: 'Unsere Betreuungskräfte sind bei Primundus beschäftigt — ein Ansprechpartner für alles, 7 Tage die Woche.' },
                { t: 'Keine Gebühren, keine Bindung', d: 'Keine Vermittlungs- oder Aufnahmegebühr, keine Mindestlaufzeit — täglich kündbar, taggenau abgerechnet.' },
                { t: 'Testsieger 6× in Folge', d: 'Ausgezeichnete Qualität zu einem Preis ab 2.200 €/Monat.' },
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
                    'Preis online berechnen — dauert unter 2 Minuten',
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
                    'Kostenloses Beratungsgespräch zur Pflegesituation',
                    'Vorschlag einer passenden selbstständigen Betreuungskraft',
                    'Kennenlernen der Betreuungskraft vorab',
                    'Vertrag und Betreuungsstart',
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
            Hausengel. Alle Angaben zu Hausengel stammen von hausengel.de (Stand {STAND}) —
            Konditionen können sich ändern. Sollte eine Angabe nicht mehr aktuell sein, korrigieren wir sie
            umgehend: <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>.
          </p>

        </div>
      </div>
    </>
  )
}
