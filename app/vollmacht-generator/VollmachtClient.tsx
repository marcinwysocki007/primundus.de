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
  if (data.bereiche.behoerdenangelegenheiten) bereicheList.push('Behördenangelegenheiten')

  const gesundheitsSection = data.bereiche.gesundheitssorge ? `
    <div class="section">
      <h2>III.1 Gesundheitssorge — Einzelbefugnisse</h2>
      <p>Im Bereich der Gesundheitssorge umfasst die Vollmacht insbesondere folgende Befugnisse:</p>
      <ul>
        ${data.gesundheitsDetails.medizinischeBehandlungen ? '<li>Einwilligung in medizinische Behandlungen, Untersuchungen, Operationen und sonstige ärztliche Maßnahmen sowie deren Ablehnung oder Widerruf</li>' : ''}
        ${data.gesundheitsDetails.ablehnenLebenserhaltend ? '<li>Ablehnung und Abbruch lebenserhaltender Maßnahmen, wenn nach ärztlichem Urteil die Behandlung medizinisch aussichtslos ist und nur dazu dient, den Sterbeprozess zu verlängern</li>' : ''}
        ${data.gesundheitsDetails.intensivmedizin ? '<li>Entscheidung über Maßnahmen der Intensivmedizin, künstliche Beatmung, Reanimation, parenterale Ernährung und künstliche Flüssigkeitszufuhr</li>' : ''}
        ${data.gesundheitsDetails.krankentransporte ? '<li>Veranlassung und Organisation von Krankentransporten, Notfalltransporten und Begleitfahrten</li>' : ''}
        ${data.gesundheitsDetails.patientenakten ? '<li>Einsicht in sämtliche Patientenakten, Krankenunterlagen und Behandlungsdokumentationen sowie Entbindung aller behandelnden Ärzte, Therapeuten und medizinischer Einrichtungen von ihrer Schweigepflicht gegenüber dem Bevollmächtigten</li>' : ''}
      </ul>
    </div>
  ` : ''

  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Vorsorgevollmacht — ${vg.vorname} ${vg.nachname}</title>
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
    <div class="person-name">${vg.vorname} ${vg.nachname}</div>
    <div class="person-detail">${vg.strasse} ${vg.hausnummer}, ${vg.plz} ${vg.ort}</div>
    ${vg.geburtsdatum ? `<div class="person-detail">Geboren am: ${vg.geburtsdatum}${vg.geburtsort ? ` in ${vg.geburtsort}` : ''}</div>` : ''}
  </div>
</div>

<div class="section">
  <h2>II. Bevollmächtigte Person</h2>
  <p>Ich bevollmächtige folgende Person, in meinem Namen und für mein Wohl zu handeln:</p>
  <div class="person-block">
    <div class="person-name">${bv.vorname} ${bv.nachname}</div>
    <div class="person-detail">${bv.strasse} ${bv.hausnummer}, ${bv.plz} ${bv.ort}</div>
    ${bv.beziehung ? `<div class="person-detail">Beziehung: ${bv.beziehung}</div>` : ''}
  </div>
  ${data.hasErsatz && eb.vorname ? `
  <p style="margin-top: 1em;">Ersatzbevollmächtigte Person (für den Fall, dass die oben genannte Person nicht verfügbar oder nicht in der Lage ist, die Vollmacht wahrzunehmen):</p>
  <div class="person-block">
    <div class="person-name">${eb.vorname} ${eb.nachname}</div>
    <div class="person-detail">${eb.strasse} ${eb.hausnummer}, ${eb.plz} ${eb.ort}</div>
    ${eb.beziehung ? `<div class="person-detail">Beziehung: ${eb.beziehung}</div>` : ''}
  </div>
  ` : ''}
</div>

