import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'vor-der-auswahl', title: 'Vor der Auswahl' },
  { id: 'auswahlgespräch', title: 'Auswahlgespräch & Fragen' },
  { id: 'vor-anreise', title: 'Vor der Anreise' },
  { id: 'erste-woche', title: 'Erste Woche' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Checkliste Pflegekraft einstellen — vollständige Anleitung | Primundus',
  description: 'Checkliste Pflegekraft einstellen: Was vor der Auswahl, beim Gespräch, vor Anreise und in der ersten Woche zu beachten ist. Mit konkreten Fragen für das Auswahlgespräch.',
  alternates: { canonical: 'https://primundus.de/checkliste-pflegekraft-einstellen/' },
  openGraph: {
    title: 'Checkliste Pflegekraft einstellen | Primundus',
    description: 'Vollständige Checkliste: Was bei der Einstellung einer 24h-Betreuungskraft zu beachten ist.',
    url: 'https://primundus.de/checkliste-pflegekraft-einstellen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Checkliste Pflegekraft einstellen — vollständige Anleitung',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/checkliste-pflegekraft-einstellen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Checkliste Pflegekraft einstellen', item: 'https://primundus.de/checkliste-pflegekraft-einstellen/' },
    ],
  },
]

export default function ChecklistePflegekraftEinstellen() {
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
            <span className="text-[#1C1C1C]">Checkliste Pflegekraft einstellen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Checkliste Pflegekraft einstellen — vollständige Anleitung
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Die Entscheidung für eine 24h-Betreuungskraft ist richtig — aber worauf kommt es bei der Auswahl an? Was muss vor der Anreise vorbereitet sein? Und wie gelingt der Start in der ersten Woche? Diese Checkliste führt durch jeden Schritt — mit konkreten Fragen für das Auswahlgespräch.
          </p>

          <h2 id="vor-der-auswahl" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Vor der Auswahl — was klar sein muss
          </h2>
          <div className="space-y-2 mb-10">
            {[
              ['Pflegebedarf definiert', 'Welche Hilfe ist nötig (Körperpflege, Haushalt, Mobilisierung, Demenz)?'],
              ['Spezialanforderungen notiert', 'Welche Erkrankungen, Medikamente, Allergien, Ernährungsbesonderheiten?'],
              ['Führerschein nötig?', 'Arzttermine, Einkaufen — braucht die Kraft ein Auto oder den eigenen Führerschein?'],
              ['Sprachkenntnisse', 'Wie gut muss Deutsch sein? Was ist das Minimum für gute Kommunikation?'],
              ['Zimmersituation geklärt', 'Eigenes Zimmer für die Kraft vorhanden und vorbereitet?'],
              ['Beschäftigungsmodell gewählt', 'Entsendemodell (empfohlen), Direktanstellung oder andere Lösung?'],
              ['Budget definiert', 'Was kann und soll monatlich ausgegeben werden (inkl. Kassenzuschüsse)?'],
            ].map(([punkt, detail]) => (
              <div key={punkt} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded border-2 border-[#8B7355] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-semibold text-[#1C1C1C]">{punkt}</p>
                  <p className="text-[13px] text-[#8B8B8B]">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="auswahlgespräch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Auswahlgespräch — diese Fragen stellen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ein Telefonat vorab ist möglich — nutzen Sie es. Diese Fragen helfen einzuschätzen ob die Kraft wirklich passt.
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                kategorie: 'Erfahrung',
                fragen: [
                  'Wie viele Einsätze in der häuslichen 24h-Pflege haben Sie bisher gemacht?',
                  'Was waren die häufigsten Diagnosen bei Ihren bisherigen Pflegebedürftigen?',
                  'Haben Sie Erfahrung mit [spezifische Diagnose — Demenz, Parkinson etc.]?',
                  'Darf ich Kontakt zu einer früheren Familie aufnehmen?',
                ],
              },
              {
                kategorie: 'Praktisches',
                fragen: [
                  'Kochen Sie gerne und was kochen Sie am liebsten?',
                  'Haben Sie Erfahrung mit [spezifische Diät — Diabeteskost, pürierte Speisen]?',
                  'Haben Sie einen Führerschein und würden Sie das Auto der Familie nutzen?',
                  'Haben Sie Haustiere lieb oder gibt es Probleme damit?',
                ],
              },
              {
                kategorie: 'Persönlichkeit & Sprache',
                fragen: [
                  'Erzählen Sie mir etwas über sich — auf Deutsch. (Sprachniveau selbst beurteilen)',
                  'Wie gehen Sie mit einem Bewohner um der manchmal aggressiv ist?',
                  'Was tun Sie wenn jemand nicht essen oder Medikamente nehmen möchte?',
                  'Wie verbringen Sie Ihre Freizeit wenn der Pflegebedürftige ruht?',
                ],
              },
            ].map((block) => (
              <div key={block.kategorie} className="bg-white rounded-xl border border-[#E5E3DF] overflow-hidden">
                <div className="bg-[#F8F7F5] px-5 py-3 border-b border-[#E5E3DF]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#A89279]">{block.kategorie}</p>
                </div>
                <ul className="divide-y divide-[#F8F7F5]">
                  {block.fragen.map(f => (
                    <li key={f} className="px-5 py-3 text-[14px] text-[#2E2E2E] flex gap-2">
                      <span className="text-[#8B7355] flex-shrink-0">?</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="vor-anreise" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Vor der Anreise — Checkliste
          </h2>
          <div className="space-y-2 mb-10">
            {[
              'Zimmer der Betreuungskraft sauber und möbliert (Bett, Schrank, Tisch)',
              'WLAN-Passwort notiert und zugänglich',
              'Schlüssel bereit (Haustür, Briefkasten, Keller)',
              'Medikamentenliste ausgedruckt — mit Einnahmezeiten',
              'Notfallkontakte aufgehängt (Arzt, Primundus, nächste Angehörige)',
              'Kühlschrank aufgefüllt für erste Woche',
              'Hilfsmittel überprüft (Rollator, Rollstuhl, Badehilfen funktionsfähig?)',
              'A1-Bescheinigung der Kraft liegt vor (bei Entsendemodell)',
              'Pflegevertrag unterzeichnet',
              'Pflegekasse über neue Versorgungsform informiert',
            ].map((punkt) => (
              <div key={punkt} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded border-2 border-[#8B7355] flex-shrink-0 mt-0.5" />
                <p className="text-[14px] text-[#2E2E2E]">{punkt}</p>
              </div>
            ))}
          </div>

          <h2 id="erste-woche" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Erste Woche — so gelingt die Eingewöhnung
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tag: 'Tag 1', aufgabe: 'Kraft im Haushalt vorstellen: Wo ist was? Wie funktionieren Herd, Waschmaschine, Heizung? Hausapotheke zeigen.' },
              { tag: 'Tag 1–2', aufgabe: 'Routinen und Tagesablauf erklären: Wann steht die Person auf, wann isst sie, wann schläft sie? Lieblingsgerichte, Gewohnheiten, No-Gos.' },
              { tag: 'Tag 2–3', aufgabe: 'Arzt vorstellen (Hausarzt anrufen), Physiotherapeut- und Ergotherapeut-Termine mitteilen. Apotheke zeigen.' },
              { tag: 'Ganze erste Woche', aufgabe: 'Erreichbar bleiben für Rückfragen. Nicht zu viele Anweisungen auf einmal. Der Kraft Raum geben eigene Beziehung mit dem Pflegebedürftigen aufzubauen.' },
              { tag: 'Ende erste Woche', aufgabe: 'Kurzes Feedbackgespräch: Was läuft gut? Was braucht die Kraft noch? Gibt es Probleme? Primundus informieren wenn nötig.' },
            ].map((item) => (
              <div key={item.tag} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.tag}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.aufgabe}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie wähle ich die richtige Betreuungskraft aus?', a: 'Erfahrung mit der spezifischen Diagnose, aktive Deutschkenntnisse, Persönlichkeit die passt. Telefonat vorab nutzen. Bei Primundus Profil anfordern, Referenzen prüfen.' },
              { q: 'Was sind die wichtigsten Fragen im Auswahlgespräch?', a: 'Erfahrung mit der Diagnose, Kochkenntnisse, Umgang mit schwierigen Situationen (Verweigerung, Aggression), Deutschkenntnisse selbst beurteilen durch das Gespräch.' },
              { q: 'Was wenn die Kraft in der ersten Woche nicht passt?', a: 'Täglich kündbar bei Primundus. Einfach mitteilen — Primundus stellt sofort Ersatz. Keine langen Kündigungsfristen, kein Risiko.' },
              { q: 'Muss ich bei Primundus selbst die Kraft auswählen?', a: 'Nein — Primundus wählt die passende Kraft aus und schlägt sie vor. Auf Wunsch ist ein Telefonat vorab möglich. Die Auswahl kann aber auch komplett Primundus überlassen werden.' },
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
