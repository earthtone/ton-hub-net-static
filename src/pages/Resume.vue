<template>
  <DefaultLayout id="resume-page">
    <g-link slot="logo" to="/" :class="['link', 'pl-3', 'text-black', 'mt-6']">
      &larr; Go Back
    </g-link>
    <div class="flex flex-wrap justify-between font-hairline resume md:p-12">
      <h1 class="w-full p-3 text-xl leading-tight md:w-2/3 flex-basis md:text-2xl">{{ name }}</h1>
      <resume-address v-bind="address" />
      <div class="w-full max-w-4xl p-6 md:w-2/3 flex-basis md:mt-8">
        <h3 class="mb-3 text-lg text-blue-500 uppercase">personal statement</h3>
        <article class="pt-3 font-thin" v-html="$page.statement.content"/>
      </div>
      <resume-education v-bind="education" />
      <div class="w-full max-w-4xl p-6 companies md:w-2/3">
        <resume-company v-for="job in $page.jobs.edges" v-bind="job.node"  :key="job.node.id">
          <template #default="{ role }">
            <resume-role v-bind="role">
              <template #default="{ projects }">
                <resume-project v-for="project in projects" :key="project.name" v-bind="project"/>
              </template>
            </resume-role>
          </template>
        </resume-company>
      </div>
      <div class="w-full max-w-lg px-3 pt-6 md:w-1/3">
        <div class="pl-3 lg:pl-8 md:mt-8">
          <h3 class="mb-3 text-lg text-blue-500 uppercase">web links</h3>
          <a v-for="link in links" :key="link.id" :href="link.url" class="block my-3">{{ link.url }}</a>
        </div>
        <div class="pl-3 lg:pl-8 md:mt-8">
          <h3 class="mb-3 text-lg text-blue-500 uppercase">Open Source</h3>
          <ul>
            <resume-open-source v-for="repo in $page.repos.edges" :key="repo.node.id"  v-bind="repo.node" class="my-6"/>
          </ul>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<page-query>
query {
  statement: personalStatement (id: "b2e9bce2f8d9b59b2e5c359a3cae9742") {
    content
  }

  jobs: allCompanyJob (sortBy: "startDate" order: DESC) {
    totalCount
    edges {
      node {
        id
        path
        name
        website
        location
        startDate
        endDate
        positions {
          title
          contract
          startDate
          endDate
          projects {
            name
            technology
            tasks
          }
        }
      }
    }
  }

  repos: allOssProject (
    filter: {
      # hardcode specific repos to showcase
      id: { in: ["125383251", "187361149", "158930980", "203898230"] }
    }
    sortBy: "node.updated_at"
    order: DESC
  ) {
    edges {
      node {
        full_name
        name
        private
        html_url
        description
        updated_at
        id
        archived
        owner {
          id
          login
        }
      }
    }
  }
}
</page-query>

<script>
import ResumeAddress from '@/components/resume/ResumeAddress.vue'
import ResumeEducation from '@/components/resume/ResumeEducation.vue'
import ResumeCompany from '@/components/resume/ResumeCompany.vue'
import ResumeRole from '@/components/resume/ResumeRole.vue'
import ResumeProject from '@/components/resume/ResumeProject.vue'
import ResumeOpenSource from '@/components/resume/ResumeOpenSource.vue'

import { usePersonalData } from '@/lib/resume.setup'

export default {
  components: {
    ResumeEducation,
    ResumeAddress,
    ResumeCompany,
    ResumeRole,
    ResumeProject,
    ResumeOpenSource
  },
  setup () {
    const details = usePersonalData()
    return {
      ...details
    }
  }
}
</script>

<style scoped>
/deep/ a {
  @apply text-blue-700 underline;
}
/deep/ article p {
  @apply mb-6;
}
</style>