<div class="section">
  <h2>III. Umfang der Vollmacht</h2>
  <p>Die Vollmacht erstreckt sich auf folgende Bereiche:</p>
  <p style="margin: 0.8em 0;">
    ${bereicheList.map(b => `<span class="bereich-tag">${b}</span>`).join('')}
  </p>

  ${data.bereiche.gesundheitssorge ? `
  <p style="margin-top: 1em;"><strong>III.1 Gesundheitssorge</strong><br/>
  Der Bevollmächtigte ist berechtigt, alle Entscheidungen im Bereich der Gesundheitssorge zu treffen. Dazu gehört insbesondere die Einwilligung in oder Ablehnung von ärztlichen Untersuchungen und Behandlungen, die Entscheidung über Krankenhausaufenthalte sowie die Beauftragung von Ärzten, Therapeuten und Pflegediensten. Diese Befugnis gilt ausdrücklich auch für gefährliche medizinische Eingriffe und Maßnahmen, die mit erheblichem Risiko für Leben und Gesundheit verbunden sind.</p>
  ` : ''}

  ${data.bereiche.aufenthaltsbestimmung ? `
  <p style="margin-top: 1em;"><strong>III.2 Aufenthaltsbestimmung</strong><br/>
  Der Bevollmächtigte ist berechtigt, über den Aufenthaltsort zu entscheiden. Dies umfasst den gewöhnlichen Wohnsitz, die Aufnahme in ein Pflegeheim oder eine andere stationäre Einrichtung sowie die Entscheidung über eine freiheitsentziehende Unterbringung nach § 1906 BGB (die Genehmigung des Betreuungsgerichts bleibt vorbehalten).</p>
  ` : ''}

  ${data.bereiche.vermögenssorge ? `
  <p style="margin-top: 1em;"><strong>III.3 Vermögenssorge</strong><br/>
  Der Bevollmächtigte ist berechtigt, mein Vermögen zu verwalten, Verträge abzuschließen, Forderungen geltend zu machen und Verbindlichkeiten zu begleichen. Die Vermögensverwaltung umfasst sämtliches bewegliches und unbewegliches Vermögen. Für den Erwerb und die Veräußerung von Grundstücken und grundstücksgleichen Rechten ist die notarielle Beurkundung dieser Vollmacht erforderlich.</p>
  ` : ''}

  ${data.bereiche.bankgeschaefte ? `
  <p style="margin-top: 1em;"><strong>III.4 Bankgeschäfte</strong><br/>
  Der Bevollmächtigte ist berechtigt, alle Bankgeschäfte durchzuführen. Dies umfasst die Verfügung über Konten und Depots, die Erteilung und Widerrufung von Vollmachten bei Kreditinstituten, den Abschluss und die Kündigung von Bankverträgen sowie die Aufnahme von Krediten bis zu einem Betrag von 10.000 Euro je Einzelfall. Für Bankgeschäfte empfehlen wir die notarielle Beglaubigung dieser Vollmacht.</p>
  ` : ''}

  ${data.bereiche.wohnungsangelegenheiten ? `
  <p style="margin-top: 1em;"><strong>III.5 Wohnungsangelegenheiten</strong><br/>
  Der Bevollmächtigte ist berechtigt, alle Angelegenheiten rund um meine Wohnung zu regeln. Dies umfasst den Abschluss, die Änderung und Kündigung von Mietverträgen, die Entgegennahme und Abgabe von Willenserklärungen gegenüber Vermietern und Hausverwaltungen sowie die Entscheidung über Haushaltsauflösungen.</p>
  ` : ''}

  ${data.bereiche.behoerdenangelegenheiten ? `
  <p style="margin-top: 1em;"><strong>III.6 Behördenangelegenheiten</strong><br/>
  Der Bevollmächtigte ist berechtigt, mich gegenüber Behörden, Ämtern, Gerichten, Sozialversicherungsträgern und Versicherungen zu vertreten. Dies umfasst die Stellung von Anträgen, die Entgegennahme von Bescheiden, die Einlegung von Rechtsmitteln sowie die Entgegennahme und das Öffnen meiner Post.</p>
  ` : ''}
</div>

${gesundheitsSection}

<div class="section">
  <h2>IV. Geltung der Vollmacht</h2>
  <div class="geltung-box">
    ${data.geltung === 'sofort'
      ? `<strong>Sofortige Geltung (empfohlen):</strong> Diese Vollmacht gilt ab dem Datum der Unterzeichnung, unabhängig davon, ob ich selbst noch handlungsfähig bin. Damit soll sichergestellt werden, dass der Bevollmächtigte im Bedarfsfall unverzüglich handeln kann, ohne einen Nachweis über meine eingeschränkte Handlungsfähigkeit erbringen zu müssen.`
      : `<strong>Geltung im Vorsorgefall:</strong> Diese Vollmacht tritt erst in Kraft, wenn ich aufgrund von Krankheit, Unfall oder sonstiger Umstände nicht mehr in der Lage bin, meine Angelegenheiten selbst zu regeln. Der Bevollmächtigte hat in diesem Fall einen ärztlichen Nachweis über meine eingeschränkte Handlungsfähigkeit vorzulegen.`
    }
  </div>
