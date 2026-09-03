import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-1', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 1?' },
  { id: 'leistungen', title: 'Leistungen 2026' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'beantragen', title: 'Beantragen & Tipps' },
  { id: 'pg2', title: 'Wann wird PG 2 sinnvoll?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 1 — Leistungen, Entlastungsbetrag & Beantragen 2026 | Primundus',
  description: 'Pflegegrad 1 einfach erklärt: Voraussetzungen ab 12,5 NBA-Punkten, Leistungen wie Entlastungsbetrag und Pflegehilfsmittel, und wann sich ein Antrag lohnt.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-1' },
  openGraph: {
    title: 'Pflegegrad 1 — Leistungen & Entlastungsbetrag 2026 | Primundus',
    description: 'Pflegegrad 1: 131 € Entlastungsbetrag, kein Pflegegeld. Voraussetzungen und wann PG 2 sinnvoller ist.',
    url: 'https://primundus.de/pflegegrad-1',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad 1 — Leistungen, Entlastungsbetrag & Beantragen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-1',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 1', item: 'https://primundus.de/pflegegrad-1' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 1?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 1 gibt es 131 € Entlastungsbetrag pro Monat — kein Pflegegeld, keine Pflegesachleistungen. Der Entlastungsbetrag ist zweckgebunden für anerkannte Betreuungs- und Entlastungsangebote.' } },
      { '@type': 'Question', name: 'Was sind die Voraussetzungen für Pflegegrad 1?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 1 wird vergeben wenn im NBA-Begutachtungsverfahren 12,5 bis 26,9 Punkte erreicht werden — geringe Beeinträchtigung der Selbstständigkeit in mindestens einem Lebensbereich.' } },
      { '@type': 'Question', name: 'Wie unterscheidet sich PG 1 von PG 2?', acceptedAnswer: { '@type': 'Answer', text: 'Bei PG 1 gibt es nur den Entlastungsbetrag (131 €/Monat), kein Pflegegeld und keine Sachleistungen. Bei PG 2 kommen 347 € Pflegegeld, 796 € Sachleistungen und 3.539 € Entlastungsbudget/Jahr dazu. Wer zwischen PG 1 und 2 steht, sollte die Begutachtung sorgfältig vorbereiten.' } },
    ],
  },
]

