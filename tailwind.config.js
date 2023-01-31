/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      overpass: ["Overpass"]
    },
    extend: {
      boxShadow: {
        input: "0px 10px 20px rgba(240, 240, 240, 0.25)"
      },
      dropShadow: {
        '3xl': '(0px 10px 20px #F0F0F0)',
      },
      colors: {
        primary_red: '#FF6262',
        primary_yellow: '#FFB800',
        primary_green: '#05FF00',
        bd: '#D9D9D9',
      },
    },
  },
  plugins: [],
}
