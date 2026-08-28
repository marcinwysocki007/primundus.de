import { ARTIKEL } from '@/lib/artikel'

const RUBRIK_NAMEN: Record<string, string> = {
  ratgeber: 'Ratgeber',
  alltag: 'Alltag & Betreuung',
  krankheiten: 'Krankheiten',
  pflegegrade: 'Pflegegrade',
  rechtliches: 'Rechtliches',
  finanzierung: 'Finanzierung',
  organisation: 'Organisation',
  vergleiche: 'Vergleiche',
}

// "Weiterlesen"-Block am Ende der Ratgeber-Artikel (28.08.2026).
//
// Vorher hing jeder Artikel an genau EINEM internen Link — dem von seiner
// Rubrik-Seite. Google hat 43 dieser fertigen Seiten in 90 Tagen kein einziges
// Mal ausgeliefert; für /qualitaet und /rechtssicher meldete die URL-Prüfung
// wörtlich "URL ist Google nicht bekannt". Ein Artikel, den nur eine einzige
// Übersichtsseite verlinkt, existiert praktisch nicht.
//
// Die Auswahl rotiert deterministisch um die aktuelle Position in der Rubrik:
// stabil über Builds (kein Zufall, keine wechselnden Links bei jedem Deploy)
// und trotzdem zeigt jeder Artikel andere Nachbarn, sodass sich die Links über
// die Rubrik verteilen statt sich auf die ersten vier zu häufen.
// Woerter, die in fast jedem Beitragstitel vorkommen und deshalb nichts ueber
// Verwandtschaft aussagen.
const ALLERWELT = new Set([
  'pflege', 'pflegen', 'zuhause', 'hause', 'stunden', 'betreuung', 'senioren',
  'beantragen', 'richtig', 'wichtig', 'alles', 'ueber',
])

function worte(a: { slug: string; titel: string }): string[] {
  return Array.from(
    new Set(
      `${a.slug} ${a.titel}`
        .toLowerCase()
        .replace(/[äöüß]/g, (z) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' })[z] as string)
        // "24h" und "24-stunden" meinen dasselbe und sind hier das
        // aussagekraeftigste Merkmal ueberhaupt — ohne diese Zusammenfassung
        // faende "Nachteile der 24h-Pflege" die "Vorteile" nicht.
        .replace(/24[\s-]*stunden/g, 'rundumdieuhr')
        .replace(/\b24h\b/g, 'rundumdieuhr')
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length >= 4 && !ALLERWELT.has(w)),
    ),
  )
}

export function Weiterlesen({ aktuell }: { aktuell: string }) {
  const me = ARTIKEL.find((a) => a.slug === aktuell)
  if (!me) return null

  const rubrik = ARTIKEL.filter((a) => a.rubrik === me.rubrik)
  const geschwister = rubrik.filter((a) => a.slug !== aktuell)
  if (geschwister.length === 0) return null

  const idx = rubrik.findIndex((a) => a.slug === aktuell)
  // Reihenfolge nach Themennaehe, nicht nach Alphabet. Die erste Fassung hat
  // schlicht die alphabetisch benachbarten Beitraege genommen — dabei stand
  // unter "Nachteile der 24h-Pflege" dann "Pflegegrad Widerspruch einlegen".
  // Gezaehlt werden gemeinsame Wortbestandteile aus Slug und Titel; sehr
  // haeufige Woerter zaehlen nicht mit, sonst waere jeder Beitrag mit jedem
  // ueber "pflege" verwandt. Bei Gleichstand entscheidet die Rotation um die
  // eigene Position — damit bleibt die Auswahl ueber Builds stabil und
  // verteilt sich trotzdem ueber die ganze Rubrik.
  const naehe = (a: (typeof ARTIKEL)[number]) =>
    worte(a).filter((w) => worte(me).includes(w)).length
  const rang = (a: (typeof ARTIKEL)[number]) =>
    (rubrik.indexOf(a) - idx + rubrik.length) % rubrik.length
  // Zwei Plaetze nach Naehe, zwei nach Rotation. Reine Naehe-Sortierung hat
  // Links auf wenigen Favoriten gehaeuft und Aussenseiter liegen lassen —
  // /osteuropaeische-pflegekraft-oder-agentur blieb so bei einem einzigen
  // eingehenden Link, also genau dem Zustand, den dieser Block beheben soll.
  // Die Rotation garantiert, dass jeder Beitrag der Rubrik drankommt.
  const nachNaehe = [...geschwister]
    .sort((a, b) => naehe(b) - naehe(a) || rang(a) - rang(b))
    .slice(0, 2)
  const nachRotation = [...geschwister]
    .sort((a, b) => rang(a) - rang(b))
    .filter((a) => !nachNaehe.includes(a))
  const auswahl = [...nachNaehe, ...nachRotation].slice(0, 4)

  return (
    <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
      <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-3">
        Weiterlesen: {RUBRIK_NAMEN[me.rubrik] ?? me.rubrik}
      </p>
      <ul className="grid gap-x-8 gap-y-2 md:grid-cols-2">
        {auswahl.map((a) => (
          <li key={a.slug}>
            <a
              href={`/${a.slug}`}
              className="text-[15px] leading-relaxed text-pm-taupe hover:text-pm-ink transition-colors"
            >
              {a.titel}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={`/${me.rubrik}`}
        className="inline-block mt-4 text-[13px] font-semibold text-pm-body hover:text-pm-ink transition-colors"
      >
        Alle Beiträge zu {RUBRIK_NAMEN[me.rubrik] ?? me.rubrik} →
      </a>
    </div>
  )
}
