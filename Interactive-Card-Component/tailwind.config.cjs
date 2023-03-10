/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '500px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1600px'
    },
    extend: {},
  },
  plugins: [],
}
