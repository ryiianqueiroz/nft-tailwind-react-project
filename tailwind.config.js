/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': {'max': '425px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '320px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}

