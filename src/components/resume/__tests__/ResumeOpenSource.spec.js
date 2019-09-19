import test from 'ava'
import { mount } from '@vue/test-utils'
import ResumeOpenSource from '../ResumeOpenSource.vue'

test('ResumeOpenSource renders as expected', assert => {
  const wrapper = mount(ResumeOpenSource, {
    propsData: {
      full_name: 'earthtone/ton-hub-net-static',
      name: 'ton-hub-net-static',
      private: false,
      html_url: 'https://github.com/earthtone/ton-hub-net-static',
      description: 'Source Repository for Personal Website',
      updated_at: '2019-08-15T13:25:13Z',
      id: '202075279',
      archived: false,
      owner: {
        id: 9401180,
        login: 'earthtone'
      }
    }
  })
  assert.snapshot(wrapper.html())
})
