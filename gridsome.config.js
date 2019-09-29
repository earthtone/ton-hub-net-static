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
  siteUrl: 'https://ton-hub.net',
  titleTemplate: '%s',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'src/blog/**/*.md',
      typeName: 'BlogPost',
      route: '/blog/:fileInfo__name',
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
  }, {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'src/components/lab/**/*.vue',
      typeName: 'CodeLab',
      route: '/lab/:fileInfo__name'
    }
  }, {
    use: 'gridsome-plugin-feed',
    options: {
      contentTypes: ['BlogPost'],
      feedOptions: {
        title: 'Six Impossible Things',
        description: 'Musings and ramblings'
      },
      rss: {
        enabled: true,
        output: '/feed.xml'
      },
      atom: {
        enabled: true,
        output: '/feed.atom'
      },
      json: {
        enabled: true,
        output: '/feed.json'
      }
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
