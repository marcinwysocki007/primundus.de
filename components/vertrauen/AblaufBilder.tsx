// Ein Bild vom Produkt je Ablauf-Schritt (24.09.2026) — wie die Partnerseite zu jedem Schritt das Portal
// zeigt (Kunde senden, Bewerbungen, Angebot prüfen). Martin: „personalisierter auf unsere Dienstleistung —
// wir haben doch alles." Drei Bildschirme im iPhone-Rahmen der Bühne (Geraet), Inhalt 393 px breit gesetzt.
//
// Was die Bilder zeigen, gibt es so: Schritt 3 des Rechners heißt „Vorhandener Pflegegrad?" (MultiStepForm,
// getStepTitle), Bewerbungen kommen mit Foto, Deutschniveau, Erfahrung und Verfügbarkeit, der Vertrag kommt
// erst nach der Auswahl, der Mustervertrag liegt als PDF bereit. Kein Preis im Bild (Regel Ortsseiten 23.09.).
import Image from 'next/image'
import { Geraet, PROFILE } from './ProduktBuehne'

function Haken({ klein = false }: { klein?: boolean }) {
  return (
    <svg viewBox="0 0 12 12" className={klein ? 'h-3 w-3' : 'h-4 w-4'} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.3l2.3 2.2 4.7-5" />
    </svg>
  )
}

/** Schritt 1 — der Rechner: eine der acht Fragen, Pflegegrad 3 gewählt. */
export function RechnerBildschirm() {
  const stufen = ['Kein Pflegegrad', 'Pflegegrad 1', 'Pflegegrad 2', 'Pflegegrad 3', 'Pflegegrad 4', 'Pflegegrad 5']
  return (
    <>
      <div className="mt-1 flex flex-none items-center justify-between px-0.5">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-pm-taupe">Schritt 3 von 8</p>
        <span className="flex h-1.5 w-[120px] overflow-hidden rounded-full bg-pm-line">
          <i className="block h-full w-[37.5%] rounded-full bg-pm-coral" />
        </span>
      </div>
      <p className="flex-none px-0.5 text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-[#18181B]">Vorhandener Pflegegrad?</p>
      <div className="flex flex-none flex-col gap-2">
        {stufen.map((st, i) => {
          const gewaehlt = i === 3
          return (
            <div key={st} className={`flex items-center justify-between rounded-[14px] border bg-white px-4 py-3 text-[16px] ${gewaehlt ? 'border-pm-coral font-semibold text-[#18181B] shadow-[0_0_0_3px_rgba(231,111,99,0.15)]' : 'border-[#E4E4E7] text-[#3F3F46]'}`}>
              {st}
              {gewaehlt && (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pm-coral text-white">
                  <Haken klein />
                </span>
              )}
            </div>
          )
        })}
      </div>
      <span className="mt-1 flex h-12 flex-none items-center justify-center rounded-full bg-pm-coral text-[16px] font-bold text-white">Weiter →</span>
    </>
  )
}

/** Schritt 2 — eine Bewerbung im Kundenportal: Foto, Deutsch, Erfahrung, Verfügbarkeit. */
export function BewerbungBildschirm() {
  const p = PROFILE[0]
  return (
    <>
      <div className="mt-1 flex flex-none items-center gap-2.5 rounded-[14px] bg-pm-mint px-4 py-3">
        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-pm-green text-white">
          <Haken klein />
        </span>
        <p className="text-[15px] font-bold text-pm-green-deep">Neue Bewerbung für Ihre Betreuung</p>
      </div>
      <div className="flex-none overflow-hidden rounded-[16px] border border-pm-coral bg-white">
        <div className="px-4 pb-3 pt-4">
          <div className="flex items-center gap-3.5">
            <Image src={p.foto} alt="" width={64} height={64} className="h-16 w-16 flex-none rounded-[12px] object-cover object-top" />
            <div>
              <p className="text-[17px] font-semibold leading-[1.25] text-[#18181B]">
                {p.name}
                <span className="font-normal text-[#71717A]">, {p.alter}</span>
              </p>
              <p className="mt-1 text-[14px] text-[#71717A]">Deutsch ●●● {p.deutsch}</p>
            </div>
          </div>
          <p className="mt-3 text-[15px] leading-[1.45] text-[#71717A]">
            <b className="font-semibold text-[#18181B]">{p.rang}:</b> {p.fakten}
          </p>
          <div className="mt-3 grid gap-1.5 rounded-[12px] bg-pm-paper px-3.5 py-3 text-[14px] text-[#3F3F46]">
            <p className="flex items-center gap-2"><span className="text-pm-green"><Haken klein /></span> Verfügbar ab 15.10.2026</p>
            <p className="flex items-center gap-2"><span className="text-pm-green"><Haken klein /></span> Erfahrung mit Demenz</p>
            <p className="flex items-center gap-2"><span className="text-pm-green"><Haken klein /></span> Nachts bei Bedarf da</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 border-t border-pm-line-soft px-4 py-2.5">
          <span className="text-[13px] font-medium text-pm-mute">Ablehnen</span>
          <span className="rounded-full bg-pm-coral px-4 py-1.5 text-[13px] font-bold text-white">Auswählen →</span>
        </div>
      </div>
      <div className="flex-none rounded-[16px] border border-[#E4E4E7] bg-white px-4 py-3 opacity-60">
        <p className="text-[15px] font-semibold text-[#18181B]">
          {PROFILE[1].name}
          <span className="font-normal text-[#71717A]">, {PROFILE[1].alter}</span>
        </p>
        <p className="mt-0.5 text-[13px] text-[#71717A]">Deutsch ●●● {PROFILE[1].deutsch} · {PROFILE[1].fakten}</p>
      </div>
    </>
  )
}

