import type { Metadata } from 'next'
import { HowItWorks } from '@/components/home/HowItWorks'
import { FAQSection } from '@/components/home/FAQSection'
import { ComparisonSection } from '@/components/home/ComparisonSection'
import { FinalCTA } from '@/components/home/FinalCTA'
import { TestimonialCard } from '@/components/home/TestimonialCard'

export const metadata: Metadata = {
  title: '24-Stunden-Pflege — Preis & Pflegekräfte in 2 Minuten sehen',
  description: 'Preis und passende Betreuungskräfte sehen, bevor Sie sich entscheiden — mit Erfahrung und Sprachkenntnissen. Kein Vertrag vor Ihrer Wahl. 6× Testsieger.',
  alternates: {
    canonical: 'https://primundus.de/',
  },
  openGraph: {
    title: '24-Stunden-Pflege — Preis & Pflegekräfte in 2 Minuten sehen',
    description: 'Preis und passende Betreuungskräfte sehen, bevor Sie sich entscheiden — mit Erfahrung und Sprachkenntnissen. Kein Vertrag vor Ihrer Wahl. 6× Testsieger.',
    url: 'https://primundus.de/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

// Organization/WebSite kommen zentral aus lib/schema.ts (Root-Layout) —
// hier nur noch das seitenspezifische FAQ-Schema.
const schemaMarkup = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet eine 24-Stunden-Pflege ungefähr?",
        "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten variieren je nach Pflegebedarf und Qualifikation der Betreuungskraft. Mit unserem Online-Rechner erhalten Sie in 2 Minuten Ihren individuellen Preis – inklusive möglicher Zuschüsse durch die Pflegekasse, die den Eigenanteil erheblich senken können." }
      },
      {
        "@type": "Question",
        "name": "Wie schnell kann eine Betreuungskraft starten?",
        "acceptedAnswer": { "@type": "Answer", "text": "In der Regel kann innerhalb von 4–7 Tagen eine passende Betreuungskraft bei Ihnen starten. Bei dringendem Bedarf auch schneller – sprechen Sie uns einfach an." }
      },
      {
        "@type": "Question",
        "name": "Was passiert, wenn die Betreuungskraft krank wird?",
        "acceptedAnswer": { "@type": "Answer", "text": "Wir stellen schnellstmöglich eine Ersatzkraft. Weil unsere Betreuungskräfte bei uns angestellt sind, können wir kurzfristig umplanen – die Anreise der Ersatzkraft übernehmen wir." }
      },
      {
        "@type": "Question",
        "name": "Kann ich die Betreuung jederzeit kündigen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ja, die Betreuung ist täglich kündbar. Es gibt keine Mindestlaufzeit und keine versteckten Gebühren. Sie gehen kein Risiko ein." }
      },
      {
        "@type": "Question",
        "name": "Welche Zuschüsse kann ich von der Pflegekasse erhalten?",
        "acceptedAnswer": { "@type": "Answer", "text": "Je nach Pflegegrad können Sie Verhinderungspflege, Pflegegeld und weitere Leistungen nutzen. In unserer Kalkulation zeigen wir Ihnen genau, welche Zuschüsse Ihnen zustehen und wie sich der Eigenanteil reduziert." }
      },
      {
        "@type": "Question",
        "name": "Sind die Betreuungskräfte qualifiziert?",
        "acceptedAnswer": { "@type": "Answer", "text": "Alle Betreuungskräfte werden von uns persönlich geprüft. Sie verfügen über Erfahrung in der häuslichen Pflege und werden anhand Ihres individuellen Bedarfs ausgewählt." }
      }
    ]
  }
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      <div className="min-h-screen bg-pm-paper">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-pm-paper">

          {/* Mobile */}
          <div className="lg:hidden">
            <div className="w-full overflow-hidden bg-pm-paper">
              <img
                src="/images/PM-Betreuung_frontal_desktop.webp"
                alt="Professionelle 24-Stunden-Betreuung durch Primundus"
                className="w-full object-contain"
                fetchPriority="high"
                loading="eager"
              />
            </div>
            <div className="px-5 pt-6 pb-10 text-center">
              <h1 className="text-h1 font-bold text-pm-ink mb-4 tracking-tight">
                24-Stunden-Pflege im eigenen Zuhause
              </h1>
              <p className="text-[17px] leading-[1.6] text-pm-body mb-8 max-w-md mx-auto">
                Primundus betreut mit eigenen, geprüften Betreuungskräften zuhause — rechtssicher, täglich kündbar, einsatzbereit in 4–7 Tagen.
              </p>
              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                <a
                  href="https://kostenrechner.primundus.de/?start=1&src=apex-startseite"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[16px] rounded-xl transition-all duration-200 shadow-md"
                >
                  Kosten & Pflegekräfte ansehen
                </a>
                <a
                  href="tel:+4989200000830"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-white border border-pm-line hover:border-pm-taupe text-pm-ink font-bold text-[16px] rounded-xl transition-all duration-200"
                >
                  <img width={44} height={44} src="/images/marta-kapcio.jpg" alt="Marta Kapcio" className="w-7 h-7 rounded-full object-cover" />
                  089 200 000 830
                </a>
              </div>
              {/* USP Box mit Medienlogos */}
              <div className="mt-6 max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-pm-line">
                  <div className="mb-6 pb-6 border-b border-pm-line">
                    <p className="text-[11px] font-semibold text-pm-mute uppercase tracking-[0.08em] text-center mb-5">Bekannt aus</p>
                    <div className="relative overflow-hidden">
                      <div className="flex animate-scroll">
                        <div className="flex items-center gap-8 shrink-0">
                          <img width={40} height={16} src="/images/media/ard.webp" alt="ARD" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/ndr.webp" alt="NDR" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/sat1.webp" alt="SAT.1" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/die-welt.webp" alt="Die Welt" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/bild-der-frau.webp" alt="Bild der Frau" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/frankfurter-allgemeine.webp" alt="Frankfurter Allgemeine" className="h-[18px] object-contain opacity-70" />
                        </div>
                        <div className="flex items-center gap-8 shrink-0 ml-8">
                          <img width={40} height={16} src="/images/media/ard.webp" alt="ARD" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/ndr.webp" alt="NDR" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/sat1.webp" alt="SAT.1" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/die-welt.webp" alt="Die Welt" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/bild-der-frau.webp" alt="Bild der Frau" className="h-[18px] object-contain opacity-70" />
                          <img width={40} height={16} src="/images/media/frankfurter-allgemeine.webp" alt="Frankfurter Allgemeine" className="h-[18px] object-contain opacity-70" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-left">
                    {[
                      { label: 'Preis & Betreuungskräfte online in 2 Minuten', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                      { label: 'Kein Vertrag, bevor Sie gewählt haben', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                      { label: 'Keine Vermittlungsgebühr', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
                      { label: 'Täglich kündbar & taggenaue Abrechnung', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                      { label: 'Fester Ansprechpartner, 7 Tage die Woche', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                      { label: '20 Jahre Erfahrung & 6× Testsieger', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                    ].map((usp, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pm-taupe/10 flex items-center justify-center">
                          <svg className="w-[18px] h-[18px] text-pm-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={usp.icon} />
                          </svg>
                        </div>
                        <p className="text-[15px] text-pm-ink font-semibold">{usp.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-[55fr_45fr] items-center max-w-[1280px] mx-auto px-8 xl:px-12 py-16 xl:py-20 gap-12 xl:gap-16">

            {/* Links: H1 + USP-Box */}
            <div>
              <h1 className="text-h1 lg:text-h1-lg font-bold text-pm-ink mb-4 tracking-tight">
                24-Stunden-Pflege im eigenen Zuhause
              </h1>
              <p className="text-[18px] leading-[1.6] text-pm-body mb-8">
                Betreut von unseren eigenen, geprüften Betreuungskräften — bezahlbare Alternative zum Pflegeheim, einsatzbereit in 4–7 Tagen.
              </p>

              {/* USP-Box mit Medienlogos */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-pm-line">
                {/* Medienlogos */}
                <div className="mb-5 pb-5 border-b border-pm-line">
                  <p className="text-[10px] font-semibold text-pm-mute uppercase tracking-[0.08em] text-center mb-4">Bekannt aus</p>
                  <div className="relative overflow-hidden">
                    <div className="flex animate-scroll">
                      <div className="flex items-center gap-7 shrink-0">
                        <img width={40} height={16} src="/images/media/ard.webp" alt="ARD" className="h-[18px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        <img width={40} height={16} src="/images/media/ndr.webp" alt="NDR" className="h-[18px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        <img width={40} height={16} src="/images/media/sat1.webp" alt="SAT.1" className="h-[18px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        <img width={40} height={16} src="/images/media/die-welt.webp" alt="Die Welt" className="h-[18px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        <img width={40} height={16} src="/images/media/bild-der-frau.webp" alt="Bild der Frau" className="h-[18px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        <img width={40} height={16} src="/images/media/frankfurter-allgemeine.webp" alt="Frankfurter Allgemeine" className="h-[18px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="flex items-center gap-7 shrink-0 ml-7">
                        <img width={40} height={16} src="/images/media/ard.webp" alt="ARD" className="h-[18px] object-contain opacity-60" />
                        <img width={40} height={16} src="/images/media/ndr.webp" alt="NDR" className="h-[18px] object-contain opacity-60" />
                        <img width={40} height={16} src="/images/media/sat1.webp" alt="SAT.1" className="h-[18px] object-contain opacity-60" />
                        <img width={40} height={16} src="/images/media/die-welt.webp" alt="Die Welt" className="h-[18px] object-contain opacity-60" />
                        <img width={40} height={16} src="/images/media/bild-der-frau.webp" alt="Bild der Frau" className="h-[18px] object-contain opacity-60" />
                        <img width={40} height={16} src="/images/media/frankfurter-allgemeine.webp" alt="Frankfurter Allgemeine" className="h-[18px] object-contain opacity-60" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vorteile */}
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: 'Preis & Betreuungskräfte online in 2 Minuten', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                    { label: 'Kein Vertrag, bevor Sie gewählt haben', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                    { label: 'Keine Vermittlungsgebühr', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
                    { label: 'Täglich kündbar & taggenaue Abrechnung', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { label: 'Fester Ansprechpartner, 7 Tage die Woche', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                    { label: '20 Jahre Erfahrung & 6× Testsieger', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                  ].map((usp, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pm-taupe/10 flex items-center justify-center">
                        <svg className="w-[16px] h-[16px] text-pm-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={usp.icon} />
                        </svg>
                      </div>
                      <p className="text-[15px] text-pm-ink font-semibold">{usp.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rechts: Bild + CTAs + Testsieger */}
            <div className="w-full">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pm-line">
                {/* Bild */}
                <div className="relative w-full rounded-xl overflow-hidden mb-5 bg-pm-paper">
                  <img
                    src="/images/PM-Betreuung_frontal_desktop.webp"
                    alt="Professionelle 24-Stunden-Betreuung durch Primundus"
                    className="w-full object-contain"
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
                {/* CTAs */}
                <h2 className="text-[20px] font-bold text-pm-ink mb-1 text-center">Jetzt Kosten & Pflegekräfte ansehen</h2>
                <p className="text-[13px] text-pm-body text-center mb-5">Kostenlos & unverbindlich — in 2 Minuten</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://kostenrechner.primundus.de/?start=1&src=apex-startseite"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[16px] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Kosten & Pflegekräfte ansehen
                  </a>
                  <a
                    href="tel:+4989200000830"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-pm-paper hover:bg-[#F0EBE3] border border-pm-line hover:border-pm-taupe text-pm-ink font-bold text-[15px] rounded-xl transition-all duration-200"
                  >
                    <img width={44} height={44} src="/images/marta-kapcio.jpg" alt="Marta Kapcio" className="w-7 h-7 rounded-full object-cover" />
                    089 200 000 830
                  </a>
                </div>
                <p className="text-[12px] text-pm-mute text-center mt-3">Marta Kapcio · Mo – So 8 – 20 Uhr</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. WORAUF SIE SICH VERLASSEN KÖNNEN ─────────────────────────── */}
        <section className="py-14 md:py-16 lg:py-20 px-5 bg-white">
          <div className="max-w-wide mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Warum Primundus</p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25] font-bold text-pm-ink mb-3">
              Worauf Sie sich bei uns verlassen können
            </h2>
            <p className="text-[16px] md:text-[17px] text-pm-body leading-[1.6] mb-10 max-w-2xl">
              Eine 24-Stunden-Betreuung ist eine große Entscheidung — und sie kommt meist unter Zeitdruck. Bei uns wissen Sie an jeder Stelle, woran Sie sind: beim Preis, bei der Betreuungskraft und beim Vertrag.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: 'Ihr Preis steht in 2 Minuten',
                  text: 'Kein Rückruf, kein Warten auf ein Angebot. Sie beantworten ein paar Fragen zur Pflegesituation und sehen sofort, was die Betreuung kostet — samt der Zuschüsse, die für Ihre Situation infrage kommen.',
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                },
                {
                  title: 'Sie sehen die Betreuungskräfte vorher',
                  text: 'Keine Betreuungskraft, die unangekündigt vor der Tür steht. In Ihrem Kundenportal sehen Sie, wer zu Ihnen kommen könnte — mit Angaben zu Erfahrung, Deutschkenntnissen und Führerschein.',
                  icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                },
                {
                  title: 'Sie unterschreiben erst, wenn Sie sicher sind',
                  text: 'Unterschrieben wird erst, wenn eine bestimmte Betreuungskraft feststeht und Sie einverstanden sind. Bis dahin gehen Sie keinerlei Verpflichtung ein.',
                  icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                },
                {
                  title: 'Der Monatspreis ist der Preis',
                  text: 'Keine Anzahlung, keine Aufnahmegebühr, keine Bearbeitungspauschale. Der Monatspreis, den Sie sehen, ist der Preis — ohne Aufschlag für die Vermittlung.',
                  icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
                },
                {
                  title: 'Sie zahlen nur die Tage, die Sie brauchen',
                  text: 'Es gibt keine Mindestlaufzeit. Endet die Betreuung früher als gedacht, zahlen Sie nur die Tage, an denen tatsächlich jemand da war.',
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                },
                {
                  title: 'Bei uns angestellt — nicht vermittelt',
                  text: 'Unsere Betreuungskräfte sind bei uns fest angestellt und werden mit A1-Bescheinigung nach Deutschland entsandt. Für Sie heißt das klare Verhältnisse — getragen von 20 Jahren Erfahrung und der Auszeichnung als 6× Testsieger.',
                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
                },
              ].map((item, i) => (
                <div key={i} className="bg-pm-paper border border-pm-line rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-pm-taupe/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-pm-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-bold text-pm-ink mb-2 leading-snug">{item.title}</h3>
                  <p className="text-[14px] text-pm-body leading-[1.6]">{item.text}</p>
                </div>
              ))}
            </div>

            {/* 7. USP — bewusst als breiter Abschluss: der Mensch hinter dem Angebot */}
            <div className="mt-5 bg-pm-paper border border-pm-line rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-7">
                <img
                  width={72}
                  height={72}
                  src="/images/marta-kapcio.jpg"
                  alt="Marta Kapcio, Primundus"
                  className="w-[72px] h-[72px] rounded-full object-cover object-top flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-[17px] md:text-[19px] font-bold text-pm-ink mb-2 leading-snug">
                    Ein fester Ansprechpartner — 7 Tage die Woche
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-pm-body leading-[1.6]">
                    Marta Kapcio und ihr Team sind Mo–So von 8 bis 20 Uhr für Sie da — auch am Wochenende und auch dann, wenn kurzfristig etwas dazwischenkommt.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://kostenrechner.primundus.de/?start=1&src=apex-usp"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[15px] rounded-xl transition-all duration-200 shadow-md"
                >
                  Preis & Betreuungskräfte ansehen
                </a>
                <a
                  href="tel:+4989200000830"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-pm-line hover:border-pm-taupe text-pm-ink font-semibold text-[15px] rounded-xl transition-all duration-200"
                >
                  Lieber sprechen? 089 200 000 830
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. FÜR WEN IST PRIMUNDUS? ───────────────────────────────────── */}
        <section className="py-14 md:py-16 lg:py-20 px-5 bg-pm-paper">
          <div className="max-w-wide mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Für wen ist Primundus?</p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25] font-bold text-pm-ink mb-3">
              Wenn das Leben plötzlich Pflege fordert
            </h2>
            <p className="text-[16px] md:text-[17px] text-pm-body leading-[1.6] mb-10 max-w-2xl">
              Die meisten Familien stehen unvorbereitet vor der Frage: Was tun wir jetzt? Primundus begleitet Sie — von der ersten Orientierung bis zur laufenden Betreuung.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Nach Schlaganfall oder Krankenhausaufenthalt',
                  text: 'Plötzlich ist eine intensive Betreuung nötig. Wir können in 4–7 Tagen eine passende Kraft organisieren — schnell, zuverlässig, rechtssicher.',
                  link: '/pflegegrad-nach-schlaganfall',
                  linkLabel: 'Schlaganfall & Pflege →',
                  icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                },
                {
                  title: 'Bei Demenz oder Alzheimer',
                  text: 'Menschen mit Demenz brauchen vertraute Umgebung und konstante Begleitung. Zuhause ist der beste Ort — mit der richtigen Betreuungskraft.',
                  link: '/demenz-pflege-zuhause',
                  linkLabel: 'Demenz & Pflege →',
                  icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                },
                {
                  title: 'Als Entlastung für pflegende Angehörige',
                  text: 'Wer einen Angehörigen pflegt, gibt oft alles. Eine 24h-Kraft übernimmt die körperliche Pflege — damit Sie wieder Kraft für das Wesentliche haben.',
                  link: '/pflegende-angehoerige-unterstuetzen',
                  linkLabel: 'Angehörige entlasten →',
                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-pm-line rounded-2xl p-6 hover:border-pm-taupe transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-pm-taupe/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-pm-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-bold text-pm-ink mb-2 leading-snug">{item.title}</h3>
                  <p className="text-[14px] text-pm-body leading-[1.6] mb-4">{item.text}</p>
                  <a href={item.link} className="text-[13px] font-semibold text-pm-taupe hover:text-pm-taupe-ink transition-colors">{item.linkLabel}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. MARTA / MARKE ─────────────────────────────────────────────── */}
        <section className="py-14 md:py-16 lg:py-20 px-5 bg-white">
          <div className="max-w-wide mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Wer wir sind</p>
                <h2 className="text-[26px] md:text-[32px] lg:text-[34px] leading-[1.25] font-bold text-pm-ink mb-5">
                  Persönlich. Erfahren. Verlässlich.
                </h2>
                <p className="text-[16px] md:text-[17px] leading-[1.7] text-pm-body mb-5">
                  Primundus basiert auf 20 Jahren Erfahrung und ist eine der erfahrensten Adressen für häusliche 24-Stunden-Pflege in Deutschland. Bei uns kommen keine anonymen Arbeitskräfte — wir finden Menschen, die wirklich passen.
                </p>
                <p className="text-[16px] md:text-[17px] leading-[1.7] text-pm-body mb-8">
                  Hinter jedem Betreuungsverhältnis steht ein persönlicher Ansprechpartner. Marta Kapcio und ihr Team sind Mo–So von 8 bis 20 Uhr erreichbar — nicht als Hotline, sondern als echter Ansprechpartner, der Ihre Situation kennt.
                </p>
                {/* Fakten */}
                <div className="flex items-center mb-6 bg-pm-paper rounded-xl border border-pm-line overflow-hidden">
                  <div className="flex-1 text-center py-4">
                    <p className="text-[26px] font-bold text-pm-ink leading-none">20+</p>
                    <p className="text-[13px] text-pm-mute mt-1.5">Jahre Erfahrung</p>
                  </div>
                  <div className="w-px self-stretch bg-pm-line" />
                  <div className="flex-1 text-center py-4">
                    <p className="text-[26px] font-bold text-pm-ink leading-none">60.000+</p>
                    <p className="text-[13px] text-pm-mute mt-1.5">Betreuungen</p>
                  </div>
                </div>
                {/* Testsieger — volle Breite */}
                <div className="bg-white border-2 border-pm-gold rounded-xl px-5 py-4 mb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src="/images/primundus_testsieger-2021.webp"
                      alt="Testsieger DIE WELT"
                      className="h-[80px] w-[80px] object-contain flex-shrink-0"
                    />
                    <div>
                      <p className="text-[11px] font-bold text-pm-gold uppercase tracking-wider mb-0.5">6× Testsieger · DIE WELT</p>
                      <p className="text-[17px] font-bold text-pm-ink leading-tight">Nr. 1 der Pflegekräfte-Vermittler</p>
                      <p className="text-[12px] text-pm-mute mt-0.5">Ausgezeichnet in Deutschlands großer Service-Studie von DIE WELT und ServiceValue</p>
                    </div>
                  </div>
                  <div className="border-t border-[#F0EBE3] pt-3">
                    <p className="text-[14px] text-pm-body leading-relaxed">
                      Als bester Vermittler von 24-Stunden-Pflegekräften ausgezeichnet — die beste Kombination aus Preis, Qualität und Kundenservice.{' '}
                      <a href="/testsieger-24-stunden-pflege" className="text-pm-taupe underline underline-offset-2 font-semibold">Zur Auszeichnung mit Original-Beleg</a>
                    </p>
                  </div>
                </div>
                <a
                  href="https://kostenrechner.primundus.de/?start=1&src=apex-startseite"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[15px] rounded-xl transition-all duration-200 shadow-md"
                >
                  Kosten & Pflegekräfte ansehen
                </a>
              </div>
              {/* Foto */}
              <div className="relative order-first lg:order-last">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#F0EBE3]">
                  <img
                    src="/images/team-primundus-deutschland.webp"
                    alt="Das Team von Primundus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-pm-line">
                  <p className="text-[13px] font-bold text-pm-ink">Marta Kapcio</p>
                  <p className="text-[12px] text-pm-mute">Mo – So · 8 – 20 Uhr · 089 200 000 830</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. SO FUNKTIONIERT ES ───────────────────────────────────────── */}
        <HowItWorks />

        {/* ── 6. WAS KOSTET 24H-PFLEGE? (SEO) ────────────────────────────── */}
        <section className="py-14 md:py-16 lg:py-20 px-5 bg-white">
          <div className="max-w-[860px] mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Kosten & Finanzierung</p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25] font-bold text-pm-ink mb-5">
              Was kostet 24-Stunden-Pflege?
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.7] text-pm-body mb-6">
              Die Kosten für eine 24-Stunden-Betreuung liegen je nach Pflegebedarf und Qualifikation der Betreuungskraft zwischen <strong className="text-pm-ink">2.200 € und 3.500 € pro Monat</strong>. Was viele nicht wissen: Die Pflegekasse übernimmt je nach Pflegegrad einen erheblichen Teil. Nach Abzug von Pflegegeld, Verhinderungspflege und Entlastungsbetrag liegt der tatsächliche <strong className="text-pm-ink">Eigenanteil meist bei 1.500–2.500 € monatlich</strong> — und damit häufig deutlich unter den Kosten eines Pflegeheims.
            </p>

            {/* Tabelle Pflegegeld */}
            <div className="bg-pm-paper rounded-2xl overflow-hidden border border-pm-line mb-8">
              <div className="px-5 py-4 border-b border-pm-line">
                <p className="text-[13px] font-bold text-pm-ink uppercase tracking-wide">Pflegegeld 2025 — Zuschuss nach Pflegegrad</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="text-[12px] text-pm-mute uppercase tracking-wider border-b border-pm-line">
                      <th className="text-left px-5 py-3 font-semibold">Pflegegrad</th>
                      <th className="text-right px-5 py-3 font-semibold">Pflegegeld/Monat</th>
                      <th className="text-right px-5 py-3 font-semibold">Entlastungsbetrag</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pm-line">
                    {[
                      { grad: 'Pflegegrad 1', geld: '—', entlastung: '131 €' },
                      { grad: 'Pflegegrad 2', geld: '347 €', entlastung: '131 €' },
                      { grad: 'Pflegegrad 3', geld: '599 €', entlastung: '131 €' },
                      { grad: 'Pflegegrad 4', geld: '800 €', entlastung: '131 €' },
                      { grad: 'Pflegegrad 5', geld: '990 €', entlastung: '131 €' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white transition-colors">
                        <td className="px-5 py-3 font-medium text-pm-ink">{row.grad}</td>
                        <td className="px-5 py-3 text-right text-[#5C9F6E] font-semibold">{row.geld}</td>
                        <td className="px-5 py-3 text-right text-[#5C9F6E] font-semibold">{row.entlastung}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://kostenrechner.primundus.de/?start=1&src=apex-startseite"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[15px] rounded-xl transition-all duration-200 shadow-md"
              >
                Eigenanteil jetzt berechnen
              </a>
              <a
                href="/kosten"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-pm-line hover:border-pm-taupe text-pm-ink font-semibold text-[15px] rounded-xl transition-all duration-200"
              >
                Alle Finanzierungsmöglichkeiten →
              </a>
            </div>
          </div>
        </section>

        {/* ── 7. VERGLEICH ────────────────────────────────────────────────── */}
        <ComparisonSection />

        {/* ── 8. KUNDENSTIMMEN ────────────────────────────────────────────── */}
        <section className="py-14 md:py-16 px-5 bg-white">
          <div className="max-w-[860px] mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Kundenstimmen</p>
            <h2 className="text-[26px] md:text-[32px] leading-[1.25] font-bold text-pm-ink mb-8">
              Das sagen unsere Familien
            </h2>
            <TestimonialCard />
          </div>
        </section>

        {/* ── 9. RATGEBER-HUB ─────────────────────────────────────────────── */}
        <section className="py-14 md:py-16 lg:py-20 px-5 bg-pm-paper">
          <div className="max-w-wide mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Ratgeber & Wissen</p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25] font-bold text-pm-ink mb-3">
              Alles, was Sie wissen müssen
            </h2>
            <p className="text-[16px] text-pm-body mb-10 max-w-2xl">
              Von Pflegegraden bis Finanzierung — unsere Ratgeber erklären jeden Schritt verständlich und kostenlos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Pflegegrade', desc: 'Pflegegrad beantragen, erhöhen und verstehen — alles erklärt.', href: '/pflegegrade', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
                { title: 'Finanzierung', desc: 'Pflegegeld, Entlastungsbetrag, steuerliche Abzüge und mehr.', href: '/finanzierung', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Organisation', desc: 'Pflegekraft finden, Vertrag aufsetzen, Wechsel organisieren.', href: '/organisation', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
                { title: 'Krankheitsbilder', desc: 'Demenz, Parkinson, Schlaganfall — Pflege je nach Diagnose.', href: '/krankheiten', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                { title: 'Rechtliches', desc: 'Vollmacht, Betreuungsverfügung, Scheinselbstständigkeit vermeiden.', href: '/rechtliches', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
                { title: 'Alle Ratgeber', desc: 'Die komplette Übersicht aller Themen rund um 24h-Pflege.', href: '/ratgeber', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group bg-white border border-pm-line rounded-2xl p-5 hover:border-pm-taupe hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pm-taupe/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pm-taupe/20 transition-colors">
                      <svg className="w-5 h-5 text-pm-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-pm-ink mb-1 group-hover:text-pm-taupe transition-colors">{item.title}</p>
                      <p className="text-[13px] text-pm-body leading-[1.5]">{item.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ─────────────────────────────────────────────────────── */}
        <FAQSection />

        {/* ── 11. FINAL CTA ───────────────────────────────────────────────── */}
        <FinalCTA />

      </div>
    </>
  )
}
