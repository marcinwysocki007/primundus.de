import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'

export const metadata: Metadata = {
  title: '24-Stunden-Pflege Speyer & Rhein-Pfalz-Kreis',
  description: '24-Stunden-Pflege in Speyer und im Rhein-Pfalz-Kreis: Eigenanteil ab ca. 1300 €/Monat (PG 3). Betreuungskräfte vorher ansehen, keine Vermittlungsgebühr.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-speyer' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Speyer — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Speyer. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-speyer',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-speyer#service',
    name: 'Primundus — 24h-Pflege Speyer',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Speyer. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-speyer',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Speyer' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Speyer', item: 'https://primundus.de/24h-pflege-speyer' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1300–2400 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Speyer starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'In der Regel in 4–7 Tagen. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Speyer rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Speyer ist bekannt: Die durchschnittliche Wohnung misst 92,9 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 41,3 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Speyer — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Speyer im Schnitt 2,5 Wohnungen, in Rheinland-Pfalz 1,7. 35,8 Prozent der Gebäude stehen frei, 42,5 Prozent sind Reihenhäuser. 49,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Speyer ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das hängt am Grundriss, und die Ausgangslage in Speyer ist bekannt: Die durchschnittliche Wohnung misst 92,9 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 41,3 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie viele ältere Menschen leben in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: '5.707 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,5 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
      },
      {
        '@type': 'Question',
        name: 'Wie wohnt man in Speyer — Haus oder Geschosswohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auf ein Gebäude kommen in Speyer im Schnitt 2,5 Wohnungen, in Rheinland-Pfalz 1,7. 35,8 Prozent der Gebäude stehen frei, 42,5 Prozent sind Reihenhäuser. 49,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Speyer ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
      },
      {
        '@type': 'Question',
        name: 'Wie gut ist die ambulante Versorgung in Speyer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Dünner als im Landesdurchschnitt. Nur 16,3 Prozent der Speyerer Pflegebedürftigen werden von einem ambulanten Dienst betreut, in Rheinland-Pfalz sind es 18,3 Prozent — und in der ganzen Stadt gibt es nur 15 solcher Dienste. Umgekehrt ist das Heimangebot außergewöhnlich dicht: 96,8 vollstationäre Plätze je 1.000 Einwohner über 70 gegenüber 63,1 im Land, schon 2021 der Spitzenwert aller 36 Verwaltungsbezirke in Rheinland-Pfalz. Speyer ist also stark auf stationäre Versorgung ausgerichtet. Wer zu Hause bleiben möchte, findet weniger Unterstützung von außen als in vergleichbaren Städten — eine Betreuungskraft, die im Haushalt lebt, ist hier oft die einzige durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Wie gut ist die häusliche Pflege in Speyer aufgestellt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ehrlich gesagt: dünner als das Heimangebot. Speyer hat mit 97 vollstationären Plätzen je 1.000 Einwohner über 70 die höchste Heimplatzdichte in Rheinland-Pfalz (Land: 63) — 2021 war es der Spitzenwert aller 36 Verwaltungsbezirke. Ambulant sieht es anders aus: Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von einem Pflegedienst betreut, im Land 18,3 Prozent, und es gibt in der ganzen Stadt lediglich 15 Dienste. Wer zu Hause bleiben möchte, hat also weniger Auswahl und sollte früher planen. Eine Betreuungskraft, die im Haushalt lebt, ist von dieser Knappheit nicht betroffen — sie ist durchgehend da, nicht nach Tourenplan.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Speyer bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau' },
      },
    ],
  },
]

