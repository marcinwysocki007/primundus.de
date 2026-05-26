import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Rechtliches zur 24h-Pflege — alle rechtlichen Aspekte | Primundus',
  description: 'Rechtliches zur 24h-Pflege: Beschäftigungsmodelle, Scheinselbstständigkeit vermeiden, Pflegevertrag, Vorsorgevollmacht, Patientenverfügung und Steuerrecht.',
  alternates: { canonical: 'https://primundus.de/rechtliches/' },
  openGraph: {
    title: 'Rechtliches zur 24h-Pflege | Primundus',
    description: 'Alle rechtlichen Aspekte der 24h-Pflege — Beschäftigung, Verträge, Steuern.',
    url: 'https://primundus.de/rechtliches/',
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
      { '@type': 'ListItem', position: 3, name: 'Rechtliches & Vorsorge', item: 'https://primundus.de/rechtliches/' },
    ],
  },
])

export default function Rechtliches() {
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
            <span className="text-[#5A5A5A]">Rechtliches & Vorsorge</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            RATGEBER
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Rechtliches & Vorsorge
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-12 max-w-[620px]">
            Rechtssichere Beschäftigung, Verträge, Vollmachten und Steuerrecht — alle wichtigen rechtlichen Themen rund um die 24h-Pflege.
          </p>

          {/* Warnung Scheinselbstständigkeit */}
          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Das häufigste rechtliche Risiko: Scheinselbstständigkeit</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Wer eine „selbstständige Pflegekraft" beschäftigt riskiert in fast allen Fällen eine Scheinselbstständigkeit — mit Nachzahlungen von Sozialversicherungsbeiträgen, Bußgeldern und strafrechtlichen Konsequenzen. Die sichere Alternative ist das Entsendemodell über eine seriöse Agentur.
            </p>
          </div>

          {/* Rechtssichere Beschäftigung */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Rechtssichere Beschäftigung von Pflegekräften</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegekraft legal beschäftigen', href: '/pflegekraft-legal-beschaeftigen/', desc: 'Die 3 legalen Modelle — Entsendemodell, Direktanstellung, Scheinselbstständigkeit — erklärt und verglichen.' },
              { titel: 'Scheinselbstständigkeit vermeiden', href: '/scheinselbststaendigkeit-pflege-vermeiden/', desc: 'Was Scheinselbstständigkeit ist, woran die Behörden sie erkennen und wie man das Risiko vollständig vermeidet.' },
              { titel: 'Pflegevertrag aufsetzen', href: '/pflegevertrag-aufsetzen/', desc: 'Was in jeden Pflegevertrag gehört — Leistungsumfang, Vergütung, Kündigung, Kost und Logis.' },
              { titel: 'EU-Pflegekraft: Rechte & Pflichten', href: '/eu-pflegekraft-rechte-pflichten/', desc: 'Was das A1-Entsendemodell bedeutet und welche Regeln für EU-Pflegekräfte gelten.' },
              { titel: 'Haftung im Pflegehaushalt', href: '/haftung-pflegehaushalt/', desc: 'Wer haftet bei Schäden — Familie, Agentur oder Pflegekraft?' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Verträge & Vollmachten */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Verträge & Vollmachten</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Vorsorgevollmacht erstellen', href: '/vorsorgevollmacht-erstellen/', desc: 'Was eine Vorsorgevollmacht regelt, wie man sie erstellt und warum jeder sie braucht.' },
              { titel: 'Patientenverfügung aufsetzen', href: '/patientenverfuegung-aufsetzen/', desc: 'Was hineingehört, wie man sie gültig erstellt — Anleitung und Muster.' },
              { titel: 'Betreuungsverfügung erstellen', href: '/betreuungsverfuegung-erstellen/', desc: 'Wann eine Betreuungsverfügung sinnvoll ist und was sie von der Vollmacht unterscheidet.' },
              { titel: 'Pflegevertrag Muster & Vorlage', href: '/pflegevertrag-muster-vorlage/', desc: 'Musterpflegevertrag mit allen Pflichtangaben — als Vorlage zum Download.' },
              { titel: 'Werkvertrag Pflegekraft Muster', href: '/werkvertrag-pflegekraft-muster/', desc: 'Vorlage und wichtige Hinweise zum Werkvertrag in der Pflege.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Steuern & Sozialversicherung */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Steuern & Sozialversicherung</h2>
          <div className="grid gap-3 mb-12">
            {[
              { titel: 'Pflege steuerlich absetzen', href: '/pflege-steuerlich-absetzen/', desc: 'Bis zu 4.000 €/Jahr Steuerersparnis — was absetzbar ist und wie man es richtig macht.' },
              { titel: 'Pflegekraft Sozialversicherung anmelden', href: '/pflegekraft-sozialversicherung-anmelden/', desc: 'Was bei Direktanstellung zu tun ist — Kranken-, Renten-, Pflegeversicherung.' },
              { titel: 'Datenschutz in der Pflegesituation', href: '/datenschutz-pflegesituation/', desc: 'Was Familien und Pflegekräfte bei Gesundheitsdaten beachten müssen.' },
              { titel: 'Pflegezeit-Gesetz für Angehörige', href: '/pflegezeit-gesetz-angehoerige/', desc: 'Freistellung, Pflegeunterstützungsgeld, kurzzeitige Arbeitsverhinderung — alle Rechte.' },
              { titel: 'Widerspruch Pflegekasse einlegen', href: '/widerspruch-pflegekasse-einlegen/', desc: 'Widerspruch gegen Pflegekassen-Bescheid — Fristen, Formulierungen, Erfolgschancen.' },
              { titel: 'MDK-Begutachtung — Tipps', href: '/mdk-begutachtung-tipps/', desc: 'Was beim Gutachtertermin zählt und wie man die Begutachtung richtig vorbereitet.' },
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
