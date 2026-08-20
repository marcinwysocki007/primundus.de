import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ANBIETER, PRIMUNDUS, KRITERIEN, FUSSNOTEN, STAND, type Anbieter, type Wertung } from '@/lib/anbieterVergleich'

export const metadata: Metadata = {
  title: 'Anbieter-Vergleich 2026: Pflegehelden, Promedica24 & Co.',
  description:
    'Pflegehelden, Promedica24, Hausengel, marta, Linara und Primundus im Vergleich: Preise, Gebühren, Vertragsbindung und wann Sie die Betreuungskraft auswählen. Stand August 2026.',
  alternates: { canonical: 'https://primundus.de/anbieter-vergleich' },
  openGraph: {
    title: '24h-Pflege-Anbieter im Vergleich 2026 | Primundus',
    description:
      'Sechs bekannte Anbieter und Primundus im Faktenvergleich: Preise, Gebühren, Vertragsbindung, Auswahl der Betreuungskraft.',
    url: 'https://primundus.de/anbieter-vergleich',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const faqs = [
  {
    q: 'Welcher 24h-Pflege-Anbieter zeigt Preise sofort online?',
    a: 'Primundus zeigt den Preis in 2 Minuten online — ohne Rückruf. marta veröffentlicht Preistabellen auf der Website. Bei Pflegehelden, Promedica24, Hausengel und Deutsche Seniorenbetreuung gibt es ein verbindliches Angebot erst nach Fragebogen oder Beratungsgespräch (Stand August 2026, eigene Angaben der Anbieter).',
  },
  {
    q: 'Bei welchem Anbieter sehe ich Betreuungskräfte vor dem Vertrag?',
    a: 'Bei Primundus sehen Sie passende Betreuungskräfte sofort mit dem Angebot — und wählen aus, bevor ein Vertrag unterschrieben wird. Bei marta sind Profile nach kostenloser Registrierung einsehbar. Die übrigen verglichenen Anbieter zeigen keine offen einsehbaren Profile; Vorschläge kommen dort erst im Vermittlungsprozess.',
  },
  {
    q: 'Welche Vermittlungsgebühren verlangen 24h-Pflege-Anbieter?',
    a: 'Primundus berechnet keine Vermittlungs- oder Aufnahmegebühr. Nach eigenen Angaben verlangt Linara eine Erstaufnahmepauschale von 418 €, marta eine Aufnahmegebühr von 99 € bis 999 € je nach Plan, Deutsche Seniorenbetreuung 280 € bei Einsätzen unter 40 Tagen. Pflegehelden weist keine separate Gebühr aus („Agenturgebühren einkalkuliert").',
  },
  {
    q: 'Kann ich den Vertrag bei Primundus jederzeit kündigen?',
    a: 'Ja. Primundus-Verträge sind täglich kündbar — ohne Mindestlaufzeit, ohne Fristen. Die Abrechnung erfolgt taggenau: bezahlt wird nur, was stattfindet.',
  },
  {
    q: 'Was unterscheidet Primundus von anderen 24h-Pflegeanbietern?',
    a: 'Primundus beschäftigt eigenes Betreuungspersonal und zeigt Preis und passende Betreuungskräfte sofort online. Sie wählen Ihre Betreuungskraft aus, bevor ein Vertrag unterschrieben wird. Dazu: keine Vermittlungsgebühr, keine Mindestlaufzeit, taggenaue Abrechnung und ein fester Ansprechpartner an 7 Tagen die Woche.',
  },
]

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Tools & Rechner', item: 'https://primundus.de/tools' },
      { '@type': 'ListItem', position: 3, name: 'Anbieter-Vergleich', item: 'https://primundus.de/anbieter-vergleich' },
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

const ICON: Record<Wertung, { sym: string; cls: string }> = {
  ja: { sym: '✓', cls: 'text-[#3D7A5C]' },
  teils: { sym: '◐', cls: 'text-[#B08A3E]' },
  nein: { sym: '—', cls: 'text-[#B0553E]' },
  ka: { sym: '?', cls: 'text-[#8B8B8B]' },
}

const ALLE: Anbieter[] = [PRIMUNDUS, ...ANBIETER]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[980px] mx-auto px-5 py-14">

          {/* Breadcrumb */}
          <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span aria-hidden="true">›</span>
            <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
            <span aria-hidden="true">›</span>
            <span className="text-[#3D3D3D]">Anbieter-Vergleich</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            Anbieter-Vergleich · Stand {STAND}
          </p>
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-4">
            24h-Pflege-Anbieter im Vergleich: Wer bietet was?
          </h1>
          <p className="text-[16px] text-[#5A5A5A] leading-relaxed mb-4 max-w-[720px]">
            Pflegehelden, Promedica24, Hausengel, marta, Linara, Deutsche Seniorenbetreuung — und Primundus:
            Hier sehen Sie die Unterschiede, die im Alltag wirklich zählen. Wann sehen Sie den Preis?
            Wann die Betreuungskraft? Was kostet der Einstieg, und wie lange binden Sie sich?
            Primundus geht dabei bewusst den direkteren, moderneren Weg: Preis und Betreuungskräfte
            sofort online, Vertrag erst nach Ihrer Auswahl, keine Vermittlungsgebühr, keine
            Mindestlaufzeit — ab 2.200 €/Monat.
          </p>
          <p className="text-[13px] text-[#8B8B8B] leading-relaxed mb-10 max-w-[720px]">
            Alle Angaben zu anderen Anbietern stammen von deren eigenen Websites (Stand {STAND}) und sind
            als solche gekennzeichnet. Kein Anspruch auf Vollständigkeit — Konditionen können sich ändern.
          </p>

          {/* ── Vergleichstabelle (Desktop) ── */}
          <section className="mb-6 hidden md:block">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Der direkte Vergleich</h2>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[860px]">
                  <thead>
                    <tr className="bg-[#F8F7F5]">
                      <th className="sticky left-0 bg-[#F8F7F5] px-4 py-3 text-left text-[12px] font-semibold text-[#8B8B8B] border-b border-[#E5E3DF] min-w-[190px]">Kriterium</th>
                      {ALLE.map((a) => (
                        <th key={a.slug} className={`px-3 py-3 text-left text-[12px] font-bold border-b border-[#E5E3DF] min-w-[150px] ${a.slug === 'primundus' ? 'text-[#8B7355] bg-[#F2EDE6]' : 'text-[#3D3D3D]'}`}>
                          {a.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="sticky left-0 bg-white px-4 py-3 text-[13px] font-semibold text-[#3D3D3D] border-b border-[#F0EDE8]">Preis ab</td>
                      {ALLE.map((a) => (
                        <td key={a.slug} className={`px-3 py-3 text-[13px] border-b border-[#F0EDE8] ${a.slug === 'primundus' ? 'bg-[#FBF9F5] font-semibold text-[#3D3D3D]' : 'text-[#5A5A5A]'}`}>
                          {a.preisAb}
                        </td>
                      ))}
                    </tr>
                    {KRITERIEN.map((k) => (
                      <tr key={k.key}>
                        <td className="sticky left-0 bg-white px-4 py-3 text-[13px] font-semibold text-[#3D3D3D] border-b border-[#F0EDE8]">{k.label}</td>
                        {ALLE.map((a) => {
                          const kr = a[k.key]
                          return (
                            <td key={a.slug} className={`px-3 py-3 text-[12.5px] leading-snug border-b border-[#F0EDE8] ${a.slug === 'primundus' ? 'bg-[#FBF9F5] text-[#3D3D3D]' : 'text-[#5A5A5A]'}`}>
                              <span className={`font-bold mr-1 ${ICON[kr.wertung].cls}`}>{ICON[kr.wertung].sym}</span>
                              {kr.kurz}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                    <tr>
                      <td className="sticky left-0 bg-white px-4 py-3 text-[13px] font-semibold text-[#3D3D3D]">Modell</td>
                      {ALLE.map((a) => (
                        <td key={a.slug} className={`px-3 py-3 text-[12.5px] leading-snug ${a.slug === 'primundus' ? 'bg-[#FBF9F5] text-[#3D3D3D]' : 'text-[#5A5A5A]'}`}>
                          {a.modell}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#F8F7F5] border-t border-[#E5E3DF] px-4 py-3 space-y-1">
                <p className="text-[11px] text-[#8B8B8B]">
                  ✓ = bietet der Anbieter · ◐ = teilweise / mit Einschränkung · — = bietet er nicht · k. A. = keine Angabe auf der Website ·
                  Quellen: eigene Websites der Anbieter, Stand {STAND}
                </p>
                {FUSSNOTEN.map((f) => (
                  <p key={f.nr} className="text-[11px] text-[#8B8B8B]">{f.nr} {f.text}</p>
                ))}
              </div>
            </div>
          </section>

          {/* ── Vergleich als Karten (Mobil) ── */}
          <section className="mb-6 md:hidden">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Der direkte Vergleich</h2>
            <div className="space-y-4">
              {ALLE.map((a) => (
                <div key={a.slug} className={`bg-white border rounded-2xl overflow-hidden ${a.slug === 'primundus' ? 'border-[#8B7355]' : 'border-[#E5E3DF]'}`}>
                  <div className={`px-4 py-3 ${a.slug === 'primundus' ? 'bg-[#8B7355]' : 'bg-[#F8F7F5] border-b border-[#E5E3DF]'}`}>
                    <p className={`text-[15px] font-bold ${a.slug === 'primundus' ? 'text-white' : 'text-[#3D3D3D]'}`}>{a.name}</p>
                    <p className={`text-[12px] ${a.slug === 'primundus' ? 'text-white/80' : 'text-[#8B8B8B]'}`}>{a.kurz} · {a.preisAb}</p>
                  </div>
                  <div className="px-4 py-2">
                    {KRITERIEN.map((k) => {
                      const kr = a[k.key]
                      return (
                        <div key={k.key} className="py-2 border-b border-[#F0EDE8] last:border-0">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8B8B8B] mb-0.5">{k.label}</p>
                          <p className="text-[13px] text-[#3D3D3D] leading-snug">
                            <span className={`font-bold mr-1 ${ICON[kr.wertung].cls}`}>{ICON[kr.wertung].sym}</span>
                            {kr.kurz}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-[11px] text-[#8B8B8B]">Quellen: eigene Websites der Anbieter, Stand {STAND}</p>
              {FUSSNOTEN.map((f) => (
                <p key={f.nr} className="text-[11px] text-[#8B8B8B]">{f.nr} {f.text}</p>
              ))}
            </div>
          </section>

          {/* Fairness-Block */}
          <section className="mb-14">
            <div className="bg-[#F2EDE6] border border-[rgba(139,115,85,0.2)] rounded-2xl p-5">
              <p className="text-[13px] font-bold text-[#6B5A44] mb-1">Der Fairness halber</p>
              <p className="text-[13px] text-[#6B5A44] leading-relaxed">
                Jeder Anbieter hat Stärken: Pflegehelden und Promedica24 arbeiten mit persönlichen Ansprechpartnern
                vor Ort, marta macht Profile und Preise online vergleichbar, Linara und Hausengel setzen auf
                langjährige Markterfahrung. Dieser Vergleich zeigt die Konditionen — welche davon Ihnen wichtig
                sind, entscheiden Sie.
              </p>
            </div>
          </section>

          {/* Kurzprofile */}
          <section className="mb-14">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Die Anbieter im Kurzprofil</h2>
            <div className="space-y-4">
              {ANBIETER.map((a) => (
                <div key={a.slug} className="bg-white border border-[#E5E3DF] rounded-2xl p-5">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1.5">
                    <h3 className="text-[16px] font-bold text-[#3D3D3D]">{a.name}</h3>
                    <span className="text-[11px] text-[#8B8B8B]">Quelle: {a.quelle}, Stand {a.stand}</span>
                  </div>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed mb-2">{a.kurz} · {a.modell} · {a.preisAb}.</p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                    <strong className="text-[#3D3D3D]">Stärken:</strong> {a.staerken.join(' · ')}
                  </p>
                  {a.slug === 'pflegehelden' && (
                    <p className="text-[13px] text-[#8B7355] font-semibold mt-2">
                      <a href="/pflegehelden-alternative" className="hover:underline">→ Ausführlicher Vergleich: Pflegehelden oder Primundus?</a>
                    </p>
                  )}
                </div>
              ))}
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

          {/* Korrektur-Hinweis */}
          <p className="text-[12px] text-[#8B8B8B] leading-relaxed">
            Hinweis: Wir prüfen die Angaben regelmäßig anhand der öffentlich zugänglichen Informationen der
            Anbieter. Sollte eine Angabe nicht mehr aktuell sein, korrigieren wir sie umgehend —
            schreiben Sie uns gern an <a href="mailto:info@primundus.de" className="text-[#8B7355] hover:underline">info@primundus.de</a>.
          </p>

        </div>
      </div>
    </>
  )
}
