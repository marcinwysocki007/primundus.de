// Pflegeheim-Eigenanteile je Bundesland — Grundlage für den ehrlichen
// Kostenvergleich auf den Ortsseiten.
//
// Quelle: Verband der Ersatzkassen (vdek), Stand 1. Juli 2026.
// Gesamter Eigenanteil im ersten Heimjahr = einrichtungseinheitlicher
// Eigenanteil (Ø 1.775 €) + Unterkunft/Verpflegung (Ø 1.068 €) +
// Investitionskosten (Ø 521 €). Bundesdurchschnitt: 3.364 €/Monat.
// Spanne laut vdek: Sachsen-Anhalt 2.891 € bis Bremen 3.761 €.
//
// Werte auf volle 10 € gerundet und im Text stets als „rund" ausgewiesen.
// Bei Änderung der vdek-Erhebung: nur diese Datei anfassen.

export const HEIM_EIGENANTEIL_BUND = 3364;

/** Eigenanteil je Bundesland in €/Monat (1. Heimjahr). */
export const HEIM_EIGENANTEIL: Record<string, number> = {
  'Sachsen-Anhalt': 2890,
  'Sachsen': 2990,
  'Thüringen': 3000,
  'Niedersachsen': 3010,
  'Brandenburg': 3020,
  'Mecklenburg-Vorpommern': 3030,
  'Schleswig-Holstein': 3040,
  'Berlin': 3100,
  'Bayern': 3200,
  'Rheinland-Pfalz': 3220,
  'Hessen': 3230,
  'Hamburg': 3500,
  'Nordrhein-Westfalen': 3580,
  'Baden-Württemberg': 3660,
  'Saarland': 3690,
  'Bremen': 3760,
};

/** Region-Slug (lib/staedte.ts) -> Bundesland. Stadtstaaten siehe STADT_BUNDESLAND. */
export const REGION_BUNDESLAND: Record<string, string> = {
  'baden-wuerttemberg': 'Baden-Württemberg',
  'bayern': 'Bayern',
  'brandenburg': 'Brandenburg',
  'hessen': 'Hessen',
  'mecklenburg-vorpommern': 'Mecklenburg-Vorpommern',
  'niedersachsen': 'Niedersachsen',
  'nordrhein-westfalen': 'Nordrhein-Westfalen',
  'rheinland-pfalz': 'Rheinland-Pfalz',
  'saarland': 'Saarland',
  'sachsen': 'Sachsen',
  'sachsen-anhalt': 'Sachsen-Anhalt',
  'schleswig-holstein': 'Schleswig-Holstein',
  'thueringen': 'Thüringen',
};

/** Städte, deren Bundesland von der Regionszuordnung abweicht (Stadtstaaten). */
export const STADT_BUNDESLAND: Record<string, string> = {
  'berlin': 'Berlin',
  'bremen': 'Bremen',
  'bremerhaven': 'Bremen',
  'hamburg': 'Hamburg',
};

export function bundeslandFuerStadt(slug: string, regionSlug: string): string {
  return STADT_BUNDESLAND[slug] ?? REGION_BUNDESLAND[regionSlug] ?? '';
}

/** Formatiert 3200 -> "3.200". */
export function euroFormat(betrag: number): string {
  return betrag.toLocaleString('de-DE');
}
