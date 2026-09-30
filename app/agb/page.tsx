import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | Primundus',
  description: 'Allgemeine Geschäftsbedingungen der Primundus für die 24-Stunden-Betreuung zu Hause durch eigene Betreuungskräfte.',
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
          Stand: 30. September 2026 · Primundus — ein Angebot der PRIMUNDUS Sp. z o.o.
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
              {/* 30.09.2026: statusneutral nach OpenAI-Prüfung (umowa zlecenie, A1 nach Art. 12 Abs. 1 VO 883/2004) */}
              (2) Primundus erbringt die häusliche Betreuung durch eigene, bei Primundus oder einem verbundenen
              Unternehmen der Unternehmensgruppe beschäftigte und in Polen sozialversicherte Betreuungskräfte, die mit
              A1-Bescheinigung nach Deutschland entsandt werden. Vertragsgegenstand sind Betreuung, Grundpflege
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
              (1) Primundus erbringt die 24-Stunden-Betreuung pflegebedürftiger Personen im häuslichen Umfeld durch
              die in § 1 Abs. 2 genannten Betreuungskräfte. Eine ununterbrochene Arbeitsleistung ist nicht geschuldet; die gesetzlichen Ruhezeiten und freien Zeiten der
              Betreuungskraft bleiben unberührt.
            </p>
            <p className="mb-3">
              (2) Die Tätigkeit der Betreuungskraft umfasst hauswirtschaftliche Versorgung,
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
              (1) Allgemeine Leistungsbeschreibungen und Preisbeispiele auf der Website stellen kein verbindliches
              Angebot dar.
            </p>
            <p className="mb-3">
              (2) Nach Eingabe der für die Kalkulation erforderlichen Angaben erhält der Kunde online ein
              individuelles Angebot; auf Wunsch kann dieses auch im Anschluss an ein Beratungsgespräch erstellt
              werden. Der Vertrag kommt erst zustande, wenn der Kunde nach Auswahl der Betreuungskraft dieses Angebot
              im Kundenportal oder in Textform annimmt.
            </p>
            <p>
              (3) Verbrauchern steht nach Maßgabe der gesondert bereitgestellten Widerrufsbelehrung ein gesetzliches
              Widerrufsrecht zu; § 4 enthält lediglich eine Zusammenfassung.
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
              (3) Verlangt der Verbraucher ausdrücklich, dass Primundus vor Ablauf der Widerrufsfrist mit der
              Betreuung beginnt, und bestätigt er seine Kenntnis von der Wertersatzpflicht, schuldet er im Fall des
              Widerrufs Wertersatz nach den gesetzlichen Vorschriften.
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
              (3) Bei Zahlungsverzug ist Primundus berechtigt, Verzugszinsen in gesetzlicher Höhe zu verlangen.
              Weitergehende Ansprüche wegen Verzugs richten sich nach den gesetzlichen Vorschriften.
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
              Unterbringung oder bei schwerwiegender Vertragsverletzung der anderen Partei vor. Die außerordentliche
              Kündigung wirkt mit Zugang, sofern in der Kündigung kein späterer Zeitpunkt angegeben ist; abgerechnet
              wird bis zum letzten tatsächlichen Betreuungstag.
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
              (3) Eine weitergehende Haftung besteht nicht. Die Haftungsbeschränkungen gelten auch zugunsten der
              Betreuungskräfte und sonstigen Erfüllungsgehilfen von Primundus. Sie gelten nicht in den Fällen des
              Absatzes 1 und nicht, soweit das Gesetz zwingend eine weitergehende Haftung vorsieht.
            </p>
          </section>

          <section className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">§ 9 Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß der{' '}
              <Link href="/datenschutz" className="text-pm-taupe underline hover:text-pm-taupe-deep">Datenschutzerklärung</Link>{' '}
              von Primundus. Gesundheits- und Pflegedaten werden nur verarbeitet, soweit hierfür eine gesonderte
              ausdrückliche Einwilligung des Kunden bzw. der betroffenen Person vorliegt oder eine gesetzliche
              Rechtsgrundlage besteht. Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft
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
              {/* 30.09.2026: Hinweis auf die OS-Plattform entfernt; die Plattform ist seit 20.07.2025 abgeschaltet. */}
              (4) Primundus ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="bg-pm-shell border border-pm-line rounded-2xl p-6">
            <p className="text-[14px] text-pm-taupe-ink leading-relaxed">
              <strong>Hinweis:</strong> Für Ihren individuellen Betreuungsvertrag gelten ergänzend die dort konkret
              vereinbarten Bedingungen; Individualabreden gehen diesen AGB vor.
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
