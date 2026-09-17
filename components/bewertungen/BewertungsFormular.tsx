'use client'

// Bewertungsformular auf /erfahrungen. Schutz gegen Spam und gekaufte Bewertungen:
//   1. unsichtbares Feld „website" (Bots füllen es) + Mindestzeit, beides prüft das Backend
//   2. Cloudflare Turnstile, sobald TURNSTILE_SITE_KEY gesetzt ist
//   3. Bestätigungslink per E-Mail, erst danach geht die Bewertung in die Prüfung
//   4. Freigabe durch das Team; passt die E-Mail zu einer Kundin/einem Kunden, „Kunde bestätigt"
//   5. Backend: höchstens 3 Bewertungen je Anschluss pro Tag, 1 je E-Mail-Adresse in 30 Tagen
// Regeln für Text/Name/Ort wie im Backend (CAapp project 3, lib/bewertungen.ts).

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { BEWERTUNG_API, BEWERTUNGEN_ONLINE, PROFILE, TURNSTILE_SITE_KEY } from '@/lib/bewertungen'
import { GoogleLogo } from './Sterne'

const STERN_TEXT = ['', 'Sehr schlecht', 'Schlecht', 'Geht so', 'Gut', 'Sehr gut']
const TEXT_MIN = 20
const TEXT_MAX = 2000
const LINK = /(https?:\/\/|www\.)|\b[a-z0-9-]+\.(de|com|net|org|eu|info|pl)\b/i

type Felder = 'sterne' | 'text' | 'name' | 'ort' | 'email' | 'einwilligung' | '_'
type Status = 'offen' | 'sendet' | 'fertig' | 'vorbereitung'

declare global {
  interface Window {
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; reset: (id?: string) => void }
  }
}

const FELD =
  'mt-2 block w-full rounded-[12px] border bg-white px-4 text-[17px] text-pm-ink placeholder:text-pm-mute/80 transition-colors focus:outline-none focus:ring-2 focus:ring-pm-taupe/25'
const LABEL = 'block text-[15px] font-semibold text-pm-ink'

