/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        x : "#52525b"
      },
    },
  },
  plugins: [require("daisyui")],
}