</div>

<div class="section">
  <h2>V. Allgemeine Bestimmungen</h2>
  <p><strong>Widerruf:</strong> Diese Vollmacht kann vom Vollmachtgeber jederzeit ohne Angabe von Gründen widerrufen werden. Der Widerruf ist dem Bevollmächtigten gegenüber zu erklären. Mit dem Tod des Vollmachtgebers erlischt die Vollmacht, soweit sie nicht ausdrücklich über den Tod hinaus erteilt wurde.</p>
  <p style="margin-top: 0.8em;"><strong>Vertrauensgrundsatz:</strong> Der Bevollmächtigte ist verpflichtet, die Vollmacht ausschließlich im Interesse des Vollmachtgebers auszuüben und dabei dessen bekannte oder mutmaßliche Wünsche zu berücksichtigen.</p>
  <p style="margin-top: 0.8em;"><strong>Registrierung:</strong> Es wird empfohlen, diese Vollmacht beim Zentralen Vorsorgeregister der Bundesnotarkammer (www.vorsorgeregister.de) zu registrieren, damit sie im Bedarfsfall schnell auffindbar ist.</p>
  <p style="margin-top: 0.8em;"><strong>Untervollmacht:</strong> Der Bevollmächtigte ist berechtigt, für einzelne Angelegenheiten Untervollmachten zu erteilen, soweit dies zur ordnungsgemäßen Erledigung der übertragenen Aufgaben erforderlich ist.</p>
</div>

<div class="signature-section section">
  <h2>VI. Unterschriften</h2>

  <div class="signature-block">
    <p><strong>Vollmachtgeber/in:</strong></p>
    <div class="signature-line">
      Ort, Datum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift ${vg.vorname} ${vg.nachname}
    </div>
  </div>

  <div class="signature-block">
    <p><strong>Ich nehme diese Vollmacht an — Bevollmächtigte/r:</strong></p>
    <div class="signature-line">
      Ort, Datum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift ${bv.vorname} ${bv.nachname}
    </div>
  </div>

  ${data.hasErsatz && eb.vorname ? `
  <div class="signature-block">
    <p><strong>Ich nehme diese Vollmacht als Ersatzbevollmächtigte/r an:</strong></p>
    <div class="signature-line">
      Ort, Datum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unterschrift ${eb.vorname} ${eb.nachname}
    </div>
  </div>
  ` : ''}
</div>

