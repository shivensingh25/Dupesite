import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--cream)",
        foreground: "var(--text-primary)",
        ivory: {
          DEFAULT: '#FAF8F5',
          50: '#ffffff',
          100: '#fbfaf8'
        },
        blush: {
          DEFAULT: '#F7E6EA',
          300: '#f9eff1',
          500: '#f5dde2'
        },
        lavender: {
          DEFAULT: '#EDE5F8',
          300: '#f3eefb'
        },
        sage: {
          DEFAULT: '#d4e3d5'
        },
        muted: {
          DEFAULT: '#9b9b9b'
        },
        'dusty-rose': {
          DEFAULT: '#D7A8A1'
        },
        'neutral-smoke': {
          DEFAULT: '#F3F3F3'
        }
      },
    },
  },
  plugins: [],
};
export default config;
