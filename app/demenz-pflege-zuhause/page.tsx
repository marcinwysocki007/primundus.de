import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import {
  RatgeberKopf, RatgeberRumpf, Abschnitt, DunklerAbschnitt, Text, Punkte, Liste,
  Kasten, HakenListe, Gegenueber, Tabelle, MehrDazu, Fragen,
} from '@/components/vorlage/Ratgeber'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('demenz-pflege-zuhause', '25. April 2026')

const SECTIONS = [
  { id: 'moeglich', title: 'Was ist zuhause möglich?' },
  { id: 'alltag', title: 'Alltag mit Demenz gestalten' },
  { id: 'pflege-24h', title: 'Wann braucht es 24h-Pflege?' },
  { id: 'zuhause-oder-heim', title: 'Zuhause oder Heim?' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'grenzen', title: 'Grenzen der häuslichen Pflege' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Demenzbetreuung zu Hause: Was möglich ist & wann 24h-Pflege hilft | Primundus',
  description: 'Demenzbetreuung zu Hause: Was Angehörige leisten können, ab wann eine 24-Stunden-Betreuung bei Demenz sinnvoll ist und welche Kassenzuschüsse 2026 helfen.',
  alternates: { canonical: 'https://primundus.de/demenz-pflege-zuhause' },
  openGraph: {
    title: 'Demenzbetreuung zu Hause: 24h-Pflege bei Demenz | Primundus',
    description: 'Was bei Demenz zuhause möglich ist, ab wann 24h-Pflege nötig wird und welche Leistungen die Pflegekasse zahlt.',
    url: 'https://primundus.de/demenz-pflege-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Demenzpflege zuhause — was möglich ist und wann 24h-Pflege hilft',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/demenz-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Demenz Pflege zuhause', item: 'https://primundus.de/demenz-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Demenzkranke zuhause pflegen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in den meisten Stadien ist Demenzpflege zuhause möglich und empfehlenswert. Die vertraute Umgebung gibt Orientierung und verlangsamt nachweislich den Krankheitsverlauf. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei zunehmendem Pflegebedarf erhalten.' } },
      { '@type': 'Question', name: 'Ab wann braucht man 24h-Pflege bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Spätestens wenn der Demenzkranke nicht mehr allein gelassen werden kann — bei Weglaufen, gefährlichem Vergessen (Herd), Nachtunruhe oder wenn Angehörige erschöpft sind. Dann ist eine rund um die Uhr präsente Betreuungskraft die richtige Lösung.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Stadium PG 2–5. Leichte Demenz: oft PG 2–3. Mittlere Demenz: PG 3–4. Schwere Demenz: PG 4–5. Seit 2017 werden kognitive Einschränkungen im Begutachtungsverfahren stärker gewichtet — Demenzbetroffene werden besser eingestuft als früher.' } },
      { '@type': 'Question', name: 'Wie viel kostet Demenzpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.500–2.800 €/Monat.' } },
      { '@type': 'Question', name: 'Ist bei Demenz das Zuhause oder das Pflegeheim besser?', acceptedAnswer: { '@type': 'Answer', text: 'Solange die Sicherheit gewährleistet ist, spricht bei Demenz vieles für das Zuhause: Die vertraute Umgebung gibt Orientierung, eine feste Betreuungskraft ist eine verlässliche Bezugsperson. Das Heim ist die bessere Wahl bei ausgeprägter Selbst- oder Fremdgefährdung oder wenn intensive medizinische Versorgung zuhause nicht sicherzustellen ist.' } },
      { '@type': 'Question', name: 'Wie gestaltet man den Alltag mit Demenzkranken?', acceptedAnswer: { '@type': 'Answer', text: 'Feste Tagesstrukturen, bekannte Rituale beibehalten, kurze einfache Kommunikation, keine Korrektur des Vergessens. Sinnvolle Beschäftigung die an frühere Interessen anknüpft. Überreizung und Konfrontation mit dem Vergessen vermeiden.' } },
      { '@type': 'Question', name: 'Wann ist ein Pflegeheim besser als Demenzpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Wenn intensivmedizinische Behandlungspflege rund um die Uhr nötig ist, wenn aggressive Verhaltensweisen die Sicherheit gefährden, oder wenn kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist.' } }
    ],
  },
]

