import Image from 'next/image'

export function ArticleCTA() {
  return (
    <aside className="my-10 rounded-2xl overflow-hidden border border-[#E5E3DF] shadow-md bg-white">

      {/* 1 — Hook */}
      <div className="bg-[#8B7355] px-5 py-3.5">
        <p className="text-white/70 text-[11px] uppercase tracking-widest font-semibold mb-1">
          Tipp
        </p>
        <p className="text-white font-bold text-[16px] leading-snug">
          Wer möchte im Alter nicht lieber zu Hause betreut werden?
        </p>
      </div>

      {/* 2 — Erklärung + Häkchen */}
      <div className="bg-[#F8F7F5] px-5 py-4 space-y-3 border-b border-[#E5E3DF]">
        <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
          Die 24-Stunden-Pflege macht es möglich — eine Betreuungskraft zieht ein, rund um die Uhr anwesend, im vertrauten Zuhause.
        </p>
        <ul className="space-y-1.5">
          {[
            'Zuhause bleiben statt ins Heim',
            'Individuelle 1:1-Betreuung, 24h anwesend',
            'Täglich kündbar – keine Mindestlaufzeit',
          ].map(item => (
            <li key={item} className="flex items-center gap-2 text-[13px] text-[#3D3D3D]">
              <svg className="w-3.5 h-3.5 text-[#5C9F6E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 space-y-4">

        {/* 3+4+5 — Ilka / USPs / Testsieger (reordered mobile vs desktop) */}
        <p className="text-[11px] font-semibold text-[#8B8B8B] uppercase tracking-wider text-center sm:text-left">
          Kostenlose Beratung
        </p>

        <div className="flex flex-col sm:grid sm:grid-cols-[3fr_2fr] sm:gap-x-3 gap-y-4">

          {/* Ilka — with inline phone + WA buttons */}
          <div className="order-1 flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#E5E3DF]">
                <Image
                  src="/images/ilka-wysocki_pm-mallorca.webp"
                  alt="Ilka Wysocki – Pflegeberaterin Primundus"
                  width={44}
                  height={44}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#5C9F6E] rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#3D3D3D] text-[13px]">Ilka Wysocki</p>
              <p className="text-[11px] text-[#8B8B8B] leading-snug">Pflegeberaterin</p>
              <p className="text-[11px] text-[#8B8B8B] leading-snug">Mo – So, 8 – 20 Uhr</p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              <a
                href="tel:+4989200000830"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#F8F7F5] hover:bg-[#E5E3DF] border border-[#E5E3DF] transition-colors"
                aria-label="Anrufen"
              >
                <svg className="w-4 h-4 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="https://wa.me/4989200000830?text=Hallo%20Frau%20Wysocki%2C%20ich%20habe%20eine%20R%C3%BCckfrage%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#20C05A] transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Testsieger — after USPs on mobile (order-3), right col on desktop (order-2) */}
          <div className="order-3 sm:order-2 flex items-center gap-3 bg-[#FBF8F3] border border-[#E8DECE] rounded-xl px-4 py-3 sm:self-center">
            <Image
              src="/images/primundus_testsieger-2021.webp"
              alt="Testsieger DIE WELT"
              width={44}
              height={44}
              className="object-contain flex-shrink-0"
            />
            <div>
              <p className="text-[12px] font-bold text-[#3D3D3D]">
                Testsieger <span className="text-[#8B7355]">DIE WELT</span>
              </p>
              <p className="text-[10px] italic text-[#6B5A45] leading-relaxed mt-0.5">
                Ausgezeichnet für Preis, Qualität & Kundenservice
              </p>
            </div>
          </div>

          {/* USPs — middle on mobile (order-2), full-width second row on desktop (order-3) */}
          <div className="order-2 sm:order-3 sm:col-span-2 rounded-xl border border-[#E5E3DF] overflow-hidden">
            <ul className="divide-y divide-[#F0EDE8] sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x">
              {[
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Über 20 Jahre Erfahrung' },
                { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', text: '60.000+ betreute Einsätze' },
                { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', text: 'Persönlicher Ansprechpartner, 7 Tage/Woche' },
              ].map(({ icon, text }) => (
                <li key={text} className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 text-[12px] text-[#3D3D3D] text-center sm:py-3.5">
                  <svg className="w-5 h-5 text-[#8B7355] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                  </svg>
                  <span className="leading-tight font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 6 — Bekannt aus */}
        <div className="flex items-center justify-center gap-4 flex-wrap py-0.5">
          {['die-welt', 'frankfurter-allgemeine', 'ard', 'ndr', 'sat1', 'bild-der-frau'].map(logo => (
            <Image
              key={logo}
              src={`/images/media/${logo}.webp`}
              alt={logo}
              width={40}
              height={16}
              className="h-[13px] w-auto object-contain opacity-40 hover:opacity-70 transition-opacity"
            />
          ))}
        </div>

        {/* 7 — Aktion */}
        <a
          href="https://kostenrechner.primundus.de"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E76F63] hover:bg-[#D65E52] text-white font-bold text-[15px] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
        >
          Kosten & Pflegekräfte ansehen
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

      </div>
    </aside>
  )
}
