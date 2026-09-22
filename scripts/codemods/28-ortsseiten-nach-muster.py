#!/usr/bin/env python3
"""Die restlichen Ortsseiten auf das Muenchener Muster heben (22.09.2026).

Gemessen am 22.09. mit seo-reports/aehnlichkeit.py:

    Muenchen  <-> Hamburg    (beide neu)   56,3 %
    Muenchen  <-> Koeln      (neu <-> alt) 21,5 %
    Bochum    <-> Koeln      (beide alt)   82,6 %
    Friedrichshafen <-> Cottbus (alt)      83,0 %
    Median ueber 40 Zufallspaare:          69,4 %   (Martins Ziel: max 60 %)

Das alte Muster ist zu 83 Prozent dieselbe Seite mit ausgetauschtem Ortsnamen. Google fasst
solche Seiten zusammen, statt sie einzeln zu ranken — und die 207 Ortsseiten sind 28 Prozent
unserer Impressionen auf Position 16,9, also der groesste Block kurz vor Seite 1.

WAS DIESER LAUF MACHT

Der Rumpf wird neu zusammengesetzt statt in sich umgestellt — Bloecke verschieben heisst bei
JSX, Klammern zu zaehlen, und das geht auf 192 Seiten irgendwann schief. Behalten wird alles,
was ortseigen ist; ersetzt wird nur, was auf allen Seiten woertlich gleich stand.

  BEHALTEN (ortseigen, oft handrecherchiert — das Beste auf diesen Seiten):
    * der Kosten-Abschnitt mit beiden Tabellen und dem Rechner-Kasten
    * der Landeskunde-Abschnitt ("Was die Pflege zu Hause in X ausmacht") — auf vielen
      Seiten echte Recherche: Zechensiedlungen, Hoehenmeter, Altersstruktur der Kreise
    * Einzugsgebiet samt NearbyCities
    * OrtWerkzeuge mit den ortseigenen Altbau- und Mietwerten
    * OrtStimmen mit den Bewertungen aus genau diesem Ort
    * die haeufigen Fragen

  ERSETZT durch Bausteine, die ihre Zahlen je Ort selbst aus dem Zensus holen:
    * "Was 24-Stunden-Betreuung in X bedeutet"  ->  OrtWasBedeutet
    * "So arbeiten wir" (vier Punkte)           ->  OrtWarumPrimundus (enthaelt alle vier
                                                    und dazu Anstellung, Testsieger, Marta)

  NEU DAZU (je Ort verschiedene Zahlen):
    OrtWannSinnvoll (Senioren-Haushalte), OrtWohnen (Wohnungsbestand), OrtAufgaben,
    OrtAblauf, OrtPassendeKraft, OrtErsteTage (Bewertungen aus dem Ort), OrtBeratung
    (Kreis/kreisfrei + Landesportal)

  ENTFAELLT:
    * "Polnische Betreuungskraefte in X" — stand woertlich gleich auf allen 192 Seiten und
      sagt dasselbe wie OrtWasBedeutet, nur laenger. Der Kasten "Angestellt statt vermittelt"
      ist inhaltlich in OrtWasBedeutet und OrtWarumPrimundus aufgehoben, der Preis steht in
      der Kostentabelle darueber, der Verweis auf /pflegekraft-aus-polen in der MehrDazu-Liste
      von OrtWasBedeutet. Es geht also kein Argument und kein Link verloren — Muenchen und
      Hamburg haben diesen Abschnitt aus demselben Grund nicht.

Kein interner Link geht verloren: OrtWasBedeutet hat am 22.09. den vierten Verweis
(/pflegedienst-oder-24h-kraft) bekommen, den die alten Seiten in ihrer eigenen Liste hatten.

Aufruf:
    python3 scripts/codemods/28-ortsseiten-nach-muster.py --probe dortmund   (eine Seite)
    python3 scripts/codemods/28-ortsseiten-nach-muster.py                    (alle)
"""
import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'
SCHON_NEU = {'muenchen', 'hamburg'}

IMPORTE = """import { OrtBeratung } from '@/components/orte/OrtBeratung'
import { OrtErsteTage } from '@/components/orte/OrtErsteTage'
import { OrtAblauf, OrtAufgaben, OrtPassendeKraft, OrtWarumPrimundus, OrtWasBedeutet } from '@/components/orte/OrtGrundlagen'
import { OrtWannSinnvoll } from '@/components/orte/OrtWannSinnvoll'
import { OrtWohnen } from '@/components/orte/OrtWohnen'
"""


