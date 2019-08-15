<template>
  <li>
    <h4 class="text-md">{{name | dekebab | uppercaseEach}}</h4>
    <a :href="html_url">{{ html_url }}</a>
    <p>{{ description }}</p>
  </li>
</template>
<script>
export default {
  name: 'resume-open-source',
  props: [
    'name',
    'html_url',
    'description'
  ],
  filters: {
    dekebab (string) {
      return string.replace(/-/g, ' ')
    },
    uppercaseEach (string) {
      return string
        .split(' ')
        .map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
        .join(' ')
    }
  }
}
</script>
