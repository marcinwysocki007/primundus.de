import { NextRequest, NextResponse } from 'next/server'
import { ORTE } from '@/lib/deutsche-orte'

// Full Bundesland names from Kürzel
const BUNDESLAND: Record<string, string> = {
  BE: 'Berlin',
  HH: 'Hamburg',
  HB: 'Bremen',
  NW: 'Nordrhein-Westfalen',
  BY: 'Bayern',
  BW: 'Baden-Württemberg',
  NI: 'Niedersachsen',
  HE: 'Hessen',
  SN: 'Sachsen',
  TH: 'Thüringen',
  ST: 'Sachsen-Anhalt',
  RP: 'Rheinland-Pfalz',
  SH: 'Schleswig-Holstein',
  BB: 'Brandenburg',
  MV: 'Mecklenburg-Vorpommern',
  SL: 'Saarland',
}

// Reverse map: full Bundesland name → abbreviation
const BUNDESLAND_REV: Record<string, string> = Object.fromEntries(
  Object.entries(BUNDESLAND).map(([k, v]) => [v, k])
)

// Known city slugs that have dedicated pages
const KNOWN_SLUGS = new Set([
  'aachen', 'augsburg', 'bamberg', 'bayreuth', 'bergisch-gladbach', 'bielefeld',
  'bocholt', 'bochum', 'bonn', 'bottrop', 'braunschweig', 'bremen', 'bremerhaven',
  'chemnitz', 'cottbus', 'darmstadt', 'dessau', 'dortmund', 'dresden', 'duisburg',
  'duesseldorf', 'dueren', 'erfurt', 'erlangen', 'essen', 'flensburg', 'frankfurt',
  'freiburg', 'friedrichshafen', 'fuerth', 'gelsenkirchen', 'gera', 'goettingen',
  'greifswald', 'guetersloh', 'hagen', 'halle-saale', 'hamburg', 'hameln', 'hamm',
  'hanau', 'hannover', 'heidelberg', 'heilbronn', 'herne', 'hildesheim', 'ingolstadt',
  'iserlohn', 'jena', 'kaiserslautern', 'karlsruhe', 'kassel', 'kempten', 'kiel',
  'koblenz', 'koeln', 'konstanz', 'krefeld', 'landshut', 'leipzig', 'leverkusen',
  'luebeck', 'luedenscheid', 'luenen', 'magdeburg', 'mainz', 'mannheim', 'marl',
  'minden', 'moenchengladbach', 'moers', 'muehldorf', 'muelheim-ruhr', 'muenchen',
  'muenster', 'neubrandenburg', 'neuss', 'nuernberg', 'oberhausen', 'offenbach',
  'oldenburg', 'osnabrueck', 'paderborn', 'passau', 'pforzheim', 'potsdam',
  'ratingen', 'recklinghausen', 'regensburg', 'remscheid', 'reutlingen', 'rosenheim',
  'rostock', 'saarbruecken', 'salzgitter', 'schwerin', 'siegen', 'solingen',
  'stralsund', 'stuttgart', 'trier', 'troisdorf', 'ulm', 'velbert', 'viersen',
  'wiesbaden', 'witten', 'wolfsburg', 'wuerzburg', 'wuppertal', 'zwickau', 'berlin',
  // neue Seiten (Süd + weitere)
  'aschaffenburg', 'bad-homburg', 'bad-kreuznach', 'bad-toelz', 'bensheim',
  'dachau', 'deggendorf', 'dormagen', 'erding', 'eschborn', 'freising',
  'garmisch-partenkirchen', 'giessen', 'goeppingen', 'kaufbeuren', 'landau',
  'ludwigsburg', 'marburg', 'memmingen', 'miesbach', 'nuertingen', 'offenburg',
  'ravensburg', 'ruesselsheim', 'schweinfurt', 'sindelfingen', 'speyer', 'starnberg',
  'straubing', 'tuebingen', 'villingen-schwenningen', 'waiblingen', 'weilheim', 'worms',
  // Premium-Seiten
  'aalen', 'amberg', 'bad-aibling', 'bad-duerkheim', 'bad-kissingen', 'bad-nauheim',
  'bad-neuenahr', 'bad-reichenhall', 'bad-vilbel', 'berchtesgaden', 'bietigheim-bissingen',
  'bruchsal', 'cochem', 'ebersberg', 'freiburg-umland', 'gaertringen', 'gauting',
  'germering', 'germersheim', 'gilching', 'grevenbroich', 'heinsberg', 'holzkirchen',
  'landsberg', 'moenchengladbach-rheydt', 'neuburg', 'neumarkt', 'neustadt-weinstrasse',
  'pfaffenhofen', 'pirmasens', 'prien', 'singen', 'traunstein', 'unterschleissheim',
  'vaterstetten', 'weiden', 'weilheim-schongau', 'weinheim', 'wiesbaden-umland', 'wolfratshausen',
])

