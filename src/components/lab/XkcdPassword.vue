<template>
  <main class="app">
    <div class="password-container">
      <h1>{{ password }}</h1>
      <button @click="makePassword">Generate</button>
      <a href="https://github.com/earthtone/xkcd-password-generator" class="hover:underline mt-24">Code</a>
    </div>
  </main>
</template>

<script>
import xkcdPassword from '@earthtone/xkcd-password'

export default {
  data () {
    return {
      password: ''
    }
  },
  mounted () {
    this.makePassword()
  },
  methods: {
    makePassword () {
      this.password = xkcdPassword().join(' ')
    }
  }
}
</script>

<style>
.password-container {
  @apply w-screen h-screen flex flex-col justify-center items-center;
  /* background: url("~@/assets/img/eva-bg.JPG") center center/cover fixed; */
}

.password-container h1 {
  @apply text-3xl font-hairline my-8;
  text-align: center;
}

.password-container button {
  @apply bg-white p-4 rounded-full;
}

.password-container button:hover {
  @apply bg-gray-500;
}

.password-container .password-text:hover {
  @apply underline;
}

.password-container .password-text {
  cursor: pointer;
}
</style>
