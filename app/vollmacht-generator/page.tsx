import type { Metadata } from 'next'
import { Sicher } from '@/components/Sicher'
import VollmachtClient from './VollmachtClient'
import { BewertungsAuszug } from '@/components/bewertungen/BewertungsAuszug'

export const metadata: Metadata = {
  title: 'Vorsorgevollmacht-Generator 2026 — kostenlos | Primundus',
  description: 'Kostenlose Vorsorgevollmacht in 5 Minuten erstellen. Gesundheitssorge, Vermögen, Wohnung — individuell konfigurierbar, sofort als PDF drucken.',
  alternates: {
    canonical: 'https://primundus.de/vollmacht-generator',
  },
  openGraph: {
    title: 'Vorsorgevollmacht-Generator 2026 — kostenlos | Primundus',
    description: 'Kostenlose Vorsorgevollmacht in 5 Minuten erstellen. Gesundheitssorge, Vermögen, Wohnung — individuell konfigurierbar, sofort als PDF drucken.',
    url: 'https://primundus.de/vollmacht-generator',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const vollmachtBereiche = [
  {
    title: 'Gesundheitssorge',
    icon: '🏥',
    desc: 'Einwilligung in Behandlungen, Operationen und Krankenhausaufenthalte. Der Bevollmächtigte kann Ärzte und Therapeuten beauftragen und Patientenakten einsehen. Entscheidungen, bei denen die Gefahr des Todes oder eines schweren, länger dauernden Gesundheitsschadens besteht, deckt die Vollmacht nur, wenn Sie sie ausdrücklich ankreuzen.',
  },
  {
    title: 'Aufenthaltsbestimmung',
    icon: '🏠',
    desc: 'Entscheidung über Wohnort und Aufnahme in ein Pflegeheim, auch über eine geschlossene Unterbringung. Die braucht zusätzlich die Genehmigung des Betreuungsgerichts.',
  },
  {
    title: 'Vermögenssorge',
    icon: '💼',
    desc: 'Verwaltung von beweglichem und unbeweglichem Eigentum. Abschluss und Kündigung von Verträgen, Geltendmachung von Forderungen und Begleichung von Verbindlichkeiten. Für Grundstücksgeschäfte muss Ihre Unterschrift unter der Vollmacht öffentlich beglaubigt sein.',
  },
  {
    title: 'Bankgeschäfte',
    icon: '🏦',
    desc: 'Verfügung über Konten und Depots, Überweisungen, Bankverträge. Viele Banken verlangen zusätzlich ihre eigene Konto- und Depotvollmacht. Einen Verbraucherkredit deckt die Vollmacht nur, wenn sie notariell beurkundet ist.',
  },
  {
    title: 'Wohnungsangelegenheiten',
    icon: '🔑',
    desc: 'Abschluss, Änderung und Kündigung von Mietverträgen. Entscheidung über Haushaltsauflösungen und alle Angelegenheiten gegenüber Vermietern und Hausverwaltungen.',
  },
  {
    title: 'Behördenangelegenheiten',
    icon: '📋',
    desc: 'Vertretung gegenüber Behörden, Ämtern, Sozialversicherungsträgern und Versicherungen. Antragstellung, Einlegung von Rechtsmitteln, Post entgegennehmen und öffnen.',
  },
]

const vollmachtFaqs = [
  {
    q: 'Was ist eine Vorsorgevollmacht?',
    a: 'Eine Vorsorgevollmacht ermächtigt eine Vertrauensperson, für Sie zu entscheiden, wenn Sie es selbst nicht mehr können — z.B. bei Krankheit oder Pflegebedürftigkeit. Sie regelt Gesundheitssorge, Vermögen, Wohnung und Behördenangelegenheiten.',
  },
  {
    q: 'Muss die Vorsorgevollmacht notariell beglaubigt werden?',
    a: 'Für die meisten Bereiche nicht. Eine schriftliche, eigenhändig unterschriebene Vollmacht genügt. Für Entscheidungen, bei denen die Gefahr des Todes oder eines schweren, länger dauernden Gesundheitsschadens besteht, und für eine geschlossene Unterbringung muss sie schriftlich sein und diese Entscheidungen ausdrücklich nennen (§ 1820 Abs. 2 BGB). Für Grundstücke verlangt das Grundbuchamt, dass Ihre Unterschrift unter der Vollmacht öffentlich beglaubigt ist (§ 29 GBO); das übernimmt ein Notar oder die Betreuungsbehörde. Einen Verbraucherkredit kann die Vertrauensperson mit einer allgemeinen Vorsorgevollmacht nur aufnehmen, wenn sie notariell beurkundet ist (§ 492 Abs. 4 BGB). Banken verlangen oft zusätzlich ihre eigene Konto- und Depotvollmacht.',
  },
  {
    q: 'Was ist der Unterschied zwischen Vorsorgevollmacht und Betreuungsverfügung?',
    a: 'Mit der Vorsorgevollmacht bestimmen Sie eine Person, die für Sie handeln darf, ohne dass ein Gericht sie bestellt. Mit einer Betreuungsverfügung legen Sie nur fest, wen das Betreuungsgericht als rechtlichen Betreuer bestellen soll und was Ihnen dabei wichtig ist, falls doch ein Betreuer nötig wird. Das Gericht hält sich an diesen Wunsch, wenn die Person geeignet ist (§ 1816 Abs. 2 BGB). Der Betreuer steht unter der Aufsicht des Gerichts.',
  },
  {
    q: 'Ab wann gilt die Vorsorgevollmacht?',
    a: 'Sie können wählen: ab der Unterschrift oder erst im Vorsorgefall, also wenn Sie nicht mehr selbst entscheiden können. Das Bundesministerium der Justiz rät von solchen Bedingungen ab, weil Banken und Behörden dann einen Nachweis verlangen, etwa ein ärztliches Attest. Wann Ihre Vertrauensperson die Vollmacht nutzen soll, sprechen Sie besser mit ihr ab.',
  },
]

// Sichtbare Fragen = Daten für Google (eine Quelle)
const schemaMarkup = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://primundus.de/" },
      { "@type": "ListItem", "position": 2, "name": "Tools & Rechner", "item": "https://primundus.de/tools/" },
      { "@type": "ListItem", "position": 3, "name": "Vorsorgevollmacht-Generator", "item": "https://primundus.de/vollmacht-generator/" },
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": vollmachtFaqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
  }
])

