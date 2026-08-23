import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['32px', { lineHeight: '1.25' }],
        'h1-lg': ['42px', { lineHeight: '1.25' }],
        h2: ['24px', { lineHeight: '1.375' }],
        'h2-lg': ['30px', { lineHeight: '1.375' }],
        lead: ['17px', { lineHeight: '1.625' }],
        'lead-lg': ['19px', { lineHeight: '1.625' }],
        copy: ['15px', { lineHeight: '1.625' }],
        small: ['13px', { lineHeight: '1.375' }],
        meta: ['11px', { lineHeight: '1.4' }],
      },
      maxWidth: {
        narrow: '720px',
        article: '860px',
        wide: '1100px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        pm: {
          ink: '#1C1C1C',
          body: '#2E2E2E',
          mute: '#8B8B8B',
          taupe: { DEFAULT: '#8B7355', light: '#A89279', deep: '#7D6E5D', ink: '#6B5A44' },
          paper: '#F8F7F5',
          shell: '#F2EDE6',
          line: { DEFAULT: '#E5E3DF', soft: '#F0EDE8' },
          green: { DEFAULT: '#3D7A5C', deep: '#2A5C3F' },
          mint: '#E8F5EE',
          coral: { DEFAULT: '#E76F63', deep: '#D45F53', tint: '#FDF0EE', ink: '#8B3E2F' },
          cocoa: '#3D2314',
          gold: '#D4A843',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
