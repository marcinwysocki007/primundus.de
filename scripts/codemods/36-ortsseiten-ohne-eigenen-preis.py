#!/usr/bin/env python3
"""Ortsseiten: Ueberschrift ueber der Einleitung, unsere Preise raus (23.09.2026).

MARTIN, auf dem Handy:
    „Der Text unter den Sternen, der beginnt einfach ohne irgendwie Ueberschrift, ohne alles.
     … Dann sind hier staendig ueberall Preise genannt, was es bei Primundus kostet. Wir haben
     doch gesagt, unsere Preise werden nicht genannt, richtig?"

WAS WIR GESAGT HATTEN — zur Einordnung, nicht als Widerspruch:
    21.09.  „keine Kosten in den Snippets" — Titel und Beschreibung.
    20.09.  Die Ortsseiten bekamen den RICHTIGEN Eigenanteil (923 statt 1.100–1.400 €) in Kasten,
            Tabelle, Text und FAQ. Preise im Inhalt waren damals die Regel (Vertragsfakten: Preise
            nur aus dem Rechner, ab 2.150 €, PG 3 ab ca. 923 €).
    17.–19.09.  Im Rechner „Preis zuerst" getestet: Anfragen 28 % → 10 %. Lehre: „nie den
            Preis-Aussteiger fuer einen Lead halten."
    23.09.  Martin: unsere Preise werden nicht genannt. Das ist die neue Regel fuer die Ortsseiten.

Gemessen auf Worms vor dieser Aenderung: „2.150 €" 4×, „923 €" 5× — Blick-Kasten, Tabelle,
Polen-Text, zwei FAQ-Antworten. Alle sechs Stellen sind auf allen 207 Seiten gleich gebaut.

WAS SICH AENDERT

1. Ueberschrift „Zuhause bleiben in <Ort>" ueber der oertlichen Einleitung (`einleitungTitel`).
   Alle 207 Einleitungen erzaehlen dasselbe: Hier gibt niemand sein Zuhause auf, die
   Betreuungskraft zieht ein. Die Ueberschrift benennt das.

2. Unsere Preise raus, die Kassen- und Marktzahlen bleiben:
   Blick-Kasten   „Preis bei Primundus: ab 2.150 €"    → „Pflegegeld bei Pflegegrad 3: 599 €/Monat – auch mit Betreuungskraft"
                  „Ihr Eigenanteil bei PG 3: ab ca. 923 €" → „Steuerermaessigung: 20 % der Kosten, bis 4.000 €/Jahr"
   Tabelle        „Kostenbeispiel" mit Kosten Primundus und Eigenanteil
                  → „Was Kasse und Finanzamt bei Pflegegrad 3 beisteuern": die drei Zuschuesse
                    und ihre Summe (599 + ca. 295 + bis 333 = bis zu ca. 1.227 €/Monat).
                    Dieselben Zahlen wie bisher, nur ohne unseren Preis davor und dahinter.
                    OpenAI-Pruefung: „uebernehmen" war unsauber, die Steuerermaessigung uebernimmt
                    nichts, sie senkt die Steuer. In Saetzen deshalb getrennt: „Pflegegeld und
                    Entlastungsbudget zahlen … bis zu ca. 894 €, dazu kommen bis zu 333 € Steuerermaessigung."
   Polen-Text     „…kostet: ab 2.150 Euro…" → Preisfaktoren + Rechner + Zuschuss-Summe + Heimplatz
   FAQ 1          „Was kostet eine 24h-Pflegekraft in <Ort>?" → Faktoren, Rechner, Zuschuesse, Heim
   FAQ 2          „Was kostet ein Heimplatz…?" → Heimzahl bleibt, „ab ca. 923 €" und die
                  Differenz (2.297 €, 27.564 €) raus — sie leiten sich aus unserem Preis ab.
   Auch die 125 € je Strecke fallen — ebenfalls unser Preis.

NICHT Teil dieses Codemods: /kosten, /24-stunden-pflege, /pflegekraft-aus-polen. Das sind die
Kostenseiten selbst; ob dort der Preis bleibt, entscheidet Martin einzeln.

Aufruf:  python3 scripts/codemods/36-ortsseiten-ohne-eigenen-preis.py
"""
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
APP = WURZEL / 'app'

