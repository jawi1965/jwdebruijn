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
            'headings': ['Montserrat'],
            'copy': ['Lato'],
        },
        colors:{
            'dark-blue': '#31708E',
            'slate-blue': '#5085A5',
            'light-blue': '#8FC1E3',
            'orange': '#F79E02',
            'dark-green': '#687864',
        },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
