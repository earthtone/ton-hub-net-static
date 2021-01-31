// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')

module.exports = {
  siteName: 'Tonio Hubilla',
  siteUrl: 'https://ton-hub.net',
  titleTemplate: '%s',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'src/data/personal-statement.md',
      typeName: 'PersonalStatement',
      remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        plugins: ['@gridsome/remark-prismjs']
      }
    }
  }, {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'src/data/cv/*.json',
      typeName: 'CompanyJob',
      json: {}
    }
  }],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()]
      }
    }
  }
}
