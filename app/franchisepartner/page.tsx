import type { Metadata } from 'next'
import Image from 'next/image'
import FranchiseFormClient from './FranchiseFormClient'

export const metadata: Metadata = {
  title: 'Franchisepartner werden — 24h-Pflege | Primundus',
  description: 'Franchisepartner der Testsieger-Marke Primundus werden. Wachsender Pflegemarkt, eigene Software, tägliche Kündbarkeit — Informationspaket jetzt anfordern.',
  alternates: { canonical: 'https://primundus.de/franchisepartner/' },
  openGraph: {
    title: 'Franchisepartner werden | Primundus 24h-Pflege',
    description: 'Werden Sie Partner der Testsieger-Marke Primundus im wachsenden 24h-Pflegemarkt.',
    url: 'https://primundus.de/franchisepartner/',
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
      { '@type': 'ListItem', position: 2, name: 'Franchisepartner werden', item: 'https://primundus.de/franchisepartner/' },
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
  { titel: 'Erstgespräch', text: 'Ein 30-minütiges Gespräch mit Mateusz Wysocki persönlich — offen, ohne Skript, ohne Verpflichtung.' },
  { titel: 'Informationspaket', text: 'Vollständiges Exposé mit Kennzahlen, Gebührenstruktur, Gebietsanalyse und Mustervertrag.' },
  { titel: 'Prüfphase', text: 'Gemeinsame Due Diligence. Sie prüfen uns — wir prüfen Sie. Letter of Intent bei Übereinstimmung.' },
  { titel: 'Onboarding', text: 'Einarbeitung in München: Software, Personalgewinnung, Vertrieb — bis zum eigenständigen Start.' },
]

export default function FranchisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      {/* ─── HERO ─── */}
      <section className="bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 pt-10 pb-20">
          <nav className="text-sm text-[#8B8B8B] mb-12 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">Franchisepartner werden</span>
          </nav>

          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-5">
            Franchise-Opportunity
          </p>

          <h1 className="text-[36px] md:text-[50px] font-bold text-[#3D3D3D] leading-[1.1] mb-6 max-w-[680px]">
            Partner werden bei Primundus —<br className="hidden md:block" />
            dem Testsieger der 24h-Pflege
          </h1>

          <p className="text-[17px] text-[#5A5A5A] leading-relaxed max-w-[580px] mb-4">
            Der deutsche Pflegemarkt wächst strukturell — und hat noch wenige Anbieter,
            die Qualität, Technologie und echte Transparenz vereinen.
            Primundus ist einer davon.
          </p>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed max-w-[580px] mb-10">
            Als Franchisepartner bauen Sie auf einem System auf, das von Mateusz Wysocki
            entwickelt wurde — ehemaliger Mitgründer von Pflegehelden, dem größten 24h-Anbieter
            Deutschlands. Alle Kinderkrankheiten der Branche bereits gelöst.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 bg-[#E76F63] text-white px-7 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#D4625A] transition-colors"
            >
              Informationspaket anfordern
            </a>
            <a
              href="#markt"
              className="text-[14px] font-semibold text-[#8B7355] hover:text-[#7A6347] transition-colors"
            >
              Marktdaten ansehen ↓
            </a>
          </div>

          {/* Testsieger strip */}
          <div className="mt-14 pt-8 border-t border-[#E5E3DF] flex flex-wrap items-center gap-8">
            <Image
              src="/images/primundus_testsieger-2021.webp"
              alt="Primundus Testsieger DIE WELT"
              width={72}
              height={72}
              className="object-contain"
            />
            <div className="h-8 w-px bg-[#E5E3DF] hidden sm:block" />
            <div>
              <p className="text-[13px] font-semibold text-[#3D3D3D]">Testsieger DIE WELT</p>
              <p className="text-[12px] text-[#8B8B8B]">Deutschlands größter 24h-Pflege-Vergleichstest</p>
            </div>
            <div className="h-8 w-px bg-[#E5E3DF] hidden sm:block" />
            <div>
              <p className="text-[13px] font-semibold text-[#3D3D3D]">ab 5.500 € Einstieg</p>
              <p className="text-[12px] text-[#8B8B8B]">Einer der niedrigsten im Pflege-Franchise</p>
            </div>
            <div className="h-8 w-px bg-[#E5E3DF] hidden sm:block" />
            <div>
              <p className="text-[13px] font-semibold text-[#3D3D3D]">∅ 300 € Netto/Kunde</p>
              <p className="text-[12px] text-[#8B8B8B]">Break-Even ab 8–12 Betreuungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNER ─── */}
      <section className="bg-white border-t border-b border-[#E5E3DF] py-10">
        <div className="max-w-[860px] mx-auto px-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-7">
            Netzwerk & Partner
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://pflegebund.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 rounded-xl border border-[#E5E3DF] hover:border-[#8B7355] transition-colors bg-[#FDFCFA]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white border border-[#E5E3DF] flex items-center justify-center">
                <div className="text-center leading-none px-1">
                  <span className="block text-[9px] font-black text-[#2D6A9F] tracking-tight uppercase">Pflege</span>
                  <span className="block text-[9px] font-black text-[#1A3A5C] tracking-tight uppercase">Bund</span>
                  <span className="block text-[8px] text-[#8B8B8B] font-medium">.eu</span>
                </div>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors">pflegebund.eu</p>
                <p className="text-[12px] text-[#8B8B8B] leading-snug mt-0.5">Europäisches Pflegenetzwerk · Qualitätsstandards & Fachkräfte-Pool</p>
              </div>
            </a>
            <a
              href="https://mamamia.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 rounded-xl border border-[#E5E3DF] hover:border-[#8B7355] transition-colors bg-[#FDFCFA]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white border border-[#E5E3DF] flex items-center justify-center">
                <div className="text-center leading-none">
                  <span className="block text-[11px] font-black text-[#E76F63] tracking-tight">mama</span>
                  <span className="block text-[11px] font-black text-[#3D3D3D] tracking-tight">mia</span>
                  <span className="block text-[8px] text-[#8B8B8B] font-medium">.de</span>
                </div>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors">mamamia.de</p>
                <p className="text-[12px] text-[#8B8B8B] leading-snug mt-0.5">Digitale Pflegeplattform · Gemeinsames Ökosystem für Familien & Partner</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── MARKT ─── */}
      <section id="markt" className="bg-[#F8F7F5] py-20">
        <div className="max-w-[860px] mx-auto px-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-5">
            Marktlage
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#3D3D3D] mb-5 max-w-[560px]">
            Ein Markt, der strukturell wächst — unabhängig von Konjunktur
          </h2>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed max-w-[580px] mb-12">
            Demografischer Wandel ist kein Risiko, sondern ein verlässlicher Rückenwind.
            Die Babyboomer-Generation erreicht das Pflegealter. Bis 2035 wird die Zahl
            der Pflegebedürftigen in Deutschland auf über 6,4 Millionen steigen —
            ein Zuwachs von 21 % gegenüber heute.
          </p>

          {/* Clean bar chart */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7 mb-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-6">
              Pflegebedürftige in Deutschland (in Millionen)
            </p>
            <div className="space-y-3">
              {marketBars.map((bar) => (
                <div key={bar.year} className="flex items-center gap-4">
                  <span className={`text-[12px] font-bold w-9 flex-shrink-0 tabular-nums ${bar.current ? 'text-[#3D7A5C]' : bar.forecast ? 'text-[#8B7355]' : 'text-[#C0BDB8]'}`}>
                    {bar.year}
                  </span>
                  <div className="flex-1 bg-[#F0EDE8] rounded-full h-7 overflow-hidden">
                    <div
                      className={`h-full rounded-full flex items-center px-3 ${bar.current ? 'bg-[#3D7A5C]' : bar.forecast ? 'bg-[#8B7355]' : 'bg-[#D4C8BC]'}`}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#E5E3DF] border border-[#E5E3DF] rounded-2xl overflow-hidden">
            {[
              { n: 'Jede 3. Familie', sub: 'in Deutschland ist von einem Pflegefall betroffen oder wird es bald sein' },
              { n: '500.000+', sub: 'Haushalte mit heutigem Bedarf an 24h-Betreuung — bei noch wenigen Qualitätsanbietern' },
              { n: '∅ 300 € netto', sub: 'Ertrag pro Betreuungsverhältnis pro Monat — stabiler, wiederkehrender Cashflow' },
            ].map((c) => (
              <div key={c.n} className="bg-white px-6 py-7">
                <p className="text-[22px] font-bold text-[#8B7355] mb-2">{c.n}</p>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GRÜNDER ─── */}
      <section className="bg-white border-t border-[#E5E3DF] py-20">
        <div className="max-w-[860px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
            <div className="relative">
              <Image
                src="/images/Teamblid-Primundus-Mallorca.webp"
                alt="Primundus Team"
                width={260}
                height={300}
                className="rounded-2xl object-cover w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-3 -right-3 bg-white border border-[#E5E3DF] rounded-xl p-2.5 shadow-sm">
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
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-5">
                Der Gründer
              </p>
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#3D3D3D] mb-6">
                Mateusz Wysocki
              </h2>
              <div className="space-y-4 text-[15px] text-[#5A5A5A] leading-relaxed">
                <p>
                  Mateusz Wysocki ist kein Quereinsteiger. Als Mitgründer von{' '}
                  <strong className="text-[#3D3D3D] font-semibold">Pflegehelden</strong> hat er
                  Deutschlands größten 24h-Pflege-Anbieter mit aufgebaut — und dabei aus erster
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
                {['Mitgründer Pflegehelden', 'Testsieger DIE WELT', 'Eigene Software', 'Eigenes Personal'].map((tag) => (
                  <span key={tag} className="text-[12px] text-[#8B7355] border border-[#D4C5B0] rounded-full px-3 py-1 bg-[#FDFCFA]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UNTERSCHIEDE ─── */}
      <section className="bg-[#F8F7F5] border-t border-[#E5E3DF] py-20">
        <div className="max-w-[860px] mx-auto px-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-5">
            Was Primundus anders macht
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#3D3D3D] mb-5 max-w-[540px]">
            Die Branche hat Probleme. Primundus hat Antworten.
          </h2>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed max-w-[520px] mb-10">
            Jeder Prozess, jede Zeile Code, jeder Vertrag entstand als direkte Reaktion
            auf echte Schwachstellen — aus über 20 Jahren Branchenerfahrung.
          </p>

          <div className="flex flex-col gap-px bg-[#E5E3DF] border border-[#E5E3DF] rounded-2xl overflow-hidden">
            {unterschiede.map((u, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-[#F0EDE8]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#C0504A] mb-1.5">Branche</p>
                  <p className="text-[14px] text-[#5A5A5A]">{u.problem}</p>
                </div>
                <div className="px-6 py-5 bg-[#FDFCFA]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#3D7A5C] mb-1.5">Primundus</p>
                  <p className="text-[14px] text-[#3D3D3D] font-medium">{u.loesung}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAS SIE BEKOMMEN ─── */}
      <section className="bg-white border-t border-[#E5E3DF] py-20">
        <div className="max-w-[860px] mx-auto px-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-5">
            Ihr Paket
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#3D3D3D] mb-10 max-w-[540px]">
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
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B7355]/10 text-[#8B7355] text-[12px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{item.titel}</p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTMENT ─── */}
      <section className="bg-[#F8F7F5] border-t border-[#E5E3DF] py-20">
        <div className="max-w-[860px] mx-auto px-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-5">
            Wirtschaftlichkeit
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#3D3D3D] mb-5 max-w-[500px]">
            Was die Partnerschaft wirtschaftlich bedeutet
          </h2>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed max-w-[520px] mb-10">
            Alle Angaben sind Orientierungswerte. Das vollständige Zahlenwerk
            erhalten Sie im vertraulichen Informationspaket.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden mb-8">
            {[
              { label: 'Einstiegsinvestition', value: 'ab 5.500 €', note: 'Einer der niedrigsten Einstiege im gesamten Pflege-Franchise-Bereich' },
              { label: 'Netto-Ertrag pro Betreuung', value: '∅ 300 € / Monat', note: 'Stabiler, planbarer wiederkehrender Cashflow' },
              { label: 'Break-Even', value: '8–12 Betreuungen', note: 'Typischerweise nach 2–4 Monaten erreichbar' },
              { label: 'Ertragspotenzial (40–60 Betreuungen)', value: '144.000–216.000 € / Jahr', note: '∅ 300 € × Anzahl Kunden × 12 Monate' },
            ].map((row, i, arr) => (
              <div key={row.label} className={`grid grid-cols-[1fr_auto] gap-6 px-7 py-5 ${i < arr.length - 1 ? 'border-b border-[#F0EDE8]' : ''}`}>
                <div>
                  <p className="text-[13px] font-semibold text-[#3D3D3D]">{row.label}</p>
                  <p className="text-[12px] text-[#A89279] mt-0.5">{row.note}</p>
                </div>
                <p className="text-[14px] font-bold text-[#8B7355] whitespace-nowrap self-center">{row.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#anfrage"
            className="inline-flex items-center gap-2 bg-[#E76F63] text-white px-7 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#D4625A] transition-colors"
          >
            Informationspaket anfordern →
          </a>
        </div>
      </section>

      {/* ─── SCHRITTE ─── */}
      <section className="bg-white border-t border-[#E5E3DF] py-20">
        <div className="max-w-[860px] mx-auto px-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-5">
            Ablauf
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#3D3D3D] mb-12">
            In vier Schritten zur Partnerschaft
          </h2>

          <div className="flex flex-col gap-0">
            {schritte.map((s, i) => (
              <div key={s.titel} className={`flex gap-8 ${i < schritte.length - 1 ? 'pb-10' : ''}`}>
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full border-2 border-[#8B7355] flex items-center justify-center flex-shrink-0">
                    <span className="text-[12px] font-bold text-[#8B7355]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  {i < schritte.length - 1 && (
                    <div className="w-px flex-1 bg-[#E5E3DF] mt-2" />
                  )}
                </div>
                <div className={i < schritte.length - 1 ? 'pb-2' : ''}>
                  <p className="text-[15px] font-bold text-[#3D3D3D] mb-1.5">{s.titel}</p>
                  <p className="text-[14px] text-[#5A5A5A] leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F8F7F5] border-t border-[#E5E3DF] py-16">
        <div className="max-w-[860px] mx-auto px-5">
          <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-8">Häufige Fragen</h2>
          <div className="flex flex-col gap-2">
            {[
              { q: 'Brauche ich Erfahrung in der Pflege?', a: 'Nein. Unternehmerisches Denken und Führungskompetenz sind entscheidender als Fachkenntnisse. Das gesamte operative Know-how — Personalgewinnung, Betreuungskoordination, Software — wird im Onboarding vollständig vermittelt.' },
              { q: 'Was kostet eine Primundus-Franchise?', a: 'Der Einstieg beginnt ab 5.500 € — einer der niedrigsten Einstiege im Pflege-Franchise-Bereich. Dazu kommen laufende Systemgebühren anteilig am Umsatz. Alle Zahlen erhalten Sie im Informationspaket.' },
              { q: 'Wie schnell ist der Break-Even?', a: 'Bei 8–12 aktiven Betreuungen à ∅ 300 € Netto/Monat ist die Anlaufphase abgeschlossen. Je nach Region und Vermarktung typischerweise nach 2 bis 4 Monaten.' },
              { q: 'Sind noch Gebiete verfügbar?', a: 'Deutschland ist noch weitgehend offen. Gebiete werden exklusiv und klar abgegrenzt vergeben. Verfügbarkeit Ihrer Wunschregion klären wir im Erstgespräch.' },
              { q: 'Was unterscheidet Primundus von anderen Pflege-Franchises?', a: 'Die meisten Anbieter sind reine Vermittler ohne eigene Software, eigenes Personal oder echte Qualitätssicherung. Primundus ist ein vollständiges Betriebssystem — bewährt, ausgezeichnet und kontinuierlich weiterentwickelt.' },
            ].map((faq) => (
              <details key={faq.q} className="bg-white border border-[#E5E3DF] rounded-xl overflow-hidden group">
                <summary className="px-6 py-5 flex items-center justify-between gap-3 cursor-pointer list-none select-none hover:bg-[#FDFCFA] transition-colors">
                  <span className="text-[14px] font-semibold text-[#3D3D3D] leading-snug">{faq.q}</span>
                  <span className="text-[#8B7355] text-[20px] flex-shrink-0 leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1 border-t border-[#F0EDE8]">
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{faq.a}</p>
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
