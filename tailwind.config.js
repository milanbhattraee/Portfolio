/** @type {import('tailwindcss').Config} */

import {fontFamily} from "tailwindcss/defaultTheme"
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans], // default sans-serif font with Inter
        montserrat: ["Montserrat", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
        roboto: ["Roboto", ...fontFamily.sans],
        dmSans: ["DM Sans", ...fontFamily.sans],
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0px 0px rgba(167,139,250,0.0)" },
          "50%": { boxShadow: "0 0 34px 6px rgba(167,139,250,0.35)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.6s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 25px 70px -20px rgba(139,92,246,0.45)",
      },
    },
  },
  plugins: [],
};
