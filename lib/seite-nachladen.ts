// Ladefehler eines Programmteils (22.10.2026). Nach jedem Deploy sind die Chunk-Dateien der Vorversion weg. Google lädt eine
// Seite und baut sie oft erst später fertig; fehlt dann der Seiten- oder Layout-Chunk, ersetzte unsere Fehlergrenze den ganzen
// Artikel durch „Kurze Störung“, und genau diese Fassung kam in den Index (/demenz-pflege-zuhause, Abruf 04.10.; fünf Seiten als
// Duplikat von /krankheiten, Abruf 15.10.). Statt der Fehlerseite holen wir bei einem Ladefehler die aktuelle Fassung der Seite.

export function istLadefehler(error: unknown): boolean {
  const name = (error as { name?: string } | null)?.name ?? ''
  const text = String((error as { message?: string } | null)?.message ?? error ?? '')
  return (
    name === 'ChunkLoadError' ||
    /Loading (CSS )?chunk|Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module/i.test(text)
  )
}

export type AktuelleSeite = { titel: string | null; canonical: string | null; stile: string[]; main: string | null; body: string | null }

// Skripte fallen weg (sie liefen ohnehin nicht), strukturierte Daten bleiben für Suchmaschinen stehen.
const ohneSkripte = (html: string) => html.replace(/<script(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/gi, '')

const titelText = (roh: string | undefined) =>
  roh ? new DOMParser().parseFromString(`<p>${roh}</p>`, 'text/html').body.textContent : null

export async function aktuelleSeite(): Promise<AktuelleSeite> {
  const antwort = await fetch(window.location.href, { cache: 'no-store', credentials: 'same-origin', headers: { accept: 'text/html' } })
  if (!antwort.ok) throw new Error(`Seite nicht geladen: ${antwort.status}`)
  const html = await antwort.text()
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1]
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1]
  return {
    titel: titelText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]),
    canonical: html.match(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/i)?.[1] ?? null,
    stile: Array.from(html.matchAll(/<link[^>]+rel="stylesheet"[^>]*href="([^"]+)"/gi), (m) => m[1]),
    main: main ? ohneSkripte(main) : null,
    body: body ? ohneSkripte(body) : null,
  }
}
