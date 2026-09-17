#!/usr/bin/env python3
"""Preis „ab 2.150 €" wie im Kostenrechner (Martin 17.09.2026, Punkt 4 der Abnahme /kosten).

Teil A: die festen Muster der 202 Ortsseiten (Blick, Kostentabelle, Fragen, Polen-Absatz).
Teil B: Einzelstellen auf Ratgebern, Vergleichen, Übersichten und Kernseiten.
Eigenanteil wie auf /kosten: Preis − Pflegegeld − Entlastungsbudget/12 − Steuerermäßigung
(20 %, bis 4.000 €/Jahr): Pflegegrad 2/3/4/5 = ab ca. 1.175/923/722/582 €. Der Entlastungsbetrag
wird nicht abgezogen, Kost und Logis nie beziffert, keine Spanne je Bundesland.
Nicht hier: /pflegegeld-und-24h-pflege-kombinieren (eigene Abnahme), Werkzeug Pflegeheim-
Kostenvergleich (rechnet intern, Seitenart Werkzeuge), Heimkosten.

Aufruf: python3 scripts/codemods/14-preis-2150.py [--nur-zaehlen] [--ohne-startseite] [--bericht datei.json]
"""
import glob
import json
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(WURZEL)
NUR_ZAEHLEN = '--nur-zaehlen' in sys.argv
OHNE_STARTSEITE = '--ohne-startseite' in sys.argv
BERICHT = sys.argv[sys.argv.index('--bericht') + 1] if '--bericht' in sys.argv else None
NUR_GRUPPE = sys.argv[sys.argv.index('--nur-gruppe') + 1] if '--nur-gruppe' in sys.argv else None


def L(text):
    """Wörtlicher Text, Leerraum beliebig (JSX bricht Zeilen um)."""
    # re.escape maskiert Leerzeichen und Zeilenumbrüche, deshalb die maskierte Form ersetzen
    return re.compile(re.escape(text).replace('\\ ', r'\s+').replace('\\\n', r'\s+'))


def app(*namen):
    return [f'app/{n}/page.tsx' for n in namen]


ORTSSEITEN = sorted(glob.glob('app/24h-pflege-*/page.tsx'))
KREISE = app('24h-pflege-alzey-worms', '24h-pflege-hochtaunuskreis', '24h-pflege-rhein-pfalz-kreis',
             '24h-pflege-rheinisch-bergischer-kreis', '24h-pflege-wittmund')

