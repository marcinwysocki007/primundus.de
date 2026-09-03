import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('vorsorgevollmacht-erstellen', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist eine Vorsorgevollmacht?' },
  { id: 'inhalt', title: 'Was muss rein?' },
  { id: 'erstellen', title: 'Erstellen — Schritt für Schritt' },
  { id: 'beglaubigung', title: 'Notariell oder nicht?' },
  { id: 'pflege', title: 'Bedeutung für die Pflege' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Vorsorgevollmacht erstellen — Anleitung, Inhalt & Kosten',
  description: 'Vorsorgevollmacht erstellen: Was reinmuss, ob Notar nötig ist, wie sie registriert wird und warum sie für die Organisation der 24h-Pflege unverzichtbar ist.',
  alternates: { canonical: 'https://primundus.de/vorsorgevollmacht-erstellen' },
  openGraph: {
    title: 'Vorsorgevollmacht erstellen | Primundus',
    description: 'Vorsorgevollmacht: Was reinmuss, ob Notar nötig ist und warum sie für die Pflege-Organisation unverzichtbar ist.',
    url: 'https://primundus.de/vorsorgevollmacht-erstellen',
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
    headline: 'Vorsorgevollmacht erstellen — Anleitung, Inhalt & Kosten',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/vorsorgevollmacht-erstellen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Vorsorgevollmacht erstellen', item: 'https://primundus.de/vorsorgevollmacht-erstellen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist eine Vorsorgevollmacht?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Vorsorgevollmacht ist ein Dokument das einer Vertrauensperson erlaubt, im Fall der eigenen Geschäftsunfähigkeit alle wichtigen Entscheidungen zu treffen — medizinische, finanzielle und rechtliche. Ohne Vollmacht müsste ein Gericht einen Betreuer bestellen.' } },
      { '@type': 'Question', name: 'Muss eine Vorsorgevollmacht notariell beglaubigt werden?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — für die meisten Bereiche reicht eine handschriftliche oder gedruckte Vollmacht mit Unterschrift. Für Immobiliengeschäfte und Bankgeschäfte bei manchen Instituten ist eine notarielle Beglaubigung (ca. 70 €) oder Beurkundung nötig.' } },
      { '@type': 'Question', name: 'Warum ist eine Vorsorgevollmacht für die Pflege wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Mit einer Vollmacht können Angehörige sofort handeln — Pflegegrad beantragen, Pflegeverträge unterschreiben, Krankenhausentscheidungen treffen. Ohne Vollmacht muss das Gericht einen Betreuer bestellen — das dauert Wochen bis Monate und kostet Kraft und Nerven.' } },
    ],
  },
]

