<template>
  <div class="island h-full min-h-screen text-gray-100 flex flex-col md:flex-row pt-16 px-4 md:inset-0 md:absolute">
    <div class="flex flex-col md:flex-row max-w-6xl mx-auto pt-10">
      <form
        class="parameter-container order-1 ml-6 mb-6"
        @submit.prevent="makeIpsum">
        <label for="paraLength" class="flex flex-col my-3 text-gray-300">
          <input
            id="paraLength"
            class="text-gray-900 p-3 w-full"
            v-model="paraLength"
            type="number"
            min="1">
          number of paragraphs
        </label>
        <label for="wordLength" class="flex flex-col mb-3 text-gray-300">
          <input
            id="sentenceLength"
            class="text-gray-900 p-3 w-full"
            v-model="sentenceLength"
            type="number">
          number of sentences per paragraph
        </label>
        <button class="bg-gray-100 text-gray-900 p-3 w-full" type="submit">Be seeing you</button>
      </form>
      <ipsum-provider :paragraphs="paragraphs" :sentences="sentences">
        <template v-slot="{text, loading}">
          <article v-if="!loading" class="overflow-scroll bg-transparent max-w-xl">
            <p v-for="(paragraph, index) in text" :key="index" class="mb-6">
              {{ paragraph }}
            </p>
          </article>
          <article v-else>
            <h3 class="text-2xl">Be seing you...</h3>
          </article>
        </template>
      </ipsum-provider>
    </div>
  </div>
</template>
<script>
import IpsumProvider from '@/components/data-providers/PrisonerIpsumProvider.vue'

const normalize = s =>
  typeof s === 'string'
    ? parseInt(s.trim())
    : parseInt(s)

export default {
  components: {
    IpsumProvider
  },
  data () {
    return {
      paraLength: 1,
      sentenceLength: 5,
      paragraphs: 1,
      sentences: 5
    }
  },
  methods: {
    makeIpsum () {
      this.paragraphs = normalize(this.paraLength)
      this.sentences = normalize(this.sentenceLength)
    }
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
