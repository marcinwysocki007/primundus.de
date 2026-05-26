import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-inbegriffen', title: 'Was ist inbegriffen?' },
  { id: 'betreuung', title: 'Betreuung & Pflege' },
  { id: 'haushalt', title: 'Haushalt & Alltag' },
  { id: 'medizinisch', title: 'Medizinische Unterstützung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Leistungen der 24h-Pflege — was eine Betreuungskraft macht | Primundus',
  description: 'Was macht eine 24h-Betreuungskraft? Pflege, Haushalt, Begleitung, medizinische Unterstützung — alle Leistungen der Primundus 24h-Pflege im Überblick.',
  alternates: { canonical: 'https://primundus.de/leistungen/' },
  openGraph: {
    title: 'Leistungen der 24h-Pflege | Primundus',
    description: 'Was eine 24h-Betreuungskraft macht — alle Leistungen im Überblick.',
    url: 'https://primundus.de/leistungen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Leistungen der 24h-Pflege — was eine Betreuungskraft macht',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/leistungen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://primundus.de/leistungen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was macht eine 24h-Betreuungskraft?', acceptedAnswer: { '@type': 'Answer', text: 'Eine 24h-Betreuungskraft übernimmt: Körperpflege (Waschen, Ankleiden, Zahnpflege), Haushalt (Kochen, Einkaufen, Putzen, Wäsche), Begleitung und Gesellschaft, Medikamentenerinnerung, Mobilisierung, Begleitung zu Arzt- und Therapieterminen. Sie lebt dauerhaft im Haushalt und ist rund um die Uhr erreichbar.' } },
      { '@type': 'Question', name: 'Was macht eine 24h-Kraft NICHT?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Betreuungskraft ist keine examinierte Krankenpflegerin. Medizinische Behandlungspflege (Injektionen, Verbandswechsel, Katheterversorgung) wird durch einen ambulanten Pflegedienst erbracht. Primundus koordiniert auf Wunsch die Zusammenarbeit.' } },
    ],
  },
]