const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <Sicher name="Vollmacht-Generator" fallback={<p className="text-[16px] leading-[1.6] text-pm-body">Der Generator lädt gerade nicht. Laden Sie die Seite neu.</p>}>
        <VollmachtClient />
      </Sicher>

      {/* SEO Content Section */}
      <div className="bg-pm-paper">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          {/* Was regelt eine Vorsorgevollmacht */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-3">
              Was regelt eine Vorsorgevollmacht?
            </h2>
            <p className="text-[15px] text-pm-body leading-relaxed mb-6">
              Eine Vorsorgevollmacht kann für verschiedene Lebensbereiche gelten. Je nach Ihrer Situation
              können Sie einzelne Bereiche auswählen oder eine umfassende Vollmacht für alle Bereiche erteilen.
              Die folgende Übersicht zeigt, was jeder Bereich umfasst.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vollmachtBereiche.map((item) => (
                <div key={item.title} className="bg-white border border-pm-line rounded-xl px-5 py-4">
                  <p className="text-[14px] font-bold text-pm-ink mb-1 flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </p>
                  <p className="text-[13px] text-pm-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-6">
              Häufige Fragen zur Vorsorgevollmacht
            </h2>
            <div className="flex flex-col gap-3">
              {vollmachtFaqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white border border-pm-line rounded-2xl overflow-hidden group"
                >
                  <summary className="px-5 py-4 flex items-center justify-between gap-3 cursor-pointer list-none select-none hover:bg-[#FDFCFA] transition-colors">
                    <span className="text-[14px] font-semibold text-pm-ink leading-snug">{faq.q}</span>
                    <span className="text-pm-taupe text-[20px] flex-shrink-0 leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-1 border-t border-pm-line-soft">
                    <p className="text-[13px] text-pm-body leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <p className="text-[13px] text-pm-mute leading-relaxed mb-12">
            Rechtsgrundlagen: §§ 164 ff., 1358, 1814, 1816, 1820, 1827 bis 1832 und 492 Abs. 4 BGB, § 29 GBO; Stand Oktober 2026. Zum Vergleich:
            das{' '}
            <a href="https://www.bmjv.de/SharedDocs/Downloads/DE/Formular/Vorsorgevollmacht.html" className={QUELLE} rel="noopener" target="_blank">
              Formular „Vollmacht“ des Bundesministeriums der Justiz
            </a>{' '}
            (Stand Januar 2023).
          </p>

          {/* Related Tools */}
          <section>
            <h2 className="text-[18px] font-bold text-pm-ink mb-4">Weitere hilfreiche Tools & Ratgeber</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/pflegegrad-rechner', label: 'Pflegegrad-Rechner', desc: 'Pflegegrad mit den Fragen des Gutachters einschätzen' },
                { href: '/pflegevertrag-generator', label: 'Pflegevertrag-Generator', desc: 'Pflegevertrag kostenlos erstellen' },
                { href: 'https://kostenrechner.primundus.de/?start=1&src=apex-vollmacht-generator', label: '24h-Kosten berechnen', desc: 'Eigenanteil für 24h-Pflege sofort sehen', external: true },
                { href: '/pflegegeld', label: 'Pflegegeld-Übersicht', desc: 'Alle Beträge 2026 auf einen Blick' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="bg-white border border-pm-line rounded-xl px-4 py-3.5 hover:border-pm-taupe transition-colors"
                >
                  <p className="text-[14px] font-semibold text-pm-ink mb-0.5">→ {item.label}</p>
                  <p className="text-[12px] text-pm-mute">{item.desc}</p>
                </a>
              ))}
            </div>
          </section>

        </div>
      </div>
      {/* Bewertungen als Hemmnisnehmer (Martin 17.09.2026: „warum nicht auf allen Seiten") */}
      <BewertungsAuszug />
    </>
  )
}
