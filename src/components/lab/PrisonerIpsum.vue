<template>
  <div class="flex flex-col h-full min-h-screen px-4 pt-16 text-gray-100 island md:flex-row md:inset-0 md:absolute">
    <div class="flex flex-col max-w-6xl mx-auto md:pt-10 md:flex-row">
      <form
        class="order-1 md:mb-6 md:ml-6 parameter-container"
        @submit.prevent="getData">
        <label for="paraLength" class="flex flex-col my-3 text-gray-300">
          <input
            id="paraLength"
            class="w-full p-3 text-gray-900"
            v-model="paragraphs"
            type="number"
            min="1">
          number of paragraphs
        </label>
        <label for="wordLength" class="flex flex-col mb-3 text-gray-300">
          <input
            id="sentenceLength"
            class="w-full p-3 text-gray-900"
            v-model="sentences"
            type="number">
          number of sentences per paragraph
        </label>
        <button
          class="w-full p-3 text-gray-900 bg-gray-100"
          type="submit">
          Be seeing you
        </button>
        <div class="flex justify-apart">
          <a href="https://github.com/earthtone/prisoner-ipsum" class="m-6 underline">
            Module Code
          </a>
          <a href="https://github.com/earthtone/prisoner-ipsum-api" class="m-6 underline">
            API Code
          </a>
        </div>
      </form>
      <article v-if="!loading" class="max-w-xl overflow-y-scroll bg-transparent">
        <p v-for="(paragraph, index) in text" :key="index" class="mb-6">
          {{ paragraph }}
        </p>
      </article>
      <article v-else>
        <h3 class="text-2xl">Be seing you...</h3>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true,
      paragraphs: 1,
      sentences: 5,
      text: ''
    }
  },
  computed: {
    url () {
      return `https://mj7cp02g0a.execute-api.us-east-1.amazonaws.com/dev/?p=${this.paragraphs}&s=${this.sentences}`
    }
  },
  methods: {
    async getData () {
      console.log('getting data...')
      this.loading = true

      try {
        const req = await fetch(this.url)
        const res = await req.json()
        this.text = res.data
        console.log('got em', this.text)
        this.loading = false
      } catch (err) {
        console.error(err)
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
.island {
  background: url("~@/assets/img/prisoner-bg.jpg");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat !important;
}
</style>
