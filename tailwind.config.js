/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '320px', 'max': '425px' },
      ...defaultTheme.screens,
    },
    extend: {},
    colors: {
      "purple-text": "#DF453F",
    },
  },
  plugins: [require('daisyui')]
}
