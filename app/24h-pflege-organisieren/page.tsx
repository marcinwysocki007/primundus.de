import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'schritt-fuer-schritt', title: 'Schritt-für-Schritt-Planung' },
  { id: 'was-regeln', title: 'Was vor dem Start geregelt sein muss' },
  { id: 'wohnen', title: 'Wohnen, Zimmer, Alltag' },
  { id: 'laufend', title: 'Laufende Organisation' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24h-Pflege organisieren — Checkliste & Schritt-für-Schritt | Primundus',
  description: '24h-Pflege organisieren: Was vor dem Start geregelt sein muss, wie man Wohnraum vorbereitet und was laufend zu organisieren ist. Mit vollständiger Checkliste.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-organisieren/' },
  openGraph: {
    title: '24h-Pflege organisieren | Primundus',
    description: 'Schritt-für-Schritt: Was vor und nach dem Start der 24h-Pflege organisiert werden muss.',
    url: 'https://primundus.de/24h-pflege-organisieren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege organisieren — Checkliste und Schritt-für-Schritt',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/24h-pflege-organisieren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege organisieren', item: 'https://primundus.de/24h-pflege-organisieren/' },
    ],
  },
]

export default function PflegeOrganisieren() {
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
            <span className="text-[#1C1C1C]">24h-Pflege organisieren</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24h-Pflege organisieren — Checkliste & Schritt-für-Schritt
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Die Organisation der 24h-Pflege wirkt am Anfang überwältigend — ist es aber nicht wenn man es systematisch angeht. Wer mit Primundus arbeitet, hat einen festen Ansprechpartner der die meiste Arbeit übernimmt. Trotzdem gibt es Dinge die die Familie selbst regeln muss. Hier ist die vollständige Übersicht.
          </p>

          <h2 id="schritt-fuer-schritt" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Schritt-für-Schritt-Planung
          </h2>
          <ol className="space-y-4 mb-10">
            {[
              { n: '1', phase: 'Sofort (wenn Pflege nötig wird)', aufgaben: ['Pflegekasse-Antrag stellen (formlos, per Telefon — Datum sichern)', 'Primundus anrufen: 089 200 000 830 — kostenlose Beratung', 'Pflegetagebuch beginnen für spätere Begutachtung'] },
              { n: '2', phase: 'Innerhalb 1–2 Wochen', aufgaben: ['Beschäftigungsmodell wählen (Empfehlung: Entsendemodell via Primundus)', 'Passende Kraft auswählen (Profil prüfen, Telefonat vorab)', 'Zimmer für die Betreuungskraft vorbereiten', 'Familienmitglieder informieren und einbeziehen'] },
              { n: '3', phase: 'Vor Anreise der Kraft', aufgaben: ['Schlüssel bereitstellen, Hausordnung erklären', 'Kühlschrank und Vorräte auffüllen', 'Medikamentenliste und Arztdaten bereithalten', 'Pflegetagebuch und Routinepläne vorbereiten'] },
              { n: '4', phase: 'Erste Woche — Eingewöhnung', aufgaben: ['Kraft in Haushalt, Routinen und Besonderheiten einführen', 'Lieblingsgerichte, Gewohnheiten, Vorlieben erklären', 'Arzt und Physiotherapeut vorstellen', 'Erreichbarkeit für Rückfragen sicherstellen'] },
              { n: '5', phase: 'Laufend', aufgaben: ['Kraftwechsel alle 6–8 Wochen: Primundus organisiert nahtlos', 'Kassenzuschüsse monatlich optimieren', 'Pflegegrad regelmäßig auf Höherstufung prüfen', 'Primundus als laufenden Ansprechpartner nutzen'] },
            ].map((step) => (
              <li key={step.n} className="bg-white rounded-xl border border-[#E5E3DF] overflow-hidden list-none">
                <div className="bg-[#F8F7F5] px-5 py-3 border-b border-[#E5E3DF] flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#8B7355] text-white font-bold text-[13px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                  <p className="text-[14px] font-bold text-[#1C1C1C]">{step.phase}</p>
                </div>
                <ul className="divide-y divide-[#F8F7F5]">
                  {step.aufgaben.map((a) => (
                    <li key={a} className="flex items-start gap-3 px-5 py-3 text-[14px] text-[#2E2E2E]">
                      <span className="text-[#3D7A5C] flex-shrink-0 mt-0.5">✓</span>{a}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h2 id="was-regeln" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was vor dem Start geregelt sein muss
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { punkt: 'Pflegekasse informieren', desc: 'Pflegekasse-Antrag gestellt? Pflegegrad bekannt oder in Beantragung? Entlastungsbetrag aktiviert? Wenn noch kein Pflegegrad: Antrag sofort stellen — rückwirkend ab Antragsdatum.' },
              { punkt: 'Vorsorgevollmacht & Patientenverfügung', desc: 'Sind diese Dokumente vorhanden? Wer trifft Entscheidungen wenn der Pflegebedürftige das nicht mehr kann? Ohne Vollmacht entscheidet das Gericht — das kostet Zeit und Geld.' },
              { punkt: 'Hausarzt informieren', desc: 'Hausarzt über den Start der 24h-Pflege informieren. Medikamentenliste aktualisieren. Hausbesuche vereinbaren wenn nötig. Arztdaten der Betreuungskraft zugänglich machen.' },
              { punkt: 'Schlüssel & Zugänge', desc: 'Reserveschlüssel für Betreuungskraft. Codes für Alarmanlage, Briefkasten, Keller. Notfallkontakte aufschreiben und gut sichtbar aufhängen.' },
            ].map((item) => (
              <div key={item.punkt} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.punkt}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="wohnen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wohnen, Zimmer & Alltag vorbereiten
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Betreuungskraft lebt dauerhaft im Haushalt. Ein eigenes Zimmer mit Privatsphäre ist Pflicht — kein Luxus, sondern Voraussetzung für eine gute Zusammenarbeit.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { thema: 'Zimmer der Betreuungskraft', anforderungen: ['Eigenes Zimmer mit Tür (Privatsphäre)', 'Bett oder Einzelbett, Schrank, Tisch', 'WLAN-Zugang', 'Kost und Logis werden auf die Vergütung angerechnet (ca. 300–400 €/Mo)'] },
              { thema: 'Küche & Lebensmittel', anforderungen: ['Kühlschrank zugänglich für Betreuungskraft', 'Vorräte für erste Woche auffüllen', 'Diät- und Allergiehinweise kommunizieren', 'Budget für Lebensmitteleinkäufe klären'] },
              { thema: 'Medikamente & Hilfsmittel', anforderungen: ['Medikamentenliste mit Einnahmezeitpunkten ausdrucken', 'Hilfsmittel (Rollator, Rollstuhl) zugänglich und funktionsfähig', 'Pflegehilfsmittel (Einmalhandschuhe, Inkontinenzmaterial) vorrätig', 'Verbandsmaterial und Erste-Hilfe-Kasten'] },
            ].map((item) => (
              <div key={item.thema} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-3">{item.thema}</p>
                <ul className="space-y-1">
                  {item.anforderungen.map(a => (
                    <li key={a} className="text-[13px] text-[#2E2E2E] flex gap-2">
                      <span className="text-[#3D7A5C] flex-shrink-0">✓</span>{a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="laufend" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Laufende Organisation — was regelmäßig anfällt
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { turnus: 'Wöchentlich', aufgaben: 'Einkaufsliste abgleichen, Arzttermine koordinieren, kurzes Gespräch mit Kraft über die Woche.' },
              { turnus: 'Monatlich', aufgaben: 'Kassenzuschüsse prüfen (Entlastungsbetrag ausgegeben?), Abrechnung mit Primundus, Medikamente auffüllen.' },
              { turnus: 'Alle 6–8 Wochen', aufgaben: 'Kraftwechsel: Primundus organisiert nahtlos. Übergabegespräch mit alter und neuer Kraft.' },
              { turnus: 'Jährlich', aufgaben: 'Steuerliche Absetzbarkeit prüfen (bis 4.000 €), Pflegegrad auf Höherstufungsbedarf prüfen, Entlastungsbudget-Saldo prüfen.' },
            ].map((item) => (
              <div key={item.turnus} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.turnus}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.aufgaben}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was muss ich vor dem Start der 24h-Pflege organisieren?', a: 'Pflegekasse-Antrag stellen, Beschäftigungsmodell wählen, Kraft auswählen, Zimmer vorbereiten, Schlüssel bereitstellen, Hausarzt informieren, Medikamentenliste bereithalten, Vorsorgevollmacht prüfen.' },
              { q: 'Muss die Betreuungskraft ein eigenes Zimmer haben?', a: 'Ja — eigenes Zimmer mit Privatsphäre ist Pflichtvoraussetzung. Kost und Logis werden auf die Vergütung angerechnet (ca. 300–400 €/Monat).' },
              { q: 'Wie oft wechselt die Betreuungskraft?', a: 'In der Regel alle 6–8 Wochen. Primundus organisiert jeden Wechsel nahtlos — die Familie muss sich darum nicht kümmern.' },
              { q: 'Was passiert wenn die Kraft krank wird?', a: 'Primundus stellt unverzüglich eine Ersatzkraft. Die Familie bleibt nie ohne Versorgung.' },
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
