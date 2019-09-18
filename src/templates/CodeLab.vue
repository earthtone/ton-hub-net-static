<template>
  <Layout>
    <g-link slot="logo" to="/lab" class="link px-3 py-2 text-black mt-6 z-10 bg-white">
      &larr; Go Back
    </g-link>
    <section class="lab">
      <component :is="$page.lab.fileInfo.name"></component>
    </section>
  </Layout>
</template>
<page-query>
query CodeLab ($path: String!) {
   lab: codeLab (path: $path) {
    id
    fileInfo {
      name
      path
      directory
      extension
    }
  }
}
</page-query>
<script>
import Components from '@/components/lab'
export default {
  components: {
    ...Components
  }
}
</script>
