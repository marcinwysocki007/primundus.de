'use client'

import { useState, useMemo } from 'react'

type Frage = {
  id: string
  bereich: string
  text: string
  hilfe?: string
}

const FRAGEN: Frage[] = [
  { id: 'mobil_aufstehen', bereich: 'Mobilität', text: 'Kann selbständig aus dem Bett aufstehen und sich hinsetzen?' },
  { id: 'mobil_treppen', bereich: 'Mobilität', text: 'Kann selbständig Treppen steigen oder sich in der Wohnung fortbewegen?' },
  { id: 'mobil_umsetzen', bereich: 'Mobilität', text: 'Kann sich ohne Hilfe vom Bett auf einen Stuhl oder Rollstuhl umsetzen?' },

  { id: 'kog_orientierung', bereich: 'Kognition', text: 'Ist zeitlich, örtlich und zur eigenen Person orientiert?' },
  { id: 'kog_entscheidung', bereich: 'Kognition', text: 'Kann Alltagsentscheidungen treffen (z.B. was anziehen, was essen)?', hilfe: 'Bei beginnender Demenz oft eingeschränkt' },
  { id: 'kog_gespraech', bereich: 'Kognition', text: 'Kann ein einfaches Gespräch führen und Anweisungen verstehen?' },

  { id: 'verhalten', bereich: 'Verhalten', text: 'Zeigt KEINE auffälligen Verhaltensweisen (Unruhe, Aggression, nächtliche Wanderungen)?', hilfe: 'Bei Demenz häufig' },
  { id: 'angst', bereich: 'Verhalten', text: 'Ist frei von ausgeprägten Ängsten oder Niedergeschlagenheit?' },

  { id: 'selbst_waschen', bereich: 'Selbstversorgung', text: 'Kann sich selbständig waschen und duschen?' },
  { id: 'selbst_anziehen', bereich: 'Selbstversorgung', text: 'Kann sich selbständig an- und ausziehen?' },
  { id: 'selbst_toilette', bereich: 'Selbstversorgung', text: 'Kann die Toilette selbständig benutzen?' },
  { id: 'selbst_essen', bereich: 'Selbstversorgung', text: 'Kann selbständig essen und trinken (ggf. mit zubereiteter Nahrung)?' },
  { id: 'selbst_kontinenz', bereich: 'Selbstversorgung', text: 'Ist kontinent (kein Einnässen, keine Inkontinenz)?' },

  { id: 'med_medis', bereich: 'Medizinische Versorgung', text: 'Nimmt Medikamente selbständig und zuverlässig ein?' },
  { id: 'med_arzt', bereich: 'Medizinische Versorgung', text: 'Kann eigenständig Arzttermine wahrnehmen?' },
  { id: 'med_wunden', bereich: 'Medizinische Versorgung', text: 'Benötigt KEINE Wundversorgung oder Behandlungspflege?', hilfe: 'Z.B. Insulin, Verbände, Katheter' },

  { id: 'alltag_struktur', bereich: 'Alltag', text: 'Kann den Tag selbständig strukturieren (aufstehen, Mahlzeiten, Aktivitäten)?' },
  { id: 'alltag_haushalt', bereich: 'Alltag', text: 'Kann einfache Haushaltsarbeiten erledigen (kochen, putzen, einkaufen)?' },
  { id: 'alltag_sozial', bereich: 'Alltag', text: 'Pflegt soziale Kontakte und verlässt regelmäßig die Wohnung?' },
  { id: 'alltag_nacht', bereich: 'Alltag', text: 'Kommt nachts ohne Hilfe aus (kein nächtlicher Betreuungsbedarf)?' },
]

type Antwort = 'ja' | 'teilweise' | 'nein' | null

const BEREICHE = ['Mobilität', 'Kognition', 'Verhalten', 'Selbstversorgung', 'Medizinische Versorgung', 'Alltag']

function bewerten(antworten: Record<string, Antwort>) {
  let bedarf = 0
  let beantwortet = 0
  for (const frage of FRAGEN) {
    const a = antworten[frage.id]
    if (a === null || a === undefined) continue
    beantwortet++
    if (a === 'nein') bedarf += 2
    else if (a === 'teilweise') bedarf += 1
  }
  return { bedarf, beantwortet, max: FRAGEN.length * 2 }
}

