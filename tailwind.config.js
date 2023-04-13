/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        'brand-blue-1': '#117CA5',
        'brand-blue-2': '#DEEEF5',
        'brand-orange-1': '#F18824',
        'brand-orange-2': '#FCDDC4'
      },
      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
}

