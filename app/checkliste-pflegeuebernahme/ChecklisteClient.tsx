'use client'

import { useEffect, useMemo, useState } from 'react'

type ChecklistItem = { id: string; label: string; desc?: string }
type Phase = { id: string; titel: string; untertitel: string; items: ChecklistItem[] }

const PHASEN: Phase[] = [
  {
    id: 'erste-tage',
    titel: 'Phase 1 — Die ersten Tage',
    untertitel: 'Akute Situation klären, Soforthilfe organisieren',
    items: [
      { id: 'haus-arzt', label: 'Hausarzt informieren und Termin vereinbaren', desc: 'Erstgespräch zur aktuellen Pflegesituation' },
      { id: 'pflegekasse', label: 'Pflegekasse kontaktieren — Antrag auf Pflegegrad', desc: 'Formloser Antrag reicht, schon der Antragsmonat zählt' },
      { id: 'vollmacht', label: 'Vorsorgevollmacht und Patientenverfügung prüfen', desc: 'Existieren diese Dokumente? Sind sie aktuell?' },
      { id: 'kontakte', label: 'Wichtige Kontakte sammeln (Ärzte, Apotheke, Angehörige)', desc: 'Liste an einem zentralen Ort hinterlegen' },
      { id: 'medikamente', label: 'Aktuelle Medikamentenliste erstellen', desc: 'Wirkstoff, Dosis, Einnahmezeit, behandelnder Arzt' },
      { id: 'notruf', label: 'Hausnotruf einrichten', desc: 'Wird ab PG 1 von der Pflegekasse bezuschusst (25,50 €/Mo)' },
    ],
  },
  {
    id: 'pflegegrad',
    titel: 'Phase 2 — Pflegegrad und Finanzierung',
    untertitel: 'Behördengänge und Anträge',
    items: [
      { id: 'mdk', label: 'MDK-Begutachtung vorbereiten', desc: 'Pflegetagebuch über 2 Wochen führen' },
      { id: 'pflegegrad-erhalten', label: 'Pflegegrad-Bescheid erhalten und prüfen', desc: 'Bei zu niedrigem Pflegegrad: Widerspruch innerhalb von 1 Monat' },
      { id: 'entlastungsbetrag', label: 'Entlastungsbetrag aktivieren (131 €/Monat)', desc: 'Ab PG 1 — für Betreuungs- und Entlastungsleistungen' },
      { id: 'hilfsmittel', label: 'Pflegehilfsmittel beantragen (42 €/Monat)', desc: 'Handschuhe, Desinfektion, Bettschutz — über Pflegekasse' },
      { id: 'wohnraum', label: 'Wohnraumanpassung prüfen', desc: 'Badumbau, Treppenlift, Türverbreiterung — bis 4.180 € Zuschuss' },
      { id: 'steuer', label: 'Steuerliche Absetzbarkeit klären (§ 35a EStG)', desc: '20 % der Pflegekosten, max. 4.000 €/Jahr' },
    ],
  },
  {
    id: 'organisation',
    titel: 'Phase 3 — Pflege organisieren',
    untertitel: 'Konkrete Pflegelösung wählen und aufbauen',
    items: [
      { id: 'option-pruefen', label: 'Pflegeoptionen vergleichen (Angehörige, Pflegedienst, 24h-Pflege, Heim)', desc: 'Kosten, Umfang und persönliche Situation abwägen' },
      { id: 'anbieter', label: 'Anbieter recherchieren und Angebote einholen', desc: '3–5 Angebote vergleichen — Preis, Leistungen, Referenzen' },
      { id: 'vertrag', label: 'Pflegevertrag aufsetzen', desc: 'Leistungen, Kosten, Kündigung — alles schriftlich' },
      { id: 'arbeitgeber', label: 'Pflegezeit oder Familienpflegezeit beim Arbeitgeber beantragen', desc: 'Bis 6 Monate vollständige oder 24 Monate teilweise Freistellung' },
      { id: 'finanzen', label: 'Bankvollmacht und Daueraufträge regeln', desc: 'Wer kann im Notfall Zahlungen veranlassen?' },
      { id: 'versicherungen', label: 'Versicherungen überprüfen (Haftpflicht, Hausrat)', desc: 'Auch für die Pflegekraft — Haushaltsschäden absichern' },
    ],
  },
  {
    id: 'pflegekraft',
    titel: 'Phase 4 — Pflegekraft einarbeiten (24h-Pflege)',
    untertitel: 'Erfolgreicher Start mit der Betreuungskraft',
    items: [
      { id: 'zimmer', label: 'Eigenes Zimmer für die Betreuungskraft einrichten', desc: 'Bett, Schrank, Tageslicht, abschließbar — gesetzliche Pflicht' },
      { id: 'wlan', label: 'WLAN-Zugang einrichten', desc: 'Kontakt zur Familie der Betreuungskraft ist wichtig' },
      { id: 'tagesablauf', label: 'Tagesablauf und Pflegeplan schriftlich erstellen', desc: 'Aufstehen, Mahlzeiten, Medikamente, Ruhezeiten' },
      { id: 'einweisung', label: 'Einweisung in Geräte und Hilfsmittel', desc: 'Pflegebett, Lifter, Inkontinenzmaterial — wo ist was?' },
      { id: 'notfall', label: 'Notfallplan und Kontakte hinterlegen', desc: 'Wer wird wann gerufen? Wo sind die Versichertenkarten?' },
      { id: 'kommunikation', label: 'Wöchentlichen Austausch vereinbaren', desc: 'Wie läuft es? Probleme? Wünsche?' },
    ],
  },
  {
    id: 'langfrist',
    titel: 'Phase 5 — Langfristig stabil',
    untertitel: 'Pflege als Dauerthema gut managen',
    items: [
      { id: 'eigene-pause', label: 'Eigene Auszeiten und Verhinderungspflege planen', desc: 'Bis 1.612 €/Jahr für Vertretung — wichtig zur Burnout-Prävention' },
      { id: 'angehoerige', label: 'Pflegeverantwortung unter Geschwistern fair verteilen', desc: 'Wer macht was? Schriftliche Vereinbarung hilft' },
      { id: 'pflegekurs', label: 'Pflegekurs besuchen (kostenlos über Pflegekasse)', desc: 'Sicherer im Umgang mit der pflegebedürftigen Person' },
      { id: 'beratung', label: 'Regelmäßige Beratungsbesuche (§ 37.3 SGB XI)', desc: 'Halbjährlich bei PG 2–3, vierteljährlich bei PG 4–5 — Pflicht!' },
      { id: 'anpassung', label: 'Pflegegrad-Erhöhung prüfen', desc: 'Bei Verschlechterung Höherstufung beantragen' },
      { id: 'demenz', label: 'Bei Demenz: Tagesstruktur und Kommunikation anpassen', desc: 'Validation, Erinnerungspflege, Reizoptimierung' },
    ],
  },
]

