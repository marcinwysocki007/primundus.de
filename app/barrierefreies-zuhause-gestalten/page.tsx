import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('barrierefreies-zuhause-gestalten', '25. April 2026')

const SECTIONS = [
  { id: 'massnahmen', title: 'Die wichtigsten Maßnahmen' },
  { id: 'bad', title: 'Bad & WC sichern' },
  { id: 'foerderung', title: 'Förderung bis 4.180 € je Maßnahme' },
  { id: 'checkliste', title: 'Raum-für-Raum Checkliste' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Barrierefreies Zuhause gestalten — Tipps & Förderung 2026',
  description: 'Barrierefreies Zuhause: Die wichtigsten Maßnahmen, wie Pflegekasse bis 4.180 €/Maßnahme fördert und was sofort umgesetzt werden kann.',
  alternates: { canonical: 'https://primundus.de/barrierefreies-zuhause-gestalten' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Barrierefreies Zuhause gestalten 2026 | Primundus',
    description: 'Wohnraumanpassung: Maßnahmen, Förderung bis 4.180 €/Maßnahme und Checkliste.',
    url: 'https://primundus.de/barrierefreies-zuhause-gestalten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Barrierefreies Zuhause gestalten — Tipps und Förderung 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/barrierefreies-zuhause-gestalten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Barrierefreies Zuhause', item: 'https://primundus.de/barrierefreies-zuhause-gestalten' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was fördert die Pflegekasse bei der Wohnraumanpassung?', acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekasse fördert Maßnahmen zur Wohnraumanpassung mit bis zu 4.180 € je Maßnahme (§ 40 SGB XI). Bei mehreren Personen im Haushalt bis zu 16.720 €. Typische Maßnahmen: Treppenlift, Badumbau, Türverbreiterung, Haltegriffe, Rampen. Antrag vor Beginn der Maßnahme stellen.' } },
      { '@type': 'Question', name: 'Welche Maßnahmen sind die wichtigsten für ein barrierefreies Zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Maßnahmen: Badumbau (begehbare Dusche, Haltegriffe), Treppenlift oder Rampen, Türverbreiterung auf 90 cm, rutschfeste Böden, Haltegriffe an Toilette, höhenverstellbares Bett, ausreichend Beleuchtung.' } },
    ],
  },
]

