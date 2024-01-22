/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        Spring: ['Spring', 'sans']
      },
      colors: {
        dark: '#161616',
        light: '#f2f2f2',
        primary: '#0c4012',
        darky: '#1F2937',
        darkModePrimary: '#00B39E',
        nemo: '#F77300'
      },
      rotate: {
        30: '30deg',
        60: '60deg',
        90: '90deg',
        180: '180deg'
      }
    },
    screens: {
      '2xl': { max: '1600px' },
      // => @media(max-width: 1600px)
      xl: { max: '1279px' },
      // => @media(max-width: 1279px)
      lg: { max: '1023px' },
      // => @media(max-width: 1023px)
      md: { max: '767px' },
      // => @media(max-width: 767px)
      sm: { max: '639px' },
      // => @media(max-width: 639)
      xs: { max: '479px' }
      // => @media(max-width: 479px)
    }
  },
  plugins: [require('tailwindcss-3d')({ legacy: true })]
};
