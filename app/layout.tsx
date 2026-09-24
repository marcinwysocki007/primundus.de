import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SiteHeader } from '@/components/layout/Header'
import { SiteFooter } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Sicher } from '@/components/Sicher'
import { JsonLd } from '@/components/JsonLd'
import { siteGraph } from '@/lib/schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://primundus.de'),
  title: 'Primundus — 24-Stunden-Pflege | Testsieger 6× in Folge & 20 Jahre Erfahrung',
  description:
    'Rechtssichere 24h-Pflege zu Hause mit angestellten Betreuungskräften. 6× Testsieger DIE WELT. Täglich kündbar. Anreise in 3 Tagen möglich. Beratung: 089 200 000 830.',
  openGraph: {
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <JsonLd data={siteGraph()} />
        {/* Consent Mode (24.09.2026, Martin: „mach … so, dass es für uns bestmöglich ist"): VOR dem Tag Manager steht die
            Grundeinstellung „abgelehnt". Die Google-Tags im Container (GA4, Ads, Conversion-Verknüpfung) setzen dann ohne
            Zustimmung keine Cookies; Clarity bekommt dieselbe Wahl über seine Consent-Schnittstelle (consentv2) — ohne
            Zustimmung ohne Cookies. Den gemeinsamen Container fassen wir dafür nicht an. Die Wahl aus der Cookie-Leiste kommt als
            Update — sofort aus dem Speicher und später über das Ereignis cookie-consent-changed (lib/cookie-consent.ts).
            Der frühere eigene GA-Lader ist weg: Der Tag Manager lädt G-W2QEQ18EE7 selbst, zwei Lader zählten doppelt.
            Der Rechner (kostenrechner.primundus.de) nutzt denselben Container, setzt aber keine Grundeinstellung — dort gilt
            „nicht gesetzt" als erteilt, die Messung dort bleibt unverändert. */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
function primundusConsent(c) {
  return {
    analytics_storage: c && c.analytics ? 'granted' : 'denied',
    ad_storage: c && c.marketing ? 'granted' : 'denied',
    ad_user_data: c && c.marketing ? 'granted' : 'denied',
    ad_personalization: c && c.marketing ? 'granted' : 'denied'
  };
}
window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments);};
function primundusClarity(c) {
  try {
    window.clarity('consentv2', {
      ad_Storage: c && c.marketing ? 'granted' : 'denied',
      analytics_Storage: c && c.analytics ? 'granted' : 'denied'
    });
  } catch (e) {}
}
var gespeichert = null;
try { gespeichert = JSON.parse(localStorage.getItem('cookie-consent') || 'null'); } catch (e) {}
gtag('consent', 'default', primundusConsent(null));
if (gespeichert) gtag('consent', 'update', primundusConsent(gespeichert));
primundusClarity(gespeichert);
window.addEventListener('cookie-consent-changed', function (e) {
  gtag('consent', 'update', primundusConsent(e && e.detail));
  primundusClarity(e && e.detail);
});`,
          }}
        />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59V6N7RC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Sicher name="Kopfzeile"><SiteHeader /></Sicher>
        <main>{children}</main>
        <Sicher name="Fußzeile"><SiteFooter /></Sicher>
        <Sicher name="Cookie-Hinweis"><CookieConsent /></Sicher>
        <Sicher name="WhatsApp"><WhatsAppFloat /></Sicher>
      </body>
    </html>
  )
}
