// Test Cookie-Hinweis „groß“ gegen „schmal“ (Martin 02.10.2026: „den grossen machen, aber statt Einstellungen Nur
// notwendige … vielleicht als A/B“ → „ja“; dann „ich will, dass wir sofort starten und nicht in zwei Wochen“).
// Start 02.10., Ende 29.10.; danach wieder „schmal“ für alle, bis die Auswertung entschieden ist.
//
// Zuteilung tageweise nach dem Berliner Datum. Je Besucher zu würfeln hieße, das Los im Browser zu speichern, bevor
// jemand gewählt hat (TTDSG § 25) — tageweise braucht es keinen Speicher. Die großen Tage sind vorab zufällig gezogen
// (Startwert 20261002, seo-reports/analysen/cookie-test-2026-10/tage_ziehen.py): in jedem Tagespaar 02./03.10.,
// 04./05.10. … genau ein großer Tag, jeder Wochentag zweimal groß und zweimal schmal, der 02.10. (Tag des Deploys,
// sonst ein halber Tag) schmal.
export type CookieVariante = 'gross' | 'schmal';

export const COOKIE_TEST: { von: string; bis: string; grossTage: readonly string[] } = {
  von: '2026-10-02',
  bis: '2026-10-29',
  grossTage: [
    '2026-10-03', '2026-10-04', '2026-10-07', '2026-10-08', '2026-10-11', '2026-10-12', '2026-10-14',
    '2026-10-16', '2026-10-19', '2026-10-20', '2026-10-23', '2026-10-24', '2026-10-27', '2026-10-29',
  ],
};

// JJJJ-MM-TT in Berlin, auch an den Tagen der Zeitumstellung ('en-CA' formatiert genau so)
export function berlinerDatum(jetzt: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(jetzt);
}

// ?cookie=gross oder ?cookie=schmal zeigt eine Variante zum Ansehen, ohne etwas zu speichern (Abnahme, Wächter)
export function cookieVariante(jetzt: Date = new Date(), suche = ''): CookieVariante {
  const vorschau = new URLSearchParams(suche).get('cookie');
  if (vorschau === 'gross' || vorschau === 'schmal') return vorschau;
  return COOKIE_TEST.grossTage.includes(berlinerDatum(jetzt)) ? 'gross' : 'schmal';
}
