'use client'

// Pflegegrad-Rechner nach dem Begutachtungsinstrument des Medizinischen Dienstes (20.09.2026).
// Alle Kriterien, Punkte und Grenzen kommen aus lib/begutachtung.ts (Anlage 1 und 2 zu § 15 SGB XI).
// Sechs Module, ein Modul je Schritt; alles, was die Person allein schafft, bleibt auf „selbständig".
// Nichts wird gespeichert oder gesendet. Das Ergebnis lässt sich drucken oder als PDF sichern
// (Fragebogen für die Begutachtung). Optik wie die Vorlage: weiße Karte, pm-Farben, keine Symbole.
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { KNOPF } from '@/components/ArticleCTA'
import { PflegegradSkala } from '@/components/grafik/Grafik'
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'
import {
  berechnen, ERKLAERUNG_STUFEN, GEWICHTE_PROZENT, leereAntworten, MODUL1, MODUL2, MODUL3, MODUL4, MODUL4_KIND, MODUL4_SONDE, MODUL5_DIAET,
  MODUL5_TEIL1, MODUL5_TEIL2, MODUL5_TEIL3, MODUL6, PFLEGEGRAD_NAMEN, SCHWEREGRAD, STUFEN_FAEHIGKEIT, STUFEN_HAEUFIGKEIT, STUFEN_SELBSTAENDIG,
  STUFEN_SONDE, type Antworten, type Haeufigkeit, type Kriterium, type Person,
} from '@/lib/begutachtung'

const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe'
const KARTE = 'bg-white rounded-[20px] shadow-lift p-5 sm:p-6 md:p-8'
const ZWEITKNOPF = 'inline-flex items-center justify-center min-h-[48px] px-5 rounded-full border border-pm-line bg-white text-[16px] font-semibold text-pm-ink hover:border-pm-taupe transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-pflegegrad-rechner'

const fmt = (n: number) => n.toLocaleString('de-DE', { maximumFractionDigits: 2 })
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

type Schritt = 'start' | 'modul' | 'ergebnis'

const MODULE_TITEL = [
  { nr: 1, name: 'Mobilität', gewicht: `${GEWICHTE_PROZENT.modul1} %`, frage: 'Wie selbständig bewegt sich die Person?' },
  { nr: 2, name: 'Kognitive und kommunikative Fähigkeiten', gewicht: `${GEWICHTE_PROZENT.modul2und3} % gemeinsam mit Modul 3`, frage: 'Wie gut sind Erinnern, Orientierung, Verstehen und Verständigung?' },
  { nr: 3, name: 'Verhaltensweisen und psychische Problemlagen', gewicht: `${GEWICHTE_PROZENT.modul2und3} % gemeinsam mit Modul 2`, frage: 'Wie oft kommen diese Verhaltensweisen vor, sodass jemand eingreifen muss?' },
  { nr: 4, name: 'Selbstversorgung', gewicht: `${GEWICHTE_PROZENT.modul4} %`, frage: 'Wie selbständig ist die Person bei Körperpflege, Anziehen, Essen und Toilette?' },
  { nr: 5, name: 'Umgang mit Krankheit und Therapie', gewicht: `${GEWICHTE_PROZENT.modul5} %`, frage: 'Welche ärztlich verordneten Maßnahmen braucht die Person, die sie nicht allein schafft, und wie oft?' },
  { nr: 6, name: 'Gestaltung des Alltagslebens und sozialer Kontakte', gewicht: `${GEWICHTE_PROZENT.modul6} %`, frage: 'Wie selbständig gestaltet die Person ihren Tag und ihre Kontakte?' },
]

/** Vier Stufen als Schalterleiste (Module 1, 2, 3, 4, 6 und Kriterium 5.16) */
function Stufen({
  name, wert, stufen, erklaerungen, onChange,
}: { name: string; wert: number; stufen: readonly string[]; erklaerungen?: string[]; onChange: (v: number) => void }) {
  return (
    <div role="radiogroup" aria-label={name} className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {stufen.map((s, i) => {
        const aktiv = wert === i
        return (
          <button
            key={s}
            type="button"
            role="radio"
            aria-checked={aktiv}
            title={erklaerungen?.[i]}
            onClick={() => onChange(i)}
            className={`min-h-[48px] rounded-[12px] border px-2.5 py-2 text-[14px] font-semibold leading-[1.25] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe ${
              aktiv ? 'border-pm-taupe bg-pm-taupe text-white' : 'border-pm-line bg-white text-pm-ink hover:border-pm-taupe'
            }`}
          >
            {s}
          </button>
        )
      })}
    </div>
  )
}

