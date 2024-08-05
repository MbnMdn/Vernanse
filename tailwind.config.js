/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainGreen: '#334746',
        darkGreen: '#243231',
        secondary: '#9C5D4F',
        tertiary: '#BEA6A0',
        tertiaryLight: '#ece4e3',
        ternaryDarker: '#5f5350',
        text: '#E5E7EB',
        lightGrey: '#757575',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      width: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
