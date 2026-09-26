/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  // 26.09.2026: Render brach den Build ab — „Ran out of memory (used over 8GB) while building your code" (Deploy 8a9ddf4,
  // 12:16). Next startet für die statische Seitenerzeugung je CPU-Kern einen Worker; auf Renders Build-Maschine sind das
  // viele, jeder hält das ganze Bündel plus die Ortsdaten im Speicher — 364 Seiten × viele Worker sprengen 8 GB. Lokal
  // (12 Kerne, Node 18) lag die Spitze bei 3,2 GB. Vier Worker reichen; der Build dauert dafür ein paar Minuten länger.
  experimental: { cpus: 4 },
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
      // 21.09.2026: Fünf alte Adressen liefern 404, obwohl Google sie weiter in den
      // Ergebnissen zeigt — zusammen 249 Impressionen und SECHS echte Klicks, die auf
      // einer Fehlerseite landen. Gefunden beim Durchprüfen aller 205 Seiten mit
      // Impressionen gegen ihren Live-Status.
      //
      // Der wichtigste Fall ist der erste: /24-stunden-pflege/kosten-24-std-pflege rankt
      // für „24 stunden pflege kosten" (26), „kosten 24 stunden pflege" (13), „was kostet
      // eine 24 stunden pflege" (8) — also genau die Anfragen, die /kosten besitzen soll,
      // während /kosten selbst in 13 Monaten keine einzige Impression hatte. Die
      // Weiterleitung gibt dieses Signal dorthin, wo es hingehört.
      //
      // Risikolos, weil die Quellen 404 liefern: Es gibt nichts zu verlieren, nur etwas
      // einzusammeln. (Die Lehre vom 03.09. — nie die stärkere in die schwächere Seite
      // umleiten — greift hier nicht, weil die Quelle gar nicht existiert.)
      // Tote Kreis-/Bezirksseiten auf die Stadtseite (24.09.2026, Martin „go"): null Impressionen in 180 Tagen,
      // während die Kreis-Anfrage auf der Stadtseite landet (Memory landkreise-auf-stadtseiten; Charlottenburg
      // 96 Impressionen auf /24h-pflege-berlin). Seiten gelöscht, STAEDTE bereinigt, Nachbarorte-Links folgen.
      { source: '/24h-pflege-alzey-worms', destination: '/24h-pflege-worms', permanent: true },
      { source: '/24h-pflege-charlottenburg', destination: '/24h-pflege-berlin', permanent: true },
      { source: '/24h-pflege-hochtaunuskreis', destination: '/24h-pflege-bad-homburg', permanent: true },
      { source: '/24h-pflege-rhein-pfalz-kreis', destination: '/24h-pflege-ludwigshafen', permanent: true },
      { source: '/24h-pflege-rheinisch-bergischer-kreis', destination: '/24h-pflege-bergisch-gladbach', permanent: true },
      { source: '/24-stunden-pflege/kosten-24-std-pflege', destination: '/kosten', permanent: true },
      { source: '/24-stunden-pflege/24h-pflege-ablauf', destination: '/ablauf', permanent: true },
      { source: '/pflegekraft-polen-premium', destination: '/pflegekraft-aus-polen', permanent: true },
      { source: '/vermittler-kooperation', destination: '/pflegekraefte-fuer-vermittler', permanent: true },
      { source: '/faqs', destination: '/ratgeber', permanent: true },
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
