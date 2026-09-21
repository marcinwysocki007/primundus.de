#!/usr/bin/env python3
"""Zwei Zensus-Fehldeutungen und zwei negative Sätze (21.09.2026).

1) „REIHENHÄUSER" (152 Ortsseiten im FAQ, 15 im Fließtext, 74× der Folgesatz).
   `reihenhaus` in seo-reports/zensus.py ist Zensus-Spalte 49 der Gebäudetabelle: Bauweise
   „gereihtes Haus" = beidseitig angebaut. Das ist in München vor allem der Gründerzeit-Block mit
   sechs Stockwerken, nicht das Reihenhaus mit steiler Treppe. Der Schluss „Schmaler Grundriss,
   steile Treppe, Schlafzimmer und Bad im Obergeschoss" war deshalb für Großstädte falsch — und der
   OpenAI-Prüfer hat die Zahl zu Recht als „für München unplausibel" markiert. Neuer Wortlaut nennt,
   was gezählt wird, und zieht den Schluss, der für beide Bauformen stimmt: die Treppe.

2) „NEU VERMIETET WIRD FÜR X €" (OrtWerkzeuge, alle Seiten mit Mietangabe).
   `qmmiete` ist Zensus-Spalte 78: durchschnittliche Nettokaltmiete der vermieteten Wohnungen —
   also die BESTANDSMIETE, nicht die Neuvermietung. Die liegt in München deutlich höher. Der Satz
   behauptete das Falsche und war nebenbei negativ formuliert („Umziehen ist selten die Antwort").

3) „Einen festen Monatspreis gibt es nicht, und wir nennen hier bewusst keinen" (OrtWerkzeuge):
   negativ, Martin am 21.09.: „negative Formulierungen sind nicht gut". Positiv, gleicher Inhalt.
"""
from __future__ import annotations

import pathlib
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

ORTSSEITEN: list[tuple[str, str, str]] = [
    ('FAQ: Prozent sind Reihenhäuser',
     ' Prozent sind Reihenhäuser.',
     ' Prozent stehen in geschlossener Reihe.'),
    ('Fließtext: sind Reihenhäuser —',
     ' sind Reihenhäuser — in ',
     ' stehen in geschlossener Reihe, an beiden Seiten angebaut — in '),
    ('Fließtext: sind Reihenhäuser,',
     ' sind Reihenhäuser, in ',
     ' stehen in geschlossener Reihe, an beiden Seiten angebaut, in '),
    ('Folgesatz Treppe',
     'Schmaler Grundriss, steile Treppe, Schlafzimmer und Bad im Obergeschoss: Wenn das Treppensteigen',
     'Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen'),
    ('Folgesatz Treppe (München)',
     'Schmaler Grundriss, Schlafzimmer und Bad im Obergeschoss — wenn das Treppensteigen',
     'Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe — wenn das Treppensteigen'),
]

BAUSTEIN = WURZEL / 'components' / 'orte' / 'OrtWerkzeuge.tsx'
BAUSTEIN_ERSETZUNGEN: list[tuple[str, str, str]] = [
    ('Bestandsmiete statt Neuvermietung',
     "` Umziehen ist selten die Antwort: Neu vermietet wird in ${ort} für ${miete.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € je Quadratmeter.`",
     "` Zu Hause bleiben ist meist auch die günstigere Wahl: Schon die Bestandsmiete liegt in ${ort} bei ${miete.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € je Quadratmeter (Zensus 2022), bei Neuvermietung mehr.`"),
    ('Preis positiv',
     'Einen festen Monatspreis gibt es nicht, und wir nennen hier bewusst keinen: Er richtet sich danach, wie viel Hilfe nötig\n        ist und was Sie von der Betreuungskraft erwarten',
     'Ihr Monatspreis richtet sich danach, wie viel Hilfe nötig ist und was Sie von der Betreuungskraft\n        erwarten'),
]


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    zaehler = {name: 0 for name, _, _ in ORTSSEITEN + BAUSTEIN_ERSETZUNGEN}
    dateien: set[pathlib.Path] = set()

    for pfad in sorted((WURZEL / 'app').glob('24h-pflege-*/page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        neu = text
        for name, alt, ersatz in ORTSSEITEN:
            if alt in neu:
                zaehler[name] += neu.count(alt)
                neu = neu.replace(alt, ersatz)
        if neu != text:
            dateien.add(pfad)
            if not trocken:
                pfad.write_text(neu, encoding='utf-8')

    text = BAUSTEIN.read_text(encoding='utf-8')
    neu = text
    for name, alt, ersatz in BAUSTEIN_ERSETZUNGEN:
        if alt in neu:
            zaehler[name] += 1
            neu = neu.replace(alt, ersatz)
    if neu != text:
        dateien.add(BAUSTEIN)
        if not trocken:
            BAUSTEIN.write_text(neu, encoding='utf-8')

    for name, anzahl in zaehler.items():
        print(f'{name}: {anzahl}')
    print(f'Dateien: {len(dateien)}')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
