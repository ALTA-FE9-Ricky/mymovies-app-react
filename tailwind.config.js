/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "alta-primary" : "#19345E",
        "grey" : "#3F617E",
        "neon" : "#5bccf6",
        "neon-black" : "#3f8eac",
        "Yellow" : "#fcde67",
        "hitam" : "#030e12",
        "Yellow-dark" : "#bda800"
      }
    },
  },
  plugins: [],
}
