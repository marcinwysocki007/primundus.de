'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cookieConsent } from '@/lib/cookie-consent';

const WA_URL = `https://wa.me/4989200000830?text=Hallo%20Frau%20Kapcio%2C%20ich%20habe%20eine%20R%C3%BCckfrage%3A`;

// Ein Knopf zur Zeit (25.09.2026, gemessen am iPhone 13): Der schwebende Knopf lag auf dem Rechner-Knopf — beim Erstbesuch
// über die Cookie-Leiste gehoben auf Unterzeile oder Knopf (1–12 % des Knopfs auf neun von zehn Zubringern), nach der
// Cookie-Wahl auf dessen Pfeil (Startseite, /ablauf, /kontakt); wer dort tippte, landete bei WhatsApp statt im Rechner.
// Deshalb erscheint er erst, wenn die Cookie-Wahl getroffen ist UND der erste Rechner-Knopf der Seite nicht mehr im Bild ist.
// Seiten ohne Rechner-Knopf zeigen ihn nach der Cookie-Wahl sofort.
const RECHNER_KNOPF = 'main a[href*="kostenrechner.primundus.de/?"]';

export function WhatsAppFloat() {
  const pfad = usePathname();
  const [gewaehlt, setGewaehlt] = useState(false);
  const [knopfImBild, setKnopfImBild] = useState(true);
  const [tippStart, setTippStart] = useState(false);
  const [tooltipPhase, setTooltipPhase] = useState<0 | 1 | 2>(0);
  const [fadingOut, setFadingOut] = useState(false);
  const sichtbar = gewaehlt && !knopfImBild;

  // Cookie-Wahl: aus dem Speicher und über das Ereignis — ist der Speicher gesperrt, gilt die Wahl nur für diese Seite
  useEffect(() => {
    setGewaehlt(cookieConsent.hasConsent());
    const gewaehltJetzt = () => setGewaehlt(true);
    window.addEventListener('cookie-consent-changed', gewaehltJetzt);
    return () => window.removeEventListener('cookie-consent-changed', gewaehltJetzt);
  }, []);

  // Je Seite neu: Seitenwechsel ohne Neuladen tauschen den Inhalt von <main>, der Baustein bleibt stehen
  useEffect(() => {
    let io: IntersectionObserver | null = null;
    const bild = requestAnimationFrame(() => {
      const knopf = Array.from(document.querySelectorAll<HTMLElement>(RECHNER_KNOPF)).find((a) => a.getBoundingClientRect().height > 0);
      if (!knopf || typeof IntersectionObserver === 'undefined') {
        setKnopfImBild(false);
        return;
      }
      io = new IntersectionObserver(([eintrag]) => setKnopfImBild(eintrag.isIntersecting));
      io.observe(knopf);
    });
    return () => {
      cancelAnimationFrame(bild);
      io?.disconnect();
    };
  }, [pfad]);

  // Die Hinweise laufen ab dem ersten Erscheinen, nicht ab dem Laden der Seite
  useEffect(() => {
    if (sichtbar) setTippStart(true);
  }, [sichtbar]);

  useEffect(() => {
    if (!tippStart) return;
    const t1 = setTimeout(() => { setFadingOut(false); setTooltipPhase(1); }, 10000);
    const t2 = setTimeout(() => { setFadingOut(false); setTooltipPhase(2); }, 13500);
    const t3 = setTimeout(() => setFadingOut(true), 16500);
    const t4 = setTimeout(() => setTooltipPhase(0), 17200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [tippStart]);

  return (
    <div
      aria-hidden={!sichtbar}
      className={`md:hidden fixed right-4 bottom-5 z-50 flex flex-col items-end gap-2 transition-[opacity,transform] duration-200 motion-reduce:transition-none ${sichtbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
    >
      <style>{`
        @keyframes waFadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes waFadeOutDown {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(6px); }
        }
      `}</style>

      {tooltipPhase > 0 && (
        <div
          key={tooltipPhase}
          className="relative bg-white text-[#1a1a1a] text-sm font-medium px-3.5 py-2.5 rounded-2xl rounded-br-sm shadow-lg border border-gray-100 whitespace-nowrap"
          style={{ animation: fadingOut ? 'waFadeOutDown 0.4s ease forwards' : 'waFadeInUp 0.3s ease forwards' }}
        >
          {tooltipPhase === 1 ? 'Haben Sie Fragen?' : 'Schreiben Sie Frau Kapcio...'}
          <span className="absolute -bottom-1.5 right-3 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      )}

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={sichtbar ? undefined : -1}
        className="relative flex w-14 h-14 items-center justify-center bg-[#25D366] hover:bg-[#20C05A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
        aria-label="WhatsApp Beratung"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        </span>
      </a>
    </div>
  );
}
