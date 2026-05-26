#!/usr/bin/env node
/**
 * Generates all 267 page.tsx shells for primundus.de
 * Run: node scripts/generate-pages.mjs
 */

import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APP = join(ROOT, 'app');

// ─── slug → human-readable title helper ───────────────────────────────────────
function toTitle(slug) {
  if (!slug) return 'Startseite';
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
    .replace(/\bFuer\b/g, 'für')
    .replace(/\bNach\b/g, 'nach')
    .replace(/\bMit\b/g, 'mit')
    .replace(/\bOhne\b/g, 'ohne')
    .replace(/\bVon\b/g, 'von')
    .trim();
}

// ─── Page types ───────────────────────────────────────────────────────────────
const moneyPages = [
  { slug: '', title: 'Primundus — 24-Stunden-Pflege | Testsieger & 20 Jahre Erfahrung', desc: 'Primundus vermittelt rechtssichere 24h-Pflege zu Hause. Testsieger DIE WELT. Täglich kündbar. Betreuung in 4–7 Tagen. Kostenlose Beratung: 089 200 000 830.', h1: '24-Stunden-Pflege zu Hause — sicher, legal & persönlich', type: 'home' },
  { slug: '24-stunden-pflege', title: '24-Stunden-Pflege zu Hause', desc: 'Was ist 24-Stunden-Pflege? Wie funktioniert das Betreuungsmodell? Rechtssicher, täglich kündbar, in 4–7 Tagen startklar. Jetzt informieren.', h1: '24-Stunden-Pflege zu Hause — so funktioniert es', type: 'money' },
  { slug: 'kosten', title: 'Kosten 24h-Pflege 2025', desc: 'Was kostet 24h-Pflege? Alle Kosten, Zuschüsse und Einsparoptionen im Überblick. Ab ca. 2.500 €/Monat. Kostenlose Beratung.', h1: 'Kosten der 24-Stunden-Pflege 2025 — transparent erklärt', type: 'money' },
  { slug: 'leistungen', title: 'Leistungen der 24h-Pflege', desc: 'Welche Leistungen sind in der 24h-Pflege enthalten? Von Grundpflege bis Betreuung — alle Leistungen von Primundus im Überblick.', h1: 'Leistungen der 24h-Pflege bei Primundus', type: 'money' },
  { slug: 'ablauf', title: 'Ablauf: 24h-Pflege beauftragen', desc: 'In 4 einfachen Schritten zur 24h-Pflege. Beratung, Angebot, Vermittlung, Start — so läuft es bei Primundus ab.', h1: 'Ablauf: So starten Sie Ihre 24h-Pflege in 4 Schritten', type: 'money' },
  { slug: 'rechtssicher', title: '24h-Pflege rechtssicher & legal', desc: 'Wie funktioniert legale 24h-Pflege in Deutschland? Entsendemodell, EU-Recht, Sozialversicherung — alles erklärt.', h1: '24h-Pflege rechtssicher & ohne Risiko', type: 'money' },
  { slug: 'qualitaet', title: 'Qualität & Auswahl der Pflegekräfte', desc: 'Wie wählt Primundus Pflegekräfte aus? Qualitätsstandards, Qualifikationen und persönliche Betreuung erklärt.', h1: 'Qualität & Auswahl — so finden wir Ihre Pflegekraft', type: 'money' },
  { slug: 'kontakt', title: 'Kontakt | Primundus', desc: 'Kontaktieren Sie Primundus für eine kostenlose Beratung zur 24h-Pflege. Tel: 089 200 000 830. Mo–Fr 9–18 Uhr.', h1: 'Kontakt — wir beraten Sie persönlich', type: 'money' },
  { slug: 'beratungsgespraech', title: 'Kostenloses Beratungsgespräch', desc: 'Vereinbaren Sie ein kostenloses Beratungsgespräch zur 24h-Pflege. Persönlich, unverbindlich, in 4–7 Tagen startklar.', h1: 'Kostenloses Beratungsgespräch vereinbaren', type: 'money' },
];

