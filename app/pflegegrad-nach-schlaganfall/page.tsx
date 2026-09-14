import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-nach-schlaganfall', '25. April 2026')

const SECTIONS = [
  { id: 'welcher-pflegegrad', title: 'Welcher Pflegegrad nach Schlaganfall?' },
  { id: 'begutachtung', title: 'Begutachtung vorbereiten' },
  { id: 'leistungen', title: 'Leistungen & Kassenzuschüsse' },
  { id: 'rehabilitation', title: 'Pflege während der Rehabilitation' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad nach Schlaganfall — welcher Grad & wie beantragen',
  description: 'Pflegegrad nach Schlaganfall: Welcher Grad ist realistisch, wie bereitet man die Begutachtung vor und welche Leistungen stehen zu? Alles erklärt für 2026.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-nach-schlaganfall' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegegrad nach Schlaganfall 2026 | Primundus',
    description: 'Welcher Pflegegrad nach Schlaganfall — Begutachtung, Leistungen und Antrag.',
    url: 'https://primundus.de/pflegegrad-nach-schlaganfall',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad nach Schlaganfall — welcher Grad und wie beantragen',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-nach-schlaganfall',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad nach Schlaganfall', item: 'https://primundus.de/pflegegrad-nach-schlaganfall' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Schwere der Folgeschäden: Leichter Schlaganfall ohne bleibende Einschränkungen: kein Pflegegrad. Mittelschwerer Schlaganfall (Halbseitenlähmung, Sprachstörungen): PG 2–3. Schwerer Schlaganfall (vollständige Pflegeabhängigkeit, Schluckstörungen, Rollstuhl): PG 3–5. Der Pflegegrad richtet sich nach den tatsächlichen Alltagseinschränkungen, nicht nach der Diagnose.' } },
    ],
  },
]

