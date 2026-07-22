import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'formen', title: 'Formen der Inkontinenz' },
  { id: 'alltag', title: 'Inkontinenz im Pflegealltag' },
  { id: 'hilfsmittel', title: 'Hilfsmittel & Kassenzuschuss' },
  { id: 'wuerde', title: 'Würde bewahren — wie Gespräche gelingen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Inkontinenz Pflege zuhause — Hilfsmittel, Alltag & Würde | Primundus',
  description: 'Inkontinenz bei pflegebedürftigen Senioren: Formen, Hilfsmittel (Kassenzuschuss bis 40 €/Mo), Alltagstipps und wie man Würde beim Umgang bewahrt.',
  alternates: { canonical: 'https://primundus.de/inkontinenz-pflege-zuhause/' },
  openGraph: {
    title: 'Inkontinenz Pflege zuhause | Primundus',
    description: 'Inkontinenz in der häuslichen Pflege — Hilfsmittel, Alltag und Würde bewahren.',
    url: 'https://primundus.de/inkontinenz-pflege-zuhause/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Inkontinenz Pflege zuhause — Hilfsmittel, Alltag und Würde',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/inkontinenz-pflege-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Inkontinenz Pflege zuhause', item: 'https://primundus.de/inkontinenz-pflege-zuhause/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wer zahlt Inkontinenzmaterial?', acceptedAnswer: { '@type': 'Answer', text: 'Inkontinenzmaterial ist ein Hilfsmittel nach SGB V — wird mit Rezept von der Krankenversicherung übernommen. Zusätzlich gibt es die Pflegehilfsmittel-Pauschale (42 €/Monat) der Pflegekasse für saugende Schutzeinlagen. Rezept beim Hausarzt holen.' } },
    ],
  },
]

