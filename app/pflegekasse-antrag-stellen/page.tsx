import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'antrag', title: 'Antrag stellen — so geht es' },
  { id: 'leistungen', title: 'Welche Leistungen beantragen?' },
  { id: 'fristen', title: 'Fristen & Bearbeitungszeiten' },
  { id: 'ablehnung', title: 'Antrag abgelehnt — was tun?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekasse Antrag stellen — Schritt für Schritt 2026 | Primundus',
  description: 'Pflegekasse Antrag stellen 2026: Pflegegrad beantragen, welche Leistungen es gibt, Fristen und was bei Ablehnung zu tun ist. Mit Musterschreiben.',
  alternates: { canonical: 'https://primundus.de/pflegekasse-antrag-stellen/' },
  openGraph: {
    title: 'Pflegekasse Antrag stellen 2026 | Primundus',
    description: 'Pflegegrad und Pflegeleistungen bei der Pflegekasse beantragen — Schritt für Schritt erklärt.',
    url: 'https://primundus.de/pflegekasse-antrag-stellen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekasse Antrag stellen — Schritt für Schritt 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekasse-antrag-stellen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekasse Antrag stellen', item: 'https://primundus.de/pflegekasse-antrag-stellen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie stelle ich einen Antrag bei der Pflegekasse?', acceptedAnswer: { '@type': 'Answer', text: 'Der Antrag ist formlos — ein kurzes Schreiben oder Anruf genügt: "Ich beantrage Leistungen der Pflegeversicherung." Die Pflegekasse organisiert dann die Begutachtung durch den Medizinischen Dienst. Der Antrag ist auch telefonisch oder per E-Mail möglich. Wichtig: Das Datum des Antrags ist entscheidend — Leistungen gelten rückwirkend ab diesem Datum.' } },
      { '@type': 'Question', name: 'Wie lange dauert die Bearbeitung eines Pflegegrad-Antrags?', acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekasse hat 25 Arbeitstage Zeit für die Bearbeitung. Bei Entlassung aus dem Krankenhaus verkürzt sich die Frist auf 1 Woche. Bei Überschreitung der Frist hat der Antragsteller Anspruch auf 70 € Entschädigung pro Woche Verzögerung.' } },
    ],
  },
]