const hubs = [
  { slug: 'ratgeber', title: 'Ratgeber 24h-Pflege', desc: 'Alle Ratgeber-Artikel zu 24h-Pflege, Pflegegraden, Finanzierung, Krankheiten und Organisation — übersichtlich gegliedert.', h1: 'Ratgeber 24-Stunden-Pflege — alle Themen im Überblick', type: 'hub', children: ['was-ist-24-stunden-pflege', '24h-pflege-vs-pflegeheim', 'pflegegrad-beantragen', 'pflegegeld-2025', 'pflegekraft-aus-polen'] },
  { slug: 'pflegegrade', title: 'Pflegegrade — Übersicht & Ratgeber', desc: 'Alles zu Pflegegrad 1–5: Beantragung, Einstufung, Widerspruch, Leistungen. Aktuell für 2025.', h1: 'Pflegegrade 1–5 — alles was Sie wissen müssen', type: 'hub', children: ['pflegegrad-1', 'pflegegrad-2', 'pflegegrad-3', 'pflegegrad-4', 'pflegegrad-5', 'pflegegrad-beantragen', 'pflegegrade-2025'] },
  { slug: 'finanzierung', title: 'Finanzierung der 24h-Pflege', desc: 'Pflegegeld, Sachleistungen, Verhinderungspflege, Entlastungsbetrag — alle Zuschüsse für die 24h-Pflege erklärt.', h1: 'Finanzierung der 24h-Pflege — alle Zuschüsse 2025', type: 'hub', children: ['pflegegeld-2025', 'pflegesachleistungen', 'verhinderungspflege', 'entlastungsbetrag', 'eigenanteil-24h-pflege-senken'] },
  { slug: 'organisation', title: 'Organisation der 24h-Pflege', desc: 'Pflegekraft finden, Vertrag aufsetzen, wechseln, kündigen — alle Organisationsthemen für die häusliche Pflege.', h1: 'Organisation der häuslichen Pflege — Schritt für Schritt', type: 'hub', children: ['24h-pflege-organisieren', 'pflegekraft-finden', 'pflegevertrag-aufsetzen', 'pflegekraft-wechseln'] },
  { slug: 'krankheiten', title: 'Pflege bei Krankheiten', desc: 'Demenz, Alzheimer, Parkinson, Schlaganfall, Krebs — häusliche Pflege bei verschiedenen Erkrankungen erklärt.', h1: 'Häusliche Pflege bei Krankheiten — Ratgeber', type: 'hub', children: ['demenz-pflege-zuhause', 'alzheimer-betreuung-zuhause', 'schlaganfall-pflege-zuhause', 'parkinson-pflege-zuhause'] },
  { slug: 'vergleiche', title: 'Pflegemodelle vergleichen', desc: '24h-Pflege vs. Pflegeheim, Pflegedienst, ambulante Pflege — alle Vergleiche auf einen Blick.', h1: 'Pflegemodelle im Vergleich — was passt zu Ihrer Situation?', type: 'hub', children: ['24h-pflege-vs-pflegeheim', '24h-pflege-vs-ambulante-pflege', 'tagespflege-vs-24h-betreuung', 'pflegedienst-oder-24h-kraft'] },
  { slug: 'alltag', title: 'Alltag & Betreuung zu Hause', desc: 'Ernährung, Bewegung, Sturzprävention, Tagesstruktur — praktische Tipps für den Pflegealltag.', h1: 'Alltag & Betreuung — Tipps für die häusliche Pflege', type: 'hub', children: ['ernaehrung-pflegebeduerftige-senioren', 'sturzpraevention-senioren', 'tagesstruktur-demenz', 'beschaeftigung-senioren-zuhause'] },
  { slug: 'rechtliches', title: 'Rechtliches zur 24h-Pflege', desc: 'Vorsorgevollmacht, Pflegevertrag, Scheinselbstständigkeit, Haftung — alle Rechtsthemen zur häuslichen Pflege.', h1: 'Rechtliches zur 24h-Pflege — was Sie wissen müssen', type: 'hub', children: ['vorsorgevollmacht-erstellen', 'pflegevertrag-muster-vorlage', 'scheinselbststaendigkeit-pflege-vermeiden', 'eu-pflegekraft-rechte-pflichten'] },
  { slug: 'regionen', title: '24h-Pflege in Ihrer Region', desc: 'Primundus vermittelt 24h-Pflege in ganz Deutschland — alle Bundesländer und Städte im Überblick.', h1: '24h-Pflege in Ihrer Region finden', type: 'hub', children: [] },
  { slug: 'tools', title: 'Pflege-Tools & Rechner', desc: 'Kostenloser Pflegegrad-Rechner, Kostenrechner, Zuschuss-Rechner und mehr — alle Tools für Ihre Pflegeplanung.', h1: 'Kostenlose Pflege-Tools & Rechner', type: 'hub', children: ['pflegegrad-rechner', 'kostenrechner', 'zuschuss-rechner', 'eigenanteil-rechner'] },
];

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

