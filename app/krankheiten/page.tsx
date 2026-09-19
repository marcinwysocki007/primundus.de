import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Punkte, RatgeberKopf, RatgeberRumpf, Text } from '@/components/vorlage/Ratgeber'
import { MartaBand } from '@/components/vertrauen/Vertrauen'
import { ArticleTOC } from '@/components/ArticleTOC'

// Übersicht in der Seitenvorlage (19.09.2026, scripts/codemods/17-uebersichten.py; Muster /finanzierung). Linklisten
// unverändert übernommen, Einleitung ohne Gedankenstrich-Kette; Sonderblöcke und Korrekturen siehe SEITEN im Skript.

export const metadata: Metadata = {
  title: 'Krankheiten & Pflege zuhause — Ratgeber für alle Diagnosen',
  description: 'Pflege zuhause bei Demenz, Alzheimer, Parkinson, Schlaganfall, Herzinsuffizienz, MS und mehr. Alle Krankheits-Ratgeber von Primundus auf einen Blick.',
  alternates: { canonical: 'https://primundus.de/krankheiten' },
  openGraph: {
    title: 'Krankheiten & Pflege zuhause | Primundus',
    description: 'Ratgeber für alle Diagnosen: Demenz, Alzheimer, Parkinson, Schlaganfall, MS, Herzinsuffizienz.',
    url: 'https://primundus.de/krankheiten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Pflege bei Krankheiten', item: 'https://primundus.de/krankheiten' },
    ],
  },
])

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'demenzerkrankungen', title: 'Demenzerkrankungen' },
  { id: 'neurologische-erkrankungen', title: 'Neurologische Erkrankungen' },
  { id: 'herz-kreislauf-und-weitere-erkrankungen', title: 'Herz-Kreislauf & weitere Erkrankungen' },
  { id: 'palliativ-und-intensivpflege', title: 'Palliativ- & Intensivpflege' },
  { id: 'beratung', title: 'Beratung' },
]

