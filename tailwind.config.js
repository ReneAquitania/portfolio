/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myblue': '#0038ff',
        'mygray': '#1c1c1c',
      },
      fontFamily: {
        'sapiens': ['Sapiens', 'sans'],
        'aleo': ['Aleo', 'serif'],
      },
    },
  },
  plugins: [],
}
