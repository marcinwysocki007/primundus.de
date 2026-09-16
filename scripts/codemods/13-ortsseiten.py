#!/usr/bin/env python3
"""Ortsseiten auf die Seitenvorlage umstellen (16.09.2026).

Liest eine bestehende Ortsseite, zieht die ortseigenen Texte heraus und schreibt die
Seite mit den Bausteinen aus components/vorlage/Ratgeber.tsx neu: Kopf mit „Auf einen
Blick", Seitenleiste mit Inhaltsverzeichnis, Flaechen statt Kaesten, keine Emoji,
Fliesstext 17 px. Inhalt bleibt Wort fuer Wort gleich — ausser den Korrekturen in
KORREKTUREN (Nachtaussage wie auf den Ratgebern, Martin 14.09.).

    python3 scripts/codemods/13-ortsseiten.py app/24h-pflege-muenchen/page.tsx [--schreiben]
"""
import re
import sys

# Nachtaussage wie auf den Ratgebern freigegeben (Martin 14.09.: „bei Bedarf auch nachts vor Ort"),
# dazu die Prozent-Pille und der kaputte Satz auf der Muenchener Seite.
KORREKTUREN = [
    ('Sie ist rund um die Uhr erreichbar', 'Sie ist bei Bedarf auch nachts da'),
    ('Tag & Nacht da', 'Nachts im Haus'),
    ('Rund um die Uhr erreichbar — auch nachts', 'Da, wenn nachts Hilfe gebraucht wird'),
    ('Nachtbereitschaft — immer erreichbar', 'Nachts im Haus — da, wenn Hilfe gebraucht wird'),
    ('lebt im Haushalt — ist nachts da,', 'lebt im Haushalt — ist bei Bedarf auch nachts da,'),
    ('Gesellschaft und Begleitung — ganztags', 'Gesellschaft und Begleitung im Alltag'),
    ('und ist rund um die Uhr da', 'und ist bei Bedarf auch nachts da'),
    ('und ist Tag und Nacht da', 'und ist bei Bedarf auch nachts da'),
    ('im Haushalt lebt und rund um die Uhr da ist', 'im Haushalt lebt und bei Bedarf auch nachts da ist'),
    ('rund um die Uhr da, im vertrauten Zuhause', 'bei Bedarf auch nachts da, im vertrauten Zuhause'),
    ('Primundus ist mit eigenen Betreuungskräften in München seit 20 Jahren geprüfte ',
     'Primundus betreut in München seit 20 Jahren mit eigenen Betreuungskräften — '),
    ('die mit einziehen und rund um die Uhr da sind.', 'die mit einziehen und im Haushalt leben.'),
    ('die mit einziehen und bei Bedarf auch nachts da sind.', 'die mit einziehen und im Haushalt leben.'),
    (' — es muss also in der vorhandenen gehen.', ' — es muss also in der vorhandenen gehen.'),
    (' — ein Umzug in eine größere Wohnung ist für die meisten keine Option.', '.'),
]


def hol(q, muster, name, flags=re.S):
    m = re.search(muster, q, flags)
    if not m:
        raise SystemExit(f'FEHLT: {name}')
    return m.group(1).strip()


def jsx(text: str) -> str:
    """Absatz-Rohtext (kann Links enthalten) fuer JSX-Kinder aufbereiten."""
    return ' '.join(text.split())


def js(text: str) -> str:
    """String fuer einfache Anfuehrungszeichen in JS."""
    return text.replace('\\', '\\\\').replace("'", "\\'")


def anker(titel: str) -> str:
    t = titel.lower()
    for a, b in [('ä', 'ae'), ('ö', 'oe'), ('ü', 'ue'), ('ß', 'ss'), ('&', 'und')]:
        t = t.replace(a, b)
    t = re.sub(r'[^a-z0-9]+', '-', t).strip('-')
    return '-'.join(t.split('-')[:4])


