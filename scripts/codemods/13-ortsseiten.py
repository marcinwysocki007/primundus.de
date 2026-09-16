#!/usr/bin/env python3
"""Ortsseiten auf die Seitenvorlage umstellen (16.09.2026, Martin: „finde ich gut. mach alles").

Die Seite wird Block für Block übersetzt: Jede h2-Überschrift bleibt, der Inhalt darunter
wird in die Bausteine aus components/vorlage/Ratgeber.tsx überführt (Emoji-Karten → Punkte,
Haken/Plus-Spalten → Gegenueber, Zahlenblöcke → Tabelle, Kästen → Kasten, Ablauf → Schritte,
Fragen → Fragen). Texte bleiben Wort für Wort gleich, bis auf KORREKTUREN (Nachtaussage wie
auf den Ratgebern, Martin 14.09.) und die Pille „100% Sorgenfrei und ohne Risiko", an deren
Stelle die Bestpreisgarantie tritt (Martin 16.09.: „siehe kostenrechner").

    python3 scripts/codemods/13-ortsseiten.py app/24h-pflege-muenchen/page.tsx [--schreiben]
"""
import re
import sys

KORREKTUREN = [
    ('Sie ist rund um die Uhr erreichbar', 'Sie ist bei Bedarf auch nachts da'),
    ('Tag & Nacht da', 'Nachts im Haus'),
    ('Rund um die Uhr erreichbar — auch nachts', 'Da, wenn nachts Hilfe gebraucht wird'),
    ('Nachtbereitschaft — immer erreichbar', 'Nachts im Haus — da, wenn Hilfe gebraucht wird'),
    ('Gesellschaft und Begleitung — ganztags', 'Gesellschaft und Begleitung im Alltag'),
    ('lebt im Haushalt — ist nachts da,', 'lebt im Haushalt — ist bei Bedarf auch nachts da,'),
    ('die mit einziehen und rund um die Uhr da sind.', 'die mit einziehen und im Haushalt leben.'),
    ('und ist da, rund um die Uhr', 'und ist bei Bedarf auch nachts da'),
    ('und ist rund um die Uhr da', 'und ist bei Bedarf auch nachts da'),
    ('und ist Tag und Nacht da', 'und ist bei Bedarf auch nachts da'),
    ('ist Tag und Nacht da', 'ist bei Bedarf auch nachts da'),
    ('im Haushalt lebt und rund um die Uhr da ist', 'im Haushalt lebt und bei Bedarf auch nachts da ist'),
    ('rund um die Uhr da, im vertrauten Zuhause', 'bei Bedarf auch nachts da, im vertrauten Zuhause'),
    ('rund um die Uhr da ist', 'bei Bedarf auch nachts da ist'),
    ('rund um die Uhr da sind', 'im Haushalt leben'),
    ('ist da, rund um die Uhr:', 'ist bei Bedarf auch nachts da:'),
    ('rund um die Uhr da,', 'bei Bedarf auch nachts da,'),
    ('rund um die Uhr da.', 'bei Bedarf auch nachts da.'),
    ('1:1-Betreuung rund um die Uhr im eigenen Zuhause', '1:1-Betreuung im eigenen Zuhause, bei Bedarf auch nachts'),
    ('1:1-Betreuung rund um die Uhr', '1:1-Betreuung, bei Bedarf auch nachts'),
    ('1:1 rund um die Uhr', '1:1, bei Bedarf auch nachts'),
    ('Primundus ist mit eigenen Betreuungskräften in München seit 20 Jahren geprüfte ',
     'Primundus betreut in München seit 20 Jahren mit eigenen Betreuungskräften — '),
    (' — ein Umzug in eine größere Wohnung ist für die meisten keine Option.', '.'),
]

GARANTIE = """            <div className="bg-white rounded-[20px] shadow-lift p-6 md:p-8">
              <img
                src="/images/bestpreisgarantie-siegel.webp"
                alt="Primundus Bestpreisgarantie – 6× Preis-Leistungssieger"
                width={900}
                height={256}
                loading="lazy"
                className="h-[64px] md:h-[72px] w-auto mb-5"
              />
              <p className="text-[19px] md:text-[21px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">
                Bei uns zahlen Sie nie mehr als für ein vergleichbares Angebot.
              </p>
              <p className="mt-3 text-[17px] leading-[1.65] text-pm-body">
                Das können wir, weil unsere Betreuungskräfte bei uns angestellt sind und keine
                Vermittlungsgebühr anfällt.{' '}
                <a href="https://kostenrechner.primundus.de/bestpreisgarantie" className="font-semibold text-pm-taupe-ink underline underline-offset-4 hover:text-pm-ink">Was heißt vergleichbar?</a>
              </p>
            </div>"""

