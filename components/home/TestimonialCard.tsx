"use client";

import { Star } from "lucide-react";

// Ehrlicher Vertrauensblock (Stand August 2026):
// Wir zeigen ausschließlich belegbare Bewertungen mit Link zur Quelle.
// Google-Unternehmensprofil: 5,0 aus 3 Bewertungen (bei neuen Bewertungen nachziehen).
// Die früheren sechs anonymen Testimonial-Karten waren nicht belegbar und wurden entfernt.
const GOOGLE_PROFIL_URL = "https://share.google/u2axb21OVWp838DPl";
const TRUSTPILOT_URL = "https://www.trustpilot.com/review/primundus.de";

export function TestimonialCard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Google */}
        <a
          href={GOOGLE_PROFIL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-[#E5E3DF] rounded-2xl p-5 flex flex-col gap-2 hover:border-[#8B7355] transition-colors no-underline"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold text-[#3D3D3D]">Google Bewertungen</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
            ))}
            <span className="text-[14px] font-bold text-[#3D3D3D] ml-1">5,0</span>
          </div>
          <p className="text-[12px] text-[#8B8B8B]">3 Bewertungen · Stand August 2026 · Profil ansehen →</p>
        </a>

        {/* Testsieger */}
        <a
          href="/testsieger-24-stunden-pflege"
          className="bg-white border border-[#E5E3DF] rounded-2xl p-5 flex flex-col gap-2 hover:border-[#8B7355] transition-colors no-underline"
        >
          <div className="flex items-center gap-2">
            <img src="/images/primundus_testsieger-2021.webp" alt="Testsieger-Siegel DIE WELT/ServiceValue 2021" width={28} height={28} className="w-7 h-7 object-contain" />
            <span className="text-sm font-semibold text-[#3D3D3D]">Testsieger-Auszeichnung</span>
          </div>
          <p className="text-[13px] text-[#5A5A5A] leading-snug">
            Nr. 1 der Pflegekräfte-Vermittler — DIE WELT &amp; ServiceValue (10/2021)
          </p>
          <p className="text-[12px] text-[#8B8B8B]">Zur Auszeichnung mit Beleg →</p>
        </a>

        {/* Trustpilot */}
        <a
          href={TRUSTPILOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-[#E5E3DF] rounded-2xl p-5 flex flex-col gap-2 hover:border-[#8B7355] transition-colors no-underline"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="#00B67A" d="M12 2l2.9 6.9L22 9.2l-5.4 4.9L18.2 22 12 18.1 5.8 22l1.6-7.9L2 9.2l7.1-.3z"/></svg>
            <span className="text-sm font-semibold text-[#3D3D3D]">Trustpilot</span>
          </div>
          <p className="text-[13px] text-[#5A5A5A] leading-snug">
            Ihre Erfahrung hilft anderen Familien bei der Entscheidung.
          </p>
          <p className="text-[12px] text-[#8B8B8B]">Primundus auf Trustpilot bewerten →</p>
        </a>
      </div>

      <p className="text-[12px] text-[#8B8B8B] mt-4">
        Wir zeigen nur belegbare Bewertungen mit Link zur Quelle — jede einzelne zählt.
      </p>
    </div>
  );
}
