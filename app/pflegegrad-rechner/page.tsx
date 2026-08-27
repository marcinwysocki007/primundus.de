import type { Metadata } from 'next'
import PflegegradRechnerClient from './PflegegradRechnerClient'

export const metadata: Metadata = {
  title: 'Pflegegrad berechnen — kostenloser Pflegegrad-Rechner',
  description: 'Pflegegrad selbst berechnen, mit denselben sechs Modulen wie die offizielle Begutachtung. Kostenlos, in 3 Minuten, ohne Anmeldung.',
  alternates: {
    canonical: 'https://primundus.de/pflegegrad-rechner',
  },
  openGraph: {
    title: 'Pflegegrad berechnen — kostenloser Pflegegrad-Rechner',
    description: 'Pflegegrad selbst berechnen, mit denselben sechs Modulen wie die offizielle Begutachtung. Kostenlos, in 3 Minuten, ohne Anmeldung.',
    url: 'https://primundus.de/pflegegrad-rechner',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const pflegegrade = [
  { pg: 1, title: 'Pflegegrad 1 — Geringe Beeinträchtigungen', desc: 'Ab PG 1 besteht Anspruch auf den Entlastungsbetrag (131 €/Monat). Kein Pflegegeld, aber Hilfsmittel und Wohnraumanpassungen werden bezuschusst.' },
  { pg: 2, title: 'Pflegegrad 2 — Erhebliche Beeinträchtigungen', desc: 'Ab PG 2 wird Pflegegeld (347 €/Monat) ausgezahlt. Zusätzlich stehen Sachleistungen, Kurzzeitpflege und das Entlastungsbudget zur Verfügung.' },
  { pg: 3, title: 'Pflegegrad 3 — Schwere Beeinträchtigungen', desc: 'PG 3 bedeutet 599 €/Monat Pflegegeld und erweiterte Leistungen. Bei 24h-Pflege zuhause sind Sachleistungen und Entlastungsbudget kombinierbar.' },
  { pg: 4, title: 'Pflegegrad 4 — Schwerste Beeinträchtigungen', desc: 'Ab PG 4 steigen alle Leistungen deutlich: 800 €/Monat Pflegegeld, höhere Sachleistungen, vollständiger Entlastungsbetrag.' },
  { pg: 5, title: 'Pflegegrad 5 — Besondere Anforderungen', desc: 'PG 5 ist die höchste Einstufung: 990 €/Monat Pflegegeld und maximale Sachleistungen. Häufig bei Demenz mit vollständiger Pflegebedürftigkeit.' },
]

// Gewichtung der sechs Begutachtungsmodule nach § 15 SGB XI. Die Module 2
// und 3 teilen sich 15 % — gewertet wird nur der höhere der beiden Werte.
const module = [
  {
    nr: '1',
    name: 'Mobilität',
    gewicht: '10 %',
    breite: 'w-[10%]',
    was: 'Aufstehen, Umsetzen, Fortbewegen in der Wohnung, Treppensteigen.',
  },
  {
    nr: '2 & 3',
    name: 'Kognition, Verhalten und Psyche',
    gewicht: '15 %',
    breite: 'w-[15%]',
    was: 'Erinnern, Orientierung, Gespräche führen — und auf der anderen Seite nächtliche Unruhe, Ängste oder Aggressivität. Gewertet wird nur der höhere der beiden Werte, nicht die Summe.',
  },
  {
    nr: '4',
    name: 'Selbstversorgung',
    gewicht: '40 %',
    breite: 'w-[40%]',
    was: 'Waschen, Anziehen, Essen, Trinken, Toilettengang. Das mit Abstand schwerste Modul.',
  },
  {
    nr: '5',
    name: 'Umgang mit Krankheit und Therapie',
    gewicht: '20 %',
    breite: 'w-[20%]',
    was: 'Medikamente, Verbandwechsel, Arztbesuche, Umgang mit Hilfsmitteln.',
  },
  {
    nr: '6',
    name: 'Alltagsleben und soziale Kontakte',
    gewicht: '15 %',
    breite: 'w-[15%]',
    was: 'Tagesablauf selbst gestalten, Kontakt zu anderen halten, sich beschäftigen.',
  },
]

// Punktegrenzen nach § 15 Abs. 3 SGB XI (Skala 0–100).
const punktegrenzen = [
  { pg: 'kein Pflegegrad', punkte: 'unter 12,5' },
  { pg: 'Pflegegrad 1', punkte: '12,5 bis unter 27' },
  { pg: 'Pflegegrad 2', punkte: '27 bis unter 47,5' },
  { pg: 'Pflegegrad 3', punkte: '47,5 bis unter 70' },
  { pg: 'Pflegegrad 4', punkte: '70 bis unter 90' },
  { pg: 'Pflegegrad 5', punkte: '90 bis 100' },
]

const pgFaqs = [
  {
    q: 'Wie viele Punkte brauche ich für welchen Pflegegrad?',
    a: 'Die Begutachtung ergibt eine Punktzahl zwischen 0 und 100. Ab 12,5 Punkten gibt es Pflegegrad 1, ab 27 Punkten Pflegegrad 2, ab 47,5 Pflegegrad 3, ab 70 Pflegegrad 4 und ab 90 Punkten Pflegegrad 5. Unter 12,5 Punkten wird kein Pflegegrad anerkannt.',
  },
  {
    q: 'Kann ich den Pflegegrad selbst berechnen?',
    a: 'Sie können ihn gut abschätzen — entscheiden kann ihn nur die Begutachtung. Unser Rechner bildet dieselben sechs Module ab, die auch der Gutachter durchgeht, und rechnet mit derselben Gewichtung. Weil aber die Einschätzung jeder einzelnen Frage Ermessensspielraum hat, ist das Ergebnis ein belastbarer Hinweis, kein Bescheid. Nützlich ist es vor allem als Vorbereitung: Sie sehen, worauf der Gutachter achtet.',
  },
  {
    q: 'Wie beantrage ich einen Pflegegrad offiziell?',
    a: 'Sie stellen einen formlosen schriftlichen Antrag bei Ihrer Pflegekasse. Danach beauftragt die Kasse den MDK (GKV) oder MEDICPROOF (PKV) mit einer Begutachtung — in der Regel innerhalb von 25 Arbeitstagen. Der Antrag ist kostenlos.',
  },
  {
    q: 'Kann der Pflegegrad rückwirkend anerkannt werden?',
    a: 'Ja. Der Pflegegrad gilt ab dem Monat der Antragstellung, nicht erst ab dem Begutachtungstermin. Deshalb lohnt es sich, den Antrag früh zu stellen — auch wenn das Gutachten noch aussteht.',
  },
  {
    q: 'Was passiert, wenn der MDK einen niedrigeren Pflegegrad feststellt?',
    a: 'Sie können Widerspruch einlegen — und zwar innerhalb von einem Monat nach dem Bescheid. Circa 40–50 % der Widersprüche führen zu einer Höherstufung. Eine gute Vorbereitung auf die Begutachtung ist entscheidend.',
  },
  {
    q: 'Was ist der Unterschied zwischen Pflegegrad und Pflegestufe?',
    a: 'Pflegestufen (0–3) wurden 2017 durch das neue System der Pflegegrade (1–5) abgelöst. Die Pflegegrade berücksichtigen neben körperlichen auch kognitive und psychische Einschränkungen — z.B. bei Demenz.',
  },
  {
    q: 'Bekommt man bei Demenz einen Pflegegrad, auch wenn körperlich alles geht?',
    a: 'Ja. Genau dafür wurde das System 2017 umgestellt. Die Module 2 und 3 bewerten Orientierung, Erinnerung, nächtliche Unruhe und Ängste — unabhängig davon, ob jemand noch gut laufen kann. Bei Demenz kommt oft Modul 4 hinzu, weil Waschen und Anziehen zwar körperlich möglich sind, aber ohne Anleitung nicht mehr zuverlässig stattfinden.',
  },
]

// FAQ-Schema wird aus den sichtbaren Fragen erzeugt — Googles Richtlinie
// verlangt Deckungsgleichheit. Vorher standen im Schema drei Fragen, die auf
// der Seite gar nicht vorkamen (27.08.2026 korrigiert).
const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Tools & Rechner', item: 'https://primundus.de/tools' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad-Rechner', item: 'https://primundus.de/pflegegrad-rechner' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pgFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
])

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <PflegegradRechnerClient />

      {/* SEO Content Section */}
      <div className="bg-pm-paper">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          {/* Was sind Pflegegrade */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-3">
              Was sind Pflegegrade? — Alle 5 Stufen erklärt
            </h2>
            <p className="text-[15px] text-pm-body leading-relaxed mb-6">
              Pflegegrade bestimmen, welche Leistungen die Pflegekasse übernimmt. Die Einstufung erfolgt durch
              den MDK anhand von sechs Bereichen — von Mobilität über Kognition bis zur Selbstversorgung.
              Seit 2017 gibt es fünf Pflegegrade (PG 1–5), die körperliche und geistige Einschränkungen gleichwertig bewerten.
            </p>
            <div className="flex flex-col gap-3">
              {pflegegrade.map((item) => (
                <div key={item.pg} className="bg-white border border-pm-line rounded-xl px-5 py-4">
                  <p className="text-[14px] font-bold text-pm-ink mb-1">{item.title}</p>
                  <p className="text-[13px] text-pm-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Punktesystem — der eigentliche Rechenweg */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-3">
              Wie wird der Pflegegrad berechnet?
            </h2>
            <p className="text-[15px] text-pm-body leading-relaxed mb-6">
              Nicht die Diagnose entscheidet, sondern die Selbstständigkeit. Der Gutachter geht sechs
              Lebensbereiche durch und fragt bei jedem: Was schafft die Person noch allein, wobei
              braucht sie Hilfe? Daraus entsteht eine Punktzahl zwischen 0 und 100 — und die ergibt
              den Pflegegrad. Wichtig zu wissen: Die Bereiche zählen unterschiedlich stark.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {module.map((m) => (
                <div key={m.nr} className="bg-white border border-pm-line rounded-xl px-5 py-4">
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <p className="text-[14px] font-bold text-pm-ink">
                      <span className="text-pm-taupe">Modul {m.nr}</span> · {m.name}
                    </p>
                    <p className="text-[14px] font-bold text-pm-taupe-ink tabular-nums flex-shrink-0">
                      {m.gewicht}
                    </p>
                  </div>
                  <div className="h-1.5 bg-pm-line-soft rounded-full mb-2.5 overflow-hidden">
                    <div className={`h-full bg-pm-taupe-light rounded-full ${m.breite}`} />
                  </div>
                  <p className="text-[13px] text-pm-body leading-relaxed">{m.was}</p>
                </div>
              ))}
            </div>

            <p className="text-[15px] text-pm-body leading-relaxed mb-5">
              Dass die <strong className="text-pm-ink font-semibold">Selbstversorgung mit 40 Prozent</strong> so
              schwer wiegt, überrascht viele Familien. Wer beim Waschen, Anziehen und Essen dauerhaft
              Hilfe braucht, kommt deshalb oft schon in einen höheren Pflegegrad, als die Angehörigen
              erwartet hätten. Umgekehrt reicht eine reine Gehbehinderung selten für eine hohe
              Einstufung — Mobilität zählt nur mit 10 Prozent.
            </p>

            <h3 className="text-[17px] font-bold text-pm-ink mb-3">
              Ab wie vielen Punkten welcher Pflegegrad?
            </h3>
            <div className="bg-white border border-pm-line rounded-xl overflow-hidden mb-4">
              {punktegrenzen.map((p, i) => (
                <div
                  key={p.pg}
                  className={`flex items-center justify-between gap-4 px-5 py-3 ${
                    i > 0 ? 'border-t border-pm-line-soft' : ''
                  }`}
                >
                  <p className="text-[14px] font-semibold text-pm-ink">{p.pg}</p>
                  <p className="text-[14px] text-pm-body tabular-nums flex-shrink-0">
                    {p.punkte} Punkte
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-pm-mute leading-relaxed">
              Grundlage ist § 15 SGB XI. Unser Rechner oben bildet dieselben sechs Module mit
              derselben Gewichtung ab — er gibt Ihnen also einen realistischen Hinweis, ersetzt
              aber die offizielle Begutachtung nicht.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-pm-ink mb-6">
              Häufige Fragen zum Pflegegrad
            </h2>
            <div className="flex flex-col gap-3">
              {pgFaqs.map((faq) => (
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

          {/* Related tools */}
          <section>
            <h2 className="text-[18px] font-bold text-pm-ink mb-4">Nächste Schritte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                // 27.08.2026: Der Self-Check war von KEINER Seite außer /tools
                // verlinkt und hatte null Impressionen. Er gehört genau hierhin —
                // wer den Rechner durch hat, will als Nächstes die längere
                // Einschätzung. Bewusst nicht in den Footer: zwei sitewide
                // verlinkte Pflegegrad-Selbsttests würden einander Konkurrenz machen.
                { href: '/pflegebedarf-einschaetzen', label: 'Pflegebedarf genauer einschätzen', desc: 'Ausführlicher Self-Check über alle sechs Bereiche' },
                { href: '/zuschuss-rechner', label: 'Zuschüsse berechnen', desc: 'Alle Leistungen nach Pflegegrad im Überblick' },
                { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil für 24h-Pflege sofort sehen', external: true },
                { href: '/pflegegrad-beantragen', label: 'Pflegegrad beantragen', desc: 'Schritt-für-Schritt Anleitung' },
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
    </>
  )
}
