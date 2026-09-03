// LocalBusiness -> Service auf den Ortsseiten.
//
// Alle 207 Orts- und Landesseiten trugen ein LocalBusiness-Markup OHNE
// physische Adresse. Google verlangt fuer LocalBusiness eine Adresse des
// konkreten Standorts -- eine Stadtseite fuer ein Servicegebiet ist aber
// keine Filiale. check-jsonld hat das seit Wochen als Warnung gefuehrt ("B9
// stellt auf Service um"), der externe Audit vom 03.09.2026 ebenfalls.
//
// Ersetzt wird durch Service + areaServed + provider (die zentrale
// Organization aus lib/schema.ts). Name, URL und areaServed bleiben; Telefon
// und E-Mail haengen an der Organization, priceRange faellt weg (gehoert
// nicht zu Service).
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ORG_ID = 'https://primundus.de/#organization'
const MUSTER = /\{\n(\s*)'@context': 'https:\/\/schema\.org',\n\s*'@type': 'LocalBusiness',\n\s*name: '([^']*)',\n\s*description: '([^']*)',\n\s*url: '([^']*)',\n\s*telephone: '[^']*',\n\s*email: '[^']*',\n\s*areaServed: (\{[^}]*\}),\n\s*priceRange: '[^']*',\n\s*\}/

let n = 0, ohne = []
for (const e of readdirSync('app', { withFileTypes: true })) {
  if (!e.isDirectory() || !e.name.startsWith('24h-pflege-')) continue
  const f = join('app', e.name, 'page.tsx')
  if (!existsSync(f)) continue
  const src = readFileSync(f, 'utf8')
  if (!src.includes("'@type': 'LocalBusiness'")) continue
  const m = src.match(MUSTER)
  if (!m) { ohne.push(e.name); continue }
  const [ganz, einzug, name, beschreibung, url, area] = m
  const neu = `{
${einzug}'@context': 'https://schema.org',
${einzug}'@type': 'Service',
${einzug}'@id': '${url}#service',
${einzug}name: '${name}',
${einzug}serviceType: '24-Stunden-Betreuung zu Hause',
${einzug}description: '${beschreibung}',
${einzug}url: '${url}',
${einzug}provider: { '@id': '${ORG_ID}' },
${einzug}areaServed: ${area},
${einzug}}`
  writeFileSync(f, src.replace(ganz, neu))
  n++
}
console.log(`11-service-schema: ${n} Seiten umgestellt`)
if (ohne.length) console.log('  NICHT erkannt (Muster weicht ab):', ohne.join(', '))
