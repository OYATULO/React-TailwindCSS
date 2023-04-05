/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors:{
        primary: "#123",
        secondary: "#444",
        dimWhite: "#666",
        dimBlule: "#888",
      },
      fontFamily:{
        poppins:  ["Poppins","Sans-serif"],
      }
    },
    screens:{
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },

  plugins: [],
}
