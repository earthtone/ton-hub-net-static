<template>
  <nav>
    <g-link
      v-for="link in internalLinks"
      :key="link.text"
      :to="link.path"
      class="underline, font-light, hover:text-gray-500, mr-6">
      {{ link.text | capitalize }}
    </g-link>
    <a
      v-for="link in externalLinks"
      :key="link.text"
      :href="link.path"
      class="underline, font-light, hover:text-gray-500, mr-6">
      {{ link.text | capitalize }}
    </a>
  </nav>
</template>
<script>
import { capitalize } from '@/lib/text.helpers'

export default {
  props: {
    internalLinks: {
      type: Array,
      default: () => []
    },
    externalLinks: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    capitalize
  }
}
</script>
