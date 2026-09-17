// Server-Komponente (keine Interaktion): so landen die Bewertungsdaten nicht im JS der Startseite.
import { Sterne } from "@/components/bewertungen/Sterne";
import { schnittText, TRUSTPILOT_SICHTBAR } from "@/lib/bewertungen";

// Vertrauensblock: Google-Schnitt mit Link auf /erfahrungen (dort alle Bewertungen im Wortlaut,
// auch die direkt an Primundus geschickten, Martin 17.09.2026).
// Google: Schnitt und Anzahl kommen seit 17.09.2026 aus lib/bewertungen.ts (beide Profile,
// München und Hamburg, jede Rezension im Wortlaut auf /erfahrungen). Vorher stand hier
// „5,0 aus 3" (nur München, Stand August), bis eine 4-Sterne-Rezension dazukam.
// Die früheren sechs anonymen Testimonial-Karten waren nicht belegbar und wurden entfernt.
const TRUSTPILOT_URL = "https://www.trustpilot.com/review/primundus.de";

// google: Schnitt und Anzahl über beide Google-Profile, von app/page.tsx geladen
// (lib/google-bewertungen.ts: live über die Places API, sonst feste Einträge).
export function TestimonialCard({ google }: { google: { wert: number; anzahl: number } }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Google */}
        <a
          href="/erfahrungen"
          className="bg-white border border-pm-line rounded-2xl p-5 flex flex-col gap-2 hover:border-pm-taupe transition-colors no-underline"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold text-pm-ink">Google Bewertungen</span>
          </div>
          <div className="flex items-center gap-1">
            <Sterne wert={google.wert} groesse={16} />
            <span className="text-[14px] font-bold text-pm-ink ml-1">{schnittText(google.wert)}</span>
          </div>
          <p className="text-[12px] text-pm-mute">{google.anzahl} Rezensionen · Alle Bewertungen lesen →</p>
        </a>

        {/* Testsieger */}
        <a
          href="/testsieger-24-stunden-pflege"
          className="bg-white border border-pm-line rounded-2xl p-5 flex flex-col gap-2 hover:border-pm-taupe transition-colors no-underline"
        >
          <div className="flex items-center gap-2">
            <img src="/images/primundus_testsieger-2021.webp" alt="Testsieger-Siegel DIE WELT/ServiceValue" width={28} height={28} className="w-7 h-7 object-contain" />
            <span className="text-sm font-semibold text-pm-ink">6× Testsieger</span>
          </div>
          <p className="text-[13px] text-pm-body leading-snug">
            DIE WELT · Preis &amp; Qualität
          </p>
          <p className="text-[12px] text-pm-mute">Zur Auszeichnung →</p>
        </a>

        {/* Trustpilot erst ab 5 Bewertungen (Martin 17.09.2026), bis dahin Einladung zur eigenen Bewertung */}
        {TRUSTPILOT_SICHTBAR ? (
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-pm-line rounded-2xl p-5 flex flex-col gap-2 hover:border-pm-taupe transition-colors no-underline"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="#00B67A" d="M12 2l2.9 6.9L22 9.2l-5.4 4.9L18.2 22 12 18.1 5.8 22l1.6-7.9L2 9.2l7.1-.3z"/></svg>
              <span className="text-sm font-semibold text-pm-ink">Trustpilot</span>
            </div>
            <p className="text-[13px] text-pm-body leading-snug">
              Ihre Erfahrung hilft anderen Familien bei der Entscheidung.
            </p>
            <p className="text-[12px] text-pm-mute">Primundus auf Trustpilot bewerten →</p>
          </a>
        ) : (
          <a
            href="/erfahrungen#bewerten"
            className="bg-white border border-pm-line rounded-2xl p-5 flex flex-col gap-2 hover:border-pm-taupe transition-colors no-underline"
          >
            <span className="text-sm font-semibold text-pm-ink">Ihre Bewertung</span>
            <p className="text-[13px] text-pm-body leading-snug">
              Ihre Erfahrung hilft anderen Familien bei der Entscheidung.
            </p>
            <p className="text-[12px] text-pm-mute">Primundus bewerten →</p>
          </a>
        )}
      </div>

      <p className="text-[12px] text-pm-mute mt-4">
        <a href="/erfahrungen" className="underline underline-offset-2 hover:text-pm-ink">Alle Bewertungen im Wortlaut lesen</a>
      </p>
    </div>
  );
}
