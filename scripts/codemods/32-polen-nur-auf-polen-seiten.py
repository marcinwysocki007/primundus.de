#!/usr/bin/env python3
"""„Polnische Pflegekraefte" nur noch auf den Polen-Seiten (23.09.2026).

MARTINS REGEL, im Wortlaut:

    „Ich wollte die polnischen Pflegekraefte nur bei den Seiten Pflegekraefte aus Polen oder
     polnische Pflegekraefte, niemals auf der Startseite oder den lokalen Seiten oder sonstiges.
     Das ist nur den polnischen Seiten vorbehalten. Ansonsten spielen wir immer nur
     24-Stunden-Pflege oder 24-Stunden-Pflege und Betreuung in."

VIER AENDERUNGEN

1. DIE 207 ORTSSEITEN — „polnische Pflegekraefte" raus.
   Vorher:  Geprueft, verfuegbare POLNISCHE PFLEGEKRAEFTE und Preis direkt online sehen.
            Anreise in <Ort> in 3 Tagen moeglich – mit Bestpreisgarantie.
   Nachher: Geprueft, verfuegbare BETREUUNGSKRAEFTE und Preis direkt online sehen.
            Anreise in <Ort> in 3 Tagen moeglich – mit Bestpreisgarantie.
   Das ist exakt der Wortlaut der Startseite, den Martin selbst formuliert hat, plus Ortsname.
   Sieben Orte mit langen Namen verlieren zusaetzlich „verfuegbare"; damit passt es auf allen 207.

2. /kosten — PREIS RAUS aus Titel UND Beschreibung.
   Der Titel sagte „Kosten 2026: ab 2.150 €, alle Zuschuesse", die Beschreibung wiederholte den
   Betrag und war mit 1.001 px ohnehin abgeschnitten. Nie geprueft, deshalb durchgerutscht —
   dieselbe Luecke wie beim FAQ-Markup am selben Tag.

3. /24-stunden-pflege — PREIS RAUS. Die Beschreibung endete auf „Ab 2.150 €/Monat." und war mit
   967 px zu lang; der Preis fiel bisher nur zufaellig aus dem Snippet.

4. /pflegekraft-aus-polen — HIER gehoert Polen hin, aber richtig:
   * MEHRZAHL statt Einzahl. Gemessen: Mehrzahl Position 21,2, Einzahl 51,3. Die Seite war auf
     die Form optimiert, die wir nicht gewinnen koennen.
   * Preis raus.
   * Beschreibung von 962 px (abgeschnitten) auf 900 px.
   Die URL bleibt — 207 Weiterleitungen waeren der Schaden, die Adresse ist der kleinere Faktor.

Aufruf:  python3 scripts/codemods/32-polen-nur-auf-polen-seiten.py
         (braucht /tmp/breiten-ohne-polen.json aus der Pixelmessung)
"""
import json
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'


def ersetze(datei: Path, feld: str, neu: str) -> int:
    """Ein Snippet-Feld setzen. Ersetzt den Wert ueberall, also auch in openGraph."""
    q = datei.read_text(encoding='utf-8')
    m = re.search(rf"^  {feld}: '(.*)',$", q, re.M)
    if not m or m.group(1) == neu:
        return 0
    datei.write_text(q.replace(m.group(1), neu), encoding='utf-8')
    return 1


def main():
    breiten = json.load(open('/tmp/breiten-ohne-polen.json'))
    lang = kurz = 0
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        slug = datei.parent.name.replace('24h-pflege-', '')
        if slug not in breiten:
            continue
        q = datei.read_text(encoding='utf-8')
        mo = re.search(r'titel="Einzugsgebiet ([^"]+)"', q)
        if not mo:
            continue
        ort = mo.group(1)
        if breiten[slug]['lang'] <= 920:
            neu = (f'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. '
                   f'Anreise in {ort} in 3 Tagen möglich – mit Bestpreisgarantie.')
            lang += 1
        else:
            neu = (f'Geprüfte Betreuungskräfte und Preis direkt online sehen. '
                   f'Anreise in {ort} in 3 Tagen möglich – mit Bestpreisgarantie.')
            kurz += 1
        ersetze(datei, 'description', neu)
    print(f'1. Ortsseiten: {lang} volle Form, {kurz} ohne „verfügbare" — „polnische" ist weg')

    n = 0
    n += ersetze(APP / 'kosten' / 'page.tsx', 'title',
                 '24-Stunden-Pflege Kosten 2026: alle Zuschüsse im Überblick')
    n += ersetze(APP / 'kosten' / 'page.tsx', 'description',
                 'Was Pflegekasse, Steuer und Sozialamt zahlen und was bei Pflegegrad 2 bis 5 als '
                 'Eigenanteil bleibt. Ihren Preis zeigt der Rechner in 2 Minuten.')
    print(f'2. /kosten: {n} Felder ohne Preis')

    n = ersetze(APP / '24-stunden-pflege' / 'page.tsx', 'description',
                'Geprüfte Betreuungskraft im Haushalt, täglich kündbar, Anreise in 3 Tagen möglich. '
                '6× Testsieger DIE WELT – mit Bestpreisgarantie.')
    print(f'3. /24-stunden-pflege: {n} Feld ohne Preis')

    n = 0
    n += ersetze(APP / 'pflegekraft-aus-polen' / 'page.tsx', 'title',
                 'Polnische Pflegekräfte: Kosten, Recht und Ablauf | 6× Testsieger')
    n += ersetze(APP / 'pflegekraft-aus-polen' / 'page.tsx', 'description',
                 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. '
                 'Bei uns angestellt, Anreise in 3 Tagen möglich – mit Bestpreisgarantie.')
    print(f'4. /pflegekraft-aus-polen: {n} Felder auf die Mehrzahl, ohne Preis')


if __name__ == '__main__':
    main()
