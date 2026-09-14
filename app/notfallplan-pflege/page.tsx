import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('notfallplan-pflege', '25. April 2026')

const SECTIONS = [
  { id: 'warum', title: 'Warum ein Notfallplan?' },
  { id: 'inhalt', title: 'Was in den Notfallplan gehört' },
  { id: 'vorlage', title: 'Vorlage zum Ausfüllen' },
  { id: 'aufbewahren', title: 'Wo aufbewahren & aktuell halten' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Notfallplan Pflege — was hineingehört & Vorlage | Primundus',
  description: 'Notfallplan für die Pflege zu Hause: was hineingehört, wer informiert werden muss und wie Sie den Plan aktuell halten — als Vorlage zum Ausfüllen.',
  alternates: { canonical: 'https://primundus.de/notfallplan-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Notfallplan Pflege — Vorlage & Anleitung | Primundus',
    description: 'Notfallplan für die häusliche Pflege — was reingehört und wie man ihn aktuell hält.',
    url: 'https://primundus.de/notfallplan-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Notfallplan Pflege — was hineingehört und Vorlage',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/notfallplan-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Notfallplan Pflege', item: 'https://primundus.de/notfallplan-pflege' },
    ],
  },
]

export default function NotfallplanPflege() {
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
            { label: "Notfallplan Pflege" },
          ]}
          augenbraue="Ratgeber Notfall"
          titel="Notfallplan Pflege — was hineingehört & Vorlage"
          einleitung="Im Notfall zählen Sekunden. Wer dann erst suchen muss welche Medikamente jemand nimmt, welcher Arzt zuständig ist, oder wer bei einem Sturz als Erstes angerufen werden soll — verliert wertvolle Zeit. Ein Notfallplan kostet einmal 30 Minuten und gibt Jahre lang Sicherheit."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="warum" titel="Warum ein Notfallplan?">
            <Text>
              Ein Notfallplan ist für drei Situationen gedacht: Akuter Notfall (Sturz, Herzinfarkt, Bewusstlosigkeit), Ausfall der Hauptpflegeperson (Krankheit, Unfall), und Wissenstransfer wenn eine neue Betreuungskraft beginnt. Mit einem vollständigen Notfallplan kann jede Person die den Pflegebedürftigen vorfindet sofort richtig handeln — auch wenn sie die Details nicht kennt.
            </Text>
          </Abschnitt>

          <Abschnitt id="inhalt" titel="Was in den Notfallplan gehört">
            <Gruppen
              haken
              gruppen={[
                {
                  title: 'Persönliche Daten',
                  punkte: [
                    'Vollständiger Name, Geburtsdatum',
                    'Adresse (auch für Rettungsdienst-Angabe)',
                    'Versicherungsnummer Kranken- und Pflegekasse',
                    'Pflegegrad',
                    'Blutgruppe (wenn bekannt)',
                  ],
                },
                {
                  title: 'Notfallkontakte',
                  punkte: [
                    'Rettungsdienst: 112',
                    'Hausarzt: Name, Telefon, Adresse',
                    'Facharzt(e): Name, Telefon',
                    'Hauptansprechpartner Familie: Name, Telefon (1. Kontakt)',
                    'Weiterer Angehöriger: Name, Telefon (2. Kontakt)',
                    'Primundus: 089 200 000 830',
                    'Nachbar mit Schlüssel: Name, Telefon',
                  ],
                },
                {
                  title: 'Medikamente',
                  punkte: [
                    'Vollständige Medikamentenliste (Name, Dosis, Einnahmezeit)',
                    'Allergien und Unverträglichkeiten',
                    'Besondere Hinweise (z.B. Blutverdünner — wichtig bei Verletzungen)',
                    'Ort der Medikamente im Haushalt',
                  ],
                },
                {
                  title: 'Diagnosen & Vorerkrankungen',
                  punkte: [
                    'Hauptdiagnosen (z.B. Demenz PG 3, Herzinsuffizienz, Parkinson)',
                    'Implantate (Herzschrittmacher, Hüftprothese)',
                    'Für Rettungsdienst wichtige Informationen',
                  ],
                },
                {
                  title: 'Rechtliche Dokumente',
                  punkte: [
                    'Vorsorgevollmacht — Ort im Haushalt und bevollmächtigte Person',
                    'Patientenverfügung — Ort im Haushalt',
                    'Organspendeausweis (ja/nein)',
                  ],
                },
                {
                  title: 'Für die Betreuungskraft',
                  punkte: [
                    'Was tun bei Sturz? (Nicht sofort aufrichten, Zustand prüfen, Arzt/112)',
                    'Was tun bei Bewusstlosigkeit? (112, stabile Seitenlage, Angehörige)',
                    'Was tun bei Herzinfarkt-Verdacht? (112, ruhig halten)',
                    'Erkennbare Zeichen einer Hypoglykämie (falls Diabetes)',
                    'Was gehört zu einer typisch guten vs. schlechten Verfassung?',
                  ],
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vorlage" titel="Vorlage: Notfallplan zum Ausfüllen">
            {/* break-words: Unterstrich-Zeilen haben keine Umbruchstelle und ragten auf 360 px über den Rand */}
            <div className="break-words">
              <Kasten augenbraue="NOTFALLPLAN — zum Ausdrucken und Aufhängen">
                <Text>
                  <strong>PERSONALIEN</strong><br />
                  Name: _________________________ Geb.: _____________<br />
                  Adresse: _____________________________________________<br />
                  Pflegegrad: _____ Blutgruppe: _______
                </Text>
                <Text>
                  <strong>NOTFALL-TELEFONNUMMERN</strong><br />
                  Rettungsdienst: <strong>112</strong><br />
                  Hausarzt: _____________ Tel: ________________<br />
                  Angehörige (1): ___________ Tel: ________________<br />
                  Angehörige (2): ___________ Tel: ________________<br />
                  Primundus: <strong>089 200 000 830</strong>
                </Text>
                <Text>
                  <strong>MEDIKAMENTE (mit Uhrzeit)</strong><br />
                  1. ______________________ Dosis: ______ Uhrzeit: ______<br />
                  2. ______________________ Dosis: ______ Uhrzeit: ______<br />
                  3. ______________________ Dosis: ______ Uhrzeit: ______<br />
                  Allergien: ___________________________________________
                </Text>
                <Text>
                  <strong>DIAGNOSEN</strong><br />
                  _____________________________________________________
                </Text>
                <Text>
                  <strong>VORSORGEVOLLMACHT liegt: _______________</strong><br />
                  <strong>Bevollmächtigte Person: ________ Tel: _______</strong>
                </Text>
              </Kasten>
            </div>
          </Abschnitt>

          <Abschnitt id="aufbewahren" titel="Wo aufbewahren & wie aktuell halten">
            <Punkte
              punkte={[
                { title: 'An der Kühlschranktür aufhängen', desc: 'Rettungsdienst schaut standardmäßig an den Kühlschrank — das ist die bekannteste Ablage für Notfallpläne.' },
                { title: 'Kopie beim Hausarzt', desc: 'Der Arzt hat alle Informationen bei einem Notfall-Hausbesuch.' },
                { title: 'Kopie bei der Betreuungskraft', desc: 'Kraft findet alle Informationen sofort — besonders wichtig in der Eingewöhnungsphase.' },
                { title: 'Digital sichern', desc: 'Foto auf dem Smartphone aller Angehörigen — auch aus der Ferne sofort verfügbar.' },
              ]}
            />
            <Kasten titel="Aktuell halten — einmal im Quartal prüfen" ton="gruen">
              <Text>Medikamente, Ärzte und Kontakte ändern sich. Einmal pro Quartal 10 Minuten einplanen um den Notfallplan zu aktualisieren. Besonders nach Krankenhausaufenthalten, Medikamentenumstellungen oder Kraftwechseln.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was muss in einen Pflegenotfallplan?', a: 'Persönliche Daten, Notfallkontakte (112, Arzt, Familie, Primundus), Medikamentenliste mit Allergien, Diagnosen, Ort der Vorsorgevollmacht. Plus für die Kraft: was tun bei Sturz/Bewusstlosigkeit.' },
                { q: 'Wo sollte der Notfallplan aufbewahrt werden?', a: 'An der Kühlschranktür (Rettungsdienst-Standard), Kopie beim Arzt, Kopie bei der Betreuungskraft, digital gesichert auf dem Smartphone aller Angehörigen.' },
                { q: 'Wie oft sollte der Notfallplan aktualisiert werden?', a: 'Einmal im Quartal prüfen. Immer aktualisieren nach: Medikamentenumstellungen, neuen Diagnosen, Ärztwechsel, Kraftwechsel, Umzug.' },
                { q: 'Was unterscheidet Notfallplan von Patientenverfügung?', a: 'Der Notfallplan ist für akute Notfälle — praktische Informationen für Rettungsdienst und Betreuungskraft. Die Patientenverfügung regelt medizinische Entscheidungen bei Bewusstlosigkeit (lebenserhaltende Maßnahmen).' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="notfallplan-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
