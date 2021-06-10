module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        white96: 'rgba(255,255,255,0.96)',
        darkGrey: '#232323',
        blue: '#4377E3',
        blueLight: '#1BABF2',
        red: '#FA564A',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '6rem',
      },
      boxShadow: {
        '3xl': '0px 8px 40px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  fontFamily: {
    sans: ['-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'],
  },
  variants: {},
  plugins: [],
}
