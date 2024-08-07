/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  theme: {
    colors: {
      light_sea_green: {
        DEFAULT: '#18b5b0',
        100: '#052423',
        200: '#094846',
        300: '#0e6c69',
        400: '#13908c',
        500: '#18b5b0',
        600: '#26e3dd',
        700: '#5deae5',
        800: '#93f1ee',
        900: '#c9f8f6',
      },
      dark_cyan: {
        DEFAULT: '#0f8a90',
        100: '#031b1d',
        200: '#063739',
        300: '#095256',
        400: '#0c6d72',
        500: '#0f8a90',
        600: '#16c6cf',
        700: '#40e2eb',
        800: '#80ecf2',
        900: '#bff5f8',
      },
      teal: {
        DEFAULT: '#0c7b85',
        100: '#02181a',
        200: '#053034',
        300: '#07484e',
        400: '#0a6169',
        500: '#0c7b85',
        600: '#12b7c6',
        700: '#35ddec',
        800: '#79e8f3',
        900: '#bcf4f9',
      },
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};

