module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
        fontFamily :{       
            'mono' : ['"Roboto Mono"'],
            'headings': ['Merriweather'],
            'copy': ['Lato'],
        },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
