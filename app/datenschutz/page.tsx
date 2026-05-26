import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Primundus',
  description: 'Datenschutzerklärung der Primundus — Informationen zum Umgang mit Ihren personenbezogenen Daten.',
  alternates: { canonical: 'https://primundus.de/datenschutz/' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <div className="max-w-[860px] mx-auto px-5 py-16">

        <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#8B7355] transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-[#3D3D3D]">Datenschutzerklärung</span>
        </nav>

        <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6">

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">1. Verantwortliche Stelle</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7] mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-[#F8F7F5] rounded-xl p-5 text-[15px] text-[#5A5A5A] space-y-1">
              <p className="font-semibold text-[#3D3D3D]">Primundus Deutschland</p>
              <p>Landsberger Str. 155</p>
              <p>80687 München</p>
              <p className="pt-2">Primundus ist eine Marke von:</p>
              <p>Vitanas Group spolka zoo · Poznanska 21/48 · 00-685 Warszawa</p>
              <p>NIP 7011172300 · REGON 526823071</p>
              <p className="pt-2">
                Telefon:{' '}
                <a href="tel:+4989200000830" className="text-[#8B7355] hover:underline">+49 89 200 000 830</a>
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:info@primundus.de" className="text-[#8B7355] hover:underline">info@primundus.de</a>
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <h3 className="text-[15px] font-semibold text-[#3D3D3D] mb-2">2.1 Besuch unserer Website</h3>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7] mb-3">
              Bei der bloß informatorischen Nutzung unserer Website erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt (Logfile-Daten):
            </p>
            <ul className="list-disc pl-5 mb-5 space-y-1 text-[15px] text-[#5A5A5A]">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Referrer-URL (Website, von der aus zugegriffen wird)</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <h3 className="text-[15px] font-semibold text-[#3D3D3D] mb-2">2.2 Nutzung des Kostenrechners & Kontoerstellung</h3>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7] mb-3">
              Bei der Nutzung unseres Kostenrechners unter <a href="https://kostenrechner.primundus.de" className="text-[#8B7355] hover:underline">kostenrechner.primundus.de</a> erheben wir folgende Daten:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1 text-[15px] text-[#5A5A5A]">
              <li>Angaben zur Pflegesituation (Pflegegrad, Wohnsituation, benötigte Leistungen)</li>
              <li>Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer)</li>
              <li>Berechnete Kostenkalkulation und individuelle Zuschüsse</li>
            </ul>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
              Mit dem Abschluss des Formulars wird automatisch ein persönliches Kundenkonto angelegt. Über dieses Konto können Sie Ihr individuelles Angebot einsehen, passende Pflegekräfte-Profile ansehen und Betreuungskräfte direkt einladen. Der Zugang erfolgt über einen Ihnen per E-Mail zugesandten persönlichen Einmal-Link (Magic Link) — es ist kein separates Passwort erforderlich.
            </p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">3. Zweck der Datenverarbeitung</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#5A5A5A]">
              <li>Bereitstellung und technische Administration der Website</li>
              <li>Erstellung und Verwaltung Ihres persönlichen Kundenkontos</li>
              <li>Bereitstellung Ihres individuellen Angebots inkl. passender Pflegekräfte-Profile</li>
              <li>Ermöglichung der direkten Einladung von Betreuungskräften über Ihr Konto</li>
              <li>Bearbeitung von Anfragen und Beratungsgesprächen</li>
              <li>Zusendung des persönlichen Zugangs-Links (Magic Link) und Kalkulationsergebnissen per E-Mail</li>
              <li>Statistische Auswertung zur Verbesserung unseres Angebots</li>
            </ul>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#5A5A5A]">
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) — bei Angebotsanfragen</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) — für technische Administration und Statistik</li>
            </ul>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">5. Weitergabe von Daten</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7] mb-3">
              Wir geben Ihre personenbezogenen Daten nur weiter, wenn Sie ausdrücklich eingewilligt haben, dies für die Erbringung unserer Dienstleistung erforderlich ist oder eine gesetzliche Verpflichtung besteht. Eine Übermittlung an Drittländer findet nicht statt.
            </p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">6. Speicherdauer</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Anfragedaten werden nach Abschluss der Bearbeitung oder auf Ihren Wunsch gelöscht.
            </p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">7. Ihre Rechte</h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#5A5A5A]">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
            <p className="text-[15px] text-[#5A5A5A] mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
              <a href="mailto:info@primundus.de" className="text-[#8B7355] hover:underline">info@primundus.de</a>
            </p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">8. Cookies und Tracking</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7] mb-3">
              Unsere Website verwendet Cookies und Tracking-Technologien:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#5A5A5A]">
              <li>Technisch notwendige Cookies für die Funktionalität der Website</li>
              <li>Analyse-Cookies zur Verbesserung unseres Angebots (Google Analytics) — nur mit Ihrer Einwilligung</li>
              <li>Conversion-Tracking für Werbezwecke (Google Ads) — nur mit Ihrer Einwilligung</li>
            </ul>
            <p className="text-[15px] text-[#5A5A5A] mt-3">
              Sie können Ihre Cookie-Einstellungen jederzeit über den entsprechenden Link im Footer anpassen.
            </p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">9. Datensicherheit</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
              Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulationen, Verlust, Zerstörung oder unberechtigten Zugriff zu schützen. Unsere Maßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-7">
            <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-3">10. Aktualität dieser Datenschutzerklärung</h2>
            <p className="text-[15px] text-[#5A5A5A] leading-[1.7]">
              Diese Datenschutzerklärung hat den Stand Februar 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Erklärung zu ändern.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
