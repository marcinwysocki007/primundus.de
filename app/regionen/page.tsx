import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Punkte, RatgeberKopf, RatgeberRumpf, Text } from '@/components/vorlage/Ratgeber'
import { MartaBand } from '@/components/vertrauen/Vertrauen'
import { RegionenSearch } from '@/components/RegionenSearch'
import { AllRegionsIndex } from '@/components/CityIndex'
import { STAEDTE } from '@/lib/staedte'
import { ArticleTOC } from '@/components/ArticleTOC'

// Regionen-Übersicht in der Seitenvorlage (20.09.2026). Die Seite ist ein Ziel der Anzeigen-Sitelinks: URL und Zweck bleiben.
// Die Liste A–Z bleibt (Martin 20.09.: „nicht wegnehmen, weil das SEO relevant sein kann"), kommt jetzt aber aus lib/staedte.ts,
// derselben Quelle wie der Index nach Bundesland; damit sind es 194 statt 176 Orte und die Daten stehen nur einmal im Code.
// Raus: die 225 Orte als Datenliste in der Seite. Die Suche holt ihre Treffer seit Langem über /api/orte-suche; der Prop wurde
// ignoriert, die Liste wurde nur mitgeliefert (Seitengewicht). Der Kasten „Ihre Stadt nicht dabei?" mit eigenem Nummern-Knopf
// wird der Standard-Kontakt (Marta-Band).

export const metadata: Metadata = {
  title: '24h-Pflege in Ihrer Region — alle Städte & Bundesländer',
  description: 'Eigene Betreuungskräfte in ganz Deutschland: Ort oder Postleitzahl eingeben und die Seite für Ihre Stadt öffnen. Alle Städte und Bundesländer.',
  alternates: { canonical: 'https://primundus.de/regionen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege in Ihrer Region | Primundus',
    description: 'PLZ oder Ort eingeben — 24h-Pflege in Ihrer Stadt finden.',
    url: 'https://primundus.de/regionen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege in Ihrer Region', item: 'https://primundus.de/regionen' },
    ],
  },
])

const bundeslaender = [
  { slug: 'baden-wuerttemberg', name: 'Baden-Württemberg', kuerzel: 'BW', staedte: 'Stuttgart, Mannheim, Karlsruhe, Freiburg, Heidelberg u.v.m.' },
  { slug: 'bayern', name: 'Bayern', kuerzel: 'BY', staedte: 'München, Nürnberg, Augsburg, Würzburg, Regensburg u.v.m.' },
  { slug: 'berlin', name: 'Berlin', kuerzel: 'BE', staedte: 'Alle 12 Berliner Bezirke' },
  { slug: 'brandenburg', name: 'Brandenburg', kuerzel: 'BB', staedte: 'Potsdam, Cottbus, Brandenburg a.d.H. u.v.m.' },
  { slug: 'bremen', name: 'Bremen', kuerzel: 'HB', staedte: 'Bremen und Bremerhaven' },
  { slug: 'hamburg', name: 'Hamburg', kuerzel: 'HH', staedte: 'Alle 7 Hamburger Bezirke' },
  { slug: 'hessen', name: 'Hessen', kuerzel: 'HE', staedte: 'Frankfurt, Wiesbaden, Kassel, Darmstadt, Offenbach u.v.m.' },
  { slug: 'mecklenburg-vorpommern', name: 'Mecklenburg-Vorpommern', kuerzel: 'MV', staedte: 'Rostock, Schwerin, Greifswald, Stralsund u.v.m.' },
  { slug: 'niedersachsen', name: 'Niedersachsen', kuerzel: 'NI', staedte: 'Hannover, Braunschweig, Wolfsburg, Osnabrück u.v.m.' },
  { slug: 'nordrhein-westfalen', name: 'Nordrhein-Westfalen', kuerzel: 'NRW', staedte: 'Köln, Düsseldorf, Dortmund, Essen, Bonn u.v.m.' },
  { slug: 'rheinland-pfalz', name: 'Rheinland-Pfalz', kuerzel: 'RP', staedte: 'Mainz, Koblenz, Trier, Kaiserslautern u.v.m.' },
  { slug: 'saarland', name: 'Saarland', kuerzel: 'SL', staedte: 'Saarbrücken, Neunkirchen, Homburg u.v.m.' },
  { slug: 'sachsen', name: 'Sachsen', kuerzel: 'SN', staedte: 'Dresden, Leipzig, Chemnitz, Zwickau u.v.m.' },
  { slug: 'sachsen-anhalt', name: 'Sachsen-Anhalt', kuerzel: 'ST', staedte: 'Halle, Magdeburg, Dessau-Roßlau u.v.m.' },
  { slug: 'schleswig-holstein', name: 'Schleswig-Holstein', kuerzel: 'SH', staedte: 'Kiel, Lübeck, Flensburg, Neumünster u.v.m.' },
  { slug: 'thueringen', name: 'Thüringen', kuerzel: 'TH', staedte: 'Erfurt, Jena, Gera, Weimar u.v.m.' },
]


const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-regionen'

const staedteAlpha = [...STAEDTE].sort((a, b) => a.name.localeCompare(b.name, 'de'))
const buchstaben = Array.from(new Set(staedteAlpha.map((s) => s.name[0].toUpperCase()))).sort((a, b) => a.localeCompare(b, 'de'))