const toolPages = [
  { slug: 'pflegegrad-rechner', h1: 'Kostenloser Pflegegrad-Rechner — Einstufung einschätzen' },
  { slug: 'kostenrechner', h1: 'Kostenrechner 24h-Pflege — was kostet Ihre Betreuung?' },
  { slug: 'zuschuss-rechner', h1: 'Zuschuss-Rechner — welche Förderungen stehen Ihnen zu?' },
  { slug: 'eigenanteil-rechner', h1: 'Eigenanteil-Rechner — Ihren Anteil berechnen' },
  { slug: 'pflegebedarf-einschaetzen', h1: 'Pflegebedarf einschätzen — kostenloser Self-Check' },
  { slug: 'pflegeheim-kostenvergleich', h1: 'Pflegeheim Kostenvergleich — regional & aktuell' },
  { slug: 'anbieter-vergleich', h1: 'Anbieter Vergleich 24h-Pflege — unabhängig & kostenlos' },
  { slug: 'checkliste-pflegeuebernahme', h1: 'Checkliste Pflegeübernahme — alles vorbereitet?' },
  { slug: 'pflegevertrag-generator', h1: 'Pflegevertrag Generator — rechtssicher erstellen' },
  { slug: 'vollmacht-generator', h1: 'Vollmacht Generator — Vorsorgevollmacht erstellen' },
];

