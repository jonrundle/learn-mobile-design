module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        white96: 'rgba(255,255,255,0.96)',
        black90: 'rgba(14,14,14,0.90)',
        darkGrey: '#0E0E0E',
        lightGrey: '#F6F6F6'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '4rem',
      },
      boxShadow: {
        '3xl': '0px 8px 40px rgba(0, 0, 0, 0.16)',
        '3xld': '0px 8px 40px rgba(0, 0, 0, 0.32)',
        '4xl': '0px 12px 40px rgba(0, 0, 0, 0.32)',
        '4xld': '0px 12px 40px rgba(0, 0, 0, 0.48)',
      },
    },
  },
  fontFamily: {
    sans: ["-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Ubuntu", "sans-serif"],
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    }
  },
  plugins: [],
}
