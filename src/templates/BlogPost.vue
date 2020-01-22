<template>
  <Layout class="px-6 py-3">
    <g-link slot="logo" to="/blog" class="link">  &larr; Go Back</g-link>
    <div class="mx-auto post-title lg:max-w-2xl">
      <h1 class="text-xl">{{$page.post.title}}</h1>
      <h6 class="pl-3 mb-3 uppercase post-date font-hariline"> {{$page.post.date}} | {{$page.post.timeToRead}} min read</h6>
    </div>
    <div class="mx-auto post-content md:max-w-2xl lg:px-12">
      <article v-html="$page.post.content" class="md:font-serif" />
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style scoped>
/deep/ .post-content article p {
  @apply py-3;
}

/deep/ .post-content article h1 {
  @apply text-xl leading-none;
}

/deep/ .post-content article h2 {
  @apply text-lg font-sans;
}

/deep/ .post-content article h3 {
  @apply uppercase font-sans font-thin;
}

/deep/ .post-content a {
  @apply underline;
}

/deep/ .post-content hr {
  @apply my-8;
}

/deep/ .post-content blockquote {
  @apply font-mono py-8 px-6 my-6 border-l border-gray-900 bg-gray-300;
}

/deep/ .post-content p > img {
  @apply w-full;
}

/deep/ .post-content iframe {
  @apply mt-6 mb-12;
}
</style>
