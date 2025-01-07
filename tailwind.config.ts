import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ba4270",
        linkWaterWhite: "#fbfcfe",
        sanJuanBlue: "#36536b",
        mirageBlue: "#1b262f",
        charmPink: "#da6d97",
        sanJualBlueLight: "#6c8294",
      },
      fontFamily: {
        primary: "var(--font-dm-serif-display)",
        secondary: "var(--font-pubic-sans)",
      },
    },
  },
  plugins: [],
} satisfies Config;
