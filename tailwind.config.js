const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        xl: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          bluedark: '#001530',
          bluelight: '#2D9AE8',
          red: '#DA3233',
        },
        primary: '#FF7A00',
        secondary: '#F6B221',
      },
      fontFamily: {
        sans: ['"Barlow"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
};
