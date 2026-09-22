#!/usr/bin/env python3
"""206 Ortsseiten auf Martins neues Beschreibungs-Muster bringen (22.09.2026).

AUSGANGSLAGE

Auf den Ortsseiten stand noch die Beschreibung vom 20.09.:

    Liebevolle Betreuung in <Ort> und Entlastung fuer Angehoerige. Geprueft, verfuegbare
    Betreuungskraefte & Preis sofort sehen – mit Bestpreisgarantie.

Martin hat dieses Muster am 22.09. auf der Startseite selbst ersetzt und danach zweimal
nachgebessert. Der Stand, den er zuletzt freigegeben hat:

    Geprueft, verfuegbare polnische Pflegekraefte und Preis direkt online sehen.
    Anreise in 3 Tagen moeglich – mit Bestpreisgarantie.

Zwei Aenderungen daran stammen von ihm selbst:
  * „polnische Pflegekraefte" in der MEHRZAHL. Gemessen: Mehrzahl Position 21,2, Einzahl 51,3.
    Die Einzahl hat mehr Impressionen, aber auf Position 51 sind die wertlos.
  * „Auswahl vorab" gestrichen — „versteht keiner".

WAS DIESER LAUF MACHT

Er setzt dieses Muster auf alle Ortsseiten, mit der einen Anpassung, die die Uebertragung
erzwingt: dem Ortsnamen. Nichts sonst wird umformuliert.

    lang:  Geprueft, verfuegbare polnische Pflegekraefte fuer <Ort> und Preis direkt online
           sehen. Anreise in 3 Tagen moeglich – mit Bestpreisgarantie.
    kurz:  wie oben, ohne „fuer <Ort>"

Gemessen in Googles Darstellungsgroesse (14px Arial, 920 px): Die lange Form passt auf 176 von
207 Seiten. Die 31 mit langen Ortsnamen — „Neustadt an der Weinstrasse", „Rheinisch-Bergischer
Kreis" — bekommen die kurze. Beide sind Martins Wortlaut; die kurze ist sogar exakt seiner.

Der Titel wird NICHT angefasst. Ob der Landkreis hineingehoert, haengt an den Anfragen je Ort
(bei Worms, Pforzheim und Iserlohn ja, bei Hildesheim nein) und wird einzeln entschieden.

Aufruf:  python3 scripts/codemods/29-orts-beschreibung-nach-martins-muster.py
         (braucht /tmp/orts-breiten.json aus der Pixelmessung)
"""
import json
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'
GRENZE = 920


def main():
    breiten = json.load(open('/tmp/orts-breiten.json'))
    lang_t = 'Geprüfte, verfügbare polnische Pflegekräfte für {ort} und Preis direkt online sehen. Anreise in 3 Tagen möglich – mit Bestpreisgarantie.'
    kurz_t = 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Anreise in 3 Tagen möglich – mit Bestpreisgarantie.'

    geaendert = kurz = uebersprungen = 0
    ohne_ort = []
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        slug = datei.parent.name.replace('24h-pflege-', '')
        if slug not in breiten:
            uebersprungen += 1
            continue
        q = datei.read_text(encoding='utf-8')
        mo = re.search(r'titel="Einzugsgebiet ([^"]+)"', q)
        if not mo:
            uebersprungen += 1
            continue
        ort = mo.group(1)
        passt = breiten[slug]['lang'] <= GRENZE
        neu = lang_t.format(ort=ort) if passt else kurz_t
        if not passt:
            ohne_ort.append(ort)
            kurz += 1

        # Beschreibung in metadata UND openGraph ersetzen — beide tragen denselben Satz.
        m = re.search(r"^  description: '(.*)',$", q, re.M)
        if not m or m.group(1) == neu:
            uebersprungen += 1
            continue
        q = q.replace(m.group(1), neu)
        datei.write_text(q, encoding='utf-8')
        geaendert += 1

    print(f'Beschreibung gesetzt: {geaendert} · davon ohne Ortsname (zu lang): {kurz} · übersprungen: {uebersprungen}')
    if ohne_ort:
        print('  ohne Ortsname: ' + ', '.join(sorted(ohne_ort)[:8]) + (' …' if len(ohne_ort) > 8 else ''))


if __name__ == '__main__':
    main()
