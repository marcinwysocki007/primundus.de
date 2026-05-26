import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'warum', title: 'Warum ein Notfallplan?' },
  { id: 'inhalt', title: 'Was in den Notfallplan gehört' },
  { id: 'vorlage', title: 'Vorlage zum Ausfüllen' },
  { id: 'aufbewahren', title: 'Wo aufbewahren & aktuell halten' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Notfallplan Pflege — was hineingehört & Vorlage | Primundus',
  description: 'Notfallplan Pflege: Was in jeden Pflegenotfallplan gehört, eine kostenlose Vorlage und wie man den Plan aktuell hält. Für zuhause, Betreuungskräfte und Angehörige.',
  alternates: { canonical: 'https://primundus.de/notfallplan-pflege/' },
  openGraph: {
    title: 'Notfallplan Pflege — Vorlage & Anleitung | Primundus',
    description: 'Notfallplan für die häusliche Pflege — was reingehört und wie man ihn aktuell hält.',
    url: 'https://primundus.de/notfallplan-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Notfallplan Pflege — was hineingehört und Vorlage',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/notfallplan-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Notfallplan Pflege', item: 'https://primundus.de/notfallplan-pflege/' },
    ],
  },
]

export default function NotfallplanPflege() {
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
            <span className="text-[#1C1C1C]">Notfallplan Pflege</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Notfallplan Pflege — was hineingehört & Vorlage
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Im Notfall zählen Sekunden. Wer dann erst suchen muss welche Medikamente jemand nimmt, welcher Arzt zuständig ist, oder wer bei einem Sturz als Erstes angerufen werden soll — verliert wertvolle Zeit. Ein Notfallplan kostet einmal 30 Minuten und gibt Jahre lang Sicherheit.
          </p>

          <h2 id="warum" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Warum ein Notfallplan?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ein Notfallplan ist für drei Situationen gedacht: Akuter Notfall (Sturz, Herzinfarkt, Bewusstlosigkeit), Ausfall der Hauptpflegeperson (Krankheit, Unfall), und Wissenstransfer wenn eine neue Betreuungskraft beginnt. Mit einem vollständigen Notfallplan kann jede Person die den Pflegebedürftigen vorfindet sofort richtig handeln — auch wenn sie die Details nicht kennt.
          </p>

          <h2 id="inhalt" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was in den Notfallplan gehört
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                kategorie: 'Persönliche Daten',
                punkte: [
                  'Vollständiger Name, Geburtsdatum',
                  'Adresse (auch für Rettungsdienst-Angabe)',
                  'Versicherungsnummer Kranken- und Pflegekasse',
                  'Pflegegrad',
                  'Blutgruppe (wenn bekannt)',
                ],
              },
              {
                kategorie: 'Notfallkontakte',
                punkte: [
                  'Rettungsdienst: 112',
                  'Hausarzt: Name, Telefon, Adresse',
                  'Facharzt(e): Name, Telefon',
                  'Hauptansprechpartner Familie: Name, Telefon (1. Kontakt)',
                  'Weiterer Angehöriger: Name, Telefon (2. Kontakt)',
                  'Primundus: 089 200 000 830',
                  'Nachbar mit Schlüssel: Name, Telefon',
                ],
              },
              {
                kategorie: 'Medikamente',
                punkte: [
                  'Vollständige Medikamentenliste (Name, Dosis, Einnahmezeit)',
                  'Allergien und Unverträglichkeiten',
                  'Besondere Hinweise (z.B. Blutverdünner — wichtig bei Verletzungen)',
                  'Ort der Medikamente im Haushalt',
                ],
              },
              {
                kategorie: 'Diagnosen & Vorerkrankungen',
                punkte: [
                  'Hauptdiagnosen (z.B. Demenz PG 3, Herzinsuffizienz, Parkinson)',
                  'Implantate (Herzschrittmacher, Hüftprothese)',
                  'Für Rettungsdienst wichtige Informationen',
                ],
              },
              {
                kategorie: 'Rechtliche Dokumente',
                punkte: [
                  'Vorsorgevollmacht — Ort im Haushalt und bevollmächtigte Person',
                  'Patientenverfügung — Ort im Haushalt',
                  'Organspendeausweis (ja/nein)',
                ],
              },
              {
                kategorie: 'Für die Betreuungskraft',
                punkte: [
                  'Was tun bei Sturz? (Nicht sofort aufrichten, Zustand prüfen, Arzt/112)',
                  'Was tun bei Bewusstlosigkeit? (112, stabile Seitenlage, Angehörige)',
                  'Was tun bei Herzinfarkt-Verdacht? (112, ruhig halten)',
                  'Erkennbare Zeichen einer Hypoglykämie (falls Diabetes)',
                  'Was gehört zu einer typisch guten vs. schlechten Verfassung?',
                ],
              },
            ].map((block) => (
              <div key={block.kategorie} className="bg-white rounded-xl border border-[#E5E3DF] overflow-hidden">
                <div className="bg-[#F8F7F5] px-5 py-3 border-b border-[#E5E3DF]">
                  <p className="text-[13px] font-bold text-[#1C1C1C]">{block.kategorie}</p>
                </div>
                <ul className="divide-y divide-[#F8F7F5]">
                  {block.punkte.map(p => (
                    <li key={p} className="flex items-start gap-3 px-5 py-3 text-[14px] text-[#2E2E2E]">
                      <span className="w-4 h-4 rounded border border-[#C8C3BA] flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="vorlage" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Vorlage: Notfallplan zum Ausfüllen
          </h2>
          <div className="bg-[#F8F7F5] border border-[#E5E3DF] rounded-2xl p-6 mb-10 font-mono text-[13px] leading-loose text-[#2E2E2E]">
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-4">NOTFALLPLAN — zum Ausdrucken und Aufhängen</p>
            <p className="font-bold">PERSONALIEN</p>
            <p>Name: _________________________ Geb.: _____________</p>
            <p>Adresse: _____________________________________________</p>
            <p>Pflegegrad: _____ Blutgruppe: _______</p>
            <br />
            <p className="font-bold">NOTFALL-TELEFONNUMMERN</p>
            <p>Rettungsdienst: <strong>112</strong></p>
            <p>Hausarzt: _____________ Tel: ________________</p>
            <p>Angehörige (1): ___________ Tel: ________________</p>
            <p>Angehörige (2): ___________ Tel: ________________</p>
            <p>Primundus: <strong>089 200 000 830</strong></p>
            <br />
            <p className="font-bold">MEDIKAMENTE (mit Uhrzeit)</p>
            <p>1. ______________________ Dosis: ______ Uhrzeit: ______</p>
            <p>2. ______________________ Dosis: ______ Uhrzeit: ______</p>
            <p>3. ______________________ Dosis: ______ Uhrzeit: ______</p>
            <p>Allergien: ___________________________________________</p>
            <br />
            <p className="font-bold">DIAGNOSEN</p>
            <p>_____________________________________________________</p>
            <br />
            <p className="font-bold">VORSORGEVOLLMACHT liegt: _______________</p>
            <p className="font-bold">Bevollmächtigte Person: ________ Tel: _______</p>
          </div>

          <h2 id="aufbewahren" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wo aufbewahren & wie aktuell halten
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { wo: 'An der Kühlschranktür aufhängen', warum: 'Rettungsdienst schaut standardmäßig an den Kühlschrank — das ist die bekannteste Ablage für Notfallpläne.' },
              { wo: 'Kopie beim Hausarzt', warum: 'Der Arzt hat alle Informationen bei einem Notfall-Hausbesuch.' },
              { wo: 'Kopie bei der Betreuungskraft', warum: 'Kraft findet alle Informationen sofort — besonders wichtig in der Eingewöhnungsphase.' },
              { wo: 'Digital sichern', warum: 'Foto auf dem Smartphone aller Angehörigen — auch aus der Ferne sofort verfügbar.' },
            ].map((item) => (
              <div key={item.wo} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.wo}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.warum}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Aktuell halten — einmal im Quartal prüfen</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Medikamente, Ärzte und Kontakte ändern sich. Einmal pro Quartal 10 Minuten einplanen um den Notfallplan zu aktualisieren. Besonders nach Krankenhausaufenthalten, Medikamentenumstellungen oder Kraftwechseln.
            </p>
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was muss in einen Pflegenotfallplan?', a: 'Persönliche Daten, Notfallkontakte (112, Arzt, Familie, Primundus), Medikamentenliste mit Allergien, Diagnosen, Ort der Vorsorgevollmacht. Plus für die Kraft: was tun bei Sturz/Bewusstlosigkeit.' },
              { q: 'Wo sollte der Notfallplan aufbewahrt werden?', a: 'An der Kühlschranktür (Rettungsdienst-Standard), Kopie beim Arzt, Kopie bei der Betreuungskraft, digital gesichert auf dem Smartphone aller Angehörigen.' },
              { q: 'Wie oft sollte der Notfallplan aktualisiert werden?', a: 'Einmal im Quartal prüfen. Immer aktualisieren nach: Medikamentenumstellungen, neuen Diagnosen, Ärztwechsel, Kraftwechsel, Umzug.' },
              { q: 'Was unterscheidet Notfallplan von Patientenverfügung?', a: 'Der Notfallplan ist für akute Notfälle — praktische Informationen für Rettungsdienst und Betreuungskraft. Die Patientenverfügung regelt medizinische Entscheidungen bei Bewusstlosigkeit (lebenserhaltende Maßnahmen).' },
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
