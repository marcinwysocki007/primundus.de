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

// Bestandteile des Eigenanteils im Bundesdurchschnitt (vdek, 1. Juli 2026, erstes Heimjahr):
// pflegebedingter Eigenanteil (EEE, nach 15 % Leistungszuschlag) 1.775 € + Unterkunft/Verpflegung 1.068 € + Investitionskosten 521 €.
export const HEIM_EEE_BUND_JAHR1 = 1775;
export const HEIM_UNTERKUNFT_BUND = 1068;
export const HEIM_INVEST_BUND = 521;

/** Leistungszuschlag der Pflegekasse auf den pflegebedingten Eigenanteil nach Aufenthaltsdauer (§ 43c SGB XI): 1. Jahr 15 %, 2. Jahr 30 %, 3. Jahr 50 %, ab dem 4. Jahr 75 %. */
export const HEIM_ZUSCHLAG: Record<1 | 2 | 3 | 4, number> = { 1: 0.15, 2: 0.3, 3: 0.5, 4: 0.75 };

/** Pauschaler Leistungsbetrag der Pflegekasse im Heim je Kalendermonat (§ 43 Abs. 2 SGB XI, seit 01.01.2025). Pflegegrad 1: 131 € Zuschuss (§ 43 Abs. 3). */
export const HEIM_LEISTUNG: Record<2 | 3 | 4 | 5, number> = { 2: 805, 3: 1319, 4: 1855, 5: 2096 };

/** Pflegebedingter Eigenanteil im Bundesdurchschnitt vor dem Zuschlag (1.775 € entsprechen 85 %). */
export const HEIM_EEE_BUND_OHNE_ZUSCHLAG = Math.round(HEIM_EEE_BUND_JAHR1 / (1 - HEIM_ZUSCHLAG[1]));

/** Eigenanteil im Bundesdurchschnitt je Aufenthaltsjahr (EEE nach Zuschlag + Unterkunft/Verpflegung + Investitionskosten), auf volle Euro gerundet. */
export function heimEigenanteilBundJahr(jahr: 1 | 2 | 3 | 4): number {
  return Math.round(HEIM_EEE_BUND_OHNE_ZUSCHLAG * (1 - HEIM_ZUSCHLAG[jahr])) + HEIM_UNTERKUNFT_BUND + HEIM_INVEST_BUND;
}