export default function BarrierefreiesZuhause() {
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
            { label: "Alltag & Angehörige", href: "/alltag" },
            { label: "Barrierefreies Zuhause" },
          ]}
          augenbraue="Ratgeber Wohnen"
          titel="Barrierefreies Zuhause gestalten — Tipps & Förderung 2026"
          einleitung="Ein sicheres, barrierefreies Zuhause ist die Grundlage für häusliche Pflege. Die Pflegekasse fördert Wohnraumanpassungen mit bis zu 4.180 Euro je Maßnahme — und viele der wirksamsten Maßnahmen kosten nur wenige hundert Euro. Wichtig: Antrag vor Beginn der Maßnahme stellen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Pflegekassen-Förderung: bis 4.180 € je Maßnahme" ton="gruen">
              <Text>§40 SGB XI: Die Pflegekasse fördert Maßnahmen zur Wohnraumanpassung mit bis zu 4.180 € je Maßnahme. Bei mehreren pflegebedürftigen Personen im Haushalt bis zu 16.720 €. <strong>Wichtig: Antrag vor Beginn stellen</strong> — nachträglich wird nicht gefördert.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="massnahmen" titel="Die wichtigsten Maßnahmen im Überblick">
            <Tabelle
              titel=""
              kopf={['Maßnahme', 'Typische Kosten', 'Förderung', 'Priorität']}
              zeilen={[
                ['Haltegriffe (Bad, WC)', '50–300 €', 'Bis 4.180 €', 'Sofort'],
                ['Rutschfeste Matten/Böden', '20–200 €', 'Bis 4.180 €', 'Sofort'],
                ['Badewannenlifter', '200–800 €', 'Bis 4.180 €', 'Hoch'],
                ['Begehbare Dusche', '1.500–8.000 €', 'Bis 4.180 €', 'Hoch'],
                ['Erhöhter WC-Sitz', '30–200 €', 'Bis 4.180 €', 'Hoch'],
                ['Treppenlift', '3.000–15.000 €', 'Bis 4.180 €', 'Je nach Wohnsituation'],
                ['Türverbreiterung (auf 90 cm)', '500–3.000 €', 'Bis 4.180 €', 'Bei Rollstuhl'],
                ['Rampe statt Stufen', '300–2.000 €', 'Bis 4.180 €', 'Bei Gehbehinderung'],
                ['Höhenverstellbares Pflegebett', '500–3.000 €', 'Hilfsmittel (KV)', 'Bei Bettlägerigkeit'],
              ]}
              betont={2}
              fuss="§40 SGB XI · Antrag vor Beginn stellen · Stand 2026"
            />
          </Abschnitt>

          <Abschnitt id="bad" titel="Bad & WC sichern — die wichtigsten Räume">
            <Text>
              Bad und WC sind die gefährlichsten Räume für Senioren — nasse Böden, enge Räume, Badewannen ohne Haltegriff. Gleichzeitig sind es die Bereiche wo mit kleinem Aufwand die größte Sicherheit gewonnen wird.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-10">
            {[
              { bereich: 'Dusche & Badewanne', massnahmen: ['Haltegriffe neben Dusche und Badewanne', 'Rutschfeste Einlagen oder Matten', 'Badewannenlifter wenn Badewanne behalten wird', 'Begehbare Dusche (ebenerdig) als beste Lösung', 'Klappsitz in der Dusche'] },
              { bereich: 'WC', massnahmen: ['Haltegriffe links und rechts neben WC', 'Erhöhter WC-Sitz (10–15 cm Erhöhung)', 'Ausreichend Platz zum seitlichen Transfer (Rollstuhl)', 'WC auf Toilettenhöhe nach DIN 18040-2 (46–48 cm)'] },
              { bereich: 'Allgemeines Bad', massnahmen: ['Waschtisch griffnah und unterfahrbar (für Rollstuhl)', 'Spiegel in geeigneter Höhe', 'Ausreichende Beleuchtung ohne Blendung', 'Türöffnung nach außen oder Schiebetür (Rettungszugang)'] },
            ].map((item) => (
              <div key={item.bereich} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-3">{item.bereich}</p>
                <ul className="space-y-1">
                  {item.massnahmen.map(m => (
                    <li key={m} className="text-[14px] text-pm-body flex gap-2">
                      <span className="text-pm-green flex-shrink-0">✓</span>{m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="foerderung" titel="Förderung beantragen — so geht es">
            <Schritte
              schritte={[
                { title: 'Antrag VOR Beginn der Maßnahme stellen', desc: 'Bei der Pflegekasse (nicht Krankenkasse!) schriftlich Förderantrag stellen. Maßnahme beschreiben, Kostenvoranschlag beilegen. Nachträgliche Anträge werden nicht bewilligt.' },
                { title: 'Schriftliche Genehmigung abwarten', desc: 'Die Pflegekasse hat 3 Wochen Bearbeitungszeit. Erst nach Genehmigung mit der Maßnahme beginnen (außer bei Notfällen — dann sofort Pflegekasse anrufen).' },
                { title: 'Maßnahme durchführen', desc: 'Fachbetrieb beauftragen, Rechnung aufbewahren.' },
                { title: 'Erstattung beantragen', desc: 'Rechnung bei der Pflegekasse einreichen — bis zu 4.180 € werden erstattet.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="checkliste" titel="Raum-für-Raum Checkliste">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-4 mb-10">
            {[
              { raum: 'Eingang & Flur', punkte: ['Schwellen entfernen oder rampen', 'Breite Türen (mind. 80 cm, ideal 90 cm)', 'Haltegriffe an Haustür', 'Ausreichende Beleuchtung mit Bewegungsmelder'] },
              { raum: 'Wohnzimmer & Schlafzimmer', punkte: ['Freie Durchgänge ≥ 120 cm (Rollstuhlbreite)', 'Rutschfeste Teppiche oder befestigte Teppiche', 'Höhenverstellbares Bett', 'Nachttischlampe gut erreichbar', 'Telefon immer in Reichweite'] },
              { raum: 'Küche', punkte: ['Unterfahrbare Arbeitsflächen wenn Rollstuhl', 'Herdschutz (automatische Abschaltung)', 'Griffige Griffe an Schränken', 'Rutschfester Bodenbelag'] },
              { raum: 'Treppe', punkte: ['Handläufe beidseitig', 'Rutschfeste Stufen oder Stufenmatten', 'Treppenlift bei dauerhafter Gehbehinderung', 'Gute Beleuchtung der gesamten Treppe'] },
            ].map((item) => (
              <div key={item.raum} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-3">{item.raum}</p>
                <ul className="space-y-1">
                  {item.punkte.map(p => (
                    <li key={p} className="text-[14px] text-pm-body flex gap-2">
                      <span className="text-pm-taupe flex-shrink-0">□</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was fördert die Pflegekasse bei der Wohnraumanpassung?', a: 'Bis zu 4.180 € je Maßnahme (§40 SGB XI). Typische Maßnahmen: Treppenlift, Badumbau, Haltegriffe, Türverbreiterung, Rampen. Antrag muss vor Beginn der Maßnahme gestellt werden.' },
                { q: 'Muss man Pflegegrad haben um die Förderung zu bekommen?', a: 'Ja — Förderung nach §40 SGB XI setzt einen Pflegegrad (1–5) voraus. Der Antrag läuft über die Pflegekasse.' },
                { q: 'Welche Maßnahme hat die höchste Priorität?', a: 'Haltegriffe im Bad und an der Toilette haben das beste Kosten-Nutzen-Verhältnis — günstiger Einbau, sofort wirksam für Sturzprävention. Danach begehbare Dusche und Türschwellen entfernen.' },
                { q: 'Kann man mehrere Maßnahmen gleichzeitig fördern lassen?', a: 'Ja — jede Maßnahme kann separat bis 4.180 € gefördert werden. Bei mehreren Personen im Haushalt sogar bis 16.720 € insgesamt.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="barrierefreies-zuhause-gestalten" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
