import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ANBIETER, PRIMUNDUS, KRITERIEN, FUSSNOTEN, STAND } from '@/lib/anbieterVergleich'

const PH = ANBIETER.find((a) => a.slug === 'promedica24')!

export const metadata: Metadata = {
  title: 'Promedica24-Alternative? Primundus im direkten Vergleich',
  description:
    'Promedica24 oder Primundus: Preis sofort online statt erst nach Beratung, Betreuungskräfte selbst auswählen statt Zuteilung aus dem Pool. Der Faktenvergleich, Stand August 2026.',
  alternates: { canonical: 'https://primundus.de/promedica24-alternative' },
  openGraph: {
    title: 'Promedica24 oder Primundus? Der direkte Vergleich',
    description:
      'Zwei Wege zur 24-Stunden-Pflege: Beratung mit zentraler Zuteilung oder Preis und Betreuungskräfte sofort online. Der Faktenvergleich.',
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
    a: 'Ja — mit einem grundlegend anderen Weg zur Betreuungskraft: Bei Primundus sehen Sie Preis und passende Betreuungskräfte sofort online und wählen selbst aus. Promedica24 beschreibt den eigenen Prozess so, dass die Zentrale in Warschau aus einem Pool von über 6.800 Betreuungskräften auswählt; ein preisliches Angebot gibt es erst nach individueller Beratung (eigene Angaben, Stand August 2026).',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei Promedica24?',
    a: 'Promedica24 nennt auf der eigenen Website keine Preise — ein Angebot gibt es nach eigener Angabe erst nach einer individuellen Beratung. Primundus zeigt den Preis in 2 Minuten online: ab 2.200 €/Monat, je nach Pflegesituation und Sprachkenntnissen.',
  },
  {
    q: 'Kann ich bei Promedica24 die Betreuungskraft selbst auswählen?',
    a: 'Nach eigener Darstellung sucht die Promedica24-Zentrale die passende Betreuungskraft aus dem Pool heraus. Bei Primundus ist es umgekehrt: Sie sehen die Profile direkt mit dem Angebot, vergleichen selbst — und erst nach Ihrer Auswahl kommt der Vertrag.',
  },
  {
    q: 'Gibt es bei Primundus eine Mindestvertragslaufzeit?',
    a: 'Nein. Primundus-Verträge haben keine Mindestlaufzeit, sind täglich kündbar und werden taggenau abgerechnet. Promedica24 macht zu Laufzeit und Kündigungsfristen auf der Website keine Angaben.',
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

const ICON: Record<string, { sym: string; cls: string }> = {
  ja: { sym: '✓', cls: 'text-pm-green' },
  teils: { sym: '◐', cls: 'text-[#B08A3E]' },
  nein: { sym: '—', cls: 'text-[#B0553E]' },
  ka: { sym: '?', cls: 'text-pm-mute' },
}

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
            Wer eine Alternative zu Promedica24 sucht, stößt meist auf zwei Fragen: Warum erfahre ich den
            Preis erst nach einer Beratung? Und warum kann ich nicht selbst sehen, wer zu uns kommt? Hier
            sind die Antworten beider Anbieter — Punkt für Punkt, mit Quellenangabe.
          </p>

          {/* TL;DR */}
          <div className="bg-white border border-pm-line rounded-2xl p-5 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-taupe mb-2">Das Wichtigste in Kürze</p>
            <p className="text-[14px] text-pm-ink leading-relaxed">
              <strong>Promedica24</strong> ist einer der großen Entsende-Anbieter mit Franchise-Partnern
              vor Ort (Promedica Plus); ein preisliches Angebot gibt es nach eigener Angabe erst nach einer
              individuellen Beratung, die Betreuungskraft wählt die Zentrale aus dem Pool von über 6.800
              Kräften aus. <strong>Primundus</strong> zeigt Preis <em>und</em> passende
              Betreuungskräfte sofort online — Sie wählen Ihre Betreuungskraft aus, <em>bevor</em> ein
              Vertrag unterschrieben wird. Ab 2.200 €/Monat, ohne Vermittlungsgebühr, ohne Mindestlaufzeit,
              taggenau abgerechnet.
            </p>
            <p className="text-[14px] text-pm-ink leading-relaxed mt-3">
              <strong>Kurz:</strong> Promedica24 ist der klassische Weg — Beratung, dann wählt die Zentrale
              die Kraft aus. Primundus ist der direkte, moderne Weg: Preis in 2 Minuten statt nach Beratung,
              Betreuungskräfte selbst sehen und auswählen statt Zuteilung — und erst nach Ihrer Wahl der Vertrag.
            </p>
          </div>

          {/* Duell-Tabelle */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-6">Die Konditionen im Vergleich</h2>
            <div className="bg-white border border-pm-line rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px]">
                  <thead>
                    <tr className="bg-pm-paper">
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-pm-mute border-b border-pm-line w-[30%]">Kriterium</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-pm-taupe border-b border-pm-line bg-pm-shell w-[35%]">Primundus</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-pm-ink border-b border-pm-line w-[35%]">Promedica24</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-[13px] font-semibold text-pm-ink border-b border-pm-line-soft">Preis ab</td>
                      <td className="px-4 py-3 text-[13px] font-semibold text-pm-ink border-b border-pm-line-soft bg-[#FBF9F5]">{PRIMUNDUS.preisAb}</td>
                      <td className="px-4 py-3 text-[13px] text-pm-body border-b border-pm-line-soft">{PH.preisAb}</td>
                    </tr>
                    {KRITERIEN.map((k) => {
                      const p = PRIMUNDUS[k.key]
                      const h = PH[k.key]
                      return (
                        <tr key={k.key}>
                          <td className="px-4 py-3 text-[13px] font-semibold text-pm-ink border-b border-pm-line-soft">{k.label}</td>
                          <td className="px-4 py-3 text-[12.5px] leading-snug text-pm-ink border-b border-pm-line-soft bg-[#FBF9F5]">
                            <span className={`font-bold mr-1 ${ICON[p.wertung].cls}`}>{ICON[p.wertung].sym}</span>{p.kurz}
                          </td>
                          <td className="px-4 py-3 text-[12.5px] leading-snug text-pm-body border-b border-pm-line-soft">
                            <span className={`font-bold mr-1 ${ICON[h.wertung].cls}`}>{ICON[h.wertung].sym}</span>{h.kurz}
                          </td>
                        </tr>
                      )
                    })}
                    <tr>
                      <td className="px-4 py-3 text-[13px] font-semibold text-pm-ink">Modell</td>
                      <td className="px-4 py-3 text-[12.5px] leading-snug text-pm-ink bg-[#FBF9F5]">{PRIMUNDUS.modell}</td>
                      <td className="px-4 py-3 text-[12.5px] leading-snug text-pm-body">{PH.modell}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-pm-paper border-t border-pm-line px-4 py-3">
                <div className="space-y-1">
                  <p className="text-[11px] text-pm-mute">
                    Angaben zu Promedica24: promedica24.de, Stand {STAND}. ✓ = ja · ◐ = teilweise · — = nein · k. A. = keine Angabe.
                  </p>
                  {FUSSNOTEN.filter((f) => ['¹','²','³','⁷'].includes(f.nr)).map((f) => (
                    <p key={f.nr} className="text-[11px] text-pm-mute">{f.nr} {f.text}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Worin Promedica24 stark ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-4">Worin Promedica24 stark ist</h2>
            <div className="bg-white border border-pm-line rounded-2xl p-5">
              <p className="text-[14px] text-pm-body leading-relaxed">
                Promedica24 gehört zu den großen Anbietern in Deutschland und verweist auf einen Pool von über
                6.800 Betreuungskräften. Über die Franchise-Partner von Promedica Plus gibt es persönliche
                Ansprechpartner vor Ort, die während der gesamten Betreuungszeit begleiten. Für Familien, die
                den klassischen Weg über ein persönliches Beratungsgespräch bevorzugen und die Auswahl der
                Kraft gern abgeben, ist das ein stimmiges Modell.
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
                { t: '6× Testsieger', d: 'Ausgezeichnete Qualität zu einem Preis ab 2.200 €/Monat.' },
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
                    'Auswählen — erst dann Vertrag; Anreise meist in 4–7 Tagen',
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
                    'Individuelle Beratung — auch zu Hause durch den Partner vor Ort',
                    'Anforderungen gehen an die Hauptstelle in Warschau',
                    'Die Zentrale sucht die passende Betreuungskraft aus dem Pool heraus',
                    'Angebot und Vertrag, dann Betreuungsstart',
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
            Verbindung zu Promedica24. Alle Angaben zu Promedica24 stammen von promedica24.de (Stand {STAND}) —
            Konditionen können sich ändern. Sollte eine Angabe nicht mehr aktuell sein, korrigieren wir sie
            umgehend: <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>.
          </p>

        </div>
      </div>
    </>
  )
}
