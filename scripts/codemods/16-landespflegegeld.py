#!/usr/bin/env python3
"""Bayerisches Landespflegegeld: 500 € je Pflegegeldjahr seit 2026 (vorher 1.000 €).

Belege (geprüft 17.09.2026): Landesamt für Pflege, https://www.lfp.bayern.de/landespflegegeld/
(„Das Landespflegegeld beträgt 500,00 Euro pro Pflegegeldjahr"; ab Pflegegrad 2, Hauptwohnsitz in Bayern,
keine Bedingung „häusliche Pflege"); Deutsches Ärzteblatt 10.12.2025 „Landespflegegeld wird in Bayern halbiert".
Aufruf: python3 scripts/codemods/16-landespflegegeld.py [--nur-zaehlen]
"""
import glob
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(WURZEL)
NUR_ZAEHLEN = '--nur-zaehlen' in sys.argv

REGELN = [
    ('Ortsseiten-Frage', re.compile(re.escape('Bayerisches Landespflegegeld — 1.000 €/Jahr für PG 2–5 in häuslicher Pflege.')),
     'Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €).'),
    ('Förderungen je Bundesland', re.compile(re.escape('1.000 €/Jahr für Pflegebedürftige mit PG 2–5 die zuhause gepflegt werden.')),
     '500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €).'),
    ('Blick und Kasten', re.compile(r'Landespflegegeld \+1\.000 €/Jahr'), 'Landespflegegeld +500 €/Jahr'),
    ('Einzelsätze', re.compile(r"(Landespflegegeld[^.'\"<>{}\n]{0,30}?)1\.000 (€/Jahr|Euro im Jahr)"), r'\g<1>500 \2'),
]
dateien = sorted(set(glob.glob('app/**/*.tsx', recursive=True) + glob.glob('components/**/*.tsx', recursive=True)
                     + glob.glob('lib/**/*.ts', recursive=True) + ['public/llms.txt']))
zaehler = {name: 0 for name, _, _ in REGELN}
geaendert = []
for f in dateien:
    s = open(f, encoding='utf-8').read()
    neu = s
    for name, rx, ersatz in REGELN:
        neu, n = rx.subn(ersatz, neu)
        zaehler[name] += n
    if neu != s:
        geaendert.append(f)
        if not NUR_ZAEHLEN:
            open(f, 'w', encoding='utf-8').write(neu)
for name, n in zaehler.items():
    print(f'{n:>4}  {name}')
print(f'{len(geaendert)} Dateien')
