import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('osteoporose-pflege-zuhause', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Osteoporose — was das bedeutet' },
  { id: 'sturzschutz', title: 'Sturzschutz ist alles' },
  { id: 'alltag', title: 'Pflege & Alltag mit Osteoporose' },
  { id: 'ernaehrung', title: 'Ernährung & Vitamin D' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Osteoporose Pflege zuhause — Sturzschutz & Alltag',
  description: 'Osteoporose Pflege zuhause: Warum Sturzprävention das Wichtigste ist, wie man den Alltag sicher gestaltet und was Ernährung und Vitamin D beitragen.',
  alternates: { canonical: 'https://primundus.de/osteoporose-pflege-zuhause' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Osteoporose Pflege zuhause | Primundus',
    description: 'Häusliche Pflege bei Osteoporose — Sturzschutz, Alltag und Ernährung.',
    url: 'https://primundus.de/osteoporose-pflege-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Osteoporose Pflege zuhause — Sturzschutz, Alltag und Ernährung',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/osteoporose-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Osteoporose Pflege', item: 'https://primundus.de/osteoporose-pflege-zuhause' },
    ],
  },
]

export default function OsteoporosePflegeZuhause() {
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
            { label: "Krankheiten", href: "/krankheiten" },
            { label: "Osteoporose Pflege zuhause" },
          ]}
          augenbraue="Ratgeber Osteoporose"
          titel="Osteoporose Pflege zuhause — Sturzschutz & Alltag"
          einleitung="Bei Osteoporose sind die Knochen so porös dass ein Sturz zu einem schweren Bruch führen kann — der Hüftbruch ist die gefürchtetste Folge und bedeutet für viele ältere Menschen den Einstieg in intensive Pflege. Sturzprävention ist deshalb das wichtigste Ziel. Mit einer 24h-Betreuungskraft die immer anwesend ist, sinkt das Sturzrisiko erheblich."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Sturzprävention ist absolute Priorität — jeder Sturz kann lebensbedrohlich sein',
                'Wohnraumanpassung: Haltegriffe, rutschfreie Böden, gute Beleuchtung (Pflegekasse: bis 4.180 €/Maßnahme)',
                'Hüftprotektor bei hohem Sturzrisiko empfohlen (KV übernimmt)',
                'Medikamenten-Compliance: Bisphosphonate etc. zur richtigen Zeit einnehmen',
                'Ernährung: Kalzium (mind. 1.000 mg/Tag) + Vitamin D (Supplementierung fast immer nötig)',
                '24h-Kraft: immer anwesend, kennt Sturzrisiken, handelt sofort bei Sturz',
              ]}
          blickTitel="Auf einen Blick — Pflege bei Osteoporose"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Osteoporose — was das für die Pflege bedeutet">
            <Text>
              Osteoporose (Knochenschwund) betrifft in Deutschland ca. 6 Millionen Menschen, überwiegend Frauen über 65. Die Knochen verlieren an Dichte und Stabilität — ein Sturz aus dem Stand kann den Oberschenkelhals brechen. Ein solcher Hüftbruch bedeutet Operation, langen Krankenhausaufenthalt und oft dauerhaft erhöhten Pflegebedarf.
            </Text>
            <Text>
              Die häusliche Pflege bei Osteoporose dreht sich deshalb vor allem um eine Frage: Wie verhindert man den nächsten Sturz?
            </Text>
          </Abschnitt>

          <Abschnitt id="sturzschutz" titel="Sturzschutz — die wichtigsten Maßnahmen">
            <Punkte
              punkte={[
                { title: 'Wohnraumanpassung', desc: 'Haltegriffe im Bad (neben Dusche, WC, Badewanne), rutschfeste Matten, Schwellen entfernen, Teppiche befestigen oder entfernen. Pflegekasse fördert bis 4.180 €/Maßnahme — Antrag vor Beginn stellen.' },
                { title: 'Hüftprotektor', desc: 'Spezielle Hose mit gepolsterten Einlagen die die Hüfte beim Sturz schützen. Krankenversicherung kann mit Rezept übernehmen.' },
                { title: 'Gleichgewichts- und Krafttraining', desc: 'Auch bei Osteoporose: regelmäßige Bewegung ist Therapie — nicht Schonung. Tai Chi, Physiotherapie, gezielte Kräftigungsübungen unter Aufsicht. Betreuungskraft begleitet täglich.' },
                { title: 'Geeignetes Schuhwerk', desc: 'Feste Sohle, kein offenes Fersenteil, keine Hausschuhe ohne Halt. Orthopädische Schuhe wenn Fehlstellungen vorhanden.' },
                { title: 'Gute Beleuchtung', desc: 'Nachtlicht auf dem Weg zur Toilette. Bewegungsmelder im Flur. Keine dunklen Ecken wo Hindernisse übersehen werden.' },
                { title: '24h-Kraft immer anwesend', desc: 'Die 24h-Betreuungskraft ist die wichtigste Sturzpräventionsmaßnahme: Sie kennt die Risikosituationen, greift beim Transfer unter die Arme, reagiert sofort bei einem Sturz.' },
              ]}
            />
            <MehrDazu
              label="Vollständige Sturzprävention:"
              links={[{ href: "/sturzpraevention-senioren", text: "Sturzprävention Senioren — alle Maßnahmen" }]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Pflege & Alltag mit Osteoporose">
            <Punkte
              punkte={[
                { title: 'Transfers — immer zu zweit', desc: 'Aufstehen aus dem Bett, vom Sofa, von der Toilette — bei Osteoporose immer mit Unterstützung. Keine ruckartigen Bewegungen. Die Betreuungskraft lernt sichere Transfertechniken.' },
                { title: 'Medikamenten-Compliance', desc: 'Osteoporose-Medikamente (Bisphosphonate, Kalzium, Vitamin D) müssen regelmäßig und richtig eingenommen werden. Betreuungskraft erinnert aktiv und dokumentiert.' },
                { title: 'Schmerzen nicht ignorieren', desc: 'Osteoporose verursacht oft Rückenschmerzen durch Wirbelkörperfrakturen. Schmerz = Signal — Arzt aufsuchen. Schmerzmitteleinsatz in Absprache mit Arzt.' },
                { title: 'Bewegung trotz Angst', desc: 'Viele Betroffene entwickeln Sturzangst und bewegen sich immer weniger — das verschlechtert die Muskeln und erhöht langfristig das Sturzrisiko. Regelmäßige Spaziergänge mit Begleitung sind wichtig.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="ernaehrung" titel="Ernährung & Vitamin D — was wirklich hilft">
            <Punkte
              punkte={[
                { title: 'Kalzium — mind. 1.000 mg täglich', desc: 'Milch, Joghurt, Käse, Grünkohl, Brokkoli, calciumreiches Mineralwasser. Supplementierung wenn Ernährung nicht ausreicht — nach Rücksprache mit Arzt.' },
                { title: 'Vitamin D — fast immer Supplementierung nötig', desc: 'Senioren produzieren durch Sonnenlicht kaum noch ausreichend Vitamin D. Supplementierung (800–2.000 IU/Tag) fast immer empfohlen. Blutwert prüfen lassen.' },
                { title: 'Protein — für Muskelerhalt', desc: 'Starke Muskeln stabilisieren die Knochen und verhindern Stürze. Ausreichend Protein (1–1,2 g/kg/Tag). Fisch, Fleisch, Hülsenfrüchte, Milchprodukte, Eier.' },
                { title: 'Vermeiden: Alkohol & Rauchen', desc: 'Alkohol und Nikotin beschleunigen den Knochenabbau erheblich. Wenn möglich reduzieren.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist das Wichtigste bei der Pflege von Osteoporose-Patienten?', a: 'Sturzprävention — Haltegriffe, rutschfreie Böden, Hüftprotektor, Gleichgewichtstraining. Ein Sturz kann lebensbedrohlich sein. Permanente Betreuung durch eine 24h-Kraft ist die wirksamste Sturzpräventionsmaßnahme.' },
                { q: 'Was sollten Osteoporose-Patienten essen?', a: 'Mind. 1.000 mg Kalzium täglich (Milchprodukte, Gemüse), Vitamin D (Supplementierung), ausreichend Protein für Muskeln. Alkohol und Nikotin reduzieren.' },
                { q: 'Welchen Pflegegrad bekommt man bei Osteoporose?', a: 'Osteoporose allein führt selten zu einem hohen Pflegegrad. Wenn jedoch Mobilität stark eingeschränkt ist (z.B. nach Hüftfraktur), Schmerzen dauerhaft bestehen oder weitere Erkrankungen hinzukommen: PG 2–4 möglich.' },
                { q: 'Ist Bewegung bei Osteoporose gefährlich?', a: 'Nein — im Gegenteil: Bewegung ist wichtig (Muskelaufbau, Gleichgewicht, Knochenreiz). Aber immer mit Begleitung und sicherer Umgebung. Kein Sport mit hohem Sturzrisiko (nasse Böden, unebenes Gelände ohne Begleitung).' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="osteoporose-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
