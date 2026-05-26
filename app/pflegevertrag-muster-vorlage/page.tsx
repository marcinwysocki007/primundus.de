import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-muss-rein', title: 'Was muss in den Pflegevertrag?' },
  { id: 'vorlage', title: 'Vorlage — vollständiges Muster' },
  { id: 'kost-logis', title: 'Kost & Logis richtig regeln' },
  { id: 'kuendigung', title: 'Kündigung & Laufzeit' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegevertrag Muster & Vorlage 2026 — kostenlos | Primundus',
  description: 'Pflegevertrag Vorlage 2026: Vollständiges Muster mit allen Pflichtangaben — Leistungsumfang, Vergütung, Kost und Logis, Kündigung. Kostenlos zum Ausdrucken.',
  alternates: { canonical: 'https://primundus.de/pflegevertrag-muster-vorlage/' },
  openGraph: {
    title: 'Pflegevertrag Muster & Vorlage 2026 | Primundus',
    description: 'Kostenloses Pflegevertrag-Muster mit allen Pflichtangaben für die häusliche 24h-Pflege.',
    url: 'https://primundus.de/pflegevertrag-muster-vorlage/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegevertrag Muster und Vorlage 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegevertrag-muster-vorlage/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegevertrag Muster', item: 'https://primundus.de/pflegevertrag-muster-vorlage/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was muss in einen Pflegevertrag?', acceptedAnswer: { '@type': 'Answer', text: 'Pflichtbestandteile: Name und Adresse beider Parteien, Beginn und ggf. Dauer, genaue Beschreibung der Pflegeleistungen, Vergütung und Zahlungsmodalitäten, Kost und Logis (Sachbezugswert), Urlaub und Krankheit, Kündigung, Verschwiegenheitspflicht.' } },
    ],
  },
]