const regionen = [
  { slug: '24h-pflege-nordrhein-westfalen', city: 'Nordrhein-Westfalen', isState: true },
  { slug: '24h-pflege-bayern', city: 'Bayern', isState: true },
  { slug: '24h-pflege-baden-wuerttemberg', city: 'Baden-Württemberg', isState: true },
  { slug: '24h-pflege-niedersachsen', city: 'Niedersachsen', isState: true },
  { slug: '24h-pflege-hessen', city: 'Hessen', isState: true },
  { slug: '24h-pflege-rheinland-pfalz', city: 'Rheinland-Pfalz', isState: true },
  { slug: '24h-pflege-sachsen', city: 'Sachsen', isState: true },
  { slug: '24h-pflege-berlin', city: 'Berlin', isState: false },
  { slug: '24h-pflege-schleswig-holstein', city: 'Schleswig-Holstein', isState: true },
  { slug: '24h-pflege-brandenburg', city: 'Brandenburg', isState: true },
  { slug: '24h-pflege-sachsen-anhalt', city: 'Sachsen-Anhalt', isState: true },
  { slug: '24h-pflege-thueringen', city: 'Thüringen', isState: true },
  { slug: '24h-pflege-hamburg', city: 'Hamburg', isState: false },
  { slug: '24h-pflege-mecklenburg-vorpommern', city: 'Mecklenburg-Vorpommern', isState: true },
  { slug: '24h-pflege-saarland', city: 'Saarland', isState: true },
  { slug: '24h-pflege-bremen', city: 'Bremen', isState: false },
  { slug: '24h-pflege-muenchen', city: 'München', isState: false },
  { slug: '24h-pflege-koeln', city: 'Köln', isState: false },
  { slug: '24h-pflege-frankfurt', city: 'Frankfurt', isState: false },
  { slug: '24h-pflege-stuttgart', city: 'Stuttgart', isState: false },
  { slug: '24h-pflege-duesseldorf', city: 'Düsseldorf', isState: false },
  { slug: '24h-pflege-leipzig', city: 'Leipzig', isState: false },
  { slug: '24h-pflege-dortmund', city: 'Dortmund', isState: false },
  { slug: '24h-pflege-essen', city: 'Essen', isState: false },
  { slug: '24h-pflege-dresden', city: 'Dresden', isState: false },
  { slug: '24h-pflege-hannover', city: 'Hannover', isState: false },
  { slug: '24h-pflege-nuernberg', city: 'Nürnberg', isState: false },
  { slug: '24h-pflege-duisburg', city: 'Duisburg', isState: false },
  { slug: '24h-pflege-bochum', city: 'Bochum', isState: false },
  { slug: '24h-pflege-wuppertal', city: 'Wuppertal', isState: false },
  { slug: '24h-pflege-bielefeld', city: 'Bielefeld', isState: false },
  { slug: '24h-pflege-bonn', city: 'Bonn', isState: false },
  { slug: '24h-pflege-muenster', city: 'Münster', isState: false },
  { slug: '24h-pflege-karlsruhe', city: 'Karlsruhe', isState: false },
  { slug: '24h-pflege-mannheim', city: 'Mannheim', isState: false },
  { slug: '24h-pflege-augsburg', city: 'Augsburg', isState: false },
  { slug: '24h-pflege-wiesbaden', city: 'Wiesbaden', isState: false },
  { slug: '24h-pflege-gelsenkirchen', city: 'Gelsenkirchen', isState: false },
  { slug: '24h-pflege-moenchengladbach', city: 'Mönchengladbach', isState: false },
  { slug: '24h-pflege-braunschweig', city: 'Braunschweig', isState: false },
  { slug: '24h-pflege-chemnitz', city: 'Chemnitz', isState: false },
  { slug: '24h-pflege-kiel', city: 'Kiel', isState: false },
  { slug: '24h-pflege-aachen', city: 'Aachen', isState: false },
  { slug: '24h-pflege-halle-saale', city: 'Halle (Saale)', isState: false },
  { slug: '24h-pflege-magdeburg', city: 'Magdeburg', isState: false },
  { slug: '24h-pflege-freiburg', city: 'Freiburg', isState: false },
  { slug: '24h-pflege-krefeld', city: 'Krefeld', isState: false },
  { slug: '24h-pflege-luebeck', city: 'Lübeck', isState: false },
  { slug: '24h-pflege-oberhausen', city: 'Oberhausen', isState: false },
  { slug: '24h-pflege-erfurt', city: 'Erfurt', isState: false },
  { slug: '24h-pflege-mainz', city: 'Mainz', isState: false },
  { slug: '24h-pflege-rostock', city: 'Rostock', isState: false },
  { slug: '24h-pflege-kassel', city: 'Kassel', isState: false },
  { slug: '24h-pflege-hagen', city: 'Hagen', isState: false },
  { slug: '24h-pflege-hamm', city: 'Hamm', isState: false },
  { slug: '24h-pflege-saarbruecken', city: 'Saarbrücken', isState: false },
  { slug: '24h-pflege-muelheim-ruhr', city: 'Mülheim an der Ruhr', isState: false },
  { slug: '24h-pflege-potsdam', city: 'Potsdam', isState: false },
  { slug: '24h-pflege-ludwigshafen', city: 'Ludwigshafen', isState: false },
  { slug: '24h-pflege-oldenburg', city: 'Oldenburg', isState: false },
  { slug: '24h-pflege-leverkusen', city: 'Leverkusen', isState: false },
  { slug: '24h-pflege-osnabrueck', city: 'Osnabrück', isState: false },
  { slug: '24h-pflege-solingen', city: 'Solingen', isState: false },
  { slug: '24h-pflege-heidelberg', city: 'Heidelberg', isState: false },
  { slug: '24h-pflege-herne', city: 'Herne', isState: false },
  { slug: '24h-pflege-neuss', city: 'Neuss', isState: false },
  { slug: '24h-pflege-darmstadt', city: 'Darmstadt', isState: false },
  { slug: '24h-pflege-regensburg', city: 'Regensburg', isState: false },
  { slug: '24h-pflege-paderborn', city: 'Paderborn', isState: false },
  { slug: '24h-pflege-ingolstadt', city: 'Ingolstadt', isState: false },
  { slug: '24h-pflege-wuerzburg', city: 'Würzburg', isState: false },
  { slug: '24h-pflege-fuerth', city: 'Fürth', isState: false },
  { slug: '24h-pflege-wolfsburg', city: 'Wolfsburg', isState: false },
  { slug: '24h-pflege-offenbach', city: 'Offenbach', isState: false },
  { slug: '24h-pflege-ulm', city: 'Ulm', isState: false },
  { slug: '24h-pflege-heilbronn', city: 'Heilbronn', isState: false },
  { slug: '24h-pflege-pforzheim', city: 'Pforzheim', isState: false },
  { slug: '24h-pflege-goettingen', city: 'Göttingen', isState: false },
  { slug: '24h-pflege-bottrop', city: 'Bottrop', isState: false },
  { slug: '24h-pflege-recklinghausen', city: 'Recklinghausen', isState: false },
  { slug: '24h-pflege-reutlingen', city: 'Reutlingen', isState: false },
  { slug: '24h-pflege-bremerhaven', city: 'Bremerhaven', isState: false },
  { slug: '24h-pflege-koblenz', city: 'Koblenz', isState: false },
  { slug: '24h-pflege-erlangen', city: 'Erlangen', isState: false },
  { slug: '24h-pflege-remscheid', city: 'Remscheid', isState: false },
  { slug: '24h-pflege-trier', city: 'Trier', isState: false },
  { slug: '24h-pflege-moers', city: 'Moers', isState: false },
  { slug: '24h-pflege-salzgitter', city: 'Salzgitter', isState: false },
  { slug: '24h-pflege-siegen', city: 'Siegen', isState: false },
  { slug: '24h-pflege-hildesheim', city: 'Hildesheim', isState: false },
  { slug: '24h-pflege-guetersloh', city: 'Gütersloh', isState: false },
  { slug: '24h-pflege-kaiserslautern', city: 'Kaiserslautern', isState: false },
  { slug: '24h-pflege-cottbus', city: 'Cottbus', isState: false },
  { slug: '24h-pflege-schwerin', city: 'Schwerin', isState: false },
  { slug: '24h-pflege-gera', city: 'Gera', isState: false },
  { slug: '24h-pflege-iserlohn', city: 'Iserlohn', isState: false },
  { slug: '24h-pflege-zwickau', city: 'Zwickau', isState: false },
  { slug: '24h-pflege-dueren', city: 'Düren', isState: false },
  { slug: '24h-pflege-dessau', city: 'Dessau', isState: false },
  { slug: '24h-pflege-luedenscheid', city: 'Lüdenscheid', isState: false },
  { slug: '24h-pflege-flensburg', city: 'Flensburg', isState: false },
  { slug: '24h-pflege-luenen', city: 'Lünen', isState: false },
  { slug: '24h-pflege-jena', city: 'Jena', isState: false },
  { slug: '24h-pflege-witten', city: 'Witten', isState: false },
  { slug: '24h-pflege-ratingen', city: 'Ratingen', isState: false },
  { slug: '24h-pflege-velbert', city: 'Velbert', isState: false },
  { slug: '24h-pflege-hanau', city: 'Hanau', isState: false },
  { slug: '24h-pflege-marl', city: 'Marl', isState: false },
  { slug: '24h-pflege-hameln', city: 'Hameln', isState: false },
  { slug: '24h-pflege-bergisch-gladbach', city: 'Bergisch Gladbach', isState: false },
  { slug: '24h-pflege-troisdorf', city: 'Troisdorf', isState: false },
  { slug: '24h-pflege-viersen', city: 'Viersen', isState: false },
  { slug: '24h-pflege-konstanz', city: 'Konstanz', isState: false },
];