E = '\n'


def jsx(text):
    return ' '.join(text.split())


def js(text):
    return text.replace('\\', '\\\\').replace("'", "\\'")


def hol(q, muster, name, pflicht=True):
    m = re.search(muster, q, re.S)
    if not m:
        if pflicht:
            raise SystemExit(f'FEHLT: {name}')
        return ''
    return m.group(1).strip()


def anker(titel, i):
    t = titel.lower()
    for a, b in [('ä', 'ae'), ('ö', 'oe'), ('ü', 'ue'), ('ß', 'ss'), ('&', 'und')]:
        t = t.replace(a, b)
    t = re.sub(r'[^a-z0-9]+', '-', t).strip('-')
    t = '-'.join([x for x in t.split('-') if x][:4])
    return t or f'abschnitt-{i}'


# --- Bausteine erkennen -------------------------------------------------------
KARTEN = re.compile(r"\{ icon: '[^']*', title: '(?:[^'\\]|\\.)+', desc: '(?:[^'\\]|\\.)+' \}(?:,\s*\{ icon: '[^']*', title: '(?:[^'\\]|\\.)+', desc: '(?:[^'\\]|\\.)+' \})+", re.S)
KARTE_EINZEL = re.compile(r"\{ icon: '[^']*', title: '((?:[^'\\]|\\.)+)', desc: '((?:[^'\\]|\\.)+)' \}")
GEGEN = re.compile(r"\{\[('Körperpflege[^\]]*?)\]\.map[\s\S]*?\{\[('Injektionen[^\]]*?)\]\.map", re.S)
KOSTEN = re.compile(r"\{ label: '[^']+', value: '[^']+', green: (?:true|false) \}(?:,\s*\{ label: '[^']+', value: '[^']+', green: (?:true|false) \})*", re.S)
KOSTEN_EINZEL = re.compile(r"\{ label: '([^']+)', value: '([^']+)', green: (?:true|false) \}")
EIGEN = re.compile(r'<span className="text-pm-ink">([^<]+)</span>\s*<span className="text-pm-taupe">([^<]+)</span>', re.S)
HEIM = re.compile(r'<p className="text-\[12px\] text-pm-mute">([^<]*)</p>')
PG = re.compile(r"\[\['PG 2'[^\]]*\](?:,\s*\['PG \d'[^\]]*\])*\]", re.S)
PG_ZEILE = re.compile(r"\['(PG \d)','([^']*)','([^']*)'\]")
SCHRITTE = re.compile(r"\{ n: '1'[\s\S]*?\{ n: '3'[^}]*\}", re.S)
SCHRITT_EINZEL = re.compile(r"\{ n: '\d', title: '((?:[^'\\]|\\.)+)', desc: '((?:[^'\\]|\\.)+)', chip: '([^']*)' \}")
ABSATZ = re.compile(r'<p className="text-\[1[3-9]px\][^"]*">\s*([\s\S]*?)\s*</p>', re.S)
GRUEN = re.compile(r'<p className="text-\[13px\] font-bold text-pm-green-deep mb-1">([^<]+)</p>\s*<p[^>]*>\s*([\s\S]*?)\s*</p>', re.S)
SCHALE = re.compile(r'<p className="text-\[1[35]px\] font-bold text-pm-(?:ink|taupe-ink) mb-[12]">([^<]+)</p>\s*<p[^>]*>\s*([\s\S]*?)\s*</p>', re.S)
AUGE = re.compile(r'<p className="text-\[1[12]px\] font-bold uppercase[^"]*">([^<]{10,90})</p>\s*<p[^>]*>\s*([\s\S]*?)\s*</p>', re.S)
LINKS = re.compile(r'<a href="([^"]+)"[^>]*>\s*→?\s*([\s\S]*?)\s*</a>', re.S)
NEARBY = re.compile(r'<NearbyCities current="[^"]+" ?/>')
REGION = re.compile(r'<CitiesOfRegion region="[^"]+" ?/>')
LINK_ALLEIN = re.compile(r'<a href="(/[a-z0-9\-/]+)"[^>]*>\s*→\s*([^<]{10,160})</a>', re.S)


