/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode:['ary '],
  theme: {
    extend: {
      colors:{
        x : "#52525b"
      },
    },
  },
  plugins: [require("daisyui")],
}

