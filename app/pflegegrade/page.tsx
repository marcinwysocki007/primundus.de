import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Pflegegrade — alle 5 Grade, Beträge & Leistungen 2026',
  description: 'Pflegegrade 2026: Alle 5 Pflegegrade erklärt — Voraussetzungen, Pflegegeld (347–990 €/Monat), Sachleistungen und wie man richtig eingestuft wird.',
  alternates: { canonical: 'https://primundus.de/pflegegrade' },
  openGraph: {
    title: 'Pflegegrade 2026 — alle 5 Grade im Überblick | Primundus',
    description: 'Pflegegrade 1–5: Voraussetzungen, Pflegegeld, Sachleistungen und Beantragung. Alles erklärt.',
    url: 'https://primundus.de/pflegegrade',
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
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie viele Pflegegrade gibt es?',
        acceptedAnswer: { '@type': 'Answer', text: 'Es gibt 5 Pflegegrade. PG 1 = geringe Beeinträchtigung (131 €/Monat Entlastungsbetrag, kein Pflegegeld). PG 2 = erhebliche Beeinträchtigung (347 €/Monat). PG 3 = schwere Beeinträchtigung (599 €/Monat). PG 4 = schwerste Beeinträchtigung (800 €/Monat). PG 5 = schwerste Beeinträchtigung mit besonderen Anforderungen (990 €/Monat).' },
      },
      {
        '@type': 'Question',
        name: 'Wie wird der Pflegegrad festgestellt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein Gutachter des Medizinischen Dienstes (MD) bewertet die Selbstständigkeit in 6 Lebensbereichen nach dem NBA-Verfahren. Die Punktsumme (0–100) ergibt den Pflegegrad: 12,5–26,9 Punkte = PG 1, 27–47,4 = PG 2, 47,5–69,9 = PG 3, 70–89,9 = PG 4, 90–100 = PG 5.' },
      },
      {
        '@type': 'Question',
        name: 'Wie hoch ist das Pflegegeld bei den verschiedenen Pflegegraden 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'PG 1: kein Pflegegeld. PG 2: 347 €/Monat. PG 3: 599 €/Monat. PG 4: 800 €/Monat. PG 5: 990 €/Monat. Alle Beträge 2026 identisch zu 2025 — nächste Dynamisierung frühestens Januar 2028.' },
      },
    ],
  },
])

