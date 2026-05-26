#!/usr/bin/env node
/**
 * Regenerates only hub pages with full article lists per parent
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = join(__dirname, '..', 'app');

function toTitle(slug) {
  return slug
    .replace(/^24h-pflege-/, '24h-Pflege ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\b24H\b/g, '24h')
    .replace(/\bUnd\b/g, 'und')
    .replace(/\bVs\b/g, 'vs.')
    .replace(/\bOder\b/g, 'oder')
    .replace(/\bAus\b/g, 'aus')
    .replace(/\bBei\b/g, 'bei')
    .replace(/\bFuer\b/g, 'für')
    .replace(/\bUeber\b/g, 'über')
    .replace(/\bNach\b/g, 'nach')
    .replace(/\bMit\b/g, 'mit')
    .replace(/\bOhne\b/g, 'ohne')
    .replace(/\bVon\b/g, 'von')
    .trim();
}

// All articles with their parent hub
const artikel = [
  { slug: 'was-ist-24-stunden-pflege', h1: 'Was ist 24-Stunden-Pflege? — Erklärung & Überblick', parent: 'ratgeber' },
  { slug: '24h-pflege-vs-pflegeheim', h1: '24h-Pflege vs. Pflegeheim — der große Vergleich', parent: 'vergleiche' },
  { slug: '24h-pflege-vs-ambulante-pflege', h1: '24h-Pflege vs. ambulante Pflege — Unterschiede & Kosten', parent: 'vergleiche' },
  { slug: 'wann-brauche-ich-24h-pflege', h1: 'Wann brauche ich 24h-Pflege? — Anzeichen & Kriterien', parent: 'ratgeber' },
  { slug: '24h-pflege-fuer-angehoerige', h1: '24h-Pflege für Angehörige — was Sie wissen müssen', parent: 'ratgeber' },
  { slug: 'vorteile-24h-pflege', h1: 'Vorteile der 24-Stunden-Pflege zu Hause', parent: 'ratgeber' },
  { slug: 'nachteile-24h-pflege', h1: 'Nachteile der 24h-Pflege — ehrlich betrachtet', parent: 'vergleiche' },
  { slug: '24h-pflege-checkliste', h1: '24h-Pflege Checkliste — alles im Blick', parent: 'organisation' },
  { slug: 'pflegegrad-1', h1: 'Pflegegrad 1 — Leistungen, Voraussetzungen & Beantragung', parent: 'pflegegrade' },
  { slug: 'pflegegrad-2', h1: 'Pflegegrad 2 — Leistungen & Geldbeträge 2025', parent: 'pflegegrade' },
  { slug: 'pflegegrad-3', h1: 'Pflegegrad 3 — Leistungen & Unterstützung', parent: 'pflegegrade' },
  { slug: 'pflegegrad-4', h1: 'Pflegegrad 4 — Leistungen & Pflegegeld', parent: 'pflegegrade' },
  { slug: 'pflegegrad-5', h1: 'Pflegegrad 5 — Schwerstpflegebedürftige & Leistungen', parent: 'pflegegrade' },
  { slug: 'pflegegrad-beantragen', h1: 'Pflegegrad beantragen — Schritt für Schritt', parent: 'pflegegrade' },
  { slug: 'pflegegrad-widerspruch-einlegen', h1: 'Widerspruch gegen Pflegegrad-Einstufung einlegen', parent: 'pflegegrade' },
  { slug: 'pflegegrad-erhoehen', h1: 'Pflegegrad erhöhen — so geht es', parent: 'pflegegrade' },
  { slug: 'pflegegrad-begutachtung-vorbereiten', h1: 'MDK-Begutachtung vorbereiten — Tipps & Checkliste', parent: 'pflegegrade' },
  { slug: 'pflegegrad-aenderung-melden', h1: 'Pflegegrad-Änderung melden — wann & wie', parent: 'pflegegrade' },
  { slug: 'pflegegrad-ohne-diagnose', h1: 'Pflegegrad ohne Diagnose — ist das möglich?', parent: 'pflegegrade' },
  { slug: 'pflegegrad-bei-demenz', h1: 'Pflegegrad bei Demenz — Einstufung & Leistungen', parent: 'pflegegrade' },
  { slug: 'pflegegrad-nach-schlaganfall', h1: 'Pflegegrad nach Schlaganfall — was steht Ihnen zu?', parent: 'pflegegrade' },
  { slug: 'pflegegrad-bei-parkinson', h1: 'Pflegegrad bei Parkinson — Einstufung & Unterstützung', parent: 'pflegegrade' },
  { slug: 'pflegegrade-2025', h1: 'Pflegegrade 2025 — alle Änderungen im Überblick', parent: 'pflegegrade' },
  { slug: 'pflegegeld-2025', h1: 'Pflegegeld 2025 — aktuelle Beträge & Voraussetzungen', parent: 'finanzierung' },
  { slug: 'pflegesachleistungen', h1: 'Pflegesachleistungen — was wird erstattet?', parent: 'finanzierung' },
  { slug: 'verhinderungspflege', h1: 'Verhinderungspflege 2025 — Anspruch & Abrechnung', parent: 'finanzierung' },
  { slug: 'kurzzeitpflege', h1: 'Kurzzeitpflege — Leistungen & Beantragung', parent: 'finanzierung' },
  { slug: 'entlastungsbetrag', h1: 'Entlastungsbetrag — 125 € monatlich richtig nutzen', parent: 'finanzierung' },
  { slug: 'kombinationsleistung-pflege', h1: 'Kombinationsleistung Pflege — Geldleistung & Sachleistung kombinieren', parent: 'finanzierung' },
  { slug: 'pflegehilfsmittel-beantragen', h1: 'Pflegehilfsmittel beantragen — Schritt für Schritt', parent: 'organisation' },
  { slug: 'wohnraumanpassung-foerderung', h1: 'Wohnraumanpassung — Förderung bis 4.000 €', parent: 'finanzierung' },
  { slug: 'pflege-steuerlich-absetzen', h1: 'Pflegekosten steuerlich absetzen — so geht es', parent: 'finanzierung' },
  { slug: 'pflegeversicherung-leistungen-uebersicht', h1: 'Pflegeversicherung Leistungen — vollständige Übersicht', parent: 'finanzierung' },
  { slug: 'sozialhilfe-bei-pflegebedarf', h1: 'Sozialhilfe bei Pflegebedarf — Hilfe zur Pflege', parent: 'finanzierung' },
  { slug: 'pflegegeld-und-24h-pflege-kombinieren', h1: 'Pflegegeld und 24h-Pflege kombinieren', parent: 'finanzierung' },
  { slug: 'eigenanteil-24h-pflege-senken', h1: 'Eigenanteil bei 24h-Pflege senken — alle Optionen', parent: 'finanzierung' },
  { slug: 'pflegereform-2025', h1: 'Pflegereform 2025 — alle Änderungen & Auswirkungen', parent: 'finanzierung' },
  { slug: 'foerderungen-nach-bundesland', h1: 'Pflegeförderungen nach Bundesland — regionaler Überblick', parent: 'finanzierung' },
  { slug: 'pflegekasse-antrag-stellen', h1: 'Antrag bei der Pflegekasse stellen — Anleitung', parent: 'pflegegrade' },
  { slug: '24h-pflege-organisieren', h1: '24h-Pflege organisieren — von A bis Z', parent: 'organisation' },
  { slug: 'pflegekraft-finden', h1: 'Pflegekraft finden — worauf es ankommt', parent: 'organisation' },
  { slug: 'pflegekraft-aus-polen', h1: 'Pflegekraft aus Polen — rechtssicher & geprüft', parent: 'organisation' },
  { slug: 'pflegekraft-aus-bulgarien', h1: 'Pflegekraft aus Bulgarien — was Sie wissen müssen', parent: 'organisation' },
  { slug: 'pflegekraft-aus-rumaenien', h1: 'Pflegekraft aus Rumänien — Vermittlung & Kosten', parent: 'organisation' },
  { slug: 'pflegekraft-legal-beschaeftigen', h1: 'Pflegekraft legal beschäftigen — so geht es richtig', parent: 'rechtliches' },
  { slug: 'pflegevertrag-aufsetzen', h1: 'Pflegevertrag aufsetzen — Inhalt & Muster', parent: 'organisation' },
  { slug: 'checkliste-pflegekraft-einstellen', h1: 'Checkliste: Pflegekraft einstellen', parent: 'organisation' },
  { slug: 'pflegekraft-wechseln', h1: 'Pflegekraft wechseln — Ablauf & Tipps', parent: 'organisation' },
  { slug: 'pflegekraft-kuendigen', h1: 'Pflegekraft kündigen — rechtssichere Anleitung', parent: 'rechtliches' },
  { slug: 'pflege-aus-der-ferne-koordinieren', h1: 'Pflege aus der Ferne koordinieren — Tipps', parent: 'organisation' },
  { slug: 'erste-hilfe-bei-pflegenotfall', h1: 'Erste Hilfe bei Pflegenotfall — sofort richtig handeln', parent: 'organisation' },
  { slug: 'notfallplan-pflege', h1: 'Notfallplan Pflege erstellen — Vorlage & Tipps', parent: 'organisation' },
  { slug: 'pflegehilfsmittel-organisieren', h1: 'Pflegehilfsmittel organisieren — Übersicht & Beantragung', parent: 'organisation' },
  { slug: 'wohnraumanpassung-planen', h1: 'Wohnraumanpassung planen — barrierefrei zu Hause', parent: 'alltag' },
  { slug: 'hilfsmittel-rollstuhl-beantragen', h1: 'Rollstuhl & Hilfsmittel beantragen — Anleitung', parent: 'organisation' },
  { slug: 'pflegedokumentation-fuehren', h1: 'Pflegedokumentation führen — Pflicht & Praxis', parent: 'organisation' },
  { slug: 'pflegeberater-finden', h1: 'Pflegeberater finden — kostenlose Beratungsangebote', parent: 'organisation' },
  { slug: 'pflegestuetzpunkte-deutschland', h1: 'Pflegestützpunkte Deutschland — Beratung vor Ort', parent: 'organisation' },
  { slug: 'demenz-pflege-zuhause', h1: 'Demenz-Pflege zu Hause — Tipps & Betreuung', parent: 'krankheiten' },
  { slug: 'alzheimer-betreuung-zuhause', h1: 'Alzheimer-Betreuung zu Hause — so geht es', parent: 'krankheiten' },
  { slug: 'schlaganfall-pflege-zuhause', h1: 'Schlaganfall-Pflege zu Hause — Rehabilitation & Betreuung', parent: 'krankheiten' },
  { slug: 'parkinson-pflege-zuhause', h1: 'Parkinson-Pflege zu Hause — spezialisierte Betreuung', parent: 'krankheiten' },
  { slug: 'multiple-sklerose-pflege', h1: 'Multiple Sklerose Pflege zu Hause', parent: 'krankheiten' },
  { slug: 'herzinsuffizienz-pflege', h1: 'Herzinsuffizienz Pflege zu Hause — was zu beachten ist', parent: 'krankheiten' },
  { slug: 'diabetes-pflege-senioren', h1: 'Diabetes-Pflege bei Senioren zu Hause', parent: 'krankheiten' },
  { slug: 'krebspatienten-zuhause-pflegen', h1: 'Krebspatienten zu Hause pflegen — Ratgeber', parent: 'krankheiten' },
  { slug: 'pflege-nach-op', h1: 'Pflege nach OP — häusliche Betreuung & Rehabilitation', parent: 'krankheiten' },
  { slug: 'osteoporose-pflege-zuhause', h1: 'Osteoporose Pflege zu Hause — sicher & sturzfrei', parent: 'krankheiten' },
  { slug: 'copd-pflege-zuhause', h1: 'COPD Pflege zu Hause — Betreuung & Alltagshilfen', parent: 'krankheiten' },
  { slug: 'sehbehinderung-blindheit-pflege', h1: 'Pflege bei Sehbehinderung & Blindheit zu Hause', parent: 'krankheiten' },
  { slug: 'depression-im-alter-pflege', h1: 'Depression im Alter — Pflege & Betreuung zu Hause', parent: 'krankheiten' },
  { slug: 'inkontinenz-pflege-zuhause', h1: 'Inkontinenz-Pflege zu Hause — Hilfsmittel & Tipps', parent: 'krankheiten' },
  { slug: 'wunden-verbinden-zuhause', h1: 'Wunden verbinden zu Hause — Wundversorgung erklärt', parent: 'krankheiten' },
  { slug: 'palliativpflege-zuhause', h1: 'Palliativpflege zu Hause — würdevoll begleiten', parent: 'krankheiten' },
  { slug: 'intensivpflege-zuhause', h1: 'Intensivpflege zu Hause — was ist möglich?', parent: 'krankheiten' },
  { slug: '24h-pflege-vs-pflegeheim-kosten', h1: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2025', parent: 'vergleiche' },
  { slug: '24h-pflege-anbieter-vergleich', h1: '24h-Pflege Anbieter im Vergleich', parent: 'vergleiche' },
  { slug: 'osteuropaeische-pflegekraft-oder-agentur', h1: 'Osteuropäische Pflegekraft oder Agentur — was ist besser?', parent: 'vergleiche' },
  { slug: 'pflegeheim-kosten-deutschland', h1: 'Pflegeheim-Kosten in Deutschland 2025', parent: 'vergleiche' },
  { slug: 'selbst-pflegen-oder-24h-pflege', h1: 'Selbst pflegen oder 24h-Pflege beauftragen?', parent: 'vergleiche' },
  { slug: 'tagespflege-vs-24h-betreuung', h1: 'Tagespflege vs. 24h-Betreuung — der Vergleich', parent: 'vergleiche' },
  { slug: 'kurzzeitpflege-oder-24h-pflege', h1: 'Kurzzeitpflege oder 24h-Pflege — was passt?', parent: 'vergleiche' },
  { slug: 'pflegedienst-oder-24h-kraft', h1: 'Pflegedienst oder 24h-Pflegekraft — Unterschiede', parent: 'vergleiche' },
  { slug: 'ambulante-vs-stationaere-pflege', h1: 'Ambulante vs. stationäre Pflege im Vergleich', parent: 'vergleiche' },
  { slug: 'pflegende-angehoerige-unterstuetzen', h1: 'Pflegende Angehörige unterstützen — Tipps & Entlastung', parent: 'alltag' },
  { slug: 'kommunikation-mit-demenzkranken', h1: 'Kommunikation mit Demenzkranken — so gelingt es', parent: 'alltag' },
  { slug: 'ernaehrung-pflegebeduerftige-senioren', h1: 'Ernährung pflegebedürftiger Senioren — Tipps', parent: 'alltag' },
  { slug: 'bewegung-senioren-zuhause', h1: 'Bewegung für Senioren zu Hause — Übungen & Tipps', parent: 'alltag' },
  { slug: 'sturzpraevention-senioren', h1: 'Sturzprävention bei Senioren — so beugen Sie vor', parent: 'alltag' },
  { slug: 'medikamente-senioren-verwalten', h1: 'Medikamente bei Senioren verwalten — sicher & übersichtlich', parent: 'alltag' },
  { slug: 'schlafprobleme-senioren-loesen', h1: 'Schlafprobleme bei Senioren lösen — Tipps', parent: 'alltag' },
  { slug: 'einsamkeit-senioren-bekaempfen', h1: 'Einsamkeit bei Senioren bekämpfen — was hilft', parent: 'alltag' },
  { slug: 'tagesstruktur-demenz', h1: 'Tagesstruktur bei Demenz — Routinen & Aktivitäten', parent: 'alltag' },
  { slug: 'beschaeftigung-senioren-zuhause', h1: 'Beschäftigung für Senioren zu Hause — Ideen', parent: 'alltag' },
  { slug: 'barrierefreies-zuhause-gestalten', h1: 'Barrierefreies Zuhause gestalten — Förderung & Tipps', parent: 'alltag' },
  { slug: 'hausnotruf-senioren', h1: 'Hausnotruf für Senioren — Anbieter & Kosten', parent: 'alltag' },
  { slug: 'pflege-und-beruf-vereinbaren', h1: 'Pflege und Beruf vereinbaren — rechtliche Möglichkeiten', parent: 'alltag' },
  { slug: 'pflegezeit-gesetz-angehoerige', h1: 'Pflegezeitgesetz für Angehörige — Ansprüche & Rechte', parent: 'rechtliches' },
  { slug: 'burnout-pflegende-angehoerige', h1: 'Burnout bei pflegenden Angehörigen — Hilfe & Prävention', parent: 'alltag' },
  { slug: 'pflegeverantwortung-unter-geschwistern', h1: 'Pflegeverantwortung unter Geschwistern aufteilen', parent: 'alltag' },
  { slug: 'vorsorgevollmacht-erstellen', h1: 'Vorsorgevollmacht erstellen — Anleitung & Muster', parent: 'rechtliches' },
  { slug: 'patientenverfuegung-aufsetzen', h1: 'Patientenverfügung aufsetzen — so geht es richtig', parent: 'rechtliches' },
  { slug: 'betreuungsverfuegung-erstellen', h1: 'Betreuungsverfügung erstellen — Vorlage & Tipps', parent: 'rechtliches' },
  { slug: 'wenn-eltern-pflege-verweigern', h1: 'Wenn Eltern Pflege verweigern — was tun?', parent: 'alltag' },
  { slug: 'pflegevertrag-muster-vorlage', h1: 'Pflegevertrag Muster & Vorlage — kostenlos', parent: 'rechtliches' },
  { slug: 'werkvertrag-pflegekraft-muster', h1: 'Werkvertrag Pflegekraft — Muster & Rechtliches', parent: 'rechtliches' },
  { slug: 'scheinselbststaendigkeit-pflege-vermeiden', h1: 'Scheinselbstständigkeit in der Pflege vermeiden', parent: 'rechtliches' },
  { slug: 'pflegekraft-sozialversicherung-anmelden', h1: 'Pflegekraft zur Sozialversicherung anmelden', parent: 'rechtliches' },
  { slug: 'eu-pflegekraft-rechte-pflichten', h1: 'EU-Pflegekraft — Rechte & Pflichten erklärt', parent: 'rechtliches' },
  { slug: 'haftung-pflegehaushalt', h1: 'Haftung im Pflegehaushalt — was Arbeitgeber wissen müssen', parent: 'rechtliches' },
  { slug: 'datenschutz-pflegesituation', h1: 'Datenschutz in der Pflegesituation — was gilt?', parent: 'rechtliches' },
  { slug: 'widerspruch-pflegekasse-einlegen', h1: 'Widerspruch bei der Pflegekasse einlegen — Anleitung', parent: 'pflegegrade' },
  { slug: 'mdk-begutachtung-tipps', h1: 'MDK-Begutachtung — Tipps für eine faire Einstufung', parent: 'pflegegrade' },
  { slug: 'pflegemangel-melden-beschwerden', h1: 'Pflegemangel melden — Beschwerden richtig einreichen', parent: 'rechtliches' },
];

// Build a map: parent → articles
const byParent = {};
for (const a of artikel) {
  if (!byParent[a.parent]) byParent[a.parent] = [];
  byParent[a.parent].push(a);
}

// Hub definitions
const hubs = [
  { slug: 'ratgeber', title: 'Ratgeber 24h-Pflege', desc: 'Alle Ratgeber-Artikel zu 24h-Pflege, Pflegegraden, Finanzierung, Krankheiten und Organisation — übersichtlich gegliedert.', h1: 'Ratgeber 24-Stunden-Pflege — alle Themen im Überblick' },
  { slug: 'pflegegrade', title: 'Pflegegrade — Übersicht & Ratgeber', desc: 'Alles zu Pflegegrad 1–5: Beantragung, Einstufung, Widerspruch, Leistungen. Aktuell für 2025.', h1: 'Pflegegrade 1–5 — alles was Sie wissen müssen' },
  { slug: 'finanzierung', title: 'Finanzierung der 24h-Pflege', desc: 'Pflegegeld, Sachleistungen, Verhinderungspflege, Entlastungsbetrag — alle Zuschüsse für die 24h-Pflege erklärt.', h1: 'Finanzierung der 24h-Pflege — alle Zuschüsse 2025' },
  { slug: 'organisation', title: 'Organisation der 24h-Pflege', desc: 'Pflegekraft finden, Vertrag aufsetzen, wechseln, kündigen — alle Organisationsthemen für die häusliche Pflege.', h1: 'Organisation der häuslichen Pflege — Schritt für Schritt' },
  { slug: 'krankheiten', title: 'Pflege bei Krankheiten', desc: 'Demenz, Alzheimer, Parkinson, Schlaganfall, Krebs — häusliche Pflege bei verschiedenen Erkrankungen erklärt.', h1: 'Häusliche Pflege bei Krankheiten — Ratgeber' },
  { slug: 'vergleiche', title: 'Pflegemodelle vergleichen', desc: '24h-Pflege vs. Pflegeheim, Pflegedienst, ambulante Pflege — alle Vergleiche auf einen Blick.', h1: 'Pflegemodelle im Vergleich — was passt zu Ihrer Situation?' },
  { slug: 'alltag', title: 'Alltag & Betreuung zu Hause', desc: 'Ernährung, Bewegung, Sturzprävention, Tagesstruktur — praktische Tipps für den Pflegealltag.', h1: 'Alltag & Betreuung — Tipps für die häusliche Pflege' },
  { slug: 'rechtliches', title: 'Rechtliches zur 24h-Pflege', desc: 'Vorsorgevollmacht, Pflegevertrag, Scheinselbstständigkeit, Haftung — alle Rechtsthemen zur häuslichen Pflege.', h1: 'Rechtliches zur 24h-Pflege — was Sie wissen müssen' },
  { slug: 'regionen', title: '24h-Pflege in Ihrer Region', desc: 'Primundus vermittelt 24h-Pflege in ganz Deutschland — alle Bundesländer und Städte im Überblick.', h1: '24h-Pflege in Ihrer Region finden' },
  { slug: 'tools', title: 'Pflege-Tools & Rechner', desc: 'Kostenloser Pflegegrad-Rechner, Kostenrechner, Zuschuss-Rechner und mehr — alle Tools für Ihre Pflegeplanung.', h1: 'Kostenlose Pflege-Tools & Rechner' },
];

const toolSlugs = ['pflegegrad-rechner','kostenrechner','zuschuss-rechner','eigenanteil-rechner','pflegebedarf-einschaetzen','pflegeheim-kostenvergleich','anbieter-vergleich','checkliste-pflegeuebernahme','pflegevertrag-generator','vollmacht-generator'];

function breadcrumbSchema(slug, title) {
  return JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
    { '@type': 'ListItem', position: 2, name: title, item: `https://primundus.de/${slug}/` },
  ]});
}

function faqSchema() {
  return JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'FAQ 1', acceptedAnswer: { '@type': 'Answer', text: 'Antwort folgt' } },
    { '@type': 'Question', name: 'FAQ 2', acceptedAnswer: { '@type': 'Answer', text: 'Antwort folgt' } },
    { '@type': 'Question', name: 'FAQ 3', acceptedAnswer: { '@type': 'Answer', text: 'Antwort folgt' } },
  ]});
}

function writeFile(filePath, content) {
  const { mkdirSync: mkdir, writeFileSync: write } = { mkdirSync, writeFileSync };
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, content, 'utf8');
}

import { dirname as dn } from 'path';

for (const hub of hubs) {
  const { slug, title, desc, h1 } = hub;
  const canonicalUrl = `https://primundus.de/${slug}/`;
  const fileName = join(APP, slug, 'page.tsx');

  // Get all articles for this hub
  const children = byParent[slug] || [];
  // For tools hub, use toolSlugs
  const isTools = slug === 'tools';
  const isRegionen = slug === 'regionen';

  const breadcrumb = breadcrumbSchema(slug, title);
  const faq = faqSchema();

  let childGrid = '';
  if (isTools) {
    childGrid = `
          {/* Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            ${toolSlugs.map(s => `<a href="/${s}/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] hover:shadow-sm transition-all text-[14px] font-medium text-[#3D3D3D]">→ ${toTitle(s)}</a>`).join('\n            ')}
          </div>`;
  } else if (isRegionen) {
    childGrid = `
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-[14px] text-amber-800 mb-8">
            Alle Regionen im Aufbau — Städte und Bundesländer werden verlinkt
          </div>`;
  } else if (children.length > 0) {
    // Group by sections of ~6 for readability
    childGrid = `
          {/* Artikel dieser Kategorie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            ${children.map(a => `<a href="/${a.slug}/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] hover:shadow-sm transition-all text-[14px] font-medium text-[#3D3D3D]">\n              → ${a.h1.replace(/\s*—.*/, '')}\n            </a>`).join('\n            ')}
          </div>`;
  }

  const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title} | Primundus',
  description: '${desc}',
  alternates: {
    canonical: '${canonicalUrl}',
  },
  openGraph: {
    title: '${title} | Primundus',
    description: '${desc}',
    url: '${canonicalUrl}',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = \`[${breadcrumb},${faq}]\`

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-16">
          <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">${title}</span>
          </nav>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-6">
            ${h1}
          </h1>

          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10">
            ${desc}
          </p>
${childGrid}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-8 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-2">
              Kostenlose Beratung
            </p>
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-4">
              Jetzt Pflegesituation besprechen
            </h2>
            <a
              href="tel:+4989200000830"
              className="inline-flex items-center gap-3 bg-[#8B7355] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#7D6E5D] transition-all duration-200"
            >
              089 200 000 830
            </a>
            <p className="text-[13px] text-[#8B8B8B] mt-3">Mo–Fr 9:00–18:00 Uhr · Ilka Wysocki</p>
          </div>
        </div>
      </div>
    </>
  )
}
`;

  mkdirSync(dn(fileName), { recursive: true });
  writeFileSync(fileName, content, 'utf8');
  console.log(`✓ ${slug} (${children.length || (isTools ? 10 : 0)} Artikel)`);
}

console.log('\nAlle Hub-Seiten regeneriert.');
