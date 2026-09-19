import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf } from '@/components/vorlage/Ratgeber'
import { ArticleTOC } from '@/components/ArticleTOC'

// Übersicht in der Seitenvorlage (19.09.2026, scripts/codemods/17-uebersichten.py; Muster /finanzierung). Linklisten
// unverändert übernommen, Einleitung ohne Gedankenstrich-Kette; Sonderblöcke und Korrekturen siehe SEITEN im Skript.

export const metadata: Metadata = {
  title: 'Organisation der 24h-Pflege — so geht es 2026 | Primundus',
  description: 'Organisation der 24h-Pflege: Beschäftigungsmodelle, Pflegekraft finden, Verträge, rechtliche Absicherung — alles was Familien wissen müssen.',
  alternates: { canonical: 'https://primundus.de/organisation' },
  openGraph: {
    title: 'Organisation der 24h-Pflege 2026 | Primundus',
    description: 'Beschäftigungsmodelle, Pflegekraft finden, Verträge — der vollständige Organisations-Ratgeber.',
    url: 'https://primundus.de/organisation',
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
      { '@type': 'ListItem', position: 3, name: 'Organisation', item: 'https://primundus.de/organisation' },
    ],
  },
])

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'pflegekraft-finden-und-auswaehlen', title: 'Pflegekraft finden & auswählen' },
  { id: 'rechtliches-und-vertraege', title: 'Rechtliches & Verträge' },
  { id: 'wechsel-und-laufende-betreuung', title: 'Wechsel & laufende Betreuung' },
  { id: 'koordination-und-notfall', title: 'Koordination & Notfall' },
  { id: 'hilfsmittel-und-wohnen', title: 'Hilfsmittel & Wohnen' },
]

