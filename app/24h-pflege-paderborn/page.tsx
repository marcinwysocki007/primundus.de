import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'

export const metadata: Metadata = {
  title: '24h-Pflege Paderborn — Betreuungskraft zuhause | Primundus',
  description: '24h-Pflege in Paderborn: Geprüfte Betreuungskraft zuhause. Rechtssicher, täglich kündbar, startklar. Eigenanteil ab ca. 1300 €/Monat (PG 3).',
  alternates: { canonical: 'https://primundus.de/24h-pflege-paderborn/' },
  openGraph: {
    title: '24h-Pflege Paderborn — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Paderborn. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-paderborn/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primundus — 24h-Pflege Paderborn',
    description: '24h-Betreuungskräfte in Paderborn. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-paderborn/',
    telephone: '+498920000830',
    email: 'info@primundus.de',
    areaServed: { '@type': 'City', name: 'Paderborn' },
    priceRange: '2.200–3.500 €/Monat',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Paderborn', item: 'https://primundus.de/24h-pflege-paderborn/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Paderborn?',
        acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1300–2400 €/Monat — deutlich günstiger als ein Pflegeheim in Paderborn (Ø 2,400–2,800 €/Monat Eigenanteil).'.replace(',', '.') },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Paderborn starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Mit Primundus ist ein Start nach dem ersten Beratungsgespräch möglich.' },
      },
    ],
  },
]

