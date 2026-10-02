// Test Cookie-Hinweis „groß“ gegen „schmal“ (Martin 02.10.2026: „den grossen machen, aber statt Einstellungen Nur
// notwendige … vielleicht als A/B“ → „ja“). Start frühestens 16.10. nach der Ruhe, Ende 12.11.; danach wieder „schmal“
// für alle, bis die Auswertung entschieden ist.
//
// Zuteilung tageweise nach dem Berliner Datum. Je Besucher zu würfeln hieße, das Los im Browser zu speichern, bevor
// jemand gewählt hat (TTDSG § 25) — tageweise braucht es keinen Speicher. Die großen Tage sind vorab zufällig gezogen
// (Startwert 20261016, Skript im Abnahme-Ordner): in jedem Tagespaar 16./17.10., 18./19.10. … genau ein großer Tag,
// jeder Wochentag zweimal groß und zweimal schmal, 31.10. und 01.11. (Feiertage in einigen Ländern) in verschiedenen
// Varianten, der 16.10. (Tag des Deploys) schmal. Verschiebt sich der Start, wird die Liste neu gezogen.
export type CookieVariante = 'gross' | 'schmal';

export const COOKIE_TEST: { von: string; bis: string; grossTage: readonly string[] } = {
  von: '2026-10-16',
  bis: '2026-11-12',
  grossTage: [
    '2026-10-17', '2026-10-19', '2026-10-20', '2026-10-23', '2026-10-24', '2026-10-26', '2026-10-28',
    '2026-10-30', '2026-11-01', '2026-11-04', '2026-11-05', '2026-11-08', '2026-11-10', '2026-11-12',
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
