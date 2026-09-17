#!/usr/bin/env python3
"""„Preis berechnen" direkt in den Kostenrechner (Martin 17.09.2026).

Ortsseiten: Kasten „Ihren eigenen Fall durchrechnen" (Pflegegrad-Rechner + Textlink) → <RechnerKasten src="…" />.
Kreisseiten: Verweis „Unsicher beim Pflegegrad?" im Kostenabschnitt → <RechnerKasten src="ort-<kreis>" />.
Nebenbei behoben: Die alten Links trugen „&amp;src=" in einem JS-String, dadurch kam src im Rechner
nicht an (Fehler aus 13-ortsseiten.py vom 16.09.).
Aufruf: python3 scripts/codemods/15-rechner-kasten.py [--nur-zaehlen]
"""
import glob
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(WURZEL)
NUR_ZAEHLEN = '--nur-zaehlen' in sys.argv

KASTEN = re.compile(r'<Kasten titel="Ihren eigenen Fall durchrechnen">([\s\S]*?)</Kasten>')
KREIS = re.compile(r"<MehrDazu\s+label=\"Mehr dazu:\"\s+links=\{\[\s*\{ href: '/pflegegrad-rechner', text: 'Unsicher beim Pflegegrad\? Hier mit denselben sechs Modulen rechnen wie bei der Begutachtung' \},\s*\]\}\s*/>")
IMPORT = re.compile(r"import \{([^}]*)\} from '@/components/vorlage/Ratgeber'")


def importe_anpassen(s):
    m = IMPORT.search(s)
    namen = [n.strip() for n in m.group(1).split(',') if n.strip()]
    rumpf = s[:m.start()] + s[m.end():]
    namen = [n for n in namen if n not in ('Kasten', 'MehrDazu') or re.search(r'<' + n + r'\b', rumpf)]
    if 'RechnerKasten' not in namen:
        namen.append('RechnerKasten')
    namen.sort()
    mehrzeilig = '\n' in m.group(1)
    liste = ('\n  ' + ', '.join(namen) + ',\n') if mehrzeilig else (' ' + ', '.join(namen) + ' ')
    return s[:m.start()] + 'import {' + liste + "} from '@/components/vorlage/Ratgeber'" + s[m.end():]


kaesten = kreise = 0
dateien = []
for f in sorted(glob.glob('app/24h-pflege-*/page.tsx')):
    s = open(f, encoding='utf-8').read()
    neu = s
    for m in list(KASTEN.finditer(s)):
        src = re.search(r'src=((?:ort|land)-[a-z0-9-]+)', m.group(1))
        assert src, f'kein src in {f}'
        rest = re.sub(r'\s+', ' ', m.group(1))
        assert rest.count('href:') == 2, f'unerwarteter Kasteninhalt in {f}'
        neu = neu.replace(m.group(0), f'<RechnerKasten src="{src.group(1)}" />')
        kaesten += 1
    if KREIS.search(neu):
        slug = f.split('/')[1].replace('24h-pflege-', '')
        neu, n = KREIS.subn(f'<RechnerKasten src="ort-{slug}" />', neu)
        kreise += n
    if neu != s:
        neu = importe_anpassen(neu)
        dateien.append(f)
        if not NUR_ZAEHLEN:
            open(f, 'w', encoding='utf-8').write(neu)
print(f'{kaesten} Kästen, {kreise} Kreis-Verweise, {len(dateien)} Dateien')
