<template>
  <div class="lab-list px-4">
    <nav class="flex mt-3 pt-3">
      <g-link :to="path" class="text-lg font-hairline text-blue-300 border border-blue-300 p-8 hover:underline">
        {{ path | name | dekebab | capitalize }}
      </g-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['path'],
  filters: {
    name (string) {
      return string.replace(/\/lab\//, '')
    },
    dekebab (string) {
      return string.replace(/-/, ' ')
    },
    capitalize (string) {
      return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
    }
  }
}
</script>
