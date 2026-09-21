#!/usr/bin/env python3
"""„trägerunabhängig" ist nicht das, was § 7a SGB XI sagt (21.09.2026).

Auf 180 Ortsseiten stand in sechs Varianten: „Die Pflegeberatung nach § 7a SGB XI ist
kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause."

Nachgelesen am 21.09.2026 im Gesetzestext (gesetze-im-internet.de/sgb_11/__7a.html):

  • Erbracht wird die Beratung von den PFLEGEKASSEN. Die sind selbst Träger — „trägerunabhängig"
    ist damit genau das, was sie nicht ist. Das Wort kommt im Gesetz auch nicht vor.
  • Das Gesetz verlangt stattdessen: „die Neutralität und Unabhängigkeit der Beratung sind zu
    gewährleisten." Das ist der belastbare Punkt, und er trägt die Aussage genauso.
  • „kommt auf Wunsch zu Ihnen nach Hause" steht dagegen so im Gesetz: „Sie erfolgt auf Wunsch
    … in der häuslichen Umgebung" — bleibt.
  • „kostenlos" steht nicht wörtlich im Gesetz, aber die Pflegekassen tragen die Aufwendungen.
    Für den Leser stimmt es, bleibt.

Gefunden von GPT-5 in der Zweitmeinung zum neuen Beratungsabschnitt. Im selben Durchgang hat
GPT-5 drei Dinge behauptet, die NICHT stimmten und die deshalb nicht übernommen wurden: Aachen
sei kreisfrei (Regionalschlüssel 053340002002 — eine Gemeinde IN der Städteregion), das
Pflegetelefon gehöre zum BMFSFJ (heißt seit 2025 Bundesministerium für Bildung, Familie,
Senioren, Frauen und Jugend und nennt sich in dem Abschnitt selbst „Bundesseniorenministerium")
und der Abschnitt brauche einen Verkaufs-Rückanker (er lebt davon, keinen zu haben).
"""
from __future__ import annotations

import pathlib
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    n = 0
    for pfad in sorted((WURZEL / 'app').rglob('page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        if 'trägerunabhängig' not in text:
            continue
        n += 1
        if not trocken:
            pfad.write_text(text.replace('trägerunabhängig', 'neutral'), encoding='utf-8')
    print(f'„trägerunabhängig" → „neutral": {n} Seiten')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
