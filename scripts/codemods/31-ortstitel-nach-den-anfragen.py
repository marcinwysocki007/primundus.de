#!/usr/bin/env python3
"""16 Ortsseiten bekommen den Titel, den ihre eigenen Anfragen verlangen (22.09.2026).

Bisher trugen alle 207 dieselbe Schablone: „24-Stunden-Pflege in <Ort> | 6x Testsieger |
Primundus". Das ist auf den meisten richtig — aber nicht ueberall, und wo es falsch ist, kostet
es Klicks auf Positionen, die wir schon haben.

ZWEI GRUENDE, GEMESSEN JE SEITE (90 Tage, benannte Anfragen)

1. „Betreuung" schlaegt „Pflege" — auf 12 von 59 Seiten mit nennenswerten Impressionen:
       Guetersloh   171 Impressionen mit „betreuung" gegen 12 mit „pflege"
       Brandenburg  128 gegen 34
       Hildesheim   121 gegen 82
   Das Wort stand schon in der H1 („24-Stunden-Pflege und Betreuung in <Ort>"), nur nicht im
   Titel. Der Kopfbegriff „24-Stunden-Pflege" bleibt davor stehen — er wird nie ersetzt.

2. Der Kreis traegt ein Viertel oder mehr — auf 9 von 59:
       Heilbronn    111 von 151 Impressionen sind Kreis-Anfragen (73 %)
       Bad Homburg   69 von 104 (66 %)
       Landshut      73 von 177 (41 %)
       Pforzheim     76 von 190 (40 %)
   Dass das traegt, zeigt Pforzheim, das den Enzkreis schon im Titel hatte: Dessen Anfrage steht
   auf Position 12,5, die reine Stadtanfrage auf 19,0.

WAS NICHT PASSIERT

Berlin und Iserlohn bleiben unveraendert — dort traegt weder „Betreuung" (30 gegen 193, 45 gegen
152) noch der Kreis (0 % und 6 %) genug. Fuenf weitere fallen raus, weil keine Fassung unter
580 px bleibt: Bad Homburg vor der Hoehe mit dem Hochtaunuskreis braucht 726 px.

Jeder Titel ist in Googles Darstellungsgroesse gemessen (20px Arial, 580 px) und passt.

Aufruf:  python3 scripts/codemods/31-ortstitel-nach-den-anfragen.py
         (braucht /tmp/titel-gewaehlt.json aus der Messung)
"""
import json
import re
from pathlib import Path

APP = Path(__file__).resolve().parents[2] / 'app'


def main():
    gewaehlt = json.load(open('/tmp/titel-gewaehlt.json'))
    n, fehler = 0, []
    for slug, neu in sorted(gewaehlt.items()):
        datei = APP / f'24h-pflege-{slug}' / 'page.tsx'
        if not datei.exists():
            fehler.append(slug)
            continue
        q = datei.read_text(encoding='utf-8')
        m = re.search(r"^  title: '(.*)',$", q, re.M)
        if not m:
            fehler.append(slug)
            continue
        if m.group(1) == neu:
            continue
        # metadata UND openGraph tragen denselben Titel.
        datei.write_text(q.replace(m.group(1), neu), encoding='utf-8')
        print(f'  {slug:<22} {neu}')
        n += 1
    print(f'\n{n} Titel gesetzt' + (f' · Problem bei: {", ".join(fehler)}' if fehler else ''))


if __name__ == '__main__':
    main()
