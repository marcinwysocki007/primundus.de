// Schnitt und Anzahl aller Bewertungen für die Kundenmails (Kostenrechner, geplante Mails):
// „★★★★★ 4,9 von 5 aus 126 Bewertungen" unter Martas Signatur (Martin 17.09.2026).
// Gleiche Rechnung wie auf /erfahrungen. Stündlich neu, darf von überall gelesen werden.
import { NextResponse } from 'next/server'
import { alleBewertungen, ladeDirekteBewertungen, schnitt, schnittText } from '@/lib/bewertungen'
import { ladeGoogleDaten } from '@/lib/google-bewertungen'

export const revalidate = 3600

export async function GET() {
  const [backend, google] = await Promise.all([ladeDirekteBewertungen(60 * 60), ladeGoogleDaten()])
  const alle = alleBewertungen(google.bewertungen, backend)
  const wert = schnitt(alle)
  return NextResponse.json(
    {
      schnitt: schnittText(wert),
      wert: Math.round(wert * 100) / 100,
      anzahl: alle.length,
      url: 'https://primundus.de/erfahrungen',
      stand: new Date().toISOString(),
    },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': '*',
      },
    },
  )
}
