export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'cookie-consent';

export const cookieConsent = {
  hasConsent(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem(STORAGE_KEY);
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: state }));
  },

  revokeConsent() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  },
};
