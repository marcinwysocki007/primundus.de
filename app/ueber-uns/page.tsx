import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über Primundus — 20 Jahre Erfahrung in der 24h-Pflege',
  description: 'Primundus basiert auf 20 Jahren Erfahrung in der 24h-Pflege. Testsieger DIE WELT. 60.000+ erfolgreiche Betreuungen. Persönlich, verlässlich, rechtssicher.',
  alternates: { canonical: 'https://primundus.de/ueber-uns' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Über Primundus — 20 Jahre Erfahrung in der 24h-Pflege',
    description: 'Primundus basiert auf 20 Jahren Erfahrung in der 24h-Pflege. Testsieger DIE WELT. 60.000+ erfolgreiche Betreuungen.',
    url: 'https://primundus.de/ueber-uns',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

// Organization + Gründerin (Karolina Jakubowska) kommen zentral aus lib/schema.ts
// (Root-Layout). Hier nur die zusätzliche Ansprechpartnerin dieser Seite.
const schemaMarkup = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://primundus.de/#marta-kapcio',
      name: 'Marta Kapcio',
      jobTitle: 'Persönliche Ansprechpartnerin & Pflegeberaterin',
      worksFor: { '@id': 'https://primundus.de/#organization' },
      description: 'Persönliche Ansprechpartnerin bei Primundus. Berät Familien zu 24-Stunden-Pflege, Kosten und der Auswahl passender Betreuungskräfte — Mo–So von 8 bis 20 Uhr.',
      telephone: '+4989200000830',
      knowsAbout: ['24-Stunden-Pflege', 'Pflegeberatung', 'Pflegegrade', 'Pflegefinanzierung'],
      image: 'https://primundus.de/images/marta-kapcio.jpg',
    },
  ],
})