function Kriteriumzeile({ k, children }: { k: { nr: string; name: string; erklaerung: string }; children: ReactNode }) {
  return (
    <div className="border-t border-pm-line-soft pt-5 first:border-t-0 first:pt-0">
      <p className="text-[16.5px] font-bold leading-[1.35] text-pm-ink">
        <span className="text-pm-taupe [font-variant-numeric:tabular-nums]">{k.nr}</span> {k.name}
      </p>
      <p className="mt-1 text-[14.5px] leading-[1.5] text-pm-mute">{k.erklaerung}</p>
      <div className="mt-3">{children}</div>
    </div>
  )
}

/** Häufigkeit einer Maßnahme: Einheit und Anzahl (Modul 5) */
function HaeufigkeitFeld({
  name, wert, einheiten, onChange,
}: { name: string; wert: Haeufigkeit; einheiten: ('tag' | 'woche' | 'monat')[]; onChange: (h: Haeufigkeit) => void }) {
  const label: Record<string, string> = { keine: 'entfällt oder selbständig', tag: 'täglich', woche: 'wöchentlich', monat: 'monatlich' }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        aria-label={`${name}: wie oft`}
        value={wert.einheit}
        onChange={(e) => {
          const einheit = e.target.value as Haeufigkeit['einheit']
          onChange({ einheit, anzahl: einheit === 'keine' ? 0 : Math.max(1, wert.anzahl || 1) })
        }}
        className="min-h-[48px] rounded-[12px] border border-pm-line bg-white px-3 text-[15px] font-semibold text-pm-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
      >
        <option value="keine">{label.keine}</option>
        {einheiten.map((e) => (
          <option key={e} value={e}>{label[e]}</option>
        ))}
      </select>
      {wert.einheit !== 'keine' && (
        <label className="flex items-center gap-2 text-[15px] text-pm-body">
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={99}
            value={wert.anzahl}
            onChange={(e) => onChange({ ...wert, anzahl: Math.min(99, Math.max(1, Number(e.target.value) || 1)) })}
            aria-label={`${name}: Anzahl ${label[wert.einheit]}`}
            className="w-20 min-h-[48px] rounded-[12px] border border-pm-line bg-white px-3 text-center text-[16px] font-bold text-pm-ink [font-variant-numeric:tabular-nums] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
          />
          <span>{wert.einheit === 'tag' ? 'mal am Tag' : wert.einheit === 'woche' ? 'mal in der Woche' : 'mal im Monat'}</span>
        </label>
      )}
    </div>
  )
}

function JaNein({ name, wert, onChange }: { name: string; wert: boolean; onChange: (v: boolean) => void }) {
  return (
    <div role="radiogroup" aria-label={name} className="grid max-w-[320px] grid-cols-2 gap-2">
      {[
        ['Nein', false],
        ['Ja', true],
      ].map(([t, v]) => (
        <button
          key={String(t)}
          type="button"
          role="radio"
          aria-checked={wert === v}
          onClick={() => onChange(v as boolean)}
          className={`min-h-[48px] rounded-[12px] border px-3 text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe ${
            wert === v ? 'border-pm-taupe bg-pm-taupe text-white' : 'border-pm-line bg-white text-pm-ink hover:border-pm-taupe'
          }`}
        >
          {t as string}
        </button>
      ))}
    </div>
  )
}

function Legende({ stufen, erklaerungen }: { stufen: readonly string[]; erklaerungen: string[] }) {
  return (
    <details className="rounded-[14px] border border-pm-line bg-pm-paper px-4 py-3">
      <summary className="cursor-pointer text-[15px] font-semibold text-pm-ink">Was die Stufen bedeuten</summary>
      <dl className="mt-3 grid gap-2 text-[14.5px] leading-[1.5]">
        {stufen.map((s, i) => (
          <div key={s} className="grid gap-0.5 sm:grid-cols-[190px_1fr] sm:gap-3">
            <dt className="font-semibold text-pm-ink">{s}</dt>
            <dd className="text-pm-body">{erklaerungen[i]}</dd>
          </div>
        ))}
      </dl>
    </details>
  )
}

