import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'leistungen',  title: 'Was leistet eine Betreuungskraft?' },
  { id: 'verbreitung', title: 'Wie verbreitet ist 24h-Pflege?' },
  { id: 'kosten',      title: 'Kosten & Kassenzuschüsse 2026' },
  { id: 'rechtliches', title: 'Ist 24h-Pflege legal?' },
  { id: 'wann',        title: 'Wann ist 24h-Pflege die richtige Wahl?' },
  { id: 'faq',         title: 'Häufige Fragen' },
]

const GrafikPflegestatistik = dynamic(
  () => import('@/components/charts/GrafikPflegestatistik').then(m => ({ default: m.GrafikPflegestatistik })),
  {
    loading: () => (
      <div className="my-10 h-[480px] bg-[#F8F7F5] rounded-2xl border border-[#E5E3DF] animate-pulse" />
    ),
    ssr: false,
  }
)

const GrafikKostenvergleich = dynamic(
  () => import('@/components/charts/GrafikKostenvergleich').then(m => ({ default: m.GrafikKostenvergleich })),
  {
    loading: () => (
      <div className="my-10 h-[420px] bg-[#F8F7F5] rounded-2xl border border-[#E5E3DF] animate-pulse" />
    ),
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: 'Was ist 24-Stunden-Pflege? Definition, Kosten & Ablauf | Primundus',
  description: '24h-Pflege: Eine Betreuungskraft lebt im Haushalt, kostet 2.200–3.500 €/Monat und ist die günstigste Alternative zum Pflegeheim. Alle Fakten 2026.',
  alternates: {
    canonical: 'https://primundus.de/was-ist-24-stunden-pflege/',
  },
  openGraph: {
    title: 'Was ist 24-Stunden-Pflege? | Primundus',
    description: '24h-Pflege: Eine Betreuungskraft lebt im Haushalt, kostet 2.200–3.500 €/Monat und ist die günstigste Alternative zum Pflegeheim. Alle Fakten 2026.',
    url: 'https://primundus.de/was-ist-24-stunden-pflege/',
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
    headline: 'Was ist 24-Stunden-Pflege?',
    description: 'Definition, Leistungen, Kosten und aktuelle Kassenzuschüsse 2026 der 24h-Pflege in Deutschland.',
    author: {
      '@type': 'Person',
      name: 'Ilka Wysocki',
      worksFor: { '@type': 'Organization', name: 'Primundus' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Primundus',
      logo: 'https://primundus.de/images/primundus_logo_header.webp',
    },
    dateModified: '2026-04-24',
    mainEntityOfPage: 'https://primundus.de/was-ist-24-stunden-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Was ist 24-Stunden-Pflege?', item: 'https://primundus.de/was-ist-24-stunden-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was versteht man unter 24-Stunden-Pflege?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Betreuungskraft zieht in den Haushalt des Pflegebedürftigen ein und ist rund um die Uhr erreichbar — für Grundpflege, Haushaltsführung und Gesellschaft. Die monatlichen Kosten liegen zwischen 2.200 und 3.500 Euro. Sie ist die meistgenutzte Alternative zum Pflegeheim.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet 24-Stunden-Pflege 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die Kosten liegen zwischen 2.200 und 3.500 Euro pro Monat. Das Pflegegeld (bis 947 €/Monat bei Pflegegrad 5) und das Entlastungsbudget (3.539 €/Jahr) der Pflegekasse können die Eigenkosten erheblich senken. Steuerlich sind 20 % der Kosten als haushaltsnahe Dienstleistung absetzbar.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist das Entlastungsbudget und was hat sich 2026 geändert?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seit 1. Juli 2025 gibt es ein gemeinsames Entlastungsbudget von 3.539 Euro pro Jahr. Es fasst die frühere Verhinderungspflege und Kurzzeitpflege zusammen. 2026 ist das erste vollständige Kalenderjahr, in dem dieser Betrag ohne Übergangsregelungen nutzbar ist. Wichtig: Ungenutztes Budget verfällt am 31. Dezember.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24-Stunden-Pflege legal?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — über eine seriöse Agentur im Entsendemodell ist 24h-Pflege legal. Die Betreuungskraft ist im Heimatland sozialversichert und mit A1-Bescheinigung in Deutschland tätig. Scheinselbstständigkeit ist strafbar und kann zu Nachzahlungen führen.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen 24h-Pflege und Pflegeheim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Im Pflegeheim beträgt der Eigenanteil im Bundesdurchschnitt 2.871 Euro pro Monat — ohne individuelle Betreuung und ohne die vertraute Umgebung. Bei der 24h-Pflege bleibt der Mensch zuhause, erhält persönliche Eins-zu-eins-Betreuung und zahlt oft vergleichbare oder geringere Gesamtkosten.' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Betreuung beginnen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Mit Primundus ist die Betreuungskraft typischerweise innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch vor Ort — täglich kündbar, taggenaue Abrechnung.' },
      },
      {
        '@type': 'Question',
        name: 'Für welche Pflegesituationen ist 24h-Pflege geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege ist geeignet ab Pflegegrad 2 — für Demenz, Alzheimer, nach Schlaganfall oder Operation, bei Parkinson, MS, Herzinsuffizienz, eingeschränkter Mobilität und Sturzrisiko.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen Verhinderungspflege und Entlastungsbudget?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seit Juli 2025 gibt es kein getrenntes Budget mehr für Verhinderungspflege und Kurzzeitpflege — beide wurden im gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengeführt. Der monatliche Entlastungsbetrag von 131 Euro ist davon getrennt und kann zusätzlich genutzt werden.' },
      },
    ],
  },
]

