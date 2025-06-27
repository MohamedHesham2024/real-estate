/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#AF8255",
        secondary: "#FFFFFF",
        thread: "#F3F3F3",
        fontPrimary: "#AF8255",
        fontSecondary: "#7A7A7A",
        fontThread: "#7A7A7A",
        black: "#000000",
        white: "#FFFFFF",
        error: "#ef6b51",
     },
     fontFamily: {
        exo: ['"Exo"', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
};