def block_punkte(paare, ein):
    zeilen = [ein + "    { title: '" + js(a) + "', desc: '" + js(b) + "' }," for a, b in paare]
    return ein + "<Punkte\n" + ein + "  punkte={[\n" + "\n".join(zeilen) + "\n" + ein + "  ]}\n" + ein + "/>"


def uebersetze(inhalt, ein='            '):
    """Bloecke eines Abschnitts der Reihe nach uebersetzen."""
    aus = []
    pos = 0
    text = inhalt
    while pos < len(text):
        treffer = []
        for art, muster in (('karten', KARTEN), ('gegen', GEGEN), ('kosten', KOSTEN), ('pg', PG),
                            ('schritte', SCHRITTE), ('gruen', GRUEN), ('auge', AUGE), ('schale', SCHALE),
                            ('absatz', ABSATZ), ('nearby', NEARBY), ('region', REGION),
                            ('link', LINK_ALLEIN)):
            m = muster.search(text, pos)
            if m:
                treffer.append((m.start(), art, m))
        if not treffer:
            break
        _, art, m = min(treffer, key=lambda x: x[0])
        pos = m.end()
        if art == 'karten':
            aus.append(block_punkte(KARTE_EINZEL.findall(m.group(0)), ein))
        elif art == 'gegen':
            links = re.findall(r"'((?:[^'\\]|\\.)+)'", m.group(1))
            rechts = re.findall(r"'((?:[^'\\]|\\.)+)'", m.group(2))
            l = ', '.join("'" + js(x) + "'" for x in links)
            r = ', '.join("'" + js(x) + "'" for x in rechts)
            aus.append(ein + "<Gegenueber\n" + ein + "  seiten={[\n"
                       + ein + "    { titel: 'Betreuungskraft übernimmt', ton: 'gruen', punkte: [" + l + "] },\n"
                       + ein + "    { titel: 'Ambulanter Pflegedienst ergänzt', ton: 'taupe', punkte: [" + r + "] },\n"
                       + ein + "  ]}\n" + ein + "/>")
        elif art == 'kosten':
            zeilen = [ein + "    ['" + js(a) + "', '" + js(b) + "']," for a, b in KOSTEN_EINZEL.findall(m.group(0))]
            e = EIGEN.search(text, m.end())
            if e and e.start() - m.end() < 900:
                zeilen.append(ein + '    [<strong key="e">' + jsx(e.group(1)) + '</strong>, <strong key="w">' + jsx(e.group(2)) + '</strong>],')
                pos = max(pos, e.end())
            h = HEIM.search(text, m.end())
            fuss = ''
            if h and h.start() - m.end() < 1600:
                fuss = '\n' + ein + '  fuss="' + js(jsx(h.group(1))) + '"'
                pos = max(pos, h.end())
            vorher = text[max(0, m.start() - 400):m.start()]
            mt = re.search(r'<p className="text-\[11px\][^"]*">([^<]*Kostenbeispiel[^<]*)</p>', vorher)
            tz = '\n' + ein + '  titel="' + js(jsx(mt.group(1))) + '"' if mt else ''
            aus.append(ein + "<Tabelle" + tz + "\n" + ein + "  zeilen={[\n" + "\n".join(zeilen) + "\n"
                       + ein + "  ]}\n" + ein + "  betont={1}" + fuss + "\n" + ein + "/>")
        elif art == 'pg':
            zeilen = "\n".join(ein + "    ['" + a + "', '" + b + "', '" + c + "']," for a, b, c in PG_ZEILE.findall(m.group(0)))
            aus.append(ein + "<Tabelle\n" + ein + '  titel="Was die Pflegekasse zahlt"\n'
                       + ein + "  kopf={['Pflegegrad', 'Pflegegeld je Monat', 'Entlastungsbudget je Jahr']}\n"
                       + ein + "  zeilen={[\n" + zeilen + "\n" + ein + "  ]}\n"
                       + ein + "  betont={1}\n" + ein + '  fuss="Stand 2026 · bundesweit einheitlich"\n' + ein + "/>")
        elif art == 'schritte':
            zeilen = []
            for a, b, c in SCHRITT_EINZEL.findall(m.group(0)):
                tag = re.sub(r'^[^A-Za-z0-9]+', '', c).strip()
                zeilen.append(ein + "    { title: '" + js(a) + "', desc: '" + js(b) + "', tag: '" + js(tag) + "', tagTon: 'gruen' },")
            aus.append(ein + "<Schritte\n" + ein + "  schritte={[\n" + "\n".join(zeilen) + "\n" + ein + "  ]}\n" + ein + "/>")
        elif art == 'auge':
            auge, inhalt_box = jsx(m.group(1)), jsx(m.group(2))
            if '{item.' in auge or '{item.' in inhalt_box or 'übernimmt' in auge or 'ergänzt' in auge:
                continue
            aus.append(ein + '<Kasten augenbraue="' + js(auge) + '">\n' + ein + '  <Text>' + inhalt_box + '</Text>\n' + ein + '</Kasten>')
        elif art == 'gruen':
            aus.append(ein + '<Kasten ton="gruen" titel="' + js(jsx(m.group(1))) + '">\n'
                       + ein + "  <Text>" + jsx(m.group(2)) + "</Text>\n" + ein + "</Kasten>")
        elif art == 'schale':
            titel, inhalt_box = jsx(m.group(1)), jsx(m.group(2))
            if '{item.' in titel or '{item.' in inhalt_box or titel.startswith('Einzugsgebiet'):
                continue
            nach = text[m.end():m.end() + 1200]
            links = LINKS.findall(nach)
            lk = ''
            if links and 'kostenrechner' in ''.join(h for h, _ in links):
                eintraege = "\n".join(ein + "      { href: '" + js(h) + "', text: '" + js(jsx(re.sub(r'<[^>]+>', '', t))) + "' }," for h, t in links[:2])
                lk = ("\n" + ein + "  <MehrDazu\n" + ein + '    label="Rechner:"\n' + ein + "    links={[\n"
                      + eintraege + "\n" + ein + "    ]}\n" + ein + "  />")
                pos = m.end() + len(nach)
            aus.append(ein + '<Kasten titel="' + js(titel) + '">\n' + ein + "  <Text>" + inhalt_box + "</Text>" + lk + "\n" + ein + "</Kasten>")
        elif art == 'absatz':
            inhalt_p = jsx(m.group(1))
            if not inhalt_p or inhalt_p.startswith('{') or inhalt_p.startswith('<p ') or inhalt_p.startswith('<div '):
                continue
            umfeld = text[max(0, m.start() - 90):m.start() + 60]
            if 'text-[13px] text-pm-mute' in umfeld or 'text-[12px] text-pm-mute' in umfeld:
                aus.append(ein + '<p className="text-[15px] leading-[1.6] text-pm-body/70">' + inhalt_p + '</p>')
            else:
                aus.append(ein + "<Text>" + inhalt_p + "</Text>")
        elif art == 'link':
            aus.append(ein + "<MehrDazu\n" + ein + '  label="Mehr dazu:"\n' + ein + "  links={[\n"
                       + ein + "    { href: '" + js(m.group(1)) + "', text: '" + js(jsx(m.group(2))) + "' },\n"
                       + ein + "  ]}\n" + ein + "/>")
        elif art in ('nearby', 'region'):
            aus.append(ein + m.group(0))
    return [b for b in aus if b.strip()]


