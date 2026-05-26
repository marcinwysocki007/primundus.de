import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über Primundus — 20 Jahre Erfahrung in der 24h-Pflege | Primundus',
  description: 'Primundus basiert auf über 20 Jahren Erfahrung in der 24h-Pflege. Testsieger DIE WELT. 60.000+ erfolgreiche Betreuungen. Persönlich, verlässlich, rechtssicher.',
  alternates: { canonical: 'https://primundus.de/ueber-uns/' },
  openGraph: {
    title: 'Über Primundus — 20 Jahre Erfahrung in der 24h-Pflege',
    description: 'Primundus basiert auf über 20 Jahren Erfahrung in der 24h-Pflege. Testsieger DIE WELT. 60.000+ erfolgreiche Betreuungen.',
    url: 'https://primundus.de/ueber-uns/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F7F5]">

      {/* Header */}
      <div className="bg-white border-b border-[#E5E3DF]">
        <div className="max-w-[1100px] mx-auto px-5 py-16">
          <nav className="text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#8B7355] transition-colors">Startseite</Link>
            <span>›</span>
            <span className="text-[#3D3D3D]">Über uns</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-wider text-[#A89279] mb-3">Über Primundus</p>
          <h1 className="text-[32px] md:text-[46px] font-bold text-[#3D3D3D] leading-tight mb-5 max-w-3xl">
            Persönlich. Erfahren. Verlässlich.
          </h1>
          <p className="text-[17px] md:text-[19px] text-[#5A5A5A] leading-[1.7] max-w-2xl">
            Primundus ist eine der erfahrensten Adressen für häusliche 24-Stunden-Pflege in Deutschland — mit über 20 Jahren Erfahrung und mehr als 60.000 erfolgreich begleiteten Betreuungen.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 py-14">

        {/* Fakten */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { zahl: '20+', label: 'Jahre Erfahrung' },
            { zahl: '60.000+', label: 'Betreuungen' },
            { zahl: 'Nr. 1', label: 'Testsieger DIE WELT' },
            { zahl: 'Mo–So', label: '8 – 20 Uhr erreichbar' },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-[#E5E3DF] rounded-2xl p-5 text-center">
              <p className="text-[26px] font-bold text-[#3D3D3D] leading-none">{item.zahl}</p>
              <p className="text-[13px] text-[#8B8B8B] mt-1.5">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Bild + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#F0EBE3]">
              <img
                src="/images/Teamblid-Primundus-Mallorca.webp"
                alt="Das Primundus Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#A89279] mb-3">Wer wir sind</p>
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#3D3D3D] leading-tight mb-5">
              Menschen, die wirklich passen — das ist unser Anspruch
            </h2>
            <p className="text-[16px] text-[#5A5A5A] leading-[1.7] mb-4">
              Primundus basiert auf über 20 Jahren Erfahrung und ist eine der erfahrensten Adressen für häusliche 24-Stunden-Pflege in Deutschland. Wir vermitteln keine anonymen Arbeitskräfte — wir finden Menschen, die zu Ihnen und Ihrer Familie passen.
            </p>
            <p className="text-[16px] text-[#5A5A5A] leading-[1.7] mb-4">
              Hinter jedem Betreuungsverhältnis steht ein persönlicher Ansprechpartner. Unser Team ist Mo–So von 8 bis 20 Uhr erreichbar — nicht als Hotline, sondern als echte Ansprechpartner, die Ihre Situation kennen.
            </p>
            <p className="text-[16px] text-[#5A5A5A] leading-[1.7]">
              Wir arbeiten rechtssicher, transparent und ohne versteckte Kosten. Täglich kündbar — weil wir überzeugen wollen, nicht binden.
            </p>
          </div>
        </div>

        {/* Testsieger */}
        <div className="bg-white border-2 border-[#D4A843] rounded-2xl p-7 md:p-10 mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src="/images/primundus_testsieger-2021.webp"
              alt="Testsieger DIE WELT 2021"
              className="h-[100px] w-[100px] object-contain flex-shrink-0"
            />
            <div>
              <p className="text-[12px] font-bold text-[#D4A843] uppercase tracking-wider mb-1">Testsieger · DIE WELT</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#3D3D3D] leading-tight mb-2">
                Nr. 1 der Pflegekräfte-Vermittler
              </h2>
              <p className="text-[15px] text-[#5A5A5A] mb-3">Deutschlands größter 24h-Pflege Vergleichstest</p>
              <p className="text-[15px] italic text-[#5A5A5A] leading-relaxed border-t border-[#F0EBE3] pt-3">
                „Primundus überzeugte mit der besten Kombination aus Preis, Qualität und Kundenservice."
              </p>
            </div>
          </div>
        </div>

        {/* Was uns unterscheidet */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#A89279] mb-3">Was uns unterscheidet</p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#3D3D3D] leading-tight mb-8">
            Unser Versprechen an Sie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Persönlicher Ansprechpartner',
                text: 'Sie erhalten einen festen Ansprechpartner, der Ihre Situation kennt — kein Callcenter, keine wechselnden Zuständigkeiten.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Täglich kündbar',
                text: 'Keine Mindestlaufzeit, keine Kündigungsfristen. Taggenaue Abrechnung — weil wir durch Qualität überzeugen, nicht durch Vertragsbindung.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Schneller Start',
                text: 'In der Regel können wir innerhalb von 4–7 Tagen eine passende Betreuungskraft organisieren — auch in dringenden Situationen.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: 'Rechtssicher & transparent',
                text: 'Alle Betreuungsverhältnisse werden rechtssicher aufgesetzt. Keine Scheinselbstständigkeit, keine versteckten Kosten.',
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              },
              {
                title: 'Geprüfte Pflegekräfte',
                text: 'Jede Betreuungskraft wird persönlich überprüft. Wir kennen unsere Kräfte und stehen für die Qualität ihrer Arbeit ein.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                title: 'Deutschlandweit',
                text: 'Wir vermitteln Betreuungskräfte in ganz Deutschland — von München bis Hamburg, von der Großstadt bis in ländliche Regionen.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E5E3DF] rounded-2xl p-6 hover:border-[#8B7355] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#8B7355]/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#3D3D3D] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#5A5A5A] leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#8B7355] rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-[24px] md:text-[28px] font-bold text-white mb-3">
            Lernen Sie uns kennen
          </h2>
          <p className="text-[16px] text-white/80 mb-7 max-w-xl mx-auto">
            Sprechen Sie mit uns — kostenlos, unverbindlich und ohne Druck. Wir finden gemeinsam die beste Lösung für Ihre Situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://kostenrechner.primundus.de"
              className="inline-flex items-center justify-center px-7 py-4 bg-[#E76F63] hover:bg-[#D65E52] text-white font-bold text-[16px] rounded-xl transition-all duration-200 shadow-md"
            >
              Kosten & Pflegekräfte ansehen
            </a>
            <a
              href="tel:+4989200000830"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-[16px] rounded-xl transition-all duration-200"
            >
              <img src="/images/ilka-wysocki_pm-mallorca.webp" alt="Ilka Wysocki" className="w-7 h-7 rounded-full object-cover object-top" />
              089 200 000 830
            </a>
          </div>
          <p className="text-[13px] text-white/50 mt-4">Mo – So · 8 – 20 Uhr</p>
        </div>

      </div>
    </div>
  )
}
