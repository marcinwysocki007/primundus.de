import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'warum', title: 'Warum Tagesstruktur so wichtig ist' },
  { id: 'tagesplan', title: 'Idealer Tagesplan — Beispiel' },
  { id: 'aktivitaeten', title: 'Sinnvolle Aktivitäten je Stadium' },
  { id: 'schlafroutine', title: 'Schlaf & Nachtunruhe' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Tagesstruktur bei Demenz — Tipps & Tagesplan | Primundus',
  description: 'Tagesstruktur bei Demenz: Warum feste Routinen entscheidend sind, ein konkreter Tagesplan mit sinnvollen Aktivitäten und wie 24h-Betreuung den Alltag stabilisiert.',
  alternates: { canonical: 'https://primundus.de/tagesstruktur-demenz/' },
  openGraph: {
    title: 'Tagesstruktur bei Demenz | Primundus',
    description: 'Feste Routinen und Tagesstruktur bei Demenz: Warum sie wirken und wie man sie umsetzt.',
    url: 'https://primundus.de/tagesstruktur-demenz/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tagesstruktur bei Demenz — Tagesplan, Aktivitäten & Tipps',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/tagesstruktur-demenz/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Tagesstruktur bei Demenz', item: 'https://primundus.de/tagesstruktur-demenz/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Warum ist Tagesstruktur bei Demenz so wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Demenz ist das Kurzzeitgedächtnis beeinträchtigt, aber das prozedurale Gedächtnis (Routinen, Abläufe) bleibt lange intakt. Feste Strukturen ermöglichen Orientierung ohne Gedächtnis — der Körper "weiß" was als nächstes kommt. Das reduziert Angst, Unruhe und Verhaltensauffälligkeiten erheblich.' } },
      { '@type': 'Question', name: 'Wie viel Stimulation ist bei Demenz gut?', acceptedAnswer: { '@type': 'Answer', text: 'Weniger ist mehr. Überstimulation durch laute Geräusche, viele Menschen oder zu viele Aufgaben gleichzeitig führt zu Angst und Unruhe. Ruhige Atmosphäre, eine Aktivität nach der anderen, ausreichend Ruhezeiten. Nachmittags sind viele Demenzkranke unruhiger (Sundowning) — dann besonders auf ruhige Umgebung achten.' } },
    ],
  },
]

