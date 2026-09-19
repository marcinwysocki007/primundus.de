// Eigene Grafiken für die Kernseiten (19.09.2026, Martin: „wir brauchen viel mehr Content … mit eigenen Grafiken").
// Gebaut wie die Vorlage: weiße Karte, große Zahlen, Farben aus den pm-Tokens, keine Symbole. Alle Werte kommen aus dem
// Kostenrechner, dem Mustervertrag oder einer genannten Quelle; jede Grafik nennt ihre Quelle in der Fußzeile.
import type { ReactNode } from 'react'

const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe'

export function GrafikRahmen({ titel, quelle, children }: { titel: ReactNode; quelle?: ReactNode; children: ReactNode }) {
  return (
    <figure className="rounded-[20px] bg-white p-6 shadow-lift md:p-8">
      <figcaption>
        <p className={AUGENBRAUE}>Grafik</p>
        <p className="mt-2 text-[19px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">{titel}</p>
      </figcaption>
      <div className="mt-6">{children}</div>
      {quelle && <p className="mt-5 text-[14px] leading-[1.5] text-pm-mute">{quelle}</p>}
    </figure>
  )
}

const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

/** Wer zahlt was: je Pflegegrad ein Balken, der den Monatspreis in Pflegegeld, Entlastungsbudget, Steuer und Eigenanteil teilt. */
export function KostenAufteilung() {
  const budget = 295
  const steuer = 333
  const zeilen = [
    { grad: 'Pflegegrad 2', preis: 2150, pflegegeld: 347 },
    { grad: 'Pflegegrad 3', preis: 2150, pflegegeld: 599 },
    { grad: 'Pflegegrad 4', preis: 2150, pflegegeld: 800 },
    { grad: 'Pflegegrad 5', preis: 2200, pflegegeld: 990 },
  ].map((z) => ({ ...z, eigen: z.preis - z.pflegegeld - budget - steuer }))
  const max = Math.max(...zeilen.map((z) => z.preis))
  const teile = (z: (typeof zeilen)[number]) => [
    { name: 'Pflegegeld', wert: z.pflegegeld, farbe: 'bg-pm-green-deep', text: 'text-white' },
    { name: 'Entlastungsbudget', wert: budget, farbe: 'bg-pm-green', text: 'text-white' },
    { name: 'Steuerermäßigung', wert: steuer, farbe: 'bg-pm-taupe', text: 'text-white' },
    { name: 'Selbst zu tragen', wert: z.eigen, farbe: 'bg-pm-coral', text: 'text-white' },
  ]
  return (
    <GrafikRahmen
      titel="Wer zahlt was: der Monatspreis für eine Person, aufgeteilt nach Pflegegrad"
      quelle="Preis ab 2.150 € (Pflegegrad 5: ab 2.200 €) aus unserem Kostenrechner, Stand September 2026. Pflegegeld nach § 37 SGB XI. Entlastungsbudget 3.539 € im Jahr, anteilig 295 € im Monat. Steuerermäßigung 20 %, höchstens 4.000 € im Jahr, anteilig 333 € im Monat. Zzgl. An- und Abreise 125 € je Strecke."
    >
      <ul className="grid gap-5">
        {zeilen.map((z) => (
          <li key={z.grad}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[16px] font-bold text-pm-ink">{z.grad}</span>
              <span className="text-[15px] text-pm-mute [font-variant-numeric:tabular-nums]">Betreuung ab {euro(z.preis)}</span>
            </div>
            <div className="mt-2 flex h-11 w-full overflow-hidden rounded-[10px]" style={{ width: `${(z.preis / max) * 100}%` }} role="img" aria-label={`${z.grad}: ${euro(z.preis)} Betreuung, davon ${euro(z.pflegegeld)} Pflegegeld, ${euro(budget)} Entlastungsbudget, ${euro(steuer)} Steuerermäßigung, ab ca. ${euro(z.eigen)} selbst zu tragen`}>
              {teile(z).map((t) => (
                <span
                  key={t.name}
                  className={`flex h-full items-center justify-center overflow-hidden whitespace-nowrap px-1 text-[13px] font-semibold ${t.farbe} ${t.text} [font-variant-numeric:tabular-nums] first:rounded-l-[10px] last:rounded-r-[10px]`}
                  style={{ width: `${(t.wert / z.preis) * 100}%` }}
                  aria-hidden="true"
                >
                  <span className="hidden sm:inline">{t.wert >= 280 ? euro(t.wert) : ''}</span>
                </span>
              ))}
            </div>
            <p className="mt-1.5 text-[15px] text-pm-body [font-variant-numeric:tabular-nums]">
              Selbst zu tragen: <strong className="text-pm-coral-ink">ab ca. {euro(z.eigen)}</strong> im Monat
            </p>
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-pm-body" aria-label="Legende">
        {[
          ['bg-pm-green-deep', 'Pflegegeld'],
          ['bg-pm-green', 'Entlastungsbudget'],
          ['bg-pm-taupe', 'Steuerermäßigung'],
          ['bg-pm-coral', 'Selbst zu tragen'],
        ].map(([farbe, name]) => (
          <li key={name} className="flex items-center gap-2">
            <span aria-hidden="true" className={`h-3.5 w-3.5 rounded-[4px] ${farbe}`} />
            {name}
          </li>
        ))}
      </ul>
    </GrafikRahmen>
  )
}

/** Eigenanteil im Monat: Pflegeheim (Bundesdurchschnitt) gegen 24-Stunden-Pflege zu Hause bei Pflegegrad 3. */
export function HeimVsZuhause() {
  const heim = 3364
  const zuhause = 923
  const balken = (wert: number, farbe: string, label: string, zusatz: string) => (
    <li>
      <p className="text-[16px] font-bold text-pm-ink">{label}</p>
      <div className="mt-2 flex items-center gap-3">
        <div className={`h-12 rounded-[10px] ${farbe}`} style={{ width: `${(wert / heim) * 100}%`, minWidth: '4rem' }} role="img" aria-label={`${label}: ${euro(wert)} im Monat`} />
        <span className="whitespace-nowrap text-[20px] font-extrabold tracking-[-0.02em] text-pm-ink [font-variant-numeric:tabular-nums]">{zusatz}{euro(wert)}</span>
      </div>
    </li>
  )
  return (
    <GrafikRahmen
      titel="Was Sie selbst zahlen: Pflegeheim gegen 24-Stunden-Pflege zu Hause"
      quelle="Pflegeheim: Eigenanteil im ersten Jahr, Bundesdurchschnitt, vdek-Auswertung, Stand 1. Juli 2026. 24-Stunden-Pflege: eine Person, Pflegegrad 3, nach Pflegegeld, Entlastungsbudget und Steuerermäßigung, Werte aus unserem Kostenrechner, zzgl. An- und Abreise."
    >
      <ul className="grid gap-6">
        {balken(heim, 'bg-pm-taupe-light', 'Pflegeheim, Eigenanteil im Monat', 'Ø ')}
        {balken(zuhause, 'bg-pm-green', '24-Stunden-Pflege zu Hause, Pflegegrad 3', 'ab ca. ')}
      </ul>
      <p className="mt-5 text-[16.5px] leading-[1.55] text-pm-body">
        Rund <strong className="text-pm-ink">{euro(heim - zuhause)}</strong> im Monat weniger, und Ihr Angehöriger bleibt in seiner Wohnung.
      </p>
    </GrafikRahmen>
  )
}

/** Vom Preis bis zur Anreise: vier Stationen auf einer Linie, wie der Rechner seit „Preis zuerst" läuft. */
export function AblaufZeitstrahl() {
  const stationen = [
    { wann: 'Heute', was: 'Preis sehen', wie: 'Ein paar Fragen, 2 Minuten, noch ohne Kontaktdaten.' },
    { wann: 'Heute', was: 'Pflegekräfte ansehen', wie: 'Speichern, passende Pflegekräfte sehen, Bewerbungen am selben Werktag.' },
    { wann: 'Sie entscheiden', was: 'Aussuchen, dann Vertrag', wie: 'Erst nach Ihrer Auswahl kommt der Betreuungsvertrag.' },
    { wann: 'In 3 Tagen möglich', was: 'Anreise', wie: 'Die Betreuungskraft wird in der Regel direkt zu Ihnen gebracht.' },
  ]
  return (
    <GrafikRahmen titel="Vom ersten Klick bis zur Anreise" quelle="Ablauf des Kostenrechners und des Kundenportals, Stand September 2026. Anreise in 3 Tagen möglich, abhängig von der gewählten Betreuungskraft.">
      <ol className="relative grid gap-6 md:grid-cols-4 md:gap-4">
        <span aria-hidden="true" className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-0.5 bg-pm-line md:left-0 md:top-[15px] md:h-0.5 md:w-full" />
        {stationen.map((s, i) => (
          <li key={s.was} className="relative flex gap-4 md:block">
            <span className={`relative z-[1] flex h-8 w-8 flex-none items-center justify-center rounded-full text-[14px] font-bold ${i === 3 ? 'bg-pm-green text-white' : 'bg-pm-ink text-white'}`}>{i + 1}</span>
            <div className="md:mt-4">
              <p className={`${AUGENBRAUE} ${i === 3 ? '!text-pm-green' : ''}`}>{s.wann}</p>
              <p className="mt-1 text-[17px] font-bold leading-[1.3] text-pm-ink">{s.was}</p>
              <p className="mt-1 text-[15px] leading-[1.5] text-pm-body">{s.wie}</p>
            </div>
          </li>
        ))}
      </ol>
    </GrafikRahmen>
  )
}

/** Ein Beispieltag: Zeiten der Betreuung, Ruhezeit der Betreuungskraft, Nacht nur bei Bedarf. Die genauen Zeiten legen
 * Familie und Betreuungskraft fest; deshalb keine Stundenzahlen, nur der Rhythmus. */
export function Beispieltag() {
  const bloecke = [
    { von: 7, bis: 9, was: 'Aufstehen, Körperpflege, Frühstück', art: 'betreuung' },
    { von: 9, bis: 12, was: 'Haushalt, Einkauf, Arztbegleitung', art: 'betreuung' },
    { von: 12, bis: 13, was: 'Mittagessen', art: 'betreuung' },
    { von: 13, bis: 16, was: 'Ruhezeit der Betreuungskraft', art: 'ruhe' },
    { von: 16, bis: 19, was: 'Spaziergang, Gesellschaft, Abendessen', art: 'betreuung' },
    { von: 19, bis: 21, was: 'Abend, Zubettgehen', art: 'betreuung' },
    { von: 21, bis: 31, was: 'Nacht: Die Betreuungskraft schläft, hilft bei Bedarf', art: 'nacht' },
  ]
  const start = 7
  const farbe = { betreuung: 'bg-pm-taupe', ruhe: 'bg-pm-mint border border-pm-green/30', nacht: 'bg-pm-deep' } as const
  const stunde = (h: number) => `${h % 24}:00`
  return (
    <GrafikRahmen titel="Ein Beispieltag mit Betreuungskraft" quelle="Beispiel. Den Tagesablauf legen Sie mit der Betreuungskraft fest; sie hat geregelte Arbeitszeiten mit Pausen und Ruhezeiten. Wie oft nachts Hilfe nötig ist, fließt in den Preis ein.">
      <div className="hidden md:block">
        <div className="flex h-12 w-full overflow-hidden rounded-[10px]" role="img" aria-label="Beispieltag von 7 bis 7 Uhr: Betreuung am Vormittag, Mittag, Ruhezeit am Nachmittag, Betreuung am Abend, nachts Hilfe nur bei Bedarf">
          {bloecke.map((b) => (
            <span key={b.von} className={`h-full ${farbe[b.art as keyof typeof farbe]}`} style={{ width: `${((b.bis - b.von) / 24) * 100}%` }} aria-hidden="true" />
          ))}
        </div>
        <div className="relative mt-1.5 h-5 text-[13px] text-pm-mute [font-variant-numeric:tabular-nums]" aria-hidden="true">
          {[7, 9, 12, 16, 19, 21].map((h) => (
            <span key={h} className="absolute -translate-x-1/2" style={{ left: `${((h - start) / 24) * 100}%` }}>{stunde(h)}</span>
          ))}
          <span className="absolute right-0">7:00</span>
        </div>
      </div>
      <ul className="mt-2 grid gap-2.5 md:mt-5 md:grid-cols-2 md:gap-x-8">
        {bloecke.map((b) => (
          <li key={b.von} className="flex items-start gap-3 text-[15.5px] leading-[1.45] text-pm-body">
            <span aria-hidden="true" className={`mt-[3px] h-3.5 w-3.5 flex-none rounded-[4px] ${farbe[b.art as keyof typeof farbe]}`} />
            <span>
              <span className="font-semibold text-pm-ink [font-variant-numeric:tabular-nums]">{stunde(b.von)}–{stunde(b.bis)}</span> {b.was}
            </span>
          </li>
        ))}
      </ul>
    </GrafikRahmen>
  )
}

/** Wo Pflegebedürftige versorgt werden: zu Hause oder im Heim (Pflegestatistik). */
export function ZuhauseQuote() {
  const zuhause = 86
  const r = 54
  const umfang = 2 * Math.PI * r
  return (
    <GrafikRahmen titel="Wo Pflegebedürftige in Deutschland versorgt werden" quelle="Statistisches Bundesamt, Pflegestatistik, Stand Dezember 2023: 5,7 Millionen Pflegebedürftige, davon 86 % zu Hause, 14 % vollstationär im Heim.">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
        <svg viewBox="0 0 140 140" className="h-40 w-40 flex-none" role="img" aria-label="86 Prozent zu Hause, 14 Prozent im Pflegeheim">
          <circle cx="70" cy="70" r={r} fill="none" stroke="#E5E3DF" strokeWidth="18" />
          <circle cx="70" cy="70" r={r} fill="none" stroke="#3D7A5C" strokeWidth="18" strokeDasharray={`${(zuhause / 100) * umfang} ${umfang}`} strokeLinecap="butt" transform="rotate(-90 70 70)" />
          <text x="70" y="66" textAnchor="middle" fontSize="30" fontWeight="800" fill="#1C1C1C" letterSpacing="-1">86 %</text>
          <text x="70" y="86" textAnchor="middle" fontSize="12" fontWeight="600" fill="#8B8B8B">zu Hause</text>
        </svg>
        <ul className="grid gap-3 text-[16.5px] leading-[1.5] text-pm-body">
          <li className="flex items-start gap-3"><span aria-hidden="true" className="mt-[5px] h-3.5 w-3.5 flex-none rounded-[4px] bg-pm-green" /><span><strong className="text-pm-ink">86 %</strong> werden zu Hause versorgt, von Angehörigen, Pflegediensten oder Betreuungskräften</span></li>
          <li className="flex items-start gap-3"><span aria-hidden="true" className="mt-[5px] h-3.5 w-3.5 flex-none rounded-[4px] bg-pm-line" /><span><strong className="text-pm-ink">14 %</strong> leben im Pflegeheim</span></li>
        </ul>
      </div>
    </GrafikRahmen>
  )
}