export default function Krankheiten() {
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
            { label: 'Pflege bei Krankheiten' },
          ]}
          augenbraue="Ratgeber"
          titel="Pflege bei Krankheiten"
          einleitung="Jede Erkrankung stellt andere Anforderungen an die Pflege zu Hause. Hier finden Sie alle Ratgeber zu einzelnen Krankheiten, von Demenz über Parkinson und Schlaganfall bis zur Palliativpflege."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="demenzerkrankungen" titel="Demenzerkrankungen">
            <Punkte
              punkte={[
                { title: l('/demenz-pflege-zuhause', 'Demenz — Pflege zuhause'), desc: 'Was möglich ist, wie man den Alltag gestaltet und ab wann eine 24h-Kraft nötig wird.' },
                { title: l('/alzheimer-betreuung-zuhause', 'Alzheimer — Betreuung zuhause'), desc: 'Alzheimer je nach Stadium pflegen — Alltagstipps, Sicherheit und 24h-Betreuung.' },
                { title: l('/pflegegrad-bei-demenz', 'Pflegegrad bei Demenz'), desc: 'Welcher Pflegegrad bei welchem Stadium — und wie man die Begutachtung vorbereitet.' },
                { title: l('/tagesstruktur-demenz', 'Tagesstruktur bei Demenz'), desc: 'Feste Routinen als wichtigstes Werkzeug — Muster-Tagesplan und konkrete Tipps.' },
                { title: l('/kommunikation-mit-demenzkranken', 'Kommunikation mit Demenzkranken'), desc: '5 Grundprinzipien und wie man schwierige Situationen meistert.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="neurologische-erkrankungen" titel="Neurologische Erkrankungen">
            <Punkte
              punkte={[
                { title: l('/parkinson-pflege-zuhause', 'Parkinson — Pflege zuhause'), desc: 'Motorische Einschränkungen, Medikamentengabe, Alltagssicherheit bei Parkinson.' },
                { title: l('/schlaganfall-pflege-zuhause', 'Schlaganfall — Pflege zuhause'), desc: 'Was nach dem Schlaganfall zu Hause möglich ist und wie die Rehabilitation unterstützt wird.' },
                { title: l('/multiple-sklerose-pflege', 'Multiple Sklerose — Pflege'), desc: 'MS-Pflege je nach Verlaufstyp — Fatigue, Wärmeempfindlichkeit, Spastiken meistern.' },
                { title: l('/pflegegrad-nach-schlaganfall', 'Pflegegrad nach Schlaganfall'), desc: 'Welcher Pflegegrad nach dem Schlaganfall — Begutachtung und Leistungen.' },
                { title: l('/pflegegrad-bei-parkinson', 'Pflegegrad bei Parkinson'), desc: 'Einstufung und Kassenzuschüsse bei Parkinson-Erkrankung.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="herz-kreislauf-und-weitere-erkrankungen" titel="Herz-Kreislauf & weitere Erkrankungen">
            <Punkte
              punkte={[
                { title: l('/herzinsuffizienz-pflege', 'Herzinsuffizienz — Pflege'), desc: 'Tägliche Gewichtskontrolle, Medikamentengabe, Notfallzeichen erkennen.' },
                { title: l('/copd-pflege-zuhause', 'COPD — Pflege zuhause'), desc: 'Kräfte einteilen, Atemnot ruhig begleiten, Infekte fernhalten — und wann der Arzt gerufen werden muss' },
                { title: l('/diabetes-pflege-senioren', 'Diabetes — Pflege Senioren'), desc: 'Blutzuckerkontrolle, Ernährung, Fußpflege und Hypoglykämie im Pflegealltag.' },
                { title: l('/osteoporose-pflege-zuhause', 'Osteoporose — Pflege zuhause'), desc: 'Sturzprävention, Schmerzkontrolle, Mobilität erhalten bei Osteoporose.' },
                { title: l('/krebspatienten-zuhause-pflegen', 'Krebspatienten — Pflege zuhause'), desc: 'Unterstützung während Therapie und in der palliativen Phase zu Hause.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="palliativ-und-intensivpflege" titel="Palliativ- & Intensivpflege">
            <Punkte
              punkte={[
                { title: l('/palliativpflege-zuhause', 'Palliativpflege zuhause'), desc: 'Würdevolle Begleitung in der letzten Lebensphase zuhause.' },
                { title: l('/intensivpflege-zuhause', 'Intensivpflege zuhause'), desc: 'Wann Intensivpflege zu Hause möglich ist und was dafür nötig ist.' },
                { title: l('/depression-im-alter-pflege', 'Depression im Alter'), desc: 'Symptome erkennen, richtig unterstützen und therapeutische Hilfe organisieren.' },
                { title: l('/pflege-nach-op', 'Pflege nach OP & Reha'), desc: 'Entlassung aus Krankenhaus oder Reha — wie 24h-Pflege die Versorgung zuhause sichert.' },
                { title: l('/sehbehinderung-blindheit-pflege', 'Sehbehinderung & Blindheit'), desc: 'Pflege bei stark eingeschränktem Sehen — Sicherheit, Hilfsmittel und Alltag.' },
                { title: l('/inkontinenz-pflege-zuhause', 'Inkontinenz — Pflege zuhause'), desc: 'Würdevoller Umgang mit Inkontinenz im Pflegealltag.' },
                { title: l('/wunden-verbinden-zuhause', 'Wunden verbinden zuhause'), desc: 'Wundversorgung im Pflegealltag — was Laien können und wann ein Pflegedienst muss.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="beratung" titel="Ihre Erkrankung nicht gefunden?">
            <Text>
              Marta Kapcio und ihr Team beraten Sie kostenlos zu Ihrer Pflegesituation: welche Erfahrung eine Betreuungskraft
              mitbringen sollte und was die Betreuung kostet.
            </Text>
            <MartaBand eingebettet />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