export default function Leistungen() {
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
            <span className="text-[#1C1C1C]">Leistungen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Leistungen der 24h-Pflege — was eine Betreuungskraft macht
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Eine 24h-Betreuungskraft von Primundus ist weit mehr als eine Pflegehilfe — sie ist Begleiterin, Haushälterin, Gesellschafterin und Ansprechpartnerin in einem. Rund um die Uhr, dauerhaft im Haushalt, vertraut mit dem Pflegebedürftigen. Hier ist der vollständige Überblick was inbegriffen ist.
          </p>

          <div className="bg-white border-2 border-[#8B7355] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-4">Alle Leistungen auf einen Blick</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                '✓ Körperpflege — Waschen, Ankleiden, Zahnpflege',
                '✓ Kochen — frische, altersgerechte Mahlzeiten',
                '✓ Einkaufen und Erledigungen',
                '✓ Haushaltsführung — Putzen, Wäsche, Ordnung',
                '✓ Gesellschaft und Begleitung — rund um die Uhr',
                '✓ Medikamentenerinnerung',
                '✓ Mobilisierung und Spaziergänge',
                '✓ Begleitung zu Arzt- und Therapieterminen',
                '✓ Nachtbereitschaft — immer erreichbar',
                '✓ Demenzbetreuung — Struktur und Sicherheit',
              ].map((item) => (
                <div key={item} className="text-[14px] text-[#2E2E2E] flex gap-2">
                  <span className="text-[#3D7A5C] flex-shrink-0 font-bold">✓</span>
                  {item.replace('✓ ', '')}
                </div>
              ))}
            </div>
          </div>

          <h2 id="was-inbegriffen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist inbegriffen — das Gesamtpaket
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der entscheidende Unterschied zu ambulanter Pflege: Eine 24h-Betreuungskraft übernimmt nicht einzelne Leistungen zu definierten Zeiten — sie ist vollständig da. Das bedeutet: Alles was im Alltag anfällt, wird gemeinsam bewältigt.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { bereich: 'Pflege', items: ['Körperpflege: Waschen, Duschen, Baden, Zahnpflege, Rasieren', 'Ankleiden und Auskleiden — angepasst an Einschränkungen', 'Lagerung und Positionswechsel zur Dekubitusprophylaxe', 'Inkontinenzversorgung', 'Mobilisierung und Gehübungen'] },
              { bereich: 'Haushalt', items: ['Kochen — frisch, altersgerecht, nach Vorlieben und Diät', 'Einkaufen und Besorgungen', 'Putzen, Wäsche waschen, Bügeln', 'Ordnung und Sauberkeit', 'Tierpflege möglich'] },
              { bereich: 'Begleitung & Soziales', items: ['Gesellschaft und Gespräche — den ganzen Tag', 'Spaziergänge und Ausflüge', 'Begleitung zu Arzt- und Therapieterminen', 'Freizeitgestaltung nach Interessen', 'Kontakt mit Familie halten'] },
              { bereich: 'Sicherheit', items: ['Nachtbereitschaft — immer erreichbar', 'Sturzprävention im Alltag', 'Notfallreaktion sofort', 'Medikamentenerinnerung (nicht -verabreichung)', 'Gewichtskontrolle und Vitalzeichen dokumentieren'] },
            ].map((block) => (
              <div key={block.bereich} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-3">{block.bereich}</p>
                <ul className="space-y-1">
                  {block.items.map(item => (
                    <li key={item} className="text-[14px] text-[#2E2E2E] flex gap-2">
                      <span className="text-[#3D7A5C] flex-shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="betreuung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Betreuung & Pflege — was das im Alltag bedeutet
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Eine gute Betreuungskraft passt sich dem Rhythmus und den Gewohnheiten des Pflegebedürftigen an — nicht umgekehrt. Das Frühstück wann man will, die Lieblingszeitung beim Kaffee, der Spaziergang im eigenen Tempo. Das ist der Kern von 24h-Betreuung zuhause: das eigene Leben so wie es war — mit Unterstützung.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { beispiel: 'Morgens', ablauf: 'Aufstehen gemeinsam. Körperpflege in Ruhe, ohne Hetze. Frühstück nach Wunsch. Zeitung, Kaffee, Gespräch. Die Kraft ist da — aber nie aufdringlich.' },
              { beispiel: 'Tagsüber', ablauf: 'Haushalt, Einkäufe, Arzttermin begleiten. Beschäftigung nach Interesse: Gartenarbeit, Puzzeln, Musik, Besuche. Mittagessen frisch zubereitet. Mittagsruhe.' },
              { beispiel: 'Abends', ablauf: 'Abendessen, Fernsehen, Gespräch. Abendpflege. Zu Bett bringen. Die Kraft ist für die Nacht da — bereit einzugreifen wenn etwas passiert.' },
            ].map((item) => (
              <div key={item.beispiel} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.beispiel}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.ablauf}</p>
              </div>
            ))}
          </div>

          <h2 id="haushalt" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Haushalt & Alltag — vollständig übernommen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Die Betreuungskraft führt den Haushalt eigenständig. Frische Mahlzeiten, saubere Wäsche, ordentliche Wohnung — alles läuft, ohne dass Angehörige eingreifen müssen. Das ist einer der wichtigsten Entlastungseffekte für pflegende Familien.
          </p>

          <h2 id="medizinisch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Medizinische Unterstützung — was geht, was nicht
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { was: '✓ Inbegriffen', items: ['Medikamentenerinnerung ("Bitte Ihre Tabletten nehmen")', 'Vitalzeichen beobachten und dokumentieren (Puls, Gewicht)', 'Arzttermine begleiten und unterstützen', 'Kommunikation mit Ärzten auf Wunsch', 'Notfall erkennen und sofort reagieren / Rettungsdienst rufen'], farbe: 'bg-[#E8F5EE] border-[rgba(61,122,92,0.15)]', textColor: 'text-[#2A5C3F]' },
              { was: '✗ Nicht inbegriffen (Pflegedienst)', items: ['Injektionen (Insulin, Blutgerinnungshemmer)', 'Verbandswechsel bei Wunden', 'Katheterversorgung', 'Ernährung über Magensonde', 'Inhalationstherapie'], farbe: 'bg-[#FDF0EE] border-[rgba(231,111,99,0.15)]', textColor: 'text-[#8B3E2F]' },
            ].map((block) => (
              <div key={block.was} className={`rounded-xl p-5 border ${block.farbe}`}>
                <p className={`text-[13px] font-bold uppercase tracking-[0.08em] mb-3 ${block.textColor}`}>{block.was}</p>
                <ul className="space-y-1">
                  {block.items.map(item => (
                    <li key={item} className={`text-[14px] ${block.textColor} flex gap-2`}>
                      <span className="flex-shrink-0">{block.was.startsWith('✓') ? '✓' : '✗'}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            Für Behandlungspflege koordiniert Primundus auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst — nahtlos und ohne zusätzlichen Aufwand für die Familie.
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was macht eine 24h-Betreuungskraft?', a: 'Körperpflege, Haushalt (Kochen, Einkaufen, Putzen), Gesellschaft und Begleitung rund um die Uhr, Medikamentenerinnerung, Mobilisierung, Arzttermine begleiten, Nachtbereitschaft.' },
              { q: 'Was macht eine 24h-Kraft nicht?', a: 'Medizinische Behandlungspflege (Injektionen, Verbandswechsel, Katheter) — das übernimmt ein ambulanter Pflegedienst. Primundus koordiniert auf Wunsch die Zusammenarbeit.' },
              { q: 'Kocht die Betreuungskraft auch?', a: 'Ja — frische, altersgerechte Mahlzeiten nach Vorlieben und Diät sind Bestandteil der 24h-Betreuung. Viele Familien schätzen das als einen der größten Entlastungseffekte.' },
              { q: 'Ist die Betreuungskraft auch nachts verfügbar?', a: 'Ja — Nachtbereitschaft ist inbegriffen. Die Kraft schläft im Haushalt und ist sofort erreichbar wenn nachts etwas passiert.' },
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
