import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegekasse-antrag-stellen', '25. April 2026')

const SECTIONS = [
  { id: 'antrag', title: 'Antrag stellen — so geht es' },
  { id: 'leistungen', title: 'Welche Leistungen beantragen?' },
  { id: 'fristen', title: 'Fristen & Bearbeitungszeiten' },
  { id: 'ablehnung', title: 'Antrag abgelehnt — was tun?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekasse Antrag stellen — Schritt für Schritt 2026',
  description: 'Pflegekasse Antrag stellen 2026: Pflegegrad beantragen, welche Leistungen es gibt, Fristen und was bei Ablehnung zu tun ist. Mit Musterschreiben.',
  alternates: { canonical: 'https://primundus.de/pflegekasse-antrag-stellen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekasse Antrag stellen 2026 | Primundus',
    description: 'Pflegegrad und Pflegeleistungen bei der Pflegekasse beantragen — Schritt für Schritt erklärt.',
    url: 'https://primundus.de/pflegekasse-antrag-stellen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekasse Antrag stellen — Schritt für Schritt 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekasse-antrag-stellen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekasse Antrag stellen', item: 'https://primundus.de/pflegekasse-antrag-stellen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie stelle ich einen Antrag bei der Pflegekasse?', acceptedAnswer: { '@type': 'Answer', text: 'Der Antrag ist formlos — ein kurzes Schreiben oder Anruf genügt: "Ich beantrage Leistungen der Pflegeversicherung." Die Pflegekasse organisiert dann die Begutachtung durch den Medizinischen Dienst. Der Antrag ist auch telefonisch oder per E-Mail möglich. Wichtig: Das Datum des Antrags ist entscheidend — Leistungen gelten rückwirkend ab diesem Datum.' } },
      { '@type': 'Question', name: 'Wie lange dauert die Bearbeitung?', acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekasse hat 25 Arbeitstage Zeit für die Bearbeitung. Bei Entlassung aus dem Krankenhaus verkürzt sich die Frist auf 1 Woche. Bei Überschreitung der Frist hat der Antragsteller Anspruch auf 70 € Entschädigung pro Woche Verzögerung.' } },
    ],
  },
]

