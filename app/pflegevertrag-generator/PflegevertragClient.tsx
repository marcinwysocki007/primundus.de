'use client'

import { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1 — Pflegebedürftige Person
  pfVorname: string
  pfNachname: string
  pfStrasse: string
  pfPLZ: string
  pfOrt: string
  pfGeburtsdatum: string
  pfPflegegrad: string

  // Step 2 — Pflegeperson
  ppVorname: string
  ppNachname: string
  ppStrasse: string
  ppPLZ: string
  ppOrt: string
  ppBeziehung: string

  // Step 3 — Pflegeleistungen
  leistungen: string[]
  weitereLeistungen: string
  haeufigkeit: string

  // Step 4 — Vergütung & Vertrag
  verguetung: string
  zahlungstag: string
  vertragsbeginn: string
  kuendigungsfrist: string
  aufwandsersatz: boolean
  fahrtkosten: string
}

const INITIAL_FORM: FormData = {
  pfVorname: '',
  pfNachname: '',
  pfStrasse: '',
  pfPLZ: '',
  pfOrt: '',
  pfGeburtsdatum: '',
  pfPflegegrad: '',
  ppVorname: '',
  ppNachname: '',
  ppStrasse: '',
  ppPLZ: '',
  ppOrt: '',
  ppBeziehung: '',
  leistungen: [],
  weitereLeistungen: '',
  haeufigkeit: '',
  verguetung: '',
  zahlungstag: '',
  vertragsbeginn: '',
  kuendigungsfrist: '',
  aufwandsersatz: false,
  fahrtkosten: '',
}

const LEISTUNGEN_OPTIONS = [
  'Körperpflege (Waschen, Ankleiden, Zahnpflege)',
  'Unterstützung bei der Mobilität',
  'Zubereitung und Hilfe beim Essen und Trinken',
  'Hauswirtschaftliche Tätigkeiten',
  'Betreuung und Gesellschaft',
  'Hilfe bei der Medikamenteneinnahme',
  'Begleitung zu Arztterminen',
]

// ─── Shared UI helpers ────────────────────────────────────────────────────────

const inputClass =
  'w-full border border-[#E5E3DF] rounded-xl px-4 py-3 text-[14px] text-[#3D3D3D] bg-white focus:outline-none focus:border-[#8B7355] transition-colors'

const labelClass = 'block text-[13px] font-semibold text-[#3D3D3D] mb-1.5'

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )
}

// ─── Step indicator ───────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center gap-2 mb-3">
        {[1, 2, 3, 4, 5].map((n) => {
          const isDone = n < step
          const isCurrent = n === step
          return (
            <div key={n} className="flex items-center">
              <div
                className={[
                  'w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-all',
                  isDone
                    ? 'bg-[#8B7355] text-white'
                    : isCurrent
                    ? 'bg-[#8B7355] text-white ring-4 ring-[#8B7355]/20'
                    : 'bg-[#F0EDE8] text-[#A89279]',
                ].join(' ')}
              >
                {isDone ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  n
                )}
              </div>
              {n < 5 && (
                <div
                  className={[
                    'w-8 h-0.5 mx-1',
                    n < step ? 'bg-[#8B7355]' : 'bg-[#E5E3DF]',
                  ].join(' ')}
                />
              )}
            </div>
          )
        })}
      </div>
      <p className="text-center text-[13px] text-[#8B8B8B]">Schritt {step} von 5</p>
    </div>
  )
}

// ─── Navigation buttons ───────────────────────────────────────────────────────

