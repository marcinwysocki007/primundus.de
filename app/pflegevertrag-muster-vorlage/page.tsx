import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegevertrag-muster-vorlage', '25. April 2026')

const SECTIONS = [
  { id: 'was-muss-rein', title: 'Was muss in den Pflegevertrag?' },
  { id: 'vorlage', title: 'Vorlage — vollständiges Muster' },
  { id: 'kost-logis', title: 'Kost & Logis richtig regeln' },
  { id: 'kuendigung', title: 'Kündigung & Laufzeit' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegevertrag Muster & Vorlage 2026 — kostenlos | Primundus',
  description: 'Pflegevertrag Vorlage 2026: Vollständiges Muster mit allen Pflichtangaben — Leistungsumfang, Vergütung, Kost und Logis, Kündigung. Kostenlos zum Ausdrucken.',
  alternates: { canonical: 'https://primundus.de/pflegevertrag-muster-vorlage' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegevertrag Muster & Vorlage 2026 | Primundus',
    description: 'Kostenloses Pflegevertrag-Muster mit allen Pflichtangaben für die häusliche 24h-Pflege.',
    url: 'https://primundus.de/pflegevertrag-muster-vorlage',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegevertrag Muster und Vorlage 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegevertrag-muster-vorlage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Pflegevertrag Muster', item: 'https://primundus.de/pflegevertrag-muster-vorlage' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was muss in einen Pflegevertrag?', acceptedAnswer: { '@type': 'Answer', text: 'Pflichtbestandteile: Name und Adresse beider Parteien, Beginn und ggf. Dauer, genaue Beschreibung der Pflegeleistungen, Vergütung und Zahlungsmodalitäten, Kost und Logis (Sachbezugswert), Urlaub und Krankheit, Kündigung, Verschwiegenheitspflicht.' } },
    ],
  },
]

