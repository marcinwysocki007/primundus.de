import type { Metadata } from 'next'
import { FAQSection } from '@/components/home/FAQSection'
import { Sicher } from '@/components/Sicher'
import { SchlussAufruf, Stimmen, VertrauensKarten } from '@/components/vertrauen/Vertrauen'
import {
  BekanntAus, HeimVergleich, RundumVersorgt, SoFunktionierts, StartKopf, Voraussetzungen, WasIst,
} from '@/components/start/Startseite'

// Snippet der Startseite. Titel am 23.09.2026 zurueckgenommen.
//
// Am 22.09. stand hier „Polnische Pflegekraefte sofort ansehen | 6x Testsieger" — Martins
// Wortlaut, zeichengenau uebernommen. Am 23.09. hat er klargestellt: „ich wollte polnische
// pflegekraefte nur bei den seite fuer polnische pflegekraefte und nicht die hauptseite."
//
// Er hatte schon am 22.09. nachgefragt, ob das wirklich die Startseite betrifft. Damals wurde
// mit Zahlen dagegen argumentiert, statt es zurueckzunehmen. Das war der Fehler — eine
// Rueckfrage ist keine Einladung zur Verteidigung.
//
// Zurueck auf seinen Wortlaut vom 21.09. Die Beschreibung bleibt, wie sie ist: Sie nennt Polen
// nicht und traegt seine Streichung von „Auswahl vorab" vom 22.09.
//
// Was die Daten dazu sagen, fuer die Akten: Die Startseite zieht 1.198 Testsieger-Impressionen
// (47 Prozent ihrer Nicht-Marken-Sichtbarkeit) gegen 491 Polen-Impressionen (19 Prozent). Die
// Anfrage „24 stunden pflege testsieger" braucht beide Woerter — mit dem Polen-Titel fehlte
// „24-Stunden-Pflege". Die Rueckkehr ist also auch sachlich richtig.
//
// Polen gehoert auf /pflegekraft-aus-polen. Dort steht der Begriff heute in der EINZAHL im
// Titel, obwohl wir in der Mehrzahl auf Position 21,2 stehen und in der Einzahl auf 51,3.
//
// Gemessen (Arial, Titel 20px/580px, Beschreibung 14px/920px):
//   Titel        496 px — 84 px Luft.
//   Beschreibung 751 px — 169 px ungenutzt, bis entschieden ist, was dort steht.
export const metadata: Metadata = {
  title: '24-Stunden-Pflege zuhause | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: {
    canonical: 'https://primundus.de/',
  },
  openGraph: {
    title: '24-Stunden-Pflege zuhause | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

// Organization/WebSite kommen zentral aus lib/schema.ts (Root-Layout) —
// hier nur noch das seitenspezifische FAQ-Schema.
// Preise aus der FAQ-Antwort entfernt (23.09.2026). Google zog bei der Suche nach „primundus"
// genau diesen Satz als Beschreibung heran, statt unserer preisfreien Meta-Description.
// data-nosnippet wirkt nur auf sichtbares HTML, nicht auf JSON-LD — deshalb muessen die Zahlen
// hier ganz raus. Die sichtbare Antwort auf der Seite nennt sie unveraendert weiter.
const schemaMarkup = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet eine 24-Stunden-Pflege ungefähr?",
        "acceptedAnswer": { "@type": "Answer", "text": "Das hängt vom Pflegebedarf ab und davon, wie gut die Betreuungskraft Deutsch spricht. Ihren genauen Preis zeigt der Online-Rechner in 2 Minuten — nach Pflegegeld, Entlastungsbudget und Steuerermäßigung." }
      },
      {
        "@type": "Question",
        "name": "Wie schnell kann eine Betreuungskraft starten?",
        "acceptedAnswer": { "@type": "Answer", "text": "Eine Anreise ist schon in 3 Tagen möglich. Wann genau, richtet sich nach Ihrem Wunschtermin. Ist es dringend, rufen Sie uns an." }
      },
      {
        "@type": "Question",
        "name": "Was passiert, wenn die Betreuungskraft krank wird?",
        "acceptedAnswer": { "@type": "Answer", "text": "Wir stellen schnellstmöglich eine Ersatzkraft. Weil unsere Betreuungskräfte bei uns angestellt sind, können wir kurzfristig umplanen. Der Wechsel kostet nichts extra, es fallen nur die An- und Abreisekosten an." }
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

      {/* 17.09.2026 (Martin): Aufbau wie die Kostenrechner-Landingpage, Bausteine in components/start/Startseite.tsx */}
      <div className="min-h-screen bg-pm-paper">
        <StartKopf />
        <BekanntAus />
        <VertrauensKarten />
        <SoFunktionierts />
        <WasIst />
        <Voraussetzungen />
        <HeimVergleich />
        <RundumVersorgt />

        {/* ── 8. KUNDENSTIMMEN wie im Rechner ─────────────────────────────── */}
        <Stimmen />

        {/* ── 6. WAS KOSTET 24H-PFLEGE? (SEO) ────────────────────────────── */}
        <section className="py-14 md:py-16 lg:py-20 px-5 bg-white">
          <div className="max-w-[860px] mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Kosten & Finanzierung</p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25] font-bold text-pm-ink mb-5">
              Was kostet 24-Stunden-Pflege?
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.7] text-pm-body mb-6">
              Die Kosten für eine 24-Stunden-Betreuung beginnen bei <strong className="text-pm-ink">2.150 € pro Monat</strong>, je nach Pflegebedarf und Qualifikation der Betreuungskraft. Was viele nicht wissen: Die Pflegekasse übernimmt je nach Pflegegrad einen erheblichen Teil. Nach Abzug von Pflegegeld, Entlastungsbudget und Steuerermäßigung liegt der tatsächliche <strong className="text-pm-ink">Eigenanteil bei Pflegegrad 3 ab ca. 923 € monatlich</strong> — und damit häufig deutlich unter den Kosten eines Pflegeheims.
            </p>

            {/* Tabelle Pflegegeld */}
            <div className="bg-pm-paper rounded-2xl overflow-hidden border border-pm-line mb-8">
              <div className="px-5 py-4 border-b border-pm-line">
                <p className="text-[13px] font-bold text-pm-ink uppercase tracking-wide">Pflegegeld 2026 — Zuschuss nach Pflegegrad</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="text-[12px] text-pm-mute uppercase tracking-wider border-b border-pm-line">
                      <th className="text-left px-5 py-3 font-semibold">Pflegegrad</th>
                      <th className="text-right px-5 py-3 font-semibold">Pflegegeld/Monat</th>
                      <th className="text-right px-5 py-3 font-semibold">Entlastungsbudget/Jahr</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pm-line">
                    {[
                      { grad: 'Pflegegrad 1', geld: '—', entlastung: '—' },
                      { grad: 'Pflegegrad 2', geld: '347 €', entlastung: '3.539 €' },
                      { grad: 'Pflegegrad 3', geld: '599 €', entlastung: '3.539 €' },
                      { grad: 'Pflegegrad 4', geld: '800 €', entlastung: '3.539 €' },
                      { grad: 'Pflegegrad 5', geld: '990 €', entlastung: '3.539 €' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white transition-colors">
                        <td className="px-5 py-3 font-medium text-pm-ink">{row.grad}</td>
                        <td className="px-5 py-3 text-right text-pm-green font-semibold">{row.geld}</td>
                        <td className="px-5 py-3 text-right text-pm-green font-semibold">{row.entlastung}</td>
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

        {/* ── REGIONEN ────────────────────────────────────────────
             20.09.2026: Die Startseite verlinkte keine einzige Ortsseite. Google zeigte sie deshalb selbst für
             Ortsanfragen („altenpflege hamburg" Position 7,6, „polnische pflegekräfte vermittlung münchen" 3,3) — mit
             null Klicks, weil die Startseite die Stadt nicht beantwortet. Martin am 20.09.: „Ortsanfragen sollten zu
             unseren Seiten gehen, auf denen wir diesen Ort verwenden." Dieser Block zeigt auf die Ortsseiten. */}
        <section className="py-14 md:py-16 lg:py-20 px-5 bg-white">
          <div className="max-w-wide mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pm-taupe-light mb-2">Regionen</p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25] font-bold text-pm-ink mb-3">
              Betreuung zu Hause in Ihrer Stadt
            </h2>
            <p className="text-[16px] text-pm-body mb-8 max-w-2xl">
              Ob Sie es Altenpflege, Seniorenbetreuung oder 24-Stunden-Pflege nennen: Auf den Seiten für Ihre Stadt stehen
              die Preise, die Kassenzuschüsse und die Stadtteile, in denen unsere Betreuungskräfte im Einsatz sind.
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {[
                ['München', '/24h-pflege-muenchen'],
                ['Hamburg', '/24h-pflege-hamburg'],
                ['Berlin', '/24h-pflege-berlin'],
                ['Köln', '/24h-pflege-koeln'],
                ['Frankfurt', '/24h-pflege-frankfurt'],
                ['Stuttgart', '/24h-pflege-stuttgart'],
                ['Düsseldorf', '/24h-pflege-duesseldorf'],
                ['Dortmund', '/24h-pflege-dortmund'],
                ['Essen', '/24h-pflege-essen'],
                ['Bremen', '/24h-pflege-bremen'],
                ['Leipzig', '/24h-pflege-leipzig'],
                ['Dresden', '/24h-pflege-dresden'],
                ['Hannover', '/24h-pflege-hannover'],
                ['Nürnberg', '/24h-pflege-nuernberg'],
              ].map(([ort, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-[44px] items-center rounded-full border border-pm-line bg-white px-4 text-[15.5px] font-semibold text-pm-ink hover:border-pm-taupe hover:text-pm-taupe-ink transition-colors"
                  >
                    {ort}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/regionen"
                  className="inline-flex min-h-[44px] items-center rounded-full bg-pm-paper px-4 text-[15.5px] font-semibold text-pm-taupe-ink hover:bg-pm-taupe hover:text-white transition-colors"
                >
                  Alle Orte ansehen
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[15.5px] text-pm-body">
              Unsere Betreuungskräfte kommen aus Polen. Wie Auswahl, Anreise und Wechsel ablaufen, steht auf{' '}
              <a href="/pflegekraft-aus-polen" className="font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">
                polnische Pflegekräfte: Kosten, Auswahl, Ablauf
              </a>.
            </p>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <Sicher name="FAQ"><FAQSection /></Sicher>

        {/* ── SCHLUSSBAND ─────────────────────────────────────────────────── */}
        <SchlussAufruf src="apex-startseite" bild="team" />

      </div>
    </>
  )
}
