import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist eine Patientenverfügung?' },
  { id: 'inhalte', title: 'Was muss rein?' },
  { id: 'aufsetzen', title: 'Schritt für Schritt aufsetzen' },
  { id: 'unterschied', title: 'Unterschied zur Vorsorgevollmacht' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Patientenverfügung aufsetzen — Anleitung & was rein muss | Primundus',
  description: 'Patientenverfügung aufsetzen: Was hineingehört, wie man sie gültig erstellt und was der Unterschied zur Vorsorgevollmacht ist. Mit Checkliste der Pflichtinhalte.',
  alternates: { canonical: 'https://primundus.de/patientenverfuegung-aufsetzen/' },
  openGraph: {
    title: 'Patientenverfügung aufsetzen | Primundus',
    description: 'Was in eine Patientenverfügung gehört und wie man sie rechtsgültig erstellt — Anleitung und Checkliste.',
    url: 'https://primundus.de/patientenverfuegung-aufsetzen/',
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
    headline: 'Patientenverfügung aufsetzen — Anleitung und was hineingehört',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/patientenverfuegung-aufsetzen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Patientenverfügung aufsetzen', item: 'https://primundus.de/patientenverfuegung-aufsetzen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist eine Patientenverfügung?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Patientenverfügung ist ein schriftliches Dokument in dem man im Voraus festlegt welche medizinischen Maßnahmen man im Fall der eigenen Entscheidungsunfähigkeit wünscht oder ablehnt. Sie ist rechtlich verbindlich und muss von Ärzten und Pflegepersonen beachtet werden.' } },
      { '@type': 'Question', name: 'Muss eine Patientenverfügung notariell beglaubigt werden?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — eine Patientenverfügung ist bereits ohne Notar rechtsgültig, wenn sie handschriftlich unterschrieben und datiert ist. Eine notarielle Beglaubigung erhöht die Beweissicherheit, ist aber keine Pflicht.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Patientenverfügung und Vorsorgevollmacht?', acceptedAnswer: { '@type': 'Answer', text: 'Die Patientenverfügung regelt direkt welche Behandlungen gewünscht oder abgelehnt werden. Die Vorsorgevollmacht bestimmt eine Person die im Ernstfall stellvertretend Entscheidungen trifft. Beide zusammen geben den größten Schutz.' } },
    ],
  },
]

