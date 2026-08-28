'use client'

import Link from 'next/link'
import Image from 'next/image'

const ratgeberLinks = [
  { label: 'Pflegegrade', href: '/pflegegrade' },
  { label: 'Finanzierung', href: '/finanzierung' },
  { label: 'Organisation', href: '/organisation' },
  { label: 'Krankheiten', href: '/krankheiten' },
  { label: 'Alltag & Betreuung', href: '/alltag' },
  { label: 'Ratgeber Übersicht', href: '/ratgeber' },
]

const serviceLinks = [
  { label: 'Kostenrechner', href: 'https://kostenrechner.primundus.de', external: true },
  { label: 'Pflegegrad-Rechner', href: '/pflegegrad-rechner' },
  { label: 'Pflegevertrag-Generator', href: '/pflegevertrag-generator' },
  { label: 'Vollmacht-Generator', href: '/vollmacht-generator' },
  // 27.08.2026 ergänzt. Diese drei Werkzeuge funktionieren, waren aber nur
  // über die Tools-Übersicht erreichbar — ein Klick tiefer — und hatten
  // deshalb in 90 Tagen NULL Impressionen. Der Vergleich ist eindeutig: Was
  // hier im Footer steht, rankt (Vollmacht-Generator Position 6,5,
  // Anbieter-Vergleich 10,1); was nur unter /tools hängt, findet niemand.
  { label: 'Zuschuss-Rechner', href: '/zuschuss-rechner' },
  { label: 'Pflegeheim-Kostenvergleich', href: '/pflegeheim-kostenvergleich' },
  { label: 'Checkliste Pflegeübernahme', href: '/checkliste-pflegeuebernahme' },
  { label: 'Beratungsgespräch', href: '/beratungsgespraech' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: '24h-Pflege', href: '/24-stunden-pflege' },
  { label: 'Kosten', href: '/kosten' },
  // 27.08.2026 ergänzt: /leistungen und /ablauf waren weder im Header noch im
  // Footer verlinkt — die einzigen beiden Kernseiten ganz ohne sitewide Link.
  // Beide stehen bei Google als „Duplikat" und wurden seit Juli nicht gecrawlt.
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Ablauf', href: '/ablauf' },
  { label: 'Franchisepartner werden', href: '/franchisepartner' },
]

const vergleichLinks = [
  // 28.08.2026 ergaenzt. Befund aus der internen Link-Pruefung: /qualitaet,
  // /rechtssicher und die drei Wettbewerbsvergleiche hatten je EINEN
  // eingehenden internen Link — und in 90 Tagen keine einzige Auslieferung.
  // Die URL-Pruefung sagt fuer /qualitaet und /rechtssicher woertlich
  // „URL ist Google nicht bekannt": nie gecrawlt, als verweisende Seite
  // kennt Google nur die Sitemap. Zum Vergleich: /anbieter-vergleich hat
  // 362 interne Links und steht auf Position 12,4 bei 400 Impressionen.
  // Der Unterschied ist nicht der Inhalt, sondern die Erreichbarkeit.
  { label: 'Anbieter-Vergleich', href: '/anbieter-vergleich' },
  { label: 'Qualität & Standards', href: '/qualitaet' },
  { label: 'Rechtssicherheit', href: '/rechtssicher' },
  { label: 'Pflegehelden-Alternative', href: '/pflegehelden-alternative' },
  { label: 'Promedica24-Alternative', href: '/promedica24-alternative' },
  { label: 'Hausengel-Alternative', href: '/hausengel-alternative' },
]

const rechtlichLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
  { label: 'Sitemap', href: '/sitemap' },
]

export function SiteFooter() {
  return (
    <footer className="bg-pm-ink text-white">
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
              24-Stunden-Pflege & Betreuung mit 20 Jahren Erfahrung. Testsieger DIE WELT.
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              Vergleich & Qualität
            </h4>
            <ul className="space-y-2">
              {vergleichLinks.map((l) => (
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

        {/* Google Bevorzugte Quellen — Leser können Primundus in der
            Google-Suche als bevorzugte Quelle markieren (wirkt in Top Stories
            und AI Overviews). Offizielles Badge, Doku:
            developers.google.com/search/docs/appearance/preferred-sources */}
        <div className="pb-6">
          <a
            href="https://www.google.com/preferences/source?q=primundus.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <img
              src="/images/google-bevorzugte-quelle.png"
              alt="Primundus bei Google als bevorzugte Quelle hinzufügen"
              width={169}
              height={53}
              loading="lazy"
              className="h-[44px] w-auto"
            />
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors max-w-[240px] leading-snug">
              Unsere Ratgeber öfter in Ihrer Google-Suche sehen
            </span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Primundus
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/datenschutz"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/impressum"
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
