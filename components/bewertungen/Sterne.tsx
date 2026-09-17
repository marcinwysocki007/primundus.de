// Sterne und Quellen-Logos für /erfahrungen (ohne Client-Code, auch in Server-Komponenten nutzbar).
import type { Quelle } from '@/lib/bewertungen'

const STERN = 'M10 1.6l2.47 5.2 5.7.72-4.2 3.93 1.08 5.64L10 14.3l-5.05 2.79 1.08-5.64-4.2-3.93 5.7-.72z'

/** wert darf Nachkommastellen haben (4,8 → fünfter Stern zu 80 % gefüllt). */
export function Sterne({ wert, groesse = 18, label }: { wert: number; groesse?: number; label?: string }) {
  const text = label ?? `${String(Math.round(wert * 10) / 10).replace('.', ',')} von 5 Sternen`
  return (
    <span role="img" aria-label={text} className="inline-flex items-center gap-[2px] align-middle">
      {[0, 1, 2, 3, 4].map((i) => {
        const fuellung = Math.max(0, Math.min(1, wert - i))
        return (
          <svg key={i} viewBox="0 0 20 20" width={groesse} height={groesse} aria-hidden="true" className="flex-none">
            <path d={STERN} className="fill-pm-line" />
            {fuellung > 0 && (
              <path d={STERN} className="fill-pm-gold" style={fuellung < 1 ? { clipPath: `inset(0 ${100 - fuellung * 100}% 0 0)` } : undefined} />
            )}
          </svg>
        )
      })}
    </span>
  )
}

export function GoogleLogo({ groesse = 18 }: { groesse?: number }) {
  return (
    <svg width={groesse} height={groesse} viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

export function TrustpilotLogo({ groesse = 18 }: { groesse?: number }) {
  return (
    <svg width={groesse} height={groesse} viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <path fill="#00B67A" d="M12 2l2.9 6.9L22 9.2l-5.4 4.9L18.2 22 12 18.1 5.8 22l1.6-7.9L2 9.2l7.1-.3z" />
    </svg>
  )
}

// Eigene Marke: Koralle-Kreis mit „P" (kein Bild, damit die Karte ohne Nachladen steht)
export function PrimundusMarke({ groesse = 18 }: { groesse?: number }) {
  return (
    <svg width={groesse} height={groesse} viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <circle cx="12" cy="12" r="12" className="fill-pm-coral" />
      <text x="12" y="16.6" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#fff">P</text>
    </svg>
  )
}

export function QuellenLogo({ quelle, groesse }: { quelle: Quelle; groesse?: number }) {
  if (quelle === 'google') return <GoogleLogo groesse={groesse} />
  if (quelle === 'trustpilot') return <TrustpilotLogo groesse={groesse} />
  return <PrimundusMarke groesse={groesse} />
}

export const QUELLEN_NAME: Record<Quelle, string> = {
  google: 'Google',
  trustpilot: 'Trustpilot',
  primundus: 'Direkt an Primundus',
}