export default function Pflegegrad1() {
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
            <a href="/pflegegrade" className="hover:text-pm-taupe transition-colors">Pflegegrade</a>
            <span>›</span>
            <span className="text-pm-ink">Pflegegrad 1</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Pflegegrad 1 — Leistungen & was möglich ist
          </h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Pflegegrad 1 ist die niedrigste Einstufung und bedeutet geringe Beeinträchtigung der Selbstständigkeit. Es gibt keinen Pflegegeld-Anspruch — aber den Entlastungsbetrag von 131 Euro pro Monat, Wohnraumanpassungsförderung und Pflegehilfsmittel. Wer zwischen PG 1 und 2 liegt, sollte die Begutachtung gut vorbereiten — die Unterschiede bei den Leistungen sind erheblich.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Auf einen Blick — Pflegegrad 1</p>
            <ul className="space-y-2.5">
              {[
                'Kein Pflegegeld bei PG 1 — nur Entlastungsbetrag 131 €/Monat',
                'Entlastungsbetrag: zweckgebunden für anerkannte Betreuungsangebote',
                'Wohnraumanpassung: bis 4.180 € je Maßnahme',
                'Pflegehilfsmittel: 42 €/Monat für Verbrauchsmittel',
                'Voraussetzung: 12,5–26,9 Punkte im NBA-Verfahren',
                'Kein Entlastungsbudget (Verhinderungs-/Kurzzeitpflege) bei PG 1',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-pm-body">
                  <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was bedeutet Pflegegrad 1?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Pflegegrad 1 bedeutet <strong>geringe Beeinträchtigung der Selbstständigkeit</strong> in mindestens einem Lebensbereich. Betroffene können die meisten Alltagsaktivitäten noch selbst bewältigen, benötigen aber in einzelnen Bereichen Unterstützung oder Beaufsichtigung.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Typische Situationen bei PG 1: Beginnendes Vergessen im Alter, leichte Mobilitätseinschränkungen die noch keine umfangreiche Pflege erfordern, Unterstützungsbedarf bei einzelnen Haushaltsaufgaben, leichte kognitive Beeinträchtigungen.
          </p>
          <div className="bg-pm-coral-tint border border-[rgba(231,111,99,0.15)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-pm-coral-ink mb-2">Wichtig: Kein Pflegegeld bei PG 1</p>
            <p className="text-[14px] text-pm-coral-ink leading-relaxed">
              Pflegegrad 1 hat keinen Anspruch auf Pflegegeld und keine Pflegesachleistungen. Der einzige monatliche Kassenbeitrag ist der Entlastungsbetrag (131 €/Monat) — zweckgebunden, nicht frei verwendbar. Wer mehr Unterstützung braucht, sollte prüfen ob PG 2 realistisch ist.
            </p>
          </div>

          <h2 id="leistungen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Leistungen bei Pflegegrad 1 — 2026
          </h2>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegegeld', '—', 'Kein Anspruch bei PG 1'],
                    ['Pflegesachleistungen', '—', 'Kein Anspruch bei PG 1'],
                    ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote, zweckgebunden'],
                    ['Entlastungsbudget', '—', 'Nur ab PG 2'],
                    ['Pflegehilfsmittel', '42 €/Monat', 'Verbrauchsmittel wie Handschuhe, Desinfektionsmittel'],
                    ['Wohnraumanpassung', 'bis 4.180 €/Maßnahme', 'Treppenlift, Haltegriffe, Badumbau'],
                    ['Beratungsanspruch', '✓', 'Kostenlose Pflegeberatung nach § 7a SGB XI'],
                  ].map(([leistung, betrag, hinweis], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{leistung}</td>
                      <td className={`px-5 py-3 text-[14px] font-bold border-b border-pm-line ${betrag === '—' ? 'text-[#C8C3BA]' : 'text-pm-green'}`}>{betrag}</td>
                      <td className="px-5 py-3 text-[13px] text-pm-mute border-b border-pm-line">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Entlastungsbetrag richtig nutzen:{' '}
            <a href="/entlastungsbetrag" className="text-pm-taupe underline hover:text-pm-taupe-deep">Entlastungsbetrag 2026 — 131 €/Monat</a>
          </p>

          <h2 id="voraussetzungen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Voraussetzungen — wann wird PG 1 vergeben?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Pflegegrad 1 erfordert <strong>12,5 bis 26,9 Punkte</strong> im NBA-Begutachtungsverfahren des Medizinischen Dienstes. Die Einschränkungen müssen voraussichtlich mindestens 6 Monate andauern.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-10">
            Mit 27 Punkten oder mehr erfolgt die Einstufung in Pflegegrad 2 — das bedeutet Pflegegeld, Sachleistungen und das Entlastungsbudget. Der Unterschied von einem Punkt kann monatlich über 500 Euro Kassenzuschuss ausmachen. Eine gute Vorbereitung der Begutachtung ist deshalb besonders wichtig.
          </p>

          <h2 id="beantragen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Beantragen & Begutachtung vorbereiten
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Der Antrag läuft wie bei allen Pflegegraden über die Pflegekasse. Besonders bei PG 1 gilt: Gut vorbereiten — denn der Unterschied zu PG 2 entscheidet über hunderte Euro monatlich.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Pflegetagebuch führen', desc: 'Auch bei geringem Hilfebedarf: 1–2 Wochen dokumentieren was täglich gebraucht wird. Scheinbar kleine Hilfen summieren sich und können den Ausschlag geben.' },
              { title: 'Nichts beschönigen', desc: 'Besonders bei leichtem Pflegebedarf neigen Betroffene dazu zu minimieren. Alles was nicht ohne Hilfe oder mit erheblicher Anstrengung geht, gehört geschildert.' },
              { title: 'Vertrauensperson mitnehmen', desc: 'Angehörige können Details ergänzen die der Pflegebedürftige vergisst oder aus Scham weglässt.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Alle Tipps:{' '}
            <a href="/pflegegrad-begutachtung-vorbereiten" className="text-pm-taupe underline hover:text-pm-taupe-deep">MD-Begutachtung vorbereiten — Checkliste & 7 Tipps</a>
            {' · '}
            <a href="/pflegegrad-beantragen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad beantragen</a>
          </p>

          <h2 id="pg2" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann wird Pflegegrad 2 sinnvoller?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Der Sprung von PG 1 zu PG 2 ist finanziell enorm. Bei PG 2 kommen Pflegegeld (347 €/Monat), Sachleistungen (796 €/Monat) und das Entlastungsbudget (3.539 €/Jahr) dazu. Wer mit PG 1 eingestuft wurde, sollte prüfen ob eine Höherstufung realistisch ist.
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Hilfebedarf hat zugenommen — neue Diagnosen oder Verschlechterungen',
              'Die Begutachtung war schlecht vorbereitet — kein Pflegetagebuch, zu wenig geschildert',
              'Demenz oder kognitive Einschränkungen wurden nicht ausreichend berücksichtigt',
              'Mehrere Lebensbereiche sind betroffen aber wurden einzeln als zu gering bewertet',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">→</span>
                <p className="text-[14px] text-pm-body">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Nächste Stufe:{' '}
            <a href="/pflegegrad-2" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad 2 — Leistungen & Beträge</a>
            {' · '}
            <a href="/pflegegrad-widerspruch-einlegen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Widerspruch einlegen wenn Einstufung zu niedrig</a>
          </p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">
            Häufige Fragen zu Pflegegrad 1
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was bekommt man bei Pflegegrad 1?', a: '131 € Entlastungsbetrag/Monat — kein Pflegegeld, keine Sachleistungen, kein Entlastungsbudget. Dazu Pflegehilfsmittel (42 €/Monat) und Wohnraumanpassungsförderung (bis 4.180 € je Maßnahme).' },
              { q: 'Was sind die Voraussetzungen für Pflegegrad 1?', a: '12,5–26,9 Punkte im NBA-Begutachtungsverfahren. Geringe Beeinträchtigung der Selbstständigkeit in mindestens einem Lebensbereich. Pflegebedarf muss voraussichtlich mindestens 6 Monate andauern.' },
              { q: 'Wie unterscheidet sich PG 1 von PG 2?', a: 'PG 1: nur 131 € Entlastungsbetrag. PG 2: zusätzlich 347 € Pflegegeld, 796 € Sachleistungen und 3.539 € Entlastungsbudget/Jahr. Der Unterschied ist finanziell erheblich.' },
              { q: 'Kann man von PG 1 auf PG 2 hochgestuft werden?', a: 'Ja — jederzeit wenn sich der Pflegebedarf verschlechtert hat oder die erste Begutachtung nicht gut vorbereitet war. Antrag auf Höherstufung bei der Pflegekasse stellen.' },
              { q: 'Hat man bei PG 1 Anspruch auf 24h-Pflege?', a: 'Einen Rechtsanspruch auf Sachleistungen hat man ab PG 2. Bei PG 1 ist 24h-Pflege aber möglich — die Kosten müssen selbst getragen werden, nur der Entlastungsbetrag (131 €/Monat) kann für Betreuungsangebote genutzt werden.' },
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

          <Weiterlesen aktuell="pflegegrad-1" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
