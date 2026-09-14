import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('scheinselbststaendigkeit-pflege-vermeiden', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Scheinselbstständigkeit?' },
  { id: 'kriterien', title: 'Woran erkennen Behörden sie?' },
  { id: 'folgen', title: 'Folgen & Risiken' },
  { id: 'vermeiden', title: 'Wie man das Risiko vermeidet' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Scheinselbstständigkeit in der Pflege vermeiden | Primundus',
  description: 'Scheinselbstständigkeit bei Pflegekräften: Was sie ist, woran Behörden sie erkennen, welche Folgen drohen und wie man das Risiko vollständig vermeidet.',
  alternates: { canonical: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Scheinselbstständigkeit in der Pflege vermeiden | Primundus',
    description: 'Was Scheinselbstständigkeit ist und wie man das Risiko bei der 24h-Pflege vollständig vermeidet.',
    url: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Scheinselbstständigkeit in der Pflege vermeiden',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Scheinselbstständigkeit vermeiden', item: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist Scheinselbstständigkeit in der Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Scheinselbstständigkeit liegt vor wenn eine Pflegekraft als "selbstständig" abgerechnet wird, tatsächlich aber wie eine Angestellte arbeitet: feste Arbeitszeiten, persönliche Leistungserbringung, keine eigenen Auftraggeber, kein eigenes Unternehmerrisiko. Die Behörden stufen sie als verstecktes Arbeitsverhältnis ein — mit erheblichen rechtlichen Folgen.' } },
      { '@type': 'Question', name: 'Welche Konsequenzen drohen?', acceptedAnswer: { '@type': 'Answer', text: 'Nachzahlung aller Sozialversicherungsbeiträge (Arbeitgeber- und Arbeitnehmeranteil) für bis zu 4 Jahre rückwirkend. Bußgelder. Strafrechtliche Verfolgung wegen Vorenthaltung von Sozialversicherungsbeiträgen. Die Familie haftet als Arbeitgeberin.' } },
    ],
  },
]

