import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Liste, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegende-angehoerige-unterstuetzen', '25. April 2026')

const SECTIONS = [
  { id: 'situation', title: 'Die Situation pflegender Angehöriger' },
  { id: 'entlastung', title: 'Konkrete Entlastungsangebote' },
  { id: 'selbstfuersorge', title: 'Selbstfürsorge — was wirklich hilft' },
  { id: 'hilfe-annehmen', title: 'Hilfe annehmen lernen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegende Angehörige unterstützen — Entlastung & Hilfe',
  description: 'Wie man pflegende Angehörige unterstützt: Konkrete Entlastungsangebote, Selbstfürsorge-Tipps und wie man Hilfe annimmt.',
  alternates: { canonical: 'https://primundus.de/pflegende-angehoerige-unterstuetzen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegende Angehörige unterstützen | Primundus',
    description: 'Wie man pflegende Angehörige wirklich unterstützt — konkrete Hilfe statt gut gemeinter Ratschläge.',
    url: 'https://primundus.de/pflegende-angehoerige-unterstuetzen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegende Angehörige unterstützen — Entlastung und Hilfe',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegende-angehoerige-unterstuetzen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Pflegende Angehörige unterstützen', item: 'https://primundus.de/pflegende-angehoerige-unterstuetzen' },
    ],
  },
]