export default function VorsorgevollmachtErstellen() {
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
            <a href="/alltag" className="hover:text-pm-taupe transition-colors">Alltag & Angehörige</a>
            <span>›</span>
            <span className="text-pm-ink">Vorsorgevollmacht erstellen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Vorsorgevollmacht erstellen — Anleitung, Inhalt & Kosten
          </h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Eine Vorsorgevollmacht ist das wichtigste Dokument für den Pflegefall — und wird von den meisten Menschen zu spät erstellt. Wer eine Pflegesituation organisiert ohne gültige Vollmacht, verliert wertvolle Wochen durch gerichtliche Betreuungsverfahren. Erstellen dauert einen Nachmittag — und gilt ein Leben lang.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Vorsorgevollmacht: Vertrauensperson entscheidet wenn man selbst nicht mehr kann',
                'Kein Notar nötig für die meisten Bereiche — handschriftlich + Unterschrift reicht',
                'Registrierung im Zentralen Vorsorgeregister der Bundesnotarkammer empfohlen',
                'Ohne Vollmacht: Gericht muss Betreuer bestellen — dauert Wochen bis Monate',
                'Für Pflege unverzichtbar: Pflegegrad beantragen, Verträge unterschreiben',
                'Jederzeit widerrufbar — solange man geschäftsfähig ist',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-pm-body">
                  <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was ist eine Vorsorgevollmacht?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Eine Vorsorgevollmacht ist ein rechtliches Dokument das einer selbst gewählten Vertrauensperson die Befugnis gibt, im Fall der eigenen Geschäfts- oder Einwilligungsunfähigkeit alle wichtigen Entscheidungen zu treffen — für Gesundheit, Finanzen und rechtliche Angelegenheiten.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Ohne Vorsorgevollmacht kann niemand — nicht einmal der Ehepartner oder die Kinder — automatisch für den Betroffenen entscheiden. Das Familiengericht muss dann einen gesetzlichen Betreuer bestellen. Das dauert in der Praxis oft Wochen bis Monate und verursacht erheblichen bürokratischen und emotionalen Aufwand.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Vorsorgevollmacht vs. Betreuungsverfügung', desc: 'Die Vollmacht bevollmächtigt eine Privatperson direkt. Die Betreuungsverfügung sagt dem Gericht wen es als gesetzlichen Betreuer bestellen soll — weniger direkt und effektiv.' },
              { title: 'Vorsorgevollmacht vs. Patientenverfügung', desc: 'Die Patientenverfügung regelt medizinische Entscheidungen für konkrete Behandlungssituationen. Die Vorsorgevollmacht benennt wer diese Entscheidungen treffen darf. Beide Dokumente ergänzen sich.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="inhalt" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was muss in die Vorsorgevollmacht?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Eine Vorsorgevollmacht sollte alle Lebensbereiche abdecken in denen Entscheidungen anfallen könnten. Die wichtigsten Bereiche:
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Gesundheit und Pflege', desc: 'Einwilligung in medizinische Behandlungen, Ablehnung lebensverlängernder Maßnahmen (in Kombination mit Patientenverfügung), Wahl des Pflegeheims oder der häuslichen Pflege, Pflegevertrag unterschreiben.' },
              { title: 'Aufenthaltsbestimmung', desc: 'Entscheidung wo der Betroffene lebt — zuhause, im Pflegeheim, in der eigenen Wohnung mit Betreuung.' },
              { title: 'Vermögensverwaltung', desc: 'Bankkonten führen, Rechnungen bezahlen, Steuererklärung einreichen, Verträge unterschreiben, Immobilien verwalten.' },
              { title: 'Behörden und Ämter', desc: 'Post entgegennehmen, Behördenkommunikation führen, Kranken- und Pflegekasse kontaktieren.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="erstellen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Vorsorgevollmacht erstellen — Schritt für Schritt
          </h2>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Vorlage besorgen', desc: 'Das Bundesministerium der Justiz bietet kostenlose Musterdokumente an (bmj.de). Alternativ: Anwalt oder Notar für individuelle Gestaltung hinzuziehen.' },
              { n: '2', title: 'Vertrauensperson bestimmen', desc: 'Wen vertraue ich? Wer ist bereit das zu übernehmen? Das Gespräch mit der Person vorab führen — Vollmacht niemals überraschend ausstellen.' },
              { n: '3', title: 'Dokument ausfüllen und unterschreiben', desc: 'Vollständig ausfüllen, Datum eintragen und eigenhändig unterschreiben. Bei gedrucktem Dokument reicht die Unterschrift. Handschriftliche Vollmachten können vollständig handgeschrieben sein.' },
              { n: '4', title: 'Im Zentralen Vorsorgeregister registrieren', desc: 'Bundesnotarkammer.de → Zentrales Vorsorgeregister. Kostenpflichtig (ca. 15 €) aber empfohlen: So kann die Vollmacht im Notfall schnell gefunden werden.' },
              { n: '5', title: 'Original sicher aufbewahren und Kopien verteilen', desc: 'Original an einem sicheren Ort. Kopie beim Bevollmächtigten. Kopie beim Hausarzt. Kopie beim Notar wenn notariell beglaubigt.' },
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

          <h2 id="beglaubigung" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Notariell oder nicht — was ist nötig?
          </h2>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Form', 'Wann ausreichend', 'Kosten'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Einfache Unterschrift', 'Für die meisten Bereiche — Pflege, Gesundheit, Behörden', 'Kostenlos'],
                    ['Notarielle Beglaubigung', 'Viele Banken fordern das für Kontovollmacht', 'Ca. 70 €'],
                    ['Notarielle Beurkundung', 'Pflicht für Immobiliengeschäfte', 'Ca. 150–500 € je nach Wert'],
                  ].map(([form, wann, kosten], i) => (
                    <tr key={form} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{form}</td>
                      <td className="px-4 py-3 text-[14px] text-pm-body border-b border-pm-line">{wann}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-pm-green border-b border-pm-line">{kosten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="pflege" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Bedeutung für die Pflege-Organisation
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Wer Pflege organisiert — ob 24h-Pflege oder Pflegeheim — braucht eine gültige Vollmacht. Ohne sie kann niemand für den Pflegebedürftigen unterschreiben oder entscheiden.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Pflegegrad beantragen', desc: 'Mit Vollmacht kann der Bevollmächtigte den Pflegeantrag bei der Pflegekasse stellen. Ohne Vollmacht — oder vor gerichtlicher Betreuerbestellung — ist das nicht möglich.' },
              { title: 'Pflegevertrag mit Primundus unterschreiben', desc: 'Der Betreuungsvertrag muss von einer handlungsfähigen Person unterschrieben werden. Der Bevollmächtigte kann das sofort tun.' },
              { title: 'Medizinische Entscheidungen', desc: 'Einwilligung in Operationen, Ablehnung von Behandlungen, Entlassung aus dem Krankenhaus — all das erfordert die Unterschrift des Bevollmächtigten.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Weitere wichtige Dokumente:{' '}
            <a href="/patientenverfuegung-aufsetzen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Patientenverfügung aufsetzen</a>
            {' · '}
            <a href="/pflegevertrag-aufsetzen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegevertrag aufsetzen</a>
          </p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">
            Häufige Fragen zur Vorsorgevollmacht
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist eine Vorsorgevollmacht?', a: 'Ein Dokument das einer Vertrauensperson erlaubt, bei eigener Geschäftsunfähigkeit alle wichtigen Entscheidungen zu treffen — medizinisch, finanziell, rechtlich. Ohne Vollmacht muss das Gericht einen Betreuer bestellen.' },
              { q: 'Muss eine Vorsorgevollmacht notariell beglaubigt werden?', a: 'Nein — für Pflege, Gesundheit und Behörden reicht eine Unterschrift. Für Bankgeschäfte verlangen viele Institute eine notarielle Beglaubigung (ca. 70 €). Für Immobiliengeschäfte ist Beurkundung Pflicht.' },
              { q: 'Warum ist die Vollmacht für die Pflege wichtig?', a: 'Mit Vollmacht kann der Bevollmächtigte sofort Pflegegrad beantragen, Verträge unterschreiben und medizinische Entscheidungen treffen. Ohne Vollmacht dauert ein gerichtliches Betreuungsverfahren Wochen bis Monate.' },
              { q: 'Kann man eine Vorsorgevollmacht widerrufen?', a: 'Ja — jederzeit, solange man geschäftsfähig ist. Das Original zurückfordern und eine schriftliche Widerrufserklärung ausstellen. Im Zentralen Vorsorgeregister ggf. löschen lassen.' },
              { q: 'Was kostet eine Vorsorgevollmacht?', a: 'Selbst erstellt: kostenlos (Vorlage vom Bundesministerium der Justiz). Notarielle Beglaubigung: ca. 70 €. Notarielle Beurkundung: ca. 150–500 €. Registrierung im Zentralen Vorsorgeregister: ca. 15 €.' },
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
          <Weiterlesen aktuell="vorsorgevollmacht-erstellen" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
