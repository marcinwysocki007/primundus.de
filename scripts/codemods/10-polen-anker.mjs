// Variiert den Ankertext des Polen-Links auf den Ortsseiten.
//
// Befund vom 01.09.2026 aus der Search Console: Fuer "polnische
// pflegekraefte", "polnischer pflegedienst in deutschland" und vier weitere
// Anfragen rankt nicht unsere eigene Polen-Seite, sondern die STARTSEITE --
// zusammen 450 Impressionen und NULL Klicks, eine davon auf Position 1,6.
// Die Startseite enthaelt das Wort "Polen" kein einziges Mal; Google setzt sie
// allein wegen Domain-Autoritaet dorthin, und im Suchergebnis steht dann nichts
// von polnischen Kraeften -- deshalb klickt niemand.
//
// Gleichzeitig trug der interne Link auf /pflegekraft-aus-polen 207 Mal
// woertlich denselben Anker: "Pflegekraft aus Polen -- Kosten, Recht und
// Ablauf". Gesucht wird aber die Mehrzahl, "polnische Pflegekraefte".
// Semantisch dasselbe, lexikalisch nicht.
//
// Deshalb vier Varianten statt einer, deterministisch ueber den Slug verteilt
// (stabil ueber Builds, kein Zufall). Zwei davon tragen die tatsaechlich
// gesuchte Formulierung. 207 identische Anker sind ohnehin das schwaechere
// Muster als eine natuerliche Streuung.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ALT = 'Pflegekraft aus Polen — Kosten, Recht und Ablauf'
const VARIANTEN = [
  'Polnische Pflegekräfte — Kosten, Recht und Ablauf',
  'Pflegekraft aus Polen — Kosten, Recht und Ablauf',
  'Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft',
  'Polnische Betreuungskräfte — das Entsendemodell erklärt',
]

// Kleine, stabile Quersumme ueber den Slug — gleiche Seite, gleiche Variante.
function streuung(slug) {
  let s = 0
  for (const z of slug) s = (s * 31 + z.charCodeAt(0)) % 100000
  return s % VARIANTEN.length
}

let geaendert = 0
const zaehler = {}
for (const eintrag of readdirSync('app', { withFileTypes: true })) {
  if (!eintrag.isDirectory() || !eintrag.name.startsWith('24h-pflege-')) continue
  const datei = join('app', eintrag.name, 'page.tsx')
  if (!existsSync(datei)) continue
  const src = readFileSync(datei, 'utf8')
  if (!src.includes(ALT)) continue
  const neu = VARIANTEN[streuung(eintrag.name)]
  if (neu === ALT) { zaehler[neu] = (zaehler[neu] ?? 0) + 1; continue }
  writeFileSync(datei, src.replace(ALT, neu))
  zaehler[neu] = (zaehler[neu] ?? 0) + 1
  geaendert++
}
console.log(`10-polen-anker: ${geaendert} Seiten geaendert`)
for (const [t, n] of Object.entries(zaehler)) console.log(`  ${String(n).padStart(4)}x  ${t}`)
