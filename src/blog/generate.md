---
title: "Generation Nuxt"
description: "Blogging with MarkdownIt & Nuxt"
date: 2018-12-11
---

> **NOTE**: This blog post has been copied over from a previous version of the site and is no longer applicable to this specific iteration, which is now build with [Gridsome](https://gridsome.org) and hosted on Amazon Web Services.

When I first started playing around with Nuxt, I couldn't fully appreciate it. Vue JS is already pretty powerful on its own. Why do you need a framework on top of a framework?

I can conceptually appreciate server side rendering, but what did it have to do with me? I'm a front-end dev. I work with the front-end, not the server. It seemed like a neat parlor trick dev-ops people whip out to more easily automate building out their application's front-end without involving another developer.

Similarly, when I first came across the [JAMstack](https://www.youtube.com/watch?v=uWTMEDEPw8c), I panicked and thought the rest of the world had finally figured out that serving 60MB JavaScript files wasn't actually all that efficient, and we were all going to either go back to writing large HTML files or be forced to rely on a CMS to build even the most straight-forward website.

I'm not a back-end/full-stack/dev-ops person. I don't like to mess about with servers, and I hate paying for them even more. At the time I was writing up a large multi-page document to share with other members of an organization that was based on the other side of the globe. I wanted to write markdown files, but I wanted to output HTML and style it on the fly. I didn't want to duplicate wrapper code to get the routing to work properly, and I wanted to automate as much of this as possible.

Like any good developer, I tried to [code my own solution](https://github.com/earthtone/grayson-generator), and while that was a fun project to take on, I don't think it was a solution that scaled to fit the needs of any use case other than my own.

Like Vue, Nuxt has an amazing [community](https://github.com/nuxt-community) and eco-system of plug-ins and loaders that help ease a lot of the pain that developers encounter. Why go through the trouble of solving common problems? Someone more clever than you has probably already solved it.

In fact, while digging around I came across [one](https://github.com/nuxt-community/blog-module) that seemed to do exactly what I was looking for. Unfortunately, when I tried it out with the latest version of Nuxt, I couldn't get it to work. Fortunately, I didn't seem to be [the only person struggling](https://github.com/nuxt-community/blog-module/issues/3) to solve this problem.

The solution I went with is largely taken from the example code above provided by [Brian Kimball](https://github.com/bskimball), and relies on [a lot](https://github.com/nuxt-community/modules/tree/master/packages/markdownit) [of](https://www.npmjs.com/package/slugify) [the same](https://www.npmjs.com/package/front-matter) [modules](https://nodejs.org/api/fs.html). I just organized things to fit my own project's needs, and put my own little spin on things.

---

The first thing I want to do is create the `/blog` directory in the root of my project. This is where I'll store all the markdown files I create for each blog post. Each file will have its filename transformed into a unique "slug" so that it can be easily referenced by URL.

Nuxt provides a [configurable generate property](https://nuxtjs.org/api/configuration-generate) that I can customize to do pretty much anything I want when the `nuxt generate` command is run. In my case, I want to generate an individual URL endpoint, with a unique "slug", for each post in the `/blog` directory. I can do this by assigning the `generate.routes` property to a function in `nuxt.config.js`:

```js
module.exports = {
  ...
  generate: {
    routes: function () {
      return require('fs').readdirSync('blog').map(function (file) {
        return '/blog/' + require('slugify')(file.replace(/\.md$/, ''))
      })
    }
  }
}
```

Because Nuxt uses Node to generate HTML, I have access to the file system and Node core APIs like `require`. I can use the `fs` module to create an array of all the filenames that is mappe to a new array with the `/blog/` path prepended to the slug I generate from each filename.

The next thing I want to do is actually set up my project so Nuxt will generate the `/blog` route for me by creating a `/blog` *sub*directory within the `/pages` directory. Inside this subdirectory, I can stick a template that I can reuse for each post.

Nuxt gets a bit magical here and will actually generate routes for your site in a way similar to how the function above works, except it looks for Vue components and subdirectories containing Vue components, which it then maps to the subdirectories it generates on build. Normally, Nuxt looks at the filenames of each Vue component inside the `/pages` directory and generates the route to match that filename, but in this case, I can overwrite that functionality by prepending the Vue component with an `_` character. Within the component's template itself, I can declare the markup for a post or a list of `nuxt-link`s.

```html
<template>
  <section class="blog-container">
    <article
      v-if="post"
      v-html="postFile"/>
    <ul v-else>
      <li
        v-for="post in posts"
        :key="post.slug">
        <nuxt-link
          :to="post.url">
          {{ post.filename }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
```

Where am I getting `post` and `postFile` from? The Vuex store!

However, before I get to defining things in the store I want to define the loading functionality in its own module. I have a similar helper module that generates dynamic routes based on the contents of another directory, but with slightly different rules. So rather then clutter up my store action, I split them into their own seperate modules.

```js
import fm from 'front-matter'
import slugify from 'slugify'

export function loadPosts (fs) {
  const files = fs.readdirSync(`./blog`)
  const posts = files.map(file => {
    let post = fm(fs.readFileSync(`./blog/${file}`, 'utf8'))
    post.filename = file
    post.created = fs.statSync(`./blog/${file}`).ctime
    post.slug = slugify(file.replace(/\.md$/, ''), {
      lower: true
    })

    post.url = `/blog/${post.slug}`
    return post
  })

  return posts
}
```

Like the `generate.routes` function I'm creating an array of strings from all the filenames that exist in the `/blog` directory, and mapping that to another array containing a slug, for each individual file, but the outputed array is an array of objects, which contain a bunch of other useful metadata that the Vue component can use.

Finally, because I'm centralizing all my application data in my Vuex store, I need to initialize it properly. I can initialize state with empty values, and then use the [nuxtServerInit](https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action) action, provided by Nuxt, to load all of my data into state so my application can access it later.

```js
const state = {
  ...
  posts: [],
  post: {},
  ...
}

const actions = {
  nuxtServerInit ({ dispatch, commit }) {
    if (process.server) {
      const fs = require('fs')
      const posts = loadPosts(fs)
      ...
      dispatch('loadPosts', posts)
      ...
    }
  },
  loadPosts ({ commit }, posts) {
    const sorted = posts.sort((a, b) => {
      if (a === b) {
        return 0
      }
      return (a.created > b.created) ? 1 : -1
    })

    commit('updatePosts', sorted)
  },
  loadPost ({ commit }, slug) {
    const post = this.state.posts.find((post) => {
      return post.slug === slug
    })

    commit('updatePost', post)
  }
}
```

The `nuxtServerInit` action is a bit funky if you're used to using Vuex in a regular Vue app. In order to ensure that it has access to all the proper Node APIs and modules, you have to wrap all your init functionality inside the `if (process.server)` evaluation. Any modules, like the `loadPosts` module I use to isolate the filesystem operations that require Node core modules, need to have those dependencies passed in/injected at the time of execution. Isomorphic dependnecies, like [slugify](https://www.npmjs.com/package/slugify) and [front-matter](https://www.npmjs.com/package/front-matter) don't seem to have this issue.

Similar to `nuxtServerInit`, Nuxt provides a `fetch` "hook" available within components, to execute asynchronous operations as part of its lifecycle. I can use it in the template component to dispatch a Vuex action that passes along a given posts "slug" from a URL param. This then mutates the Vuex store's `post` property in state to be accessed by the component.

```js
<script>
export default {
  fetch ({ store, params }) {
    store.dispatch('loadPost', params.post)
  },
  computed: {
    post () {
      return this.$store.getters.getPost
    },
    postFile () {
      if (this.post && this.post.filename) {
        return require(`~/blog/${this.post.filename}`)
      }
    },
    posts () {
      return this.$store.getters.getPosts
    }
  }
}
</script>
```

If a "slug" is not present in the URL path -- i.e. `/blog` -- the Vuex store's `post` property is a falsy value, and therefore the component's `postFile` computed property is also a falsy value. Otherwise, `postFile` uses Node to `require` the contents of the markdown file in the root `/blog` directory, which it renders using the `v-html` directive.

---

### Whew!

# 😅

Honestly, the hardest part in figuring all of this out was understanding how Nuxt handles asynchronicity with its custom methods. Once I understood what `nuxtServerInit` did in Vuex, and how to use the `fetch` hook inside the component, the rest of the hard work was down to feeling comfortable with `fs` operations and map functions.

My favorite part of all of this is that I only have to do the work once. The Vuex functionality works, not only for any files I add to the root `/blog` directory, but as I mentioned before, any other files in any other directories I want to map over in my `nuxtServerInit` action. And because my blog template is just a Vue component, its easy to style and customize, and refactor in the future.

I found this solution gave me the developer experience I wanted. It leverages technology I'm already comfortable with like Vue and Node core. I was able to easily add the markdown-it plugins and Node modulesI wanted with no pain, and adding custom functionality to my configuration file was a breeze.