/**
 * Normalise a city name to a URL slug.
 * ä→ae, ö→oe, ü→ue, ß→ss, spaces→hyphens, lowercase.
 */
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// OpenPLZ API types (only what we need)
interface OpenPlzLocality {
  name: string
  postalCode: string
  federalState: { name: string }
}

/**
 * Fallback: query openplzapi.org for localities by name or PLZ.
 * Returns up to 5 results mapped to our StadtEntry shape.
 */
async function openPlzFallback(
  q: string,
  isPlz: boolean,
  isNearby = false
): Promise<ReturnType<typeof mapOpenPlz>> {
  const param = isPlz ? `postalCode=${encodeURIComponent(q)}` : `name=${encodeURIComponent(q)}`
  const url = `https://openplzapi.org/de/Localities?${param}&page=1&pageSize=5`

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 }, // cache 24 h on the server
      signal: AbortSignal.timeout(3000),
    })
    if (!res.ok) return []
    const data: OpenPlzLocality[] = await res.json()
    return mapOpenPlz(data, isNearby)
  } catch {
    return []
  }
}

function mapOpenPlz(data: OpenPlzLocality[], isNearby: boolean) {
  // De-duplicate by name (a city can appear multiple times with different PLZ)
  const seen = new Set<string>()
  return data
    .filter((d) => {
      if (seen.has(d.name)) return false
      seen.add(d.name)
      return true
    })
    .map((d) => {
      const slug = toSlug(d.name)
      const landFull = d.federalState?.name ?? ''
      return {
        plz: d.postalCode,
        name: d.name,
        land: landFull,
        slug,
        hasPage: KNOWN_SLUGS.has(slug),
        isNearby,
        // store kuerzel for internal use (not sent to client but harmless)
        _landKuerzel: BUNDESLAND_REV[landFull] ?? '',
      }
    })
}

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.trim() ?? ''

  if (q.length < 2) {
    return NextResponse.json({ results: [] })
  }

  const isPlz = /^\d/.test(q)

  if (isPlz) {
    // Direct PLZ match — check if query starts-with any entry PLZ
    const direct = ORTE
      .filter(([plz]) => plz.startsWith(q))
      .slice(0, 8)

    if (direct.length > 0) {
      return NextResponse.json({
        results: direct.map(([plz, name, land]) => {
          const slug = toSlug(name)
          return { plz, name, land: BUNDESLAND[land] ?? land, slug, hasPage: KNOWN_SLUGS.has(slug), isNearby: false }
        }),
      })
    }

    // No local direct match — try OpenPLZ first for exact PLZ lookup
    const apiDirect = await openPlzFallback(q, true, false)
    if (apiDirect.length > 0) {
      return NextResponse.json({ results: apiDirect })
    }

    // Still nothing — find nearby by numeric PLZ distance from local DB
    const qNum = parseInt(q, 10)
    const nearby = [...ORTE]
      .map(([plz, name, land]) => ({ plz, name, land, dist: Math.abs(parseInt(plz, 10) - qNum) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 4)
      .map(({ plz, name, land }) => {
        const slug = toSlug(name)
        return { plz, name, land: BUNDESLAND[land] ?? land, slug, hasPage: KNOWN_SLUGS.has(slug), isNearby: true }
      })

    return NextResponse.json({ results: nearby })
  }

  // Name search — case-insensitive substring, starts-with first
  const ql = q.toLowerCase()
  const matched = ORTE
    .filter(([, name]) => name.toLowerCase().includes(ql))
    .sort(([, a], [, b]) => {
      const aStarts = a.toLowerCase().startsWith(ql)
      const bStarts = b.toLowerCase().startsWith(ql)
      if (aStarts && !bStarts) return -1
      if (!aStarts && bStarts) return 1
      return a.localeCompare(b, 'de')
    })
    .slice(0, 8)
    .map(([plz, name, land]) => {
      const slug = toSlug(name)
      return { plz, name, land: BUNDESLAND[land] ?? land, slug, hasPage: KNOWN_SLUGS.has(slug), isNearby: false }
    })

  if (matched.length > 0) {
    return NextResponse.json({ results: matched })
  }

  // Nothing in local DB — fallback to OpenPLZ API
  const apiResults = await openPlzFallback(q, false, false)
  return NextResponse.json({ results: apiResults })
}
