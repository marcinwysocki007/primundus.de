import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kontakt — persönliche Beratung zur 24h-Pflege | Primundus',
  description: 'Primundus persönlich erreichen: 089 200 000 830 · Mo–So 8–20 Uhr · info@primundus.de. Kostenlose Beratung zur 24-Stunden-Pflege.',
  alternates: { canonical: 'https://primundus.de/kontakt/' },
  openGraph: {
    title: 'Kontakt | Primundus — 24h-Pflege',
    description: 'Primundus persönlich erreichen: 089 200 000 830 · Mo–So 8–20 Uhr.',
    url: 'https://primundus.de/kontakt/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[860px] mx-auto px-5 py-16">

        <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#8B7355] transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-[#3D3D3D]">Kontakt</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-wider text-[#A89279] mb-3">Wir sind für Sie da</p>
        <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
          Persönliche Beratung — kostenlos & unverbindlich
        </h1>
        <p className="text-[17px] text-[#5A5A5A] leading-[1.7] mb-10 max-w-xl">
          Sprechen Sie direkt mit uns. Kein Callcenter, kein Warteschleife — ein echter Ansprechpartner, der Ihre Situation kennt.
        </p>

        {/* Kontakt-Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

          {/* Telefon */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#A89279]">Telefon</p>
                <p className="text-[13px] text-[#8B8B8B]">Mo – So · 8 – 20 Uhr</p>
              </div>
            </div>
            <a
              href="tel:+4989200000830"
              className="text-[28px] font-bold text-[#3D3D3D] hover:text-[#8B7355] transition-colors block mb-4"
            >
              089 200 000 830
            </a>
            <a
              href="tel:+4989200000830"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#E76F63] hover:bg-[#D65E52] text-white font-bold text-[15px] rounded-xl transition-all duration-200"
            >
              <img src="/images/ilka-wysocki_pm-mallorca.webp" alt="Ilka Wysocki" className="w-7 h-7 rounded-full object-cover object-top" />
              Jetzt anrufen
            </a>
          </div>

          {/* E-Mail + Kostenrechner */}
          <div className="flex flex-col gap-5">
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#A89279]">E-Mail</p>
              </div>
              <a
                href="mailto:info@primundus.de"
                className="text-[18px] font-semibold text-[#3D3D3D] hover:text-[#8B7355] transition-colors"
              >
                info@primundus.de
              </a>
            </div>

            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#A89279]">Online</p>
              </div>
              <p className="text-[14px] text-[#5A5A5A] mb-3">Kosten sofort berechnen & Pflegekräfte ansehen</p>
              <a
                href="https://kostenrechner.primundus.de"
                className="text-[15px] font-semibold text-[#8B7355] hover:text-[#5C4033] transition-colors"
              >
                Zum Kostenrechner →
              </a>
            </div>
          </div>
        </div>

        {/* Adresse */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7 mb-10">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#A89279] mb-4">Anschrift</p>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-[15px] text-[#5A5A5A] leading-[1.8]">
              <p className="font-semibold text-[#3D3D3D]">Primundus Deutschland</p>
              <p>Landsberger Str. 155</p>
              <p>80687 München</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-[#F0EBE3] rounded-2xl p-6 text-center">
          <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
            Keine Anfrage zu groß oder zu klein — wir helfen Ihnen gerne dabei, die richtige Lösung für Ihre Situation zu finden. Komplett kostenlos und ohne Verpflichtung.
          </p>
        </div>

      </div>
    </div>
  )
}
