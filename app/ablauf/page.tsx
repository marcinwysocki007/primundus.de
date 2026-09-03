import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { KurzAntwort } from '@/components/KurzAntwort'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('ablauf', '21. August 2026')

const SECTIONS = [
  { id: 'schritte', title: 'Schritt für Schritt' },
  { id: 'angebot', title: 'Das Online-Angebot' },
  { id: 'auswahl', title: 'Kraft auswählen & Anreise' },
  { id: 'wechsel', title: 'Kraftwechsel & laufende Betreuung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Ablauf der 24h-Pflege mit Primundus — von Anfrage bis Start',
  description: 'So läuft die 24h-Pflege mit Primundus ab: Beratungsgespräch, Kraftauswahl, Vertragsabschluss, Anreise in 4–7 Tagen. Der vollständige Ablauf erklärt.',
  alternates: { canonical: 'https://primundus.de/ablauf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Ablauf der 24h-Pflege mit Primundus | Primundus',
    description: 'Von der Anfrage bis zur Betreuungskraft zuhause: der vollständige Ablauf erklärt.',
    url: 'https://primundus.de/ablauf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ablauf der 24h-Pflege mit Primundus — von Anfrage bis Start',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/ablauf',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ablauf', item: 'https://primundus.de/ablauf' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'So läuft die 24h-Pflege mit Primundus ab',
    step: [
      { '@type': 'HowToStep', name: 'Kostenloses Beratungsgespräch', text: 'Situation schildern, Fragen stellen, Angebot erhalten. Kein Auftrag, kein Risiko.' },
      { '@type': 'HowToStep', name: 'Kraft vorschlagen & bestätigen', text: 'Primundus schlägt geprüfte, passende Kraft vor. Telefonat vorab möglich.' },
      { '@type': 'HowToStep', name: 'Vertrag & Anreise', text: 'Transparentes Angebot, Vertragsabschluss. Betreuungskraft reist in 4–7 Tagen an.' },
      { '@type': 'HowToStep', name: 'Eingewöhnung & Kraftwechsel', text: 'Erste Woche Eingewöhnung. Alle 6–8 Wochen Kraftwechsel, nahtlos organisiert.' },
    ],
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie schnell kann eine 24h-Pflegekraft starten?', acceptedAnswer: { '@type': 'Answer', text: 'In der Regel in 4–7 Tagen. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' } },
    ],
  },
]

