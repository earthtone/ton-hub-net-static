<template>
  <Layout class="px-3">
    <header class="header mx-auto lg:max-w-3xl my-12">
      <h1 class="font-serif text-xl md:text-2xl leading-tight">
        {{ title }}
      </h1>
      <h4 class="leading-none mb-12 lg:pl-3 md:text-lg">
        {{ subtitle }}
      </h4>
    </header>
    <section class="posts mx-auto lg:max-w-2xl">
      <PostList v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" :post="edge.node" class="my-8" />
    </section>
  </Layout>
</template>

<script>
import PostList from '@/components/PostList'
export default {
  components: {
    PostList
  },
  data () {
    return {
      title: 'Six Impossible Things',
      subtitle: 'Before Breakfast'
    }
  },
  metaInfo: {
    subtitle: 'A simple blog'
  }
}
</script>

<page-query>
query {
  metaData {
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
