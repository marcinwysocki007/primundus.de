'use client'

import { useState } from 'react'

// ─── Data ──────────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: 1,
    name: 'Mobilität',
    questions: [
      'Können Sie selbstständig aufstehen und sich hinsetzen (Bett/Stuhl)?',
      'Können Sie sich in der Wohnung fortbewegen?',
      'Können Sie Treppen steigen?',
    ],
  },
  {
    id: 2,
    name: 'Kognition & Orientierung',
    questions: [
      'Wissen Sie, wo Sie sind und welcher Tag/Monat es ist?',
      'Können Sie Gespräche führen und sich verständigen?',
      'Können Sie alltägliche Entscheidungen treffen (z.B. Was möchte ich essen)?',
    ],
  },
  {
    id: 3,
    name: 'Selbstversorgung',
    questions: [
      'Können Sie sich waschen, duschen oder baden?',
      'Können Sie sich selbst an- und ausziehen?',
      'Können Sie selbstständig essen und trinken?',
    ],
  },
  {
    id: 4,
    name: 'Gesundheit & Medikamente',
    questions: [
      'Nehmen Sie Ihre Medikamente selbstständig ein?',
      'Können Sie Arzt- und Therapietermine selbstständig wahrnehmen?',
      'Wie gut können Sie mit chronischen Beschwerden umgehen (Wundversorgung, spezielle Diät etc.)?',
    ],
  },
  {
    id: 5,
    name: 'Alltag & Soziales',
    questions: [
      'Können Sie Ihren Tagesablauf selbstständig gestalten?',
      'Pflegen Sie soziale Kontakte und Hobbies?',
      'Benötigen Sie nächtliche Betreuung oder Unterstützung?',
    ],
  },
]

const ANSWER_OPTIONS = [
  { value: 0, label: 'Vollständig selbstständig' },
  { value: 1, label: 'Überwiegend selbstständig' },
  { value: 2, label: 'Überwiegend unselbstständig' },
  { value: 3, label: 'Unselbstständig / brauche ständige Hilfe' },
]

// Last question of module 5 is inverted (needing help = higher score already)
// so we keep it consistent with the value mapping.

const TOTAL_QUESTIONS = MODULES.reduce((sum, m) => sum + m.questions.length, 0) // 15

function getPflegegrad(score: number): number {
  if (score <= 5) return 0
  if (score <= 13) return 1
  if (score <= 22) return 2
  if (score <= 32) return 3
  if (score <= 40) return 4
  return 5
}

const PFLEGEGELD: Record<number, string> = {
  0: 'kein Pflegegrad — kein Pflegegeld',
  1: 'kein Pflegegeld (nur Entlastungsbetrag 131 €/Mo)',
  2: '347 €/Monat',
  3: '599 €/Monat',
  4: '800 €/Monat',
  5: '990 €/Monat',
}

const PFLEGEGRAD_DESCRIPTION: Record<number, string> = {
  0: 'Kein Pflegebedarf erkennbar',
  1: 'Geringe Beeinträchtigungen',
  2: 'Erhebliche Beeinträchtigungen',
  3: 'Schwere Beeinträchtigungen',
  4: 'Schwerste Beeinträchtigungen',
  5: 'Schwerste Beeinträchtigungen mit besonderen Anforderungen',
}

const PFLEGEGRAD_COLOR: Record<number, string> = {
  0: '#8B8B8B',
  1: '#8B7355',
  2: '#8B7355',
  3: '#D4A853',
  4: '#C4703A',
  5: '#B85230',
}

// ─── Flat list of all questions ────────────────────────────────────────────

interface FlatQuestion {
  globalIndex: number
  moduleIndex: number
  moduleName: string
  questionIndex: number
  text: string
}

const ALL_QUESTIONS: FlatQuestion[] = MODULES.flatMap((mod, mi) =>
  mod.questions.map((text, qi) => ({
    globalIndex: MODULES.slice(0, mi).reduce((s, m) => s + m.questions.length, 0) + qi,
    moduleIndex: mi,
    moduleName: mod.name,
    questionIndex: qi,
    text,
  }))
)

