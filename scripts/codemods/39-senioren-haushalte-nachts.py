#!/usr/bin/env python3
"""„Nachts ist niemand da“, zweite Runde: dieselbe Fehldeutung in drei weiteren Wortlauten (02.10.2026).

Codemod 24 hat am 21.09. auf 152 Ortsseiten den Satz „In diesen Haushalten ist nachts niemand da, der
einspringen könnte“ korrigiert. Am 02.10. stand auf /24h-pflege-wittmund derselbe Fehler in anderem
Wortlaut. Der Wächter in check-fakten.mjs suchte nur „ist/lebt/wohnt (nachts) niemand da … einspringen“
und fand ihn deshalb nicht. Auf allen Ortsseiten gesucht: drei Wortlaute, 30 Seiten.

  A  „Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt.“          24 Seiten
  B  „… wer schon 65 ist — dort ist niemand im Haus, der nachts einspringen könnte.“   5 Seiten
  C  „In gut jedem vierten Haushalt der Stadt ist also niemand da, …“                   Memmingen

Die Zahl davor ist jedes Mal der Zensus-Haushaltstyp HHTYP_SENIOR_HH__1, „Haushalte mit ausschließlich
Seniorinnen/Senioren“ (65 Jahre und älter). Das Ehepaar mit 70 und 72 ist so ein Haushalt, und dort ist
nachts jemand da. Richtig ist: Es lebt niemand UNTER 65 im Haushalt. Neuer Wortlaut = der von Codemod 24,
seit 21.09. auf 152 Seiten live.

Nicht angefasst: „Alleinlebend heißt im Pflegefall: Es ist niemand da, der es mitbekommt.“ Davor steht
dort der Anteil der Einpersonenhaushalte, und wer allein lebt, ist nachts allein.

Sichtbares Datum der geänderten Seiten: 2. Oktober 2026.

Lauf: python3 scripts/codemods/39-senioren-haushalte-nachts.py [--schreiben]
"""
from __future__ import annotations

import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

HILFE = 'Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist.'

ERSETZUNGEN = [
    ('A',
     'Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt.',
     f'In diesen Haushalten lebt niemand unter 65, der einspringen könnte. {HILFE}'),
    ('B',
     'dort ist niemand im Haus, der nachts einspringen könnte.',
     f'dort lebt niemand unter 65, der nachts einspringen könnte. {HILFE}'),
    ('C',
     'In gut jedem vierten Haushalt der Stadt ist also niemand da, der nachts einspringen könnte, wenn etwas passiert.',
     'In gut jedem vierten Haushalt der Stadt lebt also niemand unter 65, der nachts einspringen könnte, wenn '
     f'etwas passiert. {HILFE}'),
]

# Nur ersetzen, wenn davor wirklich der Senioren-Anteil steht („ab 65“ / „schon 65“), nie beim Einpersonen-Satz.
KONTEXT = re.compile(r'(?:ab|schon)\s+65\b')

DATUM_ORTSEITE = re.compile(r"(\n\s*aktualisiert: )'[^']*'")
DATUM_KOPF = re.compile(r'(\baktualisiert=)"[^"]*"')
NEUES_DATUM = '2. Oktober 2026'


def main() -> int:
    schreiben = '--schreiben' in sys.argv
    geaendert: dict[str, list[str]] = {}

    for pfad in sorted((WURZEL / 'app').glob('24h-pflege-*/page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        neu = text
        arten = []
        for art, alt, ersatz in ERSETZUNGEN:
            start = 0
            while (i := neu.find(alt, start)) != -1:
                if not KONTEXT.search(neu[max(0, i - 250):i]):
                    raise SystemExit(f'{pfad.parent.name}: Wortlaut {art} ohne Senioren-Anteil davor, bitte von Hand prüfen')
                neu = neu[:i] + ersatz + neu[i + len(alt):]
                start = i + len(ersatz)
                arten.append(art)
        if not arten:
            continue
        neu, n1 = DATUM_ORTSEITE.subn(rf"\1'{NEUES_DATUM}'", neu, count=1)
        if not n1:
            neu, n2 = DATUM_KOPF.subn(rf'\1"{NEUES_DATUM}"', neu, count=1)
            if not n2:
                raise SystemExit(f'{pfad.parent.name}: kein Datum gefunden')
        geaendert[pfad.parent.name] = arten
        if schreiben:
            pfad.write_text(neu, encoding='utf-8')

    je_art = {art: sum(a.count(art) for a in geaendert.values()) for art, _, _ in ERSETZUNGEN}
    print(f'Senioren-Haushalte, zweite Runde: {len(geaendert)} Seiten, Stellen je Wortlaut {je_art}')
    for slug, arten in geaendert.items():
        print(f'  {slug}: {"".join(arten)}')
    print('Geschrieben.' if schreiben else 'Probelauf — mit --schreiben wird geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