const STORAGE_KEY = 'primundus-checkliste-v1'

export function ChecklisteClient() {
  const [done, setDone] = useState<Record<string, boolean>>({})
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
      if (stored) setDone(JSON.parse(stored))
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(done))
    } catch {
      // ignore
    }
  }, [done, hydrated])

  const totalItems = PHASEN.reduce((s, p) => s + p.items.length, 0)
  const completedItems = useMemo(() => Object.values(done).filter(Boolean).length, [done])
  const prozent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

  const toggle = (id: string) => setDone(prev => ({ ...prev, [id]: !prev[id] }))
  const reset = () => {
    if (window.confirm('Alle Häkchen entfernen?')) {
      setDone({})
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[720px] mx-auto px-5 py-14">

        <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
          <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
          <span>›</span>
          <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
          <span>›</span>
          <span className="text-[#5A5A5A]">Checkliste Pflegeübernahme</span>
        </nav>

        <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">TOOLS & RECHNER</p>
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-4">
          Checkliste Pflegeübernahme
        </h1>
        <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[580px]">
          {PHASEN.length} Phasen, {totalItems} konkrete Schritte — vom ersten Tag bis zur stabilen Pflegesituation.
          Ihr Fortschritt wird lokal im Browser gespeichert.
        </p>

        {/* Fortschritt */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl p-5 mb-6 shadow-sm sticky top-4 z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] font-semibold text-[#3D3D3D]">
              {completedItems} von {totalItems} Schritten erledigt
            </span>
            <span className="text-[15px] font-bold text-[#8B7355]">{prozent} %</span>
          </div>
          <div className="h-2 bg-[#F0EDE8] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8B7355] transition-all duration-500"
              style={{ width: `${prozent}%` }}
            />
          </div>
          {completedItems > 0 && (
            <button
              onClick={reset}
              className="mt-3 text-[12px] text-[#8B8B8B] hover:text-[#8B7355] underline transition-colors"
            >
              Checkliste zurücksetzen
            </button>
          )}
        </div>

        {/* Phasen */}
        {PHASEN.map((phase, idx) => {
          const phasenDone = phase.items.filter(i => done[i.id]).length
          const phasenProzent = Math.round((phasenDone / phase.items.length) * 100)
          return (
            <div key={phase.id} className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden shadow-sm mb-5">
              <div className="bg-[#F8F7F5] border-b border-[#E5E3DF] px-5 py-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full bg-[#8B7355] text-white font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-[15px] font-bold text-[#3D3D3D] flex-1">{phase.titel}</p>
                  <span className="text-[12px] font-bold text-[#8B7355] whitespace-nowrap">
                    {phasenDone}/{phase.items.length}
                  </span>
                </div>
                <p className="text-[13px] text-[#8B8B8B] pl-10">{phase.untertitel}</p>
                <div className="h-1 bg-[#F0EDE8] rounded-full overflow-hidden mt-3 ml-10">
                  <div
                    className="h-full bg-[#8B7355] transition-all duration-300"
                    style={{ width: `${phasenProzent}%` }}
                  />
                </div>
              </div>
              <div className="divide-y divide-[#F0EDE8]">
                {phase.items.map(item => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 px-5 py-4 cursor-pointer hover:bg-[#FDFCFA] transition-colors ${
                      done[item.id] ? 'bg-[#FBFAF7]' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!done[item.id]}
                      onChange={() => toggle(item.id)}
                      className="mt-1 w-4 h-4 accent-[#8B7355] flex-shrink-0 cursor-pointer"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-[14px] leading-snug ${
                        done[item.id]
                          ? 'text-[#8B8B8B] line-through decoration-[#A89279]'
                          : 'text-[#3D3D3D] font-medium'
                      }`}>
                        {item.label}
                      </p>
                      {item.desc && (
                        <p className={`text-[12px] mt-0.5 leading-relaxed ${
                          done[item.id] ? 'text-[#A89279]' : 'text-[#8B8B8B]'
                        }`}>
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )
        })}

        {/* CTA */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 shadow-sm mt-8">
          <p className="text-[15px] font-bold text-[#3D3D3D] mb-2">Brauchen Sie Unterstützung?</p>
          <p className="text-[14px] text-[#5A5A5A] mb-5 leading-relaxed">
            Wir begleiten Sie kostenlos durch alle Schritte — von der Antragstellung bis zur passenden Pflegekraft.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/beratungsgespraech/"
              className="inline-flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-3 px-5 rounded-xl transition-colors"
            >
              Kostenfreie Beratung →
            </a>
            <a
              href="tel:+4989200000830"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#8B7355] text-[#8B7355] font-semibold text-[14px] py-3 px-5 rounded-xl hover:bg-[#F2EDE6] transition-colors"
            >
              089 200 000 830
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
