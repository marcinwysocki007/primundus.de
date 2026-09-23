#!/usr/bin/env python3
"""Unterzeile zwischen H1 und Rechner-Block, wie auf kostenrechner.primundus.de (23.09.2026).

MARTIN, zum ersten Anlauf (Block direkt unter der H1):
    „Das ist doch komplett falsch … Button ploetzlich nach so weit oben!!!!!
     Nimm als Referenz die kostenrechner.primundus.de Seite — dort passt es doch."

Der Rechner-Kopf auf dem Handy, gemessen:
    H1 „Ihre Eltern muessen nicht ins Heim."           423 px
    Unterzeile „Sehen Sie in 2 Minuten, was es kostet
      und welche Pflegekraefte verfuegbar sind –
      Anreise in 3 Tagen moeglich."                     540 px
    Knopf „Preis & Pflegekraefte ansehen"               642 px
    Gesichterreihe, dann die Punkte, dann Sterne       918 px

Genau diese Reihenfolge bekommen die Ortsseiten und die drei Kernseiten:
    H1 → Unterzeile → Knopf → Gesichter → Punkte → Sterne → oertliche Einleitung.

Die Unterzeile ist der Rechner-Wortlaut; auf den Ortsseiten mit Ort in der Anreise-Zusage
(„Anreise in Worms in 3 Tagen moeglich" — Martins Idee vom 22.09.).

Aufruf:  python3 scripts/codemods/35-unterzeile-wie-im-rechner.py
"""
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'


def import_ergaenzen(s: str) -> str:
    if 'StandardUnterzeile' in s.split("from '@/components/vorlage/Ratgeber'")[0]:
        return s
    # Erste Zeile des Ratgeber-Imports: „RatgeberKopf," → „RatgeberKopf, StandardUnterzeile,"
    return s.replace('RatgeberKopf,', 'RatgeberKopf, StandardUnterzeile,', 1)


def main():
    orte = kern = 0
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        s = datei.read_text(encoding='utf-8')
        if 'knopfOben' not in s or 'unterzeile=' in s:
            continue
        m = re.search(r'augenbraue="24-Stunden-Pflege in ([^"]+)"', s)
        if not m:
            print(f'  ? {datei.parent.name}: kein Ort in der Augenbraue'); continue
        ort = m.group(1)
        s = import_ergaenzen(s)
        s = re.sub(r'^(\s+)knopfOben$', rf'\1knopfOben\n\1unterzeile={{<StandardUnterzeile ort="{ort}" />}}', s, count=1, flags=re.M)
        datei.write_text(s, encoding='utf-8')
        orte += 1

    for name in ['kosten', 'pflegekraft-aus-polen', '24-stunden-pflege']:
        datei = APP / name / 'page.tsx'
        s = datei.read_text(encoding='utf-8')
        if 'unterzeile=' in s:
            continue
        s = import_ergaenzen(s)
        s = re.sub(r'^(\s+)knopfOben$', r'\1knopfOben\n\1unterzeile={<StandardUnterzeile />}', s, count=1, flags=re.M)
        datei.write_text(s, encoding='utf-8')
        kern += 1

    print(f'Unterzeile: {orte} Ortsseiten (mit Ort) · {kern} Kernseiten')


if __name__ == '__main__':
    main()