const trustPages = [
  { slug: 'ueber-uns', h1: 'Über Primundus — 20 Jahre Erfahrung in der 24h-Pflege' },
  { slug: 'team', h1: 'Das Primundus-Team — Ihre Ansprechpartner' },
  { slug: 'auszeichnungen', h1: 'Auszeichnungen & Testsieger — Primundus' },
  { slug: 'presse', h1: 'Primundus in der Presse — Medienberichte' },
  { slug: 'karriere', h1: 'Karriere bei Primundus — offene Stellen' },
  { slug: 'impressum', h1: 'Impressum' },
  { slug: 'datenschutz', h1: 'Datenschutzerklärung' },
  { slug: 'agb', h1: 'Allgemeine Geschäftsbedingungen (AGB)' },
  { slug: 'sitemap', h1: 'Sitemap — alle Seiten im Überblick' },
];

// ─── Template generators ──────────────────────────────────────────────────────

const dateNow = new Date().toISOString().split('T')[0];

function orgSchema() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Primundus',
    url: 'https://primundus.de',
    logo: 'https://primundus.de/images/primundus_logo_header.webp',
    telephone: '+4989200000830',
    email: 'info@primundus.de',
    founder: { '@type': 'Person', name: 'Ilka Wysocki' },
    award: 'Testsieger DIE WELT — Größter deutscher 24h-Pflege Vergleichstest',
    foundingDate: '2004',
  });
}

