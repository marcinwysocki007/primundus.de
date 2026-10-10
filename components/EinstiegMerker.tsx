'use client'

import { useEffect } from 'react'
import { cookieConsent } from '@/lib/cookie-consent'
import { berlinerDatum } from '@/lib/cookie-ab'
import { einstiegErmitteln, istRechnerLink, mitEinstieg, type Einstieg } from '@/lib/einstieg'

// Gibt jedem Klick in den Rechner Einstiegsseite und Herkunft mit (lib/einstieg.ts). Die Werte entstehen beim ersten Aufruf
// und bleiben im Arbeitsspeicher der Seite; Seitenwechsel über Kopf- und Fußzeile laden nicht neu und behalten sie.
// Angehängt wird erst, wenn der Besucher einen Rechner-Link anfasst (Finger, Maus, Tastatur, Kontextmenü), damit auch
// „in neuem Tab öffnen“ die Werte trägt.
//
// Martin 10.10.2026 („alles ja“ zur Abnahme vom 09.10., Punkt 1): Die Art der verweisenden Seite wird auch ohne
// Cookie-Einwilligung gelesen, nur als Klasse und nur im Arbeitsspeicher; Absatz dazu in der Datenschutzerklärung 2.2.
const VERWEIS_OHNE_EINWILLIGUNG = true

// Ab 30.10. bekommt der Link zusätzlich `referrerPolicy`, damit der Rechner auch die Seite des Klicks sieht (wie schon an den
// Knöpfen in Artikel-Kasten, Ortsseiten und Startseite). Nicht früher: Der Cookie-Test (bis 29.10.) zählt jeden Rechner-
// Besuch mit dem Verweis „primundus.de/“ als Klick von der Startseite. Heute senden Kopfzeile, Fußzeile und Textlinks jeder
// Seite nur diesen Verweis; mit der vollen Adresse fiele die Hauptkennzahl mitten im Test.
const KLICKSEITE_AB = '2026-10-30'

// Nur mit Statistik-Einwilligung: Einstieg über ein Neuladen hinweg im Tab merken (sessionStorage, endet mit dem Tab)
const SPEICHER = 'pm_einstieg'

let einstieg: Einstieg | null = null
// Adresse des ersten Aufrufs: Wer erst nach einem Seitenwechsel ohne Neuladen zustimmt, hat trotzdem hier begonnen
let erster: { pfad: string; suche: string } | null = null

function statistik(): boolean {
  return cookieConsent.getConsent()?.analytics === true
}

function gemerkt(): Einstieg | null {
  try {
    const e = JSON.parse(sessionStorage.getItem(SPEICHER) || 'null')
    return e && typeof e.her === 'string' ? e : null
  } catch {
    return null
  }
}

function merken(e: Einstieg | null) {
  try {
    if (e && e.ein) sessionStorage.setItem(SPEICHER, JSON.stringify(e))
    else if (!e) sessionStorage.removeItem(SPEICHER)
  } catch {
    // Speicher gesperrt: dann eben nur bis zum nächsten Neuladen
  }
}

function ermitteln(): Einstieg {
  const erlaubt = VERWEIS_OHNE_EINWILLIGUNG || statistik()
  if (!erster) erster = { pfad: location.pathname, suche: location.search }
  const jetzt = einstiegErmitteln(erster.pfad, erster.suche, erlaubt ? document.referrer : null)
  if (!statistik()) return jetzt
  const alt = gemerkt()
  // Neuladen innerhalb der Website: der gemerkte Einstieg gilt weiter. Neuer Besuch von außen im selben Tab: neu merken.
  if (jetzt.her === 'intern' && alt) return alt
  merken(jetzt)
  return jetzt
}

export function EinstiegMerker() {
  useEffect(() => {
    if (!einstieg) einstieg = ermitteln()

    const zustimmung = (ev: Event) => {
      const c = (ev as CustomEvent<{ analytics?: boolean }>).detail
      if (c?.analytics) {
        // Zustimmung nach dem ersten Aufruf: Der Verweis ist noch derselbe, jetzt darf er gelesen werden
        if (einstieg?.her === 'unbekannt') einstieg = ermitteln()
        else merken(einstieg)
      } else {
        merken(null)
        // Widerruf: Was aus dem Verweis stammt, geht nicht mehr mit — es bleibt, was die eigene Adresse sagt
        if (!VERWEIS_OHNE_EINWILLIGUNG) einstieg = ermitteln()
      }
    }

    const anfassen = (ev: Event) => {
      const a = (ev.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a || !einstieg || !istRechnerLink(a.href)) return
      const neu = mitEinstieg(a.href, einstieg)
      if (a.href !== neu) a.href = neu
      if (!a.referrerPolicy && berlinerDatum(new Date()) >= KLICKSEITE_AB) a.referrerPolicy = 'no-referrer-when-downgrade'
    }

    const arten = ['pointerdown', 'mousedown', 'touchstart', 'keydown', 'click', 'auxclick', 'contextmenu']
    arten.forEach((t) => document.addEventListener(t, anfassen, { capture: true, passive: true }))
    window.addEventListener('cookie-consent-changed', zustimmung)
    return () => {
      arten.forEach((t) => document.removeEventListener(t, anfassen, { capture: true }))
      window.removeEventListener('cookie-consent-changed', zustimmung)
    }
  }, [])

  return null
}
