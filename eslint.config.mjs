// ESLint 9 (Flat Config) nach der Vorlage aus der Next.js-16-Dokumentation. `next lint` gibt es seit Next 16 nicht mehr;
// geprüft wird mit `npm run lint` (= `eslint .`). Der Build prüft ESLint nicht.
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Bewusste Ausnahmen, festgelegt beim ersten Lauf am 29.09.2026 (vorher lief Lint im Projekt nie).
  // Je Regel: Zahl der Treffer beim ersten Lauf und der Grund.
  {
    rules: {
      // 81: Anführungszeichen und Apostrophe im Fließtext. React gibt sie unverändert aus, Maskieren änderte nur den Quelltext.
      'react/no-unescaped-entities': 'off',
      // 44: interne Links als <a>, also volle Seitenladung. <Link> würde sichtbare Links vorladen (auf /regionen über 200
      // Ortsseiten). Das wäre eine Verhaltensänderung und gehört nicht zum Framework-Upgrade.
      '@next/next/no-html-link-for-pages': 'off',
      // 15: Bilder bewusst als <img> in festen WebP-Größen, ohne Next-Bildoptimierung (`images.unoptimized`).
      '@next/next/no-img-element': 'off',
      // 2: lokale Variable `module` (Begutachtungsmodule) innerhalb einer Funktion, kein Zugriff auf das CommonJS-Objekt.
      '@next/next/no-assign-module-variable': 'off',
      // 8: neue Regeln aus eslint-plugin-react-hooks 7 (Vorbereitung auf den React Compiler), u. a. im Cookie-Hinweis.
      // Sichtbar als Warnung; ein Umbau wäre eine Verhaltensänderung.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
    },
  },
  {
    // 20: JSX-Elemente in Datenlisten für Tabelle, Liste und Werte. Die Bausteine in components/vorlage/Ratgeber.tsx
    // setzen den Key beim Rendern (<tr key>, <td key>, <li key>, <div key>).
    files: [
      'app/24-stunden-pflege-kostenuebernahme/page.tsx',
      'app/foerderungen-nach-bundesland/page.tsx',
      'app/kombinationsleistung-pflege/page.tsx',
    ],
    rules: { 'react/jsx-key': 'off' },
  },
  {
    // 3: leere Props-Interfaces im Originalcode der shadcn-Bausteine.
    files: ['components/ui/**'],
    rules: { '@typescript-eslint/no-empty-object-type': 'off' },
  },
  {
    // 1: require() für das Tailwind-Plugin in der Konfigurationsdatei (läuft in Node).
    files: ['*.config.{js,mjs,ts}'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
