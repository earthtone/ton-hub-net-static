<template>
  <Layout>
    <section class="flex flex-col md:flex-row">
      <lab-list v-for="lab in $page.allCodeLab.edges" :key="lab.id" v-bind="lab.node" />
    </section>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allCodeLab {
    totalCount
    edges {
      node {
        id
        path
        fileInfo {
          name
          path
          directory
          extension
        }
      }
    }
  }
}
</page-query>
<script>
import LabList from '@/components/lists/LabList.vue'

export default {
  components: {
    LabList
  }
}
</script>
