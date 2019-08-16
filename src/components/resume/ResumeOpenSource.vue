<template>
  <li>
    <h4 class="text-md">{{name | dekebab | capitalizeEach}}</h4>
    <a :href="html_url">{{ html_url }}</a>
    <p>{{ description }}</p>
  </li>
</template>
<script>
import { dekebab, capitalizeEach } from '../../lib/text.helpers'
export default {
  name: 'resume-open-source',
  props: [
    'name',
    'html_url',
    'description'
  ],
  filters: {
    dekebab,
    capitalizeEach
  }
}
</script>
