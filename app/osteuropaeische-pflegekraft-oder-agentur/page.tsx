import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'direkt-vs-agentur', title: 'Direkt vs. Agentur' },
  { id: 'vorteile-agentur', title: 'Vorteile der Agentur' },
  { id: 'worauf-achten', title: 'Worauf bei der Agenturwahl achten?' },
  { id: 'primunus', title: 'Was Primundus anders macht' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Osteuropäische Pflegekraft direkt oder über Agentur? | Primundus',
  description: 'Osteuropäische Pflegekraft direkt suchen oder über eine Agentur? Vollständiger Vergleich: Kosten, Rechtssicherheit, Qualität und was bei der Agenturwahl wirklich zählt.',
  alternates: { canonical: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur/' },
  openGraph: {
    title: 'Osteuropäische Pflegekraft oder Agentur? | Primundus',
    description: 'Direktvermittlung oder Agentur: Was ist besser, günstiger und rechtssicherer?',
    url: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Osteuropäische Pflegekraft direkt oder über Agentur',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche/' },
      { '@type': 'ListItem', position: 3, name: 'Osteuropäische Pflegekraft oder Agentur', item: 'https://primundus.de/osteuropaeische-pflegekraft-oder-agentur/' },
    ],
  },
]

export default function OsteuropaeischePflegekraftOderAgentur() {
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
            <a href="/vergleiche/" className="hover:text-[#8B7355] transition-colors">Vergleiche</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Osteuropäische Pflegekraft oder Agentur</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Osteuropäische Pflegekraft direkt oder über Agentur?
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Viele Familien fragen sich: Warum nicht die Pflegekraft direkt in Polen oder Rumänien suchen statt über eine Agentur? Klingt günstiger. Die Realität ist komplexer — direktes Suchen bedeutet: selbst prüfen, selbst Rechtssicherheit herstellen, selbst Ersatz organisieren wenn die Kraft krank wird. Dieser Vergleich zeigt was wirklich anders ist.
          </p>

          <h2 id="direkt-vs-agentur" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Direkt vs. Agentur — vollständiger Vergleich
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Direktsuche</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">Agentur (Primundus)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Rechtssicherheit', 'Eigenverantwortung — Scheinselbstständigkeitsrisiko', 'A1-Bescheinigung, Entsendemodell rechtssicher'],
                    ['Prüfung der Kraft', 'Selbst durchführen — ohne Referenzen', 'Primundus prüft Erfahrung, Deutsch, Referenzen'],
                    ['Ersatz bei Ausfall', 'Familie organisiert selbst — oft Versorgungslücke', 'Primundus stellt sofort Ersatz'],
                    ['Zeitaufwand', 'Erheblich — Suche, Verhandlung, Verträge', 'Minimal — Primundus übernimmt alles'],
                    ['Kraftwechsel', 'Familie muss neu suchen', 'Primundus organisiert nahtlos'],
                    ['Startzeitraum', 'Wochen bis Monate', '4–7 Tage'],
                    ['Qualitätssicherung', 'Keine systematische', 'Laufend durch Primundus'],
                    ['Kosten', 'Evtl. niedriger', '2.200–3.500 €/Mo — transparent'],
                  ].map(([krit, direkt, agentur], i) => (
                    <tr key={krit} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{krit}</td>
                      <td className="px-5 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{direkt}</td>
                      <td className="px-5 py-3 text-[13px] font-semibold text-[#3D7A5C] border-b border-[#E5E3DF]">{agentur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="vorteile-agentur" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Warum die meisten Familien auf eine Agentur setzen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { vorteil: 'Rechtssicherheit ohne eigene Expertise', desc: 'Das Entsendemodell mit A1-Bescheinigung ist komplex. Wer es falsch macht riskiert Scheinselbstständigkeit. Eine seriöse Agentur stellt die Rechtssicherheit vollständig her — die Familie muss sich nicht damit befassen.' },
              { vorteil: 'Geprüfte Kräfte aus einem Pool', desc: 'Primundus prüft Deutschkenntnisse aktiv, prüft Referenzen, wählt nach Erfahrung und Diagnose aus. Wer selbst sucht — auf Facebook, Anzeigenmärkten — hat keine verlässliche Grundlage für die Qualitätsbewertung.' },
              { vorteil: 'Ersatz ohne Lücke', desc: 'Was passiert wenn die direkt gesuchte Kraft krank wird, kündigt oder nach Hause möchte? Die Familie muss von vorne anfangen — während die Versorgung nicht gesichert ist. Bei Primundus gibt es sofort Ersatz.' },
              { vorteil: 'Kraftwechsel ohne Aufwand', desc: 'Alle 6–8 Wochen wechselt die Kraft. Primundus kündigt rechtzeitig an, stellt die neue Kraft vor, organisiert die Übergabe. Die Familie muss sich nicht darum kümmern.' },
              { vorteil: 'Schneller Start', desc: '4–7 Tage von der Anfrage bis zur Kraft zuhause. Wer selbst sucht braucht Wochen bis Monate.' },
            ].map((item) => (
              <div key={item.vorteil} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.vorteil}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="worauf-achten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Worauf bei der Wahl einer Agentur achten?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Nicht jede Agentur ist gleich. Diese Kriterien helfen seriöse von unseriösen Angeboten zu unterscheiden.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { kriterium: '✓ Entsendemodell mit A1-Bescheinigung', detail: 'Die Kraft ist bei einem EU-Unternehmen angestellt und kommt mit A1-Bescheinigung. Keine Agentur die "selbstständige Kräfte" vermittelt.' },
              { kriterium: '✓ Transparente Preise ohne versteckte Gebühren', detail: 'Alles inklusive — Kraft, Wechsel, Ersatz. Keine Aufpreis-Überraschungen.' },
              { kriterium: '✓ Tägliche Kündbarkeit', detail: 'Keine Mindestlaufzeit, keine langen Kündigungsfristen. Seriosität zeigt sich darin dass man Kunden nicht hält sondern überzeugt.' },
              { kriterium: '✓ Aktive Qualitätsprüfung der Kräfte', detail: 'Nicht nur Selbstauskunft der Kraft — aktive Prüfung von Deutschkenntnissen, Referenzen, Erfahrung.' },
              { kriterium: '✓ Erfahrung und Referenzen der Agentur', detail: 'Wie lange am Markt? Wie viele Betreuungen? Gibt es unabhängige Bewertungen?' },
            ].map((item) => (
              <div key={item.kriterium} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-1">{item.kriterium}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="primunus" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was Primundus anders macht
          </h2>
          <div className="space-y-3 mb-10">
            {[
              '20+ Jahre Markterfahrung — 60.000+ Betreuungen durchgeführt',
              'Testsieger DIE WELT — unabhängig bewertet',
              'Täglich kündbar — ohne Mindestlaufzeit',
              'Transparente Preise: 2.200–3.500 €/Monat, alles inklusive',
              'Aktive Qualitätsprüfung aller Kräfte (Deutsch, Erfahrung, Referenzen)',
              'Sofortiger Ersatz bei Ausfall — keine Versorgungslücke',
              'Laufende Betreuung durch Primundus als Ansprechpartner',
              'Start in 4–7 Tagen nach Erstgespräch',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-[#2E2E2E]">{item}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Ist Direktsuche einer Pflegekraft günstiger?', a: 'Evtl. auf dem Papier — aber dann muss die Familie selbst Rechtssicherheit herstellen, selbst prüfen, selbst Ersatz organisieren. Der versteckte Aufwand und das rechtliche Risiko werden selten einkalkuliert.' },
              { q: 'Kann ich eine Pflegekraft direkt aus Polen suchen?', a: 'Technisch ja — aber die Rechtssicherheit herzustellen ist komplex (Entsendemodell, A1-Bescheinigung) und das Scheinselbstständigkeitsrisiko ist hoch. Seriöse Agenturen nehmen dieses Risiko ab.' },
              { q: 'Wie erkenne ich eine seriöse Pflegeagentur?', a: 'Entsendemodell mit A1-Bescheinigung, transparente Preise, tägliche Kündbarkeit, aktive Qualitätsprüfung, langjährige Erfahrung, unabhängige Bewertungen.' },
              { q: 'Was passiert wenn die Kraft direkt kündigt?', a: 'Bei Direktsuche: Die Familie muss sofort neu suchen — Wochen bis Monate bis zur nächsten Kraft. Bei Primundus: Sofortiger Ersatz, keine Versorgungslücke.' },
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
