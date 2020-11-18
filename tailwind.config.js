module.exports = {
  purge: false /* MANUALLY CONFIGURED PURGECSS IN POSTCSS.CONFIG */,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif", '"Helvetica Neue"', "Arial"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',
      gray: {
        100: '#f6f6f6',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cccccc',
        500: '#a0aec0',
        600: '#777777',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e86d6d',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      }
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fill: ["responsive", "hover", "focus"]
  },
  plugins: []
};
