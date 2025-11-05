/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'next-art': ['"NEXT ART"', 'sans-serif'],
        'nunito': ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