export default function ScheinselbststaendigkeitVermeiden() {
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
            { label: "Scheinselbstständigkeit vermeiden" },
          ]}
          augenbraue="Ratgeber Recht"
          titel="Scheinselbstständigkeit in der Pflege — was es ist & wie man es vermeidet"
          einleitung={"Tausende Familien beschäftigen \"selbstständige Pflegekräfte\" ohne zu wissen dass sie damit ein erhebliches rechtliches Risiko eingehen. Scheinselbstständigkeit bedeutet: Die Behörden werten das Verhältnis als verstecktes Arbeitsverhältnis — und fordern alle Sozialversicherungsbeiträge nach. Rückwirkend. Für bis zu vier Jahre."}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Das Risiko ist real — und wächst" ton="koralle">
              <Text>Die Behörden (Rentenversicherung, Zoll, Staatsanwaltschaft) prüfen die häusliche Pflege zunehmend aktiv. Betriebsprüfungen, Nachbarsanzeigen, Beschwerden von Konkurrenten — die Wege zur Entdeckung sind vielfältig. Wer auf Nummer sicher gehen will, wählt das Entsendemodell.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="was-ist" titel="Was ist Scheinselbstständigkeit?">
            <Text>
              Scheinselbstständigkeit liegt vor wenn jemand formal als Selbstständige(r) abgerechnet wird, die tatsächliche Tätigkeit aber einem Arbeitsverhältnis entspricht. In der Pflege ist das besonders häufig: Eine Pflegekraft, die dauerhaft in einem Haushalt tätig ist, feste Arbeitszeiten hat, persönlich leistet und kein eigenes Unternehmerrisiko trägt, ist faktisch eine Angestellte — unabhängig davon wie das Vertragsdokument es nennt.
            </Text>
            <Text>
              Der Begriff kommt daher dass Selbstständigkeit nur "vorgetäuscht" wird — um Sozialversicherungsbeiträge und Arbeitsrecht zu umgehen. Das ist strafbar.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="kriterien"
            titel="Woran erkennen Behörden Scheinselbstständigkeit?"
            einleitung="Die Deutsche Rentenversicherung prüft nach diesen Kriterien — je mehr zutreffen, desto größer das Risiko:"
            punkte={[
              { title: 'Nur ein Auftraggeber', desc: 'Wer ausschließlich für eine Familie tätig ist und keine anderen Kunden hat, ist faktisch angestellt — das ist das stärkste Indiz für Scheinselbstständigkeit.' },
              { title: 'Weisungsgebundenheit', desc: 'Wenn die Familie vorgibt wann, wie und was die Kraft zu tun hat — also Weisungen erteilt wie ein Arbeitgeber — liegt ein Arbeitsverhältnis vor.' },
              { title: 'Persönliche Leistungserbringung', desc: 'Wer keine Mitarbeiter einstellt und sich nicht vertreten lassen kann, hat kein Unternehmerrisiko — das spricht gegen echte Selbstständigkeit.' },
              { title: 'Feste Arbeitszeiten', desc: 'Feste Anwesenheitszeiten (7–19 Uhr, oder 24h) sind typisch für Angestelltenverhältnisse.' },
              { title: 'Keine eigenen Betriebsmittel', desc: 'Wer alle Arbeitsmittel vom "Auftraggeber" gestellt bekommt, trägt kein Unternehmerrisiko.' },
              { title: 'Kein eigenes Unternehmerrisiko', desc: 'Festes monatliches Entgelt unabhängig vom Arbeitsvolumen ist ein Arbeitslohn — kein Honorar.' },
            ]}
          />

          <Abschnitt id="folgen" titel="Folgen & Risiken bei Scheinselbstständigkeit">
            <Punkte
              punkte={[
                { title: 'Nachzahlung Sozialversicherungsbeiträge', desc: 'Beide Seiten — Arbeitnehmer- und Arbeitgeberanteil — werden nachgefordert. Für bis zu 4 Jahre rückwirkend. Bei Vorsatz bis zu 30 Jahre. Bei 2.000 €/Monat Honorar für 3 Jahre: leicht 40.000–50.000 € Nachforderung.' },
                { title: 'Bußgelder', desc: 'Ordnungswidrigkeiten nach SGB IV. Zusätzlich zu den Nachzahlungen.' },
                { title: 'Strafrechtliche Verfolgung', desc: 'Vorenthaltung von Sozialversicherungsbeiträgen ist eine Straftat (§ 266a StGB) — Freiheitsstrafe bis zu 5 Jahre möglich.' },
                { title: 'Nachzahlung Lohnsteuer', desc: 'Das Finanzamt fordert ebenfalls nach — Lohnsteuer wurde auf das "Honorar" nicht einbehalten.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vermeiden" titel="Wie man das Risiko vollständig vermeidet">
            <Text>
              Es gibt zwei legale Wege — mit klar unterschiedlichem Aufwand für die Familie:
            </Text>
            <Punkte
              punkte={[
                { title: 'Entsendemodell (empfohlen)', desc: 'Die Betreuungskraft ist bei einem EU-Unternehmen (z.B. in Polen, Bulgarien, Rumänien) angestellt und wird mit A1-Bescheinigung nach Deutschland entsandt. Die Familie schließt nur einen Vertrag mit der deutschen Agentur (z.B. Primundus). Kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben, vollständig rechtssicher.' },
                { title: 'Direktanstellung', desc: 'Die Familie stellt die Pflegekraft direkt an — mit deutschem Arbeitsvertrag, Anmeldung bei Sozialversicherungsträgern, Lohnabrechnung, Urlaubsplanung. Rechtssicher, aber erheblicher Verwaltungsaufwand. Auch im Krankheitsfall muss die Familie selbst für Ersatz sorgen.' },
              ]}
            />
            <MehrDazu
              label="Vollständige Erklärung:"
              links={[{ href: "/pflegekraft-legal-beschaeftigen", text: "Pflegekraft legal beschäftigen — die 3 Modelle" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist Scheinselbstständigkeit in der Pflege?', a: 'Wenn eine "selbstständige" Pflegekraft faktisch wie eine Angestellte tätig ist — feste Zeiten, nur ein Auftraggeber, persönliche Leistungserbringung. Die Behörden werten das als verstecktes Arbeitsverhältnis.' },
                { q: 'Welche Konsequenzen drohen?', a: 'Nachzahlung aller Sozialversicherungsbeiträge (bis 4 Jahre rückwirkend), Bußgelder, strafrechtliche Verfolgung nach §266a StGB (bis 5 Jahre Freiheitsstrafe). Die Familie haftet als Arbeitgeberin.' },
                { q: 'Wie vermeidet man Scheinselbstständigkeit?', a: 'Entsendemodell über eine seriöse Agentur — kein eigenes Arbeitsverhältnis, A1-Bescheinigung aus EU-Land, vollständig rechtssicher. Alternative: Direktanstellung mit Arbeitsvertrag und Sozialversicherungsanmeldung.' },
                { q: 'Ist das Entsendemodell wirklich legal?', a: 'Ja — das Entsendemodell ist nach EU-Recht und deutschem Recht vollständig legal. Die A1-Bescheinigung belegt den legalen EU-Entsendestatus. Primundus hat in 20 Jahren und 60.000+ Betreuungen kein einziges rechtliches Problem dieser Art gehabt.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="scheinselbststaendigkeit-pflege-vermeiden" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
