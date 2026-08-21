// lib/schema.ts — zentraler Entity-Graph für primundus.de (JSON-LD).
// Wird EINMAL im Root-Layout injiziert und gilt damit auf allen Seiten.
// Seiten-Schemas referenzieren die Organisation über ORG_ID statt eigene
// (teils widersprüchliche) Organization-Nodes zu definieren.
//
// Faktenlage (Betreiber-bestätigt 21.08.2026):
// - Rechtsträger: PRIMUNDUS Sp. z o.o. (KRS 0001259402, NIP 7011326714),
//   Sitz Warschau, deutsche Anschrift Landsberger Str. 155, 80687 München
// - Gründerin/Geschäftsführung: Karolina Jakubowska
// - KEIN foundingDate: das Gründungsjahr der heutigen Gesellschaft ist nicht 2006;
//   korrekt ist „Erfahrung der Firmengruppe seit 2006" (nur als Beschreibung).
// - sameAs: NUR verifizierte, existierende Profile (GBP/ProvenExpert-URLs folgen
//   nach Bestätigung durch den Betreiber — nichts erfinden).
import { TELEFON_E164, AWARD } from '@/lib/fakten'

export const ORG_ID = 'https://primundus.de/#organization'
export const WEBSITE_ID = 'https://primundus.de/#website'
export const PERSON_KAROLINA_ID = 'https://primundus.de/#karolina-jakubowska'

export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Primundus',
        legalName: 'PRIMUNDUS Sp. z o.o.',
        url: 'https://primundus.de',
        logo: {
          '@type': 'ImageObject',
          url: 'https://primundus.de/images/primundus_logo_header.webp',
        },
        image: 'https://primundus.de/images/og-default.jpg',
        telephone: TELEFON_E164,
        email: 'info@primundus.de',
        description:
          'Anbieter für 24-Stunden-Pflege und Betreuung zu Hause mit eigenen, bei der Unternehmensgruppe angestellten Betreuungskräften (Entsendemodell mit A1-Bescheinigung). Die Firmengruppe bringt Erfahrung in der häuslichen Betreuung seit 2006 mit — über 60.000 Betreuungen.',
        founder: { '@id': PERSON_KAROLINA_ID },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Landsberger Str. 155',
          postalCode: '80687',
          addressLocality: 'München',
          addressCountry: 'DE',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: TELEFON_E164,
          contactType: 'customer service',
          areaServed: 'DE',
          availableLanguage: ['de'],
        },
        award: AWARD,
        sameAs: [
          'https://kostenrechner.primundus.de',
          'https://www.goyellow.de/home/altenpflegeheim-primundus-muenchen--4nvssd.html',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: 'Primundus',
        url: 'https://primundus.de',
        publisher: { '@id': ORG_ID },
        inLanguage: 'de-DE',
      },
      {
        '@type': 'Person',
        '@id': PERSON_KAROLINA_ID,
        name: 'Karolina Jakubowska',
        jobTitle: 'Gründerin & Geschäftsführerin',
        worksFor: { '@id': ORG_ID },
        knowsAbout: ['24-Stunden-Pflege', 'häusliche Betreuung', 'Entsendemodell', 'Betreuungskräfte'],
      },
    ],
  }
}
