#!/usr/bin/env python3
"""Ein- und Zweifamilienhäuser: Anteil der GEBÄUDE, nicht der Wohnungen (20.09.2026).

172 Ortsseiten schrieben „X % der Wohnungen in <Ort> liegen in Ein- oder Zweifamilienhäusern".
`efh_zfh_anteil` aus seo-reports/zensus.py ist aber (Gebäude mit 1 Wohnung + Gebäude mit
2 Wohnungen) / Gebäude — ein Gebäude-Anteil.

Nachgerechnet an München: 824.103 Wohnungen in 147.196 Gebäuden. Wären 56,4 % der Wohnungen
(464.795) in Häusern mit höchstens zwei Wohnungen, bräuchte es mindestens 232.397 Gebäude —
es gibt nur 147.196. Die Aussage war rechnerisch unmöglich und widersprach auf derselben
Seite dem Satz „auf ein Gebäude kommen in München 5,6 Wohnungen".

In dichten Städten überschätzt der falsche Bezug genau das, worum es in dem Satz geht: den
Platz für ein eigenes Zimmer. Der Halbsatz „dort bietet sich oft eine ganze Etage an" bleibt,
er bezieht sich auf die Häuser.
"""
from __future__ import annotations

import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

MUSTER: list[tuple[str, re.Pattern[str], str]] = [
    (
        'Vorlage',
        re.compile(
            r'(\d+,\d+) % der Wohnungen in ([^;<>]{1,45}?) liegen in Ein- oder Zweifamilienhäusern'
        ),
        r'\1 % der Gebäude in \2 sind Ein- oder Zweifamilienhäuser',
    ),
    (
        'Einzelfall Kreise',
        re.compile(r'liegt knapp die Hälfte aller Wohnungen in Ein- oder Zweifamilienhäusern'),
        'ist knapp die Hälfte aller Gebäude ein Ein- oder Zweifamilienhaus',
    ),
]


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    zaehler = {name: 0 for name, _, _ in MUSTER}
    beruehrt: set[pathlib.Path] = set()

    for pfad in sorted((WURZEL / 'app').rglob('page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        neu = text
        for name, muster, ersatz in MUSTER:
            neu, n = muster.subn(ersatz, neu)
            zaehler[name] += n
        if neu != text:
            beruehrt.add(pfad)
            if not trocken:
                pfad.write_text(neu, encoding='utf-8')

    for name, anzahl in zaehler.items():
        print(f'{name}: {anzahl} Fundstellen')
    print(f'Dateien: {len(beruehrt)}')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
