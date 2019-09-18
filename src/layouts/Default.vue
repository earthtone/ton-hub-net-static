<template>
  <main :class="['layout', 'font-sans', 'text-gray-900']">
    <header :class="['flex', 'justify-between', 'px-3']">
      <slot name="logo">
        <span></span>
      </slot>
      <nav-list
        class="hidden lg:block bg-white border-4 border-gray-900 underline z-10 px-3 py-2 my-3 lg:mr-3"
        :internalLinks="navLinks"
        :externalLinks="socialLinks" />
    </header>
    <slot/>
    <footer v-if="$route.name === 'home'" class="h-screen lg:hidden p-24 bg-gray-900 text-white">
      <nav-list
        class="flex flex-col h-full justify-between text-lg underline"
        :internalLinks="navLinks"
        :externalLinks="socialLinks"/>
    </footer>
  </main>
</template>
<static-query>
  query {
    pages: allPage {
      path
    }
  }
</static-query>
<script>
import { makeNavData } from '../lib/navigation.helpers'
import { capitalize } from '../lib/text.helpers'
import NavList from '@/components/lists/NavList.vue'

export default {
  components: {
    NavList
  },
  data () {
    return {
      socialLinks: [{
        path: 'https://github.com/earthtone',
        text: 'Github'
      }, {
        path: 'https://www.linkedin.com/in/tonio-hubilla-113840a3/',
        text: 'LinkedIn'
      }]
    }
  },
  computed: {
    navLinks () {
      return makeNavData(this.$static.pages)
    }
  },
  filters: {
    capitalize
  }
}
</script>
<style src="../main.css" />