def teile(q):
    t = {}
    t['metadata'] = hol(q, r'(export const metadata: Metadata = \{.*?\n\})\n', 'metadata')
    t['schema'] = hol(q, r'(const schemaMarkup = \[.*?\n\])\n', 'schema')
    t['stadt'] = hol(q, r"areaServed: \{ '@type': '[A-Za-z]+', name: '([^']+)' \}", 'stadt')
    t['datum'] = hol(q, r'Aktualisiert am ([^<\n]+)\n', 'datum')
    t['h1'] = jsx(hol(q, r'<h1[^>]*>\s*(.*?)\s*</h1>', 'h1'))
    t['intro'] = jsx(hol(q, r'</h1>\s*<p className="text-\[17px\][^"]*">\s*(.*?)\s*</p>', 'intro'))
    t['wasist'] = jsx(hol(q, r'(Bei der 24-Stunden-Betreuung lebt eine Betreuungskraft dauerhaft im Haushalt\..*?)\s*</p>', 'wasist'))
    t['fuerwen'] = jsx(hol(q, r'(Viele Familien stehen irgendwann vor demselben Moment:.*?)\s*</p>', 'fuerwen'))
    t['ergaenzung'] = jsx(hol(q, r'<strong className="font-bold text-pm-ink">(Beide gemeinsam.*?)</p>', 'ergaenzung').replace('</strong>', ''))
    t['nicht_sicher'] = jsx(hol(q, r'(Nicht sicher ob 24h-Pflege.*?)\s*</p>', 'nicht_sicher'))
    t['nicht_ausreicht'] = jsx(hol(q, r'(Bei intensivem medizinischem Versorgungsbedarf.*?)\s*</p>', 'nicht_ausreicht'))
    t['kraft'] = re.findall(r"'((?:[^'\\]|\\.)+)'", hol(q, r"\{(\['Körperpflege — Waschen.*?\])\.map", 'kraft'))
    t['dienst'] = re.findall(r"'((?:[^'\\]|\\.)+)'", hol(q, r"\{(\['Injektionen.*?\])\.map", 'dienst'))
    t['karten3'] = re.findall(r"\{ icon: '[^']*', title: '((?:[^'\\]|\\.)+)', desc: '((?:[^'\\]|\\.)+)' \}", hol(q, r"(\{ icon: '🏠', title: 'Eigenes Zuhause'.*?)\]\.map", 'karten3'))
    t['karten6'] = re.findall(r"\{ icon: '[^']*', title: '((?:[^'\\]|\\.)+)', desc: '((?:[^'\\]|\\.)+)' \}", hol(q, r"(\{ icon: '🧓'.*?)\]\.map", 'karten6'))
    t['pg'] = re.findall(r"\['(PG \d)','([^']+)','([^']+)'\]", q)
    t['konditionen'] = re.findall(r"\{ icon: '[^']*', title: '((?:[^'\\]|\\.)+)', desc: '((?:[^'\\]|\\.)+)' \}", hol(q, r"(\{ icon: '🛡'.*?)\]\.map", 'konditionen'))
    t['kosten'] = re.findall(r"\{ label: '([^']+)', value: '([^']+)', green: (true|false) \}", q)
    t['eigenanteil'] = hol(q, r'<span className="text-pm-taupe">([^<]+)</span>', 'eigenanteil')
    t['heim'] = jsx(hol(q, r'<p className="text-\[12px\] text-pm-mute">(Pflegeheim[^<]*)</p>', 'heim'))
    m = re.search(r'<p className="text-\[13px\] font-bold text-pm-green-deep mb-1">([^<]+)</p>\s*<p[^>]*>\s*(.*?)\s*</p>', q, re.S)
    t['land_titel'], t['land_text'] = (m.group(1), jsx(m.group(2))) if m else ('', '')
    t['rechner_src'] = hol(q, r'kostenrechner\.primundus\.de/\?start=1&amp;src=([a-z0-9-]+)', 'rechner_src')
    t['rechner_text'] = jsx(hol(q, r'(Welcher Pflegegrad realistisch ist.*?)\s*</p>', 'rechner_text'))
    t['rechner_link'] = jsx(hol(q, r'→ (Preis und Betreuungskräfte[^<]*)</a>', 'rechner_link'))
    t['polen_intro'] = jsx(hol(q, r'Polnische Betreuungskräfte in [^<]*</h2>\s*<p[^>]*>\s*(.*?)\s*</p>', 'polen_intro'))
    t['polen_box'] = jsx(hol(q, r'(Das ist der Unterschied, der im Alltag zählt:.*?)\s*</p>', 'polen_box'))
    t['polen_p'] = [jsx(x) for x in re.findall(r'<p className="text-\[15px\] leading-relaxed text-pm-body mb-4">\s*(<strong.*?)\s*</p>', q, re.S)]
    t['polen_schluss'] = jsx(hol(q, r'<p className="text-\[15px\] leading-relaxed text-pm-body mb-8">\s*(Wie das Entsendemodell.*?)\s*</p>', 'polen_schluss'))
    t['einzug'] = jsx(hol(q, r'Einzugsgebiet [^<]*</p>\s*<p[^>]*>(.*?)</p>', 'einzug'))
    zen = hol(q, r'Was die Pflege zu Hause in [^<]*</h2>\s*(.*?)<p className="text-\[13px\] text-pm-mute mb-10">', 'zensus')
    t['zensus'] = [jsx(x) for x in re.findall(r'<p className="text-\[15px\] leading-relaxed text-pm-body mb-(?:4|10)">\s*(.*?)\s*</p>', zen, re.S)]
    t['quelle'] = jsx(hol(q, r'<p className="text-\[13px\] text-pm-mute mb-10">\s*(Zahlen zu Wohnen.*?)\s*</p>', 'quelle'))
    t['faq'] = re.findall(r"\{ q: '((?:[^'\\]|\\.)*)', a: '((?:[^'\\]|\\.)*)' \},", q)
    t['nearby'] = hol(q, r'<NearbyCities current="([^"]+)"', 'nearby')
    t['ablauf'] = re.findall(r"\{ n: '\d', title: '([^']+)', desc: '((?:[^'\\]|\\.)*)', chip: '([^']*)' \}", q)
    return t


