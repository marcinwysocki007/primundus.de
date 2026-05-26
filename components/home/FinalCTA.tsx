'use client';

export function FinalCTA() {
  return (
    <section className="py-16 px-5 bg-[#8B7355]">
      <div className="max-w-[640px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[26px] leading-[1.25] font-bold text-white mb-2">
            Jetzt Kosten prüfen –<br />kostenlos & unverbindlich
          </h2>
          <p className="text-base text-white/90 leading-relaxed mb-7">
            In 2 Minuten wissen Sie, was 24-Stunden-Pflege für Ihre Situation kostet. Inkl. Finanzierungsmöglichkeiten.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="https://kostenrechner.primundus.de"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E76F63] hover:bg-[#D65E52] text-white rounded-full text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Kosten & Pflegekräfte ansehen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <div className="flex items-center gap-2 text-white/90">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-[15px] font-medium">100% kostenfrei & unverbindlich</span>
          </div>

          <div className="w-full max-w-[480px] border-t border-white/20 my-2"></div>

          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
              <img
                src="/images/ilka-wysocki_pm-mallorca.webp"
                alt="Ilka Wysocki"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="text-white/70 text-[14px] mb-1">Oder rufen Sie uns an:</p>
              <a
                href="tel:+4989200000830"
                className="text-white text-[22px] font-bold hover:text-white/90 transition-colors"
              >
                089 200 000 830
              </a>
              <p className="text-white/60 text-[13px] mt-1">Ilka Wysocki · Mo – So 8 – 20 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