<div class="disclaimer">
  <strong>Hinweis:</strong> Dieses Dokument wurde mit dem Vorsorgevollmacht-Generator von Primundus (primundus.de) erstellt und dient als rechtliche Vorlage. Für Immobilientransaktionen und Bankgeschäfte wird eine notarielle Beglaubigung empfohlen. Für komplexe Vermögensangelegenheiten oder besondere rechtliche Situationen sollten Sie einen Rechtsanwalt oder Notar hinzuziehen. Die Vollmacht sollte handschriftlich unterzeichnet und an einem sicheren Ort aufbewahrt werden. Eine Registrierung beim Zentralen Vorsorgeregister der Bundesnotarkammer (www.vorsorgeregister.de) wird empfohlen.
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
    <label className="block text-[13px] font-semibold text-[#3D3D3D] mb-1.5">
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
      className="w-full border border-[#E5E3DF] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#8B7355] bg-white text-[#3D3D3D] placeholder-[#BABABA] transition-colors"
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
      className="w-full border border-[#E5E3DF] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#8B7355] bg-white text-[#3D3D3D] transition-colors appearance-none"
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
      <p className="text-[12px] text-[#8B8B8B] mb-3 text-center">
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
                      ? 'bg-[#8B7355] text-white'
                      : isCurrent
                      ? 'bg-[#8B7355] text-white ring-4 ring-[#8B7355]/20'
                      : 'bg-[#E5E3DF] text-[#8B8B8B]'
                  }`}
                >
                  {isCompleted ? '✓' : stepNum}
                </div>
                <span className={`text-[10px] hidden sm:block max-w-[70px] text-center leading-tight ${isCurrent ? 'text-[#3D3D3D] font-semibold' : 'text-[#8B8B8B]'}`}>
                  {label}
                </span>
              </div>
              {idx < stepLabels.length - 1 && (
                <div className={`w-8 h-[2px] mb-4 rounded ${stepNum < currentStep ? 'bg-[#8B7355]' : 'bg-[#E5E3DF]'}`} />
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
          ? 'border-[#8B7355] bg-[#FAF7F2]'
          : 'border-[#E5E3DF] bg-white hover:border-[#C8B89A]'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-all ${
            selected ? 'bg-[#8B7355] border-[#8B7355]' : 'bg-white border-[#C8B89A]'
          }`}
        >
          {selected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#3D3D3D]">{label}</p>
          <p className="text-[12px] text-[#5A5A5A] mt-0.5 leading-snug">{description}</p>
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
        checked ? 'border-[#8B7355] bg-[#FAF7F2]' : 'border-[#E5E3DF] bg-white hover:border-[#C8B89A]'
      }`}
    >
      <div
        className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-all ${
          checked ? 'bg-[#8B7355] border-[#8B7355]' : 'bg-white border-[#C8B89A]'
        }`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="text-[14px] text-[#3D3D3D] leading-snug">{label}</span>
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
    <div className="bg-[#F8F7F5] min-h-screen">
      <div className="max-w-[720px] mx-auto px-5 py-10">

        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">Vorsorgevollmacht-Generator</span>
          </nav>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B7355] mb-2">
            Kostenlos · Kein Konto nötig
          </p>
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#3D3D3D] leading-tight mb-3">
            Vorsorgevollmacht-Generator
          </h1>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-3">
            Erstellen Sie in 5 Minuten eine individuelle Vorsorgevollmacht — kostenlos, verständlich erklärt, sofort druckfertig.
          </p>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed">
            Ohne Vorsorgevollmacht bestellt das Gericht einen gesetzlichen Betreuer — auch einen Fremden.
            Mit dieser Vollmacht legen Sie selbst fest, wer für Sie entscheidet, wenn Sie es nicht mehr können:
            bei Krankheit, Unfall oder im Alter. Für Gesundheit, Aufenthalt, Finanzen und mehr.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 md:p-8 shadow-sm">

          <StepIndicator
            currentStep={getIndicatorStep()}
            totalSteps={totalSteps}
            stepLabels={stepLabels}
          />

          {/* ── Step 1: Vollmachtgeber ── */}
          {visibleStep === 1 && (
            <div>
              <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-1">Vollmachtgeber</h2>
              <p className="text-[14px] text-[#5A5A5A] mb-6">
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
              <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-1">Bevollmächtigte Person</h2>
              <p className="text-[14px] text-[#5A5A5A] mb-6">
                Wen möchten Sie bevollmächtigen? Diese Person entscheidet für Sie, wenn Sie es selbst nicht können.
              </p>
              <PersonForm
                data={formData.bevollmaechtigter}
                onChange={updateBV}
                showBeziehung
              />

              {/* Ersatzbevollmächtigte toggle */}
              <div className="mt-6 pt-5 border-t border-[#F0EDE8]">
                <button
                  type="button"
                  onClick={() => setFormData((f) => ({ ...f, hasErsatz: !f.hasErsatz }))}
                  className="flex items-center gap-3 w-full text-left group"
                >
                  <div
                    className={`w-10 h-6 rounded-full transition-colors flex-shrink-0 relative ${
                      formData.hasErsatz ? 'bg-[#8B7355]' : 'bg-[#E5E3DF]'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        formData.hasErsatz ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </div>
                  <span className="text-[14px] font-semibold text-[#3D3D3D] leading-snug">
                    Ersatzbevollmächtigte Person hinzufügen
                    <span className="block text-[12px] font-normal text-[#8B8B8B]">
                      Falls die erste Person nicht verfügbar ist
                    </span>
                  </span>
                </button>

                {formData.hasErsatz && (
                  <div className="mt-5 pt-5 border-t border-[#F0EDE8]">
                    <p className="text-[13px] font-semibold text-[#3D3D3D] mb-4">Ersatzbevollmächtigte/r</p>
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
              <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-1">Umfang der Vollmacht</h2>
              <p className="text-[14px] text-[#5A5A5A] mb-6">
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
                  description="Wohnort, Pflegeheim, Unterbringung"
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
                  description="Konten, Überweisungen, Verträge (empfiehlt notarielle Beglaubigung)"
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

              <div className="border-t border-[#F0EDE8] pt-5">
                <p className="text-[13px] font-semibold text-[#3D3D3D] mb-3">Wann gilt die Vollmacht?</p>
                <div className="flex flex-col gap-2.5">
                  {(
                    [
                      {
                        value: 'sofort' as const,
                        label: 'Sofort (empfohlen)',
                        desc: 'Gilt ab Unterzeichnung — auch wenn Sie noch handlungsfähig sind. Einfachste Lösung, kein Nachweis nötig.',
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
                          ? 'border-[#8B7355] bg-[#FAF7F2]'
                          : 'border-[#E5E3DF] bg-white hover:border-[#C8B89A]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 border-2 flex items-center justify-center transition-all ${
                          formData.geltung === value ? 'border-[#8B7355]' : 'border-[#C8B89A]'
                        }`}
                      >
                        {formData.geltung === value && (
                          <div className="w-2.5 h-2.5 bg-[#8B7355] rounded-full" />
                        )}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3D3D3D]">{label}</p>
                        <p className="text-[12px] text-[#5A5A5A] mt-0.5 leading-snug">{desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Step 4: Gesundheitssorge (conditional) ── */}
          {visibleStep === 4 && hasGesundheitssorge && (
            <div>
              <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-1">Gesundheitssorge — Details</h2>
              <p className="text-[14px] text-[#5A5A5A] mb-6">
                Für den Bereich Gesundheitssorge können Sie weitere Entscheidungen festlegen.
              </p>
              <div className="flex flex-col gap-2.5 mb-5">
                <CheckboxItem
                  label="Einwilligung in medizinische Behandlungen und Operationen"
                  checked={formData.gesundheitsDetails.medizinischeBehandlungen}
                  onChange={() => toggleGesundheit('medizinischeBehandlungen')}
                />
                <CheckboxItem
                  label="Ablehnung und Abbruch lebenserhaltender Maßnahmen (wenn ärztlich aussichtslos)"
                  checked={formData.gesundheitsDetails.ablehnenLebenserhaltend}
                  onChange={() => toggleGesundheit('ablehnenLebenserhaltend')}
                />
                <CheckboxItem
                  label="Entscheidung über Intensivmedizin und künstliche Ernährung"
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
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                  <strong className="text-[#3D3D3D]">Tipp:</strong> Ergänzen Sie die Vollmacht um eine{' '}
                  <a href="/patientenverfuegung-aufsetzen/" className="text-[#8B7355] hover:underline font-medium">
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
              <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-1">Vorschau & Download</h2>
              <p className="text-[14px] text-[#5A5A5A] mb-6">
                Prüfen Sie Ihre Angaben. Anschließend können Sie die Vollmacht drucken oder als PDF speichern.
              </p>

              {/* Summary card */}
              <div className="bg-[#F8F7F5] border border-[#E5E3DF] rounded-xl p-5 mb-5">
                <div className="flex flex-col gap-4">

                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#8B7355] mb-1">Vollmachtgeber</p>
                    <p className="text-[14px] font-semibold text-[#3D3D3D]">
                      {formData.vollmachtgeber.vorname || '–'} {formData.vollmachtgeber.nachname}
                    </p>
                    <p className="text-[13px] text-[#5A5A5A]">
                      {formData.vollmachtgeber.strasse} {formData.vollmachtgeber.hausnummer}
                      {formData.vollmachtgeber.ort && `, ${formData.vollmachtgeber.plz} ${formData.vollmachtgeber.ort}`}
                    </p>
                    {formData.vollmachtgeber.geburtsdatum && (
                      <p className="text-[13px] text-[#5A5A5A]">
                        Geb.: {formData.vollmachtgeber.geburtsdatum}
                        {formData.vollmachtgeber.geburtsort && ` · ${formData.vollmachtgeber.geburtsort}`}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-[#E5E3DF] pt-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#8B7355] mb-1">Bevollmächtigte/r</p>
                    <p className="text-[14px] font-semibold text-[#3D3D3D]">
                      {formData.bevollmaechtigter.vorname || '–'} {formData.bevollmaechtigter.nachname}
                    </p>
                    <p className="text-[13px] text-[#5A5A5A]">
                      {formData.bevollmaechtigter.strasse} {formData.bevollmaechtigter.hausnummer}
                      {formData.bevollmaechtigter.ort && `, ${formData.bevollmaechtigter.plz} ${formData.bevollmaechtigter.ort}`}
                    </p>
                    {formData.bevollmaechtigter.beziehung && (
                      <p className="text-[13px] text-[#5A5A5A]">{formData.bevollmaechtigter.beziehung}</p>
                    )}
                    {formData.hasErsatz && formData.ersatzbevollmaechtigter.vorname && (
                      <p className="text-[12px] text-[#8B8B8B] mt-1">
                        + Ersatz: {formData.ersatzbevollmaechtigter.vorname} {formData.ersatzbevollmaechtigter.nachname}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-[#E5E3DF] pt-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#8B7355] mb-2">Bevollmächtigte Bereiche</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedBereiche.length > 0 ? (
                        selectedBereiche.map((b) => (
                          <span
                            key={b}
                            className="inline-block bg-[#8B7355] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full"
                          >
                            {b}
                          </span>
                        ))
                      ) : (
                        <span className="text-[13px] text-[#8B8B8B]">Keine Bereiche ausgewählt</span>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-[#E5E3DF] pt-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#8B7355] mb-1">Geltung</p>
                    <p className="text-[14px] text-[#3D3D3D]">
                      {formData.geltung === 'sofort'
                        ? '✓ Sofort gültig (ab Unterzeichnung)'
                        : '✓ Im Vorsorgefall (bei Handlungsunfähigkeit)'}
                    </p>
                  </div>

                </div>
              </div>

              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => generateAndPrint(formData)}
                className="w-full bg-[#8B7355] hover:bg-[#7A6347] text-white font-bold text-[16px] py-4 rounded-xl transition-colors mb-4 flex items-center justify-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                Vorsorgevollmacht drucken / als PDF speichern
              </button>

              {/* Disclaimer */}
              <div className="bg-[#FFF8EE] border border-[#F0D9A0] rounded-xl px-4 py-3.5 mb-4">
                <p className="text-[12px] text-[#5A5A5A] leading-relaxed">
                  <strong className="text-[#3D3D3D]">Hinweis:</strong> Diese Vollmacht dient als Vorlage und ersetzt keine Rechtsberatung.
                  Für Immobilien und Bankgeschäfte empfehlen wir notarielle Beglaubigung.
                  Für komplexe Situationen sollten Sie einen Rechtsanwalt hinzuziehen.
                </p>
              </div>

              {/* Secondary CTA */}
              <a
                href="https://www.vorsorgeregister.de"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#C8B89A] text-[#8B7355] font-semibold text-[14px] py-3 rounded-xl hover:bg-[#FAF7F2] transition-colors"
              >
                Bundesnotarkammer — Vollmacht registrieren lassen ↗
              </a>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F0EDE8]">
            <button
              type="button"
              onClick={goBack}
              className={`px-5 py-2.5 rounded-xl border border-[#C8B89A] text-[#8B7355] font-semibold text-[14px] hover:bg-[#FAF7F2] transition-colors ${
                visibleStep === 1 ? 'invisible' : ''
              }`}
            >
              ← Zurück
            </button>

            {visibleStep < 5 ? (
              <button
                type="button"
                onClick={goNext}
                className="bg-[#8B7355] hover:bg-[#7A6347] text-white font-bold text-[14px] px-6 py-2.5 rounded-xl transition-colors"
              >
                Weiter →
              </button>
            ) : (
              <button
                type="button"
                onClick={() => generateAndPrint(formData)}
                className="bg-[#8B7355] hover:bg-[#7A6347] text-white font-bold text-[14px] px-6 py-2.5 rounded-xl transition-colors"
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