// ─── Component ─────────────────────────────────────────────────────────────

type Screen = 'intro' | 'quiz' | 'result'

export default function PflegegradRechnerClient() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [currentStep, setCurrentStep] = useState(0) // 0–14
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_QUESTIONS).fill(null))

  const currentQ = ALL_QUESTIONS[currentStep]
  const currentAnswer = answers[currentStep]
  const totalScore = answers.reduce((sum, a) => sum + (a ?? 0), 0)
  const pflegegrad = getPflegegrad(totalScore)

  // Module scores
  const moduleScores = MODULES.map((mod, mi) => {
    const start = MODULES.slice(0, mi).reduce((s, m) => s + m.questions.length, 0)
    const score = answers.slice(start, start + mod.questions.length).reduce((s, a) => s + (a ?? 0), 0)
    const max = mod.questions.length * 3
    return { name: mod.name, score, max }
  })

  function selectAnswer(value: number) {
    const next = [...answers]
    next[currentStep] = value
    setAnswers(next)
  }

  function handleWeiter() {
    if (currentAnswer === null) return
    if (currentStep < TOTAL_QUESTIONS - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setScreen('result')
    }
  }

  function handleBack() {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
    else setScreen('intro')
  }

  function handleRestart() {
    setAnswers(Array(TOTAL_QUESTIONS).fill(null))
    setCurrentStep(0)
    setScreen('intro')
  }

  const progressPct = ((currentStep + 1) / TOTAL_QUESTIONS) * 100

  // ── Intro ──────────────────────────────────────────────────────────────

  if (screen === 'intro') {
    return (
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 py-14">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">Pflegegrad-Rechner</span>
          </nav>

          {/* Hero */}
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Kostenloser Pflegegrad-Rechner 2026
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-8">
            Schätzen Sie den Pflegebedarf in nur 3 Minuten ein — anonym, kostenlos und unverbindlich.
            Der Rechner gibt Ihnen einen ersten Hinweis auf den möglichen Pflegegrad vor der offiziellen Begutachtung.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: '⏱', label: '3 Minuten', desc: '15 Fragen' },
              { icon: '🔒', label: 'Anonym', desc: 'Keine Daten' },
              { icon: '📋', label: 'Kostenlos', desc: 'Unverbindlich' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-[#E5E3DF] rounded-xl shadow-sm p-3.5 text-center">
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="font-bold text-[#3D3D3D] text-[13px]">{item.label}</div>
                <div className="text-[11px] text-[#8B8B8B] mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => setScreen('quiz')}
            className="w-full sm:w-auto bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[17px] px-10 py-4 rounded-xl transition-all duration-200 shadow-sm"
          >
            Rechner starten →
          </button>

          <p className="text-[13px] text-[#8B8B8B] mt-4">
            Dies ist kein offizielles Gutachten. Das Ergebnis ersetzt keine Begutachtung durch den MDK.
          </p>
        </div>
      </div>
    )
  }

  // ── Quiz ───────────────────────────────────────────────────────────────

  if (screen === 'quiz') {
    return (
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 py-14">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-[13px] text-[#8B8B8B] mb-2">
              <span className="font-medium text-[#8B7355]">Modul {currentQ.moduleIndex + 1}: {currentQ.moduleName}</span>
              <span>Frage {currentStep + 1} von {TOTAL_QUESTIONS}</span>
            </div>
            <div className="h-2 bg-[#E5E3DF] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8B7355] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Question card */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl shadow-sm p-7 mb-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
              {currentQ.moduleName}
            </p>
            <h2 className="text-[20px] md:text-[22px] font-bold text-[#3D3D3D] leading-snug mb-8">
              {currentQ.text}
            </h2>

            {/* Answer options */}
            <div className="flex flex-col gap-3">
              {ANSWER_OPTIONS.map((opt) => {
                const isSelected = currentAnswer === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => selectAnswer(opt.value)}
                    className={[
                      'text-left px-5 py-4 rounded-xl border-2 font-medium text-[15px] transition-all duration-150',
                      isSelected
                        ? 'border-[#8B7355] bg-[#8B7355] text-white shadow-sm'
                        : 'border-[#E5E3DF] bg-white text-[#3D3D3D] hover:border-[#8B7355] hover:bg-[#FAF8F5]',
                    ].join(' ')}
                  >
                    <span className={[
                      'inline-flex items-center justify-center w-6 h-6 rounded-full border text-[12px] font-bold mr-3 flex-shrink-0',
                      isSelected
                        ? 'border-white bg-white text-[#8B7355]'
                        : 'border-[#C5C0B8] text-[#8B8B8B]',
                    ].join(' ')}>
                      {opt.value + 1}
                    </span>
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="text-[14px] text-[#8B8B8B] hover:text-[#3D3D3D] transition-colors px-4 py-3"
            >
              ← Zurück
            </button>
            <button
              onClick={handleWeiter}
              disabled={currentAnswer === null}
              className={[
                'flex-1 sm:flex-none sm:px-10 py-3 rounded-xl font-bold text-[16px] transition-all duration-200',
                currentAnswer !== null
                  ? 'bg-[#E76F63] hover:bg-[#D45F53] text-white shadow-sm'
                  : 'bg-[#E5E3DF] text-[#A0A0A0] cursor-not-allowed',
              ].join(' ')}
            >
              {currentStep < TOTAL_QUESTIONS - 1 ? 'Weiter →' : 'Ergebnis anzeigen →'}
            </button>
          </div>

          {/* Module dots */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {MODULES.map((mod, mi) => {
              const start = MODULES.slice(0, mi).reduce((s, m) => s + m.questions.length, 0)
              const isActive = mi === currentQ.moduleIndex
              const isDone = mi < currentQ.moduleIndex
              return (
                <div key={mod.id} className="flex items-center gap-2">
                  <div className={[
                    'rounded-full text-[11px] font-bold px-3 py-1 transition-all',
                    isActive ? 'bg-[#8B7355] text-white' : isDone ? 'bg-[#3D7A5C] text-white' : 'bg-[#E5E3DF] text-[#8B8B8B]',
                  ].join(' ')}>
                    {mod.name}
                  </div>
                  {mi < MODULES.length - 1 && <span className="text-[#D0CCC7] text-xs">›</span>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // ── Result ─────────────────────────────────────────────────────────────

  const gradeColor = PFLEGEGRAD_COLOR[pflegegrad]
  const pflegegeldText = PFLEGEGELD[pflegegrad]
  const gradeDesc = PFLEGEGRAD_DESCRIPTION[pflegegrad]

  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[720px] mx-auto px-5 py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
          <span>›</span>
          <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
          <span>›</span>
          <span className="text-[#3D3D3D]">Pflegegrad-Rechner</span>
        </nav>

        <h1 className="text-[28px] md:text-[36px] font-bold text-[#3D3D3D] leading-tight mb-2">
          Ihr Ergebnis
        </h1>
        <p className="text-[15px] text-[#8B8B8B] mb-8">
          Basierend auf Ihren Antworten — unverbindliche Einschätzung
        </p>

        {/* Main result card */}
        <div
          className="bg-white border-2 rounded-2xl shadow-sm p-8 mb-6 text-center"
          style={{ borderColor: gradeColor }}
        >
          <p className="text-[12px] font-bold uppercase tracking-widest text-[#8B8B8B] mb-3">
            Hinweis-Pflegegrad
          </p>
          {pflegegrad === 0 ? (
            <div className="text-[52px] md:text-[64px] font-black leading-none mb-3" style={{ color: gradeColor }}>
              Kein PG
            </div>
          ) : (
            <div className="text-[72px] md:text-[96px] font-black leading-none mb-3" style={{ color: gradeColor }}>
              {pflegegrad}
            </div>
          )}
          <p className="text-[18px] font-semibold text-[#3D3D3D] mb-2">{gradeDesc}</p>
          <p className="text-[14px] text-[#5A5A5A]">
            Gesamtpunktzahl: <strong>{totalScore}</strong> von {TOTAL_QUESTIONS * 3}
          </p>

          {/* Pflegegeld */}
          {pflegegrad > 0 && (
            <div className="mt-6 pt-6 border-t border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-1">
                Mögliches Pflegegeld (häusliche Pflege)
              </p>
              <p className="text-[22px] font-bold" style={{ color: pflegegrad >= 2 ? '#3D7A5C' : '#8B7355' }}>
                {pflegegrad === 1 ? 'Entlastungsbetrag 131 €/Mo' : pflegegeldText}
              </p>
              {pflegegrad === 1 && (
                <p className="text-[13px] text-[#8B8B8B] mt-1">Kein Pflegegeld — nur Entlastungsbetrag</p>
              )}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[13px] text-amber-800 mb-6 flex gap-3">
          <span className="text-lg flex-shrink-0">⚠️</span>
          <p>
            <strong>Wichtiger Hinweis:</strong> Dies ist eine unverbindliche Einschätzung — kein offizielles Gutachten.
            Die tatsächliche Einstufung erfolgt durch den MDK oder MEDICPROOF im Rahmen einer persönlichen Begutachtung.
            Nur ein offiziell anerkannter Pflegegrad berechtigt zu Leistungen der Pflegekasse.
          </p>
        </div>

        {/* Module breakdown */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-[16px] font-bold text-[#3D3D3D] mb-5">Auswertung nach Modulen</h2>
          <div className="flex flex-col gap-4">
            {moduleScores.map((mod) => {
              const pct = (mod.score / mod.max) * 100
              return (
                <div key={mod.name}>
                  <div className="flex items-center justify-between text-[13px] mb-1">
                    <span className="font-medium text-[#3D3D3D]">{mod.name}</span>
                    <span className="text-[#8B8B8B]">{mod.score} / {mod.max}</span>
                  </div>
                  <div className="h-2 bg-[#F0EDE8] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: pct <= 33 ? '#3D7A5C' : pct <= 66 ? '#D4A853' : '#C4703A',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl shadow-sm p-7 mb-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-2">
            Kostenlose Beratung
          </p>
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-2">
            Jetzt kostenlos beraten lassen
          </h2>
          <p className="text-[14px] text-[#5A5A5A] mb-5">
            Unsere Pflegeexperten helfen Ihnen beim Pflegegrad-Antrag und bei der Wahl der passenden Versorgung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+4989200000830"
              className="flex-1 flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[16px] px-8 py-4 rounded-xl transition-all duration-200 shadow-sm"
            >
              📞 Jetzt kostenlos beraten lassen
            </a>
            <a
              href="/pflegegrad-beantragen/"
              className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-[#8B7355] text-[#8B7355] font-bold text-[15px] px-6 py-4 rounded-xl hover:bg-[#FAF8F5] transition-all duration-200"
            >
              Pflegegrad beantragen →
            </a>
          </div>
          <p className="text-[12px] text-[#8B8B8B] mt-3 text-center">Mo – So 8 – 20 Uhr · Ilka Wysocki · 089 200 000 830</p>
        </div>

        {/* Restart */}
        <div className="text-center">
          <button
            onClick={handleRestart}
            className="text-[14px] text-[#8B7355] hover:text-[#7D6E5D] font-medium underline underline-offset-2 transition-colors"
          >
            ↺ Neu starten
          </button>
        </div>

        {/* Related links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/pflegegrad-beantragen/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">
            → Pflegegrad beantragen
          </a>
          <a href="/pflegegrade/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">
            → Alle Pflegegrade
          </a>
          <a href="/pflegegeld/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">
            → Pflegegeld-Übersicht
          </a>
        </div>
      </div>
    </div>
  )
}