export default function PflegevertragMusterVorlage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/rechtliches/" className="hover:text-[#8B7355] transition-colors">Rechtliches</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegevertrag Muster & Vorlage</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegevertrag Muster & Vorlage 2026 — vollständig & kostenlos
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Ein Pflegevertrag schützt beide Seiten — die Familie und die Betreuungskraft. Er regelt was geleistet wird, was es kostet, wie Kost und Logis angerechnet werden und wie gekündigt werden kann. Wer mit Primundus im Entsendemodell arbeitet, bekommt einen fertigen Vertrag — wer direkt anstellt, braucht dieses Muster.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Wichtiger Hinweis</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Diese Vorlage gilt für die Direktanstellung einer Pflegekraft durch die Familie (deutsches Arbeitsverhältnis). Beim Entsendemodell über Primundus schließt die Familie nur einen Vertrag mit Primundus als Agentur — kein eigener Arbeitsvertrag mit der Kraft notwendig. Die Vorlage hier dient als Orientierung und ersetzt keine Rechtsberatung.
            </p>
          </div>

          <h2 id="was-muss-rein" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was muss in den Pflegevertrag?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { punkt: 'Vertragsparteien', detail: 'Vollständiger Name, Adresse und ggf. Geburtsdatum beider Parteien. Bei minderjährigen oder geschäftsunfähigen Pflegebedürftigen: Name und Adresse der bevollmächtigten Person.' },
              { punkt: 'Beginn und Laufzeit', detail: 'Datum des Beginns. Befristet oder unbefristet? Bei befristeten Verträgen: Enddatum und Verlängerungsregelung.' },
              { punkt: 'Leistungsumfang', detail: 'Was genau übernimmt die Kraft? Körperpflege, Haushalt, Kochen, Mobilisierung, Gesellschaft — möglichst konkret. Was wird ausdrücklich nicht erwartet (z.B. schwere medizinische Behandlungspflege)?' },
              { punkt: 'Arbeitszeit', detail: 'Grundsätzliche Bereitschaft (z.B. Wochenstunden, Rufbereitschaft). Wichtig: Unterschied zwischen Bereitschaft und aktiver Arbeitszeit.' },
              { punkt: 'Vergütung', detail: 'Bruttolohn pro Monat. Zahlungsmodalitäten (Datum, Konto). Überstundenregelung.' },
              { punkt: 'Kost & Logis', detail: 'Freie Unterkunft und Verpflegung werden als Sachbezug auf den Lohn angerechnet. Gesetzliche Sachbezugswerte (2026): Unterkunft ca. 278 €/Monat, Verpflegung ca. 313 €/Monat.' },
              { punkt: 'Urlaub', detail: 'Mindestens gesetzlicher Mindesturlaub (20 Tage bei 5-Tage-Woche). Urlaubsplanung und -vertretung.' },
              { punkt: 'Krankheit', detail: 'Lohnfortzahlung im Krankheitsfall (gesetzlich: 6 Wochen). Meldepflicht.' },
              { punkt: 'Kündigung', detail: 'Kündigungsfristen (gesetzlich in der Probezeit: 2 Wochen; danach: 4 Wochen). Außerordentliche Kündigung bei wichtigem Grund.' },
              { punkt: 'Verschwiegenheit', detail: 'Verpflichtung zur Verschwiegenheit über alle persönlichen und gesundheitlichen Informationen des Pflegebedürftigen.' },
            ].map((item) => (
              <div key={item.punkt} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.punkt}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="vorlage" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Vorlage — vollständiges Pflegevertrag-Muster
          </h2>
          <div className="bg-[#F8F7F5] border border-[#E5E3DF] rounded-2xl p-6 mb-10 font-mono text-[13px] leading-[1.8] text-[#2E2E2E] overflow-x-auto">
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-4">ARBEITSVERTRAG — Häusliche Betreuung und Pflege</p>

            <p className="font-bold mt-4">§ 1 Vertragsparteien</p>
            <p>zwischen</p>
            <p>Name, Adresse der Familie / bevollmächtigten Person (nachfolgend „Arbeitgeber")</p>
            <p>und</p>
            <p>Name, Adresse der Betreuungskraft (nachfolgend „Arbeitnehmer")</p>

            <p className="font-bold mt-4">§ 2 Beginn und Dauer</p>
            <p>Das Arbeitsverhältnis beginnt am ____________ und wird auf unbestimmte Zeit / bis zum ____________ geschlossen.</p>
            <p>Die ersten __ Wochen gelten als Probezeit.</p>

            <p className="font-bold mt-4">§ 3 Tätigkeitsbeschreibung</p>
            <p>Der Arbeitnehmer übernimmt die häusliche Betreuung und Pflege von:</p>
            <p>Name des Pflegebedürftigen: ________________________</p>
            <p>Die Tätigkeit umfasst insbesondere:</p>
            <p>□ Körperpflege (Waschen, Ankleiden, Zahnpflege)</p>
            <p>□ Mobilisierung und Begleitung</p>
            <p>□ Haushaltsführung (Kochen, Reinigung, Wäsche)</p>
            <p>□ Gesellschaft und Betreuung</p>
            <p>□ Medikamentenerinnerung</p>
            <p>□ Begleitung zu Terminen</p>
            <p>□ Weitere: _______________________________________</p>

            <p className="font-bold mt-4">§ 4 Arbeitszeit</p>
            <p>Regelmäßige wöchentliche Arbeitszeit: __ Stunden.</p>
            <p>Davon: aktive Arbeitszeit __ Std. / Bereitschaftszeit __ Std.</p>
            <p>Einteilung der Arbeitszeit nach betrieblichen Erfordernissen.</p>

            <p className="font-bold mt-4">§ 5 Vergütung</p>
            <p>Bruttomonatslohn: ____________ Euro.</p>
            <p>Zahlung bis zum __ des Folgemonats auf das Konto: ____________.</p>
            <p>Kost und Logis werden als Sachbezug nach gesetzlichen Werten angerechnet (2026: Unterkunft ca. 278 €, Verpflegung ca. 313 €/Monat).</p>

            <p className="font-bold mt-4">§ 6 Urlaub</p>
            <p>Dem Arbeitnehmer stehen __ Werktage Urlaub pro Jahr zu (mind. 20 Tage bei 5-Tage-Woche).</p>
            <p>Urlaubsplanung in Abstimmung mit dem Arbeitgeber. Ersatzpflege während des Urlaubs organisiert der Arbeitgeber.</p>

            <p className="font-bold mt-4">§ 7 Krankheit</p>
            <p>Im Krankheitsfall besteht Anspruch auf Lohnfortzahlung für 6 Wochen (§ 3 EntgFG).</p>
            <p>Erkrankung ist unverzüglich zu melden. Ab dem 3. Krankheitstag ist eine ärztliche Bescheinigung vorzulegen.</p>

            <p className="font-bold mt-4">§ 8 Kündigung</p>
            <p>Während der Probezeit: Kündigungsfrist 2 Wochen.</p>
            <p>Nach der Probezeit: Kündigungsfrist 4 Wochen zum 15. oder zum Ende des Kalendermonats (§ 622 BGB).</p>
            <p>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</p>

            <p className="font-bold mt-4">§ 9 Verschwiegenheit</p>
            <p>Der Arbeitnehmer ist zur Verschwiegenheit über alle ihm bekannt gewordenen persönlichen und gesundheitlichen Informationen des Pflegebedürftigen verpflichtet. Diese Verpflichtung gilt auch nach Beendigung des Arbeitsverhältnisses.</p>

            <p className="font-bold mt-4">§ 10 Schlussbestimmungen</p>
            <p>Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform.</p>
            <p>Es gilt deutsches Recht.</p>

            <p className="mt-6">Ort, Datum: _________________________</p>
            <p className="mt-4">_________________________ &nbsp;&nbsp;&nbsp; _________________________</p>
            <p>Unterschrift Arbeitgeber &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift Arbeitnehmer</p>
          </div>

          <h2 id="kost-logis" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kost & Logis richtig regeln
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Freie Unterkunft und Verpflegung sind kein Lohnzuschlag — sie werden als Sachbezugswert auf die Vergütung angerechnet. Das reduziert den auszuzahlenden Bruttolohn entsprechend.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Sachbezug', 'Wert 2026/Monat', 'Hinweis'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Unterkunft (eigenes Zimmer)', 'ca. 278 €', 'Amtlicher Sachbezugswert — kann je nach Bundesland leicht abweichen'],
                    ['Verpflegung (3 Mahlzeiten)', 'ca. 313 €', 'Sachbezugswert Sozialversicherung'],
                    ['Gesamt Sachbezug', 'ca. 591 €/Monat', 'Wird vom Bruttolohn abgezogen'],
                  ].map(([sachb, wert, hinweis], i) => (
                    <tr key={sachb} className={i === 2 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] border-b border-[#E5E3DF] ${i === 2 ? 'font-bold text-[#8B7355]' : 'text-[#2E2E2E]'}`}>{sachb}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 2 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{wert}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="kuendigung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kündigung — was gesetzlich gilt
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { phase: 'Während der Probezeit', frist: '2 Wochen', hinweis: 'Probezeit max. 6 Monate. In dieser Zeit 2 Wochen Kündigungsfrist für beide Seiten.' },
              { phase: 'Nach der Probezeit (bis 2 Jahre)', frist: '4 Wochen zum 15. oder Monatsende', hinweis: 'Gesetzliche Grundkündigung nach § 622 Abs. 1 BGB.' },
              { phase: 'Ab 2 Jahren Betriebszugehörigkeit', frist: '1 Monat zum Monatsende', hinweis: 'Frist verlängert sich stufenweise mit der Dauer der Betriebszugehörigkeit.' },
              { phase: 'Außerordentliche Kündigung', frist: 'Sofort', hinweis: 'Bei wichtigem Grund (z.B. grobe Pflichtverletzung, Diebstahl). Begründungspflicht.' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.phase}</p>
                  <span className="text-[13px] font-bold text-[#8B7355] bg-[#F2EDE6] px-3 py-1 rounded-full">{item.frist}</span>
                </div>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.hinweis}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Beschäftigungsmodelle im Überblick:{' '}
            <a href="/pflegekraft-legal-beschaeftigen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft legal beschäftigen</a>
            {' · '}
            <a href="/pflegevertrag-aufsetzen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegevertrag aufsetzen — alle Pflichtangaben</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was muss in einen Pflegevertrag?', a: 'Vertragsparteien, Beginn/Laufzeit, Leistungsumfang, Arbeitszeit, Vergütung, Kost & Logis (Sachbezugswert), Urlaub, Krankheit, Kündigung, Verschwiegenheit.' },
              { q: 'Brauche ich beim Entsendemodell einen eigenen Arbeitsvertrag?', a: 'Nein — beim Entsendemodell über Primundus schließt die Familie nur einen Vertrag mit Primundus. Kein eigenes Arbeitsverhältnis mit der Kraft, keine deutschen Sozialabgaben.' },
              { q: 'Wie werden Kost und Logis verrechnet?', a: 'Als amtlicher Sachbezugswert: ca. 278 €/Monat Unterkunft + ca. 313 €/Monat Verpflegung = ca. 591 €/Monat Gesamtabzug vom Bruttolohn.' },
              { q: 'Wie lange ist die Kündigungsfrist bei einer Pflegekraft?', a: 'In der Probezeit: 2 Wochen. Nach der Probezeit: 4 Wochen zum 15. oder Monatsende. Bei sozialer Kündigung aus wichtigem Grund: sofort.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{item.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-[#2E2E2E] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
