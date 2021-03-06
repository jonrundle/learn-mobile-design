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
        black85: 'rgba(14,14,14,0.85)',
        darkGrey: '#0E0E0E',
        lightGrey: '#F6F6F6'
      },
      borderRadius: {
        'lg': '0.75rem',
        '4xl': '2rem',
        '5xl': '4rem',
      },
      boxShadow: {
        '3xl': '0px 8px 40px rgba(0, 0, 0, 0.16)',
        '3xld': '0px 8px 40px rgba(0, 0, 0, 0.32)',
        '4xl': '0px 12px 40px rgba(0, 0, 0, 0.32)',
        '4xld': '0px 12px 40px rgba(0, 0, 0, 0.48)',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.17, 0.85, 0.32, 1.4)',
      },
      inset: {
        '26': '6.5rem',
      }
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
