import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'zeichen', title: 'Anzeichen erkennen' },
  { id: 'ursachen', title: 'Warum Burnout entsteht' },
  { id: 'hilfe', title: 'Sofortige Entlastung' },
  { id: 'praevention', title: 'Langfristig schützen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Burnout pflegende Angehörige — Warnsignale & Hilfe | Primundus',
  description: 'Burnout durch Pflege erkennen: Erschöpfung, Isolation, Reizbarkeit. Was sofort hilft und wie eine 24h-Betreuungskraft pflegende Angehörige dauerhaft entlastet.',
  alternates: { canonical: 'https://primundus.de/burnout-pflegende-angehoerige/' },
  openGraph: {
    title: 'Burnout pflegende Angehörige | Primundus',
    description: 'Warnsignale für Burnout durch Pflege und wie man Angehörige dauerhaft entlastet.',
    url: 'https://primundus.de/burnout-pflegende-angehoerige/',
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
    headline: 'Burnout pflegende Angehörige — Warnsignale, Ursachen & Hilfe',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/burnout-pflegende-angehoerige/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Burnout pflegende Angehörige', item: 'https://primundus.de/burnout-pflegende-angehoerige/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Woran erkennt man Burnout bei pflegenden Angehörigen?', acceptedAnswer: { '@type': 'Answer', text: 'Typische Zeichen: chronische Erschöpfung die Schlaf nicht behebt, zunehmende Reizbarkeit und Ungeduld gegenüber dem Pflegebedürftigen, sozialer Rückzug, Vernachlässigung der eigenen Gesundheit, Schuldgefühle kombiniert mit Hilflosigkeit, Schlafstörungen und körperliche Beschwerden ohne organische Ursache.' } },
      { '@type': 'Question', name: 'Wie viele pflegende Angehörige leiden unter Burnout?', acceptedAnswer: { '@type': 'Answer', text: 'Studien zeigen dass rund 30–50 % der pflegenden Angehörigen unter erhöhtem Stressniveau leiden, ein erheblicher Teil entwickelt klinisch relevante Burnout-Symptome oder Depressionen. Besonders betroffen: Kinder die berufstätig sind und gleichzeitig Eltern pflegen.' } },
      { '@type': 'Question', name: 'Was hilft bei Burnout durch Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Sofortige Entlastung: Verhinderungspflege oder Kurzzeitpflege aus dem Entlastungsbudget (3.539 €/Jahr) nutzen. Mittelfristig: 24h-Betreuungskraft die die Hauptlast übernimmt. Parallel: eigene Beratung bei Pflegestützpunkten, Selbsthilfegruppen für pflegende Angehörige.' } },
    ],
  },
]

