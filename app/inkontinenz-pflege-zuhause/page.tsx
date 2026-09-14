import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Punkte, RatgeberKopf, RatgeberRumpf,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('inkontinenz-pflege-zuhause', '25. April 2026')

const SECTIONS = [
  { id: 'formen', title: 'Formen der Inkontinenz' },
  { id: 'alltag', title: 'Inkontinenz im Pflegealltag' },
  { id: 'hilfsmittel', title: 'Hilfsmittel & Kassenzuschuss' },
  { id: 'wuerde', title: 'Würde bewahren — wie Gespräche gelingen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Inkontinenz Pflege zuhause — Hilfsmittel, Alltag & Würde',
  description: 'Inkontinenz bei pflegebedürftigen Senioren: Formen, Hilfsmittel (Kassenzuschuss bis 40 €/Mo), Alltagstipps und wie man Würde beim Umgang bewahrt.',
  alternates: { canonical: 'https://primundus.de/inkontinenz-pflege-zuhause' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Inkontinenz Pflege zuhause | Primundus',
    description: 'Inkontinenz in der häuslichen Pflege — Hilfsmittel, Alltag und Würde bewahren.',
    url: 'https://primundus.de/inkontinenz-pflege-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Inkontinenz Pflege zuhause — Hilfsmittel, Alltag und Würde',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/inkontinenz-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Inkontinenz Pflege zuhause', item: 'https://primundus.de/inkontinenz-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wer zahlt Inkontinenzmaterial?', acceptedAnswer: { '@type': 'Answer', text: 'Inkontinenzmaterial ist ein Hilfsmittel nach SGB V — wird mit Rezept von der Krankenversicherung übernommen. Zusätzlich gibt es die Pflegehilfsmittel-Pauschale (42 €/Monat) der Pflegekasse für saugende Schutzeinlagen. Rezept beim Hausarzt holen.' } },
    ],
  },
]