export default function PflegendeAngehoerigeUnterstuetzen() {
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
            { label: "Alltag & Angehörige", href: "/alltag" },
            { label: "Pflegende Angehörige unterstützen" },
          ]}
          augenbraue="Ratgeber Angehörige"
          titel="Pflegende Angehörige unterstützen — echte Hilfe, keine Ratschläge"
          einleitung="Dieser Ratgeber richtet sich an zwei Gruppen: an Menschen die jemanden kennen der pflegt — und an die Pflegenden selbst. Gut gemeinte Ratschläge helfen selten. Konkrete Entlastung schon. Und das Schwerste für viele Pflegende: Hilfe annehmen zu lernen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="situation" titel="Die Situation pflegender Angehöriger">
            <Text>
              Rund 4,5 Millionen Menschen in Deutschland pflegen einen Angehörigen — oft still, oft ohne dass die eigene Belastung nach außen sichtbar ist. Die häufigsten Erfahrungen:
            </Text>
            <Liste punkte={[
              '"Ich kann nicht nein sagen — wer soll es sonst tun?"',
              '"Ich bin so erschöpft, aber sagen kann ich es nicht — das klingt undankbar."',
              '"Wenn ich an mich selbst denke, fühlt sich das wie Verrat an."',
              '"Ich habe keine Zeit mehr für Freunde, meinen Partner, mich selbst."',
              '"Ich schlafe schlecht wegen der Sorgen und der nächtlichen Wachsamkeit."',
            ]} />
            <Text>
              Diese Gefühle sind real und verbreitet. Sie anzuerkennen ist der erste Schritt — der wichtigste.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="entlastung"
            titel="Konkrete Entlastungsangebote — was wirklich hilft"
            einleitung={"An Freunde und Familie: So helft ihr wirklich — ohne zu fragen \"Kann ich irgendwie helfen?\" (darauf kommt selten eine ehrliche Antwort)."}
            punkte={[
              { title: 'Konkrete Angebote machen, nicht fragen', desc: '"Ich komme Dienstagabend und koche" statt "Sag mir wenn du was brauchst." Konkrete Angebote sind leichter anzunehmen als abstrakte Hilfsbereitschaft.' },
              { title: 'Übernahmen für klar begrenzte Zeiten', desc: '"Ich komme Samstag 3 Stunden und du gehst spazieren/schläfst/machst was du willst." Die Zeit muss definiert und verlässlich sein.' },
              { title: 'Für Einkäufe, Arztterminbegleitung, Behördengänge', desc: 'Konkrete Alltagsaufgaben übernehmen die Zeit fressen und Pflegende von der Pflege weghalten.' },
              { title: 'Zuhören — ohne Ratschläge', desc: '"Ich weiß du hast es schwer" ist wertvoller als "Du solltest mal..." Zuhören ohne zu bewerten ist selten aber unbezahlbar.' },
              { title: 'Nachfragen — auch nach Wochen und Monaten', desc: 'Kurz nach dem Einzug der Betreuungskraft fragen alle. Monate später ist oft niemand mehr da. Regelmäßig nachfragen: "Wie geht es dir — wirklich?"' },
              { title: 'Finanzielle Unterstützung konkret anbieten', desc: 'Wenn das möglich ist: "Ich möchte zu den Kosten der Betreuungskraft beitragen" ist eine der wirkungsvollsten Formen der Unterstützung.' },
            ]}
          />

          <Abschnitt id="selbstfuersorge" titel="Selbstfürsorge — was wirklich hilft (für die Pflegenden selbst)">
            <Punkte
              punkte={[
                { title: 'Tägliche Mindestauszeit einplanen', desc: 'Mindestens 30 Minuten täglich die nur Ihnen gehören. Kein Kompromiss. Diese Zeit ist keine Belohnung — sie ist Voraussetzung dafür dass die Pflege langfristig funktioniert.' },
                { title: 'Schlaf schützen', desc: 'Nächtliche Unterbrechungen systematisch verringern — Hausnotruf, Schichtsystem mit Geschwistern, oder 24h-Betreuungskraft die die Nächte übernimmt.' },
                { title: 'Körperliche Gesundheit nicht vernachlässigen', desc: 'Eigene Arzttermine nicht absagen. Rücken schonen (Hebetechniken, Hilfsmittel). Körper ist das wichtigste Werkzeug beim Pflegen.' },
                { title: 'Soziale Kontakte aktiv aufrechterhalten', desc: 'Freunde, Hobbys, eigene Termine halten. Isolation ist der Beschleuniger von Burnout.' },
                { title: 'Professionelle Unterstützung suchen', desc: 'Psychologische Beratung, Selbsthilfegruppen für pflegende Angehörige — kein Zeichen von Schwäche, sondern von Weitsicht.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="hilfe-annehmen" titel="Hilfe annehmen lernen — warum es so schwer ist">
            <Text>
              Viele pflegende Angehörige wissen dass sie Hilfe bräuchten — und nehmen sie trotzdem nicht an. Die häufigsten Gründe:
            </Text>
            <Punkte
              punkte={[
                { title: '"Ich will keine Last sein"', desc: 'Menschen die Ihnen nahe sind möchten helfen — lassen Sie es zu. Hilfe anzunehmen ist kein Schwächezeichen sondern ein Zeichen von Beziehungsreife.' },
                { title: '"Niemand macht es so gut wie ich"', desc: 'Stimmt oft. Und trotzdem: Gut genug ist gut genug. Kein Mensch kann dauerhaft allein eine perfekte Pflege sicherstellen.' },
                { title: '"Ich möchte meinen Eltern keinen Fremden zumuten"', desc: 'Betreuungskräfte werden in den meisten Fällen nach kurzer Zeit als vertraut empfunden — oft überraschend schnell. Das Fremd-Gefühl ist am Anfang am stärksten.' },
                { title: '"Ich kann mir keine Hilfe leisten"', desc: 'Mit Kassenzuschüssen (347–990 €/Monat Pflegegeld, Entlastungsbudget, Steuerabzug) ist 24h-Betreuung oft erschwinglicher als gedacht. Kostenlose Beratung bei Primundus.' },
              ]}
            />
            <MehrDazu
              label="Burnout erkennen:"
              links={[{ href: "/burnout-pflegende-angehoerige", text: "Burnout pflegender Angehöriger" }, { href: "/pflege-und-beruf-vereinbaren", text: "Pflege und Beruf vereinbaren" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie kann ich eine pflegende Schwester/Bruder unterstützen?', a: 'Konkrete Angebote machen (nicht fragen). Zeit übernehmen für klar begrenzte Zeitfenster. Zuhören ohne zu bewerten. Regelmäßig nachfragen auch nach Monaten. Finanzielle Beteiligung wenn möglich.' },
                { q: 'Warum fällt es Pflegenden schwer Hilfe anzunehmen?', a: 'Schuldgefühle, Perfektionismus ("nur ich mache es richtig"), kein Fremder im Haus, Scham. Und: das Selbstbild hängt oft mit dem Pflegen zusammen. Hilfe annehmen erfordert einen Perspektivwechsel.' },
                { q: 'Was sind die wichtigsten Selbstfürsorge-Maßnahmen für Pflegende?', a: 'Tägliche Mindestauszeit, Schlaf schützen, eigene Arzttermine halten, soziale Kontakte aktiv aufrechterhalten, professionelle Unterstützung in Anspruch nehmen.' },
                { q: 'Was hilft Pflegenden wirklich — außer gut gemeinten Ratschlägen?', a: 'Konkrete Übernahmen, aktives Zuhören, regelmäßige Nachfragen, finanzielle Beteiligung, und das Ermöglichen einer 24h-Betreuungskraft die die Hauptlast übernimmt.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegende-angehoerige-unterstuetzen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
