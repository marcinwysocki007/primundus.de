import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('multiple-sklerose-pflege', '25. April 2026')

const SECTIONS = [
  { id: 'ms-pflege', title: 'MS-Pflege zuhause' },
  { id: 'verlauf', title: 'Pflege je nach MS-Verlauf' },
  { id: 'alltag', title: 'Alltagsherausforderungen & Lösungen' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Multiple Sklerose Pflege zuhause — was möglich ist',
  description: 'Multiple Sklerose Pflege zuhause: Was in welchem MS-Verlauf möglich ist, konkrete Alltagstipps und ab wann eine 24h-Betreuungskraft sinnvoll wird. 2026.',
  alternates: { canonical: 'https://primundus.de/multiple-sklerose-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Multiple Sklerose Pflege zuhause | Primundus',
    description: 'Was bei MS zuhause möglich ist und ab wann 24h-Pflege sinnvoll wird.',
    url: 'https://primundus.de/multiple-sklerose-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Multiple Sklerose Pflege zuhause 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/multiple-sklerose-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Multiple Sklerose Pflege', item: 'https://primundus.de/multiple-sklerose-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Multiple Sklerose zuhause pflegen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in den meisten MS-Verläufen ist häusliche Pflege gut möglich. Bei schubförmigem MS mit stabilen Phasen ist oft ambulante Unterstützung ausreichend. Bei sekundär-progredientem oder primär-progredientem Verlauf kann eine 24h-Betreuungskraft notwendig werden.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei MS?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Einschränkungen: Leichte MS meist PG 1–2. Moderate Einschränkungen PG 2–3. Schwere Einschränkungen PG 3–4. Rollstuhlpflicht und vollständige Pflegeabhängigkeit PG 4–5. Die Einstufung hängt von den tatsächlichen Alltagsbeeinträchtigungen ab, nicht von der Diagnose allein.' } },
    ],
  },
]

