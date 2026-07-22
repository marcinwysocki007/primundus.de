import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Palliativpflege zuhause?' },
  { id: 'team', title: 'Das palliative Team' },
  { id: 'schmerz', title: 'Schmerztherapie & Symptomkontrolle' },
  { id: 'angehoerige', title: 'Unterstützung für Angehörige' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Palliativpflege zuhause — würdevoll bis zum Ende | Primundus',
  description: 'Palliativpflege zuhause: Was möglich ist, welches Team gebraucht wird und wie Angehörige in der letzten Lebensphase unterstützt werden können.',
  alternates: { canonical: 'https://primundus.de/palliativpflege-zuhause/' },
  openGraph: {
    title: 'Palliativpflege zuhause | Primundus',
    description: 'Würdevolle Begleitung in der letzten Lebensphase zuhause — was möglich ist und was gebraucht wird.',
    url: 'https://primundus.de/palliativpflege-zuhause/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Palliativpflege zuhause — würdevoll bis zum Ende',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/palliativpflege-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Palliativpflege zuhause', item: 'https://primundus.de/palliativpflege-zuhause/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist Palliativpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Palliativpflege zuhause bedeutet die würdevolle Begleitung und Versorgung von Menschen in der letzten Lebensphase im eigenen Zuhause. Ziel ist nicht Heilung, sondern Schmerzfreiheit, Komfort und Lebensqualität bis zum Tod. Sie umfasst Schmerztherapie, Symptomkontrolle, psychologische Begleitung und Unterstützung der Familie.' } },
      { '@type': 'Question', name: 'Ist Sterben zuhause möglich?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in Deutschland sterben schätzungsweise 25–30 % der Menschen zuhause. Mit dem richtigen Team (Hausarzt, SAPV-Team, palliative Pflegekraft, Hospizbegleiter) ist ein würdiges Sterben zuhause in den meisten Fällen möglich — und für viele der ausdrückliche Wunsch.' } },
    ],
  },
]