export default function Organisation() {
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
            { label: 'Organisation' },
          ]}
          augenbraue="Ratgeber"
          titel="Organisation der 24h-Pflege"
          einleitung="Von der Suche nach der passenden Betreuungskraft bis zum laufenden Einsatz: alle Ratgeber zur Organisation der 24-Stunden-Pflege."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflegekraft-finden-und-auswaehlen" titel="Pflegekraft finden & auswählen">
            <Punkte
              punkte={[
                { title: l('/pflegekraft-finden', 'Pflegekraft finden — worauf achten?'), desc: 'Deutschkenntnisse, Erfahrung, Persönlichkeit — die wichtigsten Auswahlkriterien.' },
                { title: l('/checkliste-pflegekraft-einstellen', 'Checkliste Pflegekraft einstellen'), desc: 'Alle Schritte von der Suche bis zum ersten Einsatztag auf einen Blick.' },
                { title: l('/pflegekraft-aus-polen', 'Pflegekraft aus Polen'), desc: 'Das Entsendemodell aus Polen erklärt — rechtlicher Rahmen und Ablauf.' },
                { title: l('/pflegekraft-aus-bulgarien', 'Pflegekraft aus Bulgarien'), desc: 'Was bei Betreuungskräften aus Bulgarien rechtlich gilt.' },
                { title: l('/pflegekraft-aus-rumaenien', 'Pflegekraft aus Rumänien'), desc: 'Was bei Betreuungskräften aus Rumänien rechtlich gilt.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="rechtliches-und-vertraege" titel="Rechtliches & Verträge">
            <Punkte
              punkte={[
                { title: l('/pflegekraft-legal-beschaeftigen', 'Pflegekraft legal beschäftigen'), desc: 'Die 3 Modelle: Entsendemodell, Direktanstellung, Selbstständigkeit — mit allen Risiken.' },
                { title: l('/pflegevertrag-aufsetzen', 'Pflegevertrag aufsetzen'), desc: 'Was in jeden Pflegevertrag gehört — Leistungsumfang, Vergütung, Kündigung.' },
                { title: l('/pflegevertrag-generator', 'Pflegevertrag Generator'), desc: 'Einen Pflegevertrag online erstellen, anpassen und herunterladen.' },
                { title: l('/pflegevertrag-muster-vorlage', 'Pflegevertrag Muster & Vorlage'), desc: 'Musterpflegevertrag als Vorlage zum Download.' },
                { title: l('/scheinselbststaendigkeit-pflege-vermeiden', 'Scheinselbstständigkeit vermeiden'), desc: 'Warum Scheinselbstständigkeit ein hohes Risiko ist und wie man es vermeidet.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wechsel-und-laufende-betreuung" titel="Wechsel & laufende Betreuung">
            <Punkte
              punkte={[
                { title: l('/pflegekraft-wechseln', 'Pflegekraft wechseln'), desc: 'Wann ein Wechsel sinnvoll ist, wie er reibungslos läuft und was zu beachten ist.' },
                { title: l('/pflegekraft-kuendigen', 'Pflegekraft kündigen'), desc: 'Kündigungsfristen, Formulierungen und der richtige Weg — für alle Modelle.' },
                { title: l('/checkliste-pflegeuebernahme', 'Checkliste Pflegeübernahme'), desc: 'Alles was die neue Pflegekraft wissen muss — strukturierte Übergabe.' },
                { title: l('/pflegedokumentation-fuehren', 'Pflegedokumentation führen'), desc: 'Was dokumentiert werden muss und wie man es sinnvoll organisiert.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="koordination-und-notfall" titel="Koordination & Notfall">
            <Punkte
              punkte={[
                { title: l('/24h-pflege-organisieren', '24h-Pflege organisieren — Schritt für Schritt'), desc: 'Von der ersten Überlegung bis zur laufenden Betreuung — vollständiger Ablauf.' },
                { title: l('/pflege-aus-der-ferne-koordinieren', 'Pflege aus der Ferne koordinieren'), desc: 'Wenn Kinder nicht vor Ort sind — wie man Pflege zuverlässig aus der Distanz organisiert.' },
                { title: l('/erste-hilfe-bei-pflegenotfall', 'Erste Hilfe bei Pflegenotfall'), desc: 'Was zu tun ist wenn die Pflege plötzlich wegfällt oder ein Notfall eintritt.' },
                { title: l('/notfallplan-pflege', 'Notfallplan Pflege erstellen'), desc: 'Wer wird informiert, wer übernimmt — Notfallplan für Pflegehaushalte.' },
                { title: l('/pflegeberater-finden', 'Pflegeberater finden'), desc: 'Wann ein unabhängiger Pflegeberater hilft und wie man den richtigen findet.' },
                { title: l('/pflegestuetzpunkte-deutschland', 'Pflegestützpunkte in Deutschland'), desc: 'Kostenlose Beratung vor Ort — wo Pflegestützpunkte sind und was sie leisten.' },
                { title: l('/24-stunden-pflege-krankenhausaufenthalt', 'Betreuung nach dem Krankenhausaufenthalt'), desc: 'Entlassung steht an und niemand kann da sein? So wird die Betreuung schnell organisiert.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="hilfsmittel-und-wohnen" titel="Hilfsmittel & Wohnen">
            <Punkte
              punkte={[
                { title: l('/pflegehilfsmittel-organisieren', 'Pflegehilfsmittel organisieren'), desc: 'Welche Hilfsmittel im Pflegealltag sinnvoll sind und wie man sie bekommt.' },
                { title: l('/wohnraumanpassung-planen', 'Wohnraumanpassung planen'), desc: 'Welche Umbaumaßnahmen sinnvoll sind und wie man sie Schritt für Schritt umsetzt.' },
                { title: l('/hilfsmittel-rollstuhl-beantragen', 'Rollstuhl & Hilfsmittel beantragen'), desc: 'Rollstuhl, Pflegebett, Gehilfen — Antrag, Fristen und was die Kasse zahlt.' },
              ]}
            />
            <MehrDazu label="Schritt für Schritt:" links={[{ href: '/ablauf', text: 'So läuft die 24-Stunden-Pflege bei Primundus ab' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
