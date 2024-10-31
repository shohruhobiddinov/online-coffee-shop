/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        md: "700px",
        lg: "950px",
        xl: "1200px"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        irishGrover: ["Irish Grover", "system-ui"],
        lexend: ["Lexend", "sans-serif"],
        praise: ["Praise", "cursive"],
        bills: ["Stick No Bills", "sans-serif"]
      }
    },
  },
  plugins: [],
}