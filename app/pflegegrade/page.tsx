import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, StandardUnterzeile, Tabelle } from '@/components/vorlage/Ratgeber'
import { ArticleTOC } from '@/components/ArticleTOC'

// Übersicht Pflegegrade in der Seitenvorlage (19.09.2026, Muster /finanzierung). Die drei Fragen standen bisher nur in den
// Daten für Google, nicht auf der Seite; jetzt sichtbar (eine Quelle). Raus, weil ohne Beleg: „ca. 2,5 Millionen Betroffene",
// „24h-Pflege wird ab PG 3 für viele Familien zur tragenden Versorgungsform", „Intensive 24h-Betreuung notwendig".

export const metadata: Metadata = {
  title: 'Pflegegrade — alle 5 Grade, Beträge & Leistungen 2026',
  description: 'Alle 5 Pflegegrade: Punkte, Pflegegeld 347 bis 990 € im Monat, Sachleistungen, Antrag und Begutachtung. Stand 2026.',
  alternates: { canonical: 'https://primundus.de/pflegegrade' },
  openGraph: {
    title: 'Pflegegrade — alle 5 Grade, Beträge & Leistungen 2026',
    description: 'Pflegegrade 1–5: Voraussetzungen, Pflegegeld, Sachleistungen und Beantragung. Alles erklärt.',
    url: 'https://primundus.de/pflegegrade',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Wie viele Pflegegrade gibt es?',
    a: 'Es gibt 5 Pflegegrade. PG 1 = geringe Beeinträchtigung (131 €/Monat Entlastungsbetrag, kein Pflegegeld). PG 2 = erhebliche Beeinträchtigung (347 €/Monat). PG 3 = schwere Beeinträchtigung (599 €/Monat). PG 4 = schwerste Beeinträchtigung (800 €/Monat). PG 5 = schwerste Beeinträchtigung mit besonderen Anforderungen (990 €/Monat).',
  },
  {
    q: 'Wie wird der Pflegegrad festgestellt?',
    a: 'Ein Gutachter des Medizinischen Dienstes (MD) bewertet die Selbstständigkeit in 6 Lebensbereichen nach dem NBA-Verfahren. Die Punktsumme (0–100) ergibt den Pflegegrad: 12,5–26,9 Punkte = PG 1, 27–47,4 = PG 2, 47,5–69,9 = PG 3, 70–89,9 = PG 4, 90–100 = PG 5.',
  },
  {
    q: 'Wie hoch ist das Pflegegeld bei den verschiedenen Pflegegraden 2026?',
    a: 'PG 1: kein Pflegegeld. PG 2: 347 €/Monat. PG 3: 599 €/Monat. PG 4: 800 €/Monat. PG 5: 990 €/Monat. Alle Beträge 2026 identisch zu 2025, nächste Dynamisierung frühestens Januar 2028.',
  },
]

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
])

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'grade', title: 'Alle 5 Pflegegrade' },
  { id: 'beantragen', title: 'Beantragen & Begutachtung' },
  { id: 'widerspruch', title: 'Widerspruch & Höherstufung' },
  { id: 'erkrankungen', title: 'Bei bestimmten Erkrankungen' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export default function Pflegegrade() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Pflegegrade' },
          ]}
          augenbraue="Ratgeber"
          titel="Pflegegrade 2026"
          einleitung="Alle 5 Pflegegrade: wie viele Punkte es braucht, welches Pflegegeld es gibt, wie Sie den Antrag stellen und die Begutachtung vorbereiten."
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=apex-pflegegrade', text: 'Preis & Pflegekräfte ansehen' }}
          knopfOben
          unterzeile={<StandardUnterzeile />}
          einleitungTitel="Pflegegrad in Kürze"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="grade" titel="Alle 5 Pflegegrade im Überblick">
            <Punkte
              punkte={[
                { title: l('/pflegegrad-1', 'Pflegegrad 1'), desc: <><strong className="text-pm-ink">12,5–26,9 Punkte, geringe Beeinträchtigung.</strong> Einschränkungen in mindestens einem Lebensbereich, die meisten Alltagsaktivitäten noch selbst möglich. Kein Pflegegeld, aber 131 € im Monat Entlastungsbetrag.</> },
                { title: l('/pflegegrad-2', 'Pflegegrad 2'), desc: <><strong className="text-pm-ink">27–47,4 Punkte, erhebliche Beeinträchtigung.</strong> Hilfe bei mehreren Alltagstätigkeiten nötig, vieles noch selbst möglich. Pflegegeld 347 € im Monat.</> },
                { title: l('/pflegegrad-3', 'Pflegegrad 3'), desc: <><strong className="text-pm-ink">47,5–69,9 Punkte, schwere Beeinträchtigung.</strong> Umfangreicher Hilfebedarf bei Körperpflege, Mobilität und Haushalt. Pflegegeld 599 € im Monat.</> },
                { title: l('/pflegegrad-4', 'Pflegegrad 4'), desc: <><strong className="text-pm-ink">70–89,9 Punkte, schwerste Beeinträchtigung.</strong> Vollständige oder nahezu vollständige Abhängigkeit bei Körperpflege, Mobilität und Haushalt. Pflegegeld 800 € im Monat.</> },
                { title: l('/pflegegrad-5', 'Pflegegrad 5'), desc: <><strong className="text-pm-ink">90–100 Punkte, schwerste Beeinträchtigung mit besonderen Anforderungen.</strong> Vollständige Abhängigkeit mit besonders hohem Pflegeaufwand, etwa bei Beatmung oder schwerster Demenz. Pflegegeld 990 € im Monat.</> },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="beantragen" titel="Pflegegrad beantragen und Begutachtung">
            <Punkte
              punkte={[
                { title: l('/pflegegrad-beantragen', 'Pflegegrad beantragen'), desc: 'Antrag bei der Pflegekasse Schritt für Schritt: was zu beachten ist und wie Sie sich vorbereiten.' },
                { title: l('/pflegegrad-begutachtung-vorbereiten', 'MD-Begutachtung vorbereiten'), desc: 'Pflegetagebuch führen, den schlechtesten Tag schildern: wie Sie die Begutachtung gut nutzen.' },
                { title: l('/pflegekasse-antrag-stellen', 'Pflegekasse: Antrag stellen'), desc: 'Antrag, Fristen, Formulare und was danach passiert.' },
                { title: l('/mdk-begutachtung-tipps', 'MDK-Begutachtung: Tipps'), desc: 'Was beim Gutachtertermin zählt und was Familien vorher wissen sollten.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="widerspruch" titel="Widerspruch und Höherstufung">
            <Punkte
              punkte={[
                { title: l('/pflegegrad-erhoehen', 'Pflegegrad erhöhen'), desc: 'Wann ein Antrag auf Höherstufung sinnvoll ist und wie Sie ihn stellen.' },
                { title: l('/widerspruch-pflegekasse-einlegen', 'Widerspruch einlegen'), desc: 'Widerspruch gegen den Bescheid: Fristen, Formulierungen, Erfolgsaussichten.' },
                { title: l('/pflegegrad-aenderung-melden', 'Änderung melden'), desc: 'Wann und wie Sie der Pflegekasse eine veränderte Pflegesituation melden.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="erkrankungen" titel="Pflegegrad bei bestimmten Erkrankungen">
            <Punkte
              punkte={[
                { title: l('/pflegegrad-bei-demenz', 'Pflegegrad bei Demenz'), desc: 'Wie Demenz in der Begutachtung bewertet wird und welcher Grad realistisch ist.' },
                { title: l('/pflegegrad-bei-parkinson', 'Pflegegrad bei Parkinson'), desc: 'Motorische und geistige Einschränkungen bei Parkinson richtig belegen.' },
                { title: l('/pflegegrad-nach-schlaganfall', 'Pflegegrad nach Schlaganfall'), desc: 'Welcher Pflegegrad nach einem Schlaganfall in Frage kommt und wann Sie ihn beantragen.' },
                { title: l('/pflegegrad-ohne-diagnose', 'Pflegegrad ohne Diagnose'), desc: 'Auch ohne feste Diagnose können Sie einen Pflegegrad beantragen, so geht es.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Alle Leistungen und Beträge 2026">
            <Tabelle
              kopf={['Leistung', 'PG 1', 'PG 2', 'PG 3', 'PG 4', 'PG 5']}
              zeilen={[
                ['Pflegegeld im Monat', '—', '347 €', '599 €', '800 €', '990 €'],
                ['Sachleistungen im Monat', '—', '796 €', '1.497 €', '1.859 €', '2.299 €'],
                ['Entlastungsbetrag im Monat', '131 €', '131 €', '131 €', '131 €', '131 €'],
                ['Entlastungsbudget im Jahr', '—', '3.539 €', '3.539 €', '3.539 €', '3.539 €'],
                ['Pflegehilfsmittel im Monat', '42 €', '42 €', '42 €', '42 €', '42 €'],
              ]}
              betont={[2, 3, 4, 5]}
              fuss="Quelle: GKV-Spitzenverband, SGB XI, Stand 2026 (identisch zu 2025). Sachleistungen nur für zugelassene Pflegedienste."
            />
            <MehrDazu label="Alle Zuschüsse kombinieren:" links={[{ href: '/finanzierung', text: 'Finanzierung der 24h-Pflege: alle Kassenzuschüsse 2026' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu Pflegegraden">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Welcher Grad passt?" links={[{ href: '/pflegegrad-rechner', text: 'Pflegegrad-Rechner' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
