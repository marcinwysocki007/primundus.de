import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'situation', title: 'Die Situation pflegender Angehöriger' },
  { id: 'entlastung', title: 'Konkrete Entlastungsangebote' },
  { id: 'selbstfuersorge', title: 'Selbstfürsorge — was wirklich hilft' },
  { id: 'hilfe-annehmen', title: 'Hilfe annehmen lernen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegende Angehörige unterstützen — Entlastung & Hilfe | Primundus',
  description: 'Wie man pflegende Angehörige unterstützt: Konkrete Entlastungsangebote, Selbstfürsorge-Tipps und wie man Hilfe annimmt. Für pflegende und für diejenigen die helfen wollen.',
  alternates: { canonical: 'https://primundus.de/pflegende-angehoerige-unterstuetzen/' },
  openGraph: {
    title: 'Pflegende Angehörige unterstützen | Primundus',
    description: 'Wie man pflegende Angehörige wirklich unterstützt — konkrete Hilfe statt gut gemeinter Ratschläge.',
    url: 'https://primundus.de/pflegende-angehoerige-unterstuetzen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegende Angehörige unterstützen — Entlastung und Hilfe',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegende-angehoerige-unterstuetzen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegende Angehörige unterstützen', item: 'https://primundus.de/pflegende-angehoerige-unterstuetzen/' },
    ],
  },
]

