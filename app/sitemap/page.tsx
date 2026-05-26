import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap — alle Seiten im Überblick | Primundus',
  description: 'Alle Seiten von Primundus auf einen Blick — 24h-Pflege, Ratgeber, Regionen, Tools und mehr.',
  alternates: { canonical: 'https://primundus.de/sitemap/' },
  robots: { index: false, follow: true },
}

const sections = [
  {
    title: 'Hauptseiten',
    links: [
      { label: 'Startseite', href: '/' },
      { label: 'Was ist 24-Stunden-Pflege?', href: '/was-ist-24-stunden-pflege/' },
      { label: 'Kosten & Finanzierung', href: '/kosten/' },
      { label: 'Leistungen', href: '/leistungen/' },
      { label: 'Ablauf & Schritte', href: '/ablauf/' },
      { label: 'Qualität & Standards', href: '/qualitaet/' },
      { label: 'Kostenrechner', href: 'https://kostenrechner.primundus.de' },
    ],
  },
  {
    title: 'Über Primundus',
    links: [
      { label: 'Über uns', href: '/ueber-uns/' },
      { label: 'Kontakt', href: '/kontakt/' },
      { label: 'Franchisepartner werden', href: '/franchisepartner/' },
    ],
  },
  {
    title: 'Tools & Rechner',
    links: [
      { label: 'Pflegekosten-Rechner', href: 'https://kostenrechner.primundus.de' },
      { label: 'Pflegegrad-Rechner', href: '/pflegegrad-rechner/' },
      { label: 'Eigenanteil-Rechner', href: '/eigenanteil-rechner/' },
      { label: 'Zuschuss-Rechner', href: '/zuschuss-rechner/' },
      { label: 'Pflegevertrag-Generator', href: '/pflegevertrag-generator/' },
      { label: 'Vollmacht-Generator', href: '/vollmacht-generator/' },
    ],
  },
  {
    title: 'Ratgeber — Pflegegrade',
    links: [
      { label: 'Pflegegrade im Überblick', href: '/pflegegrade/' },
      { label: 'Pflegegrad beantragen', href: '/pflegegrad-beantragen/' },
      { label: 'Pflegegrad erhöhen', href: '/pflegegrad-erhoehen/' },
      { label: 'Pflegegrad-Begutachtung vorbereiten', href: '/pflegegrad-begutachtung-vorbereiten/' },
      { label: 'Pflegegrad 1', href: '/pflegegrad-1/' },
      { label: 'Pflegegrad 2', href: '/pflegegrad-2/' },
      { label: 'Pflegegrad 3', href: '/pflegegrad-3/' },
      { label: 'Pflegegrad 4', href: '/pflegegrad-4/' },
      { label: 'Pflegegrad 5', href: '/pflegegrad-5/' },
      { label: 'Pflegegrad bei Demenz', href: '/pflegegrad-bei-demenz/' },
      { label: 'Pflegegrad nach Schlaganfall', href: '/pflegegrad-nach-schlaganfall/' },
      { label: 'Pflegegrad-Widerspruch einlegen', href: '/pflegegrad-widerspruch-einlegen/' },
    ],
  },
  {
    title: 'Ratgeber — Finanzierung',
    links: [
      { label: 'Finanzierung im Überblick', href: '/finanzierung/' },
      { label: 'Pflegegeld 2025', href: '/pflegegeld-2025/' },
      { label: 'Pflegesachleistungen', href: '/pflegesachleistungen/' },
      { label: 'Entlastungsbetrag', href: '/entlastungsbetrag/' },
      { label: 'Verhinderungspflege', href: '/verhinderungspflege/' },
      { label: 'Kurzzeitpflege', href: '/kurzzeitpflege/' },
      { label: 'Pflege steuerlich absetzen', href: '/pflege-steuerlich-absetzen/' },
      { label: 'Sozialhilfe bei Pflegebedarf', href: '/sozialhilfe-bei-pflegebedarf/' },
      { label: 'Eigenanteil senken', href: '/eigenanteil-24h-pflege-senken/' },
    ],
  },
  {
    title: 'Ratgeber — Organisation',
    links: [
      { label: 'Organisation im Überblick', href: '/organisation/' },
      { label: 'Pflegekraft finden', href: '/pflegekraft-finden/' },
      { label: 'Pflegekraft legal beschäftigen', href: '/pflegekraft-legal-beschaeftigen/' },
      { label: 'Pflegevertrag aufsetzen', href: '/pflegevertrag-aufsetzen/' },
      { label: 'Pflegekraft wechseln', href: '/pflegekraft-wechseln/' },
      { label: 'Pflegekraft kündigen', href: '/pflegekraft-kuendigen/' },
      { label: '24h-Pflege organisieren', href: '/24h-pflege-organisieren/' },
      { label: 'Checkliste Pflegekraft einstellen', href: '/checkliste-pflegekraft-einstellen/' },
    ],
  },
  {
    title: 'Ratgeber — Krankheitsbilder',
    links: [
      { label: 'Krankheiten & Pflege im Überblick', href: '/krankheiten/' },
      { label: 'Demenz-Pflege zuhause', href: '/demenz-pflege-zuhause/' },
      { label: 'Alzheimer-Betreuung zuhause', href: '/alzheimer-betreuung-zuhause/' },
      { label: 'Parkinson-Pflege zuhause', href: '/parkinson-pflege-zuhause/' },
      { label: 'Schlaganfall-Pflege zuhause', href: '/schlaganfall-pflege-zuhause/' },
      { label: 'Palliativpflege zuhause', href: '/palliativpflege-zuhause/' },
      { label: 'Multiple Sklerose Pflege', href: '/multiple-sklerose-pflege/' },
      { label: 'COPD-Pflege zuhause', href: '/copd-pflege-zuhause/' },
      { label: 'Intensivpflege zuhause', href: '/intensivpflege-zuhause/' },
    ],
  },
  {
    title: 'Ratgeber — Angehörige',
    links: [
      { label: 'Pflegende Angehörige unterstützen', href: '/pflegende-angehoerige-unterstuetzen/' },
      { label: 'Pflege und Beruf vereinbaren', href: '/pflege-und-beruf-vereinbaren/' },
      { label: 'Burnout pflegender Angehöriger', href: '/burnout-pflegende-angehoerige/' },
      { label: 'Pflegeverantwortung unter Geschwistern', href: '/pflegeverantwortung-unter-geschwistern/' },
      { label: 'Wenn Eltern Pflege verweigern', href: '/wenn-eltern-pflege-verweigern/' },
      { label: 'Erste Hilfe bei Pflegenotfall', href: '/erste-hilfe-bei-pflegenotfall/' },
    ],
  },
  {
    title: 'Ratgeber — Rechtliches',
    links: [
      { label: 'Rechtliches im Überblick', href: '/rechtliches/' },
      { label: 'Vorsorgevollmacht erstellen', href: '/vorsorgevollmacht-erstellen/' },
      { label: 'Patientenverfügung aufsetzen', href: '/patientenverfuegung-aufsetzen/' },
      { label: 'Betreuungsverfügung erstellen', href: '/betreuungsverfuegung-erstellen/' },
      { label: 'Scheinselbstständigkeit vermeiden', href: '/scheinselbststaendigkeit-pflege-vermeiden/' },
      { label: 'Haftung im Pflegehaushalt', href: '/haftung-pflegehaushalt/' },
      { label: 'Pflegezeit-Gesetz für Angehörige', href: '/pflegezeit-gesetz-angehoerige/' },
    ],
  },
  {
    title: '24h-Pflege nach Region',
    links: [
      { label: 'Bayern', href: '/24h-pflege-bayern/' },
      { label: 'Baden-Württemberg', href: '/24h-pflege-baden-wuerttemberg/' },
      { label: 'Nordrhein-Westfalen', href: '/24h-pflege-nordrhein-westfalen/' },
      { label: 'Hessen', href: '/24h-pflege-hessen/' },
      { label: 'Niedersachsen', href: '/24h-pflege-niedersachsen/' },
      { label: 'Rheinland-Pfalz', href: '/24h-pflege-rheinland-pfalz/' },
      { label: 'Sachsen', href: '/24h-pflege-sachsen/' },
      { label: 'Saarland', href: '/24h-pflege-saarland/' },
      { label: 'Brandenburg', href: '/24h-pflege-brandenburg/' },
      { label: 'Thüringen', href: '/24h-pflege-thueringen/' },
      { label: 'Mecklenburg-Vorpommern', href: '/24h-pflege-mecklenburg-vorpommern/' },
      { label: 'Sachsen-Anhalt', href: '/24h-pflege-sachsen-anhalt/' },
      { label: 'Schleswig-Holstein', href: '/24h-pflege-schleswig-holstein/' },
      { label: '→ Alle Regionen & Städte', href: '/regionen/' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '/impressum/' },
      { label: 'Datenschutzerklärung', href: '/datenschutz/' },
    ],
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[1100px] mx-auto px-5 py-16">

        <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#8B7355] transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-[#3D3D3D]">Sitemap</span>
        </nav>

        <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-3">
          Alle Seiten im Überblick
        </h1>
        <p className="text-[16px] text-[#5A5A5A] mb-12 max-w-2xl">
          Hier finden Sie eine vollständige Übersicht aller Bereiche und Seiten von primundus.de.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <h2 className="text-[13px] font-bold uppercase tracking-wider text-[#A89279] mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
