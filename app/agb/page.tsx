import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | Primundus',
  description: 'Allgemeine Geschäftsbedingungen der Primundus für die Vermittlung von 24-Stunden-Betreuungskräften nach Deutschland.',
  alternates: { canonical: 'https://primundus.de/agb/' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[860px] mx-auto px-5 py-16">

        <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#8B7355] transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-[#3D3D3D]">AGB</span>
        </nav>

        <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-3">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="text-[15px] text-[#8B8B8B] mb-10">
          Stand: 1. Januar 2026 · Primundus — eine Marke der Vitanas Group sp. z o.o.
        </p>

        <div className="space-y-8 text-[15px] text-[#5A5A5A] leading-[1.75]">

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-3">
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für sämtliche Verträge zwischen der
              Vitanas Group sp. z o.o., Poznańska 21/48, 00-685 Warszawa, Polen (nachfolgend „Primundus") und
              ihren Kundinnen und Kunden (nachfolgend „Kunde") über die Vermittlung von 24-Stunden-Betreuungskräften
              aus der Europäischen Union zur häuslichen Betreuung pflegebedürftiger Personen in Deutschland.
            </p>
            <p className="mb-3">
              (2) Primundus erbringt selbst keine pflegerischen oder medizinischen Leistungen. Vertragsgegenstand
              ist ausschließlich die Vermittlung qualifizierter Betreuungskräfte sowie organisatorische
              Begleitleistungen (Auswahl, Anreise, Wechselorganisation, Kommunikation).
            </p>
            <p>
              (3) Abweichende, entgegenstehende oder ergänzende Bedingungen des Kunden werden nur dann Vertragsbestandteil,
              wenn Primundus ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
            </p>
          </section>

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 2 Leistungen von Primundus</h2>
            <p className="mb-3">
              (1) Primundus vermittelt selbständig tätige Betreuungskräfte oder Betreuungskräfte im Entsendemodell
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

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 3 Vertragsabschluss</h2>
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

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 4 Widerrufsrecht für Verbraucher</h2>
            <p className="mb-3">
              (1) Verbraucher im Sinne von § 13 BGB haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              den Vertrag zu widerrufen. Die Widerrufsfrist beginnt mit dem Tag des Vertragsschlusses.
            </p>
            <p className="mb-3">
              (2) Der Widerruf ist zu richten an: Primundus, Landsberger Str. 155, 80687 München,
              E-Mail: <a href="mailto:info@primundus.de" className="text-[#8B7355] underline hover:text-[#7D6E5D]">info@primundus.de</a>.
              Eine eindeutige Erklärung (z.B. per Brief oder E-Mail) genügt. Zur Wahrung der Widerrufsfrist reicht
              die rechtzeitige Absendung des Widerrufs.
            </p>
            <p>
              (3) Wünscht der Kunde, dass die Vermittlungsleistung vor Ablauf der Widerrufsfrist beginnt, hat er
              dies ausdrücklich zu erklären. In diesem Fall schuldet er bei Widerruf einen anteiligen Betrag für
              bereits erbrachte Leistungen.
            </p>
          </section>

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 5 Pflichten des Kunden</h2>
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

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 6 Vergütung und Zahlungsbedingungen</h2>
            <p className="mb-3">
              (1) Die Vergütung richtet sich nach dem individuellen Angebot. Der monatliche Pauschalpreis umfasst
              Vermittlung, Organisation, Wechsel- und Anreisekosten sowie die Vergütung der Betreuungskraft.
            </p>
            <p className="mb-3">
              (2) Die Rechnung wird monatlich im Voraus gestellt und ist innerhalb von 10 Tagen nach Rechnungsdatum
              ohne Abzug zur Zahlung fällig. Zahlung erfolgt per SEPA-Lastschrift oder Überweisung.
            </p>
            <p>
              (3) Bei Zahlungsverzug ist Primundus berechtigt, Verzugszinsen in gesetzlicher Höhe sowie
              angemessene Mahngebühren zu erheben.
            </p>
          </section>

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 7 Laufzeit und Kündigung</h2>
            <p className="mb-3">
              (1) Der Vermittlungsvertrag wird auf unbestimmte Zeit geschlossen. Die Mindestlaufzeit beträgt
              — sofern im Einzelangebot nicht abweichend geregelt — drei Monate ab Anreise der ersten
              Betreuungskraft.
            </p>
            <p className="mb-3">
              (2) Nach Ablauf der Mindestlaufzeit kann der Vertrag von beiden Seiten mit einer Frist von
              vier Wochen zum Monatsende ordentlich gekündigt werden.
            </p>
            <p>
              (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger
              Grund liegt insbesondere im Todesfall der pflegebedürftigen Person, bei dauerhafter stationärer
              Unterbringung oder bei schwerwiegender Vertragsverletzung der anderen Partei vor. In diesen
              Fällen endet der Vertrag binnen einer Woche nach Eingang der Kündigung.
            </p>
          </section>

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 8 Haftung</h2>
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

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 9 Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß der{' '}
              <Link href="/datenschutz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Datenschutzerklärung</Link>{' '}
              von Primundus. Der Kunde willigt in die Verarbeitung der für die Vermittlung erforderlichen
              Gesundheits- und Pflegedaten ein. Diese Einwilligung kann jederzeit mit Wirkung für die Zukunft
              widerrufen werden.
            </p>
          </section>

          <section className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">§ 10 Schlussbestimmungen</h2>
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
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] underline hover:text-[#7D6E5D]">
                ec.europa.eu/consumers/odr
              </a>. Primundus ist nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="bg-[#F2EDE6] border border-[#E5E3DF] rounded-2xl p-6">
            <p className="text-[14px] text-[#6B5A44] leading-relaxed">
              <strong>Hinweis:</strong> Diese AGB sind eine allgemeine Vorlage. Für Ihren individuellen
              Betreuungsvertrag gelten ergänzend die im Vermittlungsvertrag konkret vereinbarten Bedingungen.
              Bei Fragen erreichen Sie uns unter{' '}
              <a href="tel:+4989200000830" className="text-[#8B7355] font-semibold hover:underline">089 200 000 830</a>{' '}
              oder per E-Mail an{' '}
              <a href="mailto:info@primundus.de" className="text-[#8B7355] font-semibold hover:underline">info@primundus.de</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
