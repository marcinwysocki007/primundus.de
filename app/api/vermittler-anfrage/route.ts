// 24.09.2026: Bis der Partnerzugang wirklich laeuft, geht die Anfrage vom Formular auf
// /pflegekraefte-fuer-vermittler per Mail an uns. Vorher lief sie ins Leere: das Formular
// hatte kein Ziel, neun ausgefuellte Pflichtfelder wurden verworfen (Martin 23.09.).
// Kein Zugangslink in der Bestaetigung — wir melden uns selbst.
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { partnerBestaetigung } from '@/lib/partner-mail'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Eigenes Postfach partner@primundus.de (IONOS), deshalb eigene Namen: die SMTP_*-Eintraege,
// die auf dem Render-Dienst schon standen, bleiben unberuehrt (Martin 24.09.).
const AN = process.env.PARTNER_ANFRAGE_AN || process.env.ANFRAGE_AN || ''
const VON = process.env.PARTNER_SMTP_FROM || ''

// Die Felder, die das Formular schickt. Reihenfolge = Reihenfolge in der Mail an uns.
const FELDER = [
  ['firma', 'Firma'],
  ['anrede', 'Anrede'],
  ['vorname', 'Vorname'],
  ['nachname', 'Nachname'],
  ['email', 'E-Mail'],
  ['telefon', 'Telefon'],
  ['strasse', 'Strasse und Hausnummer'],
  ['plz', 'PLZ'],
  ['ort', 'Ort'],
] as const

const PFLICHT = ['firma', 'vorname', 'nachname', 'email', 'telefon', 'strasse', 'plz', 'ort']

function text(wert: unknown): string {
  // Laengenbremse: das Formular hat keine so langen Felder. Wer mehr schickt, will etwas anderes.
  return typeof wert === 'string' ? wert.trim().slice(0, 200) : ''
}

function istMail(wert: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(wert)
}

export async function POST(req: NextRequest) {
  if (!AN || !VON || !process.env.PARTNER_SMTP_HOST) {
    console.error('vermittler-anfrage: SMTP nicht konfiguriert')
    return NextResponse.json({ fehler: 'nicht konfiguriert' }, { status: 500 })
  }

  let roh: Record<string, unknown>
  try {
    roh = await req.json()
  } catch {
    return NextResponse.json({ fehler: 'kein JSON' }, { status: 400 })
  }

  const d: Record<string, string> = {}
  for (const [schluessel] of FELDER) d[schluessel] = text(roh[schluessel])

  const fehlend = PFLICHT.filter((k) => d[k].length < 2)
  if (fehlend.length || !istMail(d.email) || !/^\d{5}$/.test(d.plz)) {
    return NextResponse.json({ fehler: 'unvollstaendig' }, { status: 400 })
  }

  // AGB-Zustimmung: gehoert zur Anfrage, nicht in den Fliesstext.
  const agbVersion = text(roh.agb_version)
  const agbAm = text(roh.agb_akzeptiert_am)
  const quelle = text(roh.quelle)
  const utm =
    roh.utm && typeof roh.utm === 'object'
      ? Object.entries(roh.utm as Record<string, unknown>)
          .map(([k, v]) => `${k}=${text(v)}`)
          .join(' · ')
      : ''

  const zeilen = FELDER.map(([k, label]) => `${label}: ${d[k] || '—'}`)
  zeilen.push('')
  zeilen.push(`AGB-Version: ${agbVersion || '—'}`)
  zeilen.push(`AGB akzeptiert am: ${agbAm || '—'}`)
  zeilen.push(`Quelle: ${quelle || '—'}`)
  if (utm) zeilen.push(`Kampagne: ${utm}`)

  const transport = nodemailer.createTransport({
    host: process.env.PARTNER_SMTP_HOST,
    port: Number(process.env.PARTNER_SMTP_PORT || 587),
    secure: Number(process.env.PARTNER_SMTP_PORT || 587) === 465,
    auth: { user: process.env.PARTNER_SMTP_USER || '', pass: process.env.PARTNER_SMTP_PASS || '' },
  })

  // Die Anfrage an uns. Geht sie nicht raus, sieht der Partner den Fehlerhinweis
  // mit Magdalenas Nummer — dann ist die Anfrage wenigstens nicht still verloren.
  try {
    await transport.sendMail({
      from: VON,
      to: AN,
      replyTo: `${d.vorname} ${d.nachname} <${d.email}>`,
      subject: `Partner-Anfrage: ${d.firma}`,
      text: zeilen.join('\n'),
    })
  } catch (e) {
    console.error('vermittler-anfrage: Mail an uns fehlgeschlagen', e)
    return NextResponse.json({ fehler: 'versand' }, { status: 502 })
  }

  // Bestaetigung an den Partner: Vorlage 20 aus dem Design-Workspace, ohne Zugangslink.
  // Scheitert sie, ist die Anfrage trotzdem bei uns — deshalb kein Fehler nach aussen.
  try {
    const mail = partnerBestaetigung({
      anrede: d.anrede,
      nachname: d.nachname,
      firma: d.firma,
      email: d.email,
    })
    await transport.sendMail({
      from: VON,
      to: `${d.vorname} ${d.nachname} <${d.email}>`,
      subject: mail.betreff,
      text: mail.text,
      html: mail.html,
    })
  } catch (e) {
    console.error('vermittler-anfrage: Bestaetigung an Partner fehlgeschlagen', e)
  }

  return NextResponse.json({ ok: true })
}
