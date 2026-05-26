import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'wann', title: 'Wann Widerspruch einlegen?' },
  { id: 'wie', title: 'So wird Widerspruch eingelegt' },
  { id: 'muster', title: 'Musterbrief & Formulierung' },
  { id: 'erfolgschancen', title: 'Erfolgschancen & nächste Schritte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Widerspruch Pflegekasse einlegen — Muster & Tipps 2026 | Primundus',
  description: 'Widerspruch gegen Pflegegrad-Bescheid: Wie man ihn einlegt, Musterschreiben und welche Erfolgschancen realistisch sind. Frist: 1 Monat nach Bescheid.',
  alternates: { canonical: 'https://primundus.de/widerspruch-pflegekasse-einlegen/' },
  openGraph: {
    title: 'Widerspruch Pflegekasse 2026 | Primundus',
    description: 'Widerspruch gegen zu niedrigen Pflegegrad — Muster, Fristen und Erfolgschancen.',
    url: 'https://primundus.de/widerspruch-pflegekasse-einlegen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Widerspruch Pflegekasse einlegen — Muster & Tipps 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/widerspruch-pflegekasse-einlegen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Widerspruch einlegen', item: 'https://primundus.de/widerspruch-pflegekasse-einlegen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie lege ich Widerspruch gegen den Pflegegrad ein?', acceptedAnswer: { '@type': 'Answer', text: 'Schriftlich innerhalb eines Monats nach dem Bescheiddatum an die Pflegekasse: "Ich lege Widerspruch gegen den Bescheid vom [Datum] ein." Kein Formular nötig, formloser Brief reicht. Danach das MD-Gutachten anfordern, Pflegetagebuch und neue Arztberichte nachreichen.' } },
      { '@type': 'Question', name: 'Wie hoch sind die Erfolgschancen beim Widerspruch?', acceptedAnswer: { '@type': 'Answer', text: 'Rund ein Drittel aller Widersprüche gegen Pflegegrad-Bescheide sind erfolgreich. Die Chancen steigen erheblich wenn ein neues Pflegetagebuch nachgereicht wird und konkrete Beispiele der Einschränkungen dokumentiert sind.' } },
      { '@type': 'Question', name: 'Wie lange hat man Zeit für den Widerspruch?', acceptedAnswer: { '@type': 'Answer', text: 'Genau einen Monat nach dem Datum des Bescheids — nicht nach Eingang des Bescheids. Bei Versäumnis der Frist kann in Ausnahmefällen Wiedereinsetzung beantragt werden.' } },
    ],
  },
]

