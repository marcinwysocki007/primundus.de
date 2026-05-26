import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Organisation der 24h-Pflege — so geht es 2026 | Primundus',
  description: 'Organisation der 24h-Pflege: Beschäftigungsmodelle, Pflegekraft finden, Verträge, rechtliche Absicherung — alles was Familien wissen müssen. Mit Schritt-für-Schritt-Ablauf.',
  alternates: { canonical: 'https://primundus.de/organisation/' },
  openGraph: {
    title: 'Organisation der 24h-Pflege 2026 | Primundus',
    description: 'Beschäftigungsmodelle, Pflegekraft finden, Verträge — der vollständige Organisations-Ratgeber.',
    url: 'https://primundus.de/organisation/',
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
      { '@type': 'ListItem', position: 3, name: 'Organisation', item: 'https://primundus.de/organisation/' },
    ],
  },
])

export default function Organisation() {
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
            <span className="text-[#5A5A5A]">Organisation</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            RATGEBER
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Organisation der 24h-Pflege
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-12 max-w-[620px]">
            Von der Suche nach der richtigen Pflegekraft bis zum laufenden Betrieb — alle Schritte und Ratgeber zur praktischen Organisation der 24h-Pflege.
          </p>

          {/* Pflegekraft finden */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Pflegekraft finden & auswählen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegekraft finden — worauf achten?', href: '/pflegekraft-finden/', desc: 'Deutschkenntnisse, Erfahrung, Persönlichkeit — die wichtigsten Auswahlkriterien.' },
              { titel: 'Checkliste Pflegekraft einstellen', href: '/checkliste-pflegekraft-einstellen/', desc: 'Alle Schritte von der Suche bis zum ersten Einsatztag auf einen Blick.' },
              { titel: 'Pflegekraft aus Polen', href: '/pflegekraft-aus-polen/', desc: 'Das Entsendemodell aus Polen erklärt — rechtlicher Rahmen und Ablauf.' },
              { titel: 'Pflegekraft aus Bulgarien', href: '/pflegekraft-aus-bulgarien/', desc: 'EU-Entsendung aus Bulgarien — rechtssicher und transparent.' },
              { titel: 'Pflegekraft aus Rumänien', href: '/pflegekraft-aus-rumaenien/', desc: 'Rumänische Betreuungskräfte — Erfahrung, Leistung und Kosten.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Rechtliches & Verträge */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Rechtliches & Verträge</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegekraft legal beschäftigen', href: '/pflegekraft-legal-beschaeftigen/', desc: 'Die 3 Modelle: Entsendemodell, Direktanstellung, Selbstständigkeit — mit allen Risiken.' },
              { titel: 'Pflegevertrag aufsetzen', href: '/pflegevertrag-aufsetzen/', desc: 'Was in jeden Pflegevertrag gehört — Leistungsumfang, Vergütung, Kündigung.' },
              { titel: 'Pflegevertrag Generator', href: '/pflegevertrag-generator/', desc: 'Rechtssicheren Pflegevertrag in wenigen Minuten online erstellen.' },
              { titel: 'Pflegevertrag Muster & Vorlage', href: '/pflegevertrag-muster-vorlage/', desc: 'Musterpflegevertrag als Vorlage zum Download.' },
              { titel: 'Scheinselbstständigkeit vermeiden', href: '/scheinselbststaendigkeit-pflege-vermeiden/', desc: 'Warum Scheinselbstständigkeit ein hohes Risiko ist und wie man es vermeidet.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Wechsel & laufende Betreuung */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Wechsel & laufende Betreuung</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegekraft wechseln', href: '/pflegekraft-wechseln/', desc: 'Wann ein Wechsel sinnvoll ist, wie er reibungslos läuft und was zu beachten ist.' },
              { titel: 'Pflegekraft kündigen', href: '/pflegekraft-kuendigen/', desc: 'Kündigungsfristen, Formulierungen und der richtige Weg — für alle Modelle.' },
              { titel: 'Checkliste Pflegeübernahme', href: '/checkliste-pflegeuebernahme/', desc: 'Alles was die neue Pflegekraft wissen muss — strukturierte Übergabe.' },
              { titel: 'Pflegedokumentation führen', href: '/pflegedokumentation-fuehren/', desc: 'Was dokumentiert werden muss und wie man es sinnvoll organisiert.' },
              { titel: 'Pflegeberater finden', href: '/pflegeberater-finden/', desc: 'Wann ein unabhängiger Pflegeberater hilft und wie man den richtigen findet.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Koordination & Notfall */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Koordination & Notfall</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: '24h-Pflege organisieren — Schritt für Schritt', href: '/24h-pflege-organisieren/', desc: 'Von der ersten Überlegung bis zur laufenden Betreuung — vollständiger Ablauf.' },
              { titel: 'Pflege aus der Ferne koordinieren', href: '/pflege-aus-der-ferne-koordinieren/', desc: 'Wenn Kinder nicht vor Ort sind — wie man Pflege zuverlässig aus der Distanz organisiert.' },
              { titel: 'Erste Hilfe bei Pflegenotfall', href: '/erste-hilfe-bei-pflegenotfall/', desc: 'Was zu tun ist wenn die Pflege plötzlich wegfällt oder ein Notfall eintritt.' },
              { titel: 'Notfallplan Pflege erstellen', href: '/notfallplan-pflege/', desc: 'Wer wird informiert, wer übernimmt — Notfallplan für Pflegehaushalte.' },
              { titel: 'Pflegeberater finden', href: '/pflegeberater-finden/', desc: 'Wann ein unabhängiger Pflegeberater hilft und wie man den richtigen findet.' },
              { titel: 'Pflegestützpunkte in Deutschland', href: '/pflegestuetzpunkte-deutschland/', desc: 'Kostenlose Beratung vor Ort — wo Pflegestützpunkte sind und was sie leisten.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Hilfsmittel & Wohnen */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Hilfsmittel & Wohnen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegehilfsmittel organisieren', href: '/pflegehilfsmittel-organisieren/', desc: 'Welche Hilfsmittel im Pflegealltag sinnvoll sind und wie man sie bekommt.' },
              { titel: 'Wohnraumanpassung planen', href: '/wohnraumanpassung-planen/', desc: 'Welche Umbaumaßnahmen sinnvoll sind und wie man sie Schritt für Schritt umsetzt.' },
              { titel: 'Rollstuhl & Hilfsmittel beantragen', href: '/hilfsmittel-rollstuhl-beantragen/', desc: 'Rollstuhl, Pflegebett, Gehilfen — Antrag, Fristen und was die Kasse zahlt.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Ablauf bei Primundus */}
          <div className="bg-[#F2ECE4] border border-[#DDD3C2] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-1">Primundus Ablauf</p>
              <p className="text-[15px] font-semibold text-[#3D3D3D]">In 4–7 Tagen zur Betreuungskraft</p>
              <p className="text-[13px] text-[#5A5A5A] mt-0.5">Transparent, rechtssicher, täglich kündbar</p>
            </div>
            <a
              href="/ablauf/"
              className="shrink-0 inline-flex items-center gap-2 text-[14px] font-semibold text-[#8B7355] hover:text-[#7D6848] transition-colors whitespace-nowrap"
            >
              Zum Ablauf →
            </a>
          </div>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