export default function MultipleSklerosePflege() {
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
            { label: "Krankheiten", href: "/krankheiten" },
            { label: "Multiple Sklerose Pflege" },
          ]}
          augenbraue="Ratgeber Multiple Sklerose"
          titel="Multiple Sklerose Pflege zuhause — was möglich ist"
          einleitung="Multiple Sklerose (MS) ist eine chronisch-entzündliche Erkrankung des Nervensystems — mit sehr unterschiedlichem Verlauf. Während manche Menschen mit MS jahrzehntelang nahezu symptomfrei leben, brauchen andere bereits im mittleren Lebensalter intensive Pflege. Die häusliche Pflege ist in den meisten Stadien nicht nur möglich, sondern oft die bessere Wahl."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'MS-Pflege zuhause ist in den meisten Verläufen gut möglich',
                'Pflegebedarf variiert stark — von zeitweiser Unterstützung bis zu 24h-Betreuung',
                'Besonderheit: Fatigue (Erschöpfung) ist bei MS oft das führende Pflegeproblem',
                'Wärme verschlechtert Symptome — kühle Umgebung und Hilfsmittel wichtig',
                'Pflegegrad 1–5 je nach Einschränkungsgrad und Verlauf',
                'Kassenzuschüsse: bis 990 €/Monat Pflegegeld + 3.539 €/Jahr Entlastungsbudget',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="ms-pflege" titel="Multiple Sklerose zuhause pflegen — was möglich ist">
            <Text>
              MS verläuft sehr individuell. Der Pflegebedarf hängt vom Verlaufstyp, der bisherigen Krankheitsdauer und den betroffenen neurologischen Funktionen ab. Was bei einem Menschen mit MS vollständig erhalten ist, kann beim anderen stark beeinträchtigt sein.
            </Text>
            <Text>
              Die häusliche Pflege hat bei MS besondere Vorteile: Die vertraute Umgebung ermöglicht Selbstständigkeit durch eingeprägte Routinen, Hilfsmittel können passgenau eingerichtet werden, und die emotionale Belastung eines Heimumzugs entfällt.
            </Text>
          </Abschnitt>

          <Abschnitt id="verlauf" titel="Pflege je nach MS-Verlaufstyp">
            <Punkte
              punkte={[
                { title: 'Schubförmig-remittierend (RRMS)', desc: <><p>Häufigste Form. Schübe mit anschließender vollständiger oder teilweiser Erholung. In stabilen Phasen oft weitgehend selbstständig. Während Schüben vorübergehend mehr Unterstützung nötig.</p><p className="mt-2 font-medium text-pm-ink">Ambulante Pflege und Angehörigen-Unterstützung oft ausreichend. Krisenplan für Schübe erstellen.</p></> },
                { title: 'Sekundär-progredient (SPMS)', desc: <><p>Entwickelt sich aus RRMS. Zunehmende Behinderung auch ohne Schübe. Mobilität, Koordination, Blasenfunktion oft betroffen.</p><p className="mt-2 font-medium text-pm-ink">Steigender Pflegebedarf über Zeit. 24h-Betreuung ab mittlerer bis schwerer Beeinträchtigung sinnvoll.</p></> },
                { title: 'Primär-progredient (PPMS)', desc: <><p>Von Beginn an kontinuierliche Verschlechterung ohne Schübe. Häufig schwere Gehbehinderung.</p><p className="mt-2 font-medium text-pm-ink">24h-Betreuungskraft oft früh notwendig. Rollstuhlgerechte Wohnung und spezifische Hilfsmittel wichtig.</p></> },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Alltagsherausforderungen & Lösungen bei MS">
            <Punkte
              punkte={[
                { title: 'Fatigue (extreme Erschöpfung)', desc: 'Die MS-typische Erschöpfung ist anders als normale Müdigkeit — sie kommt plötzlich und ist lähmend. Energiemanagement ist entscheidend: wichtige Aktivitäten auf die Zeiten legen wenn Energie vorhanden ist. Pausen einplanen. Betreuungskraft übernimmt körperlich anstrengende Aufgaben damit Energie für Wichtiges bleibt.' },
                { title: 'Wärmeempfindlichkeit (Uhthoff-Phänomen)', desc: 'Wärme verschlechtert bei vielen MS-Betroffenen die Symptome vorübergehend stark. Kühle Raumtemperatur, keine heißen Bäder, Klimaanlage oder Ventilatoren im Sommer, Kühlwesten. Betreuungskraft kennt diese Reaktionen und handelt entsprechend.' },
                { title: 'Blasen- und Darmprobleme', desc: 'Blasenschwäche, Harninkontinenz und Darmprobleme sind bei MS häufig. Regelmäßige Toilettengänge einplanen, Inkontinenzmaterial, ggf. Katheterversorgung durch Pflegedienst. Betreuungskraft begleitet diskret und würdevoll.' },
                { title: 'Spastiken und Gleichgewichtsprobleme', desc: 'Sturzsicherheit hat höchste Priorität. Haltegriffe, Rollator oder Rollstuhl, rutschfeste Matten. Lagerungstechniken bei Spastiken erlernen. Physiotherapie unterstützen und begleiten.' },
                { title: 'Kognitive Einschränkungen', desc: 'Gedächtnis- und Konzentrationsprobleme bei MS sind häufig unterschätzt. Klare Strukturen, schriftliche Erinnerungen, ruhige Umgebung ohne Ablenkung. Betreuungskraft gibt Orientierung ohne zu überfordern.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad & Kassenzuschüsse bei MS">
            <Text>
              Der Pflegegrad richtet sich nach den tatsächlichen Alltagsbeeinträchtigungen — nicht nach der Diagnose. Bei MS können die Einschränkungen stark schwanken (in Schüben) oder kontinuierlich zunehmen.
            </Text>
            <Tabelle
              titel=""
              kopf={['MS-Einschränkung', 'Typischer Pflegegrad', 'Pflegegeld/Monat']}
              zeilen={[
                ['Leichte Einschränkungen, weitgehend selbstständig', 'PG 1–2', '— bis 347 €'],
                ['Moderate Einschränkungen, Hilfe bei mehreren Bereichen', 'PG 2–3', '347–599 €'],
                ['Schwere Einschränkungen, erheblicher Hilfebedarf', 'PG 3–4', '599–800 €'],
                ['Rollstuhl, vollständige Pflegeabhängigkeit', 'PG 4–5', '800–990 €'],
              ]}
              betont={2}
              fuss="Richtwerte — individuelle Einstufung durch MD · Stand 2026"
            />
            <MehrDazu
              label="Pflegegrad beantragen:"
              links={[{ href: "/pflegegrad-beantragen", text: "Schritt-für-Schritt Anleitung" }, { href: "/finanzierung", text: "Alle Kassenzuschüsse 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Kann man bei Multipler Sklerose zuhause gepflegt werden?', a: 'Ja — in den meisten MS-Verläufen ist häusliche Pflege gut möglich. Die vertraute Umgebung und eingeprägte Routinen fördern die Selbstständigkeit. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei zunehmendem Pflegebedarf möglich.' },
                { q: 'Welchen Pflegegrad bekommt man bei MS?', a: 'Je nach Einschränkungen: PG 1–2 bei leichter MS, PG 2–3 bei moderaten Einschränkungen, PG 3–4 bei schwerer MS, PG 4–5 bei Rollstuhl und vollständiger Pflegeabhängigkeit.' },
                { q: 'Was ist Fatigue bei MS und wie geht man damit um?', a: 'MS-Fatigue ist eine extreme Erschöpfung die anders ist als normale Müdigkeit — sie kommt plötzlich und kann lähmend sein. Energiemanagement ist entscheidend: wichtige Aktivitäten in Zeiten mit Energie legen, Pausen einplanen, körperlich anstrengende Aufgaben delegieren.' },
                { q: 'Warum sollte man bei MS auf Wärme achten?', a: 'Das Uhthoff-Phänomen: Wärme verschlechtert bei vielen MS-Betroffenen die Symptome vorübergehend stark. Kühle Raumtemperatur halten, keine heißen Bäder, im Sommer Ventilatoren oder Klimaanlage nutzen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="multiple-sklerose-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
