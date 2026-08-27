import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Leverkusen | Primundus',
  description: '24-Stunden-Pflege in Leverkusen: Eigenanteil ab ca. 1200 €/Monat (PG 3). Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-leverkusen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Leverkusen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Leverkusen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-leverkusen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primundus — 24h-Pflege Leverkusen',
    description: '24h-Betreuungskräfte in Leverkusen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-leverkusen',
    telephone: '+4989200000830',
    email: 'info@primundus.de',
    areaServed: { '@type': 'City', name: 'Leverkusen' },
    priceRange: '2.200–3.500 €/Monat',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Leverkusen', item: 'https://primundus.de/24h-pflege-leverkusen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Leverkusen?',
        acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1200–2300 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Leverkusen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'In der Regel in 4–7 Tagen. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
    ],
  },
]

export default function LeverkusenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Leverkusen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            24h-Pflege in Leverkusen · Aktualisiert April 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24-Stunden-Pflege und Betreuung in Leverkusen
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Opladen, Schlebusch oder Wiesdorf: Viele Leverkusener haben ihr Berufsleben bei Bayer verbracht — und ihr Zuhause soll der Ort bleiben, an dem der Ruhestand stattfindet. Eine Betreuungskraft von Primundus zieht mit ein und ist Tag und Nacht da. Täglich kündbar, rechtssicher, meist startklar in 4–7 Tagen.
          </p>

          {/* ① WAS IST 24H-PFLEGE */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-6">
              Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist rund um die Uhr erreichbar — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Leverkusen heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏠', title: 'Eigenes Zuhause', desc: 'Vertraute Umgebung bleibt — kein Heimumzug' },
                { icon: '👤', title: '1:1-Betreuung', desc: 'Eine Kraft, ein Mensch — keine wechselnden Gesichter' },
                { icon: '🌙', title: 'Tag & Nacht da', desc: 'Rund um die Uhr erreichbar — auch nachts' },
              ].map((item) => (
                <div key={item.title} className="bg-pm-paper rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-[13px] font-bold text-pm-ink mb-1">{item.title}</p>
                  <p className="text-[12px] text-pm-mute leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ② FÜR WEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Für wen ist 24h-Pflege die richtige Wahl?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-6">
              Viele Familien stehen irgendwann vor demselben Moment: Man merkt, dass es so nicht mehr geht — aber ein Pflegeheim fühlt sich falsch an. Genau für diese Situation ist die 24h-Betreuung zuhause die Antwort.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                { icon: '🧓', title: 'Selbstständigkeit lässt nach', desc: 'Alltägliches gelingt nicht mehr zuverlässig alleine — Anziehen, Kochen, Waschen, Orientierung' },
                { icon: '👨‍👩‍👧', title: 'Familie kann nicht immer da sein', desc: 'Beruf, eigene Kinder, Entfernung — Angehörige wollen helfen, aber nicht rund um die Uhr' },
                { icon: '🏠', title: 'Pflegeheim ist keine Option', desc: 'Das eigene Zuhause, die gewohnten Möbel, der Garten — das soll bleiben' },
                { icon: '🌙', title: 'Nächtliche Unsicherheit', desc: 'Stürze, Toilettengänge, Orientierungslosigkeit — nachts ist niemand da' },
                { icon: '🧠', title: 'Demenz oder Orientierungsprobleme', desc: 'Vertraute Ansprechpartnerin nötig — keine wechselnden Gesichter' },
                { icon: '🏥', title: 'Nach Krankenhausaufenthalt', desc: 'Nach OP oder Schlaganfall: Wochen intensiver Unterstützung überbrücken' },
              ].map((item) => (
                <div key={item.title} className="bg-pm-paper rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-pm-ink mb-1">{item.title}</p>
                    <p className="text-[12px] text-pm-mute leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-pm-shell rounded-xl p-5 mb-3">
              <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-2">Wann 24h-Pflege alleine nicht ausreicht</p>
              <p className="text-[13px] text-pm-taupe-ink leading-relaxed">
                Bei intensivem medizinischem Versorgungsbedarf arbeitet die Betreuungskraft in Kombination mit einem ambulanten Pflegedienst. Primundus koordiniert diese Zusammenarbeit auf Wunsch — so bleibt das Zuhause auch bei höherem Bedarf die Option.
              </p>
            </div>
            <div className="bg-pm-coral-tint rounded-xl p-4">
              <p className="text-[13px] text-pm-coral-ink leading-relaxed">
                Nicht sicher ob 24h-Pflege die richtige Lösung ist? Primundus berät kostenlos und ehrlich — auch wenn das Ergebnis eine andere Empfehlung ist.
              </p>
            </div>
          </div>

          {/* ③ LEISTUNGEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-pm-line">
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-green mb-4">Betreuungskraft übernimmt</p>
                {['Körperpflege — Waschen, Ankleiden, Zahnpflege','Kochen — frisch, nach Vorlieben und Diät','Haushalt — Putzen, Einkaufen, Wäsche','Mobilisierung, Spaziergänge, Begleitung','Gesellschaft und Begleitung — ganztags','Medikamentenerinnerung','Arzt- und Therapietermine begleiten','Nachtbereitschaft — immer erreichbar'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-pm-line-soft last:border-0">
                    <span className="w-4 h-4 rounded-full bg-pm-mint flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-pm-green text-[9px] font-bold">✓</span></span>
                    <span className="text-[13px] text-pm-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-taupe mb-4">Ambulanter Pflegedienst ergänzt</p>
                {['Injektionen (Insulin, Blutverdünner)','Verbandswechsel, Wundversorgung','Katheterversorgung','Ernährung über Magensonde','Beatmungspflege','Komplexe medizinische Versorgung'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-pm-line-soft last:border-0">
                    <span className="text-pm-taupe font-bold text-[12px] flex-shrink-0 mt-0.5">+</span>
                    <span className="text-[13px] text-pm-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-pm-paper border-t border-pm-line px-6 py-4">
              <p className="text-[13px] text-pm-body leading-relaxed"><strong className="font-bold text-pm-ink">Beide gemeinsam machen häusliche Pflege auch bei hohem Bedarf möglich.</strong> Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst.</p>
            </div>
          </div>

          {/* ④ KOSTEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Kosten & Kassenzuschüsse in Leverkusen 2026
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-4">
            <div className="bg-pm-paper px-5 py-3 border-b border-pm-line">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-mute">Kostenbeispiel — Pflegegrad 3 in Leverkusen</p>
            </div>
            <div className="px-5 py-4 space-y-2">
              {[
                { label: 'Kosten Primundus', value: '2.200–3.500 €/Monat', green: false },
                { label: '− Pflegegeld PG 3', value: '− 599 €/Monat', green: true },
                { label: '− Entlastungsbudget (anteilig)', value: '− ca. 295 €/Monat', green: true },
                { label: '− Steuerabzug (ca.)', value: '− ca. 200 €/Monat', green: true },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center text-[14px]">
                  <span className="text-pm-mute">{row.label}</span>
                  <span className={`font-semibold whitespace-nowrap text-right ${row.green ? 'text-pm-green' : 'text-pm-ink'}`}>{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-[15px] font-bold pt-3 mt-1 border-t border-pm-line">
                <span className="text-pm-ink">Ihr Eigenanteil ca.</span>
                <span className="text-pm-taupe">ca. 1200–2300 €/Monat</span>
              </div>
            </div>
            <div className="bg-pm-paper border-t border-pm-line px-5 py-3">
              <p className="text-[12px] text-pm-mute">Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause</p>
            </div>
          </div>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="bg-pm-paper">
                  {['Pflegegrad','Pflegegeld/Mo','Entlastungsbudget/Jahr'].map((h) => (
                    <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[['PG 2','347 €','3.539 €'],['PG 3','599 €','3.539 €'],['PG 4','800 €','3.539 €'],['PG 5','990 €','3.539 €']].map(([pg,pgeld,budget],i) => (
                    <tr key={pg} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-4 py-3 text-[13px] font-semibold text-pm-ink border-b border-pm-line">{pg}</td>
                      <td className="px-4 py-3 text-[13px] font-bold text-pm-green border-b border-pm-line">{pgeld}</td>
                      <td className="px-4 py-3 text-[13px] text-pm-body border-b border-pm-line">{budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2"><p className="text-[11px] text-pm-mute">Stand 2026 · Bundesweit einheitlich</p></div>
          </div>
          

          {/* ⑤ EINZUGSGEBIET */}
          <div className="bg-pm-shell border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[13px] font-bold text-pm-taupe-ink mb-1">Einzugsgebiet Leverkusen</p>
            <p className="text-[13px] text-pm-taupe-ink leading-relaxed">Leverkusen und Umland: Köln-Nord, Bergisch Gladbach, Burscheid, Leichlingen und alle Gemeinden im Rheinisch-Bergischen Kreis</p>
          </div>

          {/* ⑥ FAQ */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen — 24h-Pflege in Leverkusen</h2>
          <div className="space-y-3 mb-12">
            {[
              { q: 'Was kostet eine 24h-Pflegekraft in Leverkusen?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1200–2300 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
              { q: 'Wie schnell kann eine 24h-Pflegekraft in Leverkusen starten?', a: 'In der Regel in 4–7 Tagen. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
              { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
              { q: 'Ist 24h-Pflege über Primundus in Leverkusen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
              { q: 'Welches Einzugsgebiet wird in Leverkusen bedient?', a: 'Leverkusen und Umland: Köln-Nord, Bergisch Gladbach, Burscheid, Leichlingen und alle Gemeinden im Rheinisch-Bergischen Kreis' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-pm-line group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-pm-ink pr-4">{item.q}</h3>
                  <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4"><p className="text-[14px] text-pm-body leading-relaxed">{item.a}</p></div>
              </details>
            ))}
          </div>

          {/* ⑦ TRENNLINIE */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-pm-line" />
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-pm-mute whitespace-nowrap">So arbeiten wir</p>
            <div className="flex-1 h-px bg-pm-line" />
          </div>

          {/* ⑧ KONDITIONEN */}
          <div className="bg-white border border-pm-line rounded-2xl p-5 mb-8">
            <div className="flex items-start gap-3 pb-4 mb-2 border-b border-pm-line">
              <span className="w-7 h-7 rounded-full bg-pm-taupe text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <div className="flex-1 min-w-0"><span className="text-[15px] font-bold text-pm-ink block mb-1">Unsere Konditionen</span>
              <span className="bg-pm-mint text-pm-green-deep text-[11px] font-semibold px-3 py-1 rounded-full inline-block">100% Sorgenfrei und ohne Risiko</span></div>
            </div>
            {[
              { icon: '🛡', title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
              { icon: '📄', title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
              { icon: '⏱', title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
              { icon: '👤', title: 'Persönlicher Ansprechpartner', desc: '7 Tage/Woche für Sie da' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 py-3 border-b border-pm-line-soft last:border-0">
                <div className="w-9 h-9 rounded-lg border border-pm-line flex items-center justify-center flex-shrink-0 text-lg">{item.icon}</div>
                <div>
                  <p className="text-[14px] font-bold text-pm-ink mb-0.5">{item.title}</p>
                  <p className="text-[13px] text-pm-mute">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-4 mt-1 border-t border-pm-line">
              <img width={40} height={48} src="/images/primundus_testsieger-2021.webp" alt="Testsieger DIE WELT" className="w-10 h-12 object-contain flex-shrink-0" />
              <div>
                <p className="text-[14px] font-bold text-pm-ink">Testsieger bei DIE WELT – 6× in Folge</p>
                <p className="text-[13px] text-pm-mute">Nr. 1 der Pflegekräfte-Vermittler — <a href="/testsieger-24-stunden-pflege" className="underline underline-offset-2 hover:text-pm-taupe">zur Auszeichnung mit Beleg</a></p>
              </div>
            </div>
          </div>

          {/* ⑨ ABLAUF */}
          <h2 className="text-[22px] md:text-[26px] font-bold text-pm-ink text-center mb-8">In 2 Minuten zu Ihrem persönlichen Angebot</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { n: '1', title: 'Ihren Preis sehen', desc: 'Wenige Fragen zur Pflegesituation und Ihre Kontaktdaten für die Angebotskopie — danach sehen Sie sofort Ihren Preis samt Zuschüssen.', chip: '⏱ Dauert unter 2 Minuten' },
              { n: '2', title: 'Betreuungskräfte ansehen', desc: 'Direkt danach sehen Sie in Ihrem Kundenportal, wer zu Ihnen kommen könnte — in Ruhe und ohne Verpflichtung.', chip: '✉ Ihr Zugang kommt auch per E-Mail' },
              { n: '3', title: 'Auswählen und starten', desc: 'Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl unterschreiben Sie den Vertrag — danach reist Ihre Betreuungskraft an, meist in 4–7 Tagen.', chip: '✓ Kein Vertrag vor Ihrer Auswahl' },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-11 h-11 rounded-full bg-pm-cocoa text-white text-[18px] font-bold flex items-center justify-center mx-auto mb-4">{step.n}</div>
                <p className="text-[14px] font-bold text-pm-ink mb-2 leading-snug">{step.title}</p>
                <p className="text-[13px] text-pm-mute leading-relaxed mb-3">{step.desc}</p>
                <span className="inline-flex items-center gap-1.5 bg-pm-mint text-pm-green-deep text-[11px] font-semibold px-3 py-1 rounded-full">{step.chip}</span>
              </div>
            ))}
          </div>
          <div className="text-center mb-12">
            <a href="https://kostenrechner.primundus.de/?start=1&src=apex-24h-pflege-leverkusen" className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[16px] py-4 px-10 rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
              Kosten & Pflegekräfte ansehen
            </a>
          </div>

          {/* ⑩ CTA */}
          <NearbyCities current="leverkusen" />

          <ArticleCTA
            headline="Ist 24h-Pflege in Leverkusen die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />

        </div>
      </div>
    </>
  )
}
