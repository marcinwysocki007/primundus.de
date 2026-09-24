// Vorlage „Ratgeber" im Stil der Partnerseite (/pflegekraefte-fuer-vermittler), 14.09.2026.
//
// Martin: Die Partnerseite wird die Vorlage für alle Seiten, aber Seitenart für
// Seitenart. Jede Seitenart zuerst als Musterseite zeigen und absegnen lassen,
// erst danach auf die übrigen Seiten dieser Art übertragen. Musterseite für die
// Ratgeber: /demenz-pflege-zuhause.
//
// Übernommen von der Partnerseite: Breite 1200 px wie Kopf und Fuß, Überschriften
// in Stärke 800 mit enger Laufweite, Fließtext 18 px, Linien statt Karten, ein
// dunkles Band, weiße Kästen mit weichem Schatten. Keine Symbol-Kacheln.
import { Fragment, type ReactNode } from 'react'
import { KNOPF } from '@/components/ArticleCTA'
import { LeistenKarte, RechnerBlock } from '@/components/vertrauen/Vertrauen'
import { InhaltLeiste } from './InhaltLeiste'

const H2 = 'text-[clamp(27px,3.2vw,38px)] font-extrabold leading-[1.1] tracking-[-0.032em] [text-wrap:balance] max-sm:hyphens-auto [overflow-wrap:break-word]'
// 14 px wie im Rechner-Kopf; vorher 11,5 px — unter der Untergrenze „nie < 14" aus dem Optik-Plan
// (14.09.). Martin auf dem Handy, 23.09.: „die Schriftgrößen hier recht klein".
const AUGENBRAUE = 'text-[14px] font-bold uppercase tracking-[.14em] text-pm-taupe'
// Sprungmarken landen unter dem festen Kopf (64 px Handy, 121 px ab md)
const SPRUNG = 'scroll-mt-[88px] md:scroll-mt-[150px]'

// Überschriften sollen nicht bei „24h-" umbrechen („Wann braucht es 24h- / Pflege").
// Kurze Bindestrich-Wörter bleiben zusammen; lange wie „24-Stunden-Pflege" dürfen
// weiter trennen, sonst ragen sie auf 320-px-Handys in 34 px aus dem Rand.
function zusammenhalten(titel: ReactNode): ReactNode {
  if (typeof titel !== 'string') return titel
  return titel.split(/(\S+-\S+)/).map((teil, i) =>
    i % 2 === 1 && teil.length <= 14 ? (
      <span key={i} className="whitespace-nowrap">{teil}</span>
    ) : (
      teil
    ),
  )
}

function Haken() {
  return (
    <span aria-hidden="true" className="mt-[1px] w-[22px] h-[22px] rounded-[7px] bg-pm-coral-tint text-pm-coral flex items-center justify-center flex-none">
      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6.3l2.3 2.2 4.7-5" />
      </svg>
    </span>
  )
}

/** Ein Eintrag im Kasten als Sprungverweis: Stichwort fett, dahinter der Grund in einem Halbsatz */
export type BlickVerweis = { href: string; titel: string; text: string }

