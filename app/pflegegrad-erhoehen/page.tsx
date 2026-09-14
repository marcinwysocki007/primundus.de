import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-erhoehen', '25. April 2026')

const SECTIONS = [
  { id: 'wann', title: 'Wann Höherstufung beantragen?' },
  { id: 'antrag', title: 'Antrag stellen — so geht es' },
  { id: 'vorbereitung', title: 'Begutachtung vorbereiten' },
  { id: 'unterschied', title: 'Was sich finanziell ändert' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad erhöhen — wann & wie Höherstufung beantragen',
  description: 'Pflegegrad erhöhen 2026: Wann ein Antrag auf Höherstufung sinnvoll ist, wie man ihn stellt und wie die Begutachtung vorbereitet wird. Mit Checkliste.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-erhoehen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegegrad erhöhen — Höherstufung beantragen | Primundus',
    description: 'Wann und wie man einen höheren Pflegegrad beantragt — Anleitung und Vorbereitung.',
    url: 'https://primundus.de/pflegegrad-erhoehen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad erhöhen — wann und wie Höherstufung beantragen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-erhoehen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad erhöhen', item: 'https://primundus.de/pflegegrad-erhoehen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie beantrage ich einen höheren Pflegegrad?', acceptedAnswer: { '@type': 'Answer', text: 'Formloser schriftlicher Antrag bei der Pflegekasse: "Ich beantrage eine Überprüfung meines Pflegegrades aufgrund einer Verschlechterung meines Pflegezustands." Danach neue Begutachtung durch den MD. Pflegetagebuch 1–2 Wochen führen um die Verschlechterung zu dokumentieren.' } },
      { '@type': 'Question', name: 'Gibt es eine Sperrfrist?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — einen Antrag auf Höherstufung kann man jederzeit stellen, es gibt keine Sperrfrist. Bei einer Wiederbegutachtung wird der aktuelle Pflegebedarf neu bewertet.' } },
    ],
  },
]

