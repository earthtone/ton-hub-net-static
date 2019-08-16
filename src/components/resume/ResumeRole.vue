<template>
  <div class="role my-6 lg:my-12">
    <h3 class="text-lg italic">{{ title }} {{ contract ? '(Contract)' : '' }}</h3>
    <p class="mb-4">{{ startDate | fullDate | capitalize }} - {{ endDate | fullDate | capitalize }}</p>
    <slot :projects="projects"></slot>
  </div>
</template>
<script>
import { fullDate } from '../../lib/date.helpers'
import { capitalize } from '../../lib/text.helpers'

export default {
  name: 'resume-role',
  props: [
    'title',
    'contract',
    'startDate',
    'endDate',
    'projects'
  ],
  filters: {
    fullDate,
    capitalize
  }
}
</script>
