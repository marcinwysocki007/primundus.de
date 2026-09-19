import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann } from '@/components/vorlage/Ratgeber'
import { ArticleTOC } from '@/components/ArticleTOC'

// Übersicht in der Seitenvorlage (19.09.2026, scripts/codemods/17-uebersichten.py; Muster /finanzierung). Linklisten
// unverändert übernommen, Einleitung ohne Gedankenstrich-Kette; Sonderblöcke und Korrekturen siehe SEITEN im Skript.

export const metadata: Metadata = {
  title: 'Rechtliches zur 24h-Pflege — alle rechtlichen Aspekte',
  description: 'Rechtliches zur 24h-Pflege: Beschäftigungsmodelle, Scheinselbstständigkeit vermeiden, Pflegevertrag, Vorsorgevollmacht, Patientenverfügung und Steuerrecht.',
  alternates: { canonical: 'https://primundus.de/rechtliches' },
  openGraph: {
    title: 'Rechtliches zur 24h-Pflege | Primundus',
    description: 'Alle rechtlichen Aspekte der 24h-Pflege — Beschäftigung, Verträge, Steuern.',
    url: 'https://primundus.de/rechtliches',
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
      { '@type': 'ListItem', position: 3, name: 'Rechtliches & Vorsorge', item: 'https://primundus.de/rechtliches' },
    ],
  },
])

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'rechtssichere-beschaeftigung-von-pflegekraeften', title: 'Rechtssichere Beschäftigung von Pflegekräften' },
  { id: 'vertraege-und-vollmachten', title: 'Verträge & Vollmachten' },
  { id: 'steuern-und-sozialversicherung', title: 'Steuern & Sozialversicherung' },
]

export default function Rechtliches() {
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
            { label: 'Rechtliches & Vorsorge' },
          ]}
          augenbraue="Ratgeber"
          titel="Rechtliches & Vorsorge"
          einleitung="Rechtssichere Beschäftigung, Verträge, Vollmachten und Steuern: alle rechtlichen Themen rund um die 24-Stunden-Pflege."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Häufigstes Risiko" titel="Scheinselbstständigkeit">
              <Text>
                Wer eine „selbstständige“ Betreuungskraft im Haushalt beschäftigt, riskiert in der Regel Scheinselbstständigkeit:
                Sozialversicherungsbeiträge können für bis zu vier Jahre nachgefordert werden, dazu Bußgelder, bei Vorsatz ein
                Strafverfahren. Sicher ist das Entsendemodell: Die Betreuungskraft ist beim Anbieter angestellt, für jeden Einsatz
                liegt eine A1-Bescheinigung vor.
              </Text>
              <MehrDazu label="Mehr dazu:" links={[{ href: '/rechtssicher', text: 'So stellt Primundus das sicher' }]} />
            </Kasten>
          </Vorspann>

          <Abschnitt id="rechtssichere-beschaeftigung-von-pflegekraeften" titel="Rechtssichere Beschäftigung von Pflegekräften">
            <Punkte
              punkte={[
                { title: l('/pflegekraft-legal-beschaeftigen', 'Pflegekraft legal beschäftigen'), desc: 'Die 3 legalen Modelle — Entsendemodell, Direktanstellung, Scheinselbstständigkeit — erklärt und verglichen.' },
                { title: l('/scheinselbststaendigkeit-pflege-vermeiden', 'Scheinselbstständigkeit vermeiden'), desc: 'Was Scheinselbstständigkeit ist, woran die Behörden sie erkennen und wie man das Risiko vollständig vermeidet.' },
                { title: l('/pflegevertrag-aufsetzen', 'Pflegevertrag aufsetzen'), desc: 'Was in jeden Pflegevertrag gehört — Leistungsumfang, Vergütung, Kündigung, Kost und Logis.' },
                { title: l('/eu-pflegekraft-rechte-pflichten', 'EU-Pflegekraft: Rechte & Pflichten'), desc: 'Was das A1-Entsendemodell bedeutet und welche Regeln für EU-Pflegekräfte gelten.' },
                { title: l('/haftung-pflegehaushalt', 'Haftung im Pflegehaushalt'), desc: 'Wer haftet bei Schäden: Familie, Anbieter oder Betreuungskraft?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vertraege-und-vollmachten" titel="Verträge & Vollmachten">
            <Punkte
              punkte={[
                { title: l('/vorsorgevollmacht-erstellen', 'Vorsorgevollmacht erstellen'), desc: 'Was eine Vorsorgevollmacht regelt, wie man sie erstellt und warum jeder sie braucht.' },
                { title: l('/patientenverfuegung-aufsetzen', 'Patientenverfügung aufsetzen'), desc: 'Was hineingehört, wie man sie gültig erstellt — Anleitung und Muster.' },
                { title: l('/betreuungsverfuegung-erstellen', 'Betreuungsverfügung erstellen'), desc: 'Wann eine Betreuungsverfügung sinnvoll ist und was sie von der Vollmacht unterscheidet.' },
                { title: l('/pflegevertrag-muster-vorlage', 'Pflegevertrag Muster & Vorlage'), desc: 'Musterpflegevertrag mit allen Pflichtangaben — als Vorlage zum Download.' },
                { title: l('/werkvertrag-pflegekraft-muster', 'Werkvertrag Pflegekraft Muster'), desc: 'Vorlage und wichtige Hinweise zum Werkvertrag in der Pflege.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="steuern-und-sozialversicherung" titel="Steuern & Sozialversicherung">
            <Punkte
              punkte={[
                { title: l('/pflege-steuerlich-absetzen', 'Pflege steuerlich absetzen'), desc: 'Bis zu 4.000 €/Jahr Steuerersparnis — was absetzbar ist und wie man es richtig macht.' },
                { title: l('/pflegekraft-sozialversicherung-anmelden', 'Pflegekraft Sozialversicherung anmelden'), desc: 'Was bei Direktanstellung zu tun ist — Kranken-, Renten-, Pflegeversicherung.' },
                { title: l('/datenschutz-pflegesituation', 'Datenschutz in der Pflegesituation'), desc: 'Was Familien und Pflegekräfte bei Gesundheitsdaten beachten müssen.' },
                { title: l('/pflegezeit-gesetz-angehoerige', 'Pflegezeit-Gesetz für Angehörige'), desc: 'Freistellung, Pflegeunterstützungsgeld, kurzzeitige Arbeitsverhinderung — alle Rechte.' },
                { title: l('/widerspruch-pflegekasse-einlegen', 'Widerspruch Pflegekasse einlegen'), desc: 'Widerspruch gegen Pflegekassen-Bescheid — Fristen, Formulierungen, Erfolgschancen.' },
                { title: l('/mdk-begutachtung-tipps', 'MDK-Begutachtung — Tipps'), desc: 'Was beim Gutachtertermin zählt und wie man die Begutachtung richtig vorbereitet.' },
                { title: l('/pflegemangel-melden-beschwerden', 'Pflegemängel melden — Beschwerdewege'), desc: 'An wen sich Familien bei Mängeln wenden können und welche Rechte sie haben.' },
              ]}
            />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