export default function PaderbornPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">24h-Pflege Paderborn</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            24h-Pflege in Paderborn · Aktualisiert April 2026
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24h-Pflege Paderborn — Betreuungskraft zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">
            Eine Betreuungskraft zieht ein, ist rund um die Uhr da — im vertrauten Zuhause in Paderborn, mit 1:1-Betreuung, täglich kündbar. Primundus vermittelt geprüfte Kräfte in Paderborn und der gesamten Region seit über 20 Jahren. Rechtssicher, transparent, startklar.
          </p>

          {/* ① WAS IST 24H-PFLEGE */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was ist 24h-Pflege — und was unterscheidet sie von allem anderen?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-6">
              Bei der 24h-Pflege lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist rund um die Uhr erreichbar — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Das eigene Zuhause bleibt erhalten. Der gewohnte Alltag auch.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏠', title: 'Eigenes Zuhause', desc: 'Vertraute Umgebung bleibt — kein Heimumzug' },
                { icon: '👤', title: '1:1-Betreuung', desc: 'Eine Kraft, ein Mensch — keine wechselnden Gesichter' },
                { icon: '🌙', title: 'Tag & Nacht da', desc: 'Rund um die Uhr erreichbar — auch nachts' },
              ].map((item) => (
                <div key={item.title} className="bg-[#F8F7F5] rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-[13px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                  <p className="text-[12px] text-[#8B8B8B] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ② FÜR WEN */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Für wen ist 24h-Pflege die richtige Wahl?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-6">
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
                <div key={item.title} className="bg-[#F8F7F5] rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                    <p className="text-[12px] text-[#8B8B8B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#F2EDE6] rounded-xl p-5 mb-3">
              <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#8B7355] mb-2">Wann 24h-Pflege alleine nicht ausreicht</p>
              <p className="text-[13px] text-[#6B5A44] leading-relaxed">
                Bei intensivem medizinischem Versorgungsbedarf arbeitet die Betreuungskraft in Kombination mit einem ambulanten Pflegedienst. Primundus koordiniert diese Zusammenarbeit auf Wunsch — so bleibt das Zuhause auch bei höherem Bedarf die Option.
              </p>
            </div>
            <div className="bg-[#FDF0EE] rounded-xl p-4">
              <p className="text-[13px] text-[#8B3E2F] leading-relaxed">
                Nicht sicher ob 24h-Pflege die richtige Lösung ist? Primundus berät kostenlos und ehrlich — auch wenn das Ergebnis eine andere Empfehlung ist.
              </p>
            </div>
          </div>

          {/* ③ LEISTUNGEN */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E3DF]">
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#3D7A5C] mb-4">Betreuungskraft übernimmt</p>
                {['Körperpflege — Waschen, Ankleiden, Zahnpflege','Kochen — frisch, nach Vorlieben und Diät','Haushalt — Putzen, Einkaufen, Wäsche','Mobilisierung, Spaziergänge, Begleitung','Gesellschaft und Begleitung — ganztags','Medikamentenerinnerung','Arzt- und Therapietermine begleiten','Nachtbereitschaft — immer erreichbar'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-[#F0EDE8] last:border-0">
                    <span className="w-4 h-4 rounded-full bg-[#E8F5EE] flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-[#3D7A5C] text-[9px] font-bold">✓</span></span>
                    <span className="text-[13px] text-[#2E2E2E] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B7355] mb-4">Ambulanter Pflegedienst ergänzt</p>
                {['Injektionen (Insulin, Blutverdünner)','Verbandswechsel, Wundversorgung','Katheterversorgung','Ernährung über Magensonde','Beatmungspflege','Komplexe medizinische Versorgung'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-[#F0EDE8] last:border-0">
                    <span className="text-[#8B7355] font-bold text-[12px] flex-shrink-0 mt-0.5">+</span>
                    <span className="text-[13px] text-[#2E2E2E] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F8F7F5] border-t border-[#E5E3DF] px-6 py-4">
              <p className="text-[13px] text-[#2E2E2E] leading-relaxed"><strong className="font-bold text-[#1C1C1C]">Beide gemeinsam machen häusliche Pflege auch bei hohem Bedarf möglich.</strong> Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst.</p>
            </div>
          </div>

          {/* ④ KOSTEN */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Kosten & Kassenzuschüsse in Paderborn 2026
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden mb-4">
            <div className="bg-[#F8F7F5] px-5 py-3 border-b border-[#E5E3DF]">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Kostenbeispiel — Pflegegrad 3 in Paderborn</p>
            </div>
            <div className="px-5 py-4 space-y-2">
              {[
                { label: 'Kosten Primundus', value: '2.200–3.500 €/Monat', green: false },
                { label: '− Pflegegeld PG 3', value: '− 599 €/Monat', green: true },
                { label: '− Entlastungsbudget (anteilig)', value: '− ca. 295 €/Monat', green: true },
                { label: '− Steuerabzug (ca.)', value: '− ca. 200 €/Monat', green: true },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center text-[14px]">
                  <span className="text-[#8B8B8B]">{row.label}</span>
                  <span className={`font-semibold whitespace-nowrap text-right ${row.green ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-[15px] font-bold pt-3 mt-1 border-t border-[#E5E3DF]">
                <span className="text-[#1C1C1C]">Ihr Eigenanteil ca.</span>
                <span className="text-[#8B7355]">ca. 1300–2400 €/Monat</span>
              </div>
            </div>
            <div className="bg-[#F8F7F5] border-t border-[#E5E3DF] px-5 py-3">
              <p className="text-[12px] text-[#8B8B8B]">Pflegeheim Paderborn: Eigenanteil Ø 2,400–2,800 €/Monat — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause</p>
            </div>
          </div>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="bg-[#F8F7F5]">
                  {['Pflegegrad','Pflegegeld/Mo','Entlastungsbudget/Jahr'].map((h) => (
                    <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[['PG 2','347 €','3.539 €'],['PG 3','599 €','3.539 €'],['PG 4','800 €','3.539 €'],['PG 5','990 €','3.539 €']].map(([pg,pgeld,budget],i) => (
                    <tr key={pg} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[13px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pgeld}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2"><p className="text-[11px] text-[#8B8B8B]">Stand 2026 · Bundesweit einheitlich</p></div>
          </div>
          

          {/* ⑤ EINZUGSGEBIET */}
          <div className="bg-[#F2EDE6] border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[13px] font-bold text-[#6B5A44] mb-1">Einzugsgebiet Paderborn</p>
            <p className="text-[13px] text-[#6B5A44] leading-relaxed">Paderborn und Kreis Paderborn: Bad Lippspringe, Salzkotten, Delbrück, Büren und alle Gemeinden im Kreis Paderborn</p>
          </div>

          {/* ⑥ FAQ */}
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen — 24h-Pflege in Paderborn</h2>
          <div className="space-y-3 mb-12">
            {[
              { q: 'Was kostet eine 24h-Pflegekraft in Paderborn?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1300–2400 €/Monat — deutlich günstiger als ein Pflegeheim in Paderborn (Ø 2,400–2,800 €/Monat Eigenanteil).' },
              { q: 'Wie schnell kann eine Pflegekraft in Paderborn starten?', a: 'In 4–7 Tagen nach dem ersten Beratungsgespräch. In dringenden Situationen oft schneller möglich.' },
              { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
              { q: 'Ist 24h-Pflege über Primundus in Paderborn rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit über 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
              { q: 'Welches Einzugsgebiet wird in Paderborn bedient?', a: 'Paderborn und Kreis Paderborn: Bad Lippspringe, Salzkotten, Delbrück, Büren und alle Gemeinden im Kreis Paderborn' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{item.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4"><p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.a}</p></div>
              </details>
            ))}
          </div>

          {/* ⑦ TRENNLINIE */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-[#E5E3DF]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#8B8B8B] whitespace-nowrap">So arbeiten wir</p>
            <div className="flex-1 h-px bg-[#E5E3DF]" />
          </div>

          {/* ⑧ KONDITIONEN */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-5 mb-8">
            <div className="flex items-start gap-3 pb-4 mb-2 border-b border-[#E5E3DF]">
              <span className="w-7 h-7 rounded-full bg-[#8B7355] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <div className="flex-1 min-w-0"><span className="text-[15px] font-bold text-[#1C1C1C] block mb-1">Unsere Konditionen</span>
              <span className="bg-[#E8F5EE] text-[#2A5C3F] text-[11px] font-semibold px-3 py-1 rounded-full inline-block">100% Sorgenfrei und ohne Risiko</span></div>
            </div>
            {[
              { icon: '🛡', title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
              { icon: '📄', title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
              { icon: '⏱', title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
              { icon: '👤', title: 'Persönlicher Ansprechpartner', desc: '7 Tage/Woche für Sie da' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 py-3 border-b border-[#F0EDE8] last:border-0">
                <div className="w-9 h-9 rounded-lg border border-[#E5E3DF] flex items-center justify-center flex-shrink-0 text-lg">{item.icon}</div>
                <div>
                  <p className="text-[14px] font-bold text-[#1C1C1C] mb-0.5">{item.title}</p>
                  <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-4 mt-1 border-t border-[#E5E3DF]">
              <img src="/images/primundus_testsieger-2021.webp" alt="Testsieger DIE WELT" className="w-10 h-12 object-contain flex-shrink-0" />
              <div>
                <p className="text-[14px] font-bold text-[#1C1C1C]">Testsieger bei DIE WELT</p>
                <p className="text-[13px] text-[#8B8B8B] italic">„Primundus überzeugte mit der besten Kombination aus Preis, Qualität und Kundenservice."</p>
              </div>
            </div>
          </div>

          {/* ⑨ ABLAUF */}
          <h2 className="text-[22px] md:text-[26px] font-bold text-[#1C1C1C] text-center mb-8">In 2 Minuten zu Ihrem persönlichen Angebot</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { n: '1', title: 'Angebot online einholen', desc: 'Wenige Fragen zur Pflegesituation — individueller Preis inklusive Zuschüsse und Steuervorteile.', chip: '⏱ Dauert unter 2 Minuten' },
              { n: '2', title: 'Fundierte Entscheidungsgrundlage', desc: 'Vollständige Übersicht aller Zuschüsse, Steuervorteile und Finanzierungsoptionen.', chip: '✉ Auch per E-Mail erhältlich' },
              { n: '3', title: 'Passende Pflegekräfte erhalten', desc: 'Auf Wunsch direkt passende Pflegekräfte-Profile — ohne weiteren Aufwand für Sie.', chip: '✓ Mit Bestpreis-Garantie' },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-11 h-11 rounded-full bg-[#3d2314] text-white text-[18px] font-bold flex items-center justify-center mx-auto mb-4">{step.n}</div>
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-2 leading-snug">{step.title}</p>
                <p className="text-[13px] text-[#8B8B8B] leading-relaxed mb-3">{step.desc}</p>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F5EE] text-[#2A5C3F] text-[11px] font-semibold px-3 py-1 rounded-full">{step.chip}</span>
              </div>
            ))}
          </div>
          <div className="text-center mb-12">
            <a href="https://kostenrechner.primundus.de" className="inline-flex items-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[16px] py-4 px-10 rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
              Kosten & Pflegekräfte ansehen
            </a>
          </div>

          {/* ⑩ CTA */}
          <ArticleCTA
            headline="Ist 24h-Pflege in Paderborn die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />

        </div>
      </div>
    </>
  )
}
