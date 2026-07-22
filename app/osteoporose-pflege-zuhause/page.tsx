import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Osteoporose — was das bedeutet' },
  { id: 'sturzschutz', title: 'Sturzschutz ist alles' },
  { id: 'alltag', title: 'Pflege & Alltag mit Osteoporose' },
  { id: 'ernaehrung', title: 'Ernährung & Vitamin D' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Osteoporose Pflege zuhause — Sturzschutz & Alltag | Primundus',
  description: 'Osteoporose Pflege zuhause: Warum Sturzprävention das Wichtigste ist, wie man den Alltag sicher gestaltet und was Ernährung und Vitamin D beitragen.',
  alternates: { canonical: 'https://primundus.de/osteoporose-pflege-zuhause/' },
  openGraph: {
    title: 'Osteoporose Pflege zuhause | Primundus',
    description: 'Häusliche Pflege bei Osteoporose — Sturzschutz, Alltag und Ernährung.',
    url: 'https://primundus.de/osteoporose-pflege-zuhause/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Osteoporose Pflege zuhause — Sturzschutz, Alltag und Ernährung',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/osteoporose-pflege-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Osteoporose Pflege', item: 'https://primundus.de/osteoporose-pflege-zuhause/' },
    ],
  },
]

export default function OsteoporosePflegeZuhause() {
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
            <a href="/krankheiten/" className="hover:text-[#8B7355] transition-colors">Krankheiten</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Osteoporose Pflege zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Osteoporose Pflege zuhause — Sturzschutz & Alltag
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Bei Osteoporose sind die Knochen so porös dass ein Sturz zu einem schweren Bruch führen kann — der Hüftbruch ist die gefürchtetste Folge und bedeutet für viele ältere Menschen den Einstieg in intensive Pflege. Sturzprävention ist deshalb das wichtigste Ziel. Mit einer 24h-Betreuungskraft die immer anwesend ist, sinkt das Sturzrisiko erheblich.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick — Pflege bei Osteoporose</p>
            <ul className="space-y-2.5">
              {[
                'Sturzprävention ist absolute Priorität — jeder Sturz kann lebensbedrohlich sein',
                'Wohnraumanpassung: Haltegriffe, rutschfreie Böden, gute Beleuchtung (Pflegekasse: bis 4.180 €/Maßnahme)',
                'Hüftprotektor bei hohem Sturzrisiko empfohlen (KV übernimmt)',
                'Medikamenten-Compliance: Bisphosphonate etc. zur richtigen Zeit einnehmen',
                'Ernährung: Kalzium (mind. 1.000 mg/Tag) + Vitamin D (Supplementierung fast immer nötig)',
                '24h-Kraft: immer anwesend, kennt Sturzrisiken, handelt sofort bei Sturz',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Osteoporose — was das für die Pflege bedeutet
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Osteoporose (Knochenschwund) betrifft in Deutschland ca. 6 Millionen Menschen, überwiegend Frauen über 65. Die Knochen verlieren an Dichte und Stabilität — ein Sturz aus dem Stand kann den Oberschenkelhals brechen. Ein solcher Hüftbruch bedeutet Operation, langen Krankenhausaufenthalt und oft dauerhaft erhöhten Pflegebedarf.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Die häusliche Pflege bei Osteoporose dreht sich deshalb vor allem um eine Frage: Wie verhindert man den nächsten Sturz?
          </p>

          <h2 id="sturzschutz" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Sturzschutz — die wichtigsten Maßnahmen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { massnahme: 'Wohnraumanpassung', detail: 'Haltegriffe im Bad (neben Dusche, WC, Badewanne), rutschfeste Matten, Schwellen entfernen, Teppiche befestigen oder entfernen. Pflegekasse fördert bis 4.180 €/Maßnahme — Antrag vor Beginn stellen.' },
              { massnahme: 'Hüftprotektor', detail: 'Spezielle Hose mit gepolsterten Einlagen die die Hüfte beim Sturz schützen. Studien zeigen: Hüftfrakturen bei Trägern deutlich seltener. Krankenversicherung kann mit Rezept übernehmen.' },
              { massnahme: 'Gleichgewichts- und Krafttraining', detail: 'Auch bei Osteoporose: regelmäßige Bewegung ist Therapie — nicht Schonung. Tai Chi, Physiotherapie, gezielte Kräftigungsübungen unter Aufsicht. Betreuungskraft begleitet täglich.' },
              { massnahme: 'Geeignetes Schuhwerk', detail: 'Feste Sohle, kein offenes Fersenteil, keine Hausschuhe ohne Halt. Orthopädische Schuhe wenn Fehlstellungen vorhanden.' },
              { massnahme: 'Gute Beleuchtung', detail: 'Nachtlicht auf dem Weg zur Toilette. Bewegungsmelder im Flur. Keine dunklen Ecken wo Hindernisse übersehen werden.' },
              { massnahme: '24h-Kraft immer anwesend', detail: 'Die 24h-Betreuungskraft ist die wichtigste Sturzpräventionsmaßnahme: Sie kennt die Risikosituationen, greift beim Transfer unter die Arme, reagiert sofort bei einem Sturz.' },
            ].map((item) => (
              <div key={item.massnahme} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.massnahme}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Sturzprävention:{' '}
            <a href="/sturzpraevention-senioren/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Sturzprävention Senioren — alle Maßnahmen</a>
          </p>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflege & Alltag mit Osteoporose
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { thema: 'Transfers — immer zu zweit', detail: 'Aufstehen aus dem Bett, vom Sofa, von der Toilette — bei Osteoporose immer mit Unterstützung. Keine ruckartigen Bewegungen. Die Betreuungskraft lernt sichere Transfertechniken.' },
              { thema: 'Medikamenten-Compliance', detail: 'Osteoporose-Medikamente (Bisphosphonate, Kalzium, Vitamin D) müssen regelmäßig und richtig eingenommen werden. Betreuungskraft erinnert aktiv und dokumentiert.' },
              { thema: 'Schmerzen nicht ignorieren', detail: 'Osteoporose verursacht oft Rückenschmerzen durch Wirbelkörperfrakturen. Schmerz = Signal — Arzt aufsuchen. Schmerzmitteleinsatz in Absprache mit Arzt.' },
              { thema: 'Bewegung trotz Angst', detail: 'Viele Betroffene entwickeln Sturzangst und bewegen sich immer weniger — das verschlechtert die Muskeln und erhöht langfristig das Sturzrisiko. Regelmäßige Spaziergänge mit Begleitung sind wichtig.' },
            ].map((item) => (
              <div key={item.thema} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.thema}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="ernaehrung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Ernährung & Vitamin D — was wirklich hilft
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { naehrstoff: 'Kalzium — mind. 1.000 mg täglich', quellen: 'Milch, Joghurt, Käse, Grünkohl, Brokkoli, calciumreiches Mineralwasser. Supplementierung wenn Ernährung nicht ausreicht — nach Rücksprache mit Arzt.' },
              { naehrstoff: 'Vitamin D — fast immer Supplementierung nötig', quellen: 'Senioren produzieren durch Sonnenlicht kaum noch ausreichend Vitamin D. Supplementierung (800–2.000 IU/Tag) fast immer empfohlen. Blutwert prüfen lassen.' },
              { naehrstoff: 'Protein — für Muskelerhalt', quellen: 'Starke Muskeln stabilisieren die Knochen und verhindern Stürze. Ausreichend Protein (1–1,2 g/kg/Tag). Fisch, Fleisch, Hülsenfrüchte, Milchprodukte, Eier.' },
              { naehrstoff: 'Vermeiden: Alkohol & Rauchen', quellen: 'Alkohol und Nikotin beschleunigen den Knochenabbau erheblich. Wenn möglich reduzieren.' },
            ].map((item) => (
              <div key={item.naehrstoff} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.naehrstoff}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.quellen}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist das Wichtigste bei der Pflege von Osteoporose-Patienten?', a: 'Sturzprävention — Haltegriffe, rutschfreie Böden, Hüftprotektor, Gleichgewichtstraining. Ein Sturz kann lebensbedrohlich sein. Permanente Betreuung durch eine 24h-Kraft ist die wirksamste Sturzpräventionsmaßnahme.' },
              { q: 'Was sollten Osteoporose-Patienten essen?', a: 'Mind. 1.000 mg Kalzium täglich (Milchprodukte, Gemüse), Vitamin D (Supplementierung), ausreichend Protein für Muskeln. Alkohol und Nikotin reduzieren.' },
              { q: 'Welchen Pflegegrad bekommt man bei Osteoporose?', a: 'Osteoporose allein führt selten zu einem hohen Pflegegrad. Wenn jedoch Mobilität stark eingeschränkt ist (z.B. nach Hüftfraktur), Schmerzen dauerhaft bestehen oder weitere Erkrankungen hinzukommen: PG 2–4 möglich.' },
              { q: 'Ist Bewegung bei Osteoporose gefährlich?', a: 'Nein — im Gegenteil: Bewegung ist wichtig (Muskelaufbau, Gleichgewicht, Knochenreiz). Aber immer mit Begleitung und sicherer Umgebung. Kein Sport mit hohem Sturzrisiko (nasse Böden, unebenes Gelände ohne Begleitung).' },
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
