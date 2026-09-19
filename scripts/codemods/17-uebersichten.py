#!/usr/bin/env python3
"""Übersichtsseiten (Hubs) in die Seitenvorlage (19.09.2026, Muster /finanzierung, Martin „dann live und mach weiter").

Liest je Hub die alten Linklisten ({ titel, href, desc } unter jeder H2), übernimmt metadata und schemaMarkup wörtlich
und schreibt die Seite mit RatgeberKopf (ohne Datum, Knopf und Blick-Kasten, die Hubs nie hatten), RatgeberRumpf,
Abschnitt + Punkte (Titel = Link) und KontaktBand neu. Sonderblöcke und Textkorrekturen stehen in SEITEN je Hub.
Aufruf: python3 scripts/codemods/17-uebersichten.py [slug …]   (ohne Argument: alle in SEITEN)
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

LINK = "font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors"

# Je Hub: neue Einleitung (ohne Gedankenstrich-Kette), Textkorrekturen an Beschreibungen, Einträge raus (Dubletten),
# Block vor dem ersten Abschnitt, Ersatz für Sonderblöcke in einem Abschnitt, Block nach den Abschnitten.
SEITEN = {
    'krankheiten': {
        'einleitung': 'Jede Erkrankung stellt andere Anforderungen an die Pflege zu Hause. Hier finden Sie alle Ratgeber zu einzelnen Krankheiten, von Demenz über Parkinson und Schlaganfall bis zur Palliativpflege.',
        'nachher': ('beratung', 'Ihre Erkrankung nicht gefunden?', 'Beratung', '''<Text>
              Marta Kapcio und ihr Team beraten Sie kostenlos zu Ihrer Pflegesituation: welche Erfahrung eine Betreuungskraft
              mitbringen sollte und was die Betreuung kostet.
            </Text>
            <MartaBand eingebettet />'''),
    },
    'alltag': {
        'einleitung': 'Pflege betrifft den ganzen Alltag, den der Pflegebedürftigen und den ihrer Angehörigen. Hier finden Sie alle Ratgeber dazu: Entlastung für Angehörige, Vorsorge, Wohnen und Sicherheit, Beschäftigung.',
    },
    'organisation': {
        'einleitung': 'Von der Suche nach der passenden Betreuungskraft bis zum laufenden Einsatz: alle Ratgeber zur Organisation der 24-Stunden-Pflege.',
        'desc': {
            '/pflegekraft-aus-bulgarien': 'Was bei Betreuungskräften aus Bulgarien rechtlich gilt.',
            '/pflegekraft-aus-rumaenien': 'Was bei Betreuungskräften aus Rumänien rechtlich gilt.',
            # ein Generator kann keine Rechtssicherheit garantieren
            '/pflegevertrag-generator': 'Einen Pflegevertrag online erstellen, anpassen und herunterladen.',
        },
        # Pflegeberater stand zweimal; bleibt unter „Koordination & Notfall"
        'raus': [('Wechsel & laufende Betreuung', '/pflegeberater-finden')],
        'ende_letzter': '<MehrDazu label="Schritt für Schritt:" links={[{ href: \'/ablauf\', text: \'So läuft die 24-Stunden-Pflege bei Primundus ab\' }]} />',
    },
    'rechtliches': {
        'einleitung': 'Rechtssichere Beschäftigung, Verträge, Vollmachten und Steuern: alle rechtlichen Themen rund um die 24-Stunden-Pflege.',
        'desc': {'/haftung-pflegehaushalt': 'Wer haftet bei Schäden: Familie, Anbieter oder Betreuungskraft?'},
        'vorher': '''<Vorspann>
            <Kasten augenbraue="Häufigstes Risiko" titel="Scheinselbstständigkeit">
              <Text>
                Wer eine „selbstständige“ Betreuungskraft im Haushalt beschäftigt, riskiert in der Regel Scheinselbstständigkeit:
                Sozialversicherungsbeiträge können für bis zu vier Jahre nachgefordert werden, dazu Bußgelder, bei Vorsatz ein
                Strafverfahren. Sicher ist das Entsendemodell: Die Betreuungskraft ist beim Anbieter angestellt, für jeden Einsatz
                liegt eine A1-Bescheinigung vor.
              </Text>
              <MehrDazu label="Mehr dazu:" links={[{ href: '/rechtssicher', text: 'So stellt Primundus das sicher' }]} />
            </Kasten>
          </Vorspann>''',
    },
    'vergleiche': {
        'einleitung': 'Pflegeheim, ambulanter Pflegedienst, Tagespflege oder Betreuungskraft zu Hause: alle Vergleiche mit konkreten Zahlen.',
        'desc': {
            '/pflegekraft-aus-polen': 'Das Entsendemodell mit Betreuungskräften aus Polen: rechtlicher Rahmen, Kosten, Qualifikation.',
            '/pflegekraft-aus-bulgarien': 'Was bei Betreuungskräften aus Bulgarien rechtlich gilt.',
            '/pflegekraft-aus-rumaenien': 'Was bei Betreuungskräften aus Rumänien rechtlich gilt.',
            # „neutral" stimmt nicht, wir vergleichen uns selbst mit
            '/anbieter-vergleich': 'Die bekannten Anbieter für 24-Stunden-Pflege im Vergleich: Preise, Gebühren, Vertragsbindung.',
            '/osteuropaeische-pflegekraft-oder-agentur': 'Betreuungskraft selbst suchen oder über einen Anbieter: Risiken, Aufwand, Kosten.',
        },
        # Die alte Tabelle (Spannen ohne Quelle, „~3.364 €", „24h Betreuung") wird durch die belegte Grafik der Hauptseite ersetzt
        'im_abschnitt': {'Kostenvergleiche': '<HeimVsZuhause />'},
    },
}


def slug(t: str) -> str:
    t = t.lower().replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss').replace('&', 'und')
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')


def js(s: str) -> str:
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def attr(name: str, s: str) -> str:
    """JSX-Attribut: doppelte Anführungszeichen, solange der Text keine enthält (deutsche Texte nutzen „“)."""
    return f'{name}="{s}"' if '"' not in s and '{' not in s else f'{name}={{{js(s)}}}'


def umbauen(name: str) -> str:
    cfg = SEITEN[name]
    quelle = (ROOT / 'app' / name / 'page.tsx').read_text(encoding='utf-8')
    meta = re.search(r'export const metadata: Metadata = \{[\s\S]*?\n\}\n', quelle).group(0)
    schema = re.search(r'const schemaMarkup = JSON\.stringify\(\[[\s\S]*?\n\]\)\n', quelle).group(0)
    krumen = re.findall(r"name: '([^']+)', item: '([^']+)'", schema)
    ohne_klassen = re.sub(r'className=("[^"]*"|\{[^}]*\})', '', quelle)
    titel = re.sub(r'\s+', ' ', re.search(r'<h1\s*>\s*(.*?)\s*</h1>', ohne_klassen, re.S).group(1)).strip()
    augenbraue = re.sub(r'\s+', ' ', re.search(r'<p\s*>\s*([^<]+?)\s*</p>\s*\{?/?\*?[^<]*<h1', ohne_klassen, re.S).group(1)).strip().title()
    fn = re.search(r'export default function (\w+)', quelle).group(1)

    abschnitte = []
    for teil in re.split(r'<h2[^>]*>', ohne_klassen)[1:]:
        kopf = re.sub(r'\s+', ' ', teil.split('</h2>')[0]).strip()
        eintraege = re.findall(r"\{ titel: '([^']*)', href: '([^']*)', desc: '([^']*)' \}", teil)
        raus = {h for (k, h) in cfg.get('raus', []) if k == kopf}
        eintraege = [(t, h, cfg.get('desc', {}).get(h, d)) for (t, h, d) in eintraege if h not in raus]
        abschnitte.append((kopf, eintraege))

    imports_v = {'Abschnitt', 'Punkte', 'RatgeberKopf', 'RatgeberRumpf'}
    extra_imports = []
    teile = []
    if cfg.get('vorher'):
        teile.append('          ' + cfg['vorher'])
        imports_v |= {'Vorspann', 'Kasten', 'Text', 'MehrDazu'}
    sections = []
    for i, (kopf, eintraege) in enumerate(abschnitte):
        sid = slug(kopf)
        sections.append((sid, kopf))
        innen = []
        if kopf in cfg.get('im_abschnitt', {}):
            innen.append(cfg['im_abschnitt'][kopf])
            extra_imports.append("import { HeimVsZuhause } from '@/components/grafik/Grafik'")
        punkte = ',\n'.join(f"                {{ title: l({js(h)}, {js(t)}), desc: {js(d)} }}" for (t, h, d) in eintraege)
        innen.append(f"<Punkte\n              punkte={{[\n{punkte},\n              ]}}\n            />")
        if i == len(abschnitte) - 1 and cfg.get('ende_letzter'):
            innen.append(cfg['ende_letzter'])
            imports_v.add('MehrDazu')
        teile.append(f'          <Abschnitt id="{sid}" {attr("titel", kopf)}>\n            ' + '\n            '.join(innen) + '\n          </Abschnitt>')
    if cfg.get('nachher'):
        sid, kopf, kurz, inhalt = cfg['nachher']
        sections.append((sid, kurz))
        teile.append(f'          <Abschnitt id="{sid}" {attr("titel", kopf)}>\n            {inhalt}\n          </Abschnitt>')
        imports_v.add('Text')
        extra_imports.append("import { MartaBand } from '@/components/vertrauen/Vertrauen'")

    pfad = ',\n'.join(
        f"            {{ label: {js(n)}{', href: ' + js(u.replace('https://primundus.de', '') or '/') if j < len(krumen) - 1 else ''} }}"
        for j, (n, u) in enumerate(krumen))
    sec = ',\n'.join(f"  {{ id: '{sid}', title: {js(k)} }}" for sid, k in sections)
    body = '\n\n'.join(teile)
    imp = ', '.join(sorted(imports_v))
    extra = ''.join(x + '\n' for x in sorted(set(extra_imports)))
    return f"""import type {{ Metadata }} from 'next'
