/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  utilities: {
    '.smooth-scroll': {
      'scroll-behavior': 'smooth',
    },
  },
}

