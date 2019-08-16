<template>
  <Layout id="resume-page">
    <g-link slot="logo" to="/" :class="['link', 'pl-3', 'text-black']">
      &larr; Go Back
    </g-link>
    <div class="resume flex flex-wrap justify-between md:p-12 font-hairline">
      <h1 class="w-full md:w-2/3 flex-basis p-3 text-xl md:text-2xl leading-tight">{{ name }}</h1>
      <resume-address v-bind="address" />
      <div class="w-full md:w-2/3 max-w-4xl flex-basis p-6 md:mt-8">
        <h3 class="text-blue-500 uppercase text-lg mb-3">personal statement</h3>
        <p class="pt-3 font-thin">
          {{ statement.text }}
        </p>
      </div>
      <resume-education v-bind="education" />
      <div class="companies w-full md:w-2/3 p-6 max-w-4xl">
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
      <div class="w-full md:w-1/3 max-w-lg pt-6 px-3">
        <div class="pl-3 lg:pl-8 md:mt-8">
          <h3 class="text-blue-500 uppercase text-lg mb-3">web links</h3>
          <a v-for="link in links" :key="link.id" :href="link.url" class="block my-3">{{ link.url }}</a>
        </div>
        <div class="pl-3 lg:pl-8 md:mt-8">
          <h3 class="text-blue-500 uppercase text-lg mb-3">Open Source</h3>
          <ul>
            <resume-open-source v-for="repo in $page.repos.edges" :key="repo.node.id"  v-bind="repo.node" class="my-6"/>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
jobs: allCompanyJob (sortBy: "node.startDate" order: ASC) {
    totalCount
    edges {
      node {
        id
        path
        name
        website
        location
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
      id: { in: ["125383251", "187361149", "158930980"] }
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
import { value } from 'vue-function-api'
import addressData from '@/data/address.data.json'
import educationData from '@/data/education.data.json'
import socialLinks from '@/data/social-links.data.json'
import statementData from '@/data/statement.data.json'

import ResumeAddress from '@/components/resume/ResumeAddress.vue'
import ResumeEducation from '@/components/resume/ResumeEducation.vue'
import ResumeCompany from '@/components/resume/ResumeCompany.vue'
import ResumeRole from '@/components/resume/ResumeRole.vue'
import ResumeProject from '@/components/resume/ResumeProject.vue'
import ResumeOpenSource from '@/components/resume/ResumeOpenSource.vue'

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
    const address = value(addressData)
    const education = value(educationData)
    const statement = value(statementData)
    const links = value(socialLinks)
    const name = value('Tonio Hubilla')

    return {
      name,
      address,
      education,
      links,
      statement
    }
  }
}
</script>

<style scoped>
/deep/ a {
  @apply text-blue-700 underline;
}
</style>