import {{ KontaktBand }} from '@/components/ArticleCTA'
import {{ {imp} }} from '@/components/vorlage/Ratgeber'
{extra}import {{ ArticleTOC }} from '@/components/ArticleTOC'

// Übersicht in der Seitenvorlage (19.09.2026, scripts/codemods/17-uebersichten.py; Muster /finanzierung). Linklisten
// unverändert übernommen, Einleitung ohne Gedankenstrich-Kette; Sonderblöcke und Korrekturen siehe SEITEN im Skript.

{meta}
{schema}
const LINK = '{LINK}'
const l = (href: string, text: string) => <a href={{href}} className={{LINK}}>{{text}}</a>

const SECTIONS = [
{sec},
]

export default function {fn}() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: schemaMarkup }}}} />
      <div className="lg:hidden">
        <ArticleTOC sections={{SECTIONS}} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={{[
{pfad},
          ]}}
          {attr('augenbraue', augenbraue)}
          {attr('titel', titel)}
          {attr('einleitung', cfg['einleitung'])}
        />

        <RatgeberRumpf abschnitte={{SECTIONS}}>
{body}
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}}
"""


if __name__ == '__main__':
    namen = sys.argv[1:] or list(SEITEN)
    for n in namen:
        neu = umbauen(n)
        (ROOT / 'app' / n / 'page.tsx').write_text(neu, encoding='utf-8')
        print(n, 'geschrieben', neu.count('title: l('), 'Links')
