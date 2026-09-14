import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Werte,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegekraft-legal-beschaeftigen', '25. April 2026')

const SECTIONS = [
  { id: 'modelle', title: 'Die 3 Beschäftigungsmodelle' },
  { id: 'entsendemodell', title: 'Entsendemodell — der sichere Weg' },
  { id: 'direktanstellung', title: 'Direktanstellung' },
  { id: 'scheinselbststaendigkeit', title: 'Scheinselbstständigkeit vermeiden' },
  { id: 'a1-bescheinigung', title: 'Die A1-Bescheinigung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft legal beschäftigen — die 3 Modelle 2026',
  description: 'Pflegekraft legal beschäftigen: Entsendung, Anstellung oder selbstständig? Was erlaubt ist, welche Risiken drohen und woran Sie ein sauberes Modell erkennen.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-legal-beschaeftigen' },
  openGraph: {
    title: 'Pflegekraft legal beschäftigen — 3 Modelle | Primundus',
    description: 'Entsendemodell, Direktanstellung, Scheinselbstständigkeit: Was legal ist und was teuer werden kann.',
    url: 'https://primundus.de/pflegekraft-legal-beschaeftigen',
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
    headline: 'Pflegekraft legal beschäftigen — die 3 Modelle 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-legal-beschaeftigen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft legal beschäftigen', item: 'https://primundus.de/pflegekraft-legal-beschaeftigen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kann ich eine Pflegekraft legal beschäftigen?', acceptedAnswer: { '@type': 'Answer', text: 'Es gibt drei legale Wege: Das Entsendemodell (empfohlen) über eine Agentur — die Kraft ist im EU-Heimatland angestellt und kommt mit A1-Bescheinigung; die Direktanstellung — die Familie ist Arbeitgeberin; oder als angemeldete Selbstständige. Scheinselbstständigkeit ist illegal und führt zu Nachzahlungen.' } },
      { '@type': 'Question', name: 'Was ist das Entsendemodell?', acceptedAnswer: { '@type': 'Answer', text: 'Beim Entsendemodell ist die Pflegekraft bei einem Unternehmen im EU-Heimatland angestellt und wird für typischerweise 6–8 Wochen nach Deutschland entsandt. Mit A1-Bescheinigung ist sie rechtlich abgesichert. Die Familie schließt den Vertrag mit dem entsendenden Unternehmen oder einer Agentur — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.' } },
      { '@type': 'Question', name: 'Was ist Scheinselbstständigkeit?', acceptedAnswer: { '@type': 'Answer', text: 'Scheinselbstständigkeit liegt vor wenn eine Pflegekraft formal als Selbstständige bezeichnet wird, faktisch aber weisungsgebunden im Haushalt lebt und arbeitet. Die Folge: Nachzahlung aller Sozialabgaben der letzten 4 Jahre plus Bußgelder — ein erhebliches finanzielles Risiko für die Familie.' } },
      { '@type': 'Question', name: 'Was ist die A1-Bescheinigung?', acceptedAnswer: { '@type': 'Answer', text: 'Die A1-Bescheinigung ist ein EU-Dokument das belegt, dass die Pflegekraft in ihrem Heimatland (z.B. Polen) sozialversichert ist. Damit fallen in Deutschland keine Sozialabgaben an. Sie wird vom Arbeitgeber im Heimatland ausgestellt und muss bei der Kraft vorliegen.' } },
    ],
  },
]