export default function BurnoutPflegendeAngehoerige() {
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
            <a href="/alltag/" className="hover:text-[#8B7355] transition-colors">Alltag & Angehörige</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Burnout pflegende Angehörige</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Burnout pflegende Angehörige — Warnsignale erkennen & Hilfe finden
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Rund 30–50 % der pflegenden Angehörigen leiden unter chronischer Überlastung. Burnout entwickelt sich schleichend — und wer ihn nicht rechtzeitig erkennt, gefährdet am Ende die eigene Gesundheit und die Pflege des Angehörigen. Die wichtigste Botschaft: Entlastung zu suchen ist keine Schwäche, sondern Verantwortung.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                '30–50 % der pflegenden Angehörigen leiden unter Burnout-Symptomen',
                'Burnout entwickelt sich schleichend — frühe Zeichen oft ignoriert',
                'Sofortige Entlastung: Entlastungsbudget (3.539 €/Jahr) für Auszeit nutzen',
                '24h-Betreuungskraft: dauerhafteste Entlastung — übernimmt Hauptlast',
                'Pflegestützpunkte und Selbsthilfegruppen kostenlos nutzen',
                'Eigene Gesundheit schützen = beste Pflege für den Angehörigen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="zeichen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Warnsignale erkennen — diese Zeichen ernst nehmen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Burnout bei pflegenden Angehörigen entwickelt sich über Monate und Jahre. Die Zeichen werden oft als "normal" abgetan — dabei sind sie ein ernstes Signal des Körpers.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Chronische Erschöpfung', desc: 'Müdigkeit die auch nach Schlaf nicht besser wird. Das Gefühl nie wirklich erholt zu sein — selbst nach freien Stunden.' },
              { title: 'Zunehmende Reizbarkeit', desc: 'Ungeduld und Gereiztheit gegenüber dem Pflegebedürftigen, aber auch gegenüber Familienmitgliedern und Kollegen. Gefolgt von Schuldgefühlen.' },
              { title: 'Sozialer Rückzug', desc: 'Freundschaften einschlafen lassen, Einladungen absagen, Hobbys aufgeben. "Ich habe keine Zeit und keine Kraft mehr."' },
              { title: 'Vernachlässigung der eigenen Gesundheit', desc: 'Eigene Arzttermine vergessen oder verschieben. Schmerzen ignorieren. Keine Zeit mehr für Sport oder Erholung.' },
              { title: 'Körperliche Beschwerden', desc: 'Kopfschmerzen, Rückenprobleme, Schlafstörungen, häufige Infekte — ohne organische Ursache. Der Körper zeigt was die Seele nicht mehr schafft.' },
              { title: 'Gefühl der Hilflosigkeit', desc: '"Ich schaffe das nicht mehr, aber ich kann nicht aufhören." Dieses Gefühl — kombiniert mit Schuldgefühlen beim Gedanken an Entlastung — ist ein zentrales Burnout-Symptom.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="ursachen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Warum Burnout bei Pflegenden entsteht
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Pflege ist kein Teilzeitjob — sie ist oft 24 Stunden am Tag, 7 Tage/Woche, ohne Urlaubsanspruch. Hinzu kommen spezifische Belastungsfaktoren die Burnout besonders wahrscheinlich machen.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Doppelbelastung Beruf + Pflege', desc: 'Viele pflegende Angehörige sind berufstätig und versuchen beides zu stemmen. Der Feierabend beginnt mit der nächsten Schicht — zuhause.' },
              { title: 'Kein Ende in Sicht', desc: 'Anders als bei anderen Belastungen gibt es bei chronischer Pflege kein Ablaufdatum. Die Belastung steigt oft sogar mit der Zeit.' },
              { title: 'Gesellschaftliche Erwartungen', desc: '"Du müsstest das doch schaffen — das ist deine Mutter." Schuldgefühle bei jedem Gedanken an Entlastung.' },
              { title: 'Fehlende Unterstützung', desc: 'Viele Pflegende wissen nicht welche Leistungen ihnen zustehen — und zahlen damit mit ihrer Gesundheit.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="hilfe" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Sofortige Entlastung — diese Möglichkeiten gibt es
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Entlastung ist kein Luxus — sie ist eine gesetzliche Leistung. Wer das Entlastungsbudget nicht nutzt, verschenkt Geld und Gesundheit.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                title: 'Entlastungsbudget nutzen — 3.539 €/Jahr',
                desc: 'Seit Juli 2025 gibt es ein gemeinsames Budget für Verhinderungs- und Kurzzeitpflege. Es ermöglicht Auszeiten von mehreren Wochen — während die Pflege durch eine Vertretung sichergestellt wird. Kein Antrag nötig — einfach bei der Pflegekasse anmelden.',
                highlight: true,
              },
              {
                title: '24h-Betreuungskraft — dauerhafte Entlastung',
                desc: 'Die wirkungsvollste Lösung: Eine Betreuungskraft übernimmt die tägliche Pflege. Angehörige sind wieder Angehörige — nicht rund um die Uhr Pflegepersonal. Primundus startet in 4–7 Tagen.',
                highlight: false,
              },
              {
                title: 'Tagespflege — stundenweise Entlastung',
                desc: 'Der pflegebedürftige Mensch verbringt einige Tage pro Woche in einer Tagespflegeeinrichtung. Angehörige haben Freizeit — der Pflegebedürftige hat Struktur und Gesellschaft.',
                highlight: false,
              },
              {
                title: 'Pflegestützpunkte — kostenlose Beratung',
                desc: 'In jedem Bundesland gibt es kostenlose Pflegestützpunkte. Beratung zu Leistungsansprüchen, Unterstützungsangeboten und Entlastungsmöglichkeiten — ohne Voranmeldung.',
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
            → Entlastungsbudget im Detail:{' '}
            <a href="/verhinderungspflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Verhinderungspflege & Entlastungsbudget 2026</a>
          </p>

          <h2 id="praevention" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Langfristig schützen — was hilft wirklich
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Grenzen setzen lernen', desc: '"Ich kann nicht alles" ist keine Niederlage — es ist Realismus. Wer klare Grenzen setzt, pflegt länger und besser als wer sich bis zum Zusammenbruch verausgabt.' },
              { title: 'Hilfe annehmen', desc: 'Freunde und Familie in die Pflege einbinden. Professionelle Unterstützung organisieren. "Ich schaffe das allein" ist oft keine Tugend — sondern ein Risiko.' },
              { title: 'Eigene Bedürfnisse ernst nehmen', desc: 'Sport, Schlaf, soziale Kontakte, eigene Arzttermine — das sind keine Extras, sondern Grundlage für gute Pflege.' },
              { title: 'Selbsthilfegruppen', desc: 'Der Austausch mit anderen pflegenden Angehörigen ist heilsam. Lokale Gruppen über die Pflegekasse oder die Alzheimer Gesellschaft finden.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Woran erkennt man Burnout bei pflegenden Angehörigen?', a: 'Chronische Erschöpfung die Schlaf nicht behebt, Reizbarkeit, sozialer Rückzug, Vernachlässigung der eigenen Gesundheit, körperliche Beschwerden ohne organische Ursache, Gefühl der Hilflosigkeit kombiniert mit Schuldgefühlen.' },
              { q: 'Was hilft sofort bei Burnout durch Pflege?', a: 'Das Entlastungsbudget (3.539 €/Jahr) für Verhinderungs- oder Kurzzeitpflege nutzen — das ermöglicht mehrwöchige Auszeiten. Kostenlose Beratung bei Pflegestützpunkten. Mittelfristig: 24h-Betreuungskraft die die tägliche Hauptlast übernimmt.' },
              { q: 'Darf man Pflege abgeben?', a: 'Ja — und es ist oft das Verantwortlichste was man tun kann. Eine professionelle 24h-Betreuungskraft bietet oft bessere Pflege als erschöpfte Angehörige. Pflege abgeben bedeutet nicht aufgeben — sondern klug organisieren.' },
              { q: 'Welche Leistungen stehen pflegenden Angehörigen zu?', a: 'Pflegegeld kann an pflegende Angehörige weitergegeben werden. Das Entlastungsbudget (3.539 €/Jahr) ermöglicht Urlaub. Pflegezeitgesetz: bis zu 6 Monate Auszeit vom Beruf möglich. Pflegekurs: Kostenlose Schulung durch die Pflegekasse.' },
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