export default function PflegekasseAntragStellen() {
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
            { label: "Finanzierung", href: "/finanzierung" },
            { label: "Pflegekasse Antrag stellen" },
          ]}
          augenbraue="Ratgeber Pflegekasse"
          titel="Pflegekasse Antrag stellen — Schritt für Schritt 2026"
          einleitung="Der Antrag bei der Pflegekasse ist der erste und wichtigste Schritt — denn alle Leistungen gelten rückwirkend ab Antragsdatum, nicht ab dem Datum der Begutachtung. Der Antrag selbst ist formlos: Ein kurzes Schreiben oder ein Telefonanruf genügt."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Der wichtigste Tipp: Antrag sofort stellen" ton="gruen">
              <Text>Leistungen der Pflegeversicherung gelten ab Antragsdatum — nicht ab Begutachtungsdatum oder Bescheiddatum. Wer 6 Wochen wartet verliert 6 Wochen Pflegegeld. Antrag formlos stellen, noch bevor alles organisiert ist.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="antrag" titel="Antrag stellen — so geht es">
            <Text>
              Der Antrag auf Leistungen der Pflegeversicherung ist formlos — es gibt kein Pflichtformular. Ein kurzes Schreiben oder sogar ein Telefonanruf genügt.
            </Text>
            <Kasten augenbraue="Musterformulierung">
              <Text>Sehr geehrte Damen und Herren,</Text>
              <Text>hiermit beantrage ich für [Name, Geburtsdatum, Versichertennummer] Leistungen der sozialen Pflegeversicherung gemäß SGB XI.</Text>
              <Text>Mit freundlichen Grüßen,<br />[Unterschrift, Datum]</Text>
            </Kasten>
            <Text>
              Dieser kurze Brief reicht vollständig aus. Die Pflegekasse veranlasst dann die Begutachtung durch den Medizinischen Dienst.
            </Text>
            <Text>
              Antrag stellen per:
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="grid md:grid-cols-3 gap-3 mb-10">
            {[
              { weg: 'Brief / Post', desc: 'Formlos, kein Pflichtformular. Einwurf-Einschreiben empfohlen (Datum gesichert).' },
              { weg: 'Telefon', desc: 'Anruf bei der Pflegekasse genügt. Datum notieren, Gesprächspartner notieren.' },
              { weg: 'E-Mail / Online', desc: 'Viele Pflegekassen bieten Online-Antrag — Datum des Absenders gilt.' },
            ].map((item) => (
              <div key={item.weg} className="bg-white rounded-xl p-4 border border-pm-line">
                <p className="text-[14px] font-bold text-pm-ink mb-1">{item.weg}</p>
                <p className="text-[13px] text-pm-mute">{item.desc}</p>
              </div>
            ))}
          </div>
          </Abschnitt>

          <DunklerAbschnitt
            id="leistungen"
            titel="Welche Leistungen beantragen?"
            einleitung="Mit dem Pflegegrad-Antrag werden automatisch alle Grundleistungen freigeschaltet. Einige Leistungen müssen zusätzlich separat beantragt oder aktiviert werden."
            punkte={[
              { title: 'Pflegegrad (automatisch)', desc: 'Mit dem Antrag wird die Begutachtung durch den MD ausgelöst. Der Pflegegrad und alle dazugehörigen Leistungen (Pflegegeld, Entlastungsbetrag) werden automatisch festgestellt.' },
              { title: 'Pflegegeld (automatisch bei PG 2–5)', desc: 'Wird automatisch monatlich ausgezahlt wenn Pflegegeld gewählt wird (statt Sachleistungen).' },
              { title: 'Entlastungsbetrag (auf Antrag)', desc: '131 €/Monat für alle PG 1–5 — muss aktiviert werden und läuft nicht automatisch. Pflegekasse anschreiben: "Ich beantrage den Entlastungsbetrag nach §45b SGB XI."' },
              { title: 'Entlastungsbudget', desc: 'Nicht genutztes Entlastungsgeld läuft als Puffer — muss durch Nachweise über anerkannte Ausgaben abgerechnet werden.' },
              { title: 'Wohnraumanpassung (separat)', desc: 'Vor Beginn der Maßnahme separat bei der Pflegekasse beantragen — bis 4.180 €/Maßnahme.' },
              { title: 'Pflegehilfsmittel (separat)', desc: '42 €/Monat Pflegehilfsmittelpauschale — gesondert beantragen oder automatisch bei bestimmten Anbietern.' },
            ]}
          />

          <Abschnitt id="fristen" titel="Fristen & Bearbeitungszeiten">
            <Tabelle
              titel=""
              kopf={['Situation', 'Frist für Pflegekasse', 'Besonderheit']}
              zeilen={[
                ['Normaler Antrag', '25 Arbeitstage', 'Ab Antragsdatum bis Bescheid'],
                ['Entlassung aus Krankenhaus', '1 Woche', 'Verkürzte Frist bei Krankenhausentlassung'],
                ['Fristüberschreitung', 'Entschädigungspflicht', '70 €/Woche Verzögerung für Antragsteller'],
                ['Widerspruch nach Bescheid', '1 Monat', 'Ab Datum des Bescheids'],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="ablehnung" titel="Antrag abgelehnt oder zu niedrig eingestuft — was tun?">
            <Schritte
              schritte={[
                { title: 'Bescheid genau lesen', desc: 'Welcher Pflegegrad wurde festgestellt? Wenn kein Pflegegrad oder ein zu niedriger: Widerspruch ist das Mittel.' },
                { title: 'MD-Gutachten anfordern', desc: 'Das vollständige Gutachten anfordern — kostenlos. Es zeigt wie jeder Lebensbereich bewertet wurde.' },
                { title: 'Widerspruch innerhalb 1 Monat', desc: 'Formloser Widerspruch: "Ich lege Widerspruch gegen den Bescheid vom [Datum] ein." Keine Begründung nötig — die kommt nach Gutachteneinsicht.' },
                { title: 'Pflegetagebuch nachreichen', desc: 'Neues Tagebuch führen, mit aktuellen Arztberichten nachreichen. Das verbessert die Erfolgschancen erheblich.' },
              ]}
            />
            <MehrDazu
              label="Vollständige Anleitung:"
              links={[{ href: "/widerspruch-pflegekasse-einlegen", text: "Widerspruch einlegen — Muster & Tipps" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie stelle ich einen Antrag bei der Pflegekasse?', a: 'Formlos — per Brief, Telefon oder E-Mail: "Ich beantrage Leistungen der Pflegeversicherung." Name, Versichertennummer, Datum. Die Pflegekasse veranlasst die Begutachtung.' },
                { q: 'Wie lange dauert die Bearbeitung?', a: '25 Arbeitstage ab Antragsdatum. Bei Krankenhausentlassung 1 Woche. Bei Fristüberschreitung Anspruch auf 70 €/Woche Entschädigung.' },
                { q: 'Brauche ich ein bestimmtes Formular?', a: 'Nein — der Antrag ist formlos. Viele Pflegekassen bieten eigene Formulare an (erleichtert die Bearbeitung), aber es ist keine Pflicht.' },
                { q: 'Muss ich den Entlastungsbetrag separat beantragen?', a: 'Ja — der Entlastungsbetrag (131 €/Monat) läuft nicht automatisch. Gesondert bei der Pflegekasse beantragen: "Ich beantrage den Entlastungsbetrag nach §45b SGB XI."' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegekasse-antrag-stellen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