ZUSCHUSS = 'Pflegegeld, Entlastungsbudget und Steuerermäßigung übernehmen bei Pflegegrad 3 zusammen bis zu ca. 1.227 €/Monat'


def main():
    z = dict(titel=0, blick=0, tabelle=0, polen=0, faq1=0, faq2=0)
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        s = datei.read_text(encoding='utf-8')
        if 'knopfOben' not in s:
            continue
        m = re.search(r'augenbraue="24-Stunden-Pflege in ([^"]+)"', s)
        if not m:
            continue
        ort = m.group(1)

        # 1. Ueberschrift ueber der Einleitung
        if 'einleitungTitel=' not in s:
            s, n = re.subn(r'^(\s+)einleitung=\{', rf'\1einleitungTitel="Zuhause bleiben in {ort}"\n\1einleitung={{', s, count=1, flags=re.M)
            z['titel'] += n

        # 2a. Blick-Kasten
        s, n1 = re.subn(r"'Preis bei Primundus: ab 2\.150 €/Monat',",
                        "'Pflegegeld bei Pflegegrad 3: 599 €/Monat – auch mit Betreuungskraft',", s)
        s, n2 = re.subn(r"'Ihr Eigenanteil bei Pflegegrad 3: ab ca\. 923 €/Monat',",
                        "'Steuerermäßigung: 20 % der Kosten, bis 4.000 €/Jahr',", s)
        z['blick'] += min(n1, n2)

        # 2b. Tabelle
        alt_tab = re.search(
            r'titel="Kostenbeispiel — Pflegegrad 3 in [^"]+"\n(\s+)zeilen=\{\[\n'
            r"\s+\['Kosten Primundus', 'ab 2\.150 €/Monat'\],\n"
            r"\s+\['− Pflegegeld PG 3', '− 599 €/Monat'\],\n"
            r"\s+\['− Entlastungsbudget \(anteilig\)', '− ca\. 295 €/Monat'\],\n"
            r"\s+\['− Steuerermäßigung \(20 %, bis 4\.000 €/Jahr\)', '− ca\. 333 €/Monat'\],\n"
            r'\s+\[<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca\. 923 €/Monat</strong>\],\n'
            r'(\s+)\]\}\n(\s+)betont=\{1\}\n\s+fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl\. An- und Abreise 125 € je Strecke · ([^"]*?) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"',
            s)
        if alt_tab:
            e, e2, e3, heim = alt_tab.group(1), alt_tab.group(2), alt_tab.group(3), alt_tab.group(4)
            neu_tab = (
                f'titel="Was Kasse und Finanzamt bei Pflegegrad 3 übernehmen"\n{e}zeilen={{[\n'
                f"{e}  ['Pflegegeld PG 3', '599 €/Monat'],\n"
                f"{e}  ['Entlastungsbudget (anteilig)', 'ca. 295 €/Monat'],\n"
                f"{e}  ['Steuerermäßigung (20 %, bis 4.000 €/Jahr)', 'bis 333 €/Monat'],\n"
                f'{e}  [<strong key="e">Zusammen</strong>, <strong key="w">bis zu ca. 1.227 €/Monat</strong>],\n'
                f'{e2}]}}\n{e3}betont={{1}}\n{e3}fuss="Eine Person, Pflegegrad 3, Werte aus unserem Kostenrechner · {heim} — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten"'
            )
            s = s[:alt_tab.start()] + neu_tab + s[alt_tab.end():]
            z['tabelle'] += 1

        # 2c. Polen-Text
        s, n = re.subn(
            r'<strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2\.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen\. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca\. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund ([\d.]+) Euro im Monat kostet\.',
            r'<strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet,</strong> hängt von der Pflegesituation und den Deutschkenntnissen ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld, Entlastungsbudget und Steuerermäßigung übernehmen bei Pflegegrad 3 zusammen bis zu ca. 1.227 Euro im Monat; ein Heimplatz kostet hier im Schnitt rund \1 Euro Eigenanteil.',
            s)
        z['polen'] += n

        # 2d. FAQ 1
        s, n = re.subn(
            r"(\{ q: 'Was kostet eine 24h-Pflegekraft in [^']+\?', a: ')Ab 2\.150 €/Monat über Primundus, dazu An- und Abreise mit \d+ € je Strecke\. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca\. 923 €/Monat — deutlich günstiger als ein Heimplatz in ([^(]+?) \(Eigenanteil rund ([\d.]+) €/Monat, vdek 07/2026\)\.",
            rf"\1Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. {ZUSCHUSS}; ein Heimplatz in \2 kostet im Schnitt rund \3 € Eigenanteil (vdek 07/2026).",
            s)
        z['faq1'] += n

        # 2e. FAQ 2
        s, n = re.subn(
            r"Zu Hause bleiben bei Pflegegrad 3 ab ca\. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung\. Das sind rund [\d.]+ € Unterschied im Monat, [\d.]+ € im Jahr\.",
            "Zu Hause übernehmen Pflegegeld, anteiliges Entlastungsbudget und Steuerermäßigung bei Pflegegrad 3 zusammen bis zu ca. 1.227 € im Monat — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.",
            s)
        z['faq2'] += n

        datei.write_text(s, encoding='utf-8')

    print(' · '.join(f'{k} {v}' for k, v in z.items()))
    rest = [d.parent.name for d in APP.glob('24h-pflege-*/page.tsx')
            if 'knopfOben' in d.read_text(encoding='utf-8') and re.search(r'2\.150|\b923\b', d.read_text(encoding='utf-8'))]
    print(f'Ortsseiten mit knopfOben, die noch 2.150/923 enthalten: {len(rest)}' + (f' → {rest[:8]}' if rest else ''))


