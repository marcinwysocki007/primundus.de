import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Pflegegeld?' },
  { id: 'betraege', title: 'Beträge 2026 — alle Pflegegrade' },
  { id: 'anspruch', title: 'Wer hat Anspruch?' },
  { id: 'kombinieren', title: 'Pflegegeld kombinieren' },
  { id: 'beantragen', title: 'Pflegegeld beantragen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegeld 2026 — Beträge, Anspruch & Kombinationen | Primundus',
  description: 'Pflegegeld 2026: 347 € (PG 2) bis 990 € (PG 5) pro Monat. Wer Anspruch hat, wie es mit 24h-Pflege kombiniert wird und was sich 2026 geändert hat.',
  alternates: { canonical: 'https://primundus.de/pflegegeld/' },
  openGraph: {
    title: 'Pflegegeld 2026 — Beträge & Anspruch | Primundus',
    description: 'Pflegegeld 2026: 347–990 €/Monat je nach Pflegegrad. Alle Beträge, Anspruchsvoraussetzungen und Kombinationsmöglichkeiten.',
    url: 'https://primundus.de/pflegegeld/',
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
    headline: 'Pflegegeld 2026 — Beträge, Anspruch & Kombinationen',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegeld/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegeld 2026', item: 'https://primundus.de/pflegegeld/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie hoch ist das Pflegegeld 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegegeld 2026: Pflegegrad 2 = 347 €/Monat, Pflegegrad 3 = 599 €/Monat, Pflegegrad 4 = 800 €/Monat, Pflegegrad 5 = 990 €/Monat. Die Beträge sind identisch zu 2025 — keine Erhöhung für 2026. Nächste Dynamisierung frühestens Januar 2028.' },
      },
      {
        '@type': 'Question',
        name: 'Wer hat Anspruch auf Pflegegeld?',
        acceptedAnswer: { '@type': 'Answer', text: 'Anspruch auf Pflegegeld haben Pflegebedürftige ab Pflegegrad 2, die zu Hause gepflegt werden — überwiegend durch Angehörige, Freunde oder andere nicht-professionelle Pflegepersonen. Bei Pflegeheimaufenthalt entfällt der Anspruch.' },
      },
      {
        '@type': 'Question',
        name: 'Kann man Pflegegeld und 24h-Pflege kombinieren?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — Pflegegeld wird auch dann ausgezahlt wenn eine 24h-Betreuungskraft im Haushalt lebt, solange die Pflege überwiegend durch private Personen (Angehörige) sichergestellt ist. Die Betreuungskraft unterstützt, die Familie bleibt Hauptpflegeperson.' },
      },
      {
        '@type': 'Question',
        name: 'Was hat sich beim Pflegegeld 2026 geändert?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegegeld selbst hat sich 2026 nicht geändert — die 4,5%-Erhöhung galt ab Januar 2025 und bleibt unverändert. Was sich 2026 änderte: Das Entlastungsbudget (3.539 €/Jahr) ist seit Juli 2025 als gemeinsames Budget für Verhinderungs- und Kurzzeitpflege nutzbar — 2026 erstmals ohne Übergangsregelungen.' },
      },
      {
        '@type': 'Question',
        name: 'Was passiert mit dem Pflegegeld bei Krankenhausaufenthalt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bei vollstationärem Krankenhausaufenthalt wird das Pflegegeld für die ersten 4 Wochen weitergezahlt. Ab der 5. Woche entfällt es, da die Pflege durch das Krankenhaus übernommen wird.' },
      },
      {
        '@type': 'Question',
        name: 'Muss Pflegegeld versteuert werden?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein — Pflegegeld ist steuerfrei. Weder beim Pflegebedürftigen noch bei Angehörigen, die das Geld als Anerkennung erhalten, wird es als Einkommen angerechnet.' },
      },
    ],
  },
]