export default function PflegendeAngehoerigeUnterstuetzen() {
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
            <span className="text-[#1C1C1C]">Pflegende Angehörige unterstützen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegende Angehörige unterstützen — echte Hilfe, keine Ratschläge
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Dieser Ratgeber richtet sich an zwei Gruppen: an Menschen die jemanden kennen der pflegt — und an die Pflegenden selbst. Gut gemeinte Ratschläge helfen selten. Konkrete Entlastung schon. Und das Schwerste für viele Pflegende: Hilfe annehmen zu lernen.
          </p>

          <h2 id="situation" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Die Situation pflegender Angehöriger
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Rund 4,5 Millionen Menschen in Deutschland pflegen einen Angehörigen — oft still, oft ohne dass die eigene Belastung nach außen sichtbar ist. Die häufigsten Erfahrungen:
          </p>
          <div className="space-y-3 mb-10">
            {[
              '"Ich kann nicht nein sagen — wer soll es sonst tun?"',
              '"Ich bin so erschöpft, aber sagen kann ich es nicht — das klingt undankbar."',
              '"Wenn ich an mich selbst denke, fühlt sich das wie Verrat an."',
              '"Ich habe keine Zeit mehr für Freunde, meinen Partner, mich selbst."',
              '"Ich schlafe schlecht wegen der Sorgen und der nächtlichen Wachsamkeit."',
            ].map((zitat) => (
              <div key={zitat} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] text-[#2E2E2E] italic">{zitat}</p>
              </div>
            ))}
          </div>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Diese Gefühle sind real und verbreitet. Sie anzuerkennen ist der erste Schritt — der wichtigste.
          </p>

          <h2 id="entlastung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Konkrete Entlastungsangebote — was wirklich hilft
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            An Freunde und Familie: So helft ihr wirklich — ohne zu fragen "Kann ich irgendwie helfen?" (darauf kommt selten eine ehrliche Antwort).
          </p>
          <div className="space-y-3 mb-10">
            {[
              { hilfe: 'Konkrete Angebote machen, nicht fragen', desc: '"Ich komme Dienstagabend und koche" statt "Sag mir wenn du was brauchst." Konkrete Angebote sind leichter anzunehmen als abstrakte Hilfsbereitschaft.' },
              { hilfe: 'Übernahmen für klar begrenzte Zeiten', desc: '"Ich komme Samstag 3 Stunden und du gehst spazieren/schläfst/machst was du willst." Die Zeit muss definiert und verlässlich sein.' },
              { hilfe: 'Für Einkäufe, Arztterminbegleitung, Behördengänge', desc: 'Konkrete Alltagsaufgaben übernehmen die Zeit fressen und Pflegende von der Pflege weghalten.' },
              { hilfe: 'Zuhören — ohne Ratschläge', desc: '"Ich weiß du hast es schwer" ist wertvoller als "Du solltest mal..." Zuhören ohne zu bewerten ist selten aber unbezahlbar.' },
              { hilfe: 'Nachfragen — auch nach Wochen und Monaten', desc: 'Kurz nach dem Einzug der Betreuungskraft fragen alle. Monate später ist oft niemand mehr da. Regelmäßig nachfragen: "Wie geht es dir — wirklich?"' },
              { hilfe: 'Finanzielle Unterstützung konkret anbieten', desc: 'Wenn das möglich ist: "Ich möchte zu den Kosten der Betreuungskraft beitragen" ist eine der wirkungsvollsten Formen der Unterstützung.' },
            ].map((item) => (
              <div key={item.hilfe} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.hilfe}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="selbstfuersorge" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Selbstfürsorge — was wirklich hilft (für die Pflegenden selbst)
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tipp: 'Tägliche Mindestauszeit einplanen', desc: 'Mindestens 30 Minuten täglich die nur Ihnen gehören. Kein Kompromiss. Diese Zeit ist keine Belohnung — sie ist Voraussetzung dafür dass die Pflege langfristig funktioniert.' },
              { tipp: 'Schlaf schützen', desc: 'Nächtliche Unterbrechungen systematisch verringern — Hausnotruf, Schichtsystem mit Geschwistern, oder 24h-Betreuungskraft die die Nächte übernimmt.' },
              { tipp: 'Körperliche Gesundheit nicht vernachlässigen', desc: 'Eigene Arzttermine nicht absagen. Rücken schonen (Hebetechniken, Hilfsmittel). Körper ist das wichtigste Werkzeug beim Pflegen.' },
              { tipp: 'Soziale Kontakte aktiv aufrechterhalten', desc: 'Freunde, Hobbys, eigene Termine halten. Isolation ist der Beschleuniger von Burnout.' },
              { tipp: 'Professionelle Unterstützung suchen', desc: 'Psychologische Beratung, Selbsthilfegruppen für pflegende Angehörige — kein Zeichen von Schwäche, sondern von Weitsicht.' },
            ].map((item) => (
              <div key={item.tipp} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tipp}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="hilfe-annehmen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Hilfe annehmen lernen — warum es so schwer ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Viele pflegende Angehörige wissen dass sie Hilfe bräuchten — und nehmen sie trotzdem nicht an. Die häufigsten Gründe:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { grund: '"Ich will keine Last sein"', antwort: 'Menschen die Ihnen nahe sind möchten helfen — lassen Sie es zu. Hilfe anzunehmen ist kein Schwächezeichen sondern ein Zeichen von Beziehungsreife.' },
              { grund: '"Niemand macht es so gut wie ich"', antwort: 'Stimmt oft. Und trotzdem: Gut genug ist gut genug. Kein Mensch kann dauerhaft allein eine perfekte Pflege sicherstellen.' },
              { grund: '"Ich möchte meinen Eltern keinen Fremden zumuten"', antwort: 'Betreuungskräfte werden in den meisten Fällen nach kurzer Zeit als vertraut empfunden — oft überraschend schnell. Das Fremd-Gefühl ist am Anfang am stärksten.' },
              { grund: '"Ich kann mir keine Hilfe leisten"', antwort: 'Mit Kassenzuschüssen (347–990 €/Monat Pflegegeld, Entlastungsbudget, Steuerabzug) ist 24h-Betreuung oft erschwinglicher als gedacht. Kostenlose Beratung bei Primundus.' },
            ].map((item) => (
              <div key={item.grund} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-1 italic">{item.grund}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.antwort}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Burnout erkennen:{' '}
            <a href="/burnout-pflegende-angehoerige/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Burnout pflegender Angehöriger</a>
            {' · '}
            <a href="/pflege-und-beruf-vereinbaren/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflege und Beruf vereinbaren</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie kann ich eine pflegende Schwester/Bruder unterstützen?', a: 'Konkrete Angebote machen (nicht fragen). Zeit übernehmen für klar begrenzte Zeitfenster. Zuhören ohne zu bewerten. Regelmäßig nachfragen auch nach Monaten. Finanzielle Beteiligung wenn möglich.' },
              { q: 'Warum fällt es Pflegenden schwer Hilfe anzunehmen?', a: 'Schuldgefühle, Perfektionismus ("nur ich mache es richtig"), kein Fremder im Haus, Scham. Und: das Selbstbild hängt oft mit dem Pflegen zusammen. Hilfe annehmen erfordert einen Perspektivwechsel.' },
              { q: 'Was sind die wichtigsten Selbstfürsorge-Maßnahmen für Pflegende?', a: 'Tägliche Mindestauszeit, Schlaf schützen, eigene Arzttermine halten, soziale Kontakte aktiv aufrechterhalten, professionelle Unterstützung in Anspruch nehmen.' },
              { q: 'Was hilft Pflegenden wirklich — außer gut gemeinten Ratschlägen?', a: 'Konkrete Übernahmen, aktives Zuhören, regelmäßige Nachfragen, finanzielle Beteiligung, und das Ermöglichen einer 24h-Betreuungskraft die die Hauptlast übernimmt.' },
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
