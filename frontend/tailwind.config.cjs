/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      inset:{
        '7':'28px'
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif;"],
        montserrat: ["Montserrat", "sans-serif;"],
      },
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 8s infinite",
        arrowRight:"arrowRight 1s infinite",
        arrowPoint:"arrowRight 2s"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px,20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px,20px) scale(0.9)",
          },
          "66%": {
            transform: "translate(20px,-40px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
        arrowRight: {
          "0%": {
            transform: "translate(0px,0px) scale(1) z-index(0)",
          },
          "50%": {
            transform: "translate(5px,0px) scale(1.01)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1) z-index(0)",
          },
        },
      },
    },
  },
  plugins: [
]};
