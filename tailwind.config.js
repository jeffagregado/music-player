module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '10em',
        xl: '15em',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          light: 'rgba(239, 68, 68)',
          DEFAULT: 'rgba(239, 68, 68)',
          dark: '#0d3aa3',
        },
        secondary: '#ff552b',
        mute: '#929191',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
