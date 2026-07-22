import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 3?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'kosten-24h', title: 'Kosten der 24-Stunden-Pflege' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'beantragen', title: 'Pflegegrad 3 beantragen' },
  { id: 'hoeher', title: 'Höherstufung auf PG 4' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 3 — Leistungen & 599 € Pflegegeld 2026 | Primundus',
  description: 'Pflegegrad 3: 599 € Pflegegeld + 1.497 € Sachleistungen + 3.539 € Entlastungsbudget pro Jahr. Alle Leistungen, Voraussetzungen und wie 24h-Pflege kombiniert wird.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-3/' },
  openGraph: {
    title: 'Pflegegrad 3 — Leistungen & 599 € Pflegegeld 2026 | Primundus',
    description: 'Pflegegrad 3: 599 € Pflegegeld + 1.497 € Sachleistungen + 3.539 € Entlastungsbudget pro Jahr.',
    url: 'https://primundus.de/pflegegrad-3/',
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
    headline: 'Pflegegrad 3 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-3/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 3', item: 'https://primundus.de/pflegegrad-3/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 3?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 3 gibt es 599 € Pflegegeld pro Monat (wenn Angehörige pflegen), 1.497 € Pflegesachleistungen (für ambulante Pflegedienste), 131 € Entlastungsbetrag und 3.539 € Entlastungsbudget pro Jahr für Verhinderungs- und Kurzzeitpflege. Alle Beträge gelten unverändert für 2026.' } },
      { '@type': 'Question', name: 'Welche Einschränkungen hat man bei Pflegegrad 3?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 3 bedeutet schwere Beeinträchtigung der Selbstständigkeit. Betroffene benötigen umfangreiche Unterstützung bei der Körperpflege, beim Anziehen, bei der Mobilität und oft auch bei der Ernährung. Die NBA-Punktzahl liegt zwischen 47,5 und 69,9 Punkten.' } },
      { '@type': 'Question', name: 'Kann man mit Pflegegrad 3 zu Hause bleiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Pflegegrad 3 ist der häufigste Pflegegrad bei 24h-Pflege zu Hause. Mit einer Betreuungskraft, die dauerhaft im Haushalt lebt, ist ein sicheres Leben zuhause in fast allen Fällen möglich. Primundus vermittelt geprüfte Kräfte, die in 4–7 Tagen starten können.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Pflegegrad 3 und 4?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 4 (schwerste Beeinträchtigung, 70–89,9 NBA-Punkte) steigt das Pflegegeld auf 800 €/Monat und die Sachleistungen auf 1.859 €/Monat. Die Einschränkungen sind deutlich umfangreicher — oft ist keine eigenständige Körperpflege mehr möglich.' } },
      { '@type': 'Question', name: 'Wie beantrage ich Pflegegrad 3?', acceptedAnswer: { '@type': 'Answer', text: 'Antrag bei der Pflegekasse (Krankenkasse) stellen, dann kommt der Medizinische Dienst zur Begutachtung. Wichtig: Pflegetagebuch führen und den schlechtesten Tagesverlauf schildern. Leistungen gelten rückwirkend ab Antragsdatum.' } },
      { '@type': 'Question', name: 'Wie hoch ist das Pflegegeld bei Pflegegrad 3 im Jahr 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegegeld bei Pflegegrad 3 beträgt 599 Euro pro Monat — unverändert gegenüber 2025. Eine Erhöhung ist für 2026 nicht geplant, die nächste Dynamisierung kommt frühestens Januar 2028.' } },
    ],
  },
]

