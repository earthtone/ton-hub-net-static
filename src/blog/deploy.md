---
title: "Deployment"
description: "Deploying a project to Neocities with Node"
date: 2018-12-28
---

> **NOTE**: This blog post has been copied over from a previous version of the site and is no longer applicable to this specific iteration, which is now build with [Gridsome](https://gridsome.org) and hosted on Amazon Web Services.

When typing in the above URL, you may have noticed that this amazing website is being hosted by the fine folks at [Neocities](https://neocities.org/). If you don't know about Neocities, it's a dead simple platform for hosting static web content as is all the rage. You can create an account for free, have 1GB of space on the web for you to do what you please with, and they even provide a helpful dashboard for you to manage your site. For more tech-savy individuals they even provide a [REST API](https://neocities.org/api) and a [CLI tool](https://neocities.org/cli).

Given that this page is built with [Nuxt's generate property](https://nuxtjs.org/api/configuration-generate/), I wanted a way to automate deployments as part of my build process. Fortunately, Neocities provides a [Node module](https://www.npmjs.com/package/neocities) as an alternative to the Ruby based CLI, so I can deploy my project using a Node script.

Initially, I stumbled with how to upload the subdirectories my generate script created, until I came across [this tool](https://github.com/gburnett/neocities-upload) [@gburnett](https://github.com/gburnett) created for a similar use case. Delving into their script I discovered [recursive-readdir](https://www.npmjs.com/package/recursive-readdir) was the solution to my problem. With that, writing the deployment script became pretty straight forward.

```js
require('dotenv').config()

const Neocities = require('neocities')
const ora = require('ora')
const readdir = require('recursive-readdir')

function update (filePath) {
  const api = new Neocities(process.env.NEOCITIES_USERNAME, process.env.NEOCITIES_PASSWORD)
  const exclude = ['.*', 'LICENSES']
  const spinner = ora('Uploading files').start()

  readdir(filePath, exclude, function (err, files) {
    if (err) throw err

    files = files.map(file => {
      return {
        name: file.replace(filePath + '/', ''),
        path: file
      }
    })

    api.upload(files, response => {
      if (response.result === 'success') {
        spinner.succeed(response.message)
      } else {
        spinner.fail(response.message)
      }
    })
  })
}

update('dist')
```

Using the above script, I am now able to completely automate the generation and deployment of my static site using Node scripts, which I can now execute everytime I [commit a change to my repo using githooks](https://github.com/typicode/husky).
