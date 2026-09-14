import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Liste, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-1', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 1?' },
  { id: 'leistungen', title: 'Leistungen 2026' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'beantragen', title: 'Beantragen & Tipps' },
  { id: 'pg2', title: 'Wann wird PG 2 sinnvoll?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 1 — Leistungen, Entlastungsbetrag & Beantragen 2026 | Primundus',
  description: 'Pflegegrad 1 einfach erklärt: Voraussetzungen ab 12,5 NBA-Punkten, Leistungen wie Entlastungsbetrag und Pflegehilfsmittel, und wann sich ein Antrag lohnt.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-1' },
  openGraph: {
    title: 'Pflegegrad 1 — Leistungen & Entlastungsbetrag 2026 | Primundus',
    description: 'Pflegegrad 1: 131 € Entlastungsbetrag, kein Pflegegeld. Voraussetzungen und wann PG 2 sinnvoller ist.',
    url: 'https://primundus.de/pflegegrad-1',
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
    headline: 'Pflegegrad 1 — Leistungen, Entlastungsbetrag & Beantragen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-1',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 1', item: 'https://primundus.de/pflegegrad-1' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 1?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 1 gibt es 131 € Entlastungsbetrag pro Monat — kein Pflegegeld, keine Pflegesachleistungen. Der Entlastungsbetrag ist zweckgebunden für anerkannte Betreuungs- und Entlastungsangebote.' } },
      { '@type': 'Question', name: 'Was sind die Voraussetzungen für Pflegegrad 1?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 1 wird vergeben wenn im NBA-Begutachtungsverfahren 12,5 bis 26,9 Punkte erreicht werden — geringe Beeinträchtigung der Selbstständigkeit in mindestens einem Lebensbereich.' } },
      { '@type': 'Question', name: 'Wie unterscheidet sich PG 1 von PG 2?', acceptedAnswer: { '@type': 'Answer', text: 'Bei PG 1 gibt es nur den Entlastungsbetrag (131 €/Monat), kein Pflegegeld und keine Sachleistungen. Bei PG 2 kommen 347 € Pflegegeld, 796 € Sachleistungen und 3.539 € Entlastungsbudget/Jahr dazu. Wer zwischen PG 1 und 2 steht, sollte die Begutachtung sorgfältig vorbereiten.' } },
    ],
  },
]

