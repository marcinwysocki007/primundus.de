import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'warum', title: 'Warum lehnen Eltern Pflege ab?' },
  { id: 'strategien', title: 'Strategien die wirklich helfen' },
  { id: 'grenzen', title: 'Grenzen der Selbstbestimmung' },
  { id: 'praktisch', title: 'Erste praktische Schritte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Wenn Eltern Pflege verweigern — was jetzt hilft | Primundus',
  description: 'Eltern verweigern Pflege oder Betreuungskraft? Warum das passiert, welche Strategien wirklich helfen und wo die Grenzen der Selbstbestimmung liegen.',
  alternates: { canonical: 'https://primundus.de/wenn-eltern-pflege-verweigern/' },
  openGraph: {
    title: 'Wenn Eltern Pflege verweigern | Primundus',
    description: 'Was man tun kann wenn Eltern Pflege oder eine Betreuungskraft ablehnen.',
    url: 'https://primundus.de/wenn-eltern-pflege-verweigern/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wenn Eltern Pflege verweigern — was jetzt hilft',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/wenn-eltern-pflege-verweigern/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Wenn Eltern Pflege verweigern', item: 'https://primundus.de/wenn-eltern-pflege-verweigern/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kann ich tun wenn mein Vater oder meine Mutter Pflege verweigert?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht konfrontativ vorgehen. Ursache der Ablehnung verstehen (Angst vor Kontrollverlust, Scham, Verleugnung). Schrittweise kleine Unterstützungen einführen. Dritte einbeziehen (Hausarzt, Vertrauensperson). Autonomie respektieren solange keine Selbstgefährdung vorliegt.' } },
      { '@type': 'Question', name: 'Darf ich meinen Eltern Pflege aufzwingen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — Erwachsene haben das Recht auf Selbstbestimmung, auch wenn sie schlechte Entscheidungen treffen. Ausnahme: Bei Demenz oder Geschäftsunfähigkeit kann eine Betreuung vom Gericht angeordnet werden. Bis dahin gilt: überzeugen statt erzwingen.' } },
    ],
  },
]

