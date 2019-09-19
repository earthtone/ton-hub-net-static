import test from 'ava'
import { mount } from '@vue/test-utils'
import ResumeEducation from '../ResumeEducation.vue'

import education from '../../../data/education.data.json'
test('ResumeEducation renders as expected', assert => {
  const wrapper = mount(ResumeEducation, {
    propsData: { ...education }
  })

  assert.snapshot(wrapper.html())
})