# Berlin, Bremen und Hamburg sind Stadtstaaten — sie haben eine Ortsseite wie jede andere
# Stadt und gehoeren NICHT in diese Liste. Beim ersten Lauf standen sie faelschlich drin.
LAENDER = {
    'baden-wuerttemberg', 'bayern', 'brandenburg', 'hessen',
    'mecklenburg-vorpommern', 'niedersachsen', 'nordrhein-westfalen', 'rheinland-pfalz',
    'saarland', 'sachsen', 'sachsen-anhalt', 'schleswig-holstein', 'thueringen',
}
# Keine Ortsseite, faengt sich nur im Dateimuster 24h-pflege-*
KEINE_ORTSSEITE = {'anbieter-vergleich'}

# Was ersetzt wird (die Bausteine sagen dasselbe, nur je Ort verschieden) …
ERSETZT = ('was-ist-24-stunden', 'was-ist-24h-pflege', 'so-arbeiten-wir')
# … und was ersatzlos geht, weil es woertlich auf allen Seiten stand.
ENTFAELLT = ('polnische-betreuungskraefte-in',)
# Feste Plaetze in der neuen Reihenfolge; alles andere kommt als „eigenes" dazu.
PLAETZE = (
    ('kosten', ('kosten-und-kassenzuschuesse',)),
    ('landeskunde', ('was-die-pflege-zu',)),
    ('einzugsgebiet', ('einzugsgebiet',)),
    ('fragen', ('haeufige-fragen',)),
)


def bloecke(rumpf):
    """Den Rumpf in seine Bloecke auf oberster Ebene zerlegen, in Originalreihenfolge.

    Verankert an der Einrueckung statt an Klammernzaehlung: Alle Bloecke dieser Seiten
    stehen in derselben Spalte, und ein schliessendes </Abschnitt> steht genau dort wieder.
    Beim ersten Versuch (22.09.) war die Klassifizierung ueber feste Kennungen zu starr —
    „bad-aibling" heisst in der Kennung nur „bad", und viele Seiten haben einen
    Landkreis-Abschnitt, den es auf Dortmund nicht gibt. Deshalb jetzt: alles einsammeln,
    dann einordnen, und was unbekannt ist, bleibt einfach stehen.
    """
    t = '\n' + rumpf
    raus = []
    i = 0
    while True:
        m = re.search(r'\n([ \t]*)<([A-Za-z][A-Za-z0-9]*)\b', t[i:])
        if not m:
            break
        einzug, tag = m.group(1), m.group(2)
        anf = i + m.start() + 1
        schluss = f'\n{einzug}</{tag}>'
        e = t.find(schluss, anf)
        if e >= 0:
            e += len(schluss)
        else:
            e = t.find('/>', anf)
            if e < 0:
                return None
            e += 2
        roh = t[anf:e]
        kid = re.search(r'id="([^"]+)"', roh.split('>', 1)[0])
        raus.append({'tag': tag, 'id': kid.group(1) if kid else None, 'text': roh})
        i = e
    return raus