H2 = re.compile(r'<h2[^>]*>\s*([\s\S]*?)\s*</h2>', re.S)
FAQ_PAAR = re.compile(r"\{\s*q:\s*'((?:[^'\\]|\\.)*)',\s*a:\s*'((?:[^'\\]|\\.)*)'\s*,?\s*\}", re.S)
FAQ_BOX = re.compile(r'<p className="text-\[16px\] font-bold text-pm-ink mb-2">([^<]+)</p>\s*<p className="text-\[15px\][^"]*">\s*([\s\S]*?)\s*</p>', re.S)
KONDITIONEN = re.compile(r"\{ icon: '[^']*', title: 'Keine Vertragsbindung'[\s\S]*?title: 'Persönlicher Ansprechpartner', desc: '[^']*' \},", re.S)


def kopfteile(q):
    t = {}
    t['metadata'] = hol(q, r'(export const metadata: Metadata = \{.*?\n\})\n', 'metadata')
    t['schema'] = hol(q, r'(const schemaMarkup = \[.*?\n\])\n', 'schema')
    t['stadt'] = hol(q, r"areaServed: \{ '@type': '[A-Za-z]+', name: '([^']+)' \}", 'stadt')
    t['datum'] = hol(q, r'Aktualisiert am ([^<\n]+)\n', 'datum')
    t['h1'] = jsx(hol(q, r'<h1[^>]*>\s*([\s\S]*?)\s*</h1>', 'h1'))
    t['intro'] = jsx(hol(q, r'</h1>\s*<p className="text-\[17px\][^"]*">\s*([\s\S]*?)\s*</p>', 'intro'))
    t['kosten'] = KOSTEN_EINZEL.findall(q)
    e = EIGEN.search(q)
    t['eigenanteil'] = jsx(e.group(2)) if e else ''
    h = HEIM.search(q)
    t['heim'] = jsx(h.group(1)) if h else ''
    t['land'] = hol(q, r'<p className="text-\[13px\] font-bold text-pm-green-deep mb-1">([^<]+)</p>', 'land', pflicht=False)
    t['faq'] = FAQ_PAAR.findall(q)
    if not t['faq']:
        # Ältere Kreis-Seiten haben die Fragen als weiße Kästen statt als Liste
        t['faq'] = [(jsx(a), jsx(b)) for a, b in FAQ_BOX.findall(q)]
    return t


