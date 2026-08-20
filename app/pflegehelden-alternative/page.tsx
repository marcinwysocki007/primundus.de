import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ANBIETER, PRIMUNDUS, KRITERIEN, FUSSNOTEN, STAND } from '@/lib/anbieterVergleich'

const PH = ANBIETER.find((a) => a.slug === 'pflegehelden')!

export const metadata: Metadata = {
  title: 'Pflegehelden-Alternative? Primundus im direkten Vergleich',
  description:
    'Pflegehelden oder Primundus: Preis sofort online statt Angebot nach Fragebogen, Betreuungskräfte vor dem Vertrag auswählen, keine Mindestlaufzeit. Der Faktenvergleich, Stand August 2026.',
  alternates: { canonical: 'https://primundus.de/pflegehelden-alternative' },
  openGraph: {
    title: 'Pflegehelden oder Primundus? Der direkte Vergleich',
    description:
      'Zwei Wege zur 24-Stunden-Pflege: regionales Franchise-System oder Preis und Betreuungskräfte sofort online. Der Faktenvergleich.',
    url: 'https://primundus.de/pflegehelden-alternative',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const faqs = [
  {
    q: 'Ist Primundus eine Alternative zu Pflegehelden?',
    a: 'Ja — mit einem anderen Modell: Primundus beschäftigt eigenes Betreuungspersonal und zeigt Preis und passende Betreuungskräfte sofort online. Bei Pflegehelden erstellt ein regionaler Franchise-Partner nach einem Fragebogen ein Angebot, die Pflegekraft wird im Vermittlungsprozess ausgewählt (eigene Angaben, Stand August 2026).',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei Primundus im Vergleich zu Pflegehelden?',
    a: 'Primundus beginnt ab 2.200 €/Monat, Pflegehelden nach eigener Angabe ab 2.850 €/Monat. Bei beiden hängt der Preis von Pflegesituation und Sprachkenntnissen ab. Den Primundus-Preis sehen Sie in 2 Minuten online — ohne Rückruf.',
  },
  {
    q: 'Muss ich einen Vertrag unterschreiben, bevor ich die Betreuungskraft kenne?',
    a: 'Bei Primundus nicht: Sie sehen passende Betreuungskräfte direkt mit dem Angebot und wählen aus — erst danach kommt der Vertrag. Pflegehelden beschreibt den eigenen Ablauf so: „Sie entscheiden sich für eine Zusammenarbeit und wählen Ihre gewünschte Pflegekraft aus."',
  },
  {
    q: 'Gibt es bei Primundus eine Mindestvertragslaufzeit?',
    a: 'Nein. Primundus-Verträge haben keine Mindestlaufzeit, sind täglich kündbar und werden taggenau abgerechnet. Pflegehelden gibt an, jederzeit kündbar zu sein; eine konkrete Frist nennt die Website nicht.',
  },
]

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Anbieter-Vergleich', item: 'https://primundus.de/anbieter-vergleich' },
      { '@type': 'ListItem', position: 3, name: 'Pflegehelden-Alternative', item: 'https://primundus.de/pflegehelden-alternative' },
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
  ja: { sym: '✓', cls: 'text-[#3D7A5C]' },
  teils: { sym: '◐', cls: 'text-[#B08A3E]' },
  nein: { sym: '—', cls: 'text-[#B0553E]' },
  ka: { sym: '?', cls: 'text-[#8B8B8B]' },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-14">

          {/* Breadcrumb */}
          <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span aria-hidden="true">›</span>
            <a href="/anbieter-vergleich/" className="hover:text-[#8B7355] transition-colors">Anbieter-Vergleich</a>
            <span aria-hidden="true">›</span>
            <span className="text-[#3D3D3D]">Pflegehelden-Alternative</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            Anbieter-Vergleich · Stand {STAND}
          </p>
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Pflegehelden oder Primundus? Der direkte Vergleich
          </h1>
          <p className="text-[16px] text-[#5A5A5A] leading-relaxed mb-6 max-w-[720px]">
            Wer eine Alternative zu Pflegehelden sucht, vergleicht meist drei Dinge: Wie schnell erfahre ich
            den Preis? Wann sehe ich, wer zu uns kommt? Und wie fest binde ich mich? Hier sind die Antworten
            beider Anbieter — Punkt für Punkt, mit Quellenangabe.
          </p>

          {/* TL;DR */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-5 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B7355] mb-2">Das Wichtigste in Kürze</p>
            <p className="text-[14px] text-[#3D3D3D] leading-relaxed">
              <strong>Pflegehelden</strong> (seit 2005) arbeitet als Franchise-System mit persönlichen
              Ansprechpartnern vor Ort; ein Angebot gibt es nach eigener Angabe innerhalb eines Tages nach
              Anfrage, ab 2.850 €/Monat. <strong>Primundus</strong> zeigt Preis <em>und</em> passende
              Betreuungskräfte sofort online — Sie wählen Ihre Betreuungskraft aus, <em>bevor</em> ein
              Vertrag unterschrieben wird. Ab 2.200 €/Monat, ohne Vermittlungsgebühr, ohne Mindestlaufzeit,
              taggenau abgerechnet.
            </p>
            <p className="text-[14px] text-[#3D3D3D] leading-relaxed mt-3">
              <strong>Kurz:</strong> Pflegehelden ist der klassische Weg über die persönliche Beratung vor Ort —
              Primundus der direkte, moderne Weg: schneller beim Preis (2 Minuten statt Angebot nach Anfrage),
              schneller bei der Auswahl (Betreuungskräfte sofort sichtbar) und mit niedrigerem Einstiegspreis
              (ab 2.200 € gegenüber ab 2.850 €).
            </p>
          </div>

          {/* Duell-Tabelle */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Die Konditionen im Vergleich</h2>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px]">
                  <thead>
                    <tr className="bg-[#F8F7F5]">
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#8B8B8B] border-b border-[#E5E3DF] w-[30%]">Kriterium</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#8B7355] border-b border-[#E5E3DF] bg-[#F2EDE6] w-[35%]">Primundus</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#3D3D3D] border-b border-[#E5E3DF] w-[35%]">Pflegehelden</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#3D3D3D] border-b border-[#F0EDE8]">Preis ab</td>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#3D3D3D] border-b border-[#F0EDE8] bg-[#FBF9F5]">{PRIMUNDUS.preisAb}</td>
                      <td className="px-4 py-3 text-[13px] text-[#5A5A5A] border-b border-[#F0EDE8]">{PH.preisAb}</td>
                    </tr>
                    {KRITERIEN.map((k) => {
                      const p = PRIMUNDUS[k.key]
                      const h = PH[k.key]
                      return (
                        <tr key={k.key}>
                          <td className="px-4 py-3 text-[13px] font-semibold text-[#3D3D3D] border-b border-[#F0EDE8]">{k.label}</td>
                          <td className="px-4 py-3 text-[12.5px] leading-snug text-[#3D3D3D] border-b border-[#F0EDE8] bg-[#FBF9F5]">
                            <span className={`font-bold mr-1 ${ICON[p.wertung].cls}`}>{ICON[p.wertung].sym}</span>{p.kurz}
                          </td>
                          <td className="px-4 py-3 text-[12.5px] leading-snug text-[#5A5A5A] border-b border-[#F0EDE8]">
                            <span className={`font-bold mr-1 ${ICON[h.wertung].cls}`}>{ICON[h.wertung].sym}</span>{h.kurz}
                          </td>
                        </tr>
                      )
                    })}
                    <tr>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#3D3D3D]">Modell</td>
                      <td className="px-4 py-3 text-[12.5px] leading-snug text-[#3D3D3D] bg-[#FBF9F5]">{PRIMUNDUS.modell}</td>
                      <td className="px-4 py-3 text-[12.5px] leading-snug text-[#5A5A5A]">{PH.modell}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#F8F7F5] border-t border-[#E5E3DF] px-4 py-3">
                <div className="space-y-1">
                  <p className="text-[11px] text-[#8B8B8B]">
                    Angaben zu Pflegehelden: pflegehelden.de, Stand {STAND}. ✓ = ja · ◐ = teilweise · — = nein · k. A. = keine Angabe.
                  </p>
                  {FUSSNOTEN.filter((f) => ['¹','²','³','⁷'].includes(f.nr)).map((f) => (
                    <p key={f.nr} className="text-[11px] text-[#8B8B8B]">{f.nr} {f.text}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Worin Pflegehelden stark ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-4">Worin Pflegehelden stark ist</h2>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-5">
              <p className="text-[14px] text-[#5A5A5A] leading-relaxed">
                Pflegehelden ist seit 2005 am Markt und arbeitet mit Franchise-Partnern in allen Bundesländern —
                wer einen persönlichen Ansprechpartner in der eigenen Region möchte, der auch vorbeikommen kann,
                findet dort ein dichtes Netz. Das Unternehmen wirbt mit „jederzeit kündbar" und voller
                Kostentransparenz. Für Familien, die den klassischen Weg über ein persönliches Beratungsgespräch
                bevorzugen, ist das ein stimmiges Modell.
              </p>
            </div>
          </section>

          {/* Worin Primundus anders ist */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-4">Worin Primundus anders ist</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { t: 'Preis in 2 Minuten', d: 'Sie beantworten wenige Fragen zur Pflegesituation und sehen sofort Ihren Preis samt Zuschüssen — ohne Rückruf, ohne Termin.' },
                { t: 'Betreuungskräfte sofort sehen', d: 'Direkt mit dem Angebot sehen Sie passende Betreuungskräfte mit Erfahrung und Sprachkenntnissen — und können vergleichen.' },
                { t: 'Erst auswählen, dann Vertrag', d: 'Sie entscheiden, wer zu Ihnen kommt. Erst nach Ihrer Auswahl unterschreiben Sie den Vertrag.' },
                { t: 'Eigenes Personal', d: 'Unsere Betreuungskräfte sind bei Primundus beschäftigt — ein Ansprechpartner für alles, 7 Tage die Woche.' },
                { t: 'Keine Gebühren, keine Bindung', d: 'Keine Vermittlungs- oder Aufnahmegebühr, keine Mindestlaufzeit — täglich kündbar, taggenau abgerechnet.' },
                { t: 'Testsieger 2021', d: 'Ausgezeichnete Qualität zu einem Preis ab 2.200 €/Monat.' },
              ].map((x) => (
                <div key={x.t} className="bg-white border border-[#E5E3DF] rounded-2xl p-4">
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{x.t}</p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ablauf-Vergleich */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">So läuft es bei beiden ab</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-[#8B7355] rounded-2xl p-5">
                <p className="text-[13px] font-bold text-[#8B7355] mb-3">Primundus</p>
                <ol className="space-y-2.5">
                  {[
                    'Preis online berechnen — dauert unter 2 Minuten',
                    'Passende Betreuungskräfte im Kundenportal ansehen und vergleichen',
                    'Auswählen — erst dann Vertrag; Anreise meist in 4–7 Tagen',
                  ].map((s, i) => (
                    <li key={s} className="flex gap-2.5 text-[13px] text-[#3D3D3D] leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#8B7355] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white border border-[#E5E3DF] rounded-2xl p-5">
                <p className="text-[13px] font-bold text-[#3D3D3D] mb-3">Pflegehelden (eigene Darstellung)</p>
                <ol className="space-y-2.5">
                  {[
                    'Situation schildern und Wünsche an die Pflegekraft beschreiben',
                    'Unverbindliches Angebot innerhalb eines Tages',
                    'Entscheidung für die Zusammenarbeit, dann Auswahl der Pflegekraft',
                    'Betreuungsstart — Vermittlung innerhalb von sieben Werktagen',
                  ].map((s, i) => (
                    <li key={s} className="flex gap-2.5 text-[13px] text-[#5A5A5A] leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#E5E3DF] text-[#5A5A5A] text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
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
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Häufige Fragen</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4 group">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-[#3D3D3D] pr-2">{f.q}</h3>
                    <span className="text-[#8B7355] font-bold text-[18px] leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[14px] text-[#5A5A5A] leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Rechtlicher Hinweis */}
          <p className="text-[12px] text-[#8B8B8B] leading-relaxed">
            Pflegehelden ist eine Marke der Pflegehelden Franchise GmbH; Primundus steht in keiner Verbindung
            zu Pflegehelden. Alle Angaben zu Pflegehelden stammen von pflegehelden.de (Stand {STAND}) —
            Konditionen können sich ändern. Sollte eine Angabe nicht mehr aktuell sein, korrigieren wir sie
            umgehend: <a href="mailto:info@primundus.de" className="text-[#8B7355] hover:underline">info@primundus.de</a>.
          </p>

        </div>
      </div>
    </>
  )
}
