import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'voraussetzungen', title: 'Wer kann Pflegegrad beantragen?' },
  { id: 'antrag', title: 'Antrag stellen — Schritt für Schritt' },
  { id: 'begutachtung', title: 'Die Begutachtung durch den MD' },
  { id: 'pflegegrade', title: 'Pflegegrade und ihre Leistungen 2026' },
  { id: 'widerspruch', title: 'Widerspruch einlegen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad beantragen — Schritt für Schritt 2026 | Primundus',
  description: 'Pflegegrad beantragen: Antrag bei der Pflegekasse, MD-Begutachtung, Einstufung in 5 Schritten. Mit Tipps für höhere Einstufung. Aktuell für 2026.',
  alternates: {
    canonical: 'https://primundus.de/pflegegrad-beantragen/',
  },
  openGraph: {
    title: 'Pflegegrad beantragen — Schritt für Schritt 2026 | Primundus',
    description: 'Pflegegrad beantragen: Antrag bei der Pflegekasse, MD-Begutachtung, Einstufung in 5 Schritten. Mit Tipps für höhere Einstufung. Aktuell für 2026.',
    url: 'https://primundus.de/pflegegrad-beantragen/',
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
    headline: 'Pflegegrad beantragen — Schritt für Schritt 2026',
    description: 'Wie man einen Pflegegrad beantragt, was bei der MD-Begutachtung passiert und wie man eine höhere Einstufung erreicht.',
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
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-beantragen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad beantragen', item: 'https://primundus.de/pflegegrad-beantragen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Pflegegrad beantragen — Schritt für Schritt',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Antrag stellen', text: 'Schriftlich oder telefonisch bei der Pflegekasse (Krankenversicherung) Antrag auf Pflegeleistungen stellen.' },
      { '@type': 'HowToStep', position: 2, name: 'Begutachtungstermin', text: 'Der Medizinische Dienst (MD) kommt nach Hause und bewertet die Selbstständigkeit in sechs Lebensbereichen.' },
      { '@type': 'HowToStep', position: 3, name: 'Pflegetagebuch führen', text: 'Vor dem Termin 1–2 Wochen lang dokumentieren, welche Hilfe täglich benötigt wird.' },
      { '@type': 'HowToStep', position: 4, name: 'Bescheid abwarten', text: 'Die Pflegekasse teilt das Ergebnis schriftlich mit — in der Regel innerhalb von 25 Arbeitstagen.' },
      { '@type': 'HowToStep', position: 5, name: 'Bei Ablehnung: Widerspruch', text: 'Innerhalb eines Monats nach Bescheid schriftlich Widerspruch einlegen und Gegengutachten beantragen.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie beantrage ich einen Pflegegrad?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad beantragen läuft in zwei Schritten: Zunächst stellt man schriftlich oder telefonisch einen Antrag bei der Pflegekasse (Krankenkasse). Dann kommt der Medizinische Dienst (MD) nach Hause und bewertet die Selbstständigkeit in sechs Lebensbereichen. Die Pflegekasse teilt das Ergebnis innerhalb von 25 Arbeitstagen schriftlich mit.' },
      },
      {
        '@type': 'Question',
        name: 'Wer kann einen Pflegegrad beantragen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Einen Pflegegrad kann jeder beantragen, der mindestens 6 Monate lang auf Hilfe im Alltag angewiesen ist — wegen einer körperlichen, geistigen oder psychischen Erkrankung. Auch Kinder und Demenzkranke können einen Pflegegrad erhalten. Den Antrag können auch Angehörige oder Bevollmächtigte stellen.' },
      },
      {
        '@type': 'Question',
        name: 'Wie lange dauert es, bis der Pflegegrad bewilligt wird?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekasse muss innerhalb von 25 Arbeitstagen nach Eingang des Antrags entscheiden. Bei stationärem Krankenhausaufenthalt oder ambulanter Reha verkürzt sich die Frist auf eine Woche. Bei Nichteinhaltung hat der Antragsteller Anspruch auf 70 Euro Entschädigung pro Woche Verzögerung.' },
      },
      {
        '@type': 'Question',
        name: 'Was passiert bei der MD-Begutachtung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein Gutachter des Medizinischen Dienstes (MD) kommt nach Hause und bewertet die Selbstständigkeit in sechs Lebensbereichen: Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit krankheitsbedingten Anforderungen und Gestaltung des Alltagslebens. Das Ergebnis bestimmt den Pflegegrad.' },
      },
      {
        '@type': 'Question',
        name: 'Was sind die Pflegegeld-Beträge 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegegeld 2026: Pflegegrad 2 = 347 €/Monat, Pflegegrad 3 = 599 €/Monat, Pflegegrad 4 = 800 €/Monat, Pflegegrad 5 = 990 €/Monat. Dazu kommen 131 €/Monat Entlastungsbetrag für alle Pflegegrade und das Entlastungsbudget von 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege. Keine Erhöhung für 2026 geplant — nächste Dynamisierung frühestens Januar 2028.' },
      },
      {
        '@type': 'Question',
        name: 'Was tun wenn der Pflegegrad abgelehnt oder zu niedrig eingestuft wird?',
        acceptedAnswer: { '@type': 'Answer', text: 'Innerhalb eines Monats nach Bescheid schriftlich Widerspruch bei der Pflegekasse einlegen. Gleichzeitig ein Pflegetagebuch nachreichen und ein Gegengutachten durch einen unabhängigen Gutachter beauftragen. Widersprüche sind in vielen Fällen erfolgreich — besonders wenn der tatsächliche Pflegebedarf gut dokumentiert ist.' },
      },
      {
        '@type': 'Question',
        name: 'Ab wann gelten die Pflegeleistungen nach dem Antrag?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegeleistungen gelten rückwirkend ab dem Datum des Antragseingangs bei der Pflegekasse — nicht erst ab dem Begutachtungstermin oder dem Bescheid. Deshalb ist es wichtig, den Antrag so früh wie möglich zu stellen, auch wenn der Pflegebedarf noch unklar ist.' },
      },
      {
        '@type': 'Question',
        name: 'Kann ich den Pflegegrad später erhöhen lassen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn sich der Pflegebedarf verschlechtert, kann jederzeit ein Antrag auf Höherstufung gestellt werden. Der Medizinische Dienst begutachtet dann erneut. Es gibt keine Sperrfrist zwischen den Anträgen.' },
      },
    ],
  },
]

