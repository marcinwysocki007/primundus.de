import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Primundus',
  description: 'Datenschutzerklärung der Primundus — Informationen zum Umgang mit Ihren personenbezogenen Daten.',
  alternates: { canonical: 'https://primundus.de/datenschutz' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-pm-paper">
      <div className="max-w-article mx-auto px-5 py-10 md:py-16">

        <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-pm-taupe transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-pm-ink">Datenschutzerklärung</span>
        </nav>

        <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6">

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">1. Verantwortliche Stelle</h2>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-pm-paper rounded-xl p-5 text-[15px] text-pm-body space-y-1">
              <p className="font-semibold text-pm-ink">Primundus Deutschland</p>
              <p>Landsberger Str. 155</p>
              <p>80687 München</p>
              <p className="pt-2">Primundus ist eine Marke von:</p>
              <p>PRIMUNDUS Sp. z o.o. · Poznańska 21/48 · 00-685 Warszawa</p>
              {/* 30.09.2026: NIP/REGON waren falsch; laut KRS-Register (Stand 11.08.2026) wie im Impressum */}
              <p>KRS 0001259402 · NIP 7011326714</p>
              <p className="pt-2">
                Telefon:{' '}
                <a href="tel:+4989200000830" className="text-pm-taupe hover:underline">+49 89 200 000 830</a>
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>
              </p>
            </div>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <h3 className="text-[15px] font-semibold text-pm-ink mb-2">2.1 Besuch unserer Website</h3>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Bei der bloß informatorischen Nutzung unserer Website erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt (Logfile-Daten):
            </p>
            <ul className="list-disc pl-5 mb-5 space-y-1 text-[15px] text-pm-body">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Referrer-URL (Website, von der aus zugegriffen wird)</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <h3 className="text-[15px] font-semibold text-pm-ink mb-2">2.2 Nutzung des Kostenrechners & Kontoerstellung</h3>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Bei der Nutzung unseres Kostenrechners unter <a href="https://kostenrechner.primundus.de" className="text-pm-taupe hover:underline">kostenrechner.primundus.de</a> erheben wir folgende Daten:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1 text-[15px] text-pm-body">
              <li>Angaben zur Pflegesituation (Pflegegrad, Wohnsituation, benötigte Leistungen)</li>
              <li>Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer)</li>
              <li>Berechnete Kostenkalkulation und individuelle Zuschüsse</li>
            </ul>
            {/* 10.10.2026, Martin („alles ja“ zur Abnahme vom 09.10., Punkt 2): Einstieg und Herkunft je Anfrage (components/EinstiegMerker.tsx) */}
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              <strong className="text-pm-ink">Herkunft Ihrer Anfrage:</strong> Wenn Sie von primundus.de in den Kostenrechner wechseln, geben wir zwei Angaben mit: die erste Seite, die Sie bei uns aufgerufen haben, und die Art der Seite, von der Sie kamen, zum Beispiel Google, eine Anzeige, eine andere Suchmaschine, ein KI-Assistent oder kein Verweis. Die genaue Adresse der Seite, von der Sie kamen, speichern wir nicht. Die beiden Angaben stehen in der Adresse des Kostenrechners und damit auch in Ihrem Browserverlauf. Haben Sie der Statistik zugestimmt, merkt sich Ihr Browser die Angaben außerdem, bis Sie den Tab schließen. Senden Sie im Kostenrechner eine Anfrage ab, speichern wir beide Angaben zusammen mit Ihrer Anfrage und löschen sie mit ihr. So sehen wir, welche Seiten zu Anfragen führen. Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Sie können jederzeit widersprechen, zum Beispiel per E-Mail an <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>.
            </p>
            <p className="text-[15px] text-pm-body leading-[1.7]">
              Mit dem Abschluss des Formulars wird automatisch ein persönliches Kundenkonto angelegt. Über dieses Konto können Sie Ihr individuelles Angebot einsehen, passende Pflegekräfte-Profile ansehen und Betreuungskräfte direkt einladen. Der Zugang erfolgt über einen Ihnen per E-Mail zugesandten persönlichen Einmal-Link (Magic Link) — es ist kein separates Passwort erforderlich.
            </p>
            {/* 17.09.2026: Bewertungsformular auf /erfahrungen (Backend im Kostenrechner, Tabelle bewertungen) */}
            <h3 id="bewertungen" className="text-[15px] font-semibold text-pm-ink mb-2 mt-5">2.3 Bewertungen auf primundus.de/erfahrungen</h3>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Wenn Sie Primundus über das Formular auf <a href="/erfahrungen" className="text-pm-taupe hover:underline">primundus.de/erfahrungen</a> bewerten, verarbeiten wir:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-[15px] text-pm-body">
              <li>Sterne, Text Ihrer Bewertung, den Namen, unter dem sie erscheinen soll, und freiwillig Ihren Ort</li>
              <li>Ihre E-Mail-Adresse für den Bestätigungslink und mögliche Rückfragen</li>
              <li>Zum Schutz vor Missbrauch: Zeitpunkt, eine nicht umkehrbare Prüfsumme Ihrer IP-Adresse (nicht die Adresse selbst) und die Kennung Ihres Browsers</li>
            </ul>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Nach Ihrer Bestätigung prüfen wir die Bewertung. Dabei gleichen wir Ihre E-Mail-Adresse mit unseren Anfrage- und Kundendaten ab; passt sie zu einer Betreuung, kennzeichnen wir die Bewertung mit „Kunde bestätigt“. Veröffentlicht werden nur Sterne, Text, Name, Ort, Datum und gegebenenfalls unsere Antwort, nie Ihre E-Mail-Adresse.
            </p>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Sie können Ihre Einwilligung zur Veröffentlichung jederzeit per E-Mail an <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a> widerrufen. Wir nehmen die Bewertung dann von der Seite und löschen Ihre Daten, soweit keine Aufbewahrungspflicht besteht. Bewertungen, die nicht bestätigt oder nicht freigegeben werden, veröffentlichen wir nicht.
            </p>
            <p className="text-[15px] text-pm-body leading-[1.7]">
              Auf derselben Seite zeigen wir Rezensionen aus unseren Google-Unternehmensprofilen so, wie sie bei Google veröffentlicht sind, mit Link zur Quelle. Diese Rezensionen ruft unser Server bei Google ab; beim Besuch der Seite überträgt Ihr Browser dafür keine Daten an Google.
            </p>

            {/* 30.09.2026: Kontaktaufnahme wegen Verlinkungen (Art. 14 DSGVO); Entwurf von OpenAI geprüft, Freigabe Martin */}
            <h3 id="kontaktaufnahme" className="text-[15px] font-semibold text-pm-ink mb-2 mt-5">2.4 Wenn wir Sie wegen einer Verlinkung ansprechen</h3>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Wenn wir Sie wegen einer Linkliste, eines Beitrags oder einer ausdrücklich eröffneten Kontaktmöglichkeit ansprechen, verarbeiten wir Ihren Namen, Ihre geschäftliche E-Mail-Adresse und Telefonnummer, gegebenenfalls Ihre Funktion, Website und Anschrift sowie den Inhalt unserer Kommunikation. Die Daten stammen aus Ihrem Impressum, Ihrem Beitrag oder aus der von Ihnen ausdrücklich eröffneten Kontaktmöglichkeit.
            </p>
            <p className="text-[15px] text-pm-body leading-[1.7]">
              Zweck ist die einmalige Anfrage zu einer möglichen Verlinkung und die Bearbeitung Ihrer Antwort. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in fachbezogener Öffentlichkeitsarbeit. Sie können dieser Verarbeitung nach Art. 21 DSGVO jederzeit widersprechen, zum Beispiel per E-Mail an <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>. Ohne Antwort löschen wir Ihre Kontaktdaten spätestens nach sechs Monaten, nach Abschluss der Kommunikation spätestens nach zwölf Monaten, soweit keine gesetzliche Pflicht entgegensteht. Wünschen Sie keine weitere Kontaktaufnahme, speichern wir Ihre E-Mail-Adresse und, soweit erforderlich, Ihre Telefonnummer auf einer Sperrliste, damit wir Ihren Widerspruch dauerhaft beachten.
            </p>

            {/* 07.10.2026: Auftritte auf Instagram und Facebook (Art. 26 DSGVO mit Meta); Entwurf von OpenAI geprüft, Freigabe Martin 07.10.2026 */}
            <h3 id="social-media" className="text-[15px] font-semibold text-pm-ink mb-2 mt-5">2.5 Unsere Auftritte auf Instagram und Facebook</h3>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Wir betreiben die Facebook-Seite „Primundus 24-Stunden-Pflege“ und das Instagram-Konto @primundus_deutschland. Dort informieren wir über die 24-Stunden-Betreuung zu Hause und beantworten Fragen.
            </p>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              <strong className="text-pm-ink">Gemeinsame Verantwortung mit Meta.</strong> Für die Statistiken, die Meta zu unserer Facebook-Seite bereitstellt („Insights“), sind wir nach Maßgabe einer Vereinbarung mit der Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland („Meta“) gemeinsam mit Meta verantwortlich (Art. 26 DSGVO). Auch für unser Instagram-Konto erhalten wir von Meta zusammengefasste Statistiken; wie Meta die Daten dafür verarbeitet, beschreibt Meta in den unten verlinkten Datenschutzinformationen. Die Vereinbarung („Page Insights Controller Addendum“) finden Sie unter{' '}
              <a href="https://www.facebook.com/legal/terms/page_controller_addendum" className="text-pm-taupe hover:underline">facebook.com/legal/terms/page_controller_addendum</a>. Nach dieser Vereinbarung übernimmt Meta die primäre Verantwortung für bestimmte Informations- und Betroffenenpflichten im Zusammenhang mit den Insights. Ihre Rechte können Sie aber auch uns gegenüber geltend machen. Welche Daten Meta dafür verarbeitet, beschreibt Meta unter{' '}
              <a href="https://www.facebook.com/legal/terms/information_about_page_insights_data" className="text-pm-taupe hover:underline">facebook.com/legal/terms/information_about_page_insights_data</a>.
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-2 text-[15px] text-pm-body">
              <li><strong className="text-pm-ink">Statistiken:</strong> Meta stellt uns zusammengefasste Zahlen bereit, etwa Reichweite, Aufrufe, Interaktionen und grobe Angaben zu Alter, Geschlecht und Region der Besucher. Einzelne Personen daraus zu erkennen ist uns regelmäßig nicht möglich und nicht beabsichtigt. Für die Veröffentlichung unserer Beiträge und den Abruf von Kennzahlen zu unseren eigenen Beiträgen nutzen wir eine eigene Anwendung mit Zugriff auf die Schnittstelle von Meta. Sie ruft von Kommentaren nur die Anzahl ab, keine Inhalte.</li>
              <li><strong className="text-pm-ink">Kommentare und Nachrichten:</strong> Wenn Sie kommentieren, uns schreiben oder einen Beitrag teilen, sehen wir Ihren Profilnamen, Ihr Profilbild und den Inhalt. Wir nutzen diese Angaben, um zu antworten, nicht für Werbung und nicht für unsere Beiträge. Bitte veröffentlichen Sie keine Angaben zur Gesundheit in Kommentaren; öffentliche Kommentare mit solchen Angaben können wir zu Ihrem Schutz verbergen oder löschen. Für persönliche Fragen erreichen Sie uns täglich von 8 bis 20 Uhr unter <a href="tel:+4989200000830" className="text-pm-taupe hover:underline">+49 89 200 000 830</a> oder per E-Mail an <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>.</li>
              <li><strong className="text-pm-ink">Links in Beiträgen und im Profil:</strong> Sie führen zu unserem Angebot auf kostenrechner.primundus.de und tragen eine Kennung des Beitrags. So erkennen wir, welcher Beitrag einen Besuch ausgelöst hat. Einige Links laufen über eine Weiterleitung, die zählt, wie oft ein Link geklickt wurde. Dabei wird Ihre IP-Adresse technisch verarbeitet, um die Weiterleitung auszuführen; in unserer Klickzählung speichern wir sie nicht, und wir setzen keine Cookies. Der technische Dienstleister der Weiterleitung kann Zugriffsdaten, insbesondere die IP-Adresse, in Serverprotokollen verarbeiten. Was danach auf kostenrechner.primundus.de geschieht, beschreiben die Abschnitte 2.2 und 8.</li>
            </ul>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              <strong className="text-pm-ink">Rechtsgrundlagen.</strong> Für die Statistiken, die öffentliche Kommunikation und die Kennung in Links gilt Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt darin, über unser Angebot zu informieren, mit Interessierten zu sprechen und unsere Beiträge zu verbessern. Beantworten wir eine Anfrage zu einer Betreuung, gilt Art. 6 Abs. 1 lit. b DSGVO. Bitte senden Sie uns über Instagram oder Facebook keine Angaben zur Gesundheit. Teilen Sie uns solche Angaben in einer Nachricht dennoch freiwillig mit, verwenden wir sie nur, um Ihre Anfrage zu bearbeiten; soweit dafür eine besondere Rechtsgrundlage nötig ist, stützen wir uns auf Ihre ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), die Sie jederzeit mit Wirkung für die Zukunft widerrufen können.
            </p>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              <strong className="text-pm-ink">Verarbeitung durch Meta.</strong> Beim Besuch unserer Auftritte verarbeitet Meta Daten in eigener Verantwortung, auch mit Cookies und ähnlichen Techniken und auch bei Besuchern ohne Meta-Konto. Einzelheiten stehen in den Datenschutzrichtlinien von Meta (<a href="https://www.facebook.com/privacy/policy/" className="text-pm-taupe hover:underline">facebook.com/privacy/policy</a>) und Instagram (<a href="https://privacycenter.instagram.com/policy/" className="text-pm-taupe hover:underline">privacycenter.instagram.com/policy</a>). Nach Angaben von Meta können Daten in Länder außerhalb der EU und des EWR übermittelt werden, insbesondere in die USA. Meta verweist dafür unter anderem auf den Angemessenheitsbeschluss zum EU-US Data Privacy Framework, soweit Empfänger zertifiziert sind, und auf Standardvertragsklauseln.
            </p>
            <p className="text-[15px] text-pm-body leading-[1.7]">
              <strong className="text-pm-ink">Speicherdauer und Widerspruch.</strong> Kommentare und Nachrichten bleiben für uns bei Meta sichtbar, bis Sie oder wir sie löschen; Meta kann Daten nach den eigenen Datenschutzrichtlinien darüber hinaus verarbeiten oder aufbewahren. Eigene Kopien von Nachrichten zu einer Anfrage behandeln wir wie andere Anfragen (Abschnitt 6). Zusammengefasste Kennzahlen speichern wir höchstens 24 Monate. Einstellungen zu Werbung und Datennutzung können Sie in Ihrem Facebook- und Instagram-Konto vornehmen. Der Verarbeitung können Sie nach Art. 21 DSGVO jederzeit widersprechen, zum Beispiel per E-Mail an <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>.
            </p>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">3. Zweck der Datenverarbeitung</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-pm-body">
              <li>Bereitstellung und technische Administration der Website</li>
              <li>Erstellung und Verwaltung Ihres persönlichen Kundenkontos</li>
              <li>Bereitstellung Ihres individuellen Angebots inkl. passender Pflegekräfte-Profile</li>
              <li>Ermöglichung der direkten Einladung von Betreuungskräften über Ihr Konto</li>
              <li>Bearbeitung von Anfragen und Beratungsgesprächen</li>
              <li>Zusendung des persönlichen Zugangs-Links (Magic Link) und Kalkulationsergebnissen per E-Mail</li>
              <li>Prüfung und Veröffentlichung von Bewertungen sowie Schutz des Bewertungsformulars vor Missbrauch</li>
              <li>Statistische Auswertung zur Verbesserung unseres Angebots</li>
              <li>Information und Kommunikation über unsere Auftritte auf Instagram und Facebook sowie Auswertung zusammengefasster Statistiken</li>
            </ul>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-pm-body">
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) — bei Angebotsanfragen und für die Veröffentlichung Ihrer Bewertung</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) — für technische Administration, Statistik, den Schutz des Bewertungsformulars vor Missbrauch und unsere Auftritte auf Instagram und Facebook (Abschnitt 2.5)</li>
              <li>Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung) — wenn Sie uns in einer Nachricht freiwillig Angaben zur Gesundheit mitteilen</li>
            </ul>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">5. Weitergabe von Daten</h2>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Wir geben Ihre personenbezogenen Daten nur weiter, wenn Sie ausdrücklich eingewilligt haben, dies für die Erbringung unserer Dienstleistung erforderlich ist oder eine gesetzliche Verpflichtung besteht. Übermittlungen in Drittländer können insbesondere bei Meta (unsere Auftritte auf Instagram und Facebook, Abschnitt 2.5) und bei Google (Analyse und Conversion-Tracking mit Ihrer Einwilligung, Abschnitt 8) stattfinden, soweit in dieser Erklärung beschrieben. Diese Anbieter stützen solche Übermittlungen nach eigenen Angaben auf den Angemessenheitsbeschluss zum EU-US Data Privacy Framework oder auf Standardvertragsklauseln.
            </p>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">6. Speicherdauer</h2>
            <p className="text-[15px] text-pm-body leading-[1.7]">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Anfragedaten werden nach Abschluss der Bearbeitung oder auf Ihren Wunsch gelöscht. Veröffentlichte Bewertungen bleiben online, bis Sie Ihre Einwilligung widerrufen.
            </p>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">7. Ihre Rechte</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-pm-body">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
            <p className="text-[15px] text-pm-body mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
              <a href="mailto:info@primundus.de" className="text-pm-taupe hover:underline">info@primundus.de</a>
            </p>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">8. Cookies und Tracking</h2>
            <p className="text-[15px] text-pm-body leading-[1.7] mb-3">
              Unsere Website verwendet Cookies und Tracking-Technologien:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-pm-body">
              <li>Technisch notwendige Cookies für die Funktionalität der Website</li>
              <li>Analyse-Cookies zur Verbesserung unseres Angebots (Google Analytics) — nur mit Ihrer Einwilligung</li>
              <li>Conversion-Tracking für Werbezwecke (Google Ads) — nur mit Ihrer Einwilligung</li>
            </ul>
            <p className="text-[15px] text-pm-body mt-3">
              Sie können Ihre Cookie-Einstellungen jederzeit über den entsprechenden Link im Footer anpassen.
            </p>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-4">9. Datensicherheit</h2>
            <p className="text-[15px] text-pm-body leading-[1.7]">
              Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulationen, Verlust, Zerstörung oder unberechtigten Zugriff zu schützen. Unsere Maßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </div>

          <div className="bg-white border border-pm-line rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-pm-ink mb-3">10. Aktualität dieser Datenschutzerklärung</h2>
            <p className="text-[15px] text-pm-body leading-[1.7]">
              Diese Datenschutzerklärung hat den Stand Oktober 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Erklärung zu ändern.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
