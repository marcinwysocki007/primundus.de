import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist ein Hausnotruf?' },
  { id: 'arten', title: 'Arten von Hausnotruf-Systemen' },
  { id: 'kosten', title: 'Kosten & Kassenzuschuss' },
  { id: 'wann-sinnvoll', title: 'Wann ist ein Hausnotruf sinnvoll?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Hausnotruf für Senioren — Kosten, Kassenzuschuss & Auswahl 2026 | Primundus',
  description: 'Hausnotruf für Senioren: Kosten ab 20 €/Monat, Kassenzuschuss möglich. Was ein Hausnotruf leistet, welche Systeme es gibt und wann er sinnvoll ist.',
  alternates: { canonical: 'https://primundus.de/hausnotruf-senioren/' },
  openGraph: {
    title: 'Hausnotruf für Senioren 2026 | Primundus',
    description: 'Hausnotruf: Kosten, Kassenzuschuss und welche Systeme für wen geeignet sind.',
    url: 'https://primundus.de/hausnotruf-senioren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hausnotruf für Senioren — Kosten, Kassenzuschuss und Auswahl 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/hausnotruf-senioren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Hausnotruf Senioren', item: 'https://primundus.de/hausnotruf-senioren/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet ein Hausnotruf?', acceptedAnswer: { '@type': 'Answer', text: 'Ein klassischer Hausnotruf kostet typischerweise 20–50 € pro Monat (Anschluss + monatliche Grundgebühr). Mobilfunk-Hausnotruf (auch außerhalb der Wohnung nutzbar) kostet 30–80 €/Monat. Die Pflegekasse kann über den Entlastungsbetrag (131 €/Monat) einen Teil der Kosten erstatten.' } },
      { '@type': 'Question', name: 'Zahlt die Krankenkasse oder Pflegekasse den Hausnotruf?', acceptedAnswer: { '@type': 'Answer', text: 'Der Hausnotruf kann aus dem monatlichen Entlastungsbetrag (131 €) der Pflegekasse finanziert werden — wenn er über einen anerkannten Anbieter bezogen wird. Bei manchen Pflegekassen ist auch eine direkte Kostenübernahme über den Anbieter möglich.' } },
    ],
  },
]

