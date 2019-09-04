<template functional>
  <section :id="props.id" class="panel w-full h-full flex justify-start p-0">
    <slot></slot>
  </section>
</template>
<style scoped>
.panel {
  /* @apply min-h-screen w-screen max-w-full h-full flex justify-start p-0; */
  background-position: bottom center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;
}
</style>
