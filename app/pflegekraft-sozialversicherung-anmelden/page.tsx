import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegekraft-sozialversicherung-anmelden', '25. April 2026')

const SECTIONS = [
  { id: 'wann-nötig', title: 'Wann Sozialversicherung anmelden?' },
  { id: 'minijob', title: 'Minijob — Haushaltscheck' },
  { id: 'regulaer', title: 'Reguläre Beschäftigung' },
  { id: 'ablauf', title: 'Anmeldung Schritt für Schritt' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft Sozialversicherung anmelden — Anleitung 2026',
  description: 'Pflegekraft bei der Sozialversicherung anmelden: Minijob, reguläre Beschäftigung oder Entsendemodell — wann was gilt und wie die Anmeldung läuft. 2026.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft Sozialversicherung anmelden 2026 | Primundus',
    description: 'Sozialversicherungsanmeldung für Pflegekräfte — Minijob, regulär oder Entsendemodell.',
    url: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft Sozialversicherung anmelden — Anleitung 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft Sozialversicherung anmelden', item: 'https://primundus.de/pflegekraft-sozialversicherung-anmelden' },
    ],
  },
]

export default function PflegekraftSozialversicherungAnmelden() {
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
            { label: "Sozialversicherung anmelden" },
          ]}
          augenbraue="Ratgeber Recht"
          titel="Pflegekraft Sozialversicherung anmelden — Anleitung 2026"
          einleitung="Wer eine Pflegekraft direkt anstellt, wird zum Arbeitgeber — mit allen Pflichten: Sozialversicherungsanmeldung, Lohnabrechnung, Beitragsabführung. Beim Entsendemodell über Primundus entfällt das vollständig. Dieser Ratgeber erklärt beide Wege."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Entsendemodell: Keine Anmeldung durch die Familie nötig" ton="gruen">
              <Text>Beim Entsendemodell über Primundus ist die Kraft im EU-Heimatland sozialversichert und angestellt. Die Familie hat kein eigenes Arbeitsverhältnis — keine Anmeldung, keine Abgaben, kein Aufwand. A1-Bescheinigung liegt vor.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="wann-nötig" titel="Wann ist eine Sozialversicherungsanmeldung nötig?">
            <Punkte
              punkte={[
                {
                  title: 'Entsendemodell (Primundus)',
                  desc: <><strong>Keine Anmeldung</strong><br />{'Kraft ist im EU-Heimatland angestellt und sozialversichert. A1-Bescheinigung belegt das. Familie hat keine Arbeitgeberpflichten.'}</>,
                },
                {
                  title: 'Direktanstellung — Minijob (bis 556 €/Mo)',
                  desc: <><strong>Anmeldung bei der Minijob-Zentrale</strong><br />{'Pauschalabgaben: ca. 15 % Kranken-, 15 % Rentenversicherung, 2 % pauschale Lohnsteuer. Über minijob-zentrale.de.'}</>,
                },
                {
                  title: 'Direktanstellung — regulär (über 556 €/Mo)',
                  desc: <><strong>Anmeldung bei Krankenkasse + Betriebsnummer</strong><br />{'Volle Sozialversicherungsbeiträge (ca. 40 % geteilt zwischen Arbeitgeber und Arbeitnehmer). Lohnabrechnung erforderlich.'}</>,
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="minijob" titel="Minijob — Haushaltshilfe über die Minijob-Zentrale">
            <Text>
              Für einfache Haushaltshilfen (nicht 24h-Pflege) kann der Minijob-Weg sinnvoll sein. Bei vollständiger 24h-Betreuung ist der Minijob-Rahmen jedoch zu eng — der tatsächliche Lohn übersteigt 556 €/Monat fast immer erheblich.
            </Text>
            <Tabelle
              titel=""
              kopf={['Abgabe', 'Satz', 'Zahlt']}
              zeilen={[
                ['Krankenversicherung', '5 %', 'Arbeitgeber (Familie)'],
                ['Rentenversicherung', '15 %', 'Arbeitgeber (Familie)'],
                ['Rentenversicherung (AN-Anteil)', '3,6 %', 'Arbeitnehmer (kann entbinden)'],
                ['Pauschale Lohnsteuer', '2 %', 'Arbeitgeber'],
                ['Gesamt Arbeitgeber', 'ca. 22 %', 'Familie zahlt auf den Lohn oben drauf'],
              ]}
              fuss="Anmeldung über minijob-zentrale.de · Stand 2026"
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="regulaer"
            titel="Reguläre Beschäftigung — Anmeldung und Kosten"
            einleitung="Bei einer Direktanstellung mit vollem Lohn (für 24h-Betreuung typisch: 1.800–2.800 € brutto/Monat) wird die Familie zum regulären Arbeitgeber."
            punkte={[
              { title: 'Betriebsnummer beim Betriebsnummern-Service beantragen', desc: 'Kostenlos über die Bundesagentur für Arbeit (ba.de). Dauert wenige Tage.' },
              { title: 'Krankenversicherung der Kraft wählen', desc: 'Kraft wählt ihre Krankenkasse. Arbeitgeber meldet dort an.' },
              { title: 'Meldung zur Sozialversicherung an die Krankenkasse', desc: 'Bei Arbeitsbeginn (spätestens am 1. Arbeitstag) Anmeldung über DEÜV-Verfahren (digital). Steuerberater empfohlen.' },
              { title: 'Lohnabrechnung monatlich', desc: 'Gehaltsabrechnung, Beitragsabführung an Krankenkasse (für alle Zweige). Lohnsteuer ans Finanzamt.' },
            ]}
          >
            <Kasten titel="Hinweis: Direktanstellung bei 24h-Pflege ist aufwändig" ton="koralle">
              <Text>Die reguläre Direktanstellung einer 24h-Pflegekraft bedeutet erheblichen Verwaltungsaufwand: Lohnabrechnung, Urlaubsplanung, Krankenersatz, arbeitsrechtliche Verpflichtungen. Die meisten Familien wählen deshalb das Entsendemodell über Primundus.</Text>
            </Kasten>
          </DunklerAbschnitt>

          <Abschnitt id="ablauf" titel="Anmeldung Schritt für Schritt (Direktanstellung)">
            <Schritte
              schritte={[
                { title: 'Betriebsnummer beantragen', desc: 'bundesagentur.de → Betriebsnummern-Service. Kostenlos, dauert 2–3 Werktage.' },
                { title: 'Krankenversicherung der Kraft klären', desc: 'Welche Krankenkasse hat die Kraft gewählt? Diese ist Anmeldestelle für alle Sozialversicherungszweige.' },
                { title: 'DEÜV-Meldung senden', desc: 'Elektronische Meldung an die Krankenkasse spätestens am ersten Arbeitstag. Steuerberater oder Lohnbuchhaltung einschalten.' },
                { title: 'Monatliche Beiträge abführen', desc: 'Gesamtsozialversicherungsbeitrag (AN + AG-Anteil) an die Krankenkasse. Lohnsteuer ans Finanzamt.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Muss ich eine Pflegekraft aus Polen bei der Sozialversicherung anmelden?', a: 'Nicht beim Entsendemodell über Primundus — die Kraft ist im polnischen Heimatland sozialversichert (A1-Bescheinigung). Nur bei Direktanstellung (deutsches Arbeitsverhältnis) ist eine Anmeldung bei der deutschen Sozialversicherung nötig.' },
                { q: 'Was kostet die Sozialversicherung für eine Pflegekraft?', a: 'Bei regulärer Direktanstellung: ca. 20–21 % des Bruttolohns als Arbeitgeberbeitrag (Kranken-, Pflege-, Renten-, Arbeitslosenversicherung). Bei Minijob: ca. 22 % pauschal.' },
                { q: 'Wo melde ich eine Pflegekraft als Minijob an?', a: 'Über die Minijob-Zentrale (minijob-zentrale.de). Für Haushaltsbeschäftigungen gibt es ein vereinfachtes Verfahren (Haushaltsscheck).' },
                { q: 'Was wenn ich vergessen habe die Pflegekraft anzumelden?', a: 'Rückwirkende Anmeldung möglich. Alle rückständigen Beiträge werden fällig. Bei sehr langen Unterlassungen: Strafverfolgung wegen Beitragsvorenthaltung. Besser sofort nachholen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekraft-sozialversicherung-anmelden" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
