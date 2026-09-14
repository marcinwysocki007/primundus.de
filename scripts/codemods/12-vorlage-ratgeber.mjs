#!/usr/bin/env node
// Codemod 12 — Ratgeber auf die neue Vorlage (Partnerseiten-Stil) umstellen.
//
// Martin am 14.09.2026: Musterseite /demenz-pflege-zuhause „übernehmen", danach die
// übrigen Ratgeber, Stichprobe vor dem Livegang. Dieses Skript verschiebt die Texte
// einer Seite unverändert in die Bausteine aus components/vorlage/Ratgeber.tsx —
// es tippt nichts neu, sondern schneidet die Quelltext-Stücke aus und setzt sie
// in die neuen Bausteine. Was es nicht sicher erkennt, übernimmt es unverändert und
// meldet es („ROH"). Danach prüft scripts/vorlage/wortlaut.mjs, dass kein Wort fehlt.
//
// Aufruf: node scripts/codemods/12-vorlage-ratgeber.mjs <slug> [<slug> …] [--trocken]
import ts from 'typescript'
import { readFileSync, writeFileSync } from 'node:fs'

const TROCKEN = process.argv.includes('--trocken')
const slugs = process.argv.slice(2).filter((a) => !a.startsWith('--'))

// Themen-Augenbraue je Seite („Ratgeber Demenz"). Fehlt ein Eintrag, meldet das Skript es.
const AUGENBRAUE = JSON.parse(readFileSync(new URL('./12-augenbrauen.json', import.meta.url), 'utf8'))

const norm = (t) => t.replace(/\s+/g, ' ').trim()

for (const slug of slugs) {
  const datei = `app/${slug}/page.tsx`
  const src = readFileSync(datei, 'utf8')
  const bericht = { roh: [], hinweise: [] }
  try {
    const neu = umbauen(slug, src, bericht)
    if (!TROCKEN) writeFileSync(datei, neu)
    const status = bericht.roh.length ? `ROH ${bericht.roh.length}` : 'ok'
    console.log(`${status.padEnd(7)} ${slug}${bericht.hinweise.length ? ' · ' + bericht.hinweise.join(' · ') : ''}`)
    for (const r of bericht.roh) console.log(`        ROH: ${r}`)
  } catch (e) {
    console.log(`FEHLER  ${slug}: ${e.message}`)
  }
}

