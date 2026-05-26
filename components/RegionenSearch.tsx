'use client'

import { useState, useEffect, useRef } from 'react'

export interface StadtEntry {
  slug: string
  name: string
  land: string
  plz?: string
  hasPage?: boolean
  isNearby?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props {
  staedte?: any[] // kept for backwards compat with page.tsx; ignored — data comes from API
}

function capitalizeCity(s: string): string {
  return s.trim().replace(/\S+/g, w => w.charAt(0).toUpperCase() + w.slice(1))
}

export function RegionenSearch(_props: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<StadtEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const q = query.trim()

    if (q.length < 2) {
      setResults([])
      setHasSearched(false)
      setError(false)
      if (debounceRef.current) clearTimeout(debounceRef.current)
      return
    }

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      setError(false)

      try {
        const res = await fetch(`/api/orte-suche?q=${encodeURIComponent(q)}`)
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        setResults(data.results ?? [])
      } catch {
        setError(true)
        setResults([])
      } finally {
        setLoading(false)
        setHasSearched(true)
      }
    }, 250)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query])

  const directResults = results.filter(r => !r.isNearby)
  const nearbyResults = results.filter(r => r.isNearby)
  const showNoResults = hasSearched && !loading && !error && results.length === 0 && query.trim().length >= 2
  const showNearby = !loading && nearbyResults.length > 0

  return (
    <div className="mb-14">
      {/* Suchfeld */}
      <div className="bg-white border-2 border-[#E5E3DF] focus-within:border-[#8B7355] rounded-2xl shadow-sm transition-colors">
        <div className="flex items-center gap-3 px-5 py-4">
          {loading ? (
            <svg className="w-5 h-5 text-[#A89279] flex-shrink-0 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3-3-3h4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-[#A89279] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="1.8" />
              <path d="m21 21-4.35-4.35" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Ort oder PLZ eingeben — z. B. München oder 80331"
            className="flex-1 text-[16px] text-[#3D3D3D] placeholder-[#C0BAB2] bg-transparent outline-none"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setResults([]); setHasSearched(false) }}
              className="text-[#C0BAB2] hover:text-[#8B8B8B] transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Direkte Treffer */}
      {directResults.length > 0 && (
        <div className="mt-2 space-y-2">
          {directResults.map(s => (
            <ResultCard key={s.slug} stadt={s} query={query} />
          ))}
        </div>
      )}

      {/* PLZ-Nähe — kein direkter Treffer */}
      {showNearby && (
        <div className="mt-2">
          <p className="text-[12px] text-[#8B8B8B] px-1 mb-2">
            Keine eigene Seite für diese PLZ — Städte in Ihrer Nähe:
          </p>
          <div className="space-y-2">
            {nearbyResults.map(s => (
              <ResultCard key={s.slug} stadt={s} query={query} isNearby />
            ))}
          </div>
          <DirectCTA query={query} className="mt-3" />
        </div>
      )}

      {/* Fehler */}
      {error && (
        <div className="mt-2 bg-white border border-[#E5E3DF] rounded-xl px-5 py-5 shadow-sm">
          <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">Suche nicht verfügbar</p>
          <p className="text-[13px] text-[#8B8B8B] mb-4">
            Kein Problem — starten Sie direkt eine Anfrage oder rufen Sie uns an.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="https://kostenrechner.primundus.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-2.5 px-5 rounded-xl transition-colors"
            >
              Jetzt Anfrage starten →
            </a>
            <a
              href="tel:+4989200000830"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#8B7355] text-[#8B7355] font-semibold text-[14px] py-2.5 px-5 rounded-xl hover:bg-[#F2EDE6] transition-colors"
            >
              089 200 000 830
            </a>
          </div>
        </div>
      )}

      {/* Kein Treffer — Ortsname */}
      {showNoResults && (
        <div className="mt-2 bg-white border border-[#E5E3DF] rounded-xl px-5 py-5 shadow-sm">
          <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">
            Keine eigene Seite für „{capitalizeCity(query)}" — wir vermitteln trotzdem dort
          </p>
          <p className="text-[13px] text-[#8B8B8B] mb-4">
            Primundus ist in ganz Deutschland tätig. Starten Sie direkt eine Anfrage — wir finden die passende Betreuungskraft für Ihre Region.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={`https://kostenrechner.primundus.de?ort=${encodeURIComponent(capitalizeCity(query))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-2.5 px-5 rounded-xl transition-colors"
            >
              Anfrage für {capitalizeCity(query)} starten →
            </a>
            <a
              href="tel:+4989200000830"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#8B7355] text-[#8B7355] font-semibold text-[14px] py-2.5 px-5 rounded-xl hover:bg-[#F2EDE6] transition-colors"
            >
              089 200 000 830
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Ergebnis-Karte ──────────────────────────────────────────────────────────

function ResultCard({ stadt, query, isNearby }: { stadt: StadtEntry; query: string; isNearby?: boolean }) {
  const hasDedicatedPage = stadt.hasPage === true
  const ctaHref = `https://kostenrechner.primundus.de?ort=${encodeURIComponent(stadt.name)}`

  return (
    <div className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4 flex items-center justify-between gap-4 shadow-sm">
      <div className="min-w-0">
        <p className="text-[15px] font-bold text-[#3D3D3D] truncate">
          {stadt.name}
          {isNearby && <span className="ml-2 text-[11px] font-normal text-[#8B8B8B]">in der Nähe</span>}
        </p>
        <p className="text-[12px] text-[#8B8B8B]">{stadt.land}</p>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        {hasDedicatedPage && (
          <a
            href={`/24h-pflege-${stadt.slug}`}
            className="text-[13px] font-semibold text-[#8B7355] border border-[#8B7355] rounded-lg px-3 py-2 hover:bg-[#F2EDE6] transition-colors whitespace-nowrap"
          >
            Infos →
          </a>
        )}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-bold bg-[#E76F63] hover:bg-[#D45F53] text-white rounded-lg px-3 py-2 transition-colors whitespace-nowrap"
        >
          Anfrage starten
        </a>
      </div>
    </div>
  )
}

function DirectCTA({ query, className }: { query: string; className?: string }) {
  const city = capitalizeCity(query)
  return (
    <div className={`bg-[#F8F7F5] border border-[#E5E3DF] rounded-xl px-5 py-4 ${className ?? ''}`}>
      <p className="text-[13px] text-[#5A5A5A] mb-3">
        Ihre genaue Adresse ist kein Problem — wir vermitteln überall in Deutschland.
      </p>
      <a
        href={`https://kostenrechner.primundus.de?ort=${encodeURIComponent(city)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[13px] py-2 px-4 rounded-lg transition-colors"
      >
        Direkte Anfrage starten →
      </a>
    </div>
  )
}
