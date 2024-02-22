import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#151929',
        secondary: '#ea580c',
        neutral: '#f5f5f5',
        success: '#14532d',
        warning: '#f97316',
        headtext: '#164e63',
        textcolor: '#3f4c7c',
        texthead: '#1d243c'
      }
    },

  },
  plugins: [],
};
export default config;
