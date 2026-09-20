#!/usr/bin/env python3
"""FAQ der Ortsseiten: eine Quelle statt zwei, und die doppelte Wohnungsfrage raus (20.09.2026).

BEFUND 1 — Markup und sichtbarer Text driften auseinander.
Jede Ortsseite pflegte die Fragen zweimal: einmal als FAQPage-Markup für Google, einmal als
`FRAGEN` für die Seite. Am 20.09. kamen Fragen nur in `FRAGEN` dazu, nicht ins Markup — auf
206 Seiten stimmten die Anzahlen nicht mehr überein. Google verlangt, dass ausgezeichnete
Fragen auch auf der Seite stehen; umgekehrt verschenkt jede nur sichtbare Frage das Markup.
Ab jetzt entsteht das Markup aus `FRAGEN`; eine Drift ist damit ausgeschlossen. Nebeneffekt:
je Seite rund 100 Zeilen doppelter Text weniger im Quelltext.

BEFUND 2 — dieselbe Frage zweimal.
155 Seiten fragten „Passt eine Betreuungskraft überhaupt in eine Wohnung in <Ort>?" und
„Ist in einer Wohnung in <Ort> Platz für eine Betreuungskraft?" — beide mit denselben
Zensus-Zahlen. Die ältere fliegt raus: Die neuere sagt zusätzlich, was die Betreuungskraft
braucht (eigenes abschließbares Zimmer, Bad geteilt), welches Zimmer es meist wird und wie
es in Ein- und Zweifamilienhäusern aussieht. Vor dem Löschen wird geprüft, dass jede Zahl
der alten Antwort anderswo auf derselben Seite steht — sonst bleibt die Frage stehen.
"""
from __future__ import annotations

import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

ALT = re.compile(r"^  \{ q: 'Passt eine Betreuungskraft[^']*', a: '[^']*' \},\n", re.M)
NEU = re.compile(r"^  \{ q: 'Ist in einer Wohnung[^']*', a: '[^']*' \},\n", re.M)
ZAHL = re.compile(r'\d+,\d+\s*(?:Prozent|%)')

FAQ_KOPF = "    '@type': 'FAQPage',\n    mainEntity: [\n"
FAQ_NEU = (
    "    '@type': 'FAQPage',\n"
    "    // Aus FRAGEN erzeugt — ausgezeichnet wird genau das, was auf der Seite steht.\n"
    "    mainEntity: FRAGEN.map((f) => ({\n"
    "      '@type': 'Question',\n"
    "      name: f.q,\n"
    "      acceptedAnswer: { '@type': 'Answer', text: f.a },\n"
    "    })),\n"
)


def block_fragen(text: str) -> tuple[int, int] | None:
    """Grenzen von `const FRAGEN = [ … ]` — Ende ist die Zeile, die nur `]` enthält."""
    start = text.find('\nconst FRAGEN = [\n')
    if start < 0:
        return None
    ende = text.find('\n]\n', start)
    return (start + 1, ende + 3) if ende > 0 else None


def faq_ersetzen(text: str) -> str | None:
    """mainEntity-Liste durch die Ableitung aus FRAGEN ersetzen."""
    i = text.find(FAQ_KOPF)
    if i < 0:
        return None
    ende = text.find('\n    ],\n', i)
    if ende < 0:
        return None
    return text[:i] + FAQ_NEU + text[ende + len('\n    ],\n'):]


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    entfernt = verschoben = uebersprungen = 0
    behalten: list[str] = []

    for pfad in sorted((WURZEL / 'app').glob('24h-pflege-*/page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        grenzen = block_fragen(text)
        if not grenzen or FAQ_KOPF not in text or '\nconst schemaMarkup = [\n' not in text:
            continue

        # 1) doppelte Wohnungsfrage — nur streichen, wenn keine Zahl dadurch verschwindet
        alt, neu = ALT.search(text), NEU.search(text)
        if alt and neu:
            rest = text.replace(alt.group(0), '')
            verloren = [z for z in set(ZAHL.findall(alt.group(0))) if z not in rest]
            if verloren:
                behalten.append(f'{pfad.parent.name}: {", ".join(sorted(verloren))}')
                uebersprungen += 1
            else:
                text = rest
                entfernt += 1
                grenzen = block_fragen(text)
                if not grenzen:
                    continue

        # 2) FRAGEN vor schemaMarkup ziehen, damit das Markup darauf zugreifen kann
        a, e = grenzen
        fragen = text[a:e]
        text = text[:a] + text[e:]
        anker = text.find('\nconst schemaMarkup = [\n') + 1
        text = text[:anker] + fragen + '\n' + text[anker:]

        # 3) Markup aus FRAGEN ableiten
        ersetzt = faq_ersetzen(text)
        if ersetzt is None:
            continue
        verschoben += 1
        if not trocken:
            pfad.write_text(ersetzt, encoding='utf-8')

    print(f'doppelte Wohnungsfrage entfernt: {entfernt}')
    print(f'stehen gelassen (Zahl ginge verloren): {uebersprungen}')
    for z in behalten[:10]:
        print(f'   {z}')
    print(f'FAQ-Markup aus FRAGEN abgeleitet: {verschoben} Seiten')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