export default function Pflegegrad3() {
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
            <a href="/pflegegrade/" className="hover:text-[#8B7355] transition-colors">Pflegegrade</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegegrad 3</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad 3 — Leistungen & Beträge 2026
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegegrad 3 bedeutet schwere Beeinträchtigung der Selbstständigkeit. Betroffene erhalten 599 € Pflegegeld pro Monat, 1.497 € Sachleistungen und 3.539 € Entlastungsbudget pro Jahr. PG 3 ist der häufigste Pflegegrad bei der 24h-Pflege zu Hause — mit einer Betreuungskraft bleibt ein sicheres Leben im eigenen Zuhause in fast allen Fällen möglich.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick — Pflegegrad 3</p>
            <ul className="space-y-2.5">
              {[
                'Pflegegeld: 599 €/Monat (wenn Angehörige oder nicht-professionelle Kräfte pflegen)',
                'Pflegesachleistungen: 1.497 €/Monat (für ambulante Pflegedienste)',
                'Entlastungsbetrag: 131 €/Monat zusätzlich für alle Pflegegrade',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege',
                'Voraussetzung: 47,5–69,9 Punkte im NBA-Begutachtungsverfahren',
                'Keine Erhöhung 2026 — nächste Dynamisierung frühestens Januar 2028',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was bedeutet Pflegegrad 3?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Pflegegrad 3 steht für <strong>schwere Beeinträchtigung der Selbstständigkeit</strong>. Betroffene benötigen umfangreiche Unterstützung bei mehreren grundlegenden Alltagsaktivitäten — Körperpflege, Mobilität, Ernährung, oft auch kognitive Einschränkungen.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Typische Situationen bei Pflegegrad 3: Menschen nach schwerem Schlaganfall, fortgeschrittene Demenz im mittleren Stadium, schwere Parkinson-Erkrankung, oder mehrere gleichzeitige chronische Erkrankungen die zusammen zu umfangreichem Hilfebedarf führen.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Körperpflege', desc: 'Vollständige Unterstützung beim Waschen, Duschen, Zähneputzen, Haarpflege. Selbstständiges Waschen ist kaum oder nicht mehr möglich.' },
              { title: 'Mobilität', desc: 'Aufstehen, Gehen, Treppensteigen nur noch mit Unterstützung oder Hilfsmitteln. Häufig erhöhtes Sturzrisiko, Rollator oder Rollstuhl notwendig.' },
              { title: 'Kognition', desc: 'Bei Demenz: erhebliche Orientierungslosigkeit, Gedächtnisprobleme, fehlende Tagesstruktur. Ständige Beaufsichtigung oft erforderlich.' },
              { title: 'Selbstversorgung', desc: 'Hilfe beim Ankleiden, beim Essen und Trinken, bei der Kontinenzversorgung. Eigenständige Mahlzeitenzubereitung kaum möglich.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 2 */}
          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Leistungen & Beträge 2026
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Beträge 2026 sind identisch zu 2025 — die Erhöhung um 4,5 % gilt seit Januar 2025, eine weitere Dynamisierung ist erst für Januar 2028 geplant.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Alle Leistungen bei Pflegegrad 3 — Stand 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegegeld', '599 €/Monat', 'Wenn Angehörige oder private Kräfte pflegen'],
                    ['Pflegesachleistungen', '1.497 €/Monat', 'Für ambulante Pflegedienste'],
                    ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote, alle PG'],
                    ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege (ab PG 2)'],
                    ['Tages-/Nachtpflege', '1.357 €/Monat', 'Eigenes Budget, keine Anrechnung auf Sachleistungen'],
                    ['Pflegehilfsmittel', '42 €/Monat', 'Handschuhe, Desinfektionsmittel etc.'],
                    ['Wohnraumanpassung', 'bis 4.180 € je Maßnahme', 'Treppenlift, Badumbau, Türverbreiterung'],
                  ].map(([leistung, betrag, hinweis], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{leistung}</td>
                      <td className="px-5 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{betrag}</td>
                      <td className="px-5 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Quelle: GKV-Spitzenverband, SGB XI · Stand 2026</p>
            </div>
          </div>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-2">Kombinationsmöglichkeit</p>
            <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Pflegegeld + Sachleistungen = mehr Gesamtleistung</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Wer sowohl einen Pflegedienst nutzt als auch Angehörige hat, kann beides kombinieren: Für jeden genutzten Prozentsatz der Sachleistung wird das Pflegegeld anteilig weitergezahlt. Beispiel: 50 % Sachleistungen genutzt → noch 50 % des Pflegegeldes (ca. 299 €) erhalten.
            </p>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Alle Kombinationsmöglichkeiten:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — alle Zuschüsse 2026</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Eigenanteil senken:{' '}
            <a href="/eigenanteil-24h-pflege-senken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Alle Möglichkeiten 2026</a>
          </p>

          {/* SECTION: Kosten 24h-Pflege */}
          <h2 id="kosten-24h" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was kostet 24-Stunden-Pflege bei Pflegegrad 3?
          </h2>
          <p className="text-[15px] text-[#2E2E2E] mb-4 leading-relaxed">
            24-Stunden-Pflege kostet bei Pflegegrad 3 in der Regel <strong>2.200–3.500 € brutto pro Monat</strong>, je nach Pflegebedarf und Qualifikation der Betreuungskraft. Die Pflegekasse übernimmt einen erheblichen Teil — der tatsächliche Eigenanteil liegt oft <strong>unter 2.000 € monatlich</strong> und damit häufig günstiger als ein Pflegeheim (Ø 2.871 €/Monat Eigenanteil).
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-3">Diese Leistungen senken bei Pflegegrad 3 den Eigenanteil:</p>
          <ul className="text-[15px] text-[#2E2E2E] mb-4 space-y-1.5 list-disc pl-5">
            <li><strong>Pflegegeld:</strong> 599 €/Monat</li>
            <li><strong>Entlastungsbetrag:</strong> 131 €/Monat</li>
            <li><strong>Entlastungsbudget:</strong> 3.539 €/Jahr (Verhinderungs- & Kurzzeitpflege, seit Juli 2025 flexibel einsetzbar)</li>
            <li><strong>Steuervorteil:</strong> 20 % der Kosten, bis zu 4.000 €/Jahr Steuerersparnis</li>
          </ul>
          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Individuelle Berechnung:{' '}
            <a href="https://kostenrechner.primundus.de" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kosten & passende Pflegekräfte in 2 Minuten</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Kostenfaktoren im Detail:{' '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was kostet 24-Stunden-Pflege? Kosten & Zuschüsse 2026</a>
          </p>

          {/* SECTION 3 */}
          <h2 id="voraussetzungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Voraussetzungen & Einstufung
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Pflegegrad 3 wird vergeben wenn beim Begutachtungsinstrument (NBA) <strong>47,5 bis 69,9 Punkte</strong> erreicht werden. Der Medizinische Dienst bewertet sechs Lebensbereiche — Selbstversorgung hat mit 36 % das höchste Gewicht.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Pflegegrade im Vergleich — Punktebereiche NBA</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Punkte NBA', 'Pflegegeld', 'Einstufung'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 1', '12,5–26,9', '—', 'Geringe Beeinträchtigung'],
                    ['PG 2', '27–47,4', '347 €', 'Erhebliche Beeinträchtigung'],
                    ['PG 3', '47,5–69,9', '599 €', 'Schwere Beeinträchtigung'],
                    ['PG 4', '70–89,9', '800 €', 'Schwerste Beeinträchtigung'],
                    ['PG 5', '90–100', '990 €', 'Schwerste Beeintr. + besondere Anforderungen'],
                  ].map(([grad, punkte, pg, text], i) => (
                    <tr key={grad} className={i === 2 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${i === 2 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{grad}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{punkte}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 2 ? 'text-[#8B7355]' : 'text-[#3D7A5C]'}`}>{pg}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 4 */}
          <h2 id="beantragen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrad 3 beantragen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Antrag läuft über die Pflegekasse — schriftlich oder telefonisch. Wichtig: Die Leistungen gelten rückwirkend ab Antragsdatum, nicht erst ab dem Begutachtungstermin.
          </p>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Antrag bei der Pflegekasse stellen', desc: 'Formlos per Brief oder Telefon — "Ich beantrage die Feststellung der Pflegebedürftigkeit." Datum notieren, Eingangsbestätigung anfordern.' },
              { n: '2', title: 'Pflegetagebuch führen', desc: '1–2 Wochen täglich dokumentieren: Welche Hilfe ist bei welcher Tätigkeit nötig, wie lange dauert es? Das ist das stärkste Argument für PG 3.' },
              { n: '3', title: 'Begutachtung durch den MD', desc: 'Gutachter kommt nach Hause. Den schlechtesten Tagesverlauf schildern — nicht den guten Tag. Vertrauensperson einladen.' },
              { n: '4', title: 'Bescheid prüfen', desc: 'Stimmt der Pflegegrad? Bei zu niedriger Einstufung innerhalb eines Monats Widerspruch einlegen.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Anleitung:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad beantragen — Schritt für Schritt</a>
            {' · '}
            <a href="/pflegegrad-begutachtung-vorbereiten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">MD-Begutachtung vorbereiten</a>
          </p>

          {/* SECTION 5 */}
          <h2 id="hoeher" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Höherstufung auf Pflegegrad 4
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Verschlechtert sich der Pflegebedarf, kann jederzeit ein Antrag auf Höherstufung gestellt werden — keine Sperrfrist. Bei PG 4 steigt das Pflegegeld auf 800 €/Monat, die Sachleistungen auf 1.859 €/Monat. Das macht monatlich bis zu 362 € mehr Kassenzuschuss.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Wann lohnt sich ein Höherstufungsantrag?', desc: 'Wenn sich mehrere Lebensbereiche verschlechtert haben, neue Diagnosen hinzugekommen sind, oder der aktuelle Pflegebedarf deutlich über dem liegt, was beim letzten Gutachten festgestellt wurde.' },
              { title: 'Wie läuft der Antrag ab?', desc: 'Formlos bei der Pflegekasse "Höherstufung beantragen". Der MD kommt erneut zur Begutachtung. Neue Pflegetagebücher und aktualisierte Arztberichte mitschicken.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Details:{' '}
            <a href="/pflegegrad-erhoehen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad erhöhen — wann und wie</a>
            {' · '}
            <a href="/pflegegrad-4/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad 4 — Leistungen & Beträge</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zu Pflegegrad 3
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was bekommt man bei Pflegegrad 3?', a: '599 € Pflegegeld/Monat, 1.497 € Pflegesachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr für Verhinderungs- und Kurzzeitpflege. Alle Beträge gelten unverändert für 2026.' },
              { q: 'Welche Einschränkungen hat man bei Pflegegrad 3?', a: 'Schwere Beeinträchtigung der Selbstständigkeit — umfangreiche Hilfe bei Körperpflege, Mobilität, oft auch Ernährung und Kognition. NBA-Punktzahl: 47,5 bis 69,9 Punkte.' },
              { q: 'Kann man mit Pflegegrad 3 zu Hause bleiben?', a: 'Ja — mit einer 24h-Betreuungskraft die dauerhaft im Haushalt lebt, ist das in fast allen Fällen möglich. Primundus vermittelt geprüfte Kräfte, die in 4–7 Tagen starten können.' },
              { q: 'Wie hoch ist das Pflegegeld bei Pflegegrad 3 in 2026?', a: '599 Euro pro Monat — identisch zu 2025. Keine Erhöhung für 2026 geplant, nächste Dynamisierung frühestens Januar 2028.' },
              { q: 'Was ist der Unterschied zwischen Pflegegrad 3 und 4?', a: 'PG 4 bedeutet schwerste Beeinträchtigung (70–89,9 NBA-Punkte). Pflegegeld steigt auf 800 €/Monat, Sachleistungen auf 1.859 €/Monat — zusammen 362 € mehr pro Monat als PG 3.' },
              { q: 'Wie beantrage ich Pflegegrad 3?', a: 'Antrag bei der Pflegekasse stellen, MD-Begutachtung abwarten. Pflegetagebuch führen und beim Termin den schlechtesten Tagesverlauf schildern. Leistungen gelten rückwirkend ab Antragsdatum.' },
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
