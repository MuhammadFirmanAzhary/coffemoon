/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode:['class'],
  theme: {
    extend: {
      colors:{
        x : "#52525b"
      },
    },
  },
  plugins: [require("daisyui")],
}

