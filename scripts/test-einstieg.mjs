#!/usr/bin/env node
// test-einstieg.mjs — prüft lib/einstieg.ts (Einstiegsseite und Herkunft beim Klick in den Rechner, 09.10.2026).
// Übersetzt die Datei mit tsc nach .next/cache und rechnet Beispiele durch. Aufruf: node scripts/test-einstieg.mjs
import { execSync } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs'
import { createRequire } from 'node:module'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const OUT = path.join(ROOT, '.next', 'cache', 'einstieg-test')
fs.mkdirSync(OUT, { recursive: true })
execSync(`npx tsc lib/einstieg.ts --outDir ${OUT} --module commonjs --target es2020 --skipLibCheck`, { cwd: ROOT, stdio: 'inherit' })
const E = createRequire(import.meta.url)(path.join(OUT, 'einstieg.js'))

let fehler = 0
function gleich(name, ist, soll) {
  const ok = JSON.stringify(ist) === JSON.stringify(soll)
  if (!ok) fehler += 1
  console.log(`${ok ? '✓' : '✗'} ${name}: ${JSON.stringify(ist)}${ok ? '' : ' — erwartet ' + JSON.stringify(soll)}`)
}

// Herkunft: zuerst die eigene Adresse, dann der Verweis (nur Klasse, nie die Adresse)
gleich('ohne Verweis = direkt', E.herkunftAus('', ''), 'direkt')
gleich('Verweis nicht erlaubt = unbekannt', E.herkunftAus(null, ''), 'unbekannt')
gleich('Klick-ID ohne Verweis = Anzeige', E.herkunftAus(null, '?gclid=abc'), 'anzeige')
gleich('Klick-ID schlägt Google-Verweis', E.herkunftAus('https://www.google.com/', '?gbraid=x'), 'anzeige')
gleich('utm_medium=cpc = Anzeige', E.herkunftAus(null, '?utm_source=google&utm_medium=cpc'), 'anzeige')
gleich('Microsoft-Anzeige', E.herkunftAus('https://www.bing.com/', '?msclkid=1'), 'anzeige')
gleich('Anzeigen-Server als Verweis', E.herkunftAus('https://www.googleadservices.com/pagead/aclk?sa=L', ''), 'anzeige')
gleich('Google organisch', E.herkunftAus('https://www.google.com/', ''), 'google')
gleich('Google.de', E.herkunftAus('https://www.google.de/', ''), 'google')
gleich('Google.co.uk', E.herkunftAus('https://google.co.uk/', ''), 'google')
gleich('Google-App Android', E.herkunftAus('android-app://com.google.android.googlequicksearchbox/', ''), 'google')
gleich('Gmail ist keine Suche', E.herkunftAus('https://mail.google.com/', ''), 'andere')
gleich('fremde Domain mit google im Namen', E.herkunftAus('https://google.angreifer.net/', ''), 'andere')
gleich('Gemini = KI, nicht Google', E.herkunftAus('https://gemini.google.com/', ''), 'ki')
gleich('ChatGPT-Verweis', E.herkunftAus('https://chatgpt.com/', ''), 'ki')
gleich('ChatGPT-Kennung in der Adresse', E.herkunftAus(null, '?utm_source=chatgpt.com'), 'ki')
gleich('Perplexity', E.herkunftAus('https://www.perplexity.ai/', ''), 'ki')
gleich('Bing', E.herkunftAus('https://www.bing.com/', ''), 'bing')
gleich('DuckDuckGo', E.herkunftAus('https://duckduckgo.com/', ''), 'suche')
gleich('Ecosia', E.herkunftAus('https://www.ecosia.org/', ''), 'suche')
gleich('T-Online-Suche', E.herkunftAus('https://suche.t-online.de/fast-suche?q=pflege', ''), 'suche')
gleich('Facebook', E.herkunftAus('https://l.facebook.com/', ''), 'sozial')
gleich('eigene Seite = intern', E.herkunftAus('https://primundus.de/kosten', ''), 'intern')
gleich('Rechner = intern', E.herkunftAus('https://kostenrechner.primundus.de/', ''), 'intern')
gleich('andere Website', E.herkunftAus('https://www.pflege.de/artikel', ''), 'andere')
gleich('kaputter Verweis', E.herkunftAus('kaputt', ''), 'andere')
gleich('Newsletter ohne Verweis bleibt direkt', E.herkunftAus('', '?utm_medium=email'), 'direkt')

