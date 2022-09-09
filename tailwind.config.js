/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": 'Poppins',
        "roboto": 'Roboto',
        "raj": 'Rajdhani',
      },
      colors: {
        "primary": "#FFB703",
        "dark":"#111",
      }
    },
  },
  plugins: [],
};