export default function HausnotrufSenioren() {
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
            <span className="text-[#1C1C1C]">Hausnotruf Senioren</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Hausnotruf für Senioren — Kosten, Zuschuss & Auswahl
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Ein Hausnotruf gibt Senioren und Angehörigen Sicherheit — rund um die Uhr, auf Knopfdruck. Ab ca. 20 Euro pro Monat. Die Pflegekasse kann über den Entlastungsbetrag die Kosten übernehmen. Und mit einer 24h-Betreuungskraft ist die direkte menschliche Hilfe im Notfall sowieso immer vor Ort.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Klassischer Hausnotruf: 20–50 €/Monat — Knopf am Handgelenk oder als Anhänger',
                'Mobilfunk-Notruf: 30–80 €/Monat — auch außerhalb der Wohnung nutzbar',
                'GPS-Tracker: 30–80 €/Monat — besonders bei Demenz und Weglaufen wichtig',
                'Finanzierung: Entlastungsbetrag (131 €/Monat) der Pflegekasse kann genutzt werden',
                'Mit 24h-Betreuungskraft: Kraft ist immer da — Notruf als zusätzliche Absicherung',
                'Anbieter: DRK, Malteser, Johanniter, DUSSMANN, viele weitere',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist ein Hausnotruf?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Ein Hausnotruf ist ein elektronisches System das es Senioren ermöglicht, im Notfall mit einem Knopfdruck Hilfe zu rufen. Der klassische Hausnotruf besteht aus einer Basisstation (am Festnetz oder per Mobilfunk) und einem Funksender als Armband oder Anhänger. Beim Drücken des Knopfes wird automatisch eine Notrufleitstelle kontaktiert.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Die Leitstelle klärt zunächst per Mikrofon die Situation — und alarmiert dann je nach Bedarf Angehörige, den Rettungsdienst oder einen lokalen Ersthelfer. Das System funktioniert 24 Stunden am Tag, 7 Tage/Woche, auch wenn der Nutzer bewusstlos ist (automatische Sturzerkennung bei modernen Systemen).
          </p>

          <h2 id="arten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Arten von Hausnotruf-Systemen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                art: 'Klassischer Hausnotruf (Festnetz/Mobilfunk)',
                kosten: '20–50 €/Monat',
                fuer: 'Senioren die hauptsächlich in der Wohnung sind',
                wie: 'Funksender als Armband/Anhänger verbindet sich mit Basisstation. Funktioniert nur in Reichweite der Basisstation (typisch 50–80 m).',
              },
              {
                art: 'Mobilfunk-Notruf (außer Haus nutzbar)',
                kosten: '30–80 €/Monat',
                fuer: 'Senioren die noch nach draußen gehen',
                wie: 'Gerät mit eigenem Mobilfunk — funktioniert überall in Deutschland wo Empfang ist. Häufig mit GPS-Ortung kombiniert.',
              },
              {
                art: 'GPS-Tracker (besonders bei Demenz)',
                kosten: '30–80 €/Monat',
                fuer: 'Menschen mit Demenz und Weglauf-Tendenz',
                wie: 'Kleines Gerät (als Uhr, im Schuh, am Gürtel) ermöglicht Ortung jederzeit. Angehörige können Standort per App verfolgen.',
              },
              {
                art: 'Smarte Pflaster/Wearables',
                kosten: '40–100 €/Monat',
                fuer: 'Hohes Sturzrisiko, Herzpatienten',
                wie: 'Automatische Sturzerkennung, Herzfrequenzüberwachung, automatischer Notruf ohne Knopfdruck.',
              },
            ].map((item) => (
              <div key={item.art} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.art}</p>
                  <span className="text-[13px] font-bold text-[#3D7A5C] flex-shrink-0">{item.kosten}</span>
                </div>
                <p className="text-[12px] font-semibold text-[#A89279] mb-1">Für wen: {item.fuer}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.wie}</p>
              </div>
            ))}
          </div>

          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kosten & Kassenzuschuss
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ein Hausnotruf kostet typischerweise eine einmalige Anschlussgebühr (20–80 €) plus eine monatliche Grundgebühr (15–50 €). Viele Anbieter ohne Anschlussgebühr möglich.
          </p>
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-6">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Kassenzuschuss: Entlastungsbetrag nutzen</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Der Hausnotruf kann aus dem monatlichen Entlastungsbetrag (131 €/Monat, für alle Pflegegrade 1–5) der Pflegekasse bezahlt werden — wenn der Anbieter als anerkanntes Betreuungs- und Entlastungsangebot zugelassen ist. Viele Wohlfahrtsverbände (DRK, Malteser, Johanniter) sind automatisch anerkannt. Pflegekasse anfragen.
            </p>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Entlastungsbetrag richtig nutzen:{' '}
            <a href="/entlastungsbetrag/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Entlastungsbetrag 2026 — 131 €/Monat</a>
          </p>

          <h2 id="wann-sinnvoll" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann ist ein Hausnotruf sinnvoll?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ein Hausnotruf ist besonders empfehlenswert wenn:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Erhöhtes Sturzrisiko durch eingeschränkte Mobilität oder Gleichgewichtsprobleme',
              'Herzerkrankungen oder andere akute Erkrankungen bei denen schnelle Hilfe entscheidend ist',
              'Der Senior zeitweise allein ist und Angehörige nicht sofort erreichbar sind',
              'Demenz ohne GPS-Tracking: GPS-Variante für Sicherheit beim Weglaufen',
              'Überbrückung bis zur Betreuungskraft — oder als ergänzende Sicherheit bei 24h-Pflege',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-[#2E2E2E]">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#F2EDE6] border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#6B5A44] mb-2">Mit 24h-Betreuungskraft — Hausnotruf als zusätzliche Absicherung</p>
            <p className="text-[14px] text-[#6B5A44] leading-relaxed">
              Wenn eine 24h-Betreuungskraft dauerhaft im Haushalt lebt, ist menschliche Hilfe immer direkt vor Ort. Ein zusätzlicher Hausnotruf kann trotzdem sinnvoll sein — als Absicherung für Momente wenn die Kraft kurz abwesend ist oder als Notfallweg direkt zum Rettungsdienst.
            </p>
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was kostet ein Hausnotruf?', a: 'Klassischer Hausnotruf: 20–50 €/Monat. Mobilfunk-Notruf mit GPS: 30–80 €/Monat. Einmalige Anschlussgebühr 20–80 € (viele Anbieter ohne). Entlastungsbetrag (131 €/Monat) der Pflegekasse kann die Kosten decken.' },
              { q: 'Zahlt die Pflegekasse den Hausnotruf?', a: 'Indirekt — über den Entlastungsbetrag (131 €/Monat, alle Pflegegrade 1–5). Voraussetzung: Anbieter muss als anerkanntes Betreuungsangebot zugelassen sein. Viele Wohlfahrtsverbände (DRK, Malteser, Johanniter) sind anerkannt.' },
              { q: 'Was ist der Unterschied zwischen Hausnotruf und GPS-Tracker?', a: 'Hausnotruf: Knopfdruck löst Notruf aus, funktioniert klassisch nur in der Wohnung. GPS-Tracker: Echtzeit-Ortung jederzeit, besonders für Demenzkranke mit Weglauftendenz.' },
              { q: 'Ist ein Hausnotruf bei 24h-Pflege noch nötig?', a: 'Nicht zwingend — aber als zusätzliche Absicherung sinnvoll. Die 24h-Betreuungskraft ist immer direkt vor Ort. Ein Notruf-System gibt zusätzliche Sicherheit für Momente wenn die Kraft kurz abwesend ist.' },
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
