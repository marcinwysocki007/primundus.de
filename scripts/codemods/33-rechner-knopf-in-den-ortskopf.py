#!/usr/bin/env python3
"""Rechner-Knopf in den Kopf aller Ortsseiten, Beschriftung gekuerzt (23.09.2026).

MARTIN, 23.09.:
    „Also ich sehe bei Worms den Knopf nicht, der muss natuerlich rein, aber der ist auch zu
     lang. Preise und Betreuungskraefte ansehen ist besser. Verfuegbare raus, du siehst doch,
     dass das nicht passt da in den Button. … Und vor allen Dingen Fokus auf Mobile. Mobile first."

ZWEI AENDERUNGEN

1. BESCHRIFTUNG. Muenchen und Hamburg trugen „Preis & verfuegbare Betreuungskraefte ansehen".
   Gemessen im echten Knopf bei 390 px Bildschirmbreite (Knopf 350 px breit):

       Preis & verfuegbare Betreuungskraefte ansehen    71 px hoch  — ZWEI Zeilen
       Preis & Betreuungskraefte ansehen                56 px hoch  — eine Zeile
       Preis & Pflegekraefte ansehen                    56 px hoch  — eine Zeile

   Es bleibt bei Martins Fassung: „Preis & Betreuungskraefte ansehen".

2. DER KNOPF KOMMT AUF ALLE ORTSSEITEN. Bisher hatten ihn zwei von 207 im Kopf. Auf den
   uebrigen 205 sass der erste Rechner-Link bei 4.478 px — sieben Bildschirmlaengen unter der
   Falz. Marta mit Telefon und WhatsApp stand zwar oben, aber der Rechner bringt 85 Prozent
   der Anfragen.

WAS DAS NICHT LOEST

Gemessen auf dem iPhone (390 x 664 px sichtbar):

    Worms     Einleitung 350 Zeichen, 334 px hoch → endet bei 641 px
    Muenchen  Einleitung 211 Zeichen, 182 px hoch → endet bei 525 px

Auf den Standardseiten ist die Einleitung fast doppelt so lang. Der Knopf landet dort bei rund
665 px und damit knapp UNTER der Falz. Damit er wirklich sichtbar wird, muesste die Einleitung
auf etwa 210 Zeichen — das ist Textarbeit auf 207 Seiten und liegt bei Martin.

Der Knopf steht hier bewusst direkt nach der Einleitung (knopfSchlicht), nicht als voller
RechnerBlock mit Gesichterreihe und Sternen: Der Block ist 140 px hoch und braucht eine
Einleitung von hoechstens 210 Zeichen, um ueber der Falz zu bleiben.

Aufruf:  python3 scripts/codemods/33-rechner-knopf-in-den-ortskopf.py
"""
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'
LABEL = 'Preis & Betreuungskräfte ansehen'


def main():
    gekuerzt = ergaenzt = schon = 0
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        slug = datei.parent.name.replace('24h-pflege-', '')
        s = datei.read_text(encoding='utf-8')
        if 'RatgeberKopf' not in s:
            continue

        # 1. Beschriftung vereinheitlichen, wo schon ein Knopf steht.
        neu, n = re.subn(r"text: 'Preis & verfügbare Betreuungskräfte ansehen'",
                         f"text: '{LABEL}'", s)
        if n:
            s = neu
            gekuerzt += n

        # 2. Knopf ergaenzen, wo keiner ist.
        if re.search(r'^\s+knopf=\{', s, re.M):
            schon += 1
            datei.write_text(s, encoding='utf-8')
            continue

        # Der Knopf gehoert direkt hinter die Einleitung, vor blickTitel/blick/person.
        m = re.search(r'\n(\s+)(blickTitel=|blick=\{|person=\{)', s)
        if not m:
            datei.write_text(s, encoding='utf-8')
            continue
        einzug = m.group(1)
        quelle = f'ort-{slug}'
        einschub = (f'\n{einzug}knopf={{{{ href: '
                    f"'https://kostenrechner.primundus.de/?start=1&src={quelle}', "
                    f"text: '{LABEL}' }}}}"
                    f'\n{einzug}knopfSchlicht')
        s = s[:m.start()] + einschub + s[m.start():]
        datei.write_text(s, encoding='utf-8')
        ergaenzt += 1

    print(f'Beschriftung gekürzt: {gekuerzt} · Knopf ergänzt: {ergaenzt} · hatte ihn schon: {schon}')


if __name__ == '__main__':
    main()
