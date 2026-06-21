import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#C46245',
        'accent-hover': '#A04530',
        deep: '#1B3B36',
        'bg-main': '#FAFAFA',
        'bg-soft': '#F4F1EB',
        'bg-dark': '#1C1C1C',
        'text-main': '#020617',
        'text-secondary': '#64748B',
        'text-tertiary': '#94A3B8',
        'border-main': '#E2E8F0',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
