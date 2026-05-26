'use client'

import { useState } from 'react'

const initialData = {
  anrede: '',
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  standort: '',
  hintergrund: '',
  kapital: '',
  nachricht: '',
  datenschutz: false,
}

export default function FranchiseFormClient() {
  const [data, setData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function set(field: string, value: string | boolean) {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="anfrage" className="bg-[#F8F7F5] py-20">
        <div className="max-w-[640px] mx-auto px-5 text-center">
          <div className="bg-white border border-[#E5E3DF] rounded-3xl p-12 shadow-sm">
            <div className="w-16 h-16 bg-[#3D7A5C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3D7A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[26px] font-bold text-[#3D3D3D] mb-3">Anfrage erhalten</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Vielen Dank, {data.vorname}. Mateusz Wysocki oder sein Team meldet sich innerhalb von
              24 Stunden persönlich bei Ihnen — mit einem ersten Überblick über die Franchise-Möglichkeit in{' '}
              <strong>{data.standort || 'Ihrer Region'}</strong>.
            </p>
            <p className="text-[13px] text-[#8B8B8B]">
              Oder rufen Sie direkt an:{' '}
              <a href="tel:+4989200000830" className="text-[#8B7355] font-semibold">
                089 200 000 830
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="anfrage" className="bg-[#F8F7F5] py-20">
      <div className="max-w-[720px] mx-auto px-5">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-3">
            Unverbindliche Erstanfrage
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] mb-4">
            Jetzt Informationspaket anfordern
          </h2>
          <p className="text-[15px] text-[#5A5A5A] max-w-[480px] mx-auto leading-relaxed">
            Mateusz Wysocki meldet sich persönlich. Kein Sales-Skript, kein Callcenter —
            ein echtes Gespräch über Ihre Situation und Chancen.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E5E3DF] rounded-3xl p-8 md:p-10 shadow-sm"
        >
          {/* Anrede */}
          <div className="mb-6">
            <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
              Anrede
            </label>
            <div className="flex gap-3">
              {['Herr', 'Frau', 'Divers'].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => set('anrede', a)}
                  className={`px-5 py-2.5 rounded-xl text-[14px] font-medium border transition-all ${
                    data.anrede === a
                      ? 'bg-[#8B7355] text-white border-[#8B7355]'
                      : 'bg-white text-[#5A5A5A] border-[#E5E3DF] hover:border-[#8B7355]'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
                Vorname <span className="text-[#E76F63]">*</span>
              </label>
              <input
                type="text"
                required
                value={data.vorname}
                onChange={(e) => set('vorname', e.target.value)}
                placeholder="Max"
                className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] placeholder-[#C0BDB8] focus:outline-none focus:border-[#8B7355] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
                Nachname <span className="text-[#E76F63]">*</span>
              </label>
              <input
                type="text"
                required
                value={data.nachname}
                onChange={(e) => set('nachname', e.target.value)}
                placeholder="Mustermann"
                className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] placeholder-[#C0BDB8] focus:outline-none focus:border-[#8B7355] transition-colors"
              />
            </div>
          </div>

          {/* Kontakt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
                E-Mail <span className="text-[#E76F63]">*</span>
              </label>
              <input
                type="email"
                required
                value={data.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="max@beispiel.de"
                className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] placeholder-[#C0BDB8] focus:outline-none focus:border-[#8B7355] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
                Telefon <span className="text-[#E76F63]">*</span>
              </label>
              <input
                type="tel"
                required
                value={data.telefon}
                onChange={(e) => set('telefon', e.target.value)}
                placeholder="+49 89 000 000"
                className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] placeholder-[#C0BDB8] focus:outline-none focus:border-[#8B7355] transition-colors"
              />
            </div>
          </div>

          {/* Standort */}
          <div className="mb-4">
            <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
              Gewünschte Region / Standort <span className="text-[#E76F63]">*</span>
            </label>
            <input
              type="text"
              required
              value={data.standort}
              onChange={(e) => set('standort', e.target.value)}
              placeholder="z. B. München, Bayern oder PLZ-Bereich 80xxx"
              className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] placeholder-[#C0BDB8] focus:outline-none focus:border-[#8B7355] transition-colors"
            />
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
                Beruflicher Hintergrund
              </label>
              <select
                value={data.hintergrund}
                onChange={(e) => set('hintergrund', e.target.value)}
                className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] focus:outline-none focus:border-[#8B7355] transition-colors bg-white"
              >
                <option value="">Bitte wählen</option>
                <option value="Pflege / Gesundheitswesen">Pflege / Gesundheitswesen</option>
                <option value="Kaufmännisch / Unternehmensführung">Kaufmännisch / Unternehmensführung</option>
                <option value="Bereits selbstständig">Bereits selbstständig</option>
                <option value="Immobilien / Dienstleistungen">Immobilien / Dienstleistungen</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
                Verfügbares Kapital
              </label>
              <select
                value={data.kapital}
                onChange={(e) => set('kapital', e.target.value)}
                className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] focus:outline-none focus:border-[#8B7355] transition-colors bg-white"
              >
                <option value="">Bitte wählen</option>
                <option value="25.000–50.000 €">25.000–50.000 €</option>
                <option value="50.000–100.000 €">50.000–100.000 €</option>
                <option value="100.000–200.000 €">100.000–200.000 €</option>
                <option value="Über 200.000 €">Über 200.000 €</option>
              </select>
            </div>
          </div>

          {/* Nachricht */}
          <div className="mb-6">
            <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8B8B8B] mb-2">
              Was motiviert Sie? (optional)
            </label>
            <textarea
              value={data.nachricht}
              onChange={(e) => set('nachricht', e.target.value)}
              rows={4}
              placeholder="Kurze Beschreibung Ihrer Situation, Ihrer Motivation und was Sie sich von der Partnerschaft erhoffen…"
              className="w-full px-4 py-3 border border-[#E5E3DF] rounded-xl text-[14px] text-[#3D3D3D] placeholder-[#C0BDB8] focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
            />
          </div>

          {/* Datenschutz */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  required
                  checked={data.datenschutz}
                  onChange={(e) => set('datenschutz', e.target.checked)}
                  className="sr-only"
                />
                <div
                  onClick={() => set('datenschutz', !data.datenschutz)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    data.datenschutz ? 'bg-[#8B7355] border-[#8B7355]' : 'bg-white border-[#D0CCC7]'
                  }`}
                >
                  {data.datenschutz && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-[13px] text-[#5A5A5A] leading-relaxed">
                Ich habe die{' '}
                <a href="/datenschutz/" className="text-[#8B7355] underline hover:no-underline">
                  Datenschutzerklärung
                </a>{' '}
                gelesen und stimme der Verarbeitung meiner Daten für die Kontaktaufnahme zu.{' '}
                <span className="text-[#E76F63]">*</span>
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting || !data.datenschutz}
            className="w-full bg-[#E76F63] hover:bg-[#D4625A] disabled:bg-[#E5E3DF] disabled:text-[#A0A0A0] text-white font-bold text-[16px] py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Wird gesendet…
              </>
            ) : (
              'Informationspaket anfordern →'
            )}
          </button>

          <p className="text-[12px] text-center text-[#A89279] mt-4">
            Kostenlos & unverbindlich · Antwort innerhalb von 24 Stunden · Kein Sales-Druck
          </p>
        </form>
      </div>
    </section>
  )
}
