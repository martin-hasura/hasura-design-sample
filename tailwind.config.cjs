const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const lineClamp = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        'brandBlue': {
          100: '#8BCCF1',
          200: '#64BBEC',
          300: '#3DAAE7',
          400: '#1699E2',
          500: '#148ACB',
          600: '#127AB5',
          700: '#0F6B9E',
          800: '#0D5C88',
          900: '#0B4D71',
        },
        'brandTeal': '#1eb4d4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [forms, typography, lineClamp],
}

module.exports = config
