import { MetadataRoute } from 'next'
import { STAEDTE } from '@/lib/staedte'
import { lastmodFuerSlug } from '@/lib/lastmod'

const moneyPages = [
  '',
  '24-stunden-pflege',
  'kosten',
  'leistungen',
  'ablauf',
  'rechtssicher',
  'qualitaet',
  'testsieger-24-stunden-pflege',
  'kontakt',
  'beratungsgespraech',
  'franchisepartner',
]

const hubs = [
  'ratgeber',
  'pflegegrade',
  'finanzierung',
  'organisation',
  'krankheiten',
  'vergleiche',
  'alltag',
  'rechtliches',
  'regionen',
  'tools',
]

const artikel = [
  'was-ist-24-stunden-pflege',
  '24h-pflege-vs-pflegeheim',
  '24h-pflege-vs-ambulante-pflege',
  'wann-brauche-ich-24h-pflege',
  '24h-pflege-fuer-angehoerige',
  'vorteile-24h-pflege',
  'nachteile-24h-pflege',
  '24h-pflege-checkliste',
  'pflegegrad-1',
  'pflegegrad-2',
  'pflegegrad-3',
  'pflegegrad-4',
  'pflegegrad-5',
  'pflegegrad-beantragen',
  'pflegegrad-widerspruch-einlegen',
  'pflegegrad-erhoehen',
  'pflegegrad-begutachtung-vorbereiten',
  'pflegegrad-aenderung-melden',
  'pflegegrad-ohne-diagnose',
  'pflegegrad-bei-demenz',
  'pflegegrad-nach-schlaganfall',
  'pflegegrad-bei-parkinson',
  'pflegegrade-2025',
  'pflegesachleistungen',
  'verhinderungspflege',
  'kurzzeitpflege',
  'entlastungsbetrag',
  'kombinationsleistung-pflege',
  'pflegehilfsmittel-beantragen',
  'wohnraumanpassung-foerderung',
  'pflege-steuerlich-absetzen',
  'pflegeversicherung-leistungen-uebersicht',
  'sozialhilfe-bei-pflegebedarf',
  'pflegegeld-und-24h-pflege-kombinieren',
  'eigenanteil-24h-pflege-senken',
  '24-stunden-pflege-kostenuebernahme',
  '24-stunden-pflege-wirkliche-kosten',
  '24-stunden-pflege-krankenhausaufenthalt',
  'pflegereform-2025',
  'foerderungen-nach-bundesland',
  'pflegekasse-antrag-stellen',
  '24h-pflege-organisieren',
  'pflegekraft-finden',
  'pflegekraft-aus-polen',
  'pflegekraft-aus-bulgarien',
  'pflegekraft-aus-rumaenien',
  'pflegekraft-legal-beschaeftigen',
  'pflegevertrag-aufsetzen',
  'checkliste-pflegekraft-einstellen',
  'pflegekraft-wechseln',
  'pflegekraft-kuendigen',
  'pflege-aus-der-ferne-koordinieren',
  'erste-hilfe-bei-pflegenotfall',
  'notfallplan-pflege',
  'pflegehilfsmittel-organisieren',
  'wohnraumanpassung-planen',
  'hilfsmittel-rollstuhl-beantragen',
  'pflegedokumentation-fuehren',
  'pflegeberater-finden',
  'pflegestuetzpunkte-deutschland',
  'demenz-pflege-zuhause',
  'alzheimer-betreuung-zuhause',
  'schlaganfall-pflege-zuhause',
  'parkinson-pflege-zuhause',
  'multiple-sklerose-pflege',
  'herzinsuffizienz-pflege',
  'diabetes-pflege-senioren',
  'krebspatienten-zuhause-pflegen',
  'pflege-nach-op',
  'osteoporose-pflege-zuhause',
  'copd-pflege-zuhause',
  'sehbehinderung-blindheit-pflege',
  'depression-im-alter-pflege',
  'inkontinenz-pflege-zuhause',
  'wunden-verbinden-zuhause',
  'palliativpflege-zuhause',
  'intensivpflege-zuhause',
  '24h-pflege-vs-pflegeheim-kosten',
  'osteuropaeische-pflegekraft-oder-agentur',
  'pflegeheim-kosten-deutschland',
  'selbst-pflegen-oder-24h-pflege',
  'tagespflege-vs-24h-betreuung',
  'kurzzeitpflege-oder-24h-pflege',
  'pflegedienst-oder-24h-kraft',
  'ambulante-vs-stationaere-pflege',
  'pflegende-angehoerige-unterstuetzen',
  'kommunikation-mit-demenzkranken',
  'ernaehrung-pflegebeduerftige-senioren',
  'bewegung-senioren-zuhause',
  'sturzpraevention-senioren',
  'medikamente-senioren-verwalten',
  'schlafprobleme-senioren-loesen',
  'einsamkeit-senioren-bekaempfen',
  'tagesstruktur-demenz',
  'beschaeftigung-senioren-zuhause',
  'barrierefreies-zuhause-gestalten',
  'hausnotruf-senioren',
  'pflege-und-beruf-vereinbaren',
  'pflegezeit-gesetz-angehoerige',
  'burnout-pflegende-angehoerige',
  'pflegeverantwortung-unter-geschwistern',
  'vorsorgevollmacht-erstellen',
  'patientenverfuegung-aufsetzen',
  'betreuungsverfuegung-erstellen',
  'wenn-eltern-pflege-verweigern',
  'pflegevertrag-muster-vorlage',
  'werkvertrag-pflegekraft-muster',
  'scheinselbststaendigkeit-pflege-vermeiden',
  'pflegekraft-sozialversicherung-anmelden',
  'eu-pflegekraft-rechte-pflichten',
  'haftung-pflegehaushalt',
  'datenschutz-pflegesituation',
  'widerspruch-pflegekasse-einlegen',
  'mdk-begutachtung-tipps',
  'pflegemangel-melden-beschwerden',
  'pflegegeld',
]

