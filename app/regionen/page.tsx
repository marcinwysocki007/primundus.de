import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { RegionenSearch, type StadtEntry } from '@/components/RegionenSearch'

export const metadata: Metadata = {
  title: '24h-Pflege in Ihrer Region — alle Städte & Bundesländer | Primundus',
  description: 'Primundus vermittelt 24h-Betreuungskräfte in ganz Deutschland. PLZ oder Ort eingeben — sofort passende Informationen und Anfrage starten.',
  alternates: { canonical: 'https://primundus.de/regionen/' },
  openGraph: {
    title: '24h-Pflege in Ihrer Region | Primundus',
    description: 'PLZ oder Ort eingeben — 24h-Pflege in Ihrer Stadt finden.',
    url: 'https://primundus.de/regionen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege in Ihrer Region', item: 'https://primundus.de/regionen/' },
    ],
  },
])

// ── Bundesländer — alphabetisch ─────────────────────────────────────────────

const bundeslaender = [
  { slug: 'baden-wuerttemberg', name: 'Baden-Württemberg', kuerzel: 'BW', staedte: 'Stuttgart, Mannheim, Karlsruhe, Freiburg, Heidelberg u.v.m.' },
  { slug: 'bayern', name: 'Bayern', kuerzel: 'BY', staedte: 'München, Nürnberg, Augsburg, Würzburg, Regensburg u.v.m.' },
  { slug: 'berlin', name: 'Berlin', kuerzel: 'BE', staedte: 'Alle 12 Berliner Bezirke' },
  { slug: 'brandenburg', name: 'Brandenburg', kuerzel: 'BB', staedte: 'Potsdam, Cottbus, Brandenburg a.d.H. u.v.m.' },
  { slug: 'bremen', name: 'Bremen', kuerzel: 'HB', staedte: 'Bremen und Bremerhaven' },
  { slug: 'hamburg', name: 'Hamburg', kuerzel: 'HH', staedte: 'Alle 7 Hamburger Bezirke' },
  { slug: 'hessen', name: 'Hessen', kuerzel: 'HE', staedte: 'Frankfurt, Wiesbaden, Kassel, Darmstadt, Offenbach u.v.m.' },
  { slug: 'mecklenburg-vorpommern', name: 'Mecklenburg-Vorpommern', kuerzel: 'MV', staedte: 'Rostock, Schwerin, Greifswald, Stralsund u.v.m.' },
  { slug: 'niedersachsen', name: 'Niedersachsen', kuerzel: 'NI', staedte: 'Hannover, Braunschweig, Wolfsburg, Osnabrück u.v.m.' },
  { slug: 'nordrhein-westfalen', name: 'Nordrhein-Westfalen', kuerzel: 'NRW', staedte: 'Köln, Düsseldorf, Dortmund, Essen, Bonn u.v.m.' },
  { slug: 'rheinland-pfalz', name: 'Rheinland-Pfalz', kuerzel: 'RP', staedte: 'Mainz, Koblenz, Trier, Kaiserslautern u.v.m.' },
  { slug: 'saarland', name: 'Saarland', kuerzel: 'SL', staedte: 'Saarbrücken, Neunkirchen, Homburg u.v.m.' },
  { slug: 'sachsen', name: 'Sachsen', kuerzel: 'SN', staedte: 'Dresden, Leipzig, Chemnitz, Zwickau u.v.m.' },
  { slug: 'sachsen-anhalt', name: 'Sachsen-Anhalt', kuerzel: 'ST', staedte: 'Halle, Magdeburg, Dessau-Roßlau u.v.m.' },
  { slug: 'schleswig-holstein', name: 'Schleswig-Holstein', kuerzel: 'SH', staedte: 'Kiel, Lübeck, Flensburg, Neumünster u.v.m.' },
  { slug: 'thueringen', name: 'Thüringen', kuerzel: 'TH', staedte: 'Erfurt, Jena, Gera, Weimar u.v.m.' },
]

// ── Städte mit PLZ-Präfixen (2-stellig) ─────────────────────────────────────

