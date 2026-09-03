import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { CitiesOfRegion } from '@/components/CityIndex'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'

export const metadata: Metadata = {
  title: '24h-Pflege Brandenburg — Betreuungskraft | Primundus',
  description: '24h-Pflege in Brandenburg: Geprüfte Betreuungskraft zuhause. Rechtssicher, täglich kündbar, startklar. Ab ca. 1000 €/Monat Eigenanteil (PG 3).',
  alternates: { canonical: 'https://primundus.de/24h-pflege-brandenburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Brandenburg | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Brandenburg. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-brandenburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-brandenburg#service',
    name: 'Primundus — 24h-Pflege Brandenburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Brandenburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-brandenburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'State', name: 'Brandenburg' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Brandenburg', item: 'https://primundus.de/24h-pflege-brandenburg' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Warum sind Heimplätze in Brandenburg so knapp?',
        acceptedAnswer: { '@type': 'Answer', text: 'Weil das Angebot nicht mitgewachsen ist. Zwischen 2013 und 2023 hat sich die Zahl der Pflegebedürftigen in Brandenburg verdoppelt — rund 111.100 Menschen mehr —, während die Zahl der Dauerpflegeplätze um knapp sechs Prozent zunahm; 2023 ist sie erstmals gesunken. Brandenburg hat dadurch den niedrigsten Heimanteil aller Bundesländer (11,1 Prozent) und zugleich die wenigsten Plätze je Ältere (39 je 1.000 ab 65, Bund 47). Das Land nennt in seinem Pflegebericht zwei Gründe: stark gestiegene Eigenanteile und ein Angebot, das wegen fehlenden Personals zurückgeht. Besonders eng ist es in der Uckermark, in Elbe-Elster und in Ostprignitz-Ruppin.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Brandenburg?',
        acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1000–2000 €/Monat — oft günstiger als ein Heimplatz in Brandenburg (rund 3.020 €/Monat) oder Berlin (rund 3.100 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Brandenburg starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'In der Regel in 4–7 Tagen. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Brandenburg — auch in ländlichen Regionen.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Brandenburg rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
    ],
  },
]

export default function BrandenburgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Brandenburg</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            24h-Pflege in Brandenburg · Aktualisiert am 28. August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24h-Pflege Brandenburg — Betreuungskraft zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Das Haus am Stadtrand von Potsdam, die Wohnung in Berlin, das Grundstück in der Uckermark: Rund um die Hauptstadt wohnen viele Eltern, deren Kinder mitten im Berliner Alltag stecken. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht — rund um die Uhr da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, startklar in 4–7 Tagen.
          </p>

          {/* ① WAS IST 24H-PFLEGE */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was ist 24h-Pflege — und was unterscheidet sie von allem anderen?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-6">
              Bei der 24h-Pflege lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist rund um die Uhr erreichbar — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Das eigene Zuhause bleibt erhalten. Der gewohnte Alltag auch.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏠', title: 'Eigenes Zuhause', desc: 'Vertraute Umgebung bleibt — kein Heimumzug' },
                { icon: '👤', title: '1:1-Betreuung', desc: 'Eine Kraft, ein Mensch — keine wechselnden Gesichter' },
                { icon: '🌙', title: 'Tag & Nacht da', desc: 'Rund um die Uhr erreichbar — auch nachts' },
              ].map((item) => (
                <div key={item.title} className="bg-pm-paper rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-[13px] font-bold text-pm-ink mb-1">{item.title}</p>
                  <p className="text-[12px] text-pm-mute leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ② FÜR WEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Für wen ist 24h-Pflege die richtige Wahl?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-6">
              Viele Familien stehen irgendwann vor demselben Moment: Man merkt, dass es so nicht mehr geht — aber ein Pflegeheim fühlt sich falsch an. Genau für diese Situation ist die 24h-Betreuung zuhause die Antwort.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                { icon: '🧓', title: 'Selbstständigkeit lässt nach', desc: 'Alltägliches gelingt nicht mehr zuverlässig alleine — Anziehen, Kochen, Waschen, Orientierung' },
                { icon: '👨‍👩‍👧', title: 'Familie kann nicht immer da sein', desc: 'Beruf, eigene Kinder, Entfernung — Angehörige wollen helfen, aber nicht rund um die Uhr' },
                { icon: '🏠', title: 'Pflegeheim ist keine Option', desc: 'Das eigene Zuhause, die gewohnten Möbel, der Garten — das soll bleiben' },
                { icon: '🌙', title: 'Nächtliche Unsicherheit', desc: 'Stürze, Toilettengänge, Orientierungslosigkeit — nachts ist niemand da' },
                { icon: '🧠', title: 'Demenz oder Orientierungsprobleme', desc: 'Vertraute Ansprechpartnerin nötig — keine wechselnden Gesichter' },
                { icon: '🏥', title: 'Nach Krankenhausaufenthalt', desc: 'Nach OP oder Schlaganfall: Wochen intensiver Unterstützung überbrücken' },
              ].map((item) => (
                <div key={item.title} className="bg-pm-paper rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-pm-ink mb-1">{item.title}</p>
                    <p className="text-[12px] text-pm-mute leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-pm-shell rounded-xl p-5 mb-3">
              <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-2">Wann 24h-Pflege alleine nicht ausreicht</p>
              <p className="text-[13px] text-pm-taupe-ink leading-relaxed">
                Bei intensivem medizinischem Versorgungsbedarf arbeitet die Betreuungskraft in Kombination mit einem ambulanten Pflegedienst. Primundus koordiniert diese Zusammenarbeit auf Wunsch — so bleibt das Zuhause auch bei höherem Bedarf die Option.
              </p>
            </div>
            <div className="bg-pm-coral-tint rounded-xl p-4">
              <p className="text-[13px] text-pm-coral-ink leading-relaxed">
                Nicht sicher ob 24h-Pflege die richtige Lösung ist? Primundus berät kostenlos und ehrlich — auch wenn das Ergebnis eine andere Empfehlung ist.
              </p>
            </div>
          </div>

          {/* ③ LEISTUNGEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-pm-line">
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-green mb-4">Betreuungskraft übernimmt</p>
                {['Körperpflege — Waschen, Ankleiden, Zahnpflege','Kochen — frisch, nach Vorlieben und Diät','Haushalt — Putzen, Einkaufen, Wäsche','Mobilisierung, Spaziergänge, Begleitung','Gesellschaft und Begleitung — ganztags','Medikamentenerinnerung','Arzt- und Therapietermine begleiten','Nachtbereitschaft — immer erreichbar'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-pm-line-soft last:border-0">
                    <span className="w-4 h-4 rounded-full bg-pm-mint flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-pm-green text-[9px] font-bold">✓</span></span>
                    <span className="text-[13px] text-pm-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-taupe mb-4">Ambulanter Pflegedienst ergänzt</p>
                {['Injektionen (Insulin, Blutverdünner)','Verbandswechsel, Wundversorgung','Katheterversorgung','Ernährung über Magensonde','Beatmungspflege','Komplexe medizinische Versorgung'].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-pm-line-soft last:border-0">
                    <span className="text-pm-taupe font-bold text-[12px] flex-shrink-0 mt-0.5">+</span>
                    <span className="text-[13px] text-pm-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-pm-paper border-t border-pm-line px-6 py-4">
              <p className="text-[13px] text-pm-body leading-relaxed"><strong className="font-bold text-pm-ink">Beide gemeinsam machen häusliche Pflege auch bei hohem Bedarf möglich.</strong> Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst.</p>
            </div>
          </div>

          {/* ④ KOSTEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Kosten & Kassenzuschüsse in Brandenburg 2026
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-4">
            <div className="bg-pm-paper px-5 py-3 border-b border-pm-line">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-mute">Kostenbeispiel — Pflegegrad 3 in Brandenburg</p>
            </div>
            <div className="px-5 py-4 space-y-2">
              {[
                { label: 'Kosten Primundus', value: '2.200–3.500 €/Monat', green: false },
                { label: '− Pflegegeld PG 3', value: '− 599 €/Monat', green: true },
                { label: '− Entlastungsbudget (anteilig)', value: '− ca. 295 €/Monat', green: true },
                { label: '− Steuerabzug (ca.)', value: '− ca. 200 €/Monat', green: true },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center text-[14px]">
                  <span className="text-pm-mute">{row.label}</span>
                  <span className={`font-semibold whitespace-nowrap text-right ${row.green ? 'text-pm-green' : 'text-pm-ink'}`}>{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-[15px] font-bold pt-3 mt-1 border-t border-pm-line">
                <span className="text-pm-ink">Ihr Eigenanteil</span>
                <span className="text-pm-taupe">ca. 1000–2000 €/Monat</span>
              </div>
            </div>
            <div className="bg-pm-paper border-t border-pm-line px-5 py-3">
              <p className="text-[12px] text-pm-mute">Pflegeheim Brandenburg: Eigenanteil Ø 2100–2600 €/Monat — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause</p>
            </div>
          </div>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="bg-pm-paper">
                  {['Pflegegrad','Pflegegeld/Mo','Entlastungsbudget/Jahr'].map((h) => (
                    <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[['PG 2','347 €','3.539 €'],['PG 3','599 €','3.539 €'],['PG 4','800 €','3.539 €'],['PG 5','990 €','3.539 €']].map(([pg,pgeld,budget],i) => (
                    <tr key={pg} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-4 py-3 text-[13px] font-semibold text-pm-ink border-b border-pm-line">{pg}</td>
                      <td className="px-4 py-3 text-[13px] font-bold text-pm-green border-b border-pm-line">{pgeld}</td>
                      <td className="px-4 py-3 text-[13px] text-pm-body border-b border-pm-line">{budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2"><p className="text-[11px] text-pm-mute">Stand 2026 · Bundesweit einheitlich</p></div>
          </div>
          

          {/* ④c RECHNER */}
          <div className="bg-pm-shell border border-[rgba(139,115,85,0.2)] rounded-2xl p-6 mb-10">
            <p className="text-[15px] font-bold text-pm-ink mb-2">Ihren eigenen Fall durchrechnen</p>
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Welcher Pflegegrad realistisch ist und was am Ende tatsächlich übrig bleibt, hängt von
              der konkreten Situation ab. Zwei Rechner helfen weiter — beide kostenlos und ohne Anmeldung:
            </p>
            <div className="flex flex-col gap-2">
              <a href="/pflegegrad-rechner" className="text-[15px] text-pm-taupe font-semibold hover:underline">
                → Pflegegrad berechnen — dieselben sechs Module wie bei der Begutachtung
              </a>
              <a href="https://kostenrechner.primundus.de/?start=1&amp;src=land-brandenburg" target="_blank" rel="noopener" className="text-[15px] text-pm-taupe font-semibold hover:underline">
                → Preis und Betreuungskräfte in Brandenburg ansehen — in 2 Minuten
              </a>
            </div>
          </div>

          {/* ④b POLEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Polnische Betreuungskräfte in Brandenburg</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wer in Brandenburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe:
            jemanden, der im Haushalt lebt und rund um die Uhr da ist. Genau das leisten unsere
            Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien —
            und sie sind in ganz Brandenburg im Einsatz, in der Großstadt wie im kleinsten Dorf.
          </p>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-4">
            <p className="text-[15px] font-bold text-pm-ink mb-2">Angestellt statt vermittelt</p>
            <p className="text-[15px] leading-relaxed text-pm-body">
              Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte
              fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum
              Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland,
              Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine
              Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren
              wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.
            </p>
          </div>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            <strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft
            kostet:</strong> zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation und
            Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbetrag und
            Entlastungsbudget meist rund 1000 bis 2000 Euro Eigenanteil — deutlich weniger
            als ein Heimplatz, der in Brandenburg im ersten Jahr im Schnitt rund 3.020 Euro im Monat
            kostet.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            <strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte
            Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der
            Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen
            mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei
            vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-8">
            Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie
            schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.
          </p>
          {/* ⑤ EINZUGSGEBIET */}
          <div className="bg-pm-shell border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[13px] font-bold text-pm-taupe-ink mb-1">Einzugsgebiet Brandenburg</p>
            <p className="text-[13px] text-pm-taupe-ink leading-relaxed">Potsdam, Cottbus, Brandenburg an der Havel, Frankfurt (Oder), Eberswalde, Oranienburg, Neuruppin und alle weiteren Städte und Gemeinden in Brandenburg</p>
          </div>

          {/* ⑤c VOR ORT — von Hand, Landesebene */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Was die Pflege zu Hause in Brandenburg ausmacht</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Brandenburg ist bei der Heimpflege das Schlusslicht Deutschlands — und zwar nach beiden
            Maßstäben, die man anlegen kann.{' '}
            <strong className="text-pm-ink font-semibold">11,1 Prozent der Pflegebedürftigen leben
            im Heim, der niedrigste Anteil aller sechzehn Länder. Und es gibt hier auch tatsächlich
            am wenigsten Plätze: 39 je 1.000 Einwohner über 65 gegen 47 im Bund.</strong> Das ist
            wichtig, weil ein niedriger Anteil sonst oft nur ein Rechenergebnis ist. Hier nicht:
            Beide Zahlen sagen dasselbe.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wie es dazu kam, lässt sich an einem Jahrzehnt ablesen.{' '}
            <strong className="text-pm-ink font-semibold">Zwischen 2013 und 2023 hat sich die Zahl
            der Pflegebedürftigen in Brandenburg verdoppelt — ein Plus von rund 111.100 Menschen —,
            während die Zahl der Dauerpflegeplätze um knapp sechs Prozent wuchs.</strong> Der Anteil
            der stationär Versorgten fiel von 22,4 auf 10,9 Prozent, er hat sich also halbiert. 2023
            ist die Platzzahl erstmals sogar gesunken. Das Land nennt die Gründe in seinem eigenen
            Pflegebericht beim Namen: stark gestiegene Eigenanteile und ein Angebot, das wegen
            fehlenden Personals zurückgeht.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Brandenburg hat darauf geantwortet, statt es geschehen zu lassen: Bei den ambulanten
            Diensten je 1.000 Ältere liegt das Land bundesweit auf Platz eins, und{' '}
            <strong className="text-pm-ink font-semibold">17,1 Prozent aller Pflegeplätze sind
            Tagespflegeplätze — der höchste Wert Deutschlands</strong> (Bund 10,7 Prozent), eine
            Verdopplung seit 2013. Wer hier zu Hause bleibt, ist damit nicht automatisch allein.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Ein Landesdurchschnitt hilft in Brandenburg allerdings wenig, weil das Land in zwei
            Hälften zerfällt. In der Prignitz sind 129 von 1.000 Einwohnern pflegebedürftig, in
            Potsdam 54 — mehr als das Doppelte.{' '}
            <strong className="text-pm-ink font-semibold">Am schärfsten trifft es die Uckermark: Sie
            hat die zweithöchste Pflegequote des Landes und zugleich die wenigsten Heimplätze — 30
            je 1.000 Ältere, gegen 51 in Brandenburg an der Havel.</strong> Der Landesbericht
            spricht offen von „weißen Flecken auf der Landkarte", wo eine wohnortnahe stationäre
            Versorgung nicht immer sicherzustellen sei.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wie ernst die Lage ist, zeigt am besten die Landesplanung selbst.{' '}
            <strong className="text-pm-ink font-semibold">Der Landespflegeplan Brandenburgs
            stammt vom 1. Dezember 1995 und ist bis heute die geltende Fassung.</strong> Er beziffert
            den Bedarf in „Pflegestufen III und IV" — einem System, das seit dem 1. Januar 2017
            nicht mehr existiert — und rechnet mit einem Land, das damals etwa ein Fünftel der
            heutigen Pflegebedürftigen hatte. Gesteuert wird faktisch über den Pakt für Pflege und
            den jährlichen Pflegebericht. Das Land schreibt dazu selbst, weder es noch die Kommunen
            noch die Pflegekassen könnten eine Planung rechtlich durchsetzen.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Und die Personalfrage ist nicht kleiner geworden: Pflege ist inzwischen das größte
            Berufsfeld des Brandenburger Arbeitsmarktes, und das Land erwartet bis 2040 dennoch eine
            Lücke von über 6.000 Fachkräften. Für Familien heißt das nüchtern: Auf ein wachsendes
            Angebot zu warten, ist kein Plan.
          </p>
          <p className="text-[13px] text-pm-mute mb-10">
            Pflegezahlen: Statistisches Bundesamt und Amt für Statistik Berlin-Brandenburg,
            Pflegestatistik 2023 (Stichtag 15. Dezember 2023). Entwicklung, Kreiswerte,
            Personalprognose: Ministerium für Gesundheit und Soziales, „Daten und Fakten zur
            Pflege im Land Brandenburg", 6. Ausgabe, Dezember 2025. Landespflegeplan vom
            1. Dezember 1995, Brandenburgisches Vorschriftensystem.
          </p>
          {/* ⑥ FAQ */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen — 24h-Pflege in Brandenburg</h2>
          <div className="space-y-3 mb-12">
            {[
              { q: 'Warum sind Heimplätze in Brandenburg so knapp?', a: 'Weil das Angebot nicht mitgewachsen ist. Zwischen 2013 und 2023 hat sich die Zahl der Pflegebedürftigen in Brandenburg verdoppelt — rund 111.100 Menschen mehr —, während die Zahl der Dauerpflegeplätze um knapp sechs Prozent zunahm; 2023 ist sie erstmals gesunken. Brandenburg hat dadurch den niedrigsten Heimanteil aller Bundesländer (11,1 Prozent) und zugleich die wenigsten Plätze je Ältere (39 je 1.000 ab 65, Bund 47). Das Land nennt in seinem Pflegebericht zwei Gründe: stark gestiegene Eigenanteile und ein Angebot, das wegen fehlenden Personals zurückgeht. Besonders eng ist es in der Uckermark, in Elbe-Elster und in Ostprignitz-Ruppin.' },
              { q: 'Was kostet eine 24h-Pflegekraft in Brandenburg?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1000–2000 €/Monat — oft günstiger als ein Heimplatz in Brandenburg (rund 3.020 €/Monat) oder Berlin (rund 3.100 €/Monat, vdek 07/2026).' },
              { q: 'Wie schnell kann eine 24h-Pflegekraft in Brandenburg starten?', a: 'In der Regel in 4–7 Tagen. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Brandenburg — auch in ländlichen Regionen.' },
              { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
              { q: 'Ist 24h-Pflege über Primundus in Brandenburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-pm-line group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-pm-ink pr-4">{item.q}</h3>
                  <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4"><p className="text-[14px] text-pm-body leading-relaxed">{item.a}</p></div>
              </details>
            ))}
          </div>

          {/* TRENNLINIE */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-pm-line" />
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-pm-mute whitespace-nowrap">So arbeiten wir</p>
            <div className="flex-1 h-px bg-pm-line" />
          </div>

          {/* KONDITIONEN */}
          <div className="bg-white border border-pm-line rounded-2xl p-5 mb-8">
            <div className="flex items-start gap-3 pb-4 mb-2 border-b border-pm-line">
              <span className="w-7 h-7 rounded-full bg-pm-taupe text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <div className="flex-1 min-w-0"><span className="text-[15px] font-bold text-pm-ink block mb-1">Unsere Konditionen</span>
              <span className="bg-pm-mint text-pm-green-deep text-[11px] font-semibold px-3 py-1 rounded-full inline-block">100% Sorgenfrei und ohne Risiko</span></div>
            </div>
            {[
              { icon: '🛡', title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
              { icon: '📄', title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
              { icon: '⏱', title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
              { icon: '👤', title: 'Persönlicher Ansprechpartner', desc: '7 Tage/Woche für Sie da' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 py-3 border-b border-pm-line-soft last:border-0">
                <div className="w-9 h-9 rounded-lg border border-pm-line flex items-center justify-center flex-shrink-0 text-lg">{item.icon}</div>
                <div>
                  <p className="text-[14px] font-bold text-pm-ink mb-0.5">{item.title}</p>
                  <p className="text-[13px] text-pm-mute">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-4 mt-1 border-t border-pm-line">
              <img width={40} height={48} src="/images/primundus_testsieger-2021.webp" alt="Testsieger DIE WELT" className="w-10 h-12 object-contain flex-shrink-0" />
              <div>
                <p className="text-[14px] font-bold text-pm-ink">Testsieger bei DIE WELT – 6× in Folge</p>
                <p className="text-[13px] text-pm-mute">Nr. 1 der Pflegekräfte-Vermittler — <a href="/testsieger-24-stunden-pflege" className="underline underline-offset-2 hover:text-pm-taupe">zur Auszeichnung mit Beleg</a></p>
              </div>
            </div>
          </div>

          {/* ABLAUF */}
          <h2 className="text-[22px] md:text-[26px] font-bold text-pm-ink text-center mb-8">In 2 Minuten zu Ihrem persönlichen Angebot</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { n: '1', title: 'Ihren Preis sehen', desc: 'Wenige Fragen zur Pflegesituation und Ihre Kontaktdaten für die Angebotskopie — danach sehen Sie sofort Ihren Preis samt Zuschüssen.', chip: '⏱ Dauert unter 2 Minuten' },
              { n: '2', title: 'Betreuungskräfte ansehen', desc: 'Direkt danach sehen Sie in Ihrem Kundenportal, wer zu Ihnen kommen könnte — in Ruhe und ohne Verpflichtung.', chip: '✉ Ihr Zugang kommt auch per E-Mail' },
              { n: '3', title: 'Auswählen und starten', desc: 'Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl unterschreiben Sie den Vertrag — danach reist Ihre Betreuungskraft an, meist in 4–7 Tagen.', chip: '✓ Kein Vertrag vor Ihrer Auswahl' },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-11 h-11 rounded-full bg-pm-cocoa text-white text-[18px] font-bold flex items-center justify-center mx-auto mb-4">{step.n}</div>
                <p className="text-[14px] font-bold text-pm-ink mb-2 leading-snug">{step.title}</p>
                <p className="text-[13px] text-pm-mute leading-relaxed mb-3">{step.desc}</p>
                <span className="inline-flex items-center gap-1.5 bg-pm-mint text-pm-green-deep text-[11px] font-semibold px-3 py-1 rounded-full">{step.chip}</span>
              </div>
            ))}
          </div>
          <div className="text-center mb-12">
            <a href="https://kostenrechner.primundus.de/?start=1&src=apex-24h-pflege-brandenburg" className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[16px] py-4 px-10 rounded-full transition-all duration-200">
              Kosten & Pflegekräfte ansehen
            </a>
          </div>

          {/* CTA */}
          <CitiesOfRegion region="brandenburg" />

          <ArticleCTA
            headline="Ist 24h-Pflege in Brandenburg die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />

        </div>
      </div>
    </>
  )
}
