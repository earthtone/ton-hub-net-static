module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '6rem',
        '3xl': '9rem',
        '4xl': '12rem',
        '5xl': '15em',
        '6xl': '18rem'
      }
    }
  },
  variants: {},
  plugins: []
}