export default function PatientenverfuegungAufsetzen() {
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
            <span className="text-[#1C1C1C]">Patientenverfügung aufsetzen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Patientenverfügung aufsetzen — Anleitung & Pflichtinhalte
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Eine Patientenverfügung legt verbindlich fest welche medizinischen Maßnahmen man im Fall der Entscheidungsunfähigkeit wünscht oder ablehnt. Sie muss schriftlich sein und eigenhändig unterschrieben werden — ein Notar ist nicht nötig. Je konkreter die Formulierungen, desto wirksamer das Dokument.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Rechtlich verbindlich — Ärzte und Pflegepersonen müssen sie beachten',
                'Schriftform + eigenhändige Unterschrift + Datum — Notar nicht nötig',
                'Regelmäßig aktualisieren — mit Datum und Unterschrift bestätigen',
                'Gut verwahren: Original beim Arzt hinterlegen, Kopie bei Angehörigen',
                'Ergänzung durch Vorsorgevollmacht empfohlen — für Entscheidungen die die PV nicht regelt',
                'Bundesgesundheitsministerium bietet kostenloses Muster-Dokument an',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist eine Patientenverfügung?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Eine Patientenverfügung (§ 1827 BGB) ist ein schriftliches Dokument in dem man vorausschauend festlegt welche medizinischen Behandlungen man im Fall der eigenen Entscheidungsunfähigkeit wünscht und welche man ausdrücklich ablehnt. Sie greift wenn man selbst — zum Beispiel durch Bewusstlosigkeit, Demenz oder schwere Erkrankung — keine Entscheidungen mehr treffen kann.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Patientenverfügung ist rechtlich verbindlich: Ärzte, Pflegepersonen und Krankenhäuser sind gesetzlich verpflichtet sie zu beachten. Das unterscheidet sie von einer bloßen Wunschliste.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Typische Situationen in denen sie greift: Wachkoma, schwere Demenz im Endstadium, fortgeschrittener Krebs, schwerster Schlaganfall. Sie kann sowohl lebenserhaltende Maßnahmen ausdrücklich wünschen als auch ablehnen.
          </p>

          <h2 id="inhalte" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was muss in die Patientenverfügung?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Je konkreter die Formulierungen, desto wirksamer. Allgemeine Aussagen wie "keine lebensverlängernden Maßnahmen" reichen oft nicht aus — Situationen und Maßnahmen müssen spezifiziert werden.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { pflicht: true, titel: 'Persönliche Angaben', inhalt: 'Vollständiger Name, Geburtsdatum, Adresse — damit zweifelsfrei klar ist wer das Dokument verfasst hat.' },
              { pflicht: true, titel: 'Konkrete Situationsbeschreibungen', inhalt: 'Für welche Situationen soll die Verfügung gelten? Z.B.: "Wenn ich mich im Endstadium einer unheilbaren Erkrankung befinde..." oder "Wenn ich dauerhaft bewusstlos bin..."' },
              { pflicht: true, titel: 'Konkrete Maßnahmen — Wunsch oder Ablehnung', inhalt: 'Künstliche Beatmung, Wiederbelebung, künstliche Ernährung, Dialyse, Antibiotikagabe — für jede Maßnahme festlegen ob gewünscht oder abgelehnt.' },
              { pflicht: true, titel: 'Eigenhändige Unterschrift + Datum', inhalt: 'Handgeschriebene Unterschrift und Datum sind Pflicht für die Rechtsgültigkeit. Kein Notar nötig.' },
              { pflicht: false, titel: 'Schmerztherapie und Palliativversorgung', inhalt: 'Wünsche zur Schmerzlinderung und palliativen Begleitung ausdrücklich festhalten.' },
              { pflicht: false, titel: 'Aussagen zur Organspende', inhalt: 'Separat vom Organspendeausweis in die PV aufnehmen wenn gewünscht.' },
              { pflicht: false, titel: 'Kontaktperson / Bevollmächtigte', inhalt: 'Wer soll kontaktiert werden? Wenn eine Vorsorgevollmacht besteht: Bevollmächtigte Person benennen.' },
            ].map((item) => (
              <div key={item.titel} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.titel}</p>
                  {item.pflicht && <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FDF0EE] text-[#8B3E2F]">Pflicht</span>}
                </div>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.inhalt}</p>
              </div>
            ))}
          </div>

          <h2 id="aufsetzen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Schritt für Schritt aufsetzen
          </h2>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Muster-Vorlage besorgen', desc: 'Das Bundesgesundheitsministerium bietet eine kostenlose Muster-Patientenverfügung an — abrufbar unter bundesgesundheitsministerium.de. Als Ausgangspunkt gut geeignet.' },
              { n: '2', title: 'Situationen und Wünsche durchdenken', desc: 'Welche Situationen sollen abgedeckt sein? Welche Behandlungen werden ausdrücklich gewünscht, welche abgelehnt? Mit dem Hausarzt besprechen — er kann über die medizinische Realität der einzelnen Maßnahmen informieren.' },
              { n: '3', title: 'Konkret formulieren', desc: 'Keine allgemeinen Phrasen — konkrete Situationen und Maßnahmen benennen. Z.B. "keine künstliche Beatmung wenn..." statt "keine lebensverlängernden Maßnahmen".' },
              { n: '4', title: 'Eigenhändig unterschreiben und datieren', desc: 'Handschriftlich unterschreiben und Datum eintragen. Damit ist die PV rechtsgültig — kein Notar nötig.' },
              { n: '5', title: 'Gut verwahren und bekannt machen', desc: 'Original beim Hausarzt hinterlegen, Kopie bei Angehörigen und im Portemonnaie (Hinweiskarte). Wer eine Vorsorgevollmacht hat: Bevollmächtigte Person informieren.' },
              { n: '6', title: 'Regelmäßig aktualisieren', desc: 'Empfehlung: alle 2–3 Jahre erneut unterschreiben und datieren — das belegt den aktuellen Willen und stärkt die Rechtsgültigkeit.' },
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

          <h2 id="unterschied" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Unterschied zur Vorsorgevollmacht
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Patientenverfügung und Vorsorgevollmacht ergänzen sich — sie decken unterschiedliche Aspekte ab.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['', 'Patientenverfügung', 'Vorsorgevollmacht'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Was sie regelt', 'Konkrete medizinische Maßnahmen (Ja/Nein)', 'Wer Entscheidungen trifft wenn man selbst nicht kann'],
                    ['Wann sie greift', 'Bei Entscheidungsunfähigkeit', 'Bei Entscheidungsunfähigkeit'],
                    ['Notar nötig?', 'Nein — Schriftform + Unterschrift reicht', 'Empfohlen für Immobilien; sonst nein'],
                    ['Grenzen', 'Kann nicht alle Situationen vorhersehen', 'Bevollmächtigte Person muss vertrauenswürdig sein'],
                    ['Empfehlung', 'Immer aufsetzen', 'Immer zusätzlich aufsetzen'],
                  ].map(([aspekt, pv, vv], i) => (
                    <tr key={aspekt} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{aspekt}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{pv}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{vv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vorsorgevollmacht erstellen:{' '}
            <a href="/vorsorgevollmacht-erstellen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Vorsorgevollmacht erstellen — Anleitung & Muster</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur Patientenverfügung
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist eine Patientenverfügung?', a: 'Ein schriftliches Dokument in dem man vorausschauend festlegt welche medizinischen Behandlungen man bei Entscheidungsunfähigkeit wünscht oder ablehnt. Rechtlich verbindlich — Ärzte und Kliniken müssen sie beachten.' },
              { q: 'Muss eine Patientenverfügung notariell beglaubigt werden?', a: 'Nein — Schriftform und eigenhändige Unterschrift mit Datum reichen. Ein Notar ist nicht nötig, erhöht aber die Beweissicherheit.' },
              { q: 'Was passiert ohne Patientenverfügung?', a: 'Ohne PV entscheiden im Notfall zunächst Angehörige (wenn vorhanden und einig) oder ein gerichtlich bestellter Betreuer. Das kann zu Entscheidungen führen die nicht dem eigenen Wunsch entsprechen.' },
              { q: 'Kann man eine Patientenverfügung widerrufen?', a: 'Ja — jederzeit und ohne besondere Form. Es reicht die schriftliche Erklärung des Widerrufs oder die körperliche Vernichtung aller Exemplare.' },
              { q: 'Was ist der Unterschied zur Vorsorgevollmacht?', a: 'Die Patientenverfügung regelt direkt welche Behandlungen gewünscht/abgelehnt werden. Die Vorsorgevollmacht bestimmt eine Person die stellvertretend Entscheidungen trifft. Beide zusammen geben den umfassendsten Schutz.' },
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
