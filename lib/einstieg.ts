// Einstiegsseite und Herkunft eines Besuchs, mitgegeben beim Klick in den Rechner (09.10.2026, Martin: „mach alles, was
// sinnvoll ist“; Ziel im CONTENT-PLAN: Herkunft bei mindestens 80 % der Anfragen bekannt).
//
// Bis hier sah der Rechner nur die Seite, von der aus geklickt wurde, und auch die oft nicht: Bei 11 von 32 Anfragen vom
// 11.09. bis 08.10. fehlte sie, und ob jemand über Google oder direkt kam, speicherte niemand. Jetzt hängt primundus.de beim
// Klick zwei kurze Werte an den Rechner-Link: `ein` = erste Seite des Besuchs, `her` = Art der Herkunft (nur die Klasse,
// nie die verweisende Adresse). Der Rechner legt beide mit der Anfrage ab.
//
// Datenschutz: Gespeichert wird hier nichts auf dem Gerät, die Werte leben im Arbeitsspeicher der Seite. Den Verweis
// (`document.referrer`) liest das Modul nur, wenn die aufrufende Stelle es erlaubt (siehe components/EinstiegMerker.tsx).
// Ohne Erlaubnis bleiben nur Angaben aus der eigenen Adresse (Anzeigen-Klick-ID, utm_source eines KI-Assistenten).
// Dieses Modul ist rein (kein Zugriff auf window/document) und wird mit scripts/test-einstieg.mjs geprüft.

export const HERKUNFT = ['google', 'anzeige', 'bing', 'ki', 'suche', 'sozial', 'andere', 'direkt', 'intern', 'unbekannt'] as const
export type Herkunft = (typeof HERKUNFT)[number]

export type Einstieg = { ein: string | null; her: Herkunft }

const EIGENE = /(^|\.)primundus\.de$/
const KLICK_IDS = ['gclid', 'gbraid', 'wbraid', 'msclkid', 'dclid']
const BEZAHLT = /^(cpc|ppc|paid|paidsearch|paid[_-]search|sem|display|cpm|paid[_-]?social)$/i
const KI_QUELLE = /chatgpt|openai|perplexity|copilot|gemini|claude/i
const KI_HOSTS = /(^|\.)(chatgpt\.com|chat\.openai\.com|perplexity\.ai|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai|you\.com|poe\.com)$/
const GOOGLE_FREMD = /^(mail|docs|drive|calendar|translate|sites|groups)\.google\./
// Länderdomains von Google (google.de, google.co.uk, google.com.tr), nicht „google.irgendwas.net“
const GOOGLE = /(^|\.)google\.([a-z]{2,3}|co\.[a-z]{2}|com\.[a-z]{2})$/
const ANZEIGEN_HOSTS = /(^|\.)(googleadservices\.com|doubleclick\.net|googlesyndication\.com)$/
const SUCHE_HOSTS = /(^|\.)(duckduckgo\.com|ecosia\.org|qwant\.com|startpage\.com|search\.brave\.com|metager\.de|yandex\.[a-z]{2,3}|baidu\.com|suche\.t-online\.de|suche\.web\.de|suche\.gmx\.net|search\.yahoo\.com|[a-z]{2}\.search\.yahoo\.com)$/
const SOZIAL_HOSTS = /(^|\.)(facebook\.com|instagram\.com|t\.co|x\.com|twitter\.com|linkedin\.com|lnkd\.in|youtube\.com|pinterest\.[a-z]{2,3}|tiktok\.com|xing\.com|reddit\.com)$/

/** Klasse aus der eigenen Adresse (Anzeigen-Klick oder KI-Kennung) — braucht keinen Blick in den Verweis. */
function ausAdresse(suche: string): Herkunft | null {
  const p = new URLSearchParams(suche)
  if (KLICK_IDS.some((k) => p.get(k))) return 'anzeige'
  if (BEZAHLT.test(p.get('utm_medium') ?? '')) return 'anzeige'
  if (KI_QUELLE.test(p.get('utm_source') ?? '')) return 'ki'
  return null
}

/** Klasse eines Verweises. `null` = Verweis durfte nicht gelesen werden. */
export function herkunftAus(verweis: string | null, suche: string): Herkunft {
  const adresse = ausAdresse(suche)
  if (adresse) return adresse
  if (verweis === null) return 'unbekannt'
  if (verweis === '') return 'direkt'
  if (verweis.startsWith('android-app://com.google.android.googlequicksearchbox')) return 'google'
  let host = ''
  try {
    host = new URL(verweis).hostname.toLowerCase()
  } catch {
    return 'andere'
  }
  if (EIGENE.test(host)) return 'intern'
  if (KI_HOSTS.test(host)) return 'ki'
  if (ANZEIGEN_HOSTS.test(host)) return 'anzeige'
  if (GOOGLE.test(host)) return GOOGLE_FREMD.test(host) ? 'andere' : 'google'
  if (/(^|\.)bing\.com$/.test(host)) return 'bing'
  if (SUCHE_HOSTS.test(host)) return 'suche'
  if (SOZIAL_HOSTS.test(host)) return 'sozial'
  return 'andere'
}

/** Pfad wie ihn der Rechner annimmt (`^/[a-z0-9-/]{0,80}$`), sonst null. */
export function einstiegPfad(pfad: string): string | null {
  const p = (pfad || '/').toLowerCase().slice(0, 81)
  return /^\/[a-z0-9\-/]{0,80}$/.test(p) ? p : null
}

/**
 * Einstieg dieses Seitenaufrufs. Kam der Besucher von einer eigenen Seite (Neuladen über einen normalen Link), liegt der
 * Einstieg davor und ist hier unbekannt: dann `ein: null, her: 'intern'`. Ohne Erlaubnis für den Verweis lässt sich das
 * nicht unterscheiden; dann gilt die Seite nur als Einstieg, wenn die eigene Adresse die Herkunft verrät.
 */
export function einstiegErmitteln(pfad: string, suche: string, verweis: string | null): Einstieg {
  const her = herkunftAus(verweis, suche)
  if (her === 'intern' || her === 'unbekannt') return { ein: null, her }
  return { ein: einstiegPfad(pfad), her }
}

// Links ohne eigene Kennung (Text-Links, künftige Bausteine) zählen sonst nur über den Verweis als Website-Anfrage
export const SRC_ERSATZ = 'apex-textlink'

/** Seiten-Link in den Rechner (nicht Schnittstelle, Bild oder Skript)? */
export function istRechnerLink(href: string): boolean {
  try {
    const u = new URL(href)
    return u.hostname === 'kostenrechner.primundus.de' && !/^\/(api|_next|images)\//.test(u.pathname)
  } catch {
    return false
  }
}

/** Rechner-Link mit Einstieg und Herkunft; vorhandene `src` bleibt, fehlende wird ergänzt. Mehrfach anwendbar. */
export function mitEinstieg(href: string, einstieg: Einstieg): string {
  if (!istRechnerLink(href)) return href
  const u = new URL(href)
  if (!u.searchParams.has('src')) u.searchParams.set('src', SRC_ERSATZ)
  if (einstieg.ein) u.searchParams.set('ein', einstieg.ein)
  else u.searchParams.delete('ein')
  u.searchParams.set('her', einstieg.her)
  return u.toString()
}