export default function PflegegradNachSchlaganfall() {
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
            { label: "Pflegegrad nach Schlaganfall" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad nach Schlaganfall — welcher Grad & wie beantragen"
          einleitung="Nach einem Schlaganfall ändert sich oft alles innerhalb von Stunden. Der Pflegegrad bestimmt welche Kassenzuschüsse zur Verfügung stehen — und sollte so früh wie möglich beantragt werden, da er rückwirkend ab Antragsdatum gilt. Welcher Pflegegrad realistisch ist, hängt vom tatsächlichen Ausmaß der Folgeschäden ab."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Wichtig: Antrag sofort stellen" ton="koralle">
              <Text>Der Pflegegrad gilt rückwirkend ab Antragsdatum — nicht ab Begutachtungstermin. Deshalb: Antrag formlos bei der Pflegekasse stellen sobald klar ist dass Pflege nötig sein wird — auch noch aus dem Krankenhaus heraus.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="welcher-pflegegrad" titel="Welcher Pflegegrad nach Schlaganfall?">
            <Text>
              Der Pflegegrad richtet sich nach den tatsächlichen Alltagseinschränkungen — nicht nach der Diagnose "Schlaganfall". Zwei Menschen mit "Schlaganfall" können völlig unterschiedliche Pflegegrade haben, je nach Schwere der Folgeschäden.
            </Text>
            <Tabelle
              titel=""
              kopf={['Folgeschäden nach Schlaganfall', 'Typischer Pflegegrad', 'Pflegegeld/Monat']}
              zeilen={[
                ['Vollständige Erholung, keine bleibenden Schäden', 'Kein PG', '—'],
                ['Leichte Einschränkungen (leichte Lähmung, Wortfindung)', 'PG 1–2', '— bis 347 €'],
                ['Mittelschwere Halbseitenlähmung, Sprachstörungen', 'PG 2–3', '347–599 €'],
                ['Schwere Einschränkungen, Rollstuhl, Schluckstörungen', 'PG 3–4', '599–800 €'],
                ['Vollständige Pflegeabhängigkeit, Bewusstseinsstörungen', 'PG 4–5', '800–990 €'],
              ]}
              betont={2}
              fuss="Richtwerte · Individuelle Einstufung durch MD · Stand 2026"
            />
            <Text>
              Wichtig: Die Begutachtung findet nach der akuten Phase statt — oft noch während der Rehabilitation. Gute Vorbereitung ist entscheidend, da der Schlaganfall-Patient beim Gutachtertermin oft besser wirkt als im Alltag.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="begutachtung"
            titel="Begutachtung nach Schlaganfall — optimal vorbereiten"
            einleitung="Schlaganfall-Patienten zeigen beim Gutachtertermin oft bessere Leistungen als im Alltag — weil Stress und Anspannung kurzzeitig mobilisieren. Deshalb ist Vorbereitung besonders wichtig."
            punkte={[
              { title: 'Pflegetagebuch führen', desc: '1–2 Wochen vor dem Termin täglich dokumentieren: Was kann der Betroffene nicht ohne Hilfe? Wie lange dauert die Morgenpflege? Wie viele Male wird nächtlich Hilfe gebraucht?' },
              { title: 'Schlechtesten Tag schildern', desc: 'Dem Gutachter den typisch schwierigen Tag beschreiben — nicht den außergewöhnlich guten. Konkrete Beispiele: "Das Ankleiden dauert 45 Minuten und braucht durchgehende Hilfe."' },
              { title: 'Alle Spezialisten miteinbeziehen', desc: 'Arztberichte von Neurologe, Physiotherapeut, Logopäde, Ergotherapeut mitbringen. Diese dokumentieren fachlich die Einschränkungen.' },
              { title: 'Vertrauensperson dabei haben', desc: 'Eine Person die den Alltag kennt und ergänzen kann wenn der Betroffene etwas vergisst oder bagatellisiert.' },
              { title: 'Kognitive Einschränkungen dokumentieren', desc: 'Konzentrationsprobleme, Gedächtnis, Wortfindungsstörungen — diese werden oft unterschätzt. Konkrete Beispiele: "Er vergisst mitten im Satz was er sagen wollte."' },
            ]}
          >
            <MehrDazu
              label="Vollständige Checkliste:"
              links={[{ href: "/pflegegrad-begutachtung-vorbereiten", text: "MD-Begutachtung vorbereiten — 7 Tipps" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="leistungen" titel="Leistungen & Kassenzuschüsse nach Schlaganfall">
            <Tabelle
              titel=""
              kopf={['Leistung', 'PG 2', 'PG 3', 'PG 4']}
              zeilen={[
                ['Pflegegeld/Monat', '347 €', '599 €', '800 €'],
                ['Sachleistungen/Monat', '796 €', '1.497 €', '1.859 €'],
                ['Entlastungsbetrag/Monat', '131 €', '131 €', '131 €'],
                ['Entlastungsbudget/Jahr', '3.539 €', '3.539 €', '3.539 €'],
                ['Wohnraumanpassung/Maßnahme', '4.180 €', '4.180 €', '4.180 €'],
              ]}
              betont={1}
            />
            <Text>
              → Zusätzlich: Krankenversicherung übernimmt Behandlungspflege (Physiotherapie, Ergotherapie, Logopädie) und Hilfsmittel (Rollstuhl, Rollator, Badehilfen) separat.
            </Text>
          </Abschnitt>

          <Abschnitt id="rehabilitation" titel="Pflege während der Rehabilitation — was parallel läuft">
            <Text>
              Nach dem Schlaganfall folgt oft Rehabilitation (neurologische Reha, geriatrische Reha). Während der Reha kann der Pflegegrad bereits beantragt werden — auch wenn die Begutachtung erst nach der Entlassung stattfindet.
            </Text>
            <Punkte
              punkte={[
                { title: 'Im Krankenhaus', desc: 'Pflegekasse benachrichtigen, formlosen Antrag stellen. Sozialdienst des Krankenhauses kann unterstützen und Überleitung nach Hause organisieren.' },
                { title: 'Während der Reha', desc: 'Pflegegrad-Antrag läuft — Begutachtung erfolgt nach Entlassung. Häusliche Pflege planen, Betreuungskraft organisieren, Wohnraumanpassung beantragen.' },
                { title: 'Nach Entlassung', desc: 'MD-Begutachtung zu Hause. Kassenzuschüsse fließen ab Antragsdatum (nicht erst ab Begutachtung). 24h-Betreuung hilft bei Wiedereingliederung in den Alltag.' },
              ]}
            />
            <MehrDazu
              label="Mehr zur Pflege nach Schlaganfall:"
              links={[{ href: "/schlaganfall-pflege-zuhause", text: "Schlaganfall Pflege zuhause" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', a: 'Je nach Folgeschäden: Leichte Einschränkungen PG 1–2 (— bis 347 €/Monat). Mittelschwere Halbseitenlähmung PG 2–3 (347–599 €). Schwerer Schlaganfall mit Rollstuhl PG 3–4 (599–800 €). Vollständige Abhängigkeit PG 4–5 (800–990 €).' },
                { q: 'Wann soll man den Pflegegrad nach Schlaganfall beantragen?', a: 'So früh wie möglich — idealerweise noch aus dem Krankenhaus. Der Pflegegrad gilt rückwirkend ab Antragsdatum, nicht ab Begutachtung.' },
                { q: 'Kann der Pflegegrad nach Schlaganfall wieder sinken?', a: 'Ja — wenn durch Rehabilitation Verbesserungen eintreten, kann bei einer neuen Begutachtung der Pflegegrad angepasst werden. Das ist positiv — aber die Kassenzuschüsse sinken entsprechend.' },
                { q: 'Was zahlt die Krankenversicherung nach einem Schlaganfall?', a: 'Krankenversicherung übernimmt: Rehabilitation, Physiotherapie, Ergotherapie, Logopädie, Hilfsmittel (Rollstuhl, Rollator, Badehilfen). Pflegekasse übernimmt: Pflegegeld, Sachleistungen, Entlastungsbudget.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-nach-schlaganfall" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
