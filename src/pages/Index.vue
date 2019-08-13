<template>
  <Layout id="home-page" class="text-red-300 h-screen">
    <transition enter-active-class="animated fadeIn">
      <div v-if="display" class="px-6 max-w-3 mx-auto md:px-12 flex flex-col justify-center h-full -mt-12">
        <p class="text-2xl md:text-3xl lg:text-5xl font-hairline font-serif leading-tight">{{ name }}</p>
        <p class="md:text-md font-hairline self-end">{{title}}</p>
      </div>
    </transition>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      name: 'Tonio Hubilla',
      title: 'JavaScript Developer',
      display: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.display = true
    }, 500)
  }
}
</script>

<style scoped>
#app {
  background-image: url("~@/assets/img/DSC01414.png");
  background-position: bottom center;
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