function NavButtons({
  step,
  onBack,
  onNext,
  onPrint,
}: {
  step: number
  onBack: () => void
  onNext: () => void
  onPrint: () => void
}) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F0EDE8]">
      {step > 1 ? (
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl border border-[#E5E3DF] text-[14px] font-semibold text-[#5A5A5A] hover:border-[#8B7355] hover:text-[#8B7355] transition-colors"
        >
          ← Zurück
        </button>
      ) : (
        <div />
      )}
      {step < 5 ? (
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-[#8B7355] hover:bg-[#7A6347] text-white text-[14px] font-bold transition-colors"
        >
          Weiter →
        </button>
      ) : (
        <button
          onClick={onPrint}
          className="px-6 py-2.5 rounded-xl bg-[#8B7355] hover:bg-[#7A6347] text-white text-[14px] font-bold transition-colors"
        >
          Pflegevertrag drucken / als PDF speichern
        </button>
      )}
    </div>
  )
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────

function Step1({ data, onChange }: { data: FormData; onChange: (key: keyof FormData, value: string) => void }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-1">Pflegebedürftige Person</h2>
        <p className="text-[14px] text-[#8B8B8B]">Angaben zur Person, die gepflegt wird</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Vorname">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. Maria"
            value={data.pfVorname}
            onChange={(e) => onChange('pfVorname', e.target.value)}
          />
        </Field>
        <Field label="Nachname">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. Mustermann"
            value={data.pfNachname}
            onChange={(e) => onChange('pfNachname', e.target.value)}
          />
        </Field>
      </div>

      <Field label="Straße und Hausnummer">
        <input
          type="text"
          className={inputClass}
          placeholder="z.B. Musterstraße 12"
          value={data.pfStrasse}
          onChange={(e) => onChange('pfStrasse', e.target.value)}
        />
      </Field>

      <div className="grid grid-cols-[120px_1fr] gap-4">
        <Field label="PLZ">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. 80331"
            value={data.pfPLZ}
            onChange={(e) => onChange('pfPLZ', e.target.value)}
            maxLength={5}
          />
        </Field>
        <Field label="Ort">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. München"
            value={data.pfOrt}
            onChange={(e) => onChange('pfOrt', e.target.value)}
          />
        </Field>
      </div>

      <Field label="Geburtsdatum">
        <input
          type="date"
          className={inputClass}
          value={data.pfGeburtsdatum}
          onChange={(e) => onChange('pfGeburtsdatum', e.target.value)}
        />
      </Field>

      <Field label="Pflegegrad">
        <select
          className={inputClass}
          value={data.pfPflegegrad}
          onChange={(e) => onChange('pfPflegegrad', e.target.value)}
        >
          <option value="">Bitte wählen …</option>
          <option value="Pflegegrad 1">Pflegegrad 1</option>
          <option value="Pflegegrad 2">Pflegegrad 2</option>
          <option value="Pflegegrad 3">Pflegegrad 3</option>
          <option value="Pflegegrad 4">Pflegegrad 4</option>
          <option value="Pflegegrad 5">Pflegegrad 5</option>
          <option value="Noch kein Pflegegrad">Noch kein Pflegegrad</option>
        </select>
      </Field>
    </div>
  )
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────

function Step2({ data, onChange }: { data: FormData; onChange: (key: keyof FormData, value: string) => void }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-1">Pflegeperson</h2>
        <p className="text-[14px] text-[#8B8B8B]">Angaben zur pflegenden Person</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Vorname">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. Anna"
            value={data.ppVorname}
            onChange={(e) => onChange('ppVorname', e.target.value)}
          />
        </Field>
        <Field label="Nachname">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. Müller"
            value={data.ppNachname}
            onChange={(e) => onChange('ppNachname', e.target.value)}
          />
        </Field>
      </div>

      <Field label="Straße und Hausnummer">
        <input
          type="text"
          className={inputClass}
          placeholder="z.B. Hauptstraße 5"
          value={data.ppStrasse}
          onChange={(e) => onChange('ppStrasse', e.target.value)}
        />
      </Field>

      <div className="grid grid-cols-[120px_1fr] gap-4">
        <Field label="PLZ">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. 80331"
            value={data.ppPLZ}
            onChange={(e) => onChange('ppPLZ', e.target.value)}
            maxLength={5}
          />
        </Field>
        <Field label="Ort">
          <input
            type="text"
            className={inputClass}
            placeholder="z.B. München"
            value={data.ppOrt}
            onChange={(e) => onChange('ppOrt', e.target.value)}
          />
        </Field>
      </div>

      <Field label="Beziehung zur pflegebedürftigen Person">
        <select
          className={inputClass}
          value={data.ppBeziehung}
          onChange={(e) => onChange('ppBeziehung', e.target.value)}
        >
          <option value="">Bitte wählen …</option>
          <option value="Tochter">Tochter</option>
          <option value="Sohn">Sohn</option>
          <option value="Schwiegertochter">Schwiegertochter</option>
          <option value="Schwiegersohn">Schwiegersohn</option>
          <option value="Ehepartner/in">Ehepartner/in</option>
          <option value="Geschwister">Geschwister</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </Field>
    </div>
  )
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────

function Step3({
  data,
  onLeistungToggle,
  onChange,
}: {
  data: FormData
  onLeistungToggle: (item: string) => void
  onChange: (key: keyof FormData, value: string) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-1">Pflegeleistungen</h2>
        <p className="text-[14px] text-[#8B8B8B]">Welche Leistungen werden erbracht?</p>
      </div>

      <div>
        <label className={labelClass}>Zu erbringende Pflegeleistungen</label>
        <div className="flex flex-col gap-2">
          {LEISTUNGEN_OPTIONS.map((item) => {
            const checked = data.leistungen.includes(item)
            return (
              <button
                key={item}
                type="button"
                onClick={() => onLeistungToggle(item)}
                className={[
                  'flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-[14px] transition-all',
                  checked
                    ? 'border-[#8B7355] bg-[#F8F5EF] text-[#3D3D3D] font-medium'
                    : 'border-[#E5E3DF] bg-white text-[#5A5A5A] hover:border-[#C8B99A]',
                ].join(' ')}
              >
                <span
                  className={[
                    'flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-all',
                    checked ? 'bg-[#8B7355] border-[#8B7355]' : 'border-[#D0CBC2] bg-white',
                  ].join(' ')}
                >
                  {checked && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {item}
              </button>
            )
          })}
        </div>
      </div>

      <Field label="Weitere Leistungen (optional)">
        <textarea
          className={`${inputClass} min-h-[100px] resize-y`}
          placeholder="z.B. Begleitung bei Spaziergängen, Vorlesen, …"
          value={data.weitereLeistungen}
          onChange={(e) => onChange('weitereLeistungen', e.target.value)}
        />
      </Field>

      <Field label="Wie oft wird gepflegt?">
        <select
          className={inputClass}
          value={data.haeufigkeit}
          onChange={(e) => onChange('haeufigkeit', e.target.value)}
        >
          <option value="">Bitte wählen …</option>
          <option value="Täglich">Täglich</option>
          <option value="Mehrmals pro Woche">Mehrmals pro Woche</option>
          <option value="Einmal pro Woche">Einmal pro Woche</option>
          <option value="Nach Bedarf">Nach Bedarf</option>
        </select>
      </Field>
    </div>
  )
}

// ─── Step 4 ───────────────────────────────────────────────────────────────────

function Step4({
  data,
  onChange,
  onToggle,
}: {
  data: FormData
  onChange: (key: keyof FormData, value: string) => void
  onToggle: (key: keyof FormData) => void
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-1">Vergütung & Vertrag</h2>
        <p className="text-[14px] text-[#8B8B8B]">Vereinbarte Konditionen und Vertragslaufzeit</p>
      </div>

      <Field label="Monatliche Vergütung (€)">
        <input
          type="number"
          className={inputClass}
          placeholder="z.B. 500"
          min="0"
          value={data.verguetung}
          onChange={(e) => onChange('verguetung', e.target.value)}
        />
        <p className="text-[12px] text-[#A89279] mt-1.5">
          0 € für ehrenamtliche Pflege durch Angehörige möglich
        </p>
      </Field>

      <Field label="Zahlungstag (1–28)">
        <select
          className={inputClass}
          value={data.zahlungstag}
          onChange={(e) => onChange('zahlungstag', e.target.value)}
        >
          <option value="">Bitte wählen …</option>
          {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
            <option key={d} value={String(d)}>
              {d}. des Monats
            </option>
          ))}
        </select>
      </Field>

      <Field label="Vertragsbeginn">
        <input
          type="date"
          className={inputClass}
          value={data.vertragsbeginn}
          onChange={(e) => onChange('vertragsbeginn', e.target.value)}
        />
      </Field>

      <Field label="Kündigungsfrist">
        <select
          className={inputClass}
          value={data.kuendigungsfrist}
          onChange={(e) => onChange('kuendigungsfrist', e.target.value)}
        >
          <option value="">Bitte wählen …</option>
          <option value="2 Wochen">2 Wochen</option>
          <option value="4 Wochen">4 Wochen</option>
          <option value="3 Monate">3 Monate</option>
          <option value="Jederzeit ohne Frist">Jederzeit ohne Frist</option>
        </select>
      </Field>

      {/* Aufwandsersatz toggle */}
      <div>
        <button
          type="button"
          onClick={() => onToggle('aufwandsersatz')}
          className={[
            'flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-[14px] w-full transition-all',
            data.aufwandsersatz
              ? 'border-[#8B7355] bg-[#F8F5EF] text-[#3D3D3D] font-medium'
              : 'border-[#E5E3DF] bg-white text-[#5A5A5A] hover:border-[#C8B99A]',
          ].join(' ')}
        >
          <span
            className={[
              'flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-all',
              data.aufwandsersatz ? 'bg-[#8B7355] border-[#8B7355]' : 'border-[#D0CBC2] bg-white',
            ].join(' ')}
          >
            {data.aufwandsersatz && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          Aufwandsersatz für Fahrtkosten vereinbaren
        </button>

        {data.aufwandsersatz && (
          <div className="mt-3">
            <Field label="Fahrtkosten-Pauschale (€/Monat)">
              <input
                type="number"
                className={inputClass}
                placeholder="z.B. 50"
                min="0"
                value={data.fahrtkosten}
                onChange={(e) => onChange('fahrtkosten', e.target.value)}
              />
            </Field>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Step 5 — Preview ─────────────────────────────────────────────────────────

function Step5({ data, onPrint }: { data: FormData; onPrint: () => void }) {
  const pfName = [data.pfVorname, data.pfNachname].filter(Boolean).join(' ') || '—'
  const ppName = [data.ppVorname, data.ppNachname].filter(Boolean).join(' ') || '—'
  const verguetungText =
    data.verguetung === '' || data.verguetung === '0'
      ? 'Ehrenamtlich (0 €)'
      : `${data.verguetung} € / Monat`

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-1">Vorschau & Download</h2>
        <p className="text-[14px] text-[#8B8B8B]">Bitte prüfen Sie die Angaben vor dem Drucken</p>
      </div>

      {/* Preview card */}
      <div className="bg-[#FDFCFA] border border-[#E5E3DF] rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3 pb-4 border-b border-[#F0EDE8]">
          <div className="w-10 h-10 rounded-xl bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="2" width="14" height="16" rx="2" stroke="#8B7355" strokeWidth="1.5" />
              <path d="M7 7h6M7 10h6M7 13h4" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-bold text-[#3D3D3D]">PFLEGEVERTRAG</p>
            <p className="text-[12px] text-[#8B8B8B]">
              {data.vertragsbeginn
                ? `Vertragsbeginn: ${formatDate(data.vertragsbeginn)}`
                : 'Kein Vertragsbeginn angegeben'}
            </p>
          </div>
        </div>

        <PreviewRow label="Pflegebedürftige Person" value={pfName} />
        {data.pfStrasse && (
          <PreviewRow
            label="Adresse"
            value={`${data.pfStrasse}, ${data.pfPLZ} ${data.pfOrt}`.trim()}
          />
        )}
        {data.pfPflegegrad && <PreviewRow label="Pflegegrad" value={data.pfPflegegrad} />}

        <div className="my-1 border-t border-[#F0EDE8]" />

        <PreviewRow label="Pflegeperson" value={ppName} />
        {data.ppBeziehung && (
          <PreviewRow label="Beziehung" value={data.ppBeziehung} />
        )}

        <div className="my-1 border-t border-[#F0EDE8]" />

        {data.leistungen.length > 0 && (
          <div>
            <p className="text-[12px] font-semibold text-[#8B7355] uppercase tracking-wide mb-2">
              Vereinbarte Leistungen
            </p>
            <ul className="flex flex-col gap-1">
              {data.leistungen.map((l) => (
                <li key={l} className="text-[13px] text-[#3D3D3D] flex items-start gap-2">
                  <span className="text-[#8B7355] mt-0.5">✓</span>
                  {l}
                </li>
              ))}
              {data.weitereLeistungen && (
                <li className="text-[13px] text-[#3D3D3D] flex items-start gap-2">
                  <span className="text-[#8B7355] mt-0.5">✓</span>
                  {data.weitereLeistungen}
                </li>
              )}
            </ul>
          </div>
        )}

        {data.haeufigkeit && <PreviewRow label="Häufigkeit" value={data.haeufigkeit} />}

        <div className="my-1 border-t border-[#F0EDE8]" />

        <PreviewRow label="Vergütung" value={verguetungText} />
        {data.zahlungstag && (
          <PreviewRow label="Zahlung" value={`${data.zahlungstag}. des Monats`} />
        )}
        {data.aufwandsersatz && data.fahrtkosten && (
          <PreviewRow label="Fahrtkosten-Pauschale" value={`${data.fahrtkosten} € / Monat`} />
        )}
        {data.kuendigungsfrist && (
          <PreviewRow label="Kündigungsfrist" value={data.kuendigungsfrist} />
        )}
      </div>

      {/* Print button */}
      <button
        onClick={onPrint}
        className="w-full py-4 rounded-xl bg-[#8B7355] hover:bg-[#7A6347] text-white text-[15px] font-bold transition-colors shadow-sm"
      >
        Pflegevertrag drucken / als PDF speichern
      </button>

      {/* Disclaimer */}
      <div className="bg-[#FFF8F0] border border-[#F0DFC0] rounded-xl px-5 py-4">
        <p className="text-[12px] text-[#8B6940] leading-relaxed">
          <strong>Hinweis:</strong> Dieser Vertrag dient als Vorlage und ersetzt keine Rechtsberatung.
          Wir empfehlen, den Vertrag bei steuerlicher Relevanz von einem Steuerberater prüfen zu lassen.
        </p>
      </div>
    </div>
  )
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-[12px] text-[#8B8B8B] flex-shrink-0">{label}</span>
      <span className="text-[13px] font-medium text-[#3D3D3D] text-right">{value}</span>
    </div>
  )
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}

// ─── Print / PDF generation ───────────────────────────────────────────────────

function generateAndPrint(data: FormData) {
  const pfName = [data.pfVorname, data.pfNachname].filter(Boolean).join(' ') || '_______________'
  const ppName = [data.ppVorname, data.ppNachname].filter(Boolean).join(' ') || '_______________'
  const pfAddress = data.pfStrasse
    ? `${data.pfStrasse}, ${data.pfPLZ} ${data.pfOrt}`
    : '_______________'
  const ppAddress = data.ppStrasse
    ? `${data.ppStrasse}, ${data.ppPLZ} ${data.ppOrt}`
    : '_______________'
  const pfBirth = data.pfGeburtsdatum ? formatDate(data.pfGeburtsdatum) : '_______________'
  const pfPflegegrad = data.pfPflegegrad || '_______________'
  const ppBeziehung = data.ppBeziehung || '_______________'
  const verguetungEur =
    data.verguetung === '' ? '0,00' : parseFloat(data.verguetung).toFixed(2).replace('.', ',')
  const zahlungstag = data.zahlungstag || '___'
  const vertragsbeginn = data.vertragsbeginn ? formatDate(data.vertragsbeginn) : '_______________'
  const kuendigungsfrist = data.kuendigungsfrist || '_______________'
  const heute = new Date().toLocaleDateString('de-DE')

  const alleLeistungen = [
    ...data.leistungen,
    ...(data.weitereLeistungen ? [data.weitereLeistungen] : []),
  ]

  const leistungenHTML =
    alleLeistungen.length > 0
      ? `<ul>${alleLeistungen.map((l) => `<li>${l}</li>`).join('')}</ul>`
      : '<p>Keine Leistungen ausgewählt.</p>'

  const aufwandsersatzSection =
    data.aufwandsersatz && data.fahrtkosten
      ? `
        <h2>§ 4 Aufwandsersatz</h2>
        <p>
          Die Pflegeperson erhält zusätzlich zur vereinbarten Vergütung einen monatlichen Aufwandsersatz
          für Fahrtkosten in Höhe von <strong>${parseFloat(data.fahrtkosten).toFixed(2).replace('.', ',')} €</strong>.
          Die Auszahlung erfolgt zusammen mit der monatlichen Vergütung.
        </p>
      `
      : `
        <h2>§ 4 Aufwandsersatz</h2>
        <p>Ein gesonderter Aufwandsersatz für Fahrtkosten oder sonstige Auslagen wurde nicht vereinbart.</p>
      `

  const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pflegevertrag — ${pfName}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 11pt;
    line-height: 1.65;
    color: #1a1a1a;
    background: #fff;
  }
  .page {
    max-width: 210mm;
    margin: 0 auto;
    padding: 25mm 20mm 20mm 25mm;
  }
  .header {
    text-align: center;
    margin-bottom: 32pt;
    padding-bottom: 16pt;
    border-bottom: 2px solid #1a1a1a;
  }
  .header h1 {
    font-size: 22pt;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 8pt;
  }
  .header p {
    font-size: 10pt;
    color: #555;
  }
  h2 {
    font-size: 12pt;
    font-weight: bold;
    margin-top: 22pt;
    margin-bottom: 8pt;
    border-bottom: 1px solid #ccc;
    padding-bottom: 4pt;
  }
  p { margin-bottom: 8pt; }
  ul {
    margin: 8pt 0 8pt 20pt;
  }
  ul li { margin-bottom: 4pt; }
  .parties-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20pt;
    margin: 12pt 0;
  }
  .party-box {
    border: 1px solid #ccc;
    border-radius: 4pt;
    padding: 10pt;
  }
  .party-box .role {
    font-size: 9pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #666;
    margin-bottom: 6pt;
  }
  .party-box .name {
    font-size: 12pt;
    font-weight: bold;
    margin-bottom: 4pt;
  }
  .party-box .detail {
    font-size: 10pt;
    color: #444;
  }
  .signature-section {
    margin-top: 40pt;
    page-break-inside: avoid;
  }
  .signature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30pt;
    margin-top: 16pt;
  }
  .sig-block .sig-line {
    border-bottom: 1px solid #1a1a1a;
    height: 36pt;
    margin-bottom: 6pt;
  }
  .sig-block .sig-label {
    font-size: 9pt;
    color: #555;
  }
  .notice {
    margin-top: 28pt;
    padding: 10pt;
    background: #f9f7f4;
    border-left: 3pt solid #baa07a;
    font-size: 9pt;
    color: #555;
    border-radius: 2pt;
  }
  @media print {
    @page { size: A4; margin: 25mm 20mm 20mm 25mm; }
    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    .page { padding: 0; max-width: none; }
    .no-print { display: none; }
  }
</style>
</head>
<body>
<div class="page">

  <div class="header">
    <h1>Pflegevertrag</h1>
    <p>Erstellt am ${heute} · Vertragsbeginn: ${vertragsbeginn}</p>
  </div>

  <h2>Vertragsparteien</h2>
  <div class="parties-grid">
    <div class="party-box">
      <div class="role">Pflegebedürftige Person</div>
      <div class="name">${pfName}</div>
      <div class="detail">${pfAddress}</div>
      <div class="detail">Geburtsdatum: ${pfBirth}</div>
      <div class="detail">Pflegegrad: ${pfPflegegrad}</div>
    </div>
    <div class="party-box">
      <div class="role">Pflegeperson</div>
      <div class="name">${ppName}</div>
      <div class="detail">${ppAddress}</div>
      <div class="detail">Beziehung: ${ppBeziehung}</div>
    </div>
  </div>

  <p>
    Die pflegebedürftige Person und die Pflegeperson — nachfolgend gemeinsam als „Vertragsparteien" bezeichnet —
    schließen den folgenden Pflegevertrag:
  </p>

  <h2>§ 1 Vertragsgegenstand</h2>
  <p>
    Die Pflegeperson <strong>${ppName}</strong> verpflichtet sich, die pflegebedürftige Person
    <strong>${pfName}</strong> (${pfPflegegrad}) im Rahmen der häuslichen Pflege zu unterstützen.
    Die Pflege erfolgt <strong>${data.haeufigkeit || 'nach Vereinbarung'}</strong> und umfasst die in § 2
    beschriebenen Leistungen.
  </p>
  <p>
    Dieser Vertrag tritt zum <strong>${vertragsbeginn}</strong> in Kraft.
  </p>

  <h2>§ 2 Zu erbringende Pflegeleistungen</h2>
  <p>Die Pflegeperson erbringt folgende Leistungen:</p>
  ${leistungenHTML}

  <h2>§ 3 Vergütung</h2>
  <p>
    Die pflegebedürftige Person zahlt der Pflegeperson für die vereinbarten Leistungen eine
    monatliche Vergütung in Höhe von <strong>${verguetungEur} €</strong> (in Worten: ${verguetungInWords(verguetungEur)} Euro).
  </p>
  <p>
    Die Vergütung ist jeweils zum <strong>${zahlungstag}. eines Monats</strong> fällig und wird auf ein
    von der Pflegeperson zu benennendes Konto überwiesen.
  </p>

  ${aufwandsersatzSection}

  <h2>§ 5 Vertragslaufzeit und Kündigung</h2>
  <p>
    Der Vertrag wird auf unbestimmte Zeit geschlossen. Er beginnt am <strong>${vertragsbeginn}</strong>.
  </p>
  <p>
    Jede Vertragspartei kann den Vertrag mit einer Frist von <strong>${kuendigungsfrist}</strong>
    schriftlich kündigen. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
  </p>
  <p>
    Im Todesfall der pflegebedürftigen Person endet der Vertrag automatisch. Offene Vergütungsansprüche
    werden mit dem Nachlass abgerechnet.
  </p>

  <h2>§ 6 Datenschutz und Schweigepflicht</h2>
  <p>
    Die Pflegeperson verpflichtet sich, alle im Rahmen der Pflegetätigkeit erlangten persönlichen
    und gesundheitlichen Informationen der pflegebedürftigen Person vertraulich zu behandeln und
    nicht an Dritte weiterzugeben, sofern dies nicht gesetzlich geboten oder ausdrücklich gestattet ist.
  </p>

  <h2>§ 7 Salvatorische Klausel</h2>
  <p>
    Sollten einzelne Bestimmungen dieses Vertrages unwirksam oder undurchführbar sein oder nach
    Vertragsschluss unwirksam oder undurchführbar werden, bleibt davon die Wirksamkeit des Vertrages
    im Übrigen unberührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung soll diejenige
    wirksame und durchführbare Regelung treten, deren Wirkungen der wirtschaftlichen Zielsetzung möglichst
    nahekommen, die die Vertragsparteien mit der unwirksamen bzw. undurchführbaren Bestimmung verfolgt haben.
  </p>

  <div class="signature-section">
    <h2>Unterschriften</h2>
    <p>
      Dieser Vertrag wurde in zweifacher Ausfertigung erstellt. Jede Vertragspartei erhält eine Ausfertigung.
    </p>
    <div class="signature-grid">
      <div class="sig-block">
        <div class="sig-line"></div>
        <div class="sig-label">Ort, Datum</div>
        <div class="sig-line" style="margin-top: 18pt;"></div>
        <div class="sig-label">Unterschrift pflegebedürftige Person<br>${pfName}</div>
      </div>
      <div class="sig-block">
        <div class="sig-line"></div>
        <div class="sig-label">Ort, Datum</div>
        <div class="sig-line" style="margin-top: 18pt;"></div>
        <div class="sig-label">Unterschrift Pflegeperson<br>${ppName}</div>
      </div>
    </div>
  </div>

  <div class="notice">
    <strong>Hinweis:</strong> Dieser Pflegevertrag wurde mit dem Pflegevertrag-Generator von primundus.de erstellt
    und dient als Vorlage. Er ersetzt keine individuelle Rechtsberatung. Bei steuerlicher Relevanz empfehlen wir
    die Prüfung durch einen Steuerberater.
  </div>

</div>
<script>window.onload = function() { window.print(); }</script>
</body>
</html>`

  const win = window.open('', '_blank', 'width=900,height=700')
  if (win) {
    win.document.write(html)
    win.document.close()
  }
}

function verguetungInWords(eur: string): string {
  const n = parseFloat(eur.replace(',', '.'))
  if (isNaN(n) || n === 0) return 'null'
  if (n === 100) return 'einhundert'
  if (n === 200) return 'zweihundert'
  if (n === 300) return 'dreihundert'
  if (n === 400) return 'vierhundert'
  if (n === 500) return 'fünfhundert'
  if (n === 600) return 'sechshundert'
  if (n === 700) return 'siebenhundert'
  if (n === 800) return 'achthundert'
  if (n === 900) return 'neunhundert'
  if (n === 1000) return 'eintausend'
  return String(n)
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PflegevertragClient() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(INITIAL_FORM)

  function handleChange(key: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleToggle(key: keyof FormData) {
    setForm((prev) => ({ ...prev, [key]: !prev[key as keyof FormData] }))
  }

  function handleLeistungToggle(item: string) {
    setForm((prev) => {
      const has = prev.leistungen.includes(item)
      return {
        ...prev,
        leistungen: has
          ? prev.leistungen.filter((l) => l !== item)
          : [...prev.leistungen, item],
      }
    })
  }

  function handleNext() {
    setStep((s) => Math.min(s + 1, 5))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleBack() {
    setStep((s) => Math.max(s - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-[#F8F7F5] min-h-screen">
      <div className="max-w-[680px] mx-auto px-5 py-10">

        {/* Page heading */}
        <div className="mb-8">
          <nav className="text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">Pflegevertrag-Generator</span>
          </nav>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B7355] mb-2">
            Kostenlos · Kein Konto nötig
          </p>
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#3D3D3D] leading-tight mb-3">
            Pflegevertrag-Generator
          </h1>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-3">
            Erstellen Sie in 5 Minuten einen rechtssicheren Pflegevertrag — kostenlos, individuell anpassbar, sofort druckfertig.
          </p>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed">
            Wenn Angehörige die Pflege übernehmen und dafür Pflegegeld beziehen, sollte die Vereinbarung schriftlich festgehalten sein —
            das schützt beide Seiten und ist Voraussetzung für die steuerliche Anerkennung der Pflegekosten.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl px-6 py-8 shadow-sm">
          <StepIndicator step={step} />

          {step === 1 && <Step1 data={form} onChange={handleChange} />}
          {step === 2 && <Step2 data={form} onChange={handleChange} />}
          {step === 3 && (
            <Step3
              data={form}
              onLeistungToggle={handleLeistungToggle}
              onChange={handleChange}
            />
          )}
          {step === 4 && (
            <Step4
              data={form}
              onChange={handleChange}
              onToggle={handleToggle}
            />
          )}
          {step === 5 && (
            <Step5 data={form} onPrint={() => generateAndPrint(form)} />
          )}

          <NavButtons
            step={step}
            onBack={handleBack}
            onNext={handleNext}
            onPrint={() => generateAndPrint(form)}
          />
        </div>

        {/* Trust signals */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {['Kostenlos & ohne Anmeldung', 'Kein Datenspeicher — lokal im Browser', 'Sofort als PDF druckbar'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[12px] text-[#8B8B8B]">
              <span className="text-[#8B7355]">✓</span>
              {t}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