export default function WasIst24StundenPflege() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          {/* Breadcrumb */}
          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Was ist 24-Stunden-Pflege?</span>
          </nav>

          {/* Eyebrow */}
          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>8 Min Lesezeit · Apr. 2026
          </p>

          {/* H1 */}
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Was ist 24-Stunden-Pflege?
          </h1>

          {/* Lead */}
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            24-Stunden-Pflege bedeutet: Eine Betreuungskraft zieht in den Haushalt des Pflegebedürftigen ein und ist rund um die Uhr vor Ort — für Grundpflege, Haushaltsführung und Gesellschaft. Die monatlichen Kosten liegen zwischen 2.200 und 3.500 Euro. Sie ist die meistgenutzte Alternative zum Pflegeheim und ermöglicht es, in der vertrauten Umgebung zu bleiben.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">
              Auf einen Blick
            </p>
            <ul className="space-y-2.5">
              {[
                'Betreuungskraft lebt dauerhaft im Haushalt — rund um die Uhr erreichbar',
                'Kosten: 2.200–3.500 €/Monat je nach Pflegebedarf und Anbieter',
                'Pflegekasse zahlt: Pflegegeld bis 947 €/Monat + Entlastungsbudget 3.539 €/Jahr (neu 2026)',
                'Geeignet bei Demenz, nach Schlaganfall, bei Parkinson und vielen weiteren Situationen',
                'Rechtlich sicher über Entsendemodell mit A1-Bescheinigung',
                'Betreuung startet in 4–7 Tagen — täglich kündbar',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── SECTION 1 ── */}
          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was leistet eine 24-Stunden-Betreuungskraft?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Eine 24h-Betreuungskraft übernimmt Grundpflege, Haushaltsführung und soziale Betreuung — alles was der pflegebedürftige Mensch nicht mehr alleine schafft. Sie ist keine Krankenschwester, aber deutlich mehr als eine Haushaltshilfe.
          </p>
          <div className="space-y-4 mb-4">
            {[
              { title: 'Grundpflege', desc: 'Körperhygiene, Ankleiden, Nahrungsaufnahme, Lagerung und Mobilisierung. Bei Menschen mit Demenz, nach Schlaganfall oder mit eingeschränkter Beweglichkeit bildet das den Kern des Alltags.' },
              { title: 'Haushaltsführung', desc: 'Kochen, Einkaufen, Reinigen, Wäsche, Begleitung zu Arztterminen. Die Betreuungskraft führt den Haushalt selbständig und entlastet damit Angehörige vollständig.' },
              { title: 'Betreuung und Gesellschaft', desc: 'Gespräche, Spaziergänge, Tagesstruktur — besonders bei Demenz ist menschliche Nähe entscheidend für Wohlbefinden und Verlangsamung des Krankheitsfortschritts.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[15px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] leading-relaxed mb-2">
            <strong>Nicht enthalten:</strong> Medizinische Behandlungspflege (z.B. Verbandswechsel, Injektionen) darf die Betreuungskraft nur mit nachgewiesener Qualifikation leisten. In diesen Fällen arbeitet sie mit einem ambulanten Pflegedienst zusammen.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Leistungen im Detail:{' '}
            <a href="/leistungen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Was Primundus leistet — vollständige Übersicht
            </a>
          </p>

          {/* ── SECTION 2 ── */}
          <h2 id="verbreitung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wie viele Menschen nutzen 24h-Pflege in Deutschland?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Schätzungsweise 300.000 bis 400.000 Haushalte nutzen aktuell eine 24-Stunden-Betreuung durch Kräfte aus EU-Ländern — bei einem Marktpotenzial von über 5 Millionen häuslich versorgten Pflegebedürftigen ist das erst der Anfang.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ende 2024 waren rund 6 Millionen Menschen in Deutschland pflegebedürftig. <strong>86 Prozent</strong> werden zu Hause versorgt — nur 14 Prozent in Pflegeheimen. Allein seit 2021 stieg die Zahl der Pflegebedürftigen um 15 Prozent.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-4 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">
                Pflegestatistik Deutschland — Stand 2024
              </p>
            </div>
            <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {[
                  ['Pflegebedürftige gesamt', '~6,0 Millionen'],
                  ['Davon zu Hause versorgt', '86 % — ca. 5,1 Mio.'],
                  ['Davon im Pflegeheim', '14 % — ca. 0,9 Mio.'],
                  ['Haushalte mit 24h-Betreuungskraft', '300.000–400.000 (Schätzung)'],
                  ['Wachstum seit 2021', '+15 %'],
                  ['Prognose bis 2050', 'über 7 Millionen'],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                    <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{label}</td>
                    <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF] text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Quelle: Statistisches Bundesamt (Destatis), Pflegestatistik 2024</p>
            </div>
          </div>

          <GrafikPflegestatistik />

          {/* ── SECTION 3 ── */}
          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was kostet 24-Stunden-Pflege — und was zahlt die Kasse 2026?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            24-Stunden-Pflege kostet monatlich 2.500 bis 4.000 Euro — je nach Pflegebedarf, Qualifikation der Betreuungskraft und Anbieter. Das Pflegeheim kostet im Vergleich durchschnittlich <strong>2.871 Euro Eigenanteil pro Monat</strong> — ohne persönliche Eins-zu-eins-Betreuung und ohne die vertraute Umgebung.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-6">
            → Vollständiger Kostenvergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              24h-Pflege vs. Pflegeheim — was ist günstiger?
            </a>
          </p>

          <GrafikKostenvergleich />

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-2">
              Neu 2026 — Entlastungsbudget
            </p>
            <p className="text-[16px] font-bold text-[#1C1C1C] mb-3">
              3.539 Euro pro Jahr — flexibel für Verhinderungs- und Kurzzeitpflege
            </p>
            <ul className="space-y-2">
              {[
                'Ein Budget statt zwei — flexibel für Verhinderungs- und Kurzzeitpflege nutzbar',
                'Vorpflegezeit entfällt — die frühere 6-Monats-Voraussetzung ist abgeschafft',
                'Pflegegeld läuft weiter — während der Nutzung wird es zur Hälfte weitergezahlt',
                'Verfallsfrist beachten — ungenutztes Budget verfällt am 31. Dezember',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-[#2A5C3F]">
                  <span className="text-[#3D7A5C] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Wie das Entlastungsbudget kombiniert wird:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Finanzierung der 24h-Pflege — alle Zuschüsse 2026
            </a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Steuerlich absetzbar:{' '}
            <a href="/pflege-steuerlich-absetzen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Pflege steuerlich absetzen — was geht 2026?
            </a>
          </p>

          {/* ── SECTION 4 ── */}
          <h2 id="rechtliches" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Ist 24-Stunden-Pflege legal?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ja — 24-Stunden-Pflege ist legal, wenn die Betreuungskraft über eine seriöse Agentur im Entsendemodell beschäftigt wird. Die <strong>A1-Bescheinigung</strong> weist nach, dass sie in ihrem Heimatland sozialversichert ist und EU-rechtlich in Deutschland tätig sein darf. Es gibt drei Beschäftigungsmodelle:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Entsendemodell (empfohlen)', desc: 'Die Kraft ist bei einer Agentur im Heimatland angestellt und wird für 6–8 Wochen entsandt. Für die Familie: kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben, klare Vertragslage.', highlight: true },
              { title: 'Direktanstellung', desc: 'Die Familie stellt selbst als Arbeitgeberin an. Rechtlich eindeutig — aber mit erheblichem Aufwand (Lohnabrechnung, Sozialversicherung, Urlaubsvertretung).', highlight: false },
              { title: 'Scheinselbstständigkeit (unbedingt vermeiden)', desc: 'Wer eine Kraft "freiberuflich" beauftragt, die faktisch weisungsgebunden im Haushalt lebt, riskiert Nachzahlungen von Sozialabgaben und Bußgelder.', highlight: false },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-2">
            → Alle Modelle im Vergleich:{' '}
            <a href="/pflegekraft-legal-beschaeftigen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Pflegekraft legal beschäftigen — die 3 Wege
            </a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Was im Vertrag stehen muss:{' '}
            <a href="/pflegevertrag-aufsetzen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Pflegevertrag aufsetzen — worauf achten?
            </a>
          </p>

          {/* ── SECTION 5 ── */}
          <h2 id="wann" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann ist 24h-Pflege die richtige Wahl?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            24h-Pflege ist die richtige Wahl, wenn der pflegebedürftige Mensch in seiner vertrauten Umgebung bleiben möchte — unabhängig vom Pflegegrad.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                title: 'Demenz und Alzheimer',
                desc: 'Tagesstruktur, Orientierung und konstante Bezugsperson — eine feste Betreuungskraft zuhause bietet das besser als jede Einrichtung.',
                link: { text: 'Demenzpflege zuhause — was ist möglich?', href: '/demenz-pflege-zuhause/' },
              },
              {
                title: 'Nach Schlaganfall oder Operation',
                desc: 'Kontinuierliche Unterstützung in der Reha-Phase ermöglicht Entlassung aus dem Krankenhaus ohne Umzug ins Heim.',
                link: { text: 'Pflege nach OP — Organisation und Kosten', href: '/pflege-nach-op/' },
              },
              {
                title: 'Parkinson, MS, Herzinsuffizienz',
                desc: 'Chronische Erkrankungen mit schwankendem Tagesverlauf — eine feste Kraft kennt die Muster und reagiert richtig.',
                link: { text: 'Parkinson Pflege zuhause', href: '/parkinson-pflege-zuhause/' },
              },
              {
                title: 'Sturzgefahr und eingeschränkte Mobilität',
                desc: 'Prävention, Mobilisierung, sichere Begleitung — rund um die Uhr.',
                link: { text: 'Sturzprävention bei Senioren', href: '/sturzpraevention-senioren/' },
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">{item.desc}</p>
                <a href={item.link.href} className="text-[13px] text-[#8B7355] underline hover:text-[#7D6E5D]">
                  → {item.link.text}
                </a>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Direkter Vergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              24h-Pflege vs. Pflegeheim — was passt besser?
            </a>
          </p>

          {/* ── FAQ ── */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur 24-Stunden-Pflege
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: 'Was versteht man unter 24-Stunden-Pflege?',
                a: '24-Stunden-Pflege bedeutet, dass eine Betreuungskraft dauerhaft im Haushalt des Pflegebedürftigen lebt und rund um die Uhr erreichbar ist — für Grundpflege, Haushaltsführung und soziale Betreuung. Sie ist die intensivste Form der häuslichen Pflege und die beliebteste Alternative zum Pflegeheim in Deutschland.',
              },
              {
                q: 'Was kostet 24-Stunden-Pflege 2026?',
                a: 'Die monatlichen Kosten liegen zwischen 2.200 und 3.500 Euro. Das Pflegegeld (bis 947 €/Monat bei Pflegegrad 5) und das Entlastungsbudget (3.539 €/Jahr) der Pflegekasse können die Eigenkosten erheblich senken. Steuerlich sind 20 % der Kosten als haushaltsnahe Dienstleistung absetzbar.',
              },
              {
                q: 'Was ist das Entlastungsbudget und was hat sich 2026 geändert?',
                a: 'Seit 1. Juli 2025 gibt es ein gemeinsames Entlastungsbudget von 3.539 Euro pro Jahr. Es fasst die frühere Verhinderungspflege und Kurzzeitpflege zusammen. 2026 ist das erste vollständige Kalenderjahr, in dem dieser Betrag ohne Übergangsregelungen nutzbar ist. Die Vorpflegezeit von 6 Monaten entfällt. Wichtig: Ungenutztes Budget verfällt am 31. Dezember.',
              },
              {
                q: 'Ist 24-Stunden-Pflege legal?',
                a: 'Ja — über eine seriöse Agentur im Entsendemodell ist 24h-Pflege absolut legal. Die A1-Bescheinigung belegt die Sozialversicherung im Heimatland. Scheinselbstständigkeit ist dagegen strafbar und kann zu hohen Nachzahlungen von Sozialabgaben führen.',
              },
              {
                q: 'Was ist der Unterschied zwischen 24h-Pflege und Pflegeheim?',
                a: 'Im Pflegeheim beträgt der Eigenanteil im Bundesdurchschnitt 2.871 Euro pro Monat — ohne individuelle Eins-zu-eins-Betreuung und ohne die vertraute Umgebung. Bei der 24h-Pflege bleibt der Mensch zuhause, erhält persönliche Betreuung rund um die Uhr und zahlt oft vergleichbare oder geringere Gesamtkosten.',
              },
              {
                q: 'Wie schnell kann eine 24h-Betreuung beginnen?',
                a: 'Mit Primundus ist die Betreuungskraft typischerweise innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch vor Ort — täglich kündbar, taggenaue Abrechnung.',
              },
              {
                q: 'Für welche Pflegesituationen ist 24h-Pflege geeignet?',
                a: '24h-Pflege ist geeignet ab Pflegegrad 2 — für Demenz, Alzheimer, nach Schlaganfall oder Operation, bei Parkinson, MS, Herzinsuffizienz, eingeschränkter Mobilität und Sturzrisiko. Sie funktioniert überall dort, wo kontinuierliche Präsenz wichtiger ist als stationäre medizinische Versorgung.',
              },
              {
                q: 'Was ist der Unterschied zwischen Verhinderungspflege und Entlastungsbudget?',
                a: 'Seit Juli 2025 gibt es kein getrenntes Budget mehr für Verhinderungspflege und Kurzzeitpflege — beide wurden im gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengeführt. Der monatliche Entlastungsbetrag von 131 Euro ist davon getrennt und kann zusätzlich für anerkannte Betreuungsleistungen eingesetzt werden.',
              },
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

          {/* ── ARTICLE CTA — einmal, ganz unten ── */}
          <ArticleCTA />

        </div>
      </div>
    </>
  )
}
