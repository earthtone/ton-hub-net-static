import test from 'ava'
import { mount } from '@vue/test-utils'
import ResumeProject from '../ResumeProject.vue'

import poc from '../../../data/cv/poc.data.json'
test('ResumeProject renders as expected', assert => {
  const wrapper = mount(ResumeProject, {
    propsData: { ...poc.positions[0].projects[0] }
  })

  assert.snapshot(wrapper.html())
})
