<template>
  <Layout id="blog-page" class="px-3">
    <header class="mx-auto my-12 header lg:max-w-3xl">
      <h1 class="font-serif text-xl leading-tight md:text-2xl">
        {{ title }}
      </h1>
      <h4 class="mb-12 leading-none lg:pl-3 md:text-lg">
        {{ subtitle }}
      </h4>
    </header>
    <section class="mx-auto posts lg:max-w-2xl">
      <PostList
        v-for="edge in $page.allBlogPost.edges"
        :key="edge.node.id"
        :post="edge.node"
        class="my-8" />
    </section>
  </Layout>
</template>

<script>
import { ref } from '@vue/composition-api'
import PostList from '@/components/lists/PostList'
export default {
  components: {
    PostList
  },
  metaInfo: {
    description: 'A simple blog'
  },
  setup () {
    const title = ref('Six Impossible Things')
    const subtitle = ref('Before Breakfast')
    return { title, subtitle }
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allBlogPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }

  }
}
</page-query>
