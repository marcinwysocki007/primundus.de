// lib/fakten.ts — Single Source of Truth für zentrale Zahlen und Kernaussagen.
// Für NEUEN Code und JSON-LD-Builder verbindlich; Bestandsprosa wird schrittweise
// hierauf umgestellt. scripts/check-fakten.mjs wacht über veraltete Altwerte.
//
// Rechtsstand verifiziert am 21.08.2026 gegen §§ 36, 37, 42a, 45b SGB XI und
// BMG-Veröffentlichungen. Nächste reguläre Leistungsanpassung: frühestens 01.01.2028.

/** Pflegegeld €/Monat je Pflegegrad (seit 01.01.2025, unverändert 2026) — § 37 SGB XI */
export const PFLEGEGELD: Record<2 | 3 | 4 | 5, number> = { 2: 347, 3: 599, 4: 800, 5: 990 }

/** Pflegesachleistungen €/Monat je Pflegegrad (seit 01.01.2025) — § 36 SGB XI */
export const PFLEGESACHLEISTUNGEN: Record<2 | 3 | 4 | 5, number> = { 2: 796, 3: 1497, 4: 1859, 5: 2299 }

/** Entlastungsbetrag €/Monat, PG 1–5 bei häuslicher Pflege — § 45b SGB XI */
export const ENTLASTUNGSBETRAG = 131

/** Gemeinsamer Jahresbetrag Verhinderungs-/Kurzzeitpflege („Entlastungsbudget"),
 *  €/Kalenderjahr für PG 2–5, seit 01.07.2025 — § 42a SGB XI */
export const ENTLASTUNGSBUDGET = 3539

/** Steuerermäßigung haushaltsnahe Dienstleistungen: 20 %, max. €/Jahr — § 35a EStG */
export const STEUER_MAX_JAHR = 4000

/** Primundus-Grundpreis €/Monat für eine Person: Kostenrechner, pricing_config „basis" (Martin 17.09.2026: Preise aus dem Rechner, keine Spanne) */
export const PREIS_AB = 2150
export const PREIS_AB_TEXT = 'ab 2.150 €/Monat'

/** Typischer Einsatzstart nach Anfrage */
export const VORLAUF = 'ab 3 Tagen'

/** Kontakt */
export const TELEFON = '089 200 000 830'
export const TELEFON_E164 = '+4989200000830'

/** Geschäftsmodell (Betreiber-bestätigt 21.08.2026): Betreuungskräfte sind bei der
 *  Unternehmensgruppe ANGESTELLT und werden über das Entsendemodell mit
 *  A1-Bescheinigung eingesetzt — keine Vermittlung Selbstständiger. */
export const MODELL_KURZ = 'Eigene, bei der Unternehmensgruppe angestellte Betreuungskräfte — Einsatz über das Entsendemodell mit A1-Bescheinigung'

/** Auszeichnung — Wortlaut wie im Rechner (Martin 15.09.2026); Siegel und Veröffentlichung 10/2021 */
export const AWARD = '6× Testsieger DIE WELT; Service-Champion bei DIE WELT & ServiceValue (10/2021)'
export const AWARD_BELEG = 'https://primundus.de/testsieger-24-stunden-pflege'