function breadcrumbSchema(slug, title) {
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
    { '@type': 'ListItem', position: 2, name: title, item: `https://primundus.de/${slug}/` },
  ];
  return JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items });
}

function faqSchema() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'FAQ 1', acceptedAnswer: { '@type': 'Answer', text: 'Antwort folgt' } },
      { '@type': 'Question', name: 'FAQ 2', acceptedAnswer: { '@type': 'Answer', text: 'Antwort folgt' } },
      { '@type': 'Question', name: 'FAQ 3', acceptedAnswer: { '@type': 'Answer', text: 'Antwort folgt' } },
    ],
  });
}

function articleSchema(h1, slug) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: dateNow,
    mainEntityOfPage: `https://primundus.de/${slug}/`,
  });
}

function serviceSchema(city) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `24h-Pflege ${city}`,
    provider: { '@type': 'Organization', name: 'Primundus' },
    areaServed: { '@type': 'City', name: city },
  });
}

// ─── Page content templates ───────────────────────────────────────────────────

function pageContent(h1, slug, breadcrumbLabel) {
  const isRoot = !slug;
  const canonicalPath = isRoot ? '' : `${slug}/`;
  return `  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-16">
          {/* Breadcrumb */}
          ${!isRoot ? `<nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">${breadcrumbLabel}</span>
          </nav>` : ''}

          {/* H1 */}
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-6">
            ${h1}
          </h1>

          {/* Placeholder */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-[14px] text-amber-800 mb-8">
            Inhalt wird befüllt — Seite im Aufbau
          </div>

          {/* CTA Box */}
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
            <p className="text-[13px] text-[#8B8B8B] mt-3">
              Mo–Fr 9:00–18:00 Uhr · Ilka Wysocki
            </p>
          </div>
        </div>
      </div>
    </>
  )`;
}

// ─── File writers ─────────────────────────────────────────────────────────────

function writeFile(filePath, content) {
  const dir = dirname(filePath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, 'utf8');
}

