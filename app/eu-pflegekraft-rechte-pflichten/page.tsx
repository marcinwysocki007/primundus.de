import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('eu-pflegekraft-rechte-pflichten', '25. April 2026')

const SECTIONS = [
  { id: 'entsendemodell', title: 'Das Entsendemodell erklärt' },
  { id: 'rechte-kraft', title: 'Rechte der Betreuungskraft' },
  { id: 'pflichten-kraft', title: 'Pflichten der Betreuungskraft' },
  { id: 'rechte-familie', title: 'Rechte & Pflichten der Familie' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'EU-Pflegekraft — Rechte und Pflichten im Entsendemodell',
  description: 'EU-Pflegekraft Rechte und Pflichten: Was das Entsendemodell regelt, welche Rechte Betreuungskräfte haben und was Familien wissen müssen.',
  alternates: { canonical: 'https://primundus.de/eu-pflegekraft-rechte-pflichten' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'EU-Pflegekraft Rechte & Pflichten | Primundus',
    description: 'Rechte und Pflichten im Entsendemodell — für Betreuungskräfte und Familien.',
    url: 'https://primundus.de/eu-pflegekraft-rechte-pflichten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'EU-Pflegekraft — Rechte und Pflichten im Entsendemodell',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/eu-pflegekraft-rechte-pflichten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'EU-Pflegekraft Rechte & Pflichten', item: 'https://primundus.de/eu-pflegekraft-rechte-pflichten' },
    ],
  },
]