export default function PflegevertragMusterVorlage() {
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
            { label: "Rechtliches", href: "/rechtliches" },
            { label: "Pflegevertrag Muster & Vorlage" },
          ]}
          augenbraue="Ratgeber Vertrag"
          titel="Pflegevertrag Muster & Vorlage 2026 — vollständig & kostenlos"
          einleitung="Ein Pflegevertrag schützt beide Seiten — die Familie und die Betreuungskraft. Er regelt was geleistet wird, was es kostet, wie Kost und Logis angerechnet werden und wie gekündigt werden kann. Wer mit Primundus im Entsendemodell arbeitet, bekommt einen fertigen Vertrag — wer direkt anstellt, braucht dieses Muster."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Wichtiger Hinweis" ton="koralle">
              <Text>Diese Vorlage gilt für die Direktanstellung einer Pflegekraft durch die Familie (deutsches Arbeitsverhältnis). Beim Entsendemodell über Primundus schließt die Familie nur einen Vertrag mit Primundus als Agentur — kein eigener Arbeitsvertrag mit der Kraft notwendig. Die Vorlage hier dient als Orientierung und ersetzt keine Rechtsberatung.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="was-muss-rein" titel="Was muss in den Pflegevertrag?">
            <Punkte
              punkte={[
                { title: 'Vertragsparteien', desc: 'Vollständiger Name, Adresse und ggf. Geburtsdatum beider Parteien. Bei minderjährigen oder geschäftsunfähigen Pflegebedürftigen: Name und Adresse der bevollmächtigten Person.' },
                { title: 'Beginn und Laufzeit', desc: 'Datum des Beginns. Befristet oder unbefristet? Bei befristeten Verträgen: Enddatum und Verlängerungsregelung.' },
                { title: 'Leistungsumfang', desc: 'Was genau übernimmt die Kraft? Körperpflege, Haushalt, Kochen, Mobilisierung, Gesellschaft — möglichst konkret. Was wird ausdrücklich nicht erwartet (z.B. schwere medizinische Behandlungspflege)?' },
                { title: 'Arbeitszeit', desc: 'Grundsätzliche Bereitschaft (z.B. Wochenstunden, Rufbereitschaft). Wichtig: Unterschied zwischen Bereitschaft und aktiver Arbeitszeit.' },
                { title: 'Vergütung', desc: 'Bruttolohn pro Monat. Zahlungsmodalitäten (Datum, Konto). Überstundenregelung.' },
                { title: 'Kost & Logis', desc: 'Freie Unterkunft und Verpflegung werden als Sachbezug auf den Lohn angerechnet. Gesetzliche Sachbezugswerte (2026): Unterkunft ca. 278 €/Monat, Verpflegung ca. 313 €/Monat.' },
                { title: 'Urlaub', desc: 'Mindestens gesetzlicher Mindesturlaub (20 Tage bei 5-Tage-Woche). Urlaubsplanung und -vertretung.' },
                { title: 'Krankheit', desc: 'Lohnfortzahlung im Krankheitsfall (gesetzlich: 6 Wochen). Meldepflicht.' },
                { title: 'Kündigung', desc: 'Kündigungsfristen (gesetzlich in der Probezeit: 2 Wochen; danach: 4 Wochen). Außerordentliche Kündigung bei wichtigem Grund.' },
                { title: 'Verschwiegenheit', desc: 'Verpflichtung zur Verschwiegenheit über alle persönlichen und gesundheitlichen Informationen des Pflegebedürftigen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vorlage" titel="Vorlage — vollständiges Pflegevertrag-Muster">
            <Kasten augenbraue="ARBEITSVERTRAG — Häusliche Betreuung und Pflege" titel="§ 1 Vertragsparteien">
              <Text>zwischen</Text>
              <Text>Name, Adresse der Familie / bevollmächtigten Person (nachfolgend „Arbeitgeber")</Text>
              <Text>und</Text>
              <Text>Name, Adresse der Betreuungskraft (nachfolgend „Arbeitnehmer")</Text>
              <Text>§ 2 Beginn und Dauer</Text>
              <Text>Das Arbeitsverhältnis beginnt am ____________ und wird auf unbestimmte Zeit / bis zum ____________ geschlossen.</Text>
              <Text>Die ersten __ Wochen gelten als Probezeit.</Text>
              <Text>§ 3 Tätigkeitsbeschreibung</Text>
              <Text>Der Arbeitnehmer übernimmt die häusliche Betreuung und Pflege von:</Text>
              <Text>Name des Pflegebedürftigen: ________________________</Text>
              <Text>Die Tätigkeit umfasst insbesondere:</Text>
              <Text>□ Körperpflege (Waschen, Ankleiden, Zahnpflege)</Text>
              <Text>□ Mobilisierung und Begleitung</Text>
              <Text>□ Haushaltsführung (Kochen, Reinigung, Wäsche)</Text>
              <Text>□ Gesellschaft und Betreuung</Text>
              <Text>□ Medikamentenerinnerung</Text>
              <Text>□ Begleitung zu Terminen</Text>
              <Text>□ Weitere: _______________________________________</Text>
              <Text>§ 4 Arbeitszeit</Text>
              <Text>Regelmäßige wöchentliche Arbeitszeit: __ Stunden.</Text>
              <Text>Davon: aktive Arbeitszeit __ Std. / Bereitschaftszeit __ Std.</Text>
              <Text>Einteilung der Arbeitszeit nach betrieblichen Erfordernissen.</Text>
              <Text>§ 5 Vergütung</Text>
              <Text>Bruttomonatslohn: ____________ Euro.</Text>
              <Text>Zahlung bis zum __ des Folgemonats auf das Konto: ____________.</Text>
              <Text>Kost und Logis werden als Sachbezug nach gesetzlichen Werten angerechnet (2026: Unterkunft ca. 278 €, Verpflegung ca. 313 €/Monat).</Text>
              <Text>§ 6 Urlaub</Text>
              <Text>Dem Arbeitnehmer stehen __ Werktage Urlaub pro Jahr zu (mind. 20 Tage bei 5-Tage-Woche).</Text>
              <Text>Urlaubsplanung in Abstimmung mit dem Arbeitgeber. Ersatzpflege während des Urlaubs organisiert der Arbeitgeber.</Text>
              <Text>§ 7 Krankheit</Text>
              <Text>Im Krankheitsfall besteht Anspruch auf Lohnfortzahlung für 6 Wochen (§ 3 EntgFG).</Text>
              <Text>Erkrankung ist unverzüglich zu melden. Ab dem 3. Krankheitstag ist eine ärztliche Bescheinigung vorzulegen.</Text>
              <Text>§ 8 Kündigung</Text>
              <Text>Während der Probezeit: Kündigungsfrist 2 Wochen.</Text>
              <Text>Nach der Probezeit: Kündigungsfrist 4 Wochen zum 15. oder zum Ende des Kalendermonats (§ 622 BGB).</Text>
              <Text>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</Text>
              <Text>§ 9 Verschwiegenheit</Text>
              <Text>Der Arbeitnehmer ist zur Verschwiegenheit über alle ihm bekannt gewordenen persönlichen und gesundheitlichen Informationen des Pflegebedürftigen verpflichtet. Diese Verpflichtung gilt auch nach Beendigung des Arbeitsverhältnisses.</Text>
              <Text>§ 10 Schlussbestimmungen</Text>
              <Text>Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform.</Text>
              <Text>Es gilt deutsches Recht.</Text>
              <Text>Ort, Datum: _________________________</Text>
              <Text>_________________________ &nbsp;&nbsp;&nbsp; _________________________</Text>
              <Text>Unterschrift Arbeitgeber &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift Arbeitnehmer</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="kost-logis" titel="Kost & Logis richtig regeln">
            <Text>
              Freie Unterkunft und Verpflegung sind kein Lohnzuschlag — sie werden als Sachbezugswert auf die Vergütung angerechnet. Das reduziert den auszuzahlenden Bruttolohn entsprechend.
            </Text>
            <Tabelle
              titel=""
              kopf={['Sachbezug', 'Wert 2026/Monat', 'Hinweis']}
              zeilen={[
                ['Unterkunft (eigenes Zimmer)', 'ca. 278 €', 'Amtlicher Sachbezugswert — kann je nach Bundesland leicht abweichen'],
                ['Verpflegung (3 Mahlzeiten)', 'ca. 313 €', 'Sachbezugswert Sozialversicherung'],
                ['Gesamt Sachbezug', 'ca. 591 €/Monat', 'Wird vom Bruttolohn abgezogen'],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kuendigung" titel="Kündigung — was gesetzlich gilt">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-10">
            {[
              { phase: 'Während der Probezeit', frist: '2 Wochen', hinweis: 'Probezeit max. 6 Monate. In dieser Zeit 2 Wochen Kündigungsfrist für beide Seiten.' },
              { phase: 'Nach der Probezeit (bis 2 Jahre)', frist: '4 Wochen zum 15. oder Monatsende', hinweis: 'Gesetzliche Grundkündigung nach § 622 Abs. 1 BGB.' },
              { phase: 'Ab 2 Jahren Betriebszugehörigkeit', frist: '1 Monat zum Monatsende', hinweis: 'Frist verlängert sich stufenweise mit der Dauer der Betriebszugehörigkeit.' },
              { phase: 'Außerordentliche Kündigung', frist: 'Sofort', hinweis: 'Bei wichtigem Grund (z.B. grobe Pflichtverletzung, Diebstahl). Begründungspflicht.' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-5 border border-pm-line">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[15px] font-bold text-pm-ink">{item.phase}</p>
                  <span className="text-[13px] font-bold text-pm-taupe bg-pm-shell px-3 py-1 rounded-full">{item.frist}</span>
                </div>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.hinweis}</p>
              </div>
            ))}
          </div>
            <MehrDazu
              label="Beschäftigungsmodelle im Überblick:"
              links={[{ href: "/pflegekraft-legal-beschaeftigen", text: "Pflegekraft legal beschäftigen" }, { href: "/pflegevertrag-aufsetzen", text: "Pflegevertrag aufsetzen — alle Pflichtangaben" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was muss in einen Pflegevertrag?', a: 'Vertragsparteien, Beginn/Laufzeit, Leistungsumfang, Arbeitszeit, Vergütung, Kost & Logis (Sachbezugswert), Urlaub, Krankheit, Kündigung, Verschwiegenheit.' },
                { q: 'Brauche ich beim Entsendemodell einen eigenen Arbeitsvertrag?', a: 'Nein — beim Entsendemodell über Primundus schließt die Familie nur einen Vertrag mit Primundus. Kein eigenes Arbeitsverhältnis mit der Kraft, keine deutschen Sozialabgaben.' },
                { q: 'Wie werden Kost und Logis verrechnet?', a: 'Als amtlicher Sachbezugswert: ca. 278 €/Monat Unterkunft + ca. 313 €/Monat Verpflegung = ca. 591 €/Monat Gesamtabzug vom Bruttolohn.' },
                { q: 'Wie lange ist die Kündigungsfrist bei einer Pflegekraft?', a: 'In der Probezeit: 2 Wochen. Nach der Probezeit: 4 Wochen zum 15. oder Monatsende. Bei sozialer Kündigung aus wichtigem Grund: sofort.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegevertrag-muster-vorlage" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