function generateMoneyPage({ slug, title, desc, h1, type }) {
  const isHome = !slug;
  const canonicalUrl = isHome ? 'https://primundus.de/' : `https://primundus.de/${slug}/`;
  const fileName = isHome ? join(APP, 'page.tsx') : join(APP, slug, 'page.tsx');

  const localBusinessSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Primundus',
        url: 'https://primundus.de',
        logo: 'https://primundus.de/images/primundus_logo_header.webp',
        telephone: '+4989200000830',
        email: 'info@primundus.de',
        founder: { '@type': 'Person', name: 'Ilka Wysocki' },
        award: 'Testsieger DIE WELT — Größter deutscher 24h-Pflege Vergleichstest',
        foundingDate: '2004',
      },
      {
        '@type': 'LocalBusiness',
        name: 'Primundus 24h-Pflege',
        priceRange: 'ab 2.500 €/Monat',
        areaServed: 'DE',
      },
    ],
  });

  const faq = faqSchema();
  const breadcrumb = !isHome ? breadcrumbSchema(slug, h1) : '';

  const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title} | Primundus — 24h-Pflege',
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

const schemaMarkup = \`[\${JSON.stringify(${JSON.stringify(JSON.parse(localBusinessSchema))})}${!isHome ? `,${breadcrumb}` : ''},${faq}]\`

export default function Page() {
${pageContent(h1, slug, h1)}
}
`;

  writeFile(fileName, content);
}

function generateArtikelPage({ slug, h1, parent }) {
  const canonicalUrl = `https://primundus.de/${slug}/`;
  const fileName = join(APP, slug, 'page.tsx');
  const title = h1.replace(/\s*—.*/, '').trim();
  const desc = `${title} — ausführlicher Ratgeber von Primundus, dem Testsieger für 24h-Pflege in Deutschland. Jetzt informieren und kostenlos beraten lassen.`;

  const article = articleSchema(h1, slug);
  const breadcrumb = breadcrumbSchema(slug, title);
  const faq = faqSchema();

  const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title} | Primundus — 24h-Pflege',
  description: '${desc.substring(0, 160)}',
  alternates: {
    canonical: '${canonicalUrl}',
  },
  openGraph: {
    title: '${title} | Primundus',
    description: '${desc.substring(0, 160)}',
    url: '${canonicalUrl}',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = \`[${article},${breadcrumb},${faq}]\`

export default function Page() {
${pageContent(h1, slug, title)}
}
`;

  writeFile(fileName, content);
}

function generateToolPage({ slug, h1 }) {
  const canonicalUrl = `https://primundus.de/${slug}/`;
  const fileName = join(APP, slug, 'page.tsx');
  const title = h1.replace(/\s*—.*/, '').trim();
  const desc = `${title} — kostenlos & unverbindlich nutzen. Jetzt Ihren Pflegebedarf einschätzen und die passende 24h-Pflege finden.`;

  const breadcrumb = breadcrumbSchema(slug, title);
  const faq = faqSchema();

  const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title} | Primundus',
  description: '${desc.substring(0, 160)}',
  alternates: {
    canonical: '${canonicalUrl}',
  },
  openGraph: {
    title: '${title} | Primundus',
    description: '${desc.substring(0, 160)}',
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
            <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">${title}</span>
          </nav>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-6">
            ${h1}
          </h1>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-[14px] text-amber-800 mb-8">
            Tool wird implementiert — bald verfügbar
          </div>

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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/ratgeber/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">→ Ratgeber</a>
            <a href="/24-stunden-pflege/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">→ 24h-Pflege</a>
            <a href="/beratungsgespraech/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">→ Beratungsgespräch</a>
          </div>
        </div>
      </div>
    </>
  )
}
`;

  writeFile(fileName, content);
}

function generateRegionPage({ slug, city, isState }) {
  const canonicalUrl = `https://primundus.de/${slug}/`;
  const fileName = join(APP, slug, 'page.tsx');
  const h1 = `24h-Pflege ${city} — Betreuung zu Hause`;
  const title = `24h-Pflege ${city}`;
  const desc = `24-Stunden-Pflege in ${city} von Primundus — dem Testsieger. Rechtssicher, täglich kündbar, in 4–7 Tagen startklar. Kostenlose Beratung: 089 200 000 830.`;

  const service = serviceSchema(city);
  const breadcrumb = breadcrumbSchema(slug, title);
  const faq = faqSchema();

  const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title} | Primundus — Testsieger 24h-Pflege',
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

