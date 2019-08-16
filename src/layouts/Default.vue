<template>
  <main :class="['layout', 'font-sans']">
    <header :class="['flex', 'justify-between', 'pr-3', 'pt-3']">
      <slot name="logo">
        <span></span>
      </slot>
        <nav :class="['bg-white', 'text-black', 'border-black', 'border-solid', 'border', 'px-6', 'py-1']">
        <g-link
          v-for="link in navLinks"
          :key="link.text"
          :to="link.path"
          :class="['underline', 'font-light', 'hover:text-gray-500', 'mr-6']">
          {{ link.text | capitalize }}
        </g-link>
        <a href="https://github.com/earthtone" class="['underline', 'font-light', 'hover:text-gray-500']">Github</a>
      </nav>
    </header>
    <slot/>
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

export default {
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
