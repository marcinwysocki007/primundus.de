import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'zeichen', title: 'Klare Zeichen für 24h-Pflege' },
  { id: 'situationen', title: 'Typische Pflegesituationen' },
  { id: 'checkliste', title: 'Entscheidungs-Checkliste' },
  { id: 'alternativen', title: 'Alternativen zur 24h-Pflege' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Wann brauche ich 24h-Pflege? — Die 10 klaren Zeichen | Primundus',
  description: 'Wann ist 24h-Pflege notwendig? 10 klare Zeichen, typische Pflegesituationen und eine Checkliste die hilft die richtige Entscheidung zu treffen.',
  alternates: { canonical: 'https://primundus.de/wann-brauche-ich-24h-pflege/' },
  openGraph: {
    title: 'Wann brauche ich 24h-Pflege? | Primundus',
    description: '10 klare Zeichen die zeigen wann eine 24h-Betreuungskraft die richtige Lösung ist.',
    url: 'https://primundus.de/wann-brauche-ich-24h-pflege/',
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
    headline: 'Wann brauche ich 24h-Pflege? — Die 10 klaren Zeichen',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/wann-brauche-ich-24h-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege/' },
      { '@type': 'ListItem', position: 3, name: 'Wann brauche ich 24h-Pflege?', item: 'https://primundus.de/wann-brauche-ich-24h-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wann ist 24h-Pflege notwendig?', acceptedAnswer: { '@type': 'Answer', text: 'Spätestens wenn einer dieser Punkte zutrifft: Der Pflegebedürftige kann nicht mehr allein gelassen werden. Stürze passieren häufig. Nächte sind unruhig und gefährlich. Angehörige sind erschöpft. Eine sichere Entlassung aus dem Krankenhaus ist nur mit 24h-Präsenz möglich.' } },
      { '@type': 'Question', name: 'Ab welchem Pflegegrad braucht man 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege kann ab Pflegegrad 2 sinnvoll sein. Pflegegrad 2 bei Alleinleben oder Demenz, Pflegegrad 3 wenn der Pflegebedarf die Kapazität von Angehörigen übersteigt, Pflegegrad 4–5 fast immer wenn zuhause bleiben gewünscht ist.' } },
    ],
  },
]