export default function SpeyerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Speyer</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            24h-Pflege in Speyer · Aktualisiert am 28. August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24-Stunden-Pflege und Betreuung in Speyer
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Mit dem Dom vor Augen alt werden: In Speyer-West, im Vogelgesang oder in der Altstadt wohnen viele seit Jahrzehnten — und bleiben am liebsten genau dort. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist Tag und Nacht da. Täglich kündbar, rechtssicher, startklar in 4–7 Tagen.
          </p>

          {/* ① WAS IST 24H-PFLEGE */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-6">
              Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist rund um die Uhr erreichbar — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Seniorenbetreuung zu Hause in Speyer heißt: Das eigene Zuhause bleibt erhalten, der gewohnte Alltag auch.
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
            Kosten & Kassenzuschüsse in Speyer 2026
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl overflow-hidden mb-4">
            <div className="bg-pm-paper px-5 py-3 border-b border-pm-line">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pm-mute">Kostenbeispiel — Pflegegrad 3 in Speyer</p>
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
                <span className="text-pm-taupe">ca. 1300–2400 €/Monat</span>
              </div>
            </div>
            <div className="bg-pm-paper border-t border-pm-line px-5 py-3">
              <p className="text-[12px] text-pm-mute">Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause</p>
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
              <a href="https://kostenrechner.primundus.de/?start=1&amp;src=ort-speyer" target="_blank" rel="noopener" className="text-[15px] text-pm-taupe font-semibold hover:underline">
                → Preis und Betreuungskräfte für Speyer ansehen — in 2 Minuten
              </a>
            </div>
          </div>

          {/* ④b POLEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Polnische Betreuungskräfte in Speyer</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wer in Speyer nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe:
            jemanden, der im Haushalt lebt und rund um die Uhr da ist. Genau das leisten unsere
            Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien —
            und sie sind in Speyer und im gesamten Umland im Einsatz.
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
            Entlastungsbudget in Rheinland-Pfalz meist rund 1300 bis 2400 Euro Eigenanteil —
            deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.220 Euro im Monat kostet.
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
          {/* ⑤ KREIS-H2 */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">24-Stunden-Pflege im Rhein-Pfalz-Kreis</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">Unsere Betreuungskräfte ziehen in Speyer und im Rhein-Pfalz-Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</p>
          <div className="bg-pm-shell border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[13px] font-bold text-pm-taupe-ink mb-1">Einzugsgebiet Speyer</p>
            <p className="text-[13px] text-pm-taupe-ink leading-relaxed">Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau</p>
          </div>

          {/* ⑤c VOR ORT — individueller Text je Stadt (kein Baustein) */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Was die Pflege zu Hause in Speyer ausmacht</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Speyer ist auf das Heim hin gebaut wie kaum eine zweite Stadt in Rheinland-Pfalz.{' '}
            <strong className="text-pm-ink font-semibold">Auf 1.000 Einwohner über 70 kommen hier
            97 vollstationäre Heimplätze, im Land 63</strong> — schon 2021 war das der höchste Wert
            aller 36 rheinland-pfälzischen Verwaltungsbezirke. Und anders als in manchen Städten ist
            das kein Rechenartefakt: Auch der Anteil der Pflegebedürftigen, die tatsächlich im Heim
            leben, liegt mit 20,8 Prozent weit über dem Landeswert von 13,7. Beide Kennzahlen zeigen
            in dieselbe Richtung, fast deckungsgleich.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Die Kehrseite betrifft genau die Familien, die zu Hause bleiben wollen: Das ambulante
            Netz ist dünner als anderswo. Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von
            einem Pflegedienst betreut, im Land 18,3 Prozent — und es gibt in der ganzen Stadt
            lediglich 15 solche Dienste. Wer hier eine Versorgung zu Hause organisiert, hat weniger
            Auswahl und muss früher planen.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Der Druck wächst dabei, denn Speyer ist alt.{' '}
            <strong className="text-pm-ink font-semibold">Mit einem Medianalter von 47 Jahren ist es
            die älteste kreisfreie Stadt in Rheinland-Pfalz</strong> (Land: 45). 24,8 Prozent der
            Einwohner sind über 65, 7,8 Prozent über 80 — beides deutlich über dem Landesschnitt von
            23,3 und 6,9 Prozent.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Topografisch nimmt Speyer den Bewohnern nichts ab, aber es macht auch nichts schwerer:
            Die Stadt liegt in der Oberrheinebene, zwischen der Rheinniederung und der Hochterrasse
            liegen über das gesamte Stadtgebiet rund 20 Höhenmeter. Was im Volksmund „Buckel" heißt
            — Museumsbuckel, Brauereibuckel, Schützenbuckel —, sind kurze Rampen, keine Hanglagen.
            Der Rhein bildet nur die Ostgrenze und zerschneidet die Stadt nicht. Die reale Barriere
            ist eine andere, und die Stadt benennt sie selbst: Speyer-Süd ist durch die B 39 vom
            Zentrum abgehängt.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-10">
            Medizinisch ist die Stadt stark: Das Diakonissen-Stiftungs-Krankenhaus führt eine
            geriatrische Fachabteilung mit 1.297 stationären Fällen im Jahr — die größte, die uns
            bei diesen Recherchen begegnet ist — dazu ein Geriatrisches Zentrum mit 16
            Tagesklinikplätzen. Ein Hinweis, weil derselbe Träger auch das Evangelische Krankenhaus
            in Bad Dürkheim betreibt: Die Geriatrie sitzt in Speyer, Paul-Egell-Straße. Eine
            eigenständige geriatrische Reha gibt es hier nicht, die Anschlussbehandlung findet
            auswärts statt. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a
            SGB XI ist kostenlos und trägerunabhängig.
          </p>
          {/* ⑥ FAQ */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen — 24h-Pflege in Speyer</h2>
          <div className="space-y-3 mb-12">
            {[
              { q: 'Was kostet eine 24h-Pflegekraft in Speyer?', a: '2.200–3.500 €/Monat über Primundus. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1300–2400 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
              { q: 'Wie schnell kann eine 24h-Pflegekraft in Speyer starten?', a: 'In der Regel in 4–7 Tagen. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
              { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
              { q: 'Ist 24h-Pflege über Primundus in Speyer rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
              { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Speyer?', a: 'Das hängt am Grundriss, und die Ausgangslage in Speyer ist bekannt: Die durchschnittliche Wohnung misst 92,9 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 41,3 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
              { q: 'Wie wohnt man in Speyer — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Speyer im Schnitt 2,5 Wohnungen, in Rheinland-Pfalz 1,7. 35,8 Prozent der Gebäude stehen frei, 42,5 Prozent sind Reihenhäuser. 49,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Speyer ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
              { q: 'Passt eine Betreuungskraft überhaupt in eine Wohnung in Speyer?', a: 'Das hängt am Grundriss, und die Ausgangslage in Speyer ist bekannt: Die durchschnittliche Wohnung misst 92,9 Quadratmeter, 20,2 Prozent liegen unter 60 Quadratmetern (Rheinland-Pfalz: 15,4 Prozent), und 41,3 Prozent der Haushalte wohnen im Eigentum (Rheinland-Pfalz: 54,4 Prozent). Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. In den kleineren Wohnungen wird das eng — deshalb klären wir es vorab am Telefon, damit es hinterher keine Überraschung gibt.' },
              { q: 'Wie viele ältere Menschen leben in Speyer?', a: '5.707 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,5 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
              { q: 'Wie wohnt man in Speyer — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Speyer im Schnitt 2,5 Wohnungen, in Rheinland-Pfalz 1,7. 35,8 Prozent der Gebäude stehen frei, 42,5 Prozent sind Reihenhäuser. 49,1 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Speyer ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
              { q: 'Wie gut ist die ambulante Versorgung in Speyer?', a: 'Dünner als im Landesdurchschnitt. Nur 16,3 Prozent der Speyerer Pflegebedürftigen werden von einem ambulanten Dienst betreut, in Rheinland-Pfalz sind es 18,3 Prozent — und in der ganzen Stadt gibt es nur 15 solcher Dienste. Umgekehrt ist das Heimangebot außergewöhnlich dicht: 96,8 vollstationäre Plätze je 1.000 Einwohner über 70 gegenüber 63,1 im Land, schon 2021 der Spitzenwert aller 36 Verwaltungsbezirke in Rheinland-Pfalz. Speyer ist also stark auf stationäre Versorgung ausgerichtet. Wer zu Hause bleiben möchte, findet weniger Unterstützung von außen als in vergleichbaren Städten — eine Betreuungskraft, die im Haushalt lebt, ist hier oft die einzige durchgehende Lösung.' },
              { q: 'Wie gut ist die häusliche Pflege in Speyer aufgestellt?', a: 'Ehrlich gesagt: dünner als das Heimangebot. Speyer hat mit 97 vollstationären Plätzen je 1.000 Einwohner über 70 die höchste Heimplatzdichte in Rheinland-Pfalz (Land: 63) — 2021 war es der Spitzenwert aller 36 Verwaltungsbezirke. Ambulant sieht es anders aus: Nur 16,3 Prozent der 3.653 Pflegebedürftigen werden von einem Pflegedienst betreut, im Land 18,3 Prozent, und es gibt in der ganzen Stadt lediglich 15 Dienste. Wer zu Hause bleiben möchte, hat also weniger Auswahl und sollte früher planen. Eine Betreuungskraft, die im Haushalt lebt, ist von dieser Knappheit nicht betroffen — sie ist durchgehend da, nicht nach Tourenplan.' },
              { q: 'Welches Einzugsgebiet wird in Speyer bedient?', a: 'Speyer und Rhein-Pfalz-Kreis: Schifferstadt, Römerberg, Dudenhofen und alle Gemeinden im Rhein-Pfalz-Kreis nördlich von Landau' },
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

          {/* ⑦ TRENNLINIE */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-pm-line" />
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-pm-mute whitespace-nowrap">So arbeiten wir</p>
            <div className="flex-1 h-px bg-pm-line" />
          </div>

          {/* ⑧ KONDITIONEN */}
          <div className="bg-white border border-pm-line rounded-2xl p-5 mb-8">
            <div className="flex items-center gap-3 pb-4 mb-2 border-b border-pm-line">
              <span className="w-7 h-7 rounded-full bg-pm-taupe text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">2</span>
              <span className="text-[15px] font-bold text-pm-ink flex-1">Unsere Konditionen</span>
              <span className="bg-pm-mint text-pm-green-deep text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">100% Sorgenfrei und ohne Risiko</span>
            </div>
            {[
              { icon: '🛡', title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
              { icon: '📄', title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
              { icon: '⏱', title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
              { icon: '👤', title: 'Persönlicher Ansprechpartner', desc: '7 Tage die Woche für Sie da' },
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

          {/* ⑨ ABLAUF */}
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
            <a href="https://kostenrechner.primundus.de/?start=1&src=apex-24h-pflege-speyer" className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[16px] py-4 px-10 rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
              Betreuung anfragen
            </a>
          </div>

          {/* ⑩ CTA */}
          <NearbyCities current="speyer" />

          <ArticleCTA
            headline="Ist 24h-Pflege in Speyer die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />

        </div>
      </div>
    </>
  )
}