function pflegegradSchaetzung(bedarf: number): { pg: number; label: string; farbe: string } {
  if (bedarf <= 5) return { pg: 0, label: 'Voraussichtlich kein Pflegegrad', farbe: '#3D7A5C' }
  if (bedarf <= 12) return { pg: 1, label: 'Pflegegrad 1 wahrscheinlich', farbe: '#3D7A5C' }
  if (bedarf <= 20) return { pg: 2, label: 'Pflegegrad 2 wahrscheinlich', farbe: '#A89279' }
  if (bedarf <= 28) return { pg: 3, label: 'Pflegegrad 3 wahrscheinlich', farbe: '#A89279' }
  if (bedarf <= 34) return { pg: 4, label: 'Pflegegrad 4 wahrscheinlich', farbe: '#E76F63' }
  return { pg: 5, label: 'Pflegegrad 5 wahrscheinlich', farbe: '#E76F63' }
}

function empfehlung(pg: number): string {
  if (pg === 0) return 'Aktuell besteht voraussichtlich kein Pflegegrad. Bei beginnenden Einschränkungen lohnt sich dennoch eine Beratung zu Hausnotruf, Hilfsmitteln und Vorsorge.'
  if (pg === 1) return 'Bei Pflegegrad 1 stehen Entlastungsbetrag und Hilfsmittel zur Verfügung. Eine 24h-Pflege ist meist noch nicht notwendig — eine stundenweise Betreuung kann jedoch sinnvoll sein.'
  if (pg === 2) return 'Ab Pflegegrad 2 besteht Anspruch auf Pflegegeld und Sachleistungen. Eine 24h-Pflege wird relevant, wenn nächtliche Unterstützung, Demenzbetreuung oder dauerhafte Begleitung nötig ist.'
  if (pg === 3) return 'Pflegegrad 3 deutet auf erheblichen Betreuungsbedarf hin. Eine 24h-Pflege zuhause ist häufig die wirtschaftlich und menschlich beste Lösung — besonders bei vorhandenem Wohnraum.'
  if (pg === 4) return 'Pflegegrad 4 bedeutet schwerste Beeinträchtigungen. Eine 24h-Pflege ist in der Regel klar günstiger als ein Pflegeheim und ermöglicht den Verbleib im vertrauten Umfeld.'
  return 'Pflegegrad 5 erfordert höchsten Betreuungsaufwand. Hier ist häufig eine 2-Personen-Lösung (Doppelbesetzung) oder die Kombination mit Behandlungspflege durch einen ambulanten Dienst notwendig.'
}

