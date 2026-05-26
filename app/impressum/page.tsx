import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum | Primundus',
  description: 'Impressum und Kontaktdaten der Primundus — 24-Stunden-Pflege & Betreuung.',
  alternates: { canonical: 'https://primundus.de/impressum/' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[860px] mx-auto px-5 py-16">

        <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#8B7355] transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-[#3D3D3D]">Impressum</span>
        </nav>

        <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-10">
          Impressum
        </h1>

        <div className="space-y-8">

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-5">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-semibold text-[#3D3D3D] mb-2">Anschrift Deutschland</h3>
                <p className="text-[15px] text-[#5A5A5A]">Primundus Deutschland</p>
                <p className="text-[15px] text-[#5A5A5A]">Landsberger Str. 155</p>
                <p className="text-[15px] text-[#5A5A5A]">80687 München</p>
              </div>
              <div className="border-t border-[#E5E3DF] pt-6">
                <h3 className="text-[15px] font-semibold text-[#3D3D3D] mb-2">Rechtlicher Sitz</h3>
                <p className="text-[15px] text-[#5A5A5A] font-semibold mb-1">Primundus ist eine Marke von:</p>
                <p className="text-[15px] text-[#5A5A5A]">Vitanas Group spolka zoo</p>
                <p className="text-[15px] text-[#5A5A5A]">Poznanska 21/48</p>
                <p className="text-[15px] text-[#5A5A5A]">00-685 Warszawa, Polen</p>
                <div className="mt-3 space-y-1">
                  <p className="text-[14px] text-[#8B8B8B]">NIP (Steuer-ID): 7011172300</p>
                  <p className="text-[14px] text-[#8B8B8B]">REGON: 526823071</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-5">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8B7355] flex-shrink-0" />
                <a href="tel:+4989200000830" className="text-[15px] text-[#3D3D3D] hover:text-[#8B7355] font-semibold transition-colors">
                  +49 89 200 000 830
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8B7355] flex-shrink-0" />
                <a href="mailto:info@primundus.de" className="text-[15px] text-[#3D3D3D] hover:text-[#8B7355] transition-colors">
                  info@primundus.de
                </a>
              </div>
              <p className="text-[14px] text-[#8B8B8B]">Mo – So · 8 – 20 Uhr</p>
            </div>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-3">Vertretungsberechtigte Geschäftsführung</h2>
            <p className="text-[15px] text-[#3D3D3D] font-semibold">Kamila Bilska</p>
            <p className="text-[15px] text-[#5A5A5A] mt-1">Erreichbar über die oben genannten Kontaktdaten.</p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-3">Registereintrag</h2>
            <div className="space-y-1 text-[15px] text-[#5A5A5A]">
              <p>Registergericht: Warszawa</p>
              <p>REGON-Nummer: 526823071</p>
              <p>NIP (Steuer-ID): 7011172300</p>
            </div>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-[15px] text-[#3D3D3D] font-semibold">Kamila Bilska</p>
            <p className="text-[15px] text-[#5A5A5A]">Geschäftsführung Primundus</p>
            <p className="text-[15px] text-[#5A5A5A]">Landsberger Str. 155, 80687 München</p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7 space-y-5">
            <h2 className="text-[20px] font-bold text-[#3D3D3D]">Haftungsausschluss</h2>
            <div>
              <h3 className="text-[15px] font-semibold text-[#3D3D3D] mb-2">Haftung für Inhalte</h3>
              <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-[#3D3D3D] mb-2">Haftung für Links</h3>
              <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-[#3D3D3D] mb-2">Urheberrecht</h3>
              <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-3">Streitschlichtung</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7] mb-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