const staedte: StadtEntry[] = [
  // Berlin
  { slug: 'berlin', name: 'Berlin', land: 'Berlin', plz: ['10', '12', '13', '14'] },
  // Hamburg
  { slug: 'hamburg', name: 'Hamburg', land: 'Hamburg', plz: ['20', '21', '22'] },
  // Bayern
  { slug: 'muenchen', name: 'München', land: 'Bayern', plz: ['80', '81'] },
  { slug: 'nuernberg', name: 'Nürnberg', land: 'Bayern', plz: ['90'] },
  { slug: 'augsburg', name: 'Augsburg', land: 'Bayern', plz: ['86'] },
  { slug: 'wuerzburg', name: 'Würzburg', land: 'Bayern', plz: ['97'] },
  { slug: 'ingolstadt', name: 'Ingolstadt', land: 'Bayern', plz: ['85'] },
  { slug: 'regensburg', name: 'Regensburg', land: 'Bayern', plz: ['93'] },
  { slug: 'landshut', name: 'Landshut', land: 'Bayern', plz: ['84'] },
  { slug: 'rosenheim', name: 'Rosenheim', land: 'Bayern', plz: ['83'] },
  { slug: 'bamberg', name: 'Bamberg', land: 'Bayern', plz: ['96'] },
  { slug: 'bayreuth', name: 'Bayreuth', land: 'Bayern', plz: ['95'] },
  { slug: 'passau', name: 'Passau', land: 'Bayern', plz: ['94'] },
  { slug: 'kempten', name: 'Kempten', land: 'Bayern', plz: ['87'] },
  { slug: 'muehldorf', name: 'Mühldorf am Inn', land: 'Bayern', plz: ['84'] },
  { slug: 'fuerth', name: 'Fürth', land: 'Bayern', plz: ['90'] },
  { slug: 'erlangen', name: 'Erlangen', land: 'Bayern', plz: ['91'] },
  // NRW
  { slug: 'koeln', name: 'Köln', land: 'NRW', plz: ['50', '51'] },
  { slug: 'duesseldorf', name: 'Düsseldorf', land: 'NRW', plz: ['40'] },
  { slug: 'dortmund', name: 'Dortmund', land: 'NRW', plz: ['44'] },
  { slug: 'essen', name: 'Essen', land: 'NRW', plz: ['45'] },
  { slug: 'bochum', name: 'Bochum', land: 'NRW', plz: ['44'] },
  { slug: 'wuppertal', name: 'Wuppertal', land: 'NRW', plz: ['42'] },
  { slug: 'bielefeld', name: 'Bielefeld', land: 'NRW', plz: ['33'] },
  { slug: 'bonn', name: 'Bonn', land: 'NRW', plz: ['53'] },
  { slug: 'muenster', name: 'Münster', land: 'NRW', plz: ['48'] },
  { slug: 'duisburg', name: 'Duisburg', land: 'NRW', plz: ['47'] },
  { slug: 'gelsenkirchen', name: 'Gelsenkirchen', land: 'NRW', plz: ['45'] },
  { slug: 'moenchengladbach', name: 'Mönchengladbach', land: 'NRW', plz: ['41'] },
  { slug: 'aachen', name: 'Aachen', land: 'NRW', plz: ['52'] },
  { slug: 'oberhausen', name: 'Oberhausen', land: 'NRW', plz: ['46'] },
  { slug: 'hagen', name: 'Hagen', land: 'NRW', plz: ['58'] },
  { slug: 'hamm', name: 'Hamm', land: 'NRW', plz: ['59'] },
  { slug: 'solingen', name: 'Solingen', land: 'NRW', plz: ['42'] },
  { slug: 'leverkusen', name: 'Leverkusen', land: 'NRW', plz: ['51'] },
  { slug: 'remscheid', name: 'Remscheid', land: 'NRW', plz: ['42'] },
  { slug: 'recklinghausen', name: 'Recklinghausen', land: 'NRW', plz: ['45'] },
  { slug: 'bottrop', name: 'Bottrop', land: 'NRW', plz: ['46'] },
  { slug: 'bocholt', name: 'Bocholt', land: 'NRW', plz: ['46'] },
  { slug: 'witten', name: 'Witten', land: 'NRW', plz: ['58'] },
  { slug: 'iserlohn', name: 'Iserlohn', land: 'NRW', plz: ['58'] },
  { slug: 'siegen', name: 'Siegen', land: 'NRW', plz: ['57'] },
  { slug: 'guetersloh', name: 'Gütersloh', land: 'NRW', plz: ['33'] },
  { slug: 'paderborn', name: 'Paderborn', land: 'NRW', plz: ['33'] },
  { slug: 'minden', name: 'Minden', land: 'NRW', plz: ['32'] },
  { slug: 'luenen', name: 'Lünen', land: 'NRW', plz: ['44'] },
  { slug: 'marl', name: 'Marl', land: 'NRW', plz: ['45'] },
  { slug: 'troisdorf', name: 'Troisdorf', land: 'NRW', plz: ['53'] },
  { slug: 'neuss', name: 'Neuss', land: 'NRW', plz: ['41'] },
  { slug: 'ratingen', name: 'Ratingen', land: 'NRW', plz: ['40'] },
  { slug: 'velbert', name: 'Velbert', land: 'NRW', plz: ['42'] },
  { slug: 'viersen', name: 'Viersen', land: 'NRW', plz: ['41'] },
  { slug: 'moers', name: 'Moers', land: 'NRW', plz: ['47'] },
  { slug: 'muelheim-ruhr', name: 'Mülheim an der Ruhr', land: 'NRW', plz: ['45'] },
  { slug: 'bergisch-gladbach', name: 'Bergisch Gladbach', land: 'NRW', plz: ['51'] },
  // Hessen
  { slug: 'frankfurt', name: 'Frankfurt am Main', land: 'Hessen', plz: ['60', '61', '63'] },
  { slug: 'wiesbaden', name: 'Wiesbaden', land: 'Hessen', plz: ['65'] },
  { slug: 'kassel', name: 'Kassel', land: 'Hessen', plz: ['34'] },
  { slug: 'darmstadt', name: 'Darmstadt', land: 'Hessen', plz: ['64'] },
  { slug: 'offenbach', name: 'Offenbach am Main', land: 'Hessen', plz: ['63'] },
  { slug: 'hanau', name: 'Hanau', land: 'Hessen', plz: ['63'] },
  // Baden-Württemberg
  { slug: 'stuttgart', name: 'Stuttgart', land: 'Baden-Württemberg', plz: ['70', '71'] },
  { slug: 'mannheim', name: 'Mannheim', land: 'Baden-Württemberg', plz: ['68'] },
  { slug: 'karlsruhe', name: 'Karlsruhe', land: 'Baden-Württemberg', plz: ['76'] },
  { slug: 'freiburg', name: 'Freiburg im Breisgau', land: 'Baden-Württemberg', plz: ['79'] },
  { slug: 'heidelberg', name: 'Heidelberg', land: 'Baden-Württemberg', plz: ['69'] },
  { slug: 'heilbronn', name: 'Heilbronn', land: 'Baden-Württemberg', plz: ['74'] },
  { slug: 'pforzheim', name: 'Pforzheim', land: 'Baden-Württemberg', plz: ['75'] },
  { slug: 'ulm', name: 'Ulm', land: 'Baden-Württemberg', plz: ['89'] },
  { slug: 'reutlingen', name: 'Reutlingen', land: 'Baden-Württemberg', plz: ['72'] },
  { slug: 'friedrichshafen', name: 'Friedrichshafen', land: 'Baden-Württemberg', plz: ['88'] },
  { slug: 'konstanz', name: 'Konstanz', land: 'Baden-Württemberg', plz: ['78'] },
  // Niedersachsen
  { slug: 'hannover', name: 'Hannover', land: 'Niedersachsen', plz: ['30'] },
  { slug: 'braunschweig', name: 'Braunschweig', land: 'Niedersachsen', plz: ['38'] },
  { slug: 'wolfsburg', name: 'Wolfsburg', land: 'Niedersachsen', plz: ['38'] },
  { slug: 'osnabrueck', name: 'Osnabrück', land: 'Niedersachsen', plz: ['49'] },
  { slug: 'oldenburg', name: 'Oldenburg', land: 'Niedersachsen', plz: ['26'] },
  { slug: 'goettingen', name: 'Göttingen', land: 'Niedersachsen', plz: ['37'] },
  { slug: 'hildesheim', name: 'Hildesheim', land: 'Niedersachsen', plz: ['31'] },
  { slug: 'salzgitter', name: 'Salzgitter', land: 'Niedersachsen', plz: ['38'] },
  { slug: 'hameln', name: 'Hameln', land: 'Niedersachsen', plz: ['31'] },
  // Sachsen
  { slug: 'leipzig', name: 'Leipzig', land: 'Sachsen', plz: ['04'] },
  { slug: 'dresden', name: 'Dresden', land: 'Sachsen', plz: ['01'] },
  { slug: 'chemnitz', name: 'Chemnitz', land: 'Sachsen', plz: ['09'] },
  { slug: 'zwickau', name: 'Zwickau', land: 'Sachsen', plz: ['08'] },
  // Rheinland-Pfalz
  { slug: 'mainz', name: 'Mainz', land: 'Rheinland-Pfalz', plz: ['55'] },
  { slug: 'koblenz', name: 'Koblenz', land: 'Rheinland-Pfalz', plz: ['56'] },
  { slug: 'trier', name: 'Trier', land: 'Rheinland-Pfalz', plz: ['54'] },
  { slug: 'kaiserslautern', name: 'Kaiserslautern', land: 'Rheinland-Pfalz', plz: ['67'] },
  { slug: 'ludwigshafen', name: 'Ludwigshafen am Rhein', land: 'Rheinland-Pfalz', plz: ['67'] },
  // Sachsen-Anhalt
  { slug: 'halle-saale', name: 'Halle (Saale)', land: 'Sachsen-Anhalt', plz: ['06'] },
  { slug: 'magdeburg', name: 'Magdeburg', land: 'Sachsen-Anhalt', plz: ['39'] },
  { slug: 'dessau', name: 'Dessau-Roßlau', land: 'Sachsen-Anhalt', plz: ['06'] },
  // Schleswig-Holstein
  { slug: 'kiel', name: 'Kiel', land: 'Schleswig-Holstein', plz: ['24'] },
  { slug: 'luebeck', name: 'Lübeck', land: 'Schleswig-Holstein', plz: ['23'] },
  { slug: 'flensburg', name: 'Flensburg', land: 'Schleswig-Holstein', plz: ['24'] },
  // Thüringen
  { slug: 'erfurt', name: 'Erfurt', land: 'Thüringen', plz: ['99'] },
  { slug: 'jena', name: 'Jena', land: 'Thüringen', plz: ['07'] },
  { slug: 'gera', name: 'Gera', land: 'Thüringen', plz: ['07'] },
  // Brandenburg
  { slug: 'potsdam', name: 'Potsdam', land: 'Brandenburg', plz: ['14'] },
  { slug: 'cottbus', name: 'Cottbus', land: 'Brandenburg', plz: ['03'] },
  // Mecklenburg-Vorpommern
  { slug: 'rostock', name: 'Rostock', land: 'Mecklenburg-Vorpommern', plz: ['18'] },
  { slug: 'schwerin', name: 'Schwerin', land: 'Mecklenburg-Vorpommern', plz: ['19'] },
  { slug: 'greifswald', name: 'Greifswald', land: 'Mecklenburg-Vorpommern', plz: ['17'] },
  { slug: 'stralsund', name: 'Stralsund', land: 'Mecklenburg-Vorpommern', plz: ['18'] },
  { slug: 'neubrandenburg', name: 'Neubrandenburg', land: 'Mecklenburg-Vorpommern', plz: ['17'] },
  // Bremen
  { slug: 'bremen', name: 'Bremen', land: 'Bremen', plz: ['28'] },
  { slug: 'bremerhaven', name: 'Bremerhaven', land: 'Bremen', plz: ['27'] },
  // Saarland
  { slug: 'saarbruecken', name: 'Saarbrücken', land: 'Saarland', plz: ['66'] },

  // ── Orte OHNE eigene Seite (hasPage: false) — nur Anfrage-CTA ─────────────
  // Schleswig-Holstein
  { slug: 'itzehoe', name: 'Itzehoe', land: 'Schleswig-Holstein', plz: ['25'], hasPage: false },
  { slug: 'neumuenster', name: 'Neumünster', land: 'Schleswig-Holstein', plz: ['24'], hasPage: false },
  { slug: 'norderstedt', name: 'Norderstedt', land: 'Schleswig-Holstein', plz: ['22'], hasPage: false },
  { slug: 'elmshorn', name: 'Elmshorn', land: 'Schleswig-Holstein', plz: ['25'], hasPage: false },
  { slug: 'pinneberg', name: 'Pinneberg', land: 'Schleswig-Holstein', plz: ['25'], hasPage: false },
  { slug: 'rendsburg', name: 'Rendsburg', land: 'Schleswig-Holstein', plz: ['24'], hasPage: false },
  { slug: 'heide', name: 'Heide', land: 'Schleswig-Holstein', plz: ['25'], hasPage: false },
  // Niedersachsen
  { slug: 'lueneburg', name: 'Lüneburg', land: 'Niedersachsen', plz: ['21'], hasPage: false },
  { slug: 'celle', name: 'Celle', land: 'Niedersachsen', plz: ['29'], hasPage: false },
  { slug: 'stade', name: 'Stade', land: 'Niedersachsen', plz: ['21'], hasPage: false },
  { slug: 'cuxhaven', name: 'Cuxhaven', land: 'Niedersachsen', plz: ['27'], hasPage: false },
  { slug: 'delmenhorst', name: 'Delmenhorst', land: 'Niedersachsen', plz: ['27'], hasPage: false },
  { slug: 'wilhelmshaven', name: 'Wilhelmshaven', land: 'Niedersachsen', plz: ['26'], hasPage: false },
  { slug: 'lingen', name: 'Lingen (Ems)', land: 'Niedersachsen', plz: ['49'], hasPage: false },
  { slug: 'nordhorn', name: 'Nordhorn', land: 'Niedersachsen', plz: ['48'], hasPage: false },
  { slug: 'gifhorn', name: 'Gifhorn', land: 'Niedersachsen', plz: ['38'], hasPage: false },
  // NRW (ohne eigene Seite)
  { slug: 'dueren', name: 'Düren', land: 'NRW', plz: ['52'], hasPage: false },
  { slug: 'herne', name: 'Herne', land: 'NRW', plz: ['44'], hasPage: false },
  { slug: 'krefeld', name: 'Krefeld', land: 'NRW', plz: ['47'] },
  { slug: 'luedenscheid', name: 'Lüdenscheid', land: 'NRW', plz: ['58'], hasPage: false },
  { slug: 'euskirchen', name: 'Euskirchen', land: 'NRW', plz: ['53'], hasPage: false },
  { slug: 'kleve', name: 'Kleve', land: 'NRW', plz: ['47'], hasPage: false },
  { slug: 'wesel', name: 'Wesel', land: 'NRW', plz: ['46'], hasPage: false },
  { slug: 'dorsten', name: 'Dorsten', land: 'NRW', plz: ['46'], hasPage: false },
  { slug: 'huerth', name: 'Hürth', land: 'NRW', plz: ['50'], hasPage: false },
  { slug: 'pulheim', name: 'Pulheim', land: 'NRW', plz: ['50'], hasPage: false },
  // Hessen (ohne eigene Seite)
  { slug: 'giessen', name: 'Gießen', land: 'Hessen', plz: ['35'] },
  { slug: 'marburg', name: 'Marburg', land: 'Hessen', plz: ['35'] },
  { slug: 'fulda', name: 'Fulda', land: 'Hessen', plz: ['36'], hasPage: false },
  { slug: 'wetzlar', name: 'Wetzlar', land: 'Hessen', plz: ['35'], hasPage: false },
  { slug: 'ruesselsheim', name: 'Rüsselsheim', land: 'Hessen', plz: ['65'] },
  { slug: 'bad-homburg', name: 'Bad Homburg', land: 'Hessen', plz: ['61'] },
  // Bayern (ohne eigene Seite)
  { slug: 'aschaffenburg', name: 'Aschaffenburg', land: 'Bayern', plz: ['63'] },
  { slug: 'schweinfurt', name: 'Schweinfurt', land: 'Bayern', plz: ['97'] },
  { slug: 'straubing', name: 'Straubing', land: 'Bayern', plz: ['94'] },
  { slug: 'freising', name: 'Freising', land: 'Bayern', plz: ['85'] },
  { slug: 'kaufbeuren', name: 'Kaufbeuren', land: 'Bayern', plz: ['87'] },
  { slug: 'memmingen', name: 'Memmingen', land: 'Bayern', plz: ['87'] },
  // Baden-Württemberg (ohne eigene Seite)
  { slug: 'tuebingen', name: 'Tübingen', land: 'Baden-Württemberg', plz: ['72'] },
  { slug: 'ravensburg', name: 'Ravensburg', land: 'Baden-Württemberg', plz: ['88'] },
  { slug: 'villingen-schwenningen', name: 'Villingen-Schwenningen', land: 'Baden-Württemberg', plz: ['78'] },
  { slug: 'sindelfingen', name: 'Sindelfingen', land: 'Baden-Württemberg', plz: ['71'] },
  { slug: 'ludwigsburg', name: 'Ludwigsburg', land: 'Baden-Württemberg', plz: ['71'] },
  { slug: 'esslingen', name: 'Esslingen am Neckar', land: 'Baden-Württemberg', plz: ['73'], hasPage: false },
  { slug: 'goeppingen', name: 'Göppingen', land: 'Baden-Württemberg', plz: ['73'] },
  // Sachsen (ohne eigene Seite)
  { slug: 'plauen', name: 'Plauen', land: 'Sachsen', plz: ['08'], hasPage: false },
  { slug: 'goerlitz', name: 'Görlitz', land: 'Sachsen', plz: ['02'], hasPage: false },
  // Thüringen (ohne eigene Seite)
  { slug: 'weimar', name: 'Weimar', land: 'Thüringen', plz: ['99'], hasPage: false },
  { slug: 'suhl', name: 'Suhl', land: 'Thüringen', plz: ['98'], hasPage: false },
  { slug: 'eisenach', name: 'Eisenach', land: 'Thüringen', plz: ['99'], hasPage: false },
  // Sachsen-Anhalt (ohne eigene Seite)
  { slug: 'lutherstadt-wittenberg', name: 'Lutherstadt Wittenberg', land: 'Sachsen-Anhalt', plz: ['06'], hasPage: false },
  { slug: 'merseburg', name: 'Merseburg', land: 'Sachsen-Anhalt', plz: ['06'], hasPage: false },
  // Brandenburg (ohne eigene Seite)
  { slug: 'frankfurt-oder', name: 'Frankfurt (Oder)', land: 'Brandenburg', plz: ['15'], hasPage: false },
  { slug: 'oranienburg', name: 'Oranienburg', land: 'Brandenburg', plz: ['16'], hasPage: false },
  // Mecklenburg-Vorpommern (ohne eigene Seite)
  { slug: 'wismar', name: 'Wismar', land: 'Mecklenburg-Vorpommern', plz: ['23'], hasPage: false },
  { slug: 'waren', name: 'Waren (Müritz)', land: 'Mecklenburg-Vorpommern', plz: ['17'], hasPage: false },
  // Rheinland-Pfalz (ohne eigene Seite)
  { slug: 'neustadt-weinstrasse', name: 'Neustadt an der Weinstraße', land: 'Rheinland-Pfalz', plz: ['67'] },
  { slug: 'pirmasens', name: 'Pirmasens', land: 'Rheinland-Pfalz', plz: ['66'] },
  { slug: 'worms', name: 'Worms', land: 'Rheinland-Pfalz', plz: ['67'] },
  { slug: 'speyer', name: 'Speyer', land: 'Rheinland-Pfalz', plz: ['67'] },
  // neue Seiten (hinzugefügt)
  { slug: 'bad-toelz', name: 'Bad Tölz', land: 'Bayern', plz: ['83'] },
  { slug: 'bad-kreuznach', name: 'Bad Kreuznach', land: 'Rheinland-Pfalz', plz: ['55'] },
  { slug: 'bensheim', name: 'Bensheim', land: 'Hessen', plz: ['64'] },
  { slug: 'dachau', name: 'Dachau', land: 'Bayern', plz: ['85'] },
  { slug: 'deggendorf', name: 'Deggendorf', land: 'Bayern', plz: ['94'] },
  { slug: 'dormagen', name: 'Dormagen', land: 'NRW', plz: ['41'] },
  { slug: 'erding', name: 'Erding', land: 'Bayern', plz: ['85'] },
  { slug: 'eschborn', name: 'Eschborn', land: 'Hessen', plz: ['65'] },
  { slug: 'garmisch-partenkirchen', name: 'Garmisch-Partenkirchen', land: 'Bayern', plz: ['82'] },
  { slug: 'landau', name: 'Landau in der Pfalz', land: 'Rheinland-Pfalz', plz: ['76'] },
  { slug: 'miesbach', name: 'Miesbach', land: 'Bayern', plz: ['83'] },
  { slug: 'nuertingen', name: 'Nürtingen', land: 'Baden-Württemberg', plz: ['72'] },
  { slug: 'offenburg', name: 'Offenburg', land: 'Baden-Württemberg', plz: ['77'] },
  { slug: 'starnberg', name: 'Starnberg', land: 'Bayern', plz: ['82'] },
  { slug: 'waiblingen', name: 'Waiblingen', land: 'Baden-Württemberg', plz: ['71'] },
  { slug: 'weilheim', name: 'Weilheim in Oberbayern', land: 'Bayern', plz: ['82'] },
  // Premium-Seiten (neu)
  { slug: 'aalen', name: 'Aalen', land: 'Baden-Württemberg', plz: ['73'] },
  { slug: 'amberg', name: 'Amberg', land: 'Bayern', plz: ['92'] },
  { slug: 'bad-aibling', name: 'Bad Aibling', land: 'Bayern', plz: ['83'] },
  { slug: 'bad-duerkheim', name: 'Bad Dürkheim', land: 'Rheinland-Pfalz', plz: ['67'] },
  { slug: 'bad-kissingen', name: 'Bad Kissingen', land: 'Bayern', plz: ['97'] },
  { slug: 'bad-nauheim', name: 'Bad Nauheim', land: 'Hessen', plz: ['61'] },
  { slug: 'bad-neuenahr', name: 'Bad Neuenahr-Ahrweiler', land: 'Rheinland-Pfalz', plz: ['53'] },
  { slug: 'bad-reichenhall', name: 'Bad Reichenhall', land: 'Bayern', plz: ['83'] },
  { slug: 'bad-vilbel', name: 'Bad Vilbel', land: 'Hessen', plz: ['61'] },
  { slug: 'berchtesgaden', name: 'Berchtesgaden', land: 'Bayern', plz: ['83'] },
  { slug: 'bietigheim-bissingen', name: 'Bietigheim-Bissingen', land: 'Baden-Württemberg', plz: ['74'] },
  { slug: 'bruchsal', name: 'Bruchsal', land: 'Baden-Württemberg', plz: ['76'] },
  { slug: 'cochem', name: 'Cochem', land: 'Rheinland-Pfalz', plz: ['56'] },
  { slug: 'ebersberg', name: 'Ebersberg', land: 'Bayern', plz: ['85'] },
  { slug: 'freiburg-umland', name: 'Freiburg Umland', land: 'Baden-Württemberg', plz: ['79'] },
  { slug: 'gaertringen', name: 'Gärtringen', land: 'Baden-Württemberg', plz: ['71'] },
  { slug: 'gauting', name: 'Gauting', land: 'Bayern', plz: ['82'] },
  { slug: 'germering', name: 'Germering', land: 'Bayern', plz: ['82'] },
  { slug: 'germersheim', name: 'Germersheim', land: 'Rheinland-Pfalz', plz: ['76'] },
  { slug: 'gilching', name: 'Gilching', land: 'Bayern', plz: ['82'] },
  { slug: 'grevenbroich', name: 'Grevenbroich', land: 'NRW', plz: ['41'] },
  { slug: 'heinsberg', name: 'Heinsberg', land: 'NRW', plz: ['52'] },
  { slug: 'holzkirchen', name: 'Holzkirchen', land: 'Bayern', plz: ['83'] },
  { slug: 'landsberg', name: 'Landsberg am Lech', land: 'Bayern', plz: ['86'] },
  { slug: 'moenchengladbach-rheydt', name: 'Mönchengladbach-Rheydt', land: 'NRW', plz: ['41'] },
  { slug: 'neuburg', name: 'Neuburg an der Donau', land: 'Bayern', plz: ['86'] },
  { slug: 'neumarkt', name: 'Neumarkt in der Oberpfalz', land: 'Bayern', plz: ['92'] },
  { slug: 'pfaffenhofen', name: 'Pfaffenhofen an der Ilm', land: 'Bayern', plz: ['85'] },
  { slug: 'prien', name: 'Prien am Chiemsee', land: 'Bayern', plz: ['83'] },
  { slug: 'singen', name: 'Singen (Hohentwiel)', land: 'Baden-Württemberg', plz: ['78'] },
  { slug: 'traunstein', name: 'Traunstein', land: 'Bayern', plz: ['83'] },
  { slug: 'unterschleissheim', name: 'Unterschleißheim', land: 'Bayern', plz: ['85'] },
  { slug: 'vaterstetten', name: 'Vaterstetten', land: 'Bayern', plz: ['85'] },
  { slug: 'weiden', name: 'Weiden in der Oberpfalz', land: 'Bayern', plz: ['92'] },
  { slug: 'weilheim-schongau', name: 'Weilheim-Schongau', land: 'Bayern', plz: ['82'] },
  { slug: 'weinheim', name: 'Weinheim', land: 'Baden-Württemberg', plz: ['69'] },
  { slug: 'wiesbaden-umland', name: 'Wiesbaden Umland', land: 'Hessen', plz: ['65'] },
  { slug: 'wolfratshausen', name: 'Wolfratshausen', land: 'Bayern', plz: ['82'] },
  // Saarland (ohne eigene Seite)
  { slug: 'neunkirchen', name: 'Neunkirchen', land: 'Saarland', plz: ['66'], hasPage: false },
  { slug: 'homburg-saar', name: 'Homburg (Saar)', land: 'Saarland', plz: ['66'], hasPage: false },
]

