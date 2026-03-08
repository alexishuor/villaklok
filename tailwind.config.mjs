/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B16',
          900: '#0A1628',
          800: '#0D1520',
          700: '#131E2E',
          600: '#1E2D42',
          500: '#2A3F5C',
          400: '#3B5278',
        },
        solar: {
          amber:   '#F59E0B',
          'amber-light': '#FCD34D',
          'amber-dark':  '#D97706',
          orange:  '#F97316',
          green:   '#10B981',
          'green-dark':  '#059669',
          'green-deep':  '#0D2A1E',
          'green-muted': 'rgba(16,185,129,0.12)',
          'amber-muted': 'rgba(245,158,11,0.12)',
          'amber-glow':  'rgba(245,158,11,0.15)',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm:   ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'amber-glow':    '0 0 30px rgba(245,158,11,0.30), 0 4px 20px rgba(245,158,11,0.20)',
        'amber-glow-lg': '0 0 50px rgba(245,158,11,0.40), 0 8px 40px rgba(245,158,11,0.30)',
        'green-glow':    '0 0 25px rgba(16,185,129,0.25)',
        'card':          '0 4px 24px rgba(0,0,0,0.25)',
        'card-hover':    '0 8px 40px rgba(0,0,0,0.40)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #060B16 0%, #0A1628 50%, #0D1F12 100%)',
        'amber-gradient':'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
        'card-gradient': 'linear-gradient(180deg, #0D1520 0%, #0A1628 100%)',
        'cpa-gradient':  'linear-gradient(135deg, #0A1628 0%, #0D1F12 100%)',
      },
      animation: {
        'ping-dot':  'pingDot 2s cubic-bezier(0,0,0.2,1) infinite',
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'spin-slow': 'spin 22s linear infinite',
        'pulse-cta': 'pulseCta 2.8s ease-in-out infinite',
        'count-up':  'countUp 0.3s ease-out',
      },
      keyframes: {
        pingDot: {
          '75%,100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseCta: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(245,158,11,0.5)' },
          '50%':     { boxShadow: '0 0 0 18px rgba(245,158,11,0)' },
        },
      },
    },
  },
  plugins: [],
};
