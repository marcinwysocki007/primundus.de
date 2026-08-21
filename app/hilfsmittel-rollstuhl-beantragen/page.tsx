import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-zahlt', title: 'Welche Kasse zahlt?' },
  { id: 'rezept', title: 'Auf Rezept beantragen' },
  { id: 'pflegegrad', title: 'Was der Pflegegrad bringt' },
  { id: 'ablehnung', title: 'Wenn die Kasse ablehnt' },
  { id: 'hilfsmittel', title: 'Hilfsmittel im Überblick' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Rollator & Rollstuhl beantragen: Rezept, Kasse, Ablauf',
  description:
    'Rollator oder Rollstuhl auf Rezept: Die Krankenkasse zahlt — ganz ohne Pflegegrad. Ablauf über Arzt und Sanitätshaus, Zuzahlung, Fristen und Widerspruch.',
  alternates: { canonical: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen' },
  openGraph: {
    title: 'Rollator & Rollstuhl beantragen',
    description: 'Auf Rezept über die Krankenkasse — ohne Pflegegrad. Ablauf, Kosten, Ablehnung.',
    url: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'Bekommt man einen Rollator ohne Pflegegrad?',
    a: 'Ja. Rollator und Rollstuhl sind Hilfsmittel der Krankenkasse — es genügt ein Rezept vom Arzt, ein Pflegegrad ist nicht nötig. Der Pflegegrad spielt erst bei Pflegehilfsmitteln eine Rolle, etwa der monatlichen Pflegehilfsmittel-Pauschale oder Zuschüssen für den Wohnungsumbau.',
  },
  {
    q: 'Was kostet ein Rollator oder Rollstuhl auf Rezept?',
    a: 'Für Erwachsene fällt die gesetzliche Zuzahlung von 5 bis 10 Euro an — den Rest übernimmt die Krankenkasse für das Standardmodell, oft als Leihgabe. Wer ein höherwertiges Modell möchte, zahlt die Differenz selbst (wirtschaftliche Aufzahlung).',
  },
  {
    q: 'Wie lange dauert die Genehmigung durch die Krankenkasse?',
    a: 'Die Kasse muss grundsätzlich innerhalb von drei Wochen entscheiden — wird der Medizinische Dienst eingeschaltet, innerhalb von fünf Wochen. Meldet sie sich in dieser Frist nicht und teilt auch keinen Grund mit, gilt der Antrag nach § 13 Abs. 3a SGB V als genehmigt.',
  },
  {
    q: 'Steht mir bei Pflegegrad 3 automatisch ein Rollstuhl zu?',
    a: 'Nein — aber er ist unabhängig vom Pflegegrad erreichbar: Entscheidend ist die medizinische Notwendigkeit, die der Arzt mit dem Rezept bescheinigt. Wer wegen einer Geh-Einschränkung einen Rollstuhl braucht, bekommt ihn über die Krankenkasse — mit Pflegegrad 3 genauso wie ganz ohne Pflegegrad.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rollator & Rollstuhl beantragen: Rezept, Kasse, Ablauf',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-08-20',
    mainEntityOfPage: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Rollator & Rollstuhl beantragen', item: 'https://primundus.de/hilfsmittel-rollstuhl-beantragen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function Page() {
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
            <a href="/ratgeber" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Rollator & Rollstuhl beantragen</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Hilfsmittel · 7 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Rollator & Rollstuhl beantragen: auf Rezept, ohne Pflegegrad
          </h1>

          <AuthorByline updated="20. August 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">
            Das Wichtigste zuerst: Für einen Rollator oder Rollstuhl brauchen Sie <strong>keinen
            Pflegegrad</strong> — nur ein Rezept vom Arzt. Zuständig ist die Krankenkasse, die Zuzahlung
            beträgt 5 bis 10 Euro. Hier steht, wie der Antrag Schritt für Schritt läuft, was der
            Pflegegrad zusätzlich bringt und was Sie tun können, wenn die Kasse ablehnt.
          </p>

          {/* ① WELCHE KASSE */}
          <h2 id="was-zahlt" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Krankenkasse oder Pflegekasse — wer zahlt was?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Die häufigste Verwirrung zuerst: <strong>Hilfsmittel</strong> wie Rollator, Rollstuhl oder
            Duschhocker gleichen eine körperliche Einschränkung aus — sie zahlt die
            <strong> Krankenkasse</strong> auf ärztliche Verordnung, völlig unabhängig davon, ob ein
            Pflegegrad besteht. <strong>Pflegehilfsmittel</strong> dagegen erleichtern die Pflege zuhause —
            dafür ist die <strong>Pflegekasse</strong> zuständig, und hier braucht es einen Pflegegrad.
            Manche Produkte wie das Pflegebett können je nach Begründung über beide Wege laufen — das
            Sanitätshaus ordnet den richtigen Weg mit zu.
          </p>

          {/* ② REZEPT */}
          <h2 id="rezept" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Rollator oder Rollstuhl auf Rezept: so läuft der Antrag
          </h2>
          <div className="space-y-3 mb-4">
            {[
              { n: '1', t: 'Zum Arzt gehen', d: 'Hausarzt oder Facharzt stellt bei medizinischer Notwendigkeit eine Hilfsmittel-Verordnung aus — das „Rezept". Schildern Sie den Alltag konkret: Stürze, unsichere Wege, Schmerzen beim Gehen.' },
              { n: '2', t: 'Zum Sanitätshaus mit Kassenvertrag', d: 'Das Sanitätshaus prüft die Verordnung, berät zum passenden Modell und reicht den Antrag direkt bei Ihrer Krankenkasse ein — Sie müssen meist nichts selbst einsenden. Wichtig: ein Vertragspartner Ihrer Kasse sein (kurz nachfragen).' },
              { n: '3', t: 'Genehmigung abwarten', d: 'Die Kasse muss grundsätzlich binnen drei Wochen entscheiden, mit Medizinischem Dienst binnen fünf. Verstreicht die Frist ohne Rückmeldung und ohne mitgeteilten Grund, gilt der Antrag als genehmigt (§ 13 Abs. 3a SGB V).' },
              { n: '4', t: 'Hilfsmittel erhalten', d: 'Oft kommt ein Leihgerät aus dem Bestand der Kasse — geprüft und aufbereitet. Die gesetzliche Zuzahlung für Erwachsene: 10 Prozent des Preises, mindestens 5, höchstens 10 Euro. Wer ein Wunschmodell über dem Standard möchte, zahlt die Differenz privat dazu.' },
            ].map((x) => (
              <div key={x.n} className="bg-white border border-[#E5E3DF] rounded-2xl p-5 flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white text-[14px] font-bold flex items-center justify-center flex-shrink-0">{x.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{x.t}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            Tipp: Notieren Sie sich das Antragsdatum. Die Fristen laufen ab Eingang bei der Kasse —
            und sie sind Ihr stärkstes Druckmittel.
          </p>

          {/* ③ PFLEGEGRAD */}
          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was der Pflegegrad zusätzlich bringt
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Für Rollator und Rollstuhl ist der Pflegegrad also nicht nötig — aber wer einen hat, bekommt
            mehr: <strong>Pflegehilfsmittel zum Verbrauch</strong> (Handschuhe, Betteinlagen,
            Desinfektion) bis 42 €/Monat ohne Zuzahlung, <strong>technische Pflegehilfsmittel</strong> wie
            Pflegebett oder Hausnotruf über die Pflegekasse — und Zuschüsse für
            <strong> Wohnumfeldverbesserung</strong> bis 4.180 € je Maßnahme, etwa für den Badumbau oder
            Türverbreiterungen, damit der Rollstuhl überhaupt durchpasst.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Noch kein Pflegegrad? <a href="/pflegegrad-rechner" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Erste Einschätzung im Pflegegrad-Rechner</a>
            {' · '}
            <a href="/pflegehilfsmittel-beantragen" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegehilfsmittel beantragen</a>
            {' · '}
            <a href="/wohnraumanpassung-foerderung" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Wohnumbau-Förderung</a>
          </p>

          {/* ④ ABLEHNUNG */}
          <h2 id="ablehnung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wenn die Kasse ablehnt: Widerspruch lohnt sich
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Gegen eine Ablehnung können Sie innerhalb <strong>eines Monats</strong> schriftlich
            Widerspruch einlegen — formlos, mit Aktenzeichen und kurzer Begründung. Stärken Sie den
            Widerspruch mit einer ergänzenden Stellungnahme des Arztes, warum genau dieses Hilfsmittel
            im Alltag notwendig ist. Viele Ablehnungen werden im Widerspruchsverfahren korrigiert;
            hilft das nicht, bleibt die kostenfreie Klage vor dem Sozialgericht.
          </p>

          {/* ⑤ ÜBERBLICK */}
          <h2 id="hilfsmittel" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wichtige Hilfsmittel im Überblick
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px]">
                <thead><tr className="bg-[#F8F7F5]">
                  {['Hilfsmittel', 'Zuständig', 'Voraussetzung'].map((h) => (
                    <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[
                    ['Rollator', 'Krankenkasse', 'Rezept vom Arzt'],
                    ['Rollstuhl', 'Krankenkasse', 'Rezept vom Arzt'],
                    ['Duschhocker, Badewannenlifter', 'Krankenkasse', 'Rezept vom Arzt'],
                    ['Pflegebett', 'Kranken- oder Pflegekasse', 'Rezept bzw. Pflegegrad'],
                    ['Hausnotruf', 'Pflegekasse', 'Pflegegrad 1–5'],
                    ['Verbrauchs-Pflegehilfsmittel (42 €/Monat)', 'Pflegekasse', 'Pflegegrad 1–5'],
                    ['Wohnumfeldverbesserung (bis 4.180 €)', 'Pflegekasse', 'Pflegegrad 1–5'],
                  ].map(([h, k, v], i) => (
                    <tr key={h} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{h}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{k}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#F8F7F5] border-t border-[#E5E3DF] px-4 py-3">
              <p className="text-[11px] text-[#8B8B8B]">Stand August 2026 · gesetzliche Kranken- und Pflegeversicherung; bei privaten Kassen gelten die Tarifbedingungen</p>
            </div>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{f.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">{f.a}</p></div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
