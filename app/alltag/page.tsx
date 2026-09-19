import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Punkte, RatgeberKopf, RatgeberRumpf } from '@/components/vorlage/Ratgeber'
import { ArticleTOC } from '@/components/ArticleTOC'

// Übersicht in der Seitenvorlage (19.09.2026, scripts/codemods/17-uebersichten.py; Muster /finanzierung). Linklisten
// unverändert übernommen, Einleitung ohne Gedankenstrich-Kette; Sonderblöcke und Korrekturen siehe SEITEN im Skript.

export const metadata: Metadata = {
  title: 'Alltag & Angehörige — Ratgeber für pflegende Familien',
  description: 'Ratgeber für pflegende Angehörige: Burnout vermeiden, Pflege und Beruf vereinbaren, Vorsorgevollmacht, Patientenverfügung, Hausnotruf, barrierefreies Wohnen.',
  alternates: { canonical: 'https://primundus.de/alltag' },
  openGraph: {
    title: 'Alltag & Angehörige | Primundus',
    description: 'Alle Ratgeber für pflegende Familien — von Burnout-Prävention bis Patientenverfügung.',
    url: 'https://primundus.de/alltag',
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
      { '@type': 'ListItem', position: 3, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
    ],
  },
])

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

const SECTIONS = [
  { id: 'fuer-pflegende-angehoerige', title: 'Für pflegende Angehörige' },
  { id: 'vorsorge-und-rechtliches', title: 'Vorsorge & Rechtliches' },
  { id: 'wohnen-und-sicherheit', title: 'Wohnen & Sicherheit' },
  { id: 'beschaeftigung-und-wohlbefinden', title: 'Beschäftigung & Wohlbefinden' },
]

export default function Alltag() {
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
            { label: 'Alltag & Angehörige' },
          ]}
          augenbraue="Ratgeber"
          titel="Alltag & Angehörige"
          einleitung="Pflege betrifft den ganzen Alltag, den der Pflegebedürftigen und den ihrer Angehörigen. Hier finden Sie alle Ratgeber dazu: Entlastung für Angehörige, Vorsorge, Wohnen und Sicherheit, Beschäftigung."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="fuer-pflegende-angehoerige" titel="Für pflegende Angehörige">
            <Punkte
              punkte={[
                { title: l('/pflegende-angehoerige-unterstuetzen', 'Pflegende Angehörige unterstützen'), desc: 'Was pflegende Angehörige brauchen — Entlastung, Anerkennung und praktische Hilfen.' },
                { title: l('/burnout-pflegende-angehoerige', 'Burnout pflegender Angehöriger'), desc: 'Warnsignale erkennen, Grenzen setzen und rechtzeitig Hilfe holen.' },
                { title: l('/pflege-und-beruf-vereinbaren', 'Pflege und Beruf vereinbaren'), desc: 'Freistellungsrechte, Pflegeunterstützungsgeld, praktische Lösungen.' },
                { title: l('/wenn-eltern-pflege-verweigern', 'Wenn Eltern Pflege verweigern'), desc: 'Wie man mit Widerstand umgeht und trotzdem die Versorgung sicherstellt.' },
                { title: l('/tagesstruktur-demenz', 'Tagesstruktur bei Demenz'), desc: 'Feste Routinen als wirksamstes Mittel — Muster-Tagesplan.' },
                { title: l('/kommunikation-mit-demenzkranken', 'Kommunikation mit Demenzkranken'), desc: '5 Grundprinzipien und schwierige Situationen meistern.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vorsorge-und-rechtliches" titel="Vorsorge & Rechtliches">
            <Punkte
              punkte={[
                { title: l('/vorsorgevollmacht-erstellen', 'Vorsorgevollmacht erstellen'), desc: 'Was eine Vorsorgevollmacht regelt, wie man sie erstellt und worauf zu achten ist.' },
                { title: l('/patientenverfuegung-aufsetzen', 'Patientenverfügung aufsetzen'), desc: 'Was hineingehört, wie man sie gültig erstellt — Anleitung und Musterschreiben.' },
                { title: l('/pflege-steuerlich-absetzen', 'Pflege steuerlich absetzen'), desc: 'Bis zu 4.000 €/Jahr Steuerersparnis — was absetzbar ist und wie.' },
                { title: l('/wann-brauche-ich-24h-pflege', 'Wann brauche ich 24h-Pflege?'), desc: '10 Warnsignale und der ehrliche Selbsttest.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wohnen-und-sicherheit" titel="Wohnen & Sicherheit">
            <Punkte
              punkte={[
                { title: l('/barrierefreies-zuhause-gestalten', 'Barrierefreies Zuhause gestalten'), desc: 'Wohnraumanpassung, Fördermittel bis 4.180 €/Maßnahme, was wirklich hilft.' },
                { title: l('/hausnotruf-senioren', 'Hausnotruf für Senioren'), desc: 'Kosten, Kassenzuschuss und welche Systeme für wen geeignet sind.' },
                { title: l('/sturzpraevention-senioren', 'Sturzprävention Senioren'), desc: 'Stürze sind die häufigste Unfallursache im Alter — wie man sie verhindert.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="beschaeftigung-und-wohlbefinden" titel="Beschäftigung & Wohlbefinden">
            <Punkte
              punkte={[
                { title: l('/medikamente-senioren-verwalten', 'Medikamente für Senioren verwalten'), desc: 'Einnahmezeiten, Wechselwirkungen, Dosierungshilfen — sicher im Pflegealltag.' },
                { title: l('/beschaeftigung-senioren-zuhause', 'Beschäftigung für Senioren zuhause'), desc: 'Sinnvolle Aktivitäten die Freude machen und kognitiv fordern.' },
                { title: l('/ernaehrung-pflegebeduerftige-senioren', 'Ernährung pflegebedürftiger Senioren'), desc: 'Besondere Ernährungsbedürfnisse und praktische Lösungen im Alltag.' },
                { title: l('/bewegung-senioren-zuhause', 'Bewegung für Senioren zuhause'), desc: 'Gezielte Übungen die im Wohnzimmer möglich sind — für alle Mobilitätslevel.' },
                { title: l('/einsamkeit-senioren-bekaempfen', 'Einsamkeit im Alter bekämpfen'), desc: 'Soziale Kontakte fördern und Isolation verhindern.' },
                { title: l('/schlafprobleme-senioren-loesen', 'Schlafprobleme bei Senioren'), desc: 'Ursachen und wirksame Maßnahmen für besseren Schlaf im Alter.' },
              ]}
            />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
