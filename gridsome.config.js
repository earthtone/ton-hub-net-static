// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind()
]

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss())
}

module.exports = {
  siteName: 'Tonio Hubilla',
  titleTemplate: '%s',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: ['@gridsome/remark-prismjs']
    } 
  },
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'blog/**/*.md',
      typeName: 'BlogPost'
    }
  }],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins 
      } 
    } 
  }
}
