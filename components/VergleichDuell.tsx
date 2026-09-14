import { PRIMUNDUS, KRITERIEN, FUSSNOTEN, STAND, type Anbieter, type Wertung } from '@/lib/anbieterVergleich'

// Direktvergleich Primundus gegen einen Anbieter (Martin, 14.09.2026, Optik-Plan Stufe 0):
// Am Computer eine Tabelle, auf dem Handy je Kriterium beide Anbieter untereinander.
// Vorher war die Tabelle 560 px breit; auf dem Handy lag die Spalte des Wettbewerbers
// rechts außerhalb des Bildschirms. Schriftgrößen nach der neuen Skala: Tabelle 17/16 px,
// Fußnoten 15 px. Zeichen stehen immer mit Wort (die Kurzwerte tragen Ja/Nein).

const ZEICHEN: Record<Wertung, { sym: string; cls: string; wort: string }> = {
  ja: { sym: '✓', cls: 'text-pm-green', wort: 'ja' },
  teils: { sym: '◐', cls: 'text-pm-taupe', wort: 'teilweise' },
  nein: { sym: '✕', cls: 'text-pm-coral-ink', wort: 'nein' },
  ka: { sym: '?', cls: 'text-pm-mute', wort: 'keine Angabe' },
}

function Wert({ w, text }: { w: Wertung; text: string }) {
  const z = ZEICHEN[w]
  return (
    <span className="inline-flex items-baseline gap-2">
      <span className={`font-bold text-[18px] leading-none ${z.cls}`} aria-hidden="true">{z.sym}</span>
      <span className="sr-only">{z.wort}: </span>
      <span>{text}</span>
    </span>
  )
}

export function VergleichDuell({ anbieter }: { anbieter: Anbieter }) {
  const fussnoten = FUSSNOTEN.filter((f) =>
    [anbieter.preisAb, ...KRITERIEN.map((k) => anbieter[k.key].kurz)].join(' ').includes(f.nr),
  )
  return (
    <section className="mb-14">
      <h2 className="text-[26px] md:text-[30px] leading-tight font-bold text-pm-ink mb-6">Die Konditionen im Vergleich</h2>
      <div className="bg-white border border-pm-line rounded-2xl overflow-hidden">
        {/* Computer: Tabelle */}
        <table className="hidden md:table w-full">
          <thead>
            <tr className="bg-pm-paper">
              <th className="px-5 py-4 text-left text-[15px] font-semibold text-pm-mute border-b border-pm-line w-[30%]">Kriterium</th>
              <th className="px-5 py-4 text-left text-[16px] font-bold text-pm-taupe-ink border-b border-pm-line bg-pm-shell w-[35%]">Primundus</th>
              <th className="px-5 py-4 text-left text-[16px] font-bold text-pm-ink border-b border-pm-line w-[35%]">{anbieter.name}</th>
            </tr>
          </thead>
          <tbody className="text-[17px] leading-snug">
            <tr>
              <td className="px-5 py-4 font-semibold text-pm-ink border-b border-pm-line-soft">Preis ab</td>
              <td className="px-5 py-4 font-semibold text-pm-ink border-b border-pm-line-soft bg-pm-paper">{PRIMUNDUS.preisAb}</td>
              <td className="px-5 py-4 text-pm-body border-b border-pm-line-soft">{anbieter.preisAb}</td>
            </tr>
            {KRITERIEN.map((k) => (
              <tr key={k.key}>
                <td className="px-5 py-4 font-semibold text-pm-ink border-b border-pm-line-soft">{k.label}</td>
                <td className="px-5 py-4 text-pm-ink border-b border-pm-line-soft bg-pm-paper"><Wert w={PRIMUNDUS[k.key].wertung} text={PRIMUNDUS[k.key].kurz} /></td>
                <td className="px-5 py-4 text-pm-body border-b border-pm-line-soft"><Wert w={anbieter[k.key].wertung} text={anbieter[k.key].kurz} /></td>
              </tr>
            ))}
            <tr>
              <td className="px-5 py-4 font-semibold text-pm-ink">Modell</td>
              <td className="px-5 py-4 text-pm-ink bg-pm-paper">{PRIMUNDUS.modell}</td>
              <td className="px-5 py-4 text-pm-body">{anbieter.modell}</td>
            </tr>
          </tbody>
        </table>

        {/* Handy: je Kriterium beide Anbieter untereinander */}
        <div className="md:hidden divide-y divide-pm-line-soft">
          {[
            { key: 'preis', label: 'Preis ab', p: <span className="font-semibold">{PRIMUNDUS.preisAb}</span>, a: <span>{anbieter.preisAb}</span> },
            ...KRITERIEN.map((k) => ({
              key: k.key,
              label: k.label,
              p: <Wert w={PRIMUNDUS[k.key].wertung} text={PRIMUNDUS[k.key].kurz} />,
              a: <Wert w={anbieter[k.key].wertung} text={anbieter[k.key].kurz} />,
            })),
            { key: 'modell', label: 'Modell', p: <span>{PRIMUNDUS.modell}</span>, a: <span>{anbieter.modell}</span> },
          ].map((z) => (
            <div key={z.key} className="px-4 py-4">
              <p className="text-[16px] font-bold text-pm-ink mb-2.5">{z.label}</p>
              <dl className="grid grid-cols-[112px_1fr] gap-x-3 gap-y-2 text-[16px] leading-snug">
                <dt className="font-semibold text-pm-taupe-ink">Primundus</dt>
                <dd className="text-pm-ink">{z.p}</dd>
                <dt className="font-semibold text-pm-mute">{anbieter.name}</dt>
                <dd className="text-pm-body">{z.a}</dd>
              </dl>
            </div>
          ))}
        </div>

        <div className="bg-pm-paper border-t border-pm-line px-5 py-4 space-y-2">
          <p className="text-[15px] leading-relaxed text-pm-mute">
            Angaben zu {anbieter.name}: {anbieter.quelle}, Stand {STAND}. ✓ ja · ◐ teilweise · ✕ nein · ? keine Angabe.
          </p>
          {fussnoten.map((f) => (
            <p key={f.nr} className="text-[15px] leading-relaxed text-pm-mute">{f.nr} {f.text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