export default function PalliativpflegeZuhause() {
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
            <span className="text-[#1C1C1C]">Palliativpflege zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Palliativpflege zuhause — würdevoll bis zum Ende
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Die meisten Menschen möchten in ihrem Zuhause sterben — umgeben von vertrauten Menschen und Gegenständen. Mit dem richtigen Team ist das in den meisten Fällen möglich: Hausarzt, SAPV-Team, palliative Pflegekraft und Hospizbegleiter ermöglichen eine würdevolle letzte Lebensphase zuhause.
          </p>

          <div className="bg-[#F2EDE6] border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#6B5A44] mb-2">Was Palliativpflege bedeutet</p>
            <p className="text-[14px] text-[#6B5A44] leading-relaxed">
              Palliativpflege ist keine Aufgabe — es ist eine Haltung. Ziel ist nicht Lebensverlängerung um jeden Preis, sondern Schmerzfreiheit, Würde und Lebensqualität bis zum Tod. Und die Unterstützung der Menschen die jemanden begleiten.
            </p>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist Palliativpflege zuhause?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Palliativpflege (von lateinisch "pallium" = Mantel) umfasst alle Maßnahmen die das Wohlbefinden und die Lebensqualität von Menschen mit unheilbarer Erkrankung verbessern — ohne auf Heilung abzuzielen.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            In Deutschland gibt es ein gut ausgebautes Netz an ambulanter Palliativversorgung. Die <strong>Spezialisierte Ambulante Palliativversorgung (SAPV)</strong> ist ein gesetzlicher Anspruch für Menschen mit unheilbarer Erkrankung — kostenlos und über den Hausarzt verordnet.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { was: 'Schmerztherapie', desc: 'Effektive Schmerzfreiheit ist das wichtigste Ziel. Mit modernen Schmerzmitteln — auch Opioide — ist Schmerzfreiheit zuhause fast immer erreichbar. Der SAPV-Arzt passt die Therapie laufend an.' },
              { was: 'Symptomkontrolle', desc: 'Atemnot, Übelkeit, Angst, Unruhe — alle belastenden Symptome können gelindert werden. Das SAPV-Team ist 24h erreichbar für Anpassungen.' },
              { was: 'Psychologische Begleitung', desc: 'Für den Sterbenden und die Angehörigen. Palliativteam und Hospizbegleiter begleiten emotional durch die schwierigste Zeit.' },
              { was: 'Praktische Pflege', desc: 'Körperpflege, Lagerung, Mundpflege, Inkontinenzversorgung. Betreuungskraft und Pflegedienst arbeiten zusammen.' },
            ].map((item) => (
              <div key={item.was} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.was}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="team" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Das palliative Team zuhause
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Palliativpflege zuhause ist Teamarbeit. Niemand muss das alleine stemmen.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { rolle: 'Hausarzt', aufgabe: 'Koordiniert die medizinische Versorgung, verordnet SAPV wenn nötig, Ansprechpartner für Fragen. Hausbesuche sind in der Palliativsituation problemlos zu vereinbaren.' },
              { rolle: 'SAPV-Team (Spezialisierte Ambulante Palliativversorgung)', aufgabe: 'Auf Verordnung des Hausarztes: Palliativarzt und -pflegekraft kommen nach Hause. Rund um die Uhr erreichbar. Kostenfrei über Krankenversicherung. Zugang: Hausarzt SAPV verordnen lassen.' },
              { rolle: 'Ambulanter Pflegedienst', aufgabe: 'Übernimmt Grundpflege, Medikamentengabe, Verbandswechsel. Arbeitet mit SAPV-Team zusammen.' },
              { rolle: '24h-Betreuungskraft', aufgabe: 'Rund um die Uhr vor Ort — Gesellschaft, praktische Unterstützung, Sicherheit. Entlastet Angehörige. Meldet Veränderungen sofort.' },
              { rolle: 'Hospizbegleiter', aufgabe: 'Ehrenamtliche die sterbende Menschen und ihre Familien begleiten. Kostenlos über lokale Hospizdienste. Seelische Unterstützung, Dasein, Gespräche.' },
            ].map((item) => (
              <div key={item.rolle} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.rolle}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.aufgabe}</p>
              </div>
            ))}
          </div>

          <h2 id="schmerz" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Schmerztherapie & Symptomkontrolle zuhause
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Angst "zuhause nicht ausreichend versorgt zu sein" ist einer der Hauptgründe warum Menschen die letzte Phase im Krankenhaus oder Hospiz verbringen — obwohl sie zuhause sterben möchten. Diese Angst ist unbegründet: Mit SAPV ist medizinische Palliativversorgung zuhause auf Krankenhausniveau möglich.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { symptom: 'Schmerzen', therapie: 'Moderne Schmerztherapie nach WHO-Stufenschema. Opioide (Morphin) zuhause ist legal und sicher wenn ärztlich verordnet. Schmerzpflaster ermöglichen kontinuierliche Wirkung ohne Schlucken.' },
              { symptom: 'Atemnot', therapie: 'Niedrig dosiertes Morphin lindert das Gefühl von Atemnot effektiv. Frische Luft, Ventilator, Lagerung. Anxiolytika bei begleitender Angst.' },
              { symptom: 'Übelkeit & Erbrechen', therapie: 'Antiemetika nach ärztlicher Verordnung. Kleine Mahlzeiten, kein Essenszwang. Ingwertee kann helfen.' },
              { symptom: 'Unruhe & Angst', therapie: 'Ruhige Atmosphäre, vertraute Personen, Musik. Bei starker Unruhe: medikamentöse Sedierung möglich und ethisch vertretbar.' },
            ].map((item) => (
              <div key={item.symptom} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.symptom}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.therapie}</p>
              </div>
            ))}
          </div>

          <h2 id="angehoerige" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Unterstützung für Angehörige
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Palliativbegleitung ist auch Begleitung der Familie. Angehörige die einen sterbenden Menschen begleiten brauchen selbst Unterstützung — das ist kein Zeichen von Schwäche, sondern menschlich.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { hilfe: 'Entlastung durch Betreuungskraft', desc: 'Eine 24h-Betreuungskraft ist nachts da wenn Angehörige schlafen müssen. Sie übernimmt praktische Aufgaben damit Angehörige Energie für emotionale Begleitung haben.' },
              { hilfe: 'Hospizbegleiter als Gesprächspartner', desc: 'Kostenlos, erfahren, ohne eigene Betroffenheit. Jemand mit dem man sprechen kann der zuhört ohne selbst zu leiden.' },
              { hilfe: 'Psychologische Trauerbegleitung', desc: 'Viele Hospizdienste und Beratungsstellen bieten Trauerbegleitung auch schon während der Palliativphase an — nicht erst nach dem Tod.' },
              { hilfe: 'Pflegezeit / Pflegeunterstützungsgeld', desc: 'Angehörige können für die Begleitung in der Sterbephase bezahlte Freistellung (Pflegeunterstützungsgeld) in Anspruch nehmen.' },
            ].map((item) => (
              <div key={item.hilfe} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.hilfe}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Mehr:{' '}
            <a href="/burnout-pflegende-angehoerige/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Burnout pflegender Angehöriger</a>
            {' · '}
            <a href="/pflege-und-beruf-vereinbaren/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflege und Beruf vereinbaren</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist Palliativpflege zuhause?', a: 'Würdevolle Begleitung und Versorgung in der letzten Lebensphase im eigenen Zuhause. Ziel: Schmerzfreiheit, Komfort und Lebensqualität bis zum Tod — nicht Heilung oder Lebensverlängerung.' },
              { q: 'Ist Sterben zuhause möglich?', a: 'Ja — mit dem richtigen Team (Hausarzt, SAPV-Team, Pflegekraft, Hospizbegleiter) ist würdiges Sterben zuhause in den meisten Fällen möglich. Ca. 25–30 % der Menschen in Deutschland sterben zuhause.' },
              { q: 'Was ist SAPV und wie bekommt man es?', a: 'Spezialisierte Ambulante Palliativversorgung — kostenloser gesetzlicher Anspruch für Menschen mit unheilbarer Erkrankung. Hausarzt verordnet SAPV. Team kommt nach Hause, ist 24h erreichbar.' },
              { q: 'Kann man Schmerzen zuhause ausreichend behandeln?', a: 'Ja — mit SAPV ist Schmerztherapie auf Krankenhausniveau zuhause möglich. Morphin und andere starke Schmerzmittel sind bei ärztlicher Verordnung zuhause legal und sicher anwendbar.' },
              { q: 'Wer unterstützt Angehörige in der Palliativphase?', a: 'SAPV-Team, Hospizbegleiter (kostenlos), psychologische Trauerbegleitung, Betreuungskraft die praktische Aufgaben übernimmt. Pflegeunterstützungsgeld bei Freistellung vom Beruf.' },
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
