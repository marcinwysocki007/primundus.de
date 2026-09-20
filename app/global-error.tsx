'use client'

// Letzte Fehlergrenze (20.09.2026), greift nur, wenn das Layout selbst ausfällt. Rendert ein eigenes Dokument mit Canonical auf
// die eigene Adresse, damit Google die Seite nie als Duplikat einer fremden Fehlerseite liest.
export default function GlobalerFehler({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const adresse = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://primundus.de/'
  return (
    <html lang="de">
      <head>
        <title>Primundus: kurze Störung</title>
        <link rel="canonical" href={adresse} />
      </head>
      <body style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#F8F7F5', color: '#1C1C1C', margin: 0 }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '96px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 30, lineHeight: 1.15, letterSpacing: '-0.02em' }}>Diese Seite konnte gerade nicht geladen werden</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#3A3834', marginTop: 16 }}>
            Ein Klick lädt sie neu. Oder rufen Sie uns an: <a href="tel:+4989200000830" style={{ color: '#1C1C1C', fontWeight: 600 }}>089 200 000 830</a>.
          </p>
          <p style={{ marginTop: 28 }}>
            <button type="button" onClick={reset} style={{ minHeight: 52, padding: '0 24px', borderRadius: 999, border: 0, background: '#E76F63', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Seite neu laden
            </button>
            <a href="/" style={{ display: 'inline-block', marginLeft: 12, minHeight: 52, lineHeight: '52px', padding: '0 24px', borderRadius: 999, background: '#fff', color: '#1C1C1C', fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 1px 2px rgba(28,28,28,.04), 0 14px 38px -16px rgba(28,28,28,.18)' }}>
              Zur Startseite
            </a>
          </p>
        </div>
      </body>
    </html>
  )
}
