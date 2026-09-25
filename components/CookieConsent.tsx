"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cookieConsent, ConsentState } from "@/lib/cookie-consent";

// Schmale Leiste wie im Kostenrechner (dort seit 15.08.2026: 307 → 75 px). Vorschlag 24.09.2026: Der alte Hinweis
// bedeckte am Handy ca. 300 px — auf der Startseite genau die Überschrift und den Rechner-Knopf, bei jedem Erstbesuch
// auf jeder Seite. „Nur notwendige" steht jetzt gleichwertig auf der ersten Ebene (vorher nur „Einstellungen" und
// „Alle akzeptieren"). Kein Neuladen nach der Zustimmung: GA hört auf 'cookie-consent-changed' (app/layout.tsx).
// Solange die Leiste offen ist, bleibt der WhatsApp-Knopf ausgeblendet (components/WhatsAppFloat.tsx, 25.09.).
export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // sofort statt nach 1 s: Die Leiste soll nicht erscheinen, wenn der Besucher gerade zu lesen begonnen hat
    if (!cookieConsent.hasConsent()) setShowBanner(true);
  }, []);

  const handleAcceptAll = () => {
    cookieConsent.acceptAll();
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    cookieConsent.acceptNecessary();
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    const current = cookieConsent.getConsent();
    if (current) {
      setPreferences(current);
    }
    setShowSettings(true);
  };

  const handleSavePreferences = () => {
    cookieConsent.saveConsent(preferences);
    setShowSettings(false);
    setShowBanner(false);
  };

  // Widerruf jederzeit (Art. 7 Abs. 3 DSGVO): Der Link „Cookie-Einstellungen" in der Fußzeile öffnet denselben Dialog,
  // auch wenn die Leiste längst weg ist.
  useEffect(() => {
    const oeffnen = () => handleOpenSettings();
    window.addEventListener("cookie-einstellungen-oeffnen", oeffnen);
    return () => window.removeEventListener("cookie-einstellungen-oeffnen", oeffnen);
  }, []);

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {showBanner && (
      <div
        id="cookie-consent"
        role="region"
        aria-label="Cookie-Hinweis"
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-pm-line shadow-[0_-8px_24px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
      >
        <div className="max-w-wide mx-auto px-4 sm:px-5 py-2.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
          {/* Wortlaut nach OpenAI-Prüfung 24.09.: „Alle akzeptieren" schließt Marketing ein, also steht es in der Zeile;
              „Einstellungen" als Wort statt Zahnrad (Zielgruppe 60+); beide Knöpfe gleich gestaltet (Ablehnen so leicht
              wie Zustimmen, kein Schubsen). */}
          <p className="sm:flex-1 min-w-0 text-[14px] leading-snug text-pm-body">
            <span className="font-semibold text-pm-ink">Cookies:</span> Funktion, Analyse &amp; Marketing.{" "}
            <button
              type="button"
              onClick={handleOpenSettings}
              className="font-medium text-pm-taupe-ink underline underline-offset-2 hover:text-pm-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-pm-taupe"
            >
              Einstellungen
            </button>
            <span aria-hidden="true"> · </span>
            <a
              href="/datenschutz"
              className="font-medium text-pm-taupe-ink underline underline-offset-2 hover:text-pm-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz
            </a>
          </p>

          {/* Knopffarbe wie im Kostenrechner (Martin 24.09.), beide Knöpfe gleich */}
          <div className="grid grid-cols-2 sm:flex sm:flex-none gap-2">
            <button
              type="button"
              onClick={handleAcceptNecessary}
              className="h-11 sm:px-5 rounded-lg bg-pm-slate text-[14px] font-semibold text-white hover:bg-pm-slate-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="h-11 sm:px-5 rounded-lg bg-pm-slate text-[14px] font-semibold text-white hover:bg-pm-slate-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
      )}

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-[#708A95]" />
              Cookie-Einstellungen
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Verwalten Sie Ihre Cookie-Präferenzen. Sie können Ihre Einstellungen jederzeit ändern.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Label htmlFor="necessary" className="font-semibold text-sm">
                      Notwendige Cookies
                    </Label>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                      Erforderlich
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich
                    und können nicht deaktiviert werden.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={true}
                  disabled
                  className="data-[state=checked]:bg-gray-400"
                />
              </div>

              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1 pr-4">
                  <Label htmlFor="analytics" className="font-semibold text-sm mb-1 block">
                    Analytics-Cookies
                  </Label>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren,
                    um unseren Service zu verbessern.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked })
                  }
                  className="data-[state=checked]:bg-[#708A95]"
                />
              </div>

              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1 pr-4">
                  <Label htmlFor="marketing" className="font-semibold text-sm mb-1 block">
                    Marketing-Cookies
                  </Label>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Werden verwendet, um Besuchern relevante Werbung und Marketing-Kampagnen anzuzeigen.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked })
                  }
                  className="data-[state=checked]:bg-[#708A95]"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowSettings(false)}
              className="text-sm"
            >
              Abbrechen
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="bg-[#708A95] hover:bg-[#62808A] text-white text-sm"
            >
              Einstellungen speichern
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
