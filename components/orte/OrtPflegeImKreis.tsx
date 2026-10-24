// Kasten „Pflege im <Kreis>" auf den Ortsseiten (02.10.2026): die Zahlen des Kreises aus /pflege-im-kreis.
//
// Bewusst nur Zahlen und EIN gleichbleibender Satz mit Link auf die Zeile des Kreises (#kreis-<Kreisschlüssel>).
// Lange, überall gleiche Fließtexte haben die Ortsseiten zweimal ähnlicher gemacht (Memory „Bausteine ≠
// Einzigartigkeit"); deshalb hier keine Deutung je Kreis. Was die Zahlen zeigen und was nicht, erklärt die Seite.
// Kreisfreie Städte sind eigene Kreise: München zeigt die Stadt (09162), nicht den Landkreis München (09184).
// Wo die Zuordnung offen ist (scripts/daten/pflege-kreise/orte-kreis.csv, kasten=nein), erscheint nichts.
import { DEUTSCHLAND, STAND, kreisFuerOrt } from '@/lib/pflege-kreise'
import { anzahl, eineStelle, prozent, veraenderung } from '@/lib/pflege-kreise-format'

const AUGENBRAUE = 'text-[14px] font-bold uppercase tracking-[.14em] text-pm-taupe'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export function OrtPflegeImKreis({ slug }: { slug: string }) {
  const k = kreisFuerOrt(slug)
  if (!k) return null
  const werte = [
    { wert: anzahl(k.p), text: 'Pflegebedürftige', vergleich: null },
    { wert: prozent(k.zh), text: 'gelten als zu Hause versorgt', vergleich: `Deutschland: ${prozent(DEUTSCHLAND.zh)}` },
    { wert: eineStelle(k.d), text: 'Dauerpflegeplätze im Heim je 100 Einwohner ab 80', vergleich: `Deutschland: ${eineStelle(DEUTSCHLAND.d)}` },
    ...(k.ch != null
      ? [{ wert: veraenderung(k.ch), text: `vollstationär im Heim Versorgte, 2023 gegenüber ${STAND.vergleich}`, vergleich: `Deutschland: ${veraenderung(DEUTSCHLAND.ch)}` }]
      : []),
  ]
  const titelId = `pflege-im-kreis-${k.ags}`
  return (
    <aside aria-labelledby={titelId} className="rounded-[20px] bg-white p-6 shadow-lift md:p-7">
      <p className={AUGENBRAUE}>Amtliche Zahlen · {STAND.sichtbar}</p>
      <h3 id={titelId} className="mt-2 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-pm-ink [text-wrap:balance] md:text-[24px]">
        Pflege {k.im}
      </h3>
      <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
        {werte.map((w) => (
          <div key={w.text} className="flex flex-col">
            <dt className="order-2 mt-1.5 text-[15px] leading-[1.35] text-pm-body">{w.text}</dt>
            <dd className="order-1 text-[26px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink">{w.wert}</dd>
            {w.vergleich ? <dd className="order-3 mt-1 text-[14px] leading-[1.4] text-pm-mute">{w.vergleich}</dd> : null}
          </div>
        ))}
      </dl>
      <p className="mt-6 text-[16px] leading-[1.55] text-pm-body">
        Den Vergleich mit allen 400 Kreisen und die Erklärung der Zahlen finden Sie unter{' '}
        <a href={`/pflege-im-kreis#kreis-${k.ags}`} className={LINK}>
          Pflege im Kreis
        </a>
        .
      </p>
      <p className="mt-2 text-[13.5px] leading-[1.5] text-pm-mute">
        Quelle: © Statistische Ämter des Bundes und der Länder,{' '}
        <a href="https://www.govdata.de/dl-de/by-2-0" rel="license noopener" className="underline decoration-pm-mute/40 underline-offset-2">
          dl-de/by-2-0
        </a>
        , eigene Berechnung
      </p>
    </aside>
  )
}