if __name__ == '__main__':
    main()


# ── Zweiter Durchlauf: die 20 von Hand geschriebenen Fassungen (Kreise, Muenchen, Hamburg) ──
def nachlauf():
    ZUS_EUR = 'Pflegegeld, Entlastungsbudget und Steuerermäßigung übernehmen bei Pflegegrad 3 zusammen bis zu ca. 1.227 Euro im Monat'
    z = dict(faq=0, kostet=0, vergleich=0, muc=0, tab=0)
    for datei in sorted(APP.glob('24h-pflege-*/page.tsx')):
        s = datei.read_text(encoding='utf-8')
        if 'knopfOben' not in s or not re.search(r'2\.150|(?<![\d.])923\b', s):
            continue
        o = s

        # FAQ „Was kostet eine 24h-Pflegekraft …?" — jede Fassung: Antwort komplett neu, Heimzahl bleibt, wo eine steht.
        def faq(m):
            heim = re.search(r'Heimplatz in ([^(.]+?) \(Eigenanteil rund ([\d.]+) €/Monat, vdek 07/2026\)', m.group(2))
            satz = f" Ein Heimplatz in {heim.group(1).strip()} kostet im Schnitt rund {heim.group(2)} € Eigenanteil (vdek 07/2026)." if heim else ''
            return (m.group(1) + 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der '
                    f'Kostenrechner in 2 Minuten. {ZUSCHUSS}.{satz}' + m.group(3))
        s, n = re.subn(r"(\{ q: 'Was kostet eine 24h-Pflegekraft [^']+\?', a: ')(Ab 2\.150[^']*)(' \})", faq, s)
        z['faq'] += n

        # „Eine 24h-Betreuung kostet über Primundus ab 2.150 Euro …" — Faktoren bleiben, Preis und Eigenanteil raus.
        def kostet(m):
            heim = re.search(r'Heimplatz in ([^\d]+?) kostet im Schnitt rund ([\d.]+) Euro', m.group(0))
            satz = f' Zum Vergleich: Ein Heimplatz in {heim.group(1).strip()} kostet im Schnitt rund {heim.group(2)} Euro Eigenanteil.' if heim else ''
            return ('<Text>Was eine 24h-Betreuung kostet, hängt davon ab, ob eine oder zwei Personen betreut werden, wie mobil Ihre '
                    'Angehörigen sind, ob nachts Hilfe nötig ist und wie gut die Betreuungskraft Deutsch spricht — Ihren Preis zeigt der '
                    f'Kostenrechner in 2 Minuten. {ZUS_EUR}.{satz}</Text>')
        s, n = re.subn(r'<Text>Eine 24h-Betreuung kostet über Primundus <strong>ab 2\.150 Euro im Monat</strong>.*?</Text>', kostet, s, flags=re.S)
        z['kostet'] += n

        # „Der Kostenvergleich fällt … deutlich aus: … ab ca. 923 Euro Eigenanteil. Ein Heimplatz kostet in L … rund N Euro …"
        def vergleich(m):
            return (f'<Text>Der Kostenvergleich fällt {m.group(1)} deutlich aus: Ein Heimplatz kostet in {m.group(2)} im ersten Jahr im Schnitt '
                    f'rund {m.group(3)} Euro Eigenanteil im Monat. Zu Hause übernehmen Pflegegeld, Entlastungsbudget und Steuerermäßigung bei '
                    'Pflegegrad 3 zusammen bis zu ca. 1.227 Euro im Monat — und die vertraute Wohnung bleibt.</Text>')
        s, n = re.subn(r'<Text>Der Kostenvergleich fällt (.+?) deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca\. 923 Euro Eigenanteil\. Ein Heimplatz kostet in ([^\d]+?) im ersten Jahr im Schnitt rund ([\d.]+) Euro im Monat[^<]*</Text>', vergleich, s, flags=re.S)
        z['vergleich'] += n

        # Muenchen / Hamburg: Absatz vor der Tabelle
        s, n = re.subn(r'Bei Primundus beginnt er bei 2\.150 € im Monat, dazu kommen An- und Abreise mit 125 € je Strecke\.\n(\s+)Von diesem Preis geht ab, was die Pflegekasse zahlt — das Beispiel zeigt, wie viel\.',
                       r'Ihren Preis zeigt der Kostenrechner in 2 Minuten.\n\1Was die Pflegekasse und das Finanzamt davon übernehmen, zeigt das Beispiel.', s)
        z['muc'] += n
        # Muenchen / Hamburg: Tabelle wie im Standard, eigener Fuss
        tab = re.search(
            r'titel="Kostenbeispiel — Pflegegrad 3 in [^"]+"\n(\s+)zeilen=\{\[\n'
            r"\s+\['Kosten Primundus', 'ab 2\.150 €/Monat'\],\n"
            r"\s+\['− Pflegegeld PG 3', '− 599 €/Monat'\],\n"
            r"\s+\['− Entlastungsbudget \(anteilig\)', '− ca\. 295 €/Monat'\],\n"
            r"\s+\['− Steuerermäßigung \(20 %, bis 4\.000 €/Jahr\)', '− ca\. 333 €/Monat'\],\n"
            r'\s+\[<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca\. 923 €/Monat</strong>\],\n'
            r'(\s+)\]\}\n(\s+)betont=\{1\}\n\s+fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl\. An- und Abreise 125 € je Strecke · (Zum Vergleich: [^"]*)"', s)
        if tab:
            e, e2, e3, heim = tab.groups()
            s = s[:tab.start()] + (
                f'titel="Was Kasse und Finanzamt bei Pflegegrad 3 übernehmen"\n{e}zeilen={{[\n'
                f"{e}  ['Pflegegeld PG 3', '599 €/Monat'],\n"
                f"{e}  ['Entlastungsbudget (anteilig)', 'ca. 295 €/Monat'],\n"
                f"{e}  ['Steuerermäßigung (20 %, bis 4.000 €/Jahr)', 'bis 333 €/Monat'],\n"
                f'{e}  [<strong key="e">Zusammen</strong>, <strong key="w">bis zu ca. 1.227 €/Monat</strong>],\n'
                f'{e2}]}}\n{e3}betont={{1}}\n{e3}fuss="Eine Person, Pflegegrad 3, Werte aus unserem Kostenrechner · {heim} — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten"'
            ) + s[tab.end():]
            z['tab'] += 1

        if s != o:
            datei.write_text(s, encoding='utf-8')
    print('Nachlauf: ' + ' · '.join(f'{k} {v}' for k, v in z.items()))
    rest = [d.parent.name for d in APP.glob('24h-pflege-*/page.tsx')
            if 'knopfOben' in d.read_text(encoding='utf-8') and re.search(r'2\.150|(?<![\d.])923\b', d.read_text(encoding='utf-8'))]
    print(f'Noch mit eigenem Preis: {len(rest)}' + (f' → {sorted(rest)}' if rest else ''))


if __name__ == '__main__':
    nachlauf()