const schemaMarkup = \`[${service},${breadcrumb},${faq}]\`

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
            <a href="/regionen/" className="hover:text-[#8B7355] transition-colors">Regionen</a>
            <span>›</span>
            <span className="text-[#3D3D3D]">${city}</span>
          </nav>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-6">
            ${h1}
          </h1>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-[14px] text-amber-800 mb-8">
            Inhalt wird befüllt — Seite im Aufbau
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-8 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-2">
              Kostenlose Beratung für ${city}
            </p>
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-4">
              24h-Pflege in ${city} beauftragen
            </h2>
            <a
              href="tel:+4989200000830"
              className="inline-flex items-center gap-3 bg-[#8B7355] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#7D6E5D] transition-all duration-200"
            >
              089 200 000 830
            </a>
            <p className="text-[13px] text-[#8B8B8B] mt-3">Mo–Fr 9:00–18:00 Uhr · Ilka Wysocki</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/24-stunden-pflege/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">→ Was ist 24h-Pflege?</a>
            <a href="https://kostenrechner.primundus.de" target="_blank" rel="noopener" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">→ Kostenrechner</a>
            <a href="/kosten/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] transition-colors text-[14px] font-medium text-[#3D3D3D]">→ Kosten & Zuschüsse</a>
          </div>
        </div>
      </div>
    </>
  )
}
`;

  writeFile(fileName, content);
}

function generateHubPage({ slug, title, desc, h1, children }) {
  const canonicalUrl = `https://primundus.de/${slug}/`;
  const fileName = join(APP, slug, 'page.tsx');

  const breadcrumb = breadcrumbSchema(slug, title);
  const faq = faqSchema();

  const childLinks = children.length > 0
    ? `
          {/* Child article links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            ${children.map(c => `<a href="/${c}/" className="block p-4 bg-white border border-[#E5E3DF] rounded-xl hover:border-[#8B7355] hover:shadow-sm transition-all text-[14px] font-medium text-[#3D3D3D]">→ ${toTitle(c)}</a>`).join('\n            ')}
          </div>`
    : '';

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

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-[14px] text-amber-800 mb-8">
            Inhalt wird befüllt — Seite im Aufbau
          </div>
${childLinks}
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

  writeFile(fileName, content);
}

function generateTrustPage({ slug, h1 }) {
  const canonicalUrl = `https://primundus.de/${slug}/`;
  const fileName = join(APP, slug, 'page.tsx');
  const title = h1;

  const breadcrumb = breadcrumbSchema(slug, title);

  const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title} | Primundus',
  description: 'Primundus — 24-Stunden-Pflege mit über 20 Jahren Erfahrung. Testsieger DIE WELT.',
  alternates: {
    canonical: '${canonicalUrl}',
  },
}

const schemaMarkup = \`${breadcrumb}\`

export default function Page() {
${pageContent(h1, slug, title)}
}
`;

  writeFile(fileName, content);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

let count = 0;

console.log('Generating pages…');

moneyPages.forEach((p) => { generateMoneyPage(p); count++; });
hubs.forEach((p) => { generateHubPage(p); count++; });
artikel.forEach((p) => { generateArtikelPage(p); count++; });
toolPages.forEach((p) => { generateToolPage(p); count++; });
regionen.forEach((p) => { generateRegionPage(p); count++; });
trustPages.forEach((p) => { generateTrustPage(p); count++; });

console.log(`✓ Generated ${count} pages`);
console.log(`  Money pages: ${moneyPages.length}`);
console.log(`  Hub pages:   ${hubs.length}`);
console.log(`  Artikel:     ${artikel.length}`);
console.log(`  Tools:       ${toolPages.length}`);
console.log(`  Regionen:    ${regionen.length}`);
console.log(`  Trust:       ${trustPages.length}`);
