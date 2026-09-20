export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'cookie-consent';

export const cookieConsent = {
  hasConsent(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  },

  getConsent(): ConsentState | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
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
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: state }));
  },

  revokeConsent() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // siehe saveConsent
    }
  },
};