export default function EuPflegekraftRechtenPflichten() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: "Startseite", href: "/" },
            { label: "Rechtliches", href: "/rechtliches" },
            { label: "EU-Pflegekraft Rechte & Pflichten" },
          ]}
          augenbraue="Ratgeber Recht"
          titel="EU-Pflegekraft — Rechte & Pflichten im Entsendemodell"
          einleitung="Das Entsendemodell ist die rechtssichere Grundlage für die meisten 24h-Betreuungsverhältnisse in Deutschland. Es schützt beide Seiten — die Familie und die Betreuungskraft. Trotzdem gibt es häufige Missverständnisse: Was darf die Familie verlangen? Was hat die Kraft Anspruch auf? Dieser Ratgeber klärt auf."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="entsendemodell" titel="Das Entsendemodell — wie es funktioniert">
            <Text>
              Beim Entsendemodell ist die Betreuungskraft nicht bei der deutschen Familie angestellt — sie ist bei einem Unternehmen im EU-Heimatland (z.B. Polen, Bulgarien, Rumänien) angestellt und wird mit einer A1-Bescheinigung für typischerweise 6–8 Wochen nach Deutschland entsandt.
            </Text>
            <Punkte
              punkte={[
                { title: 'Betreuungskraft', desc: 'Angestellt beim EU-Unternehmen im Heimatland. Dort sozialversichert (Rente, Kranken-, Pflegeversicherung). A1-Bescheinigung belegt den legalen Entsendestatus in Deutschland.' },
                { title: 'EU-Unternehmen (Entsendefirma)', desc: 'Arbeitgeber der Betreuungskraft. Zahlt Lohn, stellt A1-Bescheinigung aus, ist verantwortlich für Sozialversicherungsbeiträge im Heimatland.' },
                { title: 'Deutsche Agentur (Primundus)', desc: 'Vermittelt und koordiniert. Ist Vertragspartner der deutschen Familie. Schnittstelle zwischen Familie, EU-Unternehmen und Betreuungskraft.' },
                { title: 'Familie', desc: 'Kein eigenes Arbeitsverhältnis mit der Kraft. Vertrag nur mit Primundus. Keine deutschen Sozialabgaben. A1-Bescheinigung bei Kontrollen vorzeigen.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="rechte-kraft"
            titel="Rechte der Betreuungskraft"
            einleitung="Auch im Entsendemodell gelten für entsandte Arbeitnehmer bestimmte deutsche Mindeststandards (EU-Entsenderichtlinie, § 2 AEntG). Kein seriöser Betreiber unterschreitet diese."
            punkte={[
              { title: 'Mindestlohn', desc: 'Entsandte Arbeitnehmer haben Anspruch auf den deutschen Mindestlohn (2026: 12,82 €/Stunde). Sachbezüge (Kost & Logis) können angerechnet werden.' },
              { title: 'Eigenes Zimmer & Privatsphäre', desc: 'Die Betreuungskraft hat Anspruch auf ein eigenes Zimmer mit Privatsphäre. Das ist Pflicht — kein Schlafen auf dem Sofa oder ohne abschließbaren Rückzugsort.' },
              { title: 'Ruhezeiten', desc: 'Gesetzliche tägliche Ruhezeit von mindestens 11 Stunden. Bereitschaft ist keine Arbeitszeit wenn sie tatsächlich ungestört ist.' },
              { title: 'Urlaub', desc: 'Gesetzlicher Mindesturlaub (4 Wochen/Jahr). Für die Dauer eines Einsatzes (6–8 Wochen) anteilig.' },
              { title: 'Krankenversicherung', desc: 'Über das EU-Unternehmen im Heimatland sozialversichert. Bei Erkrankung in Deutschland: Behandlung über europäische Krankenversicherungskarte (EHIC) möglich.' },
              { title: 'Würdevoller Umgang', desc: 'Die Kraft ist kein "Personal" das jederzeit Befehle entgegennehmen muss. Sie ist ein Mensch in einem Arbeitsverhältnis der Respekt verdient.' },
            ]}
          />

          <Abschnitt id="pflichten-kraft" titel="Pflichten der Betreuungskraft">
            <Punkte
              punkte={[
                { title: 'Pflege- und Betreuungsleistungen erbringen', desc: 'Die vertraglich vereinbarten Leistungen zuverlässig und sorgfältig erbringen — Körperpflege, Haushalt, Betreuung, Gesellschaft.' },
                { title: 'Verschwiegenheit', desc: 'Über alle persönlichen und gesundheitlichen Informationen des Pflegebedürftigen und der Familie ist absolute Verschwiegenheit zu wahren — auch nach dem Einsatz.' },
                { title: 'A1-Bescheinigung mitführen', desc: 'Die A1-Bescheinigung belegt den legalen Entsendestatus und muss bei einer Kontrolle durch Behörden vorgezeigt werden können.' },
                { title: 'Pünktlichkeit und Zuverlässigkeit', desc: 'An- und Abreise zum vereinbarten Zeitpunkt. Krankmeldung so früh wie möglich damit Ersatz organisiert werden kann.' },
                { title: 'Umgang mit Wertgegenständen', desc: 'Sorgfältiger Umgang mit dem Eigentum der Familie und des Pflegebedürftigen. Keine Annahme von Geldgeschenken ohne Absprache.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="rechte-familie" titel="Rechte & Pflichten der Familie">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-10">
            {[
              { aspekt: 'Familie hat Anspruch auf:', items: ['Vertragsgemäße Leistungserbringung', 'Informationen über Veränderungen im Pflegezustand', 'Verschwiegenheit über familiäre Angelegenheiten', 'A1-Bescheinigung der Kraft vorab'], positive: true },
              { aspekt: 'Familie ist verpflichtet:', items: ['Eigenes Zimmer mit Privatsphäre bereitzustellen', 'Kost und Logis zu gewähren', 'Würdevollen Umgang zu pflegen', 'Vertraglich vereinbarte Vergütung pünktlich zu zahlen (an Primundus)', 'Die Kraft nicht zu Leistungen zu verpflichten die nicht vereinbart sind'], positive: false },
            ].map((block) => (
              <div key={block.aspekt} className={`rounded-xl p-5 border ${block.positive ? 'bg-pm-mint border-[rgba(61,122,92,0.15)]' : 'bg-white border-pm-line'}`}>
                <p className={`text-[13px] font-bold uppercase tracking-[0.08em] mb-3 ${block.positive ? 'text-pm-green-deep' : 'text-pm-taupe-light'}`}>{block.aspekt}</p>
                <ul className="space-y-1">
                  {block.items.map(i => (
                    <li key={i} className={`text-[14px] flex gap-2 ${block.positive ? 'text-pm-green-deep' : 'text-pm-body'}`}>
                      <span className="flex-shrink-0">{block.positive ? '✓' : '→'}</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
            <Kasten titel="Gute Zusammenarbeit als Grundprinzip">
              <Text>Die besten Pflegeverhältnisse entstehen wenn Familie und Betreuungskraft einander mit Respekt begegnen. Eine Kraft die sich wohlfühlt und wertgeschätzt wird, bleibt länger, engagiert sich mehr und pflegt mit mehr Herz. Das liegt im Interesse aller.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Welche Rechte hat eine EU-Pflegekraft in Deutschland?', a: 'Anspruch auf deutschen Mindestlohn, eigenes Zimmer, Ruhezeiten (min. 11 Std./Tag), anteiligen Urlaub, Krankenversicherung über EHIC und würdevollen Umgang.' },
                { q: 'Muss die Familie soziale Abgaben für die EU-Pflegekraft zahlen?', a: 'Nein — beim Entsendemodell über Primundus zahlt die Familie keine deutschen Sozialabgaben. Die Kraft ist im EU-Heimatland sozialversichert.' },
                { q: 'Was passiert wenn eine EU-Pflegekraft in Deutschland krank wird?', a: 'Behandlung über europäische Krankenversicherungskarte (EHIC) möglich. Das EU-Unternehmen ist verantwortlicher Arbeitgeber. Primundus organisiert sofort Ersatzkraft.' },
                { q: 'Darf die Familie der Pflegekraft Anweisungen geben?', a: 'Im Rahmen des vereinbarten Leistungsumfangs: Ja. Aber die Kraft ist kein "Personal auf Abruf" — Grundpflicht ist die vertraglich vereinbarte Tätigkeit, nicht unbegrenzte Verfügbarkeit für beliebige Aufgaben.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="eu-pflegekraft-rechte-pflichten" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
