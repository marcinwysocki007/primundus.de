'use client'

// Suche, Filter und Sortierung für die Kreistabelle auf /pflege-im-kreis (02.10.2026).
//
// Die 400 Zeilen rendert der Server (KreisTabelle.tsx) als festes HTML — Google und Leser ohne JavaScript sehen alle
// Kreise, und jeder Kreis hat seinen Anker #kreis-<Kreisschlüssel>. Dieser Baustein liest nur die data-Attribute der
// Zeilen, blendet aus und sortiert um; die Daten selbst kommen nicht in das Browser-Paket.
import { useEffect, useRef, useState } from 'react'

const normal = (s: string) =>
  s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, ' ').trim()

const SORTIERUNGEN = [
  { wert: 'land', text: 'Bundesland, dann Name' },
  { wert: 'p-ab', text: 'Pflegebedürftige: meiste zuerst' },
  { wert: 'z-ab', text: 'Zu Hause versorgt: höchster Anteil zuerst' },
  { wert: 'z-auf', text: 'Zu Hause versorgt: niedrigster Anteil zuerst' },
  { wert: 'd-auf', text: 'Dauerpflegeplätze: wenigste zuerst' },
  { wert: 'd-ab', text: 'Dauerpflegeplätze: meiste zuerst' },
  { wert: 'v-auf', text: 'Vollstationär Versorgte: stärkster Rückgang zuerst' },
  { wert: 'v-ab', text: 'Vollstationär Versorgte: stärkster Anstieg zuerst' },
] as const
type Sortierung = (typeof SORTIERUNGEN)[number]['wert']

const FELD = 'mt-1.5 block w-full rounded-xl border border-pm-line bg-white px-3.5 py-2.5 text-[16px] text-pm-ink focus:border-pm-taupe focus:outline-none focus:ring-2 focus:ring-pm-taupe/25'
const BESCHRIFTUNG = 'block text-[14px] font-semibold text-pm-ink'

export function KreisFilter({ laender, gesamt }: { laender: { code: string; name: string }[]; gesamt: number }) {
  const [suche, setSuche] = useState('')
  const [land, setLand] = useState('')
  const [art, setArt] = useState('')
  const [sortierung, setSortierung] = useState<Sortierung>('land')
  const [treffer, setTreffer] = useState(gesamt)
  // Ursprüngliche Reihenfolge (Gruppenzeilen der Länder + Kreise), einmal gelesen
  const reihenfolge = useRef<HTMLTableRowElement[] | null>(null)
  const letzteSortierung = useRef<Sortierung>('land')
  const aktiv = Boolean(suche.trim() || land || art || sortierung !== 'land')

  useEffect(() => {
    const tbody = document.getElementById('kreis-zeilen')
    if (!tbody) return
    if (!reihenfolge.current) {
      // Erster Lauf ohne Filter: nichts anfassen, die Seite steht schon richtig da
      reihenfolge.current = Array.from(tbody.querySelectorAll<HTMLTableRowElement>('tr'))
      if (!aktiv) return
    }
    const alle = reihenfolge.current
    const kreise = alle.filter((tr) => tr.dataset.q !== undefined)
    // Jedes Suchwort muss so oft in den Suchbegriffen der Zeile stecken, wie es in der Suche vorkommt:
    // „Baden-Baden" verlangt zweimal „baden" und trifft damit nicht jeden Kreis in Baden-Württemberg.
    const woerter = Object.entries(
      normal(suche).split(' ').filter(Boolean).reduce<Record<string, number>>((z, w) => ({ ...z, [w]: (z[w] ?? 0) + 1 }), {}),
    )
    let n = 0
    const proLand: Record<string, number> = {}
    for (const tr of kreise) {
      const d = tr.dataset
      const begriffe = (d.q ?? '').split(' ')
      const passt =
        (!land || d.land === land) &&
        (!art || d.typ === art) &&
        woerter.every(([w, anzahl]) => begriffe.filter((b) => b.includes(w)).length >= anzahl)
      tr.hidden = !passt
      if (passt) {
        n += 1
        proLand[d.land ?? ''] = (proLand[d.land ?? ''] ?? 0) + 1
      }
    }
    const nachLand = sortierung === 'land'
    for (const tr of alle) {
      if (tr.dataset.gruppe !== undefined) tr.hidden = !nachLand || !proLand[tr.dataset.gruppe]
    }
    if (sortierung !== letzteSortierung.current) {
      letzteSortierung.current = sortierung
      let ziel: HTMLTableRowElement[] = alle
      if (!nachLand) {
        const [feld, richtung] = sortierung.split('-') as [string, 'auf' | 'ab']
        const wert = (tr: HTMLTableRowElement) => {
          const s = tr.dataset[feld]
          return s === undefined || s === '' ? null : Number(s)
        }
        ziel = [...kreise].sort((a, b) => {
          const x = wert(a)
          const y = wert(b)
          if (x === null) return y === null ? 0 : 1
          if (y === null) return -1
          return richtung === 'auf' ? x - y : y - x
        })
      }
      const stapel = document.createDocumentFragment()
      ziel.forEach((tr) => stapel.appendChild(tr))
      if (!nachLand) alle.filter((tr) => tr.dataset.gruppe !== undefined).forEach((tr) => stapel.appendChild(tr))
      tbody.appendChild(stapel)
    }
    setTreffer(n)
  }, [suche, land, art, sortierung, aktiv])

  const zuruecksetzen = () => {
    setSuche('')
    setLand('')
    setArt('')
    setSortierung('land')
  }

  return (
    <div className="rounded-[20px] bg-pm-paper p-5 md:p-6">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)]">
        <label className={BESCHRIFTUNG}>
          Kreis oder Stadt
          <input
            type="search"
            value={suche}
            onChange={(e) => setSuche(e.target.value)}
            placeholder="z. B. Rosenheim oder Iserlohn"
            autoComplete="off"
            className={FELD}
          />
        </label>
        <label className={BESCHRIFTUNG}>
          Bundesland
          <select value={land} onChange={(e) => setLand(e.target.value)} className={FELD}>
            <option value="">Alle Bundesländer</option>
            {laender.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name}
              </option>
            ))}
          </select>
        </label>
        <label className={BESCHRIFTUNG}>
          Art des Kreises
          <select value={art} onChange={(e) => setArt(e.target.value)} className={FELD}>
            <option value="">Alle</option>
            <option value="k">Landkreise und Kreise</option>
            <option value="s">Kreisfreie Städte</option>
          </select>
        </label>
        <label className={BESCHRIFTUNG}>
          Sortieren
          <select value={sortierung} onChange={(e) => setSortierung(e.target.value as Sortierung)} className={FELD}>
            {SORTIERUNGEN.map((s) => (
              <option key={s.wert} value={s.wert}>
                {s.text}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] text-pm-body">
        <p aria-live="polite">
          {treffer === gesamt ? `${gesamt} Kreise` : `${treffer} von ${gesamt} Kreisen`}
        </p>
        {aktiv ? (
          <button type="button" onClick={zuruecksetzen} className="font-semibold text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink">
            Alle Kreise zeigen
          </button>
        ) : null}
      </div>
      {treffer === 0 ? (
        <p className="mt-3 text-[15px] leading-[1.55] text-pm-body">
          Kein Kreis gefunden. Gesucht wird nach Kreisen, kreisfreien Städten und den Städten, für die es bei uns eine eigene
          Seite gibt. Eine Gemeinde finden Sie über den Namen ihres Landkreises.
        </p>
      ) : null}
    </div>
  )
}
