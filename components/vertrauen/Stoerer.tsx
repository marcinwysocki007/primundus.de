// CTA-Störer in der Textspalte langer Seiten (24.09.2026, Martin: „die CTA-Störer bei langen Seiten bzw.
// Orte-Seiten einbauen"). Dunkel wie die Kundenstimmen — ein Block, der den Lesefluss sichtbar unterbricht
// und dieselbe Handlung anbietet wie Kopf und Schluss: Rechner, Gesichter, Sterne.
//
// Wortlaut ist der freigegebene Aufruf vom Seitenende (AUFRUF_TITEL/AUFRUF_TEXT), mit dem Ort im Titel.
// Jeder Störer bekommt eine eigene Knopfposition im src (ort-<slug>-ablauf, ort-<slug>-stoerer), damit der
// Rechner die Starts je Position zählt (CAapp#738) — Entscheidung 23.09.: erst messbar machen, dann einbauen.
import { AUFRUF_TEXT, AUFRUF_TITEL, RechnerBlock } from './Vertrauen'

export function CtaStoerer({ src, ort, titel, band = false }: { src: string; ort?: string; titel?: string; band?: boolean }) {
  const kopf = titel ?? (ort ? `In 2 Minuten wissen Sie, was es in ${ort} kostet und wer zu Ihnen passt.` : AUFRUF_TITEL)
  return (
    // band: das eine dunkle Band der Landingpage-Form — volle Breite ohne Rundung, Inhalt in der Seitenbreite (24.09.)
    <aside aria-label="Preis und Betreuungskräfte ansehen" className={band ? 'bg-pm-deep' : 'my-12 overflow-hidden bg-pm-deep max-md:-mx-5 md:my-14 md:rounded-[28px]'}>
      <div className={band ? 'mx-auto max-w-wide px-5 py-14 lg:py-20' : 'px-5 py-10 md:px-10 md:py-12'}>
        <p className="text-[12px] font-bold uppercase tracking-[.14em] text-pm-deep-body">Kostenlos und unverbindlich</p>
        <p className="mt-3 text-[26px] font-extrabold leading-[1.1] tracking-[-0.03em] text-pm-deep-ink [text-wrap:balance] md:text-[30px]">{kopf}</p>
        <p className="mt-4 max-w-[52ch] text-[17px] leading-[1.6] text-pm-deep-body">{AUFRUF_TEXT}</p>
        <div className="mt-7">
          <RechnerBlock src={src} punkte={false} dunkel />
        </div>
      </div>
    </aside>
  )
}