# (Gruppe, Dateien, Muster, Ersatz)
REGELN = [
    # ── Teil A: Ortsseiten ──────────────────────────────────────────────────────────────
    ('Ortsseiten', ORTSSEITEN, re.compile(r"'Preis bei Primundus: 2\.200–3\.500 €/Monat'"),
     "'Preis bei Primundus: ab 2.150 €/Monat'"),
    ('Ortsseiten', ORTSSEITEN, re.compile(r"'Ihr Eigenanteil bei Pflegegrad 3: ca\. \d{3,4}–\d{3,4} €/Monat'"),
     "'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat'"),
    ('Ortsseiten', ORTSSEITEN, re.compile(r"\['Kosten Primundus', '2\.200–3\.500 €/Monat'\]"),
     "['Kosten Primundus', 'ab 2.150 €/Monat']"),
    ('Ortsseiten', ORTSSEITEN, re.compile(r"\['− Steuerabzug \(ca\.\)', '− ca\. \d+ €/Monat'\]"),
     "['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat']"),
    ('Ortsseiten', ORTSSEITEN, re.compile(r'\[<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ca\. \d{3,4}–\d{3,4} €/Monat</strong>\]'),
     '[<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>]'),
    ('Ortsseiten', ORTSSEITEN, re.compile(r'(<Tabelle\s+titel="Kostenbeispiel — Pflegegrad 3 in [^"]+"[\s\S]{0,700}?fuss=")(Pflegeheim )'),
     r'\1Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · \2'),
    ('Ortsseiten', ORTSSEITEN, re.compile(r"'2\.200–3\.500 €/Monat über Primundus\. Mit Pflegegeld, Entlastungsbetrag und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca\. \d{3,4}–\d{3,4} €/Monat — "),
     "'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — "),
    ('Ortsseiten', ORTSSEITEN, re.compile(r"zwischen 2\.200 und 3\.500 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen\. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbetrag und Entlastungsbudget (?:in [^—]+? )?meist rund \d{3,4} bis \d{3,4} Euro Eigenanteil — "),
     "ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — "),

    # ── Teil B: Kreisseiten mit eigenem Text ───────────────────────────────────────────────
    ('Kreisseiten', KREISE, L('meist <strong>2.200 bis 3.500 Euro im Monat</strong>'),
     '<strong>ab 2.150 Euro im Monat</strong>'),
    ('Kreisseiten', KREISE, re.compile(r"Mit\s+Pflegegeld,\s+Entlastungsbetrag\s+und\s+Verhinderungspflege\s+bleiben\s+bei\s+Pflegegrad\s+3\s+oft(?:\s+nur)?(?:\{' '\})?\s*<strong>rund\s+1\.500\s+bis\s+2\.400\s+Euro</strong>"),
     "Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3{' '}<strong>ab ca. 923 Euro</strong>"),
    ('Kreisseiten', KREISE, L('Meist zwischen 2.200 und 3.500 Euro im Monat'), 'Ab 2.150 Euro im Monat'),
    ('Kreisseiten', KREISE,
     L('Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbetrag und Entlastungsbudget meist rund 1.500 bis 2.400 Euro Eigenanteil.'),
     'Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil.'),
    ('Kreisseiten', KREISE, re.compile(r'(?:Mit den Zuschüssen der Pflegekasse|Mit Pflegegeld und den weiteren Zuschüssen der Pflegekasse) bleiben bei Pflegegrad 3 (?:oft|häufig) rund 1\.500 bis 2\.400 Euro selbst zu tragen'),
     'Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen'),

    # ── Herkunftsländer ───────────────────────────────────────────────────────────────────
    ('Herkunftsländer', app('pflegekraft-aus-bulgarien', 'pflegekraft-aus-rumaenien'),
     L('Primundus-Preisrahmen: 2.200–3.500 €/Monat'), 'Primundus-Preis: ab 2.150 €/Monat'),
    ('Herkunftsländer', app('pflegekraft-aus-bulgarien', 'pflegekraft-aus-rumaenien'),
     L("'Kosten: 2.200–3.500 €/Monat — identisch zu anderen EU-Kräften'"), "'Kosten: ab 2.150 €/Monat — identisch zu anderen EU-Kräften'"),
    ('Herkunftsländer', app('pflegekraft-aus-bulgarien', 'pflegekraft-aus-rumaenien'),
     L("['Kosten Primundus', '2.200–3.500 €/Monat', 'Je nach Pflegebedarf']"), "['Kosten Primundus', 'ab 2.150 €/Monat', 'Je nach Pflegebedarf']"),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L("'Polnische Pflegekräfte für die 24h-Pflege: 2.200–3.500 €/Monat,"), "'Polnische Pflegekräfte für die 24h-Pflege: ab 2.150 €/Monat,"),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L("'Pflegekraft aus Polen: 2.200–3.500 €/Monat,"), "'Pflegekraft aus Polen: ab 2.150 €/Monat,"),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L('Über Primundus 2.200–3.500 €/Monat je nach Pflegebedarf, plus Kost & Logis (ca. 200–300 €/Monat). Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil deutlich.'),
     'Über Primundus ab 2.150 €/Monat je nach Pflegebedarf, dazu An- und Abreise mit 125 € je Strecke; Kost und Logis stellen Sie. Nach Pflegegeld (z. B. 599 €/Monat bei PG 3), Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat.'),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L("'Kosten: 2.200–3.500 €/Monat je nach Pflegebedarf + Kost & Logis'"), "'Kosten: ab 2.150 €/Monat je nach Pflegebedarf, Kost und Logis stellen Sie'"),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L('Die monatlichen Kosten setzen sich aus dem Betreuungspreis und Kost & Logis zusammen — eine Vermittlungsgebühr fällt bei uns nicht an. Mit den Zuschüssen der Pflegekasse sinkt der tatsächliche Eigenanteil deutlich.'),
     'Sie zahlen den Betreuungspreis und die An- und Abreise der Betreuungskraft mit 125 € je Strecke; Kost und Logis stellen Sie im Haushalt. Eine Vermittlungsgebühr fällt bei uns nicht an. Mit Pflegegeld, Entlastungsbudget und Steuerermäßigung sinkt der tatsächliche Eigenanteil deutlich.'),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L("['Betreuungskosten', '2.200–3.500 €/Monat'], ['Kost & Logis (im Haushalt)', 'ca. 200–300 €/Monat'], ['Abzüglich Pflegegeld PG 3', '– 599 €/Monat'], ['Abzüglich Entlastungsbetrag', '– 131 €/Monat'], ['Eigenanteil (Richtwert PG 3)', 'ca. 1.700–2.100 €/Monat'],"),
     "['Betreuungskosten', 'ab 2.150 €/Monat'],\n                    ['Kost und Logis (im Haushalt)', 'stellen Sie'],\n                    ['Abzüglich Pflegegeld PG 3', '– 599 €/Monat'],\n                    ['Abzüglich Entlastungsbudget (anteilig)', '– 295 €/Monat'],\n                    ['Abzüglich Steuerermäßigung', '– 333 €/Monat'],\n                    ['Eigenanteil (PG 3)', 'ab ca. 923 €/Monat'],"),
    ('Herkunftsländer', app('pflegekraft-aus-polen'), L("i === 4 ? 'bg-pm-shell'"), "i === 5 ? 'bg-pm-shell'"),
    ('Herkunftsländer', app('pflegekraft-aus-polen'), L("${i === 4 ? 'text-pm-taupe'"), "${i === 5 ? 'text-pm-taupe'"),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L('Richtwerte Primundus 2026 · Eigenanteil variiert je nach tatsächlichen Kosten und Pflegegrad'),
     'Werte aus unserem Kostenrechner, Stand September 2026 · zzgl. An- und Abreise 125 € je Strecke'),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L('Eine polnische Pflegekraft kostet 2.200–3.500 Euro pro Monat und ist'), 'Eine polnische Pflegekraft kostet ab 2.150 Euro pro Monat und ist'),
    ('Herkunftsländer', app('pflegekraft-aus-polen'),
     L('Bei Pflegegrad 3 bleibt damit der oben genannte Eigenanteil von rund 1.700–2.100 € im Monat. Bei Pflegegrad 4 oder 5 wird es entsprechend weniger, bei Pflegegrad 1 mehr. Wer zusätzlich das Entlastungsbudget nutzt, kommt oft noch darunter.'),
     'Bei Pflegegrad 3 bleibt damit der oben genannte Eigenanteil ab ca. 923 € im Monat, schon mit Entlastungsbudget und Steuerermäßigung. Bei Pflegegrad 4 oder 5 wird es entsprechend weniger, bei Pflegegrad 1 und 2 mehr.'),

    # ── Vergleiche mit anderen Pflegeformen ────────────────────────────────────────────────
    ('Pflegeformen im Vergleich', app('24h-pflege-vs-ambulante-pflege'),
     L('24h: 2.200–3.500 €/Monat brutto, Eigenanteil mit Zuschüssen bei PG 3 ca. 1.500–1.900 €.'),
     '24h: ab 2.150 €/Monat, Eigenanteil nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bei PG 3 ab ca. 923 €.'),
    ('Pflegeformen im Vergleich', app('24h-pflege-vs-ambulante-pflege'),
     L("'Kosten 24h: 2.200–3.500 €/Monat, Eigenanteil mit Zuschüssen ab ca. 1.500 €'"), "'Kosten 24h: ab 2.150 €/Monat, Eigenanteil bei PG 3 ab ca. 923 €'"),
    ('Pflegeformen im Vergleich', app('24h-pflege-vs-ambulante-pflege', 'tagespflege-vs-24h-betreuung'),
     re.compile(r"(\['Kosten/Monat', '[^']+', )'2\.200–3\.500 €'\]"), r"\1'ab 2.150 €']"),
    ('Pflegeformen im Vergleich', app('24h-pflege-vs-ambulante-pflege'),
     L("'Gesamtkosten 2.200–3.500 €/Monat. Mit Pflegegeld (statt Sachleistungen) und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1.650–2.050 €/Monat. Bei PG 4: ca. 1.850–2.250 €/Monat.'"),
     "'Gesamtkosten ab 2.150 €/Monat. Nach Pflegegeld (statt Sachleistungen), Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat, bei PG 4 ab ca. 722 €/Monat.'"),
    ('Pflegeformen im Vergleich', app('tagespflege-vs-24h-betreuung'),
     L("'Gesamtkosten 2.200–3.500 €/Monat. Mit Pflegegeld (statt Sachleistungen) und Entlastungsbudget sinkt der Eigenanteil bei PG 3 auf ca. 1.650–2.050 €/Monat."),
     "'Gesamtkosten ab 2.150 €/Monat. Nach Pflegegeld (statt Sachleistungen), Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat."),
    ('Pflegeformen im Vergleich', app('kurzzeitpflege-oder-24h-pflege'),
     L('24h-Pflege: 2.200–3.500 €/Monat, mit Kassenzuschüssen ab ca. 1.500 €/Monat Eigenanteil.'),
     '24h-Pflege: ab 2.150 €/Monat, nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bei Pflegegrad 3 ab ca. 923 €/Monat Eigenanteil.'),
    ('Pflegeformen im Vergleich', app('pflegedienst-oder-24h-kraft'),
     L("'2.200–3.500 €, mit Pflegegeld'"), "'ab 2.150 €, mit Pflegegeld'"),
    ('Pflegeformen im Vergleich', app('pflegedienst-oder-24h-kraft'),
     L("'2.200–3.500 €/Monat. Mit Pflegegeld (347–990 €/Mo), Entlastungsbudget und Steuerabzug sinkt der Eigenanteil bei PG 3 auf ca. 1.650–2.150 €/Monat."),
     "'Ab 2.150 €/Monat. Nach Pflegegeld (347–990 €/Mo), Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat."),
    ('Pflegeformen im Vergleich', app('pflegedienst-oder-24h-kraft'),
     L('[<>24h-Kraft (Primundus)</>, <>2.200–3.500 €/Mo</>], [<>Ambulanter Dienst (Behandlungspflege)</>, <>ca. 300–600 €/Mo</>], [<>Gesamtkosten brutto</>, <>ca. 2.500–4.100 €/Mo</>], [<>− Sachleistungen (für den Pflegedienst)</>, <>− ca. 300–600 €/Mo</>], [<>− anteiliges Pflegegeld PG 3 (Kombinationsleistung)</>, <>− ca. 360–480 €/Mo</>], [<>− Entlastungsbudget (anteilig)</>, <>− ca. 295 €/Mo</>], [<>Eigenanteil ca.</>, <>ca. 1.450–2.850 €/Mo</>]'),
     '[<>24h-Kraft (Primundus)</>, <>ab 2.150 €/Mo</>], [<>Ambulanter Dienst (Behandlungspflege)</>, <>ca. 300 €/Mo</>], [<>Gesamtkosten</>, <>ab ca. 2.450 €/Mo</>], [<>− Sachleistungen (für den Pflegedienst)</>, <>− ca. 300 €/Mo</>], [<>− anteiliges Pflegegeld PG 3 (Kombinationsleistung)</>, <>− ca. 480 €/Mo</>], [<>− Entlastungsbudget (anteilig)</>, <>− ca. 295 €/Mo</>], [<>− Steuerermäßigung</>, <>− ca. 333 €/Mo</>], [<>Eigenanteil</>, <>ab ca. 1.040 €/Mo</>]'),
    ('Pflegeformen im Vergleich', app('nachteile-24h-pflege'),
     L('Auch mit allen Kassenzuschüssen bleibt ein Eigenanteil von typisch 1.000–2.000 €/Monat — für manche Familien zu viel.'),
     'Auch mit allen Zuschüssen und der Steuerermäßigung bleibt bei Pflegegrad 3 ein Eigenanteil ab ca. 923 €/Monat — für manche Familien zu viel.'),
    ('Pflegeformen im Vergleich', app('osteuropaeische-pflegekraft-oder-agentur'),
     L("'2.200–3.500 €/Mo — transparent'"), "'ab 2.150 €/Mo — transparent'"),
    ('Pflegeformen im Vergleich', app('osteuropaeische-pflegekraft-oder-agentur'),
     L("'Transparente Preise: 2.200–3.500 €/Monat, alles inklusive'"), "'Transparente Preise: ab 2.150 €/Monat, alle Kosten vorab genannt'"),

    # ── Anbieter-Vergleiche ───────────────────────────────────────────────────────────────
    ('Anbieter-Vergleiche', app('hausengel-alternative', 'pflegehelden-alternative', 'promedica24-alternative', 'anbieter-vergleich') + ['lib/anbieterVergleich.ts'],
     re.compile(r'\b([Aa]b) 2\.200 €'), r'\1 2.150 €'),

    # ── Pflegeheim-Vergleiche ─────────────────────────────────────────────────────────────
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim-kosten'),
     L('24h-Pflege: ab ca. 1.500 €/Monat nach Kassenzuschüssen.'), '24h-Pflege: bei Pflegegrad 3 ab ca. 923 €/Monat nach Zuschüssen und Steuer.'),
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim-kosten'),
     L('Bei Primundus 2.200–3.500 €/Monat brutto. Mit Pflegegeld (599 € bei Pflegegrad 3) sinkt der Eigenanteil auf ca. 1.850–2.150 €/Monat'),
     'Bei Primundus ab 2.150 €/Monat. Nach Pflegegeld (599 € bei Pflegegrad 3), Entlastungsbudget und Steuerermäßigung bleiben ab ca. 923 €/Monat'),
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim-kosten'),
     L('Bei der 24h-Pflege zuhause sinkt der Eigenanteil mit Kassenzuschüssen bei Pflegegrad 3 auf ca. 1.700–2.000 Euro.'),
     'Bei der 24h-Pflege zuhause bleiben bei Pflegegrad 3 nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro.'),
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim-kosten'),
     L("'24h-Pflege zuhause: 2.200–3.500 €/Monat brutto bei Primundus'"), "'24h-Pflege zuhause: ab 2.150 €/Monat bei Primundus'"),
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim-kosten'),
     L("'Nach Kassenzuschüssen (PG 3): Eigenanteil ca. 1.850–2.150 €/Monat'"), "'Nach Zuschüssen und Steuer (PG 3): Eigenanteil ab ca. 923 €/Monat'"),
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim-kosten'),
     L('Bei Primundus kostet 24h-Pflege 2.200–3.500 Euro pro Monat — je nach Pflegebedarf. Mit allen Kassenzuschüssen sinkt der tatsächliche Eigenanteil deutlich.'),
     'Bei Primundus kostet 24h-Pflege ab 2.150 Euro pro Monat — je nach Pflegebedarf. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro.'),
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim'),
     L('24h-Pflege über Primundus kostet 2.200–3.500 €/Monat, mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 typisch auf 1.500–2.000 €/Monat.'),
     '24h-Pflege über Primundus kostet ab 2.150 €/Monat; nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat.'),
    ('Pflegeheim-Vergleiche', app('24h-pflege-vs-pflegeheim'),
     L('"24h-Pflege brutto: 2.200–3.500 €/Monat", "24h-Pflege nach Zuschüssen: ca. 1.500–2.000 €/Monat"'),
     '"24h-Pflege: ab 2.150 €/Monat", "24h-Pflege nach Zuschüssen und Steuer: ab ca. 923 €/Monat"'),
    ('Pflegeheim-Vergleiche', app('pflegeheim-kosten-deutschland'),
     L('Bei PG 3 ist der Eigenanteil mit Primundus (optimiert) ca. 1.500–2.000 €/Monat — also bis zu 1.300 € weniger als im Pflegeheim (Ø 3.364 €/Monat).'),
     'Bei PG 3 bleiben mit Primundus nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 €/Monat — also bis zu rund 2.400 € weniger als im Pflegeheim (Ø 3.364 €/Monat).'),
    ('Pflegeheim-Vergleiche', app('pflegeheim-kosten-deutschland'),
     L('bei PG 3 ist der Eigenanteil mit 24h-Pflege zuhause (optimiert mit Zuschüssen) ca. 1.500–2.000 €/Monat — also bis zu 1.300 € weniger als im Pflegeheim (Ø 3.364 €/Monat).'),
     'bei PG 3 bleiben mit 24h-Pflege zuhause nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 €/Monat — also bis zu rund 2.400 € weniger als im Pflegeheim (Ø 3.364 €/Monat).'),
    ('Pflegeheim-Vergleiche', app('pflegeheim-kosten-deutschland'),
     L("'ca. 1.500–2.000 €/Monat*'"), "'ab ca. 923 €/Monat*'"),
    ('Pflegeheim-Vergleiche', app('pflegeheim-kosten-deutschland'),
     L('* PG 3, optimiert mit allen Kassenzuschüssen und Steuerabzug · Stand 2026'),
     '* PG 3, eine Person, nach Pflegegeld, Entlastungsbudget und Steuerermäßigung, Werte aus unserem Kostenrechner · Stand September 2026'),
    ('Pflegeheim-Vergleiche', app('pflegeheim-kostenvergleich'),
     L('Der durchschnittliche Eigenanteil bei 24h-Pflege zuhause liegt bei 1.500–2.500 €/Monat, bei einem Pflegeheim oft bei 2.700–3.500 €. Hochgerechnet sind das 8.000–12.000 € Ersparnis pro Jahr'),
     'Bei 24h-Pflege zuhause bleiben bei Pflegegrad 3 nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 €/Monat, bei einem Pflegeheim oft 2.700–3.500 €. Beim Grundpreis sind das über 20.000 € Unterschied pro Jahr'),
    ('Pflegeheim-Vergleiche', app('pflegeheim-kostenvergleich'),
     L('Eigenanteil 24h-Pflege: 1.500–2.500 €/Monat, Pflegeheim: Ø 3.364 €. Hochgerechnet 8.000–12.000 € Ersparnis pro Jahr.'),
     'Eigenanteil 24h-Pflege bei PG 3: ab ca. 923 €/Monat, Pflegeheim: Ø 3.364 €. Beim Grundpreis sind das über 20.000 € Unterschied pro Jahr.'),
    ('Pflegeheim-Vergleiche', app('vorteile-24h-pflege'),
     L('Oft ja — mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf 1.500–2.000 €/Monat.'),
     'Oft ja — nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat.'),
    ('Pflegeheim-Vergleiche', app('vorteile-24h-pflege'),
     L('24h-Pflege über Primundus kostet 2.200–3.500 €/Monat, davon können mit Pflegegeld, Entlastungsbetrag und Steuerabzug mehrere hundert Euro monatlich abgezogen werden.'),
     '24h-Pflege über Primundus kostet ab 2.150 €/Monat; davon gehen Pflegegeld, Entlastungsbudget und Steuerermäßigung ab.'),
    ('Pflegeheim-Vergleiche', app('vorteile-24h-pflege'),
     L('Bei Pflegegrad 3 sinkt der Eigenanteil mit allen Zuschüssen oft auf unter 1.500–2.000 €/Monat.'),
     'Bei Pflegegrad 3 bleiben so ab ca. 923 €/Monat.'),
    ('Pflegeheim-Vergleiche', app('vergleiche'),
     L("['24h-Pflege (Primundus)', '2.200–3.500 €', 'ca. 1.500–2.000 €', 'Eigenes Zuhause, 24h Betreuung']"),
     "['24h-Pflege (Primundus)', 'ab 2.150 €', 'ab ca. 923 € (PG 3)', 'Eigenes Zuhause, 24h Betreuung']"),

    # ── Ratgeber und Übersichten ──────────────────────────────────────────────────────────
    ('Ratgeber und Übersichten', app('alzheimer-betreuung-zuhause', 'demenz-pflege-zuhause'),
     L('Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat. Mit Pflegegeld (599 € bei Pflegegrad 3) bleiben rund 1.600–2.900 € im Monat.'),
     'Mit einer 24h-Betreuungskraft von Primundus: ab 2.150 €/Monat. Nach Pflegegeld (599 € bei Pflegegrad 3), Entlastungsbudget und Steuerermäßigung bleiben ab ca. 923 € im Monat.'),
    ('Ratgeber und Übersichten', app('24h-pflege-fuer-angehoerige'),
     L('2.200–3.500 €/Monat. Mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf ca. 1.500–2.000 €/Monat.'),
     'Ab 2.150 €/Monat. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat.'),
    ('Ratgeber und Übersichten', app('copd-pflege-zuhause'),
     L("'Bei Primundus 2.200–3.500 € pro Monat, je nach Betreuungsbedarf und Sprachkenntnissen der Kraft — die Diagnose selbst ändert den Preis nicht. Mit Pflegegeld und anteiligem Entlastungsbudget sinkt der Eigenanteil je nach Pflegegrad deutlich."),
     "'Bei Primundus ab 2.150 € pro Monat, je nach Betreuungsbedarf und Sprachkenntnissen der Kraft — die Diagnose selbst ändert den Preis nicht. Nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € im Monat."),
    ('Ratgeber und Übersichten', app('eigenanteil-24h-pflege-senken'),
     L('Mit allen Maßnahmen auf unter 1.500 €/Monat.'), 'Bei Pflegegrad 3 bleiben ab ca. 923 €/Monat.'),
    ('Ratgeber und Übersichten', app('eigenanteil-24h-pflege-senken'),
     L('zusammen über 1.200 € monatlich eingespart werden — aus Bruttokosten von 2.700 € werden ca. 1.470 € Eigenanteil.'),
     'zusammen über 1.200 € monatlich eingespart werden — beim Grundpreis von 2.150 € bleiben ab ca. 923 € Eigenanteil.'),
    ('Ratgeber und Übersichten', app('eigenanteil-24h-pflege-senken'),
     L('24h-Pflege kostet 2.200–3.500 Euro brutto — aber wer alle verfügbaren Leistungen kennt und kombiniert, kann den tatsächlichen Eigenanteil auf unter 1.500 Euro pro Monat senken.'),
     '24h-Pflege kostet ab 2.150 Euro im Monat — aber wer alle verfügbaren Leistungen kennt und kombiniert, senkt den tatsächlichen Eigenanteil bei Pflegegrad 3 auf ab ca. 923 Euro.'),
    ('Ratgeber und Übersichten', app('eigenanteil-24h-pflege-senken'),
     L('Bei Primundus-Kosten von 2.700 €/Monat (32.400 €/Jahr) sind das 4.000 € Maximalersparnis — entspricht ca. 333 €/Monat. Voraussetzung: Zahlung per Überweisung, Rechnung aufbewahren, Anlage V der Steuererklärung.'),
     'Schon beim Primundus-Grundpreis von 2.150 €/Monat (25.800 €/Jahr) sind das 4.000 € Maximalersparnis — entspricht ca. 333 €/Monat. Voraussetzung: Zahlung per Überweisung, Rechnung aufbewahren, Anlage Haushaltsnahe Aufwendungen der Steuererklärung.'),
    ('Ratgeber und Übersichten', app('foerderungen-nach-bundesland'),
     L('Bei Primundus-Kosten von 2.200–3.500 €/Monat ist der Steuereffekt erheblich.'),
     'Schon beim Primundus-Grundpreis von 2.150 €/Monat wird dieser Höchstbetrag erreicht.'),
    ('Ratgeber und Übersichten', app('pflege-nach-op'),
     L("'2.200–3.500 €/Monat über Primundus. Mit Pflegekasse-Zuschüssen (nach Pflegegrad), Kurzzeitpflege-Budget und Steuerabzug deutlich reduzierbar.'"),
     "'Ab 2.150 €/Monat über Primundus. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 €/Monat.'"),
    ('Ratgeber und Übersichten', app('pflegegrad-3'),
     L('24-Stunden-Pflege kostet bei Pflegegrad 3 in der Regel <strong>2.200–3.500 € brutto pro Monat</strong>, je nach Pflegebedarf und Qualifikation der Betreuungskraft. Die Pflegekasse übernimmt einen erheblichen Teil — der tatsächliche Eigenanteil liegt oft <strong>unter 2.000 € monatlich</strong>'),
     '24-Stunden-Pflege kostet bei Pflegegrad 3 <strong>ab 2.150 € pro Monat</strong>, je nach Pflegebedarf und Qualifikation der Betreuungskraft. Pflegekasse und Steuerermäßigung übernehmen einen erheblichen Teil — der tatsächliche Eigenanteil liegt <strong>ab ca. 923 € monatlich</strong>'),
    ('Ratgeber und Übersichten', app('pflegegrad-4'),
     re.compile(r"\['24h-Pflege Primundus \(brutto\)', 'ca\. 3\.000 €/Monat'\],\s*\['Abzüglich Pflegegeld PG 4', '– 800 €/Monat'\],\s*\['Eigenanteil ca\.', 'ca\. 2\.200 €/Monat'\],"),
     "['24h-Pflege Primundus', 'ab 2.150 €/Monat'],\n                  ['Abzüglich Pflegegeld PG 4', '– 800 €/Monat'],\n                  ['Abzüglich Entlastungsbudget (anteilig)', '– 295 €/Monat'],\n                  ['Abzüglich Steuerermäßigung', '– 333 €/Monat'],\n                  ['Eigenanteil', 'ab ca. 722 €/Monat'],"),
    ('Ratgeber und Übersichten', app('pflege-steuerlich-absetzen'),
     L('Die Kosten werden in der Anlage V der Steuererklärung eingetragen.'), 'Die Kosten werden in der Anlage Haushaltsnahe Aufwendungen der Steuererklärung eingetragen.'),
    ('Ratgeber und Übersichten', app('pflege-steuerlich-absetzen'),
     L("'Eintrag: Anlage V der Einkommensteuererklärung'"), "'Eintrag: Anlage Haushaltsnahe Aufwendungen der Einkommensteuererklärung'"),
    ('Ratgeber und Übersichten', app('pflege-steuerlich-absetzen'),
     L("{ title: 'Anlage V ausfüllen', desc: 'In der Einkommensteuererklärung: Anlage V \"Haushaltsnahe Aufwendungen\"."),
     "{ title: 'Anlage Haushaltsnahe Aufwendungen ausfüllen', desc: 'In der Einkommensteuererklärung: Anlage „Haushaltsnahe Aufwendungen\"."),
    ('Ratgeber und Übersichten', app('pflege-steuerlich-absetzen'),
     L('Eintrag in Anlage V der Steuererklärung.'), 'Eintrag in der Anlage Haushaltsnahe Aufwendungen der Steuererklärung.'),
    ('Ratgeber und Übersichten', app('ratgeber'),
     L('"Die Kosten für eine 24h-Pflegekraft liegen bei Primundus zwischen 2.200 und 3.500 Euro pro Monat, abhängig von Pflegebedarf und Qualifikation der Betreuungskraft. Pflegegeld und andere Leistungen der Pflegekasse können die Eigenkosten deutlich reduzieren."'),
     '"Eine 24h-Pflegekraft kostet bei Primundus ab 2.150 Euro pro Monat, abhängig von Pflegebedarf und Qualifikation der Betreuungskraft. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro im Monat."'),
    ('Ratgeber und Übersichten', app('tools'),
     L("'Die Kosten für eine 24h-Betreuungskraft bei Primundus liegen zwischen 2.200 und 3.500 €/Monat. Nach Abzug von Pflegegeld, Entlastungsbudget und Steuervorteilen reduziert sich der Eigenanteil je nach Pflegegrad auf ca. 500 bis 1.800 €/Monat.'"),
     "'Bei Primundus kostet die Betreuung ab 2.150 €/Monat. Nach Abzug von Pflegegeld, Entlastungsbudget und Steuervorteil bleiben bei Pflegegrad 3 ab ca. 923 €/Monat (Pflegegrad 2: ab ca. 1.175 €, Pflegegrad 5: ab ca. 582 €) — oft günstiger als ein Pflegeheimplatz.'"),
    ('Ratgeber und Übersichten', app('tools'),
     L("'Bei Primundus liegen die Kosten zwischen 2.200 und 3.500 €/Monat. Nach Abzug von Pflegegeld, Entlastungsbudget und Steuervorteilen reduziert sich der Eigenanteil je nach Pflegegrad auf ca. 500 bis 1.800 €/Monat — oft günstiger als ein Pflegeheimplatz.'"),
     "'Bei Primundus kostet die Betreuung ab 2.150 €/Monat. Nach Abzug von Pflegegeld, Entlastungsbudget und Steuervorteil bleiben bei Pflegegrad 3 ab ca. 923 €/Monat (Pflegegrad 2: ab ca. 1.175 €, Pflegegrad 5: ab ca. 582 €) — oft günstiger als ein Pflegeheimplatz.'"),

    # ── Kernseiten ────────────────────────────────────────────────────────────────────────
    ('Kernseiten', app('24-stunden-pflege'), L('Ab 2.200 €/Monat.'), 'Ab 2.150 €/Monat.'),
    ('Kernseiten', app('24-stunden-pflege'), L('Ab 2.200 Euro pro Monat.'), 'Ab 2.150 Euro pro Monat.'),
    ('Kernseiten', app('24-stunden-pflege'),
     L("'Bei Primundus kostet 24h-Pflege 2.200–3.500 Euro pro Monat, je nach Pflegebedarf. Mit Pflegegeld (bis 990 €/Monat) und Entlastungsbudget (3.539 €/Jahr) sinkt der Eigenanteil deutlich. Kostenlose Beratung: 089 200 000 830.'"),
     "'Ab 2.150 €/Monat je nach Pflegebedarf. Nach Pflegegeld (bis 990 €/Monat), Entlastungsbudget (3.539 €/Jahr) und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 €/Monat. Kostenlose Beratung: 089 200 000 830.'"),
    ('Kernseiten', app('24-stunden-pflege'),
     L("'2.200–3.500 €/Monat je nach Pflegebedarf. Mit Pflegegeld (bis 990 €/Monat) und Entlastungsbudget (3.539 €/Jahr) sinkt der Eigenanteil erheblich. Kostenlose Beratung: 089 200 000 830.'"),
     "'Ab 2.150 €/Monat je nach Pflegebedarf. Nach Pflegegeld (bis 990 €/Monat), Entlastungsbudget (3.539 €/Jahr) und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 €/Monat. Kostenlose Beratung: 089 200 000 830.'"),
    ('Kernseiten', app('24-stunden-pflege'),
     L('Die monatlichen Kosten liegen bei 2.200–3.500 Euro je nach Pflegebedarf. Mit Kassenzuschüssen sinkt der Eigenanteil deutlich — und ist oft günstiger als ein Pflegeheim.'),
     'Die monatlichen Kosten beginnen bei 2.150 Euro, je nach Pflegebedarf. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro — oft deutlich weniger als im Pflegeheim.'),
    ('Kernseiten', app('testsieger-24-stunden-pflege'),
     L("'Eine 24-Stunden-Betreuung kostet bei Primundus meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen der Betreuungskraft. Nach Abzug der Pflegekassen-Zuschüsse bleiben oft rund 1.500 bis 2.500 Euro selbst zu tragen.'"),
     "'Eine 24-Stunden-Betreuung kostet bei Primundus ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen der Betreuungskraft. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.'"),
    ('Kernseiten', app('testsieger-24-stunden-pflege'),
     L('Eine 24-Stunden-Betreuung kostet bei Primundus meist zwischen 2.200 und 3.500 Euro im Monat — je nach'),
     'Eine 24-Stunden-Betreuung kostet bei Primundus ab 2.150 Euro im Monat — je nach'),
    ('Kernseiten', app('testsieger-24-stunden-pflege'),
     L('Nach Abzug der Pflegekassen-Zuschüsse bleiben oft rund 1.500 bis 2.500 Euro selbst zu tragen.'),
     'Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.'),
    ('Kernseiten', app('was-ist-24-stunden-pflege'),
     L('kostet 2.200–3.500 €/Monat und ist die günstigste Alternative'), 'kostet ab 2.150 €/Monat und ist die günstigste Alternative'),
    ('Kernseiten', app('was-ist-24-stunden-pflege'),
     re.compile(r"'Die (?:monatlichen )?Kosten liegen zwischen 2\.200 und 3\.500 Euro(?: pro Monat)?\. Das Pflegegeld \(bis 990 €/Monat bei Pflegegrad 5\) und das Entlastungsbudget \(3\.539 €/Jahr\) der Pflegekasse können die Eigenkosten erheblich senken\. Steuerlich sind 20 % der Kosten als haushaltsnahe Dienstleistung absetzbar\.'"),
     "'Die monatlichen Kosten beginnen bei 2.150 Euro. Das Pflegegeld (bis 990 €/Monat bei Pflegegrad 5) und das Entlastungsbudget (3.539 €/Jahr) der Pflegekasse senken die Eigenkosten erheblich, dazu sind 20 % der Kosten als haushaltsnahe Dienstleistung steuerlich absetzbar. Bei Pflegegrad 3 bleiben so ab ca. 923 € im Monat.'"),
    ('Kernseiten', app('was-ist-24-stunden-pflege'),
     L('Die monatlichen Kosten liegen zwischen 2.200 und 3.500 Euro. Sie ist'), 'Die monatlichen Kosten beginnen bei 2.150 Euro. Sie ist'),
    ('Kernseiten', app('was-ist-24-stunden-pflege'),
     L("'Kosten: 2.200–3.500 €/Monat je nach Pflegebedarf und Anbieter'"), "'Kosten bei Primundus: ab 2.150 €/Monat, je nach Pflegebedarf'"),
    ('Startseite', ['app/page.tsx'],
     L('Die Kosten für eine 24-Stunden-Betreuung liegen je nach Pflegebedarf und Qualifikation der Betreuungskraft zwischen <strong className="text-pm-ink">2.200 € und 3.500 € pro Monat</strong>.'),
     'Die Kosten für eine 24-Stunden-Betreuung beginnen bei <strong className="text-pm-ink">2.150 € pro Monat</strong>, je nach Pflegebedarf und Qualifikation der Betreuungskraft.'),
    ('Startseite', ['app/page.tsx'],
     L('Nach Abzug von Pflegegeld, Verhinderungspflege und Entlastungsbetrag liegt der tatsächliche <strong className="text-pm-ink">Eigenanteil meist bei 1.500–2.500 € monatlich</strong>'),
     'Nach Abzug von Pflegegeld, Entlastungsbudget und Steuerermäßigung liegt der tatsächliche <strong className="text-pm-ink">Eigenanteil bei Pflegegrad 3 ab ca. 923 € monatlich</strong>'),

    # ── Daten für Maschinen ───────────────────────────────────────────────────────────────
    ('llms.txt und Faktendatei', ['public/llms.txt'],
     L('- Preis: ab ca. 2.200 €/Monat je nach Pflegebedarf (2.200–3.500 €/Monat)'),
     '- Preis: ab 2.150 €/Monat für eine Person (Kostenrechner); bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 €/Monat'),
    ('llms.txt und Faktendatei', ['lib/fakten.ts'],
     L("/** Primundus-Preisspanne €/Monat (Angebotsrealität, Betreiber-bestätigt als kanonisch) */\nexport const PREIS_MIN = 2200\nexport const PREIS_MAX = 3500\nexport const PREIS_SPANNE = '2.200–3.500 €/Monat'"),
     "/** Primundus-Grundpreis €/Monat für eine Person: Kostenrechner, pricing_config „basis\" (Martin 17.09.2026: Preise aus dem Rechner, keine Spanne) */\nexport const PREIS_AB = 2150\nexport const PREIS_AB_TEXT = 'ab 2.150 €/Monat'"),
    # ── Grafik, Fußnoten, Finanzierung (Nachtrag nach dem Prüfskript) ────────────────────────
    ('Grafik und Fußnoten', ['components/charts/GrafikKostenvergleich.tsx'],
     re.compile(r"\n  const pflegegrade = \[[\s\S]*?\n  \]\n"), ''),
    ('Grafik und Fußnoten', ['components/charts/GrafikKostenvergleich.tsx'],
     L("{ label: 'Betreuungskosten/Monat', value: '2.500 €', type: 'neutral' }, { label: 'Pflegegeld Pflegegrad 3', value: '– 599 €', type: 'positive' }, { label: 'Entlastungsbetrag/Monat', value: '– 131 €', type: 'positive' }, { label: 'Steuerabzug (ca.)', value: '– 50 €', type: 'positive' },"),
     "{ label: 'Betreuung/Monat, eine Person', value: 'ab 2.150 €', type: 'neutral' },\n                { label: 'Pflegegeld Pflegegrad 3', value: '– 599 €', type: 'positive' },\n                { label: 'Entlastungsbudget (anteilig)', value: '– 295 €', type: 'positive' },\n                { label: 'Steuerermäßigung (20 %)', value: '– 333 €', type: 'positive' },"),
    ('Grafik und Fußnoten', ['components/charts/GrafikKostenvergleich.tsx'],
     L('<span className="text-[20px] font-bold text-pm-taupe">ca. 1.720 €</span>'), '<span className="text-[20px] font-bold text-pm-taupe">ab ca. 923 €</span>'),
    ('Grafik und Fußnoten', ['components/charts/GrafikKostenvergleich.tsx'],
     L("{ label: 'Gesamtkosten/Monat', value: 'ab 4.000 €', type: 'neutral' }, { label: 'Pflegekasse übernimmt', value: '– ca. 1.500 €', type: 'positive' }, { label: 'Unterkunft/Verpflegung', value: 'inklusive', type: 'neutral' }, { label: 'Investitionsumlage', value: 'inklusive', type: 'neutral' },"),
     "{ label: 'Unterkunft/Verpflegung', value: 'im Eigenanteil', type: 'neutral' },\n                { label: 'Investitionskosten', value: 'im Eigenanteil', type: 'neutral' },"),
    ('Grafik und Fußnoten', ['components/charts/GrafikKostenvergleich.tsx'],
     L('<span className="text-[20px] font-bold text-pm-ink">ab 2.500 €</span>'), '<span className="text-[20px] font-bold text-pm-ink">3.364 €</span>'),
    ('Grafik und Fußnoten', ['components/charts/GrafikKostenvergleich.tsx'],
     L('<strong>Zusätzlich:</strong> Gemeinsames Entlastungsbudget 3.539 €/Jahr (seit Juli 2025) für Verhinderungs- und Kurzzeitpflege. Steuerabzug haushaltsnahe Dienstleistung: 20 % der Kosten, max. 4.000 €/Jahr Ersparnis.'),
     '<strong>Nicht eingerechnet:</strong> An- und Abreise der Betreuungskraft mit 125 € je Strecke. Kost und Logis stellen Sie im Haushalt.'),
    ('Grafik und Fußnoten', ['components/charts/GrafikKostenvergleich.tsx'],
     L('Ø-Eigenanteil Pflegeheim: vdek 2024 · Pflegegeld: GKV-Spitzenverband 2025'),
     'Pflegeheim: vdek, Stand 1. Juli 2026 · 24-Stunden-Pflege: unser Kostenrechner, Stand September 2026'),
    ('Grafik und Fußnoten', app('vergleiche'),
     L('Eigenanteil 24h-Pflege mit Pflegegeld + Entlastungsbetrag + Entlastungsbudget optimiert · Stand 2026'),
     'Eigenanteil 24h-Pflege: eine Person, Pflegegrad 3, nach Pflegegeld, Entlastungsbudget und Steuerermäßigung · Stand September 2026'),
    ('Grafik und Fußnoten', app('finanzierung'),
     L("'Die wichtigsten Zuschüsse: Pflegegeld (347–990 €/Monat je nach Pflegegrad), Entlastungsbetrag (131 €/Monat), Entlastungsbudget (3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege) und steuerlicher Abzug (20 % der Kosten, max. 4.000 € Ersparnis/Jahr). Richtig kombiniert sinkt der Eigenanteil bei PG 3 auf unter 1.800 €/Monat.'"),
     "'Die wichtigsten Zuschüsse: Pflegegeld (347–990 €/Monat je nach Pflegegrad), Entlastungsbudget (3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege) und steuerlicher Abzug (20 % der Kosten, max. 4.000 € Ersparnis/Jahr). Den Entlastungsbetrag (131 €/Monat) zahlt die Kasse nur für anerkannte Alltagshilfen, in der Regel nicht für die Betreuungskraft. Richtig kombiniert bleiben bei PG 3 ab ca. 923 €/Monat.'"),
    ('Kernseiten', app('24-stunden-pflege'), L("priceRange: '2200-3500 €/Monat'"), "priceRange: 'ab 2150 €/Monat'"),
]


