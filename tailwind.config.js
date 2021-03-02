const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs' : '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
     
    },
    extend: {
      borderWidth : {
        6 : '6px',
      },
      colors: {
        'cyan' : colors.cyan,
        'emerald' : colors.emerald,
        'teal' : colors.teal,
      },
      inset : {
        '17' : '68px',
        '26' : '104px',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