export default function PflegekasseAntragStellen() {
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
            <a href="/finanzierung/" className="hover:text-[#8B7355] transition-colors">Finanzierung</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegekasse Antrag stellen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegekasse Antrag stellen — Schritt für Schritt 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Der Antrag bei der Pflegekasse ist der erste und wichtigste Schritt — denn alle Leistungen gelten rückwirkend ab Antragsdatum, nicht ab dem Datum der Begutachtung. Der Antrag selbst ist formlos: Ein kurzes Schreiben oder ein Telefonanruf genügt.
          </p>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Der wichtigste Tipp: Antrag sofort stellen</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Leistungen der Pflegeversicherung gelten ab Antragsdatum — nicht ab Begutachtungsdatum oder Bescheiddatum. Wer 6 Wochen wartet verliert 6 Wochen Pflegegeld. Antrag formlos stellen, noch bevor alles organisiert ist.
            </p>
          </div>

          <h2 id="antrag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Antrag stellen — so geht es
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Antrag auf Leistungen der Pflegeversicherung ist formlos — es gibt kein Pflichtformular. Ein kurzes Schreiben oder sogar ein Telefonanruf genügt.
          </p>

          <div className="bg-[#F8F7F5] border border-[#E5E3DF] rounded-2xl p-6 mb-6 font-mono text-[14px] leading-relaxed text-[#2E2E2E]">
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-3">Musterformulierung</p>
            <p className="mb-3">Sehr geehrte Damen und Herren,</p>
            <p className="mb-3">hiermit beantrage ich für [Name, Geburtsdatum, Versichertennummer] Leistungen der sozialen Pflegeversicherung gemäß SGB XI.</p>
            <p className="mb-3">Mit freundlichen Grüßen,<br />[Unterschrift, Datum]</p>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-6">Dieser kurze Brief reicht vollständig aus. Die Pflegekasse veranlasst dann die Begutachtung durch den Medizinischen Dienst.</p>

          <p className="text-[15px] font-semibold text-[#2E2E2E] mb-3">Antrag stellen per:</p>
          <div className="grid md:grid-cols-3 gap-3 mb-10">
            {[
              { weg: 'Brief / Post', desc: 'Formlos, kein Pflichtformular. Einwurf-Einschreiben empfohlen (Datum gesichert).' },
              { weg: 'Telefon', desc: 'Anruf bei der Pflegekasse genügt. Datum notieren, Gesprächspartner notieren.' },
              { weg: 'E-Mail / Online', desc: 'Viele Pflegekassen bieten Online-Antrag — Datum des Absenders gilt.' },
            ].map((item) => (
              <div key={item.weg} className="bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-1">{item.weg}</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Welche Leistungen beantragen?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Mit dem Pflegegrad-Antrag werden automatisch alle Grundleistungen freigeschaltet. Einige Leistungen müssen zusätzlich separat beantragt oder aktiviert werden.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { leistung: 'Pflegegrad (automatisch)', desc: 'Mit dem Antrag wird die Begutachtung durch den MD ausgelöst. Der Pflegegrad und alle dazugehörigen Leistungen (Pflegegeld, Entlastungsbetrag) werden automatisch festgestellt.' },
              { leistung: 'Pflegegeld (automatisch bei PG 2–5)', desc: 'Wird automatisch monatlich ausgezahlt wenn Pflegegeld gewählt wird (statt Sachleistungen).' },
              { leistung: 'Entlastungsbetrag (auf Antrag)', desc: '131 €/Monat für alle PG 1–5 — muss aktiviert werden und läuft nicht automatisch. Pflegekasse anschreiben: "Ich beantrage den Entlastungsbetrag nach §45b SGB XI."' },
              { leistung: 'Entlastungsbudget', desc: 'Nicht genutztes Entlastungsgeld läuft als Puffer — muss durch Nachweise über anerkannte Ausgaben abgerechnet werden.' },
              { leistung: 'Wohnraumanpassung (separat)', desc: 'Vor Beginn der Maßnahme separat bei der Pflegekasse beantragen — bis 4.180 €/Maßnahme.' },
              { leistung: 'Pflegehilfsmittel (separat)', desc: '42 €/Monat Pflegehilfsmittelpauschale — gesondert beantragen oder automatisch bei bestimmten Anbietern.' },
            ].map((item) => (
              <div key={item.leistung} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.leistung}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="fristen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Fristen & Bearbeitungszeiten
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Situation', 'Frist für Pflegekasse', 'Besonderheit'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Normaler Antrag', '25 Arbeitstage', 'Ab Antragsdatum bis Bescheid'],
                    ['Entlassung aus Krankenhaus', '1 Woche', 'Verkürzte Frist bei Krankenhausentlassung'],
                    ['Fristüberschreitung', 'Entschädigungspflicht', '70 €/Woche Verzögerung für Antragsteller'],
                    ['Widerspruch nach Bescheid', '1 Monat', 'Ab Datum des Bescheids'],
                  ].map(([situation, frist, besonderheit], i) => (
                    <tr key={situation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{situation}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#1C1C1C] border-b border-[#E5E3DF]">{frist}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{besonderheit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="ablehnung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Antrag abgelehnt oder zu niedrig eingestuft — was tun?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { schritt: 'Bescheid genau lesen', desc: 'Welcher Pflegegrad wurde festgestellt? Wenn kein Pflegegrad oder ein zu niedriger: Widerspruch ist das Mittel.' },
              { schritt: 'MD-Gutachten anfordern', desc: 'Das vollständige Gutachten anfordern — kostenlos. Es zeigt wie jeder Lebensbereich bewertet wurde.' },
              { schritt: 'Widerspruch innerhalb 1 Monat', desc: 'Formloser Widerspruch: "Ich lege Widerspruch gegen den Bescheid vom [Datum] ein." Keine Begründung nötig — die kommt nach Gutachteneinsicht.' },
              { schritt: 'Pflegetagebuch nachreichen', desc: 'Neues Tagebuch führen, mit aktuellen Arztberichten nachreichen. Das verbessert die Erfolgschancen erheblich.' },
            ].map((item, i) => (
              <div key={item.schritt} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.schritt}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Anleitung:{' '}
            <a href="/widerspruch-pflegekasse-einlegen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Widerspruch einlegen — Muster & Tipps</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie stelle ich einen Antrag bei der Pflegekasse?', a: 'Formlos — per Brief, Telefon oder E-Mail: "Ich beantrage Leistungen der Pflegeversicherung." Name, Versichertennummer, Datum. Die Pflegekasse veranlasst die Begutachtung.' },
              { q: 'Wie lange dauert die Bearbeitung?', a: '25 Arbeitstage ab Antragsdatum. Bei Krankenhausentlassung 1 Woche. Bei Fristüberschreitung Anspruch auf 70 €/Woche Entschädigung.' },
              { q: 'Brauche ich ein bestimmtes Formular?', a: 'Nein — der Antrag ist formlos. Viele Pflegekassen bieten eigene Formulare an (erleichtert die Bearbeitung), aber es ist keine Pflicht.' },
              { q: 'Muss ich den Entlastungsbetrag separat beantragen?', a: 'Ja — der Entlastungsbetrag (131 €/Monat) läuft nicht automatisch. Gesondert bei der Pflegekasse beantragen: "Ich beantrage den Entlastungsbetrag nach §45b SGB XI."' },
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