function umbauen(slug, src, bericht) {
  const sf = ts.createSourceFile('page.tsx', src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const S = (n) => src.slice(n.getStart(sf), n.getEnd())

  // ── Hilfen ──────────────────────────────────────────────────────────────
  const istEl = (n) => ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n)
  const tag = (n) => (ts.isJsxElement(n) ? n.openingElement.tagName.getText(sf) : ts.isJsxSelfClosingElement(n) ? n.tagName.getText(sf) : '')
  const attrs = (n) => (ts.isJsxElement(n) ? n.openingElement.attributes : n.attributes).properties
  const attr = (n, name) => {
    if (!istEl(n)) return undefined
    const a = attrs(n).find((p) => ts.isJsxAttribute(p) && p.name.getText(sf) === name)
    if (!a || !a.initializer) return undefined
    if (ts.isStringLiteral(a.initializer)) return a.initializer.text
    return S(a.initializer)
  }
  const cls = (n) => attr(n, 'className') ?? ''
  const kinder = (n) =>
    ts.isJsxElement(n)
      ? n.children.filter((c) => !(ts.isJsxText(c) && !c.getText(sf).trim()) && !(ts.isJsxExpression(c) && (!c.expression || /^\{\s*\/\*[\s\S]*\*\/\s*\}$/.test(S(c)))))
      : []
  const innen = (n) => (ts.isJsxElement(n) ? src.slice(n.openingElement.getEnd(), n.closingElement.getStart(sf)) : '')
  const text = (n) => norm(S(n).replace(/<[^>]*>/g, ' ').replace(/\{' '\}/g, ' ').replace(/\{'([^']*)'\}/g, '$1'))
  const nurText = (n) => ts.isJsxElement(n) && n.children.every((c) => ts.isJsxText(c) || (ts.isJsxExpression(c) && /^\{' [·]? ?'\}$|^\{' '\}$/.test(S(c))))
  const alsString = (t) => (t.includes('"') ? `{${JSON.stringify(t)}}` : `"${t}"`)
  // Array-Map-Muster: {[ … ].map((item) => (…))}
  const mapAufArray = (expr) => {
    if (!expr || !ts.isJsxExpression(expr) || !expr.expression) return null
    const c = expr.expression
    if (!ts.isCallExpression(c) || !ts.isPropertyAccessExpression(c.expression) || c.expression.name.getText(sf) !== 'map') return null
    const arr = c.expression.expression
    if (!ts.isArrayLiteralExpression(arr)) return null
    const fn = c.arguments[0]
    if (!fn || !(ts.isArrowFunction(fn) || ts.isFunctionExpression(fn))) return null
    let body = fn.body
    while (body && ts.isParenthesizedExpression(body)) body = body.expression
    return { arr, fn, body, param: fn.parameters[0] ? S(fn.parameters[0].name) : '' }
  }
  const nachfahren = (n, pred, out = []) => {
    ts.forEachChild(n, (c) => {
      if (pred(c)) out.push(c)
      nachfahren(c, pred, out)
    })
    return out
  }
  // {item.x}-Zugriffe in einem Knoten, in Reihenfolge
  // (ohne key={…}/className={…}: nur Kinder-Ausdrücke zählen; doppelte nur einmal)
  const zugriffe = (n, param) => [
    ...new Set(
      nachfahren(
        n,
        (c) => ts.isJsxExpression(c) && !ts.isJsxAttribute(c.parent) && c.expression && ts.isPropertyAccessExpression(c.expression) && S(c.expression.expression) === param,
      ).map((c) => c.expression.name.getText(sf)),
    ),
  ]
  // Alle Felder, die sichtbar gerendert werden — auch verschachtelte wie {item.items.map(…)}.
  // Attribute (key, className) zählen nicht. Weicht das von zugriffe() ab, wird nicht umgebaut.
  const sichtbareFelder = (n, param) => {
    const namen = new Set()
    const gehe = (k, imAttribut) => {
      ts.forEachChild(k, (c) => {
        const attr = imAttribut || ts.isJsxAttribute(c)
        if (!attr && ts.isPropertyAccessExpression(c) && S(c.expression) === param) namen.add(c.name.getText(sf))
        gehe(c, attr)
      })
    }
    gehe(n, false)
    return [...namen]
  }
  const objekte = (arr) => arr.elements.filter(ts.isObjectLiteralExpression)
  const prop = (obj, name) => {
    const p = obj.properties.find((q) => ts.isPropertyAssignment(q) && q.name.getText(sf).replace(/['"]/g, '') === name)
    return p ? S(p.initializer) : undefined
  }

  // ── Seite finden ────────────────────────────────────────────────────────
  const huelle = nachfahren(sf, (n) => ts.isJsxElement(n) && tag(n) === 'div' && cls(n).includes('min-h-screen bg-pm-paper'))[0]
  if (!huelle) throw new Error('kein Seitenrahmen (min-h-screen bg-pm-paper)')
  const behaelter = kinder(huelle).find((k) => tag(k) === 'div' && cls(k).includes('max-w-article'))
  if (!behaelter) throw new Error('kein max-w-article-Behälter')
  const bloecke = kinder(behaelter)

  // ── Kopf ────────────────────────────────────────────────────────────────
  const kopf = { pfad: null, lesezeit: '', titel: null, aktualisiert: 'AKTUALISIERT.sichtbar', einleitung: null, blick: null }
  let i = 0
  for (; i < bloecke.length; i++) {
    const b = bloecke[i]
    const t = tag(b)
    if (t === 'nav' && !kopf.pfad) {
      const teile = kinder(b).filter(istEl).filter((k) => tag(k) === 'a' || (tag(k) === 'span' && text(k) !== '›'))
      kopf.pfad = teile.map((k) => (tag(k) === 'a' ? `{ label: ${JSON.stringify(text(k))}, href: ${JSON.stringify(attr(k, 'href'))} }` : `{ label: ${JSON.stringify(text(k))} }`))
    } else if (t === 'p' && !kopf.titel && (/text-meta|text-\[11px\]/.test(cls(b)) || /Min\b|Lesezeit|Aktualisiert/.test(text(b))) && text(b).length < 90) {
      const m = text(b).match(/(\d+)\s*Min/)
      kopf.lesezeit = m ? `${m[1]} Min.` : ''
    } else if (t === 'h1') {
      kopf.titel = nurText(b) ? alsString(text(b)) : `{<>${innen(b).trim()}</>}`
    } else if (t === 'AuthorByline') {
      kopf.aktualisiert = (attr(b, 'updated') ?? '{AKTUALISIERT.sichtbar}').replace(/^\{|\}$/g, '')
    } else if (t === 'p' && kopf.titel && !kopf.einleitung && /text-\[17px\]/.test(cls(b))) {
      kopf.einleitung = nurText(b) ? alsString(text(b)) : `{<>${innen(b).trim()}</>}`
    } else if (t === 'div' && text(b).startsWith('Auf einen Blick') && !kopf.blick) {
      const kopfP = nachfahren(b, (n) => ts.isJsxElement(n) && tag(n) === 'p')[0]
      if (kopfP && text(kopfP) !== 'Auf einen Blick') kopf.blickTitel = text(kopfP)
      const ul = nachfahren(b, (n) => ts.isJsxElement(n) && tag(n) === 'ul')[0]
      const m = ul && kinder(ul).map(mapAufArray).find(Boolean)
      if (m) kopf.blick = S(m.arr)
      else if (ul) kopf.blick = `[${kinder(ul).filter((k) => tag(k) === 'li').map((li) => JSON.stringify(text(li).replace(/^✓\s*/, ''))).join(', ')}]`
      else bericht.roh.push('Auf-einen-Blick-Kasten ohne Liste')
    } else break
  }
  if (!kopf.titel) throw new Error('keine H1 im Kopf')
  if (!kopf.einleitung) bericht.hinweise.push('ohne Einleitung')
  if (!kopf.lesezeit) bericht.hinweise.push('ohne Lesezeit')

  // ── Rumpf in Abschnitte gliedern ────────────────────────────────────────
  const abschnitte = []
  const erzeugteIds = []
  let aktuell = { id: null, titel: null, bloecke: [] }
  let weiterlesen = null
  for (; i < bloecke.length; i++) {
    const b = bloecke[i]
    const t = tag(b)
    if (t === 'h2') {
      if (aktuell.id || aktuell.bloecke.length) abschnitte.push(aktuell)
      let id = attr(b, 'id')
      if (!id) {
        id = text(b).toLowerCase().replace(/[äöüß]/g, (z) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' })[z]).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').split('-').slice(0, 4).join('-')
        erzeugteIds.push({ id, title: text(b) })
      }
      aktuell = { id, titel: nurText(b) ? alsString(text(b)) : `{<>${innen(b).trim()}</>}`, bloecke: [] }
    } else if (t === 'Weiterlesen') weiterlesen = attr(b, 'aktuell')
    else if (t === 'ArticleCTA') continue
    else aktuell.bloecke.push(b)
  }
  if (aktuell.id || aktuell.bloecke.length) abschnitte.push(aktuell)

  // ── Bausteine erkennen ──────────────────────────────────────────────────
  const benutzt = new Set(['RatgeberKopf', 'RatgeberRumpf'])
  const nutze = (k) => (benutzt.add(k), k)
  const E = '            ' // Einrückung der Bausteine im Abschnitt

  function linkzeile(b) {
    // → Label:{' '}<a href>…</a>{' · '}<a>…</a>
    const ks = ts.isJsxElement(b) ? b.children : []
    const erstes = ks.find((c) => !(ts.isJsxText(c) && !c.getText(sf).trim()))
    if (!erstes || !ts.isJsxText(erstes) || !erstes.getText(sf).trim().startsWith('→')) return null
    const label = norm(erstes.getText(sf)).replace(/^→\s*/, '')
    const links = []
    for (const c of ks) {
      if (c === erstes) continue
      if (ts.isJsxText(c) && !c.getText(sf).trim()) continue
      if (ts.isJsxExpression(c) && /^\{' ?·? ?'\}$/.test(S(c))) continue
      if (istEl(c) && tag(c) === 'a' && nurText(c)) links.push(`{ href: ${JSON.stringify(attr(c, 'href'))}, text: ${JSON.stringify(text(c))} }`)
      else return null
    }
    if (!links.length || !label.endsWith(':')) return null
    nutze('MehrDazu')
    return `${E}<MehrDazu\n${E}  label=${alsString(label)}\n${E}  links={[${links.join(', ')}]}\n${E}/>`
  }

  function absatz(b) {
    if (tag(b) !== 'p') return null
    const c = cls(b)
    if (/uppercase/.test(c)) return null
    if (/font-bold/.test(c) && !/leading-relaxed/.test(c)) {
      // fettgedruckter Einleiter über einer Liste („Die 5 wichtigsten Tipps …:")
      nutze('Zwischentitel')
      return `${E}<Zwischentitel>${innen(b).trim()}</Zwischentitel>`
    }
    nutze('Text')
    return `${E}<Text>\n${E}  ${innen(b).trim()}\n${E}</Text>`
  }

  // Karten-/Punkteliste: {[{title, desc}].map(item => <div><p>{item.title}</p><p>{item.desc}</p></div>)}
  function kartenListe(m) {
    const felder = zugriffe(m.body, m.param)
    const obj = objekte(m.arr)
    if (obj.length && (sichtbareFelder(m.body, m.param).length !== 2 || sichtbareFelder(m.body, m.param).some((f) => !felder.includes(f)))) return null
    if (obj.length && obj.length === m.arr.elements.length && felder.length === 2) {
      const [t, d] = felder
      const eintraege = obj.map((o) => `{ title: ${prop(o, t)}, desc: ${prop(o, d)} }`)
      if (eintraege.some((e) => e.includes('undefined'))) return null
      nutze('Punkte')
      return `${E}<Punkte\n${E}  punkte={[\n${eintraege.map((e) => `${E}    ${e},`).join('\n')}\n${E}  ]}\n${E}/>`
    }
    if (!obj.length && m.arr.elements.every((e) => ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e))) {
      const haken = /✓/.test(S(m.body))
      nutze(haken ? 'HakenListe' : 'Liste')
      return `${E}<${haken ? 'HakenListe' : 'Liste'} punkte={${S(m.arr)}} />`
    }
    return null
  }

  function schritte(m) {
    const obj = objekte(m.arr)
    if (!obj.length || obj.length !== m.arr.elements.length) return null
    const felder = zugriffe(m.body, m.param).filter((f) => !['n', 'tagColor', 'tag'].includes(f))
    const sicht = sichtbareFelder(m.body, m.param).filter((f) => !['n', 'tagColor', 'tag'].includes(f))
    if (sicht.length > 2 || felder.length > 2 || sicht.some((f) => !felder.includes(f))) return null
    const [t, d] = felder
    const ein = obj.map((o) => {
      const teile = [`title: ${prop(o, t)}`]
      if (d && prop(o, d)) teile.push(`desc: ${prop(o, d)}`)
      const tg = prop(o, 'tag')
      if (tg) {
        const farbe = prop(o, 'tagColor') ?? ''
        teile.push(`tag: ${tg}`)
        teile.push(`tagTon: '${/mint|green/.test(farbe) ? 'gruen' : /coral/.test(farbe) ? 'koralle' : 'neutral'}'`)
      }
      return `{ ${teile.join(', ')} }`
    })
    if (ein.some((e) => e.includes('undefined'))) return null
    nutze('Schritte')
    return `${E}<Schritte\n${E}  schritte={[\n${ein.map((e) => `${E}    ${e},`).join('\n')}\n${E}  ]}\n${E}/>`
  }

  function tabelle(b) {
    const table = nachfahren(b, (n) => ts.isJsxElement(n) && tag(n) === 'table')[0]
    if (!table) return null
    const kopfDiv = kinder(b).find((k) => tag(k) === 'div' && /bg-pm-paper border-b/.test(cls(k)))
    const titelP = kopfDiv && nachfahren(kopfDiv, (n) => ts.isJsxElement(n) && tag(n) === 'p')[0]
    const titel = titelP ? text(titelP) : ''
    const fussDiv = kinder(b).filter((k) => tag(k) === 'div').at(-1)
    const fussP = fussDiv && fussDiv !== kopfDiv && !nachfahren(fussDiv, (n) => ts.isJsxElement(n) && tag(n) === 'table').length ? nachfahren(fussDiv, (n) => ts.isJsxElement(n) && tag(n) === 'p')[0] : null
    const thead = nachfahren(table, (n) => ts.isJsxElement(n) && tag(n) === 'thead')[0]
    let kopfArr = null
    if (thead) {
      const m = nachfahren(thead, (n) => ts.isJsxExpression(n)).map(mapAufArray).find(Boolean)
      if (m) kopfArr = S(m.arr)
      else kopfArr = `[${nachfahren(thead, (n) => ts.isJsxElement(n) && tag(n) === 'th').map((th) => JSON.stringify(text(th))).join(', ')}]`
    }
    const tbody = nachfahren(table, (n) => ts.isJsxElement(n) && tag(n) === 'tbody')[0]
    if (!tbody) return null
    let zeilen = null
    let betont
    const m = kinder(tbody).map(mapAufArray).find(Boolean)
    if (m) {
      if (!m.arr.elements.every(ts.isArrayLiteralExpression)) return null
      zeilen = m.arr.elements.map((z) => `[${z.elements.map((e) => S(e)).join(', ')}]`)
      const tds = nachfahren(m.body, (n) => ts.isJsxElement(n) && tag(n) === 'td')
      if (m.arr.elements.some((z) => z.elements.length !== tds.length)) return null
      if (tds.some((td) => !nurText(td) && !/^\{\w+\}$/.test(innen(td).trim()))) return null
      const idx = tds.findIndex((td) => /text-pm-green/.test(cls(td)))
      if (idx > 0) betont = idx
    } else {
      const trs = kinder(tbody).filter((k) => tag(k) === 'tr')
      if (!trs.length) return null
      zeilen = trs.map((tr) => `[${kinder(tr).filter((k) => tag(k) === 'td').map((td) => (nurText(td) ? JSON.stringify(text(td)) : `<>${innen(td).trim()}</>`)).join(', ')}]`)
      const tds = kinder(trs[0]).filter((k) => tag(k) === 'td')
      const idx = tds.findIndex((td) => /text-pm-green/.test(cls(td)))
      if (idx > 0) betont = idx
    }
    nutze('Tabelle')
    const teile = [`titel=${alsString(titel)}`]
    if (kopfArr) teile.push(`kopf={${kopfArr}}`)
    teile.push(`zeilen={[\n${zeilen.map((z) => `${E}    ${z},`).join('\n')}\n${E}  ]}`)
    if (betont !== undefined) teile.push(`betont={${betont}}`)
    if (fussP) teile.push(`fuss=${nurText(fussP) ? alsString(text(fussP)) : `{<>${innen(fussP).trim()}</>}`}`)
    if (!titel) bericht.hinweise.push('Tabelle ohne Titel')
    return `${E}<Tabelle\n${teile.map((t) => `${E}  ${t}`).join('\n')}\n${E}/>`
  }

  function fragen(b) {
    const m = kinder(b).map(mapAufArray).find(Boolean)
    if (m && /<details/.test(S(m.body))) {
      const obj = objekte(m.arr)
      if (obj.length !== m.arr.elements.length) return null
      const ein = obj.map((o) => `{ q: ${prop(o, 'q')}, a: ${prop(o, 'a')} }`)
      if (ein.some((e) => e.includes('undefined'))) return null
      nutze('Fragen')
      return `${E}<Fragen\n${E}  fragen={[\n${ein.map((e) => `${E}    ${e},`).join('\n')}\n${E}  ]}\n${E}/>`
    }
    const details = kinder(b).filter((k) => tag(k) === 'details')
    if (details.length && details.length === kinder(b).length) {
      const ein = details.map((d) => {
        const q = nachfahren(d, (n) => ts.isJsxElement(n) && tag(n) === 'h3')[0]
        const antwortDiv = kinder(d).find((k) => tag(k) === 'div')
        const ps = antwortDiv ? kinder(antwortDiv).filter((k) => tag(k) === 'p') : []
        if (!q || ps.length !== 1 || !nurText(q) || !nurText(ps[0])) return null
        return `{ q: ${JSON.stringify(text(q))}, a: ${JSON.stringify(text(ps[0]))} }`
      })
      if (ein.some((e) => !e)) return null
      nutze('Fragen')
      return `${E}<Fragen\n${E}  fragen={[\n${ein.map((e) => `${E}    ${e},`).join('\n')}\n${E}  ]}\n${E}/>`
    }
    return null
  }

  // Hinweiskasten (grün/rot/sand/weiß) → Kasten mit Augenbraue/Titel und Inhalt
  function kasten(b) {
    const c = cls(b)
    if (!/rounded-2xl/.test(c) || /overflow-hidden/.test(c)) return null
    const ton = /pm-mint/.test(c) ? 'gruen' : /coral/.test(c) ? 'koralle' : 'neutral'
    const ks = kinder(b)
    let augen, titel
    const inhalt = []
    const pfeilZeilen = []
    for (const k of ks) {
      const kc = cls(k)
      if (tag(k) === 'p' && /uppercase/.test(kc) && !augen && !titel && !inhalt.length) augen = text(k)
      else if (tag(k) === 'p' && /font-bold/.test(kc) && !/uppercase/.test(kc) && !titel && !inhalt.length) titel = nurText(k) ? alsString(text(k)) : `{<>${innen(k).trim()}</>}`
      else if (tag(k) === 'div' && /flex gap-2/.test(kc) && /^→/.test(text(k))) {
        const kk = ts.isJsxElement(k) ? k.children : []
        const nachPfeil = kk.filter((x) => !(istEl(x) && tag(x) === 'span' && text(x) === '→'))
        pfeilZeilen.push(nachPfeil.map((x) => S(x)).join('').trim())
      } else if (tag(k) === 'p') {
        nutze('Text')
        inhalt.push(`${E}  <Text>${innen(k).trim()}</Text>`)
      } else if (tag(k) === 'ul' || (tag(k) === 'div' && kinder(k).length === 1 && mapAufArray(kinder(k)[0]))) {
        const m = kinder(k).map(mapAufArray).find(Boolean)
        if (!m) return null
        const obj = objekte(m.arr)
        if (!obj.length && m.arr.elements.every(ts.isStringLiteral)) {
          const haken = /✓/.test(S(m.body))
          nutze(haken ? 'HakenListe' : 'Liste')
          inhalt.push(`${E}  <${haken ? 'HakenListe' : 'Liste'} punkte={${S(m.arr)}} />`)
        } else if (obj.length === m.arr.elements.length) {
          const f = zugriffe(m.body, m.param)
          if (f.length !== 2 || sichtbareFelder(m.body, m.param).length !== 2) return null
          nutze('Werte')
          inhalt.push(`${E}  <Werte${ton === 'gruen' ? ' ton="gruen"' : ''} zeilen={[${obj.map((o) => `[${prop(o, f[0])}, ${prop(o, f[1])}]`).join(', ')}]} />`)
        } else return null
      } else if (tag(k) === 'div' && kinder(k).every((x) => tag(x) === 'div' && /flex/.test(cls(x)))) {
        // Zeilen „Wert · Text" als einzelne Divs
        const zeilen = kinder(k).map((x) => kinder(x).filter(istEl))
        if (!zeilen.every((z) => z.length === 2)) return null
        nutze('Werte')
        inhalt.push(`${E}  <Werte zeilen={[${zeilen.map(([a, bb]) => `[<>${innen(a).trim()}</>, <>${innen(bb).trim()}</>]`).join(', ')}]} />`)
      } else return null
    }
    if (pfeilZeilen.length) {
      nutze('Liste')
      inhalt.push(`${E}  <Liste punkte={[${pfeilZeilen.map((z) => (/^[^<{]*$/.test(z) ? JSON.stringify(norm(z)) : `<>${z}</>`)).join(', ')}]} />`)
    }
    nutze('Kasten')
    const kopfteile = [augen ? `augenbraue=${alsString(augen)}` : '', titel ? `titel=${titel}` : '', ton !== 'neutral' ? `ton="${ton}"` : ''].filter(Boolean).join(' ')
    return `${E}<Kasten${kopfteile ? ' ' + kopfteile : ''}>\n${inhalt.join('\n')}\n${E}</Kasten>`
  }

  function gegenueber(b) {
    if (!/grid md:grid-cols-2/.test(cls(b))) return null
    const ks = kinder(b)
    if (ks.length !== 2) return null
    const seiten = ks.map((k) => {
      const ps = kinder(k).filter((x) => tag(x) === 'p')
      if (ps.length !== 2 || kinder(k).length !== 2) return null
      const ton = /pm-green/.test(cls(ps[0])) ? 'gruen' : /coral/.test(cls(ps[0])) ? 'koralle' : 'taupe'
      return `{ titel: ${JSON.stringify(text(ps[0]))}, ton: '${ton}', text: ${nurText(ps[1]) ? JSON.stringify(text(ps[1])) : `<>${innen(ps[1]).trim()}</>`} }`
    })
    if (seiten.some((x) => !x)) return null
    nutze('Gegenueber')
    return `${E}<Gegenueber\n${E}  seiten={[\n${seiten.map((x) => `${E}    ${x},`).join('\n')}\n${E}  ]}\n${E}/>`
  }

  // Von Hand geschriebene Liste: <div className="space-y-…"><div><p fett>Titel</p><p>Text</p></div>…</div>
  function titelListe(b) {
    const ks = kinder(b)
    if (!ks.length || !ks.every((k) => tag(k) === 'div' && kinder(k).length === 2 && kinder(k).every((x) => tag(x) === 'p') && /font-bold/.test(cls(kinder(k)[0])))) return null
    const ein = ks.map((k) => {
      const [t, d] = kinder(k)
      return `{ title: ${JSON.stringify(text(t))}, desc: ${nurText(d) ? JSON.stringify(text(d)) : `<>${innen(d).trim()}</>`} }`
    })
    nutze('Punkte')
    return `${E}<Punkte\n${E}  punkte={[\n${ein.map((e) => `${E}    ${e},`).join('\n')}\n${E}  ]}\n${E}/>`
  }

  function block(b) {
    const t = tag(b)
    if (ts.isJsxExpression(b)) {
      if (/^\{\s*\/\*/.test(S(b))) return ''
      return null
    }
    if (t === 'p') return linkzeile(b) ?? absatz(b)
    if (t === 'ol') {
      const m = kinder(b).map(mapAufArray).find(Boolean)
      return m ? schritte(m) : null
    }
    if (t === 'div') {
      const c = cls(b)
      if (/overflow-hidden/.test(c) && nachfahren(b, (n) => ts.isJsxElement(n) && tag(n) === 'table').length) return tabelle(b)
      if (/space-y-4 mb-12/.test(c) || nachfahren(b, (n) => ts.isJsxElement(n) && tag(n) === 'details').length) return fragen(b)
      if (/grid md:grid-cols-2/.test(c)) return gegenueber(b)
      if (/rounded-2xl/.test(c)) {
        const ks = kinder(b)
        // weißer Kasten, der nur eine Titel-Liste enthält → Linienliste ohne Kasten
        if (/bg-white/.test(c) && ks.length === 1 && /space-y-/.test(cls(ks[0]))) return titelListe(ks[0]) ?? kasten(b)
        return kasten(b)
      }
      if (/space-y-/.test(c) && titelListe(b)) return titelListe(b)
      if (/space-y-/.test(c)) {
        const ks = kinder(b)
        const aus = []
        for (const k of ks) {
          const m = mapAufArray(k)
          if (m) {
            const r = /w-8 h-8 rounded-full bg-pm-taupe/.test(S(m.body)) ? schritte(m) : kartenListe(m)
            if (!r) return null
            aus.push(r)
          } else if (tag(k) === 'p') {
            const r = absatz(k)
            if (!r) return null
            aus.push(r)
          } else return null
        }
        return aus.join('\n')
      }
    }
    return null
  }

  function umsetzen(bl) {
    const aus = []
    for (const b of bl) {
      const r = block(b)
      if (r === '') continue
      if (r) aus.push(r)
      else {
        bericht.roh.push(`${tag(b) || 'Ausdruck'} ${cls(b).slice(0, 50)} „${text(b).slice(0, 50)}"`)
        aus.push(`${E}{/* VORLAGE: unverändert übernommen */}\n${E}${S(b)}`)
      }
    }
    return aus
  }

  // Dunkles Band: der erste passende Abschnitt (Einleitung + Punkte), bevorzugt „Wann …"
  const passend = (a) => {
    if (!a.id || a.id === 'faq') return false
    const ks = a.bloecke
    return ks.length >= 2 && tag(ks[0]) === 'p' && !linkzeile(ks[0]) && tag(ks[1]) === 'div' && /space-y-/.test(cls(ks[1])) && kinder(ks[1]).length === 1 && (() => {
      const m = mapAufArray(kinder(ks[1])[0])
      if (!m || /w-8 h-8 rounded-full bg-pm-taupe/.test(S(m.body))) return false
      const o = objekte(m.arr)
      return o.length >= 2 && o.length <= 6 && o.length === m.arr.elements.length && zugriffe(m.body, m.param).length === 2 && sichtbareFelder(m.body, m.param).length === 2
    })()
  }
  const kandidaten = abschnitte.filter(passend)
  const dunkel =
    kandidaten.find((a) => /wann|anzeichen|warn|signal|brauch|lösung|gründe|vorteil/i.test(a.titel)) ?? kandidaten.find((a) => a !== abschnitte[0]) ?? null

  const teileRumpf = []
  for (const a of abschnitte) {
    if (!a.id) {
      const inhalt = umsetzen(a.bloecke)
      if (inhalt.length) {
        nutze('Vorspann')
        teileRumpf.push(`          <Vorspann>\n${inhalt.join('\n')}\n          </Vorspann>`)
      }
      continue
    }
    if (a === dunkel) {
      const [einl, liste, ...rest] = a.bloecke
      const m = mapAufArray(kinder(liste)[0])
      const [t, d] = zugriffe(m.body, m.param)
      const punkte = objekte(m.arr).map((o) => `{ title: ${prop(o, t)}, desc: ${prop(o, d)} }`)
      nutze('DunklerAbschnitt')
      const restJsx = umsetzen(rest)
      teileRumpf.push(
        `          <DunklerAbschnitt\n            id="${a.id}"\n            titel=${a.titel}\n            einleitung=${nurText(einl) ? alsString(text(einl)) : `{<>${innen(einl).trim()}</>}`}\n            punkte={[\n${punkte.map((p) => `              ${p},`).join('\n')}\n            ]}\n          ${restJsx.length ? `>\n${restJsx.join('\n')}\n          </DunklerAbschnitt>` : '/>'}`,
      )
      continue
    }
    nutze('Abschnitt')
    teileRumpf.push(`          <Abschnitt id="${a.id}" titel=${a.titel}>\n${umsetzen(a.bloecke).join('\n')}\n          </Abschnitt>`)
  }
  if (!dunkel) bericht.hinweise.push('ohne dunkles Band')
  if (weiterlesen) teileRumpf.push(`\n          <Weiterlesen aktuell=${JSON.stringify(weiterlesen.replace(/^"|"$/g, ''))} variante="vorlage" />`)

  const augen = AUGENBRAUE[slug]
  if (!augen) bericht.hinweise.push('AUGENBRAUE fehlt')
  const kopfJsx = [
    `        <RatgeberKopf`,
    `          pfad={[\n${(kopf.pfad ?? []).map((p) => `            ${p},`).join('\n')}\n          ]}`,
    `          augenbraue=${JSON.stringify(augen ?? 'Ratgeber')}`,
    `          titel=${kopf.titel}`,
    kopf.einleitung ? `          einleitung=${kopf.einleitung}` : `          einleitung=""`,
    `          aktualisiert={${kopf.aktualisiert}}`,
    `          lesezeit=${JSON.stringify(kopf.lesezeit || '5 Min.')}`,
    kopf.blick ? `          blick={${kopf.blick}}` : '',
    kopf.blickTitel ? `          blickTitel=${alsString(kopf.blickTitel)}` : '',
    `        />`,
  ].filter(Boolean)

  const neuesJsx = `
      <div className="bg-pm-paper">
${kopfJsx.join('\n')}

        <RatgeberRumpf abschnitte={SECTIONS}>
${teileRumpf.join('\n\n')}
        </RatgeberRumpf>

        <KontaktBand />
      </div>`

  // Hülle ersetzen, TOC nur noch auf dem Handy (ab 1024 px steht es in der Seitenleiste)
  let out = src.slice(0, huelle.getStart(sf)) + neuesJsx.trimStart() + src.slice(huelle.getEnd())
  out = out.replace(/(\n\s*)<ArticleTOC sections=\{SECTIONS\} \/>/, '$1<div className="lg:hidden">$1  <ArticleTOC sections={SECTIONS} />$1</div>')
  if (!/const SECTIONS/.test(src)) {
    const liste = abschnitte.filter((a) => a.id).map((a) => `  { id: '${a.id}', title: ${JSON.stringify(norm(a.titel.replace(/^"|"$/g, '').replace(/^\{"|"\}$/g, '')))} },`)
    out = out.replace(/(\nexport const metadata)/, `\n// Inhaltsverzeichnis (neu mit der Vorlage: Zwischenüberschriften hatten keine Anker)\nconst SECTIONS = [\n${liste.join('\n')}\n]\n$1`)
    if (!/<ArticleTOC/.test(out)) {
      out = out.replace(/(\n\s*)<ArticleProgressBar \/>/, '$1<ArticleProgressBar />$1<div className="lg:hidden">$1  <ArticleTOC sections={SECTIONS} />$1</div>')
      if (!/import \{ ArticleTOC \}/.test(out)) out = out.replace(/(import \{ ArticleProgressBar \} from '@\/components\/ArticleProgressBar'\n)/, "$1import { ArticleTOC } from '@/components/ArticleTOC'\n")
    }
    bericht.hinweise.push(`SECTIONS neu (${liste.length})`)
  }

  // Importe
  out = out.replace(/import \{ ArticleCTA \} from '@\/components\/ArticleCTA'\n/, "import { KontaktBand } from '@/components/ArticleCTA'\n")
  out = out.replace(/import \{ AuthorByline \} from '@\/components\/AuthorByline'\n/, '')
  const liste = [...benutzt].sort()
  const imp = `import {\n  ${liste.join(', ')},\n} from '@/components/vorlage/Ratgeber'\n`
  out = out.replace(/(import \{ KontaktBand \} from '@\/components\/ArticleCTA'\n)/, `$1${imp}`)
  if (!out.includes("from '@/components/vorlage/Ratgeber'")) throw new Error('Import-Anker fehlt (ArticleCTA-Import nicht gefunden)')
  return out
}
