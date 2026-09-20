#!/usr/bin/env python3
"""Zwei Sachfehler auf den Ortsseiten (20.09.2026).

1) HERKUNFT — 207 Ortsseiten behaupten „Die meisten kommen aus Polen, einige aus Rumänien oder
   Bulgarien". Martin am 19.09.: „wir haben derzeit nur polnische - das würde ich jetzt nicht
   schreiben, aber auch nicht andere länder bewerben". Korrigiert wurden damals (935ef04) nur
   /24-stunden-pflege und /ueber-uns; die Ortsseiten blieben stehen und versprechen seither
   Betreuungskräfte, die es derzeit nicht gibt. Wortlaut wie auf der Startseite: „aus Polen",
   ohne „nur", ohne Aufzählung. Die Ratgeber /pflegekraft-aus-rumaenien und
   /pflegekraft-aus-bulgarien bleiben unberührt (Memory: bis Martin etwas anderes sagt).

2) LANDESPFLEGEGELD — 51 Bayern-Ortsseiten widersprechen sich auf derselben Seite: Die
   Kasten-Überschrift sagt „+500 €/Jahr", der Text darunter „1.000 €/Jahr (ca. 83 €/Monat)".
   Richtig sind seit dem Pflegegeldjahr 2026 500 € (LfP Bayern; Ärzteblatt 10.12.2025,
   „Landespflegegeld wird in Bayern halbiert"), ab Pflegegrad 2 und Hauptwohnsitz in Bayern —
   eine Bedingung „häusliche Pflege" gibt es nicht. 500 € / 12 = ca. 42 €/Monat.
   Codemod 16 hatte diese Stelle nicht erwischt, weil der Wächter in check-fakten.mjs keine
   Zeilenumbrüche zwischen „Landespflegegeld" und der Zahl zulässt — das Loch wird dort mit
   geschlossen, damit der alte Satz nicht zurückkommt.
"""
from __future__ import annotations

import pathlib
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

ERSETZUNGEN: list[tuple[str, str, str]] = [
    (
        'Herkunft',
        'Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind',
        'Sie kommen aus Polen und sind',
    ),
    (
        'Landespflegegeld',
        'Bayern zahlt zusätzlich 1.000 €/Jahr (ca. 83 €/Monat) für alle PG 2–5 in häuslicher '
        'Pflege. Antrag beim Landesamt für Pflege (LfP Bayern) — kumulierbar mit allen '
        'Pflegekasse-Zuschüssen.',
        'Bayern zahlt zusätzlich 500 €/Jahr (ca. 42 €/Monat) ab Pflegegrad 2, wenn der '
        'Hauptwohnsitz in Bayern liegt (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege '
        '(LfP Bayern) — kumulierbar mit allen Pflegekasse-Zuschüssen.',
    ),
]


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    zaehler = {name: 0 for name, _, _ in ERSETZUNGEN}
    beruehrt: set[pathlib.Path] = set()

    for pfad in sorted((WURZEL / 'app').rglob('page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        neu = text
        for name, alt, ersatz in ERSETZUNGEN:
            if alt in neu:
                zaehler[name] += neu.count(alt)
                neu = neu.replace(alt, ersatz)
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
