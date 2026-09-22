#!/usr/bin/env python3
"""Der Ortsname wandert in die Anreise-Zusage (22.09.2026, Martins Idee).

VORHER (Lauf 29, am selben Tag):
    Geprueft, verfuegbare polnische Pflegekraefte fuer <Ort> und Preis direkt online sehen.
    Anreise in 3 Tagen moeglich – mit Bestpreisgarantie.

Martin: „Vielleicht kann man ja auch nicht Pflegekraefte fuer Worms, sondern Anreise in Worms
in drei Tagen moeglich oder sowas ist besser."

NACHHER:
    Geprueft, verfuegbare polnische Pflegekraefte und Preis direkt online sehen.
    Anreise in <Ort> in 3 Tagen moeglich – mit Bestpreisgarantie.

Warum das besser ist, gemessen und nicht geraten:
  * Der Ortsname traegt jetzt die dringendste Zusage, statt nur zu lokalisieren. Wer in einer
    akuten Lage sucht, liest „Anreise in Worms in 3 Tagen" — das beantwortet seine Frage.
  * „Pflegekraefte fuer Worms" war ausserdem schiefes Deutsch.
  * Es passt oefter: 180 Seiten gegen 176 vorher, und mit der Rueckfallform auf ALLEN 207.
    Vorher blieben 31 Seiten ohne Ortsnamen.

DIE RUECKFALLFORM: 27 Orte haben zu lange Namen fuer die volle Fassung — „Neustadt an der
Weinstrasse", „Rheinisch-Bergischer Kreis", „Freiburg im Breisgau". Sie verlieren das Wort
„verfuegbare", behalten aber den Ortsnamen. Das ist der bessere Tausch: Martin am 22.09.
„Ortsname ist wichtiger."

NICHT eingebaut: „taeglich kuendbar". Es passt zusammen mit dem Ortsnamen auf NULL von 207
Seiten (931 bis 1.082 px gegen 920 erlaubt). Martins eigener Zweifel — „vielleicht ist das
dann am Ende zu viel" — deckt sich mit der Messung.

Aufruf:  python3 scripts/codemods/30-ortsname-in-die-anreise.py
         (braucht /tmp/anreise2.json und /tmp/breiten-anreise.json aus der Pixelmessung)
"""
import json
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'


def main():
    breiten = json.load(open('/tmp/breiten-anreise.json'))
    voll, knapp, fehler = 0, 0, []
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        slug = datei.parent.name.replace('24h-pflege-', '')
        if slug not in breiten:
            continue
        q = datei.read_text(encoding='utf-8')
        mo = re.search(r'titel="Einzugsgebiet ([^"]+)"', q)
        if not mo:
            continue
        ort = mo.group(1)
        passt = breiten[slug]['A'] <= 920
        if passt:
            neu = (f'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. '
                   f'Anreise in {ort} in 3 Tagen möglich – mit Bestpreisgarantie.')
            voll += 1
        else:
            neu = (f'Geprüfte polnische Pflegekräfte und Preis direkt online sehen. '
                   f'Anreise in {ort} in 3 Tagen möglich – mit Bestpreisgarantie.')
            knapp += 1
        m = re.search(r"^  description: '(.*)',$", q, re.M)
        if not m:
            fehler.append(slug)
            continue
        if m.group(1) == neu:
            continue
        datei.write_text(q.replace(m.group(1), neu), encoding='utf-8')

    print(f'volle Form: {voll} · ohne „verfügbare" (zu lange Ortsnamen): {knapp} · Ortsname auf {voll+knapp} von 207')
    if fehler:
        print('  ohne description-Feld: ' + ', '.join(fehler))


if __name__ == '__main__':
    main()
