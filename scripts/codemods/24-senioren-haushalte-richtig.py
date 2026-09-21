#!/usr/bin/env python3
"""„Nachts niemand da" stimmt nicht — Senioren-Haushalte richtig beschreiben (21.09.2026).

Auf 152 Ortsseiten stand in der FAQ-Antwort „Wie viele ältere Menschen leben in <Ort>?":

    In X Prozent der Haushalte leben ausschließlich Menschen ab 65 (<Land>: Y Prozent).
    In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist
    eine Betreuungskraft gedacht, die mit einzieht.

Die Zahl ist richtig, der Satz danach ist falsch. Amtliche Definition im Methodikblatt der
Zensus-Regionaltabelle Haushalte (HHTYP_SENIOR_HH__1): „Haushalte mit ausschließlich
Seniorinnen/Senioren", Senior ist, wer das 65. Lebensjahr vollendet hat. Das Ehepaar mit 70
und 72 ist so ein Haushalt — und dort ist nachts sehr wohl jemand da. Behauptet wird also
etwas, das die Zahl nicht hergibt, und zwar zugunsten unseres eigenen Angebots.

Richtig ist: Es ist niemand UNTER 65 da. Das ist die eigentliche Lage vieler unserer
Kundenfamilien, und sie trägt das Argument besser als die Übertreibung: Die 78-Jährige, die
ihren 82-jährigen Mann versorgt, ist nicht „allein" — sie ist überlastet.

Siebter Fund dieser Art nach Herkunft, Landespflegegeld, EFH/ZFH-Bezug, FAQ-Drift,
„gereihtes Haus" und Bestandsmiete. Immer dasselbe Muster: richtige Zahl, falscher Satz.
Ein Zahlen-Wächter findet das nicht — nur die Spaltendefinition lesen findet das.
"""
from __future__ import annotations

import pathlib
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

ALT = ('In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür '
       'ist eine Betreuungskraft gedacht, die mit einzieht.')
NEU = ('In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt '
       'entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine '
       'Betreuungskraft gedacht, die mit einzieht.')


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    geaendert = []

    for pfad in sorted((WURZEL / 'app').rglob('page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        if ALT not in text:
            continue
        geaendert.append(pfad.parent.name)
        if not trocken:
            pfad.write_text(text.replace(ALT, NEU), encoding='utf-8')

    print(f'Senioren-Haushalte richtig beschrieben: {len(geaendert)} Seiten')
    print(f'  z. B. {geaendert[:5]}')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
