import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'wann-wechseln', title: 'Wann einen Wechsel anstoßen?' },
  { id: 'regulaer', title: 'Der reguläre Kraftwechsel' },
  { id: 'kurzfristig', title: 'Kurzfristiger Wechsel bei Problemen' },
  { id: 'uebergabe', title: 'Übergabe — wie es gut läuft' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft wechseln — wann & wie | Primundus',
  description: 'Pflegekraft wechseln: Wann ein Wechsel sinnvoll ist, wie der reguläre Kraftwechsel alle 6–8 Wochen funktioniert und was eine gute Übergabe ausmacht.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-wechseln/' },
  openGraph: {
    title: 'Pflegekraft wechseln | Primundus',
    description: 'Wann und wie man eine 24h-Betreuungskraft wechselt — regulär und kurzfristig.',
    url: 'https://primundus.de/pflegekraft-wechseln/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft wechseln — wann und wie',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-wechseln/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft wechseln', item: 'https://primundus.de/pflegekraft-wechseln/' },
    ],
  },
]

export default function PflegekraftWechseln() {
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
            <a href="/organisation/" className="hover:text-[#8B7355] transition-colors">Organisation</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegekraft wechseln</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegekraft wechseln — wann & wie es richtig funktioniert
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Jede 24h-Betreuungskraft arbeitet typischerweise 6–8 Wochen am Stück, dann fährt sie nach Hause und eine neue Kraft kommt. Das ist normal, geplant und bei Primundus vollständig organisiert. Daneben gibt es Situationen die einen kurzfristigen Wechsel erfordern — auch das ist kein Problem.
          </p>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Bei Primundus: Täglich kündbar — sofort Ersatz</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Wer mit Primundus arbeitet kann täglich kündigen. Primundus stellt sofort Ersatz — ohne Versorgungslücke. Kein Risiko, keine Wartezeit, kein Aufwand für die Familie.
            </p>
          </div>

          <h2 id="wann-wechseln" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann einen Wechsel anstoßen?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { grund: 'Regulärer Rhythmuswechsel (alle 6–8 Wochen)', desc: 'Der Normalfall. Die Kraft fährt nach Hause zu ihrer eigenen Familie, eine neue Kraft kommt. Primundus kündigt den Wechsel rechtzeitig an und organisiert alles.' },
              { grund: 'Kraft passt nicht', desc: 'Persönlichkeit, Arbeitsweise oder Deutschkenntnisse entsprechen nicht den Erwartungen. Kein Augenrollen, keine Auseinandersetzungen — einfach Primundus anrufen. Täglich kündbar.' },
              { grund: 'Pflegebedarf hat sich verändert', desc: 'Neuer Pflegegrad, neue Diagnose, gestiegener Aufwand — die bisherige Kraft hat nicht die nötige Spezialerfahrung. Neue Kraft mit besserer Qualifikation wählen.' },
              { grund: 'Ausfall durch Krankheit oder Kündigung der Kraft', desc: 'Passiert — und dann ist sofortiger Ersatz entscheidend. Primundus organisiert das ohne Vorlaufzeit.' },
            ].map((item) => (
              <div key={item.grund} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.grund}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="regulaer" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Der reguläre Kraftwechsel — Ablauf
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: '2–3 Wochen vorher: Ankündigung', desc: 'Primundus informiert die Familie über den geplanten Wechseltermin und stellt die neue Kraft vor (Profil, Erfahrung).' },
              { n: '2', title: '1 Woche vorher: Bestätigung', desc: 'Neue Kraft bestätigt, Anreisedatum festgelegt. Familie hat alle Informationen.' },
              { n: '3', title: 'Am Wechseltag: Übergabe', desc: 'Alte Kraft gibt der neuen Kraft alle wichtigen Informationen — Routinen, Gewohnheiten, Medikamente, Besonderheiten. Wenn möglich: kurze Überlappung.' },
              { n: '4', title: 'Erste Woche der neuen Kraft', desc: 'Eingewöhnungszeit. Familie bleibt erreichbar für Rückfragen. Primundus ist Ansprechpartner wenn Probleme auftauchen.' },
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

          <h2 id="kurzfristig" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kurzfristiger Wechsel bei Problemen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Manchmal stimmt die Chemie einfach nicht — oder es gibt ein konkretes Problem. Das zu erkennen und anzusprechen ist wichtig. Nicht zu lange warten.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { signal: 'Pflegebedürftiger mag die Kraft nicht', loesung: 'Ernst nehmen — auch wenn keine objektiven Gründe benannt werden können. Primundus anrufen, Wechsel veranlassen.' },
              { signal: 'Qualität der Pflege ist unzureichend', loesung: 'Konkrete Beispiele sammeln, mit Primundus besprechen. Primundus geht der Sache nach und organisiert Ersatz.' },
              { signal: 'Vertrauensbruch (Diebstahl, Lügen)', loesung: 'Sofort Primundus informieren. Je nach Schwere: sofortige Kündigung aus wichtigem Grund möglich.' },
              { signal: 'Kraft krank oder möchte vorzeitig abbrechen', loesung: 'Primundus übernimmt — sofortige Ersatzorganisation.' },
            ].map((item) => (
              <div key={item.signal} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.signal}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.loesung}</p>
              </div>
            ))}
          </div>

          <h2 id="uebergabe" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Übergabe — was eine gute Übergabe ausmacht
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Eine gute Übergabe entscheidet über den Start der neuen Kraft. Idealerweise gibt es eine kurze Überlappungsphase von 1–2 Stunden. Falls nicht möglich: ein schriftliches Übergabeprotokoll.
          </p>
          <div className="space-y-2 mb-10">
            {[
              'Tagesroutine: Wann steht die Person auf, wann schläft sie, Mahlzeitenzeiten',
              'Lieblingsspeisen, Abneigungen, Diät, Allergien',
              'Medikamente: vollständige Liste mit Zeiten und Einnahmehinweisen',
              'Besondere Gewohnheiten und Vorlieben (Lieblingsfernsehsender, Musik, Spaziergänge)',
              'Aktuelle Gesundheitssituation: Was hat sich zuletzt verändert?',
              'Wichtige Kontakte: Arzt, Physiotherapeut, Angehörige',
              'Was geht gerade gut? Was ist gerade schwierig?',
              'Standorte wichtiger Dinge: Medikamente, Rollator, Notfallplan',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-[#2E2E2E]">{item}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie oft wechselt die Pflegekraft?', a: 'In der Regel alle 6–8 Wochen — regulärer Rhythmuswechsel. Bei Problemen jederzeit. Bei Primundus täglich kündbar.' },
              { q: 'Was wenn der Pflegebedürftige sich an die neue Kraft gewöhnen muss?', a: 'Eingewöhnung dauert meist 1–2 Wochen. Vertraute Routinen helfen beim Übergang. Bei Demenz: neue Kraft braucht etwas mehr Geduld und Zeit.' },
              { q: 'Kann man eine Kraft die gut war wiederholen?', a: 'Auf Wunsch gerne — Primundus berücksichtigt Präferenzen bei der Planung. Eine Kraft die schon bekannt ist stärkt das Vertrauen.' },
              { q: 'Was wenn ich keine Kraft mehr haben möchte?', a: 'Täglich kündbar bei Primundus. Keine Mindestlaufzeit, keine Fristen. Kündigung einfach mitteilen.' },
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
