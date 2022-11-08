/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { min: "320px", max: "439px" },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      "purple-color": "#5119ea",
      "footer-bg": "rgb(196 181 253)",
    },
  },
  plugins: [require("daisyui")],
};
