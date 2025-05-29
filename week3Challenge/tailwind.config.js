/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink:'#FA5558',
        lightBlue:'#B6E0FA',
        lightYellow:'#FAF77A',
        gray:'#ABAA91',
        lightBrown:'#805757',
      },
      fontFamily:{
        titles:['Mono2poser','sans-serif'],
        paragraphs:['Go','sans-serif']
      }
    },
  },
  plugins: [],
}

