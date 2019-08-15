import test from 'ava'
import { mount } from '@vue/test-utils'
import ResumeAddress from '../ResumeAddress.vue'

import address from '../../../data/address.data.json'
test('ResumeAddress renders as expected', assert => {
  const wrapper = mount(ResumeAddress, {
    propsData: { ...address }
  })

  assert.snapshot(wrapper.html())
})