export default function WennElternPflegeVerweigern() {
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
            <span className="text-[#1C1C1C]">Wenn Eltern Pflege verweigern</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Wenn Eltern Pflege verweigern — was jetzt hilft
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            "Ich brauche keine Hilfe" — drei Wörter die pflegende Kinder verzweifeln lassen. Gleichzeitig sehen sie wie der Vater immer schwächer wird, die Mutter Medikamente vergisst, die Wohnung verwahrlost. Die Ablehnung von Pflege ist häufig — und fast immer versteht man sie erst wenn man den wahren Grund dahinter kennt.
          </p>

          <h2 id="warum" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Warum lehnen Eltern Pflege ab?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Hinter der Ablehnung steckt fast nie Sturheit — sondern Angst, Scham oder Verleugnung. Wer den wahren Grund kennt, kann gezielt ansetzen.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { grund: 'Angst vor Kontrollverlust', erklaerung: '"Wenn ich jemanden ins Haus lasse, verliere ich meine Selbstständigkeit." Die Wohnung ist das letzte Terrain das noch vollständig kontrolliert wird. Eine fremde Person darin zu haben fühlt sich wie Kapitulation an.' },
              { grund: 'Scham', erklaerung: 'Hilfe bei der Körperpflege bedeutet: Jemand sieht meine Schwäche, meine Einschränkungen, meinen alternden Körper. Das ist zutiefst beschämend — besonders für Menschen die ihr Leben lang selbstständig und stark waren.' },
              { grund: 'Verleugnung', erklaerung: '"Mir geht es gut, ich komme zurecht." Manchmal ist das ehrlich — manchmal ist es Verleugnung. Der eigene Hilfebedarf nicht akzeptieren können ist psychologisch verständlich, kann aber gefährlich werden.' },
              { grund: 'Angst vor dem Pflegeheim', erklaerung: 'Viele Menschen verbinden Pflege automatisch mit Pflegeheim — und lehnen deshalb jede Unterstützung ab, aus Angst dass Pflegeheim als nächstes kommt. Eine 24h-Betreuungskraft zuhause ist das Gegenteil davon.' },
              { grund: 'Schlechte frühere Erfahrungen', erklaerung: 'Eine unpassende Haushaltshilfe, ein überfordernder Pflegedienst — wer einmal schlechte Erfahrungen gemacht hat, sperrt sich gegen alle weitere Hilfe.' },
            ].map((item) => (
              <div key={item.grund} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.grund}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.erklaerung}</p>
              </div>
            ))}
          </div>

          <h2 id="strategien" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Strategien die wirklich helfen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { strategie: 'Den richtigen Zeitpunkt wählen', desc: 'Nicht nach einem Sturz oder in der Akutphase das Thema aufbringen — dann ist die Abwehr am höchsten. Besser in einem ruhigen Moment, bei gutem Befinden. Als Gespräch unter Gleichen, nicht als Anordnung.' },
              { strategie: 'Mit dem Hausarzt sprechen', desc: 'Ein Arzt hat eine andere Autorität als die eigenen Kinder. "Der Arzt meint es wäre jetzt Zeit für etwas Unterstützung" wirkt oft anders als dasselbe aus dem Mund der Tochter. Hausarzt vorab informieren und um Unterstützung bitten.' },
              { strategie: 'Klein anfangen', desc: 'Nicht mit "Wir brauchen jetzt eine 24h-Pflege" starten — das überfordert. Mit einem kleinen Schritt beginnen: "Könntest du dir vorstellen dass jemand einmal pro Woche hilft?" Schrittweise ausbauen wenn das Vertrauen wächst.' },
              { strategie: 'Autonomie betonen', desc: 'Den Kontrollwunsch ernst nehmen: "Du entscheidest wann und wie viel Hilfe du möchtest." "Du kannst die Person jederzeit schicken." Eine 24h-Kraft ist kein Kontrollverlust — sie ermöglicht ein selbstbestimmteres Leben.' },
              { strategie: 'Probezeit vorschlagen', desc: '"Können wir das mal 4 Wochen ausprobieren?" Eine zeitlich begrenzte Probezeit fühlt sich weniger endgültig an als eine dauerhafte Entscheidung. Viele die skeptisch starten, möchten nach 4 Wochen nicht mehr ohne.' },
              { strategie: 'Vertrauensperson einbeziehen', desc: 'Geschwister, gute Freunde, Pfarrer — manchmal hört man auf jemanden der nicht der eigene Sohn oder die eigene Tochter ist. Nicht allein kämpfen.' },
            ].map((item) => (
              <div key={item.strategie} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.strategie}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="grenzen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Grenzen der Selbstbestimmung — wann muss gehandelt werden?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Erwachsene haben das Recht auf Selbstbestimmung — auch das Recht schlechte Entscheidungen zu treffen. Solange keine akute Selbstgefährdung vorliegt, muss die Entscheidung respektiert werden.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Es gibt aber Situationen wo gehandelt werden muss:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { situation: 'Akute Selbstgefährdung', handlung: 'Wenn jemand durch Verwahrlosung, Mangelernährung, vergessene Medikamente oder häufige Stürze akut gefährdet ist — ärztliche Einschätzung einholen. Der Arzt kann eine Krankenhauseinweisung oder Betreuungsverfahren einleiten.' },
              { situation: 'Demenz und fehlende Einsichtsfähigkeit', handlung: 'Bei fortgeschrittener Demenz kann die Fähigkeit zur Einwilligung fehlen. Dann kann eine gesetzliche Betreuung beim Amtsgericht beantragt werden — die bevollmächtigte Person (oder ein gerichtlich bestellter Betreuer) trifft Entscheidungen.' },
              { situation: 'Gefährdung anderer', handlung: 'Wenn das Verhalten des Pflegebedürftigen andere Menschen gefährdet (z.B. vergessener Herd, Weglaufen bei Demenz), kann unabhängig vom eigenen Willen gehandelt werden.' },
            ].map((item) => (
              <div key={item.situation} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.situation}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.handlung}</p>
              </div>
            ))}
          </div>

          <h2 id="praktisch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Erste praktische Schritte
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Ursache der Ablehnung verstehen', desc: 'Mit dem Elternteil sprechen — nicht über Pflege, sondern über seine Ängste. Was genau stört? Fremde im Haus? Angst vor Pflegeheim? Scham?' },
              { n: '2', title: 'Hausarzt einweihen', desc: 'Arzt vorab anrufen und Situation schildern. Bitten beim nächsten Termin das Thema anzusprechen.' },
              { n: '3', title: 'Probezeit als Einstieg', desc: '"4 Wochen Probezeit — wenn es nicht passt, hören wir auf." Fast immer der beste Einstieg.' },
              { n: '4', title: 'Passende Persönlichkeit der Betreuungskraft wählen', desc: 'Bei Primundus Telefonat vorab möglich — Kraft mit Charakter wählen der zur Persönlichkeit passt. Manchmal stimmt die Chemie von Anfang an.' },
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

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kann ich tun wenn meine Eltern Pflege verweigern?', a: 'Ursache verstehen (Angst, Scham, Verleugnung). Nicht konfrontativ vorgehen. Hausarzt einbeziehen. Klein anfangen — Probezeit vorschlagen. Autonomie betonen. Vertrauensperson einbeziehen.' },
              { q: 'Darf ich meinen Eltern Pflege aufzwingen?', a: 'Nein — Erwachsene haben das Recht auf Selbstbestimmung. Ausnahme: Bei Demenz oder fehlender Einsichtsfähigkeit kann eine gesetzliche Betreuung beantragt werden. Bei akuter Selbstgefährdung Arzt einschalten.' },
              { q: 'Wie spreche ich das Thema Pflege mit meinen Eltern an?', a: 'Im ruhigen Moment, nicht nach einem Sturz. Als Gespräch unter Gleichen: "Ich mache mir Sorgen um dich." Nicht über Pflegeheim reden — sondern über Unterstützung zuhause. Probezeit vorschlagen.' },
              { q: 'Was wenn ein Elternteil sagt "Ich will nicht in ein Heim"?', a: 'Dann genau das versichern: Eine 24h-Betreuungskraft zuhause ist das Gegenteil eines Pflegeheims. Sie ermöglicht das Leben in der eigenen Wohnung zu erhalten. Das Framing als "Alternative zum Pflegeheim" hilft oft.' },
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