export default function InkontinenzPflegeZuhause() {
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
            { label: "Inkontinenz Pflege" },
          ]}
          augenbraue="Ratgeber Inkontinenz"
          titel="Inkontinenz Pflege zuhause — Hilfsmittel, Alltag & Würde"
          einleitung="Inkontinenz ist eines der häufigsten und gleichzeitig schamhaftesten Pflegethemen. Rund 80 % der pflegebedürftigen Senioren sind davon betroffen — in unterschiedlichem Ausmaß. Der richtige Umgang schützt die Würde, verhindert Infektionen und Wundliegen, und macht den Alltag für alle leichter."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Inkontinenzmaterial: Rezept beim Arzt → Krankenkasse übernimmt',
                'Pflegehilfsmittel-Pauschale: 42 €/Monat (Pflegekasse) für saugende Einlagen',
                'Regelmäßige Toilettengänge verhindern viele Inkontinenz-Episoden',
                'Hautpflege nach jeder Versorgung ist Pflicht — Wundliegen vermeiden',
                'Würde: niemals kommentieren, immer diskret, sachlich und ruhig bleiben',
                '24h-Kraft: kennt Toilettenrhythmus, erkennt Anzeichen, handelt sofort',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="formen" titel="Formen der Inkontinenz">
            <Punkte
              punkte={[
                { title: 'Dranginkontinenz', desc: 'Plötzlicher, starker Harndrang der nicht lange hinausgezögert werden kann. Häufige Ursache: überaktive Blase, neurologische Erkrankungen (Schlaganfall, Parkinson, Demenz). Hilft: regelmäßige Toilettengänge alle 2 Stunden.' },
                { title: 'Belastungsinkontinenz', desc: 'Unwillkürlicher Harnverlust bei Husten, Niesen, Lachen oder körperlicher Belastung. Ursache: geschwächter Beckenboden. Häufiger bei Frauen. Hilfe: Beckenbodenkräftigung, Einlagen.' },
                { title: 'Überlaufinkontinenz', desc: 'Blase leert sich nie vollständig, läuft über. Ursache: geschwächter Blasenmuskel, Prostataprobleme. Kann auf Katheterversorgung durch Pflegedienst hinauslaufen.' },
                { title: 'Stuhlinkontinenz', desc: 'Besonders belastend für Betroffene und Pflegende. Ursache: geschwächter Schließmuskel, Nervenerkrankungen, Demenz. Klarer Toilettenrhythmus (nach Mahlzeiten) hilft.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Inkontinenz im Pflegealltag — konkrete Maßnahmen">
            <Punkte
              punkte={[
                { title: 'Toilettenrhythmus einführen', desc: 'Regelmäßige Toilettengänge alle 2 Stunden — unabhängig ob Drang vorhanden. Besonders nach Mahlzeiten und Aufstehen wichtig. Verhindert viele Inkontinenz-Episoden.' },
                { title: 'Flüssigkeit nicht reduzieren', desc: 'Viele Senioren trinken zu wenig weil sie Inkontinenz fürchten — das verschlechtert alles (Blasenentzündungen, Verstopfung, Verwirrtheit). Ausreichend trinken (1,5 L), Flüssigkeit gut über den Tag verteilen.' },
                { title: 'Wege zur Toilette sichern', desc: 'Nachts Beleuchtung an, kein Kabel auf dem Weg, Toilette gut erreichbar. Nachtstühle können die Wege kürzen. Schneller Zugang zur Toilette ist oft alles was nötig ist.' },
                { title: 'Hautpflege nach jeder Versorgung', desc: 'Haut gründlich reinigen und trocknen, dann mit Pflegecreme schützen. Feuchtigkeit ist der Hauptauslöser von Wundliegen und Pilzinfektionen.' },
                { title: 'Richtiges Inkontinenzmaterial wählen', desc: 'Nicht zu groß, nicht zu klein — Arzt oder Stomatherapeut empfiehlt das passende Produkt. Einlagen, Windelhosen, aufsaugende Unterlagen je nach Bedarf.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="hilfsmittel" titel="Hilfsmittel & Kassenzuschuss">
            {/* VORLAGE: unverändert übernommen */}
            <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">Inkontinenzmaterial — Krankenversicherung</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-2">Inkontinenzmaterial ist ein Hilfsmittel nach SGB V. Mit Rezept vom Hausarzt wird es von der Krankenversicherung übernommen — kein Eigenanteil (außer Kassenrezept-Zuzahlung 10 %). Lieferung nach Hause über Vertragspartner möglich.</p>
              <p className="text-[13px] text-pm-mute">Rezept beim Hausarzt → Apotheke oder Sanitätshaus → Abrechnung mit KV</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">Pflegehilfsmittel-Pauschale — Pflegekasse</p>
              <p className="text-[14px] text-pm-body leading-relaxed mb-2">Die Pflegekasse zahlt zusätzlich 42 €/Monat Pflegehilfsmittel-Pauschale — für saugende Bettschutzeinlagen und andere Verbrauchsmaterialien. Separat beantragen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-pm-line">
              <p className="text-[15px] font-bold text-pm-ink mb-2">Nachtstuhl / Toilettenstuhl — Hilfsmittel</p>
              <p className="text-[14px] text-pm-body leading-relaxed">Mit Rezept von Arzt von der Krankenkasse als Hilfsmittel übernommen. Für Menschen die nachts oder bei eingeschränkter Mobilität die Toilette nicht mehr sicher erreichen.</p>
            </div>
          </div>
          </Abschnitt>

          <DunklerAbschnitt
            id="wuerde"
            titel="Würde bewahren — wie Gespräche und Versorgung gelingen"
            einleitung="Inkontinenz ist für Betroffene zutiefst beschämend — besonders für Menschen die ihr Leben lang selbstständig und würdevoll waren. Der Umgang der Pflegekraft entscheidet ob Inkontinenz zur Qual wird oder zur Normalität des Alltags."
            punkte={[
              { title: 'Niemals kommentieren oder werten', desc: 'Kein Seufzen, keine Kommentare, keine Blicke. Inkontinenz ist nicht das Versagen der Person — es ist eine medizinische Situation.' },
              { title: 'Sachlich und ruhig bleiben', desc: '"Ich helfe dir jetzt kurz" — fertig. Keine langen Ankündigungen, kein Mitleid, kein Theater. Je normaler der Umgang, desto würdevoller für den Betroffenen.' },
              { title: 'Privatsphäre wahren', desc: 'Türe schließen, Vorhang ziehen. Die Versorgung findet zwischen zwei Menschen statt — nicht vor anderen.' },
              { title: 'Selbstbestimmung ermöglichen', desc: 'So viel wie möglich selbst machen lassen — auch wenn es länger dauert. Das Ziel ist nicht Effizienz, sondern Würde.' },
            ]}
          />

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wer zahlt Inkontinenzmaterial?', a: 'Mit Rezept vom Hausarzt übernimmt die Krankenversicherung Inkontinenzmaterial. Zusätzlich: Pflegehilfsmittel-Pauschale (42 €/Monat) der Pflegekasse für Verbrauchsmaterialien.' },
                { q: 'Wie oft muss Inkontinenzmaterial gewechselt werden?', a: 'Bei Bedarf — regelmäßig, aber nicht nach festen Zeiten. Feuchtigkeit sofort entfernen (Hautschutz). Nachts 1–2 Mal wechseln je nach Ausmaß.' },
                { q: 'Kann Inkontinenz behandelt werden?', a: 'Oft teilweise: Beckenbodenkräftigung bei Belastungsinkontinenz, Blasentraining bei Dranginkontinenz, Medikamente. Arzt oder Kontinenzberatung aufsuchen.' },
                { q: 'Wie redet man mit einem pflegebedürftigen Menschen über Inkontinenz?', a: 'Sachlich, ruhig, ohne Wertung: "Ich helfe dir dabei." Thema nicht vermeiden aber auch nicht dramatisieren. Das Signal: Das ist normal, das lösen wir gemeinsam.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="inkontinenz-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
