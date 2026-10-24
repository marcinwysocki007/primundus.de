// Weihnachtsband (Martin 24.10.2026). Entwurf A „Nur Band, überall“, Freigabeseite
// https://claude.ai/artifact/4yZYEDoVpsyNX5z2Ztbxb2. Text seit dem Abend des 24.10. (Martin nach OpenAI-Prüfung: „gesichert“
// klang nach interner Planung): am Handy „Betreuung über Weihnachten garantiert“ (≤ 42 Zeichen), ab 768 px zusätzlich
// „, auch kurzfristig“.
//
// Zwei Lagen:
//   kopf  im Fluss unter der Kopfzeile, auf jeder Seite (app/layout.tsx); kostet am Handy 40 px über dem Inhalt
//   foto  am Handy und Tablet (< 1024 px) deckend auf der Oberkante des Startseiten-Fotos, über Regal und Wand, nicht über
//         Gesichtern — dort rutscht nichts nach unten (Martin 24.10.: „Ja, am Handy aufs Foto“). Steht `foto` auf der Seite,
//         blendet globals.css das Band `kopf` unter 1024 px aus.
// Gleiches Band im Kostenrechner (CAapp, app/page.tsx). Die Seiten sind statisch: Das Band verschwindet mit dem ersten
// Build ab dem 27. Dezember 2026.
const WEIHNACHTEN_BIS = Date.UTC(2026, 11, 27)

// Goldpunkte an den Rändern, nur am Computer (am Handy füllt der Satz die ganze Breite)
const PUNKTE: { l: string; t: string; g: number; hell?: boolean }[] = [
  { l: '2%', t: '30%', g: 3 }, { l: '6%', t: '72%', g: 2, hell: true }, { l: '10%', t: '24%', g: 2.5 }, { l: '15%', t: '62%', g: 2, hell: true },
  { l: '85%', t: '28%', g: 2.5 }, { l: '89%', t: '70%', g: 2, hell: true }, { l: '93%', t: '34%', g: 3 }, { l: '97%', t: '66%', g: 2 },
]

function Stern() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[13px] w-[13px] flex-none max-[374px]:hidden fill-pm-gold drop-shadow-[0_0_4px_rgba(212,168,67,0.6)] md:h-4 md:w-4">
      <path d="M12 1.5l1.9 7.1L21 10.5l-7.1 1.9L12 19.5l-1.9-7.1L3 10.5l7.1-1.9z" />
    </svg>
  )
}

export function WeihnachtsBand({ lage = 'kopf' }: { lage?: 'kopf' | 'foto' }) {
  if (Date.now() >= WEIHNACHTEN_BIS) return null
  const rahmen =
    lage === 'foto'
      ? 'absolute inset-x-0 top-0 z-10 border-b lg:hidden'
      : 'relative border-y'
  return (
    <aside
      aria-label="Weihnachten"
      data-weihnachtsband={lage}
      className={`${rahmen} overflow-hidden border-pm-gold/60 bg-gradient-to-r from-pm-green-nacht via-pm-green-deep to-pm-green-nacht text-white`}
    >
      {PUNKTE.map((p) => (
        <span
          key={p.l + p.t}
          aria-hidden="true"
          className={`absolute hidden rounded-full md:block ${p.hell ? 'bg-white/70' : 'bg-pm-gold'}`}
          style={{ left: p.l, top: p.t, width: p.g, height: p.g }}
        />
      ))}
      <p className="relative mx-auto flex max-w-seite items-center justify-center gap-2 px-3 py-2.5 min-[375px]:px-3.5 md:gap-3.5 md:px-5 md:py-3">
        <Stern />
        <span className="whitespace-nowrap text-[14px] font-semibold leading-tight max-[374px]:text-[13px] min-[390px]:text-[14.5px] md:text-[16.5px]">
          Betreuung über <strong className="font-extrabold text-pm-gold">Weihnachten</strong> garantiert
          <span className="hidden md:inline">, auch kurzfristig</span>
        </span>
        <Stern />
      </p>
    </aside>
  )
}
