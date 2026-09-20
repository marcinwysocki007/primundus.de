#!/usr/bin/env python3
"""Ortsseiten: Ansprechpartnerin in den Kopf, neues Snippet (20.09.2026).

1) ANSPRECHPARTNERIN IM KOPF.
   Martin: „ich will Marta zentral, oben im Hero, mit Infos, Kontakt und dann der richtige Inhalt
   daneben, darüber, damit das … bei den regionalen Seiten, die uns so super wichtig sind, immer
   passt." Grund: Für „24 stunden pflege <ort>" stehen bis zu sechs Kartenblock-Einträge mit
   Adresse, Nummer und Sternen über dem ersten organischen Treffer; die organisch davor liegenden
   Seiten (promedica24, pflegehelden, sencurina) haben alle einen Menschen mit Namen und Nummer.
   Wir hatten das nur im Schlussband unter dem FAQ.

   Es ist dieselbe `Ansprechpartnerin` aus components/ArticleCTA wie im Schlussband und in den
   Kundenmails — keine zweite Kontaktkarte (Regel „Kontakt = MartaBand-Standard"). Neu sind nur
   der Ortsbezug in Überschrift und Alt-Text und die sichtbare Rufnummer („mit der entsprechenden
   Telefonnummer"). Auf den Ratgeberseiten bleibt der Kopf ohne Person (Martin 18.09.).

   Alt-Text je Ort, aber EINE Bilddatei: Das Attribut hängt am <img>, nicht an der Datei. Dieselbe
   Datei 207-mal unter Stadtnamen zu kopieren brächte nichts — Google führt bytegleiche Bilder
   zusammen — und wäre ein Türseiten-Signal bei gleichzeitig 207-fachem Gewicht.

2) NEUES SNIPPET (Martins Entwurf vom 20.09., ein Wort geändert).
   Titel: „24-Stunden-Pflege in <Ort> | 6× Testsieger"
   Beschreibung: Nutzen (Entlastung für Angehörige), Unterscheidungsmerkmal (Kräfte vorab sehen),
   Handlung (Preis sofort online) und Zusage (Bestpreisgarantie).
   Geändert gegenüber Martins Fassung: „Liebevolle Betreuung zuhause durch geprüfte, verfügbare
   Betreuungskräfte" → „Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen".
   „Liebevoll" schreibt pflegehelden wörtlich als Überschrift auf seiner München-Seite; es besteht
   Martins eigenen Test nicht („könnte es kein Wettbewerber genauso sagen?"). „die Sie vorab sehen"
   ist überprüfbar und uns eigen. „zuhause" → „zu Hause" wie im übrigen Bestand.

3) Nebenbei: ein Titel hieß „24-Stunden-Pflege in in <Ort> und im Landkreis".
"""
from __future__ import annotations

import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parents[2]

BESCHREIBUNG = (
    'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für '
    'Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.'
)


def main() -> int:
    trocken = '--schreiben' not in sys.argv
    zahl = {'kopf': 0, 'titel': 0, 'beschreibung': 0, 'import': 0}
    zu_lang: list[tuple[int, str]] = []

    for pfad in sorted((WURZEL / 'app').glob('24h-pflege-*/page.tsx')):
        text = pfad.read_text(encoding='utf-8')
        ort_treffer = re.search(r"<OrtWerkzeuge ort=\{'([^']+)'\}", text)
        if not ort_treffer or 'RatgeberKopf' not in text:
            continue
        ort = ort_treffer.group(1)
        neu = text

        # --- Import ---
        if not re.search(r"import \{[^}]*Ansprechpartnerin", neu):
            vorher = neu
            neu = neu.replace(
                "import { KontaktBand } from '@/components/ArticleCTA'",
                "import { Ansprechpartnerin, KontaktBand } from '@/components/ArticleCTA'", 1)
            if neu != vorher:
                zahl['import'] += 1

        # --- Person in den Kopf, direkt nach blickTitel ---
        if 'person={<Ansprechpartnerin' not in neu:
            vorher = neu
            neu = re.sub(
                r'(\n(\s*)blickTitel="[^"]*")',
                lambda m: m.group(1) + f'\n{m.group(2)}person={{<Ansprechpartnerin karte ort="{ort}" '
                                       f'titel="Ihre Ansprechpartnerin für {ort}" />}}',
                neu, count=1)
            if neu != vorher:
                zahl['kopf'] += 1

        # --- Titel ---
        m = re.search(r"^  title: '(.+?)',$", neu, re.M)
        if m and '6× Testsieger' not in m.group(1):
            ort_teil = m.group(1).split(':')[0].split(' — ')[0].strip()
            ort_teil = ort_teil.replace('24-Stunden-Pflege in in ', '24-Stunden-Pflege in ')
            titel = f'{ort_teil} | 6× Testsieger'
            # Zu lang? Dann fällt der angehängte Kreis weg — gesucht wird die Stadt, und der Kreis
            # steht weiter in der Überschrift und im Einzugsgebiet auf der Seite selbst.
            if len(titel) > 62 and ' & ' in ort_teil:
                titel = f"{ort_teil.split(' & ')[0].strip()} | 6× Testsieger"
            if len(titel) > 62:
                zu_lang.append((len(titel), titel))
            neu = neu[:m.start(1)] + titel.replace("'", "\\'") + neu[m.end(1):]
            zahl['titel'] += 1

        # --- Beschreibung (nur die Seiten-Beschreibung, nicht openGraph) ---
        m = re.search(r"^  description: '(.+?)',$", neu, re.M)
        if m and m.group(1) != BESCHREIBUNG:
            neu = neu[:m.start(1)] + BESCHREIBUNG + neu[m.end(1):]
            zahl['beschreibung'] += 1

        if neu != text and not trocken:
            pfad.write_text(neu, encoding='utf-8')

    for name, anzahl in zahl.items():
        print(f'{name}: {anzahl}')
    print(f'Beschreibung: {len(BESCHREIBUNG)} Zeichen')
    if zu_lang:
        print(f'Titel über 62 Zeichen: {len(zu_lang)}')
        for laenge, titel in sorted(zu_lang, reverse=True)[:8]:
            print(f'   {laenge}  {titel}')
    print('Probelauf — mit --schreiben wird geschrieben.' if trocken else 'Geschrieben.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