def korrigiere(t):
    """Nachtaussage und Einzelfehler — auf allen Textfeldern."""
    def fix(s):
        for alt, neu in KORREKTUREN:
            s = s.replace(alt, neu)
        return s
    for k, v in t.items():
        if isinstance(v, str) and k != 'metadata':
            t[k] = fix(v)
        elif isinstance(v, list):
            t[k] = [fix(x) if isinstance(x, str) else tuple(fix(y) for y in x) for x in v]
    return t


def bauen(t):
    s = t['stadt']
    ab = [
        ('was-ist-24-stunden-betreuung', f'Was ist 24-Stunden-Betreuung — und was unterscheidet sie von allem anderen?'),
        ('fuer-wen-ist-24h-pflege', 'Für wen ist 24h-Pflege die richtige Wahl?'),
        ('was-macht-eine-betreuungskraft', 'Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?'),
        ('kosten-und-kassenzuschuesse', f'Kosten und Kassenzuschüsse in {s} 2026'),
        ('polnische-betreuungskraefte', f'Polnische Betreuungskräfte in {s}'),
        ('pflege-zu-hause-vor-ort', f'Was die Pflege zu Hause in {s} ausmacht'),
        ('einzugsgebiet', f'Einzugsgebiet {s}'),
        ('so-arbeiten-wir', 'So arbeiten wir'),
        ('haeufige-fragen', f'Häufige Fragen — 24h-Pflege in {s}'),
    ]
    sections = ',\n'.join(f"  {{ id: '{i}', title: \"{ti}\" }}" for i, ti in ab)
    punkte = lambda paare: ',\n'.join(f"                {{ title: '{js(a)}', desc: '{js(b)}' }}" for a, b in paare)
    liste = lambda xs: ', '.join(f"'{js(x)}'" for x in xs)
    kosten_zeilen = ',\n'.join(f"                [' {js(a)}', '{js(b)}']".replace("[' ", "['") for a, b, _ in t['kosten'])
    blick = [f"Preis bei Primundus: {t['kosten'][0][1]}", f"Ihr Eigenanteil bei Pflegegrad 3: {t['eigenanteil']}"]
    heim_kurz = t['heim'].split(' — ')[0]
    blick.append(heim_kurz)
    if t['land_titel']:
        blick.append(t['land_titel'].replace('-Vorteil:', ':'))
    blick += ['Täglich kündbar, keine Vermittlungsgebühr', 'Anreise in 3 Tagen möglich']
    schritte = ',\n'.join(
        f"                {{ title: '{js(a)}', desc: '{js(b)}', tag: '{js(c.replace('⏱ ', '').replace('✉ ', '').replace('📅 ', ''))}', tagTon: 'gruen' }}"
        for a, b, c in t['ablauf'])
    land = ''
    if t['land_titel']:
        land = f"""
            <Kasten ton="gruen" titel="{t['land_titel']}">
              <Text>{t['land_text']}</Text>
            </Kasten>
"""
    return f"""import type {{ Metadata }} from 'next'
import {{ KontaktBand }} from '@/components/ArticleCTA'
import {{ NearbyCities }} from '@/components/NearbyCities'
import {{
  Abschnitt, DunklerAbschnitt, Fragen, Gegenueber, Kasten, MehrDazu, Punkte,
  RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
}} from '@/components/vorlage/Ratgeber'
import {{ ArticleProgressBar }} from '@/components/ArticleProgressBar'
import {{ ArticleTOC }} from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026, Musterseite {s}): Kopf mit „Auf einen
// Blick", Seitenleiste mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji,
// Fließtext 17 px. Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert
// bis auf die Nachtaussage (Martin 14.09.: „bei Bedarf auch nachts vor Ort").

const SECTIONS = [
{sections},
]

{t['metadata']}

{t['schema']}

const FRAGEN = [
{chr(10).join(f"  {{ q: '{js(a)}', a: '{js(b)}' }}," for a, b in t['faq'])}
]

export default function Page() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(schemaMarkup) }}}} />
      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={{SECTIONS}} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={{[
            {{ label: 'Startseite', href: '/' }},
            {{ label: 'Regionen', href: '/regionen' }},
            {{ label: '{js(s)}' }},
          ]}}
          augenbraue="24-Stunden-Pflege in {s}"
          titel="{js(t['h1'])}"
          einleitung={{<>{t['intro']}</>}}
          aktualisiert="{t['datum']}"
          lesezeit="6 Min."
          blick={{[
{chr(10).join(f"            '{js(b)}'," for b in blick)}
          ]}}
          blickTitel="{s} auf einen Blick"
        />

        <RatgeberRumpf abschnitte={{SECTIONS}}>
          <Abschnitt id="{ab[0][0]}" titel="{ab[0][1]}">
            <Text>{t['wasist']}</Text>
            <Punkte
              punkte={{[
{punkte(t['karten3'])},
              ]}}
            />
          </Abschnitt>

          <Abschnitt id="{ab[1][0]}" titel="{ab[1][1]}">
            <Text>{t['fuerwen']}</Text>
            <Punkte
              punkte={{[
{punkte(t['karten6'])},
              ]}}
            />
            <Kasten augenbraue="Wann 24h-Pflege allein nicht ausreicht">
              <Text>{t['nicht_ausreicht']}</Text>
            </Kasten>
            <Kasten ton="koralle">
              <Text>{t['nicht_sicher']}</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="{ab[2][0]}" titel="{ab[2][1]}">
            <Gegenueber
              seiten={{[
                {{ titel: 'Betreuungskraft übernimmt', ton: 'gruen', punkte: [{liste(t['kraft'])}] }},
                {{ titel: 'Ambulanter Pflegedienst ergänzt', ton: 'taupe', punkte: [{liste(t['dienst'])}] }},
              ]}}
            />
            <Text>{t['ergaenzung']}</Text>
          </Abschnitt>

          <Abschnitt id="{ab[3][0]}" titel="{ab[3][1]}">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in {s}"
              zeilen={{[
{kosten_zeilen},
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">{t['eigenanteil']}</strong>],
              ]}}
              betont={{1}}
              fuss="{js(t['heim'])}"
            />
            <Tabelle
              titel="Was die Pflegekasse zahlt"
              kopf={{['Pflegegrad', 'Pflegegeld je Monat', 'Entlastungsbudget je Jahr']}}
              zeilen={{[
{chr(10).join(f"                ['{a}', '{b}', '{c}']," for a, b, c in t['pg'])}
              ]}}
              betont={{1}}
              fuss="Stand 2026 · bundesweit einheitlich"
            />{land}
            <Kasten titel="Ihren eigenen Fall durchrechnen">
              <Text>{t['rechner_text']}</Text>
              <MehrDazu
                label="Rechner:"
                links={{[
                  {{ href: '/pflegegrad-rechner', text: 'Pflegegrad berechnen — dieselben sechs Module wie bei der Begutachtung' }},
                  {{ href: 'https://kostenrechner.primundus.de/?start=1&src={t['rechner_src']}', text: '{js(t['rechner_link'])}' }},
                ]}}
              />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="{ab[4][0]}" titel="{ab[4][1]}">
            <Text>{t['polen_intro']}</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>{t['polen_box']}</Text>
            </Kasten>
{chr(10).join(f"            <Text>{p}</Text>" for p in t['polen_p'])}
            <Text>{t['polen_schluss']}</Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="{ab[5][0]}"
            titel="{ab[5][1]}"
            einleitung={{<>{t['zensus'][0]}</>}}
            punkte={{[]}}
          >
{chr(10).join(f"            <Text>{p}</Text>" for p in t['zensus'][1:])}
            <p className="text-[15px] leading-[1.6] text-pm-deep-body">{t['quelle']}</p>
          </DunklerAbschnitt>

          <Abschnitt id="{ab[6][0]}" titel="{ab[6][1]}">
            <Text>{t['einzug']}</Text>
            <NearbyCities current="{t['nearby']}" />
          </Abschnitt>

          <Abschnitt id="{ab[7][0]}" titel="{ab[7][1]}">
            <Punkte
              punkte={{[
{punkte(t['konditionen'])},
              ]}}
            />
            <Schritte
              schritte={{[
{schritte},
              ]}}
            />
          </Abschnitt>

          <Abschnitt id="{ab[8][0]}" titel="{ab[8][1]}">
            <Fragen fragen={{FRAGEN}} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}}
"""


if __name__ == '__main__':
    pfad = sys.argv[1]
    quelle = open(pfad, encoding='utf-8').read()
    neu = bauen(korrigiere(teile(quelle)))
    if '--schreiben' in sys.argv:
        open(pfad, 'w', encoding='utf-8').write(neu)
        print('geschrieben', pfad, len(neu), 'Zeichen')
    else:
        sys.stdout.write(neu)
