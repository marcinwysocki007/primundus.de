// Bildadresse mit Inhalts-Prüfsumme (?v=…) für angezeigte Bilder. Der Browser darf solche Adressen ein Jahr behalten
// (next.config.js → headers), weil sich die Adresse ändert, sobald sich die Datei ändert. Prüfsummen:
// lib/bild-versionen.json, erzeugt von scripts/build-bildversionen.mjs im prebuild. Für og:image und JSON-LD bleiben
// die Adressen ohne ?v (Suchmaschinen und soziale Netzwerke speichern sie selbst).
import VERSIONEN from './bild-versionen.json'

const V: Record<string, string> = VERSIONEN

export function bild(pfad: string): string {
  const v = V[pfad]
  return v ? `${pfad}?v=${v}` : pfad
}
