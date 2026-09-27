export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'cookie-consent';
// Eine Cookie-Leiste für primundus.de UND den Kostenrechner (27.09.2026): localStorage gilt je Domain, deshalb sah
// ein Besucher seit dem 24.09. zwei Leisten hintereinander — erst hier, dann dieselbe im Rechner, direkt vor Frage 1.
// Die Zustimmung wandert deshalb zusätzlich in ein Cookie auf .primundus.de, das alle Subdomains lesen können; die
// Rechner-Seite übernimmt es (CAapp, andere Sitzung). Kein Tracking: das Cookie enthält nur die drei Ja/Nein-Werte.
const COOKIE_NAME = 'pm_consent';
const COOKIE_DOMAIN = '.primundus.de';
const COOKIE_TAGE = 180;

function cookieLesen(): ConsentState | null {
  if (typeof document === 'undefined') return null;
  const teil = document.cookie.split('; ').find((c) => c.startsWith(COOKIE_NAME + '='));
  if (!teil) return null;
  try {
    const v = JSON.parse(decodeURIComponent(teil.slice(COOKIE_NAME.length + 1)));
    return typeof v?.necessary === 'boolean' ? { necessary: true, analytics: !!v.analytics, marketing: !!v.marketing } : null;
  } catch {
    return null;
  }
}

function cookieSchreiben(state: ConsentState | null) {
  if (typeof document === 'undefined') return;
  const aufDomain = location.hostname.endsWith('primundus.de') ? `; Domain=${COOKIE_DOMAIN}` : '';
  const sicher = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = state
    ? `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(state))}; Max-Age=${COOKIE_TAGE * 86400}; Path=/; SameSite=Lax${aufDomain}${sicher}`
    : `${COOKIE_NAME}=; Max-Age=0; Path=/${aufDomain}${sicher}`;
}

export const cookieConsent = {
  hasConsent(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return true;
    } catch {
      // Speicher gesperrt: nur das Cookie zählt
    }
    return cookieLesen() !== null;
  },

  getConsent(): ConsentState | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      // Speicher gesperrt: nur das Cookie zählt
    }
    return cookieLesen();
  },

  acceptAll() {
    this.saveConsent({ necessary: true, analytics: true, marketing: true });
  },

  acceptNecessary() {
    this.saveConsent({ necessary: true, analytics: false, marketing: false });
  },

  saveConsent(state: ConsentState) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Speicher gesperrt (privater Modus, blockierte Cookies): Zustimmung gilt für diese Seite
    }
    cookieSchreiben(state);
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: state }));
  },

  revokeConsent() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // siehe saveConsent
    }
    cookieSchreiben(null);
  },
};
