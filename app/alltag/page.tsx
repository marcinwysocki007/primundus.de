import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Alltag & Angehörige — Ratgeber für pflegende Familien | Primundus',
  description: 'Ratgeber für pflegende Angehörige: Burnout vermeiden, Pflege und Beruf vereinbaren, Vorsorgevollmacht, Patientenverfügung, Hausnotruf, barrierefreies Wohnen.',
  alternates: { canonical: 'https://primundus.de/alltag/' },
  openGraph: {
    title: 'Alltag & Angehörige | Primundus',
    description: 'Alle Ratgeber für pflegende Familien — von Burnout-Prävention bis Patientenverfügung.',
    url: 'https://primundus.de/alltag/',
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
      { '@type': 'ListItem', position: 3, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
    ],
  },
])

export default function Alltag() {
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
            <span className="text-[#5A5A5A]">Alltag & Angehörige</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            RATGEBER
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Alltag & Angehörige
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-12 max-w-[620px]">
            Pflege betrifft den gesamten Alltag — der Pflegebedürftigen und der pflegenden Angehörigen. Alle Ratgeber zu den Themen die wirklich zählen.
          </p>

          {/* Für pflegende Angehörige */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Für pflegende Angehörige</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegende Angehörige unterstützen', href: '/pflegende-angehoerige-unterstuetzen/', desc: 'Was pflegende Angehörige brauchen — Entlastung, Anerkennung und praktische Hilfen.' },
              { titel: 'Burnout pflegender Angehöriger', href: '/burnout-pflegende-angehoerige/', desc: 'Warnsignale erkennen, Grenzen setzen und rechtzeitig Hilfe holen.' },
              { titel: 'Pflege und Beruf vereinbaren', href: '/pflege-und-beruf-vereinbaren/', desc: 'Freistellungsrechte, Pflegeunterstützungsgeld, praktische Lösungen.' },
              { titel: 'Wenn Eltern Pflege verweigern', href: '/wenn-eltern-pflege-verweigern/', desc: 'Wie man mit Widerstand umgeht und trotzdem die Versorgung sicherstellt.' },
              { titel: 'Tagesstruktur bei Demenz', href: '/tagesstruktur-demenz/', desc: 'Feste Routinen als wirksamstes Mittel — Muster-Tagesplan.' },
              { titel: 'Kommunikation mit Demenzkranken', href: '/kommunikation-mit-demenzkranken/', desc: '5 Grundprinzipien und schwierige Situationen meistern.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Vorsorge & Rechtliches */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Vorsorge & Rechtliches</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Vorsorgevollmacht erstellen', href: '/vorsorgevollmacht-erstellen/', desc: 'Was eine Vorsorgevollmacht regelt, wie man sie erstellt und worauf zu achten ist.' },
              { titel: 'Patientenverfügung aufsetzen', href: '/patientenverfuegung-aufsetzen/', desc: 'Was hineingehört, wie man sie gültig erstellt — Anleitung und Musterschreiben.' },
              { titel: 'Pflege steuerlich absetzen', href: '/pflege-steuerlich-absetzen/', desc: 'Bis zu 4.000 €/Jahr Steuerersparnis — was absetzbar ist und wie.' },
              { titel: 'Wann brauche ich 24h-Pflege?', href: '/wann-brauche-ich-24h-pflege/', desc: '10 Warnsignale und der ehrliche Selbsttest.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Wohnen & Sicherheit */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Wohnen & Sicherheit</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Barrierefreies Zuhause gestalten', href: '/barrierefreies-zuhause-gestalten/', desc: 'Wohnraumanpassung, Fördermittel bis 4.180 €/Maßnahme, was wirklich hilft.' },
              { titel: 'Hausnotruf für Senioren', href: '/hausnotruf-senioren/', desc: 'Kosten, Kassenzuschuss und welche Systeme für wen geeignet sind.' },
              { titel: 'Sturzprävention Senioren', href: '/sturzpraevention-senioren/', desc: 'Stürze sind die häufigste Unfallursache im Alter — wie man sie verhindert.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Beschäftigung & Wohlbefinden */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Beschäftigung & Wohlbefinden</h2>
          <div className="grid gap-3 mb-12">
            {[
              { titel: 'Medikamente für Senioren verwalten', href: '/medikamente-senioren-verwalten/', desc: 'Einnahmezeiten, Wechselwirkungen, Dosierungshilfen — sicher im Pflegealltag.' },
              { titel: 'Beschäftigung für Senioren zuhause', href: '/beschaeftigung-senioren-zuhause/', desc: 'Sinnvolle Aktivitäten die Freude machen und kognitiv fordern.' },
              { titel: 'Ernährung pflegebedürftiger Senioren', href: '/ernaehrung-pflegebeduerftige-senioren/', desc: 'Besondere Ernährungsbedürfnisse und praktische Lösungen im Alltag.' },
              { titel: 'Bewegung für Senioren zuhause', href: '/bewegung-senioren-zuhause/', desc: 'Gezielte Übungen die im Wohnzimmer möglich sind — für alle Mobilitätslevel.' },
              { titel: 'Einsamkeit im Alter bekämpfen', href: '/einsamkeit-senioren-bekaempfen/', desc: 'Soziale Kontakte fördern und Isolation verhindern.' },
              { titel: 'Schlafprobleme bei Senioren', href: '/schlafprobleme-senioren-loesen/', desc: 'Ursachen und wirksame Maßnahmen für besseren Schlaf im Alter.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
