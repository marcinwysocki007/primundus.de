'use client'

import Link from 'next/link'
import Image from 'next/image'

const ratgeberLinks = [
  { label: 'Pflegegrade', href: '/pflegegrade/' },
  { label: 'Finanzierung', href: '/finanzierung/' },
  { label: 'Organisation', href: '/organisation/' },
  { label: 'Krankheiten', href: '/krankheiten/' },
  { label: 'Alltag & Betreuung', href: '/alltag/' },
  { label: 'Ratgeber Übersicht', href: '/ratgeber/' },
]

const serviceLinks = [
  { label: 'Kostenrechner', href: 'https://kostenrechner.primundus.de', external: true },
  { label: 'Pflegegrad-Rechner', href: '/pflegegrad-rechner/' },
  { label: 'Pflegevertrag-Generator', href: '/pflegevertrag-generator/' },
  { label: 'Vollmacht-Generator', href: '/vollmacht-generator/' },
  { label: 'Anbieter-Vergleich', href: '/anbieter-vergleich/' },
  { label: 'Beratungsgespräch', href: '/beratungsgespraech/' },
  { label: 'Kontakt', href: '/kontakt/' },
  { label: '24h-Pflege', href: '/24-stunden-pflege/' },
  { label: 'Kosten', href: '/kosten/' },
  { label: 'Franchisepartner werden', href: '/franchisepartner/' },
]

const rechtlichLinks = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
  { label: 'Sitemap', href: '/sitemap/' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#3D3D3D] text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-14">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="max-w-sm">
            <Link href="/">
              <h3 className="text-[28px] font-bold mb-3 hover:text-gray-300 transition-colors cursor-pointer">
                Primundus
              </h3>
            </Link>
            <p className="text-[15px] leading-relaxed text-gray-300 mb-6">
              24-Stunden-Pflege & Betreuung mit über 20 Jahren Erfahrung. Testsieger DIE WELT.
              60.000+ erfolgreiche Betreuungen.
            </p>
            {/* Contact + Seal side by side */}
            <div className="flex items-start gap-5">
              <ul className="space-y-2 flex-1">
                <li>
                  <a
                    href="tel:+4989200000830"
                    className="text-[20px] font-bold text-white hover:text-gray-300 transition-colors"
                  >
                    089 200 000 830
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@primundus.de"
                    className="text-[15px] text-gray-300 hover:text-white transition-colors"
                  >
                    info@primundus.de
                  </a>
                </li>
                <li className="text-[13px] text-gray-400 pt-1">Mo – So 8 – 20 Uhr</li>
              </ul>
              <Image
                src="/images/primundus_testsieger-2021.webp"
                alt="Testsieger DIE WELT"
                width={72}
                height={86}
                className="rounded-lg flex-shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">
              Ratgeber
            </h4>
            <ul className="space-y-2">
              {ratgeberLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">
              Service
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-gray-300 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-[14px] text-gray-300 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              {rechtlichLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Primundus
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/datenschutz/"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/impressum/"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