export default function Pflegegrade() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          {/* Breadcrumb */}
          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-body">Pflegegrade</span>
          </nav>

          {/* Header */}
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            RATGEBER
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Pflegegrade 2026
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Alle 5 Pflegegrade erklärt — Pflegegeld, Beantragung, Begutachtung und wie man sich optimal vorbereitet.
          </p>

          {/* 5-Grade Schnell-Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {[
              { grad: 'PG 1', href: '/pflegegrad-1', betrag: '131 €/Mo', label: 'Entlastungsbetrag' },
              { grad: 'PG 2', href: '/pflegegrad-2', betrag: '347 €/Mo', label: 'Pflegegeld' },
              { grad: 'PG 3', href: '/pflegegrad-3', betrag: '599 €/Mo', label: 'Pflegegeld' },
              { grad: 'PG 4', href: '/pflegegrad-4', betrag: '800 €/Mo', label: 'Pflegegeld' },
              { grad: 'PG 5', href: '/pflegegrad-5', betrag: '990 €/Mo', label: 'Pflegegeld' },
            ].map((item) => (
              <a key={item.grad} href={item.href} className="bg-white border border-pm-line rounded-xl p-4 text-center hover:border-pm-taupe hover:shadow-sm transition-all group">
                <p className="text-[18px] font-bold text-pm-ink group-hover:text-pm-taupe transition-colors">{item.grad}</p>
                <p className="text-[15px] font-bold text-pm-green mt-1">{item.betrag}</p>
                <p className="text-[11px] text-pm-mute mt-0.5">{item.label}</p>
              </a>
            ))}
          </div>

          {/* Alle 5 Grade */}
          <h2 className="text-[20px] font-bold text-pm-ink mb-4">Alle 5 Pflegegrade im Überblick</h2>
          <div className="space-y-3 mb-10">
            {[
              { grad: 'Pflegegrad 1', punkte: '12,5–26,9', titel: 'Geringe Beeinträchtigung', desc: 'Einschränkungen in mindestens einem Lebensbereich, die meisten Alltagsaktivitäten noch selbst möglich. Kein Pflegegeld, aber 131 €/Monat Entlastungsbetrag.', href: '/pflegegrad-1', pg: '—', eb: '131 €/Mo' },
              { grad: 'Pflegegrad 2', punkte: '27–47,4', titel: 'Erhebliche Beeinträchtigung', desc: 'Hilfe bei mehreren Alltagstätigkeiten nötig, vieles noch selbst möglich. Häufigste Einstufung in Deutschland — ca. 2,5 Millionen Betroffene.', href: '/pflegegrad-2', pg: '347 €/Mo', eb: '131 €/Mo' },
              { grad: 'Pflegegrad 3', punkte: '47,5–69,9', titel: 'Schwere Beeinträchtigung', desc: 'Umfangreicher Hilfebedarf bei Körperpflege, Mobilität und Haushalt. 24h-Pflege wird ab PG 3 für viele Familien zur tragenden Versorgungsform.', href: '/pflegegrad-3', pg: '599 €/Mo', eb: '131 €/Mo' },
              { grad: 'Pflegegrad 4', punkte: '70–89,9', titel: 'Schwerste Beeinträchtigung', desc: 'Vollständige oder nahezu vollständige Abhängigkeit bei Körperpflege, Mobilität und Haushalt. Intensive 24h-Betreuung notwendig.', href: '/pflegegrad-4', pg: '800 €/Mo', eb: '131 €/Mo' },
              { grad: 'Pflegegrad 5', punkte: '90–100', titel: 'Schwerste Beeinträchtigung + besondere Anforderungen', desc: 'Vollständige Abhängigkeit mit besonders hohem Pflegeaufwand — z.B. Beatmungspflege oder schwerste Demenz.', href: '/pflegegrad-5', pg: '990 €/Mo', eb: '131 €/Mo' },
            ].map((item) => (
              <a key={item.grad} href={item.href} className="block bg-white border border-pm-line rounded-2xl p-5 hover:border-pm-taupe hover:shadow-sm transition-all group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-[15px] font-bold text-pm-ink group-hover:text-pm-taupe transition-colors">{item.grad}</p>
                      <span className="text-[11px] text-pm-mute bg-pm-paper px-2 py-0.5 rounded-full">{item.punkte} Punkte</span>
                    </div>
                    <p className="text-[12px] font-semibold text-pm-taupe-light mb-1.5">{item.titel}</p>
                    <p className="text-[13px] text-pm-body leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[15px] font-bold text-pm-green">{item.pg}</p>
                    <p className="text-[11px] text-pm-mute">Pflegegeld</p>
                    <p className="text-[13px] font-semibold text-pm-taupe mt-1">{item.eb}</p>
                    <p className="text-[11px] text-pm-mute">Entlastung</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Beantragen & Begutachtung */}
          <h2 className="text-[20px] font-bold text-pm-ink mb-4">Pflegegrad beantragen & Begutachtung</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegegrad beantragen — Schritt für Schritt', href: '/pflegegrad-beantragen', desc: 'Antrag bei der Pflegekasse, was zu beachten ist und wie man sich richtig vorbereitet.' },
              { titel: 'MD-Begutachtung vorbereiten', href: '/pflegegrad-begutachtung-vorbereiten', desc: 'Pflegetagebuch, schlechtesten Tag schildern — wie man die Begutachtung optimal nutzt.' },
              { titel: 'Pflegekasse Antrag stellen', href: '/pflegekasse-antrag-stellen', desc: 'Vollständige Anleitung: Antrag, Fristen, Formulare und was danach passiert.' },
              { titel: 'MDK-Begutachtung — Tipps', href: '/mdk-begutachtung-tipps', desc: 'Insider-Tipps vom Gutachtertermin — was Familien wissen müssen.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-pm-line rounded-xl p-5 hover:border-pm-taupe hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-pm-ink group-hover:text-pm-taupe transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-pm-mute">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Widerspruch & Höherstufung */}
          <h2 className="text-[20px] font-bold text-pm-ink mb-4">Widerspruch & Höherstufung</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegegrad erhöhen — wann und wie', href: '/pflegegrad-erhoehen', desc: 'Wann ein Höherstufungsantrag sinnvoll ist und wie man ihn erfolgreich stellt.' },
              { titel: 'Widerspruch einlegen', href: '/widerspruch-pflegekasse-einlegen', desc: 'Widerspruch gegen den Bescheid — Fristen, Formulierungen und Erfolgschancen.' },
              { titel: 'Pflegegrad Änderung melden', href: '/pflegegrad-aenderung-melden', desc: 'Wann und wie Änderungen der Pflegesituation der Pflegekasse gemeldet werden.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-pm-line rounded-xl p-5 hover:border-pm-taupe hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-pm-ink group-hover:text-pm-taupe transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-pm-mute">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Pflegegrad bei spezifischen Erkrankungen */}
          <h2 className="text-[20px] font-bold text-pm-ink mb-4">Pflegegrad bei spezifischen Erkrankungen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegegrad bei Demenz', href: '/pflegegrad-bei-demenz', desc: 'Wie Demenz in der NBA-Begutachtung bewertet wird und welcher Grad realistisch ist.' },
              { titel: 'Pflegegrad bei Parkinson', href: '/pflegegrad-bei-parkinson', desc: 'Einstufung bei Parkinson — motorische und kognitive Einschränkungen richtig belegen.' },
              { titel: 'Pflegegrad nach Schlaganfall', href: '/pflegegrad-nach-schlaganfall', desc: 'Welcher Pflegegrad nach dem Schlaganfall und wie man die Rehabilitationsphase nutzt.' },
              { titel: 'Pflegegrad ohne Diagnose', href: '/pflegegrad-ohne-diagnose', desc: 'Auch ohne feste Diagnose kann ein Pflegegrad beantragt werden — so geht es.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-pm-line rounded-xl p-5 hover:border-pm-taupe hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-pm-ink group-hover:text-pm-taupe transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-pm-mute">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Leistungsbeträge Tabelle */}
          <h2 className="text-[20px] font-bold text-pm-ink mb-4">Alle Leistungen & Beträge 2026</h2>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-4 shadow-sm">
            <div className="px-5 py-3 bg-pm-paper border-b border-pm-line">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">Leistungen nach Pflegegrad 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Leistung', 'PG 1', 'PG 2', 'PG 3', 'PG 4', 'PG 5'].map(h => (
                      <th key={h} className="px-3 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegeld/Monat', '—', '347 €', '599 €', '800 €', '990 €'],
                    ['Sachleistungen/Monat', '—', '796 €', '1.497 €', '1.859 €', '2.299 €'],
                    ['Entlastungsbetrag/Monat', '131 €', '131 €', '131 €', '131 €', '131 €'],
                    ['Entlastungsbudget/Jahr', '—', '3.539 €', '3.539 €', '3.539 €', '3.539 €'],
                    ['Pflegehilfsmittel/Monat', '42 €', '42 €', '42 €', '42 €', '42 €'],
                  ].map(([leistung, ...werte], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-3 py-3 text-[13px] font-semibold text-pm-ink border-b border-pm-line">{leistung}</td>
                      {werte.map((w, j) => (
                        <td key={j} className={`px-3 py-3 text-[13px] border-b border-pm-line whitespace-nowrap tabular-nums text-right ${w === '—' ? 'text-[#C8C3BA]' : 'text-pm-green font-bold'}`}>{w}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Quelle: GKV-Spitzenverband, SGB XI · Stand 2026 · Identisch zu 2025</p>
            </div>
          </div>
          <p className="text-[14px] text-pm-body mb-12">
            → Alle Zuschüsse optimal kombinieren:{' '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-[#7D6848]">Finanzierung der 24h-Pflege — alle Kassenzuschüsse 2026</a>
          </p>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
