/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  // 14.09.2026: Landingpage fuer Vermittler als eigenstaendiges HTML (eigener Kopf und Fuss
  // fuer Partner, kein Kunden-Header). Quelle: public/pflegekraefte-fuer-vermittler/.
  async rewrites() {
    return [
      { source: '/pflegekraefte-fuer-vermittler', destination: '/pflegekraefte-fuer-vermittler/index.html' },
      { source: '/pflegekraefte-fuer-vermittler/agb', destination: '/pflegekraefte-fuer-vermittler/agb/index.html' },
    ]
  },
  async redirects() {
    return [
      // 14.09.2026: /partner-werden hiess die Seite nur einen Vormittag lang (Martin: „umbenennen,
      // auch die URL"). Alte Links (Tests, Uebergaben) landen auf der neuen Adresse, Query bleibt.
      { source: '/partner-werden', destination: '/pflegekraefte-fuer-vermittler', permanent: true },
      { source: '/partner-werden/agb', destination: '/pflegekraefte-fuer-vermittler/agb', permanent: true },
      // 20.09.2026 (Martins Freigabe „go fuer das Ersetzen der alten Versionen"): zwei Seiten, die dasselbe
      // Thema schwaecher abdecken, gehen in die neue Fassung. /alzheimer-betreuung-zuhause hatte 310
      // Impressionen auf Position 72,9 und keinen Klick, /demenz-pflege-zuhause 2.676 auf 29,1;
      // /pflegeheim-kostenvergleich (alter Rechner, 0 Impressionen) geht in die neue Bundesland-Seite.
      { source: '/alzheimer-betreuung-zuhause', destination: '/demenz-pflege-zuhause', permanent: true },
      { source: '/alzheimer-betreuung-zuhause/', destination: '/demenz-pflege-zuhause/', permanent: true },
      { source: '/pflegeheim-kostenvergleich', destination: '/pflegeheim-kosten-deutschland', permanent: true },
      { source: '/pflegeheim-kostenvergleich/', destination: '/pflegeheim-kosten-deutschland/', permanent: true },
      // 03.09.2026: Jahres-URL in die Evergreen-Seite (3 gegen 49 Impressionen,
      // kein eigener Inhalt; Jahreszahl gehoert in den Titel, nicht in den Slug)
      { source: '/pflegegrade-2025', destination: '/pflegegrade', permanent: true },
      { source: '/pflegegrade-2025/', destination: '/pflegegrade/', permanent: true },
      {
        source: '/pflegegeld-2025',
        destination: '/pflegegeld',
        permanent: true,
      },
      {
        source: '/pflegegeld-2025/',
        destination: '/pflegegeld/',
        permanent: true,
      },
      // 09.09.2026: Die ChatGPT-Anzeige (OpenAI Ads) zeigt auf die Startseite und
      // laesst sich bis zur Unternehmensverifizierung nicht umstellen. Besucher aus
      // ChatGPT gehen deshalb direkt in den Kostenrechner; die UTM-Parameter bleiben
      // erhalten (Next reicht die Query durch), Pixel und Analytik sehen die Herkunft.
      {
        source: '/',
        has: [{ type: 'query', key: 'utm_source', value: 'chatgpt' }],
        destination: 'https://kostenrechner.primundus.de/',
        permanent: false,
      },
      // 17.09.2026 (Martin): Wer Kosten berechnen will, landet direkt im Formular des Rechners,
      // mit Quelle. /eigenanteil-rechner leitete bisher nur im Browser um (Server antwortete 200).
      {
        source: '/kostenrechner',
        destination: 'https://kostenrechner.primundus.de/?start=1&src=apex-kostenrechner',
        permanent: false,
      },
      {
        source: '/kostenrechner/',
        destination: 'https://kostenrechner.primundus.de/?start=1&src=apex-kostenrechner',
        permanent: false,
      },
      {
        source: '/eigenanteil-rechner',
        destination: 'https://kostenrechner.primundus.de/?start=1&src=apex-eigenanteil-rechner',
        permanent: false,
      },
      {
        source: '/eigenanteil-rechner/',
        destination: 'https://kostenrechner.primundus.de/?start=1&src=apex-eigenanteil-rechner',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
