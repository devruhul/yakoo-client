/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "purple-text": "#DF453F",
    },
  },
  plugins: [require('daisyui')]
}
