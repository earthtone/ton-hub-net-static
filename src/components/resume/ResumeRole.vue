<template>
  <div class="role my-6 lg:my-12">
    <h3 class="text-lg italic">{{ title }} {{ contract ? '(Contract)' : '' }}</h3>
    <p class="mb-4">{{ startDate | fullDate | uppercase }} - {{ endDate | fullDate | uppercase }}</p>
    <slot :projects="projects"></slot>
  </div>
</template>
<script>
import months from '@/data/months.data.json'
const getFullMonth = date => months[date.getMonth()]
const getFullYear = date => date.getFullYear()

export default {
  name: 'resume-role',
  props: [
    'title',
    'contract',
    'startDate',
    'endDate',
    'projects'
  ],
  data () {
    return {
      months
    }
  },
  filters: {
    fullDate (string) {
      const date = new Date(string)
      return `${getFullMonth(date)} ${getFullYear(date)}`
    },
    uppercase (string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }
  }
}
</script>
