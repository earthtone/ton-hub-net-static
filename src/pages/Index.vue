<template>
  <Layout id="home-page" class="text-red-300 h-screen">
    <transition enter-active-class="animated fadeIn">
      <div v-if="display" class="px-6 max-w-3 mx-auto md:px-12 flex flex-col justify-center h-full -mt-12">
        <p class="text-2xl md:text-3xl lg:text-5xl font-hairline font-serif leading-none">{{ name }}</p>
        <p class="title-text md:text-md font-hairline self-end">{{title}}</p>
      </div>
    </transition>
  </Layout>
</template>

<script>
import { value, onMounted } from 'vue-function-api'

export default {
  setup () {
    const name = value('Tonio Hubilla')
    const title = value('Javascript Developer')
    const display = value(false)

    onMounted(() => {
      setTimeout(() => {
        display.value = true
      }, 500)
    })

    return {
      name,
      title,
      display
    }
  }
}
</script>

<style scoped>
/*
  Augment tailwindcss for more fine-grained
  control and native CSS animations
 */

#app {
  background-image: url("~@/assets/img/DSC01414.png");
  background-position: bottom center;
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.title-text {
  transition: transform 1500ms ease-in-out;
}

.title-text:hover {
  transform: rotate(10deg);
}
</style>
