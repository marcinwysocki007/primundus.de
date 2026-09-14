import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('diabetes-pflege-senioren', '25. April 2026')

const SECTIONS = [
  { id: 'besonderheiten', title: 'Besonderheiten bei Diabetes im Alter' },
  { id: 'alltag', title: 'Diabetesmanagement im Alltag' },
  { id: 'hypo', title: 'Hypoglykämie erkennen & handeln' },
  { id: 'pflegegrad', title: 'Pflegegrad & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Diabetes Pflege Senioren — Blutzucker, Hypoglykämie & 24h-Betreuung | Primundus',
  description: 'Diabetes Pflege bei älteren Menschen: Blutzuckermessen, Insulingabe, Hypoglykämie erkennen, richtige Ernährung und ab wann eine 24h-Betreuungskraft sinnvoll.',
  alternates: { canonical: 'https://primundus.de/diabetes-pflege-senioren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Diabetes Pflege Senioren | Primundus',
    description: 'Diabetesmanagement bei pflegebedürftigen Senioren — Blutzucker, Hypoglykämie, 24h-Betreuung.',
    url: 'https://primundus.de/diabetes-pflege-senioren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Diabetes Pflege Senioren — Blutzucker, Hypoglykämie und 24h-Betreuung',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/diabetes-pflege-senioren',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Diabetes Pflege Senioren', item: 'https://primundus.de/diabetes-pflege-senioren' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was macht eine 24h-Betreuungskraft bei Diabetes?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Betreuungskraft kann: Blutzucker messen, an Medikamenteneinnahme erinnern, zuckerarme Mahlzeiten kochen, Hypoglykämie-Zeichen beobachten und sofort reagieren. Was eine Betreuungskraft nicht tut: Insulin spritzen (das ist Behandlungspflege und übernimmt der ambulante Pflegedienst).' } },
      { '@type': 'Question', name: 'Was sind Zeichen einer Unterzuckerung?', acceptedAnswer: { '@type': 'Answer', text: 'Frühe Zeichen: Zittern, Schwitzen, Blässe, Herzrasen, Hunger. Fortgeschrittene Zeichen: Verwirrtheit, undeutliche Sprache, Aggression, Koordinationsstörungen. Schwere Hypoglykämie: Bewusstlosigkeit — sofort Rettungsdienst rufen.' } },
    ],
  },
]

