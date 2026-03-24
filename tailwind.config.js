/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyan: {
          DEFAULT: '#00e5d4',
          dim: '#00b8a9',
          dark: '#007a71',
        },
        dark: {
          DEFAULT: '#060a0f',
          2: '#0c1219',
          3: '#111920',
          4: '#162028',
          5: '#1c2a35',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'line-scan': 'lineScan 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        lineScan: {
          '0%, 100%': { opacity: '0', transform: 'scaleY(0.2) translateY(-50%)' },
          '50%': { opacity: '1', transform: 'scaleY(1) translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'cyan-sm': '0 0 12px rgba(0,229,212,0.2)',
        'cyan-md': '0 0 28px rgba(0,229,212,0.35)',
        'cyan-lg': '0 0 56px rgba(0,229,212,0.4)',
      },
    },
  },
  plugins: [],
}
