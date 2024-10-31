// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "green-1": "#ABEFCF",
        "green-2": "#EDFCF5",
        "green-3": "#18B17C",
        "green-4": "#097354",
        "green-5": "#3DCC96",
        "green-6": "#0C543F",
        "green-7": "#094B38",
      }
    },
  },
  plugins: [require('daisyui')],
}