export default function Pflegegrad1() {
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
            { label: "Pflegegrade", href: "/pflegegrade" },
            { label: "Pflegegrad 1" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad 1 — Leistungen & was möglich ist"
          einleitung="Pflegegrad 1 ist die niedrigste Einstufung und bedeutet geringe Beeinträchtigung der Selbstständigkeit. Es gibt keinen Pflegegeld-Anspruch — aber den Entlastungsbetrag von 131 Euro pro Monat, Wohnraumanpassungsförderung und Pflegehilfsmittel. Wer zwischen PG 1 und 2 liegt, sollte die Begutachtung gut vorbereiten — die Unterschiede bei den Leistungen sind erheblich."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blick={[
                'Kein Pflegegeld bei PG 1 — nur Entlastungsbetrag 131 €/Monat',
                'Entlastungsbetrag: zweckgebunden für anerkannte Betreuungsangebote',
                'Wohnraumanpassung: bis 4.180 € je Maßnahme',
                'Pflegehilfsmittel: 42 €/Monat für Verbrauchsmittel',
                'Voraussetzung: 12,5–26,9 Punkte im NBA-Verfahren',
                'Kein Entlastungsbudget (Verhinderungs-/Kurzzeitpflege) bei PG 1',
              ]}
          blickTitel="Auf einen Blick — Pflegegrad 1"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was bedeutet Pflegegrad 1?">
            <Text>
              Pflegegrad 1 bedeutet <strong>geringe Beeinträchtigung der Selbstständigkeit</strong> in mindestens einem Lebensbereich. Betroffene können die meisten Alltagsaktivitäten noch selbst bewältigen, benötigen aber in einzelnen Bereichen Unterstützung oder Beaufsichtigung.
            </Text>
            <Text>
              Typische Situationen bei PG 1: Beginnendes Vergessen im Alter, leichte Mobilitätseinschränkungen die noch keine umfangreiche Pflege erfordern, Unterstützungsbedarf bei einzelnen Haushaltsaufgaben, leichte kognitive Beeinträchtigungen.
            </Text>
            <Kasten titel="Wichtig: Kein Pflegegeld bei PG 1" ton="koralle">
              <Text>Pflegegrad 1 hat keinen Anspruch auf Pflegegeld und keine Pflegesachleistungen. Der einzige monatliche Kassenbeitrag ist der Entlastungsbetrag (131 €/Monat) — zweckgebunden, nicht frei verwendbar. Wer mehr Unterstützung braucht, sollte prüfen ob PG 2 realistisch ist.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Leistungen bei Pflegegrad 1 — 2026">
            <Tabelle
              titel=""
              zeilen={[
                ['Pflegegeld', '—', 'Kein Anspruch bei PG 1'],
                ['Pflegesachleistungen', '—', 'Kein Anspruch bei PG 1'],
                ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote, zweckgebunden'],
                ['Entlastungsbudget', '—', 'Nur ab PG 2'],
                ['Pflegehilfsmittel', '42 €/Monat', 'Verbrauchsmittel wie Handschuhe, Desinfektionsmittel'],
                ['Wohnraumanpassung', 'bis 4.180 €/Maßnahme', 'Treppenlift, Haltegriffe, Badumbau'],
                ['Beratungsanspruch', '✓', 'Kostenlose Pflegeberatung nach § 7a SGB XI'],
              ]}
              betont={1}
            />
            <MehrDazu
              label="Entlastungsbetrag richtig nutzen:"
              links={[{ href: "/entlastungsbetrag", text: "Entlastungsbetrag 2026 — 131 €/Monat" }]}
            />
          </Abschnitt>

          <Abschnitt id="voraussetzungen" titel="Voraussetzungen — wann wird PG 1 vergeben?">
            <Text>
              Pflegegrad 1 erfordert <strong>12,5 bis 26,9 Punkte</strong> im NBA-Begutachtungsverfahren des Medizinischen Dienstes. Die Einschränkungen müssen voraussichtlich mindestens 6 Monate andauern.
            </Text>
            <Text>
              Mit 27 Punkten oder mehr erfolgt die Einstufung in Pflegegrad 2 — das bedeutet Pflegegeld, Sachleistungen und das Entlastungsbudget. Der Unterschied von einem Punkt kann monatlich über 500 Euro Kassenzuschuss ausmachen. Eine gute Vorbereitung der Begutachtung ist deshalb besonders wichtig.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="beantragen"
            titel="Beantragen & Begutachtung vorbereiten"
            einleitung="Der Antrag läuft wie bei allen Pflegegraden über die Pflegekasse. Besonders bei PG 1 gilt: Gut vorbereiten — denn der Unterschied zu PG 2 entscheidet über hunderte Euro monatlich."
            punkte={[
              { title: 'Pflegetagebuch führen', desc: 'Auch bei geringem Hilfebedarf: 1–2 Wochen dokumentieren was täglich gebraucht wird. Scheinbar kleine Hilfen summieren sich und können den Ausschlag geben.' },
              { title: 'Nichts beschönigen', desc: 'Besonders bei leichtem Pflegebedarf neigen Betroffene dazu zu minimieren. Alles was nicht ohne Hilfe oder mit erheblicher Anstrengung geht, gehört geschildert.' },
              { title: 'Vertrauensperson mitnehmen', desc: 'Angehörige können Details ergänzen die der Pflegebedürftige vergisst oder aus Scham weglässt.' },
            ]}
          >
            <MehrDazu
              label="Alle Tipps:"
              links={[{ href: "/pflegegrad-begutachtung-vorbereiten", text: "MD-Begutachtung vorbereiten — Checkliste & 7 Tipps" }, { href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="pg2" titel="Wann wird Pflegegrad 2 sinnvoller?">
            <Text>
              Der Sprung von PG 1 zu PG 2 ist finanziell enorm. Bei PG 2 kommen Pflegegeld (347 €/Monat), Sachleistungen (796 €/Monat) und das Entlastungsbudget (3.539 €/Jahr) dazu. Wer mit PG 1 eingestuft wurde, sollte prüfen ob eine Höherstufung realistisch ist.
            </Text>
            <Liste punkte={[
              'Hilfebedarf hat zugenommen — neue Diagnosen oder Verschlechterungen',
              'Die Begutachtung war schlecht vorbereitet — kein Pflegetagebuch, zu wenig geschildert',
              'Demenz oder kognitive Einschränkungen wurden nicht ausreichend berücksichtigt',
              'Mehrere Lebensbereiche sind betroffen aber wurden einzeln als zu gering bewertet',
            ]} />
            <MehrDazu
              label="Nächste Stufe:"
              links={[{ href: "/pflegegrad-2", text: "Pflegegrad 2 — Leistungen & Beträge" }, { href: "/pflegegrad-widerspruch-einlegen", text: "Widerspruch einlegen wenn Einstufung zu niedrig" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu Pflegegrad 1">
            <Fragen
              fragen={[
                { q: 'Was bekommt man bei Pflegegrad 1?', a: '131 € Entlastungsbetrag/Monat — kein Pflegegeld, keine Sachleistungen, kein Entlastungsbudget. Dazu Pflegehilfsmittel (42 €/Monat) und Wohnraumanpassungsförderung (bis 4.180 € je Maßnahme).' },
                { q: 'Was sind die Voraussetzungen für Pflegegrad 1?', a: '12,5–26,9 Punkte im NBA-Begutachtungsverfahren. Geringe Beeinträchtigung der Selbstständigkeit in mindestens einem Lebensbereich. Pflegebedarf muss voraussichtlich mindestens 6 Monate andauern.' },
                { q: 'Wie unterscheidet sich PG 1 von PG 2?', a: 'PG 1: nur 131 € Entlastungsbetrag. PG 2: zusätzlich 347 € Pflegegeld, 796 € Sachleistungen und 3.539 € Entlastungsbudget/Jahr. Der Unterschied ist finanziell erheblich.' },
                { q: 'Kann man von PG 1 auf PG 2 hochgestuft werden?', a: 'Ja — jederzeit wenn sich der Pflegebedarf verschlechtert hat oder die erste Begutachtung nicht gut vorbereitet war. Antrag auf Höherstufung bei der Pflegekasse stellen.' },
                { q: 'Hat man bei PG 1 Anspruch auf 24h-Pflege?', a: 'Einen Rechtsanspruch auf Sachleistungen hat man ab PG 2. Bei PG 1 ist 24h-Pflege aber möglich — die Kosten müssen selbst getragen werden, nur der Entlastungsbetrag (131 €/Monat) kann für Betreuungsangebote genutzt werden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-1" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
