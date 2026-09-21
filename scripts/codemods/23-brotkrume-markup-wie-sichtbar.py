#!/usr/bin/env python3
"""Brotkrumen-Markup der Ortsseiten = sichtbare Brotkrume (21.09.2026).

Martin: „Ist das nicht schlimm, dass wir 24h schreiben und nicht 24 Stunden Pflege in der URL?"
Die Adresse selbst ist ein sehr kleiner Faktor (/24h-pflege-worms steht für „24 stunden pflege in
worms" auf 8,6; pflegehelden rankt für München mit /standorte/bayern/muenchen/ ganz ohne
Suchbegriff), und 207 Adressen zu ändern hieße 207 Weiterleitungen mitten im Kampf um die
Indexierung. Aber: Google zeigt bei unseren Treffern die Brotkrume aus dem Markup — und die sagte
auf allen 207 Seiten „Startseite › 24h-Pflege <Ort>", während die sichtbare Brotkrume
„Startseite › Regionen › <Ort>" lautet. Zwei Fehler in einem: ein Widerspruch zu Googles Vorgabe
(Markup muss der sichtbaren Brotkrume entsprechen), und die einzige Stelle, an der das Kürzel „24h"
im Suchergebnis auftauchte.

Jetzt: Markup = sichtbarer Pfad, drei Stufen, Ortsname wie im sichtbaren Label (auch „Kreis …").

build-artikel.mjs bleibt unberührt: Ortsseiten hatten vorher zwei Stufen (→ ausgeschlossen), jetzt
drei mit Rubrik „regionen", die nicht in der Positivliste steht (→ weiter ausgeschlossen).
"""
from __future__ import annotations

import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

BC = re.compile(
    r"(\{\s*'@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus\.de/' \},\n)"
    r"(\s*)\{ '@type': 'ListItem', position: 2, name: '24h-Pflege [^']+', item: '(https://primundus\.de/[^']+)' \},\n"
)


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    geaendert = 0
    ohne_label = []

    for pfad in sorted((WURZEL / 'app').glob('24h-pflege-*/page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        if "<OrtWerkzeuge ort={'" not in text:
            continue
        sichtbar = re.search(r"pfad=\{\[(.*?)\]\}", text, re.S)
        labels = re.findall(r"label: '([^']+)'", sichtbar.group(1)) if sichtbar else []
        if len(labels) < 3 or labels[1] != 'Regionen':
            ohne_label.append(pfad.parent.name)
            continue
        ort_label = labels[-1].replace("'", "\\'")

        def ersatz(m: re.Match) -> str:
            e = m.group(2)
            return (
                m.group(1)
                + f"{e}{{ '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' }},\n"
                + f"{e}{{ '@type': 'ListItem', position: 3, name: '{ort_label}', item: '{m.group(3)}' }},\n"
            )

        neu, n = BC.subn(ersatz, text, count=1)
        if n:
            geaendert += 1
            if not trocken:
                pfad.write_text(neu, encoding='utf-8')

    print(f'Brotkrumen-Markup angeglichen: {geaendert}')
    if ohne_label:
        print(f'übersprungen (sichtbarer Pfad weicht ab): {len(ohne_label)} → {ohne_label[:6]}')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
