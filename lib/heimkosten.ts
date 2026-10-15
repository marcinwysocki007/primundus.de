// Pflegeheim-Eigenanteile je Bundesland — Grundlage für den ehrlichen
// Kostenvergleich auf den Ortsseiten.
//
// Quelle: Verband der Ersatzkassen (vdek), Stand 1. Juli 2026: Tabelle „Finanzielle Belastung
// einer/eines Pflegebedürftigen im Pflegeheim … 1. Juli 2026 – Bund und Bundesländer“,
// https://www.vdek.com/presse/daten/f_pflegeversicherung.html (Grafik
// BUND_UND_ALLE_LAENDER_eigenanteile_vergleich_07_2026.jpg) und Pressemitteilung vom 14.07.2026, S. 4.
// Gesamter Eigenanteil im ersten Heimjahr = einrichtungseinheitlicher
// Eigenanteil (Ø 1.775 €) + Unterkunft/Verpflegung (Ø 1.068 €) +
// Investitionskosten (Ø 521 €). Bundesdurchschnitt: 3.364 €/Monat.
// Spanne laut vdek: Sachsen-Anhalt 2.891 € bis Bremen 3.761 €.
//
// Werte auf volle 10 € gerundet und im Text stets als „rund" ausgewiesen.
// Genaue vdek-Werte erstes Jahr: ST 2.891, NI 3.008, MV 3.032, SH 3.148, BB 3.150, SN 3.152,
// TH 3.163, BY 3.270, RP 3.289, BE 3.388, HE 3.431, HH 3.481, BW 3.657, NW 3.671, SL 3.695, HB 3.761.
// Bei Änderung der vdek-Erhebung: diese Datei und die fest eingetragenen Länderwerte anfassen
// (FAQ der Ortsseiten „In <Land> zahlen Heimbewohner …“ und „ein Heimplatz in <Land> kostet …“,
// Landesseiten: Kopf und Tabellenfuß mit genauem Wert „Ø 3.152 €/Monat“, Fließtext gerundet).
// Der Bundeswert 3.364 € steht zusätzlich auf vielen Seiten fest im Text.

export const HEIM_EIGENANTEIL_BUND = 3364;

/** Eigenanteil je Bundesland in €/Monat (1. Heimjahr), nach dem genauen vdek-Wert sortiert. */
export const HEIM_EIGENANTEIL: Record<string, number> = {
  'Sachsen-Anhalt': 2890,
  'Niedersachsen': 3010,
  'Mecklenburg-Vorpommern': 3030,
  'Schleswig-Holstein': 3150,
  'Brandenburg': 3150,
  'Sachsen': 3150,
  'Thüringen': 3160,
  'Bayern': 3270,
  'Rheinland-Pfalz': 3290,
  'Berlin': 3390,
  'Hessen': 3430,
  'Hamburg': 3480,
  'Baden-Württemberg': 3660,
  'Nordrhein-Westfalen': 3670,
  'Saarland': 3700,
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
