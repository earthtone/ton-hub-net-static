<template>
  <main class="app">
    <div class="island">
      <form
        class="parameter-container"
        @submit.prevent="makeIpsum">
        <label>
          number of paragraphs:
          <input
            v-model="minParaLength"
            type="number"
            min="1">
        </label>
        <label>
          maximum number of words per paragraph:
          <input
            v-model="maxWordLength"
            type="number">
        </label>
        <button @click="makeIpsum">Be seeing you</button>
      </form>
      <div
        class="ipsum-container"
        v-html="ipsumText"/>
    </div>
  </main>
</template>
<script>
import ipsum from '@earthtone/prisoner-ipsum'
export default {
  data () {
    return {
      minParaLength: 1,
      maxWordLength: 250,
      ipsumText: ''
    }
  },
  mounted () {
    this.makeIpsum()
  },
  methods: {
    makeIpsum () {
      this.ipsumText = ipsum(this.minParaLength, this.maxWordLength)
    }
  },
}
</script>

<style>
.island {
  display: grid;
  background: url("~@/assets/img/prisoner-bg.jpg");
  background-position: top center;
  background-size: cover;
  background-attachment: scroll;
  height: 100%;
  width: 100vw;
  @apply text-white;
}

.ipsum-container {
  @apply p-4;
}

@media ( min-width: 600px ) {
  .island {
    grid-template-columns: 2fr 3fr;
    grid-gap: 2rem;
    position: fixed;
  }

  .ipsum-container {
    grid-column-start: 2;
    overflow: scroll;
    order: 2;
  }
}

@media ( min-width: 900px) {
  .island {
    grid-template-columns: 2fr 3fr 2fr;
  }
}

.ipsum-container p{
  @apply my-8;
}
.parameter-container {
  @apply flex flex-col p-8;
  order: 1;
}
.parameter-container button, .parameter-container input {
  @apply border border-solid border-white p-4;
}

.parameter-container > * {
  @apply my-4;
}

.parameter-container label > *{
  @apply m-4;
}

.parameter-container button {
  @apply bg-white;
}
</style>