def umbauen(datei: Path):
    slug = datei.parent.name.replace('24h-pflege-', '')
    if slug in LAENDER or slug in KEINE_ORTSSEITE:
        return 'kein Ort'
    s = datei.read_text(encoding='utf-8')
    if 'OrtWannSinnvoll' in s:
        return 'schon neu'
    m = re.search(r'<RatgeberRumpf abschnitte=\{SECTIONS\}>\n(.*?)\n([ \t]*)</RatgeberRumpf>', s, re.S)
    if not m:
        return 'kein RatgeberRumpf'
    einzug = m.group(2) + '  '

    mo = re.search(r'titel="Einzugsgebiet ([^"]+)"', s)
    if not mo:
        return 'Ortsname nicht gefunden'
    ort = mo.group(1)

    teile = bloecke(m.group(1))
    if teile is None:
        return 'Rumpf nicht zerlegbar'

    fach = {name: None for name, _ in PLAETZE}
    fach['werkzeuge'] = fach['stimmen'] = None
    eigene = []
    for b in teile:
        kid = b['id'] or ''
        if b['tag'] == 'OrtWerkzeuge':
            fach['werkzeuge'] = b['text']; continue
        if b['tag'] == 'OrtStimmen':
            fach['stimmen'] = b['text']; continue
        if any(kid.startswith(x) for x in ENTFAELLT) or any(kid.startswith(x) for x in ERSETZT):
            continue
        for name, praefixe in PLAETZE:
            if any(kid.startswith(x) for x in praefixe) and fach[name] is None:
                fach[name] = b['text']; break
        else:
            eigene.append(b)

    fehlt = [k for k in ('einzugsgebiet', 'fragen', 'werkzeuge', 'stimmen') if fach[k] is None]
    if fehlt:
        return 'fehlt: ' + ', '.join(fehlt)

    def rueck(t):
        if not t:
            return None
        zeilen = t.split('\n')
        vor = len(zeilen[0]) - len(zeilen[0].lstrip())
        return '\n'.join((einzug + z[vor:]) if z.strip() else '' for z in zeilen)

    folge = [
        f'{einzug}<OrtWasBedeutet ort="{ort}" />',
        f'{einzug}<OrtWannSinnvoll slug="{slug}" ort="{ort}" />',
        f'{einzug}<OrtWohnen slug="{slug}" ort="{ort}" />',
        f'{einzug}<OrtAufgaben />',
        f'{einzug}<OrtAblauf />',
        rueck(fach['kosten']),
        rueck(fach['werkzeuge']),
        f'{einzug}<OrtPassendeKraft />',
        f'{einzug}<OrtWarumPrimundus ort="{ort}" />',
        rueck(fach['landeskunde']),
        *[rueck(b['text']) for b in eigene],
        f'{einzug}<OrtErsteTage ort="{ort}" />',
        rueck(fach['stimmen']),
        rueck(fach['einzugsgebiet']),
        rueck(fach['fragen']),
        f'{einzug}<OrtBeratung slug="{slug}" ort="{ort}" id="beratung-{slug}" />',
    ]
    s = s[:m.start(1)] + '\n\n'.join(x for x in folge if x) + s[m.end(1):]

    def titel(roh):
        t = re.search(r'titel="([^"]*)"', roh.split('>', 1)[0])
        i = re.search(r'id="([^"]+)"', roh.split('>', 1)[0])
        return (i.group(1) if i else ''), (t.group(1) if t else '')

    zeilen = [
        ('was-bedeutet', f'Was 24-Stunden-Pflege in {ort} bedeutet'),
        ('wann-sinnvoll', 'Wann Betreuung zu Hause sinnvoll ist'),
        ('wohnen', f'Wohnen in {ort}: was das für die Betreuung heißt'),
        ('aufgaben', 'Was eine Betreuungskraft übernimmt — und was der Pflegedienst'),
        ('ablauf', 'So läuft die Betreuung ab'),
    ]
    if fach['kosten']:
        zeilen.append(titel(fach['kosten']))
    zeilen.append(('werkzeuge', f'Was es in {ort} kostet, und was die Pflegekasse dazugibt'))
    zeilen.append(('passende-kraft', 'Wie Sie die passende Betreuungskraft finden'))
    zeilen.append(('warum-primundus', f'Warum Familien in {ort} Primundus wählen'))
    if fach['landeskunde']:
        zeilen.append(titel(fach['landeskunde']))
    for b in eigene:
        if b['id']:
            zeilen.append(titel(b['text']))
    zeilen.append(('erste-tage', 'Die ersten Tage: worauf es ankommt'))
    zeilen.append(('stimmen-vor-ort', f'Familien aus {ort} über uns'))
    zeilen.append(titel(fach['einzugsgebiet']))
    zeilen.append(titel(fach['fragen']))
    zeilen.append((f'beratung-{slug}', f'Wo Sie sich in {ort} unabhängig beraten lassen'))

    sec = 'const SECTIONS = [\n' + ''.join(
        '  { id: \'%s\', title: "%s" },\n' % (i, t) for i, t in zeilen if i) + ']'
    s = re.sub(r'const SECTIONS = \[.*?\n\]', lambda _: sec, s, count=1, flags=re.S)

    for zeile in IMPORTE.strip().split('\n'):
        quelle = re.search(r"from '([^']+)'", zeile).group(1)
        vorhanden = re.search(r'import \{ ([^}]+) \} from \'' + re.escape(quelle) + r'\'', s)
        if vorhanden:
            neu_namen = re.search(r'import \{ ([^}]+) \}', zeile).group(1)
            zusammen = sorted(set(x.strip() for x in vorhanden.group(1).split(',')) |
                              set(x.strip() for x in neu_namen.split(',')))
            s = s.replace(vorhanden.group(0),
                          'import { ' + ', '.join(zusammen) + " } from '" + quelle + "'")
        else:
            s = re.sub(r'^(import .*\n)', zeile + '\n' + r'\1', s, count=1, flags=re.M)

    datei.write_text(s, encoding='utf-8')
    return None


def main():
    probe = None
    if '--probe' in sys.argv:
        probe = sys.argv[sys.argv.index('--probe') + 1]
    dateien = sorted(APP.glob('24h-pflege-*/page.tsx'))
    ok, uebersprungen, fehler = 0, 0, []
    for datei in dateien:
        slug = datei.parent.name.replace('24h-pflege-', '')
        if probe and slug != probe:
            continue
        if slug in SCHON_NEU:
            uebersprungen += 1
            continue
        grund = umbauen(datei)
        if grund is None:
            ok += 1
        elif grund == 'schon neu':
            uebersprungen += 1
        else:
            fehler.append((slug, grund))
    print(f'umgebaut: {ok} · uebersprungen: {uebersprungen} · nicht umgebaut: {len(fehler)}')
    for slug, grund in fehler[:25]:
        print(f'  {slug:<28} {grund}')
    if len(fehler) > 25:
        print(f'  … und {len(fehler)-25} weitere')


if __name__ == '__main__':
    main()
