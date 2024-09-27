import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beyond: ['"Beyond"', 'sans-serif'],
        fireside: ['"Fireside"', 'sans-serif'] // Lägg till din font här
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'move-wheel': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(1rem)',
          },
        },
      },
      animation: {
        'move-wheel': 'move-wheel 1.3s linear infinite', // Definiera animationens namn och varaktighet
      },
     
    },
  },
  plugins: [],
};
export default config;
