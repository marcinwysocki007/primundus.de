import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'herausforderung', title: 'Die Herausforderung der Fernbetreuung' },
  { id: 'struktur', title: 'Struktur & Kommunikation aufbauen' },
  { id: 'digital', title: 'Digitale Hilfsmittel' },
  { id: 'notfall', title: 'Notfallplan & lokale Unterstützung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege aus der Ferne koordinieren — so geht es | Primundus',
  description: 'Pflege aus der Ferne koordinieren: Wie man Kommunikation strukturiert, welche digitalen Hilfsmittel helfen und warum eine 24h-Betreuungskraft die Fernbetreuung dramatisch erleichtert.',
  alternates: { canonical: 'https://primundus.de/pflege-aus-der-ferne-koordinieren/' },
  openGraph: {
    title: 'Pflege aus der Ferne koordinieren | Primundus',
    description: 'Wie man häusliche Pflege aus der Entfernung organisiert und koordiniert.',
    url: 'https://primundus.de/pflege-aus-der-ferne-koordinieren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege aus der Ferne koordinieren — so geht es',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflege-aus-der-ferne-koordinieren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflege aus der Ferne koordinieren', item: 'https://primundus.de/pflege-aus-der-ferne-koordinieren/' },
    ],
  },
]

export default function PflegeAusDerFerneKoordinieren() {
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
            <span className="text-[#1C1C1C]">Pflege aus der Ferne</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflege aus der Ferne koordinieren — so geht es
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Viele Kinder leben hunderte Kilometer von ihren Eltern entfernt — und tragen trotzdem Verantwortung für die Pflege. Fernbetreuung ist anspruchsvoll: die ständige Sorge, die Hilflosigkeit bei Problemen, die Schuldgefühle wenn man nicht vor Ort ist. Eine 24h-Betreuungskraft mit Primundus als Ansprechpartner verändert diese Situation grundlegend.
          </p>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Die beste Antwort auf Fernbetreuung: 24h-Kraft + Primundus als Ansprechpartner</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Mit einer 24h-Betreuungskraft ist die Versorgung durchgehend gesichert — ohne Lücken, ohne Koordinationsaufwand für die Familie. Primundus bleibt laufender Ansprechpartner für alle organisatorischen Fragen. Angehörige können aus der Ferne loslassen ohne sich um die Versorgung sorgen zu müssen.
            </p>
          </div>

          <h2 id="herausforderung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die Herausforderung der Fernbetreuung
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { problem: 'Keine direkte Kontrolle', loesung: 'Man sieht nicht wie es wirklich geht. Regelmäßige Videotelefonate und kurze tägliche Check-ins mit der Betreuungskraft schaffen Sichtbarkeit.' },
              { problem: 'Koordinationsaufwand', loesung: 'Arzttermine, Pflegedienst, Apotheke, Hausnotruf — alles muss aus der Ferne koordiniert werden. Mit Primundus als Ansprechpartner fällt ein Großteil dieses Aufwands weg.' },
              { problem: 'Notfallmanagement', loesung: 'Was wenn etwas passiert und man nicht sofort vor Ort sein kann? Klarer Notfallplan mit lokalen Kontakten ist essenziell.' },
              { problem: 'Vertrauen in die Pflegekraft', loesung: 'Man kann die Kraft nicht täglich sehen. Regelmäßige Kommunikation und Vertrauen in die Agentur (Primundus prüft und vermittelt) sind die Antwort.' },
            ].map((item) => (
              <div key={item.problem} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.problem}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.loesung}</p>
              </div>
            ))}
          </div>

          <h2 id="struktur" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Struktur & Kommunikation aufbauen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tip: 'Täglicher Kurzkontakt mit der Kraft', desc: 'Kurze tägliche Nachricht oder 5-Minuten-Telefonat: "Wie war heute?" reicht. Sofortige Problemmeldung vereinbaren.' },
              { tip: 'Wöchentliches Videotelefon-Ritual', desc: 'Fester Wochentermin für Videoanruf mit dem Pflegebedürftigen — das gibt Sicherheit und zeigt Präsenz auch aus der Ferne.' },
              { tip: 'Klares Eskalationsprotokoll', desc: 'Die Kraft weiß: Bei X ruft sie Primundus an, bei Y den Arzt, bei Z sofort den Rettungsdienst. Alles schriftlich festhalten.' },
              { tip: 'Familien-WhatsApp-Gruppe', desc: 'Alle Familienmitglieder in einer Gruppe — Informationen müssen nur einmal geteilt werden, jeder ist auf dem gleichen Stand.' },
              { tip: 'Digitales Pflegetagebuch', desc: 'Kurze tägliche Notizen der Kraft (Stimmung, Auffälligkeiten, Mahlzeiten, Medikamente) — einsehbar für alle Angehörigen.' },
            ].map((item) => (
              <div key={item.tip} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tip}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="digital" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Digitale Hilfsmittel für die Fernbetreuung
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tool: 'Videotelefonie (FaceTime, WhatsApp, Zoom)', nutzen: 'Wöchentliche Gesichts-zu-Gesicht-Verbindung mit dem Pflegebedürftigen und der Betreuungskraft. Tablet mit großem Display für Senioren empfohlen.' },
              { tool: 'Hausnotruf mit GPS', nutzen: 'Sicherheitsnetz: Im Notfall direkte Verbindung zu Leitstelle oder Angehörigen — auch wenn die Kraft kurz abwesend ist.' },
              { tool: 'Smarte Türklingel mit Kamera', nutzen: 'Zeigt wer kommt und geht (Pflegedienst, Besucher). Aus der Ferne einsehbar. Erhöht das Sicherheitsgefühl der Angehörigen.' },
              { tool: 'Geteilter Familienkalender (Google/Apple)', nutzen: 'Arzttermine, Kraftwechsel, Besuche — alle Familienmitglieder sehen dieselbe Planung. Kein Koordinationschaos.' },
              { tool: 'Digitale Medikamentenerinnerung', nutzen: 'App oder Pillendose mit Alarm — schafft Struktur auch wenn die Kraft kurz beschäftigt ist.' },
            ].map((item) => (
              <div key={item.tool} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tool}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.nutzen}</p>
              </div>
            ))}
          </div>

          <h2 id="notfall" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Notfallplan & lokale Unterstützung
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Für alle Situationen die nicht warten können bis die Angehörigen ankommen, braucht es lokale Unterstützung.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { kontakt: 'Nachbar mit Schlüssel', rolle: 'Kann kurzfristig nach dem Rechten sehen, Pakete entgegennehmen, im Notfall vor Ort sein.' },
              { kontakt: 'Lokaler Freund / Bekannter der Familie', rolle: 'Besucht regelmäßig, gibt ehrliches Feedback wie es wirklich geht.' },
              { kontakt: 'Hausarzt', rolle: 'Gut erreichbarer Hausarzt mit Hausbesuchsbereitschaft. Direktnummer der Praxis hinterlegt.' },
              { kontakt: 'Primundus', rolle: 'Ansprechpartner für alle Organisationsfragen, Kraftwechsel, Probleme mit der Betreuungskraft. 089 200 000 830.' },
            ].map((item) => (
              <div key={item.kontakt} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.kontakt}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.rolle}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Notfallplan erstellen:{' '}
            <a href="/notfallplan-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Notfallplan Pflege — was reingehört</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie koordiniert man Pflege aus der Ferne?', a: 'Täglicher Kurzkontakt mit der Kraft, wöchentliches Videotelefon, klares Eskalationsprotokoll, Familien-Gruppe für Kommunikation, lokale Vertrauensperson als Backup. Primundus als laufender Ansprechpartner.' },
              { q: 'Welche digitalen Hilfsmittel helfen bei der Fernbetreuung?', a: 'Videotelefonie (Tablet), Hausnotruf mit GPS, smarte Türklingel, geteilter Familienkalender, digitale Medikamentenerinnerung.' },
              { q: 'Was tun wenn man aus der Ferne nicht sicher ist ob alles gut läuft?', a: 'Lokale Vertrauensperson (Nachbar, Freund) bitten vorbeizuschauen. Primundus ansprechen. Video-Hausbesuch vereinbaren. Im Zweifel selbst hinfahren.' },
              { q: 'Erleichtert eine 24h-Betreuungskraft die Fernbetreuung?', a: 'Enorm — weil die Versorgung durchgehend gesichert ist, ohne Lücken. Statt ständiger Koordination (ambulanter Dienst, Angehörige, Nachbarn) hat man eine Ansprechpartnerin die alles kennt und immer da ist.' },
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
