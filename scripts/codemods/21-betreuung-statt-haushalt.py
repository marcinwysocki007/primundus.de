#!/usr/bin/env python3
"""Betreuung ist der Kern, nicht der Haushalt (20.09.2026).

Martin: „Wir sind schon wieder dabei, dass eine Pflegekraft den Haushalt macht. Das ist keine
Haushaltskraft, die wir haben. Das ist totaler Bullshit, das kannst du sofort rausnehmen."

Zwei Sätze nannten den Haushalt vor der Pflege und machten die Betreuungskraft damit zur
Haushaltshilfe. Hauswirtschaftliche Aufgaben gehören zur Leistung, sind aber nicht ihr Zweck.
Der geprüfte Wortlaut auf /leistungen beginnt richtig: „Sie hilft bei der Körperpflege, beim Essen
und beim Aufstehen, kocht, kauft ein, wäscht und hält die Räume Ihres Angehörigen in Ordnung."

Dazu fällt eine Behauptung weg, die nicht trägt: „die einzige wirklich durchgehende Lösung".
Ein Pflegeheim ist ebenfalls durchgehend. Der belegbare Unterschied ist, dass es dieselbe Person
über Wochen ist und niemand umziehen muss.
"""
from __future__ import annotations

import pathlib
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

ERSETZUNGEN: list[tuple[str, str, str]] = [
    (
        'Haushalt vor der Pflege',
        'Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf',
        'Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf',
    ),
    (
        '„einzige durchgehende Lösung"',
        'Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt '
        'und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.',
        'Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch '
        'nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe '
        'Person ist und niemand umziehen muss.',
    ),
]


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    zaehler = {name: 0 for name, _, _ in ERSETZUNGEN}
    dateien: set[pathlib.Path] = set()

    for pfad in sorted((WURZEL / 'app').rglob('page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        neu = text
        for name, alt, ersatz in ERSETZUNGEN:
            if alt in neu:
                zaehler[name] += neu.count(alt)
                neu = neu.replace(alt, ersatz)
        if neu != text:
            dateien.add(pfad)
            if not trocken:
                pfad.write_text(neu, encoding='utf-8')

    for name, anzahl in zaehler.items():
        print(f'{name}: {anzahl}')
    print(f'Dateien: {len(dateien)}')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
