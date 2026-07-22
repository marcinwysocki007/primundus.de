import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'grundprinzipien', title: 'Die 5 Grundprinzipien' },
  { id: 'konkret', title: 'Was konkret helfen' },
  { id: 'schwierig', title: 'Schwierige Situationen meistern' },
  { id: 'fuer-betreuungskraefte', title: 'Tipps für Betreuungskräfte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kommunikation mit Demenzkranken — was hilft & was schadet | Primundus',
  description: 'Kommunikation mit Demenzkranken: 5 Grundprinzipien, konkrete Gesprächstipps und wie man schwierige Situationen (Aggression, Verweigerung, Weinen) meistert.',
  alternates: { canonical: 'https://primundus.de/kommunikation-mit-demenzkranken/' },
  openGraph: {
    title: 'Kommunikation mit Demenzkranken | Primundus',
    description: 'Was bei der Kommunikation mit Demenzkranken hilft und was schadet — 5 Grundprinzipien und konkrete Tipps.',
    url: 'https://primundus.de/kommunikation-mit-demenzkranken/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kommunikation mit Demenzkranken — was hilft und was schadet',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/kommunikation-mit-demenzkranken/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Kommunikation mit Demenzkranken', item: 'https://primundus.de/kommunikation-mit-demenzkranken/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kommuniziert man mit Demenzkranken?', acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Prinzipien: Kurze, einfache Sätze. Augenkontakt herstellen. Nicht korrigieren oder widersprechen. In die Realität des Betroffenen einsteigen. Emotionen ernst nehmen auch wenn der Inhalt falsch ist. Berührung als Kommunikationsmittel nutzen.' } },
      { '@type': 'Question', name: 'Was sollte man bei Demenzkranken nicht sagen?', acceptedAnswer: { '@type': 'Answer', text: 'Niemals sagen: "Das hast du doch gerade erst gefragt." "Das weißt du doch." "Papa ist schon lange tot." Korrekturen und Konfrontationen mit der Realität führen zu Distress ohne therapeutischen Nutzen.' } },
      { '@type': 'Question', name: 'Was tun wenn Demenzkranke aggressiv werden?', acceptedAnswer: { '@type': 'Answer', text: 'Ruhe bewahren, nicht gegenhalten. Auf Augenhöhe gehen, sanfte Berührung anbieten. Thema wechseln statt Konflikt eskalieren. Ursache suchen: Schmerzen, Hunger, Toilettenbedarf, Überreizung. Sicheren Abstand schaffen wenn nötig.' } },
    ],
  },
]

