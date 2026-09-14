import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('copd-pflege-zuhause', '20. August 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist COPD?' },
  { id: 'unterstuetzung', title: 'Pflegerische Unterstützung' },
  { id: 'aufgaben', title: 'Betreuungskraft & Pflegedienst' },
  { id: 'nachts', title: 'Nachts bei COPD' },
  { id: 'notfall', title: 'Notfall erkennen' },
  { id: 'pflegegrad', title: 'COPD & Pflegegrad' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege bei COPD zuhause — Unterstützung im Alltag',
  description:
    'Pflegerische Unterstützung bei COPD: was im Alltag hilft, was die Betreuungskraft übernimmt, wann der Arzt gerufen werden muss und welcher Pflegegrad möglich ist.',
  alternates: { canonical: 'https://primundus.de/copd-pflege-zuhause' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflege bei COPD zuhause',
    description: 'Was im Alltag mit COPD hilft, was die Betreuungskraft übernimmt und welcher Pflegegrad möglich ist.',
    url: 'https://primundus.de/copd-pflege-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'Kann man COPD-Patienten zuhause pflegen?',
    a: 'Ja — in den meisten Fällen sogar gut. Eine 24h-Betreuungskraft übernimmt Haushalt, Alltagsbegleitung und Erinnerungen und ist auch nachts erreichbar. Die medizinische Seite (Inhalationen anleiten, Sauerstofftherapie, Medikamente stellen) bleibt beim ambulanten Pflegedienst und den behandelnden Ärzten — beide ergänzen sich.',
  },
  {
    q: 'Welche Aufgaben übernimmt die Betreuungskraft bei COPD?',
    a: 'Alles, was Kraft kostet und den Alltag sicherer macht: Haushalt, Einkaufen und Kochen, Wege abnehmen, an Medikamente und Inhalationen erinnern, bei Atemnot Ruhe bewahren und die mit dem Arzt besprochenen Maßnahmen unterstützen, auf Warnzeichen achten und im Notfall Hilfe rufen.',
  },
  {
    q: 'Welcher Pflegegrad ist bei COPD möglich?',
    a: 'COPD allein ergibt keinen automatischen Pflegegrad — entscheidend ist, wie stark die Selbstständigkeit im Alltag eingeschränkt ist. Bei fortgeschrittener COPD (GOLD 3 oder 4) mit Atemnot schon bei geringer Belastung ist häufig Pflegegrad 2 oder 3 erreichbar. Wichtig: im Begutachtungstermin den schlechten Tag schildern, nicht den guten.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei COPD?',
    a: 'Bei Primundus 2.200–3.500 € pro Monat, je nach Betreuungsbedarf und Sprachkenntnissen der Kraft — die Diagnose selbst ändert den Preis nicht. Mit Pflegegeld und anteiligem Entlastungsbudget sinkt der Eigenanteil je nach Pflegegrad deutlich. Den Preis für Ihre Situation sehen Sie in 2 Minuten im Kostenrechner.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege bei COPD zuhause — pflegerische Unterstützung im Alltag',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/copd-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'COPD Pflege zuhause', item: 'https://primundus.de/copd-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function Page() {
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
            { label: "Ratgeber", href: "/krankheiten" },
            { label: "COPD Pflege zuhause" },
          ]}
          augenbraue="Ratgeber COPD"
          titel="Pflege bei COPD: Wie Sie den Alltag zuhause sicher machen"
          einleitung="Wer einen Menschen mit COPD pflegt, kennt die ständige Sorge: Reicht die Luft heute? Kommt sie die Treppe noch hoch? Was, wenn nachts die Atemnot kommt — und niemand da ist? Dieser Ratgeber zeigt, welche pflegerische Unterstützung im Alltag wirklich hilft, wo die Grenzen von Angehörigen und Betreuungskräften liegen und wann Sie ärztliche Hilfe holen müssen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="8 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist COPD — und was bedeutet sie für den Alltag?">
            <Text>
              COPD (chronisch obstruktive Lungenerkrankung) ist eine dauerhafte Verengung der Atemwege — meist
            nach Jahrzehnten des Rauchens, seltener durch Stäube oder Vorerkrankungen. Typisch sind die drei
            Beschwerden <strong>Atemnot, Husten und Auswurf</strong>, anfangs nur bei Anstrengung, später
            auch in Ruhe. Ärztinnen und Ärzte teilen den Schweregrad in die Stadien <strong>GOLD 1 bis
            GOLD 4</strong> ein — von leicht bis sehr schwer.
            </Text>
            <Text>
              Für den Pflegealltag heißt das: COPD verläuft schleichend, aber sie verläuft. Was letztes Jahr
            noch ging — Einkaufen, Treppensteigen, das Bad im ersten Stock — kostet irgendwann mehr Luft, als
            da ist. Dazu kommen die gefürchteten <strong>Exazerbationen</strong>: akute Verschlechterungen,
            oft durch Infekte ausgelöst, die häufig im Krankenhaus enden. Gute Pflege zuhause hat deshalb zwei
            Ziele: <strong>Kraft sparen im Alltag</strong> und <strong>Verschlechterungen früh erkennen</strong>.
            </Text>
          </Abschnitt>

          <Abschnitt id="unterstuetzung" titel="Pflegerische Unterstützung bei COPD: worauf es im Alltag ankommt">
            <Punkte
              punkte={[
                { title: 'Kräfte einteilen — der Tag folgt der Luft', desc: 'Anstrengendes auf die besten Stunden legen (bei vielen: der Vormittag nach dem Abhusten), zwischen allen Tätigkeiten Pausen einplanen, Wege verkürzen: was täglich gebraucht wird, gehört in Griffhöhe und ins Erdgeschoss. Duschen im Sitzen mit Duschhocker spart mehr Kraft, als viele denken.' },
                { title: 'Atemnot-Momente ruhig begleiten', desc: 'Panik verengt die Atemwege zusätzlich. Hilfreich ist, ruhig an die mit Arzt oder Atemphysiotherapie eingeübten Techniken zu erinnern und dabei zu begleiten — etwa die Lippenbremse oder atemerleichternde Haltungen wie den Kutschersitz — Fenster öffnen, beengende Kleidung lockern und da bleiben, bis sich die Atmung beruhigt.' },
                { title: 'Medikamente und Inhalation im Takt', desc: 'Dauermedikamente wirken nur bei regelmäßiger Einnahme — und das Bedarfsspray muss im richtigen Moment griffbereit sein. Die Betreuungskraft erinnert zuverlässig an Zeiten und achtet darauf, dass Inhalationsgeräte gereinigt bereitstehen — die Anleitung und Kontrolle der Inhalationstechnik bleibt bei Arzt und Pflegedienst.' },
                { title: 'Essen und Trinken anpassen', desc: 'Viele COPD-Patienten verlieren Gewicht, weil Atmen Kalorien verbrennt und volle Mägen aufs Zwerchfell drücken. Bewährt haben sich mehrere kleine, energiereiche Mahlzeiten statt drei großer — und ausreichend Trinken, damit sich Schleim leichter löst. Was im Einzelfall gilt, besprechen Sie mit Arzt oder Ernährungsberatung.' },
                { title: 'Infekte fernhalten', desc: 'Jeder Atemwegsinfekt kann eine Exazerbation auslösen. Konsequente Handhygiene, Abstand zu Erkälteten, regelmäßiges Lüften und die von der Ständigen Impfkommission empfohlenen Impfungen (etwa Grippe und Pneumokokken — bitte ärztlich beraten lassen) senken das Risiko spürbar.' },
                { title: 'In Bewegung bleiben — in Grenzen', desc: 'Schonung schwächt die Atemmuskulatur. Kurze, regelmäßige Bewegung im eigenen Tempo — Gehen, Treppenstufen nach Vermögen, Lungensport-Übungen — erhält Kraft und Lebensqualität. Das richtige Maß legt der Arzt fest; die Betreuungskraft begleitet und motiviert.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="aufgaben" titel="Was übernimmt die Betreuungskraft — und was der Pflegedienst?">
            <Gegenueber
              seiten={[
                { titel: 'Betreuungskraft übernimmt', ton: 'gruen', punkte: ['Haushalt, Einkaufen, Kochen — alles, was Luft kostet', 'Wege abnehmen, Duschen und Ankleiden unterstützen', 'An Medikamente und Inhalationszeiten erinnern', 'Bei Atemnot Ruhe geben und eingeübte Haltungen unterstützen', 'Auf Warnzeichen achten, Veränderungen melden', 'Begleitung zu Arzt- und Therapieterminen', 'Nachts erreichbar — gerade bei Atemnot ein Sicherheitsnetz'] },
                { titel: 'Pflegedienst & Ärzte ergänzen', ton: 'taupe', punkte: ['Medikamente stellen und Inhalationstechnik kontrollieren', 'Sauerstoff-Langzeittherapie einrichten und überwachen', 'Behandlungspflege nach ärztlicher Verordnung', 'Atemphysiotherapie und Lungensport anleiten', 'Therapieanpassung bei Verschlechterung'] },
              ]}
            />
            <Text>
              <strong>Beide zusammen machen häusliche Pflege auch bei fortgeschrittener COPD möglich.</strong> Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst.
            </Text>
          </Abschnitt>

          <Abschnitt id="nachts" titel="Nachts ist die Angst am größten">
            <Text>
              Atemnot kommt bei COPD oft nachts — im Liegen sammelt sich Schleim, und wer allein aufwacht und
            keine Luft bekommt, gerät in Panik, die alles schlimmer macht. Genau hier liegt der Unterschied
            der 24-Stunden-Betreuung zum ambulanten Dienst, der zweimal am Tag kommt: <strong>Es ist jemand
            da.</strong> Eine Betreuungskraft, die im Haus schläft, hört, wenn etwas nicht stimmt, hilft beim
            Aufsetzen, bleibt ruhig — und ruft Hilfe, wenn es nötig wird. Für viele Familien ist das der
            Moment, in dem sie nach Monaten zum ersten Mal wieder durchschlafen.
            </Text>
          </Abschnitt>

          <Abschnitt id="notfall" titel="Notfall erkennen: wann zum Arzt, wann die 112">
            <Kasten augenbraue="Zeitnah ärztlich abklären">
              <Text>Deutlich mehr Atemnot als sonst · mehr, zäherer oder verfärbter Auswurf · Fieber ·
              neue Schwellungen an den Beinen · ungewöhnliche Müdigkeit oder Verwirrtheit — das können
              Zeichen einer beginnenden Exazerbation sein. Je früher behandelt wird, desto eher lässt sich
              das Krankenhaus vermeiden.</Text>
            </Kasten>
            <Kasten augenbraue="Sofort 112 rufen" ton="koralle">
              <Text>Schwere Atemnot in Ruhe, die sich mit Notfallspray und Atemtechniken nicht bessert ·
              bläuliche Lippen oder Fingernägel · Benommenheit oder Bewusstseinstrübung. Hier zählt jede Minute.</Text>
            </Kasten>
            <Text>
              Hilfreich für alle Beteiligten: ein schriftlicher Notfallplan am Kühlschrank — Warnzeichen,
            Medikamente, Telefonnummern von Hausarzt, Lungenfacharzt und Angehörigen. So handelt auch eine
            Betreuungskraft, die neu im Haushalt ist, sofort richtig.
            </Text>
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="COPD und Pflegegrad: Was steht Ihnen zu?">
            <Text>
              Die Diagnose allein ergibt keinen Pflegegrad — bewertet wird, wie selbstständig jemand seinen
            Alltag noch bewältigt. Bei COPD wird oft unterschätzt, wie viele Punkte zusammenkommen: Wer wegen
            Atemnot beim Waschen und Anziehen Hilfe braucht, Wege in der Wohnung nur mit Pausen schafft und
            nachts Unterstützung benötigt, hat gute Chancen auf <strong>Pflegegrad 2 oder 3</strong> — bei
            fortgeschrittener COPD (GOLD 3 und 4) mit Sauerstofftherapie auch darüber.
            </Text>
            <Text>
              Der häufigste Fehler im Begutachtungstermin: den guten Tag zeigen. Schildern Sie den schlechten —
            der Gutachter bewertet den Alltag, nicht den Moment. Ein Pflegetagebuch über zwei Wochen hilft
            enorm.
            </Text>
            <Text>
              → Erste Einschätzung in wenigen Minuten: <a href="/pflegegrad-rechner" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad-Rechner</a> ·
            Schritt für Schritt: <a href="/pflegegrad-beantragen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad beantragen</a>
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen fragen={faqs} />
          </Abschnitt>


          <Weiterlesen aktuell="copd-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