export function PflegebedarfClient() {
  const [antworten, setAntworten] = useState<Record<string, Antwort>>({})
  const [gestartet, setGestartet] = useState(false)

  const { bedarf, beantwortet, max } = useMemo(() => bewerten(antworten), [antworten])
  const fertig = beantwortet === FRAGEN.length
  const schaetzung = pflegegradSchaetzung(bedarf)
  const bedarfsProzent = Math.round((bedarf / max) * 100)

  const setAntwort = (id: string, wert: Antwort) => {
    setAntworten(prev => ({ ...prev, [id]: wert }))
  }

  const reset = () => {
    setAntworten({})
    setGestartet(false)
  }

  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[720px] mx-auto px-5 py-14">

        <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
          <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
          <span>›</span>
          <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
          <span>›</span>
          <span className="text-[#5A5A5A]">Pflegebedarf einschätzen</span>
        </nav>

        <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">TOOLS & RECHNER</p>
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-4">
          Pflegebedarf einschätzen — Self-Check
        </h1>
        <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[580px]">
          20 Fragen aus 6 Bereichen — in 3 Minuten eine erste Einschätzung zum Pflegebedarf und voraussichtlichen Pflegegrad.
        </p>

        {!gestartet ? (
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7 shadow-sm">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">So funktioniert der Self-Check</h2>
            <div className="space-y-4 mb-6">
              {[
                { n: 1, t: '20 Fragen beantworten', d: 'Aus 6 Bereichen: Mobilität, Kognition, Verhalten, Selbstversorgung, medizinische Versorgung und Alltag.' },
                { n: 2, t: 'Sofort Auswertung erhalten', d: 'Pflegebedarf in Prozent + voraussichtlicher Pflegegrad — mit konkreter Empfehlung.' },
                { n: 3, t: 'Nächste Schritte planen', d: 'Pflegegrad-Antrag stellen, Beratung anfordern oder direkt 24h-Pflege organisieren.' },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#F2EDE6] text-[#8B7355] font-bold text-[14px] flex items-center justify-center flex-shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{s.t}</p>
                    <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#8B8B8B] mb-5 leading-relaxed">
              <strong>Hinweis:</strong> Dieser Self-Check ersetzt keine offizielle Begutachtung durch MDK oder MEDICPROOF. Er liefert eine erste Orientierung.
            </p>
            <button
              onClick={() => setGestartet(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B7355] hover:bg-[#7D6848] text-white font-bold text-[15px] py-3.5 px-6 rounded-xl transition-colors"
            >
              Self-Check starten →
            </button>
          </div>
        ) : (
          <>
            {/* Fortschritt */}
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-5 mb-6 shadow-sm sticky top-4 z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-semibold text-[#3D3D3D]">
                  Frage {beantwortet} von {FRAGEN.length}
                </span>
                <span className="text-[13px] font-bold text-[#8B7355]">
                  {Math.round((beantwortet / FRAGEN.length) * 100)} %
                </span>
              </div>
              <div className="h-2 bg-[#F0EDE8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B7355] transition-all duration-300"
                  style={{ width: `${(beantwortet / FRAGEN.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Fragen pro Bereich */}
            {BEREICHE.map((bereich) => {
              const fragenImBereich = FRAGEN.filter(f => f.bereich === bereich)
              return (
                <div key={bereich} className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden shadow-sm mb-5">
                  <div className="bg-[#F8F7F5] border-b border-[#E5E3DF] px-5 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">{bereich}</p>
                  </div>
                  <div className="divide-y divide-[#F0EDE8]">
                    {fragenImBereich.map((frage) => (
                      <div key={frage.id} className="px-5 py-4">
                        <p className="text-[14px] text-[#3D3D3D] mb-1 leading-snug">{frage.text}</p>
                        {frage.hilfe && (
                          <p className="text-[12px] text-[#8B8B8B] mb-3">{frage.hilfe}</p>
                        )}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {(['ja', 'teilweise', 'nein'] as const).map((wert) => (
                            <button
                              key={wert}
                              onClick={() => setAntwort(frage.id, wert)}
                              className={`px-4 py-1.5 rounded-lg border-2 text-[13px] font-semibold transition-all ${
                                antworten[frage.id] === wert
                                  ? wert === 'ja'
                                    ? 'border-[#3D7A5C] bg-[#E8F5EE] text-[#3D7A5C]'
                                    : wert === 'teilweise'
                                      ? 'border-[#A89279] bg-[#F2EDE6] text-[#6B5A44]'
                                      : 'border-[#E76F63] bg-[#FDF0EE] text-[#8B3E2F]'
                                  : 'border-[#E5E3DF] bg-white text-[#5A5A5A] hover:border-[#8B7355]'
                              }`}
                            >
                              {wert === 'ja' ? 'Ja' : wert === 'teilweise' ? 'Teilweise' : 'Nein'}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Ergebnis */}
            {fertig && (
              <div className="bg-white border-2 border-[#8B7355] rounded-2xl overflow-hidden shadow-md mb-6">
                <div className="bg-[#8B7355] px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/80 mb-1">Ihr Ergebnis</p>
                  <p className="text-[20px] font-bold text-white">{schaetzung.label}</p>
                </div>
                <div className="p-6">
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-semibold text-[#3D3D3D]">Pflegebedarf</span>
                      <span className="text-[15px] font-bold" style={{ color: schaetzung.farbe }}>{bedarfsProzent} %</span>
                    </div>
                    <div className="h-3 bg-[#F0EDE8] rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${bedarfsProzent}%`, background: schaetzung.farbe }}
                      />
                    </div>
                  </div>
                  <p className="text-[14px] text-[#5A5A5A] leading-relaxed mb-5">
                    {empfehlung(schaetzung.pg)}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/beratungsgespraech/"
                      className="inline-flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-3 px-5 rounded-xl transition-colors"
                    >
                      Kostenfreie Beratung →
                    </a>
                    <a
                      href="/pflegegrad-beantragen/"
                      className="inline-flex items-center justify-center gap-2 bg-white border border-[#8B7355] text-[#8B7355] font-semibold text-[14px] py-3 px-5 rounded-xl hover:bg-[#F2EDE6] transition-colors"
                    >
                      Pflegegrad beantragen
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={reset}
                className="text-[13px] text-[#8B8B8B] hover:text-[#8B7355] underline transition-colors"
              >
                Self-Check zurücksetzen
              </button>
              {!fertig && (
                <p className="text-[12px] text-[#8B8B8B]">
                  Noch {FRAGEN.length - beantwortet} {FRAGEN.length - beantwortet === 1 ? 'Frage' : 'Fragen'} offen
                </p>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  )
}
