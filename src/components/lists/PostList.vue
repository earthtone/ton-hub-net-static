<template>
  <div class="post-list px-4">
    <h1 class="title text-lg md:text-xl">
      {{ post.title }}
    </h1>
    <p class="description" v-html="post.description"/>
    <nav class="flex mt-3 pt-3 border-t border-gray-400">
      <p class="date mr-6" v-html="post.date" />
      <p class="mr-6">
        <b>{{post.timeToRead}} min read</b> &nbsp;
      </p>
      <g-link :to="post.path" class="read underline hover:text-gray-500">Read More...</g-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