export default function DiabetesPflegeSenioren() {
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
            { label: "Diabetes Pflege Senioren" },
          ]}
          augenbraue="Ratgeber Diabetes"
          titel="Diabetes Pflege Senioren — was bei der Betreuung zuhause wichtig ist"
          einleitung="Diabetes Typ 2 ist bei Senioren über 70 eine der häufigsten Erkrankungen — und bei pflegebedürftigen Menschen oft eines von mehreren gleichzeitigen Problemen. Die häusliche Pflege von Menschen mit Diabetes erfordert strukturiertes Management: regelmäßige Mahlzeiten, Blutzuckerkontrolle, Medikamentensicherheit und das sichere Erkennen einer Unterzuckerung."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Achtung: Hypoglykämie bei Demenz oft schwer erkennbar" ton="koralle">
              <Text>Wenn Demenz und Diabetes zusammentreffen, ist die Hypoglykämie-Erkennung besonders schwierig — Verwirrung und Aggression können sowohl Demenz-Symptom als auch Unterzuckerung sein. Im Zweifel immer Blutzucker messen.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="besonderheiten" titel="Besonderheiten bei Diabetes im Alter">
            <Punkte
              punkte={[
                { title: 'Hypoglykämie-Risiko ist höher', desc: 'Bei älteren Menschen treten Unterzuckerungen häufiger auf — durch unregelmäßiges Essen, nachlassendes Nierenfilterung (langsamerer Medikamentenabbau) und veränderte Gegenregulation. Hypoglykämien werden oft erst spät bemerkt.' },
                { title: 'Zielblutzucker ist anders', desc: 'Ältere Pflegebedürftige brauchen oft höhere Zielblutzucker-Werte als jüngere Diabetiker — weil Hypoglykämien für sie gefährlicher sind als leicht erhöhte Werte. Arzt bestimmt individuellen Zielbereich.' },
                { title: 'Medikamente wechselwirken', desc: 'Viele Senioren nehmen 5+ Medikamente gleichzeitig. Wechselwirkungen mit Diabetesmedikamenten sind häufig. Regelmäßige Medikamentengabe zur selben Zeit nach den Mahlzeiten ist entscheidend.' },
                { title: 'Dehydration verschlechtert Blutzucker', desc: 'Zu wenig Trinken erhöht den Blutzucker erheblich. Aktives Flüssigkeitsanbieten ist bei Diabetikern besonders wichtig.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Diabetesmanagement im Alltag — was die Betreuungskraft übernimmt">
            <Punkte
              punkte={[
                { title: '✓ Blutzucker messen', desc: 'Betreuungskraft lernt das Blutzuckermessen und führt es zu festgelegten Zeiten durch. Werte werden dokumentiert und bei Auffälligkeiten Angehörige und Arzt informiert.' },
                { title: '✓ Medikamentenerinnerung', desc: 'Orale Diabetesmedikamente werden zur richtigen Zeit und nach den Mahlzeiten erinnert. Keine Medikamentengabe gegen den Willen des Betroffenen.' },
                { title: '✓ Diabetesgerechte Mahlzeiten kochen', desc: 'Kohlenhydratreduzierte, ausgewogene Mahlzeiten zu festen Zeiten. Keine süßen Getränke. Frisches Obst in Maßen. Vollkornprodukte. Betreuungskraft lernt die Grundlagen der Diabeteskost.' },
                { title: '✓ Flüssigkeit aktiv anbieten', desc: 'Regelmäßig Wasser, ungesüßten Tee, Mineralwasser anbieten. Keine zuckerhaltigen Getränke. Trinkprotokoll bei Bedarf.' },
                { title: '✓ Hypoglykämie-Zeichen beobachten', desc: 'Betreuungskraft ist geschult auf frühe und späte Zeichen einer Unterzuckerung — und weiß wie zu handeln.' },
                { title: '✗ Insulin spritzen — Pflegedienst', desc: 'Insulininjektionen sind Behandlungspflege — übernimmt der ambulante Pflegedienst. Primundus koordiniert auf Wunsch die Zusammenarbeit.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="hypo" titel="Hypoglykämie erkennen & richtig handeln">
            <Text>
              Eine Hypoglykämie (Unterzuckerung) ist ein Notfall — besonders bei älteren Menschen. Jede Betreuungskraft muss die Zeichen kennen und sofort handeln.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-6">
            {[
              { phase: 'Frühe Zeichen', zeichen: 'Zittern, Schwitzen, Blässe, Herzrasen, Hunger, Unruhe', handlung: 'Sofort Traubenzucker (15–20 g), Fruchtsaft oder Orangensaft geben. Blutzucker nach 15 Minuten nochmals messen.' },
              { phase: 'Fortgeschrittene Zeichen', zeichen: 'Verwirrtheit, undeutliche Sprache, Aggression, Koordinationsstörungen', handlung: 'Sofortige Glukosegabe wenn noch schlucken möglich. Arzt oder Rettungsdienst anrufen. Nicht alleine lassen.' },
              { phase: 'Schwere Hypoglykämie', zeichen: 'Bewusstlosigkeit, Krampfanfall', handlung: 'SOFORT Rettungsdienst (112) rufen. Nichts in den Mund. Stabile Seitenlage wenn möglich.' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-pm-taupe-light mb-1">{item.phase}</p>
                <p className="text-[14px] font-semibold text-pm-ink mb-1">Zeichen: {item.zeichen}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">Handlung: {item.handlung}</p>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad & Kassenzuschüsse bei Diabetes">
            <Text>
              Diabetes allein führt oft zu PG 2–3. Wenn zusätzlich Einschränkungen durch Folgekomplikationen (Neuropathie, Niereninsuffizienz, eingeschränkte Mobilität) bestehen, sind höhere Pflegegrade möglich.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-3 mb-10">
            {[
              ['Kein weiterer Hilfebedarf durch Diabetes', 'Ggf. kein PG', '—'],
              ['Leichter Hilfebedarf, Blutzuckerkontrolle nötig', 'PG 1–2', '— bis 347 €/Mo'],
              ['Erheblicher Hilfebedarf durch Diabetes + Folgekomplikationen', 'PG 2–3', '347–599 €/Mo'],
              ['Schwerer Hilfebedarf (Mobilität, Wundversorgung, Sehverlust)', 'PG 3–4', '599–800 €/Mo'],
            ].map(([situation, pg, pgeld]) => (
              <div key={situation} className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-pm-line">
                <span className="text-[13px] text-pm-body flex-1">{situation}</span>
                <span className="text-[13px] font-bold text-pm-ink px-4">{pg}</span>
                <span className={`text-[13px] font-bold ${pgeld === '—' ? 'text-[#C8C3BA]' : 'text-pm-green'}`}>{pgeld}</span>
              </div>
            ))}
          </div>
            <MehrDazu
              label="Pflegegrad beantragen:"
              links={[{ href: "/pflegegrad-beantragen", text: "Schritt-für-Schritt Anleitung" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was macht eine 24h-Betreuungskraft bei Diabetes?', a: 'Blutzucker messen, Medikamentenerinnerung, diabetesgerechte Mahlzeiten kochen, Flüssigkeit anbieten, Hypoglykämie-Zeichen beobachten. Insulin spritzen ist Behandlungspflege — übernimmt ambulanter Pflegedienst.' },
                { q: 'Was sind Zeichen einer Unterzuckerung?', a: 'Früh: Zittern, Schwitzen, Herzrasen. Fortgeschritten: Verwirrtheit, Aggression, undeutliche Sprache. Schwer: Bewusstlosigkeit. Bei Bewusstlosigkeit: sofort 112 rufen.' },
                { q: 'Was darf eine Betreuungskraft bei Diabetes NICHT tun?', a: 'Insulin spritzen — das ist Behandlungspflege und darf nur von examinierten Pflegekräften oder Ärzten durchgeführt werden. Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem Pflegedienst.' },
                { q: 'Wie hoch ist der Pflegegrad bei Diabetes?', a: 'Diabetes allein führt oft zu PG 1–2. Mit Folgekomplikationen (Neuropathie, Sehverlust, Niereninsuffizienz, Mobilitätseinschränkungen) sind PG 2–4 möglich.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="diabetes-pflege-senioren" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
