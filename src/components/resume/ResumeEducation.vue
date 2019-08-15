<template functional>
  <div class="w-full md:w-1/3 max-w-lg pt-6 px-3 md:mt-8">
    <h3 class="pl-3 lg:pl-8 text-blue-500 text-lg uppercase font-hairline mb-3">Education</h3>
    <div class="flex flex-col">
      <h2 class="text-lg font-hairline pl-3 lg:pl-8">{{ props.institution }}</h2>
      <h3 class="text-md font-hairline pl-3 lg:pl-8">{{ props.degree }}</h3>
      <small class="font-thin mt-3 pl-3 lg:pl-8">{{ props.location }}</small>
      <small class="font-thin pl-3 lg:pl-8">{{ props.duration }}</small>
      <p class="font-thin mt-3 pl-3 lg:pl-8 max-w-sm">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resume-education',
  props: ['institution', 'degree', 'location', 'duration', 'description']
}
</script>