// Hinweis: 'eigenanteil-rechner' und 'kostenrechner' fehlen bewusst —
// beide Routen leiten extern auf kostenrechner.primundus.de weiter.
const tools = [
  'pflegegrad-rechner',
  'zuschuss-rechner',
  'pflegebedarf-einschaetzen',
  'pflegeheim-kostenvergleich',
  'anbieter-vergleich',
  'pflegehelden-alternative',
  'checkliste-pflegeuebernahme',
  'pflegevertrag-generator',
  'vollmacht-generator',
]

// Bundesland-Seiten statisch, Städte aus dem zentralen Register
// lib/staedte.ts — vorher listete das Hand-Array nur 113 von 207 Seiten.
const laender = [
  'baden-wuerttemberg', 'bayern', 'brandenburg', 'hessen',
  'mecklenburg-vorpommern', 'niedersachsen', 'nordrhein-westfalen',
  'rheinland-pfalz', 'saarland', 'sachsen', 'sachsen-anhalt',
  'schleswig-holstein', 'thueringen',
]
const regionen = [
  ...laender.map((l) => `24h-pflege-${l}`),
  ...STAEDTE.map((s) => `24h-pflege-${s.slug}`),
]

// impressum/datenschutz/sitemap sind noindex → gehören nicht in die Sitemap.
const trust = [
  'ueber-uns',
  'agb',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://primundus.de'

  const toEntry = (
    slug: string,
    priority: number,
    freq: MetadataRoute.Sitemap[0]['changeFrequency']
  ): MetadataRoute.Sitemap[0] => {
    const lastModified = lastmodFuerSlug(slug)
    return {
      url: slug ? `${base}/${slug}` : `${base}/`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: freq,
      priority,
    }
  }

  return [
    ...moneyPages.map((s) => toEntry(s, s === '' ? 1.0 : 0.95, 'daily')),
    ...hubs.map((s) => toEntry(s, 0.85, 'weekly')),
    ...artikel.map((s) => toEntry(s, 0.75, 'weekly')),
    ...tools.map((s) => toEntry(s, 0.8, 'weekly')),
    ...regionen.map((s) => toEntry(s, 0.7, 'monthly')),
    ...trust.map((s) => toEntry(s, 0.4, 'monthly')),
  ]
}
