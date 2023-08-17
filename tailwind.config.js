/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
        volkhov: ["Volkhov", "Times New Roman", "serif"],
        montserrat: ["Montserrat"],
      },
      colors: {
        gold: "#ffd700",
        darkblue: "#000426",
      },
    },
  },
  plugins: [],
};