export default function Ablauf() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">Ablauf</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            So funktioniert es · Aktualisiert April 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Ablauf der 24h-Pflege mit Primundus — von Angebot bis Start
          </h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />

          <KurzAntwort frage="Wie schnell kann die Betreuung starten?">
            In der Regel startet die Betreuungskraft 4–7 Tage nach der Anfrage. Vorher sehen Sie Profile mit Foto, Erfahrung und Sprachkenntnissen und wählen selbst aus — ein Vertrag entsteht erst nach Ihrer Entscheidung. Bei dringendem Bedarf, etwa nach einer Krankenhausentlassung, geht es oft schneller.
          </KurzAntwort>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            In 2 Minuten sehen Sie Ihr persönliches Angebot und passende Pflegekräfte — sofort, ohne Wartezeit. Primundus übernimmt danach die gesamte Organisation: Kraftauswahl, A1-Bescheinigung, Vertragsabschluss, Anreise. Bis zur Betreuungskraft zuhause vergehen typischerweise 4–7 Tage.
          </p>

          <div className="bg-white border-2 border-pm-taupe rounded-2xl p-6 mb-10">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Auf einen Blick</p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { schritt: 'Sofort', titel: 'Angebot einholen', desc: 'Online-Formular, 2 Min — sofort Kosten & Pflegekräfte sehen' },
                { schritt: 'Tag 1–2', titel: 'Kraft bestätigen', desc: 'Primundus stimmt Kraftprofil mit Familie ab' },
                { schritt: 'Tag 2–3', titel: 'Vertrag', desc: 'Transparentes Angebot & Vertragsabschluss' },
                { schritt: 'Tag 4–7', titel: 'Start', desc: 'Je nach Wunschtermin & Reaktion — Betreuungskraft reist an' },
              ].map((item) => (
                <div key={item.schritt} className="text-center">
                  <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">{item.schritt}</p>
                  <p className="text-[16px] font-bold text-pm-ink mb-1">{item.titel}</p>
                  <p className="text-[13px] text-pm-mute">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* USP-Banner */}
          <div className="bg-pm-taupe rounded-2xl p-5 mb-10 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 mb-2">Was Primundus anders macht</p>
            <p className="text-[17px] font-bold leading-snug mb-2">Keine Katze im Sack — Sie sehen alles sofort.</p>
            <p className="text-[14px] text-white/85 leading-relaxed">
              Angebot, Kosten und echte Pflegekräfte-Profile erscheinen sofort — Sie entscheiden, wen Sie einladen. Bewerbungen laufen transparent ein. Sie sehen zu jedem Zeitpunkt, was passiert.
            </p>
          </div>

          <h2 id="schritte" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Schritt für Schritt — der vollständige Ablauf
          </h2>
          <ol className="space-y-4 mb-10">
            {[
              {
                n: '1',
                badge: 'Sofort',
                badgeColor: 'bg-pm-mint text-[#2E7D32]',
                title: 'Angebot & Pflegekräfte sofort einsehen',
                desc: 'Wenige kurze Fragen zur Pflegesituation beantworten — dauert unter 2 Minuten. Direkt danach: Ihr persönliches Angebot mit allen Kosten, Kassenzuschüssen und Steuervorteilen. Und sofort dazu: echte Pflegekräfte-Profile, die zu Ihrer Situation passen. Kein Warten, keine E-Mail, kein Rückruf nötig.',
                detail: '',
                cta: { label: 'Jetzt Angebot & Pflegekräfte ansehen', href: 'https://kostenrechner.primundus.de' },
              },
              {
                n: '2',
                badge: 'Transparent',
                badgeColor: 'bg-[#EEF2FF] text-[#3730A3]',
                title: 'Bewerbungen erhalten — und selbst Einfluss nehmen',
                desc: 'Passende Pflegekräfte bewerben sich automatisch bei Ihnen — Sie müssen dafür nichts tun. Gleichzeitig können Sie aus den gezeigten Profilen selbst Wunsch-Pflegekräfte gezielt einladen. Beides läuft transparent: Sie sehen in Echtzeit, wer sich bewirbt, wer verfügbar ist und wie der Stand ist — Sie behalten jederzeit den Überblick und entscheiden selbst.',
                detail: '',
              },
              {
                n: '3',
                badge: 'Flexibel',
                badgeColor: 'bg-[#FFF7ED] text-[#92400E]',
                title: 'Vertrag abschließen — täglich kündbar',
                desc: 'Sie haben Ihre Wunschkraft gefunden: Vertrag mit Primundus als Agentur — kein eigenes Arbeitsverhältnis für die Familie. A1-Bescheinigung liegt vor. Täglich kündbar, keine Mindestlaufzeit.',
                detail: '',
              },
              {
                n: '4',
                badge: 'Je nach Wunschtermin',
                badgeColor: 'bg-[#F0FDF4] text-[#166534]',
                title: 'Anreise der Betreuungskraft',
                desc: 'Die Betreuungskraft reist zum vereinbarten Termin an — typischerweise 4–7 Tage nach Vertragsabschluss, abhängig von Ihrem Wunschtermin. Primundus koordiniert An- und Abreise vollständig. Erste Tage: Eingewöhnung in Haus, Routine und Pflegesituation.',
                detail: '',
              },
            ].map((step) => (
              <li key={step.n} className="bg-white rounded-xl border border-pm-line overflow-hidden list-none">
                <div className="flex gap-4 p-5">
                  <span className="w-10 h-10 rounded-full bg-pm-taupe text-white font-bold text-[17px] flex items-center justify-center flex-shrink-0 mt-0.5">{step.n}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <p className="text-[16px] font-bold text-pm-ink">{step.title}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${step.badgeColor}`}>{step.badge}</span>
                    </div>
                    <p className="text-[14px] text-pm-body leading-relaxed mb-2">{step.desc}</p>
                    {step.detail && <p className="text-[12px] text-pm-taupe font-semibold">{step.detail}</p>}
                    {'cta' in step && step.cta && (
                      <a
                        href={step.cta.href}
                        className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 bg-pm-coral hover:bg-pm-coral-deep text-white text-[13px] font-bold rounded-full transition-colors"
                      >
                        {step.cta.label}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="auswahl" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Kraft auswählen & Anreise — wie die Auswahl funktioniert
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Primundus wählt die passende Betreuungskraft aus einem geprüften EU-Pool aus. Kriterien:
          </p>
          <div className="space-y-3 mb-10">
            {[
              'Pflegeerfahrung — Anzahl und Art früherer Einsätze',
              'Deutschkenntnisse — aktiv geprüft, nicht nur selbst angegeben',
              'Spezialerfahrung bei spezifischen Erkrankungen',
              'Persönlichkeit & Passung — auf Wunsch Telefonat vorab',
              'Führerschein wenn relevant (ländliche Gebiete, Arzttermine)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-pm-body">{item}</p>
              </div>
            ))}
          </div>

          <h2 id="wechsel" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Kraftwechsel & laufende Betreuung
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Eine 24h-Betreuungskraft bleibt in der Regel 6–8 Wochen, dann folgt ein Wechsel zur nächsten Kraft. Beim Wechsel läuft alles genauso ab wie beim ersten Mal: Sie sehen neue Pflegekräfte-Profile, können gezielt einladen, Bewerbungen kommen transparent rein — Sie entscheiden wieder selbst. Primundus koordiniert den Übergang nahtlos.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { frage: 'Was passiert beim Kraftwechsel?', antwort: 'Beim Wechsel sehen Sie wieder neue Pflegekräfte-Profile, können Wunschkräfte einladen und verfolgen Bewerbungen transparent — genau wie beim ersten Mal. Primundus kündigt den Wechsel rechtzeitig an und koordiniert den Übergang vollständig.' },
              { frage: 'Was wenn die Kraft krank wird?', antwort: 'Primundus stellt unverzüglich eine Ersatzkraft. Die Familie hat immer einen Ansprechpartner und ist nie ohne Versorgung.' },
              { frage: 'Kann man eine Kraft behalten die gut passt?', antwort: 'Auf Wunsch gerne — Primundus berücksichtigt Präferenzen bei der Kraftauswahl für Folgebesetzungen.' },
              { frage: 'Was wenn die Kraft nicht passt?', antwort: 'Täglich kündbar — und Primundus stellt sofort Ersatz. Kein Risiko, keine Mindestlaufzeit.' },
            ].map((item) => (
              <div key={item.frage} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.frage}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.antwort}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie schnell kann eine 24h-Pflegekraft starten?', a: 'In 4–7 Tagen nach dem ersten Beratungsgespräch. In dringenden Fällen ist ein schnellerer Start möglich — direkt anrufen: 089 200 000 830.' },
              { q: 'Was kostet das Beratungsgespräch?', a: 'Nichts — das Beratungsgespräch ist vollständig kostenlos und unverbindlich. Kein Auftrag, kein Risiko.' },
              { q: 'Muss ich einen Vertrag mit langer Laufzeit abschließen?', a: 'Nein — Primundus ist täglich kündbar. Keine Mindestlaufzeit, keine Kündigungsfristen.' },
              { q: 'Was passiert wenn ich die Kraft wechseln möchte?', a: 'Täglich kündbar. Primundus stellt sofort Ersatz — nahtlos, ohne Lücke in der Versorgung.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-pm-line group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-pm-ink pr-4">{item.q}</h3>
                  <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-pm-body leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