export default function KommunikationMitDemenzkranken() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/alltag/" className="hover:text-[#8B7355] transition-colors">Alltag & Angehörige</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Kommunikation mit Demenzkranken</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Kommunikation mit Demenzkranken — was hilft & was schadet
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Mit einem demenzkranken Menschen zu kommunizieren bedeutet: In seine Welt einsteigen statt ihn in unsere zu holen. Korrekturen, Konfrontationen mit der Realität und Ungeduld führen zu Distress ohne jeden Nutzen. Fünf Grundprinzipien verändern die tägliche Kommunikation grundlegend — und erleichtern den Alltag für alle Beteiligten.
          </p>

          <h2 id="grundprinzipien" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Die 5 Grundprinzipien
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                n: '1',
                title: 'In die Welt des Betroffenen einsteigen',
                desc: 'Demenzkranke leben in ihrer eigenen Realität — einer die von Erinnerungen aus früheren Jahrzehnten geprägt sein kann. Statt zu korrigieren: mitgehen. Wenn Großvater fragt ob er zur Arbeit muss, ist es besser zu sagen "Die haben angerufen, heute frei" als "Du bist seit 30 Jahren in Rente".',
                example: { falsch: '"Das stimmt nicht, Papa ist schon seit 10 Jahren tot."', richtig: '"Er ist nicht hier gerade. Magst du mir von ihm erzählen?"' },
              },
              {
                n: '2',
                title: 'Kurze, einfache Sätze',
                desc: 'Maximal eine Information pro Satz. Langsam sprechen, Pausen lassen. Keine rhetorischen Fragen, keine Mehrfachanweisungen. "Komm, wir waschen jetzt deine Hände" statt "Meinst du nicht auch, dass wir jetzt vielleicht die Hände waschen sollten bevor wir essen?"',
                example: null,
              },
              {
                n: '3',
                title: 'Emotionen ernst nehmen',
                desc: 'Das Gefühl ist immer real — auch wenn der Inhalt falsch ist. Wenn jemand weint weil er glaubt sein Kind ist krank, ist der Schmerz echt. Nicht den Irrtum korrigieren — den Schmerz anerkennen. "Ich sehe dass du dir Sorgen machst. Ich bin bei dir."',
                example: null,
              },
              {
                n: '4',
                title: 'Augenkontakt und Körperhöhe',
                desc: 'Immer auf Augenhöhe kommunizieren — hinknien oder hinsetzen wenn die Person sitzt. Augenkontakt herstellen bevor man spricht. Berührung (Hand halten, Schulter berühren) kann mehr sagen als Worte.',
                example: null,
              },
              {
                n: '5',
                title: 'Nie korrigieren, nie streiten',
                desc: 'Eine Korrektur bewirkt nur Distress — keine Einsicht. Das Kurzgedächtnis speichert die Korrektur nicht. Was bleibt ist das negative Gefühl. Kein "Das weißt du doch", kein "Das hast du gerade erst gefragt".',
                example: { falsch: '"Das habe ich dir doch gerade erst erklärt!"', richtig: 'Ruhig nochmals antworten — gern zum zehnten Mal.' },
              },
            ].map((item) => (
              <div key={item.n} className="bg-white rounded-xl p-6 border border-[#E5E3DF]">
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{item.n}</span>
                  <div className="flex-1">
                    <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">{item.title}</p>
                    <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-3">{item.desc}</p>
                    {item.example && (
                      <div className="space-y-2">
                        <div className="bg-[#FDF0EE] rounded-lg px-4 py-2.5">
                          <p className="text-[12px] font-bold text-[#8B3E2F] mb-1">✗ Nicht:</p>
                          <p className="text-[13px] text-[#8B3E2F] italic">{item.example.falsch}</p>
                        </div>
                        <div className="bg-[#E8F5EE] rounded-lg px-4 py-2.5">
                          <p className="text-[12px] font-bold text-[#2A5C3F] mb-1">✓ Besser:</p>
                          <p className="text-[13px] text-[#2A5C3F] italic">{item.example.richtig}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="konkret" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was konkret hilft — praktische Tipps
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tip: 'Namen verwenden', desc: 'Den Vornamen der Person am Anfang des Gesprächs nennen: "Maria, magst du jetzt frühstücken?" Das holt die Person ab und gibt Orientierung.' },
              { tip: 'Fragen statt Befehle', desc: '"Magst du jetzt..." wirkt besser als "Du musst jetzt..." Wahlmöglichkeiten geben: "Möchtest du das rote oder das blaue Hemd?" — nie mehr als zwei Optionen.' },
              { tip: 'Musik als Brücke', desc: 'Musik aus der Jugend (1950er–70er) ist oft noch tief verankert und ermöglicht Kommunikation wenn Worte nicht mehr funktionieren. Gemeinsames Summen oder Mitsingen schafft Verbindung.' },
              { tip: 'Berührung bewusst einsetzen', desc: 'Handhalten, Schulter berühren, Streicheln — Körperkontakt kommuniziert Sicherheit und Wärme wenn Sprache schwieriger wird. Immer ankündigen: "Ich nehme jetzt deine Hand."' },
              { tip: 'Gesicht und Ton wichtiger als Worte', desc: 'Im fortgeschrittenen Stadium versteht die Person vielleicht nicht mehr den Inhalt — aber Mimik, Tonfall und Körpersprache bleiben verständlich. Ruhig und warm sprechen.' },
            ].map((item) => (
              <div key={item.tip} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tip}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="schwierig" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Schwierige Situationen meistern
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                situation: 'Aggression und Wutausbrüche',
                strategie: 'Nicht gegenhalten — das eskaliert. Ruhe bewahren, Abstand schaffen, sanft ansprechen. Ursache suchen: Schmerzen? Hunger? Toilette? Überreizung durch Lärm? Thema wechseln: "Weißt du noch, wie du früher..." Sicheren Abstand wahren bis die Situation sich beruhigt.',
              },
              {
                situation: 'Verweigerung von Pflege',
                strategie: 'Nicht erzwingen — das traumatisiert. Kurze Pause machen und es später nochmals versuchen. Andere Betreuungsperson versuchen lassen. Den Sinn der Handlung verständlich machen: "Wir waschen die Hände damit sie nicht kalt sind." Positiv einleiten: Lieblingslied spielen vor dem Waschen.',
              },
              {
                situation: 'Wiederholte Fragen',
                strategie: 'Geduldig dieselbe Antwort geben — auch zum zehnten Mal. Die Frage ist ein Zeichen von Unsicherheit, kein böser Wille. Ursache der Unsicherheit ansprechen: "Ich bin bei dir. Alles ist in Ordnung." Manchmal hilft eine schriftliche Notiz an gut sichtbarer Stelle.',
              },
              {
                situation: 'Weinen und Traurigkeit',
                strategie: 'Nicht ablenken oder aufheitern — das Gefühl anerkennen. "Ich sehe dass du traurig bist. Das ist in Ordnung." Körperkontakt anbieten. Nicht nach dem Grund fragen — einfach da sein.',
              },
            ].map((item) => (
              <div key={item.situation} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.situation}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.strategie}</p>
              </div>
            ))}
          </div>

          <h2 id="fuer-betreuungskraefte" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Besondere Tipps für 24h-Betreuungskräfte
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Eine 24h-Betreuungskraft verbringt den ganzen Tag mit dem demenzkranken Menschen — das ist besonders intensiv. Einige Dinge helfen besonders:
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Biografiearbeit am Anfang', desc: 'In den ersten Tagen: Familie erzählt über Vorlieben, Berufe, wichtige Lebenserinnerungen. Diese Informationen sind Gold wert für Gespräche und Beschäftigung.' },
              { title: 'Routine schafft Sicherheit', desc: 'Immer dieselbe Reihenfolge beim Aufstehen, Waschen, Frühstücken. Vorhersehbarkeit reduziert Angst und Aggressionen erheblich.' },
              { title: 'Pausen einplanen', desc: '24h Betreuung ist emotional intensiv. Wer sich nicht erholt, verliert die Geduld. Strukturierte Ruhephasen und regelmäßiger Kraftwechsel schützt vor Burnout.' },
              { title: 'Sprachbarriere', desc: 'Bei Betreuungskräften aus dem Ausland: Einfache Sprache, viele Gesten, Mimik und Berührung sind internationale Kommunikation — funktionieren oft besser als kompliziertes Deutsch.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Mehr:{' '}
            <a href="/demenz-pflege-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Demenzpflege zuhause</a>
            {' · '}
            <a href="/tagesstruktur-demenz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Tagesstruktur bei Demenz</a>
            {' · '}
            <a href="/alzheimer-betreuung-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Alzheimer zuhause betreuen</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie kommuniziert man mit Demenzkranken?', a: 'Kurze einfache Sätze. Augenkontakt. Nicht korrigieren. In ihre Realität einsteigen. Emotionen ernst nehmen. Berührung nutzen. Nie streiten oder auf Korrektheit bestehen.' },
              { q: 'Was sollte man bei Demenzkranken nicht sagen?', a: '"Das hast du gerade erst gefragt." "Das weißt du doch." "Papa ist schon lange tot." Korrektionen und Realitätskonfrontationen führen nur zu Distress ohne Nutzen.' },
              { q: 'Was tun wenn Demenzkranke aggressiv werden?', a: 'Ruhe bewahren, nicht gegenhalten. Sicheren Abstand schaffen. Ursache suchen (Schmerzen, Hunger, Überforderung). Thema wechseln. Warten bis die Situation sich beruhigt.' },
              { q: 'Wie reagiert man auf ständig wiederholte Fragen?', a: 'Geduldig dieselbe Antwort geben — auch zum zehnten Mal. Die Frage kommt aus Unsicherheit, nicht böser Absicht. Manchmal hilft eine schriftliche Notiz an sichtbarer Stelle.' },
              { q: 'Kann eine Betreuungskraft die Deutsch nicht fließend spricht mit Demenzkranken kommunizieren?', a: 'Ja — im fortgeschrittenen Stadium ist Mimik, Tonfall und Berührung oft wichtiger als der Wortinhalt. Einfache, ruhige Sprache plus viel Körperkontakt funktionieren sprachübergreifend sehr gut.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{item.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-[#2E2E2E] leading-relaxed">{item.a}</p>
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