// Für die A-Z-Liste nur Orte MIT eigener Seite
const staedteAlpha = Array.from(
  new Map(staedte.filter(s => s.hasPage !== false).map(s => [s.slug, s])).values()
).sort((a, b) => a.name.localeCompare(b.name, 'de'))

export default function RegionenHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[900px] mx-auto px-5 py-14">

          {/* Breadcrumb */}
          <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#5A5A5A]">24h-Pflege in Ihrer Region</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            REGIONEN
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            24h-Pflege in Ihrer Region finden
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[620px]">
            Primundus vermittelt in ganz Deutschland — Großstadt, Kleinstadt, Land. Geben Sie Ihren Ort oder Ihre PLZ ein.
          </p>

          {/* ── SUCHE ── */}
          <RegionenSearch staedte={staedte} />

          {/* ── BUNDESLÄNDER ── */}
          <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-5">
            Nach Bundesland
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mb-14">
            {bundeslaender.map((land) => (
              <a
                key={land.slug}
                href={`/24h-pflege-${land.slug}`}
                className="bg-white border border-[#E5E3DF] rounded-xl p-4 flex items-start gap-4 hover:border-[#8B7355] hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F2EDE6] flex items-center justify-center flex-shrink-0 font-bold text-[11px] text-[#8B7355] group-hover:bg-[#8B7355] group-hover:text-white transition-colors">
                  {land.kuerzel}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-0.5">{land.name}</p>
                  <p className="text-[12px] text-[#8B8B8B] leading-snug">{land.staedte}</p>
                </div>
              </a>
            ))}
          </div>

          {/* ── STÄDTE A–Z ── */}
          <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-1">
            Nach Stadt
          </h2>
          <p className="text-[13px] text-[#8B8B8B] mb-6">{staedteAlpha.length} Städte — alphabetisch</p>

          {Array.from(new Set(staedteAlpha.map(s => s.name[0].toUpperCase()))).sort().map((buchstabe) => {
            const gruppe = staedteAlpha.filter(s => s.name[0].toUpperCase() === buchstabe)
            return (
              <div key={buchstabe} className="mb-5">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-[13px] font-bold text-[#8B7355] w-6">{buchstabe}</span>
                  <div className="flex-1 h-px bg-[#E5E3DF]" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                  {gruppe.map((stadt) => (
                    <a
                      key={stadt.slug}
                      href={`/24h-pflege-${stadt.slug}`}
                      className="text-[13px] text-[#5A5A5A] hover:text-[#8B7355] py-1.5 px-3 rounded-lg hover:bg-white transition-all flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5E3DF] group-hover:bg-[#8B7355] flex-shrink-0 transition-colors" />
                      {stadt.name}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Nicht dabei */}
          <div className="bg-[#F2ECE4] border border-[#DDD3C2] rounded-2xl px-6 py-5 mt-10 mb-12">
            <p className="text-[15px] font-bold text-[#6B5A44] mb-2">Ihre Stadt nicht dabei?</p>
            <p className="text-[14px] text-[#6B5A44] leading-relaxed mb-4">
              Wir vermitteln in ganz Deutschland — auch in Ihrer Region. Einfach anfragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://kostenrechner.primundus.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-3 px-6 rounded-xl transition-colors"
              >
                Angebot in 2 Minuten
              </a>
              <a
                href="tel:+4989200000830"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#8B7355] text-[#8B7355] font-bold text-[14px] py-3 px-6 rounded-xl hover:bg-[#F2EDE6] transition-colors"
              >
                089 200 000 830
              </a>
            </div>
          </div>

          <ArticleCTA />

        </div>
      </div>
    </>
  )
}
