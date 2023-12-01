/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: theme => theme('colors'),

      textColor: {
        'primary': '#c1ad42',
        'secondary': '#a05a2c',
      },

      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#a05a2c',
        'secondary': '#c1ad42', 
       }),
    },
  },
  plugins: [],
}
