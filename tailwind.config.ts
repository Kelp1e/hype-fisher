import { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        kemco: ["Kemco Pixel", "sans-serif"],
        "de-pixel-klein": ["DePixelKlein", "sans-serif"],
      },
      colors: {
        yellow: {
          DEFAULT: "#FBE92D",
          light: "#FFD40D",
          dark: "#D6870C",
        },
        orange: {
          DEFAULT: "#FE8137",
          light: "#F8BD52",
          dark: "#C34138",
        },
        green: {
          dark: "#024F1D",
          DEFAULT: "#54B846",
        },
      },
    },
  },
  plugins: [],
} as Config