export default function InkontinenzPflegeZuhause() {
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
            <span className="text-[#1C1C1C]">Inkontinenz Pflege</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Inkontinenz Pflege zuhause — Hilfsmittel, Alltag & Würde
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Inkontinenz ist eines der häufigsten und gleichzeitig schamhaftesten Pflegethemen. Rund 80 % der pflegebedürftigen Senioren sind davon betroffen — in unterschiedlichem Ausmaß. Der richtige Umgang schützt die Würde, verhindert Infektionen und Wundliegen, und macht den Alltag für alle leichter.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Inkontinenzmaterial: Rezept beim Arzt → Krankenkasse übernimmt',
                'Pflegehilfsmittel-Pauschale: 42 €/Monat (Pflegekasse) für saugende Einlagen',
                'Regelmäßige Toilettengänge verhindern viele Inkontinenz-Episoden',
                'Hautpflege nach jeder Versorgung ist Pflicht — Wundliegen vermeiden',
                'Würde: niemals kommentieren, immer diskret, sachlich und ruhig bleiben',
                '24h-Kraft: kennt Toilettenrhythmus, erkennt Anzeichen, handelt sofort',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="formen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Formen der Inkontinenz
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { form: 'Dranginkontinenz', beschreibung: 'Plötzlicher, starker Harndrang der nicht lange hinausgezögert werden kann. Häufige Ursache: überaktive Blase, neurologische Erkrankungen (Schlaganfall, Parkinson, Demenz). Hilft: regelmäßige Toilettengänge alle 2 Stunden.' },
              { form: 'Belastungsinkontinenz', beschreibung: 'Unwillkürlicher Harnverlust bei Husten, Niesen, Lachen oder körperlicher Belastung. Ursache: geschwächter Beckenboden. Häufiger bei Frauen. Hilfe: Beckenbodenkräftigung, Einlagen.' },
              { form: 'Überlaufinkontinenz', beschreibung: 'Blase leert sich nie vollständig, läuft über. Ursache: geschwächter Blasenmuskel, Prostataprobleme. Kann auf Katheterversorgung durch Pflegedienst hinauslaufen.' },
              { form: 'Stuhlinkontinenz', beschreibung: 'Besonders belastend für Betroffene und Pflegende. Ursache: geschwächter Schließmuskel, Nervenerkrankungen, Demenz. Klarer Toilettenrhythmus (nach Mahlzeiten) hilft.' },
            ].map((item) => (
              <div key={item.form} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.form}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.beschreibung}</p>
              </div>
            ))}
          </div>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Inkontinenz im Pflegealltag — konkrete Maßnahmen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { massnahme: 'Toilettenrhythmus einführen', desc: 'Regelmäßige Toilettengänge alle 2 Stunden — unabhängig ob Drang vorhanden. Besonders nach Mahlzeiten und Aufstehen wichtig. Verhindert viele Inkontinenz-Episoden.' },
              { massnahme: 'Flüssigkeit nicht reduzieren', desc: 'Viele Senioren trinken zu wenig weil sie Inkontinenz fürchten — das verschlechtert alles (Blasenentzündungen, Verstopfung, Verwirrtheit). Ausreichend trinken (1,5 L), Flüssigkeit gut über den Tag verteilen.' },
              { massnahme: 'Wege zur Toilette sichern', desc: 'Nachts Beleuchtung an, kein Kabel auf dem Weg, Toilette gut erreichbar. Nachtstühle können die Wege kürzen. Schneller Zugang zur Toilette ist oft alles was nötig ist.' },
              { massnahme: 'Hautpflege nach jeder Versorgung', desc: 'Haut gründlich reinigen und trocknen, dann mit Pflegecreme schützen. Feuchtigkeit ist der Hauptauslöser von Wundliegen und Pilzinfektionen.' },
              { massnahme: 'Richtiges Inkontinenzmaterial wählen', desc: 'Nicht zu groß, nicht zu klein — Arzt oder Stomatherapeut empfiehlt das passende Produkt. Einlagen, Windelhosen, aufsaugende Unterlagen je nach Bedarf.' },
            ].map((item) => (
              <div key={item.massnahme} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.massnahme}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="hilfsmittel" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Hilfsmittel & Kassenzuschuss
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Inkontinenzmaterial — Krankenversicherung</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">Inkontinenzmaterial ist ein Hilfsmittel nach SGB V. Mit Rezept vom Hausarzt wird es von der Krankenversicherung übernommen — kein Eigenanteil (außer Kassenrezept-Zuzahlung 10 %). Lieferung nach Hause über Vertragspartner möglich.</p>
              <p className="text-[13px] text-[#8B8B8B]">Rezept beim Hausarzt → Apotheke oder Sanitätshaus → Abrechnung mit KV</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Pflegehilfsmittel-Pauschale — Pflegekasse</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-2">Die Pflegekasse zahlt zusätzlich 42 €/Monat Pflegehilfsmittel-Pauschale — für saugende Bettschutzeinlagen und andere Verbrauchsmaterialien. Separat beantragen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Nachtstuhl / Toilettenstuhl — Hilfsmittel</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Mit Rezept von Arzt von der Krankenkasse als Hilfsmittel übernommen. Für Menschen die nachts oder bei eingeschränkter Mobilität die Toilette nicht mehr sicher erreichen.</p>
            </div>
          </div>

          <h2 id="wuerde" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Würde bewahren — wie Gespräche und Versorgung gelingen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Inkontinenz ist für Betroffene zutiefst beschämend — besonders für Menschen die ihr Leben lang selbstständig und würdevoll waren. Der Umgang der Pflegekraft entscheidet ob Inkontinenz zur Qual wird oder zur Normalität des Alltags.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { regel: 'Niemals kommentieren oder werten', desc: 'Kein Seufzen, keine Kommentare, keine Blicke. Inkontinenz ist nicht das Versagen der Person — es ist eine medizinische Situation.' },
              { regel: 'Sachlich und ruhig bleiben', desc: '"Ich helfe dir jetzt kurz" — fertig. Keine langen Ankündigungen, kein Mitleid, kein Theater. Je normaler der Umgang, desto würdevoller für den Betroffenen.' },
              { regel: 'Privatsphäre wahren', desc: 'Türe schließen, Vorhang ziehen. Die Versorgung findet zwischen zwei Menschen statt — nicht vor anderen.' },
              { regel: 'Selbstbestimmung ermöglichen', desc: 'So viel wie möglich selbst machen lassen — auch wenn es länger dauert. Das Ziel ist nicht Effizienz, sondern Würde.' },
            ].map((item) => (
              <div key={item.regel} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.regel}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wer zahlt Inkontinenzmaterial?', a: 'Mit Rezept vom Hausarzt übernimmt die Krankenversicherung Inkontinenzmaterial. Zusätzlich: Pflegehilfsmittel-Pauschale (42 €/Monat) der Pflegekasse für Verbrauchsmaterialien.' },
              { q: 'Wie oft muss Inkontinenzmaterial gewechselt werden?', a: 'Bei Bedarf — regelmäßig, aber nicht nach festen Zeiten. Feuchtigkeit sofort entfernen (Hautschutz). Nachts 1–2 Mal wechseln je nach Ausmaß.' },
              { q: 'Kann Inkontinenz behandelt werden?', a: 'Oft teilweise: Beckenbodenkräftigung bei Belastungsinkontinenz, Blasentraining bei Dranginkontinenz, Medikamente. Arzt oder Kontinenzberatung aufsuchen.' },
              { q: 'Wie redet man mit einem pflegebedürftigen Menschen über Inkontinenz?', a: 'Sachlich, ruhig, ohne Wertung: "Ich helfe dir dabei." Thema nicht vermeiden aber auch nicht dramatisieren. Das Signal: Das ist normal, das lösen wir gemeinsam.' },
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
