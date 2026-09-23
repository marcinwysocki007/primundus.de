#!/usr/bin/env python3
"""Standard-Ortsseiten auf die Vorlage OrtSeite umstellen — Daten statt Kopien (23.09.2026).

MARTIN, nach dem Blick auf Worms (Desktop und Handy):
    „Der Text ist sowas von nicht gut geschrieben, unmenschlich. Nicht der Inhalt, den ich
     erwarte: Wie laeuft das ab? Wie funktioniert das? Was ist 24-Stunden-Pflege? Unser
     Testsiegel ist nirgendwo zu sehen. Unsere Vorteile da unten stimmen nicht. Kein roter Faden."

WAS DIESER KONVERTER TUT
    Jede Standard-Ortsseite (erkennbar an <Abschnitt id="was-ist-24-stunden">, genau 187 Dateien;
    Laender-, Kreis-, Themenseiten, Muenchen und Hamburg bleiben unberuehrt) wird zu:

        Kommentare (woertlich)  +  export const metadata (woertlich, check-snippets liest sie hier)
        +  const FRAGEN = [...] (woertlich)  +  const ORT: OrtDaten = {...}
        +  export default function Page() { return <OrtSeite daten={ORT} /> }

    Der feste Text steht danach EINMAL in components/vorlage/OrtSeite.tsx und den Bausteinen in
    components/orte/. Was je Ort anders ist — Einleitung, Ortsprosa, Kreisname, Einzugsgebiet,
    Stimmen-IDs, Fragen, Bundesland, Datum — bleibt in der page.tsx als lesbares JSX.

VERLUSTFREIHEIT WIRD GEPRUEFT, NICHT GEHOFFT
    Fuer jede Seite sammelt der Konverter alle Fragmente, die er aus der alten Datei uebernimmt
    (jede Kommentarzeile, den metadata-Block, jede FAQ-Zeile, die Einleitung, jeden Absatz der
    Ortsprosa, den Einzugsgebiet-Text, die Stimmen-IDs, das Datum). Jedes Fragment muss
    woertlich in der neuen Datei stehen — sonst wird die Datei NICHT geschrieben und der Lauf
    meldet die Seite. Bewusst NICHT uebernommen (Schablone auf allen Seiten, in der Vorlage
    besser): der Kreis-Absatz („Die Anreise dauert ueberall gleich lang, der Preis ist
    derselbe"), die Abschnitte was-ist-24-stunden, polnische-betreuungskraefte, so-arbeiten-wir,
    die Kostentabellen, OrtWerkzeuge.

    Der §-7a-Absatz, mit dem fast alle Ortsprosa-Abschnitte enden, wird als beratungsabsatz
    abgetrennt (Abschnitt „Beratung" der Vorlage sagt dasselbe) — er geht nicht verloren, er
    wird nur nicht mehr gerendert, bis Martin entscheidet.

Aufruf:  python3 scripts/codemods/38-ortsseiten-als-daten.py --probe worms
         python3 scripts/codemods/38-ortsseiten-als-daten.py --liste dortmund,bochum
         python3 scripts/codemods/38-ortsseiten-als-daten.py --alle
"""
import json
import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'
HAND_JSON = Path('/Users/martinwysocki/SA-Zugang_Neu/seo-reports/ortsseiten-hand.json')
STANDARD_TITEL = '24-Stunden-Pflege und Betreuung in {ort}'


class Verlust(Exception):
    pass


def abschnitt(quelle: str, id_praefix: str):
    """Liefert (titel, innerer Text) des ersten <Abschnitt id="id_praefix…">, einrueckungsverankert."""
    m = re.search(r'^([ \t]*)<Abschnitt id="' + re.escape(id_praefix) + r'[^"]*" titel="([^"]*)">\n(.*?)\n\1</Abschnitt>', quelle, re.M | re.S)
    if not m:
        return None
    return m.group(2), m.group(3)


def texte(inner: str):
    """Alle <Text>…</Text>-Absaetze eines Abschnitts, in Reihenfolge, als Rohtext (mit JSX)."""
    return [t.strip() for t in re.findall(r'<Text>(.*?)</Text>', inner, re.S)]