export function PflegegradRechner() {
  const [schritt, setSchritt] = useState<Schritt>('start')
  const [modul, setModul] = useState(0)
  const [a, setA] = useState<Antworten>(() => leereAntworten('erwachsen'))
  const ergebnis = useMemo(() => berechnen(a), [a])
  const setze = (patch: Partial<Antworten>) => setA((alt) => ({ ...alt, ...patch }))
  const setzeListe = (feld: 'm1' | 'm2' | 'm3' | 'm4' | 'm6', i: number, v: number) =>
    setA((alt) => ({ ...alt, [feld]: alt[feld].map((x, j) => (j === i ? v : x)) }))
  const setzeHaeufigkeit = (feld: 'm5teil1' | 'm5teil2' | 'm5teil3', i: number, h: Haeufigkeit) =>
    setA((alt) => ({ ...alt, [feld]: alt[feld].map((x, j) => (j === i ? h : x)) }))

  // Zum Anfang der Karte springen, wenn Schritt oder Modul wechseln (Handy: sonst steht man mitten in der Seite)
  useEffect(() => {
    if (schritt === 'start') return
    const el = document.getElementById('pflegegrad-rechner')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [schritt, modul])

  const drucken = () => {
    const html = document.documentElement
    html.classList.add('pgr-druck')
    const aufraeumen = () => html.classList.remove('pgr-druck')
    window.addEventListener('afterprint', aufraeumen, { once: true })
    window.print()
    setTimeout(aufraeumen, 2000)
  }

  const kinderModus = a.person !== 'erwachsen'
  const anzahlFragen = a.person === 'saeugling' ? 5 + 11 + 13 + 1 + 17 + 6 : kinderModus ? 5 + 11 + 13 + 13 + 17 + 6 : 5 + 11 + 13 + 13 + 16 + 6

  if (schritt === 'start') {
    return (
      <div id="pflegegrad-rechner" className={`${KARTE} scroll-mt-[88px] md:scroll-mt-[150px]`}>
        <p className={AUGENBRAUE}>Pflegegrad-Rechner</p>
        <p className="mt-2 text-[22px] font-bold leading-[1.25] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">
          Für wen möchten Sie den Pflegegrad berechnen?
        </p>
        <div role="radiogroup" aria-label="Person" className="mt-5 grid gap-2 sm:grid-cols-3">
          {(
            [
              ['erwachsen', 'Erwachsener', 'ab 18 Jahren'],
              ['kind', 'Kind ab 18 Monaten', 'Vergleich mit gleichaltrigen Kindern'],
              ['saeugling', 'Kind bis 18 Monate', 'eine Stufe höher, § 15 Abs. 7'],
            ] as [Person, string, string][]
          ).map(([wert, titel, hinweis]) => (
            <button
              key={wert}
              type="button"
              role="radio"
              aria-checked={a.person === wert}
              onClick={() => setA(leereAntworten(wert))}
              className={`min-h-[64px] rounded-[14px] border px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe ${
                a.person === wert ? 'border-pm-taupe bg-pm-taupe text-white' : 'border-pm-line bg-white text-pm-ink hover:border-pm-taupe'
              }`}
            >
              <span className="block text-[16px] font-bold leading-[1.3]">{titel}</span>
              <span className={`block text-[13.5px] leading-[1.4] ${a.person === wert ? 'text-white/85' : 'text-pm-mute'}`}>{hinweis}</span>
            </button>
          ))}
        </div>

        <label className="mt-6 block">
          <span className="block text-[16px] font-semibold text-pm-ink">Gibt es schon einen Pflegegrad?</span>
          <span className="mt-0.5 block text-[14.5px] text-pm-mute">Dann zeigen wir am Ende, ob sich ein Antrag auf Höherstufung lohnt.</span>
          <select
            value={a.aktuellerPflegegrad ?? ''}
            onChange={(e) => setze({ aktuellerPflegegrad: e.target.value === '' ? null : Number(e.target.value) })}
            className="mt-2 min-h-[48px] w-full max-w-[320px] rounded-[12px] border border-pm-line bg-white px-3 text-[15px] font-semibold text-pm-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
          >
            <option value="">Noch kein Pflegegrad</option>
            {[1, 2, 3, 4, 5].map((g) => (
              <option key={g} value={g}>Pflegegrad {g}</option>
            ))}
          </select>
        </label>

        <div className="mt-6 rounded-[14px] bg-pm-paper px-4 py-3.5 text-[15px] leading-[1.55] text-pm-body">
          <p>
            Sie beantworten die {anzahlFragen} Fragen des Medizinischen Dienstes in sechs Modulen, etwa zehn Minuten. Alles, was die Person allein
            schafft, lassen Sie auf „selbständig" stehen; markieren Sie nur, wo Hilfe nötig ist.
          </p>
          <p className="mt-2">Keine Anmeldung, keine E-Mail-Adresse. Ihre Antworten bleiben auf Ihrem Gerät; wir speichern und senden nichts.</p>
          {a.person === 'kind' && (
            <p className="mt-2">
              Bei Kindern zählt nur, was ein gesundes Kind gleichen Alters schon allein kann. Was gleichaltrige Kinder ebenfalls nicht schaffen, bleibt auf „selbständig".
            </p>
          )}
          {a.person === 'saeugling' && (
            <p className="mt-2">
              Bei Kindern bis 18 Monate ersetzt eine Frage zur Nahrungsaufnahme das Modul Selbstversorgung, und die Punkte ergeben einen Pflegegrad höher als bei Erwachsenen.
            </p>
          )}
        </div>

        <button type="button" onClick={() => { setModul(0); setSchritt('modul') }} className={`${KNOPF} mt-6 sm:self-start`}>
          Rechner starten
        </button>
      </div>
    )
  }

  if (schritt === 'modul') {
    const m = MODULE_TITEL[modul]
    const fortschritt = ((modul + 1) / 6) * 100
    return (
      <div id="pflegegrad-rechner" className={`${KARTE} scroll-mt-[88px] md:scroll-mt-[150px]`}>
        <div className="flex items-baseline justify-between gap-4">
          <p className={AUGENBRAUE}>Modul {m.nr} von 6</p>
          <p className="text-[13.5px] text-pm-mute">zählt {m.gewicht}</p>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-pm-line-soft" aria-hidden="true">
          <div className="h-full rounded-full bg-pm-taupe transition-all duration-300" style={{ width: `${fortschritt}%` }} />
        </div>
        <h3 className="mt-5 text-[24px] font-extrabold leading-[1.15] tracking-[-0.02em] text-pm-ink [text-wrap:balance]">{m.name}</h3>
        <p className="mt-2 text-[16px] leading-[1.55] text-pm-body">{m.frage}</p>

        <div className="mt-5">
          {modul === 0 && <Legende stufen={STUFEN_SELBSTAENDIG} erklaerungen={ERKLAERUNG_STUFEN.selbstaendig} />}
          {modul === 1 && <Legende stufen={STUFEN_FAEHIGKEIT} erklaerungen={ERKLAERUNG_STUFEN.faehigkeit} />}
          {modul === 2 && <Legende stufen={STUFEN_HAEUFIGKEIT} erklaerungen={ERKLAERUNG_STUFEN.haeufigkeit} />}
          {(modul === 3 || modul === 5) && <Legende stufen={STUFEN_SELBSTAENDIG} erklaerungen={ERKLAERUNG_STUFEN.selbstaendig} />}
        </div>

        <div className="mt-6 grid gap-5">
          {modul === 0 && (
            <>
              {MODUL1.map((k, i) => (
                <Kriteriumzeile key={k.nr} k={k}>
                  <Stufen name={k.name} wert={a.m1[i]} stufen={STUFEN_SELBSTAENDIG} erklaerungen={ERKLAERUNG_STUFEN.selbstaendig} onChange={(v) => setzeListe('m1', i, v)} />
                </Kriteriumzeile>
              ))}
              <Kriteriumzeile
                k={{ nr: '§ 15 Abs. 4', name: 'Sind beide Arme und beide Beine gebrauchsunfähig?', erklaerung: 'Diese besondere Bedarfskonstellation führt zu Pflegegrad 5, auch wenn die Punkte darunter liegen.' }}
              >
                <JaNein name="Gebrauchsunfähigkeit beider Arme und Beine" wert={a.bedarfskonstellation} onChange={(v) => setze({ bedarfskonstellation: v })} />
              </Kriteriumzeile>
            </>
          )}

          {modul === 1 &&
            MODUL2.map((k, i) => (
              <Kriteriumzeile key={k.nr} k={k}>
                <Stufen name={k.name} wert={a.m2[i]} stufen={STUFEN_FAEHIGKEIT} erklaerungen={ERKLAERUNG_STUFEN.faehigkeit} onChange={(v) => setzeListe('m2', i, v)} />
              </Kriteriumzeile>
            ))}

          {modul === 2 &&
            MODUL3.map((k, i) => (
              <Kriteriumzeile key={k.nr} k={k}>
                <Stufen name={k.name} wert={a.m3[i]} stufen={STUFEN_HAEUFIGKEIT} erklaerungen={ERKLAERUNG_STUFEN.haeufigkeit} onChange={(v) => setzeListe('m3', i, v)} />
              </Kriteriumzeile>
            ))}

          {modul === 3 && a.person === 'saeugling' && (
            <Kriteriumzeile k={MODUL4_KIND}>
              <JaNein name={MODUL4_KIND.name} wert={a.kindNahrung} onChange={(v) => setze({ kindNahrung: v })} />
            </Kriteriumzeile>
          )}
          {modul === 3 && a.person !== 'saeugling' && (
            <>
              {MODUL4.slice(0, 10).map((k, i) => (
                <Kriteriumzeile key={k.nr} k={k}>
                  <Stufen name={k.name} wert={a.m4[i]} stufen={STUFEN_SELBSTAENDIG} erklaerungen={ERKLAERUNG_STUFEN.selbstaendig} onChange={(v) => setzeListe('m4', i, v)} />
                </Kriteriumzeile>
              ))}
              <Kriteriumzeile
                k={{ nr: '4.11 / 4.12', name: 'Besteht überwiegend oder vollständig eine Harn- oder Stuhlinkontinenz, ein Dauerkatheter, Urostoma oder Stoma?', erklaerung: 'Nur dann zählen die beiden folgenden Kriterien. Gelegentliches Tröpfeln zählt nicht.' }}
              >
                <JaNein name="Inkontinenz oder künstliche Ableitung" wert={a.inkontinenz} onChange={(v) => setze({ inkontinenz: v })} />
              </Kriteriumzeile>
              {a.inkontinenz &&
                MODUL4.slice(10).map((k, j) => (
                  <Kriteriumzeile key={k.nr} k={k}>
                    <Stufen name={k.name} wert={a.m4[10 + j]} stufen={STUFEN_SELBSTAENDIG} erklaerungen={ERKLAERUNG_STUFEN.selbstaendig} onChange={(v) => setzeListe('m4', 10 + j, v)} />
                  </Kriteriumzeile>
                ))}
              <Kriteriumzeile k={MODUL4_SONDE}>
                <div role="radiogroup" aria-label={MODUL4_SONDE.name} className="grid max-w-[480px] grid-cols-3 gap-2">
                  {STUFEN_SONDE.map((s, i) => (
                    <button
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={a.sonde === i}
                      onClick={() => setze({ sonde: i })}
                      className={`min-h-[48px] rounded-[12px] border px-2.5 text-[14px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe ${
                        a.sonde === i ? 'border-pm-taupe bg-pm-taupe text-white' : 'border-pm-line bg-white text-pm-ink hover:border-pm-taupe'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </Kriteriumzeile>
            </>
          )}

          {modul === 4 && (
            <>
              <p className="text-[14.5px] leading-[1.5] text-pm-mute">
                Zählen Sie nur Maßnahmen, die auf Dauer (voraussichtlich mindestens sechs Monate) nötig sind und die die Person nicht selbst durchführen kann.
              </p>
              {MODUL5_TEIL1.map((k, i) => (
                <Kriteriumzeile key={k.nr} k={k}>
                  <HaeufigkeitFeld name={k.name} wert={a.m5teil1[i]} einheiten={['tag', 'woche', 'monat']} onChange={(h) => setzeHaeufigkeit('m5teil1', i, h)} />
                </Kriteriumzeile>
              ))}
              {MODUL5_TEIL2.map((k, i) => (
                <Kriteriumzeile key={k.nr} k={k}>
                  <HaeufigkeitFeld name={k.name} wert={a.m5teil2[i]} einheiten={['tag', 'woche', 'monat']} onChange={(h) => setzeHaeufigkeit('m5teil2', i, h)} />
                </Kriteriumzeile>
              ))}
              {MODUL5_TEIL3.map((k, i) => {
                if ('nurKinder' in k && k.nurKinder && !kinderModus) return null
                return (
                  <Kriteriumzeile key={k.nr} k={k}>
                    <HaeufigkeitFeld name={k.name} wert={a.m5teil3[i]} einheiten={k.taeglich ? ['tag', 'woche', 'monat'] : ['woche', 'monat']} onChange={(h) => setzeHaeufigkeit('m5teil3', i, h)} />
                  </Kriteriumzeile>
                )
              })}
              <Kriteriumzeile k={MODUL5_DIAET}>
                <Stufen name={MODUL5_DIAET.name} wert={a.m5diaet} stufen={STUFEN_SELBSTAENDIG} erklaerungen={ERKLAERUNG_STUFEN.selbstaendig} onChange={(v) => setze({ m5diaet: v })} />
              </Kriteriumzeile>
            </>
          )}

          {modul === 5 &&
            MODUL6.map((k, i) => (
              <Kriteriumzeile key={k.nr} k={k}>
                <Stufen name={k.name} wert={a.m6[i]} stufen={STUFEN_SELBSTAENDIG} erklaerungen={ERKLAERUNG_STUFEN.selbstaendig} onChange={(v) => setzeListe('m6', i, v)} />
              </Kriteriumzeile>
            ))}
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-pm-line-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button type="button" onClick={() => (modul === 0 ? setSchritt('start') : setModul(modul - 1))} className={ZWEITKNOPF}>
            Zurück
          </button>
          <button type="button" onClick={() => (modul === 5 ? setSchritt('ergebnis') : setModul(modul + 1))} className={KNOPF}>
            {modul === 5 ? 'Ergebnis anzeigen' : `Weiter zu Modul ${modul + 2}`}
          </button>
        </div>
      </div>
    )
  }

  // Ergebnis
  const e = ergebnis
  const grad = e.pflegegrad
  const grenzen = [12.5, 27, 47.5, 70, 90]
  const untereGrenze = grad > 0 && !a.bedarfskonstellation ? grenzen[a.person === 'saeugling' ? Math.max(0, grad - 2) : grad - 1] : null
  const zeilen: { name: string; summe: number; bereich: number; gewichtet: number; hinweis?: string }[] = [
    { name: 'Modul 1: Mobilität', ...e.module.m1 },
    { name: 'Modul 2: Kognitive und kommunikative Fähigkeiten', ...e.module.m2, hinweis: e.module.m2.gewichtet >= e.module.m3.gewichtet ? 'zählt' : 'zählt nicht, Modul 3 ist höher' },
    { name: 'Modul 3: Verhaltensweisen und psychische Problemlagen', ...e.module.m3, hinweis: e.module.m3.gewichtet > e.module.m2.gewichtet ? 'zählt' : 'zählt nicht, Modul 2 ist gleich oder höher' },
    { name: 'Modul 4: Selbstversorgung', ...e.module.m4 },
    { name: 'Modul 5: Umgang mit Krankheit und Therapie', ...e.module.m5 },
    { name: 'Modul 6: Alltagsleben und soziale Kontakte', ...e.module.m6 },
  ]
  const leistungen =
    grad >= 2
      ? [
          ['Pflegegeld', `${euro(PFLEGEGELD[grad as 2 | 3 | 4 | 5])} im Monat`],
          ['Pflegesachleistungen (ambulanter Pflegedienst)', `bis ${euro(PFLEGESACHLEISTUNGEN[grad as 2 | 3 | 4 | 5])} im Monat`],
          ['Entlastungsbetrag', `${euro(ENTLASTUNGSBETRAG)} im Monat`],
          ['Entlastungsbudget (Verhinderungs- und Kurzzeitpflege)', `${euro(ENTLASTUNGSBUDGET)} im Jahr`],
          ['Pflegehilfsmittel zum Verbrauch', '42 € im Monat'],
          ['Wohnumfeld anpassen (z. B. Badumbau)', 'bis 4.180 € je Maßnahme'],
        ]
      : grad === 1
        ? [
            ['Entlastungsbetrag', `${euro(ENTLASTUNGSBETRAG)} im Monat`],
            ['Pflegehilfsmittel zum Verbrauch', '42 € im Monat'],
            ['Wohnumfeld anpassen (z. B. Badumbau)', 'bis 4.180 € je Maßnahme'],
            ['Pflegegeld und Pflegesachleistungen', 'erst ab Pflegegrad 2'],
          ]
        : []

  const antwortText = (k: Kriterium, wert: number, stufen: readonly string[]) => `${k.nr} ${k.name}: ${stufen[wert]}`
  const haeufigkeitText = (h: Haeufigkeit) =>
    h.einheit === 'keine' ? 'entfällt oder selbständig' : `${h.anzahl}× ${h.einheit === 'tag' ? 'täglich' : h.einheit === 'woche' ? 'wöchentlich' : 'monatlich'}`

  return (
    <div id="pflegegrad-rechner" className={`${KARTE} scroll-mt-[88px] md:scroll-mt-[150px]`}>
      <div id="pgr-druck">
        <p className={AUGENBRAUE}>Ihr Ergebnis</p>
        <p className="mt-2 text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-pm-ink">
          {grad === 0 ? 'Kein Pflegegrad' : `Pflegegrad ${grad}`}
        </p>
        <p className="mt-2 text-[17px] leading-[1.5] text-pm-body">
          {grad === 0 ? 'Die Punkte reichen noch nicht für Pflegegrad 1 (ab 12,5 Punkten).' : (() => { const t = PFLEGEGRAD_NAMEN[grad].replace(/^Pflegegrad \d: /, ''); return t.charAt(0).toUpperCase() + t.slice(1) + '.' })()}{' '}
          <strong className="text-pm-ink [font-variant-numeric:tabular-nums]">{fmt(e.gesamt)} von 100 Punkten.</strong>
        </p>
        {a.bedarfskonstellation && (
          <p className="mt-2 text-[15px] leading-[1.5] text-pm-body">
            Wegen der Gebrauchsunfähigkeit beider Arme und Beine gilt Pflegegrad 5 unabhängig von den Punkten (§ 15 Abs. 4 SGB XI).
          </p>
        )}

        <div className="mt-8">
          <PflegegradSkala punkte={e.gesamt} kind={a.person === 'saeugling'} ohneRahmen />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {e.bisNaechster !== null && (
            <div className="rounded-[14px] bg-pm-paper px-4 py-3.5 text-[15px] leading-[1.5] text-pm-body">
              Bis zum nächsthöheren Pflegegrad fehlen <strong className="text-pm-ink [font-variant-numeric:tabular-nums]">{fmt(e.bisNaechster)} Punkte</strong>.
            </div>
          )}
          {untereGrenze !== null && (
            <div className="rounded-[14px] bg-pm-paper px-4 py-3.5 text-[15px] leading-[1.5] text-pm-body">
              Die Grenze zu Pflegegrad {grad} liegt bei {fmt(untereGrenze)} Punkten; Sie liegen{' '}
              <strong className="text-pm-ink [font-variant-numeric:tabular-nums]">{fmt(Math.round((e.gesamt - untereGrenze) * 100) / 100)} Punkte</strong> darüber.
            </div>
          )}
        </div>

        {a.aktuellerPflegegrad !== null && (
          <div className="mt-4 rounded-[14px] border border-pm-line px-4 py-3.5 text-[15px] leading-[1.55] text-pm-body">
            {grad > a.aktuellerPflegegrad ? (
              <>
                <strong className="text-pm-ink">Ihr Ergebnis liegt über dem bisherigen Pflegegrad {a.aktuellerPflegegrad}.</strong> Ein Antrag auf Höherstufung bei der Pflegekasse lohnt sich;
                führen Sie vorher zwei Wochen ein Pflegetagebuch.{' '}
                <a href="/pflegegrad-erhoehen" className="font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4">So beantragen Sie die Höherstufung</a>.
              </>
            ) : grad === a.aktuellerPflegegrad ? (
              <>
                <strong className="text-pm-ink">Ihr Ergebnis bestätigt den bisherigen Pflegegrad {a.aktuellerPflegegrad}.</strong> Verschlechtert sich die Situation, melden Sie das der Pflegekasse und
                beantragen eine neue Begutachtung.
              </>
            ) : (
              <>
                <strong className="text-pm-ink">Ihr Ergebnis liegt unter dem bisherigen Pflegegrad {a.aktuellerPflegegrad}.</strong> Das kann an einem guten Tag oder an milder Einschätzung liegen. Der
                bestehende Bescheid bleibt davon unberührt.
              </>
            )}
          </div>
        )}

        <div className="mt-8 overflow-hidden rounded-[14px] border border-pm-line">
          <table className="w-full table-fixed text-left text-[14.5px] [font-variant-numeric:tabular-nums]">
            <thead>
              <tr className="bg-pm-paper text-[12px] uppercase tracking-[.06em] text-pm-mute">
                <th scope="col" className="px-3 py-2.5 font-bold">Modul</th>
                <th scope="col" className="w-[21%] px-2 py-2.5 text-right font-bold sm:w-[15%]">Punkte</th>
                <th scope="col" className="hidden w-[24%] px-2 py-2.5 font-bold sm:table-cell">Beeinträchtigung</th>
                <th scope="col" className="w-[24%] px-3 py-2.5 text-right font-bold sm:w-[17%]">Gewichtet</th>
              </tr>
            </thead>
            <tbody>
              {zeilen.map((z) => (
                <tr key={z.name} className="border-t border-pm-line-soft">
                  <td className="px-3 py-2.5 text-pm-ink [overflow-wrap:anywhere]">
                    {z.name}
                    {z.hinweis && <span className="block text-[12.5px] text-pm-mute">{z.hinweis}</span>}
                  </td>
                  <td className="px-2 py-2.5 text-right text-pm-body">{fmt(z.summe)}</td>
                  <td className="hidden px-2 py-2.5 text-pm-body sm:table-cell">{SCHWEREGRAD[z.bereich]}</td>
                  <td className="px-3 py-2.5 text-right font-bold text-pm-ink">{fmt(z.gewichtet)}</td>
                </tr>
              ))}
              <tr className="border-t border-pm-line bg-pm-paper">
                <td className="px-3 py-2.5 font-bold text-pm-ink" colSpan={3}>Gesamtpunkte (Modul 2 und 3 nur der höhere Wert)</td>
                <td className="px-3 py-2.5 text-right font-extrabold text-pm-ink">{fmt(e.gesamt)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {leistungen.length > 0 && (
          <div className="mt-8">
            <p className="text-[18px] font-bold leading-[1.3] text-pm-ink">Das steht Ihnen mit Pflegegrad {grad} zu (2026)</p>
            <ul className="mt-3 grid gap-2 text-[15px] leading-[1.5]">
              {leistungen.map(([was, wert]) => (
                <li key={was} className="flex justify-between gap-4 border-b border-pm-line-soft pb-2">
                  <span className="text-pm-body">{was}</span>
                  <strong className="whitespace-nowrap text-pm-ink [font-variant-numeric:tabular-nums]">{wert}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 text-[14px] leading-[1.55] text-pm-mute">
          Das Ergebnis ist eine Einschätzung nach dem gesetzlichen Punktesystem (§ 15 SGB XI mit Anlage 1 und 2), kein Bescheid. Über den Pflegegrad entscheidet die
          Pflegekasse nach der Begutachtung durch den Medizinischen Dienst (gesetzlich Versicherte) oder Medicproof (privat Versicherte).
        </p>

        {/* Nur im Druck: alle Antworten als Fragebogen für die Begutachtung */}
        <div className="hidden print:block">
          <p className="mt-8 text-[18px] font-bold text-pm-ink">Ihre Antworten (Vorbereitung auf die Begutachtung)</p>
          <ol className="mt-3 grid gap-1 text-[13px] leading-[1.45] text-pm-body">
            {MODUL1.map((k, i) => <li key={k.nr}>{antwortText(k, a.m1[i], STUFEN_SELBSTAENDIG)}</li>)}
            {MODUL2.map((k, i) => <li key={k.nr}>{antwortText(k, a.m2[i], STUFEN_FAEHIGKEIT)}</li>)}
            {MODUL3.map((k, i) => <li key={k.nr}>{antwortText(k, a.m3[i], STUFEN_HAEUFIGKEIT)}</li>)}
            {a.person === 'saeugling' ? (
              <li>4.K {MODUL4_KIND.name}: {a.kindNahrung ? 'ja' : 'nein'}</li>
            ) : (
              <>
                {MODUL4.slice(0, 10).map((k, i) => <li key={k.nr}>{antwortText(k, a.m4[i], STUFEN_SELBSTAENDIG)}</li>)}
                <li>Inkontinenz oder künstliche Ableitung: {a.inkontinenz ? 'ja' : 'nein'}</li>
                {a.inkontinenz && MODUL4.slice(10).map((k, j) => <li key={k.nr}>{antwortText(k, a.m4[10 + j], STUFEN_SELBSTAENDIG)}</li>)}
                <li>{MODUL4_SONDE.nr} {MODUL4_SONDE.name}: {STUFEN_SONDE[a.sonde]}</li>
              </>
            )}
            {MODUL5_TEIL1.map((k, i) => <li key={k.nr}>{k.nr} {k.name}: {haeufigkeitText(a.m5teil1[i])}</li>)}
            {MODUL5_TEIL2.map((k, i) => <li key={k.nr}>{k.nr} {k.name}: {haeufigkeitText(a.m5teil2[i])}</li>)}
            {MODUL5_TEIL3.map((k, i) => (('nurKinder' in k && k.nurKinder && !kinderModus) ? null : <li key={k.nr}>{k.nr} {k.name}: {haeufigkeitText(a.m5teil3[i])}</li>))}
            <li>{MODUL5_DIAET.nr} {MODUL5_DIAET.name}: {STUFEN_SELBSTAENDIG[a.m5diaet]}</li>
            {MODUL6.map((k, i) => <li key={k.nr}>{antwortText(k, a.m6[i], STUFEN_SELBSTAENDIG)}</li>)}
          </ol>
          <p className="mt-4 text-[12px] text-pm-mute">primundus.de/pflegegrad-rechner · Rechenweg nach § 15 SGB XI, Anlage 1 und 2 · Stand 2026</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-pm-line-soft pt-6 sm:flex-row sm:flex-wrap sm:items-center print:hidden">
        <button type="button" onClick={drucken} className={ZWEITKNOPF}>
          Ergebnis drucken oder als PDF sichern
        </button>
        <button type="button" onClick={() => { setSchritt('modul'); setModul(0) }} className={ZWEITKNOPF}>
          Antworten ändern
        </button>
        <button type="button" onClick={() => { setA(leereAntworten(a.person)); setSchritt('start') }} className={ZWEITKNOPF}>
          Neu beginnen
        </button>
      </div>

      {grad >= 2 && (
        <div className="mt-6 rounded-[14px] bg-pm-paper p-5 print:hidden">
          <p className="text-[17px] font-bold leading-[1.3] text-pm-ink">Soll die Person zu Hause bleiben?</p>
          <p className="mt-1.5 text-[15px] leading-[1.55] text-pm-body">
            Mit Pflegegrad {grad} bleiben bei 24-Stunden-Pflege durch eine Betreuungskraft ab ca.{' '}
            {euro(2150 - PFLEGEGELD[grad as 2 | 3 | 4 | 5] - 295 - 333 + (grad === 5 ? 50 : 0))} im Monat selbst zu tragen (Preis ab 2.150 €, bei Pflegegrad 5 ab 2.200 €, minus Pflegegeld, anteiliges Entlastungsbudget
            und Steuerermäßigung). Ihren Preis und passende Betreuungskräfte sehen Sie in 2 Minuten.
          </p>
          <a href={RECHNER} referrerPolicy="no-referrer-when-downgrade" className={`${KNOPF} mt-4`}>
            Preis berechnen
          </a>
        </div>
      )}
    </div>
  )
}
