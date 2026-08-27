import type { Metadata } from 'next'
import Image from 'next/image'
import FranchiseFormClient from './FranchiseFormClient'

export const metadata: Metadata = {
  title: 'Franchisepartner werden — 24h-Pflege | Primundus',
  description: 'Franchisepartner der Testsieger-Marke Primundus werden. Wachsender Pflegemarkt, eigene Software, tägliche Kündbarkeit — Informationspaket jetzt anfordern.',
  alternates: { canonical: 'https://primundus.de/franchisepartner' },
  openGraph: {
    title: 'Franchisepartner werden | Primundus 24h-Pflege',
    description: 'Werden Sie Partner der Testsieger-Marke Primundus im wachsenden 24h-Pflegemarkt.',
    url: 'https://primundus.de/franchisepartner',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Franchisepartner werden', item: 'https://primundus.de/franchisepartner' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine Primundus-Franchise?',
        acceptedAnswer: { '@type': 'Answer', text: 'Der Einstieg beginnt ab 5.500 €. Details besprechen wir im vertraulichen Erstgespräch.' },
      },
      {
        '@type': 'Question',
        name: 'Brauche ich Erfahrung in der Pflege?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein. Unternehmerisches Denken und Führungskompetenz sind wichtiger. Das gesamte Know-how wird im Onboarding vollständig vermittelt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell ist der Break-Even?',
        acceptedAnswer: { '@type': 'Answer', text: 'Durch das niedrige Startkapital ist der Break-Even bereits ab 8–12 aktiven Betreuungsverhältnissen erreichbar — typischerweise nach 2 bis 4 Monaten.' },
      },
    ],
  },
])

const marketBars = [
  { year: '2015', value: 2.9, pct: 45 },
  { year: '2019', value: 4.1, pct: 64 },
  { year: '2022', value: 4.8, pct: 75 },
  { year: '2025', value: 5.3, pct: 83, current: true },
  { year: '2030', value: 5.9, pct: 92 },
  { year: '2035', value: 6.4, pct: 100, forecast: true },
]

const unterschiede = [
  { problem: 'Keine Transparenz über die Pflegekraft', loesung: 'Kunden und Pflegekräfte verbinden sich direkt — mit Foto, Profil und Bewertungen im Primundus-Portal' },
  { problem: 'Lange Kündigungsfristen binden Familien', loesung: 'Täglich kündbar — einmalig in der Branche, keine Mindestlaufzeit' },
  { problem: 'Wochen Wartezeit bis zur Betreuungskraft', loesung: 'Sofortangebot in 24 Stunden, Pflegekraft in 4–7 Tagen' },
  { problem: 'Intransparente Abrechnung, versteckte Kosten', loesung: 'Tagsgenaue Abrechnung, klarer Vertragsaufbau' },
  { problem: 'Abhängigkeit von externer Software', loesung: 'Proprietäre Plattform — Kunden- und Pflegekraftportal aus einer Hand' },
  { problem: 'Reine Vermittler ohne eigenes Personal', loesung: 'Eigenes Team in Deutschland — Qualitätsverantwortung und Kontinuität' },
]

const schritte = [
  { titel: 'Erstgespräch', text: 'Ein 30-minütiges Gespräch mit der Geschäftsleitung persönlich — offen, ohne Skript, ohne Verpflichtung.' },
  { titel: 'Informationspaket', text: 'Vollständiges Exposé mit Kennzahlen, Gebührenstruktur, Gebietsanalyse und Mustervertrag.' },
  { titel: 'Prüfphase', text: 'Gemeinsame Due Diligence. Sie prüfen uns — wir prüfen Sie. Letter of Intent bei Übereinstimmung.' },
  { titel: 'Onboarding', text: 'Einarbeitung in München: Software, Personalgewinnung, Vertrieb — bis zum eigenständigen Start.' },
]

