/** @type {import('tailwindcss').Config} */
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
        footerclr:'rgb(107 114 128)'
      },
      fontfamily
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

