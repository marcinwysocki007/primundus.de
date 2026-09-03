import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | Primundus',
  description: 'Allgemeine Geschäftsbedingungen der Primundus für die 24-Stunden-Betreuung zu Hause durch eigene, angestellte Betreuungskräfte.',
  alternates: { canonical: 'https://primundus.de/agb' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-pm-paper">
      <div className="max-w-article mx-auto px-5 py-10 md:py-16">

        <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-pm-taupe transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-pm-ink">AGB</span>
        </nav>

        <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="text-[15px] text-pm-mute mb-10">
          Stand: 3. September 2026 · Primundus — ein Angebot der PRIMUNDUS Sp. z o.o.
        </p>

        <div className="space-y-8 text-[15px] text-pm-body leading-[1.75]">

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-3">
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für sämtliche Verträge zwischen der
              PRIMUNDUS Sp. z o.o., Poznańska 21/48, 00-685 Warszawa, Polen (nachfolgend „Primundus") und
              ihren Kundinnen und Kunden (nachfolgend „Kunde") über die 24-Stunden-Betreuung durch Betreuungskräfte
              aus der Europäischen Union zur häuslichen Betreuung pflegebedürftiger Personen in Deutschland.
            </p>
            <p className="mb-3">
              (2) Primundus erbringt die häusliche Betreuung durch eigene, bei der Unternehmensgruppe angestellte
              Betreuungskräfte (Entsendung mit A1-Bescheinigung). Vertragsgegenstand sind Betreuung, Grundpflege
              und hauswirtschaftliche Versorgung im Haushalt des Kunden sowie Auswahl, Anreise und Wechsel der
              Betreuungskraft. Behandlungspflege und medizinische Leistungen sind nicht Vertragsgegenstand; sie
              bleiben einem zugelassenen Pflegedienst vorbehalten.
            </p>
            <p>
              (3) Abweichende, entgegenstehende oder ergänzende Bedingungen des Kunden werden nur dann Vertragsbestandteil,
              wenn Primundus ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 2 Leistungen von Primundus</h2>
            <p className="mb-3">
              (1) Primundus beschäftigt selbständig tätige Betreuungskräfte oder Betreuungskräfte im Entsendemodell
              (A1-Bescheinigung) zur 24-Stunden-Betreuung pflegebedürftiger Personen im häuslichen Umfeld.
            </p>
            <p className="mb-3">
              (2) Die Tätigkeit der vermittelten Betreuungskraft umfasst hauswirtschaftliche Versorgung,
              Grundpflege im Rahmen der gesetzlich zulässigen Tätigkeiten, soziale Betreuung sowie Gesellschaft.
              Medizinische Behandlungspflege (z.B. Injektionen, Wundversorgung, Medikamentengabe nach § 37 SGB V)
              ist ausdrücklich nicht Bestandteil der Leistung und bedarf eines zugelassenen Pflegedienstes.
            </p>
            <p>
              (3) Primundus übernimmt die Auswahl geeigneter Betreuungskräfte anhand der vom Kunden bereitgestellten
              Informationen zum Pflegebedarf, organisiert die Anreise, den turnusmäßigen Wechsel sowie die laufende
              Kommunikation zwischen Kunde und Betreuungskraft.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 3 Vertragsabschluss</h2>
            <p className="mb-3">
              (1) Die Darstellung der Leistungen auf der Webseite primundus.de stellt kein rechtlich bindendes
              Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.
            </p>
            <p className="mb-3">
              (2) Nach einem unverbindlichen Beratungsgespräch erstellt Primundus dem Kunden ein individuelles
              Angebot in Textform. Der Vertrag kommt durch Annahme dieses Angebots durch den Kunden — schriftlich,
              per E-Mail oder über das Bestätigungsformular — zustande.
            </p>
            <p>
              (3) Bei Privatkunden besteht ein gesetzliches Widerrufsrecht gemäß § 4 dieser AGB.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 4 Widerrufsrecht für Verbraucher</h2>
            <p className="mb-3">
              (1) Verbraucher im Sinne von § 13 BGB haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              den Vertrag zu widerrufen. Die Widerrufsfrist beginnt mit dem Tag des Vertragsschlusses.
            </p>
            <p className="mb-3">
              (2) Der Widerruf ist zu richten an: Primundus, Landsberger Str. 155, 80687 München,
              E-Mail: <a href="mailto:info@primundus.de" className="text-pm-taupe underline hover:text-pm-taupe-deep">info@primundus.de</a>.
              Eine eindeutige Erklärung (z.B. per Brief oder E-Mail) genügt. Zur Wahrung der Widerrufsfrist reicht
              die rechtzeitige Absendung des Widerrufs.
            </p>
            <p>
              (3) Wünscht der Kunde, dass die Betreuungsleistung vor Ablauf der Widerrufsfrist beginnt, hat er
              dies ausdrücklich zu erklären. In diesem Fall schuldet er bei Widerruf einen anteiligen Betrag für
              bereits erbrachte Leistungen.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 5 Pflichten des Kunden</h2>
            <p className="mb-3">
              (1) Der Kunde stellt der Betreuungskraft kostenfrei ein eigenes, beheiztes und abschließbares Zimmer mit
              Bett, Schrank und Tageslicht zur Verfügung. Die Mitbenutzung von Bad, Küche und Aufenthaltsräumen
              ist sicherzustellen.
            </p>
            <p className="mb-3">
              (2) Der Kunde sorgt für freie Verpflegung der Betreuungskraft in haushaltsüblichem Umfang.
            </p>
            <p className="mb-3">
              (3) Der Kunde verpflichtet sich, der Betreuungskraft täglich angemessene Ruhezeiten und mindestens
              einen freien Tag pro Woche zu ermöglichen. Bei darüber hinausgehendem Betreuungsbedarf ist eine
              Aufstockung (z.B. 2-Personen-Lösung) zu vereinbaren.
            </p>
            <p>
              (4) Der Kunde informiert Primundus unverzüglich über wesentliche Veränderungen des Pflegebedarfs
              oder über Beschwerden gegenüber der Betreuungskraft, damit eine zeitnahe Klärung erfolgen kann.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 6 Vergütung und Zahlungsbedingungen</h2>
            <p className="mb-3">
              (1) Die Vergütung richtet sich nach dem individuellen Angebot. Der monatliche Pauschalpreis umfasst
              Betreuung, Organisation und Wechselorganisation sowie die Vergütung der Betreuungskraft.
              An- und Abreisekosten der Betreuungskraft richten sich nach dem Angebot.
            </p>
            <p className="mb-3">
              (2) Die Vergütung wird taggenau nach tatsächlichen Betreuungstagen abgerechnet. Die Rechnung wird
              monatlich gestellt und ist innerhalb von 10 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Zahlung erfolgt per SEPA-Lastschrift oder Überweisung.
            </p>
            <p>
              (3) Bei Zahlungsverzug ist Primundus berechtigt, Verzugszinsen in gesetzlicher Höhe sowie
              angemessene Mahngebühren zu erheben.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 7 Laufzeit und Kündigung</h2>
            <p className="mb-3">
              (1) Der Vertrag wird auf unbestimmte Zeit geschlossen. Es gibt keine Mindestlaufzeit.
            </p>
            <p className="mb-3">
              (2) Beide Seiten können täglich kündigen; abgerechnet wird bis zum letzten Betreuungstag. Ersatz bei
              Ausfall einer Betreuungskraft ist ohne zusätzliche Vergütung geschuldet; An- und Abreisekosten der
              Ersatzkraft trägt der Kunde.
            </p>
            <p>
              (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger
              Grund liegt insbesondere im Todesfall der pflegebedürftigen Person, bei dauerhafter stationärer
              Unterbringung oder bei schwerwiegender Vertragsverletzung der anderen Partei vor. In diesen
              Fällen endet der Vertrag binnen einer Woche nach Eingang der Kündigung.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 8 Haftung</h2>
            <p className="mb-3">
              (1) Primundus haftet unbeschränkt für Schäden aus Verletzung des Lebens, des Körpers oder der
              Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.
            </p>
            <p className="mb-3">
              (2) Für leichte Fahrlässigkeit haftet Primundus ausschließlich bei der Verletzung wesentlicher
              Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypisch
              vorhersehbaren Schaden begrenzt.
            </p>
            <p>
              (3) Eine darüber hinausgehende Haftung — insbesondere für Handlungen oder Unterlassungen der
              vermittelten Betreuungskraft im Rahmen ihrer selbständigen Tätigkeit — ist ausgeschlossen.
              Primundus haftet lediglich für die sorgfältige Auswahl der Betreuungskraft.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 9 Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß der{' '}
              <Link href="/datenschutz" className="text-pm-taupe underline hover:text-pm-taupe-deep">Datenschutzerklärung</Link>{' '}
              von Primundus. Der Kunde willigt in die Verarbeitung der für die Betreuung erforderlichen
              Gesundheits- und Pflegedaten ein. Diese Einwilligung kann jederzeit mit Wirkung für die Zukunft
              widerrufen werden.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 10 Schlussbestimmungen</h2>
            <p className="mb-3">
              (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Verbraucherschützende Vorschriften
              des Landes, in dem der Kunde seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.
            </p>
            <p className="mb-3">
              (2) Erfüllungsort ist München. Gerichtsstand für Kaufleute, juristische Personen des öffentlichen
              Rechts und öffentlich-rechtliche Sondervermögen ist München. Gegenüber Verbrauchern gelten die
              gesetzlichen Gerichtsstände.
            </p>
            <p className="mb-3">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
              der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche
              Regelung.
            </p>
            <p>
              (4) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-pm-taupe underline hover:text-pm-taupe-deep">
                ec.europa.eu/consumers/odr
              </a>. Primundus ist nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="bg-pm-shell border border-pm-line rounded-2xl p-6">
            <p className="text-[14px] text-pm-taupe-ink leading-relaxed">
              <strong>Hinweis:</strong> Diese AGB sind eine allgemeine Vorlage. Für Ihren individuellen
              Betreuungsvertrag gelten ergänzend die im Betreuungsvertrag konkret vereinbarten Bedingungen.
              Bei Fragen erreichen Sie uns unter{' '}
              <a href="tel:+4989200000830" className="text-pm-taupe font-semibold hover:underline">089 200 000 830</a>{' '}
              oder per E-Mail an{' '}
              <a href="mailto:info@primundus.de" className="text-pm-taupe font-semibold hover:underline">info@primundus.de</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
