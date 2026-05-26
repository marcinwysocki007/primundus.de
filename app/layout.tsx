import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SiteHeader } from '@/components/layout/Header'
import { SiteFooter } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://primundus.de'),
  title: 'Primundus — 24-Stunden-Pflege | Testsieger & 20 Jahre Erfahrung',
  description:
    'Primundus vermittelt rechtssichere 24h-Pflege zu Hause. Testsieger DIE WELT. Täglich kündbar. Betreuung in 4–7 Tagen. Kostenlose Beratung: 089 200 000 830.',
  openGraph: {
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59V6N7RC');`,
          }}
        />
        {/* GA4 with cookie consent */}
        <Script
          id="ga-consent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  function loadGA() {
    if (window.gaLoaded) return;
    window.gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-W2QEQ18EE7';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-W2QEQ18EE7');
  }
  try {
    var c = localStorage.getItem('cookie-consent');
    if (c && JSON.parse(c).analytics) loadGA();
  } catch(e) {}
  window.addEventListener('cookie-consent-changed', function(e) {
    if (e.detail && e.detail.analytics) loadGA();
  });
})();`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59V6N7RC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CookieConsent />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
