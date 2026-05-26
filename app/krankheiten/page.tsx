import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Krankheiten & Pflege zuhause — Ratgeber für alle Diagnosen | Primundus',
  description: 'Pflege zuhause bei Demenz, Alzheimer, Parkinson, Schlaganfall, Herzinsuffizienz, MS und mehr. Alle Krankheits-Ratgeber von Primundus auf einen Blick.',
  alternates: { canonical: 'https://primundus.de/krankheiten/' },
  openGraph: {
    title: 'Krankheiten & Pflege zuhause | Primundus',
    description: 'Ratgeber für alle Diagnosen: Demenz, Alzheimer, Parkinson, Schlaganfall, MS, Herzinsuffizienz.',
    url: 'https://primundus.de/krankheiten/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Pflege bei Krankheiten', item: 'https://primundus.de/krankheiten/' },
    ],
  },
])

export default function Krankheiten() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[900px] mx-auto px-5 py-14">

          {/* Breadcrumb */}
          <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#5A5A5A]">Pflege bei Krankheiten</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            RATGEBER
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Pflege bei Krankheiten
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-12 max-w-[620px]">
            Jede Erkrankung stellt andere Anforderungen an die häusliche Pflege. Alle krankheitsspezifischen Ratgeber — direkt auf Ihre Situation zugeschnitten.
          </p>

          {/* Demenzerkrankungen */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Demenzerkrankungen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Demenz — Pflege zuhause', href: '/demenz-pflege-zuhause/', desc: 'Was möglich ist, wie man den Alltag gestaltet und ab wann eine 24h-Kraft nötig wird.' },
              { titel: 'Alzheimer — Betreuung zuhause', href: '/alzheimer-betreuung-zuhause/', desc: 'Alzheimer je nach Stadium pflegen — Alltagstipps, Sicherheit und 24h-Betreuung.' },
              { titel: 'Pflegegrad bei Demenz', href: '/pflegegrad-bei-demenz/', desc: 'Welcher Pflegegrad bei welchem Stadium — und wie man die Begutachtung vorbereitet.' },
              { titel: 'Tagesstruktur bei Demenz', href: '/tagesstruktur-demenz/', desc: 'Feste Routinen als wichtigstes Werkzeug — Muster-Tagesplan und konkrete Tipps.' },
              { titel: 'Kommunikation mit Demenzkranken', href: '/kommunikation-mit-demenzkranken/', desc: '5 Grundprinzipien und wie man schwierige Situationen meistert.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Neurologische Erkrankungen */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Neurologische Erkrankungen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Parkinson — Pflege zuhause', href: '/parkinson-pflege-zuhause/', desc: 'Motorische Einschränkungen, Medikamentengabe, Alltagssicherheit bei Parkinson.' },
              { titel: 'Schlaganfall — Pflege zuhause', href: '/schlaganfall-pflege-zuhause/', desc: 'Was nach dem Schlaganfall zu Hause möglich ist und wie die Rehabilitation unterstützt wird.' },
              { titel: 'Multiple Sklerose — Pflege', href: '/multiple-sklerose-pflege/', desc: 'MS-Pflege je nach Verlaufstyp — Fatigue, Wärmeempfindlichkeit, Spastiken meistern.' },
              { titel: 'Pflegegrad nach Schlaganfall', href: '/pflegegrad-nach-schlaganfall/', desc: 'Welcher Pflegegrad nach dem Schlaganfall — Begutachtung und Leistungen.' },
              { titel: 'Pflegegrad bei Parkinson', href: '/pflegegrad-bei-parkinson/', desc: 'Einstufung und Kassenzuschüsse bei Parkinson-Erkrankung.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Herz-Kreislauf & weitere Erkrankungen */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Herz-Kreislauf & weitere Erkrankungen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Herzinsuffizienz — Pflege', href: '/herzinsuffizienz-pflege/', desc: 'Tägliche Gewichtskontrolle, Medikamentengabe, Notfallzeichen erkennen.' },
              { titel: 'COPD — Pflege zuhause', href: '/copd-pflege-zuhause/', desc: 'Atemübungen, Sauerstofftherapie, Notfallplan für COPD-Patienten.' },
              { titel: 'Diabetes — Pflege Senioren', href: '/diabetes-pflege-senioren/', desc: 'Blutzuckerkontrolle, Ernährung, Fußpflege und Hypoglykämie im Pflegealltag.' },
              { titel: 'Osteoporose — Pflege zuhause', href: '/osteoporose-pflege-zuhause/', desc: 'Sturzprävention, Schmerzkontrolle, Mobilität erhalten bei Osteoporose.' },
              { titel: 'Krebspatienten — Pflege zuhause', href: '/krebspatienten-zuhause-pflegen/', desc: 'Unterstützung während Therapie und in der palliativen Phase zu Hause.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Palliativ & Intensiv */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Palliativ- & Intensivpflege</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Palliativpflege zuhause', href: '/palliativpflege-zuhause/', desc: 'Würdevolle Begleitung in der letzten Lebensphase zuhause.' },
              { titel: 'Intensivpflege zuhause', href: '/intensivpflege-zuhause/', desc: 'Wann Intensivpflege zu Hause möglich ist und was dafür nötig ist.' },
              { titel: 'Depression im Alter', href: '/depression-im-alter-pflege/', desc: 'Symptome erkennen, richtig unterstützen und therapeutische Hilfe organisieren.' },
              { titel: 'Pflege nach OP & Reha', href: '/pflege-nach-op/', desc: 'Entlassung aus Krankenhaus oder Reha — wie 24h-Pflege die Versorgung zuhause sichert.' },
              { titel: 'Sehbehinderung & Blindheit', href: '/sehbehinderung-blindheit-pflege/', desc: 'Pflege bei stark eingeschränktem Sehen — Sicherheit, Hilfsmittel und Alltag.' },
              { titel: 'Inkontinenz — Pflege zuhause', href: '/inkontinenz-pflege-zuhause/', desc: 'Würdevoller Umgang mit Inkontinenz im Pflegealltag.' },
              { titel: 'Wunden verbinden zuhause', href: '/wunden-verbinden-zuhause/', desc: 'Wundversorgung im Pflegealltag — was Laien können und wann ein Pflegedienst muss.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Info box */}
          <div className="bg-[#F2ECE4] border border-[#DDD3C2] rounded-2xl px-6 py-5 mb-12">
            <p className="text-[14px] font-bold text-[#6B5A44] mb-2">Ihre Erkrankung nicht gefunden?</p>
            <p className="text-[14px] text-[#6B5A44] leading-relaxed">
              Ilka Wysocki und das Primundus-Team beraten Sie kostenlos zu Ihrer spezifischen Pflegesituation — welche Erfahrungen eine Betreuungskraft mitbringen sollte und wie die Finanzierung aussehen könnte.
            </p>
            <p className="text-[14px] font-bold text-[#6B5A44] mt-2">089 200 000 830 · Mo – So 8 – 20 Uhr</p>
          </div>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