def blick(t):
    b = []
    if t['kosten']:
        b.append('Preis bei Primundus: ' + t['kosten'][0][1])
    if t['eigenanteil']:
        b.append('Ihr Eigenanteil bei Pflegegrad 3: ' + t['eigenanteil'])
    if t['heim']:
        b.append(t['heim'].split(' — ')[0])
    if t['land']:
        b.append(t['land'].replace('-Vorteil:', ':'))
    b += ['Täglich kündbar, keine Vermittlungsgebühr', 'Anreise in 3 Tagen möglich']
    return b


def korrigiere(text):
    """Korrekturen anwenden — Leerzeichen dürfen im Quelltext Zeilenumbrüche sein."""
    for alt, neu in KORREKTUREN:
        text = text.replace(alt, neu)
        muster = re.escape(alt).replace('\\ ', r'\s+')
        text = re.sub(muster, neu.replace('\\', '\\\\'), text)
    return text


def bauen(q):
    q_alt = q
    q = korrigiere(q)
    t = kopfteile(q)
    stadt = t['stadt']
    koerper = q[q.index('<h1'):]
    koerper = koerper[:koerper.index('<ArticleCTA')] if '<ArticleCTA' in koerper else koerper
    stuecke = H2.split(koerper)          # [vor h2, titel1, inhalt1, titel2, inhalt2, ...]
    abschnitte = []
    for i in range(1, len(stuecke) - 1, 2):
        titel = jsx(re.sub(r'<[^>]+>', '', stuecke[i]))
        inhalt = stuecke[i + 1]
        if 'Häufige Fragen' in titel:
            abschnitte.append((titel, 'FRAGEN'))
            continue
        if re.search(r"\{ n: '1'", inhalt) and 'title:' in inhalt and 'chip:' in inhalt:
            continue                      # Ablauf kommt in „So arbeiten wir"
        bloecke = uebersetze(inhalt)
        if bloecke:
            abschnitte.append((titel, E.join(bloecke)))
    # Einzugsgebiet als eigener Abschnitt (Kasten ohne h2 in der alten Seite)
    ez = re.search(r'<p className="text-\[13px\] font-bold text-pm-taupe-ink mb-1">(Einzugsgebiet[^<]*)</p>\s*<p[^>]*>\s*([\s\S]*?)\s*</p>', koerper)
    nb = NEARBY.search(koerper) or REGION.search(koerper)
    if ez or nb:
        inhalt_ez = []
        if ez:
            inhalt_ez.append('            <Text>' + jsx(ez.group(2)) + '</Text>')
        if nb:
            inhalt_ez.append('            ' + nb.group(0))
        abschnitte.append((jsx(ez.group(1)) if ez else 'Einzugsgebiet ' + stadt, E.join(inhalt_ez)))

    # Konditionen + Ablauf hinten zusammenfassen
    konditionen = KONDITIONEN.search(koerper)
    schritte = SCHRITTE.search(koerper)
    arbeit = []
    if konditionen:
        arbeit.append(block_punkte(KARTE_EINZEL.findall(konditionen.group(0)), '            '))
        arbeit.append(GARANTIE)
    if schritte:
        arbeit += uebersetze(schritte.group(0))
    if arbeit:
        abschnitte.append(('So arbeiten wir', E.join(arbeit)))
    fragen = [a for a in abschnitte if a[1] == 'FRAGEN']
    abschnitte = [a for a in abschnitte if a[1] != 'FRAGEN']
    if fragen:
        abschnitte.append(fragen[0])
    elif t['faq']:
        abschnitte.append(('Häufige Fragen — 24h-Pflege in ' + stadt, 'FRAGEN'))

    ids = []
    rumpf = []
    for i, (titel, inhalt) in enumerate(abschnitte):
        aid = anker(titel, i)
        while aid in ids:
            aid += '-2'
        ids.append(aid)
        innen = '            <Fragen fragen={FRAGEN} />' if inhalt == 'FRAGEN' else inhalt
        rumpf.append('          <Abschnitt id="' + aid + '" titel="' + js(titel) + '">' + E + innen + E + '          </Abschnitt>')
    sections = E.join("  { id: '" + i + "', title: \"" + t2.replace('"', "'") + "\" }," for i, (t2, _) in zip(ids, abschnitte))
    fragen_const = E.join("  { q: '" + js(a) + "', a: '" + js(b) + "' }," for a, b in t['faq'])
    blick_zeilen = E.join("            '" + js(b) + "'," for b in blick(t))

    kopf = (
        "import type { Metadata } from 'next'" + E
        + "import { KontaktBand } from '@/components/ArticleCTA'" + E
        + ("import { NearbyCities } from '@/components/NearbyCities'" + E if 'NearbyCities' in q_alt else '')
        + ("import { CitiesOfRegion } from '@/components/CityIndex'" + E if 'CitiesOfRegion' in q_alt else '')
        + "import {" + E
        + "  Abschnitt, Fragen, Gegenueber, Kasten, MehrDazu, Punkte," + E
        + "  RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text," + E
        + "} from '@/components/vorlage/Ratgeber'" + E
        + "import { ArticleProgressBar } from '@/components/ArticleProgressBar'" + E
        + "import { ArticleTOC } from '@/components/ArticleTOC'" + E + E
        + "// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick\", Seitenleiste" + E
        + "// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px." + E
        + "// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die" + E
        + "// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.)." + E + E
        + "const SECTIONS = [" + E + sections + E + "]" + E + E
        + t['metadata'] + E + E + t['schema'] + E + E
        + "const FRAGEN = [" + E + fragen_const + E + "]" + E + E
    )
    body = (
        "export default function Page() {" + E
        + "  return (" + E + "    <>" + E
        + "      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />" + E
        + "      <ArticleProgressBar />" + E
        + "      <div className=\"lg:hidden\">" + E
        + "        <ArticleTOC sections={SECTIONS} />" + E
        + "      </div>" + E + E
        + "      <div className=\"bg-pm-paper\">" + E
        + "        <RatgeberKopf" + E
        + "          pfad={[" + E
        + "            { label: 'Startseite', href: '/' }," + E
        + "            { label: 'Regionen', href: '/regionen' }," + E
        + "            { label: '" + js(stadt) + "' }," + E
        + "          ]}" + E
        + "          augenbraue=\"24-Stunden-Pflege in " + stadt + "\"" + E
        + "          titel=\"" + js(t['h1']) + "\"" + E
        + "          einleitung={<>" + t['intro'] + "</>}" + E
        + "          aktualisiert=\"" + t['datum'] + "\"" + E
        + "          lesezeit=\"6 Min.\"" + E
        + "          blick={[" + E + blick_zeilen + E + "          ]}" + E
        + "          blickTitel=\"" + stadt + " auf einen Blick\"" + E
        + "        />" + E + E
        + "        <RatgeberRumpf abschnitte={SECTIONS}>" + E
        + (E + E).join(rumpf) + E
        + "        </RatgeberRumpf>" + E
        + "      </div>" + E + E
        + "      <KontaktBand />" + E
        + "    </>" + E + "  )" + E + "}" + E
    )
    return kopf + body


if __name__ == '__main__':
    pfad = sys.argv[1]
    quelle = open(pfad, encoding='utf-8').read()
    neu = bauen(quelle)
    if '--schreiben' in sys.argv:
        open(pfad, 'w', encoding='utf-8').write(neu)
        print('geschrieben', pfad, len(neu), 'Zeichen')
    else:
        sys.stdout.write(neu)