def anwenden():
    bericht = []
    geaendert = set()
    for gruppe, dateien, muster, ersatz in REGELN:
        if OHNE_STARTSEITE and gruppe == 'Startseite':
            continue
        if NUR_GRUPPE and gruppe != NUR_GRUPPE:
            continue
        treffer, beispiel = 0, None
        for f in dateien:
            if not os.path.exists(f):
                continue
            s = open(f, encoding='utf-8').read()
            m = muster.search(s)
            if not m:
                continue
            if beispiel is None:
                beispiel = (f, m.group(0), m.expand(ersatz) if '\\' in ersatz else ersatz)
            neu, n = muster.subn(ersatz, s)
            treffer += n
            if neu != s:
                geaendert.add(f)
                if not NUR_ZAEHLEN:
                    open(f, 'w', encoding='utf-8').write(neu)
        bericht.append({'gruppe': gruppe, 'treffer': treffer, 'dateien': len([f for f in dateien if os.path.exists(f)]),
                        'beispiel_datei': beispiel[0] if beispiel else None,
                        'alt': re.sub(r'\s+', ' ', beispiel[1]) if beispiel else None,
                        'neu': re.sub(r'\s+', ' ', beispiel[2]) if beispiel else None})
    return bericht, geaendert


bericht, geaendert = anwenden()
leer = [b for b in bericht if b['treffer'] == 0]
for b in bericht:
    print(f"{b['treffer']:>4}  {b['gruppe']:<28} {(b['alt'] or '— KEIN TREFFER —')[:90]}")
print(f'\n{len(geaendert)} Dateien {"würden geändert" if NUR_ZAEHLEN else "geändert"}, {len(leer)} Regeln ohne Treffer')
if BERICHT:
    json.dump({'regeln': bericht, 'dateien': sorted(geaendert)}, open(BERICHT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
sys.exit(1 if leer else 0)