export default function WannBraucheIch24hPflege() {
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
            <a href="/24-stunden-pflege/" className="hover:text-[#8B7355] transition-colors">24-Stunden-Pflege</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Wann brauche ich 24h-Pflege?</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">
            Ratgeber · 6 Min Lesezeit · Aktualisiert April 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Wann brauche ich 24h-Pflege? — Die 10 klaren Zeichen
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Viele Familien warten zu lang mit der Entscheidung für 24h-Pflege — aus Kostengründen, aus Gewohnheit, oder weil sie die Zeichen nicht deuten. Dabei gibt es klare Situationen in denen 24h-Präsenz nicht mehr optional ist. Wer zu lange wartet, riskiert einen Sturz, einen Krankenhausaufenthalt oder den Zusammenbruch pflegender Angehöriger.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick — klare Zeichen für 24h-Pflege</p>
            <ul className="space-y-2.5">
              {[
                'Der Pflegebedürftige kann nicht mehr allein gelassen werden',
                'Stürze passieren — auch nachts oder in der Küche',
                'Demenz: Weglaufen, Herd vergessen, Desorientierung rund um die Uhr',
                'Angehörige sind erschöpft und kommen an ihre Grenzen',
                'Entlassung aus Krankenhaus nur mit gesicherter Nachversorgung möglich',
                'Pflegebedarf überschreitet was ambulante Dienste leisten können',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="zeichen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die 10 klaren Zeichen für 24h-Pflege
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { n: '1', title: 'Nicht mehr allein lassen können', desc: 'Wenn die Frage nicht mehr lautet "Wie oft komme ich vorbei?" sondern "Wer ist jetzt gerade bei ihm/ihr?" — dann ist 24h-Präsenz notwendig.' },
              { n: '2', title: 'Stürze oder Sturzangst', desc: 'Ein erster Sturz ist oft das Signal. Danach ist die Sturzangst oft so groß dass Bewegung vermieden wird — was den Zustand verschlechtert. Rund um die Uhr präsente Betreuung schützt und mobilisiert.' },
              { n: '3', title: 'Demenz mit Sicherheitsrisiken', desc: 'Herd vergessen, Wohnung verlassen, Weglaufen, Nachtunruhe — sobald die Demenz Sicherheitsrisiken schafft, reicht stundenweise Betreuung nicht mehr.' },
              { n: '4', title: 'Angehörige erschöpft', desc: 'Wenn der pflegende Angehörige Anzeichen von Burnout zeigt — Reizbarkeit, Schlafmangel, eigene Gesundheitsvernachlässigung — ist das ein klares Signal. Pflege darf nicht auf Kosten der eigenen Gesundheit gehen.' },
              { n: '5', title: 'Entlassung aus Krankenhaus oder Reha', desc: 'Das Krankenhaus kann den Patienten entlassen wenn die häusliche Versorgung sichergestellt ist. Eine 24h-Betreuungskraft ermöglicht Entlassung ohne Pflegeheimaufenthalt.' },
              { n: '6', title: 'Nächte unruhig oder gefährlich', desc: 'Wenn nächtliche Hilfe nötig ist — Toilette, Orientierungslosigkeit, Medikamente, Sturz — dann ist tagsüber ambulante Pflege nicht ausreichend.' },
              { n: '7', title: 'Medikamentenverwaltung nicht mehr selbstständig', desc: 'Wenn Medikamente nicht mehr zuverlässig selbst eingenommen werden — entweder vergessen oder überdosiert — braucht es jemanden der das täglich sicherstellt.' },
              { n: '8', title: 'Soziale Isolation', desc: 'Wenn der Pflegebedürftige allein lebt und kaum noch Kontakte hat. Eine Betreuungskraft ist nicht nur praktische Hilfe — sie gibt Gesellschaft, Gespräche, Tagesstruktur.' },
              { n: '9', title: 'Ambulanter Pflegedienst nicht ausreichend', desc: 'Wenn der Dienst zweimal täglich kommt, aber dazwischen viel unkontrolliert passiert — Stürze, Verweigerung von Essen, Unsauberkeit. 24h-Präsenz schließt diese Lücken.' },
              { n: '10', title: 'Pflegebedürftiger wünscht es', desc: 'Wenn der Betroffene selbst sagt: "Ich möchte nicht allein sein" oder "Ich traue mich das nicht mehr alleine" — das ist der deutlichste aller Hinweise.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0 mt-0.5">{item.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="situationen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Typische Pflegesituationen in denen 24h-Pflege startet
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Nach Schlaganfall oder OP', desc: 'Direkte Entlassung aus Krankenhaus oder Reha nach Hause — mit 24h-Betreuungskraft die die Lücke schließt die kein ambulanter Dienst füllen kann.', link: '/schlaganfall-pflege-zuhause/' },
              { title: 'Mittlere bis schwere Demenz', desc: 'Wenn eigenständige Aktivitäten nicht mehr sicher möglich sind und Weglaufen, Nachtunruhe oder Selbstgefährdung auftreten.', link: '/demenz-pflege-zuhause/' },
              { title: 'Fortgeschrittenes Parkinson-Stadium', desc: 'On-Off-Phasen, Sturzgefahr, Medikamenten-Timing — ein fester Ansprechpartner rund um die Uhr ist entscheidend.', link: '/parkinson-pflege-zuhause/' },
              { title: 'Angehörige an der Belastungsgrenze', desc: 'Wenn Kinder oder Partner erschöpft sind und die Pflege nicht mehr leisten können — ohne dass das Pflegeheim die einzige Alternative sein muss.', link: '/burnout-pflegende-angehoerige/' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">{item.desc}</p>
                <a href={item.link} className="text-[13px] text-[#8B7355] underline hover:text-[#7D6E5D]">→ Mehr lesen</a>
              </div>
            ))}
          </div>

          <h2 id="checkliste" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Entscheidungs-Checkliste
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Wenn Sie 3 oder mehr dieser Fragen mit "Ja" beantworten, ist eine 24h-Betreuungskraft die richtige Lösung:
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] p-6 mb-10 shadow-sm">
            <div className="space-y-3">
              {[
                'Kann der Pflegebedürftige nicht mehr sicher allein gelassen werden?',
                'Gibt es Sturzgefahr oder sind Stürze bereits passiert?',
                'Ist die Pflege mit Demenz-typischen Verhaltensweisen verbunden?',
                'Sind pflegende Angehörige erschöpft oder überfordert?',
                'Ist eine Entlassung aus Krankenhaus oder Reha geplant?',
                'Ist nächtlicher Hilfebedarf vorhanden?',
                'Übersteigt der Pflegebedarf was ambulante Dienste leisten können?',
                'Lebt der Pflegebedürftige allein ohne tägliche familiäre Unterstützung?',
              ].map((frage, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded border-2 border-[#8B7355] flex-shrink-0 mt-0.5" />
                  <p className="text-[14px] text-[#2E2E2E]">{frage}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 id="alternativen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Alternativen zur 24h-Pflege — wann sie ausreichen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Ambulanter Pflegedienst (1–3x täglich)', desc: 'Ausreichend wenn der Pflegebedürftige sicher allein gelassen werden kann und kein nächtlicher Hilfebedarf besteht. Oft als Ergänzung zur 24h-Kraft sinnvoll.' },
              { title: 'Tagespflege', desc: 'Tagesweise Betreuung in einer Einrichtung — entlastet Angehörige tagsüber. Ausreichend wenn nachts keine Betreuung nötig ist.' },
              { title: 'Kurzzeitpflege', desc: 'Überbrückung für einige Wochen — nach Krankenhaus, zur Entlastung von Angehörigen. Aus dem Entlastungsbudget finanzierbar.' },
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
              { q: 'Wann ist 24h-Pflege notwendig?', a: 'Spätestens wenn der Pflegebedürftige nicht mehr allein gelassen werden kann, Stürze ein Thema sind, Demenz-Sicherheitsrisiken entstehen oder Angehörige erschöpft sind.' },
              { q: 'Ab welchem Pflegegrad braucht man 24h-Pflege?', a: 'Ab PG 2 bei Alleinleben oder Demenz. Bei PG 3 wenn Angehörige nicht täglich präsent sein können. Bei PG 4–5 fast immer wenn zuhause bleiben gewünscht ist.' },
              { q: 'Kann man zu früh mit 24h-Pflege anfangen?', a: 'Nein — früher Einsatz ermöglicht der Betreuungskraft die Person kennen zu lernen bevor Krisen auftreten. Und er entlastet Angehörige bevor der Burnout eintritt.' },
              { q: 'Wie schnell kann Primundus eine Betreuungskraft stellen?', a: 'In 4–7 Tagen nach dem ersten Gespräch — täglich kündbar, taggenaue Abrechnung.' },
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
