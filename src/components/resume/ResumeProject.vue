<template>
  <div class="project">
    <h3 class="text-md uppercase mt-6">{{ name }}</h3>
    <div class="my-3">
      <span class="underline">Technology:</span>
      <span class="text-sm pl-2">{{ technology.join(', ') }}</span>
    </div>
    <ul class="list-disc px-6 lg:px-12">
      <li v-for="task in tasks" :key="task" class="my-2">{{ task }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'resume-project',
  props: [
    'name',
    'technology',
    'tasks'
  ]
}
</script>
