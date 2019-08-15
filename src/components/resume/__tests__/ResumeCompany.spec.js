import test from 'ava'
import { mount } from '@vue/test-utils'
import ResumeCompany from '../ResumeCompany.vue'

import phau from '../../../data/cv/phau.data.json'
test('ResumeCompany renders as expected', assert => {
  const wrapper = mount(ResumeCompany, {
    propsData: { ...phau }
  })

  assert.snapshot(wrapper.html())
})