export default function TagesstrukturDemenz() {
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
            <span className="text-[#1C1C1C]">Tagesstruktur bei Demenz</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Tagesstruktur bei Demenz — Tagesplan, Aktivitäten & Tipps
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Feste Tagesstrukturen sind das wirksamste nicht-medikamentöse Mittel bei Demenz. Sie reduzieren Angst, Unruhe und Verhaltensauffälligkeiten erheblich — weil sie Orientierung geben ohne Gedächtnis zu brauchen. Der Körper erinnert sich auch wenn der Kopf es nicht mehr kann.
          </p>

          <h2 id="warum" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Warum Tagesstruktur bei Demenz so wichtig ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Das Kurzzeitgedächtnis ist bei Demenz früh beeinträchtigt — aber das prozedurale Gedächtnis bleibt lange intakt. Dieses Gedächtnissystem speichert Routinen und Abläufe: Wie man Kaffee kocht, wie der Tagesablauf war, was nach dem Frühstück kommt. Feste Strukturen nutzen genau dieses intakte System.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Wenn jeden Morgen um 8 Uhr das Frühstück auf dem Tisch steht, jeden Nachmittag um 15 Uhr Kaffeezeit ist und jeden Abend dieselbe Einschlafroutine folgt — dann weiß der Körper was kommt. Das reduziert die Desorientierung die Angst und Unruhe auslöst.
          </p>
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Was Tagesstruktur konkret bewirkt</p>
            <ul className="space-y-1.5">
              {[
                'Reduziert Ängste und Verwirrung durch Vorhersehbarkeit',
                'Weniger Verhaltensauffälligkeiten wie Aggressionen oder Wandern',
                'Besserer Schlaf durch feste Schlaf-Wach-Zeiten',
                'Mehr positive Momente durch gezielte Aktivitäten',
                'Entlastung der Pflegeperson durch klare Abläufe',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-[#2A5C3F]">
                  <span className="font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="tagesplan" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Idealer Tagesplan bei Demenz — Beispiel
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Dieser Tagesplan ist ein Ausgangspunkt — er sollte an den früheren Lebensrhythmus des Betroffenen angepasst werden. Wer immer Frühaufsteher war, steht früh auf. Wer Nachtmensch war, startet langsamer.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Beispiel-Tagesplan bei mittlerem Demenzstadium</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['7:30–8:00', 'Aufwachen & Körperpflege', 'Langsam, ohne Druck, vertraute Abläufe'],
                    ['8:00–8:30', 'Frühstück', 'Lieblingsessen, ruhige Atmosphäre, kein TV'],
                    ['8:30–10:00', 'Ruhige Aktivität', 'Zeitung/Fotos anschauen, leichte Hausarbeit'],
                    ['10:00–11:00', 'Bewegung / Spaziergang', 'Immer dieselbe Strecke wenn möglich'],
                    ['11:00–12:30', 'Beschäftigung', 'Handwerk, Musik, Gespräche, Gartenarbeit'],
                    ['12:30–13:00', 'Mittagessen', 'Hauptmahlzeit — Lieblingsgerichte bevorzugen'],
                    ['13:00–14:30', 'Mittagsruhe', 'Schlafen oder entspannen — nicht erzwingen'],
                    ['14:30–16:00', 'Aktivität', 'Einfache Spiele, Musik, Biographiearbeit'],
                    ['15:30', 'Kaffeezeit', 'Festes Ritual — Kaffee/Tee mit Gebäck'],
                    ['16:00–17:30', 'Ruhigere Phase', 'Sundowning-Zeit: Reize reduzieren'],
                    ['17:30–18:30', 'Abendessen', 'Leichte Mahlzeit, früh genug'],
                    ['18:30–20:00', 'Abendprogramm', 'Vertraute Sendungen, Musik, Gespräche'],
                    ['20:00–21:00', 'Einschlafroutine', 'Immer dieselbe Abfolge: Zähneputzen, Pyjama, Bett'],
                  ].map(([zeit, aktivität, hinweis], i) => (
                    <tr key={zeit} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#8B7355] border-b border-[#E5E3DF] w-[100px]">{zeit}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{aktivität}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="aktivitaeten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Sinnvolle Aktivitäten je Stadium
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                title: 'Frühes Stadium',
                items: ['Lesen, Kreuzworträtsel, einfache Brettspiele', 'Gartenarbeit, Handwerk, Backen', 'Gesellschaftliche Treffen, Ausflüge', 'Gedächtnisübungen, Musikinstrument spielen'],
              },
              {
                title: 'Mittleres Stadium',
                items: ['Fotos sortieren und Geschichten erzählen', 'Musik aus der Jugendzeit hören und mitsingen', 'Einfache Haushaltsaufgaben: Wäsche falten, Tisch decken', 'Spaziergänge auf vertrauten Wegen'],
              },
              {
                title: 'Schweres Stadium',
                items: ['Musik hören — auch non-verbal wirksam', 'Berührungen, Massagen, sensorische Reize', 'Vertraute Gerüche: Kaffeduft, Lieblingsparfum', 'Vorlesen bekannter Texte oder Gedichte'],
              },
            ].map((group) => (
              <div key={group.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-3">{group.title}</p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-[#2E2E2E]">
                      <span className="text-[#8B7355] font-bold flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="schlafroutine" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Schlaf & Nachtunruhe — die größte Herausforderung
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Schlafstörungen und Nachtunruhe sind bei Demenz häufig — und eine der größten Belastungen für Angehörige. Das Sundowning-Phänomen (zunehmende Unruhe am Nachmittag und Abend) ist typisch für Alzheimer.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Feste Schlafenszeit', desc: 'Jeden Abend zur gleichen Zeit das gleiche Ritual. Keine Aufregung, kein Fernsehen kurz vor dem Schlafen. Beruhigende Musik oder Vorlesen als Übergang.' },
              { title: 'Tagschlaf begrenzen', desc: 'Wenn tagsüber viel geschlafen wird, verschiebt sich der Nacht-Schlaf. Mittagsschlaf auf max. 30 Minuten begrenzen.' },
              { title: 'Licht und Aktivität tagsüber', desc: 'Tageslicht und Bewegung regulieren den Schlaf-Wach-Rhythmus. Tägliche Spaziergänge, helle Räume am Morgen.' },
              { title: 'Nächtliche Unterstützung', desc: 'Bei häufiger Nachtunruhe ist eine 24h-Kraft unverzichtbar — Angehörige die jede Nacht unterbrochen werden, erschöpfen schnell.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Demenz allgemein:{' '}
            <a href="/demenz-pflege-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Demenz Pflege zuhause — vollständiger Ratgeber</a>
            {' · '}
            <a href="/kommunikation-mit-demenzkranken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kommunikation mit Demenzkranken</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur Tagesstruktur bei Demenz
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Warum ist Tagesstruktur bei Demenz so wichtig?', a: 'Das prozedurale Gedächtnis (Routinen, Abläufe) bleibt bei Demenz lange intakt. Feste Strukturen geben Orientierung ohne Kurzzeitgedächtnis — das reduziert Angst, Unruhe und Verhaltensauffälligkeiten erheblich.' },
              { q: 'Wie viel Stimulation ist bei Demenz gut?', a: 'Weniger ist mehr — Überstimulation durch Lärm, viele Menschen oder zu viele Aufgaben führt zu Angst. Ruhige Atmosphäre, eine Aktivität nach der anderen, ausreichend Ruhezeiten. Nachmittags besonders ruhig halten (Sundowning-Zeit).' },
              { q: 'Was ist Sundowning bei Demenz?', a: 'Sundowning bezeichnet die verstärkte Unruhe, Verwirrung und manchmal Aggressivität die bei vielen Demenzkranken am Nachmittag und frühen Abend auftritt. Ursache ist wahrscheinlich gestörter zirkadianer Rhythmus. Tipp: Nachmittags Reize reduzieren, ruhige Aktivitäten.' },
              { q: 'Wie geht man mit Nachtunruhe bei Demenz um?', a: 'Feste Schlafenszeit mit beruhigendem Ritual, Tagschlaf begrenzen, tagsüber Licht und Bewegung. Bei häufiger Nachtunruhe ist eine 24h-Betreuungskraft sinnvoll — Angehörige die jede Nacht unterbrochen werden, erschöpfen schnell.' },
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