export default function WiderspruchPflegekasseEinlegen() {
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
            <span className="text-[#1C1C1C]">Widerspruch einlegen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Widerspruch Pflegekasse einlegen — Muster & Tipps
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Rund ein Drittel aller Widersprüche gegen Pflegegrad-Bescheide sind erfolgreich. Das Zeitfenster ist eng: genau ein Monat nach dem Bescheiddatum. Der Widerspruch selbst ist formlos — was danach kommt, entscheidet über den Erfolg: Pflegetagebuch, Arztberichte, konkretes Gutachten.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">⏱ Frist: 1 Monat nach Bescheiddatum</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Die Widerspruchsfrist beträgt exakt einen Monat ab dem im Bescheid genannten Datum — nicht ab Eingang. Bei Fristversäumnis kann in Ausnahmefällen Wiedereinsetzung beantragt werden (z.B. bei Krankheit). Lieber zu früh als zu spät.
            </p>
          </div>

          <h2 id="wann" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann sollte man Widerspruch einlegen?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Widerspruch lohnt sich wenn der Pflegegrad zu niedrig erscheint — und besonders dann wenn konkrete Gründe für eine falsche Bewertung vorliegen.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Begutachtung war schlecht vorbereitet', desc: 'Kein Pflegetagebuch geführt, schlechtester Tag nicht geschildert, keine Vertrauensperson dabei — dann wurde der tatsächliche Bedarf wahrscheinlich unterschätzt.' },
              { title: 'Der Pflegebedarf wurde offensichtlich falsch eingeschätzt', desc: 'Beim Vergleich mit den NBA-Kriterien wird klar: Bestimmte Einschränkungen wurden nicht oder zu niedrig bewertet.' },
              { title: 'Neue Diagnosen oder Befunde seit der Begutachtung', desc: 'Neue Arztberichte belegen einen höheren Pflegebedarf als zum Zeitpunkt der Begutachtung dokumentiert war.' },
              { title: 'Kognitive Einschränkungen (Demenz) wurden unterschätzt', desc: 'Betroffene wirken beim Gutachtertermin oft kompetenter als im Alltag — wenn das nicht durch Vertrauensperson oder Tagebuch belegt wurde, ist Widerspruch sinnvoll.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="wie" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            So wird Widerspruch eingelegt — Schritt für Schritt
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Sofort schriftlich Widerspruch einlegen', desc: 'Formloser Brief oder E-Mail an die Pflegekasse reicht. Kein Formular nötig, keine ausführliche Begründung notwendig. Wichtig: Das Datum des Bescheids und die Versichertennummer angeben.' },
              { n: '2', title: 'MD-Gutachten anfordern', desc: 'Das vollständige MD-Gutachten kann kostenlos bei der Pflegekasse angefordert werden. Es zeigt wie jeder NBA-Bereich bewertet wurde — und wo Verbesserungspotenzial liegt.' },
              { n: '3', title: 'Schwachstellen im Gutachten identifizieren', desc: 'Welche Bereiche wurden zu niedrig eingestuft? Welche Einschränkungen wurden nicht erwähnt? Das ist die Grundlage für die Widerspruchsbegründung.' },
              { n: '4', title: 'Pflegetagebuch und Arztberichte nachreichen', desc: 'Neues Pflegetagebuch (1–2 Wochen) mit konkreten Beispielen. Aktuelle Arztberichte und Befunde. Diese Unterlagen schriftlich an die Pflegekasse schicken — mit Bezug auf den Widerspruch.' },
              { n: '5', title: 'Ggf. neue Begutachtung', desc: 'Oft ordnet die Pflegekasse eine neue Begutachtung an. Diesmal besser vorbereiten: Vertrauensperson dabei, schlechtesten Tag schildern, Pflegetagebuch vorzeigen.' },
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

          <h2 id="muster" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Musterschreiben für den Widerspruch
          </h2>
          <div className="bg-[#F8F7F5] border border-[#E5E3DF] rounded-2xl p-6 mb-10 font-mono text-[14px] leading-relaxed text-[#2E2E2E]">
            <p className="mb-4">[Vorname Nachname]<br />[Straße Hausnummer]<br />[PLZ Ort]<br />[Telefon / E-Mail]</p>
            <p className="mb-4">[Name der Pflegekasse]<br />[Adresse]</p>
            <p className="mb-4">[Ort, Datum]</p>
            <p className="mb-4 font-bold">Widerspruch gegen Ihren Bescheid vom [Datum des Bescheids]<br />Versicherte/r: [Name], geb. [Datum], Vers.-Nr.: [Nummer]</p>
            <p className="mb-4">Sehr geehrte Damen und Herren,</p>
            <p className="mb-4">gegen den o.g. Bescheid über die Feststellung des Pflegegrades lege ich fristgerecht Widerspruch ein.</p>
            <p className="mb-4">Die festgestellte Einstufung entspricht nach meiner Einschätzung nicht dem tatsächlichen Pflegebedarf. Ich werde die Begründung nach Erhalt des Gutachtens des Medizinischen Dienstes nachreichen. Ich bitte um Übersendung des Gutachtens.</p>
            <p className="mb-4">Mit freundlichen Grüßen,<br />[Unterschrift]<br />[Name]</p>
          </div>

          <h2 id="erfolgschancen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Erfolgschancen & nächste Schritte
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Rund ein Drittel aller Widersprüche gegen Pflegegrad-Bescheide sind erfolgreich. Die Chancen steigen erheblich wenn konkrete Belege nachgereicht werden.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { result: 'Widerspruch erfolgreich', desc: 'Die Pflegekasse erkennt den Widerspruch an und stuft höher ein. Leistungen gelten rückwirkend ab dem ursprünglichen Antragsdatum.' },
              { result: 'Neue Begutachtung', desc: 'Die Pflegekasse ordnet eine neue MD-Begutachtung an. Diesmal optimal vorbereiten: Pflegetagebuch, Vertrauensperson, konkreter Beschreibung der Verschlechterungen.' },
              { result: 'Widerspruch abgelehnt — Klage', desc: 'Wenn der Widerspruch abgelehnt wird, kann Klage beim Sozialgericht eingereicht werden. Kostenlos, keine Anwaltspflicht. Empfehlung: Sozialrechtsberater oder VdK einschalten.' },
            ].map((item) => (
              <div key={item.result} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.result}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Begutachtung besser vorbereiten:{' '}
            <a href="/pflegegrad-begutachtung-vorbereiten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">MD-Begutachtung — Checkliste & 7 Tipps</a>
            {' · '}
            <a href="/pflegegrad-erhoehen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Höherstufungsantrag stellen</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen zum Widerspruch</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie lege ich Widerspruch gegen den Pflegegrad ein?', a: 'Schriftlich innerhalb eines Monats nach Bescheiddatum. Formloser Brief reicht: "Ich lege Widerspruch gegen den Bescheid vom [Datum] ein." Danach MD-Gutachten anfordern, Pflegetagebuch und Arztberichte nachreichen.' },
              { q: 'Wie lange hat man Zeit für den Widerspruch?', a: 'Genau einen Monat nach dem im Bescheid genannten Datum — nicht nach Eingang. Bei Fristversäumnis in Ausnahmefällen Wiedereinsetzung beantragen.' },
              { q: 'Wie hoch sind die Erfolgschancen?', a: 'Rund ein Drittel aller Widersprüche sind erfolgreich. Chancen steigen deutlich wenn Pflegetagebuch und aktualisierte Arztberichte nachgereicht werden.' },
              { q: 'Was kostet ein Widerspruch?', a: 'Nichts — der Widerspruch ist kostenlos. Auch eine Klage beim Sozialgericht ist kostenfrei. Kosten entstehen nur wenn ein Anwalt eingeschaltet wird (freiwillig).' },
              { q: 'Was wenn der Widerspruch abgelehnt wird?', a: 'Klage beim Sozialgericht einreichen — kostenlos, keine Anwaltspflicht. Sozialrechtsberater (VdK, SoVD) können unterstützen.' },
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