export default function PflegegradErhoehen() {
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
            { label: "Pflegegrad erhöhen" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad erhöhen — wann & wie Höherstufung beantragen"
          einleitung="Wenn sich der Pflegebedarf verschlechtert, sollte sofort ein Antrag auf Höherstufung gestellt werden — denn jede Pflegegrad-Stufe bedeutet hunderte Euro mehr Kassenzuschuss pro Monat. Es gibt keine Sperrfrist. Der Antrag ist formlos, die Leistungen gelten ab Antragsdatum."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Was sich bei Höherstufung ändert</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {['Von → Nach', 'Mehr Pflegegeld/Monat', 'Mehr/Jahr (Pflegegeld)'].map(h => (
                      <th key={h} className="text-left text-[12px] font-semibold text-pm-mute pb-2 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-pm-line">
                  {[
                    ['PG 1 → PG 2', '+ 347 €/Monat', '+ 4.164 €/Jahr'],
                    ['PG 2 → PG 3', '+ 252 €/Monat', '+ 3.024 €/Jahr'],
                    ['PG 3 → PG 4', '+ 201 €/Monat', '+ 2.412 €/Jahr'],
                    ['PG 4 → PG 5', '+ 190 €/Monat', '+ 2.280 €/Jahr'],
                  ].map(([stufe, mehr, jahr]) => (
                    <tr key={stufe}>
                      <td className="py-2 pr-4 text-[14px] font-semibold text-pm-ink">{stufe}</td>
                      <td className="py-2 pr-4 text-[14px] font-bold text-pm-green">{mehr}</td>
                      <td className="py-2 text-[14px] text-pm-body">{jahr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </Vorspann>

          <DunklerAbschnitt
            id="wann"
            titel="Wann sollte man Höherstufung beantragen?"
            einleitung="Ein Antrag auf Höherstufung ist sinnvoll wenn der Pflegebedarf dauerhaft gestiegen ist. Das kann durch Verschlechterung einer bestehenden Erkrankung, eine neue Diagnose oder eine allgemeine Zunahme der Abhängigkeit passieren."
            punkte={[
              { title: 'Körperliche Verschlechterung', desc: 'Neuer Sturz mit Folgen, Zunahme von Schmerzen oder Einschränkungen, Erkrankungsschübe, Verlust von Alltagsfähigkeiten.' },
              { title: 'Kognitive Verschlechterung', desc: 'Demenzverlauf schreitet fort — mehr Orientierungslosigkeit, neue Verhaltensauffälligkeiten (Weglaufen), nächtliche Unruhe nimmt zu.' },
              { title: 'Neue Diagnose', desc: 'Zusätzliche Erkrankung (Schlaganfall, Parkinson-Fortschritt, Herzinsuffizienz) erhöht den Pflegebedarf deutlich.' },
              { title: 'Erhöhter Pflegeaufwand', desc: 'Angehörige bemerken: Die Pflege dauert länger, ist körperlich anstrengender, erfordert Hilfe bei mehr Bereichen als früher.' },
            ]}
          />

          <Abschnitt id="antrag" titel="Antrag stellen — so einfach geht es">
            <Text>
              Der Antrag auf Höherstufung ist formlos — ein kurzes Schreiben an die Pflegekasse reicht aus. Kein spezielles Formular nötig.
            </Text>
            <Kasten augenbraue="Musterformulierung für den Antrag" ton="gruen">
              <Text>"Sehr geehrte Damen und Herren, hiermit beantrage ich für [Name des Versicherten], geb. [Datum], Versichertennummer [Nummer], eine Überprüfung des aktuellen Pflegegrades aufgrund einer erheblichen Verschlechterung des Gesundheitszustands. Ich bitte um zeitnahe Begutachtung. Mit freundlichen Grüßen, [Unterschrift]"</Text>
            </Kasten>
            <Text>
              <strong>Wichtig:</strong> Das Datum des Antrags ist entscheidend — ab diesem Datum gelten höhere Leistungen wenn die Höherstufung bewilligt wird. Nicht warten.
            </Text>
            <MehrDazu
              label="Antrag vollständig erklärt:"
              links={[{ href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen — Schritt für Schritt" }]}
            />
          </Abschnitt>

          <Abschnitt id="vorbereitung" titel="Begutachtung für Höherstufung vorbereiten">
            <Text>
              Nach dem Antrag kommt ein neuer Begutachtungstermin. Die Vorbereitung ist dieselbe wie beim Erstantrag — mit besonderem Fokus auf die Verschlechterungen seit der letzten Begutachtung.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-6">
            {[
              { check: 'Pflegetagebuch der letzten 2 Wochen — mit konkreten Beispielen der Verschlechterung' },
              { check: 'Neue Arztberichte und Befunde seit der letzten Begutachtung' },
              { check: 'Vertrauensperson dabei haben die die Verschlechterung schildern kann' },
              { check: 'Schlechtesten Tag schildern — nicht den guten Tag' },
              { check: 'Konkret benennen was früher noch ging und jetzt nicht mehr' },
            ].map((item) => (
              <div key={item.check} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-pm-body">{item.check}</p>
              </div>
            ))}
          </div>
            <MehrDazu
              label="Alle Tipps:"
              links={[{ href: "/pflegegrad-begutachtung-vorbereiten", text: "MD-Begutachtung vorbereiten — Checkliste & 7 Tipps" }]}
            />
          </Abschnitt>

          <Abschnitt id="unterschied" titel="Was sich bei Höherstufung finanziell ändert">
            <Text>
              Jede Pflegegrad-Stufe bedeutet mehr Kassenzuschüsse — und damit einen niedrigeren Eigenanteil bei der 24h-Pflege.
            </Text>
            <Tabelle
              titel=""
              kopf={['Pflegegrad', 'Pflegegeld/Mo', 'Sachleistungen/Mo', 'Entlastungsbudget/Jahr']}
              zeilen={[
                ['PG 1', '—', '—', '—'],
                ['PG 2', '347 €', '796 €', '3.539 €'],
                ['PG 3', '599 €', '1.497 €', '3.539 €'],
                ['PG 4', '800 €', '1.859 €', '3.539 €'],
                ['PG 5', '990 €', '2.299 €', '3.539 €'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Höherstufung">
            <Fragen
              fragen={[
                { q: 'Wie beantrage ich einen höheren Pflegegrad?', a: 'Formloser schriftlicher Antrag bei der Pflegekasse: "Ich beantrage eine Überprüfung meines Pflegegrades aufgrund einer Verschlechterung." Danach neue MD-Begutachtung. Pflegetagebuch 1–2 Wochen führen.' },
                { q: 'Gibt es eine Sperrfrist?', a: 'Nein — Antrag auf Höherstufung kann jederzeit gestellt werden. Der aktuelle Pflegebedarf wird neu bewertet.' },
                { q: 'Ab wann gelten die höheren Leistungen?', a: 'Ab Antragsdatum — nicht ab dem Begutachtungstermin. Deshalb sofort Antrag stellen, auch wenn die Begutachtung erst Wochen später stattfindet.' },
                { q: 'Was wenn die Höherstufung abgelehnt wird?', a: 'Innerhalb eines Monats Widerspruch einlegen. Neues Pflegetagebuch und aktualisierte Arztberichte nachreichen. Widersprüche sind bei Höherstufungsanträgen häufig erfolgreich.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-erhoehen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