const SECTIONS = [
  { id: 'suche', title: 'Ort oder Postleitzahl' },
  { id: 'bundeslaender', title: 'Nach Bundesland' },
  { id: 'staedte', title: 'Städte A–Z' },
  { id: 'orte', title: 'Nach Bundesland sortiert' },
  { id: 'nicht-dabei', title: 'Stadt nicht dabei?' },
]

export default function RegionenHub() {
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
            { label: '24h-Pflege in Ihrer Region' },
          ]}
          augenbraue="Regionen"
          titel="24-Stunden-Pflege in Ihrer Region finden"
          einleitung="Unsere Betreuungskräfte sind in ganz Deutschland im Einsatz, in der Großstadt wie auf dem Land. Suchen Sie Ihren Ort oder Ihre Postleitzahl, oder wählen Sie Ihr Bundesland."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="suche" titel="Ort oder Postleitzahl eingeben">
            <RegionenSearch />
          </Abschnitt>

          <Abschnitt id="bundeslaender" titel="Nach Bundesland">
            <Punkte
              punkte={[
                { title: l('/24h-pflege-baden-wuerttemberg', 'Baden-Württemberg'), desc: 'Stuttgart, Mannheim, Karlsruhe, Freiburg, Heidelberg u.v.m.' },
                { title: l('/24h-pflege-bayern', 'Bayern'), desc: 'München, Nürnberg, Augsburg, Würzburg, Regensburg u.v.m.' },
                { title: l('/24h-pflege-berlin', 'Berlin'), desc: 'Alle 12 Berliner Bezirke' },
                { title: l('/24h-pflege-brandenburg', 'Brandenburg'), desc: 'Potsdam, Cottbus, Brandenburg a.d.H. u.v.m.' },
                { title: l('/24h-pflege-bremen', 'Bremen'), desc: 'Bremen und Bremerhaven' },
                { title: l('/24h-pflege-hamburg', 'Hamburg'), desc: 'Alle 7 Hamburger Bezirke' },
                { title: l('/24h-pflege-hessen', 'Hessen'), desc: 'Frankfurt, Wiesbaden, Kassel, Darmstadt, Offenbach u.v.m.' },
                { title: l('/24h-pflege-mecklenburg-vorpommern', 'Mecklenburg-Vorpommern'), desc: 'Rostock, Schwerin, Greifswald, Stralsund u.v.m.' },
                { title: l('/24h-pflege-niedersachsen', 'Niedersachsen'), desc: 'Hannover, Braunschweig, Wolfsburg, Osnabrück u.v.m.' },
                { title: l('/24h-pflege-nordrhein-westfalen', 'Nordrhein-Westfalen'), desc: 'Köln, Düsseldorf, Dortmund, Essen, Bonn u.v.m.' },
                { title: l('/24h-pflege-rheinland-pfalz', 'Rheinland-Pfalz'), desc: 'Mainz, Koblenz, Trier, Kaiserslautern u.v.m.' },
                { title: l('/24h-pflege-saarland', 'Saarland'), desc: 'Saarbrücken, Neunkirchen, Homburg u.v.m.' },
                { title: l('/24h-pflege-sachsen', 'Sachsen'), desc: 'Dresden, Leipzig, Chemnitz, Zwickau u.v.m.' },
                { title: l('/24h-pflege-sachsen-anhalt', 'Sachsen-Anhalt'), desc: 'Halle, Magdeburg, Dessau-Roßlau u.v.m.' },
                { title: l('/24h-pflege-schleswig-holstein', 'Schleswig-Holstein'), desc: 'Kiel, Lübeck, Flensburg, Neumünster u.v.m.' },
                { title: l('/24h-pflege-thueringen', 'Thüringen'), desc: 'Erfurt, Jena, Gera, Weimar u.v.m.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="staedte" titel="Alle Städte von A bis Z">
            <Text>{staedteAlpha.length} Orte mit eigener Seite, alphabetisch sortiert.</Text>
            <div className="grid gap-5">
              {buchstaben.map((buchstabe) => (
                <div key={buchstabe}>
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-[15px] font-bold text-pm-taupe">{buchstabe}</span>
                    <span aria-hidden="true" className="h-px flex-1 bg-pm-line" />
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-3">
                    {staedteAlpha
                      .filter((s) => s.name[0].toUpperCase() === buchstabe)
                      .map((s) => (
                        <a key={s.slug} href={`/24h-pflege-${s.slug}`} className="py-1 text-[16px] leading-[1.5] text-pm-body hover:text-pm-taupe-ink">
                          {s.name}
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </Abschnitt>

          <Abschnitt id="orte" titel="Alle Einsatzorte nach Bundesland">
            <Text>
              Klicken Sie Ihren Ort an: Dort stehen Preise, Ablauf und die Ansprechpartnerin für Ihre Region.
            </Text>
            <AllRegionsIndex />
          </Abschnitt>

          <Abschnitt id="nicht-dabei" titel="Ihre Stadt ist nicht dabei?">
            <Text>
              Unsere Betreuungskräfte sind auch dort im Einsatz, wo wir keine eigene Seite haben. Ihren Preis und passende
              Pflegekräfte sehen Sie im Kostenrechner, für alles andere sind Marta Kapcio und ihr Team täglich von 8 bis 20 Uhr da.
            </Text>
            <MartaBand eingebettet />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
