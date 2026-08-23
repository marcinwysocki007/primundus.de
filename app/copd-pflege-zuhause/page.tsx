import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist COPD?' },
  { id: 'unterstuetzung', title: 'Pflegerische Unterstützung' },
  { id: 'aufgaben', title: 'Betreuungskraft & Pflegedienst' },
  { id: 'nachts', title: 'Nachts bei COPD' },
  { id: 'notfall', title: 'Notfall erkennen' },
  { id: 'pflegegrad', title: 'COPD & Pflegegrad' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege bei COPD zuhause — Unterstützung im Alltag',
  description:
    'Pflegerische Unterstützung bei COPD: was im Alltag hilft, was die Betreuungskraft übernimmt, wann der Arzt gerufen werden muss und welcher Pflegegrad möglich ist.',
  alternates: { canonical: 'https://primundus.de/copd-pflege-zuhause' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflege bei COPD zuhause',
    description: 'Was im Alltag mit COPD hilft, was die Betreuungskraft übernimmt und welcher Pflegegrad möglich ist.',
    url: 'https://primundus.de/copd-pflege-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'Kann man COPD-Patienten zuhause pflegen?',
    a: 'Ja — in den meisten Fällen sogar gut. Eine 24h-Betreuungskraft übernimmt Haushalt, Alltagsbegleitung und Erinnerungen und ist auch nachts erreichbar. Die medizinische Seite (Inhalationen anleiten, Sauerstofftherapie, Medikamente stellen) bleibt beim ambulanten Pflegedienst und den behandelnden Ärzten — beide ergänzen sich.',
  },
  {
    q: 'Welche Aufgaben übernimmt die Betreuungskraft bei COPD?',
    a: 'Alles, was Kraft kostet und den Alltag sicherer macht: Haushalt, Einkaufen und Kochen, Wege abnehmen, an Medikamente und Inhalationen erinnern, bei Atemnot Ruhe bewahren und die mit dem Arzt besprochenen Maßnahmen unterstützen, auf Warnzeichen achten und im Notfall Hilfe rufen.',
  },
  {
    q: 'Welcher Pflegegrad ist bei COPD möglich?',
    a: 'COPD allein ergibt keinen automatischen Pflegegrad — entscheidend ist, wie stark die Selbstständigkeit im Alltag eingeschränkt ist. Bei fortgeschrittener COPD (GOLD 3 oder 4) mit Atemnot schon bei geringer Belastung ist häufig Pflegegrad 2 oder 3 erreichbar. Wichtig: im Begutachtungstermin den schlechten Tag schildern, nicht den guten.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei COPD?',
    a: 'Bei Primundus 2.200–3.500 € pro Monat, je nach Betreuungsbedarf und Sprachkenntnissen der Kraft — die Diagnose selbst ändert den Preis nicht. Mit Pflegegeld und anteiligem Entlastungsbudget sinkt der Eigenanteil je nach Pflegegrad deutlich. Den Preis für Ihre Situation sehen Sie in 2 Minuten im Kostenrechner.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege bei COPD zuhause — pflegerische Unterstützung im Alltag',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-08-20',
    mainEntityOfPage: 'https://primundus.de/copd-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'COPD Pflege zuhause', item: 'https://primundus.de/copd-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function Page() {
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
            <a href="/krankheiten" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">COPD Pflege zuhause</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Krankheiten · 8 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Pflege bei COPD: Wie Sie den Alltag zuhause sicher machen
          </h1>

          <AuthorByline updated="20. August 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Wer einen Menschen mit COPD pflegt, kennt die ständige Sorge: Reicht die Luft heute? Kommt sie
            die Treppe noch hoch? Was, wenn nachts die Atemnot kommt — und niemand da ist? Dieser Ratgeber
            zeigt, welche pflegerische Unterstützung im Alltag wirklich hilft, wo die Grenzen von Angehörigen
            und Betreuungskräften liegen und wann Sie ärztliche Hilfe holen müssen.
          </p>

          {/* ① WAS IST COPD */}
          <h2 id="was-ist" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was ist COPD — und was bedeutet sie für den Alltag?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            COPD (chronisch obstruktive Lungenerkrankung) ist eine dauerhafte Verengung der Atemwege — meist
            nach Jahrzehnten des Rauchens, seltener durch Stäube oder Vorerkrankungen. Typisch sind die drei
            Beschwerden <strong>Atemnot, Husten und Auswurf</strong>, anfangs nur bei Anstrengung, später
            auch in Ruhe. Ärztinnen und Ärzte teilen den Schweregrad in die Stadien <strong>GOLD 1 bis
            GOLD 4</strong> ein — von leicht bis sehr schwer.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Für den Pflegealltag heißt das: COPD verläuft schleichend, aber sie verläuft. Was letztes Jahr
            noch ging — Einkaufen, Treppensteigen, das Bad im ersten Stock — kostet irgendwann mehr Luft, als
            da ist. Dazu kommen die gefürchteten <strong>Exazerbationen</strong>: akute Verschlechterungen,
            oft durch Infekte ausgelöst, die häufig im Krankenhaus enden. Gute Pflege zuhause hat deshalb zwei
            Ziele: <strong>Kraft sparen im Alltag</strong> und <strong>Verschlechterungen früh erkennen</strong>.
          </p>

          {/* ② PFLEGERISCHE UNTERSTÜTZUNG */}
          <h2 id="unterstuetzung" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Pflegerische Unterstützung bei COPD: worauf es im Alltag ankommt
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { t: 'Kräfte einteilen — der Tag folgt der Luft', d: 'Anstrengendes auf die besten Stunden legen (bei vielen: der Vormittag nach dem Abhusten), zwischen allen Tätigkeiten Pausen einplanen, Wege verkürzen: was täglich gebraucht wird, gehört in Griffhöhe und ins Erdgeschoss. Duschen im Sitzen mit Duschhocker spart mehr Kraft, als viele denken.' },
              { t: 'Atemnot-Momente ruhig begleiten', d: 'Panik verengt die Atemwege zusätzlich. Hilfreich ist, ruhig an die mit Arzt oder Atemphysiotherapie eingeübten Techniken zu erinnern und dabei zu begleiten — etwa die Lippenbremse oder atemerleichternde Haltungen wie den Kutschersitz — Fenster öffnen, beengende Kleidung lockern und da bleiben, bis sich die Atmung beruhigt.' },
              { t: 'Medikamente und Inhalation im Takt', d: 'Dauermedikamente wirken nur bei regelmäßiger Einnahme — und das Bedarfsspray muss im richtigen Moment griffbereit sein. Die Betreuungskraft erinnert zuverlässig an Zeiten und achtet darauf, dass Inhalationsgeräte gereinigt bereitstehen — die Anleitung und Kontrolle der Inhalationstechnik bleibt bei Arzt und Pflegedienst.' },
              { t: 'Essen und Trinken anpassen', d: 'Viele COPD-Patienten verlieren Gewicht, weil Atmen Kalorien verbrennt und volle Mägen aufs Zwerchfell drücken. Bewährt haben sich mehrere kleine, energiereiche Mahlzeiten statt drei großer — und ausreichend Trinken, damit sich Schleim leichter löst. Was im Einzelfall gilt, besprechen Sie mit Arzt oder Ernährungsberatung.' },
              { t: 'Infekte fernhalten', d: 'Jeder Atemwegsinfekt kann eine Exazerbation auslösen. Konsequente Handhygiene, Abstand zu Erkälteten, regelmäßiges Lüften und die von der Ständigen Impfkommission empfohlenen Impfungen (etwa Grippe und Pneumokokken — bitte ärztlich beraten lassen) senken das Risiko spürbar.' },
              { t: 'In Bewegung bleiben — in Grenzen', d: 'Schonung schwächt die Atemmuskulatur. Kurze, regelmäßige Bewegung im eigenen Tempo — Gehen, Treppenstufen nach Vermögen, Lungensport-Übungen — erhält Kraft und Lebensqualität. Das richtige Maß legt der Arzt fest; die Betreuungskraft begleitet und motiviert.' },
            ].map((x) => (
              <div key={x.t} className="bg-white border border-pm-line rounded-2xl p-5">
                <p className="text-[15px] font-bold text-pm-ink mb-1.5">{x.t}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          {/* ③ AUFGABEN */}
          <h2 id="aufgaben" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was übernimmt die Betreuungskraft — und was der Pflegedienst?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-4">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-pm-line">
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-green mb-4">Betreuungskraft übernimmt</p>
                {['Haushalt, Einkaufen, Kochen — alles, was Luft kostet','Wege abnehmen, Duschen und Ankleiden unterstützen','An Medikamente und Inhalationszeiten erinnern','Bei Atemnot Ruhe geben und eingeübte Haltungen unterstützen','Auf Warnzeichen achten, Veränderungen melden','Begleitung zu Arzt- und Therapieterminen','Nachts erreichbar — gerade bei Atemnot ein Sicherheitsnetz'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-pm-line-soft last:border-0">
                    <span className="w-4 h-4 rounded-full bg-pm-mint flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-pm-green text-[9px] font-bold">✓</span></span>
                    <span className="text-[13px] text-pm-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-taupe mb-4">Pflegedienst & Ärzte ergänzen</p>
                {['Medikamente stellen und Inhalationstechnik kontrollieren','Sauerstoff-Langzeittherapie einrichten und überwachen','Behandlungspflege nach ärztlicher Verordnung','Atemphysiotherapie und Lungensport anleiten','Therapieanpassung bei Verschlechterung'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-pm-line-soft last:border-0">
                    <span className="text-pm-taupe font-bold text-[12px] flex-shrink-0 mt-0.5">+</span>
                    <span className="text-[13px] text-pm-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-pm-paper border-t border-pm-line px-6 py-4">
              <p className="text-[13px] text-pm-body leading-relaxed"><strong className="font-bold text-pm-ink">Beide zusammen machen häusliche Pflege auch bei fortgeschrittener COPD möglich.</strong> Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst.</p>
            </div>
          </div>

          {/* ④ NACHTS */}
          <h2 id="nachts" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Nachts ist die Angst am größten
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Atemnot kommt bei COPD oft nachts — im Liegen sammelt sich Schleim, und wer allein aufwacht und
            keine Luft bekommt, gerät in Panik, die alles schlimmer macht. Genau hier liegt der Unterschied
            der 24-Stunden-Betreuung zum ambulanten Dienst, der zweimal am Tag kommt: <strong>Es ist jemand
            da.</strong> Eine Betreuungskraft, die im Haus schläft, hört, wenn etwas nicht stimmt, hilft beim
            Aufsetzen, bleibt ruhig — und ruft Hilfe, wenn es nötig wird. Für viele Familien ist das der
            Moment, in dem sie nach Monaten zum ersten Mal wieder durchschlafen.
          </p>

          {/* ⑤ NOTFALL */}
          <h2 id="notfall" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Notfall erkennen: wann zum Arzt, wann die 112
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-4">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#B08A3E] mb-3">Zeitnah ärztlich abklären</p>
            <p className="text-[14px] text-pm-body leading-relaxed mb-4">
              Deutlich mehr Atemnot als sonst · mehr, zäherer oder verfärbter Auswurf · Fieber ·
              neue Schwellungen an den Beinen · ungewöhnliche Müdigkeit oder Verwirrtheit — das können
              Zeichen einer beginnenden Exazerbation sein. Je früher behandelt wird, desto eher lässt sich
              das Krankenhaus vermeiden.
            </p>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#B0553E] mb-3">Sofort 112 rufen</p>
            <p className="text-[14px] text-pm-body leading-relaxed">
              Schwere Atemnot in Ruhe, die sich mit Notfallspray und Atemtechniken nicht bessert ·
              bläuliche Lippen oder Fingernägel · Benommenheit oder Bewusstseinstrübung. Hier zählt jede Minute.
            </p>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            Hilfreich für alle Beteiligten: ein schriftlicher Notfallplan am Kühlschrank — Warnzeichen,
            Medikamente, Telefonnummern von Hausarzt, Lungenfacharzt und Angehörigen. So handelt auch eine
            Betreuungskraft, die neu im Haushalt ist, sofort richtig.
          </p>

          {/* ⑥ PFLEGEGRAD */}
          <h2 id="pflegegrad" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            COPD und Pflegegrad: Was steht Ihnen zu?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Die Diagnose allein ergibt keinen Pflegegrad — bewertet wird, wie selbstständig jemand seinen
            Alltag noch bewältigt. Bei COPD wird oft unterschätzt, wie viele Punkte zusammenkommen: Wer wegen
            Atemnot beim Waschen und Anziehen Hilfe braucht, Wege in der Wohnung nur mit Pausen schafft und
            nachts Unterstützung benötigt, hat gute Chancen auf <strong>Pflegegrad 2 oder 3</strong> — bei
            fortgeschrittener COPD (GOLD 3 und 4) mit Sauerstofftherapie auch darüber.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Der häufigste Fehler im Begutachtungstermin: den guten Tag zeigen. Schildern Sie den schlechten —
            der Gutachter bewertet den Alltag, nicht den Moment. Ein Pflegetagebuch über zwei Wochen hilft
            enorm.
          </p>
          <p className="text-[15px] text-pm-body mb-10">
            → Erste Einschätzung in wenigen Minuten: <a href="/pflegegrad-rechner" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad-Rechner</a> ·
            Schritt für Schritt: <a href="/pflegegrad-beantragen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad beantragen</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl border border-pm-line group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-pm-ink pr-4">{f.q}</h3>
                  <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">{f.a}</p></div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
