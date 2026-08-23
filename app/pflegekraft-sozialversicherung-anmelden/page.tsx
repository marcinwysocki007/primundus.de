import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'wann-nötig', title: 'Wann Sozialversicherung anmelden?' },
  { id: 'minijob', title: 'Minijob — Haushaltscheck' },
  { id: 'regulaer', title: 'Reguläre Beschäftigung' },
  { id: 'ablauf', title: 'Anmeldung Schritt für Schritt' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft Sozialversicherung anmelden — Anleitung 2026',
  description: 'Pflegekraft bei der Sozialversicherung anmelden: Minijob, reguläre Beschäftigung oder Entsendemodell — wann was gilt und wie die Anmeldung läuft. 2026.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft Sozialversicherung anmelden 2026 | Primundus',
    description: 'Sozialversicherungsanmeldung für Pflegekräfte — Minijob, regulär oder Entsendemodell.',
    url: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft Sozialversicherung anmelden — Anleitung 2026',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft Sozialversicherung anmelden', item: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden' },
    ],
  },
]

export default function PflegekraftSozialversicherungAnmelden() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/rechtliches" className="hover:text-pm-taupe transition-colors">Rechtliches</a>
            <span>›</span>
            <span className="text-pm-ink">Sozialversicherung anmelden</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Pflegekraft Sozialversicherung anmelden — Anleitung 2026
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Wer eine Pflegekraft direkt anstellt, wird zum Arbeitgeber — mit allen Pflichten: Sozialversicherungsanmeldung, Lohnabrechnung, Beitragsabführung. Beim Entsendemodell über Primundus entfällt das vollständig. Dieser Ratgeber erklärt beide Wege.
          </p>

          <div className="bg-pm-mint border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-pm-green-deep mb-2">Entsendemodell: Keine Anmeldung durch die Familie nötig</p>
            <p className="text-[14px] text-pm-green-deep leading-relaxed">
              Beim Entsendemodell über Primundus ist die Kraft im EU-Heimatland sozialversichert und angestellt. Die Familie hat kein eigenes Arbeitsverhältnis — keine Anmeldung, keine Abgaben, kein Aufwand. A1-Bescheinigung liegt vor.
            </p>
          </div>

          <h2 id="wann-nötig" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann ist eine Sozialversicherungsanmeldung nötig?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { modell: 'Entsendemodell (Primundus)', pflicht: 'Keine Anmeldung', detail: 'Kraft ist im EU-Heimatland angestellt und sozialversichert. A1-Bescheinigung belegt das. Familie hat keine Arbeitgeberpflichten.' },
              { modell: 'Direktanstellung — Minijob (bis 556 €/Mo)', pflicht: 'Anmeldung bei der Minijob-Zentrale', detail: 'Pauschalabgaben: ca. 15 % Kranken-, 15 % Rentenversicherung, 2 % pauschale Lohnsteuer. Über minijob-zentrale.de.' },
              { modell: 'Direktanstellung — regulär (über 556 €/Mo)', pflicht: 'Anmeldung bei Krankenkasse + Betriebsnummer', detail: 'Volle Sozialversicherungsbeiträge (ca. 40 % geteilt zwischen Arbeitgeber und Arbeitnehmer). Lohnabrechnung erforderlich.' },
            ].map((item) => (
              <div key={item.modell} className="bg-white rounded-xl p-5 border border-pm-line">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-[15px] font-bold text-pm-ink">{item.modell}</p>
                  <span className={`text-[12px] font-bold px-3 py-1 rounded-full flex-shrink-0 ${item.pflicht === 'Keine Anmeldung' ? 'bg-pm-mint text-pm-green' : 'bg-pm-coral-tint text-pm-coral-ink'}`}>{item.pflicht}</span>
                </div>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="minijob" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Minijob — Haushaltshilfe über die Minijob-Zentrale
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Für einfache Haushaltshilfen (nicht 24h-Pflege) kann der Minijob-Weg sinnvoll sein. Bei vollständiger 24h-Betreuung ist der Minijob-Rahmen jedoch zu eng — der tatsächliche Lohn übersteigt 556 €/Monat fast immer erheblich.
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Abgabe', 'Satz', 'Zahlt'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Krankenversicherung', '5 %', 'Arbeitgeber (Familie)'],
                    ['Rentenversicherung', '15 %', 'Arbeitgeber (Familie)'],
                    ['Rentenversicherung (AN-Anteil)', '3,6 %', 'Arbeitnehmer (kann entbinden)'],
                    ['Pauschale Lohnsteuer', '2 %', 'Arbeitgeber'],
                    ['Gesamt Arbeitgeber', 'ca. 22 %', 'Familie zahlt auf den Lohn oben drauf'],
                  ].map(([abgabe, satz, zahlt], i) => (
                    <tr key={abgabe} className={i === 4 ? 'bg-pm-shell' : i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className={`px-4 py-3 text-[14px] border-b border-pm-line ${i === 4 ? 'font-bold text-pm-taupe' : 'text-pm-body'}`}>{abgabe}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-pm-line ${i === 4 ? 'text-pm-taupe' : 'text-pm-ink'}`}>{satz}</td>
                      <td className="px-4 py-3 text-[13px] text-pm-mute border-b border-pm-line">{zahlt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Anmeldung über minijob-zentrale.de · Stand 2026</p>
            </div>
          </div>

          <h2 id="regulaer" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Reguläre Beschäftigung — Anmeldung und Kosten
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Bei einer Direktanstellung mit vollem Lohn (für 24h-Betreuung typisch: 1.800–2.800 € brutto/Monat) wird die Familie zum regulären Arbeitgeber.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { was: 'Betriebsnummer beim Betriebsnummern-Service beantragen', detail: 'Kostenlos über die Bundesagentur für Arbeit (ba.de). Dauert wenige Tage.' },
              { was: 'Krankenversicherung der Kraft wählen', detail: 'Kraft wählt ihre Krankenkasse. Arbeitgeber meldet dort an.' },
              { was: 'Meldung zur Sozialversicherung an die Krankenkasse', detail: 'Bei Arbeitsbeginn (spätestens am 1. Arbeitstag) Anmeldung über DEÜV-Verfahren (digital). Steuerberater empfohlen.' },
              { was: 'Lohnabrechnung monatlich', detail: 'Gehaltsabrechnung, Beitragsabführung an Krankenkasse (für alle Zweige). Lohnsteuer ans Finanzamt.' },
            ].map((item) => (
              <div key={item.was} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.was}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-pm-coral-tint border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-pm-coral-ink mb-2">Hinweis: Direktanstellung bei 24h-Pflege ist aufwändig</p>
            <p className="text-[14px] text-pm-coral-ink leading-relaxed">
              Die reguläre Direktanstellung einer 24h-Pflegekraft bedeutet erheblichen Verwaltungsaufwand: Lohnabrechnung, Urlaubsplanung, Krankenersatz, arbeitsrechtliche Verpflichtungen. Die meisten Familien wählen deshalb das Entsendemodell über Primundus.
            </p>
          </div>

          <h2 id="ablauf" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Anmeldung Schritt für Schritt (Direktanstellung)
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Betriebsnummer beantragen', desc: 'bundesagentur.de → Betriebsnummern-Service. Kostenlos, dauert 2–3 Werktage.' },
              { n: '2', title: 'Krankenversicherung der Kraft klären', desc: 'Welche Krankenkasse hat die Kraft gewählt? Diese ist Anmeldestelle für alle Sozialversicherungszweige.' },
              { n: '3', title: 'DEÜV-Meldung senden', desc: 'Elektronische Meldung an die Krankenkasse spätestens am ersten Arbeitstag. Steuerberater oder Lohnbuchhaltung einschalten.' },
              { n: '4', title: 'Monatliche Beiträge abführen', desc: 'Gesamtsozialversicherungsbeitrag (AN + AG-Anteil) an die Krankenkasse. Lohnsteuer ans Finanzamt.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-pm-line list-none">
                <span className="w-8 h-8 rounded-full bg-pm-taupe text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-pm-ink mb-1">{step.title}</p>
                  <p className="text-[14px] text-pm-body leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Muss ich eine Pflegekraft aus Polen bei der Sozialversicherung anmelden?', a: 'Nicht beim Entsendemodell über Primundus — die Kraft ist im polnischen Heimatland sozialversichert (A1-Bescheinigung). Nur bei Direktanstellung (deutsches Arbeitsverhältnis) ist eine Anmeldung bei der deutschen Sozialversicherung nötig.' },
              { q: 'Was kostet die Sozialversicherung für eine Pflegekraft?', a: 'Bei regulärer Direktanstellung: ca. 20–21 % des Bruttolohns als Arbeitgeberbeitrag (Kranken-, Pflege-, Renten-, Arbeitslosenversicherung). Bei Minijob: ca. 22 % pauschal.' },
              { q: 'Wo melde ich eine Pflegekraft als Minijob an?', a: 'Über die Minijob-Zentrale (minijob-zentrale.de). Für Haushaltsbeschäftigungen gibt es ein vereinfachtes Verfahren (Haushaltsscheck).' },
              { q: 'Was wenn ich vergessen habe die Pflegekraft anzumelden?', a: 'Rückwirkende Anmeldung möglich. Alle rückständigen Beiträge werden fällig. Bei sehr langen Unterlassungen: Strafverfolgung wegen Beitragsvorenthaltung. Besser sofort nachholen.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-pm-line group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-pm-ink pr-4">{item.q}</h3>
                  <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-pm-body leading-relaxed">{item.a}</p>
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
