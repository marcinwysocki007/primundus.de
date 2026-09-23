#!/usr/bin/env python3
"""Knopf, Gesichter und Sterne in den ersten Bildschirm der Ortsseiten (23.09.2026).

MARTIN, nachdem er die Seiten auf dem Handy gesehen hat:

    „DAS ist ganz schlimm. Es fehlen teilweise Buttons und Pflegekraefte und Sterne … Aber warum
     haben die Seiten noch immer den Preis im Content???? Wir benoetigen doch Hemmnisnehmer
     sofort sichtbar oder? Aehnlich wie auf der Startseite."

Er hat in beidem recht, und beides ist gemessen.

GEMESSEN, Stand vor dieser Aenderung (Seitenanfang in px, oberste Kante):

    Seite                  Knopf   Gesichter   Sterne   unser Preis
    Startseite               337         737      950         7.334
    Worms (205 Orte)         670      17.054    1.816           823
    Muenchen                 657      22.831    1.387         8.988
    /kosten                  674         746      802           341
    /24-stunden-pflege       710         782      838           343
    /pflegekraft-aus-polen   805         877      933           408

Der sichtbare Bereich auf dem Handy reicht je nach Geraet von 553 px (iPhone SE) bis 830 px
(15 Pro Max nach dem ersten Wischen). Auf KEINEM iPhone standen auf den Ortsseiten Gesichter
oder Sterne im ersten Bildschirm. Auf /kosten, /24-stunden-pflege und der Polen-Seite stand
dort stattdessen als erstes unser Preis.

WAS SICH AENDERT

1. Der volle Rechner-Block kommt DIREKT unter die Ueberschrift, vor die Einleitung
   (`knopfOben` statt `knopfSchlicht`). Er bringt Knopf, Gesichterreihe und Sterne mit —
   die drei Dinge, die Martin vermisst hat.

   Warum nicht stattdessen die Einleitung kuerzen? Sie muesste auf rund 210 Zeichen, heute sind
   es 350. Das hiesse, 205 oertlich geschriebene Texte anzugleichen — und Textgleichheit ist bei
   den Ortsseiten die Leitkennzahl (69,4 %, Ziel 55 %). Die Reihenfolge zu aendern kostet kein
   einziges Wort.

2. Zwei von 207 Seiten (Muenchen, Hamburg) hatten schon den vollen Block, aber NACH der
   Einleitung. Sie bekommen dieselbe Reihenfolge.

NICHT Teil dieses Codemods: die Preise in den Einleitungen von /kosten, /24-stunden-pflege und
/pflegekraft-aus-polen. Das ist sichtbarer Text und geht einzeln.

Aufruf:  python3 scripts/codemods/34-hemmnisnehmer-in-den-ersten-bildschirm.py
"""
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'


def main():
    umgestellt = ergaenzt = 0
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        s = datei.read_text(encoding='utf-8')
        if 'RatgeberKopf' not in s or 'knopf={{' not in s:
            continue
        if 'knopfSchlicht' in s:
            s = s.replace('knopfSchlicht', 'knopfOben')
            umgestellt += 1
        elif 'knopfOben' not in s:
            # Muenchen und Hamburg: voller Block, aber unter der Einleitung.
            m = re.search(r'^(\s+)knopf=\{\{', s, re.M)
            if not m:
                continue
            ende = s.index('\n', m.start())
            s = s[:ende] + f'\n{m.group(1)}knopfOben' + s[ende:]
            ergaenzt += 1
        else:
            continue
        datei.write_text(s, encoding='utf-8')

    print(f'knopfSchlicht → knopfOben: {umgestellt} · knopfOben ergänzt: {ergaenzt}')


if __name__ == '__main__':
    main()