// Einstiegsseite: nur Pfade, die der Rechner annimmt (/^\/[a-z0-9\-/]{0,80}$/)
gleich('Startseite', E.einstiegPfad('/'), '/')
gleich('Großbuchstaben', E.einstiegPfad('/Kosten'), '/kosten')
gleich('Ortsseite', E.einstiegPfad('/24h-pflege-muenchen'), '/24h-pflege-muenchen')
gleich('leer = Startseite', E.einstiegPfad(''), '/')
gleich('Umlaut kodiert = verworfen', E.einstiegPfad('/f%C3%BCr'), null)
gleich('zu lang = gekürzt', E.einstiegPfad('/' + 'a'.repeat(100)).length, 81)

gleich('von Google auf /kosten', E.einstiegErmitteln('/kosten', '', 'https://www.google.com/'), { ein: '/kosten', her: 'google' })
gleich('Neuladen innerhalb der Website', E.einstiegErmitteln('/kosten', '', 'https://primundus.de/'), { ein: null, her: 'intern' })
gleich('Verweis nicht erlaubt', E.einstiegErmitteln('/kosten', '', null), { ein: null, her: 'unbekannt' })
gleich('Anzeige ohne Verweis: Seite ist Einstieg', E.einstiegErmitteln('/kosten', '?gclid=1', null), { ein: '/kosten', her: 'anzeige' })

// Link in den Rechner
const g = { ein: '/kosten', her: 'google' }
const KOPF = 'https://kostenrechner.primundus.de/?start=1&src=apex-components'
gleich('Knopf mit Kennung', E.mitEinstieg(KOPF, g), KOPF + '&ein=%2Fkosten&her=google')
gleich('zweimal angewandt = gleich', E.mitEinstieg(E.mitEinstieg(KOPF, g), g), KOPF + '&ein=%2Fkosten&her=google')
gleich('ohne Einstieg: kein ein', E.mitEinstieg(KOPF + '&ein=%2Falt', { ein: null, her: 'intern' }), KOPF + '&her=intern')
gleich('Bestpreisgarantie behält ihre Kennung', E.mitEinstieg('https://kostenrechner.primundus.de/bestpreisgarantie?src=apex-garantie', g),
  'https://kostenrechner.primundus.de/bestpreisgarantie?src=apex-garantie&ein=%2Fkosten&her=google')
gleich('Link ohne Kennung bekommt Ersatz', E.mitEinstieg('https://kostenrechner.primundus.de', g),
  'https://kostenrechner.primundus.de/?src=apex-textlink&ein=%2Fkosten&her=google')
gleich('fremde Kennung bleibt stehen', E.mitEinstieg('https://kostenrechner.primundus.de/?start=1&src=garantie', g),
  'https://kostenrechner.primundus.de/?start=1&src=garantie&ein=%2Fkosten&her=google')
gleich('Sprungmarke bleibt', E.mitEinstieg('https://kostenrechner.primundus.de/?start=1&src=apex-kosten#oben', g),
  'https://kostenrechner.primundus.de/?start=1&src=apex-kosten&ein=%2Fkosten&her=google#oben')
gleich('Schnittstelle unverändert', E.mitEinstieg('https://kostenrechner.primundus.de/api/bewertungen', g), 'https://kostenrechner.primundus.de/api/bewertungen')
gleich('eigene Seite unverändert', E.mitEinstieg('https://primundus.de/kosten', g), 'https://primundus.de/kosten')
gleich('WhatsApp unverändert', E.mitEinstieg('https://wa.me/4989200000830', g), 'https://wa.me/4989200000830')

// Vertrag mit dem Rechner (CAapp, lib/website-einstieg.ts): nur Werte, die er annimmt
gleich('alle Klassen kurz und klein', E.HERKUNFT.every((h) => /^[a-z]{1,12}$/.test(h)), true)
const rechnerPfad = /^\/[a-z0-9\-/]{0,80}$/
gleich('Pfade passen zum Rechner', ['/', '/Kosten', '/24h-pflege-muenchen', '/' + 'a'.repeat(100)].map(E.einstiegPfad).every((p) => rechnerPfad.test(p)), true)

console.log(fehler ? `\n✗ ${fehler} Fehler` : '\n✓ alle Prüfungen bestanden')
process.exit(fehler ? 1 : 0)
