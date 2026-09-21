#!/usr/bin/env python3
"""Snippets der 207 Ortsseiten nach Martins Muster (21.09.2026).

Vorher stand auf ALLEN 207 Ortsseiten dieselbe Beschreibung, Wort fuer Wort, ohne Ortsnamen:
„Betreuung zu Hause durch gepruefte Kraefte, die Sie vorab sehen – und Entlastung fuer
Angehoerige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie." Zwei Fehler: eine
Dublette auf 207 Seiten, und sie wurde bei 964 px abgeschnitten (Grenze ca. 920), sodass
„Bestpreisgarantie" halb wegfiel.

Martins Muster (21.09., fuer die Startseite vorgegeben und auf die Ortsseiten uebertragen):

    Titel:  24-Stunden-Pflege zuhause | 6x Testsieger | Primundus
    Meta:   Liebevolle Betreuung im vertrauten Zuhause und Entlastung fuer Angehoerige.
            Gepruefte, verfuegbare Betreuungskraefte & Preis sofort sehen – mit
            Bestpreisgarantie.

Geaendert wurde daran genau eines: der Ortsname kommt hinein. Das ist die Mindestanpassung,
damit aus 207 gleichen Beschreibungen 207 eigene werden und Google den gesuchten Ort fettet.

KEIN Preis im Snippet. Das Muster sagt „Preis sofort sehen" — der Klick fuehrt zum Preis, die
Zahl steht nicht im Suchergebnis. Ein erster Entwurf von mir hatte „ab 2.150 €" in 199 Titel
geschrieben; das war nicht Martins Muster, sondern meins, und „ab 2.150 €" ist ausserdem der
guenstigste moegliche Preis — als Titel auf 199 Seiten eine Lockangabe. Zurueckgenommen.

Die Texte in 26-daten-orts-snippets.json sind nicht geschaetzt, sondern einzeln in Googles
Darstellungsgroessen ausgemessen (Arial, Titel 20px/580px, Beschreibung 14px/920px) und
gestaffelt: Was nicht passt, faellt auf die naechstkuerzere Stufe. Gekuerzt wird von hinten,
damit „Liebevolle Betreuung" und „Bestpreisgarantie" auf JEDER Seite stehen bleiben.
Ergebnis: kein einziges Snippet wird abgeschnitten.

Fuenf Ortsnamen brauchen „im" statt „in" (Hochtaunuskreis, Kreis Alzey-Worms,
Rhein-Pfalz-Kreis, Rheinisch-Bergischer Kreis → gebeugt, Saarland). Bisher stand dort
„in Rheinisch-Bergischer Kreis" — grammatisch falsch, und zwar live.
"""
from __future__ import annotations

import json
import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]
DATEN = pathlib.Path(__file__).with_name('26-daten-orts-snippets.json')


def js(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    daten = json.loads(DATEN.read_text(encoding='utf-8'))
    geaendert, fehlt, unveraendert = 0, [], 0

    for slug, neu in sorted(daten.items()):
        pfad = WURZEL / 'app' / slug / 'page.tsx'
        if not pfad.exists():
            fehlt.append(slug)
            continue
        text = alt = pfad.read_text(encoding='utf-8')

        # Der Text steht mal in derselben Zeile, mal in der naechsten — beides treffen.
        # Genau das hatte der erste Lauf uebersehen: sechs Ortsseiten behielten ihre alte
        # Beschreibung, weil dort „description:" allein auf der Zeile steht.
        def ersetze(feld: str, wert: str, einzug: str, s: str) -> str:
            muster = rf"(\n{einzug}{feld}:)\s*'(?:[^'\\]|\\.)*'"
            return re.sub(muster, lambda m: f"{m.group(1)} '{js(wert)}'", s, count=1)

        for einzug in ('  ', '    '):          # metadata, dann openGraph
            text = ersetze('title', neu['titel'], einzug, text)
            text = ersetze('description', neu['beschreibung'], einzug, text)

        if text == alt:
            unveraendert += 1
            continue
        geaendert += 1
        if not trocken:
            pfad.write_text(text, encoding='utf-8')

    print(f'Ortsseiten-Snippets neu: {geaendert}')
    if unveraendert:
        print(f'  unverändert (Muster nicht gefunden): {unveraendert}')
    if fehlt:
        print(f'  Datei fehlt: {len(fehlt)} → {fehlt[:5]}')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
