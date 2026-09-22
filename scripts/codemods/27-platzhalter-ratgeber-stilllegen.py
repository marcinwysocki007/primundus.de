#!/usr/bin/env python3
"""28 Ratgeber, die nur so aussehen wie Ratgeber, aus dem Index nehmen (22.09.2026).

Befund: Diese Seiten haben Ueberschriften, Inhaltsverzeichnis, Lesezeit-Angabe und rund
650 Woerter — aber unter den Ueberschriften steht nichts. Alle 28 enthalten dieselben
fuenf Fuellsaetze, zum Beispiel:

    <h2>Haeufige Ursachen</h2>
    "Dieser Ratgeber gibt Ihnen einen kompakten Ueberblick ueber das Thema — praxisnah
     und auf die Situation pflegender Familien zugeschnitten."

    <h2>Was hilft</h2>
    "Die wichtigsten Informationen fuer Ihren Alltag mit Pflege: Was konkret zu tun ist,
     worauf man achten sollte und wie Primundus unterstuetzen kann."

Unter "Haeufige Ursachen" steht keine einzige Ursache. Das ist genau der generische Text,
den die Arbeitsregeln ueberall sonst verbieten, und er steht live auf 28 Adressen.

Warum noindex und nicht loeschen:
  • Die Adressen sind intern verlinkt und stehen im Weiterlesen-Register. Loeschen wuerde
    diese Verweise zerreissen (die Falle vom 20.09., siehe scripts/build-artikel.mjs).
  • follow: true bleibt — eingehende und ausgehende Verweise wirken weiter.
  • Jede Seite kommt zurueck, sobald sie echten Inhalt hat. Ein Codemod rueckwaerts.

Was es kostet: 54 Impressionen in 90 Tagen ueber alle 28 Seiten zusammen, 21 davon haben
null. Also praktisch nichts — gegen das Risiko, dass Google 28 duenne Seiten als Urteil
ueber die ganze Domain nimmt.

Aufruf:  python3 scripts/codemods/27-platzhalter-ratgeber-stilllegen.py
"""
import json, re, sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'

FLOSKELN = [
    'kompakten Überblick über das Thema',
    'Die wichtigsten Informationen für Ihren Alltag mit Pflege',
    'Wenn Sie unsicher sind wie Sie vorgehen sollen',
    'praxisnah und auf die Situation pflegender Familien zugeschnitten',
]
ROBOTS = "  // Stillgelegt 22.09.2026: Platzhaltertext statt Inhalt (siehe codemods/27). Kommt\n" \
         "  // zurueck, sobald die Seite echte Substanz hat. follow bleibt an, damit die\n" \
         "  // internen Verweise weiter wirken.\n" \
         "  robots: { index: false, follow: true },\n"


def betroffen():
    """Eine Seite gilt als Huelle, wenn sie MEHRERE der Fuellsaetze traegt.

    Nur einer reicht nicht: 'beraet kostenlos und ehrlich' steht auch in echten Saetzen auf
    den Bundesland-Seiten ("Nicht sicher, ob 24h-Pflege die richtige Loesung ist? Primundus
    beraet kostenlos und ehrlich"). Das war beim ersten Zaehlen ein Fehlalarm auf 13 Seiten.
    """
    treffer = []
    for datei in sorted(APP.glob('*/page.tsx')):
        q = datei.read_text(encoding='utf-8')
        if sum(1 for f in FLOSKELN if f in q) >= 3:
            treffer.append(datei)
    return treffer


def main():
    seiten = betroffen()
    print(f'{len(seiten)} Platzhalter-Seiten gefunden')
    geaendert, schon = 0, 0
    slugs = []
    for datei in seiten:
        slug = datei.parent.name
        slugs.append(slug)
        q = datei.read_text(encoding='utf-8')
        if re.search(r'robots:\s*\{', q):
            schon += 1
            continue
        neu, n = re.subn(r'(export const metadata: Metadata = \{\n)', r'\1' + ROBOTS, q, count=1)
        if n != 1:
            print(f'  ! kein metadata-Block: {slug}')
            continue
        datei.write_text(neu, encoding='utf-8')
        geaendert += 1
    print(f'  noindex gesetzt: {geaendert}, war schon gesetzt: {schon}')

    # Sitemap: dieselben Slugs herausfiltern, sonst schlaegt check-sitemap fehl.
    sm = WURZEL / 'app' / 'sitemap.ts'
    s = sm.read_text(encoding='utf-8')
    block = ('// Stillgelegt 22.09.2026 (codemods/27): Platzhaltertext statt Inhalt. Sie stehen auf\n'
             '// noindex und gehoeren deshalb nicht in die Sitemap — bleiben aber intern verlinkt.\n'
             '// Beim Wiederbeleben hier UND das robots-Feld der Seite entfernen.\n'
             'const STILLGELEGT = new Set([\n'
             + ''.join(f"  '{x}',\n" for x in sorted(slugs))
             + '])\n\n')
    if 'const STILLGELEGT' in s:
        s = re.sub(r'// Stillgelegt 22\.09\.2026.*?\n\]\)\n\n', block, s, flags=re.S)
    else:
        s = s.replace('export default function sitemap()', block + 'export default function sitemap()', 1)
    if '.filter((e) => !STILLGELEGT' not in s:
        s = s.replace(
            '  return [\n',
            '  return [\n', 1)
        s = re.sub(r'(\n    \.\.\.trust\.map\(\(s\) => toEntry\(s, 0\.4, \'monthly\'\)\),\n  \])',
                   r"\1.filter((e) => !STILLGELEGT.has(e.url.replace('https://primundus.de/', '')))", s)
    sm.write_text(s, encoding='utf-8')
    print(f'  Sitemap: {len(slugs)} Adressen ausgenommen')
    json.dump(sorted(slugs), open('/tmp/stillgelegt.json', 'w'))


if __name__ == '__main__':
    main()