export default function Page() {
  return (
    <div className="min-h-screen bg-pm-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      <div className="max-w-article mx-auto px-5 py-10 md:py-16">
          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-pm-taupe transition-colors">Startseite</Link>
            <span>›</span>
            <span className="text-pm-ink">Über uns</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Über Primundus</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Persönlich. Erfahren. Verlässlich.
          </h1>
          <p className="text-[17px] md:text-[19px] text-pm-body leading-[1.7] max-w-2xl mb-12">
            Primundus ist eine der erfahrensten Adressen für häusliche 24-Stunden-Pflege in Deutschland — mit 20 Jahren Erfahrung und mehr als 60.000 erfolgreich begleiteten Betreuungen.
          </p>


        {/* Fakten */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { zahl: '20+', label: 'Jahre Erfahrung' },
            { zahl: '60.000+', label: 'Betreuungen' },
            { zahl: 'Nr. 1', label: 'Testsieger DIE WELT' },
            { zahl: 'Mo–So', label: '8 – 20 Uhr erreichbar' },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-pm-line rounded-2xl p-5 text-center">
              <p className="text-[26px] font-bold text-pm-ink leading-none">{item.zahl}</p>
              <p className="text-[13px] text-pm-mute mt-1.5">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Bild + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#F0EBE3]">
              <img
                src="/images/team-primundus-deutschland.webp"
                alt="Das Team von Primundus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Wer wir sind</p>
            <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink leading-tight mb-5">
              Menschen, die wirklich passen — das ist unser Anspruch
            </h2>
            <p className="text-[16px] text-pm-body leading-[1.7] mb-4">
              Primundus basiert auf 20 Jahren Erfahrung und ist eine der erfahrensten Adressen für häusliche 24-Stunden-Pflege in Deutschland. Bei uns kommen keine anonymen Arbeitskräfte — wir finden Menschen, die zu Ihnen und Ihrer Familie passen.
            </p>
            <p className="text-[16px] text-pm-body leading-[1.7] mb-4">
              Hinter jedem Betreuungsverhältnis steht ein persönlicher Ansprechpartner. Unser Team ist Mo–So von 8 bis 20 Uhr erreichbar — nicht als Hotline, sondern als echte Ansprechpartner, die Ihre Situation kennen.
            </p>
            <p className="text-[16px] text-pm-body leading-[1.7]">
              Wir arbeiten rechtssicher, transparent und ohne versteckte Kosten. Täglich kündbar — weil wir überzeugen wollen, nicht binden.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-14" id="team">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Die Menschen hinter Primundus</p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink leading-tight mb-8">
            Wer für Sie da ist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-pm-line rounded-2xl p-6 flex gap-5">
              <div className="w-16 h-16 rounded-full bg-pm-taupe text-white flex items-center justify-center font-bold text-[18px] flex-shrink-0">KJ</div>
              <div>
                <h3 className="text-[18px] font-bold text-pm-ink leading-tight">Karolina Jakubowska</h3>
                <p className="text-[13px] font-semibold text-pm-taupe mb-2">Gründerin &amp; Geschäftsführerin</p>
                <p className="text-[14px] text-pm-body leading-[1.6]">
                  Karolina führt Primundus mit dem Anspruch, häusliche Betreuung ehrlich, rechtssicher und persönlich zu machen. Die Firmengruppe hinter Primundus bringt Erfahrung in der häuslichen 24-Stunden-Pflege seit 2006 mit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testsieger */}
        <div className="bg-white border-2 border-pm-gold rounded-2xl p-7 md:p-10 mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src="/images/primundus_testsieger-2021.webp"
              alt="Testsieger DIE WELT 2021"
              className="h-[100px] w-[100px] object-contain flex-shrink-0"
            />
            <div>
              <p className="text-[12px] font-bold text-pm-gold uppercase tracking-wider mb-1">Testsieger · DIE WELT</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-pm-ink leading-tight mb-2">
                Nr. 1 der Pflegekräfte-Vermittler
              </h2>
              <p className="text-[15px] text-pm-body mb-3">Ausgezeichnet in Deutschlands großer Service-Studie von DIE WELT und ServiceValue</p>
              <p className="text-[15px] text-pm-body leading-relaxed border-t border-[#F0EBE3] pt-3">
                Als bester Vermittler von 24-Stunden-Pflegekräften ausgezeichnet — die beste Kombination aus Preis, Qualität und Kundenservice.{' '}
                <a href="/testsieger-24-stunden-pflege" className="text-pm-taupe underline underline-offset-2 font-semibold">Zur Auszeichnung mit Original-Beleg</a>
              </p>
            </div>
          </div>
        </div>

        {/* Was uns unterscheidet */}
        <div className="mb-14">
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Was uns unterscheidet</p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-pm-ink leading-tight mb-8">
            Unser Versprechen an Sie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Persönlicher Ansprechpartner',
                text: 'Sie erhalten einen festen Ansprechpartner, der Ihre Situation kennt — kein Callcenter, keine wechselnden Zuständigkeiten.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Täglich kündbar',
                text: 'Keine Mindestlaufzeit, keine Kündigungsfristen. Taggenaue Abrechnung — weil wir durch Qualität überzeugen, nicht durch Vertragsbindung.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Schneller Start',
                text: 'In der Regel können wir innerhalb von 4–7 Tagen eine passende Betreuungskraft organisieren — auch in dringenden Situationen.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: 'Rechtssicher & transparent',
                text: 'Alle Betreuungsverhältnisse werden rechtssicher aufgesetzt. Keine Scheinselbstständigkeit, keine versteckten Kosten.',
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              },
              {
                title: 'Geprüfte Pflegekräfte',
                text: 'Jede Betreuungskraft wird persönlich überprüft. Wir kennen unsere Kräfte und stehen für die Qualität ihrer Arbeit ein.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                title: 'Deutschlandweit',
                text: 'Unsere Betreuungskräfte sind in ganz Deutschland im Einsatz — von München bis Hamburg, von der Großstadt bis in ländliche Regionen.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-pm-line rounded-2xl p-6 hover:border-pm-taupe transition-colors">
                <div className="w-10 h-10 rounded-xl bg-pm-taupe/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-pm-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-pm-ink mb-2">{item.title}</h3>
                <p className="text-[14px] text-pm-body leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-pm-taupe rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-h2 md:text-h2-lg font-bold text-white mb-3">
            Lernen Sie uns kennen
          </h2>
          <p className="text-[16px] text-white/80 mb-7 max-w-xl mx-auto">
            Sprechen Sie mit uns — kostenlos, unverbindlich und ohne Druck. Wir finden gemeinsam die beste Lösung für Ihre Situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://kostenrechner.primundus.de/?start=1&src=apex-ueber-uns"
              className="inline-flex items-center justify-center px-7 py-4 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[16px] rounded-xl transition-all duration-200 shadow-md"
            >
              Kosten & Pflegekräfte ansehen
            </a>
            <a
              href="tel:+4989200000830"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-[16px] rounded-xl transition-all duration-200"
            >
              <img width={44} height={44} src="/images/marta-kapcio.jpg" alt="Marta Kapcio" className="w-7 h-7 rounded-full object-cover object-top" />
              089 200 000 830
            </a>
          </div>
          <p className="text-[13px] text-white/50 mt-4">Mo – So · 8 – 20 Uhr</p>
        </div>

      </div>
    </div>
  )
}
