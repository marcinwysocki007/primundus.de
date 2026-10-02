// Zahlenformate für „Pflege im Kreis" (02.10.2026) — eine Stelle für Seite, Tabelle, Ortsseiten-Kasten und Texte,
// damit dieselbe Zahl überall gleich aussieht (München: 85,2 %, 8,7, −0,2 %).
const GANZ = new Intl.NumberFormat('de-DE')
const EINE = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

/** 48818 → „48.818" */
export const anzahl = (n: number) => GANZ.format(n)

/** 8.74 → „8,7" */
export const eineStelle = (x: number) => EINE.format(x)

/** 85.2 → „85,2 %" (geschütztes Leerzeichen vor dem Prozentzeichen) */
export const prozent = (x: number) => `${EINE.format(x)} %`

/** −0.2 → „−0,2 %", 3 → „+3,0 %", 0 → „±0,0 %"; ohne Wert ein Gedankenstrich. Echtes Minuszeichen, nicht „-". */
export function veraenderung(x: number | null): string {
  if (x == null) return '–'
  const vorzeichen = x > 0 ? '+' : x < 0 ? '−' : '±'
  return `${vorzeichen}${EINE.format(Math.abs(x))} %`
}

const WOERTER = ['null', 'einem', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf']

/** Kleine Zahlen im Fließtext als Wort, Dativ für „in … Kreisen": 1 → „einem", 2 → „zwei", 13 → „13" */
export const inKreisen = (n: number) => WOERTER[n] ?? anzahl(n)

/** Im Fließtext: 85.2 → „85,2 Prozent" (in Tabellen und Kacheln bleibt „%") */
export const prozentText = (x: number) => `${EINE.format(x)} Prozent`
