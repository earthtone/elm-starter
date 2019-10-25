const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
  tailwind()
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(purgecss({
    content: ['index.html', './**/*.elm']
  }))
}

module.exports = { plugins }
