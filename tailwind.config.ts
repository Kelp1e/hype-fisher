import { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    cursor: {
      default: "url('/icons/cursor-default.svg'), default",
      pointer: "url('/icons/cursor-pointer.svg'), pointer",
    },
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
      animation: {
        "flying-x": "fly-x 2s steps(4, end) infinite",
        "flying-y": "fly-y 2s steps(4, end) infinite",
      },
      keyframes: {
        "fly-x": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-4rem)" },
          "100%": { transform: "translateX(0)" },
        },
        "fly-y": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} as Config
