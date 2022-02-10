module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tuppence: ['tuppence', 'serif'],
      },
      colors: {
        primary: '#faa73c',
        secondary: '#f5efb0',
      },
    },
  },
  variants: {
    borderColor: ['focus'],
    boxShadow: ['focus'],
  },
  plugins: [],
};
