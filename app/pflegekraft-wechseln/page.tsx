import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, HakenListe, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegekraft-wechseln', '25. April 2026')

const SECTIONS = [
  { id: 'wann-wechseln', title: 'Wann einen Wechsel anstoßen?' },
  { id: 'regulaer', title: 'Der reguläre Kraftwechsel' },
  { id: 'kurzfristig', title: 'Kurzfristiger Wechsel bei Problemen' },
  { id: 'uebergabe', title: 'Übergabe — wie es gut läuft' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft wechseln — wann & wie | Primundus',
  description: 'Pflegekraft wechseln: Wann ein Wechsel sinnvoll ist, wie der reguläre Kraftwechsel alle 6–8 Wochen funktioniert und was eine gute Übergabe ausmacht.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-wechseln' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft wechseln | Primundus',
    description: 'Wann und wie man eine 24h-Betreuungskraft wechselt — regulär und kurzfristig.',
    url: 'https://primundus.de/pflegekraft-wechseln',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft wechseln — wann und wie',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-wechseln',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft wechseln', item: 'https://primundus.de/pflegekraft-wechseln' },
    ],
  },
]

export default function PflegekraftWechseln() {
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
            { label: "Pflegekraft wechseln" },
          ]}
          augenbraue="Ratgeber Pflegekräfte"
          titel="Pflegekraft wechseln — wann & wie es richtig funktioniert"
          einleitung="Jede 24h-Betreuungskraft arbeitet typischerweise 6–8 Wochen am Stück, dann fährt sie nach Hause und eine neue Kraft kommt. Das ist normal, geplant und bei Primundus vollständig organisiert. Daneben gibt es Situationen die einen kurzfristigen Wechsel erfordern — auch das ist kein Problem."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Bei Primundus: Täglich kündbar — sofort Ersatz" ton="gruen">
              <Text>Wer mit Primundus arbeitet kann täglich kündigen. Primundus stellt sofort Ersatz — ohne Versorgungslücke. Kein Risiko, keine Wartezeit, kein Aufwand für die Familie.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="wann-wechseln" titel="Wann einen Wechsel anstoßen?">
            <Punkte
              punkte={[
                { title: 'Regulärer Rhythmuswechsel (alle 6–8 Wochen)', desc: 'Der Normalfall. Die Kraft fährt nach Hause zu ihrer eigenen Familie, eine neue Kraft kommt. Primundus kündigt den Wechsel rechtzeitig an und organisiert alles.' },
                { title: 'Kraft passt nicht', desc: 'Persönlichkeit, Arbeitsweise oder Deutschkenntnisse entsprechen nicht den Erwartungen. Kein Augenrollen, keine Auseinandersetzungen — einfach Primundus anrufen. Täglich kündbar.' },
                { title: 'Pflegebedarf hat sich verändert', desc: 'Neuer Pflegegrad, neue Diagnose, gestiegener Aufwand — die bisherige Kraft hat nicht die nötige Spezialerfahrung. Neue Kraft mit besserer Qualifikation wählen.' },
                { title: 'Ausfall durch Krankheit oder Kündigung der Kraft', desc: 'Passiert — und dann ist sofortiger Ersatz entscheidend. Primundus organisiert das ohne Vorlaufzeit.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="regulaer" titel="Der reguläre Kraftwechsel — Ablauf">
            <Schritte
              schritte={[
                { title: '2–3 Wochen vorher: Ankündigung', desc: 'Primundus informiert die Familie über den geplanten Wechseltermin und stellt die neue Kraft vor (Profil, Erfahrung).' },
                { title: '1 Woche vorher: Bestätigung', desc: 'Neue Kraft bestätigt, Anreisedatum festgelegt. Familie hat alle Informationen.' },
                { title: 'Am Wechseltag: Übergabe', desc: 'Alte Kraft gibt der neuen Kraft alle wichtigen Informationen — Routinen, Gewohnheiten, Medikamente, Besonderheiten. Wenn möglich: kurze Überlappung.' },
                { title: 'Erste Woche der neuen Kraft', desc: 'Eingewöhnungszeit. Familie bleibt erreichbar für Rückfragen. Primundus ist Ansprechpartner wenn Probleme auftauchen.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="kurzfristig"
            titel="Kurzfristiger Wechsel bei Problemen"
            einleitung="Manchmal stimmt die Chemie einfach nicht — oder es gibt ein konkretes Problem. Das zu erkennen und anzusprechen ist wichtig. Nicht zu lange warten."
            punkte={[
              { title: 'Pflegebedürftiger mag die Kraft nicht', desc: 'Ernst nehmen — auch wenn keine objektiven Gründe benannt werden können. Primundus anrufen, Wechsel veranlassen.' },
              { title: 'Qualität der Pflege ist unzureichend', desc: 'Konkrete Beispiele sammeln, mit Primundus besprechen. Primundus geht der Sache nach und organisiert Ersatz.' },
              { title: 'Vertrauensbruch (Diebstahl, Lügen)', desc: 'Sofort Primundus informieren. Je nach Schwere: sofortige Kündigung aus wichtigem Grund möglich.' },
              { title: 'Kraft krank oder möchte vorzeitig abbrechen', desc: 'Primundus übernimmt — sofortige Ersatzorganisation.' },
            ]}
          />

          <Abschnitt id="uebergabe" titel="Übergabe — was eine gute Übergabe ausmacht">
            <Text>
              Eine gute Übergabe entscheidet über den Start der neuen Kraft. Idealerweise gibt es eine kurze Überlappungsphase von 1–2 Stunden. Falls nicht möglich: ein schriftliches Übergabeprotokoll.
            </Text>
            <HakenListe punkte={[
              'Tagesroutine: Wann steht die Person auf, wann schläft sie, Mahlzeitenzeiten',
              'Lieblingsspeisen, Abneigungen, Diät, Allergien',
              'Medikamente: vollständige Liste mit Zeiten und Einnahmehinweisen',
              'Besondere Gewohnheiten und Vorlieben (Lieblingsfernsehsender, Musik, Spaziergänge)',
              'Aktuelle Gesundheitssituation: Was hat sich zuletzt verändert?',
              'Wichtige Kontakte: Arzt, Physiotherapeut, Angehörige',
              'Was geht gerade gut? Was ist gerade schwierig?',
              'Standorte wichtiger Dinge: Medikamente, Rollator, Notfallplan',
            ]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie oft wechselt die Pflegekraft?', a: 'In der Regel alle 6–8 Wochen — regulärer Rhythmuswechsel. Bei Problemen jederzeit. Bei Primundus täglich kündbar.' },
                { q: 'Was wenn der Pflegebedürftige sich an die neue Kraft gewöhnen muss?', a: 'Eingewöhnung dauert meist 1–2 Wochen. Vertraute Routinen helfen beim Übergang. Bei Demenz: neue Kraft braucht etwas mehr Geduld und Zeit.' },
                { q: 'Kann man eine Kraft die gut war wiederholen?', a: 'Auf Wunsch gerne — Primundus berücksichtigt Präferenzen bei der Planung. Eine Kraft die schon bekannt ist stärkt das Vertrauen.' },
                { q: 'Was wenn ich keine Kraft mehr haben möchte?', a: 'Täglich kündbar bei Primundus. Keine Mindestlaufzeit, keine Fristen. Kündigung einfach mitteilen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekraft-wechseln" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
