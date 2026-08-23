'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, MessageSquare, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { label: '24h-Pflege', href: '/24-stunden-pflege' },
  { label: 'Kosten', href: '/kosten' },
  { label: 'Ratgeber', href: '/ratgeber' },
  { label: 'Tools', href: '/tools' },
  { label: 'Regionen', href: '/regionen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Franchise', href: '/franchisepartner' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-pm-line bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Top bar: Logo + Buttons */}
        <div className="h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/primundus_logo_header.webp"
              alt="Primundus"
              width={160}
              height={40}
              className="h-8 md:h-11 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop: phone button */}
            <a
              href="tel:+4989200000830"
              className="hidden md:flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-pm-paper hover:bg-pm-taupe hover:text-white transition-all duration-200 group"
            >
              <Image
                src="/images/marta-kapcio.jpg"
                alt="Marta Kapcio"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
              <Phone className="w-4 h-4 text-pm-taupe group-hover:text-white transition-colors" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 group-hover:text-white/80 leading-tight">
                  Marta Kapcio
                </span>
                <span className="text-sm font-semibold text-[#3D2B1F] group-hover:text-white leading-tight">
                  089 200 000 830
                </span>
              </div>
            </a>

            {/* Desktop: CTA button */}
            <a
              href="https://kostenrechner.primundus.de/?start=1&src=apex-components"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-pm-coral hover:bg-pm-coral-deep text-white font-semibold text-[14px] rounded-full transition-all duration-200 shadow-sm"
            >
              Kosten & Pflegekräfte ansehen
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile: phone icon */}
            <a
              href="tel:+4989200000830"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-pm-paper hover:bg-pm-taupe group transition-all"
              aria-label="Anrufen"
            >
              <Phone className="w-4 h-4 text-pm-taupe group-hover:text-white transition-colors" />
            </a>

            {/* Mobile: CTA icon */}
            <a
              href="https://kostenrechner.primundus.de/?start=1&src=apex-components"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-pm-coral hover:bg-pm-coral-deep transition-all"
              aria-label="Kosten & Pflegekräfte ansehen"
            >
              <MessageSquare className="w-4 h-4 text-white" />
            </a>

            {/* Mobile: hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-pm-paper hover:bg-pm-line transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Navigation"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-pm-ink" />
              ) : (
                <Menu className="w-5 h-5 text-pm-ink" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 pb-3 border-t border-pm-line pt-2">
          {nav.map((item) => {
            const norm = (p: string) => p.replace(/\/$/, '')
            const active = norm(pathname) === norm(item.href) || norm(pathname).startsWith(norm(item.href) + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium transition-colors relative pb-0.5 ${
                  active
                    ? 'text-pm-taupe after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-pm-taupe after:rounded-full'
                    : 'text-pm-body hover:text-pm-taupe'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-pm-line bg-white">
          <nav className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col gap-1">
            {nav.map((item) => {
              const norm = (p: string) => p.replace(/\/$/, '')
            const active = norm(pathname) === norm(item.href) || norm(pathname).startsWith(norm(item.href) + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between py-2.5 border-b border-[#F0EEE9] last:border-0 transition-colors ${
                    active ? 'text-pm-taupe' : 'text-pm-ink hover:text-pm-taupe'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className={`flex items-center gap-2 text-[15px] ${active ? 'font-bold' : 'font-medium'}`}>
                    {active && <span className="w-1 h-5 bg-pm-taupe rounded-full flex-shrink-0" />}
                    {item.label}
                  </span>
                </Link>
              )
            })}
            {/* Contact card */}
            <div className="mt-3 rounded-xl bg-pm-paper border border-pm-line overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-pm-line">
                <div className="relative flex-shrink-0">
                  <Image
                    src="/images/marta-kapcio.jpg"
                    alt="Marta Kapcio"
                    width={44}
                    height={44}
                    className="rounded-full w-11 h-11 object-cover"
                    style={{ objectPosition: '50% 20%' }}
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#5C9F6E] rounded-full border-2 border-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-pm-ink leading-tight">Marta Kapcio</p>
                  <p className="text-[11px] text-pm-mute leading-tight">Pflegeberaterin · Mo – So 8 – 20 Uhr</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3">
                <a
                  href="https://kostenrechner.primundus.de/?start=1&src=apex-components"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-pm-coral hover:bg-pm-coral-deep rounded-full text-[13px] font-bold text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Kosten & Pflegekräfte ansehen
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <div className="flex gap-2">
                  <a
                    href="tel:+4989200000830"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white border border-pm-line rounded-full text-[13px] font-semibold text-pm-ink hover:border-pm-taupe transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-pm-taupe" />
                    Anrufen
                  </a>
                  <a
                    href="https://wa.me/4989200000830?text=Hallo%20Frau%20Wysocki%2C%20ich%20habe%20eine%20R%C3%BCckfrage%3A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366] hover:bg-[#20C05A] rounded-full text-[13px] font-bold text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