export function BewertungsFormular() {
  const [sterne, setSterne] = useState(0)
  const [hover, setHover] = useState(0)
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [ort, setOrt] = useState('')
  const [email, setEmail] = useState('')
  const [einwilligung, setEinwilligung] = useState(false)
  const [website, setWebsite] = useState('')
  const [fehler, setFehler] = useState<Partial<Record<Felder, string>>>({})
  const [status, setStatus] = useState<Status>('offen')
  const [hinweis, setHinweis] = useState<'bestaetigt' | 'ungueltig' | null>(null)
  const [kopiert, setKopiert] = useState(false)
  const gestartet = useRef(Date.now())
  const turnstileToken = useRef('')
  const turnstileBox = useRef<HTMLDivElement>(null)
  const kopf = useRef<HTMLDivElement>(null)

  // Rückkehr aus dem Bestätigungslink (Backend leitet mit ?bewertung=… zurück)
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('bewertung')
    if (p === 'bestaetigt' || p === 'ungueltig') setHinweis(p)
  }, [])

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileBox.current) return
    const box = turnstileBox.current
    const zeichnen = () =>
      window.turnstile?.render(box, {
        sitekey: TURNSTILE_SITE_KEY,
        language: 'de',
        callback: (t: string) => (turnstileToken.current = t),
        'expired-callback': () => (turnstileToken.current = ''),
      })
    if (window.turnstile) return void zeichnen()
    const s = document.createElement('script')
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    s.async = true
    s.onload = zeichnen
    document.head.appendChild(s)
  }, [])

  function pruefen(): Partial<Record<Felder, string>> {
    const f: Partial<Record<Felder, string>> = {}
    const t = text.trim()
    if (sterne < 1) f.sterne = 'Bitte wählen Sie 1 bis 5 Sterne.'
    if (t.length < TEXT_MIN) f.text = `Bitte schreiben Sie mindestens ${TEXT_MIN} Zeichen.`
    else if (t.length > TEXT_MAX) f.text = `Bitte höchstens ${TEXT_MAX} Zeichen.`
    else if (LINK.test(t)) f.text = 'Bitte keine Links in der Bewertung.'
    if (name.trim().length < 2) f.name = 'Bitte geben Sie einen Namen an, z. B. Vorname und ersten Buchstaben des Nachnamens.'
    else if (name.trim().length > 60) f.name = 'Bitte höchstens 60 Zeichen.'
    if (ort.trim().length > 60) f.ort = 'Bitte höchstens 60 Zeichen.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) f.email = 'Bitte prüfen Sie die E-Mail-Adresse.'
    if (!einwilligung) f.einwilligung = 'Bitte bestätigen Sie die Einwilligung.'
    return f
  }

  async function absenden(e: FormEvent) {
    e.preventDefault()
    const f = pruefen()
    setFehler(f)
    if (Object.keys(f).length) {
      const erstes = (['sterne', 'text', 'name', 'ort', 'email', 'einwilligung'] as const).find((k) => f[k])
      document.getElementById(`bw-${erstes}`)?.focus()
      return
    }

    if (!BEWERTUNGEN_ONLINE) {
      const test = /[?&]test=1(?:&|$)/.test(window.location.search)
      setStatus(test ? 'fertig' : 'vorbereitung')
      kopf.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    setStatus('sendet')
    try {
      const res = await fetch(BEWERTUNG_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sterne,
          text: text.trim(),
          name: name.trim(),
          ort: ort.trim() || undefined,
          email: email.trim(),
          einwilligung,
          website,
          gestartet_ms: gestartet.current,
          turnstile_token: turnstileToken.current || undefined,
        }),
      })
      if (res.ok) {
        setStatus('fertig')
        kopf.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      const data = (await res.json().catch(() => ({}))) as { fehler?: Partial<Record<Felder, string>> }
      setFehler(data.fehler ?? { _: 'Das hat nicht geklappt. Bitte versuchen Sie es später noch einmal.' })
      if (TURNSTILE_SITE_KEY) window.turnstile?.reset()
    } catch {
      setFehler({ _: 'Keine Verbindung. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es noch einmal.' })
    }
    setStatus('offen')
  }

  async function textKopieren() {
    try {
      await navigator.clipboard.writeText(text.trim())
      setKopiert(true)
    } catch {
      setKopiert(false)
    }
  }

  const anzeigeSterne = hover || sterne
  const rahmen = (feld: Felder) => (fehler[feld] ? 'border-pm-coral' : 'border-pm-line focus:border-pm-taupe')

  return (
    <div ref={kopf} className="scroll-mt-[88px] md:scroll-mt-[150px] bg-white rounded-[24px] shadow-lift p-6 sm:p-8">
      {hinweis === 'bestaetigt' && status === 'offen' && (
        <p role="status" className="mb-6 rounded-[14px] bg-pm-mint px-4 py-3 text-[16px] leading-[1.55] text-pm-green-deep">
          <strong>Danke, Ihre Bewertung ist bestätigt.</strong> Wir prüfen sie jetzt und veröffentlichen sie danach auf dieser Seite.
        </p>
      )}
      {hinweis === 'ungueltig' && status === 'offen' && (
        <p role="alert" className="mb-6 rounded-[14px] bg-pm-coral-tint px-4 py-3 text-[16px] leading-[1.55] text-pm-coral-ink">
          <strong>Dieser Bestätigungslink ist ungültig oder älter als 7 Tage.</strong> Sie können Ihre Bewertung hier neu abgeben.
        </p>
      )}

      {status === 'fertig' ? (
        <div role="status">
          <p className="text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-pm-ink">Fast geschafft</p>
          <p className="mt-3 text-[17px] leading-[1.65] text-pm-body">
            Wir haben eine E-Mail an <strong className="text-pm-ink [overflow-wrap:anywhere]">{email.trim()}</strong> geschickt. Bitte bestätigen Sie Ihre
            Bewertung über den Link darin. Danach prüfen wir sie und veröffentlichen sie auf dieser Seite.
          </p>
          <p className="mt-3 text-[15px] leading-[1.55] text-pm-mute">Keine E-Mail da? Bitte sehen Sie auch im Spam-Ordner nach. Der Link gilt 7 Tage.</p>
        </div>
      ) : status === 'vorbereitung' ? (
        <div role="status">
          <p className="text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-pm-ink">Danke für Ihre Bewertung</p>
          <p className="mt-3 text-[17px] leading-[1.65] text-pm-body">
            Bewertungen direkt auf dieser Seite schalten wir in Kürze frei. Bis dahin können Sie Ihren Text auf Google veröffentlichen: kopieren, Google öffnen,
            Sterne wählen und einfügen.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={textKopieren}
              className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full border border-pm-line bg-white text-pm-ink font-semibold text-[16px] hover:border-pm-taupe transition-colors"
            >
              {kopiert ? 'Text kopiert' : 'Text kopieren'}
            </button>
            <a
              href={PROFILE.muenchen.bewertenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[16px] transition-colors"
            >
              <span className="bg-white rounded-full p-[3px] inline-flex"><GoogleLogo groesse={14} /></span>
              Auf Google bewerten
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={absenden} noValidate aria-describedby={fehler._ ? 'bw-fehler' : undefined}>
          <fieldset>
            <legend className={LABEL}>Ihre Bewertung</legend>
            <div
              id="bw-sterne"
              tabIndex={-1}
              className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 focus:outline-none"
              onMouseLeave={() => setHover(0)}
            >
              <div className="flex" role="radiogroup" aria-label="Sterne von 1 bis 5" aria-describedby={fehler.sterne ? 'bw-sterne-fehler' : undefined}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <label key={n} className="cursor-pointer p-1" onMouseEnter={() => setHover(n)}>
                    <input
                      type="radio"
                      name="sterne"
                      value={n}
                      checked={sterne === n}
                      onChange={() => {
                        setSterne(n)
                        setFehler((f) => ({ ...f, sterne: undefined }))
                      }}
                      className="peer sr-only"
                      aria-label={`${n} ${n === 1 ? 'Stern' : 'Sterne'}: ${STERN_TEXT[n]}`}
                    />
                    <svg viewBox="0 0 20 20" className="w-10 h-10 sm:w-11 sm:h-11 rounded-md peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-pm-coral" aria-hidden="true">
                      <path
                        d="M10 1.6l2.47 5.2 5.7.72-4.2 3.93 1.08 5.64L10 14.3l-5.05 2.79 1.08-5.64-4.2-3.93 5.7-.72z"
                        className={`transition-colors ${n <= anzeigeSterne ? 'fill-pm-gold' : 'fill-pm-line'}`}
                      />
                    </svg>
                  </label>
                ))}
              </div>
              <span className="text-[16px] font-semibold text-pm-taupe-ink min-w-[7rem]" aria-hidden="true">
                {anzeigeSterne ? STERN_TEXT[anzeigeSterne] : 'Sterne wählen'}
              </span>
            </div>
            {fehler.sterne && <p id="bw-sterne-fehler" className="mt-1 text-[14.5px] text-pm-coral-ink">{fehler.sterne}</p>}
          </fieldset>

          <div className="mt-6">
            <label htmlFor="bw-text" className={LABEL}>Ihre Erfahrung</label>
            <textarea
              id="bw-text"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
                if (fehler.text) setFehler((f) => ({ ...f, text: undefined }))
              }}
              rows={6}
              maxLength={TEXT_MAX + 200}
              placeholder="Wie lief die Suche nach der Betreuungskraft? Wie klappt es im Alltag?"
              aria-invalid={!!fehler.text}
              aria-describedby={fehler.text ? 'bw-text-fehler' : 'bw-text-zaehler'}
              className={`${FELD} ${rahmen('text')} py-3 leading-[1.55] resize-y min-h-[150px]`}
            />
            {fehler.text ? (
              <p id="bw-text-fehler" className="mt-1 text-[14.5px] text-pm-coral-ink">{fehler.text}</p>
            ) : (
              <p id="bw-text-zaehler" className="mt-1 text-right text-[14px] text-pm-mute [font-variant-numeric:tabular-nums]">
                {text.trim().length < TEXT_MIN ? `noch ${TEXT_MIN - text.trim().length} Zeichen` : `${text.trim().length} Zeichen`}
              </p>
            )}
          </div>

          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="bw-name" className={LABEL}>Name, wie er erscheinen soll</label>
              <input
                id="bw-name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (fehler.name) setFehler((f) => ({ ...f, name: undefined }))
                }}
                autoComplete="off"
                placeholder="z. B. Helga M."
                aria-invalid={!!fehler.name}
                aria-describedby={fehler.name ? 'bw-name-fehler' : undefined}
                className={`${FELD} ${rahmen('name')} min-h-[52px]`}
              />
              {fehler.name && <p id="bw-name-fehler" className="mt-1 text-[14.5px] text-pm-coral-ink">{fehler.name}</p>}
            </div>
            <div>
              <label htmlFor="bw-ort" className={LABEL}>
                Ort <span className="font-normal text-pm-mute">(freiwillig)</span>
              </label>
              <input
                id="bw-ort"
                value={ort}
                onChange={(e) => setOrt(e.target.value)}
                autoComplete="address-level2"
                placeholder="z. B. Augsburg"
                aria-invalid={!!fehler.ort}
                className={`${FELD} ${rahmen('ort')} min-h-[52px]`}
              />
              {fehler.ort && <p className="mt-1 text-[14.5px] text-pm-coral-ink">{fehler.ort}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="bw-email" className={LABEL}>E-Mail-Adresse</label>
            <input
              id="bw-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (fehler.email) setFehler((f) => ({ ...f, email: undefined }))
              }}
              aria-invalid={!!fehler.email}
              aria-describedby="bw-email-hilfe"
              className={`${FELD} ${rahmen('email')} min-h-[52px]`}
            />
            <p id="bw-email-hilfe" className={`mt-1 text-[14.5px] ${fehler.email ? 'text-pm-coral-ink' : 'text-pm-mute'}`}>
              {fehler.email ?? 'Für den Bestätigungslink. Wir veröffentlichen sie nicht.'}
            </p>
          </div>

          {/* Für Menschen unsichtbar; Bots füllen es aus */}
          <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <label htmlFor="bw-website">Website</label>
            <input id="bw-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>

          <div className="mt-6">
            <label className="flex gap-3 cursor-pointer">
              <input
                id="bw-einwilligung"
                type="checkbox"
                checked={einwilligung}
                onChange={(e) => {
                  setEinwilligung(e.target.checked)
                  if (fehler.einwilligung) setFehler((f) => ({ ...f, einwilligung: undefined }))
                }}
                aria-invalid={!!fehler.einwilligung}
                className="mt-1 w-5 h-5 flex-none accent-pm-coral"
              />
              <span className="text-[15px] leading-[1.55] text-pm-body">
                Ich habe die Betreuung durch Primundus in meiner Familie selbst erlebt. Primundus darf Sterne, Text, Name und Ort auf
                primundus.de veröffentlichen. Meine E-Mail-Adresse wird nur für die Bestätigung und mögliche Rückfragen genutzt (
                <a href="/datenschutz#bewertungen" className="underline underline-offset-2 hover:text-pm-ink">Datenschutz</a>).
              </span>
            </label>
            {fehler.einwilligung && <p className="mt-1 ml-8 text-[14.5px] text-pm-coral-ink">{fehler.einwilligung}</p>}
          </div>

          {TURNSTILE_SITE_KEY && <div ref={turnstileBox} className="mt-6 min-h-[65px]" />}

          {fehler._ && (
            <p id="bw-fehler" role="alert" className="mt-6 rounded-[12px] bg-pm-coral-tint px-4 py-3 text-[15.5px] leading-[1.5] text-pm-coral-ink">
              {fehler._}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sendet'}
            className="mt-7 inline-flex w-full sm:w-auto items-center justify-center min-h-[56px] px-8 rounded-full bg-pm-coral hover:bg-pm-coral-deep disabled:opacity-60 text-white font-bold text-[17px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
          >
            {status === 'sendet' ? 'Wird gesendet …' : 'Bewertung absenden'}
          </button>
        </form>
      )}
    </div>
  )
}
