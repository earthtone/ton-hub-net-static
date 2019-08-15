import test from 'ava'
import { mount } from '@vue/test-utils'
import ResumeRole from '../ResumeRole.vue'

import poc from '../../../data/cv/poc.data.json'
test('ResumeRole renders as expected', assert => {
  const wrapper = mount(ResumeRole, {
    propsData: { ...poc.positions[0] }
  })

  assert.snapshot(wrapper.html())
})
