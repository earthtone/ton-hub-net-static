<template>
  <main class="app">
    <section class="lab-container">
      <h1>Lab</h1>
      <nuxt-link
        v-for="experiment in experiments"
        :key="experiment.slug"
        :to="experiment.url">
        {{ experiment.slug }}
      </nuxt-link>
    </section>
  </main>
</template>

<script>
</script>

<style>
.lab-container {
  @apply w-screen h-screen flex flex-col justify-center items-center;
}

.lab-container h1 {
  @apply text-5xl font-hairline underline my-8;
}

.lab-container a {
  @apply text-3xl text-gray-500 no-underline;
}

.lab-container a:hover {
  @apply text-5xl text-gray-800;
}
</style>