export default function FranchisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      {/* ─── HERO ─── */}
      <section className="bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">
          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">Franchisepartner werden</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Franchise-Opportunity
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink leading-[1.1] mb-6 max-w-[680px]">
            Partner werden bei Primundus —<br className="hidden md:block" />
            dem Testsieger der 24h-Pflege – 6× in Folge
          </h1>

          <p className="text-[17px] text-pm-body leading-relaxed max-w-[580px] mb-4">
            Der deutsche Pflegemarkt wächst strukturell — und hat noch wenige Anbieter,
            die Qualität, Technologie und echte Transparenz vereinen.
            Primundus ist einer davon.
          </p>
          <p className="text-[17px] text-pm-body leading-relaxed max-w-[580px] mb-10">
            Als Franchisepartner bauen Sie auf einem System auf, das von Branchen-Insidern
            entwickelt wurde — mit Erfahrung aus dem Aufbau eines der größten 24h-Anbieter
            Deutschlands. Alle Kinderkrankheiten der Branche bereits gelöst.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 bg-pm-coral text-white px-7 py-3.5 rounded-xl font-bold text-[15px] hover:bg-pm-coral-deep transition-colors"
            >
              Informationspaket anfordern
            </a>
            <a
              href="#markt"
              className="text-[14px] font-semibold text-pm-taupe hover:text-[#7A6347] transition-colors"
            >
              Marktdaten ansehen ↓
            </a>
          </div>

          {/* Testsieger strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-white border-2 border-pm-gold rounded-2xl p-6 flex flex-col items-center text-center">
              <Image
                src="/images/primundus_testsieger-2021.webp"
                alt="Primundus Testsieger DIE WELT"
                width={96}
                height={96}
                className="object-contain mb-3"
              />
              <p className="text-[15px] font-bold text-pm-ink">Testsieger DIE WELT – 6× in Folge</p>
              <p className="text-small text-pm-mute mt-1">Nr. 1 der Pflegekräfte-Vermittler — DIE WELT & ServiceValue</p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <p className="text-h2 md:text-h2-lg font-bold text-pm-ink">ab 5.500 €</p>
              <p className="text-[15px] font-semibold text-pm-ink mt-1">Einstiegsinvestition</p>
              <p className="text-small text-pm-mute mt-1">Einer der niedrigsten im Pflege-Franchise</p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <p className="text-h2 md:text-h2-lg font-bold text-pm-ink">∅ 300 €</p>
              <p className="text-[15px] font-semibold text-pm-ink mt-1">Netto pro Kunde & Monat</p>
              <p className="text-small text-pm-mute mt-1">Break-even ab 8–12 laufenden Betreuungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNER ─── */}
      <section className="bg-white border-t border-b border-pm-line py-10">
        <div className="max-w-article mx-auto px-5">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Netzwerk & Partner
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://pflegebund.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-pm-line hover:border-pm-taupe transition-colors bg-white"
            >
              <div className="flex-shrink-0 flex items-center gap-3">
                <Image src="/images/partner-pflegebund.png" alt="Pflegebund" width={44} height={44} className="object-contain" />
                <span className="text-[17px] font-bold text-[#1A3A5C]">pflegebund<span className="text-pm-mute font-medium">.eu</span></span>
              </div>
              <div className="border-l border-pm-line pl-5">
                <p className="text-small text-pm-mute leading-snug">Europäisches Pflegenetzwerk<br />Qualitätsstandards & Fachkräfte-Pool</p>
              </div>
            </a>
            <a
              href="https://mamamia.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-pm-line hover:border-pm-taupe transition-colors bg-white"
            >
              <div className="flex-shrink-0">
                <Image src="/images/partner-mamamia.png" alt="mamamia" width={140} height={41} className="object-contain" />
              </div>
              <div className="border-l border-pm-line pl-5">
                <p className="text-small text-pm-mute leading-snug">Digitale Pflegeplattform<br />Gemeinsames Ökosystem für Familien & Partner</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── MARKT ─── */}
      <section id="markt" className="bg-pm-paper py-20">
        <div className="max-w-article mx-auto px-5">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Marktlage
          </p>
          <h2 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6 max-w-[560px]">
            Ein Markt, der strukturell wächst — unabhängig von Konjunktur
          </h2>
          <p className="text-[15px] text-pm-body leading-relaxed max-w-[580px] mb-12">
            Demografischer Wandel ist kein Risiko, sondern ein verlässlicher Rückenwind.
            Die Babyboomer-Generation erreicht das Pflegealter. Bis 2035 wird die Zahl
            der Pflegebedürftigen in Deutschland auf über 6,4 Millionen steigen —
            ein Zuwachs von 21 % gegenüber heute.
          </p>

          {/* Clean bar chart */}
          <div className="bg-white border border-pm-line rounded-2xl p-7 mb-10">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
              Pflegebedürftige in Deutschland (in Millionen)
            </p>
            <div className="space-y-3">
              {marketBars.map((bar) => (
                <div key={bar.year} className="flex items-center gap-4">
                  <span className={`text-[12px] font-bold w-9 flex-shrink-0 tabular-nums ${bar.current ? 'text-pm-green' : bar.forecast ? 'text-pm-taupe' : 'text-[#C0BDB8]'}`}>
                    {bar.year}
                  </span>
                  <div className="flex-1 bg-pm-line-soft rounded-full h-7 overflow-hidden">
                    <div
                      className={`h-full rounded-full flex items-center px-3 ${bar.current ? 'bg-pm-green' : bar.forecast ? 'bg-pm-taupe' : 'bg-[#D4C8BC]'}`}
                      style={{ width: `${bar.pct}%` }}
                    >
                      <span className="text-[11px] font-semibold text-white whitespace-nowrap">
                        {bar.value} Mio.{bar.current ? ' — heute' : bar.forecast ? ' — Prognose' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#C0BDB8] mt-5">
              Statistisches Bundesamt · Bundesministerium für Gesundheit · Pflegereport 2024
            </p>
          </div>

          {/* 3 numbers — inline, calm */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-pm-line border border-pm-line rounded-2xl overflow-hidden">
            {[
              { n: 'Jede 3. Familie', sub: 'in Deutschland ist von einem Pflegefall betroffen oder wird es bald sein' },
              { n: '500.000+', sub: 'Haushalte mit heutigem Bedarf an 24h-Betreuung — bei noch wenigen Qualitätsanbietern' },
              { n: '∅ 300 € netto', sub: 'Ertrag pro Betreuungsverhältnis pro Monat — stabiler, wiederkehrender Cashflow' },
            ].map((c) => (
              <div key={c.n} className="bg-white px-6 py-7">
                <p className="text-[22px] font-bold text-pm-taupe mb-2">{c.n}</p>
                <p className="text-[13px] text-pm-body leading-relaxed">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GRÜNDER ─── */}
      <section className="bg-white border-t border-pm-line py-20">
        <div className="max-w-article mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
            <div className="relative">
              <Image
                src="/images/team-primundus-deutschland.webp"
                alt="Das Team von Primundus"
                width={260}
                height={300}
                className="rounded-2xl object-cover w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-3 -right-3 bg-white border border-pm-line rounded-xl p-2.5 shadow-sm">
                <Image
                  src="/images/primundus_testsieger-2021.webp"
                  alt="Testsieger DIE WELT"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
                Die Erfahrung dahinter
              </p>
              <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink mb-6">
                Aus der Branche, für die Branche
              </h2>
              <div className="space-y-4 text-[15px] text-pm-body leading-relaxed">
                <p>
                  Hinter Primundus stehen keine Quereinsteiger: Das Team hat einen der größten
                  24h-Pflege-Anbieter Deutschlands mit aufgebaut — und dabei aus erster
                  Hand erfahren, was in der Branche strukturell nicht funktioniert.
                </p>
                <p>
                  Primundus ist die Konsequenz daraus: ein Anbieter, der nicht vermittelt und
                  auf Hoffnung setzt, sondern operativ kontrolliert — mit eigener Software,
                  eigenem Personal und direkter Qualitätsverantwortung.
                </p>
                <p>
                  Franchise-Partner profitieren davon: Sie starten nicht bei null, sondern
                  auf einem System, das bereits funktioniert und ausgezeichnet wurde.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['Branchen-Erfahrung seit 2006', 'Testsieger DIE WELT · 6× in Folge', 'Eigene Software', 'Eigenes Personal'].map((tag) => (
                  <span key={tag} className="text-[12px] text-pm-taupe border border-[#D4C5B0] rounded-full px-3 py-1 bg-[#FDFCFA]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UNTERSCHIEDE ─── */}
      <section className="bg-pm-paper border-t border-pm-line py-20">
        <div className="max-w-article mx-auto px-5">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Was Primundus anders macht
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink mb-5 max-w-[540px]">
            Die Branche hat Probleme. Primundus hat Antworten.
          </h2>
          <p className="text-[15px] text-pm-body leading-relaxed max-w-[520px] mb-10">
            Jeder Prozess, jede Zeile Code, jeder Vertrag entstand als direkte Reaktion
            auf echte Schwachstellen — aus 20 Jahren Branchenerfahrung.
          </p>

          <div className="flex flex-col gap-px bg-pm-line border border-pm-line rounded-2xl overflow-hidden">
            {unterschiede.map((u, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-pm-line-soft">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#C0504A] mb-1.5">Branche</p>
                  <p className="text-[14px] text-pm-body">{u.problem}</p>
                </div>
                <div className="px-6 py-5 bg-[#FDFCFA]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-pm-green mb-1.5">Primundus</p>
                  <p className="text-[14px] text-pm-ink font-medium">{u.loesung}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAS SIE BEKOMMEN ─── */}
      <section className="bg-white border-t border-pm-line py-20">
        <div className="max-w-article mx-auto px-5">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Ihr Paket
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink mb-10 max-w-[540px]">
            Was Sie als Partner erhalten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
            {[
              { titel: 'Testsieger-Marke', text: 'Sofortige Glaubwürdigkeit durch das DIE WELT Siegel — kein jahrelanger Markenaufbau.' },
              { titel: 'Exklusivregion', text: 'Klar abgegrenztes Gebiet ohne interne Konkurrenz.' },
              { titel: 'Proprietäre Software', text: 'Kundenportal, Buchungssystem und Abrechnung — direkt einsetzbar, kein Drittanbieter.' },
              { titel: 'Vollständiges Onboarding', text: 'Einarbeitung durch das Kernteam: Vertrieb, Personal, Recht, Abrechnung.' },
              { titel: 'Bewährtes System', text: 'Aufgebaut von jemandem, der die Branche von innen kennt. Keine Experimente auf Ihre Kosten.' },
              { titel: 'Zentrales Marketing', text: 'SEO, Performance-Marketing und Referral-Netzwerk laufen zentral. Sie profitieren direkt.' },
            ].map((item, i) => (
              <div key={item.titel} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pm-taupe/10 text-pm-taupe text-[12px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[14px] font-bold text-pm-ink mb-1">{item.titel}</p>
                  <p className="text-[13px] text-pm-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTMENT ─── */}
      <section className="bg-pm-paper border-t border-pm-line py-20">
        <div className="max-w-article mx-auto px-5">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Wirtschaftlichkeit
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink mb-5 max-w-[500px]">
            Was die Partnerschaft wirtschaftlich bedeutet
          </h2>
          <p className="text-[15px] text-pm-body leading-relaxed max-w-[520px] mb-10">
            Alle Angaben sind Orientierungswerte. Das vollständige Zahlenwerk
            erhalten Sie im vertraulichen Informationspaket.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-8">
            {[
              { label: 'Einstiegsinvestition', value: 'ab 5.500 €', note: 'Einer der niedrigsten Einstiege im gesamten Pflege-Franchise-Bereich' },
              { label: 'Netto-Ertrag pro Betreuung', value: '∅ 300 € / Monat', note: 'Stabiler, planbarer wiederkehrender Cashflow' },
              { label: 'Break-Even', value: '8–12 Betreuungen', note: 'Typischerweise nach 2–4 Monaten erreichbar' },
              { label: 'Ertragspotenzial (40–60 Betreuungen)', value: '144.000–216.000 € / Jahr', note: '∅ 300 € × Anzahl Kunden × 12 Monate' },
            ].map((row, i, arr) => (
              <div key={row.label} className={`grid grid-cols-[1fr_auto] gap-6 px-7 py-5 ${i < arr.length - 1 ? 'border-b border-pm-line-soft' : ''}`}>
                <div>
                  <p className="text-[13px] font-semibold text-pm-ink">{row.label}</p>
                  <p className="text-[12px] text-pm-taupe-light mt-0.5">{row.note}</p>
                </div>
                <p className="text-[14px] font-bold text-pm-taupe whitespace-nowrap self-center">{row.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#anfrage"
            className="inline-flex items-center gap-2 bg-pm-coral text-white px-7 py-3.5 rounded-xl font-bold text-[15px] hover:bg-pm-coral-deep transition-colors"
          >
            Informationspaket anfordern →
          </a>
        </div>
      </section>

      {/* ─── SCHRITTE ─── */}
      <section className="bg-white border-t border-pm-line py-20">
        <div className="max-w-article mx-auto px-5">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Ablauf
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink mb-12">
            In vier Schritten zur Partnerschaft
          </h2>

          <div className="flex flex-col gap-0">
            {schritte.map((s, i) => (
              <div key={s.titel} className={`flex gap-8 ${i < schritte.length - 1 ? 'pb-10' : ''}`}>
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full border-2 border-pm-taupe flex items-center justify-center flex-shrink-0">
                    <span className="text-[12px] font-bold text-pm-taupe">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  {i < schritte.length - 1 && (
                    <div className="w-px flex-1 bg-pm-line mt-2" />
                  )}
                </div>
                <div className={i < schritte.length - 1 ? 'pb-2' : ''}>
                  <p className="text-[15px] font-bold text-pm-ink mb-1.5">{s.titel}</p>
                  <p className="text-[14px] text-pm-body leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-pm-paper border-t border-pm-line py-16">
        <div className="max-w-article mx-auto px-5">
          <h2 className="text-[22px] font-bold text-pm-ink mb-8">Häufige Fragen</h2>
          <div className="flex flex-col gap-2">
            {[
              { q: 'Brauche ich Erfahrung in der Pflege?', a: 'Nein. Unternehmerisches Denken und Führungskompetenz sind entscheidender als Fachkenntnisse. Das gesamte operative Know-how — Personalgewinnung, Betreuungskoordination, Software — wird im Onboarding vollständig vermittelt.' },
              { q: 'Was kostet eine Primundus-Franchise?', a: 'Der Einstieg beginnt ab 5.500 € — einer der niedrigsten Einstiege im Pflege-Franchise-Bereich. Dazu kommen laufende Systemgebühren anteilig am Umsatz. Alle Zahlen erhalten Sie im Informationspaket.' },
              { q: 'Wie schnell ist der Break-Even?', a: 'Bei 8–12 aktiven Betreuungen à ∅ 300 € Netto/Monat ist die Anlaufphase abgeschlossen. Je nach Region und Vermarktung typischerweise nach 2 bis 4 Monaten.' },
              { q: 'Sind noch Gebiete verfügbar?', a: 'Deutschland ist noch weitgehend offen. Gebiete werden exklusiv und klar abgegrenzt vergeben. Verfügbarkeit Ihrer Wunschregion klären wir im Erstgespräch.' },
              { q: 'Was unterscheidet Primundus von anderen Pflege-Franchises?', a: 'Die meisten Anbieter sind reine Vermittler ohne eigene Software, eigenes Personal oder echte Qualitätssicherung. Primundus ist ein vollständiges Betriebssystem — bewährt, ausgezeichnet und kontinuierlich weiterentwickelt.' },
            ].map((faq) => (
              <details key={faq.q} className="bg-white border border-pm-line rounded-xl overflow-hidden group">
                <summary className="px-6 py-5 flex items-center justify-between gap-3 cursor-pointer list-none select-none hover:bg-[#FDFCFA] transition-colors">
                  <span className="text-[14px] font-semibold text-pm-ink leading-snug">{faq.q}</span>
                  <span className="text-pm-taupe text-[20px] flex-shrink-0 leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1 border-t border-pm-line-soft">
                  <p className="text-[13px] text-pm-body leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <FranchiseFormClient />
    </>
  )
}