export default function PflegekraftLegalBeschaeftigen() {
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
            { label: "Organisation", href: "/organisation" },
            { label: "Pflegekraft legal beschäftigen" },
          ]}
          augenbraue="Ratgeber Recht"
          titel="Pflegekraft legal beschäftigen — die 3 Wege"
          einleitung="Es gibt drei Wege eine Pflegekraft zu beschäftigen — nur zwei davon sind legal, einer ist eindeutig empfehlenswert. Das Entsendemodell über eine Agentur ist der rechtssicherste, unkomplizierteste und meistgenutzte Weg. Scheinselbstständigkeit dagegen ist strafbar und kostet im Ernstfall tausende Euro."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Entsendemodell: Empfohlen — Kraft ist im EU-Heimatland angestellt, A1-Bescheinigung',
                'Direktanstellung: Legal, aber hoher Aufwand für die Familie als Arbeitgeberin',
                'Scheinselbstständigkeit: Illegal — Nachzahlungen Sozialabgaben + Bußgelder',
                'A1-Bescheinigung: Muss immer vorliegen — belegt legale EU-Entsendung',
                'Mindestlohn: Auch für entsandte EU-Kräfte gilt der deutsche Mindestlohn',
                'Primundus: Ausschließlich Entsendemodell — vollständige Rechtssicherheit',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="modelle" titel="Die 3 Beschäftigungsmodelle im Überblick">
            <Text>
              Für Familien die eine 24h-Betreuungskraft suchen, gibt es drei Modelle. Sie unterscheiden sich in Rechtssicherheit, Aufwand und Kosten erheblich.
            </Text>
            <Tabelle
              titel=""
              kopf={['Modell', 'Rechtssicherheit', 'Aufwand Familie', 'Empfehlung']}
              zeilen={[
                ['Entsendemodell', '✓ Vollständig', 'Gering', '★ Empfohlen'],
                ['Direktanstellung', '✓ Legal', 'Hoch', 'Möglich'],
                ['Scheinselbstständigkeit', '✗ Illegal', '—', '✗ Verboten'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="entsendemodell"
            titel="Entsendemodell — der rechtssichere Weg"
            einleitung="Beim Entsendemodell ist die Pflegekraft bei einem Unternehmen in ihrem EU-Heimatland (z.B. Polen, Bulgarien, Rumänien) angestellt. Sie wird für typischerweise 6–8 Wochen nach Deutschland entsandt — mit A1-Bescheinigung als EU-rechtlichem Absicherungsdokument. Die Familie schließt den Vertrag mit dem entsendenden Unternehmen oder einer Agentur — bei Primundus direkt mit der PRIMUNDUS Sp. z o.o."
            punkte={[
              { title: 'Für die Familie', desc: 'Kein eigenes Arbeitsverhältnis mit der Kraft. Keine deutschen Lohnabrechnungen. Keine Sozialversicherungspflichten in Deutschland. Klare Vertragspartnerschaft mit der Agentur — bei Problemen ist die Agentur der Ansprechpartner.' },
              { title: 'Für die Betreuungskraft', desc: 'Angestellt im Heimatland mit allen Sozialversicherungsleistungen. A1-Bescheinigung sichert legalen Status in Deutschland. Regelmäßiger Wechsel alle 6–8 Wochen ermöglicht Rückkehr zur Familie.' },
              { title: 'Für die Rechtssicherheit', desc: 'Vollständig konform mit EU-Recht und deutschem Arbeitsrecht. Mindestlohn gilt auch für entsandte Kräfte. Bei Kontrolle durch Zoll oder Finanzkontrolle Schwarzarbeit: A1-Bescheinigung sofort vorzeigen.' },
            ]}
          >
            <MehrDazu
              label="Pflegekraft aus Polen im Entsendemodell:"
              links={[{ href: "/pflegekraft-aus-polen", text: "Pflegekraft aus Polen — legal & sicher" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="direktanstellung" titel="Direktanstellung — legal aber aufwendig">
            <Text>
              Die Familie stellt die Betreuungskraft selbst als Arbeitgeberin an. Das ist rechtlich eindeutig — bedeutet aber erheblichen Aufwand.
            </Text>
            <Punkte
              punkte={[
                { title: 'Was die Familie übernimmt', desc: 'Lohnabrechnung jeden Monat, Anmeldung bei Krankenkasse und Rentenversicherung, Urlaubsansprüche, Lohnfortzahlung bei Krankheit, Kündigung nach Arbeitsrecht, Suche nach Urlaubsvertretung.' },
                { title: 'Wann sinnvoll', desc: 'Wenn eine langfristige Beziehung mit einer bestimmten Kraft angestrebt wird und die Familie bereit ist, Arbeitgeberpflichten zu übernehmen. Oder wenn kein Entsendemodell verfügbar ist.' },
                { title: 'Was zu beachten ist', desc: 'Mindestlohn gilt. Arbeitszeitgesetz gilt — max. 8 Stunden täglich reguläre Arbeitszeit, Ruhezeiten müssen eingehalten werden. Wohn- und Verpflegungsleistungen können angerechnet werden.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="scheinselbststaendigkeit" titel="Scheinselbstständigkeit — das größte Risiko">
            <Text>
              Scheinselbstständigkeit liegt vor wenn eine Pflegekraft formal als Selbstständige bezeichnet wird, tatsächlich aber weisungsgebunden, dauerhaft und ausschließlich in einem Haushalt tätig ist. Das ist keine Grauzone — es ist eindeutig illegal.
            </Text>
            <Kasten augenbraue="Was Scheinselbstständigkeit konkret kostet" ton="koralle">
              <Werte
                zeilen={[
                  ['Nachzahlung Sozialabgaben', 'Arbeitgeber- und Arbeitnehmeranteil der letzten 4 Jahre'],
                  ['Bußgelder', 'Bis zu 500.000 € bei gewerbsmäßiger Scheinselbstständigkeit'],
                  ['Strafverfolgung', 'Vorenthalten von Sozialabgaben ist ein Straftatbestand'],
                  ['Rückwirkende Lohnfortzahlung', 'Urlaub, Krankheit, Mutterschutz rückwirkend nachzuzahlen'],
                ]}
              />
            </Kasten>
            <Text>
              Anzeichen für Scheinselbstständigkeit die Behörden prüfen: Die Kraft hat nur einen Auftraggeber. Sie ist in die Haushaltsorganisation vollständig eingebunden. Sie hat keine eigenen Betriebsmittel. Sie kann ihre Arbeitszeit nicht frei gestalten.
            </Text>
            <MehrDazu
              label="Mehr zum Thema:"
              links={[{ href: "/scheinselbststaendigkeit-pflege-vermeiden", text: "Scheinselbstständigkeit vermeiden — alle Risiken" }]}
            />
          </Abschnitt>

          <Abschnitt id="a1-bescheinigung" titel="Die A1-Bescheinigung — was sie bedeutet">
            <Text>
              Die A1-Bescheinigung ist das zentrale Dokument im Entsendemodell. Sie wird vom Arbeitgeber im Heimatland ausgestellt und belegt: Diese Person ist in ihrem Heimatland sozialversichert und darf deshalb in Deutschland ohne zusätzliche Sozialabgaben tätig sein.
            </Text>
            <Punkte
              punkte={[
                { title: 'Wer stellt sie aus?', desc: 'Der Arbeitgeber im Heimatland — also das polnische, bulgarische oder rumänische Pflegeunternehmen — beantragt sie bei der zuständigen Sozialversicherungsbehörde.' },
                { title: 'Was sie belegt', desc: 'Sozialversicherungspflicht im Heimatland. Dass in Deutschland keine doppelten Sozialabgaben anfallen. Dass die Entsendung zeitlich begrenzt ist (max. 24 Monate).' },
                { title: 'Was bei Kontrolle passiert', desc: 'Bei Kontrolle durch die Finanzkontrolle Schwarzarbeit (FKS) muss die A1-Bescheinigung sofort vorgezeigt werden können. Fehlt sie, können Bußgelder verhängt werden — auch gegen die Familie als Auftraggeber.' },
              ]}
            />
            <MehrDazu
              label="Vertragsgestaltung:"
              links={[{ href: "/pflegevertrag-aufsetzen", text: "Pflegevertrag aufsetzen — was muss rein?" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur legalen Beschäftigung">
            <Fragen
              fragen={[
                { q: 'Wie kann ich eine Pflegekraft legal beschäftigen?', a: 'Drei Wege: Entsendemodell über Agentur (empfohlen, kein eigenes Arbeitsverhältnis), Direktanstellung (legal, aber hoher Aufwand), oder angemeldete Selbstständigkeit (nur wenn echte unternehmerische Freiheit besteht). Scheinselbstständigkeit ist illegal.' },
                { q: 'Was ist das Entsendemodell?', a: 'Die Pflegekraft ist bei einem EU-Unternehmen angestellt und wird mit A1-Bescheinigung nach Deutschland entsandt. Die Familie hat einen Vertrag mit dem Unternehmen oder einer Agentur — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.' },
                { q: 'Was ist Scheinselbstständigkeit?', a: 'Wenn eine Pflegekraft formal als Selbstständige gilt, aber faktisch weisungsgebunden dauerhaft in einem Haushalt arbeitet. Folge: Nachzahlung aller Sozialabgaben der letzten 4 Jahre plus Bußgelder.' },
                { q: 'Was ist die A1-Bescheinigung?', a: 'EU-Dokument das belegt, dass die Pflegekraft im Heimatland sozialversichert ist. Muss bei der Kraft immer vorliegen. Bei Kontrolle sofort vorzeigen. Fehlt sie, drohen Bußgelder.' },
                { q: 'Gilt der Mindestlohn auch für Pflegekräfte aus Polen?', a: 'Ja — der deutsche Mindestlohn gilt für alle in Deutschland tätigen Personen, auch für entsandte EU-Kräfte. Beim Entsendemodell stellt das Heimatunternehmen sicher dass Mindestlohn und Arbeitszeitrecht eingehalten werden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekraft-legal-beschaeftigen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
