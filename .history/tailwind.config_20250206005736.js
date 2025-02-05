/** @type {import('tailwindcss').Config} */
import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

const {heroui} = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeHighlight: 'rgb(242 151 36)',
        footerclr:'rgb(107 114 128)',
        greadiaetto: '#c90519',
        gradientfrom:'#F29724'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], 
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

