<template functional>
  <div class="company">
    <h2 class="text-xl md:inline-block leading-none">{{ props.name }}</h2>
    <a :href="props.website" class="text-md md:inline-block md:pl-3">{{ props.website }}</a>
    <h3 class="text-lg my-4">{{props.location}}</h3>
    <slot v-for="role in props.positions" :role="role"></slot>
  </div>
</template>

<script>
export default {
  name: 'resume-company',
  props: [
    'name',
    'website',
    'location',
    'positions'
  ]
}
</script>