def umwandeln(datei: Path, hand: set):
    q = datei.read_text(encoding='utf-8')
    if '<Abschnitt id="was-ist-24-stunden"' not in q:
        return None  # keine Standardseite
    slug = datei.parent.name.replace('24h-pflege-', '')
    fragmente = []

    # Kommentare zwischen den Imports und dem metadata-Export — woertlich
    kopf_ende = q.index('export const metadata')
    kommentare = [z for z in q[:kopf_ende].splitlines() if z.startswith('//')]
    fragmente += kommentare

    # metadata-Block woertlich
    m = re.search(r'^export const metadata: Metadata = \{\n.*?\n\}\n', q, re.M | re.S)
    if not m:
        raise Verlust('metadata nicht gefunden')
    metadata = m.group(0)
    fragmente.append(metadata)

    # FAQ woertlich (Zeile fuer Zeile)
    m = re.search(r'^const FRAGEN = \[\n(.*?)\n\]\n', q, re.M | re.S)
    if not m:
        raise Verlust('FRAGEN nicht gefunden')
    # Zwei Schablonen-Fragen fallen (auf allen Seiten wortgleich, 23.09.): „Unterschied zum
    # ambulanten Pflegedienst" steht als Gegenueberstellung in Abschnitt 1; „rechtssicher" steht im
    # USP-Abschnitt — und die Antwort trug „null Rechtsprobleme in 60.000+ Betreuungen", eine Zahl,
    # die niemand belegt hat. Sie werden nicht uebernommen und stehen deshalb nicht in der Fragmentliste.
    SCHABLONE = ('Was ist der Unterschied zu einem ambulanten Pflegedienst?', 'rechtssicher?')
    fragen_zeilen = [z for z in m.group(1).splitlines() if z.strip() and not any(sch in z for sch in SCHABLONE)]
    fragen_block = 'const FRAGEN = [\n' + '\n'.join(fragen_zeilen) + '\n]\n'
    fragmente += fragen_zeilen

    # Kopf-Angaben
    ort = re.search(r'augenbraue="24-Stunden-Pflege in ([^"]+)"', q)
    if not ort:
        raise Verlust('Ort nicht in der Augenbraue')
    ort = ort.group(1)
    titel = re.search(r'^\s+titel="([^"]+)"\n', q, re.M).group(1)
    einl = re.search(r'^\s+einleitung=\{<>(.*?)</>\}\n', q, re.M)
    if not einl:
        raise Verlust('einleitung nicht gefunden')
    einleitung = einl.group(1)
    fragmente.append(einleitung)
    aktualisiert = re.search(r'aktualisiert="([^"]+)"', q).group(1)
    lesezeit = re.search(r'lesezeit="([^"]+)"', q)
    lesezeit = lesezeit.group(1) if lesezeit else None
    fragmente.append(aktualisiert)

    # Bundesland: aus dem alten OrtWerkzeuge-Prop (ORTE_LAGE hat fuer fuenf Orte land: '')
    land = re.search(r"<OrtWerkzeuge[^>]*land=\{'([^']*)'\}", q)
    if not land:
        raise Verlust('land nicht gefunden (OrtWerkzeuge)')
    land = land.group(1)

    # Kreis: nur der Name aus der Ueberschrift, der Absatz ist Schablone
    kreis = None
    k = abschnitt(q, '24-stunden-pflege-')
    if k:
        km = re.match(r'24-Stunden-Pflege (?:im|in|am) (.+)$', k[0])
        kreis = km.group(1) if km else k[0]

    # Ortsprosa — jeder Absatz woertlich; der §-7a-Absatz am Ende abgetrennt
    v = abschnitt(q, 'was-die-pflege-zu')
    if not v:
        raise Verlust('was-die-pflege-zu nicht gefunden')
    absaetze = texte(v[1])
    if not absaetze:
        raise Verlust('Ortsprosa ohne Absaetze')
    beratung = None
    if 'Pflegestützpunkt' in absaetze[-1] and ('7a' in absaetze[-1] or 'unabhängig' in absaetze[-1]):
        beratung = absaetze.pop()
    fragmente += absaetze
    if beratung:
        fragmente.append(beratung)

    # Einzugsgebiet: der eine Textsatz (die Nachbarorte kommen aus lib/staedte)
    einzug = None
    e = abschnitt(q, 'einzugsgebiet-')
    if e:
        et = texte(e[1])
        if et:
            einzug = et[0]
            fragmente.append(einzug)

    # Stimmen-IDs
    stimmen = None
    sm = re.search(r"<OrtStimmen[\s\S]*?stimmen=\{DIREKT_ERHALTEN\.filter\(\(b\) => \[([^\]]*)\]\.includes\(b\.id\)\)\}", q)
    if sm:
        stimmen = [s.strip().strip("'") for s in sm.group(1).split(',') if s.strip()]
        fragmente += stimmen

    art = 'hand' if slug in hand else 'erzeugt'

    def jsx(s: str) -> str:
        return f'<>{s}</>'

    def js_str(s: str) -> str:
        return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

    zeilen = []
    zeilen.append("import type { Metadata } from 'next'")
    zeilen.append("import { OrtSeite } from '@/components/vorlage/OrtSeite'")
    zeilen.append("import type { OrtDaten } from '@/lib/orte-daten'")
    zeilen.append('')
    zeilen.append('// Seit 23.09.2026 traegt diese Datei nur noch, was in ' + ort + ' anders ist; der feste Text steht')
    zeilen.append('// in components/vorlage/OrtSeite.tsx (Umstellung: scripts/codemods/38-ortsseiten-als-daten.py).')
    if kommentare:
        zeilen.append('')
        zeilen += kommentare
    zeilen.append(metadata.rstrip('\n'))
    zeilen.append('')
    zeilen.append(fragen_block.rstrip('\n'))
    zeilen.append('')
    zeilen.append('const ORT: OrtDaten = {')
    zeilen.append(f"  slug: {js_str(slug)},")
    zeilen.append(f"  ort: {js_str(ort)},")
    zeilen.append(f"  land: {js_str(land)},")
    zeilen.append(f"  art: {js_str(art)},")
    zeilen.append(f"  aktualisiert: {js_str(aktualisiert)},")
    if lesezeit:
        zeilen.append(f"  lesezeit: {js_str(lesezeit)},")
    if titel != STANDARD_TITEL.format(ort=ort):
        zeilen.append(f"  titel: {js_str(titel)},")
    zeilen.append(f"  einleitung: {jsx(einleitung)},")
    if kreis:
        zeilen.append(f"  kreis: {js_str(kreis)},")
    zeilen.append('  vorOrt: {')
    zeilen.append('    inhalt: (')
    zeilen.append('      <>')
    for a in absaetze:
        zeilen.append(f'        <Text>{a}</Text>')
    zeilen.append('      </>')
    zeilen.append('    ),')
    if beratung:
        zeilen.append(f'    beratungsabsatz: <Text>{beratung}</Text>,')
    zeilen.append('  },')
    if einzug:
        zeilen.append(f"  einzugsgebiet: {js_str(einzug)},")
    if stimmen:
        zeilen.append('  stimmen: [' + ', '.join(js_str(s) for s in stimmen) + '],')
    zeilen.append('  fragen: FRAGEN,')
    zeilen.append('}')
    zeilen.append('')
    zeilen.append('export default function Page() {')
    zeilen.append('  return <OrtSeite daten={ORT} />')
    zeilen.append('}')
    neu = '\n'.join(zeilen) + '\n'
    if '<Text>' in neu:
        neu = neu.replace("import type { OrtDaten } from '@/lib/orte-daten'", "import type { OrtDaten } from '@/lib/orte-daten'\nimport { Text } from '@/components/vorlage/Ratgeber'")

    fehlend = [f for f in fragmente if f not in neu]
    if fehlend:
        raise Verlust(f'{len(fehlend)} Fragmente fehlen, z. B.: {fehlend[0][:90]!r}')
    return neu, len(fragmente)