/** Schritt 3 — die Auswahl steht, der Vertrag kommt jetzt: Mustervertrag lesen, dann Anreise. */
export function AuswahlBildschirm() {
  const p = PROFILE[0]
  return (
    <>
      <div className="mt-1 flex flex-none items-center gap-3 rounded-[14px] bg-pm-mint px-4 py-3.5">
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-pm-green text-white">
          <Haken />
        </span>
        <div className="leading-[1.3]">
          <p className="text-[16px] font-bold text-pm-green-deep">Ihre Auswahl: {p.name}</p>
          <p className="text-[13.5px] text-pm-green-deep/80">Sie haben entschieden — jetzt der Vertrag</p>
        </div>
      </div>
      <div className="flex-none rounded-[16px] border border-[#E4E4E7] bg-white p-4">
        <p className="text-[16px] font-bold text-[#18181B]">Betreuungsvertrag</p>
        <p className="mt-1 text-[14px] leading-[1.45] text-[#71717A]">Erst nach Ihrer Auswahl — zum Lesen, bevor Sie unterschreiben.</p>
        <div className="mt-3 flex items-center gap-3 rounded-[12px] bg-pm-paper px-3.5 py-3">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] bg-white text-[11px] font-bold text-pm-taupe shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">PDF</span>
          <div className="min-w-0 leading-[1.3]">
            <p className="truncate text-[14px] font-semibold text-[#18181B]">Mustervertrag Primundus</p>
            <p className="text-[12.5px] text-[#71717A]">täglich kündbar · keine Vermittlungsgebühr</p>
          </div>
        </div>
        <span className="mt-3 flex h-11 items-center justify-center rounded-full bg-pm-coral text-[15px] font-bold text-white">Vertrag ansehen</span>
      </div>
      <div className="flex-none rounded-[16px] border border-[#E4E4E7] bg-white px-4 py-3.5">
        <p className="flex items-center gap-2 text-[15px] font-semibold text-[#18181B]"><span className="text-pm-green"><Haken /></span> Anreise in 3 Tagen möglich</p>
        <p className="mt-1 pl-6 text-[13.5px] text-[#71717A]">Marta Kapcio und ihr Team organisieren die Anreise.</p>
      </div>
    </>
  )
}

const BILDER = [RechnerBildschirm, BewerbungBildschirm, AuswahlBildschirm]
const BESCHREIBUNG = [
  'Beispiel aus dem Kostenrechner: die Frage nach dem Pflegegrad',
  'Beispiel aus dem Kundenportal: eine Bewerbung mit Foto, Deutschniveau und Erfahrung',
  'Beispiel aus dem Kundenportal: Auswahl getroffen, Vertrag zum Lesen, Anreise',
]

/** Das Gerät zu Schritt i (0–2), oben angeschnitten mit weichem Auslauf — Größe über die Bühnen-Variablen. */
export function AblaufBild({ schritt }: { schritt: 0 | 1 | 2 }) {
  const Bildschirm = BILDER[schritt]
  return (
    <div
      role="img"
      aria-label={BESCHREIBUNG[schritt]}
      className="flex h-[300px] justify-center overflow-hidden rounded-[20px] bg-[linear-gradient(165deg,#F1EAE0,#E9DFD2)] pt-6 [--geraet:224px] [--massstab:0.5344] [--sicht:210px] [mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]"
    >
      <div aria-hidden="true">
        <Geraet>
          <Bildschirm />
        </Geraet>
      </div>
    </div>
  )
}