export default function Pflegegeld() {
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
            <span className="text-[#1C1C1C]">Pflegegeld 2026</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegeld 2026 — Beträge, Anspruch & Kombinationen
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegegeld 2026 beträgt 347 € (Pflegegrad 2) bis 990 € (Pflegegrad 5) pro Monat — identisch zu 2025. Die letzte Erhöhung um 4,5 % galt ab Januar 2025, die nächste Dynamisierung kommt frühestens Januar 2028. Neu seit Juli 2025: Das Entlastungsbudget von 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege — 2026 erstmals vollständig nutzbar.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Pflegegeld 2026: 347 € (PG 2) · 599 € (PG 3) · 800 € (PG 4) · 990 € (PG 5)',
                'Keine Erhöhung 2026 — nächste Dynamisierung frühestens Januar 2028',
                'Anspruch ab Pflegegrad 2 bei häuslicher Pflege durch Angehörige',
                'Steuerfrei — weder beim Pflegebedürftigen noch bei Angehörigen',
                'Kombinierbar mit Sachleistungen, Entlastungsbetrag und 24h-Pflege',
                'Beratungspflicht: PG 2–3 halbjährlich · PG 4–5 vierteljährlich',
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
            Was ist Pflegegeld?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Pflegegeld ist eine monatliche Geldleistung der Pflegeversicherung für Pflegebedürftige, die zu Hause von Angehörigen oder anderen privaten Personen gepflegt werden. Es dient als finanzielle Anerkennung für die Pflegeperson — der Pflegebedürftige erhält das Geld und gibt es in der Regel weiter.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Im Gegensatz zu Pflegesachleistungen (die direkt an den Pflegedienst gezahlt werden) kann Pflegegeld frei verwendet werden. Es gibt keine Zweckbindung — die Pflegeperson entscheidet selbst wie sie das Geld einsetzt.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Pflegegeld vs. Pflegesachleistungen', desc: 'Pflegegeld bekommt die pflegebedürftige Person ausgezahlt und gibt es an Angehörige weiter. Pflegesachleistungen gehen direkt an den ambulanten Pflegedienst. Beides lässt sich anteilig kombinieren.' },
              { title: 'Pflegegeld vs. Entlastungsbetrag', desc: 'Der Entlastungsbetrag (131 €/Monat) ist zusätzlich zum Pflegegeld — er ist zweckgebunden für anerkannte Betreuungs- und Entlastungsangebote. Beide laufen parallel.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 2 */}
          <h2 id="betraege" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegeld Beträge 2026 — alle Pflegegrade
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Beträge 2026 sind identisch zu 2025. Die letzte Erhöhung (+4,5 %) galt ab 1. Januar 2025. Eine weitere Anpassung ist gesetzlich frühestens für den 1. Januar 2028 vorgesehen.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">
                Pflegegeld & Leistungen 2026 — vollständige Tabelle
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Pflegegeld/Monat', 'Sachleistungen/Monat', '+ Entlastungsbetrag', 'Gesamt möglich'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 1', '—', '—', '131 €', '131 €'],
                    ['PG 2', '347 €', '796 €', '131 €', '478 €'],
                    ['PG 3', '599 €', '1.497 €', '131 €', '730 €'],
                    ['PG 4', '800 €', '1.859 €', '131 €', '931 €'],
                    ['PG 5', '990 €', '2.299 €', '131 €', '1.121 €'],
                  ].map(([grad, pg, sach, eb, gesamt], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{sach}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{eb}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#8B7355] border-b border-[#E5E3DF]">{gesamt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Quelle: GKV-Spitzenverband, SGB XI · Stand 2026 · Identisch zu 2025 · Nächste Dynamisierung frühestens Jan. 2028</p>
            </div>
          </div>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-2">Zusätzlich — Entlastungsbudget 2026</p>
            <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Seit Juli 2025 gibt es ein gemeinsames Jahresbudget für Verhinderungs- und Kurzzeitpflege. 2026 ist das erste volle Jahr ohne Übergangsregelungen. Gilt für PG 2–5, flexibel aufteilbar. Wichtig: verfällt am 31. Dezember — nicht genutztes Budget geht verloren.
            </p>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Entlastungsbudget im Detail:{' '}
            <a href="/verhinderungspflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Verhinderungspflege & Entlastungsbudget 2026
            </a>
          </p>

          {/* SECTION 3 */}
          <h2 id="anspruch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wer hat Anspruch auf Pflegegeld?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Pflegegeld erhalten Pflegebedürftige, die alle drei dieser Voraussetzungen erfüllen:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Pflegegrad 2 oder höher', desc: 'Bei Pflegegrad 1 gibt es kein Pflegegeld — nur den Entlastungsbetrag (131 €/Monat). Ab PG 2 besteht Anspruch.' },
              { n: '2', title: 'Häusliche Pflege', desc: 'Der Pflegebedürftige lebt zu Hause — nicht in einem Pflegeheim. Bei vollstationärer Heimunterbringung entfällt das Pflegegeld.' },
              { n: '3', title: 'Pflege durch private Personen', desc: 'Die Pflege wird überwiegend durch Angehörige, Freunde oder andere nicht-professionelle Pflegepersonen sichergestellt — nicht ausschließlich durch einen Pflegedienst.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">
                  {item.n}
                </span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Wichtige Regeln beim Pflegegeld</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Beratungseinsatz PG 2–3', 'Alle 6 Monate Pflicht — sonst Kürzung'],
                    ['Beratungseinsatz PG 4–5', 'Alle 3 Monate Pflicht — sonst Kürzung'],
                    ['Krankenhausaufenthalt', '4 Wochen weitergezahlt, danach entfällt es'],
                    ['Steuerpflicht', 'Nein — Pflegegeld ist steuerfrei'],
                    ['Anrechnung auf Bürgergeld', 'Nein — wird nicht als Einkommen angerechnet'],
                    ['Auszahlung', 'Monatlich im Voraus direkt an den Pflegebedürftigen'],
                  ].map(([regel, info], i) => (
                    <tr key={regel} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{regel}</td>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegegrad beantragen:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Pflegegrad beantragen — Schritt für Schritt
            </a>
          </p>

          {/* SECTION 4 */}
          <h2 id="kombinieren" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegeld kombinieren — alle Möglichkeiten
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Pflegegeld lässt sich mit mehreren anderen Leistungen kombinieren — das maximiert die Gesamtentlastung deutlich.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                title: 'Pflegegeld + Entlastungsbetrag',
                desc: 'Der Entlastungsbetrag (131 €/Monat) läuft vollständig parallel zum Pflegegeld — keine Anrechnung, keine Kürzung. Bei PG 3 zusammen: 730 €/Monat.',
                highlight: true,
              },
              {
                title: 'Pflegegeld + Pflegesachleistungen (Kombinationsleistung)',
                desc: 'Wer teilweise einen Pflegedienst nutzt, bekommt das Pflegegeld anteilig. Beispiel PG 3: 50 % Sachleistungen genutzt → noch 50 % Pflegegeld (ca. 299 €) erhalten. Zusammen oft mehr als nur Pflegegeld.',
                highlight: false,
              },
              {
                title: 'Pflegegeld + 24h-Betreuungskraft',
                desc: 'Auch bei einer 24h-Kraft aus einer Agentur wird Pflegegeld ausgezahlt — solange Angehörige als Hauptpflegeperson anerkannt sind und die Beratungseinsätze wahrgenommen werden.',
                highlight: false,
              },
              {
                title: 'Pflegegeld + Entlastungsbudget',
                desc: '3.539 €/Jahr (Entlastungsbudget) läuft zusätzlich zum Pflegegeld — für Verhinderungs- und Kurzzeitpflege wenn Angehörige Urlaub brauchen oder ausfallen.',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse optimal nutzen:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Finanzierung der 24h-Pflege — vollständige Übersicht
            </a>
            {' · '}
            <a href="/eigenanteil-24h-pflege-senken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Eigenanteil senken — alle Möglichkeiten
            </a>
          </p>

          {/* SECTION 5 */}
          <h2 id="beantragen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegeld beantragen — so geht es
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Pflegegeld wird nicht separat beantragt — es ist automatisch Teil des Pflegegradantrags. Wer einen Pflegegrad bekommt und zu Hause gepflegt wird, wählt zwischen Pflegegeld, Sachleistungen oder der Kombination.
          </p>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Pflegegrad beantragen', desc: 'Bei der Pflegekasse (Krankenkasse) formlos schriftlich oder telefonisch. Leistungen gelten rückwirkend ab Antragsdatum.' },
              { n: '2', title: 'MD-Begutachtung', desc: 'Der Medizinische Dienst kommt nach Hause und stellt den Pflegegrad fest.' },
              { n: '3', title: 'Leistungsart wählen', desc: 'Nach dem Bescheid: Pflegegeld, Sachleistungen oder Kombination wählen. Die Pflegekasse berät — Beratung nach § 7a SGB XI ist kostenlos und Pflicht.' },
              { n: '4', title: 'Beratungseinsätze wahrnehmen', desc: 'PG 2–3: halbjährlich · PG 4–5: vierteljährlich. Wird ein Termin versäumt, kann die Pflegekasse das Pflegegeld kürzen oder aussetzen.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">
                  {step.n}
                </span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Schritt für Schritt:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Pflegegrad beantragen — vollständige Anleitung
            </a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zum Pflegegeld 2026
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: 'Wie hoch ist das Pflegegeld 2026?',
                a: 'PG 2: 347 €/Monat · PG 3: 599 €/Monat · PG 4: 800 €/Monat · PG 5: 990 €/Monat. Identisch zu 2025 — keine Erhöhung für 2026. Nächste Dynamisierung frühestens Januar 2028.',
              },
              {
                q: 'Wer hat Anspruch auf Pflegegeld?',
                a: 'Pflegebedürftige ab Pflegegrad 2, die zu Hause von Angehörigen oder privaten Pflegepersonen gepflegt werden. Bei Pflegeheimaufenthalt entfällt der Anspruch.',
              },
              {
                q: 'Was hat sich beim Pflegegeld 2026 geändert?',
                a: 'Das Pflegegeld selbst hat sich nicht geändert. Neu ist das Entlastungsbudget (3.539 €/Jahr seit Juli 2025), das Verhinderungs- und Kurzzeitpflege in einem flexiblen Topf zusammenfasst — 2026 erstmals vollständig ohne Übergangsregelungen nutzbar.',
              },
              {
                q: 'Kann man Pflegegeld und 24h-Pflege kombinieren?',
                a: 'Ja — Pflegegeld wird auch bei einer 24h-Betreuungskraft ausgezahlt, wenn Angehörige als Hauptpflegepersonen anerkannt sind und die Beratungseinsätze wahrgenommen werden.',
              },
              {
                q: 'Was passiert mit dem Pflegegeld bei Krankenhausaufenthalt?',
                a: 'Die ersten 4 Wochen wird Pflegegeld weitergezahlt. Ab der 5. Woche entfällt es, weil die Pflege vom Krankenhaus übernommen wird.',
              },
              {
                q: 'Muss Pflegegeld versteuert werden?',
                a: 'Nein — Pflegegeld ist vollständig steuerfrei, weder beim Pflegebedürftigen noch bei Angehörigen die es erhalten.',
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

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