export default function PflegegradBeantragen() {
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
            <a href="/pflegegrade/" className="hover:text-[#8B7355] transition-colors">Pflegegrade</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegegrad beantragen</span>
          </nav>

          {/* Eyebrow */}
          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          {/* H1 */}
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad beantragen — Schritt für Schritt
          </h1>

          {/* Lead */}
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegegrad beantragen geht in zwei Schritten: Antrag bei der Pflegekasse stellen, dann kommt der Medizinische Dienst zur Begutachtung nach Hause. Die Entscheidung fällt innerhalb von 25 Arbeitstagen. Wer gut vorbereitet ist, erreicht einen höheren Pflegegrad — mit deutlich mehr Leistungen.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">
              Auf einen Blick
            </p>
            <ul className="space-y-2.5">
              {[
                'Antrag schriftlich oder telefonisch bei der Pflegekasse (Krankenkasse) stellen',
                'Pflegeleistungen gelten rückwirkend ab Datum des Antragseingangs',
                'MD-Gutachter bewertet Selbstständigkeit in 6 Lebensbereichen zu Hause',
                'Entscheidung innerhalb von 25 Arbeitstagen — bei Verzögerung: 70 € Entschädigung/Woche',
                'Pflegetagebuch führen: stärkstes Hilfsmittel für höhere Einstufung',
                'Ablehnung oder zu niedrige Einstufung: Widerspruch innerhalb eines Monats möglich',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── SECTION 1 ── */}
          <h2 id="voraussetzungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wer kann einen Pflegegrad beantragen?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Einen Pflegegrad kann jeder beantragen, der wegen einer körperlichen, geistigen oder psychischen Erkrankung auf dauerhafte Hilfe im Alltag angewiesen ist — und das voraussichtlich für mindestens sechs Monate. Alter spielt dabei keine Rolle: Pflegegrade werden sowohl für Kinder als auch für Hochbetagte vergeben.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Den Antrag können stellen: der Pflegebedürftige selbst, nahe Angehörige, oder Personen mit schriftlicher Vollmacht. Eine Vorsorgevollmacht vereinfacht den Prozess erheblich, wenn die betroffene Person nicht mehr selbst handeln kann.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            <strong>Wichtig:</strong> Die Pflegeleistungen gelten rückwirkend ab dem Tag, an dem der Antrag bei der Pflegekasse eingegangen ist — nicht erst ab dem Begutachtungstermin. Deshalb lohnt es sich, den Antrag so früh wie möglich zu stellen, auch wenn der genaue Pflegebedarf noch unklar ist.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Körperliche Erkrankungen', desc: 'Nach Schlaganfall, bei Herzinsuffizienz, Parkinson, MS, Osteoporose, nach Hüft- oder Knie-OP, bei Krebs oder chronischen Erkrankungen.' },
              { title: 'Kognitive und psychische Erkrankungen', desc: 'Demenz, Alzheimer, Depression, geistige Behinderung, Psychosen. Demenz wird beim Pflegegrad oft besser berücksichtigt als früher bei Pflegestufen.' },
              { title: 'Kinder mit Pflegebedarf', desc: 'Kinder unter 18 Jahren werden mit einem Vergleichskind gleichen Alters gemessen — der Mehrbedarf gegenüber altersüblicher Entwicklung zählt.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Welcher Pflegegrad bei welcher Erkrankung in Frage kommt:{' '}
            <a href="/pflegegrad-bei-demenz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad bei Demenz</a>
            {' · '}
            <a href="/pflegegrad-nach-schlaganfall/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad nach Schlaganfall</a>
            {' · '}
            <a href="/pflegegrad-bei-parkinson/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad bei Parkinson</a>
          </p>

          {/* ── SECTION 2 ── */}
          <h2 id="antrag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Antrag stellen — Schritt für Schritt
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Antrag läuft über die Pflegekasse — das ist immer der Pflegebereich der gesetzlichen Krankenkasse. Bei privat Versicherten übernimmt das private Pflegeversicherungsunternehmen.
          </p>
          <ol className="space-y-3 mb-8">
            {[
              {
                n: '1',
                title: 'Antrag bei der Pflegekasse stellen',
                desc: 'Telefonisch, schriftlich oder per Online-Formular — je nach Krankenkasse. Ein einfaches Schreiben reicht: "Ich beantrage hiermit die Feststellung der Pflegebedürftigkeit nach SGB XI." Das Datum des Eingangs gilt rückwirkend für alle Leistungen.',
                tag: 'Sofort erledigen',
                tagColor: 'bg-[#E8F5EE] text-[#2A5C3F]',
              },
              {
                n: '2',
                title: 'Pflegetagebuch beginnen',
                desc: 'Mindestens 1–2 Wochen vor der Begutachtung täglich dokumentieren: Welche Hilfe wird bei welcher Tätigkeit benötigt? Wie lange dauert das? Was kann selbst gemacht werden, was nicht? Das Pflegetagebuch ist das stärkste Argument für eine höhere Einstufung.',
                tag: 'Wichtigstes Vorbereitungsmittel',
                tagColor: 'bg-[#E8F5EE] text-[#2A5C3F]',
              },
              {
                n: '3',
                title: 'Begutachtungstermin vereinbaren',
                desc: 'Der MD (Medizinischer Dienst bei gesetzlich Versicherten) oder MEDICPROOF (bei privat Versicherten) meldet sich und vereinbart einen Termin. Die Begutachtung findet zu Hause statt — Krankenhäuser und Pflegeheime sind ebenfalls möglich.',
                tag: 'Wird von der Pflegekasse organisiert',
                tagColor: 'bg-[#F8F7F5] text-[#8B8B8B]',
              },
              {
                n: '4',
                title: 'Begutachtungstermin wahrnehmen',
                desc: 'Den Gutachter empfangen, Pflegetagebuch und ärztliche Atteste bereithalten. Eine Vertrauensperson darf anwesend sein — das ist ausdrücklich empfohlen. Nichts beschönigen: Den tatsächlichen schlechtesten Tagesverlauf schildern, nicht den guten Tag.',
                tag: 'Vertrauensperson einladen',
                tagColor: 'bg-[#F8F7F5] text-[#8B8B8B]',
              },
              {
                n: '5',
                title: 'Bescheid abwarten und prüfen',
                desc: 'Die Pflegekasse schickt den schriftlichen Bescheid. Prüfen: Ist der Pflegegrad korrekt? Stimmen die angegebenen Einschränkungen? Bei Zweifeln sofort Widerspruch einlegen — die Frist beträgt einen Monat ab Bescheiddatum.',
                tag: 'Frist: 1 Monat ab Bescheid',
                tagColor: 'bg-[#FDF0EE] text-[#8B3E2F]',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step.n}
                </span>
                <div className="flex-1">
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">{step.desc}</p>
                  <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full ${step.tagColor}`}>
                    {step.tag}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          {/* Fristen-Box */}
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-2">
              Gesetzliche Fristen — Rechte kennen
            </p>
            <div className="space-y-2">
              {[
                { frist: '25 Arbeitstage', text: 'Entscheidungsfrist der Pflegekasse nach Antragseingang' },
                { frist: '1 Woche', text: 'Verkürzte Frist bei Krankenhausaufenthalt oder ambulanter Reha' },
                { frist: '70 €/Woche', text: 'Entschädigung wenn die Pflegekasse die 25-Tage-Frist überschreitet' },
                { frist: '1 Monat', text: 'Widerspruchsfrist nach Bescheiddatum — danach verfällt der Anspruch' },
              ].map((item) => (
                <div key={item.frist} className="flex items-baseline gap-3">
                  <span className="text-[14px] font-bold text-[#3D7A5C] flex-shrink-0 w-[110px]">{item.frist}</span>
                  <span className="text-[14px] text-[#2A5C3F]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3 ── */}
          <h2 id="begutachtung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die Begutachtung durch den MD
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Der Gutachter des Medizinischen Dienstes bewertet die Selbstständigkeit in sechs Lebensbereichen. Das Ergebnis ist eine Punktzahl — sie bestimmt den Pflegegrad. Entscheidend ist nicht die Diagnose, sondern wie stark die Selbstständigkeit tatsächlich eingeschränkt ist.
          </p>

          {/* 6 Lebensbereiche */}
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">
                Die 6 Lebensbereiche der Begutachtung (NBA)
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Mobilität', 'Aufstehen, Gehen, Treppensteigen, Positionswechsel'],
                    ['Kognition & Kommunikation', 'Orientierung, Gedächtnis, Entscheidungen treffen, Gespräche führen'],
                    ['Verhaltensweisen & psychische Probleme', 'Ängste, Aggressionen, Schlafstörungen, Selbstgefährdung'],
                    ['Selbstversorgung', 'Körperpflege, Ankleiden, Essen, Trinken, Ausscheidungen'],
                    ['Krankheitsbedingte Anforderungen', 'Medikamente, Verbandswechsel, Arztbesuche, Therapien'],
                    ['Alltagsleben & soziale Kontakte', 'Tagesstruktur, Freizeitgestaltung, Kontakte zu anderen Menschen'],
                  ].map(([bereich, inhalt], i) => (
                    <tr key={bereich} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF] w-[42%]">{bereich}</td>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{inhalt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Jeder Bereich wird gewichtet und in Punkte umgerechnet. Die Summe ergibt den Pflegegrad. Der Bereich <strong>Selbstversorgung</strong> hat das höchste Gewicht (36 %), danach folgen kognitive Fähigkeiten und krankheitsbedingte Anforderungen.
          </p>

          {/* Tipps für die Begutachtung */}
          <div className="space-y-3 mb-6">
            <p className="text-[15px] font-bold text-[#1C1C1C]">Die 5 wichtigsten Tipps für die Begutachtung:</p>
            {[
              { tip: 'Den schlechtesten Tag schildern', desc: 'Nicht den guten Durchschnittstag beschreiben. Der Gutachter fragt nach dem typischen schlechtesten Verlauf — genau das berichten.' },
              { tip: 'Pflegetagebuch vorlegen', desc: 'Tagesprotokoll der letzten 1–2 Wochen zeigen: Was wurde wann gemacht, welche Hilfe war nötig, wie lange hat es gedauert?' },
              { tip: 'Vertrauensperson dabei haben', desc: 'Angehörige können wichtige Details ergänzen die dem Pflegebedürftigen entfallen. Das ist ausdrücklich erlaubt.' },
              { tip: 'Nichts übertreiben — aber nichts verschweigen', desc: 'Reale Einschränkungen vollständig schildern. Wer aus Scham minimiert, bekommt einen zu niedrigen Pflegegrad.' },
              { tip: 'Arztberichte und Atteste bereithalten', desc: 'Aktuelle ärztliche Unterlagen, Krankenhausentlassbriefe, Medikamentenliste — alles was den Pflegebedarf belegt.' },
            ].map((item) => (
              <div key={item.tip} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tip}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Ausführliche Vorbereitung:{' '}
            <a href="/pflegegrad-begutachtung-vorbereiten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              MD-Begutachtung vorbereiten — Checkliste und Tipps
            </a>
          </p>

          {/* ── SECTION 4 ── */}
          <h2 id="pflegegrade" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrade und ihre Leistungen 2026
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Je höher der Pflegegrad, desto mehr Leistungen zahlt die Pflegekasse. Die Beträge 2026 sind identisch zu 2025 — keine Erhöhung, nächste Dynamisierung frühestens Januar 2028.
          </p>

          {/* Pflegegrade Tabelle */}
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-4 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">
                Pflegegeld & Sachleistungen 2026 — alle Pflegegrade
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Punkte NBA', 'Pflegegeld/Monat', 'Pflegesachleistungen', '+ Entlastungsbetrag'].map((h) => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF] last:text-right">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 1', '12,5–26,9', '—', '—', '131 €'],
                    ['PG 2', '27–47,4', '347 €', '796 €', '131 €'],
                    ['PG 3', '47,5–69,9', '599 €', '1.497 €', '131 €'],
                    ['PG 4', '70–89,9', '800 €', '1.859 €', '131 €'],
                    ['PG 5', '90–100', '990 €', '2.299 €', '131 €'],
                  ].map(([grad, punkte, pg, sach, eb], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{punkte}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{sach}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF] text-right">{eb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Stand: 2026 — identisch zu 2025 (4,5 % Erhöhung ab Jan. 2025). Nächste Dynamisierung frühestens Jan. 2028. Quelle: GKV-Spitzenverband</p>
            </div>
          </div>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-2">
              Zusätzlich — Entlastungsbudget 2026
            </p>
            <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">
              3.539 € pro Jahr für Verhinderungs- und Kurzzeitpflege (ab PG 2)
            </p>
            <p className="text-[14px] text-[#2A5C3F]">
              Das gemeinsame Entlastungsbudget seit Juli 2025 ersetzt die frühere getrennte Verhinderungs- und Kurzzeitpflege. Es kann flexibel aufgeteilt werden — max. 8 Wochen pro Leistungsart. 2026 ist das erste volle Jahr ohne Übergangsregelungen.
            </p>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Einzelne Pflegegrade im Detail:{' '}
            <a href="/pflegegrad-2/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">PG 2</a>
            {' · '}
            <a href="/pflegegrad-3/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">PG 3</a>
            {' · '}
            <a href="/pflegegrad-4/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">PG 4</a>
            {' · '}
            <a href="/pflegegrad-5/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">PG 5</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Wie alle Zuschüsse kombiniert werden:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Finanzierung der 24h-Pflege — alle Zuschüsse 2026
            </a>
          </p>

          {/* ── SECTION 5 ── */}
          <h2 id="widerspruch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Widerspruch einlegen — wenn die Einstufung zu niedrig ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Wer mit dem Bescheid nicht einverstanden ist, hat einen Monat Zeit für den Widerspruch. Widersprüche sind häufig erfolgreich — besonders wenn der Pflegebedarf nicht gut dokumentiert war. Die Pflegekasse muss dann erneut prüfen.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                title: 'Widerspruch einlegen',
                desc: 'Schriftlich innerhalb eines Monats nach Bescheiddatum — per Brief oder E-Mail an die Pflegekasse. Begründung mitschicken: Was wurde falsch bewertet? Welche Einschränkungen hat der Gutachter übersehen?',
                highlight: true,
              },
              {
                title: 'Pflegetagebuch nachreichen',
                desc: 'Das nachgereichte Pflegetagebuch ist das stärkste Argument im Widerspruchsverfahren. Tagesprotokoll für die nächsten 2–4 Wochen führen und dem Widerspruch beilegen.',
                highlight: false,
              },
              {
                title: 'Gegengutachten beauftragen',
                desc: 'Ein unabhängiger Pflegegutachter kann die Begutachtung wiederholen. Die Kosten trägt in der Regel der Antragsteller (ca. 150–400 €), können aber im Erfolgsfall erstattet werden.',
                highlight: false,
              },
              {
                title: 'Klage beim Sozialgericht',
                desc: 'Wenn der Widerspruch abgelehnt wird, ist eine Klage beim Sozialgericht möglich — kostenlos, kein Anwalt nötig. Erfolgsquote ist hoch wenn der Pflegebedarf gut belegt ist.',
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
            → Schritt für Schritt:{' '}
            <a href="/pflegegrad-widerspruch-einlegen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Pflegegrad Widerspruch einlegen — Muster und Tipps
            </a>
            {' · '}
            <a href="/pflegegrad-erhoehen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
              Pflegegrad erhöhen — wann und wie
            </a>
          </p>

          {/* ── FAQ ── */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zum Pflegegrad beantragen
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: 'Wie beantrage ich einen Pflegegrad?',
                a: 'Schriftlich oder telefonisch bei der Pflegekasse (Krankenkasse) einen Antrag auf Pflegeleistungen stellen. Dann kommt der Medizinische Dienst zur Begutachtung nach Hause. Die Pflegekasse entscheidet innerhalb von 25 Arbeitstagen und schickt den Bescheid.',
              },
              {
                q: 'Wer kann einen Pflegegrad beantragen?',
                a: 'Jeder der wegen einer körperlichen, geistigen oder psychischen Erkrankung voraussichtlich mindestens 6 Monate auf Hilfe im Alltag angewiesen ist. Den Antrag können auch Angehörige oder Bevollmächtigte stellen.',
              },
              {
                q: 'Wie lange dauert es bis der Pflegegrad bewilligt wird?',
                a: 'Maximal 25 Arbeitstage nach Antragseingang — gesetzlich vorgeschrieben. Bei Krankenhausaufenthalt oder Reha nur eine Woche. Hält die Pflegekasse die Frist nicht ein, hat der Antragsteller Anspruch auf 70 Euro Entschädigung pro Woche Verzögerung.',
              },
              {
                q: 'Was passiert bei der MD-Begutachtung?',
                a: 'Ein Gutachter des Medizinischen Dienstes bewertet die Selbstständigkeit in sechs Lebensbereichen: Mobilität, Kognition, Verhaltensweisen, Selbstversorgung, krankheitsbedingte Anforderungen und Alltagsleben. Die Punktzahl bestimmt den Pflegegrad.',
              },
              {
                q: 'Was sind die Pflegegeld-Beträge 2026?',
                a: 'Pflegegrad 2: 347 €/Monat · Pflegegrad 3: 599 €/Monat · Pflegegrad 4: 800 €/Monat · Pflegegrad 5: 990 €/Monat. Dazu 131 €/Monat Entlastungsbetrag und 3.539 €/Jahr Entlastungsbudget für Verhinderungs- und Kurzzeitpflege. Keine Erhöhung für 2026 — nächste Dynamisierung frühestens Januar 2028.',
              },
              {
                q: 'Was tun wenn der Pflegegrad abgelehnt oder zu niedrig ist?',
                a: 'Innerhalb eines Monats schriftlich Widerspruch bei der Pflegekasse einlegen. Pflegetagebuch nachreichen und ggf. ein Gegengutachten beauftragen. Widersprüche sind häufig erfolgreich wenn der Pflegebedarf gut dokumentiert ist.',
              },
              {
                q: 'Ab wann gelten die Pflegeleistungen?',
                a: 'Rückwirkend ab dem Datum des Antragseingangs bei der Pflegekasse — nicht erst ab dem Begutachtungstermin oder dem Bescheid. Deshalb: Antrag so früh wie möglich stellen.',
              },
              {
                q: 'Kann ich den Pflegegrad später erhöhen lassen?',
                a: 'Ja — jederzeit wenn sich der Pflegebedarf verschlechtert. Antrag auf Höherstufung bei der Pflegekasse stellen, der MD begutachtet erneut. Es gibt keine Sperrfrist.',
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