def main():
    args = sys.argv[1:]
    hand = set(json.load(open(HAND_JSON))['hand']) if HAND_JSON.exists() else set()
    if '--probe' in args:
        ziele = [args[args.index('--probe') + 1]]
    elif '--liste' in args:
        ziele = args[args.index('--liste') + 1].split(',')
    elif '--alle' in args:
        ziele = None
    else:
        print(__doc__); return
    dateien = sorted(APP.glob('24h-pflege-*/page.tsx'))
    if ziele is not None:
        dateien = [APP / f'24h-pflege-{z}' / 'page.tsx' for z in ziele]
    ok = 0; uebersprungen = 0; fehler = []
    for datei in dateien:
        try:
            r = umwandeln(datei, hand)
        except Verlust as v:
            fehler.append(f'{datei.parent.name}: {v}'); continue
        if r is None:
            uebersprungen += 1; continue
        neu, n = r
        datei.write_text(neu, encoding='utf-8'); ok += 1
        print(f'  ✓ {datei.parent.name}: {n} Fragmente geprüft')
    print(f'umgestellt {ok} · übersprungen (keine Standardseite) {uebersprungen} · NICHT geschrieben {len(fehler)}')
    for f in fehler:
        print('  ✗ ' + f)


if __name__ == '__main__':
    main()