export function BlickKasten({ titel, punkte = [], kopf, verweise }: { titel: string; punkte?: string[]; kopf?: ReactNode; verweise?: BlickVerweis[] }) {
  return (
    <aside aria-label="Auf einen Blick" className="bg-white rounded-[20px] shadow-lift p-6 md:p-7">
      {kopf}
      <p className={AUGENBRAUE}>{titel}</p>
      {verweise?.length ? (
        // Inhaltsverzeichnis mit Begründung (Testsieger-Seite, Martin 23.09.2026: „das muss schon irgendwie
        // dazu passen und vielleicht als eine Art Inhaltsverzeichnis"): jede Zeile sagt, WARUM, und springt
        // zu dem Abschnitt, der es erklärt.
        <ul className="mt-3 divide-y divide-pm-line">
          {verweise.map((v) => (
            <li key={v.href}>
              <a href={v.href} className="group flex items-start gap-3 py-3 text-[16px] leading-[1.45] text-pm-body">
                <span aria-hidden="true" className="mt-[3px] flex h-5 w-5 flex-none items-center justify-center rounded-full bg-pm-shell text-[12px] text-pm-taupe-ink transition-colors group-hover:bg-pm-taupe group-hover:text-white">↓</span>
                <span><strong className="font-semibold text-pm-ink underline decoration-pm-taupe/30 underline-offset-4 group-hover:decoration-pm-taupe-ink">{v.titel}</strong> — {v.text}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-4 grid gap-3.5">
          {punkte.map((b) => (
            <li key={b} className="flex gap-3 text-[16px] leading-[1.5] font-medium text-pm-ink">
              <Haken />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

/**
 * Die Unterzeile aus dem Rechner-Kopf, Wort für Wort — mit Ort in der Anreise-Zusage
 * (Martin 22.09.: „Anreise in Worms in drei Tagen möglich … ist besser").
 */
export function StandardUnterzeile({ ort }: { ort?: string }) {
  return (
    <>
      Sehen Sie in 2 Minuten, <strong className="text-pm-ink">was es kostet</strong> und{' '}
      <strong className="text-pm-ink">welche Pflegekräfte verfügbar sind</strong>&nbsp;–{' '}
      <span className="whitespace-nowrap">Anreise{ort ? ` in ${ort}` : ''} in 3 Tagen möglich.</span>
    </>
  )
}

export function RatgeberKopf({
  pfad,
  augenbraue,
  titel,
  einleitung,
  aktualisiert,
  lesezeit,
  blick,
  blickTitel = 'Auf einen Blick',
  knopf,
  person,
  sprung,
  knopfSchlicht = false,
  knopfOben = false,
  unterzeile,
  einleitungTitel,
  blickKopf,
  blickVerweise,
}: {
  pfad: { label: string; href?: string }[]
  augenbraue: string
  titel: ReactNode
  einleitung?: ReactNode
  /** Übersichtsseiten (Hubs) haben weder Datum noch Lesezeit: dann entfällt die Zeile */
  aktualisiert?: string
  lesezeit?: string
  /** Nur wenn die Seite schon eine „Auf einen Blick"-Liste hat — nie neu erfinden. */
  blick?: string[]
  /** Überschrift des Kastens, falls die Seite eine eigene hatte („Auf einen Blick — Pflegegrad 3") */
  blickTitel?: string
  /** Knopf unter der Einleitung, nur wo die Seite schon einen hatte (Kernseiten wie /kosten) */
  knopf?: { href: string; text: string }
  /**
   * Ansprechpartnerin im Kopf — nur auf den Ortsseiten (Martin 20.09.2026: „ich will Marta
   * zentral, oben im Hero, mit Infos, Kontakt und dann der richtige Inhalt daneben, darüber,
   * damit das … bei den regionalen Seiten, die uns so super wichtig sind, immer passt").
   *
   * Hebt die Entscheidung vom 18.09. („ohne Button blöd, aber Button wären zu viel") bewusst
   * nur für die Ortsseiten auf: Dort stehen bis zu sechs Kartenblock-Einträge mit Telefonnummer
   * über unserem Treffer, und die organisch davor liegenden Seiten haben alle einen Menschen mit
   * Namen und Nummer. Auf den Ratgeberseiten bleibt der Kopf wie er ist.
   */
  person?: ReactNode
  /**
   * Sprungleiste unter der Einleitung — nur auf den informativen Ortsseiten (Bauplan 21.09.2026:
   * „Ablauf · Aufgaben · Kosten · Voraussetzungen"). Signalisiert: Das ist eine Erklärseite.
   */
  sprung?: { id: string; label: string }[]
  /** Knopf ohne Gesichterreihe und Sterne — „eher sekundär" (Bauplan 21.09.2026). */
  knopfSchlicht?: boolean
  /**
   * Der volle Rechner-Block DIREKT unter der Überschrift, vor der Einleitung (23.09.2026).
   *
   * Martin, nachdem er die Ortsseiten auf dem Handy gesehen hat: „es fehlen teilweise Buttons
   * und Pflegekräfte und Sterne … Wir benötigen doch Hemmnisnehmer sofort sichtbar oder?
   * Ähnlich wie auf der Startseite."
   *
   * Gemessen auf dem iPhone: Steht der Block NACH der Einleitung, landet er auf den Ortsseiten
   * bei 670 px, die Gesichterreihe bei 17.054 px und die Sterne bei 1.816 px — auf keinem
   * iPhone im ersten Bildschirm. Über der Einleitung liegt der Knopf bei rund 340 px, wie auf
   * der Startseite, und Gesichter und Sterne kommen mit.
   *
   * Der Weg über die Einleitung wurde bewusst NICHT gewählt: Sie auf 210 Zeichen zu kürzen hiesse,
   * 205 örtlich geschriebene Texte anzugleichen — und Textgleichheit ist bei den Ortsseiten die
   * Leitkennzahl (69,4 % heute). Die Reihenfolge zu ändern kostet kein einziges Wort.
   *
   * Zweiter Anlauf am selben Tag: Der Knopf direkt unter der H1 war Martin zu weit oben
   * („button plötzlich nach so weit oben"). Referenz ist kostenrechner.primundus.de: dort steht
   * zwischen H1 und Knopf EINE Unterzeile („Sehen Sie in 2 Minuten, was es kostet und welche
   * Pflegekräfte verfügbar sind – Anreise in 3 Tagen möglich."), und der Block hat die Punkte.
   * Genau das ist `unterzeile` + `knopfOben`.
   */
  knopfOben?: boolean
  /** Die eine Zeile zwischen H1 und Block, wie im Rechner. Für Ortsseiten <StandardUnterzeile ort="…" />. */
  unterzeile?: ReactNode
  /**
   * Überschrift über der Einleitung, wenn sie hinter dem Block steht (23.09.2026). Martin auf
   * dem Handy: „Der Text unter den Sternen, der beginnt einfach ohne irgendwie Überschrift."
   * Mit `knopfOben` ist die Einleitung kein Vorspann zur H1 mehr, sondern ein eigener Absatz —
   * und ein Absatz ohne Überschrift hängt in der Luft.
   */
  einleitungTitel?: string
  /** Kopfzeile IM Kasten „Auf einen Blick“ (z. B. das Siegel auf der Testsieger-Seite) */
  blickKopf?: ReactNode
  /** Kasten als Inhaltsverzeichnis: Sprungverweise statt Häkchen-Punkten (Testsieger-Seite, 23.09.2026) */
  blickVerweise?: BlickVerweis[]
}) {
  // Kasten gibt es mit Häkchen-Punkten ODER mit Sprungverweisen — für die Anordnung zählt nur, ob er da ist
  const hatBlick = Boolean(blick?.length) || Boolean(blickVerweise?.length)
  const zweiSpalten = hatBlick || Boolean(person)
  return (
    <div className="bg-pm-shell">
      <div className="max-w-[1200px] mx-auto px-5 pt-6 pb-12 md:pt-8 md:pb-16">
        <nav aria-label="Brotkrumen" className="text-[14px] text-pm-mute flex items-center gap-2 flex-wrap">
          {pfad.map((p, i) => (
            <span key={p.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {p.href ? (
                <a href={p.href} className="hover:text-pm-ink transition-colors">{p.label}</a>
              ) : (
                <span className="text-pm-body">{p.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Mit Ansprechpartnerin drei Felder mit ausdrücklicher Platzierung: Am Rechner stehen Text
            und Fakten links untereinander, Marta rechts daneben. Auf dem Handy greift die
            Platzierung nicht, dort zählt die Reihenfolge im Quelltext — Text, Marta, Fakten.
            Ohne Ansprechpartnerin bleibt der Kopf wie bisher (Text links, Kasten rechts). */}
        <div className={`mt-8 md:mt-12 grid gap-10 ${zweiSpalten ? `${person && !hatBlick ? 'lg:grid-cols-[minmax(0,1fr)_360px]' : 'lg:grid-cols-[minmax(0,1fr)_400px]'} lg:gap-x-16 ${person ? 'lg:gap-y-8 lg:items-start' : 'lg:items-center'}` : 'max-w-[52rem]'}`}>
          <div className={`min-w-0 flex flex-col ${person ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <p className={AUGENBRAUE}>{augenbraue}</p>
            <h1 className="mt-4 text-[clamp(34px,4.4vw,50px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-pm-ink [text-wrap:balance] max-sm:hyphens-auto [overflow-wrap:break-word]">
              {zusammenhalten(titel)}
            </h1>
            {unterzeile ? (
              <p className="mt-5 text-[18px] md:text-[20px] leading-[1.55] text-pm-body max-w-[36rem]">
                {unterzeile}
              </p>
            ) : null}
            {knopf && knopfOben ? (
              <div className="mt-7">
                <RechnerBlock src={mitPosition(rechnerQuelle(knopf.href), 'kopf')} />
              </div>
            ) : null}
            {einleitung && einleitungTitel ? (
              <h2 className="mt-10 text-[24px] md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-pm-ink [text-wrap:balance]">
                {einleitungTitel}
              </h2>
            ) : null}
            {einleitung ? (
              <p className={`${einleitungTitel ? 'mt-4' : 'mt-6'} text-[19px] md:text-[20px] leading-[1.6] text-pm-body max-w-[56ch] [text-wrap:pretty]`}>
                {einleitung}
              </p>
            ) : null}
            {sprung?.length ? (
              <nav aria-label="Auf dieser Seite" className="mt-6 flex flex-wrap gap-2">
                {sprung.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center rounded-full border border-pm-line bg-white px-3.5 py-1.5 text-[14.5px] font-medium text-pm-ink hover:border-pm-taupe hover:text-pm-taupe-ink transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            ) : null}
            {knopf && knopfSchlicht && !knopfOben ? (
              <div className="mt-7">
                <a
                  href={knopf.href}
                  referrerPolicy="no-referrer-when-downgrade"
                  className={`${KNOPF} shadow-[0_10px_24px_-10px_rgba(231,111,99,0.75)]`}
                >
                  {knopf.text}&nbsp;→
                </a>
              </div>
            ) : null}
            {knopf && !person && !knopfSchlicht && !knopfOben ? (
              <div className="mt-8">
                <RechnerBlock src={mitPosition(rechnerQuelle(knopf.href), 'kopf')} punkte={false} />
              </div>
            ) : null}
            {/* Ohne `person` keine Marta-Zeile im Kopf (Martin 18.09.: „ohne Button blöd, aber Button
                wären zu viel") — dann steht sie nur in der Kopfzeile und am Seitenende. Das gilt weiter
                für alle Seitenarten außer den Ortsseiten. */}
            {/* Auf den Ortsseiten steht die Zeile nicht zwischen Einleitung und Ansprechpartnerin,
                sondern unter dem ganzen Kopf — dort stört sie den Verkaufsteil nicht. */}
            {aktualisiert && lesezeit && !person ? (
              <p className="mt-7 text-[14px] leading-[1.45] text-pm-mute">
                <span className="whitespace-nowrap">Aktualisiert am {aktualisiert}</span> · <span className="whitespace-nowrap">{lesezeit} Lesezeit</span>
              </p>
            ) : null}
          </div>

          {hatBlick ? (
            <div className={person ? 'lg:col-start-1 lg:row-start-2' : ''}>
              <BlickKasten titel={blickTitel} punkte={blick} kopf={blickKopf} verweise={blickVerweise} />
            </div>
          ) : null}
          {/* Der Knopf steht erst NACH den Fakten (Martin 20.09.: „dem User die Informationen geben,
              die er braucht … und dann vielleicht erst Werbung"). Wer in einer akuten Lage sucht,
              prüft zuerst, ob das Modell passt und was es kostet; ein Knopf davor wirkt wie Verkauf.
              Auf Seiten ohne Ansprechpartnerin bleibt der Knopf, wo er war — unter der Einleitung. */}
          {knopf && person && !knopfSchlicht && !knopfOben ? (
            <div className="lg:col-start-1 lg:row-start-3">
              <RechnerBlock src={mitPosition(rechnerQuelle(knopf.href), 'kopf')} punkte={false} />
            </div>
          ) : null}
          {/* Zuletzt im Quelltext, damit auf dem Handy erst Information (Fakten), dann Handlung
              (Knopf) und dann das Gespräch kommt. Am Rechner setzt die Platzierung sie nach oben
              rechts, über die volle Höhe der linken Spalte. */}
          {person ? <div className={`lg:col-start-2 lg:row-start-1 lg:row-span-3 ${hatBlick ? 'lg:self-stretch' : 'lg:self-start'}`}>{person}</div> : null}
        </div>

        {aktualisiert && lesezeit && person ? (
          <p className="mt-8 text-[14px] leading-[1.45] text-pm-mute">
            <span className="whitespace-nowrap">Aktualisiert am {aktualisiert}</span> · <span className="whitespace-nowrap">{lesezeit} Lesezeit</span>
          </p>
        ) : null}
      </div>
    </div>
  )
}

/**
 * Knopfposition an die Quelle hängen (23.09.2026): ort-worms → ort-worms-kopf. Nur für die
 * Ortsseiten (ort-…), damit die bestehenden Reihen website:apex-… in den Lead-Auswertungen
 * nicht zersplittern. Der Rechner speichert src seit CAapp#738 je Sitzung und je Lead.
 */
export function mitPosition(src: string, position: 'kopf' | 'ablauf' | 'kraefte' | 'kosten' | 'stoerer' | 'leiste' | 'schluss'): string {
  return src.startsWith('ort-') ? `${src}-${position}` : src
}

// src aus dem Rechner-Link der Seite (knopf.href); ohne src die allgemeine Quelle
function rechnerQuelle(href: string): string {
  try {
    return new URL(href).searchParams.get('src') || 'apex-components'
  } catch {
    return 'apex-components'
  }
}

// Text links, rechts Inhaltsverzeichnis und Kostenknopf (beide mitlaufend, erst ab 1024 px).
export function RatgeberRumpf({ abschnitte, children, src = 'apex-components' }: { abschnitte: { id: string; title: string }[]; children: ReactNode; src?: string }) {
  return (
    <div className="max-w-[1200px] mx-auto px-5 pt-12 pb-20 md:pt-16 md:pb-24 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
      <article className="min-w-0 max-w-[46rem]">{children}</article>
      <aside className="hidden lg:block" aria-label="Inhalt und Kosten">
        {/* Die Spalte darf nicht höher sein als der Bildschirm: Mit 10–15 Abschnitten war sie
            800–1.100 px hoch, bei 900 px Viewport fehlten 90–340 px — die Rechner-Karte unten
            war auf Laptops nie erreichbar (Martin 23.09.: „Button rechts unten wird
            abgeschnitten"). Jetzt scrollt die Spalte selbst; der Kopf ist 121 px, 140 lässt Luft. */}
        <div className="sticky top-[140px] flex max-h-[calc(100vh-140px)] flex-col">
          {/* Die Liste scrollt, die Karte steht fest darunter — so ist der Rechner-Knopf auf jeder
              Bildschirmhöhe im Bild, auch bei 15 Abschnitten (gemessen 1024×768 bis 1440×900). */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2 [scrollbar-width:thin]">
            <InhaltLeiste abschnitte={abschnitte} />
          </div>
          <div className="mt-6 flex-none pb-6">
            <LeistenKarte src={mitPosition(src, 'leiste')} />
          </div>
        </div>
      </aside>
    </div>
  )
}

// Text vor dem ersten Abschnitt (Seiten, deren Rumpf ohne Zwischenüberschrift beginnt)
export function Vorspann({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-6 pb-4">{children}</div>
}

export function Abschnitt({ id, titel, children }: { id: string; titel: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className={`${SPRUNG} pt-16 md:pt-20 first:pt-0`}>
      <h2 className={`${H2} text-pm-ink`}>{zusammenhalten(titel)}</h2>
      <div className="mt-6 flex flex-col gap-6">{children}</div>
    </section>
  )
}

// Das eine dunkle Band je Seite (wie das Prozessband der Partnerseite): für den
// Abschnitt, an dem sich die Entscheidung festmacht. Punkte ohne Nummern, weil
// sie keine Reihenfolge haben.
export function DunklerAbschnitt({
  id,
  titel,
  einleitung,
  punkte,
  children,
}: {
  id: string
  titel: ReactNode
  einleitung: ReactNode
  punkte: { title: string; desc: ReactNode }[]
  children?: ReactNode
}) {
  return (
    <section id={id} className={`${SPRUNG} pt-16 md:pt-20`}>
      <div className="-mx-5 md:mx-0 bg-pm-deep md:rounded-[28px] px-5 py-12 md:px-11 md:py-12">
        <h2 className={`${H2} text-pm-deep-ink`}>{zusammenhalten(titel)}</h2>
        <p className="mt-5 text-[18px] leading-[1.7] text-pm-deep-body max-w-[60ch]">{einleitung}</p>
        <div className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {punkte.map((p) => (
            <div key={p.title} className="border-t border-pm-deep-line pt-5">
              <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.02em] text-pm-deep-ink">{p.title}</h3>
              <p className="mt-2 text-[16.5px] leading-[1.65] text-pm-deep-body">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {children && <div className="mt-8 flex flex-col gap-6">{children}</div>}
    </section>
  )
}

export function Text({ children }: { children: ReactNode }) {
  return <p className="text-[18px] leading-[1.7] text-pm-body max-w-[68ch] [text-wrap:pretty] [overflow-wrap:break-word]">{children}</p>
}

// Linienliste statt Kartenstapel: Titel links, Text rechts (ab 768 px).
export function Punkte({ punkte }: { punkte: { title: ReactNode; desc: ReactNode }[] }) {
  return (
    <div className="border-t border-pm-line">
      {punkte.map((p, i) => (
        <div key={i} className="py-5 border-b border-pm-line md:grid md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
          <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.015em] text-pm-ink">{p.title}</h3>
          <div className="mt-1.5 md:mt-0 text-[17px] leading-[1.65] text-pm-body">{p.desc}</div>
        </div>
      ))}
    </div>
  )
}

// Nummerierte Schritte — nur für echte Reihenfolgen (Antrag, Ablauf). Linien statt
// Kästen, Nummer im Kreis wie der Ablauf der Partnerseite.
const ETIKETT = { gruen: 'bg-pm-mint text-pm-green-deep', neutral: 'bg-pm-paper text-pm-body', koralle: 'bg-pm-coral-tint text-pm-coral-ink' } as const

export function Schritte({
  schritte,
}: {
  schritte: { title: string; desc?: ReactNode; tag?: string; tagTon?: keyof typeof ETIKETT }[]
}) {
  return (
    <ol className="border-t border-pm-line">
      {schritte.map((s, i) => (
        <li key={s.title} className="flex gap-4 md:gap-5 py-5 border-b border-pm-line">
          <span aria-hidden="true" className="w-9 h-9 rounded-full border-2 border-pm-line bg-white text-pm-ink font-bold text-[15px] flex items-center justify-center flex-none [font-variant-numeric:tabular-nums]">
            {i + 1}
          </span>
          <div className="min-w-0 pt-1">
            <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.015em] text-pm-ink">{s.title}</h3>
            {s.desc && <p className="mt-1.5 text-[17px] leading-[1.65] text-pm-body">{s.desc}</p>}
            {s.tag && (
              <span className={`mt-3 inline-block text-[13px] font-semibold px-3 py-1 rounded-full ${ETIKETT[s.tagTon ?? 'neutral']}`}>{s.tag}</span>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

// Titel mit Unterliste („Bad: Haltegriffe, Duschsitz …", „Phase 2: Aufgaben …").
// haken = Häkchen wie in „Auf einen Blick" (für To-dos), sonst schlichte Linien.
export function Gruppen({
  gruppen,
  haken = false,
}: {
  gruppen: { title: ReactNode; zusatz?: ReactNode; punkte: ReactNode[] }[]
  haken?: boolean
}) {
  return (
    <div className="border-t border-pm-line">
      {gruppen.map((g, i) => (
        <div key={i} className="py-5 border-b border-pm-line md:grid md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
          <div>
            <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.015em] text-pm-ink">{g.title}</h3>
            {g.zusatz && <p className="mt-1 text-[15px] leading-[1.5] text-pm-mute">{g.zusatz}</p>}
          </div>
          <ul className="mt-2 md:mt-0 grid gap-2">
            {g.punkte.map((p, j) => (
              <li key={j} className="flex gap-3 text-[17px] leading-[1.6] text-pm-body">
                {haken ? <Haken /> : <span aria-hidden="true" className="mt-[11px] w-1.5 h-1.5 rounded-full bg-pm-taupe flex-none" />}
                <span className="min-w-0">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function Zwischentitel({ children }: { children: ReactNode }) {
  return <h3 className="pt-4 text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-pm-ink [text-wrap:balance]">{children}</h3>
}

// Zwei Spalten ohne Kopf: links der Wert (Frist, Betrag, Bereich), rechts die Erklärung.
export function Werte({ zeilen, ton = 'neutral' }: { zeilen: [ReactNode, ReactNode][]; ton?: 'neutral' | 'gruen' }) {
  return (
    <dl className="border-t border-pm-line-soft">
      {zeilen.map(([wert, text], i) => (
        <div key={i} className="py-3 border-b border-pm-line-soft last:border-0 sm:grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
          <dt className={`text-[16.5px] font-bold leading-[1.45] [font-variant-numeric:tabular-nums] ${ton === 'gruen' ? 'text-pm-green' : 'text-pm-ink'}`}>{wert}</dt>
          <dd className="mt-0.5 sm:mt-0 text-[16.5px] leading-[1.55] text-pm-body">{text}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Liste({ punkte }: { punkte: ReactNode[] }) {
  return (
    <ul className="border-t border-pm-line">
      {punkte.map((p, i) => (
        <li key={i} className="py-4 border-b border-pm-line text-[17px] leading-[1.65] text-pm-body">{p}</li>
      ))}
    </ul>
  )
}

const TITELFARBE = { neutral: 'text-pm-ink', gruen: 'text-pm-green', koralle: 'text-pm-coral-ink' } as const

// Hinweis-, Tipp- und Warnkästen. ton färbt nur den Titel; der Kasten bleibt weiß
// (Partnerseite), statt grüner/roter Flächen mit Rahmen.
export function Kasten({
  augenbraue,
  titel,
  ton = 'neutral',
  children,
}: {
  augenbraue?: string
  titel?: ReactNode
  ton?: keyof typeof TITELFARBE
  children?: ReactNode
}) {
  return (
    <div className="bg-white rounded-[20px] shadow-lift p-6 md:p-8 [overflow-wrap:break-word]">
      {augenbraue && <p className={`${AUGENBRAUE} ${ton === 'gruen' ? '!text-pm-green' : ton === 'koralle' ? '!text-pm-coral-ink' : ''}`}>{augenbraue}</p>}
      {titel && <p className={`${augenbraue ? 'mt-2 ' : ''}text-[19px] font-bold leading-[1.3] tracking-[-0.015em] ${TITELFARBE[ton]} [text-wrap:balance]`}>{titel}</p>}
      {children && <div className={titel || augenbraue ? 'mt-5 flex flex-col gap-4' : 'flex flex-col gap-4'}>{children}</div>}
    </div>
  )
}

// „Preis berechnen" führt direkt in den Kostenrechner, nicht zu Pflegegrad- oder Schätzrechnern
// (Martin 17.09.2026). src bleibt je Seite, damit Anfragen ihrer Seite zugeordnet werden.
export function RechnerKasten({ src }: { src: string }) {
  return (
    <Kasten titel="Berechnen Sie Ihren Preis und sehen Sie passende Pflegekräfte sofort">
      <Text>
        Sie beantworten ein paar Fragen zur Pflegesituation. Danach sehen Sie den Monatspreis und die
        Betreuungskräfte, die dafür in Frage kommen. Das dauert 2 Minuten.
      </Text>
      <a
        href={`https://kostenrechner.primundus.de/?start=1&src=${src}`}
        referrerPolicy="no-referrer-when-downgrade"
        className={`${KNOPF} sm:self-start`}
      >
        Preis berechnen
      </a>
    </Kasten>
  )
}

export function HakenListe({ punkte, zweispaltig = false }: { punkte: string[]; zweispaltig?: boolean }) {
  return (
    <ul className={`grid gap-3.5 ${zweispaltig ? 'sm:grid-cols-2 sm:gap-x-8' : ''}`}>
      {punkte.map((p) => (
        <li key={p} className="flex gap-3 text-[16.5px] leading-[1.5] text-pm-body">
          <Haken />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  )
}

export function Gegenueber({ seiten }: { seiten: { titel: string; ton: 'gruen' | 'taupe' | 'koralle'; text?: ReactNode; punkte?: ReactNode[] }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {seiten.map((s) => (
        <div key={s.titel} className="bg-white rounded-[20px] shadow-lift p-6">
          <p className={`text-[17px] font-bold leading-[1.3] tracking-[-0.015em] ${s.ton === 'gruen' ? 'text-pm-green' : s.ton === 'koralle' ? 'text-pm-coral-ink' : 'text-pm-taupe-ink'}`}>
            {s.titel}
          </p>
          {s.text && <p className="mt-3 text-[16.5px] leading-[1.6] text-pm-body">{s.text}</p>}
          {s.punkte && (
            <ul className="mt-3 border-t border-pm-line-soft">
              {s.punkte.map((p, i) => (
                <li key={i} className="py-2.5 border-b border-pm-line-soft last:border-0 text-[16px] leading-[1.5] text-pm-body">{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

// Unter 640 px wird jede Zeile ein Block mit Beschriftung (data-label), statt die
// letzte Spalte nur per Wischen zu zeigen. Ein Satz Markup für beide Formen.
export function Tabelle({
  titel,
  kopf,
  zeilen,
  betont,
  fuss,
}: {
  titel?: string
  kopf?: string[]
  zeilen: ReactNode[][]
  /** Hervorgehobene Geld-Spalte(n), z. B. 2 oder [1, 2, 3] */
  betont?: number | number[]
  fuss?: ReactNode
}) {
  // Viele Spalten oder lange Zellen → weniger Innenabstand und 15 px, damit die Tabelle neben der Seitenleiste
  // (1024–1199 px: 604 px breit) nicht quer scrollt; kurze Zellen („347 €", „PG 2–3") brechen am Desktop nie um
  const spalten = kopf?.length ?? zeilen[0]?.length ?? 0
  const lang = zeilen.some((z) => z.some((c) => typeof c === 'string' && c.length > 30))
  const eng = spalten >= 5 || (spalten >= 4 && lang)
  const pad = eng ? 'px-2.5 md:px-3' : 'px-5 md:px-6'
  const schrift = eng ? 'text-[15px]' : 'text-[16px]'
  const hervor = Array.isArray(betont) ? betont : betont !== undefined ? [betont] : []
  return (
    <div className="bg-white rounded-[20px] shadow-lift overflow-hidden">
      {titel ? <p className={`${AUGENBRAUE} px-5 md:px-6 pt-5 pb-4`}>{titel}</p> : null}
      <div className="sm:overflow-x-auto">
        <table className="w-full text-left [font-variant-numeric:tabular-nums]">
          {kopf && (
          <thead className="max-sm:sr-only">
            <tr>
              {kopf.map((h) => (
                <th key={h} scope="col" className={`${pad} py-3 text-[13px] font-semibold text-pm-mute bg-pm-paper border-y border-pm-line align-bottom hyphens-auto`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          )}
          <tbody className="max-sm:border-t max-sm:border-pm-line">
            {zeilen.map((z, zi) => (
              <tr key={zi} className="border-b border-pm-line-soft last:border-0 max-sm:block max-sm:px-5 max-sm:py-4">
                {z.map((c, j) => (
                  <td
                    key={j}
                    data-label={kopf?.[j] ?? ''}
                    className={`${pad} py-4 ${schrift} align-top hyphens-auto [overflow-wrap:break-word] ${typeof c === 'string' && c.length <= 16 ? 'sm:whitespace-nowrap' : ''} ${kopf ? 'max-sm:flex max-sm:items-baseline max-sm:justify-between max-sm:gap-4 max-sm:text-right max-sm:before:content-[attr(data-label)] max-sm:before:basis-[45%] max-sm:before:shrink-0 max-sm:before:text-left max-sm:before:font-normal max-sm:before:text-pm-mute max-sm:before:text-[15px]' : 'align-top max-sm:block'} max-sm:p-0 max-sm:py-0.5 ${
                      j === 0
                        ? 'text-pm-body max-sm:before:content-none max-sm:pb-1.5 max-sm:text-[17px] max-sm:!text-left max-sm:font-bold max-sm:text-pm-ink'
                        : hervor.includes(j)
                          ? 'font-bold text-pm-green'
                          : 'font-semibold text-pm-ink'
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {fuss && <p className="px-5 md:px-6 py-4 border-t border-pm-line text-[14px] leading-[1.5] text-pm-mute">{fuss}</p>}
    </div>
  )
}

export function MehrDazu({ label, links }: { label: string; links: { href: string; text: string }[] }) {
  return (
    <p className="text-[16.5px] leading-[1.6] text-pm-body">
      <span aria-hidden="true" className="font-bold text-pm-coral mr-2">→</span>
      <span className="font-semibold text-pm-ink">{label}</span>{' '}
      {links.map((l, i) => (
        <Fragment key={l.href}>
          {i > 0 && <span className="text-pm-mute"> · </span>}
          <a href={l.href} className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">
            {l.text}
          </a>
        </Fragment>
      ))}
    </p>
  )
}

export function Fragen({ fragen }: { fragen: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-pm-line">
      {fragen.map((f) => (
        <details key={f.q} className="group border-b border-pm-line">
          <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pm-coral rounded-sm">
            <h3 className="text-[18px] md:text-[19px] font-bold leading-[1.4] tracking-[-0.015em] text-pm-ink">{f.q}</h3>
            <span aria-hidden="true" className="w-8 h-8 rounded-full bg-white border border-pm-line flex items-center justify-center flex-none text-pm-ink transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
              <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 1.5v9M1.5 6h9" />
              </svg>
            </span>
          </summary>
          <p className="pb-6 pr-14 text-[17px] leading-[1.7] text-pm-body max-w-[64ch]">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