// Musterseite der Seitenart Ratgeber (Vorlage Partnerseite, 14.09.2026).
// Wortlaut unverändert gegenüber der bisherigen Fassung; nur die Darstellung ist neu.
export default function DemenzPflegeZuhause() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      {/* Ab 1024 px steht das Inhaltsverzeichnis in der rechten Spalte */}
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Krankheiten', href: '/krankheiten' },
            { label: 'Demenz Pflege zuhause' },
          ]}
          augenbraue="Ratgeber Demenz"
          titel="Demenzbetreuung zu Hause: Was möglich ist — und wann 24h-Pflege hilft"
          einleitung="Demenzpflege zuhause ist in den meisten Stadien möglich — und oft die bessere Wahl. Die vertraute Umgebung gibt Orientierung, verlangsamt nachweislich den Krankheitsverlauf und bewahrt die Würde. Mit einer 24h-Betreuungskraft bleibt die eigene Wohnung erhalten, auch wenn der Pflegebedarf wächst."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="8 Min."
          blick={[
            'Häusliche Pflege ist bei Demenz in den meisten Stadien möglich und empfehlenswert',
            'Vertraute Umgebung verlangsamt den Krankheitsverlauf nachweislich',
            '24h-Pflege spätestens wenn der Betroffene nicht mehr allein gelassen werden kann',
            'Pflegegrad 2–5 je nach Stadium — kognitive Einschränkungen werden seit 2017 stärker gewichtet',
            'Pflegegeld: 347–990 €/Monat · Entlastungsbudget: 3.539 €/Jahr',
            'Pflegeheim erst wenn häusliche Pflege medizinisch nicht mehr ausreicht',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="moeglich" titel="Was ist bei der Demenzpflege zuhause möglich?">
            <Text>
              In den meisten Demenzstadien ist die häusliche Pflege nicht nur möglich — sie ist die empfohlene Versorgungsform. Studien zeigen: Demenzkranke in ihrer vertrauten Umgebung sind ruhiger, orientierter und kognitiv länger stabiler als in Pflegeheimen.
            </Text>
            <Text>
              Was zuhause gut funktioniert: Tagesstruktur schaffen, bekannte Rituale beibehalten, menschliche Nähe geben. Was schwieriger wird: Sicherheit rund um die Uhr gewährleisten, mit Nachtunruhe umgehen, Weglaufen verhindern. Genau hier macht eine 24h-Betreuungskraft den Unterschied.
            </Text>
            <Punkte
              punkte={[
                { title: 'Frühes Stadium', desc: 'Gedächtnisprobleme, Wortfindungsstörungen, Orientierungsprobleme im Neuen. Häusliche Pflege durch Angehörige meist noch gut möglich. Entlastung durch stundenweise Betreuung oder Tagespflege.' },
                { title: 'Mittleres Stadium', desc: 'Deutliche kognitive Einschränkungen, Alltagsaktivitäten nicht mehr selbstständig möglich, Weglaufen möglich. 24h-Präsenz wird wichtig — entweder durch Angehörige oder Betreuungskraft.' },
                { title: 'Schweres Stadium', desc: 'Weitgehender Verlust der Selbstständigkeit, kaum Kommunikation möglich, vollständige Pflege nötig. 24h-Betreuungskraft oder Pflegeheim — je nach körperlichem Zusatzbedarf.' },
              ]}
            />
            <MehrDazu
              label="Alzheimer im Speziellen:"
              links={[
                { href: '/alzheimer-betreuung-zuhause', text: 'Alzheimer Betreuung zuhause' },
                { href: '/pflegegrad-bei-demenz', text: 'Pflegegrad bei Demenz — Einstufung' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Alltag mit Demenz zuhause gestalten">
            <Text>
              Gute Demenzpflege zuhause folgt klaren Prinzipien — unabhängig davon ob Angehörige oder eine professionelle Betreuungskraft die Hauptpflege übernimmt.
            </Text>
            <Punkte
              punkte={[
                { title: 'Feste Tagesstruktur', desc: 'Aufstehen, Mahlzeiten, Spaziergang, Schlafenszeit — immer zur gleichen Zeit. Vorhersehbarkeit gibt Sicherheit und reduziert Angst und Unruhe erheblich.' },
                { title: 'Bekannte Rituale bewahren', desc: 'Lieblingsmusik, täglicher Kaffee mit Gebäck, der vertraute Stammplatz im Wohnzimmer. Was früher selbstverständlich war, ist heute wertvolles therapeutisches Mittel.' },
                { title: 'Kommunikation anpassen', desc: 'Kurze, einfache Sätze. Nicht korrigieren wenn etwas Vergessenes falsch erinnert wird. In die Welt des Demenzkranken einsteigen statt ihn in die Realität zu zerren.' },
                { title: 'Beschäftigung sinnvoll gestalten', desc: 'Aktivitäten die an frühere Interessen anknüpfen: Fotos sortieren, Musik hören, einfache Handarbeiten, Gartenarbeit. Überforderung durch zu viele Reize vermeiden.' },
                { title: 'Sicherheit im Haushalt', desc: 'Herd sichern, scharfe Gegenstände wegräumen, Türen sichern wenn Weglaufen ein Thema ist. Ein Hausnotruf gibt zusätzliche Sicherheit.' },
              ]}
            />
            <MehrDazu
              label="Tagesstruktur bei Demenz:"
              links={[
                { href: '/tagesstruktur-demenz', text: 'Tagesstruktur bei Demenz — praktische Tipps' },
                { href: '/kommunikation-mit-demenzkranken', text: 'Kommunikation mit Demenzkranken' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="pflege-24h"
            titel="Wann braucht es 24h-Pflege bei Demenz?"
            einleitung="Spätestens wenn eines dieser Zeichen auftritt, ist 24h-Präsenz notwendig — entweder durch Angehörige rund um die Uhr, oder professioneller durch eine Betreuungskraft."
            punkte={[
              { title: 'Weglaufen (Hinlaufen)', desc: 'Der Demenzkranke verlässt die Wohnung ohne es zu merken — besonders nachts eine ernsthafte Gefahr. Ständige Präsenz und Türsicherung notwendig.' },
              { title: 'Nachtunruhe', desc: 'Schlafen am Tag, wach in der Nacht — ein häufiges Demenz-Symptom das Angehörige schnell an ihre Grenzen bringt. Eine Betreuungskraft übernimmt die Nachtwache.' },
              { title: 'Selbstgefährdung', desc: 'Vergessen den Herd abzustellen, falsche Medikamentendosierung, Stürze durch Orientierungslosigkeit. Ständige Aufsicht notwendig.' },
              { title: 'Angehörige erschöpft', desc: 'Burnout bei pflegenden Angehörigen ist häufig. Wenn die Belastung zu groß wird, ist eine professionelle 24h-Kraft die beste Lösung — auch für die Beziehung.' },
            ]}
          >
            <Kasten titel="Was eine Primundus-Betreuungskraft bei Demenz konkret leistet">
              <HakenListe
                zweispaltig
                punkte={[
                  'Tagesstruktur schaffen und Rituale konsequent einhalten',
                  'Rund um die Uhr präsent — auch nachts ansprechbar',
                  'Sicherheit im Haushalt gewährleisten — Weglaufen verhindern',
                  'Körperpflege, Mahlzeiten, Medikamentengabe',
                  'Emotionale Begleitung und Beschäftigung',
                  'Entlastung der Angehörigen — Familienleben wieder möglich',
                ]}
              />
            </Kasten>
            <MehrDazu
              label="Was 24h-Pflege kostet:"
              links={[
                { href: '/kosten', text: 'Kosten der 24h-Pflege 2026' },
                { href: '/burnout-pflegende-angehoerige', text: 'Burnout pflegende Angehörige' },
              ]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="zuhause-oder-heim" titel="Demenz: zu Hause pflegen oder ins Heim?">
            <Text>
              Die Frage stellt sich in fast jeder Familie — und sie hat keine pauschale Antwort. Was sich
              sagen lässt: Bei Demenz wiegt das Vertraute schwerer als bei jeder anderen Erkrankung. Wer die
              eigene Küche, den Blick aus dem Fenster und die gewohnten Wege verliert, verliert Orientierung —
              ein Umzug ist für Demenzkranke oft ein spürbarer Einschnitt. Zuhause mit einer festen
              Betreuungskraft gibt es 1:1-Zuwendung von einem vertrauten Gesicht; im Heim wechseln
              Bezugspersonen im Schichtdienst.
            </Text>
            <Gegenueber
              seiten={[
                { titel: 'Was für das Zuhause spricht', ton: 'gruen', text: 'Vertraute Umgebung gibt Orientierung und Ruhe · eine feste Bezugsperson statt wechselnder Schichten · Tagesablauf nach den eigenen Gewohnheiten · Angehörige bleiben nah — und mit Kassenzuschüssen ist der Eigenanteil oft niedriger als der Heim-Eigenanteil von bundesweit Ø 3.364 €/Monat (vdek, Stand Juli 2026).' },
                { titel: 'Wann das Heim die bessere Wahl sein kann', ton: 'taupe', text: 'Bei ausgeprägter Weglauftendenz mit Selbstgefährdung, die auch eine anwesende Betreuungskraft nicht auffangen kann · bei schweren Verhaltensauffälligkeiten mit Fremdgefährdung · wenn zusätzlich intensive medizinische Versorgung nötig ist, die zuhause nicht sicherzustellen ist. Spezialisierte Demenz-Wohnbereiche sind dafür eingerichtet.' },
              ]}
            />
            <MehrDazu
              label="Zahlen im Detail:"
              links={[{ href: '/pflegeheim-kostenvergleich', text: '24h-Pflege und Pflegeheim im Kostenvergleich' }]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad bei Demenz & Kassenzuschüsse 2026">
            <Text>
              Seit der Pflegereform 2017 werden kognitive Einschränkungen bei der Begutachtung deutlich stärker gewichtet. Demenzbetroffene bekommen heute in der Regel höhere Pflegegrade als unter dem alten Pflegestufensystem.
            </Text>
            <Tabelle
              titel="Typische Pflegegrade bei Demenz & Leistungen 2026"
              kopf={['Demenzstadium', 'Typischer PG', 'Pflegegeld', 'Entlastungsbetrag']}
              zeilen={[
                ['Leicht', 'PG 2–3', '347–599 €', '131 €'],
                ['Mittel', 'PG 3–4', '599–800 €', '131 €'],
                ['Schwer', 'PG 4–5', '800–990 €', '131 €'],
              ]}
              betont={2}
              fuss="Richtwerte · Einstufung durch MD · Zusätzlich: Entlastungsbudget 3.539 €/Jahr (ab PG 2)"
            />
            <MehrDazu
              label="Pflegegrad bei Demenz beantragen:"
              links={[{ href: '/pflegegrad-bei-demenz', text: 'Pflegegrad bei Demenz — Einstufung & Tipps' }]}
            />
            <MehrDazu
              label="Alle Zuschüsse kombinieren:"
              links={[{ href: '/finanzierung', text: 'Finanzierung der 24h-Pflege — alle Zuschüsse 2026' }]}
            />
          </Abschnitt>

          <Abschnitt id="grenzen" titel="Wann stößt häusliche Pflege an ihre Grenzen?">
            <Text>
              Häusliche Demenzpflege — auch mit professioneller Betreuungskraft — hat Grenzen. Ein Pflegeheim wird dann zur besseren Option wenn:
            </Text>
            <Liste
              punkte={[
                'Intensivmedizinische Behandlungspflege rund um die Uhr nötig ist (z.B. Beatmung, Dauerkatheter-Management)',
                'Der Demenzkranke so aggressiv wird dass die Sicherheit der Betreuungsperson gefährdet ist',
                'Kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist',
                'Der Betroffene ausdrücklich selbst ins Pflegeheim möchte (wenn noch entscheidungsfähig)',
              ]}
            />
            <MehrDazu
              label="Häusliche vs. stationäre Pflege:"
              links={[{ href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege vs. Pflegeheim — was ist besser?' }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Demenzpflege zuhause">
            <Fragen
              fragen={[
                { q: 'Kann man Demenzkranke zuhause pflegen?', a: 'Ja — in den meisten Stadien ist Demenzpflege zuhause möglich und empfehlenswert. Die vertraute Umgebung gibt Orientierung und verlangsamt nachweislich den Krankheitsverlauf. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei zunehmendem Pflegebedarf erhalten.' },
                { q: 'Ab wann braucht man 24h-Pflege bei Demenz?', a: 'Spätestens wenn der Demenzkranke nicht mehr allein gelassen werden kann — bei Weglaufen, gefährlichem Vergessen (Herd), Nachtunruhe oder wenn Angehörige erschöpft sind. Dann ist eine rund um die Uhr präsente Betreuungskraft die richtige Lösung.' },
                { q: 'Welchen Pflegegrad bekommt man bei Demenz?', a: 'Je nach Stadium PG 2–5. Leichte Demenz: oft PG 2–3. Mittlere Demenz: PG 3–4. Schwere Demenz: PG 4–5. Seit 2017 werden kognitive Einschränkungen im Begutachtungsverfahren stärker gewichtet — Demenzbetroffene werden besser eingestuft als früher.' },
                { q: 'Wie viel kostet Demenzpflege zuhause?', a: 'Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.500–2.800 €/Monat.' },
                { q: 'Ist bei Demenz das Zuhause oder das Pflegeheim besser?', a: 'Solange die Sicherheit gewährleistet ist, spricht bei Demenz vieles für das Zuhause: Die vertraute Umgebung gibt Orientierung, eine feste Betreuungskraft ist eine verlässliche Bezugsperson. Das Heim ist die bessere Wahl bei ausgeprägter Selbst- oder Fremdgefährdung oder wenn intensive medizinische Versorgung zuhause nicht sicherzustellen ist.' },
                { q: 'Wie gestaltet man den Alltag mit Demenzkranken?', a: 'Feste Tagesstrukturen, bekannte Rituale beibehalten, kurze einfache Kommunikation, keine Korrektur des Vergessens. Sinnvolle Beschäftigung die an frühere Interessen anknüpft. Überreizung und Konfrontation mit dem Vergessen vermeiden.' },
                { q: 'Wann ist ein Pflegeheim besser als Demenzpflege zuhause?', a: 'Wenn intensivmedizinische Behandlungspflege rund um die Uhr nötig ist, wenn aggressive Verhaltensweisen die Sicherheit gefährden, oder wenn kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist.' },
              ]}
            />
          </Abschnitt>

          <Weiterlesen aktuell="demenz-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
