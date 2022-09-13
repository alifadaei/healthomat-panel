/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "425px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      dana: "dana",
      iransans: "Iransans",
      helvetica: "Helvetica",
      poppins: "Poppins",
      cookie: "'Cookie', cursive",
    },
    extend: {
      colors: {
        back: "#f9f9f9",
        primary: {
          100: "#DCF1F9",
          200: "#85CEEA",
          500: "#51B8E1",
          DEFAULT: "#2EAADC",
        },
        accent: {
          DEFAULT: "#ff7370",
          800: "#ff6a67",
          500: "#ff9b9a",
          300: "#ffbdbb",
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
