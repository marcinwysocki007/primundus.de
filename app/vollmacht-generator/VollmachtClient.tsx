'use client'

import { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface PersonData {
  vorname: string
  nachname: string
  strasse: string
  hausnummer: string
  plz: string
  ort: string
  geburtsdatum?: string
  geburtsort?: string
  beziehung?: string
}

interface FormData {
  vollmachtgeber: PersonData
  bevollmaechtigter: PersonData
  hasErsatz: boolean
  ersatzbevollmaechtigter: PersonData
  bereiche: {
    gesundheitssorge: boolean
    aufenthaltsbestimmung: boolean
    vermögenssorge: boolean
    bankgeschaefte: boolean
    wohnungsangelegenheiten: boolean
    behoerdenangelegenheiten: boolean
  }
  geltung: 'sofort' | 'vorsorgefall'
  gesundheitsDetails: {
    medizinischeBehandlungen: boolean
    ablehnenLebenserhaltend: boolean
    intensivmedizin: boolean
    krankentransporte: boolean
    patientenakten: boolean
  }
}

const emptyPerson = (): PersonData => ({
  vorname: '',
  nachname: '',
  strasse: '',
  hausnummer: '',
  plz: '',
  ort: '',
  geburtsdatum: '',
  geburtsort: '',
  beziehung: '',
})

const initialFormData: FormData = {
  vollmachtgeber: emptyPerson(),
  bevollmaechtigter: emptyPerson(),
  hasErsatz: false,
  ersatzbevollmaechtigter: emptyPerson(),
  bereiche: {
    gesundheitssorge: true,
    aufenthaltsbestimmung: true,
    vermögenssorge: false,
    bankgeschaefte: false,
    wohnungsangelegenheiten: false,
    behoerdenangelegenheiten: false,
  },
  geltung: 'sofort',
  gesundheitsDetails: {
    medizinischeBehandlungen: true,
    ablehnenLebenserhaltend: false,
    intensivmedizin: false,
    krankentransporte: true,
    patientenakten: true,
  },
}

// ─── generateAndPrint ─────────────────────────────────────────────────────────
// Rechtsprüfung 02.10.2026 (vor Linkanfragen): Wortlaut für die Maßnahmen nach § 1820 Abs. 2 BGB nach dem Formular
// „Vollmacht“ des Bundesministeriums der Justiz (Stand Januar 2023) und BGH, Beschluss vom 6. Juli 2016, XII ZB 61/16:
// Die Vollmacht muss die Maßnahme ausdrücklich nennen und bei § 1829 deutlich machen, dass die Entscheidung mit der
// begründeten Gefahr des Todes oder eines schweren und länger dauernden gesundheitlichen Schadens verbunden sein kann.
// Nur der angekreuzte Baustein bekommt diesen Wortlaut. Formhinweise (§ 29 GBO, § 492 Abs. 4 BGB, Konto-/Depotvollmacht)
// stehen im Hinweis unter dem Dokument, nicht im Vollmachtstext.

/** Eingaben landen als Text im Dokument, nie als HTML */
const esc = (s: string | undefined) =>
  (s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Datumsfeld liefert JJJJ-MM-TT; im Dokument steht TT.MM.JJJJ */
const datumDE = (iso: string | undefined) => {
  const m = (iso ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/)
  return m ? `${m[3]}.${m[2]}.${m[1]}` : esc(iso)
}

const GEFAHR_TOD =
  'die begründete Gefahr besteht, dass ich sterbe oder einen schweren und länger dauernden gesundheitlichen Schaden erleide'

function generateAndPrint(data: FormData) {
  const vg = data.vollmachtgeber
  const bv = data.bevollmaechtigter
  const eb = data.ersatzbevollmaechtigter
  const today = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })

  const bereicheList: string[] = []
  if (data.bereiche.gesundheitssorge) bereicheList.push('Gesundheitssorge')
  if (data.bereiche.aufenthaltsbestimmung) bereicheList.push('Aufenthaltsbestimmung')
  if (data.bereiche.vermögenssorge) bereicheList.push('Vermögenssorge')
  if (data.bereiche.bankgeschaefte) bereicheList.push('Bankgeschäfte')
  if (data.bereiche.wohnungsangelegenheiten) bereicheList.push('Wohnungsangelegenheiten')
  if (data.bereiche.behoerdenangelegenheiten) bereicheList.push('Behördenangelegenheiten und Post')

  const g = data.gesundheitsDetails
  const einzelbefugnisse = [
    g.medizinischeBehandlungen
      ? 'die Einwilligung in Untersuchungen des Gesundheitszustands, Heilbehandlungen, Operationen und sonstige ärztliche Eingriffe, auch wenn die begründete Gefahr besteht, dass ich aufgrund der Maßnahme sterbe oder einen schweren und länger dauernden gesundheitlichen Schaden erleide (§ 1829 Absatz 1 BGB)'
      : '',
    // Baustein 2 behält die gewählte Einschränkung; sind 2 und 3 angekreuzt, gilt 2 nur für die in 3 nicht genannten Maßnahmen
    // (OpenAI-Gegenprüfung 02.10.2026, A2.1: sonst Auslegungsstreit, welche Regel für Beatmung oder künstliche Ernährung gilt)
    g.ablehnenLebenserhaltend
      ? `die Ablehnung ${g.intensivmedizin ? 'sonstiger lebenserhaltender Maßnahmen, die nicht unter den folgenden Punkt (Intensivmedizin, Beatmung, Wiederbelebung, künstliche Ernährung und Flüssigkeitszufuhr) fallen' : 'lebenserhaltender Maßnahmen'}, den Widerruf einer Einwilligung in solche Maßnahmen und ihren Abbruch, auch wenn wegen des Unterbleibens oder des Abbruchs der Maßnahme ${GEFAHR_TOD} (§ 1829 Absatz 2 BGB); diese Befugnis ist auf Fälle beschränkt, in denen die Behandlung nach ärztlichem Urteil medizinisch aussichtslos ist und nur dazu dient, den Sterbeprozess zu verlängern`
      : '',
    g.intensivmedizin
      ? `die Entscheidung über Maßnahmen der Intensivmedizin, künstliche Beatmung, Wiederbelebung (Reanimation), künstliche Ernährung (parenteral oder über eine Sonde) und künstliche Flüssigkeitszufuhr: Der Bevollmächtigte darf in diese Maßnahmen einwilligen, die Einwilligung verweigern oder eine Einwilligung widerrufen, auch wenn mit der Vornahme, dem Unterlassen oder dem Abbruch der Maßnahme ${GEFAHR_TOD} (§ 1829 Absatz 1 und 2 BGB)`
      : '',
    g.krankentransporte ? 'die Veranlassung und Organisation von Krankentransporten, Notfalltransporten und Begleitfahrten' : '',
    g.patientenakten
      ? 'die Einsicht in sämtliche Patientenakten, Krankenunterlagen und Behandlungsdokumentationen sowie die Entbindung aller behandelnden Ärzte, Therapeuten und medizinischen Einrichtungen von ihrer Schweigepflicht gegenüber dem Bevollmächtigten'
      : '',
  ].filter(Boolean)

  const formHinweise = [
    data.bereiche.vermögenssorge
      ? '<li><strong>Grundstücke:</strong> Das Grundbuchamt erkennt die Vollmacht nur an, wenn Ihre Unterschrift unter der Vollmacht öffentlich beglaubigt ist (§ 29 Grundbuchordnung). Das übernimmt ein Notar oder die Betreuungsbehörde (§ 7 Betreuungsorganisationsgesetz). Der Kaufvertrag über eine Immobilie wird ohnehin notariell beurkundet (§ 311b BGB). Ob auch die Vollmacht für einen Immobilienkauf oder -verkauf notariell beurkundet sein muss, ist rechtlich umstritten. Lassen Sie sich dazu vor der Unterschrift beraten.</li>'
      : '',
    data.bereiche.bankgeschaefte
      ? '<li><strong>Banken:</strong> Viele Banken und Sparkassen verlangen zusätzlich ihre eigene Konto- und Depotvollmacht. Unterschreiben Sie diese am besten gemeinsam mit der bevollmächtigten Person in Ihrer Bank. Einen Verbraucherkredit kann der Bevollmächtigte mit dieser Vollmacht nur aufnehmen, wenn sie notariell beurkundet ist (§ 492 Absatz 4 BGB).</li>'
      : '',
    data.geltung === 'vorsorgefall'
      ? '<li><strong>Geltung erst im Vorsorgefall:</strong> Banken, Behörden und Ärzte können einen Nachweis verlangen, dass der Vorsorgefall eingetreten ist. Dem Grundbuchamt genügt ein ärztliches Attest nicht (§ 29 Grundbuchordnung). Das Bundesministerium der Justiz rät deshalb von Bedingungen in der Vollmacht ab.</li>'
      : '',
    data.bereiche.gesundheitssorge || data.bereiche.aufenthaltsbestimmung
      ? '<li><strong>Nicht enthalten</strong> sind freiheitsentziehende Maßnahmen in Heim oder Krankenhaus wie Bettgitter, Gurte oder ruhigstellende Medikamente (§ 1831 Absatz 4 BGB) und ärztliche Zwangsmaßnahmen (§ 1832 BGB). Dafür muss eine Vollmacht diese Maßnahmen ausdrücklich nennen (§ 1820 Absatz 2 BGB), etwa im Formular „Vollmacht“ des Bundesministeriums der Justiz.</li>'
      : '',
  ].filter(Boolean)

  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Vorsorgevollmacht — ${esc(vg.vorname)} ${esc(vg.nachname)}</title>
  <style>
    @page {
      size: A4;
      margin: 2.5cm;
    }
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display: none; }
      footer { position: fixed; bottom: 0; left: 0; right: 0; }
    }
    * { box-sizing: border-box; }
    body {
      font-family: 'Times New Roman', Georgia, serif;
      font-size: 11pt;
      line-height: 1.65;
      color: #1a1a1a;
      margin: 0;
      padding: 2.5cm;
      max-width: 21cm;
      margin: 0 auto;
    }
    .document-header {
      text-align: center;
      margin-bottom: 2em;
      padding-bottom: 1.5em;
      border-bottom: 2px solid #1a1a1a;
    }
    .document-header h1 {
      font-size: 20pt;
      font-weight: bold;
      letter-spacing: 0.15em;
      margin: 0 0 0.3em 0;
      text-transform: uppercase;
    }
    .document-header .subtitle {
      font-size: 11pt;
      color: #444;
      margin: 0;
    }
    .document-header .date-line {
      font-size: 10pt;
      color: #666;
      margin-top: 0.5em;
    }
    .section {
      margin-bottom: 2em;
      page-break-inside: avoid;
    }
    .section h2 {
      font-size: 12pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.3em;
      margin-bottom: 0.8em;
    }
    .section p {
      margin: 0.5em 0;
    }
    .section ul {
      margin: 0.6em 0 0.6em 1.5em;
      padding: 0;
    }
    .section ul li {
      margin-bottom: 0.4em;
    }
    .person-block {
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0.8em 1em;
      margin: 0.6em 0;
    }
    .person-block .person-name {
      font-weight: bold;
      font-size: 12pt;
      margin-bottom: 0.3em;
    }
    .person-block .person-detail {
      font-size: 10pt;
      color: #444;
    }
    .bereich-tag {
      display: inline-block;
      background: #e8e0d5;
      border: 1px solid #c8b89a;
      border-radius: 3px;
      padding: 0.2em 0.6em;
      margin: 0.2em 0.2em 0.2em 0;
      font-size: 10pt;
    }
    .geltung-box {
      border: 1px solid #c8b89a;
      border-radius: 4px;
      padding: 0.8em 1em;
      background: #fdf9f4;
      margin: 0.6em 0;
    }
    .signature-section {
      margin-top: 3em;
      page-break-inside: avoid;
    }
    .signature-block {
      margin-bottom: 2.5em;
    }
    .signature-line {
      border-top: 1px solid #1a1a1a;
      margin-top: 2.5em;
      padding-top: 0.3em;
      font-size: 10pt;
      color: #444;
    }
    .disclaimer {
      margin-top: 3em;
      padding: 1em;
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 9pt;
      color: #666;
      line-height: 1.5;
    }
    .disclaimer ul {
      margin: 0.5em 0 0 1.2em;
      padding: 0;
    }
    .disclaimer li {
      margin-bottom: 0.3em;
    }
    footer {
      text-align: center;
      font-size: 9pt;
      color: #999;
      border-top: 1px solid #ddd;
      padding-top: 0.5em;
      margin-top: 2em;
    }
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #8B7355;
      color: white;
      border: none;
      border-radius: 10px;
      padding: 12px 24px;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      font-family: sans-serif;
    }
    .print-btn:hover { background: #7A6347; }
  </style>
</head>
<body>

<button class="print-btn no-print" onclick="window.print()">Drucken / Als PDF speichern</button>

<div class="document-header">
  <h1>Vorsorgevollmacht</h1>
  <p class="subtitle">gemäß §§ 164 ff. BGB</p>
  <p class="date-line">Erstellt am: ${today}</p>
</div>

<div class="section">
  <h2>I. Vollmachtgeber</h2>
  <p>Ich, die unterzeichnende Person (nachfolgend „Vollmachtgeber"), erteile hiermit Vorsorgevollmacht:</p>
  <div class="person-block">
    <div class="person-name">${esc(vg.vorname)} ${esc(vg.nachname)}</div>
    <div class="person-detail">${esc(vg.strasse)} ${esc(vg.hausnummer)}, ${esc(vg.plz)} ${esc(vg.ort)}</div>
    ${vg.geburtsdatum ? `<div class="person-detail">Geboren am: ${datumDE(vg.geburtsdatum)}${vg.geburtsort ? ` in ${esc(vg.geburtsort)}` : ''}</div>` : ''}
  </div>
</div>

<div class="section">
  <h2>II. Bevollmächtigte Person</h2>
  <p>Ich bevollmächtige folgende Person, in meinem Namen zu handeln und dabei meine Wünsche und meinen Willen zu beachten:</p>
  <div class="person-block">
    <div class="person-name">${esc(bv.vorname)} ${esc(bv.nachname)}</div>
    <div class="person-detail">${esc(bv.strasse)} ${esc(bv.hausnummer)}, ${esc(bv.plz)} ${esc(bv.ort)}</div>
    ${bv.beziehung ? `<div class="person-detail">Beziehung: ${esc(bv.beziehung)}</div>` : ''}
  </div>
  ${data.hasErsatz && eb.vorname ? `
  <p style="margin-top: 1em;">Ersatzbevollmächtigte Person (für den Fall, dass die oben genannte Person nicht verfügbar oder nicht in der Lage ist, die Vollmacht wahrzunehmen):</p>
  <div class="person-block">
    <div class="person-name">${esc(eb.vorname)} ${esc(eb.nachname)}</div>
    <div class="person-detail">${esc(eb.strasse)} ${esc(eb.hausnummer)}, ${esc(eb.plz)} ${esc(eb.ort)}</div>
    ${eb.beziehung ? `<div class="person-detail">Beziehung: ${esc(eb.beziehung)}</div>` : ''}
  </div>
  ` : ''}
</div>

<div class="section">
  <h2>III. Umfang der Vollmacht</h2>
  <p>Die Vollmacht erstreckt sich auf folgende Bereiche:</p>
  <p style="margin: 0.8em 0;"><strong>${bereicheList.join(', ')}</strong></p>

  ${data.bereiche.gesundheitssorge ? `
  <p style="margin-top: 1em;"><strong>III.1 Gesundheitssorge</strong><br/>
  Der Bevollmächtigte darf in allen Angelegenheiten der Gesundheitssorge entscheiden, ebenso über alle Einzelheiten einer ambulanten oder (teil-)stationären Pflege. Dazu gehören insbesondere die Entscheidung über Krankenhausaufenthalte und die Beauftragung von Ärzten, Therapeuten und Pflegediensten. Er ist befugt, meinen in einer Patientenverfügung festgelegten Willen durchzusetzen.</p>
  ${einzelbefugnisse.length ? `
  <p>Ausdrücklich umfasst die Vollmacht:</p>
  <ul>
    ${einzelbefugnisse.map((b) => `<li>${b}</li>`).join('\n    ')}
  </ul>
  ` : ''}
  ` : ''}

  ${data.bereiche.aufenthaltsbestimmung ? `
  <p style="margin-top: 1em;"><strong>III.2 Aufenthaltsbestimmung</strong><br/>
  Der Bevollmächtigte darf meinen Aufenthalt bestimmen. Dazu gehört die Entscheidung über meinen Wohnsitz und über die Aufnahme in ein Pflegeheim oder eine andere stationäre Einrichtung. Solange es erforderlich ist, darf er auch über meine freiheitsentziehende Unterbringung entscheiden (§ 1831 Absatz 1 BGB). Dafür ist grundsätzlich vorher die Genehmigung des Betreuungsgerichts erforderlich (§ 1831 Absatz 2 und 5 BGB).</p>
  ` : ''}

  ${data.bereiche.vermögenssorge ? `
  <p style="margin-top: 1em;"><strong>III.3 Vermögenssorge</strong><br/>
  Der Bevollmächtigte darf mein Vermögen verwalten, Verträge abschließen, Forderungen geltend machen und Verbindlichkeiten begleichen. Die Vermögensverwaltung umfasst sämtliches bewegliches und unbewegliches Vermögen.</p>
  ` : ''}

  ${data.bereiche.bankgeschaefte ? `
  <p style="margin-top: 1em;"><strong>III.4 Bankgeschäfte</strong><br/>
  Der Bevollmächtigte darf alle Bankgeschäfte durchführen. Dies umfasst die Verfügung über Konten und Depots, die Erteilung und den Widerruf von Vollmachten bei Kreditinstituten, den Abschluss und die Kündigung von Bankverträgen sowie die Aufnahme von Krediten bis zu einem Betrag von 10.000 Euro je Einzelfall, soweit die dafür geltenden gesetzlichen Formvorschriften eingehalten sind.</p>
  ` : ''}

  ${data.bereiche.wohnungsangelegenheiten ? `
  <p style="margin-top: 1em;"><strong>III.5 Wohnungsangelegenheiten</strong><br/>
  Der Bevollmächtigte ist berechtigt, alle Angelegenheiten zu regeln, die meine Wohnung betreffen. Dies umfasst den Abschluss, die Änderung und Kündigung von Mietverträgen, die Entgegennahme und Abgabe von Willenserklärungen gegenüber Vermietern und Hausverwaltungen sowie die Entscheidung über Haushaltsauflösungen.</p>
  ` : ''}

  ${data.bereiche.behoerdenangelegenheiten ? `
  <p style="margin-top: 1em;"><strong>III.6 Behördenangelegenheiten und Post</strong><br/>
  Der Bevollmächtigte ist berechtigt, mich gegenüber Behörden, Ämtern, Sozialversicherungsträgern und Versicherungen und, soweit gesetzlich zulässig, gegenüber Gerichten zu vertreten. Dies umfasst die Stellung von Anträgen, die Entgegennahme von Bescheiden, die Einlegung von Rechtsbehelfen und Rechtsmitteln sowie die Entgegennahme und das Öffnen meiner Post.</p>
  ` : ''}
</div>

<div class="section">
  <h2>IV. Geltung der Vollmacht</h2>
  <div class="geltung-box">
    ${data.geltung === 'sofort'
      ? `<strong>Sofortige Geltung:</strong> Diese Vollmacht gilt ab ihrer Unterzeichnung, unabhängig davon, ob ich meine Angelegenheiten noch selbst regeln kann. So kann der Bevollmächtigte im Bedarfsfall sofort handeln, ohne nachweisen zu müssen, dass ich dazu nicht mehr in der Lage bin.`
      : `<strong>Geltung im Vorsorgefall:</strong> Diese Vollmacht tritt erst in Kraft, wenn ich aufgrund einer Krankheit, eines Unfalls oder sonstiger Umstände nicht mehr in der Lage bin, meine Angelegenheiten selbst zu regeln. Der Bevollmächtigte hat dafür ein ärztliches Attest vorzulegen.`
    }
  </div>
  <p style="margin-top: 0.8em;">Mit dieser Vollmacht soll eine gerichtlich angeordnete Betreuung vermieden werden. Die Vollmacht bleibt deshalb in Kraft, wenn ich nach ihrer Erteilung geschäftsunfähig werde.</p>
</div>

<div class="section">
  <h2>V. Allgemeine Bestimmungen</h2>
  <p><strong>Widerruf:</strong> Solange ich geschäftsfähig bin, kann ich diese Vollmacht jederzeit ohne Angabe von Gründen widerrufen, gegenüber dem Bevollmächtigten oder gegenüber denjenigen, bei denen er die Vollmacht verwendet. Nach dem Widerruf oder Erlöschen der Vollmacht hat der Bevollmächtigte die Vollmachtsurkunde zurückzugeben (§ 175 BGB). Mit meinem Tod erlischt die Vollmacht.</p>
  <p style="margin-top: 0.8em;"><strong>Vertrauensgrundsatz:</strong> Der Bevollmächtigte ist verpflichtet, die Vollmacht ausschließlich in meinem Interesse auszuüben und dabei meine bekannten oder mutmaßlichen Wünsche zu berücksichtigen.</p>
  <p style="margin-top: 0.8em;"><strong>Untervollmacht:</strong> Der Bevollmächtigte ist berechtigt, für einzelne Angelegenheiten Untervollmachten zu erteilen, soweit dies zur ordnungsgemäßen Erledigung der übertragenen Aufgaben erforderlich ist.</p>
</div>

<div class="signature-section section">
  <h2>VI. Unterschriften</h2>

  <div class="signature-block">
    <p><strong>Vollmachtgeber/in:</strong></p>
    <div class="signature-line">
      Ort, Datum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift ${esc(vg.vorname)} ${esc(vg.nachname)}
    </div>
  </div>

  <div class="signature-block">
    <p><strong>Ich nehme diese Vollmacht an — Bevollmächtigte/r:</strong></p>
    <div class="signature-line">
      Ort, Datum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift ${esc(bv.vorname)} ${esc(bv.nachname)}
    </div>
  </div>

  ${data.hasErsatz && eb.vorname ? `
  <div class="signature-block">
    <p><strong>Ich nehme diese Vollmacht als Ersatzbevollmächtigte/r an:</strong></p>
    <div class="signature-line">
      Ort, Datum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift ${esc(eb.vorname)} ${esc(eb.nachname)}
    </div>
  </div>
  ` : ''}
</div>

<div class="disclaimer">
  <strong>Hinweis:</strong> Dieses Dokument wurde mit dem Vorsorgevollmacht-Generator von Primundus (primundus.de) erstellt. Es ist eine Vorlage und ersetzt keine Rechtsberatung; bei größerem Vermögen, Immobilien oder einem eigenen Unternehmen lassen Sie sich von einem Notar oder Rechtsanwalt beraten. Stand der Vorlage: Oktober 2026.
  <ul>
    <li>Unterschreiben Sie die Vollmacht eigenhändig mit Ort und Datum. Bewahren Sie sie so auf, dass die bevollmächtigte Person sie im Ernstfall im Original findet.</li>
    ${formHinweise.join('\n    ')}
    <li>Lassen Sie die Vollmacht beim Zentralen Vorsorgeregister der Bundesnotarkammer registrieren (www.vorsorgeregister.de), damit sie im Bedarfsfall schnell gefunden wird.</li>
  </ul>
</div>

<footer>
  Erstellt mit Primundus Vorsorgevollmacht-Generator · primundus.de · ${today}
</footer>

</body>
</html>`

  const win = window.open('', '_blank')
  if (win) {
    win.document.write(html)
    win.document.close()
  }
}

// ─── Input Components ─────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[13px] font-semibold text-pm-ink mb-1.5">
      {children}
    </label>
  )
}

function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-pm-line rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-pm-taupe bg-white text-pm-ink placeholder-[#BABABA] transition-colors"
    />
  )
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder?: string
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-pm-line rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-pm-taupe bg-white text-pm-ink transition-colors appearance-none"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  )
}

// ─── Person Form ──────────────────────────────────────────────────────────────

function PersonForm({
  data,
  onChange,
  showBirth = false,
  showBeziehung = false,
}: {
  data: PersonData
  onChange: (d: PersonData) => void
  showBirth?: boolean
  showBeziehung?: boolean
}) {
  const u = (k: keyof PersonData) => (v: string) => onChange({ ...data, [k]: v })

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Vorname</Label>
          <Input value={data.vorname} onChange={u('vorname')} placeholder="Max" />
        </div>
        <div>
          <Label>Nachname</Label>
          <Input value={data.nachname} onChange={u('nachname')} placeholder="Mustermann" />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <div>
          <Label>Straße</Label>
          <Input value={data.strasse} onChange={u('strasse')} placeholder="Musterstraße" />
        </div>
        <div>
          <Label>Hausnr.</Label>
          <Input value={data.hausnummer} onChange={u('hausnummer')} placeholder="12" />
        </div>
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-3">
        <div>
          <Label>PLZ</Label>
          <Input value={data.plz} onChange={u('plz')} placeholder="80331" />
        </div>
        <div>
          <Label>Ort</Label>
          <Input value={data.ort} onChange={u('ort')} placeholder="München" />
        </div>
      </div>
      {showBirth && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Geburtsdatum</Label>
            <Input value={data.geburtsdatum ?? ''} onChange={u('geburtsdatum')} type="date" />
          </div>
          <div>
            <Label>Geburtsort</Label>
            <Input value={data.geburtsort ?? ''} onChange={u('geburtsort')} placeholder="München" />
          </div>
        </div>
      )}
      {showBeziehung && (
        <div>
          <Label>Beziehung zum Vollmachtgeber</Label>
          <Select
            value={data.beziehung ?? ''}
            onChange={u('beziehung')}
            placeholder="Bitte wählen …"
            options={[
              'Ehepartner/in',
              'Lebenspartner/in',
              'Tochter',
              'Sohn',
              'Schwiegertochter',
              'Schwiegersohn',
              'Geschwister',
              'Sonstiges',
            ]}
          />
        </div>
      )}
    </div>
  )
}

// ─── Step Indicator ───────────────────────────────────────────────────────────

function StepIndicator({
  currentStep,
  totalSteps,
  stepLabels,
}: {
  currentStep: number
  totalSteps: number
  stepLabels: string[]
}) {
  return (
    <div className="mb-8">
      <p className="text-[12px] text-pm-mute mb-3 text-center">
        Schritt {currentStep} von {totalSteps}
      </p>
      <div className="flex items-center justify-center gap-2">
        {stepLabels.map((label, idx) => {
          const stepNum = idx + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep
          return (
            <div key={stepNum} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all ${
                    isCompleted
                      ? 'bg-pm-taupe text-white'
                      : isCurrent
                      ? 'bg-pm-taupe text-white ring-4 ring-pm-taupe/20'
                      : 'bg-pm-line text-pm-mute'
                  }`}
                >
                  {isCompleted ? '✓' : stepNum}
                </div>
                <span className={`text-[10px] hidden sm:block max-w-[70px] text-center leading-tight ${isCurrent ? 'text-pm-ink font-semibold' : 'text-pm-mute'}`}>
                  {label}
                </span>
              </div>
              {idx < stepLabels.length - 1 && (
                <div className={`w-8 h-[2px] mb-4 rounded ${stepNum < currentStep ? 'bg-pm-taupe' : 'bg-pm-line'}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Bereich Toggle Card ──────────────────────────────────────────────────────

function BereichCard({
  label,
  description,
  selected,
  onToggle,
}: {
  label: string
  description: string
  selected: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full text-left px-4 py-4 rounded-xl border-2 transition-all ${
        selected
          ? 'border-pm-taupe bg-[#FAF7F2]'
          : 'border-pm-line bg-white hover:border-[#C8B89A]'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-all ${
            selected ? 'bg-pm-taupe border-pm-taupe' : 'bg-white border-[#C8B89A]'
          }`}
        >
          {selected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-pm-ink">{label}</p>
          <p className="text-[12px] text-pm-body mt-0.5 leading-snug">{description}</p>
        </div>
      </div>
    </button>
  )
}

// ─── Checkbox Item ────────────────────────────────────────────────────────────

function CheckboxItem({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all flex items-start gap-3 ${
        checked ? 'border-pm-taupe bg-[#FAF7F2]' : 'border-pm-line bg-white hover:border-[#C8B89A]'
      }`}
    >
      <div
        className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-all ${
          checked ? 'bg-pm-taupe border-pm-taupe' : 'bg-white border-[#C8B89A]'
        }`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="text-[14px] text-pm-ink leading-snug">{label}</span>
    </button>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function VollmachtClient() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  // visibleStep: 1-5 (with step 4 = Gesundheitssorge, only if selected; step 5 = Vorschau)
  const [visibleStep, setVisibleStep] = useState(1)

  const hasGesundheitssorge = formData.bereiche.gesundheitssorge
  const totalSteps = hasGesundheitssorge ? 5 : 4
  // Map visible step to logical step number shown in indicator
  // Steps: 1=Vollmachtgeber, 2=Bevollmächtigter, 3=Umfang, [4=Gesundheit if selected], last=Vorschau

  const stepLabels = hasGesundheitssorge
    ? ['Vollmachtgeber', 'Bevollmächtigte Person', 'Umfang', 'Gesundheit', 'Vorschau']
    : ['Vollmachtgeber', 'Bevollmächtigte Person', 'Umfang', 'Vorschau']

  // Map internal visibleStep to indicator step
  // visibleStep 1 → step 1
  // visibleStep 2 → step 2
  // visibleStep 3 → step 3
  // visibleStep 4 → step 4 (Gesundheit, only if gesundheitssorge)
  // visibleStep 5 → step totalSteps (Vorschau)
  const getIndicatorStep = () => {
    if (!hasGesundheitssorge && visibleStep === 5) return 4
    return visibleStep
  }

  const goNext = () => {
    if (visibleStep === 3 && !hasGesundheitssorge) {
      setVisibleStep(5)
    } else {
      setVisibleStep((s) => Math.min(s + 1, 5))
    }
  }

  const goBack = () => {
    if (visibleStep === 5 && !hasGesundheitssorge) {
      setVisibleStep(3)
    } else {
      setVisibleStep((s) => Math.max(s - 1, 1))
    }
  }

  const updateVG = (d: PersonData) => setFormData((f) => ({ ...f, vollmachtgeber: d }))
  const updateBV = (d: PersonData) => setFormData((f) => ({ ...f, bevollmaechtigter: d }))
  const updateEB = (d: PersonData) => setFormData((f) => ({ ...f, ersatzbevollmaechtigter: d }))

  const toggleBereich = (k: keyof FormData['bereiche']) => {
    setFormData((f) => ({
      ...f,
      bereiche: { ...f.bereiche, [k]: !f.bereiche[k] },
    }))
  }

  const toggleGesundheit = (k: keyof FormData['gesundheitsDetails']) => {
    setFormData((f) => ({
      ...f,
      gesundheitsDetails: { ...f.gesundheitsDetails, [k]: !f.gesundheitsDetails[k] },
    }))
  }

  const setGeltung = (v: 'sofort' | 'vorsorgefall') => {
    setFormData((f) => ({ ...f, geltung: v }))
  }

  const selectedBereiche = Object.entries({
    gesundheitssorge: 'Gesundheitssorge',
    aufenthaltsbestimmung: 'Aufenthaltsbestimmung',
    vermögenssorge: 'Vermögenssorge',
    bankgeschaefte: 'Bankgeschäfte',
    wohnungsangelegenheiten: 'Wohnungsangelegenheiten',
    behoerdenangelegenheiten: 'Behördenangelegenheiten',
  } as const)
    .filter(([k]) => formData.bereiche[k as keyof FormData['bereiche']])
    .map(([, v]) => v)

  return (
    <div className="bg-pm-paper min-h-screen">
      <div className="max-w-article mx-auto px-5 py-10 md:py-16">

        {/* Header */}
        <div className="mb-8">
          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/tools" className="hover:text-pm-taupe transition-colors">Tools & Rechner</a>
            <span>›</span>
            <span className="text-pm-ink">Vorsorgevollmacht-Generator</span>
          </nav>
          <p className="text-[11px] font-bold uppercase tracking-wider text-pm-taupe mb-2">
            Kostenlos · Kein Konto nötig
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Vorsorgevollmacht-Generator
          </h1>
          <p className="text-[15px] text-pm-body leading-relaxed mb-3">
            Erstellen Sie in 5 Minuten eine individuelle Vorsorgevollmacht — kostenlos, verständlich erklärt, sofort druckfertig.
          </p>
          <p className="text-[15px] text-pm-body leading-relaxed">
            Mit dieser Vollmacht legen Sie selbst fest, wer für Sie entscheidet, wenn Sie es nicht mehr können: nach einem Unfall,
            bei schwerer Krankheit oder im Alter. Für Gesundheit, Aufenthalt, Finanzen und mehr.
          </p>
          <p className="mt-3 text-[15px] text-pm-body leading-relaxed">
            <strong className="text-pm-ink">Hinweis:</strong> Es besteht die Gefahr, dass das Betreuungsgericht einen rechtlichen Betreuer für Sie
            bestellt, wenn Sie Ihre Angelegenheiten nicht mehr selbst regeln können und keine ausreichende Vorsorgevollmacht vorliegt, mit folgenden
            Konsequenzen für die Familie: Ehepartner und Kinder dürfen nicht automatisch für Sie entscheiden. Ehepartner haben nur unter engen
            Voraussetzungen ein Notvertretungsrecht in Gesundheitsfragen, höchstens für sechs Monate (§ 1358 BGB). Wer Betreuer wird, entscheidet
            das Gericht. Es berücksichtigt Ihre Wünsche und Ihre Familie und bestellt einen Berufsbetreuer, wenn niemand Geeignetes das Amt
            ehrenamtlich übernehmen kann (§ 1816 BGB).
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white border border-pm-line rounded-2xl p-6 md:p-8 shadow-sm">

          <StepIndicator
            currentStep={getIndicatorStep()}
            totalSteps={totalSteps}
            stepLabels={stepLabels}
          />

          {/* ── Step 1: Vollmachtgeber ── */}
          {visibleStep === 1 && (
            <div>
              <h2 className="text-[18px] font-bold text-pm-ink mb-1">Vollmachtgeber</h2>
              <p className="text-[14px] text-pm-body mb-6">
                Ihre persönlichen Daten — die Person, die die Vollmacht erteilt.
              </p>
              <PersonForm
                data={formData.vollmachtgeber}
                onChange={updateVG}
                showBirth
              />
            </div>
          )}

          {/* ── Step 2: Bevollmächtigte Person ── */}
          {visibleStep === 2 && (
            <div>
              <h2 className="text-[18px] font-bold text-pm-ink mb-1">Bevollmächtigte Person</h2>
              <p className="text-[14px] text-pm-body mb-6">
                Wen möchten Sie bevollmächtigen? Diese Person entscheidet für Sie, wenn Sie es selbst nicht können.
              </p>
              <PersonForm
                data={formData.bevollmaechtigter}
                onChange={updateBV}
                showBeziehung
              />

              {/* Ersatzbevollmächtigte toggle */}
              <div className="mt-6 pt-5 border-t border-pm-line-soft">
                <button
                  type="button"
                  onClick={() => setFormData((f) => ({ ...f, hasErsatz: !f.hasErsatz }))}
                  className="flex items-center gap-3 w-full text-left group"
                >
                  <div
                    className={`w-10 h-6 rounded-full transition-colors flex-shrink-0 relative ${
                      formData.hasErsatz ? 'bg-pm-taupe' : 'bg-pm-line'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        formData.hasErsatz ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </div>
                  <span className="text-[14px] font-semibold text-pm-ink leading-snug">
                    Ersatzbevollmächtigte Person hinzufügen
                    <span className="block text-[12px] font-normal text-pm-mute">
                      Falls die erste Person nicht verfügbar ist
                    </span>
                  </span>
                </button>

                {formData.hasErsatz && (
                  <div className="mt-5 pt-5 border-t border-pm-line-soft">
                    <p className="text-[13px] font-semibold text-pm-ink mb-4">Ersatzbevollmächtigte/r</p>
                    <PersonForm
                      data={formData.ersatzbevollmaechtigter}
                      onChange={updateEB}
                      showBeziehung
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Step 3: Umfang ── */}
          {visibleStep === 3 && (
            <div>
              <h2 className="text-[18px] font-bold text-pm-ink mb-1">Umfang der Vollmacht</h2>
              <p className="text-[14px] text-pm-body mb-6">
                Für welche Bereiche soll die Vollmacht gelten?
              </p>
              <div className="flex flex-col gap-2.5 mb-6">
                <BereichCard
                  label="Gesundheitssorge"
                  description="Alle medizinischen Entscheidungen, Einwilligungen, Krankenhausaufenthalte"
                  selected={formData.bereiche.gesundheitssorge}
                  onToggle={() => toggleBereich('gesundheitssorge')}
                />
                <BereichCard
                  label="Aufenthaltsbestimmung"
                  description="Wohnort, Pflegeheim, geschlossene Unterbringung (nur mit Genehmigung des Gerichts)"
                  selected={formData.bereiche.aufenthaltsbestimmung}
                  onToggle={() => toggleBereich('aufenthaltsbestimmung')}
                />
                <BereichCard
                  label="Vermögenssorge"
                  description="Verwaltung von Eigentum und Vermögen"
                  selected={formData.bereiche.vermögenssorge}
                  onToggle={() => toggleBereich('vermögenssorge')}
                />
                <BereichCard
                  label="Bankgeschäfte"
                  description="Konten, Überweisungen, Bankverträge. Banken verlangen oft zusätzlich ihre eigene Kontovollmacht."
                  selected={formData.bereiche.bankgeschaefte}
                  onToggle={() => toggleBereich('bankgeschaefte')}
                />
                <BereichCard
                  label="Wohnungsangelegenheiten"
                  description="Mietverträge, Kündigung der Wohnung"
                  selected={formData.bereiche.wohnungsangelegenheiten}
                  onToggle={() => toggleBereich('wohnungsangelegenheiten')}
                />
                <BereichCard
                  label="Behördenangelegenheiten"
                  description="Ämter, Behörden, Versicherungen, Post"
                  selected={formData.bereiche.behoerdenangelegenheiten}
                  onToggle={() => toggleBereich('behoerdenangelegenheiten')}
                />
              </div>

              <div className="border-t border-pm-line-soft pt-5">
                <p className="text-[13px] font-semibold text-pm-ink mb-3">Wann gilt die Vollmacht?</p>
                <div className="flex flex-col gap-2.5">
                  {(
                    [
                      {
                        value: 'sofort' as const,
                        label: 'Sofort (empfohlen)',
                        desc: 'Gilt ab der Unterschrift, auch solange Sie selbst noch entscheiden können. Die Vertrauensperson muss nicht nachweisen, dass der Vorsorgefall eingetreten ist. Wann sie die Vollmacht nutzen soll, sprechen Sie mit ihr ab.',
                      },
                      {
                        value: 'vorsorgefall' as const,
                        label: 'Erst im Vorsorgefall',
                        desc: 'Tritt erst in Kraft, wenn Sie nicht mehr selbst entscheiden können. Erfordert ärztlichen Nachweis.',
                      },
                    ] as const
                  ).map(({ value, label, desc }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setGeltung(value)}
                      className={`w-full text-left px-4 py-4 rounded-xl border-2 transition-all flex items-start gap-3 ${
                        formData.geltung === value
                          ? 'border-pm-taupe bg-[#FAF7F2]'
                          : 'border-pm-line bg-white hover:border-[#C8B89A]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 border-2 flex items-center justify-center transition-all ${
                          formData.geltung === value ? 'border-pm-taupe' : 'border-[#C8B89A]'
                        }`}
                      >
                        {formData.geltung === value && (
                          <div className="w-2.5 h-2.5 bg-pm-taupe rounded-full" />
                        )}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-pm-ink">{label}</p>
                        <p className="text-[12px] text-pm-body mt-0.5 leading-snug">{desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                {formData.geltung === 'vorsorgefall' && (
                  <p className="mt-3 bg-[#FFF8EE] border border-[#F0D9A0] rounded-xl px-4 py-3 text-[13px] text-pm-body leading-relaxed">
                    <strong className="text-pm-ink">Hinweis:</strong> Es besteht die Gefahr, dass Banken, Behörden oder das Grundbuchamt die Vollmacht
                    zunächst nicht anerkennen, wenn sie erst im Vorsorgefall gelten soll, mit folgenden Konsequenzen für die Familie: Die Vertrauensperson
                    muss erst ein ärztliches Attest besorgen, bevor sie handeln kann. Dem Grundbuchamt genügt ein Attest nicht; für Grundstücke kann trotz
                    Vollmacht ein Betreuer nötig werden. Das Bundesministerium der Justiz rät deshalb von Bedingungen in der Vollmacht ab.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ── Step 4: Gesundheitssorge (conditional) ── */}
          {visibleStep === 4 && hasGesundheitssorge && (
            <div>
              <h2 className="text-[18px] font-bold text-pm-ink mb-1">Gesundheitssorge — Details</h2>
              <p className="text-[14px] text-pm-body mb-6">
                Für den Bereich Gesundheitssorge können Sie weitere Entscheidungen festlegen. Entscheidungen, bei denen die Gefahr des Todes
                oder eines schweren, länger dauernden Gesundheitsschadens besteht, darf die Vertrauensperson nur treffen, wenn die Vollmacht sie
                ausdrücklich nennt (§ 1820 Abs. 2 BGB). Was Sie hier ankreuzen, steht ausdrücklich im Dokument.
              </p>
              <div className="flex flex-col gap-2.5 mb-5">
                <CheckboxItem
                  label="Einwilligung in Untersuchungen, Behandlungen und Operationen, auch wenn sie lebensgefährlich sind"
                  checked={formData.gesundheitsDetails.medizinischeBehandlungen}
                  onChange={() => toggleGesundheit('medizinischeBehandlungen')}
                />
                <CheckboxItem
                  label="Ablehnung und Abbruch lebenserhaltender Maßnahmen, wenn die Behandlung ärztlich aussichtslos ist"
                  checked={formData.gesundheitsDetails.ablehnenLebenserhaltend}
                  onChange={() => toggleGesundheit('ablehnenLebenserhaltend')}
                />
                <CheckboxItem
                  label="Entscheidung über Intensivmedizin, Wiederbelebung und künstliche Ernährung, auch über ihre Ablehnung oder ihren Abbruch"
                  checked={formData.gesundheitsDetails.intensivmedizin}
                  onChange={() => toggleGesundheit('intensivmedizin')}
                />
                <CheckboxItem
                  label="Veranlassung von Krankentransporten"
                  checked={formData.gesundheitsDetails.krankentransporte}
                  onChange={() => toggleGesundheit('krankentransporte')}
                />
                <CheckboxItem
                  label="Zugang zu Patientenakten und Entbindung von der Schweigepflicht"
                  checked={formData.gesundheitsDetails.patientenakten}
                  onChange={() => toggleGesundheit('patientenakten')}
                />
              </div>

              {/* Tip box */}
              <div className="bg-[#FFF8EE] border border-[#F0D9A0] rounded-xl px-4 py-3.5 flex gap-3">
                <span className="text-[18px] flex-shrink-0">💡</span>
                <p className="text-[13px] text-pm-body leading-relaxed">
                  <strong className="text-pm-ink">Tipp:</strong> Ergänzen Sie die Vollmacht um eine{' '}
                  <a href="/patientenverfuegung-aufsetzen" className="text-pm-taupe hover:underline font-medium">
                    Patientenverfügung
                  </a>
                  , um Ihre konkreten Behandlungswünsche festzuhalten. Die Vollmacht regelt, <em>wer</em> entscheidet — die Patientenverfügung regelt, <em>was</em> entschieden wird.
                </p>
              </div>
            </div>
          )}

          {/* ── Step 5: Vorschau ── */}
          {visibleStep === 5 && (
            <div>
              <h2 className="text-[18px] font-bold text-pm-ink mb-1">Vorschau & Download</h2>
              <p className="text-[14px] text-pm-body mb-6">
                Prüfen Sie Ihre Angaben. Anschließend können Sie die Vollmacht drucken oder als PDF speichern.
              </p>

              {/* Summary card */}
              <div className="bg-pm-paper border border-pm-line rounded-xl p-5 mb-5">
                <div className="flex flex-col gap-4">

                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-bold text-pm-taupe mb-1">Vollmachtgeber</p>
                    <p className="text-[14px] font-semibold text-pm-ink">
                      {formData.vollmachtgeber.vorname || '–'} {formData.vollmachtgeber.nachname}
                    </p>
                    <p className="text-[13px] text-pm-body">
                      {formData.vollmachtgeber.strasse} {formData.vollmachtgeber.hausnummer}
                      {formData.vollmachtgeber.ort && `, ${formData.vollmachtgeber.plz} ${formData.vollmachtgeber.ort}`}
                    </p>
                    {formData.vollmachtgeber.geburtsdatum && (
                      <p className="text-[13px] text-pm-body">
                        Geb.: {formData.vollmachtgeber.geburtsdatum}
                        {formData.vollmachtgeber.geburtsort && ` · ${formData.vollmachtgeber.geburtsort}`}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-pm-line pt-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-pm-taupe mb-1">Bevollmächtigte/r</p>
                    <p className="text-[14px] font-semibold text-pm-ink">
                      {formData.bevollmaechtigter.vorname || '–'} {formData.bevollmaechtigter.nachname}
                    </p>
                    <p className="text-[13px] text-pm-body">
                      {formData.bevollmaechtigter.strasse} {formData.bevollmaechtigter.hausnummer}
                      {formData.bevollmaechtigter.ort && `, ${formData.bevollmaechtigter.plz} ${formData.bevollmaechtigter.ort}`}
                    </p>
                    {formData.bevollmaechtigter.beziehung && (
                      <p className="text-[13px] text-pm-body">{formData.bevollmaechtigter.beziehung}</p>
                    )}
                    {formData.hasErsatz && formData.ersatzbevollmaechtigter.vorname && (
                      <p className="text-[12px] text-pm-mute mt-1">
                        + Ersatz: {formData.ersatzbevollmaechtigter.vorname} {formData.ersatzbevollmaechtigter.nachname}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-pm-line pt-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-pm-taupe mb-2">Bevollmächtigte Bereiche</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedBereiche.length > 0 ? (
                        selectedBereiche.map((b) => (
                          <span
                            key={b}
                            className="inline-block bg-pm-taupe text-white text-[11px] font-semibold px-2.5 py-1 rounded-full"
                          >
                            {b}
                          </span>
                        ))
                      ) : (
                        <span className="text-[13px] text-pm-mute">Keine Bereiche ausgewählt</span>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-pm-line pt-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-pm-taupe mb-1">Geltung</p>
                    <p className="text-[14px] text-pm-ink">
                      {formData.geltung === 'sofort'
                        ? '✓ Sofort gültig (ab Unterzeichnung)'
                        : '✓ Im Vorsorgefall (bei Handlungsunfähigkeit)'}
                    </p>
                  </div>

                </div>
              </div>

              {/* Primary CTA (ohne Bereich entstünde eine leere Vollmacht) */}
              {selectedBereiche.length === 0 && (
                <p className="text-[13px] text-pm-body mb-3">Wählen Sie unter „Umfang“ mindestens einen Bereich, dann können Sie die Vollmacht drucken.</p>
              )}
              <button
                type="button"
                disabled={selectedBereiche.length === 0}
                onClick={() => generateAndPrint(formData)}
                className="w-full bg-pm-taupe hover:bg-pm-taupe-deep text-white font-bold text-[16px] py-4 rounded-xl transition-colors mb-4 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                Vorsorgevollmacht drucken / als PDF speichern
              </button>

              {/* Disclaimer */}
              <div className="bg-[#FFF8EE] border border-[#F0D9A0] rounded-xl px-4 py-3.5 mb-4">
                <p className="text-[12px] text-pm-body leading-relaxed">
                  <strong className="text-pm-ink">Hinweis:</strong> Diese Vollmacht ist eine Vorlage und ersetzt keine Rechtsberatung. Für Grundstücke
                  muss Ihre Unterschrift unter der Vollmacht öffentlich beglaubigt sein, durch einen Notar oder die Betreuungsbehörde (§ 29 GBO).
                  Einen Verbraucherkredit kann die Vertrauensperson mit dieser Vollmacht nur aufnehmen, wenn sie notariell beurkundet ist (§ 492 Abs. 4 BGB). Banken verlangen oft
                  zusätzlich ihre eigene Kontovollmacht. Bei größerem Vermögen, Immobilien oder einem eigenen Unternehmen lassen Sie sich beraten.
                </p>
              </div>

              {/* Secondary CTA */}
              <a
                href="https://www.vorsorgeregister.de"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#C8B89A] text-pm-taupe font-semibold text-[14px] py-3 rounded-xl hover:bg-[#FAF7F2] transition-colors"
              >
                Bundesnotarkammer — Vollmacht registrieren lassen ↗
              </a>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-pm-line-soft">
            <button
              type="button"
              onClick={goBack}
              className={`px-5 py-2.5 rounded-xl border border-[#C8B89A] text-pm-taupe font-semibold text-[14px] hover:bg-[#FAF7F2] transition-colors ${
                visibleStep === 1 ? 'invisible' : ''
              }`}
            >
              ← Zurück
            </button>

            {visibleStep < 5 ? (
              <button
                type="button"
                onClick={goNext}
                className="bg-pm-taupe hover:bg-pm-taupe-deep text-white font-bold text-[14px] px-6 py-2.5 rounded-xl transition-colors"
              >
                Weiter →
              </button>
            ) : (
              <button
                type="button"
                disabled={selectedBereiche.length === 0}
                onClick={() => generateAndPrint(formData)}
                className="bg-pm-taupe hover:bg-pm-taupe-deep text-white font-bold text-[14px] px-6 py-2.5 rounded-xl transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                Jetzt erstellen →
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
